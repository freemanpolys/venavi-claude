# SaaS Ideas Analysis - 2026-03-05

## Summary

- **Total Ideas**: 4
- **Quick Week SaaS**: 1 (can be built in 1 week or less)
- **Month Sprint SaaS**: 2 (2-4 weeks to MVP)
- **Complex SaaS**: 1 (1-3 months to MVP)
- **Building Blocks**: 0 (aucune idée n'est un building block pur, mais certaines ont des composants réutilisables)

## Recommended Focus

1. **Quick Win**: **Qogita Arbitrage Checker** — Data pipeline existante, ship en 5-7 jours, monétisation claire
2. **Strategic Build**: **BizCraft** — Spec détaillée prête, niche FR sous-servie, 4 semaines au MVP
3. **Content Play**: **DevOps Founder Kit** — Synergie avec YouTube/newsletter, mais contenu > code
4. **Watch**: **MCP Agent Toolkit** — Marché compétitif en évolution rapide, attendre stabilisation MCP

---

## Quick Week SaaS (1 semaine au MVP)

### 1. Qogita Arbitrage Checker

- **Time to Build**: 5-7 jours
- **Complexity**: 4/10
- **Type**: Standalone
- **Problem**: Les vendeurs Amazon FBA perdent du temps à calculer manuellement la rentabilité des produits Qogita
- **Why Quick**:
  - Data pipeline (scraper) déjà existante et fonctionnelle
  - Data model simple (3-4 tables : products, prices, users, searches)
  - Une seule feature core : barre de recherche → résultat rentabilité
  - UI minimaliste "Google-like" — pas de wizard, pas de dashboard complexe
  - Stack identique aux autres projets (Go + Angular + Azure)
- **Tech Stack**: Go (existant) + Angular + Azure App Service + Azure SQL
- **Revenue Model**: Subscription $19-79/mo (3 tiers)
- **Market Validation**:
  - [ ] Vérifier taille du marché : combien de sellers Qogita actifs ?
  - [ ] Survey 10 vendeurs Amazon FBA sur leur workflow de recherche
  - [ ] Tester avec un landing page + waitlist
- **Risks**:
  - Marché potentiellement petit (niche dans la niche)
  - Scraping Qogita peut casser si l'API change
  - Dépendance aux données Amazon (TOS risk)
- **Next Steps**:
  1. Valider taille du marché cette semaine
  2. Si validé : adapter le scraper existant en API REST (2 jours)
  3. Frontend Angular minimal (2 jours)
  4. Deploy + onboard 5 beta users
- **Priority**: **HIGH** — Asset existant, effort minimal, revenu rapide si marché validé

---

## Month Sprint SaaS (2-4 semaines au MVP)

### 1. BizCraft — Créer son Offre Irrésistible ⭐

- **Time to Build**: 4 semaines (18-21 jours ouvrés)
- **Complexity**: 6/10
- **Type**: Standalone (architecture modulaire pour expansion future)
- **Problem**: Les fondateurs francophones lisent Hormozi mais restent bloqués à l'exécution — pas d'outil guidé pour opérationnaliser la méthode
- **Why Month Sprint**:
  - Data model modéré (8 tables dont 3 seeded, 5 user-data)
  - 10 features distinctes (auth, CRUD, 7 wizard steps, PDF export)
  - Chaque step wizard a une UI unique (sliders, drag & drop, matrices, listes dynamiques)
  - PDF generation server-side avec maroto v2
  - Auto-save avec debounce + validation progressive
  - Aucune intégration externe complexe (pas d'IA, pas de 3rd party API)
- **Tech Stack**: Go (Gin + pgx + JWT) + Angular 17+ (Material) + Azure (App Service B1 + PostgreSQL Flex + Blob + Static Web Apps)
- **Azure Cost**: ~31 EUR/mois — très raisonnable
- **Revenue Model**: Freemium + Pro 14.90 EUR/mo + Lifetime 249 EUR
- **Market Validation**:
  - [ ] Landing page `bizcraft.fr` — objectif 50 emails en 2 semaines
  - [ ] Posts communautés francophones (Twitter/X, LinkedIn, groupes Facebook)
  - [ ] 5-10 beta testeurs (lifetime gratuit contre feedback hebdo)
- **Strengths**:
  - **Spec complète prête** — architecture, DB schema, API, data models tout détaillé
  - **Niche FR non servie** — aucun concurrent direct en français sur la méthode Hormozi
  - **Revenue model adapté** — lifetime pour les français qui résistent aux abonnements
  - **Extensible** — module E-Myth prévu, architecture JSONB permet l'ajout de modules sans migration
  - **Build-in-public** — contenu marketing naturel pendant le développement
- **Risks**:
  - Demande marché non validée (mitigé par landing page test)
  - Hormozi "US-centric" — nécessite adaptation au contexte FR/EU
  - Droit d'auteur : s'inspirer de la méthode, ne pas copier
- **Next Steps**:
  1. **Semaine 0** : Landing page + validation (50 emails)
  2. **Semaines 1-2** : Foundation (Azure setup, auth, CI/CD, seed data)
  3. **Semaine 3** : Core wizard (7 steps + auto-save + aide contextuelle)
  4. **Semaine 4** : PDF export, polish, deploy, beta testeurs
- **Priority**: **HIGH** — Spec la plus aboutie, marché de niche clair, pricing validé par la compétition

### 2. DevOps Founder Kit

- **Time to Build**: 3-4 semaines (plateforme) + ongoing (contenu)
- **Complexity**: 5/10
- **Type**: Standalone (produit contenu)
- **Problem**: Les devs Go/backend/DevOps n'ont pas de boilerplates ni de playbooks adaptés pour lancer un SaaS — tout est orienté Next.js/Supabase
- **Why Month Sprint**:
  - Plateforme technique relativement simple (content site + Stripe + auth)
  - Data model modéré (5-7 tables : users, purchases, content, boilerplates, founders)
  - UI : site de contenu avec filtres, téléchargements, paiements Stripe
  - Le vrai effort est la **création de contenu** (boilerplates + playbooks), pas le code
  - Stripe integration one-time purchase + Azure AD B2C
- **Tech Stack**: Go + Angular/Astro + PostgreSQL + Azure + Stripe
- **Revenue Model**: One-time purchase $49-349 (3 tiers)
- **Market Validation**:
  - [ ] Sondage Twitter/LinkedIn auprès de devs Go/Azure
  - [ ] Landing page minimal pour tester l'intérêt
  - [ ] Rédiger 1 playbook gratuit pour tester la traction
- **Strengths**:
  - Synergie forte avec ta chaîne YouTube et newsletter
  - Marché de niche qualifié (devs enterprise avec pouvoir d'achat)
  - Contenu français = moat (peu de compétition)
  - Un boilerplate Go+Angular+Azure peut être réutilisé pour tes propres SaaS
- **Weaknesses**:
  - Le contenu est le produit — nécessite investissement temps continu
  - Marché plus petit que le généraliste
  - Boilerplates peuvent être copiés/open-sourcés
- **Next Steps**:
  1. Développer le boilerplate Go + Angular + Azure (tu en as besoin de toute façon pour BizCraft)
  2. Rédiger le playbook "Pricing for Engineers" comme lead magnet
  3. Tester la demande via ta newsletter/YouTube
  4. Si traction : construire la plateforme de distribution
- **Priority**: **MEDIUM** — Fort potentiel mais effort contenu élevé, idéalement après avoir shippé BizCraft (le boilerplate est un sous-produit)

---

## Complex SaaS (1-3 mois au MVP)

### 1. MCP Agent Toolkit

- **Time to Build**: 6-8 semaines (OSS core) + 3-4 semaines (premium features)
- **Complexity**: 7/10
- **Type**: Standalone avec building block potential
- **Problem**: Les AI coding agents gaspillent des tokens sur des recherches lentes, le context bloat des outils MCP, et un web research médiocre
- **Why Complex**:
  - 3 systèmes distincts (indexer, tools aggregator, web search) à intégrer
  - MCP protocol en évolution rapide — maintenance continue nécessaire
  - Full-text search avec pg_textsearch + BM25 ranking
  - Semantic search avec embeddings (Azure AI Search ou Qdrant) pour premium
  - Language-aware parsing multi-langage (Go, TS, Python, etc.)
  - Architecture hybride local + cloud
  - Open-core model complexe à exécuter
- **Tech Stack**: Go (binary local) + PostgreSQL (pg_textsearch) + Azure (cloud premium) + MCP Protocol
- **Revenue Model**: Open-core — Free OSS + Pro $19/mo + Team $49/mo/seat
- **Market Validation**:
  - [ ] Le marché MCP est en explosion mais très compétitif
  - [ ] Evaluer l'adoption de pg_textsearch (v0.4.0-dev, maturity ?)
  - [ ] Comparer avec solutions existantes (Zed context server, Cursor indexing, etc.)
- **Strengths**:
  - Marché en forte croissance (AI coding tools)
  - Open-core crée un moat d'adoption
  - Pas de dépendance à un provider spécifique
- **Weaknesses**:
  - **Marché hyper-compétitif** — Anthropic, Google, Cursor, etc. investissent massivement
  - MCP spec instable — risque de breaking changes
  - Open-core difficile à monétiser (free tier trop généreux ?)
  - Effort de maintenance continu important
- **Next Steps**:
  1. Surveiller l'évolution MCP spec 3-6 mois
  2. Prototyper l'indexer seul en Go (validation technique)
  3. Évaluer si les built-in solutions des IDE ne rendent pas le projet obsolète
  4. Ne pas engager de ressources majeures avant validation marché
- **Priority**: **LOW** — Potentiel élevé mais risque élevé, marché qui bouge trop vite. Surveiller, ne pas builder maintenant.

---

## Building Blocks

Aucune idée n'est un building block pur, mais des **composants réutilisables** émergent :

| Composant | Utilisé par | Effort | Réutilisabilité |
|-----------|-------------|--------|-----------------|
| Auth JWT (Go middleware) | BizCraft, Qogita, DevOps Founder Kit | 1-2 jours | HIGH |
| Stripe integration (Go) | DevOps Founder Kit | 1-2 jours | MEDIUM |
| Azure deployment pipeline (GitHub Actions) | Tous | 0.5 jour | HIGH |
| Go API boilerplate (Gin + pgx + config) | BizCraft, Qogita, MCP Toolkit | 1-2 jours | HIGH |
| Angular SPA boilerplate (Material + auth) | BizCraft, Qogita, DevOps Founder Kit | 1-2 jours | HIGH |

**Recommandation** : En construisant BizCraft en premier, tu crées naturellement le **Go + Angular + Azure boilerplate** qui accélèrera tous les projets suivants. C'est un building block implicite.

---

## Prioritization Matrix

### Effort vs Impact

```
                    HIGH IMPACT
                        │
    BizCraft ⭐         │         MCP Agent Toolkit
    (4 sem, niche FR)   │         (8+ sem, risque élevé)
                        │
  ──────────────────────┼──────────────────────────
                        │
    Qogita Checker      │         DevOps Founder Kit
    (1 sem, marché ?)   │         (4 sem + contenu)
                        │
                    LOW IMPACT

   LOW EFFORT ◄─────────────────────────► HIGH EFFORT
```

### Strategic Sequence Recommandée

```
Semaine 0        Semaines 1-4           Semaines 5-8          Mois 3+
┌──────────┐     ┌──────────────┐      ┌────────────────┐    ┌──────────────┐
│ Valider  │     │ Builder      │      │ Ship Qogita    │    │ DevOps       │
│ BizCraft │────▶│ BizCraft     │─────▶│ Checker        │───▶│ Founder Kit  │
│ (landing │     │ (MVP 4 sem)  │      │ (1 sem, data   │    │ (boilerplate │
│  page)   │     │              │      │  existante)    │    │  déjà prêt)  │
└──────────┘     └──────────────┘      └────────────────┘    └──────────────┘
                  ↕ Building block                            ↕ Uses boilerplate
                  Go+Angular+Azure                            from BizCraft
                  boilerplate créé
```

1. **Maintenant** : Landing page BizCraft → valider la demande (50 emails)
2. **Semaines 1-4** : Builder BizCraft MVP → premier SaaS live + boilerplate créé
3. **Semaine 5-6** : Ship Qogita Checker → revenu rapide avec le pipeline existant
4. **Mois 3+** : DevOps Founder Kit → capitalise sur le boilerplate et le contenu YouTube
5. **En veille** : MCP Agent Toolkit → surveiller l'évolution du marché

---

## Focus Comparison: BizCraft vs Others

BizCraft est le **choix stratégique optimal** pour les raisons suivantes :

| Critère | BizCraft | Qogita | DevOps Kit | MCP Toolkit |
|---------|----------|--------|------------|-------------|
| Spec ready | ✅ Complète | ❌ Idée | ❌ Idée | ❌ Idée |
| Market gap | ✅ Aucun concurrent FR | ⚠️ Niche incertaine | ⚠️ Compétition EN | ❌ Hyper-compétitif |
| Revenue path | ✅ Claire (freemium + lifetime) | ✅ Claire (sub) | ⚠️ One-time, lent | ⚠️ Open-core difficile |
| Build-in-public | ✅ Fort (contenu naturel) | ⚠️ Faible | ✅ Fort | ⚠️ Moyen |
| Building block value | ✅ Crée le boilerplate | ❌ Spécialisé | ✅ Est le boilerplate | ❌ Trop spécialisé |
| Time to revenue | 5-6 semaines | 2-3 semaines | 2-3 mois | 3-6 mois |
| Content synergy | ✅ YouTube + newsletter | ❌ Aucune | ✅ Forte | ⚠️ Niche |

---

## Methodology

### Time Estimation Factors

| Factor | Weight | Description |
|--------|--------|-------------|
| Data model | tables × 0.5 jour | Nombre et complexité des tables |
| Core features | feature × 0.5-2 jours | Selon complexité de chaque feature |
| Integrations | API × 1-2 jours | Chaque API externe |
| UI complexity | 1-5 jours | Selon nombre d'écrans et interactions |
| Deployment | 0.5-3 jours | Setup initial Azure/CI/CD |

### Complexity Scoring (1-10)

- **1-3** : Simple CRUD, single feature, basic Azure services
- **4-6** : Multiple features, 1-2 integrations, moderate architecture
- **7-9** : Multiple integrations, real-time, microservices, advanced Azure
- **10** : Enterprise-grade avec compliance, multi-tenancy, global scale

---

## Next Actions

1. **Cette semaine** : Lancer la landing page BizCraft (`bizcraft.fr`) — objectif 50 emails
2. **En parallèle** : Valider la taille du marché Qogita (10 interviews vendeurs FBA)
3. **Si BizCraft validé** : Démarrer le développement semaine prochaine (spec prête)
4. **Continuer** : Build-in-public sur LinkedIn/X pendant le développement
5. **Backlog** : Logger nouvelles idées avec `/saas:log-idea`
