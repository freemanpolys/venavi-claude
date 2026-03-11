# SOP : Onboarding Client DevOps

## Métadonnées

| Champ | Valeur |
|-------|--------|
| **Titre** | Onboarding d'un nouveau client DevOps |
| **Version** | 1.0 |
| **Créé le** | 2025-02-01 |
| **Mis à jour le** | 2025-02-01 |
| **Auteur** | [Ton nom] |
| **Temps estimé** | 2-4 heures |
| **Niveau de difficulté** | Moyen |
| **Rôle requis** | Consultant DevOps |

---

## Objectif

**Pourquoi cette procédure existe :**
Standardiser l'intégration de chaque nouveau client pour garantir une expérience professionnelle et collecter toutes les informations nécessaires dès le départ.

**Résultat attendu :**
- Client configuré dans tous nos outils
- Accès cloud obtenus
- Kick-off meeting réalisé
- Projet prêt à démarrer

---

## Prérequis

### Avant de commencer
- [ ] Contrat signé par le client
- [ ] Acompte reçu (50%)
- [ ] Date de démarrage confirmée

### Outils nécessaires
- [ ] Notion (ou outil de gestion projet)
- [ ] Calendrier (Calendly/Google Calendar)
- [ ] Outil de communication (Slack/Teams)
- [ ] Gestionnaire de mots de passe (1Password/Bitwarden)

---

## Procédure Pas à Pas

### Étape 1 : Créer l'espace client

**Action :** Créer le dossier client dans Notion

**Comment :**
1. Dupliquer le template "Projet Client DevOps"
2. Renommer avec le nom du client et la date
3. Remplir les informations de base :
   - Nom entreprise
   - Contact principal (nom, email, téléphone)
   - Contact technique (si différent)
   - Offre vendue
   - Montant et conditions de paiement

**Vérification :** Espace client créé avec toutes les informations de base

---

### Étape 2 : Envoyer le questionnaire technique

**Action :** Collecter les informations techniques du client

**Comment :**
1. Envoyer l'email "Bienvenue + Questionnaire" (template ci-dessous)
2. Inclure le lien vers le formulaire technique
3. Demander les accès cloud à préparer

**Template Email :**
```
Objet : Bienvenue ! Prochaines étapes pour [Projet]

Bonjour [Prénom],

Merci pour votre confiance ! Nous sommes ravis de travailler ensemble sur [description projet].

Pour bien démarrer, j'aurais besoin de quelques informations :

1. **Questionnaire technique** (5 min) : [LIEN]
2. **Accès cloud** : Merci de créer un compte avec les droits admin sur [Azure/AWS/GCP]
   - Email à utiliser : [ton email pro]
3. **Disponibilités** : [LIEN CALENDLY] pour le kick-off (45 min)

Je vous propose le planning suivant :
- Semaine 1 : Kick-off + setup environnement
- Semaine 2-X : [Selon offre]
- Fin : Livraison + formation

Des questions ? Répondez simplement à cet email.

À très vite,
[Signature]
```

**Questionnaire technique à inclure :**
- Cloud provider actuel (Azure/AWS/GCP/Autre)
- Environnements existants (dev/staging/prod)
- Stack technique actuelle
- Outils CI/CD en place
- Contraintes de sécurité/conformité
- Accès VPN nécessaire ?

**Vérification :** Email envoyé, questionnaire reçu sous 48h

---

### Étape 3 : Obtenir les accès cloud

**Action :** S'assurer d'avoir tous les accès nécessaires

**Comment :**
1. Vérifier réception de l'invitation cloud
2. Se connecter et valider les droits
3. Documenter les accès dans le gestionnaire de mots de passe
4. Tester l'accès aux ressources

**Accès minimum requis :**
- [ ] Console cloud avec droits admin (ou liste précise)
- [ ] Repository Git (si migration existante)
- [ ] Accès VPN si environnement on-premise
- [ ] Documentation existante (si disponible)

**Vérification :** Connexion réussie à tous les environnements

---

### Étape 4 : Planifier le kick-off

**Action :** Organiser la réunion de lancement

**Comment :**
1. Envoyer le lien Calendly avec créneaux disponibles
2. Confirmer la réunion avec invitation Calendar
3. Préparer l'agenda du kick-off

**Agenda type kick-off (45 min) :**
```
1. Présentations (5 min)
2. Validation du périmètre (10 min)
3. Revue du questionnaire technique (10 min)
4. Accès et environnements (10 min)
5. Planning et jalons (5 min)
6. Questions (5 min)
```

**Vérification :** Kick-off planifié avec invitation envoyée

---

### Étape 5 : Réaliser le kick-off

**Action :** Animer la réunion de lancement

**Comment :**
1. Rejoindre 5 min en avance
2. Enregistrer la réunion (avec accord)
3. Suivre l'agenda
4. Prendre des notes dans Notion
5. Identifier les risques/blocages potentiels
6. Confirmer le planning

**Questions clés à poser :**
- Qui est le point de contact technique au quotidien ?
- Y a-t-il des contraintes de disponibilité ?
- Quelles sont les deadlines critiques ?
- Qui valide les livrables ?

**Vérification :** Compte-rendu rédigé et envoyé sous 24h

---

### Étape 6 : Envoyer le compte-rendu

**Action :** Documenter et partager le kick-off

**Comment :**
1. Rédiger le compte-rendu dans Notion
2. Envoyer par email au client

**Template compte-rendu :**
```
Objet : CR Kick-off [Projet] - [Date]

Bonjour [Prénom],

Merci pour cette réunion productive ! Voici le résumé :

**Participants :** [Liste]

**Décisions prises :**
- [Décision 1]
- [Décision 2]

**Actions :**
| Action | Responsable | Deadline |
|--------|-------------|----------|
| [Action 1] | [Nom] | [Date] |
| [Action 2] | [Nom] | [Date] |

**Prochaines étapes :**
- [Étape 1]
- [Étape 2]

**Prochain point :** [Date et heure]

Des questions ou corrections ? N'hésitez pas.

Bonne journée,
[Signature]
```

**Vérification :** Email envoyé, aucune correction demandée sous 24h

---

### Étape 7 : Setup interne

**Action :** Préparer les outils de suivi

**Comment :**
1. Créer le canal Slack/Teams dédié (si pertinent)
2. Configurer les alertes dans le dashboard
3. Ajouter les tâches au planning personnel
4. Préparer le premier livrable

**Vérification :** Tout est prêt pour commencer le travail effectif

---

## Vérification Finale

- [ ] Espace client créé dans Notion
- [ ] Questionnaire technique complété
- [ ] Accès cloud fonctionnels
- [ ] Kick-off réalisé
- [ ] Compte-rendu envoyé
- [ ] Outils de suivi configurés
- [ ] Prêt à démarrer le travail

---

## Troubleshooting

### Problème 1 : Client ne répond pas au questionnaire

**Symptômes :** Pas de réponse après 48h

**Solution :**
1. Relance email J+2
2. Relance téléphone J+4
3. Si toujours rien J+7 : escalade au contact commercial

---

### Problème 2 : Accès cloud insuffisants

**Symptômes :** Erreurs de permission lors des tests

**Solution :**
1. Documenter précisément les erreurs
2. Envoyer au client la liste des droits manquants
3. Proposer un call de 15 min pour résoudre ensemble
4. Documenter pour éviter le problème avec les prochains clients

---

### Problème 3 : Client veut modifier le périmètre au kick-off

**Symptômes :** Demandes hors scope pendant la réunion

**Solution :**
1. Noter la demande
2. Expliquer que c'est hors périmètre initial
3. Proposer un avenant ou une phase 2
4. Ne jamais accepter du scope supplémentaire gratuitement

---

## Escalade

**Quand escalader :**
- Client injoignable > 1 semaine
- Demande d'annulation
- Litige sur le périmètre

**À qui escalader :**
- [Ton backup ou toi-même si tu travailles seul]

---

## Durées de Référence

| Tâche | Durée cible |
|-------|-------------|
| Création espace client | 15 min |
| Envoi email bienvenue | 10 min |
| Vérification accès | 30 min |
| Préparation kick-off | 20 min |
| Kick-off | 45 min |
| Compte-rendu | 30 min |
| Setup interne | 30 min |
| **Total** | **~3h** |

---

## Checklist Rapide (Version Condensée)

```
□ Contrat signé + acompte reçu
□ Espace Notion créé
□ Email bienvenue envoyé
□ Questionnaire reçu
□ Accès cloud validés
□ Kick-off planifié
□ Kick-off réalisé
□ CR envoyé
□ Setup interne fait
→ PRÊT À TRAVAILLER
```

---

## Historique des Modifications

| Version | Date | Auteur | Changements |
|---------|------|--------|-------------|
| 1.0 | 2025-02-01 | [Nom] | Création initiale |

---

*Cette SOP fait partie du playbook opérationnel DoveAIA Cloud — cloud.doveaia.com*
