# Syllabus : Maîtriser Claude Code pour Développeurs

**Formateur** : [Votre nom]
**Durée totale** : ~14h
**Public cible** : Développeurs (junior à senior)
**Prérequis** : Connaissances de base en programmation, familiarité avec le terminal

---

# PARTIE 1 : FONDAMENTAUX (GRATUIT)

*Durée : ~6h | Objectif : Être autonome avec Claude Code pour les tâches quotidiennes*

---

## Module 1 : Introduction à Claude Code (45 min)

### 1.1 Qu'est-ce qu'un assistant de codage IA ?
- Évolution : de l'autocomplétion à l'agent autonome
- Les différentes catégories : copilots, assistants, agents
- Ce qui rend Claude Code unique : agent terminal complet

### 1.2 Qu'est-ce que Claude Code ?
- Différence entre Claude (chat) et Claude Code (CLI agentique)
- Positionnement vs GitHub Copilot, Cursor, Cody
- Cas d'usage idéaux : exploration, refactoring, debugging, génération

### 1.3 Comment fonctionne Claude Code ?
- Architecture : modèle de langage + contexte de projet
- Le concept d'agent autonome dans le terminal
- Gestion du contexte et de la mémoire de conversation
- Les 3 modes d'interaction : Interactive, Headless, Intégré (IDE/CI)

### 1.4 Les 5 concepts fondamentaux
- **Tools (Outils)** : Capacités natives (Read, Write, Edit, Bash, Glob, Grep, WebSearch...)
- **Slash Commands** : Commandes `/` pour actions rapides (`/help`, `/commit`, `/clear`)
- **Skills** : Prompts packagés réutilisables qui étendent Claude Code
- **Subagents** : Agents spécialisés (Explore, Plan, Bash) pour tâches complexes
- **MCP Servers** : Extensions externes (bases de données, APIs, navigateur)

### 1.5 Prérequis et coûts
- Compte Anthropic et options d'authentification
- Plans disponibles : Pro, Max, API
- Estimation des coûts selon l'usage
- Providers alternatifs : AWS Bedrock, Google Vertex AI, Azure Foundry
- Plans alternatifs

### 1.6 Démo : Claude Code en action
- **Vidéo/Live** : Explorer un projet inconnu en 5 minutes
- **Vidéo/Live** : Corriger un bug de A à Z
- **Vidéo/Live** : Générer des tests automatiquement
- Ce qu'on va apprendre dans ce cours

---

## Module 2 : Installation et Premier Lancement (30 min)

### 2.1 Installation
- Installation via npm : `npm install -g @anthropic-ai/claude-code`
- Installation via Homebrew : `brew install claude-code`
- Vérification : `claude --version`
- Mise à jour : `claude update`

### 2.2 Authentification
- Connexion avec compte Anthropic
- Configuration API key : `ANTHROPIC_API_KEY`
- Options d'authentification avancées (tokens, helpers)

### 2.3 Premier lancement
- `claude` : Démarrer une session interactive
- `claude "question"` : Démarrer avec un prompt initial
- Comprendre l'interface terminal
- Les indicateurs visuels (spinner, status)

**Exercice pratique** : Installer Claude Code et lancer une première conversation

---

## Module 3 : CLI - Flags et Options essentiels (45 min)

### 3.1 Flags de session
- `--continue` / `-c` : Reprendre la dernière conversation
- `--resume` / `-r` : Reprendre une session par ID ou nom
- `--model` : Choisir le modèle (sonnet, opus, haiku)

### 3.2 Flags de mode
- `--print` / `-p` : Mode non-interactif (headless)
- `--permission-mode` : Choisir le niveau de permissions (plan, acceptEdits)
- `--output-format` : Format de sortie (text, json, stream-json)

### 3.3 Flags de configuration
- `--add-dir` : Ajouter des répertoires de travail
- `--mcp-config` : Charger des serveurs MCP
- `--settings` : Charger des paramètres supplémentaires

### 3.4 Flags avancés (aperçu)
- `--max-turns` : Limiter les tours agentiques
- `--max-budget-usd` : Budget maximum
- `--system-prompt` : Remplacer le prompt système

**Exercice pratique** : Expérimenter avec différents flags

---

## Module 4 : Tools - Les outils natifs (45 min)

### 4.1 Comprendre les Tools
- Qu'est-ce qu'un Tool ? (capacité d'action)
- Comment Claude Code choisit quel Tool utiliser
- Observer les Tools en action

### 4.2 Tools de lecture et recherche
- **Read** : Lire le contenu d'un fichier
- **Glob** : Trouver des fichiers par pattern (`**/*.ts`, `src/**/*.go`)
- **Grep** : Rechercher du texte dans les fichiers
- **WebSearch / WebFetch** : Rechercher sur internet

### 4.3 Tools de modification
- **Write** : Créer un nouveau fichier
- **Edit** : Modifier une partie d'un fichier existant
- **NotebookEdit** : Éditer des notebooks Jupyter
- **Bash** : Exécuter des commandes terminal

### 4.4 Tools d'orchestration
- **Task** : Lancer un sous-agent
- **AskUserQuestion** : Poser une question à l'utilisateur
- **ToolSearch** : Rechercher des outils MCP

### 4.5 Permissions et confirmations
- Système de confirmation avant les actions
- Accepter / Refuser / Toujours accepter
- Ce que Claude Code ne peut PAS faire

**Exercice pratique** : Observer les Tools utilisés pendant une session

---

## Module 5 : Slash Commands natives (30 min)

### 5.1 Commandes de session
- `/help` : Aide et documentation
- `/clear` : Effacer la conversation
- `/compact [instructions]` : Compresser le contexte
- `/status` : État de la session (version, modèle, compte)
- `/cost` : Statistiques d'utilisation des tokens
- `/exit` : Quitter la session

### 5.2 Commandes de contexte
- `/context` : Visualiser l'utilisation du contexte
- `/memory` : Éditer les fichiers CLAUDE.md
- `/add-dir` : Ajouter des répertoires de travail

### 5.3 Commandes de workflow
- `/commit` : Créer un commit Git
- `/init` : Initialiser un projet avec CLAUDE.md
- `/plan` : Entrer en mode planification
- `/todos` : Lister les tâches TODO

### 5.4 Commandes de configuration
- `/config` : Ouvrir les paramètres
- `/model` : Changer de modèle
- `/permissions` : Gérer les autorisations
- `/theme` : Changer le thème de couleurs

### 5.5 Commandes avancées
- `/resume [session]` : Reprendre une session
- `/rename <nom>` : Renommer la session
- `/export [fichier]` : Exporter la conversation
- `/rewind` : Revenir à un état précédent
- `/doctor` : Diagnostiquer l'installation

**Exercice pratique** : Maîtriser les slash commands essentielles

---

## Module 6 : Raccourcis clavier (20 min)

### 6.1 Contrôles généraux
- `Ctrl+C` : Annuler/interrompre
- `Ctrl+D` : Quitter la session
- `Ctrl+L` : Effacer l'écran terminal
- `Ctrl+O` : Basculer le mode verbose
- `Esc` + `Esc` : Rewind rapide

### 6.2 Édition de texte
- `Ctrl+K` : Supprimer jusqu'à la fin de ligne
- `Ctrl+U` : Supprimer la ligne entière
- `\` + `Enter` : Saut de ligne (multiline)
- `Option+Enter` : Saut de ligne (macOS)

### 6.3 Navigation et modèles
- `Shift+Tab` : Basculer les modes de permission
- `Option+P` / `Alt+P` : Changer de modèle
- `Option+T` / `Alt+T` : Basculer Extended Thinking
- `Ctrl+B` : Tâches en arrière-plan

### 6.4 Raccourcis spéciaux
- `/` en début de ligne : Slash command
- `!` en début de ligne : Mode Bash direct
- `@` : Autocomplete fichiers
- `Tab` : Accepter les suggestions

**Exercice pratique** : Pratiquer les raccourcis clavier

---

## Module 7 : Ajouter du contexte à Claude Code (30 min)

### 7.1 Pourquoi le contexte est crucial
- Claude Code ne connaît pas votre projet par défaut
- Plus de contexte = meilleures réponses
- Équilibre entre contexte et coût en tokens

### 7.2 Méthodes pour ajouter du contexte
- **@mentions** : Référencer des fichiers spécifiques (`@src/api.ts`)
- **Copier-coller** : Coller du code ou des logs dans le prompt
- **Images** : Coller des screenshots (erreurs, UI, diagrammes)
- **URLs** : Partager des liens de documentation

### 7.3 Contexte persistant avec CLAUDE.md
- Créer un `CLAUDE.md` avec `/init`
- Informations à inclure : stack, conventions, architecture
- Le fichier est chargé automatiquement à chaque session

### 7.4 Ajouter des répertoires de travail
- `/add-dir` : Ajouter des dossiers supplémentaires
- `--add-dir` : Flag au lancement
- Cas d'usage : monorepos, projets multi-dossiers

**Exercice pratique** : Créer un CLAUDE.md pour un projet existant

---

## Module 8 : Workflow quotidien (45 min)

### 8.1 Explorer une codebase
- Poser des questions sur le code
- Demander la structure d'un projet
- Comprendre du code complexe
- Utiliser les bonnes questions d'exploration

### 8.2 Modifier du code
- Demander des corrections simples
- Ajouter des fonctionnalités
- Refactoring guidé
- Références avec `@fichier`

### 8.3 Intégration Git
- Voir le status git
- Créer des commits avec `/commit`
- Comprendre les messages générés
- Bonnes pratiques de commit

### 8.4 Débugger efficacement
- Décrire un bug clairement
- Laisser Claude investiguer
- Analyser des stack traces
- Corriger et valider

### 8.5 Écrire des tests
- Générer des tests unitaires
- Améliorer la couverture
- TDD assisté par IA

### 8.6 Documenter
- Générer de la documentation
- Créer des README
- Expliquer du code complexe

**Exercice pratique** : Débugger un projet avec un bug intentionnel

---

## Module 9 : Subagents - Introduction (30 min)

### 9.1 Qu'est-ce qu'un Subagent ?
- Concept : Claude Code lance un agent spécialisé
- Pourquoi utiliser des subagents ?
- Quand Claude Code décide d'en utiliser un

### 9.2 Subagents intégrés
- **Explore** : Explorer et comprendre une codebase
- **Plan** : Planifier une implémentation complexe
- **Bash** : Exécuter des commandes shell
- **general-purpose** : Tâches variées

### 9.3 Observer les Subagents
- Reconnaître quand un subagent est lancé
- Comprendre les résultats retournés
- Limites et coûts des subagents
- Exécution en parallèle vs séquentielle

**Exercice pratique** : Demander une tâche complexe et observer les subagents

---

## Module 10 : Skills et Plugins - Introduction (30 min)

### 10.1 Qu'est-ce qu'une Skill ?
- Différence entre Slash Command et Skill
- Skills = prompts packagés réutilisables
- Syntaxe : `/skill-name` ou `/plugin:skill-name`

### 10.2 Utiliser une Skill existante
- Où trouver les skills disponibles
- Skills de la communauté
- Installer un plugin depuis le marketplace

### 10.3 Qu'est-ce qu'un Plugin ?
- Plugin = bundle de skills, hooks, MCP servers
- Marketplace officiel et plugins tiers
- Gestion des plugins activés

### 10.4 Bonnes pratiques débutant
- Quand utiliser Claude Code vs coder soi-même
- Vérifier le code généré
- Limites à connaître

**Exercice pratique** : Installer et utiliser un plugin populaire

---

## Module 11 : MCP Servers - Introduction (30 min)

### 11.1 Qu'est-ce qu'un MCP Server ?
- Model Context Protocol expliqué simplement
- MCP = extensions qui donnent de nouveaux outils à Claude Code
- Exemples : accès bases de données, GitHub, Slack, navigateur

### 11.2 MCP Servers pré-installés
- Serveurs disponibles par défaut
- Chrome DevTools (si activé)
- Comment voir les serveurs actifs : `/mcp`

### 11.3 Installer un MCP Server simple
- `claude mcp add` : Ajouter un serveur
- `claude mcp list` : Voir les serveurs installés
- Serveurs populaires faciles à installer
- Exemple : installer le serveur filesystem

### 11.4 Utiliser les outils MCP
- Les outils MCP apparaissent automatiquement
- Claude Code les utilise quand c'est pertinent
- Permissions et sécurité des serveurs MCP

**Exercice pratique** : Installer et utiliser un MCP server simple

---

## Module 12 : Gestion des sessions (20 min)

### 12.1 Sessions et persistance
- Les sessions sont sauvegardées automatiquement
- Reprendre avec `-c` (dernière) ou `-r nom` (spécifique)
- Nommer une session : `/rename mon-projet`

### 12.2 Historique et navigation
- Voir les sessions passées
- Naviguer dans l'historique
- Exporter une conversation : `/export`

### 12.3 Checkpoints et Rewind
- Claude Code sauvegarde des états
- `/rewind` pour revenir en arrière
- `Esc` + `Esc` : rewind rapide
- Limitations (changements externes)

**Exercice pratique** : Gérer plusieurs sessions de travail

---

## Projet de fin de partie gratuite : BizCraft Diagnostic (Phase 0)

**Construire le module "Diagnostic Gratuit" du SaaS BizCraft**

> BizCraft est un SaaS qui aide les entrepreneurs à structurer leur entreprise selon les principes du livre _The E-Myth Revisited_. Le diagnostic gratuit est le tunnel d'acquisition.

### Ce qu'on construit avec Claude Code

**Frontend (Angular)**
- Landing page `/diagnostic` avec CTA
- Questionnaire interactif (15-25 questions)
- Affichage du résultat : radar chart Entrepreneur/Manager/Technicien
- Formulaire de capture d'email
- Page de confirmation

**Backend (Go REST API)**
- `POST /api/diagnostic/submit` : Recevoir les réponses
- Algorithme de scoring des 3 profils
- Génération du rapport PDF (template HTML → PDF)
- Envoi d'email avec le rapport 
- Stockage du diagnostic en base (PostgreSQL)

**Infrastructure**
- Setup projet Go + Angular avec Claude Code
- Configuration Docker pour dev local
- Tests unitaires backend
- CLAUDE.md personnalisé pour le projet

### Livrables attendus
- [ ] Landing page fonctionnelle
- [ ] Questionnaire complet avec scoring
- [ ] API de soumission du diagnostic
- [ ] Génération PDF du rapport
- [ ] Envoi d'email automatique
- [ ] Tests unitaires
- [ ] Documentation README

### Stack technique
- **Frontend** : Angular 17+ standalone, Tailwind CSS
- **Backend** : Go 1.21+
- **Base de données** : PostgreSQL
- **PDF** : go-wkhtmltopdf ou chromedp
- **Email** : SMTP

---

# PARTIE 2 : MAÎTRISE AVANCÉE (PAYANT)

*Durée : ~8h | Objectif : Exploiter tout le potentiel de Claude Code*

---

## Module 13 : Configuration avancée - Fichiers (45 min)

### 13.1 Hiérarchie des fichiers de configuration
- **Managed** : `managed-settings.json` (IT/entreprise)
- **Local** : `.claude/*.local.*` (gitignored, personnel)
- **Project** : `.claude/` (partagé avec l'équipe)
- **User** : `~/.claude/` (tous les projets)

### 13.2 Le fichier settings.json
- Paramètres de modèle et API
- Permissions par défaut
- Variables d'environnement
- Options d'interface

### 13.3 Fichiers spéciaux
- `.claudeignore` : Exclure des fichiers
- `.mcp.json` : Serveurs MCP projet
- `~/.claude.json` : Config utilisateur (OAuth, MCP)

### 13.4 Configuration par environnement
- Variables d'environnement importantes
- `ANTHROPIC_API_KEY`, `ANTHROPIC_MODEL`
- Variables de tokens et contexte
- Variables de debugging

**Exercice** : Configurer un projet avec settings personnalisés

---

## Module 14 : CLAUDE.md et Memory System (45 min)

### 14.1 Le fichier CLAUDE.md
- Mémoire projet chargée automatiquement
- Structure recommandée
- Exemples par type de projet (Go, Angular, Python)

### 14.2 Hiérarchie des fichiers mémoire
- `~/.claude/CLAUDE.md` : Global (tous projets)
- `.claude/CLAUDE.md` : Projet (partagé)
- `.claude/CLAUDE.local.md` : Personnel (gitignored)

### 14.3 Imports et modularité
- Syntaxe : `<!-- @import ./rules/security.md -->`
- Dossier `.claude/rules/` avec fichiers modulaires
- Patterns glob pour chargement conditionnel
- Organisation par domaine (API, sécurité, tests)

### 14.4 Bonnes pratiques
- Garder le CLAUDE.md concis
- Séparer les règles par fichier
- Utiliser les imports pour la maintenabilité
- Versionner avec le projet

**Exercice** : Créer un CLAUDE.md modulaire pour votre stack

---

## Module 15 : Contrôler le contexte (30 min)

### 15.1 Comprendre la fenêtre de contexte
- Taille de la fenêtre selon le modèle
- Ce qui consomme du contexte (fichiers, historique, outils)
- Visualiser l'usage : `/context`

### 15.2 Stratégies de compaction
- `/compact` : Compresser la conversation
- `/compact [instructions]` : Compacter avec focus spécifique
- Auto-compaction quand le contexte se remplit
- `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` pour personnaliser

### 15.3 Optimiser l'utilisation du contexte
- Éviter de charger des fichiers inutiles
- Utiliser les bons patterns de recherche
- Fermer les sessions longues et en ouvrir de nouvelles
- Déléguer aux subagents pour les opérations verbeuses

### 15.4 Gérer les grands projets
- Monorepos et projets multi-modules
- Utiliser `/add-dir` stratégiquement
- CLAUDE.md par sous-projet
- Limites et contournements

**Exercice** : Optimiser une session sur un grand projet

---

## Module 16 : Permissions et Sécurité (45 min)

### 16.1 Modes de permission
- **Default** : Confirmation pour chaque action
- **Plan Mode** : Affiche les plans sans exécuter
- **Accept Edits** : Auto-accepte les modifications de code
- **Bypass** : Aucune confirmation (risqué)

### 16.2 Règles de permission granulaires
- Syntaxe : `Tool(pattern)`
- Listes `allow`, `deny`, `ask`
- Patterns avec wildcards et globs
- Exemples : `Bash(npm run *)`, `Read(.env*)`

### 16.3 Sandboxing
- Isolation du filesystem
- Isolation réseau
- Protection contre l'injection de prompts
- Configuration du sandbox

### 16.4 Sécurité en équipe
- Paramètres managed (entreprise)
- Restrictions de serveurs MCP
- Audit et logging

**Exercice** : Configurer des permissions sécurisées pour un projet

---

## Module 17 : MCP Servers - Maîtrise complète (1h)

### 17.1 Architecture MCP
- Model Context Protocol expliqué
- Communication stdio vs HTTP
- Serveurs locaux vs distants

### 17.2 Gestion des serveurs MCP
- `claude mcp add` : Ajouter un serveur
- `claude mcp list` : Lister les serveurs
- `claude mcp remove` : Supprimer
- `/mcp` : Status et authentification OAuth

### 17.3 MCP Servers essentiels
- **Filesystem** avancé
- **PostgreSQL / SQLite** : Requêtes en langage naturel
- **GitHub** : PRs, issues, reviews
- **Slack / Jira / Notion** : Intégrations métier
- **Chrome DevTools** : Automatisation navigateur

### 17.4 Créer son propre MCP Server
- Structure d'un serveur (Go)
- Exposer des outils personnalisés
- Resources et Prompts MCP
- Debugging et tests
- Publication et partage

**Exercice** : Connecter Claude Code à une base de données

---

## Module 18 : Skills et Subagents personnalisés (1h)

### 18.1 Créer une Skill
- Format de fichier : `.claude/skills/skill-name.md`
- Frontmatter YAML (nom, description, triggers)
- Corps du prompt
- Paramètres dynamiques avec `$ARGUMENTS`

### 18.2 Skills avancées
- Hooks dans les skills (`once`, `timeout`)
- Restriction d'outils
- Skills multi-étapes
- Injection de contexte dynamique

### 18.3 Créer un Subagent personnalisé
- Format : `.claude/agents/agent-name.md`
- Frontmatter (description, tools, model)
- Prompt spécialisé
- Orchestration depuis le parent

### 18.4 Partager en équipe
- Structure de plugin
- Marketplace privé
- Versioning des skills/agents

**Exercice** : Créer `/standup` et `/code-review` personnalisés

---

## Module 19 : Hooks - Automatisation événementielle (1h15)

### 19.1 Comprendre les Hooks
- Événements du cycle de vie Claude Code
- Types : command, prompt, agent
- Matchers pour filtrer les événements

### 19.2 Événements disponibles
- **SessionStart / SessionEnd** : Début/fin de session
- **UserPromptSubmit** : Avant traitement du prompt
- **PreToolUse / PostToolUse** : Avant/après un outil
- **PermissionRequest** : Demande de permission
- **SubagentStart / SubagentStop** : Sous-agents
- **Stop** : Fin de réponse

### 19.3 Créer des Hooks
- Configuration dans `settings.json`
- Hook command (script shell)
- Hook prompt (évaluation LLM)
- Hook agent (sous-agent de vérification)

### 19.4 Pièges courants avec les Hooks (Gotchas)
- **Timeouts** : Les hooks ont un timeout par défaut, attention aux scripts lents
- **Exit codes** : Code 0 = succès, Code 2 = bloquer l'action, Autres = warning
- **JSON parsing** : La sortie doit être du JSON valide ou rien
- **Chemins relatifs** : Utiliser les variables d'environnement (`CLAUDE_PROJECT_DIR`)
- **Hooks async** : Ne peuvent pas retourner de décisions bloquantes
- **Ordre d'exécution** : Les hooks s'exécutent dans l'ordre de définition
- **Debug** : Utiliser `claude --debug` pour voir l'exécution des hooks

### 19.5 Exemples de hooks utiles
- **Auto-format** : Formatter le code après chaque modification
- **Lint check** : Vérifier le code avant commit
- **Secret scanner** : Bloquer si des secrets sont détectés
- **Changelog auto** : Ajouter une entrée au changelog après chaque feature
- **Notification Slack** : Notifier l'équipe des changements importants
- **Context injection** : Injecter des infos dynamiques (git branch, date)

### 19.6 Claude Code SDK
- SDK TypeScript et Python
- Intégration programmatique
- Cas d'usage : bots, automatisation, pipelines

**Exercice** : Créer un hook de validation de sécurité

---

## Module 20 : IDE Integrations (45 min)

### 20.1 Extension VS Code
- Installation depuis le Marketplace
- Interface : prompt box, références fichiers
- Résumer des conversations passées
- Plusieurs conversations en parallèle
- Basculer vers le terminal

### 18.2 Plugin JetBrains
- IDEs supportés (IntelliJ, PyCharm, GoLand, WebStorm...)
- Installation et configuration
- Détection d'IDE multiples
- Support Remote Development et WSL

### 20.3 Chrome Integration
- Automatisation web et tests
- Capture d'écrans
- Remplissage de formulaires
- Workflows multi-sites
- Flags `--chrome` / `--no-chrome`

### 20.4 Bonnes pratiques IDE
- Quand utiliser l'IDE vs terminal
- Synchronisation des sessions
- Configuration partagée

**Exercice** : Configurer Claude Code dans VS Code et JetBrains

---

## Module 21 : Mode Headless et Automatisation (45 min)

### 21.1 Print Mode (`-p`)
- Exécuter et quitter : `claude -p "prompt"`
- Formats de sortie : text, json, stream-json
- JSON Schema pour sorties structurées

### 21.2 Options avancées headless
- `--max-turns` : Limiter les tours
- `--max-budget-usd` : Budget maximum
- `--fallback-model` : Modèle de secours
- `--no-session-persistence` : Pas de sauvegarde

### 21.3 Intégration scripts
- Utiliser Claude Code dans des scripts bash
- Piping input/output
- Chaîner avec d'autres commandes
- Variables d'environnement

### 21.4 Claude Agent SDK
- SDK TypeScript/Python
- Gestion programmatique des sessions
- Tool use et outputs structurés
- Suivi des coûts

**Exercice** : Script qui génère automatiquement des changelogs

---

## Module 22 : CI/CD - GitHub Actions et GitLab (1h)

### 22.1 GitHub Actions
- Quick setup avec `claude-code/claude-action@v1`
- Répondre aux mentions `@claude`
- Créer des PRs automatiquement
- Ajouter des commits
- Exécuter des skills

### 22.2 Configuration GitHub
- CLAUDE.md pour le contexte CI
- Gestion des secrets (API keys)
- Optimisation des coûts CI
- Sécurité et permissions

### 22.3 GitLab CI/CD
- Configuration YAML
- Issues → Merge Requests automatiques
- Support AWS Bedrock / Vertex AI

### 22.4 Cas d'usage CI/CD
- Review de code automatisée
- Génération de documentation
- Migration de code assistée
- Tests et validation

**Exercice** : GitHub Action qui review les PRs automatiquement

---

## Module 23 : Patterns agentiques avancés (45 min)

### 23.1 Plan Mode avancé
- Quand utiliser le mode planification
- Structurer des plans efficaces
- Workflow exploration → plan → implémentation
- Approbation étape par étape

### 23.2 Orchestration de subagents
- Exécution parallèle vs séquentielle
- Partage de contexte entre agents
- Gestion des erreurs et retries
- Subagents custom avec `--agents`

### 23.3 Multi-fichiers et refactoring
- Modifications coordonnées
- Gestion des dépendances
- Rollback avec `/rewind`
- Checkpoints automatiques

### 23.4 Extended Thinking
- Activation : `Option+T` ou `--betas interleaved-thinking`
- Configuration : `MAX_THINKING_TOKENS`
- Quand l'utiliser (tâches complexes)
- Impact sur les coûts

**Exercice** : Refactorer un monolithe en modules

---

## Module 24 : Optimisation et Productivité (45 min)

### 24.1 Gestion du contexte
- Comprendre la fenêtre de contexte
- `/context` pour visualiser l'usage
- `/compact` pour compresser
- `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE`

### 24.2 Réduction des tokens
- Prompts spécifiques et concis
- Utiliser les skills pour instructions répétitives
- Déléguer aux subagents (verbose ops)
- Choisir le bon modèle (Haiku vs Sonnet vs Opus)

### 24.3 Prompting efficace pour le code
- Techniques spécifiques au développement
- Exemples de prompts efficaces par tâche
- Anti-patterns à éviter
- Itération et correction

### 24.4 Suivi et mesure
- `/cost` et `/stats` pour le suivi
- `/usage` pour les limites (abonnement)
- Identifier les cas d'usage rentables
- ROI de Claude Code

**Exercice** : Optimiser une session de travail complexe

---

## Module 25 : Configuration Terminal et UX (30 min)

### 25.1 Personnalisation terminal
- `/terminal-setup` : Configurer le multiline
- `/theme` : Changer le thème
- `/vim` : Mode vim
- Status line personnalisée

### 25.2 Keybindings personnalisés
- Fichier `~/.claude/keybindings.json`
- Contextes (Global, Chat, Autocomplete...)
- Syntaxe des raccourcis
- Chords (combinaisons)

### 25.3 Notifications et feedback
- Configuration des notifications
- Spinners et verbes personnalisés
- Tips et suggestions
- Mode verbose (`Ctrl+O`)

### 25.4 Output styles
- Styles intégrés (explanatory, concise, code-focused)
- Créer des styles custom
- `.claude/output-styles/`

**Exercice** : Personnaliser son environnement Claude Code

---

## Module 26 : Déploiement Enterprise (30 min)

### 26.1 Managed Settings
- Fichiers `managed-settings.json` et `managed-mcp.json`
- Emplacements par OS (macOS, Linux, Windows)
- Politiques d'organisation
- Restrictions et gouvernance

### 26.2 Third-Party Providers
- Amazon Bedrock : Configuration AWS
- Google Vertex AI : Configuration GCP
- Azure Foundry : Configuration Azure
- Guardrails et compliance

### 26.3 Réseau et sécurité
- Configuration proxy (HTTP_PROXY, HTTPS_PROXY)
- Certificats personnalisés (mTLS)
- LLM Gateways (LiteLLM)
- Accès réseau requis

### 26.4 Développement containers
- devcontainer.json pour Claude Code
- Environnements isolés et sécurisés
- CI/CD cohérent
- Onboarding équipe

**Exercice** : Configurer Claude Code pour une équipe

---

## Projet final (certifiant) : BizCraft SaaS Complet (Phases 1-2)

**Compléter le SaaS BizCraft** en partant du diagnostic construit dans la partie gratuite.

> On transforme le diagnostic gratuit en un SaaS complet avec authentification, dashboard, gestion des processus et plus.

### Phase 1 — MVP (ce qu'on ajoute)

**Authentification avec Microsoft Entra External ID**
- Configuration Azure AD B2C / Entra External ID
- OAuth2 / OpenID Connect dans le backend Go
- SSO avec Google, Microsoft, LinkedIn
- Gestion du consentement RGPD
- Création automatique de compte après diagnostic

**Espace utilisateur**
- Dashboard avec roadmap personnalisée selon le profil
- Affichage des diagnostics passés
- Progression et objectifs

**Process Builder (SOPs)**
- CRUD complet des processus
- Étapes avec checklists
- Versioning des processus
- Export PDF des SOPs

### Phase 2 — Dashboard & Features avancées

**Gestion des rôles et organigramme**
- Fiches de poste (CRUD)
- Visualisation hiérarchique
- Export PDF

**Tableau de bord KPIs**
- Définition des indicateurs
- Suivi de progression
- Graphiques et visualisations

**Mode Coach (Multi-tenant)**
- Gestion de plusieurs entreprises clientes
- Vue consolidée des audits
- Rapports avancés

### Stack technique complète
- **Frontend** : Angular 17+ standalone, Tailwind CSS, Chart.js
- **Backend** : Go 1.21+, Chi router, sqlc, go-entra
- **Base de données** : Azure Database for PostgreSQL
- **Auth** : Microsoft Entra External ID (OIDC)
- **Stockage** : Azure Blob Storage
- **Hébergement** : Azure Container Apps
- **CI/CD** : GitLab CI ou GitHub Actions
- **Monitoring** : Azure Monitor, Grafana

### Configuration Claude Code requise
- CLAUDE.md modulaire avec imports par domaine :
  - `rules/api.md` — Conventions API Go
  - `rules/angular.md` — Standards Angular
  - `rules/azure.md` — Patterns Azure
  - `rules/security.md` — Règles de sécurité
- Skills personnalisées :
  - `/deploy` — Déployer sur Azure Container Apps
  - `/migrate` — Exécuter les migrations SQL
  - `/test` — Lancer la suite de tests
  - `/audit` — Vérifier la sécurité du code
- Hooks de validation :
  - Pre-commit : lint + tests
  - Secret scanner
  - Changelog auto
- MCP Servers :
  - PostgreSQL pour requêtes en langage naturel
  - GitHub pour gestion des PRs

### Livrables attendus
- [ ] Auth Entra fonctionnelle avec SSO
- [ ] Dashboard utilisateur
- [ ] Process Builder complet
- [ ] Gestion des rôles
- [ ] KPIs et graphiques
- [ ] Mode coach multi-tenant
- [ ] Déploiement Azure Container Apps
- [ ] CI/CD configuré
- [ ] Tests (unitaires + intégration + e2e)
- [ ] Documentation technique

### Critères d'évaluation
| Critère | Poids |
|---------|-------|
| Qualité du code généré | 20% |
| Utilisation des fonctionnalités avancées Claude Code | 25% |
| Configuration CLAUDE.md, skills et hooks | 20% |
| Automatisation CI/CD | 15% |
| Architecture et sécurité | 10% |
| Documentation | 10% |

---

# RESSOURCES COMPLÉMENTAIRES

## Inclus dans la formation payante

- [ ] **Cahier des charges BizCraft complet** (spec technique détaillée)
- [ ] Templates CLAUDE.md par stack (Go, Angular, Python, Node, Rust)
- [ ] Collection de 20+ skills prêtes à l'emploi
- [ ] 10+ hooks de validation et automatisation
- [ ] Configuration MCP servers (PostgreSQL, GitHub, Slack)
- [ ] Starter kit BizCraft (code de départ pour le projet)
- [ ] Cheatsheet PDF imprimable (CLI flags, raccourcis, commandes)
- [ ] Accès au groupe Discord privé
- [ ] Mises à jour gratuites pendant 1 an
- [ ] 2 sessions Q&A live avec le formateur

## Liens utiles

- [Documentation officielle](https://docs.anthropic.com/en/docs/claude-code)
- [Best Practices Anthropic](https://www.anthropic.com/engineering/claude-code-best-practices)
- [GitHub Claude Code](https://github.com/anthropics/claude-code)
- [MCP Servers Registry](https://github.com/modelcontextprotocol/servers)
- [Claude Code Action (GitHub)](https://github.com/anthropics/claude-code-action)

---

# PROGRESSION LOGIQUE

```
GRATUIT (6h)                              PAYANT (8h)
Module 1-12                               Module 13-26
────────────────────────────────────────────────────────────────────►

┌─────────────────────────┐               ┌─────────────────────────────┐
│ • Introduction          │               │ • Configuration avancée     │
│ • Installation          │               │ • CLAUDE.md & Memory        │
│ • CLI Flags essentiels  │               │ • Contrôler le contexte     │
│ • Tools natifs          │  ──────────►  │ • Permissions & Sécurité    │
│ • Slash Commands        │               │ • MCP Servers complet       │
│ • Raccourcis clavier    │               │ • Skills & Subagents custom │
│ • Ajouter du contexte   │               │ • Hooks (+ Gotchas + SDK)   │
│ • Workflow quotidien    │               │ • IDE Integrations          │
│ • Subagents (intro)     │               │ • Headless & CI/CD          │
│ • Skills (intro)        │               │ • Patterns agentiques       │
│ • MCP Servers (intro)   │               │ • Optimisation              │
│ • Sessions              │               │ • Terminal & UX             │
└─────────────────────────┘               │ • Enterprise                │
                                          └─────────────────────────────┘

         🎯 PROJET BIZCRAFT 🎯

┌─────────────────────────┐               ┌─────────────────────────────┐
│  DIAGNOSTIC GRATUIT     │               │  SAAS COMPLET               │
│  (Phase 0)              │  ──────────►  │  (Phases 1-2)               │
├─────────────────────────┤               ├─────────────────────────────┤
│ • Landing page          │               │ • Auth Entra External ID    │
│ • Questionnaire         │               │ • Dashboard utilisateur     │
│ • Scoring E/M/T         │               │ • Process Builder (SOPs)    │
│ • Génération PDF        │               │ • Gestion des rôles         │
│ • Envoi email           │               │ • KPIs et graphiques        │
│ • API Go basique        │               │ • Mode coach multi-tenant   │
│ • Angular + Tailwind    │               │ • Azure Container Apps      │
│ • PostgreSQL            │               │ • CI/CD GitLab/GitHub       │
└─────────────────────────┘               └─────────────────────────────┘
```

---

# ANNEXE : RÉFÉRENCE RAPIDE

## CLI Flags les plus utilisés

| Flag | Description |
|------|-------------|
| `-c` | Continuer la dernière conversation |
| `-r <session>` | Reprendre une session par nom/ID |
| `-p "prompt"` | Mode headless (print) |
| `--model sonnet/opus/haiku` | Choisir le modèle |
| `--permission-mode plan` | Mode planification |
| `--output-format json` | Sortie JSON |

## Slash Commands essentielles

| Commande | Description |
|----------|-------------|
| `/help` | Aide |
| `/clear` | Effacer conversation |
| `/compact` | Compresser contexte |
| `/commit` | Créer un commit |
| `/init` | Initialiser CLAUDE.md |
| `/model` | Changer modèle |
| `/config` | Configuration |
| `/cost` | Stats tokens |
| `/rewind` | Revenir en arrière |

## Raccourcis clavier essentiels

| Raccourci | Action |
|-----------|--------|
| `Ctrl+C` | Annuler |
| `Ctrl+D` | Quitter |
| `Ctrl+O` | Mode verbose |
| `Esc Esc` | Rewind |
| `Shift+Tab` | Changer mode permission |
| `Alt+P` | Changer modèle |
| `Alt+T` | Extended Thinking |

---

*Dernière mise à jour : 2026-02-03*
