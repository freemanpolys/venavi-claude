# Scripts de Pitch Commercial - Doveaia

## Structure Générale d'un Pitch

### Framework SPICED
1. **S**ituation : Comprendre le contexte client
2. **P**roblème : Identifier la douleur
3. **I**mpact : Quantifier les conséquences
4. **C**ritical Event : Urgence/catalyseur
5. **E**xploration : Questions ouvertes
6. **D**écision : Processus décisionnel

---

## PITCH 1 : AUDIT IA (Porte d'Entrée)

### Durée : 15 minutes

### Phase 1 : Contexte & Découverte (5 min)

**Vous** :
"Merci de prendre ce temps, [Prénom]. Pour optimiser notre échange, j'aimerais comprendre où vous en êtes avec l'IA.

**Questions de découverte** :
1. Avez-vous déjà lancé des initiatives IA chez [Entreprise] ? Lesquelles ?
2. Utilisez-vous Microsoft 365 Copilot ou Copilot Studio ?
3. Quels processus métier aimeriez-vous automatiser/améliorer ?
4. Quels sont vos principaux freins aujourd'hui ?

*[Écouter activement, prendre notes, reformuler]*"

---

### Phase 2 : Diagnostic Express (3 min)

**Vous** :
"D'accord, je comprends. Ce que vous décrivez est très courant. Voici ce que j'observe chez des entreprises similaires :

**Situation typique** :
- Beaucoup de POC/démos IA qui ne passent jamais en production
- Copilot 365 excellent pour productivité individuelle, mais limité pour processus métier complexes
- Préoccupations sécurité/RGPD qui bloquent les projets
- Coûts Azure difficiles à prévoir et contrôler

**Reformulation personnalisée** :
Chez vous, si je comprends bien, [reformuler leur problème spécifique avec leurs mots].

C'est bien ça ?"

*[Attendre confirmation]*

---

### Phase 3 : Solution (4 min)

**Vous** :
"Nous nous spécialisons exactement sur ce point : faire passer les agents IA en production de manière sécurisée et industrialisée.

**Notre approche** :

**1. Architecture intelligente**
- On utilise Copilot Studio quand c'est pertinent (interface utilisateur, M365)
- On passe sur Azure AI Foundry pour les cas complexes (multi-systèmes, orchestration)
- Architecture hybride : meilleur des deux mondes

**2. LLMOps (notre différenciateur)**
C'est là où 90% des acteurs échouent :
- CI/CD des agents (comme pour du code classique)
- Versioning des prompts (rollback si problème)
- Observabilité : coûts en temps réel, qualité des réponses, détection hallucinations
- Évaluations automatiques avant déploiement

**3. Sécurité & Conformité**
- Architecture zero-trust (Managed Identity, pas d'API keys)
- Données dans votre tenant (pas chez nous)
- Conformité RGPD & AI Act natives
- Traçabilité complète des décisions agents

**Cas concret** :
[Exemple adapté à leur secteur]
Nous avons récemment aidé [type d'entreprise] à [cas d'usage] :
- Déploiement : 3 semaines
- Gain productivité : [chiffre]%
- ROI : [délai]

Ça résonne avec vos enjeux ?"

---

### Phase 4 : Proposition Audit (3 min)

**Vous** :
"Voici ce que je vous propose : un **Audit IA structuré** (pas une démo générique).

**Déroulement** (1 semaine) :

**Jour 1 : Atelier découverte** (½ journée, en visio ou sur site)
- Cartographie de vos processus métier
- Identification 3-5 cas d'usage potentiels agents IA
- Priorisation par ROI / faisabilité

**Jour 3-5 : Analyse technique**
- Évaluation architecture (Copilot Studio vs Foundry vs hybride)
- Estimation coûts Azure
- Design sécurité & conformité

**Jour 7 : Restitution** (1h)
- Recommandations détaillées
- Roadmap priorisée
- Estimation budgétaire projet(s)

**Livrables** :
- Document de recommandations (15-20 pages)
- Architecture cible (schémas)
- Estimation coûts & ROI

**Investissement** : 5 000 € - 8 000 € (selon complexité)

**Garantie** : Si vous lancez un projet agent avec nous dans les 3 mois, l'audit est déduit du prix projet.

Qu'en pensez-vous ?"

---

### Gestion des Objections Audit

#### Objection : "Pourquoi payer pour un audit ?"

**Réponse** :
"Excellente question. L'audit n'est pas un exercice théorique, c'est une étude de faisabilité concrète.

Concrètement, vous obtenez :
- Cartographie précise de VOS cas d'usage (pas génériques)
- Architecture adaptée à VOTRE SI
- Business case chiffré (ROI, délais, coûts)

Beaucoup de clients nous disent : 'C'était la première fois qu'on avait une vision claire et actionnable de nos projets IA.'

Et si vous lancez un projet, l'audit est déduit. Donc risque = 0."

#### Objection : "On peut faire ça en interne"

**Réponse** :
"Absolument, si vous avez les compétences. La question est : combien de temps ?

Nos clients mettaient 6-12 mois à structurer leur approche en interne. Avec notre audit, vous avez une roadmap actionnable en 1 semaine.

Et on transfère les compétences : c'est aussi une formation déguisée pour vos équipes."

---

## PITCH 2 : OFFRE STARTER (Projet First)

### Durée : 20-30 minutes

### Phase 1 : Recap Besoins (3 min)

**Vous** :
"Suite à notre audit / nos échanges, on a identifié [cas d'usage] comme prioritaire :
- Impact métier : [décrire]
- Gain productivité estimé : [X]%
- ROI : [délai]

On est alignés sur ce diagnostic ?"

*[Attendre confirmation, ajuster si nécessaire]*

---

### Phase 2 : Présentation Offre Starter (10 min)

**Vous** :
"Je vous propose notre offre **Starter** : 'Premier agent IA en production'.

**Objectif** : Vous prouver la valeur concrète en 3 semaines, avec un agent métier fonctionnel.

**Ce que vous obtenez** :

**1. Un agent IA ciblé**
- Cas d'usage : [spécifique à leur besoin]
- Déployé en production (pas un POC)
- Accessible via [Teams / SharePoint / Web app]

**2. Architecture**
- Interface utilisateur : Copilot Studio (si M365) ou web app
- Backend : Agent Azure AI Foundry
- Connexion 1 source de données : [SharePoint / PDF / API interne]

**3. Fonctionnalités**
- RAG (Retrieval Augmented Generation) : l'agent accède à vos documents
- Prompts versionnés (Git) : modifications contrôlées
- Monitoring basique : logs, erreurs, usage
- Sécurité : Managed Identity, RBAC, conformité RGPD

**4. Accompagnement**
- ½ journée atelier cadrage (affiner besoin)
- Développement & tests (2 semaines)
- Formation utilisateurs (1h)
- Documentation complète

**Délai** : 3 semaines de la signature au déploiement

**Investissement** : 8 000 € (votre cas d'usage)

*[Si audit fait] Moins les 5 000€ de l'audit déjà payé = **3 000 € complémentaires***

**Question** : Qu'est-ce qui vous semble clair / flou dans cette proposition ?"

---

### Phase 3 : Démonstration (si possible) (5 min)

**Vous** :
"Je vais vous montrer un agent similaire qu'on a développé pour [secteur proche].

*[Démonstration live ou vidéo]*

**Points à souligner pendant la démo** :
- Vitesse de réponse
- Précision (sources citées)
- Interface intuitive
- Gestion des cas limites (questions hors périmètre)

Vous voyez comment ça s'appliquerait à [leur cas d'usage] ?"

---

### Phase 4 : Roadmap & Next Steps (5 min)

**Vous** :
"Voici comment on procède si on lance :

**Semaine 1 : Cadrage & Design**
- Jour 1 : Atelier ½ journée (affiner cas d'usage, sources données)
- Jour 2-3 : Setup infrastructure (Azure, Copilot Studio)
- Jour 4-5 : Développement v0.1 (prompts, RAG)

**Semaine 2 : Développement & Tests**
- Jour 1-3 : Itérations (affinage prompts, ajout fonctionnalités)
- Jour 4 : Tests internes (votre équipe pilote)
- Jour 5 : Corrections & ajustements

**Semaine 3 : Déploiement & Formation**
- Jour 1-2 : Déploiement production
- Jour 3 : Formation utilisateurs (1h)
- Jour 4-5 : Support post-déploiement

**Livrables finaux** :
- Agent fonctionnel en production
- Documentation technique & utilisateur
- Accès monitoring
- 1 mois de support inclus (corrections bugs)

**Next steps** :
1. Vous validez en interne (délai ?)
2. On fait un kick-off call (1h)
3. Lancement développement

**Questions ?**"

---

### Phase 5 : Upsell Infogérance (3 min)

**Vous** :
"Une dernière chose : après le déploiement, vous aurez besoin de maintenance.

**Option Infogérance** (recommandée) :
- Support utilisateurs
- Monitoring continu
- Corrections bugs
- Évolutions mineures (nouveaux documents, ajustements prompts)

**Forfait** : 1 000 € / mois

C'est souvent plus rentable que de gérer ça en interne (surtout si vous n'avez pas d'expert IA).

Intéressé pour qu'on l'inclue dès le départ ?"

---

### Gestion des Objections Starter

#### Objection : "C'est cher pour un POC"

**Réponse** :
"Je comprends la perception, mais ce n'est justement PAS un POC :
- C'est un agent en production, utilisable dès le jour 1
- Infrastructure industrielle (pas un notebook Jupyter)
- Support 1 mois inclus

Un vrai POC coûterait 2-3k€ mais ne serait pas utilisable. Là, vous avez un système prêt pour vos utilisateurs.

Le ROI typique est 3-6 mois. Sur [leur cas d'usage], si vous gagnez [X] heures/mois, vous êtes rentable en [calculer]."

#### Objection : "On veut tester Copilot Studio d'abord"

**Réponse** :
"Excellente idée ! D'ailleurs, on utilise souvent Copilot Studio dans notre architecture (pour l'interface utilisateur).

La différence, c'est que :
- Copilot Studio seul : limité à M365, pas de LLMOps, observabilité limitée
- Notre approche : Copilot Studio (UI) + Azure AI Foundry (backend) = meilleur des deux mondes

Vous avez le temps d'expérimenter Copilot Studio seul, ou vous préférez qu'on intègre ça dès le départ dans une architecture solide ?"

#### Objection : "On n'a pas de budget maintenant"

**Réponse** :
"Je comprends. Quand pensez-vous avoir la visibilité budgétaire ?

En attendant, deux options :
1. On planifie pour [trimestre prochain] et je vous réserve un créneau
2. On fait un mini-audit gratuit (30 min) pour préparer votre business case interne

Qu'est-ce qui vous aiderait le plus ?"

---

## PITCH 3 : OFFRE SCALE (Montée en Gamme)

### Context : Client a déjà fait Starter ou grand compte direct

### Durée : 30-45 minutes

### Phase 1 : Recap & Expansion (5 min)

**Vous** :
"Votre agent [Starter] fonctionne bien depuis [durée]. Vous voyez maintenant les limites :
- [Identifier les gaps : mono-source, pas multi-agents, pas de LLMOps complet]

Nos clients arrivent généralement à ce stade après 2-3 mois. Vous êtes prêts pour industrialiser ?"

---

### Phase 2 : Présentation Scale (15 min)

**Vous** :
"L'offre **Scale** est conçue pour passer de l'expérimentation à l'industrialisation.

**Différences clés vs Starter** :

| Critère | Starter | **Scale** |
|---------|---------|-----------|
| Agents | 1 | 2-3 agents orchestrés |
| Sources données | 1 | Multi-sources (SharePoint, DB, APIs) |
| LLMOps | Basique | Complet (CI/CD, evals, versioning) |
| Environnements | Prod uniquement | Dev / Staging / Prod |
| Observabilité | Logs | Dashboard complet (coûts, qualité, traces) |
| Sécurité | Standard | Avancée (RBAC fin, audit trail) |

**Cas d'usage Scale typiques** :
- Agent support multi-niveaux (L1-L2-L3)
- Agent IT Ops + Cloud Ops + Diagnostic
- Agent finance back-office (factures + rapprochements + reporting)
- Agent juridique (analyse contrats + veille réglementaire)

**Votre cas** :
[Décrire architecture spécifique pour leur besoin]

**Architecture hybride** :
```
Utilisateurs (Teams/Office)
    ↓
Copilot Studio (UI)
    ↓
Azure AI Foundry Agents (2-3 agents)
    ├── RAG multi-sources
    ├── Tools (APIs internes)
    └── Orchestration workflow
    ↓
Observabilité (Dashboard coûts/qualité)
```

**LLMOps Foundation** :
- **CI/CD** : Pipeline automatisé (GitHub Actions / Azure DevOps)
- **Versioning prompts** : Chaque modification = version Git
- **Évaluations automatiques** : Jeux de tests, scoring qualité
- **Rollback** : Retour arrière instantané si régression
- **Multi-environnements** : Dev → Staging → Prod

**Durée** : 6 semaines

**Investissement** : 35 000 € - 45 000 € (selon complexité)

**Inclus** :
- Audit architecture détaillé
- 2-3 agents en production
- Framework LLMOps complet
- Formation équipe interne (1 jour)
- Support 1 mois post-prod

Questions sur l'architecture ?"

---

### Phase 3 : Démonstration LLMOps (10 min)

**Vous** :
"Le LLMOps, c'est LA différenciation. Laissez-moi vous montrer.

*[Démonstration écran partagé]*

**1. Dashboard Observabilité**
- Coûts par agent, par utilisateur, par jour
- Nombre de requêtes, latence moyenne
- Taux d'erreur, hallucinations détectées

**2. CI/CD Pipeline**
- Modification prompt → Commit Git → Tests automatiques → Déploiement staging
- Si tests OK → Promotion prod (ou rollback si KO)

**3. Versioning**
- Historique complet des prompts
- Comparaison versions (A/B testing)
- Rollback en 1 clic

**Impact business** :
- Coûts maîtrisés (alertes si dépassement)
- Qualité garantie (pas de déploiement si régression)
- Agilité (itérations rapides sans risque)

C'est clair ?"

---

### Phase 4 : Option Infogérance (5 min)

**Vous** :
"Avec Scale, l'infogérance devient stratégique.

**Forfait LLMOps Managé** : 3 000 € / mois

**Ce qu'on gère** :
- Exploitation plateforme (monitoring 24/7)
- Maintenance CI/CD
- Optimisation coûts (réduction 20-30% typique)
- Support technique
- Évolutions mineures (nouveaux prompts, sources données)

**Vous gardez** :
- Contrôle métier (validation cas d'usage)
- Données (dans votre tenant)
- Décisions stratégiques

**ROI** :
Recruter un profil DevOps + IA = 60-80k€/an + 6 mois recrutement.
Notre forfait = 36k€/an avec expertise immédiate.

Pertinent pour vous ?"

---

### Phase 5 : Roadmap & Validation (5 min)

**Vous** :
"Roadmap si on lance :

**Semaines 1-2 : Audit & Architecture**
- Atelier architecture (1 jour)
- Design agents + workflows
- Setup environnements (Dev/Staging/Prod)

**Semaines 3-4 : Développement Agents**
- Agent 1 : [description]
- Agent 2 : [description]
- Agent 3 (optionnel) : [description]
- Intégration RAG multi-sources

**Semaines 5 : LLMOps Setup**
- CI/CD pipelines
- Dashboard observabilité
- Évaluations automatiques

**Semaine 6 : Tests & Formation**
- Tests utilisateurs (pilote élargi)
- Formation équipe (1 jour)
- Déploiement production

**Next steps** :
1. Validation interne (DSI + métier)
2. SOW (Statement of Work) détaillé
3. Kick-off (J+14 ?)

Des questions / réserves ?"

---

### Gestion des Objections Scale

#### Objection : "Pourquoi pas faire évoluer le Starter ?"

**Réponse** :
"On pourrait, mais ce serait comme rénover une maison au lieu d'en construire une nouvelle avec de bonnes fondations.

Scale, ce n'est pas juste '3 agents au lieu de 1', c'est :
- Architecture repensée (multi-tenant, scalable)
- LLMOps de bout en bout (impossible à ajouter après coup)
- Environnements séparés (sécurité + agilité)

Et franchement, partir sur Scale dès le début aurait coûté 35-45k€. Vous avez déjà payé 8k€ (Starter) qui vous a permis de valider l'approche. Maintenant vous investissez 35k€ sur des bases solides."

#### Objection : "On veut d'abord voir le ROI du Starter"

**Réponse** :
"Excellente approche ! Combien de temps voulez-vous attendre ?

Typiquement, nos clients constatent le ROI Starter en 2-3 mois. Si on lance Scale dans 3 mois, vous serez opérationnels industriellement dans... 6 mois.

Alternative : on peut phaser Scale :
- **Phase 1** (20k€) : LLMOps Foundation sur agent existant + 1 nouvel agent
- **Phase 2** (15k€, M+3) : Agent 3 + optimisations avancées

Ça vous donne de la flexibilité. Intéressé ?"

---

## FRAMEWORK DE CLOSING

### Technique AIDAR

**A**ttention : Capter l'intérêt
**I**ntérêt : Créer le désir
**D**ésir : Renforcer l'envie
**A**ction : Appel à l'action
**R**ésistance : Lever objections

### Closing Direct

**Vous** :
"On est alignés sur le besoin, l'approche et le budget. Qu'est-ce qui vous empêche de démarrer la semaine prochaine ?"

*[Silence, laisser répondre]*

### Closing Alternatif

**Vous** :
"Vous préférez démarrer en janvier ou février ?"

### Closing Assumptif

**Vous** :
"Ok, je vous envoie le SOW cet après-midi. Kick-off lundi prochain, ça vous va ?"

---

## CHECKLIST PRE-PITCH

- [ ] Profil LinkedIn prospect vérifié (fonction, entreprise, posts récents)
- [ ] Entreprise recherchée (secteur, taille, stack tech si dispo)
- [ ] Hypothèse besoin principal formulée
- [ ] Cas d'usage similaire préparé (même secteur/taille)
- [ ] Démo prête (si nécessaire)
- [ ] Pricing clair en tête (fourchette basse/haute)
- [ ] Objections anticipées listées
- [ ] Documents à partager prêts (deck, études de cas)

---

## AFTER-CALL ACTION PLAN

### Immédiatement Après (5 min)
- [ ] Email récapitulatif envoyé (< 1h)
- [ ] CRM/Notion mis à jour (statut, next steps)
- [ ] Calendrier bloqué pour next steps

### Email Récapitulatif Type

```
Objet : Récap échange [Entreprise] - Agents IA

Bonjour [Prénom],

Merci pour cet échange très riche !

Voici les points clés :

✅ Besoin identifié : [résumer]
✅ Solution proposée : [Audit / Starter / Scale]
✅ Investissement : [montant]
✅ Délai : [durée]

📎 Documents partagés :
- [Lien deck / étude de cas]

🗓️ Next steps :
- [Action client] : [deadline]
- [Votre action] : [deadline]
- Prochain point : [date proposée]

N'hésitez pas si questions !

[Votre prénom]
```

---

**Rappel** : Le meilleur pitch est celui où vous écoutez 70% du temps et parlez 30%. Posez des questions, reformulez, adaptez votre discours.
