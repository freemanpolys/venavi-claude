# BizCraft - Technical Specification

**Version**: 1.0
**Date**: 2026-02-28
**Status**: Draft
**Author**: Jean Gaglo

---

## Executive Summary

### Overview

BizCraft est une plateforme SaaS modulaire destinée aux fondateurs et créateurs d'entreprise francophones. Elle guide l'utilisateur étape par étape à travers des méthodologies éprouvées (Alex Hormozi pour les offres, E-Myth de Michael Gerber pour la structuration d'entreprise) afin de produire un contenu structuré exploitable pour un business plan.

### Key Metrics (Target)

- **Time to MVP**: 4 semaines (18-21 jours ouvrés)
- **Target Market**: Solopreneurs et fondateurs francophones (France, Belgique, Suisse, Canada, Afrique francophone)
- **Revenue Model**: Freemium + abonnement + offre lifetime
- **Target MRR (Year 1)**: 3 000 EUR
- **Azure Monthly Cost (MVP)**: ~31 EUR

### Tech Stack

- **Backend**: Go (Gin, pgx, JWT)
- **Frontend**: Angular 17+ (Material, RxJS)
- **Database**: Azure Database for PostgreSQL Flexible Server
- **Hosting**: Azure App Service (Go API) + Azure Static Web Apps (Angular SPA)
- **Storage**: Azure Blob Storage (exports PDF)
- **Monitoring**: Azure Application Insights
- **CI/CD**: GitHub Actions → Azure

---

## Problem Statement

### The Problem

Les fondateurs qui lisent "$100M Offers" d'Alex Hormozi ou "The E-Myth" de Michael Gerber sont inspirés mais bloqués à l'exécution. Ils n'arrivent pas à **opérationnaliser** ces méthodologies :

- Les concepts restent théoriques — pas de processus guidé pour les appliquer
- Les templates Notion/Google Docs sont statiques — pas de validation, pas de progression
- Il n'y a pas d'outil qui connecte la création d'offre au business plan final
- Les outils existants (Strategyzer, LivePlan) sont génériques, en anglais, et ne suivent pas ces frameworks spécifiques

### Market Context

- **Target Audience**: Solopreneurs, fondateurs early-stage, freelances en transition, créateurs d'entreprise (France + francophonie)
- **Market Size**:
  - TAM: 2M+ d'auto-entrepreneurs en France + francophonie
  - SAM: ~200 000 créateurs d'entreprise/an en France
  - SOM: 1 000-5 000 utilisateurs actifs (niche méthodologie Hormozi/E-Myth)
- **Current Solutions**: Templates Notion (5-15 EUR one-time), Strategyzer (~25 USD/mo, anglais), LivePlan (~20 USD/mo, anglais), coaching (500-5000 EUR)
- **Market Gap**: Aucun SaaS guidé basé sur Hormozi en français. Aucun outil qui connecte la création d'offre au business plan.

---

## Solution

### Value Proposition

BizCraft transforme les méthodologies de Hormozi et Gerber en un **processus interactif guidé** qui produit un livrable concret : le contenu structuré d'un business plan.

### Core Differentiation

1. **Framework-specific** — Guide pas-à-pas à travers la méthode Hormozi (pas un outil générique)
2. **French-first** — Conçu pour les entrepreneurs francophones, dans leur langue
3. **Validation progressive** — Chaque étape doit être validée avant de passer à la suivante
4. **Livrable concret** — Export PDF exploitable pour business plan, dossier BPI, pitch investors
5. **Modulaire** — Le module Offre est une brique du futur module "Structurer son Entreprise" (E-Myth)

### User Experience Flow

1. L'utilisateur crée un "projet" (= une idée business)
2. Il active le module "Créer son Offre Irrésistible"
3. Il progresse à travers 7 étapes guidées avec aide contextuelle
4. À chaque étape : saisie → auto-save → validation explicite → étape suivante
5. En fin de parcours : export PDF avec tout le contenu structuré

---

## User Personas

### Primary Persona: Le Fondateur Solo

- **Role**: Solopreneur, freelance, créateur d'entreprise
- **Company Size**: 0-1 employé, pré-revenue ou early revenue
- **Pain Points**:
  - A lu Hormozi mais ne sait pas comment structurer son offre concrètement
  - Perd du temps à bricoler des templates Google Docs/Notion
  - N'a pas de coach et ne peut pas se permettre un accompagnement à 3000 EUR
- **Goals**:
  - Créer une offre irrésistible pour son marché
  - Avoir un document structuré pour pitcher ou demander des aides (BPI, ACRE)
- **Tech Savviness**: Moyen — utilise Notion, Google Workspace, réseaux sociaux

### Secondary Persona: Le Coach / Consultant

- **Role**: Business coach, consultant en stratégie
- **Company Size**: 1-5 personnes
- **Pain Points**:
  - Cherche un outil structuré à utiliser avec ses clients
  - Veut un framework reproductible
- **Goals**:
  - Proposer un parcours guidé à ses coachés
  - Gagner du temps sur la structuration des séances
- **Tech Savviness**: Moyen à élevé

---

## Architecture Modulaire

### Vision Globale des Modules

```
┌──────────────────────────────────────────────────────┐
│           STRUCTURER SON ENTREPRISE (E-Myth)          │
│                  (Module Global - Futur)               │
│                                                        │
│  ┌──────────────┐  ┌──────────┐  ┌──────────────┐    │
│  │ Vision &     │  │ CRÉER    │  │ Organisation │    │
│  │ Stratégie    │  │ SON OFFRE│  │ & SOPs       │    │
│  │ (E-Myth)     │  │ (Hormozi)│  │ (E-Myth)     │    │
│  └──────────────┘  │ ◄── MVP  │  └──────────────┘    │
│                     └──────────┘                       │
│  ┌──────────────┐  ┌──────────┐  ┌──────────────┐    │
│  │ Finances &   │  │ Marketing│  │ Legal &      │    │
│  │ Budget       │  │ & Vente  │  │ Admin        │    │
│  └──────────────┘  └──────────┘  └──────────────┘    │
│                                                        │
└──────────────────────────────────────────────────────┘
```

Le module **"Créer son Offre"** (MVP) est conçu comme une brique autonome qui s'intègrera dans le module global "Structurer son Entreprise" lors des itérations futures.

---

## Features

### MVP Features — Module "Créer son Offre Irrésistible"

#### Feature 1: Authentification

- **Description**: Inscription/connexion email + mot de passe, JWT
- **User Story**: En tant que fondateur, je veux créer un compte pour sauvegarder ma progression
- **Acceptance Criteria**:
  - [ ] Inscription avec email + mot de passe
  - [ ] Connexion avec JWT (access token + refresh token)
  - [ ] Mot de passe oublié (email de reset)
- **Effort**: 1.5 jours

#### Feature 2: Gestion de Projets

- **Description**: CRUD de projets business (un projet = une idée à structurer)
- **User Story**: En tant que fondateur, je veux gérer plusieurs idées business en parallèle
- **Acceptance Criteria**:
  - [ ] Créer un projet avec nom et description
  - [ ] Lister mes projets avec indicateur de progression
  - [ ] Supprimer un projet
- **Effort**: 1 jour

#### Feature 3: Wizard — Étape 1 "Résultat Rêvé" (Dream Outcome)

- **Description**: Définir le résultat idéal que le client veut atteindre
- **User Story**: En tant que fondateur, je veux identifier clairement le résultat rêvé de mes clients
- **Champs**:
  - Audience cible (texte)
  - Résultat rêvé décrit en une phrase (texte)
  - État actuel du client (texte)
  - Pourquoi ce résultat est désespérément voulu (texte)
- **Aide contextuelle**: Explication du concept + exemples tirés de Hormozi
- **Effort**: 0.5 jour

#### Feature 4: Wizard — Étape 2 "Trouver sa Niche"

- **Description**: Évaluer et choisir sa niche selon les 4 critères Hormozi
- **User Story**: En tant que fondateur, je veux valider que ma niche est viable
- **Champs**:
  - Nom de la niche (texte)
  - Score "Douleur massive" (slider 1-10 + justification)
  - Score "Pouvoir d'achat" (slider 1-10 + justification)
  - Score "Facilité de ciblage" (slider 1-10 + justification)
  - Score "Marché en essor" (slider 1-10 + justification)
  - Indicateur visuel : score global /40
- **Aide contextuelle**: Les 3 marchés éternels (Santé, Richesse, Relations) + exemple pricing par niche
- **Effort**: 0.75 jour

#### Feature 5: Wizard — Étape 3 "Stratégie de Prix"

- **Description**: Définir le prix premium basé sur la valeur (Virtuous Cycle of Price)
- **User Story**: En tant que fondateur, je veux fixer un prix qui reflète la valeur de mon offre
- **Champs**:
  - Prix cible (nombre)
  - Modèle de tarification (one-time, abonnement, hybride)
  - Justification basée sur la valeur (texte)
  - Visualisation du "Virtuous Cycle of Price"
- **Effort**: 0.5 jour

#### Feature 6: Wizard — Étape 4 "Équation de Valeur"

- **Description**: Calculer et optimiser l'équation de valeur Hormozi
- **User Story**: En tant que fondateur, je veux maximiser la valeur perçue de mon offre
- **Champs**:
  - Dream Outcome (score 1-10 + description)
  - Perceived Likelihood (score 1-10 + description)
  - Time Delay (score 1-10, inversé + description)
  - Effort & Sacrifice (score 1-10, inversé + description)
  - Visualisation de l'équation avec score calculé
- **Formule affichée**:
  ```
  Valeur = (Dream Outcome × Likelihood) / (Time Delay × Effort)
  ```
- **Aide contextuelle**: Exemple Méditation vs Xanax, Bootcamp vs Liposuccion
- **Effort**: 0.75 jour

#### Feature 7: Wizard — Étape 5 "Problèmes & Solutions"

- **Description**: Lister tous les problèmes du client et trouver des solutions (pensée divergente)
- **User Story**: En tant que fondateur, je veux identifier tous les obstacles de mes clients et proposer des solutions
- **Champs**:
  - Liste dynamique de paires problème/solution
  - Priorité par item (1-5)
  - Type de solution : logique vs psychologique (tag)
- **Aide contextuelle**: Exercice de la brique (pensée divergente) + privilégier les solutions psychologiques
- **Effort**: 0.5 jour

#### Feature 8: Wizard — Étape 6 "Grand Slam Offer"

- **Description**: Assembler le delivery vehicle et faire le Trim & Stack
- **User Story**: En tant que fondateur, je veux structurer mon offre finale avec ses composants
- **Champs**:
  - Delivery vehicles / parcours client (liste ordonnée étapes a → f)
  - Core offer (texte structuré)
  - Trim : items à faible valeur/haut coût supprimés (drag & drop)
  - Stack : items à haute valeur/faible coût empilés avec nom + valeur perçue + coût réel
- **Effort**: 0.75 jour

#### Feature 9: Wizard — Étape 7 "Amplificateurs d'Offre"

- **Description**: Ajouter scarcity, urgency, bonuses, garantie et nommer l'offre
- **User Story**: En tant que fondateur, je veux rendre mon offre irrésistible avec les amplificateurs
- **Champs**:
  - Scarcity (texte + type : quantité limitée, accès limité)
  - Urgency (texte + type : deadline, cohorte, prix early-bird)
  - Bonuses (liste : nom + valeur perçue)
  - Garantie (texte + type : inconditionnelle, conditionnelle, anti-garantie)
  - Nom de l'offre (texte — le "Grand Slam Offer Name")
- **Aide contextuelle**: Exemples éthiques de scarcity/urgency
- **Effort**: 0.5 jour

#### Feature 10: Export PDF / Business Plan

- **Description**: Générer un PDF structuré avec tout le contenu des 7 étapes
- **User Story**: En tant que fondateur, je veux exporter mon travail en PDF pour mon business plan
- **Acceptance Criteria**:
  - [ ] PDF avec mise en page professionnelle
  - [ ] Toutes les 7 étapes résumées avec données saisies
  - [ ] Sections mappées vers un format business plan standard
  - [ ] Téléchargement immédiat + stockage dans l'historique
- **Effort**: 1.5 jours

### Post-MVP Features

#### Module "Structurer son Entreprise" (E-Myth)

- **Description**: Module global suivant les principes de E-Myth de Michael Gerber
- **Sous-modules**: Vision & Stratégie, Organisation & SOPs, Finances, Marketing, Legal
- **Intègre le module Offre** comme une brique du parcours global
- **Les 3 rôles E-Myth**: Technicien → Manager → Entrepreneur (progression trackée)
- **Why Later**: Le module Offre seul est déjà un produit complet et vendable

#### IA Assistant

- **Description**: Suggestions IA pour améliorer chaque étape (Claude API)
- **Why Later**: Ajoute de la complexité et du coût, pas nécessaire pour la validation

#### Collaboration

- **Description**: Inviter un co-fondateur ou coach à collaborer sur un projet
- **Why Later**: Demande multi-tenancy, permissions, real-time sync

#### Templates par industrie

- **Description**: Offres pré-remplies par secteur (fitness, coaching, SaaS, e-commerce)
- **Why Later**: Nécessite la validation du produit de base d'abord

---

## Architecture

### High-Level Architecture

```
┌─────────────────────────┐
│  Angular SPA            │
│  (Azure Static Web Apps)│
│  TypeScript / Material  │
└───────────┬─────────────┘
            │ HTTPS (REST API)
            │
┌───────────▼─────────────┐
│  Go REST API            │
│  (Azure App Service B1) │
│  Gin + pgx + JWT        │
└───────────┬─────────────┘
            │
    ┌───────┴───────┐
    │               │
┌───▼────────┐  ┌───▼──────────┐
│ PostgreSQL │  │ Azure Blob   │
│ Flex Server│  │ Storage      │
│ (Burstable)│  │ (PDF exports)│
└────────────┘  └──────────────┘
```

### Backend Architecture (Go)

**Framework**: Gin (HTTP) + pgx (PostgreSQL) + JWT

**Structure**:
```
bizcraft/
├── cmd/
│   └── api/
│       └── main.go                 # Entry point
├── internal/
│   ├── config/
│   │   └── config.go               # Env vars, Azure config
│   ├── handler/                     # HTTP handlers (thin)
│   │   ├── auth.go
│   │   ├── project.go
│   │   ├── step.go
│   │   └── export.go
│   ├── middleware/
│   │   ├── auth.go                  # JWT validation
│   │   ├── cors.go
│   │   └── logging.go
│   ├── domain/                      # Domain models, business logic
│   │   ├── user.go
│   │   ├── project.go
│   │   ├── module.go
│   │   ├── step.go
│   │   └── export.go
│   ├── repository/                  # Data access (PostgreSQL)
│   │   ├── postgres/
│   │   │   ├── user_repo.go
│   │   │   ├── project_repo.go
│   │   │   ├── step_repo.go
│   │   │   └── export_repo.go
│   │   └── interfaces.go
│   ├── service/                     # Business orchestration
│   │   ├── auth_service.go
│   │   ├── project_service.go
│   │   ├── step_service.go
│   │   └── export_service.go
│   └── pdf/
│       └── generator.go            # PDF generation (maroto v2)
├── migrations/
│   ├── 001_initial.up.sql
│   └── 001_initial.down.sql
├── seed/
│   └── hormozi_framework.sql       # Framework/module/step seed data (FR)
├── go.mod
├── go.sum
└── Dockerfile
```

**Key Libraries**:

| Library | Purpose |
|---|---|
| `github.com/gin-gonic/gin` | HTTP framework |
| `github.com/jackc/pgx/v5` | PostgreSQL driver (pool + queries) |
| `github.com/golang-jwt/jwt/v5` | JWT authentication |
| `github.com/santhosh-tekuri/jsonschema/v5` | Validation des réponses par step |
| `github.com/johnfercher/maroto/v2` | Génération PDF |
| `github.com/golang-migrate/migrate/v4` | Migrations DB |
| `golang.org/x/crypto/bcrypt` | Hashing mots de passe |

### Frontend Architecture (Angular)

**Version**: Angular 17+ (standalone components)

**Structure**:
```
src/app/
├── core/
│   ├── auth/
│   │   ├── auth.service.ts
│   │   ├── auth.guard.ts
│   │   └── auth.interceptor.ts
│   ├── api/
│   │   ├── project-api.service.ts
│   │   ├── step-api.service.ts
│   │   └── export-api.service.ts
│   └── models/
│       ├── project.model.ts
│       ├── step.model.ts
│       └── framework.model.ts
├── features/
│   ├── dashboard/
│   │   └── dashboard.component.ts       # Liste projets + progression
│   ├── project/
│   │   ├── project-create.component.ts
│   │   └── project-detail.component.ts
│   └── offer-wizard/                    # Le coeur du MVP
│       ├── offer-wizard.component.ts    # Container wizard + navigation
│       ├── steps/
│       │   ├── dream-outcome/
│       │   ├── niche-selection/
│       │   ├── pricing-strategy/
│       │   ├── value-equation/
│       │   ├── problems-solutions/
│       │   ├── grand-slam-offer/
│       │   └── offer-enhancers/
│       ├── components/
│       │   ├── step-indicator.component.ts
│       │   ├── step-help-panel.component.ts
│       │   └── validation-badge.component.ts
│       └── offer-wizard.routes.ts
├── shared/
│   ├── components/
│   │   ├── scoring-slider/              # Slider 1-10 réutilisable
│   │   ├── dynamic-list/               # Ajouter/supprimer items
│   │   └── export-button/
│   └── pipes/
│       └── translate.pipe.ts
└── app.routes.ts
```

**State Management**: Angular services + `BehaviorSubject` (pas de NgRx — le flux wizard est linéaire et localisé).

---

## Database Schema

### Entity Relationship

```
frameworks (seeded)
  └── modules (seeded)
        └── steps (seeded, with JSON Schema)

users
  └── projects
        └── project_modules (activation + progression)
              └── step_responses (données utilisateur en JSONB)
        └── exports (PDF générés)
```

### SQL Schema

```sql
-- ================================================
-- REFERENCE DATA (seeded, not user-created)
-- ================================================

CREATE TABLE frameworks (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug        VARCHAR(50) UNIQUE NOT NULL,   -- 'hormozi-offer', 'emyth-structure'
    name        VARCHAR(200) NOT NULL,          -- 'Créer son Offre Irrésistible'
    description TEXT,
    sort_order  INT NOT NULL DEFAULT 0,
    is_active   BOOLEAN NOT NULL DEFAULT true,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE modules (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    framework_id UUID NOT NULL REFERENCES frameworks(id),
    slug         VARCHAR(50) NOT NULL,          -- 'offre-irresistible'
    name         VARCHAR(200) NOT NULL,
    description  TEXT,
    sort_order   INT NOT NULL DEFAULT 0,
    parent_id    UUID REFERENCES modules(id),   -- permet les sous-modules
    is_active    BOOLEAN NOT NULL DEFAULT true,
    UNIQUE(framework_id, slug)
);

CREATE TABLE steps (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    module_id   UUID NOT NULL REFERENCES modules(id),
    slug        VARCHAR(50) NOT NULL,           -- 'dream-outcome', 'niche-selection'
    title       VARCHAR(200) NOT NULL,          -- 'Résultat Rêvé'
    description TEXT,                           -- Description de l'étape
    help_text   TEXT,                           -- Aide contextuelle (exemples, conseils)
    sort_order  INT NOT NULL DEFAULT 0,
    step_type   VARCHAR(30) NOT NULL DEFAULT 'form',
                -- 'form', 'checklist', 'matrix', 'freetext'
    schema      JSONB NOT NULL DEFAULT '{}',   -- JSON Schema des champs attendus
    UNIQUE(module_id, slug)
);

-- ================================================
-- USER DATA
-- ================================================

CREATE TABLE users (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email          VARCHAR(255) UNIQUE NOT NULL,
    password_hash  VARCHAR(255) NOT NULL,
    display_name   VARCHAR(100),
    locale         VARCHAR(10) NOT NULL DEFAULT 'fr',
    created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE projects (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name        VARCHAR(200) NOT NULL,
    description TEXT,
    status      VARCHAR(20) NOT NULL DEFAULT 'draft',
                -- 'draft', 'in_progress', 'completed'
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE project_modules (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id   UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    module_id    UUID NOT NULL REFERENCES modules(id),
    status       VARCHAR(20) NOT NULL DEFAULT 'available',
                 -- 'locked', 'available', 'in_progress', 'completed'
    started_at   TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    UNIQUE(project_id, module_id)
);

CREATE TABLE step_responses (
    id                 UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_module_id  UUID NOT NULL REFERENCES project_modules(id) ON DELETE CASCADE,
    step_id            UUID NOT NULL REFERENCES steps(id),
    response_data      JSONB NOT NULL DEFAULT '{}',  -- Réponses utilisateur
    is_validated       BOOLEAN NOT NULL DEFAULT false,
    validated_at       TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(project_module_id, step_id)
);

CREATE TABLE exports (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id  UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    format      VARCHAR(20) NOT NULL DEFAULT 'pdf',
    file_url    VARCHAR(500),
    status      VARCHAR(20) NOT NULL DEFAULT 'pending',
                -- 'pending', 'generating', 'ready', 'failed'
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ================================================
-- INDEXES
-- ================================================

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_project_modules_project_id ON project_modules(project_id);
CREATE INDEX idx_step_responses_project_module_id ON step_responses(project_module_id);
CREATE INDEX idx_exports_project_id ON exports(project_id);
```

### Pourquoi JSONB pour `response_data` et `schema`

Chaque étape a des champs différents. Plutôt que de créer une table par type d'étape :
- `steps.schema` : JSON Schema définissant les champs attendus (validation côté Go)
- `step_responses.response_data` : Les données utilisateur, validées contre le schema

Quand le module E-Myth sera ajouté, **aucune migration de schema n'est nécessaire** — juste du seed data.

### Seed Data — Module Hormozi (MVP)

```
Framework: "Créer son Offre" (hormozi-offer)
  └── Module: "Offre Irrésistible" (offre-irresistible)
        ├── Step 1: "Résultat Rêvé" (dream-outcome)
        │   schema: { target_audience, dream_outcome, current_state, why_desperate }
        ├── Step 2: "Trouver sa Niche" (niche-selection)
        │   schema: { niche_name, pain_score, purchasing_power, targeting_ease,
        │             market_growth, justifications{} }
        ├── Step 3: "Stratégie de Prix" (pricing-strategy)
        │   schema: { price_point, pricing_model, value_justification }
        ├── Step 4: "Équation de Valeur" (value-equation)
        │   schema: { dream_outcome_score, likelihood_score,
        │             time_delay_score, effort_score, analysis }
        ├── Step 5: "Problèmes & Solutions" (problems-solutions)
        │   schema: { items: [{ problem, solution, priority, type }] }
        ├── Step 6: "Grand Slam Offer" (grand-slam-offer)
        │   schema: { delivery_vehicles[], core_offer,
        │             trimmed_items[], stacked_items[{ name, value, cost }] }
        └── Step 7: "Amplificateurs" (offer-enhancers)
            schema: { scarcity, urgency, bonuses[{ name, value }],
                      guarantee, offer_name }
```

---

## API Design

### Authentication

```
POST   /api/v1/auth/register        # Inscription
POST   /api/v1/auth/login           # Connexion → JWT
POST   /api/v1/auth/refresh         # Refresh token
POST   /api/v1/auth/forgot-password # Demande de reset
POST   /api/v1/auth/reset-password  # Reset avec token
```

**Login Request**:
```json
{
  "email": "fondateur@example.com",
  "password": "monMotDePasse123"
}
```

**Login Response**:
```json
{
  "access_token": "eyJhbGc...",
  "refresh_token": "eyJhbGc...",
  "user": {
    "id": "uuid",
    "email": "fondateur@example.com",
    "display_name": "Jean Fondateur",
    "locale": "fr"
  }
}
```

### Core Endpoints

```
GET    /api/v1/users/me                                              # Profil
PATCH  /api/v1/users/me                                              # Update profil

GET    /api/v1/projects                                              # Liste projets
POST   /api/v1/projects                                              # Créer projet
GET    /api/v1/projects/:id                                          # Détail projet
PATCH  /api/v1/projects/:id                                          # Update projet
DELETE /api/v1/projects/:id                                          # Supprimer projet

GET    /api/v1/projects/:id/modules                                  # Modules activés + progression
GET    /api/v1/projects/:id/modules/:moduleId/steps                  # Toutes les étapes + réponses
GET    /api/v1/projects/:id/modules/:moduleId/steps/:stepId          # Détail étape + réponse
PUT    /api/v1/projects/:id/modules/:moduleId/steps/:stepId          # Sauvegarder réponse (auto-save)
POST   /api/v1/projects/:id/modules/:moduleId/steps/:stepId/validate # Valider l'étape

POST   /api/v1/projects/:id/export                                   # Lancer export PDF
GET    /api/v1/projects/:id/exports                                  # Liste exports
GET    /api/v1/exports/:id/download                                  # Télécharger PDF

GET    /api/v1/frameworks                                            # Frameworks disponibles
GET    /api/v1/frameworks/:id/modules                                # Modules d'un framework
```

### Exemple : Sauvegarder une réponse d'étape

**PUT** `/api/v1/projects/:id/modules/:moduleId/steps/niche-selection`

```json
{
  "response_data": {
    "niche_name": "Coaching fitness pour cadres surbookés",
    "pain_score": 8,
    "purchasing_power": 9,
    "targeting_ease": 7,
    "market_growth": 8,
    "justifications": {
      "pain": "Cadres stressés, sédentaires, santé en déclin",
      "purchasing_power": "Salaire >60k€, budget bien-être existant",
      "targeting": "LinkedIn, salons RH, partenariats CE",
      "growth": "Bien-être au travail en forte croissance"
    }
  }
}
```

**Response** `200 OK`:
```json
{
  "id": "uuid",
  "step_id": "uuid",
  "response_data": { ... },
  "is_validated": false,
  "updated_at": "2026-02-28T14:30:00Z"
}
```

### Pagination (listes)

```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 5
  }
}
```

---

## Data Models

### Go Domain Models

```go
type User struct {
    ID           uuid.UUID `db:"id" json:"id"`
    Email        string    `db:"email" json:"email"`
    PasswordHash string    `db:"password_hash" json:"-"`
    DisplayName  string    `db:"display_name" json:"display_name"`
    Locale       string    `db:"locale" json:"locale"`
    CreatedAt    time.Time `db:"created_at" json:"created_at"`
    UpdatedAt    time.Time `db:"updated_at" json:"updated_at"`
}

type Project struct {
    ID          uuid.UUID `db:"id" json:"id"`
    UserID      uuid.UUID `db:"user_id" json:"user_id"`
    Name        string    `db:"name" json:"name"`
    Description string    `db:"description" json:"description"`
    Status      string    `db:"status" json:"status"`
    CreatedAt   time.Time `db:"created_at" json:"created_at"`
    UpdatedAt   time.Time `db:"updated_at" json:"updated_at"`
}

type Framework struct {
    ID          uuid.UUID `db:"id" json:"id"`
    Slug        string    `db:"slug" json:"slug"`
    Name        string    `db:"name" json:"name"`
    Description string    `db:"description" json:"description"`
    SortOrder   int       `db:"sort_order" json:"sort_order"`
    IsActive    bool      `db:"is_active" json:"is_active"`
}

type Step struct {
    ID          uuid.UUID       `db:"id" json:"id"`
    ModuleID    uuid.UUID       `db:"module_id" json:"module_id"`
    Slug        string          `db:"slug" json:"slug"`
    Title       string          `db:"title" json:"title"`
    Description string          `db:"description" json:"description"`
    HelpText    string          `db:"help_text" json:"help_text"`
    SortOrder   int             `db:"sort_order" json:"sort_order"`
    StepType    string          `db:"step_type" json:"step_type"`
    Schema      json.RawMessage `db:"schema" json:"schema"`
}

type StepResponse struct {
    ID              uuid.UUID       `db:"id" json:"id"`
    ProjectModuleID uuid.UUID       `db:"project_module_id" json:"project_module_id"`
    StepID          uuid.UUID       `db:"step_id" json:"step_id"`
    ResponseData    json.RawMessage `db:"response_data" json:"response_data"`
    IsValidated     bool            `db:"is_validated" json:"is_validated"`
    ValidatedAt     *time.Time      `db:"validated_at" json:"validated_at"`
    CreatedAt       time.Time       `db:"created_at" json:"created_at"`
    UpdatedAt       time.Time       `db:"updated_at" json:"updated_at"`
}
```

### TypeScript Interfaces

```typescript
export interface User {
  id: string;
  email: string;
  displayName: string;
  locale: string;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  userId: string;
  name: string;
  description: string;
  status: 'draft' | 'in_progress' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface Step {
  id: string;
  moduleId: string;
  slug: string;
  title: string;
  description: string;
  helpText: string;
  sortOrder: number;
  stepType: 'form' | 'checklist' | 'matrix' | 'freetext';
  schema: Record<string, unknown>;
}

export interface StepResponse {
  id: string;
  stepId: string;
  responseData: Record<string, unknown>;
  isValidated: boolean;
  validatedAt: string | null;
  updatedAt: string;
}

export interface ProjectModule {
  id: string;
  projectId: string;
  moduleId: string;
  moduleName: string;
  status: 'locked' | 'available' | 'in_progress' | 'completed';
  stepsTotal: number;
  stepsCompleted: number;
}
```

---

## Deployment Strategy

### Azure Services

| Service | Tier | Cost/mois | Purpose |
|---|---|---|---|
| Azure App Service | Basic B1 | ~13 EUR | Go API |
| Azure Static Web Apps | Free | 0 EUR | Angular SPA |
| Azure PostgreSQL Flex | Burstable B1ms | ~15 EUR | Base de données |
| Azure Blob Storage | Hot, LRS | ~2 EUR | Stockage PDF |
| Azure Key Vault | Standard | ~1 EUR | Secrets |
| Azure Application Insights | Free tier | 0 EUR | Monitoring |
| **Total** | | **~31 EUR/mois** | |

### CI/CD Pipeline (GitHub Actions)

```yaml
# .github/workflows/deploy.yml
name: Build & Deploy

on:
  push:
    branches: [main]

jobs:
  build-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-go@v5
        with:
          go-version: '1.22'
      - run: go test ./...
      - run: go build -o bizcraft-api cmd/api/main.go
      - uses: azure/webapps-deploy@v3

  build-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: ng build --configuration production
      - uses: Azure/static-web-apps-deploy@v1

  migrate:
    needs: [build-backend]
    runs-on: ubuntu-latest
    steps:
      - run: migrate -path migrations -database $DATABASE_URL up
```

---

## Décisions Architecturales Clés

| # | Décision | Justification |
|---|---|---|
| 1 | **Monolithe** (pas microservices) | Complexité faible, un seul App Service suffit |
| 2 | **JSONB pour les réponses** | Chaque step a des champs différents, évite l'explosion de tables |
| 3 | **Composants Angular dédiés par step** (pas un form renderer dynamique) | UX unique par étape (sliders, matrices, drag&drop) |
| 4 | **Auto-save + validation explicite** | Pas de perte de données, sens de progression |
| 5 | **PDF côté serveur** (Go, maroto) | Pas besoin d'Azure Functions, une seule stack |
| 6 | **French-first, i18n-ready** | `@ngx-translate` dès le début, contenu DB en FR |
| 7 | **Multi-projet dès le MVP** | Trivial à implémenter, haute valeur ajoutée |
| 8 | **Auth email/password + JWT** (pas Azure AD B2C) | Plus simple, évite la config XML de B2C pour le MVP |

---

## Success Metrics

### Product Metrics

| Metric | Target | Mesure |
|---|---|---|
| Activation (complétion étape 1) | 60% des inscrits | % users avec step 1 validée |
| Rétention (retour J+7) | 30% | DAU/WAU |
| Complétion wizard (7/7 étapes) | 25% des activés | % users avec toutes étapes validées |
| Export PDF | 15% des inscrits | % users ayant généré au moins 1 PDF |

### Business Metrics

| Metric | Target M3 | Target M12 |
|---|---|---|
| MRR | 500 EUR | 3 000 EUR |
| Utilisateurs payants | 30 | 200 |
| Churn mensuel | <8% | <5% |
| CAC | <20 EUR | <15 EUR |

### Technical Metrics

| Metric | Target |
|---|---|
| API p95 latency | <500ms |
| Uptime | 99.9% |
| Error rate | <0.1% |
| Auto-save latency | <200ms |

---

## Pricing

| Tier | Prix | Inclut |
|---|---|---|
| **Gratuit** | 0 EUR | 1 projet, module Offre, pas d'export PDF |
| **Pro** | 14.90 EUR/mois (ou 149 EUR/an) | Projets illimités, export PDF, tous les modules |
| **Lifetime** | 249 EUR (one-time) | Accès permanent, early-adopter, tous modules actuels et futurs |

L'offre Lifetime est stratégique : les solopreneurs français résistent aux abonnements mais investissent en one-time. Elle finance le développement tout en construisant la base utilisateurs.

---

## Go-to-Market Strategy

### Phase 1: Validation (Semaine 0)

- Landing page sur `bizcraft.fr` avec capture email
- Post dans les communautés francophones (Twitter/X, LinkedIn, groupes Facebook solopreneurs)
- **Success criteria**: 50 emails en 2 semaines = demande validée

### Phase 2: Beta (Semaines 1-4, pendant le build)

- Build in public (Twitter/X, LinkedIn)
- 5-10 beta testeurs (accès lifetime gratuit contre feedback hebdo 15 min)
- Itérations rapides basées sur le feedback

### Phase 3: Launch (Semaine 5)

- Offre launch : 99 EUR lifetime (au lieu de 249 EUR)
- Product Hunt (version FR + EN)
- Blog posts SEO : "Comment créer une offre irrésistible (méthode Hormozi)"
- LinkedIn : étude de cas avec un beta testeur

### Phase 4: Growth (Mois 2-6)

- Content marketing (SEO, blog, YouTube)
- Partenariats avec coachs business francophones
- Affilié : 20% commission pour les coachs qui recommandent
- Newsletter solopreneurs francophones (sponsors)

---

## Competitive Positioning

| vs | BizCraft avantage |
|---|---|
| **Strategyzer** (25 USD/mo) | Hormozi-specific, en français, 5x moins cher |
| **LivePlan** (20 USD/mo) | Guidé par framework, pas un éditeur de business plan générique |
| **Templates Notion** (5-15 EUR) | Interactif, validation, progression, export PDF |
| **Coaching** (500-5000 EUR) | 50x moins cher, disponible 24/7, même méthodologie |

---

## Risks and Mitigations

### Risques Business

| Risque | Impact | Probabilité | Mitigation |
|---|---|---|---|
| Pas de demande marché | High | Medium | Valider avec landing page + 50 emails avant de builder |
| Hormozi trop "US-centric" | Medium | Medium | Adapter les exemples au contexte français/européen |
| Droit d'auteur sur le contenu Hormozi | Medium | Low | Inspirer de la méthode, ne pas copier le contenu verbatim |

### Risques Techniques

| Risque | Impact | Probabilité | Mitigation |
|---|---|---|---|
| PDF generation lente | Medium | Low | Générer async, notifier quand prêt |
| Auto-save trop fréquent | Low | Medium | Debounce 2s côté Angular |
| PostgreSQL JSONB queries lentes | Low | Low | Index GIN sur response_data si nécessaire |

---

## Timeline et Milestones

### Semaine 0: Validation

- [ ] Landing page `bizcraft.fr` avec capture email
- [ ] Posts communautés francophones
- [ ] Objectif : 50 emails

### Semaine 1-2: Foundation

- [ ] Setup Azure (App Service, PostgreSQL, Blob, Static Web Apps)
- [ ] Go API boilerplate (Gin, pgx, JWT, migrations)
- [ ] Angular app boilerplate (Material, routing, auth flow)
- [ ] Authentification complète (register, login, refresh, reset)
- [ ] CI/CD GitHub Actions → Azure
- [ ] Seed data framework Hormozi (7 steps en français)

### Semaine 3: Core Wizard

- [ ] CRUD projets (backend + frontend)
- [ ] Wizard container + navigation + indicateur de progression
- [ ] 7 composants d'étapes (backend PUT/validate + frontend)
- [ ] Auto-save avec debounce
- [ ] Aide contextuelle par étape

### Semaine 4: Polish & Deploy

- [ ] Export PDF (génération server-side + upload Blob + download)
- [ ] Dashboard avec progression visuelle
- [ ] UI/UX polish, responsive
- [ ] Tests (unit backend + e2e critiques)
- [ ] Deploy production
- [ ] Onboard beta testeurs

---

## Appendix

### Documents Liés

- **Notes Hormozi** : `/Users/jgaglo/venavi/saas/ideas/bizcraft/specs/feuille-*.md`
- **Bonus Hormozi** : `/Users/jgaglo/venavi/saas/ideas/bizcraft/bonus.md`
- **Notes manuscrites** : `/Users/jgaglo/venavi/saas/ideas/bizcraft/feuille-*-page-*.jpeg`
- **E-Myth structure** : `/Users/jgaglo/venavi/business/doveaia/e-myth/`

### Références

- [Alex Hormozi - $100M Offers](https://www.acquisition.com/offers)
- [Michael Gerber - The E-Myth Revisited](https://www.emyth.com/)
- [Azure App Service](https://learn.microsoft.com/azure/app-service/)
- [Azure Static Web Apps](https://learn.microsoft.com/azure/static-web-apps/)
- [Gin Web Framework](https://gin-gonic.com/)
- [Angular](https://angular.dev/)
- [pgx - PostgreSQL Driver for Go](https://github.com/jackc/pgx)
- [Maroto v2 - PDF Generator](https://github.com/johnfercher/maroto)
