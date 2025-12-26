# Plan d'Affaires Doveaia
## Architecte d'Agents IA en Production

**Version :** 1.0
**Date :** Décembre 2025
**Confidentiel**

---

## Table des Matières

1. [Résumé Exécutif](#résumé-exécutif)
2. [Analyse du Marché](#analyse-du-marché)
3. [Analyse Concurrentielle](#analyse-concurrentielle)
4. [Description des Offres](#description-des-offres)
5. [Modèle de Revenus](#modèle-de-revenus)
6. [Stratégie Go-to-Market](#stratégie-go-to-market)
7. [Projections Financières](#projections-financières)
8. [Évaluation des Risques](#évaluation-des-risques)
9. [Jalons Clés](#jalons-clés)

---

## Résumé Exécutif

### Vision

Doveaia se positionne comme **l'architecte d'agents IA en production** pour les entreprises françaises et européennes. Nous ne sommes ni un simple intégrateur, ni un data scientist, ni un vendeur de prompts ChatGPT. Nous concevons, déployons et opérons des **agents IA sécurisés et industrialisés** sur Azure AI Foundry.

### Proposition de Valeur Unique

Notre différenciation repose sur trois piliers :

1. **LLMOps & Industrialisation** : Là où 90% des "bricoleurs ChatGPT" échouent, nous appliquons les standards DevOps à l'IA (CI/CD des agents, versioning des prompts, observabilité, évaluations automatiques)

2. **Sécurité & Gouvernance** : Architecture zero-trust, conformité RGPD et AI Act, isolation des données, traçabilité complète des décisions agents

3. **Expertise Azure AI Foundry** : Maîtrise technique complète de la plateforme Microsoft (Azure AI Foundry, Azure AI Search, Managed Identity, RBAC) combinée à une expérience DevOps/Kubernetes

### Positionnement Microsoft Copilot

Nous adoptons une position intelligente vis-à-vis de Microsoft 365 Copilot et Copilot Studio :
- **Utilisation tactique** : Copilot Studio pour l'interface utilisateur (Teams/SharePoint) quand approprié
- **Différenciation stratégique** : Azure AI Foundry pour les agents critiques, multi-systèmes, orchestrés
- **Complémentarité** : Architecture hybride où Copilot Studio (UI) communique avec agents Foundry (backend)

Cette approche nous positionne comme **partenaire expert** plutôt que concurrent de l'écosystème Microsoft.

### Modèle d'Affaires

**Phase 1 (Mois 0-9)** : Conseil & projets agents (cash immédiat)
**Phase 2 (Mois 6-12)** : LLMOps & services managés (revenus récurrents)
**Phase 3 (Mois 9-18)** : Produits SaaS sectoriels (scalabilité)

### Opportunité Marché

- **Marché TAM** : 8,5 Md€ (IA d'entreprise en Europe)
- **Marché SAM** : 850 M€ (agents IA Azure pour ETI/PME France)
- **Marché SOM** : 25 M€ (agents industrialisés & LLMOps)

### Objectifs 18 Mois

- **CA Année 1** : 120k-200k€
- **CA Année 2** : 400k-600k€
- **Clients** : 15-25 clients actifs
- **Récurrence** : 30-40% du CA en revenus récurrents (M18)

### Équipe Fondatrice

Fondateur avec profil technique unique pour ce marché :
- **DevOps/SRE** : Industrialisation, CI/CD, observabilité
- **Azure & Kubernetes** : Architecture cloud, sécurité, scalabilité
- **Go/Backend** : Développement, intégration, APIs
- **IA Agents** : Azure AI Foundry, RAG, LLMOps

Ce profil permet de se positionner sur **"Agents IA en production"** plutôt que sur l'IA générique.

---

## Analyse du Marché

### 1. Contexte & Tendances

#### 1.1 Adoption Massive de l'IA Générative en Entreprise

Le marché de l'IA d'entreprise connaît une accélération sans précédent :

- **Investissements IA Europe** : 8,5 Md€ en 2024, +45% vs 2023
- **Taux d'adoption** : 68% des ETI/grandes entreprises ont lancé des projets IA en 2024
- **Passage à la production** : Seulement 15% des projets IA atteignent la production (McKinsey 2024)

**Points clés** :
- Les entreprises sont passées de "faut-il faire de l'IA ?" à "comment industrialiser l'IA ?"
- Le gap entre POC et production est le principal frein
- Les DSI recherchent des partenaires capables d'opérer l'IA, pas seulement de la concevoir

#### 1.2 Émergence des Agents IA

Les **agents IA** représentent l'évolution naturelle des chatbots :

**Chatbots classiques** :
- Répondent à des questions
- Scénarios rigides
- Peu connectés au SI

**Agents IA (Azure AI Foundry)** :
- Raisonnent et planifient
- Utilisent des outils (APIs, fonctions, code)
- S'intègrent au SI de l'entreprise
- Supervisés et gouvernés

**Cas d'usage prioritaires identifiés** :
1. **Support client L2/L3** (automatisation 40-60% des tickets)
2. **IT Ops & Cloud Ops** (diagnostic, runbooks, incidents)
3. **Finance & Back-office** (factures, rapprochements, reporting)
4. **Juridique interne** (analyse contrats, veille réglementaire)
5. **Sales & CRM** (pré-qualification, enrichissement données)

#### 1.3 Position Dominante de Microsoft Azure

**Microsoft domine l'IA d'entreprise européenne** :

- **Azure OpenAI Service** : plateforme de référence pour l'IA d'entreprise
- **Microsoft 365 Copilot** : 1M+ licences vendues en 2024
- **Azure AI Foundry** : plateforme agents la plus complète du marché
- **Écosystème** : intégration native M365, Dynamics, Power Platform

**Avantages stratégiques** :
- Conformité RGPD native (data residency UE)
- Sécurité & gouvernance enterprise-grade
- Adoption facilitée dans les organisations Microsoft

**Opportunité pour Doveaia** : Se positionner sur l'écosystème dominant.

#### 1.4 Réglementation : RGPD & AI Act

**RGPD (depuis 2018)** :
- Consentement, portabilité, droit à l'oubli
- DPO obligatoire pour traitements sensibles
- Amendes jusqu'à 4% du CA mondial

**AI Act (application 2025-2027)** :
- Classification des systèmes IA par risque
- Obligations de documentation et traçabilité
- Gouvernance et audits obligatoires

**Impact marché** :
- Les DSI/RSSI exigent des garanties de conformité
- Les "solutions bricolées" deviennent non-conformes
- Opportunité pour acteurs industrialisés et conformes

### 2. Segmentation & Dimensionnement

#### 2.1 Marché TAM (Total Addressable Market)

**IA d'entreprise en Europe** : 8,5 Md€

Inclut :
- Solutions IA génériques
- Data Science & ML
- Automatisation & RPA
- Tous secteurs et tailles d'entreprise

#### 2.2 Marché SAM (Serviceable Addressable Market)

**Agents IA Azure pour ETI/PME en France** : 850 M€

Critères de ciblage :
- **Géographie** : France (expansion Europe ensuite)
- **Taille entreprise** : PME (50-250 employés) et ETI (250-5000)
- **Technologie** : Écosystème Azure/Microsoft
- **Cas d'usage** : Agents IA métier (support, ops, finance, juridique)

**Estimation** :
- 15 000 ETI en France
- 5 000 utilisent Azure/M365
- Budget moyen IA : 50k-200k€/an
- SAM = 5 000 × 170k€ = 850 M€

#### 2.3 Marché SOM (Serviceable Obtainable Market)

**Agents IA industrialisés avec LLMOps** : 25 M€

Critères restrictifs :
- Entreprises recherchant **industrialisation** (pas juste POC)
- Besoin **LLMOps** et gouvernance
- Secteurs régulés ou exigeants (finance, juridique, santé, industrie)

**Estimation** :
- 500 entreprises cibles avec besoin LLMOps
- Budget moyen : 50k€/an
- SOM = 500 × 50k€ = 25 M€

**Part de marché objectif 18 mois** : 2-3% du SOM = 500k-750k€ CA cumulé

### 3. Dynamiques de Marché (Porter's Five Forces)

#### 3.1 Rivalité Concurrentielle : **MOYENNE**

**Marché fragmenté** :
- Peu d'acteurs spécialisés "agents IA + LLMOps"
- Beaucoup de généralistes IA sans différenciation
- Positionnement clair = avantage concurrentiel fort

#### 3.2 Menace Nouveaux Entrants : **ÉLEVÉE**

**Barrières à l'entrée faibles** :
- Outils Azure accessibles à tous
- Pas de certification requise
- Beaucoup de freelances et petites agences

**Défenses** :
- Expertise LLMOps (difficile à acquérir)
- Références clients (crédibilité DSI)
- IP propriétaire (frameworks, templates)

#### 3.3 Pouvoir de Négociation Clients : **MOYEN-ÉLEVÉ**

**Clients informés** :
- DSI compétents connaissent Azure
- Benchmark facile via Microsoft partners

**Mitigation** :
- Différenciation technique claire (LLMOps)
- Preuves de valeur (références, études de cas)
- Services managés (lock-in positif)

#### 3.4 Pouvoir de Négociation Fournisseurs : **ÉLEVÉ**

**Dépendance Microsoft** :
- Azure AI Foundry = plateforme unique
- Tarification Microsoft (GPT-4, Compute)

**Mitigation** :
- Abstraction multi-modèles (OpenAI, open-source)
- Optimisation coûts pour clients (valeur ajoutée)
- Positioning : expert Azure (pas revendeur)

#### 3.5 Menace Produits de Substitution : **MOYENNE**

**Alternatives** :
- Solutions internes (équipes data science)
- Plateformes concurrentes (AWS Bedrock, GCP Vertex AI)
- Copilot Studio seul (pour cas simples)

**Défense** :
- Copilot Studio = complémentaire (pas concurrent)
- Time-to-market rapide
- Expertise LLMOps introuvable en interne

### 4. Tendances Structurantes

#### 4.1 Shift "POC → Production"

Les entreprises ne veulent plus de démos, elles veulent des agents en production.

**Attentes DSI** :
- Observabilité & monitoring
- Sécurité & conformité
- Gouvernance & auditabilité
- Support & maintenance

👉 **Opportunité Doveaia** : LLMOps = différenciateur stratégique

#### 4.2 Hybridation Copilot Studio / Foundry

**Tendance observée** :
- Copilot Studio pour UI/UX (Teams, SharePoint)
- Azure AI Foundry pour logique métier complexe
- Architecture découplée = meilleure gouvernance

👉 **Opportunité Doveaia** : Expertise architecture hybride

#### 4.3 Multi-tenant & Isolation Données

**Exigence marché** :
- Données sensibles dans tenant client
- IP/frameworks dans tenant éditeur
- Modèle hybride = standard

👉 **Opportunité Doveaia** : Modèle déploiement par design

#### 4.4 FinOps IA

**Nouvelle préoccupation DSI** :
- Coûts IA difficiles à prévoir et contrôler
- Budgets LLM explosent sans gouvernance
- Besoin de monitoring coûts en temps réel

👉 **Opportunité Doveaia** : Observabilité coûts = valeur ajoutée immédiate

---

## Analyse Concurrentielle

### 1. Cartographie Concurrentielle

Le paysage concurrentiel se structure en **5 catégories** d'acteurs :

#### **Catégorie A : Intégrateurs Généralistes Cloud/Microsoft**

**Acteurs** : Capgemini, Accenture, Atos, Sopra Steria, CGI

**Profil** :
- Grands comptes historiques
- Expertise infrastructure Azure
- Approche catalogue & industrielle

**Forces** :
- Crédibilité DSI établie
- Ressources importantes
- Relations Microsoft solides

**Faiblesses** :
- Lents et chers
- Peu d'expertise agents IA
- Pas de LLMOps natif
- TJM élevés (1200-1800€)

**Positionnement Doveaia** : Plus agile, expert IA, meilleur rapport valeur/prix

---

#### **Catégorie B : Consultants "ChatGPT & Prompt Engineering"**

**Acteurs** : Freelances, micro-agences, "AI consultants"

**Profil** :
- Expertise OpenAI / ChatGPT
- Focus prompt engineering
- Peu d'industrialisation

**Forces** :
- Rapides & flexibles
- Prix attractifs (400-800€/jour)
- Bonne communication

**Faiblesses** :
- ❌ **Pas de DevOps/LLMOps**
- ❌ Pas d'architecture production
- ❌ Pas de sécurité/conformité
- ❌ Pas de support long terme

**Positionnement Doveaia** : "Nous opérons des agents en production avec des standards industriels, pas des démos Jupyter"

---

#### **Catégorie C : Agences IA/Data Science**

**Acteurs** : Quantmetry, Sicara, Octo Technology, Ekimetrics

**Profil** :
- Expertise ML/Data Science
- Projets sur-mesure
- Focus modèles custom

**Forces** :
- Crédibilité technique forte
- Bons cas d'usage métier
- Approche conseil premium

**Faiblesses** :
- Focus ML classique > agents IA
- Peu d'expertise Azure AI Foundry
- Projets longs et chers
- Moins de focus industrialisation

**Positionnement Doveaia** : Focus exclusif agents IA + Azure + LLMOps

---

#### **Catégorie D : Microsoft & Partners Certifiés**

**Acteurs** : Microsoft Services, partenaires Gold/Solutions Partner

**Profil** :
- Certifications Microsoft
- Accès avant-premières
- Support Microsoft direct

**Forces** :
- Légitimité Microsoft
- Formations officielles
- Co-selling possible

**Faiblesses** :
- Peu de vrais experts agents IA
- Approche commerciale > technique
- Expertise superficielle

**Positionnement Doveaia** : Expertise technique profonde, pas juste certifications

---

#### **Catégorie E : Startups LLMOps / AI Ops**

**Acteurs** : Langfuse, LangSmith, Weights & Biases

**Profil** :
- Plateformes LLMOps SaaS
- Outils pour développeurs IA
- Multi-cloud

**Forces** :
- Expertise LLMOps poussée
- Produits innovants
- Communauté développeurs

**Faiblesses** :
- Pas de services conseil
- Complexité pour PME/ETI
- Peu d'intégration Azure
- Pas de support projets

**Positionnement Doveaia** : LLMOps + Conseil + Projets clés en main

---

### 2. Matrice Concurrentielle

| Critère | Intégrateurs | Consultants ChatGPT | Agences DS | Partners MS | Startups LLMOps | **Doveaia** |
|---------|-------------|-------------------|-----------|------------|----------------|-------------|
| **Expertise Agents IA** | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Azure AI Foundry** | ⭐⭐⭐ | ⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **LLMOps & CI/CD** | ⭐⭐ | ⭐ | ⭐⭐ | ⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Sécurité/Conformité** | ⭐⭐⭐⭐⭐ | ⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Time-to-Market** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ |
| **Rapport Qualité/Prix** | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |

### 3. Avantages Concurrentiels Doveaia

#### 3.1 Positionnement Unique : "Architecte d'Agents IA en Production"

**Nous ne sommes pas** :
- ❌ Un intégrateur généraliste
- ❌ Un consultant prompt engineering
- ❌ Une agence data science classique
- ❌ Un revendeur de licences Microsoft

**Nous sommes** :
- ✅ Experts agents IA industrialisés
- ✅ Spécialistes Azure AI Foundry + LLMOps
- ✅ Architectes production (DevOps + IA)
- ✅ Partenaires long terme (conseil + infogérance)

#### 3.2 Différenciation Technique : LLMOps

**Là où 90% des acteurs échouent** :

| Problème Marché | Solution Doveaia |
|-----------------|------------------|
| Prompts modifiés en prod | Versioning Git + CI/CD |
| Coûts incontrôlés | Observabilité temps réel |
| Pas de mesure qualité | Évaluations automatiques (evals) |
| Agent casse en prod | Rollback instantané |
| Pas de traçabilité | Logs + audit trail complet |

**Message clé** : *"Un agent sans LLMOps est une démo. Un agent avec LLMOps est un système critique."*

#### 3.3 Expertise Azure Rare sur le Marché

**Combinaison unique** :
- Azure AI Foundry (agents)
- Azure AI Search (RAG)
- Azure DevOps / GitHub Actions (CI/CD)
- Managed Identity + RBAC (sécurité)
- Kubernetes (si nécessaire)

**Profil fondateur** :
- DevOps/SRE (industrialisation)
- Azure/Cloud (architecture)
- Go/Backend (développement)
- IA Agents (spécialisation)

👉 Très peu d'acteurs combinent ces compétences.

#### 3.4 Architecture Hybride Copilot/Foundry

**Stratégie intelligente** :
- Copilot Studio = UI/UX (Teams, SharePoint)
- Azure AI Foundry = backend/logique
- Meilleur des deux mondes

**Différenciation vs** :
- Consultants ChatGPT : pas d'industrialisation
- Intégrateurs : pas d'expertise Foundry
- Partners MS : focus commercial > technique

#### 3.5 Modèle Économique Évolutif

**Autres acteurs** :
- Intégrateurs : TJM uniquement
- Consultants : projets one-shot
- SaaS : produit sans conseil

**Doveaia** :
- Phase 1 : Conseil & projets (cash)
- Phase 2 : Infogérance (récurrent)
- Phase 3 : Produits SaaS (scalable)

👉 Meilleure résilience économique.

### 4. Menaces Concurrentielles

#### 4.1 Course à la Certification Microsoft

**Risque** : Multiplication de "Microsoft AI Partners" certifiés mais peu compétents.

**Mitigation** :
- Différenciation par références clients
- Contenu technique (blog, GitHub)
- Expertise LLMOps vérifiable

#### 4.2 Copilot Studio "Suffisant" pour Clients

**Risque** : Microsoft améliore Copilot Studio, réduit besoin Foundry.

**Mitigation** :
- Positionnement complémentaire (pas concurrent)
- Focus sur cas complexes (multi-agents, orchestration)
- LLMOps = valeur ajoutée indépendante de la plateforme

#### 4.3 Acquisition par Grands Intégrateurs

**Risque** : Capgemini/Accenture rachètent startups LLMOps.

**Mitigation** :
- Agilité & proximité client (vs bureaucratie grands groupes)
- Expertise personnelle non-réplicable à court terme
- Focus PME/ETI (moins intéressant pour géants)

### 5. Stratégie Concurrentielle

#### Offensive

**Attaquer les consultants ChatGPT** :
- Message : "POC ≠ Production"
- Cibler clients déçus de démos non industrialisées
- Offre "rescue" : industrialisation d'agents existants

**Se différencier des intégrateurs** :
- Agilité & rapidité
- Expertise profonde (vs superficielle)
- Prix compétitifs (TJM 700-1200€ vs 1200-1800€)

#### Défensive

**Construire des barrières à l'entrée** :
- Références clients vérifiables
- IP propriétaire (frameworks, templates)
- Contenu technique (thought leadership)

**Créer du lock-in positif** :
- Services managés (dépendance opérationnelle)
- Formation équipes client (transfert compétences)
- Partenariats long terme

---

## Description des Offres

Doveaia propose **trois offres packagées** conçues pour monter en gamme naturellement : de la preuve de valeur (Starter) à la plateforme industrielle (Enterprise).

Toutes nos offres intègrent intelligemment **Microsoft 365 Copilot et Copilot Studio** lorsque pertinent, tout en conservant notre différenciation LLMOps via Azure AI Foundry.

---

### Offre 1 : **STARTER** / Proof of Value

#### Positionnement

*"Premier agent IA métier en production – rapide et sûr"*

**Cible** :
- PME ou départements d'ETI
- Premier projet IA
- Processus internes simples
- Faible criticité, besoin de preuve de valeur

#### Contenu de l'Offre

**Ce que le client obtient** :

1. **1 agent IA ciblé**
   - Cas d'usage métier spécifique : support interne, FAQ, recherche documentaire, assistant juridique...
   - Déployé en production (pas un POC)

2. **Intégration 1 source de données**
   - SharePoint, dossiers PDF, API interne simple
   - Azure AI Search (RAG) pour requêtes documentaires

3. **Architecture** :
   - Copilot Studio pour l'interface utilisateur (Teams/SharePoint) si écosystème M365
   - Agent Azure AI Foundry côté backend pour contrôle et intégration
   - Données : restent dans tenant client ou environnement sécurisé Doveaia

4. **Prompts versionnés (v1)**
   - Stockés dans Git
   - Possibilité de modification contrôlée

5. **Monitoring basique**
   - Traces & logs des requêtes
   - Alertes sur erreurs critiques

6. **Inclus** :
   - ½ journée atelier de cadrage
   - Documentation d'usage
   - Transfert de compétences (1h)

**Non inclus (options)** :
- Multi-agents
- Évaluations automatiques (evals)
- CI/CD complet
- Support long terme (proposition infogérance séparée)

#### Livrables

- Agent fonctionnel en production
- Documentation technique & utilisateur
- Accès monitoring basique
- 1 session formation utilisateurs

#### Durée & Prix

- **Délai** : 2-3 semaines
- **Prix** : 5 000€ - 10 000€ (fonction complexité source données)

#### Objectif Business

- Montrer de la valeur rapidement
- Ouvrir la porte à l'offre Scale
- Générer des références clients

#### Cas d'Usage Typiques

- Agent FAQ interne RH/IT
- Assistant recherche documentaire (contrats, procédures)
- Agent support L1 (tickets simples)
- Assistant analyse dossiers juridiques (avocat, notaire)

---

### Offre 2 : **SCALE** / Adoption

#### Positionnement

*"Agents IA intégrés multi-systèmes + LLMOps"*

**Cible** :
- ETI ou départements critiques de grandes entreprises
- Processus métier M365 + données internes hors M365
- Besoin d'industrialisation et gouvernance
- Projets stratégiques avec ROI attendu

#### Contenu de l'Offre

**Ce que le client obtient** :

1. **2-3 agents IA**
   - Cas d'usage multiples ou agent complexe multi-étapes
   - Agents outillés (tools, functions, APIs)

2. **RAG multi-sources**
   - SharePoint, bases de données, APIs internes, systèmes métier
   - Index Azure AI Search dédiés par domaine
   - Gouvernance des données par rôle/utilisateur

3. **Architecture hybride** :
   - **Copilot Studio** pour interface utilisateur (Teams/Office)
   - **Azure AI Foundry Agents** pour backend et intégration multi-sources
   - **Environnements séparés** : dev / staging / prod
   - **Données sensibles** : restent dans tenant client si nécessaire

4. **LLMOps Foundation** :
   - Prompts versionnés + pipeline CI/CD
   - Évaluations automatiques (evals) sur jeux de tests
   - Rollback possible en cas de régression

5. **Observabilité avancée** :
   - Coûts par agent / par utilisateur
   - Traces des décisions agents
   - Dashboard qualité des réponses
   - Alertes proactives

6. **Sécurité & conformité** :
   - RBAC fin (par agent, par source, par rôle)
   - Audit logs des accès
   - Architecture zero-trust
   - Documentation conformité RGPD

7. **Inclus** :
   - Audit & design d'architecture
   - Tests utilisateurs avant mise en prod
   - Support post-prod (1 mois)
   - Formation équipes internes

#### Livrables

- 2-3 agents en production
- Documentation architecture complète
- Runbooks d'exploitation
- Dashboard observabilité
- Plan de support & maintenance

#### Durée & Prix

- **Délai** : 4-8 semaines
- **Prix projet** : 20 000€ - 50 000€
- **Option infogérance** : +2 000€-5 000€/mois

#### Objectif Business

- Créer une dépendance saine (fiabilité, sécurité, récurrence)
- Démontrer la valeur du LLMOps
- Générer des revenus récurrents via infogérance

#### Cas d'Usage Typiques

- Agent support interne multi-niveaux (L1-L2)
- Agent IT Ops / Cloud Ops (diagnostic, runbooks)
- Agent finance / back-office (factures, rapprochements)
- Agent commercial interne (enrichissement CRM, pré-qualification)
- Agent juridique multi-sources (contrats + veille réglementaire)

---

### Offre 3 : **ENTERPRISE** / Industrial LLMOps

#### Positionnement

*"Plateforme d'agents IA critiques, multi-tenant et gouvernée"*

**Cible** :
- Grands comptes / secteurs régulés (banque, assurance, santé, industrie)
- Multi-systèmes d'information
- Besoin de gouvernance IA complète
- Agents critiques avec SLA exigeants

#### Contenu de l'Offre

**Ce que le client obtient** :

1. **Agents illimités (selon périmètre contractuel)**
   - Multi-agents orchestrés
   - Agents autonomes supervisés
   - Workflows complexes multi-étapes

2. **Architecture industrielle hybride** :
   - **Copilot Studio** pour UX front-end (si Teams/SharePoint)
   - **Azure AI Foundry Agents** pour backend + orchestration
   - **Données sensibles** : tenant client ou environnement isolé ultra-sécurisé
   - **Environnements complets** : dev / staging / preprod / prod

3. **LLMOps Complet** :
   - **CI/CD agents** : pipeline automatisé de déploiement
   - **Versioning prompts** : historique complet, rollback instantané
   - **Évaluations automatiques** : quality, hallucinations, conformité
   - **A/B testing** : comparaison de versions de prompts
   - **Gestion multi-modèles** : Azure OpenAI, OpenAI, modèles open-source

4. **Observabilité Enterprise** :
   - Coûts par agent / département / utilisateur
   - Traces complètes des décisions agents
   - Dashboard temps réel (qualité, latence, erreurs)
   - Alertes intelligentes avec escalade
   - Intégration monitoring existant (DataDog, Grafana, Azure Monitor)

5. **Gouvernance & Conformité IA** :
   - Traçabilité complète des décisions
   - Audit trail conforme AI Act
   - Gestion des rôles et permissions granulaire
   - Documentation réglementaire (RGPD, AI Act, secteurs régulés)
   - Politique IA d'entreprise

6. **Sécurité Maximale** :
   - Architecture zero-trust
   - Isolation multi-tenant stricte
   - Chiffrement end-to-end
   - Managed Identity uniquement (no API keys)
   - Pentests & audits sécurité

7. **Inclus** :
   - Co-construction stratégique (atelier exécutif)
   - Architecture sur-mesure
   - Formation équipes internes (tech + métier)
   - Documentation architecture & exploitation
   - Support & infogérance IA (contrat annuel)
   - Revues trimestrielles (roadmap, KPIs)

#### Livrables

- Plateforme agents IA complète
- Framework LLMOps propriétaire
- Documentation exhaustive (architecture, exploitation, conformité)
- Dashboard observabilité enterprise
- SLA contractuels
- Plan de reprise d'activité (PRA)

#### Durée & Prix

- **Délai** : 8-16 semaines (phase initiale)
- **Prix projet initial** : 60 000€ - 150 000€+
- **Forfait mensuel infogérance** : 2 000€ - 8 000€/mois

#### Objectif Business

- Revenus récurrents prévisibles
- Positionnement expert long terme
- Références grands comptes
- Expansion compte (upsell autres départements)

#### Cas d'Usage Typiques

- Plateforme agents métier multi-départements
- Agents critiques avec SLA (support client, fraud detection)
- Orchestration complexe multi-agents
- Intégration SI legacy + cloud
- Gouvernance IA group-wide

---

### Vision de Montée en Gamme

```
STARTER  →  SCALE  →  ENTERPRISE
   ↓          ↓          ↓
Quick win   Adoption   Plateforme IA
Copilot UI  Hybride    Industrial LLMOps
```

**Starter** = preuve de valeur, adoption rapide
**Scale** = industrialisation, début LLMOps, IP protégée
**Enterprise** = gouvernance complète, multi-tenant, contrôle total

---

### Architecture de Déploiement & Propriété Intellectuelle

#### 1. Starter

```
User (Teams/Office)
     ↓
Copilot Studio (UI)
     ↓
Agent Foundry minimal
     ↓
Source de données (SharePoint / PDF)
```

- **Avantage** : Déploiement rapide
- **IP Doveaia** : Templates agent et pipelines restent chez nous
- **Données client** : Peuvent rester dans tenant client

#### 2. Scale (Hybride)

```
           Doveaia Tenant (Framework LLMOps)
           ┌────────────────────────────┐
           │ Templates / CI/CD / Evals  │
           └────────────▲───────────────┘
                        │ (API sécurisée)
                        │
User (Teams/Office) → Copilot Studio (UI)
                        │
Azure AI Foundry Agents (Tenant client ou isolé)
      ├── RAG multi-sources
      └── Observabilité (coût, qualité, trace)
```

- **IP protégée** : Dans tenant Doveaia (pipelines, prompts, templates)
- **Données client** : Restent isolées dans leur tenant
- **Avantage** : Permet d'industrialiser progressivement tout en protégeant notre IP

#### 3. Enterprise (LLMOps Industriel)

```
Doveaia Tenant
 ├─ CI/CD Agents
 ├─ Versioning Prompts
 ├─ Framework Evals
 └─ Dashboard Observabilité
      ↕ (Managed Identity / API)
Tenant Client (ou environnement isolé)
 ├─ Azure AI Foundry Agents
 ├─ RAG multi-sources
 ├─ Orchestration multi-agents
 └─ Copilot Studio UI (facultatif)
```

- **IP Doveaia** : Tout ce qui touche LLMOps + pipelines
- **Données client** : 100% protégées dans leur tenant
- **Avantage** : Industrialisation complète, multi-modèle, résilience maximale

---

### Positionnement Commercial Clé

**❌ "On fait des chatbots"**
**✅ "On opère des agents IA sécurisés en production sur Azure"**

**❌ "On remplace Microsoft Copilot"**
**✅ "On étend Copilot avec des agents industrialisés pour vos cas métier complexes"**

**Message DSI/RSSI** :
*"Les agents IA sont déployés selon les standards Azure, sans API keys, avec identité managée, isolation des données et contrôle total du client. Aucun entraînement des modèles n'est effectué sur les données client."*

---

## Modèle de Revenus

### 1. Sources de Revenus

Doveaia génère des revenus via **3 flux complémentaires** qui évoluent dans le temps :

#### Flux 1 : **Projets & Conseil** (Mois 0-18)

**Nature** : Revenus ponctuels (one-shot)

**Activités** :
- Audits IA (5-10k€)
- Projets agents Starter (5-10k€)
- Projets agents Scale (20-50k€)
- Projets agents Enterprise (60-150k€+)
- Missions conseil stratégique IA
- Formation & workshops

**Caractéristiques** :
- ✅ Cash immédiat
- ✅ Validation marché rapide
- ✅ Construction de références
- ⚠️ Pas de récurrence
- ⚠️ Scalabilité limitée (temps vendable)

**Part du CA** :
- **Année 1** : 80-90%
- **Année 2** : 60-70%
- **Année 3** : 40-50%

---

#### Flux 2 : **Services Managés & Infogérance** (Mois 6-36)

**Nature** : Revenus récurrents mensuels (MRR)

**Activités** :
- Infogérance agents (monitoring, maintenance)
- Forfaits LLMOps (CI/CD, versioning, observabilité)
- Support & SLA
- Évolutions mineures incluses

**Modèle de pricing** :

| Offre | Forfait mensuel |
|-------|----------------|
| Starter + Support | 500€ - 1 000€/mois |
| Scale + LLMOps | 2 000€ - 5 000€/mois |
| Enterprise | 5 000€ - 8 000€/mois |

**Caractéristiques** :
- ✅ Revenus prévisibles
- ✅ Meilleure valorisation entreprise
- ✅ Fidélisation client
- ⚠️ Nécessite excellence opérationnelle
- ⚠️ Marge initiale plus faible (setup)

**Part du CA** :
- **Année 1** : 10-20%
- **Année 2** : 30-40%
- **Année 3** : 40-50%

---

#### Flux 3 : **Produits SaaS Sectoriels** (Mois 12-36+)

**Nature** : Revenus récurrents (ARR)

**Stratégie** : Extraire les agents les plus demandés et les packager en produits SaaS

**Exemples de produits potentiels** :
- "Agent Juridique Pro" (avocats, notaires, juristes entreprise)
- "Agent IT Ops" (DSI PME, MSP)
- "Agent Finance Back-Office" (DAF, comptables)

**Modèle de pricing** (estimation) :
- 200€-500€/mois par organisation
- Usage-based (nombre d'utilisateurs ou requêtes)
- Option white-label pour revendeurs

**Caractéristiques** :
- ✅ Scalabilité forte
- ✅ Marges élevées
- ⚠️ Investissement R&D initial
- ⚠️ Concurrence accrue
- ⚠️ Marketing & acquisition clients

**Part du CA** :
- **Année 1** : 0%
- **Année 2** : 0-5%
- **Année 3** : 10-20%

---

### 2. Stratégie de Pricing

#### Principes Directeurs

**1. Value-based pricing** (prix basé sur la valeur, pas le coût)
- Un agent qui fait gagner 100h/mois justifie facilement 10-20k€

**2. Transparence sur les coûts Azure**
- Les coûts d'infrastructure Azure (GPT-4, Compute, Storage) sont :
  - Soit refacturés au client (mode transparent)
  - Soit inclus dans le forfait avec marge (mode managé)

**3. Packages clairs**
- Éviter le custom illimité (dérive scope)
- Options clairement définies et tarifées

**4. Recurring > One-shot**
- Toujours proposer une option infogérance
- Valoriser le LLMOps comme service continu

---

### 3. Structure de Prix Détaillée

#### Audit IA

**Prix** : 5 000€ - 10 000€

**Inclus** :
- Analyse processus métier (1-2 jours)
- Identification 3 cas d'usage agents
- Évaluation Copilot Studio vs Foundry
- Architecture cible (sécurité, tenant, conformité)
- Estimation coûts & ROI
- Roadmap recommandée

**Durée** : 1-2 semaines

---

#### Offre Starter

**Prix projet** : 5 000€ - 10 000€

**Inclus** :
- 1 agent IA métier
- 1 source de données
- Copilot Studio (UI) si M365
- Monitoring basique
- ½ journée cadrage
- Documentation
- Formation 1h

**Option infogérance** : +500€-1 000€/mois
- Support utilisateurs
- Corrections bugs
- Monitoring continu
- Mises à jour mineures

**Durée** : 2-3 semaines

---

#### Offre Scale

**Prix projet** : 20 000€ - 50 000€

**Inclus** :
- 2-3 agents IA
- RAG multi-sources
- Architecture hybride
- LLMOps foundation (CI/CD, versioning, evals)
- Observabilité avancée
- Sécurité & conformité
- Support 1 mois post-prod
- Formation équipes

**Forfait LLMOps** : +2 000€-5 000€/mois
- Maintenance CI/CD
- Versioning prompts
- Monitoring qualité/coûts
- Support technique
- Évolutions mineures

**Durée** : 4-8 semaines

---

#### Offre Enterprise

**Prix projet initial** : 60 000€ - 150 000€+

**Inclus** :
- Agents illimités (périmètre défini)
- Architecture industrielle
- LLMOps complet (CI/CD, multi-modèles, A/B testing)
- Observabilité enterprise
- Gouvernance & conformité
- Sécurité maximale
- Formation complète
- Documentation exhaustive

**Forfait infogérance** : 5 000€-8 000€/mois
- Exploitation 24/7
- SLA contractuels
- Évolutions continues
- Revues trimestrielles
- Support prioritaire

**Durée** : 8-16 semaines (phase initiale)

---

### 4. Modèle Économique : Évolution Consulting → SaaS

#### Année 1 : **Consulting & Cash**

**Objectif** : Valider marché, générer cash, construire IP

**Revenus** :
- 80-90% projets
- 10-20% infogérance

**Activités** :
- Audits & Starter (acquisition clients)
- Quelques Scale (références)
- Formation workshops

**CA cible** : 120k-200k€

---

#### Année 2 : **Industrialisation & Récurrence**

**Objectif** : Scaler projets, augmenter MRR, préparer produits

**Revenus** :
- 60-70% projets
- 30-40% infogérance

**Activités** :
- Scale dominant
- Premiers Enterprise
- Frameworks LLMOps vendables
- Possibles premiers pilotes SaaS

**CA cible** : 400k-600k€

---

#### Année 3 : **Produits & Scalabilité**

**Objectif** : Lancer produits SaaS, réduire dépendance temps vendable

**Revenus** :
- 40-50% projets
- 40-50% infogérance
- 10-20% SaaS

**Activités** :
- Enterprise récurrent
- 1-2 produits SaaS lancés
- Partenariats distribution

**CA cible** : 800k-1,2M€

---

### 5. Facturation Infrastructure Azure

**Question clé** : Comment gérer les coûts Azure quand les agents sont dans le tenant client ?

#### Option A : **Refacturation Transparente** (recommandée Phase 1-2)

**Principe** :
- Client crée son propre compte/tenant Azure
- Client paie directement Microsoft (facture Azure à son nom)
- Doveaia ne gère que les services (expertise, LLMOps)

**Avantages** :
- ✅ Transparence totale
- ✅ Pas de gestion trésorerie infrastructure
- ✅ Client voit consommation réelle

**Inconvénients** :
- ⚠️ Client doit avoir compétence administrative Azure
- ⚠️ Pas adapté aux PME sans DSI

---

#### Option B : **Forfait All-Inclusive** (recommandée pour PME)

**Principe** :
- Doveaia crée environnement Azure (possiblement dans tenant Doveaia avec isolation)
- Forfait mensuel inclut infrastructure + services
- Estimation coûts Azure + marge

**Exemple** :
- Coût Azure estimé : 300€/mois
- Marge infrastructure : 30%
- Services LLMOps : 1 500€/mois
- **Total forfait** : 1 900€/mois

**Avantages** :
- ✅ Simplicité pour client PME
- ✅ Prix fixe prévisible
- ✅ Doveaia contrôle complet

**Inconvénients** :
- ⚠️ Risque dépassement coûts Azure (à mitiger par alertes)
- ⚠️ Gestion trésorerie infrastructure

---

#### Option C : **Hybride** (recommandée Scale/Enterprise)

**Principe** :
- Tenant dans organisation client
- Doveaia accès via Managed Identity / Guest Account
- Coûts Azure facturés au client
- Services Doveaia facturés séparément

**Avantages** :
- ✅ Données 100% chez client (conformité maximale)
- ✅ Pas de gestion infrastructure côté Doveaia
- ✅ IP Doveaia protégée (frameworks dans notre tenant)

**Inconvénients** :
- ⚠️ Setup initial plus long
- ⚠️ Nécessite maturité Azure côté client

---

### 6. Métriques Clés (KPIs)

#### Métriques Revenus

- **MRR** (Monthly Recurring Revenue) : revenus récurrents mensuels
- **ARR** (Annual Recurring Revenue) : MRR × 12
- **Taux récurrence** : MRR / CA total
- **ARPU** (Average Revenue Per User/Client)
- **LTV** (Customer Lifetime Value)

**Objectifs 18 mois** :
- MRR : 15-25k€
- Taux récurrence : 30-40%
- LTV : 50-150k€ (selon offre)

#### Métriques Commerciales

- **CAC** (Customer Acquisition Cost) : coût acquisition client
- **Taux conversion** : audit → projet
- **Cycle de vente** : durée moyenne signature
- **Taux upsell** : Starter → Scale → Enterprise

#### Métriques Opérationnelles

- **Taux d'utilisation** : temps facturable / temps total
- **Marge brute** : (CA - coûts directs) / CA
- **Marge opérationnelle** : (CA - coûts totaux) / CA

**Objectifs** :
- Taux utilisation : 60-70% (année 1), 70-80% (année 2+)
- Marge brute : 70-80%
- Marge opérationnelle : 20-30% (année 2+)

---

## Stratégie Go-to-Market

### 1. Roadmap en 4 Phases (12-18 mois)

Notre stratégie de mise sur le marché suit une logique de **validation progressive** : nous ne construisons pas un produit dans le vide, mais utilisons des **missions payées pour fabriquer notre IP et valider le marché**.

---

### PHASE 0 : Positionnement & Socle (Mois 0 — 2-3 semaines)

#### Objectif
Être vendable immédiatement avec une offre claire et un MVP d'expertise.

#### Actions

**1. Définir le positionnement**
- Angle clair : "Agents IA sécurisés & industrialisés sur Azure"
- Message : "Nous opérons des agents IA en production, pas des démos"
- Différenciation : LLMOps (là où 90% échouent)

**2. Créer les assets commerciaux**
- Page offre 1 pager (Starter / Scale / Enterprise)
- Argumentaire DSI/RSSI (sécurité, conformité, architecture)
- Présentation pitch deck (10-15 slides)
- 1 slide "ce qu'on ne fait PAS" (chatbots, prompt engineering seul)

**3. Construire le MVP technique**
- 1 repo Git "agent template" (Foundry + Copilot Studio)
- Pipeline RAG basique (Azure AI Search)
- Framework prompts versionnés
- Monitoring minimal

**4. Identifier les premiers prospects**
- Réseau existant (LinkedIn, contacts professionnels)
- Cible : 10-15 prospects qualifiés
- Focus : PME/ETI avec besoin concret + budget

#### Livrables

✅ Pitch clair (30 secondes)
✅ Offres packagées documentées
✅ Template technique agent Foundry
✅ Liste 10-15 prospects

#### Validation

Capacité à expliquer l'offre sans mentionner "ChatGPT" ni "chatbot".

---

### PHASE 1 : Conseil & Cadrage IA (Mois 1-3 — Cash Immédiat)

#### Objectif
Générer du cash rapidement tout en apprenant le marché et les vrais besoins clients.

#### Stratégie Commerciale

**Portes d'entrée** :
1. **Audits IA** (5-10k€)
2. **Formations & workshops** (1-2 jours)

**Pourquoi ces offres** :
- ✅ Cycle de vente court (2-4 semaines)
- ✅ Peu de développement
- ✅ Découverte terrain (besoins, freins, budgets)
- ✅ Pipeline naturel vers projets agents

#### Actions

**1. Prospection ciblée**
- Réseau LinkedIn : 3-5 posts/semaine sur agents IA + Azure
- Outreach direct : 10 emails/semaine (personnalisés)
- Participation événements Microsoft (webinars, meetups Azure)
- Partenariat potentiel : cabinets conseil transformation digitale

**2. Offres à pousser**
- **Audit IA express** (1 semaine, 5k€) : "Identifier vos 3 meilleurs cas d'usage agents IA"
- **Workshop dirigeants** (½ journée, 2k€) : "IA Agents vs Chatbots : comment industrialiser"
- **Formation technique** (1 jour, 3k€) : "Azure AI Foundry pour développeurs"

**3. Validation marché**
- Mener 5-10 audits
- Documenter cas d'usage récurrents
- Identifier objections fréquentes
- Ajuster argumentaire

#### Livrables Phase 1

- **Commercial** : 5-10 audits clients payés
- **Connaissance** : Liste cas d'usage récurrents + freins identifiés
- **Pipeline** : 3-5 projets agents en négociation

#### Validation

Les clients demandent spontanément "et après l'audit, on fait quoi ?" → signal fort d'appétence pour projets agents.

#### CA Phase 1

**Objectif** : 30-60k€
**Mix** : 50% audits, 30% formations, 20% premiers Starter

---

### PHASE 2 : Projets Agents & RAG (Mois 3-9 — Cœur de Métier)

#### Objectif
Installer la crédibilité technique via projets concrets et construire l'IP réutilisable.

#### Stratégie

**Focus** : Livrer 3-5 projets agents réels de qualité production.

**Règle d'or** : Chaque projet doit produire :
1. Du revenu immédiat
2. Un bout de notre futur produit (template, pipeline, framework)
3. Une référence client exploitable commercialement

#### Actions

**1. Prioriser offre Starter & Scale**

**Starter** (5-10k€) :
- Cible : PME, premiers projets IA
- Objectif : Rapide, preuve de valeur
- Volume : 5-8 projets

**Scale** (20-50k€) :
- Cible : ETI, départements critiques
- Objectif : Industrialisation, LLMOps foundation
- Volume : 2-3 projets

**2. Construction de l'IP**

Chaque projet alimente :
- **Library de prompts** : Prompts système éprouvés par domaine (juridique, support, IT ops)
- **Pipelines RAG** : Ingestion multi-sources (SharePoint, PDF, APIs)
- **Framework agents** : Templates réutilisables par cas d'usage
- **Patterns LLMOps** : CI/CD, versioning, evals

**3. Exploitation commerciale**

- **Études de cas** : Rédiger 2-3 success stories (anonymisées si nécessaire)
- **Démos packagées** : Agents démo par vertical (juridique, IT ops, finance)
- **Témoignages** : Obtenir recommandations LinkedIn

**4. Référence pilote : projet avocat**

Utiliser le projet avocat comme **laboratoire R&D** :
- Tester hypothèses (architecture, LLMOps, pricing)
- Itérer rapidement
- Documenter apprentissages
- Capitaliser en offre packagée "Agent Juridique"

**Séquence projet avocat** :
1. Audit IA (1 semaine) → 5-8k€
2. Agent Starter (2-3 semaines) → 8-10k€
3. Scale + LLMOps (4-6 semaines) → 30-40k€
4. Option infogérance → 2-3k€/mois

Total potentiel : 45-60k€ + récurrent

#### Livrables Phase 2

- **Projets** : 5-8 agents en production chez clients
- **IP** : Framework agents + pipelines RAG + library prompts
- **Commercial** : 2-3 études de cas + démos packagées
- **Récurrent** : 3-5 contrats infogérance (MRR : 5-10k€)

#### Validation

Capacité à livrer un agent Starter en 2-3 semaines sans stress. Pipeline de prospects entrant (inbound).

#### CA Phase 2

**Objectif** : 120-180k€
**Mix** : 60% Starter, 30% Scale, 10% infogérance

---

### PHASE 3 : Industrialisation & LLMOps (Mois 6-12 — Différenciation)

#### Objectif
Devenir incomparable via l'expertise LLMOps et monter en gamme (Scale/Enterprise).

#### Stratégie

**Construction framework LLMOps** :
- Pas vendu comme produit autonome au début
- Vendu comme **option premium** dans Scale/Enterprise
- Devient notre principal différenciateur concurrentiel

#### Actions

**1. Développement Framework "LLMOps by Doveaia"**

**Composants** :
- **CI/CD agents** : Pipeline GitHub Actions / Azure DevOps
- **Versioning prompts** : Git-based, tagging sémantique
- **Évaluations automatiques** : Jeux de tests + scoring qualité
- **Observabilité** : Dashboard coûts + qualité + traces
- **Multi-modèles** : Abstraction Azure OpenAI / OpenAI / open-source

**2. Packaging offres premium**

**Scale + LLMOps** (30-50k€) :
- Agents + industrialisation complète
- Devient l'offre standard pour ETI

**Enterprise** (60-150k€) :
- Plateforme multi-agents gouvernée
- Cible : grands comptes, secteurs régulés

**3. Montée en gamme clients existants**

- Upsell Starter → Scale
- Proposition LLMOps aux clients Scale existants
- Contrats infogérance annuels

**4. Positionnement thought leadership**

- Articles blog techniques (LLMOps, Azure AI Foundry)
- Talks & conférences (meetups Azure, DevOps)
- Partage code open-source (tools, templates)

#### Livrables Phase 3

- **Produit** : Framework LLMOps opérationnel et vendable
- **Projets** : 2-3 Scale, 1-2 Enterprise
- **Récurrent** : MRR 15-20k€
- **Notoriété** : Positionnement expert reconnu (LinkedIn, conférences)

#### Validation

Clients acceptent de payer forfait mensuel LLMOps (2-5k€/mois). Demandes inbound qualifiées.

#### CA Phase 3

**Objectif** : 180-300k€
**Mix** : 40% Scale, 30% Enterprise, 30% infogérance/récurrent

---

### PHASE 4 : Produits & SaaS Agents (Mois 9-18 — Scalabilité)

#### Objectif
Passer du temps vendu au revenu récurrent scalable via produits SaaS.

#### Principe

**Le produit est l'extraction de ce que nous faisons déjà.**

Ne pas inventer un produit "cool", mais **packager ce que 3 clients ont payé** pour la même chose.

#### Stratégie

**1. Identifier le produit**

Analyser les projets livrés :
- Quel cas d'usage revient le plus souvent ?
- Quelle douleur est commune à plusieurs clients ?
- Quel agent avons-nous déjà livré 3 fois ?

**Candidats probables** :
- **Agent Juridique Pro** (avocats, notaires, juristes d'entreprise)
- **Agent IT Ops / Cloud Ops** (DSI PME, MSP)
- **Agent Finance Back-Office** (DAF, comptables)

**2. MVP Produit**

**Règles MVP** :
- 1 agent
- 1 problème
- 1 cible
- Pas de customisation (ou très limitée)

**Exemple : "Agent Juridique Pro"**
- Agent analyse contrats + veille réglementaire
- Cible : cabinets d'avocats 5-50 personnes
- Interface : Web app + intégration Outlook/Teams
- Pricing : 300€/mois/cabinet + 50€/utilisateur supplémentaire

**3. Validation produit**

**Avant tout marketing :**
- 3 clients pilotes payants
- Feedback utilisateurs intensif (toutes les 2 semaines)
- Itérations rapides

**Seulement ensuite :**
- Site web produit
- Marketing contenu
- Campagnes acquisition

**4. Distribution**

**Canaux** :
- Direct (site web, inbound)
- Partenariats (cabinets conseil, éditeurs métier)
- Marketplace Azure (visibilité écosystème Microsoft)

#### Livrables Phase 4

- **Produit** : 1 SaaS agent lancé (10-20 clients pilotes)
- **Pipeline** : Projets Scale/Enterprise continuent
- **Récurrent** : MRR 20-30k€ (infogérance + SaaS)

#### Validation

3 clients paient le SaaS pendant 3 mois consécutifs avec usage régulier.

#### CA Phase 4

**Objectif** : 200-400k€
**Mix** : 30% Scale/Enterprise, 50% infogérance, 20% SaaS

---

### 2. Canaux d'Acquisition

#### Canal 1 : **LinkedIn (prioritaire Année 1)**

**Stratégie** : Thought leadership + outbound ciblé

**Actions** :
- **Posts** : 3-5/semaine sur agents IA, Azure, LLMOps
- **Contenu** : Technique (pas de bullshit marketing)
- **Formats** : Retours d'expérience, tutoriels courts, débats (Copilot vs Foundry)
- **Outreach** : 10-15 messages/semaine personnalisés (DSI, CTO, directeurs innovation)

**KPIs** :
- 1 000 connexions pertinentes (M6)
- 5 000 impressions/mois (M12)
- 2-3 leads qualifiés/mois (M6+)

---

#### Canal 2 : **Réseau & Partenariats**

**Approche** : Warm intros > cold outreach

**Actions** :
- **Réseau existant** : Anciens collègues, clients, partenaires
- **Cabinets conseil** : Partenariat référencement (transformation digitale, stratégie IT)
- **Intégrateurs Microsoft** : Sous-traitance expertise agents IA
- **Associations professionnelles** : ACN, AFAI, CroissancePlus

**Modèle partenariat** :
- Apporteur d'affaires : 10-15% commission
- Co-delivery : partage projet 50/50 ou par compétences

---

#### Canal 3 : **Contenu & SEO (Année 1-2)**

**Objectif** : Établir autorité technique, générer inbound long terme

**Actions** :
- **Blog technique** : 2 articles/mois (Azure AI Foundry, LLMOps, études de cas)
- **GitHub** : Open-sourcer des tools/templates (visibilité communauté dev)
- **YouTube** (optionnel) : Tutoriels techniques courts

**Sujets prioritaires SEO** :
- "Azure AI Foundry vs Copilot Studio"
- "LLMOps : industrialiser agents IA"
- "Agents IA pour [juridique/finance/IT ops]"
- "RAG multi-sources avec Azure AI Search"

**KPIs** :
- 500 visiteurs/mois (M12)
- 2-3 leads qualifiés/trimestre

---

#### Canal 4 : **Événements & Conférences**

**Approche** : Networking + crédibilité

**Actions** :
- **Meetups Azure/IA** : Présentation retours d'expérience
- **Conférences** : Devoxx, Touraine Tech, Azure Day, AI Summit
- **Webinars Microsoft** : Co-webinar avec Microsoft France (si partenariat)

**Objectif** : 2-3 événements/trimestre (speaker ou participant actif)

---

#### Canal 5 : **Microsoft Ecosystem (Année 2+)**

**Opportunité** : S'intégrer à l'écosystème partenaires Microsoft

**Actions** :
- **Microsoft Partner Network** : Solutions Partner designation
- **Azure Marketplace** : Publier offres (consulting + SaaS)
- **Co-selling Microsoft** : Accès pipeline Microsoft (si éligible)

**Bénéfices** :
- Crédibilité immédiate
- Accès prospects qualifiés
- Support technique Microsoft

---

### 3. Persona Cibles

#### Persona 1 : **DSI / CTO ETI** (prioritaire Scale/Enterprise)

**Profil** :
- Entreprise : 250-2000 employés
- Secteur : Services, industrie, finance
- Stack : Azure, Microsoft 365
- Enjeux : Modernisation SI, efficacité opérationnelle, conformité

**Besoins** :
- Industrialiser l'IA (pas des POC)
- Sécurité & gouvernance
- Intégration SI existant
- Support & maintenance long terme

**Freins** :
- "On a déjà Microsoft Copilot, c'est suffisant"
- "Les agents IA ne sont pas assez matures"
- "Trop risqué en termes de sécurité/RGPD"

**Messages clés** :
- "Nous industrialisons là où les autres font des démos"
- "LLMOps : le chaînon manquant entre POC et production"
- "Architecture zero-trust, conformité RGPD native"

---

#### Persona 2 : **Dirigeant / DAF PME** (prioritaire Starter + SaaS)

**Profil** :
- Entreprise : 20-250 employés
- Secteur : Professions libérales (avocats, notaires), services B2B
- Pas de DSI interne
- Enjeux : Productivité, réduction coûts, croissance

**Besoins** :
- Solution clé en main (pas de gestion technique)
- ROI rapide et mesurable
- Prix prévisible
- Support réactif

**Freins** :
- "On n'a pas les compétences pour gérer ça"
- "C'est trop cher pour nous"
- "Nos données sont sensibles (clients, dossiers)"

**Messages clés** :
- "Service managé : vous n'avez rien à gérer techniquement"
- "Starter à partir de 5k€, ROI en 3-6 mois"
- "Données sécurisées, conformité RGPD garantie"

---

#### Persona 3 : **Responsable Innovation / CDO** (early adopters)

**Profil** :
- Grands groupes ou ETI innovantes
- Mandate : Tester nouvelles technologies, identifier use cases IA
- Budget : Labs innovation, R&D

**Besoins** :
- Veille techno
- POC rapides
- Évangélisation interne

**Opportunité** :
- Porte d'entrée pour projets plus larges
- Référence & crédibilité

---

### 4. Argumentaires Clés par Objection

#### Objection 1 : "On a déjà Microsoft Copilot"

**Réponse** :
"Copilot est excellent pour la productivité individuelle (rédaction emails, synthèses documents). Les agents Azure AI Foundry adressent des workflows métier complexes : intégration multi-systèmes, orchestration, gouvernance. Ce sont des briques complémentaires. D'ailleurs, nous utilisons souvent Copilot Studio pour l'interface utilisateur, et Foundry pour la logique métier."

---

#### Objection 2 : "C'est trop risqué (hallucinations, sécurité)"

**Réponse** :
"C'est exactement pourquoi le LLMOps est essentiel. Nous mettons en place :
- Évaluations automatiques pour détecter les hallucinations
- Rollback instantané si régression
- Traçabilité complète des décisions agents
- Architecture zero-trust avec Managed Identity
- Conformité RGPD & AI Act natives

Nous transformons l'IA de 'boîte noire' en système gouverné et auditable."

---

#### Objection 3 : "On veut développer en interne"

**Réponse** :
"Excellente démarche long terme. Nous pouvons vous accompagner de deux façons :
1. **Formation & transfert de compétences** : nous livrons les premiers agents et formons vos équipes
2. **Infogérance LLMOps** : vos équipes développent les prompts/agents, nous opérons la plateforme (CI/CD, monitoring, sécurité)

Cela vous permet de monter en compétence progressivement sans bloquer vos projets."

---

#### Objection 4 : "C'est trop cher"

**Réponse** :
"Comparons avec l'alternative :
- Recruter un profil DevOps + IA : 60-80k€/an + 6 mois de recrutement
- Outils LLMOps : 1-2k€/mois
- Temps d'apprentissage : 6-12 mois

Notre offre Starter (5-10k€) vous donne un agent en production en 3 semaines avec notre expertise immédiate. ROI typique : 3-6 mois."

---

#### Objection 5 : "On préfère attendre que la techno soit plus mature"

**Réponse** :
"Azure AI Foundry est déjà en production chez des milliers d'entreprises. La question n'est plus 'est-ce mature ?' mais 'qui va prendre l'avance ?'. Vos concurrents expérimentent déjà. Nos clients constatent des gains de productivité de 30-50% sur les processus automatisés.

Le risque aujourd'hui n'est plus technologique, il est concurrentiel."

---

## Projections Financières

### Hypothèses Structurantes

#### Hypothèses Marché
- Marché SOM (Serviceable Obtainable Market) : 25 M€
- Croissance marché agents IA : +50%/an (2025-2027)
- Taux pénétration objectif 18 mois : 2-3% du SOM

#### Hypothèses Opérationnelles
- **Fondateur solo** (18 premiers mois)
- **Taux utilisation** : 60% An 1, 70% An 2, 75% An 3
- **TJM effectif** : 800€ (moyenne pondérée)
- **Jours facturables/an** : 220 jours (hors congés, prospection, admin)
- **Première embauche** : M18-24 (profil DevOps/IA junior)

#### Hypothèses Commerciales
- **Cycle de vente moyen** :
  - Audit/Starter : 3-6 semaines
  - Scale : 6-10 semaines
  - Enterprise : 3-6 mois
- **Taux conversion** :
  - Audit → Starter : 60%
  - Starter → Scale : 40%
  - Scale → Enterprise : 20%
- **Taux rétention infogérance** : 85% (An 2-3)

---

### Année 1 : Validation & Cash (M1-M12)

#### Objectifs
- Valider marché & offres
- Générer cash immédiat
- Construire IP & références
- MRR (revenus récurrents mensuels) : 5-10k€ en fin d'année

#### Mix d'Activités

| Type d'offre | Volume | Prix moyen | CA |
|--------------|--------|------------|-----|
| Audits IA | 8 | 7k€ | 56k€ |
| Starter | 6 | 8k€ | 48k€ |
| Scale | 2 | 35k€ | 70k€ |
| Formations | 4 | 3k€ | 12k€ |
| **Total One-shot** | | | **186k€** |
| | | | |
| Infogérance (moyenne mensuelle) | 4 contrats | 1,5k€/mois × 6 mois moyen | 36k€ |
| **Total Récurrent** | | | **36k€** |
| | | | |
| **CA TOTAL ANNÉE 1** | | | **222k€** |

#### Détail Trimestriel

**T1 (M1-M3) : Démarrage**
- CA : 20k€ (audits + formations)
- Focus : Prospection, premiers clients
- MRR fin T1 : 1k€

**T2 (M4-M6) : Traction**
- CA : 45k€ (Starter dominant)
- Focus : Livraison projets, construction IP
- MRR fin T2 : 3k€

**T3 (M7-M9) : Montée en gamme**
- CA : 75k€ (premiers Scale)
- Focus : Industrialisation, LLMOps
- MRR fin T3 : 6k€

**T4 (M10-M12) : Consolidation**
- CA : 82k€ (Scale + infogérance)
- Focus : Upsell, récurrence
- MRR fin T4 : 10k€

#### Structure de Coûts Année 1

| Poste | Montant |
|-------|---------|
| **Coûts directs projets** | |
| Infrastructure Azure (dev/démo) | 6k€ |
| Outils (GitHub, Azure DevOps, monitoring) | 2k€ |
| Sous-traitance ponctuelle (design, juridique) | 5k€ |
| **Total coûts directs** | **13k€** |
| | |
| **Charges fixes** | |
| Statut juridique (SASU/EURL) | 3k€ |
| Comptabilité | 2k€ |
| Assurances (RC Pro) | 1k€ |
| Marketing & comm (LinkedIn Ads, site web) | 5k€ |
| Déplacements & événements | 4k€ |
| Formation continue | 2k€ |
| Bureautique & logiciels | 2k€ |
| **Total charges fixes** | **19k€** |
| | |
| **COÛTS TOTAUX** | **32k€** |
| | |
| **RÉSULTAT AVANT RÉMUNÉRATION** | **190k€** |
| Rémunération fondateur (60k€ net → ~90k€ brut+charges) | 90k€ |
| **RÉSULTAT NET** | **100k€** |

#### Métriques Clés Année 1

- **Marge brute** : 94% ((222k - 13k) / 222k)
- **Taux récurrence** : 16% (36k / 222k)
- **Nombre clients** : 12-15
- **ARPU** : 15-18k€
- **Taux utilisation** : 60%

---

### Année 2 : Industrialisation & Récurrence (M13-M24)

#### Objectifs
- Scaler les projets (Scale/Enterprise dominant)
- Augmenter MRR significativement
- Construire framework LLMOps vendable
- Préparer SaaS (pilotes)
- MRR fin année : 20-25k€

#### Mix d'Activités

| Type d'offre | Volume | Prix moyen | CA |
|--------------|--------|------------|-----|
| Audits IA | 6 | 8k€ | 48k€ |
| Starter | 4 | 10k€ | 40k€ |
| Scale | 8 | 40k€ | 320k€ |
| Enterprise | 2 | 90k€ | 180k€ |
| **Total One-shot** | | | **588k€** |
| | | | |
| Infogérance moyenne | 10 contrats | 3k€/mois × 12 mois | 360k€ |
| **Total Récurrent** | | | **360k€** |
| | | | |
| **CA TOTAL ANNÉE 2** | | | **948k€** |

#### Détail Trimestriel

**T1 (M13-M15)**
- CA : 180k€
- Focus : Montée en gamme clients Année 1
- MRR fin T1 : 15k€

**T2 (M16-M18)**
- CA : 220k€
- Focus : Premiers Enterprise, framework LLMOps
- MRR fin T2 : 20k€

**T3 (M19-M21)**
- CA : 250k€
- Focus : Pipeline Scale robuste, pilotes SaaS
- MRR fin T3 : 23k€

**T4 (M22-M24)**
- CA : 298k€
- Focus : Préparation recrutement, lancement SaaS
- MRR fin T4 : 28k€

#### Structure de Coûts Année 2

| Poste | Montant |
|-------|---------|
| **Coûts directs projets** | |
| Infrastructure Azure | 18k€ |
| Outils & plateformes | 8k€ |
| Sous-traitance (dev, design) | 40k€ |
| **Total coûts directs** | **66k€** |
| | |
| **Charges fixes** | |
| Structure juridique & compta | 6k€ |
| Assurances | 2k€ |
| Marketing & comm | 25k€ |
| Déplacements & événements | 8k€ |
| Formation | 4k€ |
| Bureautique & logiciels | 4k€ |
| **Total charges fixes** | **49k€** |
| | |
| **Recrutement (M18-24)** | |
| Profil DevOps/IA junior (6 mois) | 25k€ |
| | |
| **COÛTS TOTAUX** | **140k€** |
| | |
| **RÉSULTAT AVANT RÉMUNÉRATION** | **808k€** |
| Rémunération fondateur | 120k€ |
| **RÉSULTAT NET** | **688k€** |

#### Métriques Clés Année 2

- **Marge brute** : 93%
- **Taux récurrence** : 38%
- **Nombre clients** : 25-30
- **ARPU** : 32-38k€
- **Taux utilisation** : 70%
- **LTV moyen** : 80-120k€

---

### Année 3 : Produits & Scalabilité (M25-M36)

#### Objectifs
- Lancer 1-2 produits SaaS
- MRR : 40-50k€
- Équipe : 2-3 personnes
- Réduire dépendance temps vendable

#### Mix d'Activités (Projection)

| Type d'offre | Volume | Prix moyen | CA |
|--------------|--------|------------|-----|
| Starter | 3 | 12k€ | 36k€ |
| Scale | 10 | 45k€ | 450k€ |
| Enterprise | 4 | 100k€ | 400k€ |
| **Total One-shot** | | | **886k€** |
| | | | |
| Infogérance | 15 contrats | 4k€/mois × 12 | 720k€ |
| SaaS (10-20 clients) | | 300€/mois × 12 × 15 | 54k€ |
| **Total Récurrent** | | | **774k€** |
| | | | |
| **CA TOTAL ANNÉE 3** | | | **1 660k€** |

#### Structure de Coûts Année 3 (Projection)

| Poste | Montant |
|-------|---------|
| Coûts directs projets | 120k€ |
| Charges fixes | 80k€ |
| Équipe (2 personnes) | 140k€ |
| R&D SaaS | 60k€ |
| **COÛTS TOTAUX** | **400k€** |
| | |
| **RÉSULTAT AVANT RÉMUNÉRATION** | **1 260k€** |
| Rémunération fondateur | 150k€ |
| **RÉSULTAT NET** | **1 110k€** |

#### Métriques Clés Année 3

- **Marge brute** : 93%
- **Taux récurrence** : 47%
- **MRR** : 65k€
- **ARR** : 780k€
- **Nombre clients** : 35-45
- **Taux utilisation fondateur** : 50% (focus management/produit)

---

### Synthèse Financière 3 Ans

| Métrique | Année 1 | Année 2 | Année 3 |
|----------|---------|---------|---------|
| **CA Total** | 222k€ | 948k€ | 1 660k€ |
| CA One-shot | 186k€ (84%) | 588k€ (62%) | 886k€ (53%) |
| CA Récurrent | 36k€ (16%) | 360k€ (38%) | 774k€ (47%) |
| MRR fin année | 10k€ | 28k€ | 65k€ |
| Marge brute | 94% | 93% | 93% |
| Résultat net | 100k€ | 688k€ | 1 110k€ |
| Nombre clients | 12-15 | 25-30 | 35-45 |

---

### Besoins de Financement

#### Scénario Bootstrap (recommandé)

**Apport initial** : 10-15k€

**Allocation** :
- Statut juridique : 2k€
- Infra technique (laptop, Azure, outils) : 3k€
- Site web & branding : 2k€
- Trésorerie tampon : 3-5k€

**Justification** :
- Modèle économique génère cash dès M1-M2
- Pas de CAPEX important
- Coûts fixes faibles
- TJM élevé (800€+)

#### Scénario Levée (si accélération)

**Montant** : 150-250k€ (seed)

**Utilisation** :
- Recrutements (2-3 profils) : 100k€
- R&D SaaS : 50k€
- Marketing & sales : 40k€
- Trésorerie : 60k€

**Timing** : M12-18 (après validation marché)

**Dilution** : 15-20%

---

### Sensibilité & Scénarios

#### Scénario Pessimiste (-30%)

| Année | CA | Résultat net |
|-------|-----|--------------|
| 1 | 155k€ | 60k€ |
| 2 | 664k€ | 450k€ |
| 3 | 1 162k€ | 750k€ |

**Risques** :
- Allongement cycles de vente
- Difficulté montée en gamme (Scale/Enterprise)
- Taux conversion plus faible

**Mitigation** :
- Focus Starter (volume)
- Partenariats apporteurs d'affaires
- Réduction charges fixes

---

#### Scénario Optimiste (+30%)

| Année | CA | Résultat net |
|-------|-----|--------------|
| 1 | 289k€ | 150k€ |
| 2 | 1 232k€ | 950k€ |
| 3 | 2 158k€ | 1 500k€ |

**Leviers** :
- Accélération inbound (SEO, notoriété)
- Taux conversion supérieur (références clients)
- Upsell rapide (Starter → Scale)
- Lancement SaaS réussi (M18)

---

## Évaluation des Risques

### 1. Risques Marché

#### Risque 1.1 : **Saturation rapide du marché agents IA**

**Description** : Multiplication d'acteurs (agences, freelances, intégrateurs) sur le segment agents IA, érosion des marges.

**Probabilité** : Moyenne-Élevée
**Impact** : Élevé

**Mitigation** :
- ✅ Différenciation forte via LLMOps (barrière à l'entrée technique)
- ✅ Construire IP propriétaire (frameworks, templates)
- ✅ Focus vertical (ex: juridique, IT ops) plutôt que généraliste
- ✅ Basculer vers modèle SaaS (moins exposé à concurrence services)

---

#### Risque 1.2 : **Microsoft Copilot Studio "suffisant" pour la majorité des cas**

**Description** : Microsoft améliore significativement Copilot Studio (LLMOps intégré, orchestration), réduisant le besoin d'Azure AI Foundry.

**Probabilité** : Moyenne
**Impact** : Élevé

**Mitigation** :
- ✅ Positionnement complémentaire (pas concurrent)
- ✅ Focus cas complexes (multi-systèmes, orchestration, gouvernance avancée)
- ✅ Expertise architecture hybride Copilot/Foundry (valeur ajoutée indépendante)
- ✅ LLMOps = valeur ajoutée quelle que soit la plateforme

---

#### Risque 1.3 : **Adoption plus lente que prévu (maturité marché)**

**Description** : Les entreprises restent prudentes, préfèrent attendre que la technologie soit "plus mature".

**Probabilité** : Moyenne
**Impact** : Moyen

**Mitigation** :
- ✅ Offre Starter bas prix (barrière entrée faible)
- ✅ Focus secteurs early adopters (tech, conseil, juridique)
- ✅ Études de cas & ROI démontrés
- ✅ Positionnement "production ready" (vs expérimental)

---

### 2. Risques Concurrentiels

#### Risque 2.1 : **Guerre des prix (commoditisation)**

**Description** : Pression à la baisse sur TJM et prix projets due à multiplication d'offres low-cost.

**Probabilité** : Moyenne
**Impact** : Moyen

**Mitigation** :
- ✅ Différenciation qualitative (LLMOps, références, expertise)
- ✅ Montée en gamme rapide (Scale/Enterprise)
- ✅ Revenus récurrents (moins sensibles au prix one-shot)
- ✅ Refuser compétition sur prix (focus valeur)

---

#### Risque 2.2 : **Intégrateurs développent expertise agents IA**

**Description** : Capgemini, Accenture, Sopra Steria investissent massivement dans agents IA et LLMOps.

**Probabilité** : Élevée
**Impact** : Moyen

**Mitigation** :
- ✅ Agilité & rapidité (vs bureaucratie grands groupes)
- ✅ Focus PME/ETI (moins intéressant pour géants)
- ✅ Expertise personnelle (difficile à répliquer rapidement)
- ✅ Partenariats possibles (sous-traitance leur expertise agents)

---

#### Risque 2.3 : **Startups LLMOps levant des fonds importants**

**Description** : Startups spécialisées LLMOps (ex: Langfuse, LangSmith) deviennent standards du marché.

**Probabilité** : Moyenne
**Impact** : Faible-Moyen

**Mitigation** :
- ✅ Ces outils sont complémentaires (nous pouvons les intégrer)
- ✅ Notre valeur = Conseil + Intégration + Projets (pas juste outil)
- ✅ Focus Azure (intégration native vs multi-cloud complexe)

---

### 3. Risques Techniques

#### Risque 3.1 : **Évolution rapide Azure AI Foundry (breaking changes)**

**Description** : Microsoft fait évoluer la plateforme avec changements non rétrocompatibles, nécessitant refonte de nos solutions.

**Probabilité** : Faible-Moyenne
**Impact** : Moyen

**Mitigation** :
- ✅ Abstraction dans notre code (découplage plateforme)
- ✅ Veille continue (preview features, roadmap Microsoft)
- ✅ Tests automatisés (détection régressions)
- ✅ Relation Microsoft (early access, support)

---

#### Risque 3.2 : **Coûts Azure imprévisibles pour clients**

**Description** : Explosion des coûts Azure (GPT-4, Compute) chez clients, insatisfaction, churn.

**Probabilité** : Moyenne
**Impact** : Élevé

**Mitigation** :
- ✅ Observabilité coûts temps réel (alertes)
- ✅ Optimisation continue (caching, modèles moins chers pour tâches simples)
- ✅ Contractualisation transparente (coûts Azure séparés ou forfait avec marge)
- ✅ Gestion multi-modèles (fallback vers modèles moins chers)

---

#### Risque 3.3 : **Incidents de sécurité / fuite de données**

**Description** : Faille de sécurité chez un client, données exposées, responsabilité Doveaia.

**Probabilité** : Faible
**Impact** : Critique

**Mitigation** :
- ✅ Architecture zero-trust (Managed Identity, RBAC strict)
- ✅ Audits sécurité réguliers (pentests)
- ✅ Assurance cyber-risques (RC Pro renforcée)
- ✅ Clauses contractuelles claires (responsabilités)
- ✅ Conformité RGPD & AI Act natives
- ✅ Données sensibles dans tenant client (pas chez nous)

---

### 4. Risques Opérationnels

#### Risque 4.1 : **Dépendance fondateur (solo founder)**

**Description** : Maladie, accident, burnout du fondateur → arrêt activité.

**Probabilité** : Faible
**Impact** : Critique

**Mitigation** :
- ✅ Documentation exhaustive (procédures, code, architectures)
- ✅ Automatisation maximale (CI/CD, monitoring)
- ✅ Réseau sous-traitants fiables (backup)
- ✅ Assurance prévoyance
- ✅ Recrutement dès M18-24 (réduction dépendance)

---

#### Risque 4.2 : **Difficultés recrutement (profils rares)**

**Description** : Difficulté à trouver profils DevOps + IA compétents pour croissance.

**Probabilité** : Moyenne-Élevée
**Impact** : Moyen

**Mitigation** :
- ✅ Formation interne (recruter DevOps, former à l'IA)
- ✅ Partenariats écoles (Epitech, EPITA, formations IA)
- ✅ Remote (élargir bassin candidats)
- ✅ Proposition valeur employeur (projets innovants, stack moderne, autonomie)

---

#### Risque 4.3 : **Dérive scope projets (rentabilité)**

**Description** : Projets dépassent estimations (temps, complexité), érosion marges.

**Probabilité** : Moyenne
**Impact** : Moyen

**Mitigation** :
- ✅ Cadrage rigoureux (audit préalable obligatoire pour Scale+)
- ✅ Forfaits avec scope fermé (change requests facturés)
- ✅ Templates & réutilisation (réduction temps dev)
- ✅ Facturation au temps si incertitude (régie)

---

### 5. Risques Réglementaires

#### Risque 5.1 : **Durcissement AI Act (contraintes accrues)**

**Description** : Réglementation UE devient plus stricte que prévu, coûts conformité élevés.

**Probabilité** : Moyenne
**Impact** : Moyen

**Mitigation** :
- ✅ Conformité by design dès maintenant (traçabilité, documentation)
- ✅ Opportunité commerciale (concurrents non conformes éliminés)
- ✅ Facturer conformité comme valeur ajoutée

---

#### Risque 5.2 : **Restriction utilisation données pour IA (RGPD)**

**Description** : CNIL ou autorités UE restreignent certains usages IA sur données personnelles.

**Probabilité** : Faible-Moyenne
**Impact** : Moyen

**Mitigation** :
- ✅ Respect strict RGPD dès conception
- ✅ Focus cas d'usage B2B non-sensibles (documents internes, IT ops)
- ✅ Consentement explicite si données personnelles

---

### 6. Risques Financiers

#### Risque 6.1 : **Trésorerie tendue (retards paiement clients)**

**Description** : Délais paiement longs (60-90 jours), difficulté à couvrir charges.

**Probabilité** : Moyenne
**Impact** : Moyen

**Mitigation** :
- ✅ Acomptes systématiques (30-50% au lancement projet)
- ✅ Paiements échelonnés (jalons)
- ✅ Factoring si nécessaire
- ✅ Matelas trésorerie (3 mois charges fixes)

---

#### Risque 6.2 : **Sous-estimation coûts Azure (modèle managé)**

**Description** : Si modèle forfait all-inclusive, coûts Azure client explosent, on perd de l'argent.

**Probabilité** : Moyenne (si forfait)
**Impact** : Moyen

**Mitigation** :
- ✅ Estimer coûts avec marge confortable (2x estimation)
- ✅ Alertes coûts Azure temps réel
- ✅ Clause contractuelle : si dépassement X%, renégociation
- ✅ Préférer refacturation transparente (Phase 1-2)

---

### Matrice de Risques (Probabilité × Impact)

```
Impact ↑
CRITIQUE |                    | Sécurité/Fuite   | Dépendance
         |                    | (3.3)            | Fondateur (4.1)
---------|--------------------|---------------------------------
ÉLEVÉ    | Copilot suffisant  | Saturation       | Coûts Azure
         | (1.2)              | marché (1.1)     | (3.2)
---------|--------------------|---------------------------------
MOYEN    | Guerre prix (2.1)  | Évolution Foundry| Recrutement
         | AI Act (5.1)       | (3.1)            | (4.2)
---------|--------------------|---------------------------------
FAIBLE   |                    | Startups LLMOps  |
         |                    | (2.3)            |
---------|--------------------|---------------------------------
         FAIBLE          MOYENNE          ÉLEVÉE → Probabilité
```

**Risques critiques nécessitant vigilance maximale** :
1. Sécurité & fuite de données (3.3)
2. Dépendance fondateur solo (4.1)
3. Microsoft Copilot devient suffisant (1.2)

---

## Jalons Clés

### Phase 0 : Positionnement & Socle (Mois 0)

**Durée** : 2-3 semaines

| Jalon | Date cible | Critères de succès |
|-------|------------|-------------------|
| **J1 : Statut juridique créé** | S1 | SASU/EURL immatriculée, SIRET obtenu |
| **J2 : Offres packagées définies** | S2 | Document Starter/Scale/Enterprise finalisé |
| **J3 : Pitch deck commercial** | S2 | Présentation 10-15 slides prête |
| **J4 : MVP technique** | S3 | Agent template Foundry + Copilot Studio fonctionnel |
| **J5 : Site web vitrine** | S3 | Landing page offres + contact en ligne |
| **J6 : Premiers prospects identifiés** | S3 | Liste 10-15 prospects qualifiés |

**Validation Phase 0** : Capacité à présenter l'offre clairement sans mention "chatbot".

---

### Phase 1 : Conseil & Cadrage IA (Mois 1-3)

**Objectif** : Cash immédiat + validation marché

| Jalon | Date cible | Critères de succès |
|-------|------------|-------------------|
| **J7 : Premier audit IA signé** | M1 | Contrat signé 5-10k€ |
| **J8 : 3 audits livrés** | M2 | 3 rapports audit remis, feedback positif |
| **J9 : Premier agent Starter livré** | M2 | Agent en production chez client |
| **J10 : 5 audits + 2 Starter cumulés** | M3 | CA cumulé : 30-50k€ |
| **J11 : Pipeline Scale constitué** | M3 | 2-3 opportunités Scale qualifiées |
| **J12 : Contenu LinkedIn régulier** | M3 | 3-5 posts/semaine depuis M1 |

**Validation Phase 1** : Clients demandent spontanément "et après l'audit ?".

---

### Phase 2 : Projets Agents & RAG (Mois 3-9)

**Objectif** : Crédibilité technique + construction IP

| Jalon | Date cible | Critères de succès |
|-------|------------|-------------------|
| **J13 : Premier projet Scale signé** | M4 | Contrat 20-50k€ |
| **J14 : Projet avocat (pilote) lancé** | M4 | Audit + Starter avocat démarré |
| **J15 : Framework agents v1.0** | M5 | Templates réutilisables documentés |
| **J16 : 3 agents Starter livrés** | M6 | Références clients exploitables |
| **J17 : Premier Scale livré** | M7 | Projet Scale en production + étude de cas |
| **J18 : Projet avocat Scale finalisé** | M8 | Agent juridique industrialisé + infogérance |
| **J19 : Pipeline RAG réutilisable** | M9 | Ingestion multi-sources standardisée |
| **J20 : MRR = 5-8k€** | M9 | 3-5 contrats infogérance actifs |

**Validation Phase 2** : Capacité à livrer Starter en 2-3 semaines sans stress.

---

### Phase 3 : Industrialisation & LLMOps (Mois 6-12)

**Objectif** : Différenciation LLMOps + montée en gamme

| Jalon | Date cible | Critères de succès |
|-------|------------|-------------------|
| **J21 : Framework LLMOps v1.0** | M8 | CI/CD + versioning + evals opérationnels |
| **J22 : Première offre Scale + LLMOps vendue** | M9 | Contrat intégrant LLMOps explicitement |
| **J23 : Dashboard observabilité** | M10 | Coûts + qualité + traces temps réel |
| **J24 : Premier projet Enterprise signé** | M10 | Contrat 60-150k€ |
| **J25 : Contenu thought leadership** | M11 | 2 articles blog techniques publiés |
| **J26 : Talk/conférence** | M12 | Présentation meetup/conférence (retour expérience) |
| **J27 : MRR = 12-15k€** | M12 | 8-10 contrats infogérance |

**Validation Phase 3** : Clients acceptent de payer forfait LLMOps mensuel (2-5k€/mois).

---

### Phase 4 : Produits & SaaS Agents (Mois 9-18)

**Objectif** : Scalabilité via SaaS

| Jalon | Date cible | Critères de succès |
|-------|------------|-------------------|
| **J28 : Choix produit SaaS** | M11 | Décision cas d'usage (ex: Agent Juridique Pro) |
| **J29 : MVP SaaS développé** | M14 | Produit fonctionnel, 1 client pilote |
| **J30 : 3 clients pilotes SaaS** | M16 | 3 clients payants en utilisation réelle |
| **J31 : Site web produit SaaS** | M17 | Landing page produit + inscription en ligne |
| **J32 : 10 clients SaaS actifs** | M18 | ARR SaaS : 30-50k€ |
| **J33 : Premier recrutement** | M18 | Profil DevOps/IA junior embauché |
| **J34 : MRR total = 25-30k€** | M18 | Infogérance + SaaS |

**Validation Phase 4** : 3 clients utilisent le SaaS pendant 3 mois consécutifs avec usage régulier.

---

### Jalons Financiers

| Jalon | Date cible | Montant |
|-------|------------|---------|
| **Premier CA 10k€** | M1-M2 | 10k€ |
| **CA cumulé 50k€** | M3-M4 | 50k€ |
| **CA cumulé 100k€** | M6-M7 | 100k€ |
| **CA cumulé 200k€** | M11-M12 | 200k€ (Année 1) |
| **MRR 10k€** | M12 | 10k€/mois récurrent |
| **CA cumulé 500k€** | M16-M18 | 500k€ |
| **MRR 25k€** | M18 | 25k€/mois récurrent |
| **CA Année 2** | M24 | 800k-1M€ |

---

### Jalons Commerciaux

| Jalon | Date cible | Critères |
|-------|------------|----------|
| **10 clients actifs** | M6 | 10 clients payants (tout type) |
| **Première référence Scale** | M7 | Étude de cas Scale publiable |
| **15 clients actifs** | M9 | Dont 3-5 en infogérance |
| **Première référence Enterprise** | M12 | Logo grand compte |
| **25 clients actifs** | M18 | Mix Starter/Scale/Enterprise/SaaS |
| **Taux récurrence 30%** | M18 | 30% CA en revenus récurrents |

---

### Jalons Techniques

| Jalon | Date cible | Livrable |
|-------|------------|----------|
| **Agent template v1.0** | M1 | Foundry + Copilot Studio basique |
| **Pipeline RAG v1.0** | M3 | Ingestion SharePoint + PDF |
| **Framework prompts v1.0** | M5 | Versioning Git + templates |
| **CI/CD agents v1.0** | M8 | Pipeline déploiement automatisé |
| **Dashboard observabilité v1.0** | M10 | Coûts + qualité + traces |
| **Framework LLMOps complet** | M12 | CI/CD + versioning + evals + monitoring |
| **MVP SaaS** | M14 | Produit agent autonome |

---

### Jalons Marketing & Notoriété

| Jalon | Date cible | Critères |
|-------|------------|----------|
| **1000 connexions LinkedIn** | M6 | 1000 connexions pertinentes (DSI, CTO, innovation) |
| **Inbound qualifié régulier** | M9 | 2-3 demandes entrantes/mois |
| **Article blog technique publié** | M10 | 1er article technique (Azure AI Foundry, LLMOps) |
| **Talk conférence/meetup** | M12 | Présentation publique retour expérience |
| **5000 impressions LinkedIn/mois** | M12 | Visibilité posts LinkedIn |
| **SEO : 500 visiteurs/mois** | M18 | Trafic organique site web |

---

### Dashboard de Suivi (KPIs à suivre mensuellement)

#### KPIs Revenus
- CA mensuel (one-shot + récurrent)
- MRR (Monthly Recurring Revenue)
- Répartition CA (Audit / Starter / Scale / Enterprise / Infogérance / SaaS)

#### KPIs Commerciaux
- Nombre prospects qualifiés
- Taux conversion (audit → projet)
- Nombre clients actifs
- ARPU (Average Revenue Per User)
- Pipeline valeur (opportunités en cours)

#### KPIs Opérationnels
- Taux utilisation (temps facturable / temps total)
- Nombre jours facturés
- Délai moyen livraison (par type offre)

#### KPIs Produit/Technique
- Nombre agents en production
- Temps moyen déploiement agent
- Incidents production (nombre, durée)

#### KPIs Marketing
- Connexions LinkedIn
- Impressions posts
- Demandes entrantes (inbound)
- Trafic site web

---

## Conclusion

### Synthèse Stratégique

Doveaia se positionne sur un **marché en forte croissance** (agents IA d'entreprise) avec une **différenciation technique claire** (LLMOps & industrialisation) sur une **plateforme dominante** (Azure AI Foundry).

Notre avantage concurrentiel repose sur :
1. **Expertise technique rare** : DevOps + Azure + IA Agents
2. **Positionnement intelligent** : Complémentaire à Microsoft Copilot (pas concurrent)
3. **Modèle économique évolutif** : Consulting → Infogérance → SaaS

### Facteurs Clés de Succès

**Court terme (0-6 mois)** :
- ✅ Exécution rapide premiers projets (références)
- ✅ Construction IP réutilisable (templates, frameworks)
- ✅ Positionnement clair "Architecte d'Agents IA en Production"

**Moyen terme (6-18 mois)** :
- ✅ Montée en gamme (Scale/Enterprise dominant)
- ✅ Framework LLMOps comme différenciateur
- ✅ Revenus récurrents (30-40% du CA)

**Long terme (18+ mois)** :
- ✅ Produits SaaS sectoriels
- ✅ Équipe structurée (2-3 personnes)
- ✅ Notoriété établie (thought leadership)

### Risques Principaux à Surveiller

1. **Sécurité** : Incident de sécurité serait catastrophique → architecture zero-trust + audits réguliers
2. **Concurrence** : Saturation marché → différenciation LLMOps + vertical focus
3. **Dépendance Microsoft** : Évolution Copilot Studio → positionnement complémentaire + abstraction technique

### Prochaines Étapes (30 premiers jours)

**Semaine 1-2** :
- [ ] Créer statut juridique (SASU/EURL)
- [ ] Finaliser offres packagées (documents commerciaux)
- [ ] Développer agent template v1.0

**Semaine 3-4** :
- [ ] Lancer site web vitrine
- [ ] Identifier 10-15 prospects (outreach LinkedIn)
- [ ] Planifier projet pilote avocat (audit)

**Mois 2** :
- [ ] Signer premiers audits (objectif : 2-3)
- [ ] Livrer premier agent Starter
- [ ] Publier contenu LinkedIn régulier

### Vision 3 Ans

**Année 1** : Doveaia valide son marché et génère 200k€+ de CA avec un fondateur solo.

**Année 2** : Doveaia industrialise avec 800k-1M€ de CA, 30-40% de revenus récurrents, et recrute.

**Année 3** : Doveaia lance ses produits SaaS et franchit 1,5-2M€ de CA avec une équipe de 3-4 personnes.

**2028** : Doveaia est la référence française des agents IA industrialisés, avec un portefeuille de produits SaaS sectoriels et une présence européenne.

---

**Fondateur** : [Nom]
**Date création** : [Date]
**Contact** : [Email / LinkedIn]

---

*Ce plan d'affaires est un document évolutif. Il sera mis à jour trimestriellement en fonction des résultats obtenus et des évolutions du marché.*
