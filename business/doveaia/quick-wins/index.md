# Quick Wins : Agents IA pour Doveaia (R&D + Démo + Business)

**Objectif** : Créer des agents IA qui servent triple usage :
1. **R&D** : Développer votre expertise Azure AI Foundry + LLMOps
2. **Démo** : Montrer aux prospects des agents en production réelle
3. **Business** : Automatiser et améliorer vos propres processus Doveaia

---

## Critères de Sélection Quick Win

✅ **Développable en 1-2 semaines** (temps partiel)
✅ **Utilité réelle immédiate** pour Doveaia
✅ **Démo crédible** pour prospects (cas d'usage similaire à leurs besoins)
✅ **Architecture Azure AI Foundry** (votre stack de référence)
✅ **LLMOps ready** (CI/CD, monitoring, évaluations)
✅ **ROI mesurable** (gain temps, conversion, revenus)

---

## 🎯 Matrice Priorité / Effort

| Agent | Priorité | Effort | ROI Business | Valeur Démo |
|-------|----------|--------|--------------|-------------|
| **1. Agent Site Web FAQ** | ⭐⭐⭐ | 1 semaine | 🔥🔥🔥 | 🎯🎯🎯 |
| **2. Agent Qualification Leads** | ⭐⭐⭐ | 1 semaine | 🔥🔥🔥 | 🎯🎯 |
| **3. Agent Génération Propales** | ⭐⭐⭐ | 2 semaines | 🔥🔥🔥 | 🎯🎯🎯 |
| **4. Agent Veille Techno Azure** | ⭐⭐ | 1 semaine | 🔥🔥 | 🎯🎯 |
| **5. Agent Rédaction Posts LinkedIn** | ⭐⭐ | 1,5 semaines | 🔥🔥 | 🎯🎯🎯 |
| **6. Agent Analyse Calls Commerciaux** | ⭐ | 2 semaines | 🔥🔥 | 🎯🎯 |

**Légende** :
- Priorité : ⭐⭐⭐ = À faire en premier
- Effort : Temps de développement
- ROI Business : Impact sur votre activité Doveaia
- Valeur Démo : Intérêt pour montrer aux prospects

---

## 📋 Top 3 Recommandés (Mois 1-3)

### 🥇 Agent #1 : FAQ Intelligent Site Web

**Pourquoi en premier ?**
- ✅ Visible publiquement (crédibilité)
- ✅ Génère leads qualifiés 24/7
- ✅ Démo parfaite (prospects testent directement)
- ✅ Cas d'usage universel (tous les prospects ont besoin)

**Quand** : Semaine 1-2 après création SASU

---

### 🥈 Agent #2 : Qualification Leads LinkedIn

**Pourquoi en second ?**
- ✅ Automatise prospection (gain 5h/semaine)
- ✅ Améliore taux conversion (scoring leads)
- ✅ Démo technique forte (data extraction, RAG)

**Quand** : Semaine 3-4 (après avoir lancé prospection)

---

### 🥉 Agent #3 : Génération Propositions Commerciales

**Pourquoi en troisième ?**
- ✅ Divise temps rédaction propales par 5
- ✅ Cohérence messages commerciaux
- ✅ Démo ROI tangible (prospects comprennent immédiatement)

**Quand** : Semaine 5-8 (après premières propales manuelles)

---

## 🏗️ Architecture Technique Commune

**Stack Doveaia (tous les agents)** :

```
┌─────────────────────────────────────────────────────────┐
│                  FRONTEND / INTERFACE                    │
│  - Widget Web (JavaScript)                              │
│  - Application Teams (Teams Toolkit)                    │
│  - Chatwoot (self-hosted, open source)                  │
│  - Dashboard SaaS (Angular)                             │
└─────────────────────────────────────────────────────────┘
                            │ REST API / WebSocket
                            ▼
┌─────────────────────────────────────────────────────────┐
│           BACKEND - Go + Cloudwego Hertz                 │
│  - Framework : Hertz (high-performance HTTP)            │
│  - Multi-tenant : Isolation par tenant_id               │
│  - Auth : JWT + OAuth2 (Azure AD optionnel)             │
│  - APIs :                                               │
│    • POST /chat (conversations)                         │
│    • POST /documents/upload (indexation KB)             │
│    • GET /analytics (métriques)                         │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│         CLOUDWEGO EINO - AI Agent Framework              │
│  - SDK : github.com/cloudwego/eino                      │
│  - Agent Builder (ADK)                                  │
│  - Models : Azure OpenAI GPT-4o                         │
│  - Tools :                                              │
│    • RAG (Azure AI Search)                              │
│    • Function Calling (custom tools)                    │
│  - Memory : Conversation history (PostgreSQL)           │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│            AZURE AI SEARCH (RAG Multi-Tenant)            │
│  - 1 index par client (isolation données)               │
│  - Semantic search (vecteurs embeddings)                │
│  - Indexation automatique documents uploadés            │
│  - Filtres : tenant_id (sécurité)                       │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                  DATA LAYER                              │
│  - PostgreSQL : Users, Tenants, Conversations           │
│  - Azure Blob Storage : Documents sources               │
│  - Redis : Cache sessions, rate limiting                │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                  LLMOPS PIPELINE                         │
│  - GitHub Actions (CI/CD)                               │
│  - Docker (containerisation)                            │
│  - Kubernetes / Azure Container Apps (déploiement)      │
│  - Prompt versioning (Git)                              │
│  - Evaluations automatiques (Eino evals)                │
│  - Monitoring (Prometheus + Grafana)                    │
│  - Tracing (OpenTelemetry → Azure Monitor)              │
└─────────────────────────────────────────────────────────┘
```

---

## 🔧 Stack Technique Détaillée

### Backend : Go + Cloudwego

**Pourquoi Go + Cloudwego ?**
- ✅ **Performance** : Hertz = 10x plus rapide que Flask/FastAPI
- ✅ **Cloudwego Eino** : SDK officiel pour agents IA (compatible Azure OpenAI)
- ✅ **Production-ready** : Utilisé par ByteDance (TikTok) à massive scale
- ✅ **Concurrency** : Goroutines pour traiter 1000+ conversations simultanées
- ✅ **Type-safe** : Go = moins de bugs que Python dynamique

**Frameworks utilisés** :
- **Hertz** : HTTP server (https://www.cloudwego.io/docs/hertz/)
- **Kitex** : RPC framework si micro-services (optionnel)
- **Eino** : AI Agent SDK (https://www.cloudwego.io/docs/eino/)
- **Gorm** : ORM pour PostgreSQL

---

### AI Framework : Cloudwego Eino

**Eino ADK (Agent Development Kit)** :
```go
import (
    "github.com/cloudwego/eino/components/model"
    "github.com/cloudwego/eino/components/tool"
    "github.com/cloudwego/eino/flow/agent"
)

// Agent avec RAG + Tools
agent := agent.NewGraphAgent(
    model.AzureOpenAI("gpt-4o"),
    tools: []tool.Tool{
        azureSearchTool,  // RAG
        webhookTool,      // Calendly booking
    },
    memory: conversationMemory,
)
```

**Pourquoi Eino ?**
- ✅ Compatible Azure OpenAI (notre stack)
- ✅ Built-in RAG, Memory, Tools
- ✅ Production-ready (ByteDance l'utilise en prod)
- ✅ Go-native (performance optimale)

---

### Database : PostgreSQL + Redis

**PostgreSQL (données structurées)** :
- Tables : `users`, `tenants`, `conversations`, `messages`, `documents`
- Multi-tenant : Toutes les tables ont `tenant_id` (isolation)

**Redis (cache + sessions)** :
- Sessions utilisateurs (JWT tokens)
- Rate limiting (10 req/min/IP)
- Cache réponses fréquentes (optionnel)

---

### Storage : Azure Services

**Azure Blob Storage** :
- Documents sources uploadés par clients
- Organisation : `/tenant-{id}/documents/{filename}`

**Azure AI Search** :
- 1 index par tenant : `faq-tenant-{id}`
- Sécurité : Filtre automatique par `tenant_id`
- Indexation : Automatique après upload document

---

## 💡 Stratégie d'Implémentation

### Phase 1 : Mois 1 (Janvier)

**Semaine 1-2** : Agent FAQ Site Web
- Développement agent
- Intégration site web (widget)
- 10 questions/réponses de base
- Monitoring basique

**Semaine 3-4** : Amélioration + Agent Qualification Leads
- Enrichir FAQ (30 Q/R)
- Lancer Agent LinkedIn (scoring leads)
- Setup LLMOps (CI/CD, evals)

---

### Phase 2 : Mois 2 (Février)

**Semaine 5-6** : Agent Génération Propales
- Templates 3 offres (Starter, Scale, Enterprise)
- Génération propales personnalisées
- Workflow validation humaine

**Semaine 7-8** : Optimisation + Contenus Démo
- Optimiser les 3 agents (feedback réel)
- Créer vidéos démo (1-2 min chaque)
- Préparer pitch commercial (agents en live)

---

### Phase 3 : Mois 3+ (Mars+)

**Selon besoins** :
- Agent Veille Techno (si besoin contenu)
- Agent Posts LinkedIn (si manque temps rédaction)
- Agent Analyse Calls (si volume calls élevé)

---

## 📊 ROI Attendu par Agent

### Agent FAQ Site Web

**Gains** :
- 30-50 questions/mois répondues automatiquement
- 5-10 leads qualifiés générés/mois
- 3-5h/mois économisées (réponses emails)

**ROI** : 1 lead converti = 5-10k€ CA → Agent rentabilisé en 1 mois

---

### Agent Qualification Leads LinkedIn

**Gains** :
- 50-100 profils analysés/semaine
- Scoring automatique (note /10)
- Focus sur top 20% leads (haute conversion)
- 5h/semaine économisées (recherche manuelle)

**ROI** : +30% taux conversion prospects → meetings → +2-3 deals/an = 15-30k€

---

### Agent Génération Propales

**Gains** :
- Temps rédaction propale : 3h → 30 min (x6 plus rapide)
- Cohérence messages (pas d'oubli, ton uniforme)
- 10 propales/mois = 25h économisées/mois

**ROI** : 25h × 100€/h (valeur temps) = 2 500€/mois économisés

---

## 🎯 Objectifs Démo : Ce Que Les Prospects Verront

### Démo Agent FAQ (Site Web)

**Scénario prospect** : DSI Banque visite doveaia.fr
1. Widget chatbot visible coin bas-droit
2. Pose question : "Quelle est la différence entre Copilot Studio et Azure AI Foundry ?"
3. Agent répond en 3 sec, réponse structurée + sources
4. CTA : "Réserver un audit gratuit"

**Message démo** : "Cet agent tourne H24 sur notre site. Il répond à 80% des questions visiteurs. C'est exactement ce qu'on peut faire pour vous."

---

### Démo Agent Qualification Leads (Backend)

**Scénario prospect** : Dirigeant PME veut automatiser prospection
1. Montrer dashboard Notion avec 50 profils LinkedIn scorés
2. Filtrer : "Montrer leads score > 8/10"
3. Voir analyse automatique : Poste, Secteur, Pain Points détectés
4. Cliquer lead → Voir proposition message personnalisé générée

**Message démo** : "Notre agent analyse 100 profils LinkedIn/jour. Il identifie les 10% les plus prometteurs. On divise par 5 le temps de prospection."

---

### Démo Agent Génération Propales (Live)

**Scénario prospect** : CTO veut voir rapidité
1. Remplir formulaire simple : Nom client, Secteur, Besoin (3 champs)
2. Cliquer "Générer propale Starter"
3. Attendre 30 sec
4. Recevoir propale 8 pages PDF personnalisée

**Message démo** : "3 minutes pour générer une propale sur-mesure. Avant : 3 heures. Notre agent utilise vos templates et personnalise selon le contexte client."

---

## 🛠️ Stack Technique Détaillé

### Infrastructure Azure

**Services utilisés** :
- **Azure AI Foundry** : Agents IA (GPT-4o, tools, orchestration)
- **Azure AI Search** : RAG (indexation documents, recherche sémantique)
- **Azure Functions** : Backend APIs (webhooks, intégrations)
- **Azure Storage** : Documents source (PDF, docs, templates)
- **Azure Application Insights** : Monitoring (latence, erreurs, coûts tokens)
- **Azure Key Vault** : Secrets (API keys, tokens)
- **GitHub Actions** : CI/CD (déploiement agents, tests)

**Coût mensuel estimé** :
- Azure AI Foundry (GPT-4o) : 50-100€/mois (volume faible démarrage)
- Azure AI Search : 20-40€/mois (tier basique)
- Azure Functions : 5-10€/mois (peu de calls)
- Azure Storage : 2-5€/mois
- **Total** : 80-150€/mois

**Évolution** : Coûts scalent avec usage (bon signe = trafic en hausse)

---

### Frontend / Interfaces

**Agent FAQ Site Web** :
- Widget JavaScript (intégration 5 lignes HTML)
- Iframe ou Web Component
- Responsive mobile
- Customisable (couleurs, position)

**Agents Internes** :
- Dashboard Notion (base de données agents)
- Slack notifications (alertes, résumés)
- API REST (intégrations CRM/outils)

---

### LLMOps Pipeline

**CI/CD** :
```
GitHub Repo
  ├─ /agents/
  │   ├─ faq-agent/
  │   │   ├─ prompts/system.txt (versionné)
  │   │   ├─ tools.py (functions)
  │   │   ├─ config.yaml (température, modèle)
  │   │   └─ tests/evals.py (évaluations)
  │   ├─ lead-scoring-agent/
  │   └─ propale-agent/
  ├─ /data/
  │   ├─ faq-doveaia.json
  │   ├─ offres-templates/
  │   └─ cas-usage/
  └─ .github/workflows/
      ├─ deploy-agents.yml (CD)
      └─ run-evals.yml (Tests qualité)
```

**Tests automatiques** :
- Golden dataset (10-20 questions test)
- Évaluation qualité réponses (score /10)
- Alerte si score < 7/10 (régression détectée)
- Rollback automatique si échec

---

## 📈 Métriques à Tracker

### Agent FAQ Site Web

- **Volumétrie** :
  - Nombre questions/jour
  - Nombre sessions chat/jour
  - Taux résolution (réponse satisfaisante vs escalade humain)

- **Qualité** :
  - Score satisfaction utilisateur (👍👎)
  - Questions sans réponse (à enrichir FAQ)
  - Latence réponse (< 3 sec)

- **Business** :
  - Leads générés (CTA cliqués)
  - Taux conversion chat → audit gratuit

---

### Agent Qualification Leads LinkedIn

- **Volumétrie** :
  - Profils analysés/jour
  - Leads scorés > 7/10 (haute qualité)

- **Qualité** :
  - Précision scoring (comparaison prédiction vs conversion réelle)
  - Faux positifs (lead score 9/10 mais ghosting)
  - Faux négatifs (lead score 3/10 mais conversion)

- **Business** :
  - Taux conversion leads > 8/10 → meetings
  - Temps économisé prospection manuelle

---

### Agent Génération Propales

- **Volumétrie** :
  - Propales générées/semaine
  - Temps moyen génération (< 1 min)

- **Qualité** :
  - Taux modification humaine (% texte changé)
  - Propales envoyées sans modification (signe qualité)

- **Business** :
  - Taux signature propales générées par agent
  - Temps économisé vs rédaction manuelle

---

## 🚀 Prochaines Étapes

### Semaine 1 (Post Création SASU)

- [ ] Lire fiches détaillées 6 agents (dossier quick-wins/)
- [ ] Choisir Agent #1 à développer (recommandé : FAQ Site Web)
- [ ] Setup environnement Azure AI Foundry (compte, subscription)
- [ ] Créer premier agent (POC 1 journée)

### Semaine 2

- [ ] Développer Agent FAQ complet (10 Q/R)
- [ ] Intégrer site web Doveaia (widget)
- [ ] Tester avec 5 beta-testeurs
- [ ] Déployer en production

### Semaine 3-4

- [ ] Enrichir FAQ (30 Q/R)
- [ ] Développer Agent #2 (Qualification Leads)
- [ ] Setup LLMOps (CI/CD, monitoring)
- [ ] Préparer démos commerciales (vidéos 2 min)

### Mois 2+

- [ ] Développer Agent #3 (Génération Propales)
- [ ] Optimiser agents existants (feedback réel)
- [ ] Créer contenu blog/LinkedIn sur les agents (thought leadership)
- [ ] Utiliser agents en démo prospects (pitch commercial)

---

## 📚 Fiches Détaillées

Chaque agent dispose d'une fiche détaillée dans ce dossier :

1. **[agent-faq-site-web.md](./agent-faq-site-web.md)** - Assistant FAQ intelligent 24/7
2. **[agent-qualification-leads.md](./agent-qualification-leads.md)** - Scoring automatique profils LinkedIn
3. **[agent-generation-propales.md](./agent-generation-propales.md)** - Rédaction propositions commerciales
4. **[agent-veille-techno.md](./agent-veille-techno.md)** - Veille Azure AI Foundry automatisée
5. **[agent-posts-linkedin.md](./agent-posts-linkedin.md)** - Génération contenu LinkedIn
6. **[agent-analyse-calls.md](./agent-analyse-calls.md)** - Analyse conversations commerciales

**Chaque fiche contient** :
- Problème résolu
- Cas d'usage Doveaia
- Architecture technique détaillée
- Effort développement (heures)
- ROI business chiffré
- Script démo prospect
- Code exemple (snippets)

---

**Document créé le 26/12/2024**
**Prochaine étape** : Lire fiche Agent #1 (FAQ Site Web) et démarrer développement
