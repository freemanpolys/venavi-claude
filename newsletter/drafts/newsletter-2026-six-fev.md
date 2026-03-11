# Newsletter - IA en production : ce que personne ne te dit

**Date**: 2026-02-06
**Statut**: Draft

---

## Sujet(s) envisagé(s)
- IA en production : ce que personne ne te dit
- Kubernetes pour les workloads AI : guide pratique
- Le fossé entre prototype IA et production

---

## Ouverture

Salut,

Tout le monde parle de construire des apps IA.

Personne ne parle de les déployer.

Et c'est là que les projets meurent.

---

## Le problème qu'on ne voit pas

J'analyse des dizaines de newsletters AI chaque semaine (Peter Yang, The Neuron, Latent Space...).

Elles sont excellentes sur :
- Comment utiliser telle API
- Comment prompter mieux
- Comment choisir son modèle

Mais sur l'infrastructure ? Silence.

Pourtant, c'est le mur sur lequel tout le monde finit par percuter.

---

## Le fossé prototype → production

Tu as construit ta super app AI en local. Elle tourne. Elle est rapide.

Tu veux la mettre en production. Et là :

- **Comment tu déployes ?** Un simple container ? Kubernetes ?
- **Comment tu scales ?** Les workloads AI sont différents du web classique
- **Comment tu gères les coûts ?** GPU inference = facture salée
- **Et la sécurité ?** Tes prompts ne devraient pas fuiter

Concrètement :
- Un serveur web classique ? Suffisant pour un MVP
- Kubernetes ? Indispensable quand tu scales et veux du GPU-as-a-Service
- Azure OpenAI ? Plus simple que d'héberger ton propre modèle

Le gain de temps n'est pas dans le choix de l'API. Il est dans l'architecture qui te permet de dormir la nuit.

---

## Pourquoi Azure + Kubernetes ont du sens pour l'AI

Je vois beaucoup de contenu AWS/GCP. Mais pour l'AI en entreprise, Azure a un avantage : l'intégration OpenAI native.

Quand tu combines ça avec Kubernetes :

- **AKS (Azure Kubernetes Service)** avec GPU nodes
- **Azure OpenAI** pour tes modèles LLM
- **Azure Container Apps** pour les workloads serverless

Tu as une stack cohérente. Pas de bricolage.

---

## Le workflow que je recommande

Basé sur mon expérience DevOps/Azure :

### Phase 1 - MVP (1-2 semaines)
- Container unique
- Azure Container Apps ou Web App
- API OpenAI directe
- **Objectif** : Valider le marché

### Phase 2 - Production (1-2 mois)
- AKS avec autoscaling
- GPU nodes pour l'inférence si self-hosting
- Monitoring et logs (Prometheus + Grafana)
- **Objectif** : Fiabilité et coût maîtrisé

### Phase 3 - Scale (quand tu as des users)
- Multi-région
- CDN pour les assets statiques
- Cache intelligent des réponses AI
- **Objectif** : Performance et UX

---

## Ce que j'apprends en ce moment

1. **Kubernetes AI Workflows** : Je prépare une série de vidéos sur le déploiement d'apps IA sur AKS. Le gap de documentation sur ce sujet est énorme.

2. **Coût GPU vs Serverless** : Pour 80% des cas, Azure OpenAI (serverless) est moins cher que d'héberger son propre modèle. Je prépare un comparatif détaillé.

---

## Une question pour toi

Qu'est-ce qui te bloque le plus dans le déploiement de tes projets IA ?

- Le choix de l'infrastructure ?
- Les coûtsGPU/cloud ?
- La scalabilité ?
- Autre chose ?

Réponds à cet email, j'adapterai mes prochaines vidéos et newsletters à tes besoins.

---

À bientôt,

Jean-Guilhem

---

## Notes de recherche

### Trends identifiés (11 sources analysées)
- **AI Tools & Tutorials** : Alex Finn, Peter Yang, The Neuron, Latent Space
- **Solopreneurship/One-Person Businesses** : Justin Welsh, Dan Koe, Sahil Bloom
- **Tech Industry Insights** : Pragmatic Engineer, ByteByteGo, The Neuron, Changelog
- **Mental Models & Frameworks** : Sahil Bloom, Dan Koe

### Opportunités d'angles uniques
Le **gap majeur** identifié : personne ne couvre l'infrastructure AI du point de vue DevOps/Kubernetes. Tout le monde parle de :
- Comment construire (prompts, APIs)
- Comment monétiser (solopreneurship)
- Comment apprendre (tutoriels)

Personne ne parle de : **comment déployer et faire tourner en production**

### Positionnement unique
- Expertise Kubernetes + Azure + AI : combo rare dans la newsletterosphère
- Audience francophone mal servie sur ces sujets techniques
- Approche pratique (pas de théorie, du terrain)

### Idées pour les prochaines newsletters
1. **GPU vs CPU pour l'AI : quand ça vaut le coup** - Analyse coût/bénéfice
2. **Ma stack AI pour freelances** - Kubernetes overkill ? Alternatives simples
3. **Azure OpenAI vs self-hosting** - Decision framework
4. **CI/CD pour apps IA** - Comment tester du code qui parle à des LLMs

### Références concurrentes (contexte)
- **Peter Yang** : Parle de l'aspect produit/business des apps AI
- **The Neuron** : Actualité IA, pas d'infrastructure
- **ByteByteGo** : Système design, mais pas spécifique AI
- **Pragmatic Engineer** : Engineering practices, mais pas IA-déployé

Ton angle : **Le pont entre l'IA et l'infrastructure de production**
