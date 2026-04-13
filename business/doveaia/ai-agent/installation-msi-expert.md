# Installation Stack RAG — MSI EdgeXpert-MS-C931 (GB10 Blackwell)

## Accès machine

| | Valeur |
|---|---|
| **Hostname** | `edgexpert-a827` |
| **IP locale** | `192.168.1.18` |
| **OS** | Ubuntu 24.04 (aarch64) |
| **GPU** | NVIDIA GB10 Blackwell (SM_121), 128 Go mémoire unifiée |
| **Driver** | 580.126.09 |
| **CUDA** | 13.0 |

```sh
# Connexion SSH (par IP = plus rapide)
ssh doveaia@192.168.1.18

# Ou via mDNS (Avahi/Bonjour, plus lent)
ssh doveaia@edgexpert-a827.local
```

> **Note** : le `.local` fonctionne grâce au **mDNS** (Avahi sur Ubuntu, Bonjour sur macOS).
> Pas de serveur DNS nécessaire — c'est du multicast peer-to-peer sur le réseau local (port 5353 UDP).
> La résolution `.local` ajoute quelques secondes → préférer l'IP directe.

---

## Estimation mémoire des modèles

### Formule

```
Mémoire (Go) ≈ Nombre de paramètres × Taille par paramètre (octets) + overhead
```

| Quantification | Octets par paramètre | Exemple 32B | Exemple 70B |
|---------------|---------------------|-------------|-------------|
| FP32 | 4 | 128 Go | 280 Go |
| BF16/FP16 | 2 | 64 Go | 140 Go |
| FP8 | 1 | 32 Go | 70 Go |
| NVFP4/INT4 | 0.5 | 16 Go | 35 Go |

### Overhead à ajouter (~3-10 Go)

- **KV cache** : dépend de `max-model-len` et du nombre de requêtes concurrentes (~2-10 Go)
- **Activation memory** : ~1-2 Go
- **CUDA/runtime** : ~1-2 Go

### Modèles MoE (Mixture of Experts)

Les poids **complets** sont chargés en mémoire, mais seuls les experts actifs sont utilisés par requête.
- **Mémoire occupée** = taille totale (ex: Nemotron 120B × 0.5 = ~60 Go)
- **Vitesse d'inférence** = proportionnelle aux paramètres actifs (ex: 12B → rapide)

### Modèles de la stack

| Modèle | Params | Quant | Mémoire estimée | Mémoire réelle (logs vLLM) |
|--------|--------|-------|-----------------|---------------------------|
| Qwen3-32B-NVFP4 | 32B | NVFP4 | ~16 Go + overhead | 19.42 Go |
| Llama-3.3-70B-NVFP4 | 70B | NVFP4 | ~35 Go + overhead | **39.88 Go** (chargement: 275s) |
| Nemotron-3-Super-120B-NVFP4 | 120B (12B actifs) | NVFP4 | ~60 Go + overhead | A mesurer |
| Phi-4-reasoning-plus-NVFP4 | 14B | NVFP4 | ~7 Go + overhead | A mesurer |
| Qwen3-Embedding-0.6B | 0.6B | BF16 | ~1.2 Go | 4.24 Go (avec KV cache) |
| bge-reranker-v2-m3 (TEI) | 0.6B | BF16 | ~1.2 Go | A mesurer |

### Vérifier en pratique

```sh
# Mémoire réelle après chargement (dans les logs vLLM)
docker logs vllm-qwen 2>&1 | grep "Model loading took"
# → "Model loading took 19.42 GiB memory"

# Mémoire GPU en temps réel
docker exec vllm-qwen nvidia-smi
```

### Budget mémoire DGX Spark (128 Go unifiée)

```
128 Go total
 - ~20 Go  LLM (Qwen3-32B)
 -  ~5 Go  Embedding + Reranker
 -  ~5 Go  ParadeDB + Dify + OS
 = ~98 Go  disponibles pour KV cache, batch, et autres services
```

Avec `gpu-memory-utilization: 0.60` → vLLM utilise max 77 Go, laissant 51 Go pour l'OS et les autres services.

### Allocation mémoire réelle de vLLM

vLLM pré-alloue **toute la mémoire autorisée** par `gpu-memory-utilization` au démarrage :

```
Mémoire totale allouée = gpu-memory-utilization × 128 Go ≈ 77 Go
  = Poids du modèle + KV cache pré-alloué (pour les requêtes concurrentes)
```

Tous les modèles LLM utilisent donc ~77 Go dans `nvidia-smi`, quelle que soit leur taille.
La différence c'est le **KV cache restant** après chargement du modèle :

| Modèle | Poids | KV cache | nvidia-smi total | Concurrence (8k tokens) |
|--------|-------|----------|-----------------|------------------------|
| **Qwen3-32B** | 20 Go | 57 Go | ~75 Go | **~51 requêtes simultanées** |
| Phi-4 Reasoning | 7 Go | 70 Go | ~77 Go | ~65+ requêtes simultanées |
| Llama 70B | 39.88 Go | 30.48 Go | ~75 Go | **24.38 requêtes simultanées** |
| Nemotron 120B | 78 Go | ~0 Go | ~78 Go | ~1-2 requêtes simultanées |

> Chiffres confirmés par les logs vLLM :
> - Qwen3-32B : `Maximum concurrency for 8,192 tokens per request: 51.54x`
> - Llama 70B : `Maximum concurrency for 8,192 tokens per request: 24.38x`

Plus le modèle est petit, plus le KV cache est grand, plus tu peux servir de requêtes en parallèle.
C'est un avantage majeur de Qwen3-32B en production multi-utilisateurs.

### Impact du KV cache sur la production

Le KV cache stocke les "états intermédiaires" de chaque requête en cours.
Sans KV cache libre, les requêtes s'empilent et les utilisateurs attendent.

```
Qwen3-32B  : ████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 20 Go modèle
               ████████████████████████████████████████████████████████ 57 Go KV cache
               → 51 requêtes en parallèle → fluide pour 50 utilisateurs

Llama 70B  : ████████████████████████████████████████░░░░░░░░░░ 40 Go modèle
               ████████████████████████████████ 30 Go KV cache
               → 24 requêtes en parallèle → OK pour un cabinet (~20 utilisateurs)

Nemotron   : ██████████████████████████████████████████████████ 78 Go modèle
             120B          (quasi pas de KV cache libre)
               → 1-2 requêtes en parallèle → usage solo uniquement
```

**Conséquences d'un KV cache insuffisant :**
- Peu de requêtes simultanées → les utilisateurs attendent en file
- Pas de mémoire conversationnelle → chaque message est traité indépendamment
- Latence qui augmente avec le nombre d'utilisateurs connectés

### Comparatif des LLM disponibles (NGC 26.03)

| Modèle | Params | Actifs | Quant | RAM modèle | RAM totale (nvidia-smi) | Contexte max | Concurrence (8k) | Vitesse | Profile |
|--------|--------|--------|-------|-----------|------------------------|-------------|-------------------|---------|---------|
| **Qwen3-32B-NVFP4** | 32B | 32B (dense) | NVFP4 | **~20 Go** | **75.5 Go** | 32 768 tokens | **~51 req** | ~10 tok/s | `qwen` |
| **Llama-3.3-70B-NVFP4** | 70B | 70B (dense) | NVFP4 | **39.88 Go** | **74.8 Go** | 128 000 tokens | **24.38 req** | ~4-8 tok/s | `llama` |
| **Phi-4-Reasoning-Plus-NVFP4** | 14B | 14B (dense) | NVFP4 | **~7 Go** | ~75 Go | 32 768 tokens | ~65+ req | ~20-30 tok/s | `phi` |
| **Nemotron-3-Super-120B-NVFP4** | 120B | 12B (MoE) | NVFP4 | **~78 Go** | **78.1 Go** | 4 096 tokens | ~10-15 req | ~15-25 tok/s | `nemotron` |
| Gemma-4-31B-IT-NVFP4 | 31B | 31B (dense) | NVFP4 | ~16 Go | ? | 128 000 tokens | ? | ? | ⚠️ NGC 26.04+ |
| Mistral-Small-3.1-24B | 24B | 24B (dense) | Base | ~48 Go | ? | 128 000 tokens | ? | ? | ⚠️ Non testé |

> **Note contexte** : `max-model-len` est configuré à 8192 dans le compose pour tous les modèles.
> Le contexte max indique la capacité native du modèle — on peut augmenter `max-model-len`
> jusqu'à cette limite, au prix d'une concurrence réduite (plus de KV cache par requête).
>
> **1 token ≈ 0.75 mot** en français. 8192 tokens ≈ 6000 mots ≈ ~10 pages de document.

**Recommandation par usage :**

| Usage | Meilleur choix | Pourquoi |
|-------|---------------|----------|
| **Chat général FR** | Qwen3-32B | Multilingue, bon équilibre qualité/vitesse, 20 Go |
| **RAG documents FR** | Qwen3-32B | Rapide, précis, léger |
| **RAG juridique** | Qwen3-32B ou Llama 70B | Voir analyse ci-dessous |
| **Qualité maximale** | Llama 70B | 70B dense, meilleure compréhension, mais lent et 40 Go |
| **Code / raisonnement** | Phi-4 Reasoning | Spécialisé, très rapide, seulement 7 Go |
| **Analyse d'images** | Phi-4 Multimodal | Seul modèle vision (nécessite `--trust-remote-code`) |
| **Gros modèle rapide** | Nemotron 120B | 120B de connaissances, 12B actifs, mais 78 Go RAM |

> **Note** : un seul LLM à la fois (même port 8000). Switcher avec les profiles Docker Compose.
> L'embedding (port 8001) et le reranker (port 8002) restent identiques quel que soit le LLM choisi.

### Choix du LLM selon le pipeline RAG

Le choix du LLM dépend de la qualité du pipeline de retrieval en amont.
Plus le retrieval est bon, moins le LLM a besoin d'être gros.

**RAG basique (embedding seul) :**
```
Embedding → top 10 (bruité) → LLM doit trier le bon du mauvais
→ Llama 70B recommandé (compense le bruit, 70B = moins d'hallucinations)
```

**RAG complet (hybrid search + reranker) :**
```
BM25 + Vecteurs → top 50 → Reranker → top 5-10 (très pertinents) → LLM synthétise
→ Qwen3-32B suffit (documents déjà filtrés, le LLM ne fait que synthétiser)
```

| Scénario | LLM recommandé | RAM | Vitesse | Qualité |
|----------|---------------|-----|---------|---------|
| RAG basique (embedding seul) | **Llama 70B** | 40 Go | ~4-8 tok/s | Compense le bruit |
| RAG + reranker | Qwen3-32B ou Llama 70B | 20-40 Go | ~4-10 tok/s | Reranker filtre le bruit |
| **RAG + hybrid search + reranker** | **Qwen3-32B** | **20 Go** | **~10 tok/s** | **Pipeline filtre tout** |
| RAG complet + qualité maximale | Llama 70B | 40 Go | ~4-8 tok/s | Le meilleur possible |

### Cas d'usage : RAG juridique (cabinet d'avocats)

```
Question juridique ("Quelles sont les conditions de la responsabilité délictuelle ?")
       │
       ▼
┌──────────────────────────────────────────┐
│  Hybrid Search (ParadeDB)                │
│  BM25: "article 1240 code civil          │ ← termes exacts, références de lois
│         responsabilité délictuelle"       │
│  +                                        │
│  Vecteurs: sens sémantique               │ ← concepts proches (faute ≈ négligence)
│  → RRF fusion → top 50                   │
└──────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────┐
│  Reranker (TEI — bge-reranker-v2-m3)     │
│  Élimine les faux positifs               │ ← doc qui mentionne "1240" hors contexte
│  → top 5-10 documents pertinents         │
└──────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────┐
│  LLM (Qwen3-32B ou Llama 70B)           │
│  Synthétise avec citations               │ ← "Selon l'article 1240 du Code civil..."
│  des articles et jurisprudences          │
└──────────────────────────────────────────┘
```

**Pourquoi hybrid search + reranker sont critiques pour le juridique :**
- **BM25** : retrouve les **termes exacts** (numéros d'articles, noms de lois, références de jurisprudence) que l'embedding sémantique peut rater
- **Vecteurs** : retrouve les **concepts proches** ("responsabilité délictuelle" ≈ "faute civile") même si les mots sont différents
- **Reranker** : élimine les faux positifs — un document qui mentionne "article 1240" dans un contexte hors sujet sera rétrogradé

**Recommandation finale pour le juridique :**
- **Qwen3-32B** par défaut (rapide, 20 Go, suffisant avec hybrid + reranker)
- **Llama 70B** en fallback pour les cas complexes nécessitant une qualité maximale
- Les deux disponibles en profiles, switchables à la demande

---

## Architecture du pipeline RAG

```
Question utilisateur
       │
       ▼
┌──────────────────────────────────┐
│  Embedding (port 8001)           │  Vectorise la question
│  Qwen3-Embedding-0.6B — vLLM    │
└──────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│  Vector DB (ParadeDB/pgvector)   │  Recherche les ~50 docs les plus proches
│                                  │  (rapide, approximatif — cosine similarity)
└──────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│  Reranker (port 8002)            │  Ré-ordonne les ~50 docs par pertinence
│  bge-reranker-v2-m3 — TEI        │  réelle (cross-encoder, lent mais précis)
│                                  │  → garde le top 5-10
└──────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│  LLM (port 8000)                 │  Génère la réponse avec les 5-10
│  Qwen3-32B-NVFP4 — vLLM         │  meilleurs docs en contexte
└──────────────────────────────────┘
       │
       ▼
   Réponse
```

**Pourquoi 3 modèles ?**
- **Embedding** : transforme texte → vecteur pour la recherche sémantique. Rapide mais approximatif.
- **Reranker** : lit chaque paire (question, document) en profondeur avec un cross-encoder. Beaucoup plus précis que l'embedding mais trop lent pour chercher dans toute la base → on l'applique sur les ~50 résultats de l'embedding pour garder les meilleurs.
- **LLM** : génère la réponse finale en s'appuyant sur les documents les plus pertinents. Moins de bruit en entrée = moins d'hallucinations.

---

## 1. Vérification GPU et CUDA

```sh
nvidia-smi
```
NVIDIA GB10, driver 580, CUDA 13.0 détecté.

```sh
uname -m
# aarch64
```

```sh
cat /proc/driver/nvidia/version
NVRM version: NVIDIA UNIX Open Kernel Module for aarch64  580.126.09  Release Build  (dvs-builder@U22-I3-AF04-07-5)  Wed Jan  7 22:35:57 UTC 2026
GCC version:  gcc version 13.3.0 (Ubuntu 13.3.0-6ubuntu2~24.04.1)
```

## 2. Installation toolkit NVIDIA

```sh
dpkg -l | grep nvidia-container-toolkit
# ii  nvidia-container-toolkit       1.19.0-1   arm64   NVIDIA Container toolkit
# ii  nvidia-container-toolkit-base  1.19.0-1   arm64   NVIDIA Container Toolkit Base

sudo nvidia-ctk runtime configure --runtime=docker
sudo systemctl restart docker

# Verification
docker run --rm --gpus all nvidia/cuda:12.8.0-base-ubuntu22.04 nvidia-smi
```

## 3. Déploiement avec Docker Compose

```sh
docker compose up -d
docker ps
docker logs vllm-llm 2>&1 | tail -30
# Model loading took 19.42 GiB memory and 146.149041 seconds
```

## 4. Tests

```sh
# Vérifier que tous les services sont healthy
docker ps
```

### LLM (vLLM — port 8000)

```sh
curl http://edgexpert-a827.local:8000/v1/chat/completions \
curl http://localhost:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "nvidia/Qwen3-32B-NVFP4",
    "messages": [{"role": "user", "content": "Bonjour. Raconte une blague de devs"}],
    "max_tokens": 500,
    "extra_body": {"chat_template_kwargs": {"enable_thinking": false}}
  }'
```

> **Note Qwen3** : le mode "thinking" est activé par défaut. Le modèle utilise des tokens
> `<think>...</think>` pour réfléchir avant de répondre. Avec `enable_thinking: false`,
> il répond directement. Avec `enable_thinking: true`, augmenter `max_tokens` (500+)
> pour laisser de la place à la réflexion + la réponse.

### Embedding (vLLM — port 8001)

```sh
curl http://localhost:8001/v1/embeddings \
  -H "Content-Type: application/json" \
  -d '{"model":"Qwen/Qwen3-Embedding-0.6B","input":"test"}'
```

### Reranker (TEI — port 8002)

```sh
curl http://localhost:8002/rerank \
  -H "Content-Type: application/json" \
  -d '{
    "query": "Qui a créé les modèles Qwen?",
    "texts": [
      "Qwen est une famille de LLM développée par Alibaba Cloud.",
      "Il fait beau à Paris aujourd hui.",
      "Les modèles open-source chinois incluent Qwen, DeepSeek et Yi."
    ]
  }'
# Résultat attendu: score élevé pour texte 1 (répond directement),
# moyen pour texte 3 (partiellement pertinent), faible pour texte 2 (hors sujet)
```

### ParadeDB (PostgreSQL + pgvector + BM25 — port 5432)

```sh
# Health check
docker exec paradedb pg_isready -U doveaia -d doveaia

# Connexion psql
docker exec -it paradedb psql -U doveaia -d doveaia

# Vérifier les extensions installées
docker exec paradedb psql -U doveaia -d doveaia -c "SELECT extname, extversion FROM pg_extension;"
# Attendu: pg_search (BM25), pgvector (vecteurs)

# Activer les extensions
docker exec paradedb psql -U doveaia -d doveaia -c "
  CREATE EXTENSION IF NOT EXISTS vector;
  CREATE EXTENSION IF NOT EXISTS pg_search;
"

# Créer une table de test pour le RAG (hybrid search)
docker exec paradedb psql -U doveaia -d doveaia -c "
  CREATE TABLE IF NOT EXISTS documents (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    embedding vector(1024),
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW()
  );

  -- Index vectoriel (recherche sémantique)
  CREATE INDEX IF NOT EXISTS idx_documents_embedding
    ON documents USING hnsw (embedding vector_cosine_ops);

  -- Index BM25 (recherche par mots-clés)
  CALL paradedb.create_bm25(
    index_name => 'idx_documents_bm25',
    table_name => 'documents',
    key_field => 'id',
    text_fields => paradedb.field('content')
  );
"

# Vérifier
docker exec paradedb psql -U doveaia -d doveaia -c "\dt"
docker exec paradedb psql -U doveaia -d doveaia -c "\di"

# Nettoyer le test
docker exec paradedb psql -U doveaia -d doveaia -c "DROP TABLE IF EXISTS documents CASCADE;"
```

### Dify (Orchestration — port 3000)

```sh
# Installation (dossier séparé)
cd ~
git clone https://github.com/langgenius/dify.git
cd dify/docker
cp .env.example .env
docker compose up -d

# Vérifier
curl http://localhost:3000/health

# UI web
# http://<IP_MACHINE>:3000
```

**Configuration Dify — Endpoints à renseigner dans Settings > Model Providers :**

| Type | Provider | Endpoint | Model name |
|------|----------|----------|------------|
| LLM | OpenAI-compatible | `http://<IP_MACHINE>:8000/v1` | `nvidia/Qwen3-32B-NVFP4` |
| Embedding | OpenAI-compatible | `http://<IP_MACHINE>:8001/v1` | `Qwen/Qwen3-Embedding-0.6B` |
| Reranker | Custom (TEI) | `http://<IP_MACHINE>:8002` | `BAAI/bge-reranker-v2-m3` |

### Test end-to-end du pipeline

```sh
# 1. Vectoriser un texte
EMBEDDING=$(curl -s http://localhost:8001/v1/embeddings \
  -H "Content-Type: application/json" \
  -d '{"model":"Qwen/Qwen3-Embedding-0.6B","input":"Les modèles Qwen sont développés par Alibaba Cloud"}' \
  | python3 -c "import sys,json; print(json.load(sys.stdin)['data'][0]['embedding'][:5])")
echo "Embedding (5 premiers): $EMBEDDING"

# 2. Reranker — classer des documents par pertinence
curl -s http://localhost:8002/rerank \
  -H "Content-Type: application/json" \
  -d '{
    "query": "Qui développe les modèles Qwen?",
    "texts": [
      "Qwen est une famille de modèles développée par Alibaba Cloud.",
      "Le temps sera ensoleillé demain à Paris.",
      "Les LLM open-source chinois progressent rapidement."
    ]
  }' | python3 -m json.tool

# 3. LLM — générer une réponse avec contexte
curl -s http://localhost:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "nvidia/Qwen3-32B-NVFP4",
    "messages": [
      {"role": "system", "content": "Réponds en te basant uniquement sur le contexte fourni."},
      {"role": "user", "content": "Contexte: Qwen est une famille de modèles développée par Alibaba Cloud.\n\nQuestion: Qui développe Qwen?"}
    ],
    "max_tokens": 500,
    "extra_body": {"chat_template_kwargs": {"enable_thinking": false}}
  }' | python3 -c "import sys,json; print(json.load(sys.stdin)['choices'][0]['message']['content'])"
```

---

## Historique des erreurs et décisions (2026-04-11)

### Erreur 1 — Architecture qwen3_5_moe non reconnue

**Modele initial** : `RedHatAI/Qwen3.5-122B-A10B-NVFP4` (MoE 122B, 10B actifs)

**Erreur** :
```
The checkpoint you are trying to load has model type `qwen3_5_moe` but Transformers does not recognize this architecture.
```

**Cause** : L'image NGC `nvcr.io/nvidia/vllm:26.03-py3` embarque vLLM 0.17.1 avec une version de Transformers trop ancienne pour supporter Qwen3.5 MoE. Le tag `26.03-py3` est le dernier disponible sur NGC (avril 2026). Le tag `26.04-py3` n'existe pas.

**Decision** : Remplacer par `nvidia/Qwen3-32B-NVFP4` — le plus gros modèle Qwen officiellement listé dans la matrice de support NVIDIA DGX Spark (https://build.nvidia.com/spark/vllm/overview). C'est un modèle dense (pas MoE), quantifié NVFP4 par NVIDIA.

### Erreur 2 — `--task embed` / `--task score` non reconnu

**Erreur** :
```
vllm: error: unrecognized arguments: --task embed
vllm: error: unrecognized arguments: --task score
```

**Cause** : vLLM 0.17.1 (dans l'image NGC 26.03) ne supporte pas le flag `--task`. Ce flag existe dans des versions plus recentes (0.19+). vLLM 0.17.1 auto-détecte le type de modele selon son architecture.

**Decision** : Supprimer les flags `--task embed` et `--task score`.

### Erreur 3 — Crash containers embed/reranker (SHMEM)

**Erreur** :
```
RuntimeError: Engine core initialization failed. See root cause above.
```
Accompagné de :
```
NOTE: The SHMEM allocation limit is set to the default of 64MB. This may be insufficient for vLLM.
```

**Cause** : La mémoire partagée par défaut (64 Mo) est insuffisante pour vLLM.

**Decision** : Ajouter dans le compose `ipc: host` et `ulimits` (memlock: -1, stack: 67108864) comme recommandé par NVIDIA.

### Erreur 4 — Endpoints `/v1/embeddings` et `/v1/score` Not Found

**Modeles** : `Qwen/Qwen3-VL-Embedding-2B` et `Qwen/Qwen3-VL-Reranker-2B`

**Erreur** :
```json
{"detail":"Not Found"}
```

**Cause** : Les modeles VL (Vision-Language) sont résolus comme `Qwen3VLForConditionalGeneration` — une architecture de génération, pas de pooling/scoring. Sans le flag `--task` (absent dans vLLM 0.17.1), vLLM ne sait pas exposer les endpoints embedding/score. Il expose uniquement `/v1/chat/completions`.

**Recherche communautaire** :
- `eugr/spark-vllm-docker` (vLLM 0.19.1rc1) : le support embedding/reranker VL est demandé mais pas encore implémenté (issue #120)
- `bjk110/SPARK_Qwen3.5-122B` : build custom pour Qwen3.5 MoE mais ne couvre pas embedding/reranker
- Aucune solution clé en main disponible (avril 2026)

**Decision** : Revenir aux modeles non-VL `Qwen/Qwen3-Embedding-0.6B` et `Qwen/Qwen3-Reranker-0.6B` qui ont une architecture native de pooling/scoring, auto-détectée par vLLM. Moins puissants (0.6B vs 2B) mais fonctionnels pour du RAG texte.

**Resultat** : L'embedding (`Qwen/Qwen3-Embedding-0.6B`) fonctionne sur vLLM 0.17.1 — endpoint `/v1/embeddings` disponible. Le reranker (`Qwen/Qwen3-Reranker-0.6B`) retourne aussi `Not Found` sur `/v1/score` — vLLM 0.17.1 ne supporte pas du tout l'endpoint score.

### Erreur 5 — Endpoint `/v1/score` Not Found (modele non-VL aussi)

**Modele** : `Qwen/Qwen3-Reranker-0.6B`

**Erreur** :
```json
{"detail":"Not Found"}
```

**Cause** : vLLM 0.17.1 n'implémente pas l'endpoint `/v1/score` du tout, même avec des modeles cross-encoder natifs. Seul `/v1/embeddings` est supporté pour les modeles de pooling.

**Decision** : Utiliser **Hugging Face TEI** (Text Embeddings Inference) pour le reranker. TEI supporte nativement les modeles cross-encoder/reranker et est compatible DGX Spark / GB10 (Blackwell, aarch64, SM_121). Il faut builder l'image Docker sur la machine :
```sh
git clone https://github.com/huggingface/text-embeddings-inference.git
cd text-embeddings-inference
docker build . -f Dockerfile-cuda --build-arg CUDA_COMPUTE_CAP=121 -t tei-spark:latest
```
Sources : https://github.com/huggingface/text-embeddings-inference, https://huggingface.co/docs/text-embeddings-inference/supported_models

### Note sur le driver NVIDIA

Le driver installé (580.142) est inférieur au requis (595.45) pour l'image 26.03. Le conteneur affiche :
```
ERROR: This container was built for NVIDIA Driver Release 595.45 or later, but version 580.142 was detected
```
Cependant, le **CUDA Forward Compatibility mode** s'active automatiquement et permet le fonctionnement :
```
NOTE: CUDA Forward Compatibility mode ENABLED. Using CUDA 13.2 driver version 595.45.04 with kernel driver version 580.142.
```

### Stack finale retenue

| Service | Runtime | Modele / Image | Taille | Port |
|---------|---------|----------------|--------|------|
| LLM | vLLM 0.17.1 (NGC 26.03) | `nvidia/Qwen3-32B-NVFP4` | ~20 Go | 8000 |
| Embedding | vLLM 0.17.1 (NGC 26.03) | `Qwen/Qwen3-Embedding-0.6B` | ~1 Go | 8001 |
| Reranker | TEI (build custom SM_121) | `BAAI/bge-reranker-v2-m3` | ~1 Go | 8002 |
| DB (vecteurs + BM25 + app) | ParadeDB (PostgreSQL) | `paradedb/paradedb:latest` | ~1-10 Go | 5432 |

### Build TEI pour le reranker

```sh
git clone https://github.com/huggingface/text-embeddings-inference.git
cd text-embeddings-inference
```

La compilation Rust + CUDA sur aarch64 est très longue (~30-60 min).
Le `docker build` standard peut timeout (erreur `DeadlineExceeded: context deadline exceeded`).

**Commande avec timeout étendu :**
```sh
DOCKER_BUILDKIT=1 docker buildx build \
  --progress=plain \
  --network=host \
  -f Dockerfile-cuda \
  --build-arg CUDA_COMPUTE_CAP=121 \
  -t tei-spark:latest \
  --ulimit nofile=1048576:1048576 \
  . 2>&1 | tee build-tei.log
```

**Si ça timeout encore, désactiver BuildKit :**
```sh
DOCKER_BUILDKIT=0 docker build \
  -f Dockerfile-cuda \
  --build-arg CUDA_COMPUTE_CAP=121 \
  -t tei-spark:latest \
  --network=host \
  .
```

### Choix du reranker — BAAI/bge-reranker-v2-m3

`Qwen/Qwen3-Reranker-0.6B` n'est pas supporté par TEI (issue #643 — architecture Qwen3 pas encore intégrée, PR #835 en cours).

`BAAI/bge-reranker-v2-m3` est un excellent remplacement :
- Multilingue (100+ langues dont le français)
- Cross-encoder XLM-RoBERTa — supporté nativement par TEI
- Très bon score sur les benchmarks MTEB reranking
- ~568M params, ~1 Go en mémoire

### Upgrade future → compose.v2.yaml (eugr/spark-vllm-docker)

L'image NGC 26.03 (vLLM 0.17.1) ne supporte pas Gemma 4, Qwen3.5 MoE, ni l'endpoint `/v1/score`.
Le projet communautaire `eugr/spark-vllm-docker` fournit vLLM 0.19.1+ avec Transformers 5.5+.

**Avantages de la v2 :**
- Tous les LLM récents fonctionnent (Gemma 4, Qwen3.5, Mistral)
- `--task embed` et `--task score` supportés nativement
- Plus besoin de TEI — tout unifié sur vLLM
- Reranker Qwen3 utilisable directement

**Le compose.v2.yaml est prêt.** Pour migrer :

#### Etape 1 — Builder l'image

```sh
cd ~
git clone https://github.com/eugr/spark-vllm-docker.git
cd spark-vllm-docker
./build-and-copy.sh --tf5
# Produit l'image: vllm-node-tf5
# ⚠️ Build long (~30-60 min) — arrêter les conteneurs vLLM avant
```

> **⚠️ Erreur connue (2026-04-11)** : les images `vllm-node` et `vllm-node-tf5` sont cassées.
> Les wheels vLLM 0.19.1rc1 pré-compilés ne sont pas compatibles avec PyTorch/CUDA de l'image de base.
> Erreur : `ImportError: undefined symbol: _ZN2at4cuda24getCurrentCUDABlasHandleEv`
> Testé avec `--tf5` et sans flags → même erreur.
> À surveiller : ouvrir une issue sur https://github.com/eugr/spark-vllm-docker/issues
> **En attendant, rester sur la v1** (`compose.yaml` avec NGC 26.03).

#### Etape 2 — Vérifier l'image

```sh
docker images | grep vllm-node
# vllm-node-tf5   latest   ...
```

#### Etape 3 — Migrer vers la v2

```sh
cd ~/app

# Arrêter la v1
docker compose down

# Lancer la v2 avec Qwen
docker compose -f compose.v2.yaml --profile qwen up -d

# Vérifier
docker ps
```

#### Etape 4 — Tester

```sh
# LLM
curl http://localhost:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "nvidia/Qwen3-32B-NVFP4",
    "messages": [{"role": "user", "content": "Bonjour"}],
    "max_tokens": 500,
    "extra_body": {"chat_template_kwargs": {"enable_thinking": false}}
  }'

# Embedding
curl http://localhost:8001/v1/embeddings \
  -H "Content-Type: application/json" \
  -d '{"model":"Qwen/Qwen3-Embedding-0.6B","input":"test"}'

# Reranker (vLLM natif, plus TEI)
curl http://localhost:8002/v1/score \
  -H "Content-Type: application/json" \
  -d '{"model":"Qwen/Qwen3-Reranker-0.6B","text_1":"Qui a créé Qwen?","text_2":["Qwen est développé par Alibaba Cloud.","Il fait beau."]}'

# Tester Gemma 4
docker compose -f compose.v2.yaml --profile qwen stop vllm-qwen
docker compose -f compose.v2.yaml --profile gemma up -d vllm-gemma4
curl http://localhost:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model":"nvidia/Gemma-4-31B-IT-NVFP4","messages":[{"role":"user","content":"Hello"}],"max_tokens":100}'
```

#### Comparaison v1 vs v2

| | compose.yaml (v1) | compose.v2.yaml (v2) |
|---|---|---|
| **Image vLLM** | NGC 26.03 (0.17.1) | eugr/spark-vllm-docker (0.19.1+) |
| **Qwen3-32B** | ✅ | ✅ |
| **Gemma 4** | ❌ | ✅ |
| **Mistral Small** | ❌ | ✅ (à tester) |
| **Embedding** | vLLM (auto-détecté) | vLLM (`--task embed`) |
| **Reranker** | TEI (build custom) | vLLM (`--task score`) |
| **Stabilité** | NVIDIA officiel | Communautaire |
| **Maintenance** | Aucune | Build from source |
| **Status (2026-04-11)** | ✅ Fonctionne | ❌ Cassée (incompatibilité wheels/PyTorch) |

Source : https://github.com/eugr/spark-vllm-docker

#### Suivi des images NGC vLLM

| Version | Date | vLLM | Transformers | Gemma 4 | Qwen3.5 MoE |
|---------|------|------|-------------|---------|-------------|
| 26.01-py3 | Jan 2026 | 0.13.0 | < 5.0 | ❌ | ❌ |
| 26.02-py3 | Mars 2026 | 0.15.1 | < 5.0 | ❌ | ❌ |
| 26.03-py3 | Mars 2026 | 0.17.1 | < 5.0 | ❌ | ❌ (actuelle) |
| 26.04-py3 | **pas encore sorti** | ? | ? | ? | ? |

NVIDIA publie les images NGC mensuellement. Le 26.04-py3 devrait sortir mi-avril 2026.
Gemma 4 et Qwen3.5 MoE nécessitent Transformers >= 5.5.0 — aucune image NGC ne l'intègre encore.

**Vérifier régulièrement :**
```sh
docker pull nvcr.io/nvidia/vllm:26.04-py3
```

Si le 26.04 intègre Transformers 5 :
- Mettre à jour `x-vllm-common.image` dans `compose.yaml`
- Les profiles Gemma 4 et Mistral deviendront fonctionnels
- Plus besoin de `compose.v2.yaml`

Sources :
- [NGC vLLM Release Notes](https://docs.nvidia.com/deeplearning/frameworks/vllm-release-notes/index.html)
- [NGC vLLM Catalog](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/vllm)
- [Forum NVIDIA — Gemma 4 vLLM](https://forums.developer.nvidia.com/t/gemma-4-models-which-vllm-version-any-prs-spotted/365490)

---

## Recommandations — Stack RAG production (avril 2026)

### Vue d'ensemble de la stack cible

```
┌─────────────────────────────────────────────────────────────────────┐
│                        ORCHESTRATION                                │
│                  Dify ou RAGFlow (port 3000)                        │
│         Workflows visuels, API, UI chat, gestion des connaissances  │
└────────┬──────────────┬──────────────────┬─────────────┬────────────┘
         │              │                  │             │
         ▼              ▼                  ▼             ▼
┌─────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ LLM         │ │ Embedding    │ │ Reranker     │ │ Vector DB    │
│ Qwen3-32B   │ │ Qwen3-Embed  │ │ bge-reranker │ │ ParadeDB     │
│ NVFP4       │ │ 0.6B         │ │ v2-m3        │ │ (PG+pgvector)│
│ vLLM        │ │ vLLM         │ │ TEI          │ │              │
│ port 8000   │ │ port 8001    │ │ port 8002    │ │ port 5432    │
│ ~20 Go      │ │ ~1 Go        │ │ ~1 Go        │ │ ~1-10 Go     │
│ ✅ FAIT      │ │ ✅ FAIT       │ │ 🔨 EN COURS  │ │ 📋 A FAIRE   │
└─────────────┘ └──────────────┘ └──────────────┘ └──────────────┘
```

**Mémoire estimée** : ~25 Go sur 128 Go disponibles (20% d'utilisation). Marge énorme pour ParadeDB, l'orchestrateur et le parsing.

### Pipeline d'ingestion (production-ready)

```
Documents sources (PDF, DOCX, PPTX, HTML, Markdown)
       │
       ▼
┌──────────────────────────────────────────────┐
│  1. PARSING — Extraction du contenu           │
│                                               │
│  Docling (IBM) — recommandé                   │
│  pip install docling                          │
│  + OCR Tesseract pour les scans/images        │
│                                               │
│  Entrée: fichier brut                         │
│  Sortie: texte structuré + métadonnées        │
│          (titres, tableaux, images détectées)  │
└──────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────┐
│  2. CHUNKING — Découpage en morceaux           │
│                                               │
│  Stratégie: Recursive Character Splitting     │
│  - Taille: 512 tokens                         │
│  - Overlap: 50-100 tokens                     │
│  - Respecter les limites de sections          │
│                                               │
│  Benchmark 2026: 69% accuracy (meilleur que   │
│  le semantic chunking à 54%)                  │
│                                               │
│  Enrichissement optionnel:                    │
│  - Parent Document Retrieval (garder le doc   │
│    parent pour contexte élargi au LLM)        │
│  - Contextual Retrieval (ajouter un résumé    │
│    du contexte environnant à chaque chunk)    │
└──────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────┐
│  3. EMBEDDING — Vectorisation                  │
│                                               │
│  Qwen3-Embedding-0.6B via vLLM (port 8001)   │
│  POST /v1/embeddings                          │
│  Dimensions: 1024                             │
│  Batch processing pour les gros volumes       │
└──────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────┐
│  4. INDEXATION — Stockage dans ParadeDB         │
│                                               │
│  PostgreSQL + pgvector + pg_search (port 5432)│
│  - Vecteurs denses via pgvector (embedding)   │
│  - BM25 via pg_search (recherche mots-clés)   │
│  - Métadonnées: source, page, section, date   │
│  - Index HNSW pour recherche vectorielle      │
│  - Index BM25 pour recherche full-text        │
│  - Données app Go/Angular dans la même DB     │
└──────────────────────────────────────────────┘
```

### Pipeline de requête (production-ready)

```
Question utilisateur
       │
       ▼
┌──────────────────────────────────────────────┐
│  1. QUERY REWRITING (optionnel, via LLM)       │
│                                               │
│  - HyDE: générer un doc hypothétique puis     │
│    chercher des docs similaires               │
│  - Multi-query: générer 3-5 variantes de la   │
│    question pour élargir la recherche         │
│  - Step-back: reformuler en question plus     │
│    générale pour trouver des principes        │
└──────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────┐
│  2. HYBRID SEARCH (ParadeDB)                   │
│                                               │
│  Recherche parallèle en une seule requête SQL:│
│  - Dense: cosine similarity via pgvector      │
│  - Sparse: BM25 via pg_search                 │
│                                               │
│  Fusion: Reciprocal Rank Fusion (RRF)         │
│  → Top 50 résultats fusionnés                 │
│                                               │
│  Pourquoi hybrid? BM25 attrape les matchs     │
│  exacts que l'embedding rate. L'embedding     │
│  attrape le sens que les mots-clés ratent.    │
└──────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────┐
│  3. RERANKING (TEI — port 8002)                │
│                                               │
│  bge-reranker-v2-m3                           │
│  POST /rerank                                 │
│  50 docs → top 5-10 par pertinence réelle     │
│  +10-30% de précision, ~50-100ms de latence   │
└──────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────┐
│  4. GENERATION (vLLM — port 8000)              │
│                                               │
│  Qwen3-32B-NVFP4                              │
│  POST /v1/chat/completions                    │
│  Prompt: system + docs pertinents + question  │
│  → Réponse sourcée avec citations             │
└──────────────────────────────────────────────┘
       │
       ▼
   Réponse à l'utilisateur
```

### Architectures RAG avancées

#### 1. Hybrid RAG (baseline — à implémenter en premier)

Le standard production 2026. 85% des entreprises l'adoptent.

```
Question ──┬──> Dense Search (embedding) ──┐
           │                                ├──> RRF Fusion ──> Reranker ──> LLM
           └──> Sparse Search (BM25)  ─────┘
```

**Ce qu'on a** : Embedding (vLLM) + Reranker (TEI) + LLM (vLLM)
**Ce qu'il faut** : ParadeDB (pgvector + pg_search pour hybrid search en SQL)

```sh
# Déjà dans le compose.yaml
docker compose up -d paradedb
```

#### 2. Agentic RAG (pour questions complexes)

Un agent qui boucle: cherche → évalue → re-cherche si insuffisant → synthétise.

```
Question ──> Agent (LLM)
               │
               ├──> "Ai-je besoin de chercher?" ──> Oui ──> Hybrid Search + Rerank
               │                                              │
               │         ┌────────────────────────────────────┘
               │         ▼
               ├──> "Les résultats sont suffisants?" ──> Non ──> Reformuler ──> Re-chercher
               │                                         │
               │                                         Oui
               │                                         │
               └──> Générer la réponse finale ◄──────────┘
```

**Ce qu'on a** : LLM + Embedding + Reranker
**Ce qu'il faut** : Orchestrateur avec logique d'agent → **Dify** (workflows visuels) ou **LangGraph** (code Python)

#### 3. Corrective RAG (CRAG — pour fiabilité)

Ajoute une validation après la génération: scoring de confiance, vérification des sources.

```
Question ──> Hybrid Search ──> Reranker ──> LLM ──> Réponse brute
                                                        │
                                                        ▼
                                                  ┌─────────────┐
                                                  │ Validation   │
                                                  │ - Confiance  │
                                                  │ - Sources    │
                                                  │ - Cohérence  │
                                                  └──────┬──────┘
                                                         │
                                              ┌──────────┴──────────┐
                                              ▼                     ▼
                                         Confiant             Pas confiant
                                              │                     │
                                              ▼                     ▼
                                         Réponse              Re-chercher ou
                                         finale               dire "je ne sais pas"
```

**Ce qu'on a** : LLM (peut auto-évaluer)
**Ce qu'il faut** : Logique de validation dans l'orchestrateur (Dify workflow ou code custom)

#### 4. Graph RAG (pour données relationnelles)

Ajoute un knowledge graph pour le raisonnement multi-hop (ex: "Qui est le manager du développeur qui a corrigé le bug X ?").

```
Question ──┬──> Vector Search (pgvector) ──────────┐
           │                                        ├──> Fusion ──> LLM
           └──> Graph Traversal (Neo4j/NetworkX) ──┘
```

**Ce qu'on a** : LLM + Embedding
**Ce qu'il faut** :
- **Neo4j** (graph DB) ou NetworkX (Python, in-memory)
- Pipeline d'extraction d'entités et relations (via LLM)
- Complexité: élevée, à envisager seulement si les données sont très relationnelles

#### 5. Self-RAG (pour efficacité)

Le LLM décide lui-même s'il a besoin de chercher ou si ses connaissances suffisent.

```
Question ──> LLM: "Ai-je besoin de contexte externe?"
               │
               ├──> Non (question simple) ──> Réponse directe (rapide, pas de retrieval)
               │
               └──> Oui (question spécifique) ──> Pipeline RAG complet
```

**Ce qu'on a** : LLM
**Ce qu'il faut** : Prompt engineering ou fine-tuning du LLM pour l'auto-évaluation

### Composants à installer

| Composant | Image Docker | Port | Priorité | Status |
|-----------|-------------|------|----------|--------|
| **ParadeDB** | `paradedb/paradedb:latest` | 5432 | **P0** — indispensable (aussi DB app Go/Angular) | 📋 A faire |
| **Dify** ou **RAGFlow** | `langgenius/dify:latest` ou `infiniflow/ragflow:latest` | 3000 | **P0** — orchestration | 📋 A faire |
| **Docling** | Python package (`pip install docling`) | — | **P1** — parsing documents | 📋 A faire |
| **Tesseract OCR** | `apt install tesseract-ocr` | — | **P1** — OCR pour scans | 📋 A faire |
| **Neo4j** (optionnel) | `neo4j:latest` | 7474 | **P2** — Graph RAG | 📋 Optionnel |

### Choix d'orchestrateur : Dify vs RAGFlow

| Critère | Dify | RAGFlow |
|---------|------|---------|
| **Focus** | App builder généraliste (RAG, agents, workflows) | RAG spécialisé, précision documentaire |
| **Chunking** | Standard | Intelligent (DeepDoc — respecte la structure) |
| **UI** | Très polie, workflow visuel | Fonctionnelle, orientée données |
| **Agents** | Oui (workflows multi-étapes) | Basique |
| **API** | REST complète | REST |
| **Meilleur pour** | Plateforme AI interne multi-usage | RAG sur documents complexes (legal, technique) |

**Recommandation** : Dify pour un usage général (chatbot interne, assistant IA). RAGFlow si le cas d'usage principal est la recherche précise dans des documents techniques.

### Ressources DGX Spark

- [NVIDIA DGX Spark RAG Playbooks](https://github.com/NVIDIA/dgx-spark-playbooks) — playbooks officiels
- [Arm Learning Paths — RAG on DGX Spark](https://learn.arm.com/learning-paths/laptops-and-desktops/dgx_spark_rag/) — guide step-by-step aarch64
- [RAG AI Workbench for Spark](https://build.nvidia.com/spark/rag-ai-workbench) — tutoriel NVIDIA
