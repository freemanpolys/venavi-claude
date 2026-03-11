# Plan Validation IA Agentique - Deux Verticales

## Contexte
- **Prospect 1** : Ami avocat (environnement Microsoft 365)
- **Prospect 2** : Ami e-commerce (service client)
- **Stratégie** : Validation parallèle contrôlée avec kill criteria

---

## Architecture Cible

```
                    ┌─────────────────────┐
                    │   CORE PLATFORM     │
                    │  (blocs communs)    │
                    │  - Auth/Users       │
                    │  - Agents IA base   │
                    │  - Connecteurs O365 │
                    │  - Dashboard KPIs   │
                    └──────────┬──────────┘
                               │
           ┌───────────────────┼───────────────────┐
           │                   │                   │
    ┌──────▼──────┐     ┌──────▼──────┐     ┌──────▼──────┐
    │  VERTICAL   │     │  VERTICAL   │     │  VERTICAL   │
    │   Avocat    │     │ E-commerce  │     │   (futur)   │
    │             │     │             │     │             │
    │ - Dossiers  │     │ - Tickets   │     │    ...      │
    │ - Contrats  │     │ - FAQ bot   │     │             │
    │ - Deadlines │     │ - Escalade  │     │             │
    └─────────────┘     └─────────────┘     └─────────────┘
```

---

## Règles de Parallélisation

| Règle | Application |
|-------|-------------|
| **Time-boxing** | Max 50% du temps sur chaque verticale |
| **Validation simultanée** | Les deux doivent montrer intérêt payant en 3 mois |
| **Kill criteria** | Si 0 intérêt payant à M3 → abandon verticale |
| **Core d'abord** | S1-S4 : construis le socle commun |
| **Weekly sync** | 1h/semaine pour comparer les learnings |

---

## Verticale 1 : Avocats (Microsoft 365 / Copilot)

### Pourquoi prioritaire
- Environnement Microsoft = tu maîtrises Copilot
- Profession réglementée = budget IT, pas de bricolage
- Réseau = les avocats se connaissent entre eux
- Processus documentés = plus facile à automatiser

### Discovery (Semaines 1-4)

#### Questions à poser à l'ami avocat

**Processus quotidiens :**
- [ ] Comment gères-tu tes dossiers clients ? (Outil actuel ?)
- [ ] Combien de temps passes-tu sur les emails par jour ?
- [ ] Comment suit-tu les deadlines (audiences, délais légaux) ?
- [ ] Quelle est ta tâche la plus répétitive et chronophage ?
- [ ] Utilises-tu des templates de documents ? Lesquels ?

**Douleurs :**
- [ ] Qu'est-ce qui te fait perdre le plus de temps ?
- [ ] As-tu déjà raté une deadline ? Pourquoi ?
- [ ] Quels documents recherches-tu souvent ?
- [ ] Comment gères-tu la relation client (mails, appels) ?

**Outils actuels :**
- [ ] Quels outils Microsoft utilises-tu ? (Outlook, Word, Teams, SharePoint ?)
- [ ] As-tu accès à Copilot ? L'utilises-tu ?
- [ ] Logiciel métier avocat ? (Secib, Kleos, Jarvis ?)

**Budget & Décision :**
- [ ] As-tu un budget IT annuel ?
- [ ] Qui décide des achats logiciels dans ton cabinet ?
- [ ] Combien paies-tu pour tes outils actuels ?

#### Automatisations potentielles

| Process | Valeur | Complexité | Priorité |
|---------|--------|------------|----------|
| Rappels deadlines automatiques | Haute | Faible | 1 |
| Résumé dossier automatique | Haute | Moyenne | 2 |
| Rédaction emails type | Moyenne | Faible | 3 |
| Recherche jurisprudence | Haute | Haute | 4 |
| Facturation automatique | Moyenne | Moyenne | 5 |

### POC (Semaines 5-8)

**Objectif** : 1 automatisation fonctionnelle qui démontre la valeur

**Candidat POC recommandé** : Rappels de deadlines
- Connecte à Outlook/Calendar
- Scanne les emails pour dates importantes
- Crée des rappels automatiques J-7, J-3, J-1
- Envoie notification Teams/email

**Métriques de succès POC :**
- [ ] L'avocat l'utilise quotidiennement
- [ ] Temps gagné estimé > 30 min/jour
- [ ] Satisfaction déclarée > 7/10
- [ ] Demande de fonctionnalités supplémentaires

### Proposition Commerciale (Semaines 9-12)

Si POC validé, proposer :

**Offre "Pack Automatisation Cabinet Avocat"**
- Setup : 3 000 - 5 000€
- Maintenance : 300 - 500€/mois
- Inclus : 3-5 automatisations, support, évolutions mineures

---

## Verticale 2 : E-commerce (Service Client IA)

### Discovery (Semaines 1-4)

#### Questions à poser à l'ami e-commerce

**Volume & Process :**
- [ ] Combien de tickets/demandes support par jour ?
- [ ] Quels canaux ? (Email, chat, réseaux sociaux ?)
- [ ] Qui répond actuellement ? (Toi, employé, agence ?)
- [ ] Temps de réponse moyen actuel ?
- [ ] Taux de satisfaction client actuel ?

**Types de demandes :**
- [ ] Top 5 des questions les plus fréquentes ?
- [ ] % de demandes résolvables sans humain ?
- [ ] Cas complexes nécessitant escalade ?

**Outils actuels :**
- [ ] Plateforme e-commerce ? (Shopify, WooCommerce, Prestashop ?)
- [ ] Outil de ticketing ? (Zendesk, Freshdesk, Gorgias, email ?)
- [ ] CRM ?

**Budget & Objectifs :**
- [ ] Coût actuel du support (temps ou externe) ?
- [ ] Objectif de réduction de tickets ?
- [ ] Budget mensuel acceptable pour une solution ?

#### Automatisations potentielles

| Process | Valeur | Complexité | Priorité |
|---------|--------|------------|----------|
| Chatbot FAQ | Haute | Moyenne | 1 |
| Réponses email automatiques | Haute | Moyenne | 2 |
| Suivi commande automatique | Haute | Faible | 3 |
| Escalade intelligente | Moyenne | Haute | 4 |
| Analyse sentiment | Faible | Moyenne | 5 |

### POC (Semaines 5-8)

**Objectif** : 1 chatbot/assistant qui répond aux questions fréquentes

**Candidat POC recommandé** : Chatbot FAQ + Suivi commande
- Entraîné sur les questions fréquentes
- Connecté à l'outil de suivi commande
- Répond automatiquement aux demandes simples
- Escalade les cas complexes

**Métriques de succès POC :**
- [ ] > 30% des demandes résolues sans humain
- [ ] Temps de réponse < 1 minute pour FAQ
- [ ] Satisfaction client maintenue ou améliorée
- [ ] Réduction temps support visible

### Proposition Commerciale (Semaines 9-12)

Si POC validé, proposer :

**Offre "Assistant IA Service Client E-commerce"**
- Setup : 2 000 - 4 000€
- Usage : 200 - 500€/mois (selon volume)
- Inclus : Chatbot, intégration, entraînement, support

---

## Planning Parallèle Détaillé

| Semaine | Avocat | E-commerce | Core |
|---------|--------|------------|------|
| S1 | Call discovery | Call discovery | Setup projet |
| S2 | Analyse besoins | Analyse besoins | Archi technique |
| S3 | Choix POC | Choix POC | Agents IA base |
| S4 | Design POC | Design POC | Connecteurs |
| S5 | Dev POC | Dev POC | Tests |
| S6 | Test POC | Test POC | Itération |
| S7 | Feedback + itération | Feedback + itération | Dashboard |
| S8 | Finalisation POC | Finalisation POC | Documentation |
| S9 | Présentation résultats | Présentation résultats | - |
| S10 | Négociation | Négociation | - |
| S11 | Proposition prix | Proposition prix | - |
| S12 | **Decision point** | **Decision point** | - |

---

## Checkpoint M3 : Décision

### Critères de succès par verticale

| Critère | Avocat | E-commerce |
|---------|--------|------------|
| POC fonctionnel | [ ] | [ ] |
| Utilisateur satisfait (>7/10) | [ ] | [ ] |
| Valeur démontrée (temps/argent) | [ ] | [ ] |
| Intérêt pour payer | [ ] | [ ] |
| Potentiel referral | [ ] | [ ] |

### Matrice de décision

| Résultat Avocat | Résultat E-comm | Action |
|-----------------|-----------------|--------|
| Succès | Succès | Continuer les deux, prioriser la plus rentable |
| Succès | Échec | Focus 100% Avocat |
| Échec | Succès | Focus 100% E-commerce |
| Échec | Échec | Pivot ou abandon IA agentique temporaire |

---

## Script pour Convaincre l'Ami Avocat

> "J'ai une idée pour automatiser [tâche X qu'il fait souvent] avec l'IA de Microsoft que tu as déjà.
>
> Je te propose de le faire gratuitement en échange de :
> 1. Accès à ton environnement Office 365 pour tester
> 2. 2h de ton temps pour me montrer tes processus actuels
> 3. Un témoignage si ça te fait gagner du temps
> 4. Une intro à 2 autres avocats de ton réseau si tu es satisfait
>
> Zéro risque pour toi, je m'engage sur 4 semaines max."

---

## Actions Cette Semaine

### Pour l'Ami Avocat
- [ ] Appeler et proposer le deal "R&D gratuit contre accès + témoignage"
- [ ] Planifier un call de 1h pour la discovery
- [ ] Préparer le questionnaire ci-dessus

### Pour l'Ami E-commerce
- [ ] Contacter et expliquer le projet
- [ ] Demander les métriques actuelles de support
- [ ] Planifier un call de discovery

### Pour Toi
- [ ] Préparer les environnements de dev (Azure OpenAI, etc.)
- [ ] Créer un repo GitHub pour le projet
- [ ] Définir l'architecture technique du core

---

## Learnings à Documenter

Après chaque interaction, noter :
- Ce qui a surpris (positif ou négatif)
- Ce qui était évident
- Ce qu'il faut approfondir
- Idées de features demandées
- Objections/réticences exprimées

---

*Document vivant - Mettre à jour après chaque étape*
