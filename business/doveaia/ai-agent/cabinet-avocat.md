# DoveAI — Agent IA pour Cabinets d'Avocats

> **Pitch** : "Uploadez vos pièces, récupérez votre note de synthèse en 5 minutes. Vos données ne quittent jamais votre cabinet."

---

## 1. Le Problème

Un avocat collaborateur passe **30 à 40% de son temps** à lire, trier et synthétiser des pièces de dossier. C'est la tâche la plus chronophage et la moins valorisante du métier.

**Exemple concret** : Marie reçoit 87 pièces adverses vendredi. L'audience est mardi. Elle doit :
1. Ouvrir chaque PDF un par un
2. Lire, prendre des notes manuellement
3. Construire une chronologie des faits dans Word
4. Identifier les points forts/faibles et contradictions
5. Rédiger une note de synthèse pour l'associé

**Temps moyen : 3 à 8 heures par jeu de pièces.**

Avec DoveAI : **30 à 45 minutes** (relecture + ajustements).

---

## 2. Le Persona

### Marie, 34 ans — Avocate collaboratrice

| | |
|---|---|
| **Poste** | Collaboratrice libérale, cabinet de 4 à 15 avocats |
| **Barreau** | 5 ans d'exercice |
| **Spécialité** | Droit des affaires / droit social / contentieux civil |
| **Quotidien** | 3-5 dossiers actifs en parallèle, audiences, rédaction de conclusions |
| **Taux horaire** | 180-250€ HT/heure |
| **Outils actuels** | Word, Outlook, RPVA, logiciel de gestion (Secib, Kleos, Jarvis) |
| **Douleur #1** | Passe des heures à lire des pièces au lieu de plaider ou conseiller |
| **Frustration type** | "J'ai reçu 87 pièces adverses vendredi, l'audience est mardi" |
| **Rapport au digital** | Pas tech-savvy. Veut un outil qui fonctionne comme un stagiaire ultra-rapide |
| **Rapport à la confidentialité** | Très sensible. Ne mettra JAMAIS des données client sur un cloud qu'elle ne contrôle pas |

**Qui achète** : L'associé(e) fondateur qui veut améliorer la rentabilité du cabinet.
**Qui utilise** : Marie et les autres collaborateurs au quotidien.

---

## 3. La Solution

### La tâche : Analyse & Synthèse de Pièces

L'agent lit les pièces à la place du collaborateur et produit une note de synthèse structurée.

### Ce que l'agent produit

Pour chaque dossier, l'agent génère :

**1. Chronologie des faits**
- Chaque événement daté, avec référence à la pièce source [P1], [P2]...
- Détection automatique des dates, même dans les scans (OCR)

**2. Parties & intervenants**
- Identification automatique des personnes physiques et morales
- Rôles (demandeur, défendeur, témoin, expert...)

**3. Inventaire des pièces analysées**
- Chaque pièce résumée en 1-2 lignes
- Type de document identifié (contrat, courrier, facture, PV...)
- Montants et chiffres clés extraits

**4. Points d'attention**
- Anomalies procédurales (délais non respectés, vices de forme)
- Contradictions entre pièces
- Pièces manquantes ou non datées
- Incohérences de montants

**5. Montants & chiffres clés**
- Salaires, indemnités, montants facturés
- Calculs automatiques (ancienneté, indemnités légales estimées)

### Exemple de livrable

```
SYNTHÈSE DU DOSSIER
Dupont c/ SAS TechCorp — RG 24/01234
Tribunal judiciaire de Lyon — Chambre sociale
Analysé le 15/04/2026 — 12 pièces

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CHRONOLOGIE DES FAITS

   12/01/2023 — Signature CDI, poste développeur, 45.000€/an [P1]
   15/06/2023 — 1er avertissement pour retards répétés [P2]
   02/09/2023 — Convocation entretien préalable [P3]
   08/09/2023 — Entretien préalable (6 jours après convoc.) [P4]
   18/09/2023 — Notification du licenciement pour faute grave [P5]
   25/09/2023 — Saisine CPH Lyon par le salarié [P8]

2. PARTIES & INTERVENANTS

   Demandeur : M. Jean Dupont (salarié)
   Défendeur : SAS TechCorp (employeur), RCS Lyon 812 345 678
   Conseil demandeur : Me Durand
   DRH signataire : Mme Lefevre

3. PIÈCES ANALYSÉES (12/12)

   P1  — CDI signé le 12/01/2023 → 45.000€ brut/an, période essai 4 mois
   P2  — Avertissement du 15/06/2023 → motif : retards répétés
   P3  — Convocation entretien préalable du 02/09/2023
   P4  — CR entretien préalable du 08/09/2023 (non signé par le salarié)
   P5  — Lettre de licenciement du 18/09/2023 → faute grave
   ...

4. POINTS D'ATTENTION

   ⚠ Délai convocation/entretien = 6 jours calendaires.
     Vérifier si 5 jours ouvrables respectés (week-end 03-04/09). [P3→P4]
   ⚠ Motif avertissement (retards) ≠ motif licenciement (faute grave
     pour insubordination). Incohérence possible. [P2 vs P5]
   ⚠ CR entretien préalable non signé par le salarié. [P4]
   ⚠ Pièce P7 (attestation collègue) non datée.

5. MONTANTS & CHIFFRES CLÉS

   Salaire brut mensuel : 3.750€
   Ancienneté : 8 mois
   Indemnité légale de licenciement estimée : 781€
   Demandes du salarié : 22.500€ (6 mois de salaire)
```

---

## 4. Confidentialité & Déontologie

### Le cadre légal — pourquoi c'est critique

Les avocats sont soumis au **secret professionnel absolu** :
- **Art. 66-5 Loi du 31/12/1971** : toutes correspondances et pièces du dossier sont couvertes
- **Art. 2 du RIN** (Règlement Intérieur National) : obligation de confidentialité totale
- **Art. 226-13 Code pénal** : violation du secret = 1 an d'emprisonnement + 15.000€ d'amende
- **Recommandations du CNB** : restrictions strictes sur l'usage du cloud pour les données clients

Ce n'est pas un simple sujet RGPD. Un avocat qui uploade des pièces de dossier sur un cloud tiers s'expose à des **sanctions disciplinaires** (blâme, suspension, radiation) et à des **poursuites pénales**.

### Les 3 modes de déploiement

#### Mode A — Full Self-Hosted (recommandé)

```
┌─────────────────────────────────────────┐
│           CABINET D'AVOCATS             │
│                                         │
│  ┌─────────┐  ┌──────────┐  ┌────────┐ │
│  │ Angular │→│ Go API   │→│ LLM    │ │
│  │ UI      │  │ Gateway  │  │ local  │ │
│  └─────────┘  └──────────┘  └────────┘ │
│                    ↓                    │
│  ┌──────────┐  ┌──────────┐            │
│  │ OpenFang │  │ SQLite + │            │
│  │ Agent    │  │ pgvector │            │
│  └──────────┘  └──────────┘            │
│                                         │
│  ★ AUCUNE DONNÉE NE SORT DU RÉSEAU ★   │
└─────────────────────────────────────────┘
```

- **Tout tourne dans le cabinet** : UI, API, LLM, base de données
- Zéro connexion internet requise pour le traitement
- Connexion internet uniquement pour les mises à jour logicielles (optionnelle)
- **Argument de vente** : "Vos données ne quittent jamais votre cabinet"

#### Mode B — Hybride avec anonymisation

```
Cabinet (local)                       Cloud (DoveAI)
┌───────────────────────┐             ┌──────────────┐
│ PDF → Extraction      │             │              │
│ texte + OCR           │  requête    │  LLM API     │
│                       │──anonyme──→ │  (synthèse)  │
│ Anonymisation auto    │             │              │
│ Dupont → [PARTIE_1]   │  réponse    │  Aucune      │
│ TechCorp → [SOC_1]    │←─────────── │  rétention   │
│ 45.000€ → [MONTANT_1] │             │              │
│                       │             └──────────────┘
│ Ré-identification     │
│ locale                │
│                       │
│ Synthèse finale       │
│ stockée localement    │
└───────────────────────┘
```

- Extraction et anonymisation **locales** (noms, adresses, montants remplacés par des tokens)
- Le LLM cloud ne reçoit que du texte anonymisé
- La ré-identification se fait côté client
- Le cloud ne voit jamais de données personnelles
- **Pour** : Cabinets sans budget GPU, qualité LLM supérieure (GPT-4, Claude)

#### Mode C — Full Cloud (non recommandé pour le lancement)

- Hébergement HDS (Hébergeur de Données de Santé) certifié en France
- Chiffrement E2E, DPA (Data Processing Agreement) béton
- Aucune rétention des données après traitement
- **Problème** : 70%+ des cabinets refuseront par principe. Trop de friction commerciale

### Recommandation : lancer avec le Mode A (Full Self-Hosted)

| Raison | Détail |
|--------|--------|
| Argument commercial massue | "Rien ne sort de votre cabinet" tue toute objection |
| Architecture prête | OpenFang local + Qwen3/Mistral + SQLite = exactement ce qu'il faut |
| Prix premium justifié | Les avocats paient déjà cher pour la conformité |
| Barrière concurrentielle | Les SaaS cloud (Harvey, Lexis+AI) ne peuvent PAS faire cette promesse |
| Confiance des ordres | Possibilité de demander un avis au CNB / à l'ordre local |

### Solutions d'anonymisation (Mode B et couche de sécurité Mode A)

> Même en Mode A (full self-hosted), l'anonymisation est une **couche de défense en profondeur**. En Mode B (hybride), elle est **obligatoire**.

#### Pipeline d'anonymisation

```
┌─────────────┐    ┌──────────────────────────┐    ┌─────────────┐    ┌──────────────┐
│  Upload     │───>│  ANONYMISATION            │───>│  LLM        │───>│  Dé-pseudo   │
│  PDF/DOCX   │    │                           │    │  (Qwen3)    │    │  + Réponse   │
│             │    │  1. OCR (Tesseract fra)    │    │             │    │  finale      │
│             │    │  2. NER (CamemBERT)        │    │  Texte      │    │              │
│             │    │  3. Regex (IBAN, tél, SS)  │    │  anonyme    │    │  Noms réels  │
│             │    │  4. Validation humaine     │    │  uniquement │    │  restaurés   │
│             │    │  5. Remplacement cohérent  │    │             │    │  via table   │
│             │    │  6. Table de mapping       │    │             │    │  de mapping  │
└─────────────┘    └──────────────────────────┘    └─────────────┘    └──────────────┘
```

#### Pseudonymisation vs Anonymisation complète

| | Pseudonymisation | Anonymisation complète |
|---|---|---|
| **Principe** | "Jean Dupont" → "Pierre Martin" (cohérent dans tout le doc) | "Jean Dupont" → [PERSONNE_1] |
| **Réversible** | Oui (table de mapping chiffrée) | Non |
| **Qualité LLM** | **Meilleure** — le LLM garde le contexte sémantique | Dégradée — tokens génériques perdent du sens |
| **RGPD** | Reste donnée personnelle (pseudonymisée) | N'est plus donnée personnelle |
| **Pour DoveAI** | **Recommandé** — on dé-pseudonymise après traitement | Pour archivage uniquement |

#### Outils open-source (tous self-hosted)

| Outil | Usage | Points forts | Lien |
|-------|-------|-------------|------|
| **Microsoft Presidio** | Framework PII detection + anonymisation | Modulaire, Docker-ready, extensible, accepte des NER custom | [GitHub](https://github.com/microsoft/presidio) — [Documentation](https://microsoft.github.io/presidio/) |
| **CamemBERT-NER** | NER français (PER, ORG, LOC, MISC) | Meilleur modèle NER français, fine-tunable sur corpus juridique | [HuggingFace](https://huggingface.co/Jean-Baptiste/camembert-ner) — [Paper CamemBERT](https://arxiv.org/abs/1911.03894) |
| **Flair NLP** | NER français alternatif, embeddings empilables | Modèle `flair/ner-french` disponible | [GitHub](https://github.com/flairNLP/flair) — [Documentation](https://flairnlp.github.io/) |
| **Faker (fr_FR)** | Génération de faux noms/adresses/IBAN français | Locale `fr_FR` intégrée, idéal pour les remplacements cohérents | [GitHub](https://github.com/joke2k/faker) — [Documentation](https://faker.readthedocs.io/) |
| **Tesseract OCR (fra)** | OCR open-source avec pack langue française | Indispensable pour les pièces scannées (PDF image) | [GitHub](https://github.com/tesseract-ocr/tesseract) — [Documentation](https://tesseract-ocr.github.io/) — [Modèle FR](https://github.com/tesseract-ocr/tessdata) |

#### Pipeline open-source de la Cour de cassation (RECOMMANDÉ)

> **Game changer** : la Cour de cassation a développé un pipeline complet de pseudonymisation open-source, entraîné sur **2 millions de décisions juridiques françaises** (bases Jurinet + Jurica). C'est incomparablement meilleur que CamemBERT-NER générique pour du texte juridique.

| Repo | Ce que c'est | Lien |
|------|-------------|------|
| **moteurNER** | Moteur NER de pseudonymisation. Modèles Flair + Byte Pair Embeddings entraînés sur 2M décisions. Détecte noms, adresses, dates de naissance, etc. dans du texte juridique français. | [github.com/Cour-de-cassation/moteurNER](https://github.com/Cour-de-cassation/moteurNER) |
| **pseudonymisation-api** | API REST qui expose le moteurNER comme service. Intégrable directement comme microservice Docker dans le pipeline DoveAI. | [github.com/Cour-de-cassation/pseudonymisation-api](https://github.com/Cour-de-cassation/pseudonymisation-api) |
| **Label** | Interface web d'annotation pour relire et corriger les pseudonymisations automatiques. C'est exactement l'interface de "validation humaine" dont on a besoin. | [github.com/Cour-de-cassation/label](https://github.com/Cour-de-cassation/label) |
| **openjustice-sder** | Service d'import/export + réinjection des décisions pseudonymisées. Référence d'architecture. | [github.com/Cour-de-cassation/openjustice-sder](https://github.com/Cour-de-cassation/openjustice-sder) |
| **openjustice-specs** | Spécifications de l'API OpenJustice. | [github.com/Cour-de-cassation/openjustice-specs](https://github.com/Cour-de-cassation/openjustice-specs) |

#### Stack recommandée DoveAI : moteurNER (Cour de cass.) + Regex + Label

**Nouvelle recommandation** (remplace Presidio + CamemBERT-NER) :
- **moteurNER** = le moteur NER, entraîné sur 2M décisions juridiques françaises. Bien supérieur à CamemBERT-NER générique pour notre cas d'usage
- **pseudonymisation-api** = API Docker prête à l'emploi, on la branche dans le pipeline
- **Regex custom** = filet de sécurité pour IBAN, sécu sociale, téléphone (données structurées que le NER rate)
- **Label** (ou UI DoveAI custom) = interface de validation humaine
- **Faker fr_FR** = génération de faux noms/adresses cohérents pour la pseudonymisation

**Pourquoi on abandonne Presidio + CamemBERT-NER :**
- Le moteurNER est **spécialisé juridique français**, pas généraliste
- Il est **déjà testé en production** sur des millions de décisions
- L'API est prête, on n'a pas à intégrer Presidio comme middleware
- On garde CamemBERT-NER et Presidio comme **fallback** si le moteurNER ne couvre pas certains cas

**Entités détectées par regex (spécifique France) :**

| Entité | Pattern | Exemple |
|--------|---------|---------|
| IBAN français | `FR\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{3}` | FR76 3000 6000 0112 3456 789 |
| N° sécurité sociale | `[12]\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{3}\s?\d{3}\s?\d{2}` | 1 85 05 78 006 084 21 |
| Téléphone FR | `(?:0\|\+33)[1-9](?:[\s.-]?\d{2}){4}` | 06 12 34 56 78 |
| SIRET | `\d{3}\s?\d{3}\s?\d{3}\s?\d{5}` | 442 654 367 00035 |
| SIREN | `\d{3}\s?\d{3}\s?\d{3}` | 442 654 367 |
| Email | regex standard | me@cabinet.fr |
| RCS | `RCS\s+[A-Z\s]+\d{3}\s?\d{3}\s?\d{3}` | RCS Paris 442 654 367 |

#### Validation humaine — non négociable pour les avocats

> **Aucun modèle NER n'a 100% de rappel.** Un nom oublié dans un document envoyé à un LLM externe = violation du secret professionnel (Art. 226-13 Code pénal).

Le pipeline DoveAI intègre une **étape de validation** :
1. L'outil détecte automatiquement les entités (NER + regex)
2. L'interface affiche les entités trouvées surlignées dans le document
3. L'avocat **valide, corrige ou ajoute** des entités manquées en 2-3 clics
4. Le document pseudonymisé est soumis au LLM
5. **Audit trail** : log de ce qui a été anonymisé, quand, par qui (RGPD Art. 30)

#### Fournisseurs d'anonymisation commerciaux (briques intégrables dans DoveAI, PAS des concurrents)

> **Ce ne sont PAS des concurrents.** Ce sont des briques techniques d'anonymisation qu'on pourrait acheter au lieu de construire avec Presidio + CamemBERT. Alternative "buy vs build" si la stack open-source ne suffit pas.

| Fournisseur | Ce qu'il fait | Intérêt pour DoveAI | Déploiement | Lien |
|-------------|--------------|-------------------|------------|------|
| **Private AI** | Détection PII, 50+ entités, 49 langues | Remplacerait Presidio si on veut du clé-en-main | On-premise dispo | [private-ai.com](https://private-ai.com) — [Docs](https://docs.private-ai.com/) |
| **Protecto.ai** | Tokenisation réversible pour LLM | Alternative intéressante pour la pseudonymisation cohérente | Cloud + on-premise | [protecto.ai](https://protecto.ai) — [Docs](https://docs.protecto.ai/) |
| **Emvista** (Montpellier, FR) | NLP français, analyse sémantique | Partenaire potentiel pour NER juridique français | On-premise | [emvista.com](https://emvista.com/) |
| **Dataleon** (FR) | OCR + anonymisation docs français | Alternative à Tesseract pour l'OCR | Cloud | [dataleon.ai](https://www.dataleon.ai/) — [Docs API](https://docs.dataleon.ai/) |

#### Pourquoi le pipeline Cour de cassation est un avantage concurrentiel pour DoveAI

- **Cadre légal** : développé dans le cadre de la loi République numérique 2016 + décret 2020-797
- **Production-tested** : tourne en production sur des millions de décisions depuis 2021
- **Open-source** : licence permissive, réutilisable librement
- **Argument commercial** : "Notre outil d'anonymisation utilise le même moteur que celui de la Cour de cassation" — ça rassure un avocat
- **Entraîné sur du juridique** : Flair + Byte Pair Embeddings fine-tunés sur Jurinet/Jurica, pas du texte générique

---

## 5. Matériel & Infrastructure

> **Recherche mars 2026** — Les RTX 40-series (4060 Ti 16GB, 4070 Ti Super) sont **discontinuées** chez les revendeurs français (LDLC : 0 stock). Le marché a basculé sur les RTX 50-series et Apple Silicon.

### Modèles Qwen3 et VRAM requise

| Modèle Qwen3 | Params | VRAM (Q4) | Vitesse estimée | Usage |
|---------------|--------|-----------|-----------------|-------|
| **Qwen3-32B** | 32B | ~20 GB | 12-18 tok/s (M4 Pro 48GB) | **Recommandé** — Synthèse complexe, extraction, raisonnement juridique |
| **Qwen3-14B** | 14B | ~10 GB | 20-30 tok/s (RTX 5070) | Excellent rapport qualité/coût |
| **Qwen3-8B** | 8B | ~6 GB | 30-50 tok/s | Bon pour extraction simple, résumé rapide |
| **Qwen3-30B-A3B** (MoE) | 30B (3B actifs) | ~6 GB | 40-60 tok/s | Ultra-rapide, qualité surprenante pour sa taille |
| **Qwen3-4B** | 4B | ~3 GB | 40+ tok/s, CPU possible | Démo, petit budget |
| **Qwen3-Embedding-0.6B** | 0.6B | CPU (639 MB) | N/A | Embeddings texte — MTEB Multilingual #1 |
| **Qwen3-VL-Embedding-2B** | 2B | ~6 GB | N/A | Embeddings multimodaux (scans, images) — Cross-modal #1 |

**Stack recommandée** : `Qwen3-32B` (synthèse/raisonnement) + `Qwen3-Embedding-0.6B` (recherche sémantique) + `Qwen3-VL-Embedding-2B` (OCR scans)

### Option 1 — Mac Mini M4 Pro 48GB (RECOMMANDÉ)

**Le meilleur choix pour un cabinet d'avocats.**

> **Clarification gamme Apple Silicon :**
> - M1 (2020) → M2 (2022) → M3 (2023) → **M4 (2024, actuel)**
> - Le Mac Mini M4 Pro est la **génération la plus récente** (sortie novembre 2024)
> - À ne pas confondre avec les anciens M1/M2/M3 Pro — seul le M4 Pro offre les specs ci-dessous

| Spec | Détail |
|------|--------|
| Puce | **Apple M4 Pro** (novembre 2024, dernière génération) |
| CPU | 14-core (10 performance + 4 efficacité) |
| GPU | 20-core intégré |
| Neural Engine | 16-core |
| RAM | 48 GB mémoire unifiée (partagée CPU/GPU) |
| Bande passante mémoire | 273 GB/s |
| Connectique | 3x Thunderbolt 5, HDMI, 10Gb Ethernet |
| Bruit | Quasi-silencieux (~40-60W en charge LLM) |
| Taille | 12.7 x 12.7 cm |
| **Prix** | **2.399€** (48GB/512GB) — **2.629€** (48GB/1TB) |
| Achat | [Apple France](https://www.apple.com/fr/shop/buy-mac/mac-mini) |

**Toute la gamme Mac Mini M4 (apple.com/fr) :**

| Configuration | Prix |
|---|---|
| Mac Mini M4 Pro 24GB / 512GB | 1.999€ |
| Mac Mini M4 Pro 48GB / 512GB | 2.399€ |
| Mac Mini M4 Pro 48GB / 1TB | 2.629€ |
| Mac Mini M4 Pro 48GB / 2TB | 3.089€ |

**Performance avec Qwen3 :**
- `Qwen3-32B` (Q4) : 12-18 tok/s — fluide, interactif
- `Qwen3-14B` (Q6) : 25-35 tok/s — excellent
- `Qwen3-8B` (Q8) : 40+ tok/s — instantané
- Peut aussi faire tourner un 70B (Q3) à 5-7 tok/s

**Pourquoi c'est le meilleur choix pour un cabinet :**
- **Silencieux** — se pose sur une étagère, inaudible (critique en cabinet)
- **Zéro maintenance** — macOS + Ollama = 5 min d'installation
- **48 GB unifiés** — pas de limite VRAM, le modèle charge directement en mémoire
- **25€/an d'électricité** — vs ~180€/an pour un PC + GPU dédié
- **Thunderbolt 5** — possibilité d'ajouter un eGPU plus tard si besoin
- 27% plus rapide que 2x RTX 3090 pour l'inférence LLM (mémoire unifiée = pas de goulot PCIe)

**Installation :**
```bash
# 1. Installer Ollama (2 min)
curl -fsSL https://ollama.com/install.sh | sh

# 2. Télécharger Qwen3-32B (20 min selon connexion)
ollama pull qwen3:32b

# 3. Installer Open WebUI (interface ChatGPT-like)
docker run -d -p 3000:8080 ghcr.io/open-webui/open-webui:main

# 4. Ouvrir http://localhost:3000 → interface prête
```

| Composant | Référence | Prix TTC | Lien |
|-----------|-----------|----------|------|
| Mac Mini M4 Pro 48GB | Apple Mac Mini (M4 Pro, 48GB, 512GB SSD) | **2.399€** | [apple.com/fr](https://www.apple.com/fr/shop/buy-mac/mac-mini) |
| Upgrade SSD 1TB | Option Apple à la commande | +230€ | Même lien |
| Onduleur | APC Back-UPS 700VA | ~100€ | [LDLC](https://www.ldlc.com) |
| **Total** | | **~2.500 — 2.730€** | |

### Option 2 — Lenovo ThinkStation PGX (NO COMPROMISE)

**Pour les cabinets qui veulent faire tourner les plus gros modèles.**

| Spec | Détail |
|------|--------|
| Puce | NVIDIA GB10 Grace Blackwell Superchip |
| CPU | 20-core ARM (Cortex-X925 + A725) |
| GPU | 6.144 CUDA cores, 192 Tensor Cores (5e gén) |
| RAM | **128 GB** LPDDR5X unifiée (273 GB/s) |
| Taille | Format Mac Mini (~150x150x50mm, 1,2 kg) |
| Connectique | 10Gb Ethernet, Wi-Fi 7, 3x USB4, HDMI |
| OS | DGX OS (Ubuntu), CUDA 13 pré-installé |
| **Prix** | **~3.300€** |
| Achat | [Lenovo.com](https://www.lenovo.com) |
| Review | [XDA Developers — 9/10](https://www.xda-developers.com/lenovo-thinkstation-pgx-review/) |

**Performance avec Qwen3 :**
- `Qwen3-32B` (FP8) : 25-40 tok/s — rapide
- `Qwen3-235B-A22B` (Q4 MoE) : ~20 tok/s avec 140K contexte
- Fine-tuning Qwen3-8B avec LoRA : 18 min sur 5.000 exemples
- "Incroyablement silencieux" durant tous les tests (XDA)

**Avantage :** 128 GB = peut charger TOUS les modèles Qwen3 sans exception, y compris le flagship 235B.

| Composant | Référence | Prix TTC | Lien |
|-----------|-----------|----------|------|
| ThinkStation PGX | NVIDIA GB10, 128GB, 1TB SSD | **~3.300€** | [lenovo.com](https://www.lenovo.com) |
| Onduleur | APC Back-UPS 700VA | ~100€ | [LDLC](https://www.ldlc.com) |
| **Total** | | **~3.400€** | |

### Option 3 — PC Bureau + GPU dédié (MEILLEUR RAPPORT PERF/PRIX)

**Pour les cabinets avec une salle serveur ou un placard technique.**

#### Sous-option 3A : PC neuf + RTX 5070 (12 GB)

| Composant | Référence | Prix TTC | Lien |
|-----------|-----------|----------|------|
| CPU | Intel Core i5-14400 ou AMD Ryzen 5 7600 | ~200€ | [LDLC](https://www.ldlc.com) |
| Carte mère | B760 ou B650 ATX | ~120€ | [LDLC](https://www.ldlc.com) |
| RAM | 32 GB DDR5 | ~80€ | [LDLC](https://www.ldlc.com) |
| SSD | 1 TB NVMe PCIe 4.0 | ~70€ | [LDLC](https://www.ldlc.com) |
| **GPU** | **MSI RTX 5070 12G GAMING TRIO OC** | **690€** | [LDLC](https://www.ldlc.com/en/computing/components/graphics-card/c4684/+fv121-126521.html) |
| Boîtier + alimentation | Tour ATX + 650W 80+ Gold | ~150€ | [LDLC](https://www.ldlc.com) |
| Onduleur | APC Back-UPS 700VA | ~100€ | [LDLC](https://www.ldlc.com) |
| **Total** | | **~1.410€** | |

**Performance Qwen3 :** `Qwen3-14B` (Q4) à 20-30 tok/s, `Qwen3-8B` (Q6) à 40+ tok/s. Le 12 GB de VRAM limite à Qwen3-14B max.

**GPU RTX 5070 disponibles chez LDLC (mars 2026) :**

| Modèle | Prix | Notes |
|--------|------|-------|
| MSI RTX 5070 12G GAMING TRIO OC | 690€ | Le moins cher |
| Gainward RTX 5070 Python III | 750€ | Bon rapport qualité/prix |
| ASUS Dual RTX 5070 12GB OC | 750€ | Fiable |
| Gigabyte RTX 5070 WINDFORCE OC SFF | 770€ | Format compact |
| ASUS TUF Gaming RTX 5070 12GB OC | 870€ | Build premium |

Tous disponibles sur [LDLC — RTX 5070](https://www.ldlc.com/en/computing/components/graphics-card/c4684/+fv121-126521.html)

#### Sous-option 3B : PC occasion + RTX 3090 24 GB (MEILLEUR BUDGET)

| Composant | Référence | Prix TTC | Lien |
|-----------|-----------|----------|------|
| PC occasion | Tour i5/i7 récent, 32GB RAM | ~200-400€ | [leboncoin.fr](https://www.leboncoin.fr) / [backmarket.fr](https://www.backmarket.fr) |
| **GPU** | **RTX 3090 24GB (occasion)** | **500-700€** | [leboncoin.fr](https://www.leboncoin.fr) |
| Alimentation | 850W 80+ Gold (si nécessaire) | ~100€ | [LDLC](https://www.ldlc.com) |
| **Total** | | **~800 — 1.200€** | |

**Performance Qwen3 :** `Qwen3-32B` (Q4) à 15-20 tok/s, `Qwen3-14B` (Q6) à 30-40 tok/s. Le 24 GB de VRAM permet les gros modèles.

**⚠ Inconvénients :** Bruyant (ventilateur GPU), consommation ~300-450W, nécessite un espace dédié (placard/salle serveur).

**GPU occasion — marché français (mars 2026) :**

| GPU | Prix occasion | VRAM | Capacité Qwen3 | Où acheter |
|-----|--------------|------|-----------------|------------|
| RTX 3090 24GB | 500-700€ | 24 GB | **Qwen3-32B (Q4)** — best value | [leboncoin.fr](https://www.leboncoin.fr) |
| RTX 4060 Ti 16GB | 250-450€ | 16 GB | Qwen3-14B (Q4) | [leboncoin.fr](https://www.leboncoin.fr) |
| RTX 3060 12GB | 150-200€ | 12 GB | Qwen3-8B (Q6) — budget | [leboncoin.fr](https://www.leboncoin.fr) |
| RTX 4090 24GB | 1.200-1.500€ | 24 GB | Qwen3-32B (Q6) — premium | [leboncoin.fr](https://www.leboncoin.fr) |

### Option 4 — NUC + eGPU (COMPACT MODULAIRE)

| Composant | Référence | Prix TTC | Lien |
|-----------|-----------|----------|------|
| Mini-PC | Intel NUC 13 Pro i7 (32GB, 1TB) | ~500-700€ | [LDLC](https://www.ldlc.com/en/product/PB00555097.html) / [Amazon.fr](https://www.amazon.fr/Mini-PC-processeur-i7-1360P-Graphiques-Thunderbolt/dp/B0C1SC59SB) |
| Boîtier eGPU | Razer Core X V2 (Thunderbolt 5) | 410€ | [LDLC](https://www.ldlc.com/en/product/PB00718562.html) (rupture fréquente) |
| GPU | RTX 5070 12GB ou RTX 3090 24GB (occasion) | 600-750€ | Voir liens ci-dessus |
| Onduleur | APC Back-UPS 700VA | ~100€ | [LDLC](https://www.ldlc.com) |
| **Total** | | **~1.610 — 1.960€** | |

**⚠ Note eGPU :** Thunderbolt 3/4 = PCIe 3.0 x4 (~32 Gbps) = ~25-30% de perte de performance vs PCIe direct. Pour l'inférence LLM c'est moins critique (bottleneck = bande passante mémoire, pas PCIe).

### Comparatif des 4 options

| | Mac Mini M4 Pro | ThinkStation PGX | PC + RTX 5070 | PC + RTX 3090 (occ.) |
|---|---|---|---|---|
| **Prix** | ~2.400€ | ~3.400€ | ~1.410€ | ~1.000€ |
| **Qwen3 max** | Qwen3-32B (Q4) | Qwen3-235B (Q4) | Qwen3-14B (Q4) | Qwen3-32B (Q4) |
| **Vitesse Qwen3-32B** | 12-18 tok/s | 25-40 tok/s | ❌ (VRAM insuffisante) | 15-20 tok/s |
| **Bruit** | Silencieux | Silencieux | Audible | Bruyant |
| **Taille** | 12x12 cm | 15x15 cm | Tour ATX | Tour ATX |
| **Installation** | 5 min (Ollama) | 30 min (Linux) | 1-2h (montage) | 1-2h + achat occasion |
| **Électricité/an** | ~25€ | ~60€ | ~120€ | ~180€ |
| **Multi-utilisateur** | 1-3 simultanés | 3-5 simultanés | 1-2 simultanés | 1-3 simultanés |
| **Pour qui** | Cabinets 4-10 avocats | Cabinets 10-20 avocats | Budget serré, salle serveur | Best value, salle serveur |

**Recommandation DoveAI :** ThinkStation PGX (128GB, GB10 Grace Blackwell) pour tous les cabinets clients. Mac Mini M4 Pro 48GB réservé à la R&D interne DoveAI.

### Ce que disent les utilisateurs (avis communautaires)

Sources : r/LocalLLaMA, r/selfhosted, XDA Developers, PremAI Blog, NovumLogic, Spellbook Legal

**Ce qui marche bien :**
- "Ollama + Open WebUI = ChatGPT-like en 5 min, les avocats n'y voient pas la différence" — r/LocalLLaMA
- "Mac Mini M4 Pro 48GB : silencieux, 30B à 15 tok/s, aucun driver à gérer" — r/LocalLLaMA
- "Qwen3-32B rivalise avec GPT-4 pour la synthèse et l'extraction structurée" — benchmarks HuggingFace
- "Le ThinkStation PGX est le hardware le plus excitant de 2026 pour le self-hosted LLM — 9/10" — XDA Developers
- "Pour le RGPD et le secret professionnel, le self-hosted est la seule option défendable" — NovumLogic (Legal AI)

**Attention / pièges à éviter :**
- "La quantization 4-bit réduit la taille de 75% avec une perte minimale, mais pour du juridique testez bien — des erreurs subtiles de raisonnement peuvent apparaître" — r/LocalLLaMA
- "Un seul utilisateur à la fois sur du matériel grand public. Multi-utilisateur = GPU pro ou plusieurs machines" — blog PremAI
- "Les contextes longs (10K+ tokens) dégradent la vitesse à cause du KV cache. Pré-découpez vos documents" — r/selfhosted
- "Un PC avec RTX 4090 consomme 300-450W et s'entend. Le Mac Mini consomme 40W et est silencieux" — comparatif DecodesFuture
- "Breakeven vs API = ~2M tokens/jour. En dessous, l'API est moins chère. Mais pour un cabinet, c'est la confidentialité qui justifie le self-hosted, pas le coût" — blog PremAI

**Approche hybride recommandée (validée par la communauté) :**
> Faire tourner les tâches simples (résumé, extraction) sur le modèle local (Qwen3-14B/32B), réserver les appels API (Claude, GPT-4) pour le raisonnement complexe en mode anonymisé. Réduction de 40-70% des coûts vs tout-API. — PremAI Blog 2026

### Stack logicielle recommandée

| Outil | Usage | Lien |
|-------|-------|------|
| [Ollama](https://ollama.com) | Serveur LLM local — téléchargement et exécution de Qwen3 en une commande | ollama.com |
| [Open WebUI](https://openwebui.com) | Interface web ChatGPT-like pour les avocats (connectée à Ollama) | openwebui.com |
| [vLLM](https://vllm.ai) | Serveur de production haute performance (multi-utilisateur, ~793 tok/s) | vllm.ai |
| [LM Studio](https://lmstudio.ai) | Interface desktop simple pour les non-techniques | lmstudio.ai |

---

## 6. Coût d'Exploitation

### Coût infra R&D DoveAI (Mac Mini M4 Pro pour développer/tester les modèles Qwen3)

> Ce coût concerne DoveAI en interne — le Mac Mini de développement pour entraîner, tester et valider les pipelines Qwen3 avant déploiement chez les clients.

**Consommation électrique Mac Mini M4 Pro :**

| État | Consommation |
|------|-------------|
| Idle (macOS, pas de charge) | 5-7W |
| Charge légère (code, tests) | 15-25W |
| **Inférence LLM (Qwen3-32B)** | **45-60W** |
| Peak burst (all cores) | 65-75W |

**Coût électricité R&D (tarif pro France ~0,25€/kWh) :**

| Scénario | kWh/mois | Coût/mois |
|----------|----------|-----------|
| 8h/jour inférence + 16h idle | 16,6 kWh | **~4€** |
| 24/7 (serveur de dev always-on) | 22-43 kWh | **~6-11€** |

**Budget R&D mensuel complet :**

| Poste | Coût mensuel |
|-------|-------------|
| Électricité Mac Mini | ~5-11€ |
| Fibre Pro (Orange/SFR/Free Pro) | ~40€ |
| Onduleur (APC 600VA, amorti 2 ans) | ~5€ |
| Refroidissement | 0€ (le Mac Mini reste froid) |
| **Total exploitation R&D** | **~50-55€/mois** |

**Avec amortissement matériel (3 ans) :**

| Poste | Coût mensuel |
|-------|-------------|
| Mac Mini M4 Pro 48GB/1TB (2.629€ ÷ 36) | ~73€ |
| Exploitation | ~50€ |
| **Total R&D tout compris** | **~125€/mois** |

> **Comparaison cloud** : Un GPU cloud équivalent (A10G AWS) coûte 500-800€/mois. Le Mac Mini est **4 à 6x moins cher** pour le même usage R&D.

---

### Coûts DoveAI (par client cabinet en production)

**Matériel standard : Lenovo ThinkStation PGX (GB10 Grace Blackwell, 128GB)**

| Poste | Coût | Détail |
|-------|------|--------|
| **ThinkStation PGX** | **4.265€ HT** | GB10, 128GB LPDDR5X, 1TB SSD — acheté par DoveAI, installé chez le client |
| Onduleur APC 700VA | ~100€ | Protection électrique |
| **Total matériel par client** | **~4.365€ HT** | Couvert par le setup (12.000€ HT) |

| Poste | Coût mensuel | Détail |
|-------|-------------|--------|
| Support technique | ~50€ | 2h/mois estimées à 25€/h interne |
| Mises à jour logicielles | ~20€ | CI/CD automatisé, tests, release |
| Monitoring à distance | ~10€ | Uptime, alertes, métriques basiques |
| Infrastructure cloud (licensing) | ~5€ | Serveur de licences, dashboard admin |
| **Total coût récurrent par client** | **~85€/mois** | Matériel couvert par le setup |

### Coûts cabinet (côté client)

| Poste | Coût mensuel | Détail |
|-------|-------------|--------|
| Électricité serveur | ~8-15€ | ThinkStation PGX ~60W en charge |
| Bande passante | 0€ | Réseau local uniquement |
| **Total coût cabinet** | **~10-15€/mois** | Le matériel est inclus dans le setup |

### Pourquoi le ThinkStation PGX et pas le Mac Mini

| | Mac Mini M4 Pro 48GB | **ThinkStation PGX** |
|---|---|---|
| Prix | 2.629€ | **4.265€** |
| Mémoire | 48GB | **128GB** |
| Qwen3-32B | Q4 à 12-18 tok/s | **FP8 à 25-40 tok/s** |
| Qwen3-235B (MoE) | ❌ impossible | ✅ possible |
| Utilisateurs simultanés | 1-3 | **3-5** |
| Bruit | Silencieux | Silencieux |
| Fine-tuning | Limité | **LoRA possible en 18 min** |
| OS | macOS (simple) | Linux DGX OS (plus technique) |
| **Choix DoveAI** | R&D interne | **Déployé chez les clients** |

### Justification du pricing par la valeur (calcul réaliste)

> **Attention** : les chiffres ci-dessous utilisent des hypothèses conservatrices, pas les maximums théoriques.

| Hypothèse | Optimiste | **Réaliste** |
|-----------|-----------|-------------|
| Temps économisé par dossier | 7h | **3h** (dossiers de taille variable, relecture 1h) |
| Taux horaire collaborateur | 200€/h | **180€/h** (moyenne incluant juniors) |
| Valeur par dossier | 1.400€ | **540€** |

**Volume de dossiers** (source : [AppliCab](https://applicab-avocats.com/combien-un-avocat-peut-il-traiter-de-dossiers-simultanement/)) :
- Un avocat gère ~50-100 dossiers simultanément
- ~20-30% reçoivent de nouvelles pièces chaque mois
- → Un avocat utilise DoveAI sur **~10-20 dossiers/mois**

| Taille cabinet | Dossiers DoveAI/mois | Heures économisées | Valeur/mois | Valeur/an |
|---------------|---------------------|-------------------|------------|----------|
| 1-3 avocats | 15-30 | 45-90h | 8.100-16.200€ | **97.000-194.000€** |
| **4-8 avocats** | **30-60** | **90-180h** | **16.200-32.400€** | **194.000-389.000€** |
| 10-20 avocats | 60-150 | 180-450h | 32.400-81.000€ | **389.000-972.000€** |

> **Règle de pricing** : facturer **5-8% de la valeur réaliste**. Assez pour que le ROI reste massif (x10+), assez pour que DoveAI gagne bien sa vie.

### Pourquoi cette structure en 3 postes

- **Setup** : l'avocat comprend qu'il achète un serveur. C'est tangible, ça justifie le prix.
- **Licence/utilisateur** : scalable et prévisible. Plus le cabinet grandit, plus DoveAI gagne.
- **Support forfait** : même prix quel que soit le nombre d'avocats. Ça incite les gros cabinets à adopter.
- **Pas de tiers** : un produit v1 n'a pas besoin de "Starter/Pro/Enterprise". Un seul pricing, 3 postes clairs.

---

## 7. Offre & Pricing

### Structure tarifaire — Setup + Licence + Support

> **Modèle** : 3 postes clairs. Le setup couvre le matériel et l'installation. La licence est facturée par utilisateur. Le support & maintenance est un forfait cabinet.

#### 1. Setup (one-shot)

| Poste | Détail | Prix HT |
|-------|--------|---------|
| Matériel | ThinkStation PGX (128GB, GB10 Grace Blackwell) | 4.265€ |
| Installation sur site | Déplacement, mise en réseau, déploiement Qwen3-32B + Ollama + app | inclus |
| Configuration | Personnalisation par type de contentieux, prompts adaptés au cabinet | inclus |
| Formation | Session sur site 2h (avocats + secrétariat) + guide utilisateur | inclus |
| **Total setup** | | **12.000€ HT** |

> Le cabinet achète son serveur IA privé, installé et configuré dans ses locaux. Marge DoveAI sur setup : 7.735€.

#### 2. Licence logicielle (par utilisateur)

| | Prix HT |
|---|---|
| **Par utilisateur/mois** | **290€ HT/mois** |
| **Par utilisateur/an** | **3.480€ HT/an** |
| **Dossiers** | Illimité |

Ce que la licence inclut :
- Accès à l'application web DoveAI (upload, synthèse, chronologie, export)
- OCR avancé (multimodal Qwen3-VL)
- Export Word + PDF structuré
- Modèle LLM : Qwen3-32B (FP8, 25-40 tok/s) + Qwen3-Embedding-0.6B
- Mises à jour logicielles (nouvelles fonctionnalités, améliorations UX)

#### 3. Support & Maintenance (forfait cabinet)

| | Prix HT |
|---|---|
| **Par mois** | **300€ HT/mois** |
| **Par an** | **3.600€ HT/an** |

Ce que le support inclut :
- Support email + visio (réponse sous 24h, SLA 4h urgences)
- Monitoring à distance du serveur (santé, performance, alertes)
- Mises à jour des modèles IA (nouveaux modèles Qwen, optimisations)
- Mise à jour des prompts par type de contentieux (1×/trimestre)
- Formation continue (1 visio/trimestre sur les nouveaux usages)
- Backup de la configuration (pas des données client)

### Grille tarifaire par taille de cabinet

| Cabinet | Utilisateurs | Setup | Licence/an | Support/an | **Total année 1** | **Année 2+** |
|---|---|---|---|---|---|---|
| **Petit** | 2 avocats | 12.000€ | 6.960€ | 3.600€ | **22.560€** | **10.560€/an** |
| **Moyen** | 5 avocats | 12.000€ | 17.400€ | 3.600€ | **33.000€** | **21.000€/an** |
| **Grand** | 10 avocats | 12.000€ | 34.800€ | 3.600€ | **50.400€** | **38.400€/an** |

### Marge DoveAI

| Poste | Coût réel | Commentaire |
|---|---|---|
| Matériel (dans le setup) | 4.265€ | Marge setup = 7.735€ |
| Exploitation/mois | ~85€/mois | Monitoring, infra support |
| **Coût annuel récurrent** | **~1.020€/an** | Très faible car self-hosted |

| Cabinet | Revenu récurrent/an | Coûts/an | **Marge brute** |
|---|---|---|---|
| 2 avocats | 10.560€ | 1.020€ | **9.540€ (90%)** |
| 5 avocats | 21.000€ | 1.020€ | **19.980€ (95%)** |
| 10 avocats | 38.400€ | 1.020€ | **37.380€ (97%)** |

### ROI client (calcul réaliste)

| | Cabinet 2 avocats | Cabinet 5 avocats | Cabinet 10 avocats |
|---|---|---|---|
| Dossiers avec synthèse/mois | 10 | 25 | 50 |
| Heures économisées/an | 360h | 900h | 1.800h |
| Valeur créée/an (180€/h) | **64.800€** | **162.000€** | **324.000€** |
| Coût DoveAI année 1 | 22.560€ | 33.000€ | 50.400€ |
| Coût DoveAI année 2+ | 10.560€/an | 21.000€/an | 38.400€/an |
| **ROI année 1** | **x3** | **x5** | **x6** |
| **ROI année 2+** | **x6** | **x8** | **x8** |

### Objectif DoveAI : atteindre 50.000€ de revenus

| Scénario | Setup | Récurrent/an | **Total année 1** | **Année 2+** |
|---|---|---|---|---|
| **3 cabinets × 3 avocats** | 36.000€ | 35.280€ | **71.280€** | **35.280€** |
| **3 cabinets × 5 avocats** | 36.000€ | 63.000€ | **99.000€** | **63.000€** |
| **5 cabinets × 3 avocats** | 60.000€ | 58.800€ | **118.800€** | **58.800€** |

> **3 cabinets de 5 avocats = ~100K€ en année 1** et 63K€ récurrent ensuite. Le setup assure la trésorerie immédiate.

### Trésorerie — chaque client est rentable au jour 1

| Événement | Investissement matériel (cumulé) | Revenu setup (cumulé) | Solde |
|---|---|---|---|
| Client #1 signé | -4.265€ | +12.000€ | **+7.735€** |
| Client #2 signé | -8.530€ | +24.000€ | **+15.470€** |
| Client #3 signé | -12.795€ | +36.000€ | **+23.205€** |

> Chaque setup génère +7.735€ de marge immédiate. Pas de problème de trésorerie.

### Offre de lancement (premiers 3 clients)

- Setup à **6.000€** au lieu de 12.000€ (matériel couvert + marge réduite de 1.735€/client)
- 1er mois de licence **offert** (période pilote)
- Condition : engagement 12 mois minimum + droit d'utiliser le cas comme référence (anonymisable)
- **Pitch** : "On installe un serveur IA à 4.000€ dans votre cabinet, on vous forme, vous testez 1 mois gratuitement. Si le ROI n'est pas là, on reprend le matériel."

### Pourquoi ce pricing est clair pour l'avocat

| Question de l'avocat | Réponse |
|---|---|
| "Pourquoi un setup ?" | "C'est votre serveur privé. On l'achète, on l'installe, on le configure. Il reste chez vous." |
| "Pourquoi payer par utilisateur ?" | "Chaque avocat qui utilise l'outil économise ~180h/an. Plus vous êtes nombreux, plus le ROI est élevé." |
| "Pourquoi un forfait support ?" | "Quelqu'un doit maintenir le serveur, mettre à jour les modèles IA, être disponible si ça plante. C'est 300€/mois quel que soit votre taille." |
| "C'est plus cher que Predictice/Doctrine" | "Doctrine Flow coûte 322€/mois/utilisateur — sans matériel, en cloud. DoveAI à 290€/mois inclut un serveur à 4.265€ dans votre cabinet. Vos données ne sortent jamais." |

---

## 8. La UI — 3 Écrans

### Écran 1 — Liste des dossiers

```
┌──────────────────────────────────────────────────────────────┐
│  DoveAI — Mes Dossiers                          [+ Nouveau] │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Dossier                       Pièces   Statut     Date     │
│  ─────────────────────────────────────────────────────────── │
│  Dupont c/ TechCorp            12       Prêt       il y a 2h│
│  SARL Bati+ c/ Mairie Lyon     8        En cours   En cours │
│  Martin — Succession Duval     23       Prêt       Hier     │
│  Lefebvre c/ Assur+            0        Vide       Nouveau  │
│                                                              │
│  Filtrer : [Tous] [En cours] [Prêts]    Rechercher : [____] │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

- Un dossier = une affaire (référence RG, parties, juridiction)
- Statuts : Vide → En cours d'analyse → Prêt
- Recherche par nom de partie, numéro RG

### Écran 2 — Upload des pièces

```
┌──────────────────────────────────────────────────────────────┐
│  ← Dupont c/ SAS TechCorp — RG 24/01234                     │
│     Tribunal judiciaire de Lyon — Chambre sociale            │
│                                                              │
│  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐ │
│  │                                                         │ │
│  │     Glissez vos pièces ici (PDF, scan, images)          │ │
│  │              ou cliquez pour parcourir                   │ │
│  │                                                         │ │
│  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘ │
│                                                              │
│  Pièces (12)                                                 │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  #   Fichier                        Statut             │  │
│  │  P1  CDI_signé.pdf                  Analysé            │  │
│  │  P2  Avertissement_15-06.pdf        Analysé            │  │
│  │  P3  Convocation_EP.pdf             Analysé            │  │
│  │  P4  CR_entretien.pdf               En cours...        │  │
│  │  P5  Lettre_licenciement.pdf        En attente         │  │
│  │  P6  Attestations_collegues.pdf     En attente         │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│                    [ Générer la synthèse ]                    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

- Drag & drop massif (Marie uploade tout le dossier d'un coup)
- Numérotation automatique des pièces (P1, P2, P3...)
- Statut temps réel par pièce
- Bouton unique pour lancer la synthèse complète

### Écran 3 — Synthèse (le livrable)

```
┌──────────────────────────────────────────────────────────────┐
│  ← Dupont c/ TechCorp               [Exporter Word] [Copier]│
├─────────────────┬────────────────────────────────────────────┤
│                 │                                            │
│  SOMMAIRE       │  1. CHRONOLOGIE DES FAITS                 │
│                 │                                            │
│  1. Chronologie │  ┌──────────┬──────────────────────────┐   │
│  2. Parties     │  │ 12/01/23 │ Signature CDI - Poste    │   │
│  3. Pièces      │  │          │ développeur, 45K€/an [P1]│   │
│  4. Attention   │  ├──────────┼──────────────────────────┤   │
│  5. Montants    │  │ 15/06/23 │ 1er avertissement pour   │   │
│                 │  │          │ retards répétés [P2]     │   │
│  ────────────── │  ├──────────┼──────────────────────────┤   │
│                 │  │ 02/09/23 │ Convocation entretien    │   │
│  APERÇU PIÈCE  │  │          │ préalable [P3]           │   │
│                 │  │          │ ⚠ Délai < 5 jours ouv.  │   │
│  [Cliquer un    │  └──────────┴──────────────────────────┘   │
│   [P1] pour     │                                            │
│   voir la pièce │  Chaque fait est cliquable :               │
│   source ici]   │  → ouvre la pièce source en surbrillance   │
│                 │  → permet de vérifier en 1 clic            │
│                 │                                            │
└─────────────────┴────────────────────────────────────────────┘
```

**Les 3 features critiques :**
1. **Traçabilité** — Chaque fait renvoie à sa pièce source `[P2]`. Marie vérifie en 1 clic
2. **Points d'attention** — L'agent flag les anomalies (délais, contradictions, pièces manquantes)
3. **Export Word** — Le livrable sort en `.docx` propre. Marie le colle dans ses conclusions. Non-négociable.

---

## 9. Concurrence

### Concurrents directs (Legal AI France)

| Acteur | Modèle | Forces | Faiblesses | Prix |
|--------|--------|--------|------------|------|
| **Doctrine.fr** | SaaS cloud | Base jurisprudentielle massive, notoriété FR | Pas d'analyse de pièces client, cloud uniquement | 99-299€/mois |
| **Predictice** | SaaS cloud | Analyse prédictive, bien implanté | Cloud, pas de synthèse de pièces | 79-199€/mois |
| **Legalstart** | SaaS cloud | Automatisation actes simples | Grand public, pas pour les avocats | N/A |
| **Case Law Analytics** | SaaS cloud | Quantification du risque judiciaire | Niche (prédiction), cloud | Sur devis |
| **Ordalie.ai** | SaaS cloud | Analyse de jurisprudence par IA | Cloud, pas d'analyse de pièces | Sur devis |

### Concurrents internationaux (Legal AI)

| Acteur | Modèle | Forces | Faiblesses |
|--------|--------|--------|------------|
| **Harvey AI** | SaaS cloud (GPT-4) | Puissant, gros cabinets US/UK | Cloud US, pas adapté droit FR, très cher |
| **CoCounsel (Thomson Reuters)** | SaaS cloud | Intégré à Westlaw | Cloud US, droit anglo-saxon |
| **Lexis+ AI (LexisNexis)** | SaaS cloud | Base documentaire immense | Cloud, focus recherche pas synthèse |
| **Casetext** | SaaS cloud | Bon pour la recherche | Racheté par Thomson Reuters, cloud US |

### Notre positionnement vs la concurrence

| Critère | Concurrents | DoveAI |
|---------|-------------|--------|
| **Données** | Cloud (US ou EU) | Self-hosted, rien ne sort du cabinet |
| **Fonction** | Recherche jurisprudentielle | Synthèse de pièces du dossier client |
| **Droit français** | Souvent adapté du droit anglo-saxon | Conçu pour le droit français |
| **Confidentialité** | DPA + cloud = risque déontologique | Zéro risque, traitement 100% local |
| **Cible** | Gros cabinets (50+ avocats) | Cabinets de 4-15 avocats |
| **Prix** | 200-1.000€+/mois | Setup 12.000€ + 290€/mois/utilisateur + 300€/mois support |

### Avantage concurrentiel clé

**Aucun concurrent ne propose l'analyse de pièces client en self-hosted.**

- Doctrine, Predictice, Ordalie = recherche dans des bases publiques (jurisprudence, lois). Pas d'analyse des pièces confidentielles du dossier.
- Harvey, CoCounsel = cloud US. Impossible pour un avocat français soucieux de sa déontologie.
- **DoveAI = le seul à analyser les pièces privées du client, sans qu'elles quittent le cabinet.**

---

## 10. Arguments de Vente

### Pour l'associé(e) fondateur (le décideur)

**Argument ROI :**
> "Chaque dossier analysé manuellement coûte 3 à 8 heures de temps collaborateur à 200€/h. Soit 600 à 1.600€ par dossier. Avec DoveAI, c'est 30 minutes. Sur 10 dossiers par mois, vous économisez 6.000 à 15.000€ de temps facturable."

**Argument rentabilité :**
> "Vos collaborateurs passent 30% de leur temps à lire des pièces. Avec DoveAI, ils passent ce temps à plaider, conseiller et facturer. Le ROI est atteint dès le 2ème mois."

**Argument confidentialité :**
> "Aucune donnée ne quitte votre cabinet. Le serveur est chez vous, sur votre réseau. Vous êtes en conformité totale avec le RIN et les recommandations du CNB."

**Argument concurrentiel :**
> "Les cabinets qui adoptent l'IA traitent plus de dossiers avec la même équipe. Ceux qui attendent perdront des clients face à des confrères plus rapides."

### Pour Marie (l'utilisatrice)

**Argument praticité :**
> "Vous recevez 50 pièces adverses. Vous les glissez dans DoveAI. En 5 minutes, vous avez une chronologie, un résumé de chaque pièce, et les points d'attention. Vous relisez, vous ajustez, vous exportez en Word."

**Argument fiabilité :**
> "Chaque fait dans la synthèse renvoie à la pièce source. Vous vérifiez en un clic. L'IA fait le travail de lecture, vous gardez le contrôle intellectuel."

**Argument qualité de vie :**
> "Vous ne passez plus vos soirées à lire des pièces. Vous les uploadez le matin, la synthèse est prête quand vous prenez votre café."

### Objections fréquentes et réponses

| Objection | Réponse |
|-----------|---------|
| "Je ne fais pas confiance à l'IA pour du juridique" | "L'IA ne donne pas de conseil juridique. Elle lit et synthétise. Vous relisez et validez tout. C'est un stagiaire qui lit très vite, pas un avocat." |
| "C'est cher" | "290€/mois par avocat = le coût de 1,5h de collaborateur. Vous en économisez 15 à 30h par mois. C'est moins cher que Doctrine Flow (322€/mois) et vos données restent chez vous." |
| "Mes données vont partir sur le cloud" | "Non. Le serveur est physiquement dans votre cabinet. On peut vous montrer : débranchez internet, ça fonctionne toujours." |
| "Mon logiciel de gestion fait déjà ça" | "Secib, Kleos, Jarvis gèrent vos dossiers. Ils ne lisent pas vos pièces. DoveAI fait ce qu'aucun logiciel de gestion ne fait : analyser le contenu." |
| "L'IA va remplacer les avocats" | "L'IA ne plaide pas, ne négocie pas, ne conseille pas. Elle lit des PDF. Les avocats qui utilisent l'IA seront plus efficaces que ceux qui ne l'utilisent pas." |
| "Je veux tester avant de m'engager" | "On installe gratuitement, vous testez sur 3 dossiers réels pendant 30 jours. Si ça ne vous convainc pas, on reprend le matériel." |

---

## 11. Roadmap Produit — Next Steps détaillés

> **Principe** : chaque incrément produit un livrable testable. Pas de tunnel de 3 mois sans feedback.

---

### INCRÉMENT 0 — Infra R&D (Semaine 1-2)

**Objectif : avoir un environnement de dev local pour faire tourner les modèles Qwen3.**

| # | Action | Livrable | Budget | Durée |
|---|--------|----------|--------|-------|
| 0.1 | **Acheter le Mac Mini M4 Pro 48GB/1TB** | Machine livrée | 2.629€ | [apple.com/fr](https://www.apple.com/fr/shop/buy-mac/mac-mini) — livraison 3-5 jours |
| 0.2 | Acheter onduleur APC Back-UPS 700VA | Protection électrique | ~100€ | LDLC |
| 0.3 | Installer macOS, Homebrew, Docker Desktop | Environnement prêt | 0€ | 1h |
| 0.4 | **Installer Ollama + télécharger Qwen3-32B** | `ollama pull qwen3:32b` — modèle opérationnel | 0€ | 30 min install + 20 min download |
| 0.5 | Installer Open WebUI | Interface ChatGPT-like locale | 0€ | 5 min |
| 0.6 | **Tester manuellement** : uploader un PDF de pièces juridiques, demander une synthèse à Qwen3-32B via Open WebUI | Preuve de concept manuelle | 0€ | 2h |
| 0.7 | Télécharger Qwen3-Embedding-0.6B | `ollama pull qwen3-embedding:0.6b` | 0€ | 5 min |

**Budget incrément 0 : ~2.730€**
**Livrable** : un Mac Mini qui fait tourner Qwen3-32B et produit des synthèses via Open WebUI. Tu peux montrer ça à un avocat.

---

### INCRÉMENT 1 — Pipeline CLI (Semaine 3-5)

**Objectif : automatiser le flux PDF → texte → synthèse structurée → Word, en ligne de commande.**

| # | Action | Stack | Durée estimée |
|---|--------|-------|---------------|
| 1.1 | **Extraction texte PDF** : parser PDF texte (pdfplumber/PyMuPDF) + OCR scans (Tesseract `fra`) | Python | 2-3 jours |
| 1.2 | **Chunking intelligent** : découper les pièces longues en segments de ~4K tokens avec overlap | Python (LangChain ou custom) | 1-2 jours |
| 1.3 | **Prompt engineering** : écrire le system prompt de synthèse juridique (chronologie, parties, montants, points d'attention, pièces citées) | Prompt Qwen3-32B | 2-3 jours (itération) |
| 1.4 | **Appel LLM local** : connecter au serveur Ollama (API REST `localhost:11434`) | Go ou Python | 1 jour |
| 1.5 | **Export Word** : générer un .docx structuré avec la synthèse (python-docx ou Go equivalent) | Python | 1-2 jours |
| 1.6 | **Script CLI bout en bout** : `doveai analyze ./pieces/ --output synthese.docx` | Go ou Python | 1 jour |

**Budget : 0€** (que du dev)
**Livrable** : une commande CLI qui prend un dossier de PDFs et sort un Word de synthèse. Testable sur des vrais dossiers.

---

### INCRÉMENT 2 — Qualité & Embeddings (Semaine 6-8)

**Objectif : améliorer la qualité de la synthèse et ajouter la recherche sémantique.**

| # | Action | Stack | Durée |
|---|--------|-------|-------|
| 2.1 | **Indexation vectorielle** : embedder chaque pièce avec Qwen3-Embedding-0.6B, stocker dans SQLite + sqlite-vss (ou ChromaDB) | Python + SQLite | 2-3 jours |
| 2.2 | **RAG pipeline** : pour chaque question/section de synthèse, retriever les chunks pertinents avant d'appeler le LLM | Python/Go | 2-3 jours |
| 2.3 | **Évaluation qualité** : créer 5-10 dossiers de test avec synthèses de référence (faites par un avocat), scorer automatiquement | Manual + script | 3-5 jours |
| 2.4 | **Itérer les prompts** : ajuster le prompt système basé sur les résultats d'évaluation | Prompt engineering | continu |
| 2.5 | **OCR multimodal** : intégrer Qwen3-VL-Embedding-2B pour les scans dégradés et photos | Python + Ollama | 2 jours |

**Budget : 0€**
**Livrable** : synthèses nettement meilleures grâce au RAG. Recherche sémantique dans les pièces ("trouve toutes les mentions de licenciement").

---

### INCRÉMENT 3 — Application Web v1 (Semaine 9-14)

**Objectif : remplacer le CLI par une vraie interface web utilisable par un avocat non-technique.**

| # | Action | Stack | Durée |
|---|--------|-------|-------|
| 3.1 | **Backend API** : endpoints REST — upload pièces, lancer analyse, récupérer synthèse, lister dossiers | **Go** (Gin ou Chi) | 5-7 jours |
| 3.2 | **Base de données** : SQLite — tables dossiers, pièces, synthèses, utilisateurs | Go + SQLite | 2 jours |
| 3.3 | **Frontend** : interface Angular — écran "Mes Dossiers", écran "Upload Pièces", écran "Synthèse" (cf. maquettes cabinet-avocat.pen) | **Angular** | 7-10 jours |
| 3.4 | **Authentification** : login simple email/mot de passe (JWT), multi-utilisateur basique | Go + Angular | 2-3 jours |
| 3.5 | **Upload + traitement async** : upload de N pièces, processing en arrière-plan avec statut (En attente → En cours → Analysé) | Go (goroutines) + WebSocket ou polling | 3-4 jours |
| 3.6 | **Export Word depuis l'UI** : bouton "Télécharger la synthèse" | Go + python-docx (ou Go template) | 1 jour |
| 3.7 | **Dockeriser** : `docker-compose up` lance tout (API Go + Angular build + Ollama + SQLite) | Docker Compose | 2-3 jours |

**Budget : 0€**
**Livrable** : une app web complète en local. Un avocat peut se connecter, uploader des pièces, et récupérer sa synthèse Word.

---

### INCRÉMENT 3bis — Prospection (à partir de Semaine 10, EN PARALLÈLE du dev)

**Objectif : avoir 3-5 cabinets intéressés avant que le produit soit prêt. Ne JAMAIS attendre d'avoir fini pour prospecter.**

> **Erreur fatale** : coder pendant 6 mois puis chercher des clients. Tu dois vendre avant d'avoir fini. Si personne ne veut ta démo, tu le sauras tôt et tu pivoteras.

#### Technique recommandée : le "Dossier Gratuit"

**Principe** : tu proposes à un avocat d'analyser un de ses vrais dossiers gratuitement, en face-à-face. Pas de pitch PowerPoint. Pas de "voici notre solution". Tu fais le travail devant lui.

**Pourquoi ça marche :**
- L'avocat voit le résultat sur SES pièces, pas sur une démo fictive
- Tu montres que tes données restent sur TON Mac Mini (tu l'apportes physiquement)
- Le résultat parle de lui-même — pas besoin de slides
- Tu récupères du feedback réel sur la qualité de la synthèse
- L'avocat se sent impliqué, pas démarché

#### Étapes de prospection

| # | Action | Détail | Quand |
|---|--------|--------|-------|
| 3b.1 | **Identifier 20 cabinets cibles** | 4-15 avocats, droit des affaires/social/civil, dans ta ville + 50km. Utiliser [avocats.fr](https://www.avocats.fr) (annuaire CNB) + LinkedIn | S10 |
| 3b.2 | **Préparer la démo portable** | Mac Mini + écran portable + app web v1 fonctionnelle sur 3 vrais dossiers publics (décisions publiées sur Légifrance) | S12-14 |
| 3b.3 | **Approche LinkedIn (warm)** | Connecter avec les associés/collaborateurs. Pas de pitch. Poster 1-2 contenus/semaine sur l'IA juridique et la confidentialité. Se positionner comme expert. | S10+ (continu) |
| 3b.4 | **Email froid ciblé** (voir template ci-dessous) | Envoyer à 20 cabinets. Objectif : 3-5 réponses (taux 15-25%) | S14 |
| 3b.5 | **Démo "Dossier Gratuit"** | Rencontrer l'avocat, lui demander un dossier non-sensible (ou utiliser un dossier public), lancer l'analyse devant lui, lui donner le Word | S15-20 |
| 3b.6 | **Relance post-démo** | Envoyer la synthèse + demander "Est-ce que ça vous aurait fait gagner du temps ?" | 48h après |
| 3b.7 | **Closer le pilote** | "On vous installe gratuitement pendant 2 mois. Si le ROI est là, on continue." | S20-24 |

#### Template email froid (à personnaliser)

```
Objet : [Prénom], une question sur vos pièces adverses

Maître [Nom],

Quand vous recevez 50 pièces adverses un vendredi avec une audience mardi,
combien de temps passez-vous à les lire et synthétiser ?

Je développe un outil qui fait ce travail en 30 minutes — et les données
ne quittent jamais votre cabinet (aucun cloud, tout tourne sur un serveur
physique dans vos locaux).

Je cherche 3 cabinets pour tester gratuitement l'outil pendant 2 mois.
En échange, je demande juste votre feedback honnête.

Seriez-vous ouvert à une démo de 20 minutes ? Je me déplace avec le matériel.

[Prénom Nom]
Fondateur, DoveAI
[tél]
```

**Pourquoi cet email marche :**
- Première ligne = leur douleur exacte (pièces adverses le vendredi)
- Pas de jargon tech (pas de "IA", "LLM", "modèle")
- L'argument confidentialité est immédiat ("aucun cloud")
- Offre sans risque (gratuit, 2 mois, feedback)
- Déplacement physique = sérieux + confiance

#### Canaux de prospection par priorité

| Canal | Effort | Conversion | Pourquoi |
|-------|--------|-----------|----------|
| **1. Réseau personnel** | Faible | Élevée | Tu connais peut-être un avocat, un ami d'ami, un ancien client. Demande une intro. |
| **2. Email froid ciblé** | Moyen | 15-25% de réponse | Personnalisé, pas de masse. 20 emails max, pas 200. |
| **3. LinkedIn (contenu + DM)** | Moyen | Moyenne | Poster sur la confidentialité des données juridiques + IA. Les avocats sont sur LinkedIn. |
| **4. Ordres des avocats locaux** | Moyen | Élevée si accepté | Proposer une conférence/atelier gratuit "IA et secret professionnel" à ton barreau local. |
| **5. Conférences legaltech** | Élevé | Variable | Village de la Justice, Paris Legal Hackers, Legaltech Summit. Cher en temps mais bon réseau. |
| **6. Partenaires logiciels** | Élevé | Élevée à terme | Secib, Kleos, Jarvis — une fois que tu as 5+ clients, ils pourraient te recommander. Trop tôt au début. |

#### KPIs prospection

| Métrique | Objectif S10-S24 |
|----------|-----------------|
| Cabinets contactés | 20 |
| Réponses positives | 5 (25%) |
| Démos réalisées | 3-5 |
| Pilotes signés | 1-2 |
| Conversion pilote → payant | 80%+ |

> **Règle** : 1h de prospection par jour minimum, même quand tu codes. Bloque le créneau dans ton agenda. Le produit parfait sans client = 0€.

#### Déroulé d'une démo "Dossier Gratuit" (45 min)

> **Contexte** : la prospection démarre en S10, tu es en incrément 3 (App Web v1 en cours). Tu n'as pas encore l'anonymisation (incrément 4), ni le dashboard admin (incrément 5). Ce n'est pas grave — tu as le pipeline CLI (incrément 1) et la qualité RAG (incrément 2). C'est suffisant pour convaincre.

**Ce que tu as à S10-14 pour la démo :**
- ✅ Pipeline CLI qui transforme des PDFs en synthèse Word
- ✅ RAG + embeddings pour des synthèses de qualité
- ✅ Open WebUI comme interface (en attendant l'app Angular)
- ⚠️ Pas encore d'UI custom (Angular en cours) — tu montres Open WebUI ou le CLI
- ❌ Pas d'anonymisation — tu utilises des dossiers publics ou non-sensibles
- ❌ Pas de dashboard admin — pas grave, l'associé s'en fiche à ce stade

**Ce que tu montres à S15-20 (app web prête) :**
- ✅ Interface Angular complète (upload, statuts, synthèse)
- ✅ Export Word depuis l'UI
- ⚠️ Anonymisation en cours — tu préviens : "La couche d'anonymisation arrive dans 3 semaines"

##### Avant la démo (préparation)

- Demande à l'avocat : **"Avez-vous un dossier non-sensible avec 10-20 pièces que je pourrais analyser devant vous ?"**
- Si l'avocat hésite (confidentialité) : **utilise un dossier public** — télécharge une affaire sur Légifrance (arrêt de Cour d'appel), ou prépare un dossier fictif réaliste (droit social : licenciement contesté, 15 pièces)
- **Important** : puisque tu n'as pas encore l'anonymisation, ne travaille QUE sur des dossiers publics ou non-sensibles. Dis-le clairement : "Pour cette démo je préfère utiliser un dossier qui n'est pas confidentiel. La couche d'anonymisation sera prête pour le pilote."

##### Le jour J

**Phase 1 — Installation (5 min)**
- Tu arrives avec ton Mac Mini, un écran portable, un clavier/souris
- Tu branches sur l'écran portable (ou sur un écran du cabinet si proposé)
- Tu montres physiquement : "Voilà la machine. Tout tourne là-dedans."
- **Tu coupes le Wi-Fi devant l'avocat** pour prouver le point

**Phase 2 — Upload des pièces (5 min)**
- **S10-14** (CLI + Open WebUI) : tu ouvres un terminal, tu lances `doveai analyze ./pieces/` ou tu passes par Open WebUI
- **S15+** (Angular prêt) : tu ouvres l'interface web (localhost), tu crées un dossier, tu uploades les pièces
- L'avocat voit les fichiers. Tu expliques : "Chaque pièce va être lue, indexée, puis synthétisée."

**Phase 3 — L'analyse en direct (10-15 min)**
- Tu lances l'analyse. L'avocat regarde la machine travailler
- **C'est LE moment clé** — il voit que c'est local, pas un appel cloud
- Pendant le traitement, tu parles comme un stagiaire, pas comme un ingénieur : "Le système lit chaque pièce, construit une chronologie, identifie les parties, les montants, les contradictions."
- **Tu ne dis JAMAIS** : "modèle 32 milliards de paramètres", "quantization Q4", "embeddings vectoriels". L'avocat s'en fout. Il veut savoir si ça marche.

**Phase 4 — La synthèse (10 min)**
- La synthèse s'affiche (ou tu ouvres le Word généré). Tu la parcours avec l'avocat :
  - **Chronologie des faits** : "Voici ce que le système a reconstitué. C'est correct ?"
  - **Points d'attention** : "Le système a repéré un délai potentiellement dépassé ici. Vous l'aviez vu ?"
  - **Montants** : "Voilà les sommes extraites de l'ensemble des pièces."
  - **Pièces citées** : chaque affirmation référence [P1], [P3], [P7]
- **Tu demandes à l'avocat de critiquer** : "Qu'est-ce qui manque ? Qu'est-ce qui est faux ?"
- Note tout. C'est ton feedback produit le plus précieux.

**Phase 5 — Close (5-10 min)**
- Tu exportes le Word, tu lui donnes le fichier
- "Combien de temps ça vous aurait pris manuellement ?" — il donne son chiffre, tu notes
- **Tu ne vends rien.** Tu dis : "Je cherche 3 cabinets pilotes pour tester gratuitement pendant 2 mois. Si ça vous fait gagner du temps, on en reparle. Sinon, vous gardez la synthèse."
- "L'installation définitive, c'est moi qui viens, je branche la machine, et en 1h c'est opérationnel."

##### Questions à poser pendant et après la démo

> **Objectif** : valider les hypothèses du business plan, comprendre le quotidien réel, et calibrer l'offre. Tu ne vends pas — tu enquêtes. Note TOUT.

**Pendant la démo (Phase 4 — quand l'avocat regarde la synthèse) :**

| # | Question | Ce que tu valides | Hypothèse à vérifier |
|---|----------|-------------------|---------------------|
| Q1 | "Combien de temps ça vous aurait pris de faire cette synthèse manuellement ?" | Temps réel économisé | Notre hypothèse de 3h/dossier |
| Q2 | "C'est un dossier typique pour vous, ou plutôt gros/petit ?" | Taille moyenne des dossiers | Volume de pièces moyen |
| Q3 | "Qu'est-ce qui manque dans cette synthèse ? Qu'est-ce qui est faux ?" | Qualité perçue | Le LLM est-il assez bon ? |
| Q4 | "Est-ce que vous auriez structuré la synthèse autrement ?" | Format attendu | Adapter le template Word |

**Après la démo (Phase 5 — discussion ouverte) :**

| # | Question | Ce que tu valides | Hypothèse à vérifier |
|---|----------|-------------------|---------------------|
| Q5 | "Combien de dossiers recevez-vous avec de nouvelles pièces chaque mois ?" | Volume réel d'usage | Notre hypothèse de 10-20/mois/avocat |
| Q6 | "Vous êtes combien d'avocats au cabinet ? Et combien feraient de l'analyse de pièces ?" | Nombre d'utilisateurs potentiels | Dimensionnement de l'offre |
| Q7 | "Quel logiciel de gestion vous utilisez ? Secib, Kleos, Jarvis, autre ?" | Intégration prioritaire | Quoi développer en premier |
| Q8 | "Aujourd'hui vos pièces sont où ? Sur un serveur, en local, dans le cloud ?" | Infra existante | Facilité d'installation |
| Q9 | "Est-ce que des pièces vous arrivent en scan papier ou tout est numérique ?" | Besoin OCR | Prioriser l'OCR multimodal ou pas |
| Q10 | "La confidentialité des données, c'est un sujet pour vous ou pas vraiment ?" | Force de l'argument self-hosted | Notre positionnement unique |

**Questions business (si l'avocat est intéressé — Phase 5 ou en relance J+7) :**

| # | Question | Ce que tu valides | Hypothèse à vérifier |
|---|----------|-------------------|---------------------|
| Q11 | "Qui décide de l'achat d'un outil comme celui-ci dans votre cabinet ?" | Décideur = associé ? | Cycle de vente |
| Q12 | "Vous avez un budget annuel pour les outils numériques ? Dans quelle fourchette ?" | Budget disponible | Pricing à 290€/mois/utilisateur + 300€ support |
| Q13 | "Vous utilisez déjà Doctrine, Predictice, Lexis+AI ?" | Concurrence installée | Positionnement vs existant |
| Q14 | "Si cet outil vous faisait gagner [X]h par mois, combien seriez-vous prêt à payer ?" | Willingness to pay | Validation du pricing |
| Q15 | "Qu'est-ce qui vous empêcherait de l'adopter ?" | Objections / freins | Friction à résoudre |

**Questions pour le pilote (si l'avocat accepte) :**

| # | Question | Pourquoi |
|---|----------|----------|
| Q16 | "On peut se voir 15 min chaque semaine pendant le pilote pour que je recueille votre feedback ?" | Itération rapide sur la qualité |
| Q17 | "Vous seriez d'accord pour chronométrer 2-3 dossiers avec et sans l'outil ?" | Mesure ROI réel pour le case study |
| Q18 | "Si les résultats sont bons, seriez-vous ouvert à recommander l'outil à un confrère ?" | Referral = meilleur canal de vente pour les avocats |

##### Grille de scoring post-démo

> Remplis cette grille après chaque démo pour comparer les prospects et prioriser.

| Critère | Score (1-5) | Notes |
|---------|-------------|-------|
| Intérêt manifesté | /5 | A posé des questions ? A demandé le prix ? |
| Taille du cabinet | /5 | 5=10+ avocats, 3=4-8, 1=solo |
| Volume estimé de dossiers/mois | /5 | 5=30+, 3=15-30, 1=<10 |
| Budget perçu | /5 | A un budget outils ? Paie déjà Predictice/Doctrine ? |
| Urgence du besoin | /5 | "On en a besoin hier" vs "c'est intéressant" |
| Sensibilité confidentialité | /5 | 5="C'est notre priorité absolue", 1="Bof, on utilise déjà le cloud" |
| Facilité d'accès au décideur | /5 | Tu parles à l'associé ou à un collaborateur ? |
| **TOTAL** | **/35** | **>25 = prospect chaud, 15-25 = tiède, <15 = froid** |

##### Après la démo

| Timing | Action |
|--------|--------|
| **J+1** | Email de remerciement + synthèse Word en PJ + "N'hésitez pas à me dire si vous l'avez utilisée" |
| **J+7** | Relance douce : "Est-ce que la synthèse vous a été utile sur ce dossier ?" + poser Q11-Q15 si pas encore fait |
| **J+14** | Si positif : "On lance le pilote ? Je reviens installer la machine dans votre cabinet." |
| **J+14** | Si silence : une dernière relance puis tu passes au suivant. Pas d'insistance. |

##### Matériel à avoir dans le sac

| Matériel | Budget | Pourquoi |
|----------|--------|---------|
| Mac Mini M4 Pro 48GB | (déjà acheté — incrément 0) | La machine de démo ET de R&D |
| Écran portable USB-C 15" | ~150-200€ | Pour ne pas dépendre du matériel du cabinet |
| Clavier + souris sans fil | ~50€ | Setup propre et pro |
| Câble Thunderbolt + HDMI | ~30€ | Backup si l'avocat préfère son écran |
| Multiprise | ~15€ | Les bureaux d'avocats n'ont jamais assez de prises |
| Clé USB vide | ~10€ | Pour que l'avocat te donne ses pièces |
| **Total kit démo** | **~250-300€** | |

##### 3 erreurs fatales à éviter

| Erreur | Pourquoi c'est fatal |
|--------|---------------------|
| **Parler technique** | L'avocat décroche en 10 secondes. Il s'en fout du modèle. Il veut savoir si ça marche. Parle comme un stagiaire qui décrit ce qu'il fait. |
| **Montrer un PowerPoint avant la démo** | Tu perds la surprise. La démo en live EST le pitch. Le résultat sur SES pièces vaut 1000 slides. |
| **Promettre la perfection** | Dis clairement : "Le système se trompe parfois. C'est un premier jet que vous relisez en 30 min au lieu de 4h." L'honnêteté crée la confiance. Les avocats détectent le bullshit. |

---

### INCRÉMENT 4 — Anonymisation (Semaine 15-17)

**Objectif : intégrer la couche d'anonymisation pour sécuriser le pipeline.**

> **Stack mise à jour** : on utilise le **moteurNER de la Cour de cassation** (entraîné sur 2M décisions juridiques) au lieu de Presidio + CamemBERT-NER. Moins de code à écrire, meilleure qualité sur du texte juridique.

| # | Action | Stack | Durée |
|---|--------|-------|-------|
| 4.1 | **Déployer pseudonymisation-api** (Cour de cassation) en container Docker | Docker + [pseudonymisation-api](https://github.com/Cour-de-cassation/pseudonymisation-api) | 1 jour |
| 4.2 | **Tester le moteurNER** sur des pièces juridiques réelles (décisions Judilibre) et mesurer la qualité | Python + tests | 2 jours |
| 4.3 | **Ajouter les regex FR** en complément : IBAN, sécu sociale, téléphone, SIRET, email, RCS (le NER ne les couvre pas) | Python | 1 jour |
| 4.4 | **Pseudonymisation cohérente** : table de mapping avec Faker fr_FR, même faux nom dans tout le dossier | Python | 2 jours |
| 4.5 | **UI de validation** : écran où l'avocat voit les entités détectées surlignées et peut corriger/ajouter (s'inspirer de [Label](https://github.com/Cour-de-cassation/label)) | Angular + Go API | 3-4 jours |
| 4.6 | **Dé-pseudonymisation** : remplacer les faux noms par les vrais dans la synthèse finale | Go/Python | 1 jour |
| 4.7 | **Fallback** : si le moteurNER ne couvre pas certains cas, intégrer CamemBERT-NER via Presidio en backup | Python (optionnel) | 1-2 jours |

**Budget : 0€** (tout est open-source)
**Livrable** : même flux, mais chaque document passe par l'anonymisation avant le LLM. L'avocat valide en 2 clics. Argument commercial : "Même moteur que la Cour de cassation."

---

### INCRÉMENT 5 — Admin & Multi-tenant (Semaine 18-20)

**Objectif : dashboard admin pour le gérant du cabinet + gestion des utilisateurs.**

| # | Action | Stack | Durée |
|---|--------|-------|-------|
| 5.1 | **Dashboard admin** : stats (dossiers traités, heures économisées, ROI estimé, usage GPU) | Angular + Go API | 3-4 jours |
| 5.2 | **Gestion utilisateurs** : inviter des collaborateurs, rôles (admin/collaborateur), licences | Go + Angular | 2-3 jours |
| 5.3 | **Monitoring système** : état du LLM, GPU utilisé, stockage, uptime | Go (metrics) + Angular | 2 jours |
| 5.4 | **Audit trail** : log de toutes les actions (upload, anonymisation, synthèse, export) pour conformité RGPD | Go + SQLite | 1-2 jours |

**Budget : 0€**
**Livrable** : l'associé peut voir le ROI de l'outil et gérer les accès. C'est l'écran qui vend à la personne qui signe le chèque.

---

### INCRÉMENT 6 — Packaging & Déploiement client (Semaine 21-24)

**Objectif : transformer le prototype en produit installable chez un client en 1h.**

| # | Action | Stack | Durée |
|---|--------|-------|-------|
| 6.1 | **Script d'installation one-liner** : installe tout sur un Mac Mini neuf (Ollama, modèles, Docker, app) | Bash/Ansible | 3-4 jours |
| 6.2 | **Mise à jour OTA** : mécanisme de push de nouvelles versions sans intervention du cabinet | Go (auto-updater) | 3-4 jours |
| 6.3 | **Backup automatique** : sauvegarde quotidienne chiffrée des données (SQLite + pièces) sur un disque externe ou NAS | Script + cron | 1-2 jours |
| 6.4 | **Monitoring à distance** : heartbeat + alertes vers DoveAI si le serveur est down (avec consentement client) | Go + webhook | 2 jours |
| 6.5 | **Guide utilisateur** : PDF/web de 10 pages max — screenshots de chaque écran, FAQ | Markdown → PDF | 2-3 jours |
| 6.6 | **Contrat type** : CGV, DPA (Data Processing Agreement), SLA — faire valider par un avocat | Legal | externe |

**Budget : ~500-1.000€** (relecture juridique CGV/DPA)
**Livrable** : un produit packagé. Tu arrives chez le client avec un Mac Mini, tu branches, tu lances le script, c'est en prod en 1h.

---

### INCRÉMENT 7 — Pilote client #1 (Semaine 25-28)

**Objectif : installer chez le premier cabinet et itérer sur le feedback réel.**

| # | Action | Durée |
|---|--------|-------|
| 7.1 | **Trouver le client pilote** : réseau personnel, ordres des avocats locaux, LinkedIn, conférences avocats | En parallèle des incréments 4-6 |
| 7.2 | **Installation sur site** : apporter le ThinkStation PGX, installer, configurer, former | 1/2 journée |
| 7.3 | **2 mois pilote gratuit** : support rapproché, appels hebdo, collecte de feedback | 8 semaines |
| 7.4 | **Itérer** : corriger les bugs, ajuster les prompts au jargon du cabinet, améliorer la qualité | Continu |
| 7.5 | **Mesurer le ROI** : combien de dossiers traités, temps réel économisé, satisfaction | Semaine 8 du pilote |
| 7.6 | **Convertir en client payant** : présenter les chiffres, signer l'abonnement 12 mois | |

**Budget : ~4.365€** (ThinkStation PGX pour le client)
**Livrable** : premier client payant + premier case study.

---

### INCRÉMENT 8 — Clients #2 à #5 + améliorations (Mois 8-12)

| # | Action |
|---|--------|
| 8.1 | Utiliser le case study client #1 pour signer les clients suivants |
| 8.2 | **Intégrations logiciels cabinet** : connecteur Secib, Kleos ou Jarvis (commencer par celui du client) |
| 8.3 | **Fine-tuning Qwen3-32B** sur les synthèses validées par les avocats (LoRA, 500+ exemples) |
| 8.4 | **Modèles Word personnalisés** par cabinet (en-tête, mise en page, styles) |
| 8.5 | Commencer la prospection systématique (site web, démos, conférences barreaux) |

---

### Résumé timeline et budget

| Incrément | Semaines | Livrable clé | Budget |
|-----------|----------|-------------|--------|
| **0 — Infra R&D** | S1-2 | Mac Mini + Qwen3-32B qui tourne | **2.730€** |
| **1 — Pipeline CLI** | S3-5 | `doveai analyze` → Word | 0€ |
| **2 — Qualité & RAG** | S6-8 | Synthèses avec RAG + search sémantique | 0€ |
| **3 — App Web v1** | S9-14 | Interface Go/Angular complète | 0€ |
| **3bis — Prospection** | S10+ (parallèle) | 20 contacts, 5 démos, 1-2 pilotes | 0€ (ton temps) |
| **4 — Anonymisation** | S15-17 | moteurNER (Cour de cass.) intégré | 0€ |
| **5 — Admin** | S18-20 | Dashboard + multi-utilisateur | 0€ |
| **6 — Packaging** | S21-24 | Produit installable en 1h | ~500-1.000€ |
| **7 — Client #1** | S25-28 | Premier client payant | ~4.365€ |
| **8 — Scale** | M8-12 | 5 clients, intégrations, fine-tune | variable |
| | | **Budget total lancement** | **~7.600-8.100€** |

---

### Points critiques à surveiller

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Qualité des synthèses insuffisante | Le produit ne vend pas | Évaluation rigoureuse (incrément 2) + itération prompts avant tout client |
| Pas de client pilote trouvé | Pas de feedback réel | Commencer la prospection dès l'incrément 3, pas à la fin |
| OCR scans dégradés | Pièces illisibles = synthèse fausse | Qwen3-VL + fallback humain + indicateur de confiance |
| Avocat n'adopte pas l'outil | Churn | UX ultra-simple + formation + support rapproché pendant le pilote |
| Problème juridique (responsabilité si erreur dans la synthèse) | Risque légal | Disclaimer clair ("outil d'aide, pas de substitution") + validation humaine obligatoire |

---

## 12. Scalabilité du modèle self-hosted

### Le constat : le self-hosted ne scale pas comme un SaaS

| Frein | Détail | Impact |
|---|---|---|
| **Déploiement physique** | Chaque client = déplacement, installation, configuration | 1/2 journée par client. 30 clients/an = 15 jours juste pour installer |
| **Capital immobilisé** | 4.265€ de matériel par client à avancer | 10 clients = 42.650€ d'avance (couvert par le setup, mais à avancer) |
| **Support N serveurs** | Chaque serveur est un point de maintenance unique | 30 serveurs dans 30 cabinets = 30 configs à monitorer, updater, dépanner |
| **Mises à jour** | Pousser un update sur N machines physiques ≠ 1 déploiement cloud | Nécessite un système OTA fiable (incrément 6) |
| **Géographie** | Déplacement physique requis | Limité à ~100km autour de la base. Au-delà = pas viable pour 1 installation |
| **Panne hardware** | Un ThinkStation tombe en panne chez un client | Intervention physique ou envoi d'un remplacement. SLA difficile à tenir |
| **Croissance du cabinet** | Le client passe de 5 à 20 avocats | 1 ThinkStation PGX = 3-5 utilisateurs simultanés. Au-delà = 2e serveur nécessaire |

### Comparaison coût marginal : DoveAI vs SaaS

| | DoveAI (self-hosted) | Concurrent SaaS (Doctrine Flow) |
|---|---|---|
| Coût marginal par nouveau client | **~4.265€** + 1/2 journée sur site | **~0€** (juste un login) |
| Temps pour onboarder | 1/2 journée sur site | 5 minutes |
| Support | N serveurs physiques à maintenir | 1 infrastructure centralisée |
| Mise à jour | Push sur N machines | 1 déploiement |
| Géographie | Limitée à la région | Illimitée |

### Ce qui scale bien dans le modèle actuel

- **Le revenu par client** : 290€/user/mois × nombre d'avocats. Plus le cabinet est gros, plus de revenus sans effort supplémentaire.
- **Le récurrent** : une fois installé, 90-97% de marge. Le support est léger tant que ça tourne.
- **Le setup** : 7.735€ de marge immédiate par client. Ça finance la croissance.

### Les 3 phases de scalabilité

#### Phase 1 — Niche régionale (0-2 ans, objectif réaliste)

- 10-30 clients dans la région
- Revenu : 100-300K€/an
- 1 personne fait tout (install, support, dev)
- **C'est suffisant pour vivre très bien et valider le modèle**

#### Phase 2 — Réseau de techniciens (2-3 ans)

- Former des techniciens freelance par région pour installer et maintenir
- Se concentrer sur le dev + la vente
- Coût : 200-500€/installation sous-traitée (marge setup reste >7.000€)
- 50-100 clients possibles
- Couverture nationale

#### Phase 3 — Hybride self-hosted + cloud managé (3+ ans)

Le vrai pivot de scalabilité :

| Composant | Où | Pourquoi |
|---|---|---|
| **Données client + LLM** | Self-hosted (ThinkStation PGX chez le client) | Secret professionnel garanti |
| **Admin, monitoring, updates, licensing** | Cloud DoveAI | Gestion centralisée de tous les clients |
| **Orchestration** | Cloud → push vers les serveurs clients | 1 clic pour updater 100 clients |

Le serveur chez le client **phone home** vers le cloud DoveAI pour recevoir les mises à jour, remonter les métriques de santé, et valider la licence. Les données restent 100% locales, mais la gestion est centralisée.

**Modèle de référence** : GitLab Self-Managed, Palantir Foundry, HashiCorp — tous proposent du self-hosted avec management centralisé.

### Conclusion scalabilité

La scalabilité n'est **pas le problème des 2 premières années**. Le problème c'est de trouver 3-5 clients et de prouver que le produit marche. Le modèle self-hosted est le différenciateur commercial — c'est ce qui permet de vendre face à Doctrine Flow et les autres.

La question de la scalabilité se posera à **10+ clients**. À ce moment-là, la phase 2 (techniciens freelance) puis la phase 3 (hybride) permettent de passer à 100+ clients sans changer le positionnement produit.

---

## 13. Fact-check des hypothèses (avril 2026)

> Sources : CNB, CNBF, Ministère de la Justice, Glassdoor, LegalStart, Pamplemousse Magazine, AppliCab, OptimumIA

| Hypothèse | Valeur dans le doc | Donnée réelle | Source | Verdict |
|-----------|-------------------|---------------|--------|---------|
| Taux horaire collaborateur | 180€/h | Province : 150-250€ HT/h, Paris : 250-400€. Moyenne ~200€ | [LegalStart](https://www.legalstart.fr/fiches-pratiques/accompagnement/honoraires-avocat/), [AJFR](https://www.ajfr-avocats.fr/blog/combien-coute-un-avocat-collaborateur) | ✅ Conservateur, OK |
| % temps tâches admin/analyse | 30-40% | **73% des avocats passent + de 40%** sur les tâches répétitives | [CNB 2024](https://www.cnb.avocat.fr/fr/les-chiffres-cles-de-la-profession-davocat), [OptimumIA](https://optimumia.fr/automatisation-des-taches-juridiques-avocats-le-guide-complet-2025/) | ✅ En dessous de la réalité |
| Temps économisé/dossier | 3h | Pas de stat directe. Plausible si 40%+ du temps est admin | — | ⚠️ À valider en pilote |
| Dossiers actifs/avocat | 50-100 | ~100 simultanés (objectif réaliste) | [AppliCab](https://applicab-avocats.com/combien-un-avocat-peut-il-traiter-de-dossiers-simultanement/) | ✅ Correct |
| Dossiers nécessitant synthèse/mois | 10-20/avocat | Pas de stat. Estimation 20-30% des actifs | — | ⚠️ À valider en pilote |
| Nombre d'avocats en France | 74.000 | **73.998** au 01/01/2023 (43% à Paris) | [Min. Justice](https://www.justice.gouv.fr/sites/default/files/2025-02/statistique_profession_avocats_2023.pdf) | ✅ Exact |
| Taille moyenne cabinet | 4-15 avocats (cible) | **Moyenne = 2,2 avocats/cabinet.** 27.000 cabinets. 69% ont 1-2 salariés | [CNB](https://www.cnb.avocat.fr/fr/les-chiffres-cles-de-la-profession-davocat), [Le Monde du Droit](https://www.lemondedudroit.fr/decryptages/275-les-cabinets-avocats-representent-environ-100000-actifs.html) | ⚠️ Majorité = petits. Cibler dès 2 avocats |
| CA moyen avocat individuel | (non précisé) | Net moyen : 86K€, **médian : 49K€**. CA brut ~100-120K€ | [CNBF rapport 2024](https://www.labase-lextenso.fr/gazette-du-palais/2026-nweb/rapport-de-la-cnbf-demographie-revenus-et-retraites-des-avocats-en-2024-GPL486v4), [EsterLaw](https://www.esterlaw.io/revenu-avocat-independant/) | ⚠️ Revenu médian = 49K, pas 86K |
| DoveAI à 290€/mois/utilisateur vs concurrence | "Justifié" | Doctrine Flow 322€/mois/user, Jimini 250€/mois/user, GenIA-L 220€/mois/user, Ordalie 89€/mois/user | [Pamplemousse](https://www.pamplemousse-magazine.co/post/ia-juridiques-comparatif-complet), [AvocatCity](https://www.avocatcity.fr/meilleures-ia-juridiques-2025.html), [LexisNexis](https://www.lexisnexis.com/fr-fr/produits/tarifs) | ✅ Moins cher que Doctrine Flow (322€), comparable à Jimini (250€). Self-hosted + matériel inclus justifie le positionnement |

### Ajustements à faire au pricing

| Constat | Impact |
|---------|--------|
| Cabinet moyen = 2-3 avocats, pas 5-8 | L'offre Cabinet doit cibler dès **2 avocats** |
| CA médian avocat = ~100K€, cabinet 3 avocats = ~300K€ CA | 3 licences (870€) + support (300€) = 1.170€/mois = 14.040€/an = **4,7% du CA** — acceptable (Doctrine Flow = 11.600€/an pour 3 users, comparable) |
| Concurrence legaltech = 89-322€/mois/user | 290€/utilisateur est sous Doctrine Flow (322€) et au-dessus d'Ordalie (89€). Le setup 12.000€ est justifié par le matériel self-hosted inclus |
| Le self-hosted est l'unique différenciation forte | Sans ça, DoveAI n'est qu'un Predictice/Doctrine de plus. Le self-hosted + matériel inclus justifie le premium |

### Ce qui reste à valider pendant le pilote (incrément 7)

- [ ] Nombre réel de dossiers nécessitant une synthèse par mois par avocat
- [ ] Temps réellement économisé (chronométrer avant/après)
- [ ] Qualité perçue de la synthèse (score 1-10 par l'avocat)
- [ ] Adoption réelle (l'avocat utilise-t-il l'outil tous les jours ?)
- [ ] Willingness to pay : "Combien paieriez-vous pour ce service ?"

---

## 14. Résumé Exécutif

|                      |                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Produit**          | Agent IA d'analyse de pièces pour cabinets d'avocats                                                               |
| **Marché**           | 74.000 avocats, 27.000 cabinets en France (moyenne 2,2 avocats/cabinet)                                            |
| **Persona**          | Avocat collaborateur ou associé, cabinet de 2-15 avocats, contentieux civil/social/affaires                        |
| **Tâche**            | Upload pièces → synthèse structurée + chronologie + points d'attention                                             |
| **Différenciation**  | 100% self-hosted — seul outil IA juridique où les données ne quittent jamais le cabinet                            |
| **Matériel client**  | ThinkStation PGX (4.265€ HT, 128GB, GB10 Grace Blackwell) + Qwen3-32B FP8 local                                    |
| **Matériel R&D**     | Mac Mini M4 Pro 48GB (~125€/mois tout compris)                                                                     |
| **Pricing**          | Setup 12.000€ HT + Licence 290€ HT/mois/utilisateur + Support 300€ HT/mois (forfait cabinet)                       |
| **Concurrence**      | Predictice (300-500€/mois), Lexis+ AI (~500€/mois), Doctrine (~120€/mois) — aucun n'est self-hosted                |
| **Coût par client**  | ~85€/mois exploitation (matériel couvert par le setup)                                                              |
| **Marge brute**      | 90-97% sur le récurrent (selon taille cabinet)                                                                      |
| **ROI client**       | x4 à x9 année 1 (selon taille cabinet), x8 à x12 année 2+                                                          |
| **Objectif**         | 3 cabinets × 5 avocats = ~99.000€ année 1, 63.000€ récurrent année 2+                                              |
| **Budget lancement** | ~6.500€ (1 Mac Mini R&D + 1 ThinkStation PGX démo)                                                                 |
| **Timeline**         | CLI testable en 5 semaines, app web en 14 semaines, premier client payant en 7 mois                                |
| **Risque principal** | Pricing élevé vs concurrence — compensé par self-hosted + matériel inclus dans le setup + pricing par utilisateur transparent |
