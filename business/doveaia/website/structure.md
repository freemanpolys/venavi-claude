# Structure du Site Web Doveaia

**Type** : Site One-Page avec sections dédiées + pages annexes
**Objectif** : Génération de leads B2B qualifiés (DSI, CTO, Dirigeants PME/ETI)
**CTA Principal** : Audit IA Gratuit (30 min) ou Démo personnalisée

---

## Architecture du Site

### Pages Principales

1. **Homepage** (One-Page) - `/`
   - Hero Section
   - Problème
   - Solution
   - Offres
   - Cas d'Usage
   - Processus
   - Différenciation
   - Témoignages (à venir)
   - CTA Final
   - Footer

2. **Offres** - `/offres`
   - Offre Starter (détail)
   - Offre Scale (détail)
   - Offre Enterprise (détail)
   - Comparatif des offres

3. **Cas d'Usage** - `/cas-usage`
   - Par secteur (Banque, Assurance, Industrie, Services)
   - Par fonction (RH, Juridique, Support, Commercial)

4. **Ressources** - `/ressources`
   - Blog / Articles
   - Guides techniques (LLMOps, Azure AI Foundry)
   - Études de cas clients

5. **À Propos** - `/a-propos`
   - Mission & Vision
   - Équipe
   - Expertise technique
   - Partenariats (Microsoft)

6. **Contact** - `/contact`
   - Formulaire de contact
   - Calendrier Calendly (audit gratuit)
   - Coordonnées

---

## Homepage : Structure Détaillée

### 1. Hero Section (Above the Fold)

**Titre Principal (H1)** :
"Vos Agents IA en Production, Pas en Démo"

**Sous-titre** :
"Nous industrialisons vos agents IA sur Azure AI Foundry avec LLMOps. De l'architecture au déploiement sécurisé."

**Visuel** :
- Illustration ou vidéo : Agent IA interconnecté avec Azure AI Foundry, pipelines CI/CD
- Badges : Azure Partner, ISO 27001 (à venir), RGPD compliant

**CTA Principal** :
- Bouton 1 : "Audit IA Gratuit (30 min)" → Calendly
- Bouton 2 : "Voir nos offres" → Scroll vers section Offres

**Trust Indicators** :
- "5 clients en production"
- "0 POC abandonné"
- "100% Azure France/Europe"

---

### 2. Problème (Pain Points)

**Titre** : "Pourquoi 90% des Projets IA Échouent"

**3 Colonnes avec Icônes** :

**Colonne 1 : POC Syndrome**
- Icône : Laboratoire
- "Votre POC ChatGPT fonctionne en démo, mais impossible de le mettre en production"
- Problème : Pas d'architecture scalable, code jetable

**Colonne 2 : Sécurité & Gouvernance**
- Icône : Cadenas
- "Votre DSI bloque le projet : données sensibles, RGPD, AI Act, traçabilité"
- Problème : Pas de gouvernance, pas de conformité

**Colonne 3 : Maintenance & Évolution**
- Icône : Outils
- "Votre agent fonctionne 3 mois, puis se dégrade. Personne ne sait pourquoi ni comment le corriger"
- Problème : Pas de monitoring, pas de CI/CD, pas de versioning

**Stat Choc** :
"Selon McKinsey, seulement 15% des projets IA atteignent la production"

---

### 3. Solution (Value Proposition)

**Titre** : "Doveaia : Architecte d'Agents IA en Production"

**Sous-titre** :
"Nous ne faisons pas de POCs. Nous construisons des agents IA qui tournent en production pendant des années."

**4 Piliers avec Icônes** :

**Pilier 1 : LLMOps (DevOps pour l'IA)**
- Icône : Pipeline CI/CD
- CI/CD pour agents IA
- Versioning des prompts
- Évaluations automatiques
- Rollback en 1 clic

**Pilier 2 : Azure AI Foundry**
- Icône : Logo Azure
- Plateforme Microsoft production-ready
- Données en Europe (RGPD)
- Sécurité enterprise (Managed Identity, RBAC)
- Scalabilité native

**Pilier 3 : Sécurité & Conformité**
- Icône : Bouclier
- Architecture zero-trust
- Conformité RGPD et AI Act
- Traçabilité complète
- Isolation des données

**Pilier 4 : Intégration Hybride**
- Icône : Puzzle
- Copilot Studio (UI) + Foundry (backend)
- Multi-agents orchestrés
- Intégration ERP/CRM/SI
- APIs sécurisées

---

### 4. Offres (Packages)

**Titre** : "3 Offres Packagées, De la Preuve de Valeur à la Plateforme"

**Tableau Comparatif (3 Colonnes)** :

| Critère | **STARTER** | **SCALE** | **ENTERPRISE** |
|---------|-------------|-----------|----------------|
| **Pour Qui** | PME, Premier projet IA | ETI, Projet stratégique | Grands comptes, Plateforme |
| **Agents** | 1 agent | 2-3 agents | Plateforme multi-agents |
| **Sources Données** | 1 source | 3-5 sources | Illimité |
| **LLMOps** | Basique | Complet | Industriel |
| **Support** | 1 mois | 6 mois | Infogérance |
| **Délai** | 2-3 semaines | 6-10 semaines | 3-6 mois |
| **Prix** | **5-10k€** | **35-45k€** | **Sur devis** |
| **CTA** | [Démarrer Starter] | [Démarrer Scale] | [Nous contacter] |

**Détails Offres** : Liens vers page `/offres` pour détails complets

---

### 5. Cas d'Usage

**Titre** : "Agents IA en Production : Cas Concrets"

**Grid 2x3 (6 Cas d'Usage)** :

**1. Agent Support Interne (RH/IT)**
- Icône : Casque support
- "Répondez à 80% des questions RH/IT automatiquement"
- Exemple : FAQ RH, procédures IT, onboarding
- ROI : -60% tickets support

**2. Assistant Recherche Documentaire**
- Icône : Loupe
- "Trouvez l'info dans 10 000 documents en 3 secondes"
- Exemple : Contrats, procédures, documentation technique
- ROI : -70% temps de recherche

**3. Agent Juridique**
- Icône : Marteau justice
- "Analysez contrats et clauses réglementaires"
- Exemple : Revue contrats, veille réglementaire, conformité
- ROI : -50% temps analyse

**4. Assistant Commercial**
- Icône : Graphique
- "Préparez propositions et réponses appels d'offres"
- Exemple : Qualification leads, génération propales, RFP
- ROI : +30% deals closés

**5. Agent Compliance**
- Icône : Checklist
- "Vérifiez conformité RGPD, ISO, AI Act"
- Exemple : Audit conformité, traçabilité, reporting
- ROI : -80% risques non-conformité

**6. Chatbot Client Avancé**
- Icône : Message
- "Support client L1/L2 avec accès SI"
- Exemple : Suivi commande, FAQ produit, SAV
- ROI : -40% charge support

**CTA Section** : "Quel est votre cas d'usage ?" → [Audit Gratuit]

---

### 6. Processus (Comment ça marche)

**Titre** : "De l'Idée à la Production en 3 Étapes"

**Timeline Horizontale (3 Étapes)** :

**Étape 1 : Cadrage (1 semaine)**
- Audit de votre besoin (gratuit 30 min)
- Atelier de cadrage (½ journée)
- Architecture & choix technologiques
- Estimation précise & planning

**Étape 2 : Développement (2-10 semaines)**
- Développement agent(s) Azure AI Foundry
- Intégration sources de données (RAG)
- Tests & évaluations automatiques
- Déploiement environnement staging

**Étape 3 : Production (1-2 semaines)**
- Déploiement production sécurisé
- Formation utilisateurs
- Documentation complète
- Transfert de compétences

**Post-Production** :
- Support & maintenance (optionnel)
- Infogérance LLMOps (optionnel)
- Évolutions & nouveaux agents

---

### 7. Différenciation (Pourquoi Doveaia)

**Titre** : "Pourquoi Choisir Doveaia ?"

**Grid 2x2 (4 Différenciateurs)** :

**1. Expertise Technique Unique**
- DevOps + Azure + IA Agents = Rare
- "Nous sommes les seuls en Bretagne spécialisés Azure AI Foundry + LLMOps"
- Pas de consultants prompt engineering, pas d'intégrateurs généralistes

**2. Production-First (Pas de POCs)**
- "Nous ne faisons pas de POCs. Nous livrons des agents qui tournent en production."
- Architecture scalable dès J1
- Standards DevOps appliqués à l'IA

**3. Sécurité & Conformité**
- Données en Europe (RGPD natif)
- Architecture zero-trust
- Conformité AI Act ready
- Traçabilité complète

**4. Modèle Évolutif**
- Starter → Scale → Enterprise
- Services managés (infogérance)
- Produits SaaS à venir (2026)
- Partenaire long terme

**Citation Fondateur** :
> "90% des consultants IA font des démos Jupyter. Nous, on opère des agents en production avec des standards industriels."
>
> – Julien, Fondateur Doveaia

---

### 8. Témoignages Clients (À Venir)

**Titre** : "Ils Nous Font Confiance"

**3 Cartes Témoignages** :

**Témoignage 1 : DSI Banque** (à collecter)
- Logo client (anonymisé si nécessaire)
- Citation : "Doveaia a industrialisé notre agent IA en 3 semaines. Après 6 mois, zéro incident."
- Nom, Poste, Entreprise

**Témoignage 2 : CTO ETI Industrie** (à collecter)
- Citation : "Enfin un partenaire qui parle DevOps ET IA. La différence avec les consultants ChatGPT est énorme."

**Témoignage 3 : Dirigeant PME Services** (à collecter)
- Citation : "ROI atteint en 4 mois. Notre agent RH répond à 80% des questions internes."

**Trust Badges** :
- Microsoft Partner (si certifié)
- Azure Certified (si applicable)
- RGPD Compliant
- ISO 27001 (à venir)

---

### 9. CTA Final

**Titre** : "Prêt à Mettre Vos Agents IA en Production ?"

**2 Options CTA** :

**Option 1 : Audit IA Gratuit**
- Bouton : "Réserver mon audit (30 min)"
- Lien : Calendly
- Description : "Nous analysons votre besoin et proposons une architecture en 30 minutes. Gratuit, sans engagement."

**Option 2 : Démo Technique**
- Bouton : "Voir une démo technique"
- Lien : Formulaire ou Calendly
- Description : "Découvrez un agent IA en production avec LLMOps complet (15 min)."

**Urgence** :
"Places limitées : 5 audits gratuits/mois"

---

### 10. Footer

**Colonne 1 : Doveaia**
- Logo
- Tagline : "Architecte d'Agents IA en Production"
- Adresse : Rennes, France
- Email : contact@doveaia.fr
- LinkedIn : [Lien]

**Colonne 2 : Offres**
- Starter
- Scale
- Enterprise
- Infogérance LLMOps

**Colonne 3 : Ressources**
- Blog
- Guides techniques
- Cas d'usage
- FAQ

**Colonne 4 : Entreprise**
- À propos
- Expertise
- Contact
- Mentions légales

**Social Proof** :
- LinkedIn
- GitHub (si code open-source)
- Twitter/X (optionnel)

**Legal** :
- Mentions légales
- Politique de confidentialité
- CGV

---

## Pages Annexes

### Page Offres (`/offres`)

**Structure** :

1. **Hero** : "3 Offres pour Industrialiser Vos Agents IA"

2. **Offre Starter (Détail)** :
   - Positionnement
   - Contenu détaillé (10 bullets)
   - Livrables
   - Cas d'usage typiques
   - Prix : 5-10k€
   - Délai : 2-3 semaines
   - CTA : "Démarrer Starter"

3. **Offre Scale (Détail)** :
   - Positionnement
   - Contenu détaillé (15 bullets)
   - Livrables
   - Cas d'usage typiques
   - Prix : 35-45k€
   - Délai : 6-10 semaines
   - CTA : "Démarrer Scale"

4. **Offre Enterprise (Détail)** :
   - Positionnement
   - Contenu sur-mesure
   - Options (infogérance, support dédié)
   - Prix : Sur devis
   - Délai : 3-6 mois
   - CTA : "Nous contacter"

5. **Tableau Comparatif** : Critères techniques détaillés

6. **FAQ** : 10-15 questions fréquentes

7. **CTA Final** : Audit gratuit

---

### Page Cas d'Usage (`/cas-usage`)

**Structure** :

1. **Hero** : "Agents IA en Production : Cas Réels"

2. **Filtres** :
   - Par secteur : Banque, Assurance, Industrie, Services, Santé
   - Par fonction : RH, Juridique, Support, Commercial, Compliance

3. **Grid Cas d'Usage (12-15 cas)** :
   - Chaque cas :
     - Titre
     - Problème métier
     - Solution agent IA
     - Architecture (Copilot/Foundry)
     - ROI chiffré
     - Temps de mise en prod
     - CTA : "Reproduire ce cas"

4. **Études de Cas Détaillées** (si clients existants) :
   - Client anonymisé
   - Contexte & besoin
   - Solution déployée
   - Résultats chiffrés
   - Témoignage

5. **CTA Final** : "Votre cas d'usage n'est pas listé ? Parlons-en" → Audit gratuit

---

### Page Ressources (`/ressources`)

**Structure** :

1. **Hero** : "Guides & Ressources LLMOps"

2. **Section Blog** :
   - Articles techniques (Azure AI Foundry, LLMOps, sécurité IA)
   - Études de cas anonymisées
   - Veille technologique
   - Publication : 2-4 articles/mois

3. **Guides Téléchargeables** (Lead Magnets) :
   - "Guide LLMOps : DevOps pour Agents IA" (PDF 15 pages)
   - "Checklist Sécurité Agents IA" (PDF 5 pages)
   - "Azure AI Foundry vs OpenAI : Comparatif" (PDF 10 pages)
   - Formulaire : Email → Download

4. **Webinars** (à venir) :
   - "LLMOps en 30 min"
   - "Azure AI Foundry : Démo Live"
   - Inscription : Email + Calendly

5. **FAQ Technique** :
   - 20-30 questions techniques fréquentes
   - SEO optimisé

---

### Page À Propos (`/a-propos`)

**Structure** :

1. **Hero** : "Qui Sommes-Nous ?"

2. **Mission** :
   - "Industrialiser l'IA d'entreprise avec LLMOps"
   - Vision : "Devenir le leader agents IA Azure en France"

3. **Équipe** :
   - Julien (Fondateur)
     - Photo pro
     - Bio : DevOps/SRE + Azure + IA
     - LinkedIn
   - Futurs recrutements (si levée)

4. **Expertise Technique** :
   - DevOps/LLMOps
   - Azure AI Foundry
   - Sécurité/Gouvernance
   - Go/Backend

5. **Partenariats** :
   - Microsoft Partner (si certifié)
   - Azure Ecosystem
   - Participation communautés tech (French Tech Rennes, etc.)

6. **Valeurs** :
   - Production-first (pas de POCs)
   - Transparence technique
   - Éthique IA (gouvernance, traçabilité)

7. **CTA** : "Rejoindre l'équipe" (recrutement) ou "Nous contacter"

---

### Page Contact (`/contact`)

**Structure** :

1. **Hero** : "Discutons de Votre Projet IA"

2. **Formulaire Contact** :
   - Nom
   - Entreprise
   - Email
   - Téléphone (optionnel)
   - Message
   - Type de projet : Starter / Scale / Enterprise / Autre
   - Bouton : "Envoyer"
   - Auto-réponse email + Notification Slack/Email

3. **Calendly Embed** :
   - "Ou réservez directement un créneau (30 min)"
   - Calendrier Calendly intégré

4. **Coordonnées** :
   - Email : contact@doveaia.fr
   - LinkedIn : [Lien]
   - Adresse : Rennes, Bretagne, France

5. **FAQ Courte** :
   - "Combien coûte un audit ?"
   - "Quel est le délai moyen ?"
   - "Travaillez-vous en remote ?"

---

## Navigation & UX

### Menu Principal (Sticky Top)

**Desktop** :
- Logo Doveaia (gauche) → Lien vers Home
- Navigation (centre) :
  - Offres
  - Cas d'Usage
  - Ressources
  - À Propos
  - Contact
- CTA Bouton (droite) : "Audit Gratuit" (couleur contrastée)

**Mobile** :
- Hamburger menu
- Logo centre
- CTA Bouton sticky bottom

### Footer (Toutes Pages)

- 4 colonnes (Desktop) : Doveaia / Offres / Ressources / Entreprise
- 1 colonne (Mobile) : Accordéon
- Social icons
- Legal links (petit)

---

## Performance & SEO

### SEO On-Page

**Mots-clés Principaux** :
- Agents IA Azure
- Azure AI Foundry France
- LLMOps
- Industrialisation agents IA
- Agents IA production
- Agents IA entreprise

**Meta Descriptions** :
- Homepage : "Industrialisez vos agents IA sur Azure AI Foundry avec LLMOps. De l'architecture au déploiement sécurisé. Starter dès 5k€."
- Offres : "3 offres packagées pour déployer vos agents IA en production : Starter, Scale, Enterprise. LLMOps inclus."
- Cas d'usage : "12 cas d'usage agents IA en production : Support, RH, Juridique, Commercial. ROI chiffré."

**Balises H1/H2/H3** :
- H1 unique par page
- H2 pour sections
- H3 pour sous-sections

**Images** :
- Alt text descriptif
- Format WebP (optimisé)
- Lazy loading

### Performance

**Objectifs** :
- Lighthouse Score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3s

**Techniques** :
- Minification CSS/JS
- Compression images (WebP)
- CDN (Cloudflare)
- Lazy loading images/videos
- Pre-connect fonts

---

## Stack Technique Recommandé

### Option 1 : WordPress + Elementor (Rapide)

**Avantages** :
- Setup 1 semaine
- Templates prêts
- Facile à éditer
- Plugins SEO (Yoast)

**Inconvénients** :
- Performance moyenne
- Sécurité à maintenir

---

### Option 2 : Next.js + Tailwind CSS (Moderne)

**Avantages** :
- Performance excellente
- SEO natif (SSR)
- React moderne
- Hosting Vercel gratuit

**Inconvénients** :
- Setup 2-3 semaines
- Nécessite compétences dev

---

### Option 3 : Webflow (No-Code Premium)

**Avantages** :
- Design pro sans code
- Performance excellente
- CMS intégré
- SEO optimisé

**Inconvénients** :
- Coût 20€/mois
- Moins de flexibilité technique

---

## Recommandation Initiale

**Phase 1 (Mois 1-3)** : Landing Page One-Page
- WordPress + Elementor (rapide)
- Ou Webflow (qualité pro)
- Focus : Hero + Offres + CTA (Audit gratuit)
- Budget : 0-500€ (template + domaine + hosting)

**Phase 2 (Mois 4-6)** : Site Complet Multi-Pages
- Ajouter pages Offres, Cas d'Usage, Ressources
- Blog technique (2-4 articles/mois)
- Lead magnets (guides téléchargeables)

**Phase 3 (Mois 7+)** : Site + Blog + SEO
- Migration Next.js si besoin perf
- Stratégie SEO agressive (30+ articles)
- Webinars intégrés
- Témoignages clients vidéo

---

## Prochaines Étapes

1. ✅ **Valider structure** avec fondateur
2. ⏳ **Rédiger contenu complet** homepage (voir `content/homepage.md`)
3. ⏳ **Choisir stack technique** (WordPress vs Webflow vs Next.js)
4. ⏳ **Design mockups** (Figma)
5. ⏳ **Développement** (1-3 semaines selon stack)
6. ⏳ **Intégration Calendly** (audit gratuit)
7. ⏳ **SEO on-page**
8. ⏳ **Lancement**

---

**Document créé le 26/12/2024**
**Prochaine étape** : Rédiger contenu détaillé sections homepage (`content/homepage.md`)
