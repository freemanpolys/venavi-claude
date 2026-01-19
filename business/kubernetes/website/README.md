# Site Web Infogérance Kubernetes - AKOUENDY

Site vitrine bilingue (FR/EN) pour l'offre d'infogérance Kubernetes avec simulateur de projet interactif.

## Structure

```
website/
├── index.html          # Page principale (bilingue)
├── training.html       # Page formations Kubernetes (CKA, CKAD, Fondamentaux)
├── css/
│   └── styles.css      # Styles du site
├── js/
│   ├── i18n.js         # Système de traduction FR/EN
│   ├── main.js         # JavaScript principal (navigation, tabs)
│   └── simulator.js    # Simulateur de projet interactif
├── images/             # Images et logos
└── README.md           # Documentation
```

## Fonctionnalités

### Bilingue FR/EN
- Bouton de changement de langue dans la navigation
- Toutes les traductions dans `js/i18n.js`
- Langue sauvegardée dans localStorage
- Changement instantané sans rechargement de page

### SEO
- Balises meta optimisées (description, keywords, robots)
- Open Graph pour les réseaux sociaux
- URL canonique
- Structure sémantique HTML5
- Titres H1-H4 hiérarchisés

### Sections (index.html)
1. **Hero** - Accroche avec stats clés (99.9% dispo, 30min P1, 24/7)
2. **Services** - BUILD, RUN, DEPLOY avec tarifs de base
3. **Toolchain CI/CD** - Présentation de la stack DevSecOps
4. **Tarifs** - Onglets avec packs, BUILD, RUN, DEPLOY détaillés
5. **Simulateur** - Configurateur interactif pour estimer le budget
6. **Technologies** - Stack technique maîtrisée
7. **SLA** - Engagements et garanties
8. **Contact** - Formulaire et coordonnées

### Page Formations (training.html)
1. **Hero** - Présentation des formations avec badges (certifiés, 70% pratique, petits groupes)
2. **Catalogue** - 3 formations : Fondamentaux (3j), CKAD (4j), CKA (5j)
3. **Certifications CNCF** - Infos sur l'examen (2h, 66%, $445, validité 3 ans)
4. **Comparatif** - Tableau comparatif des formations
5. **Pourquoi nous** - Avantages (formateurs certifiés, garantie de réussite)
6. **CTA** - Appel à l'action vers contact

### Simulateur de Projet

Le simulateur permet au client de :
- Choisir la taille du cluster (Starter, Standard, Enterprise)
- Ajouter des options BUILD (multi-cloud, GitOps, Service Mesh, CI/CD)
- Sélectionner le niveau de support RUN (Essentiel, Standard, Premium)
- Configurer les astreintes
- Définir le nombre d'applications à déployer
- Choisir un forfait annuel DEPLOY
- Ajouter des journées de formation

Le récapitulatif affiche :
- Détail des coûts par section
- Total estimé HT
- Liste des services inclus

## Déploiement

### Option 1 : Hébergement statique
Le site est 100% statique (HTML/CSS/JS), compatible avec :
- GitHub Pages
- Netlify
- Vercel
- OVH Web Hosting
- Tout serveur web (Apache, Nginx)

### Option 2 : Intégration CMS
Pour le formulaire de contact fonctionnel, options :
- Formspree (gratuit jusqu'à 50 soumissions/mois)
- Netlify Forms
- Backend custom (Node.js, PHP)

## Personnalisation

### Logo
Remplacer le logo texte par une image :
```html
<a href="#" class="logo">
    <img src="images/logo.png" alt="AKOUENDY">
</a>
```

### Couleurs
Modifier les variables CSS dans `css/styles.css` :
```css
:root {
    --color-primary: #326CE5;       /* Bleu Kubernetes */
    --color-secondary: #00D1B2;     /* Accent */
    --color-dark: #1a1a2e;
    /* ... */
}
```

### Formulaire de contact
Remplacer l'action du formulaire par votre endpoint :
```html
<form class="contact-form" action="https://votre-endpoint.com" method="POST">
```

## À compléter

1. **SIRET** - Ajouter le numéro SIRET dans le footer
2. **Logo** - Ajouter le logo AKOUENDY dans `images/`
3. **Formulaire** - Connecter à un backend pour l'envoi d'emails
4. **Analytics** - Ajouter Google Analytics ou Plausible
5. **Mentions légales** - Ajouter page mentions légales / CGV

## Optimisations futures

- [ ] Ajouter favicon
- [ ] Minifier CSS/JS pour la production
- [ ] Ajouter page mentions légales
- [ ] Intégrer Calendly pour la prise de RDV
- [ ] Ajouter témoignages clients
- [ ] Blog technique (optionnel)
