# Formation GitHub Essentiel & Avancé

**Gestion de dépôts, CI/CD et AI Coding Agents**

**Durée** : 3 jours (21 heures)
**Niveau** : Intermédiaire
**Prérequis** : Connaissance de base de Git, familiarité avec un langage de programmation
**Tarif** : 2 100 € HT / participant

---

## À propos de cette formation

GitHub est bien plus qu'une plateforme de hébergement de code. Cette formation couvre les pratiques essentielles pour exploiter toute la puissance de GitHub : gestion collaborative des dépôts, CI/CD avec GitHub Actions, gestion des dépendances avec Dependabot, déploiements automatisés, et utilisation des agents d'IA pour le développement.

---

## Objectifs de la formation

Maîtriser les aspects essentiels et avancés de GitHub :

- Gestion collaborative de dépôts Git (branches, PR, reviews, protection)
- CI/CD avec GitHub Actions (workflows, actions, secrets)
- Mises à jour de dépendances automatisées avec Dependabot
- Tests parallèles et stratégies de matrice
- Self-hosted runners et déploiements
- AI Coding Agents (GitHub Copilot, Copilot Workspace, Actions)
- Sécurité et bonnes pratiques

---

## Programme détaillé

### Jour 1 : Gestion avancée des dépôts et collaboration

**Matin (3h30)**

- Rappels Git avancés
  - Rebase interactive et merge sophistiqué
  - Bisect pour trouver les bugs
  - Worktrees pour travailler sur plusieurs branches
- Modèle de branching Git Flow et GitHub Flow
- Pull Requests avancées
  - Draft PRs et reviews
  - Requested reviewers et CODEOWNERS
  - Required reviews et approbations
- **TP** : Collaboration sur un dépôt avec PRs et revues de code

**Après-midi (3h30)**

- Protection de branches
  - Restrictions de push
  - Règles de validation
  - Status checks requis
- Issues et Project Board
  - Création et gestion d'issues
  - Labels, milestones et templates
  - Projects (tableaux Kanban)
- GitHub CLI (gh)
  - Commandes essentielles
  - Automatisation de tâches courantes
- Webhooks et intégrations
- **TP** : Configuration complète d'un dépôt d'équipe

### Jour 2 : CI/CD avec GitHub Actions

**Matin (3h30)**

- Introduction à GitHub Actions
  - Concepts : workflows, jobs, steps, runners
  - Structure d'un workflow YAML
  - Events déclencheurs (push, pull_request, schedule, manual)
- Actions essentielles
  - checkout, setup-node, setup-python, etc.
  - Pinning des versions (@v4 vs @main)
  - Création d'actions composite
- Gestion des secrets et variables
  - GitHub Secrets vs Variables d'environnement
  - Environments et protection
- **TP** : Création d'un pipeline CI complet

**Après-midi (3h30)**

- Stratégies de test avancées
  - Tests parallèles avec matrix strategy
  - Tests conditionnels avec `if`
  - Artefacts et caching des dépendances
- Dependabot
  - Configuration de dependabot.yml
  - Stratégies de mises à jour (daily, weekly, monthly)
  - Grouping et automerge rules
  - Gestion des security alerts
- **TP** : Matrice de tests multi-versions + Dependabot

### Jour 3 : Runners, Déploiement et AI Coding Agents

**Matin (3h30)**

- Self-hosted runners
  - Installation et configuration
  - Runner groups et organisations
  - Ephemeral runners et auto-scaling
  - Bonnes pratiques de sécurité
- Déploiements avec GitHub Actions
  - Déploiement continu (CD)
  - Stratégies de déploiement (blue-green, canary)
  - Environments et approbations manuelles
  - Rollback automatique
- **TP** : Pipeline CD avec déploiement sur environnement

**Après-midi (3h30)**

- AI Coding Agents
  - GitHub Copilot : configuration et utilisation avancée
  - GitHub Copilot Workspace : développement avec l'IA
  - GitHub Actions avec l'IA (génération de workflows)
  - Bonnes pratiques et limites
- Sécurité avancée
  - GitHub Advanced Security (code scanning, secret scanning)
  - Dependabot Security Updates
  - Policy as Code avec OPA
- **TP** : Mise en place complète avec Copilot et sécurité

---

## Domaines couverts

| Domaine | Durée | Couvert |
|---------|-------|---------|
| Gestion de dépôts et collaboration | 7h | ✅ |
| CI/CD avec GitHub Actions | 7h | ✅ |
| Runners et déploiement | 3.5h | ✅ |
| AI Coding Agents | 1.5h | ✅ |
| Sécurité | 2h | ✅ |

---

## Méthodes pédagogiques

- **40% Théorie** : Concepts et bonnes pratiques
- **60% Pratique** : Exercices sur dépôts GitHub réels
- Cas d'usage concrets tirés de projets professionnels
- Accès à un lab GitHub pendant 60 jours

---

## Kit de formation inclus

- Support de cours PDF (150+ pages)
- Accès lab 60 jours avec organisations GitHub dédiées
- 50+ exercices pratiques
- Templates de workflows GitHub Actions réutilisables
- Scripts d'installation de runners
- Fiches de référence : GitHub CLI, Actions, Dependabot
- Checklists de bonnes pratiques

---

## Tarification

| Formule | Tarif HT |
|---------|----------|
| **Formation seule** | 2 100 € / participant |
| **Intra-entreprise** (jusqu'à 8 personnes) | 12 000 € |
| **Bundle GitHub + Docker** (4 jours) | 2 800 € / participant |

---

## Public visé

- Développeurs et DevOps souhaitant maîtriser GitHub
- Équipes techniques adoptant GitHub Actions
- Lead techniques configurant les workflows d'équipe
- Toute personne travaillant sur des projets collaboratifs

---

## Prérequis techniques

- Un compte GitHub (gratuit ou Enterprise)
- Git installé sur la machine
- Docker Desktop pour certains exercices
- Un IDE (VS Code recommandé)

---

## Programme détaillé par exercices

### TP 1 - Collaboration avancée (Jour 1)
- Fork et contribution à un projet open source
- Création de branches feature avec Git Flow
- Pull request avec review et résolution de conflits
- Configuration de CODEOWNERS

### TP 2 - Pipeline CI (Jour 2 matin)
- Workflow déclenché sur push/PR
- Linters et tests unitaires
- Rapports de couverture
- Notifications sur échec

### TP 3 - Tests parallèles + Dependabot (Jour 2 après-midi)
- Matrix strategy (Node 18, 20, 22)
- Cache des dépendances npm
- Configuration dependabot.yml
- Auto-merge des updates de patch

### TP 4 - Déploiement CD (Jour 3 matin)
- Workflow de déploiement avec approbation
- Environments (dev, staging, prod)
- Déploiement blue-green
- Rollback automatique

### TP 5 - AI + Sécurité (Jour 3 après-midi)
- Configuration Copilot dans VS Code
- Génération de workflow avec Copilot Workspace
- Code scanning avec GitHub Advanced Security
- Secret scanning custom patterns

---

## Ce que vous saurez faire après la formation

- Configurer un dépôt GitHub pour une équipe professionnelle
- Créer et maintenir des workflows CI/CD avec GitHub Actions
- Mettre en place Dependabot pour les mises à jour de dépendances
- Gérer des tests parallèles sur plusieurs configurations
- Déployer automatiquement avec stratégie de rollback
- Utiliser GitHub Copilot pour accélérer le développement
- Sécuriser vos dépôts et workflows

---

## Conseils pour tirer le meilleur de la formation

1. **Venir avec un projet concret** : Appliquez les concepts à votre contexte
2. **Activer Copilot avant** : Testez Copilot quelques jours avant la formation
3. **Questions spécifiques** : Préparez vos problèmes GitHub actuels

---

## Prochaines sessions

Contactez-nous pour connaître les prochaines dates.

📧 formation@akouendy.com
📞 +33 (0)1 XX XX XX XX

---

*Document créé le 22 janvier 2026*
