# Newsletter - Le developpeur chef d'orchestre : piloter 10 agents IA en parallele

**Date**: 2026-02-06
**Statut**: Draft
**Sujet principal**: Agentic coding / conductor model + implications infra

---

## Options de sujets (subject lines)

1. Le dev qui ship du code qu'il ne lit plus
2. 10 agents en parallele : ton CI/CD va exploser
3. Tu ne codes plus. Tu diriges un orchestre d'IA.
4. Le modele "chef d'orchestre" : comment je pilote 10 agents
5. Quand l'IA ecrit ton code, qui le teste ?

---

## Draft

Salut,

Il y a un mois, je pilotais un agent IA a la fois.

Aujourd'hui, j'en lance cinq en parallele. Et je ne lis plus la moitie du code qu'ils produisent.

Ca devrait te faire peur. Moi aussi au debut.

---

## Le "chef d'orchestre" n'est plus une metaphore

Peter Steinberger, le createur de ClawdBot, l'a dit dans Pragmatic Engineer cette semaine : **"I ship code I don't read."**

Ca a fait reagir. Beaucoup.

Mais la realite, c'est que de plus en plus de devs font exactement la meme chose. Ils ne codent plus. Ils **pilotent**.

Le concept s'appelle le **"conductor model"** :
- **1 developpeur**
- **5 a 10 agents IA** qui codent en parallele
- **Chaque agent** travaille sur une tache specifique (feature, bug fix, refactoring, tests)
- **Toi**, tu coordonnes, tu valides, tu merges

VS Code vient d'ajouter les Agent Sessions qui supportent Claude et Codex en meme temps. C'est plus un prototype. C'est un workflow reel.

---

## Ce que ca change concretement

### Avant
- Tu ecris du code toi-meme
- Tu fais des PR de 200 lignes
- Tu review le code de tes collegues
- Tu geres 2-3 branches en parallele max

### Maintenant
- Tu decris ce que tu veux en spec
- 5 agents codent en meme temps
- Tu recois 5 PR de 500+ lignes chacune
- Tu review du code que tu n'as pas ecrit
- Tu geres 10 branches simultanees

Le gain de temps n'est pas dans la vitesse de frappe. Il est dans la **capacite a paralleliser le travail**.

---

## La question que personne ne pose

Tout le monde parle du gain de productivite. Personne ne parle de ce qui se passe **derriere**.

Quand tu fais tourner 10 agents en parallele, voici ce qui explose :

- **Ton pipeline CI/CD** : 10 branches = 10 builds = 10 fois plus de compute. Ton runner GitLab/GitHub Actions va souffrir.
- **Tes merge conflicts** : 10 agents qui modifient le meme codebase en parallele ? Bonne chance pour le merge.
- **Ta facture cloud** : Chaque agent consomme des tokens. 10 agents x 100K tokens par session = ca chiffre vite.
- **Tes tests** : Qui teste du code que personne n'a lu ? Comment tu fais confiance a du code genere ?

Base sur mon experience DevOps/Azure : **si tu adoptes le conductor model sans adapter ton infra, tu vas dans le mur.**

---

## Mon workflow aujourd'hui

J'utilise Claude Code avec des agents specialises et des serveurs MCP. Voici comment je structure ca :

### Phase 1 - Spec d'abord (10 minutes)
- Je redige une spec claire pour chaque tache
- Chaque spec = un agent dedie
- **Objectif** : Zero ambiguite, l'agent sait exactement quoi faire

### Phase 2 - Lancement parallele (1-2 heures)
- Je lance 3-5 agents en meme temps (pas 10, soyons realistes)
- Chaque agent a son scope isole (branch separee, tests separes)
- Les serveurs MCP (web search, vision, filesystem) etendent leurs capacites
- **Objectif** : Maximum de travail en parallele sans collision

### Phase 3 - Review et merge (30 minutes)
- Je review les outputs un par un
- Je teste manuellement les cas critiques
- Je merge dans l'ordre : les plus isoles d'abord
- **Objectif** : Qualite. Pas de code en prod que je ne comprends pas.

La difference ?

Je ne ship pas du code que je ne lis pas. Je ship du code que je n'ai pas **ecrit** mais que j'ai **lu, compris et teste**.

C'est une nuance importante.

---

## MCP : le protocole qui change la donne

Un truc qui passe sous le radar : **Anthropic et OpenAI collaborent sur la spec MCP Apps.**

MCP (Model Context Protocol), c'est le standard qui permet a tes agents d'utiliser des outils externes. Web search, lecture de fichiers, acces a des APIs, vision...

Concretement :
- **Avant** : chaque outil avait sa propre integration, son propre format
- **Maintenant** : un protocole unique, interoperable entre Claude et GPT

Mais voila ce que personne ne te dit : **les serveurs MCP ont besoin d'infrastructure**.

Tu dois les deployer. Les securiser. Les scaler. Si tu tournes sur Kubernetes, tu as besoin de pods dedies, de network policies, de monitoring.

C'est pas du plug-and-play. C'est du DevOps.

Et dans l'ecosysteme CNCF, ca bouge aussi :
- **Kthena** : nouveau projet CNCF pour l'inference LLM cloud-native
- **GPU scheduler plugins** : reclamer les GPU sous-utilises dans Kubernetes
- **Dapr + LLM** : utiliser Dapr pour l'interaction avec les LLMs dans tes microservices

L'infra pour l'IA n'est plus un sujet futuriste. C'est un sujet d'aujourd'hui.

---

## Ce que j'apprends en ce moment

1. **CI/CD pour code genere par IA** : Comment adapter tes pipelines quand 80% du code vient d'agents. Les tests classiques ne suffisent plus. Je prepare un guide pratique la-dessus.

2. **Le vrai cout du conductor model** : Entre les tokens, le compute CI/CD, et le temps de review, est-ce que ca vaut vraiment le coup ? Je fais les calculs.

---

## Une question pour toi

Est-ce que tu utilises deja plusieurs agents en parallele ?

Ou est-ce que tu restes sur un agent a la fois, en mode "pair programming" ?

Je suis curieux de savoir ou tu en es dans l'adoption de ces workflows. Reponds a cet email, je lis tout.

---

A bientot,

Jean-Guilhem

---

## Notes de recherche

### Trends identifies (12 sources analysees)

| Sujet | Frequence | Sources principales |
|---|---|---|
| Claude Opus 4.6 + GPT-5.3-Codex | 6/12 | The Neuron, Smol AI, Latent Space, Pragmatic Engineer, ByteByteGo, Peter Yang |
| Agentic coding / conductor model | 5/12 | Pragmatic Engineer, Smol AI, Peter Yang, The Neuron, Changelog |
| MCP protocol mainstream | 4/12 | Smol AI, Latent Space, Peter Yang, Changelog |
| AI infrastructure investment ($200B Amazon) | 4/12 | The Neuron, ByteByteGo, Smol AI, Latent Space |
| LLM inference infrastructure (CNCF) | 3/12 + CNCF | Latent Space, Smol AI, ByteByteGo |
| Kubernetes / infra pour IA | 0/12 | **Aucun concurrent - c'est ton territoire** |

### Couverture des concurrents sur ce sujet

- **Pragmatic Engineer** : "I ship code I don't read" - angle organisationnel/carriere, pas de perspective DevOps
- **Peter Yang** : Outils IA cote produit, pas d'infra
- **The Neuron** : News only, zero profondeur technique
- **ByteByteGo** : System design, s'arrete avant le deploiement reel
- **Smol AI** : Le plus technique, couvre MCP/agents mais aucune perspective infrastructure
- **Latent Space** : Recherche et etudes de cas enterprise, pas de guide pratique

### Angle unique de cette newsletter

**Differenciation** : Tous les concurrents parlent du "conductor model" du point de vue du developpeur (productivite, workflow). **Personne** ne parle des implications infrastructure : CI/CD, compute, merge conflicts, tests, cout reel.

Cette newsletter comble ce gap en combinant :
1. L'experience pratique avec Claude Code + agents + MCP
2. L'expertise DevOps/Kubernetes/Azure
3. Une approche realiste (3-5 agents, pas 10) vs le hype

### Complementarite avec la newsletter "IA en production"

La newsletter `newsletter-2026-six-fev.md` couvre le **deploiement d'apps IA** (le produit final).
Celle-ci couvre le **workflow de developpement** avec des agents (comment on construit).

Les deux sont complementaires :
- "IA en production" = comment deployer ton app IA
- "Chef d'orchestre" = comment construire avec des agents IA

### Idees pour les prochaines newsletters

1. **MCP en production** : deployer tes serveurs MCP sur Kubernetes
2. **CI/CD pour apps IA** : comment tester du code genere par des agents
3. **GPU sur Azure** : combien ca coute vraiment et comment optimiser
4. **Observabilite des agents IA** : ta stack monitoring pour 2026
5. **Kthena + GPU scheduling** : Kubernetes pour l'inference LLM

### Suggestions d'edition

Personnalisations prioritaires :
- [ ] Ajouter une anecdote personnelle concrete sur un agent qui a produit un bug en prod
- [ ] Inclure un chiffre reel de cout (tokens consommes sur une session multi-agent)
- [ ] Ajouter un lien vers la video Z.AI pour les lecteurs qui veulent la config multi-modele
- [ ] Considerer un screenshot du workflow multi-agent dans Claude Code

Ameliorations optionnelles :
- [ ] Ajouter un lien vers l'article Pragmatic Engineer sur Peter Steinberger
- [ ] Mentionner DoveAIA Labs pour ceux qui veulent aller plus loin
- [ ] Tester un CTA plus direct ("Reponds avec ton setup actuel")

### Nombre de mots

- **Draft** : ~1050 mots
- **Range habituel** : 800-1200 mots
- **Recommandation** : Dans la cible. Possibilite d'allonger la section MCP si besoin.
