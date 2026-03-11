# Modifications Site DoveAIA Cloud — Ajout Azure

## 1. Meta tags (SEO)

### Fichier : `index.html` lignes 6-17

**Avant :**
```html
<meta name="description" content="Infogérance Kubernetes professionnelle en France. Build, Run, Deploy de clusters Kubernetes. Support 24/7, CI/CD, GitOps. Devis gratuit.">
<meta name="keywords" content="kubernetes, infogérance, devops, cluster kubernetes, docker, CI/CD, GitOps, France, cloud native, managed kubernetes">
```

**Après :**
```html
<meta name="description" content="Expert Kubernetes & Azure en France. Infrastructure cloud clé en main : AKS, migration Azure, infogérance. Support 24/7, CI/CD, GitOps. Devis gratuit.">
<meta name="keywords" content="kubernetes, azure, AKS, infogérance, devops, cluster kubernetes, migration azure, cloud native, France, managed kubernetes, microsoft azure">
```

---

## 2. Titre et Hero Section

### Fichier : `index.html` lignes 32-34 (logo)

**Avant :**
```html
<span class="logo-text">DOVEAIA</span>
<span class="logo-subtitle">Kubernetes Expert</span>
```

**Après :**
```html
<span class="logo-text">DOVEAIA</span>
<span class="logo-subtitle">Kubernetes & Azure Expert</span>
```

### Fichier : `index.html` lignes 57-58 (hero)

**Avant :**
```html
<h1><span data-i18n="hero.title">Infogérance Kubernetes</span><br><span class="highlight" data-i18n="hero.subtitle">Build | Run | Deploy</span></h1>
<p class="hero-subtitle" data-i18n="hero.description">Experts Kubernetes en France. Nous construisons, exploitons et faisons évoluer vos clusters pour que vous puissiez vous concentrer sur votre métier.</p>
```

**Après :**
```html
<h1><span data-i18n="hero.title">Expert Kubernetes & Azure</span><br><span class="highlight" data-i18n="hero.subtitle">Infrastructure Cloud Clé en Main</span></h1>
<p class="hero-subtitle" data-i18n="hero.description">Spécialistes Kubernetes et Microsoft Azure en France. Nous construisons, migrons et gérons votre infrastructure cloud pour que vous puissiez vous concentrer sur votre métier.</p>
```

---

## 3. Nouvelle section Services Azure (après Services K8s)

### À ajouter après la section `</section>` des services (ligne ~149)

```html
<!-- Azure Services Section -->
<section id="azure" class="services azure-services">
    <div class="container">
        <h2 class="section-title">Services Azure</h2>
        <p class="section-subtitle">Expertise Microsoft Azure pour moderniser votre infrastructure</p>

        <div class="services-grid">
            <!-- Migration Azure -->
            <article class="service-card">
                <div class="service-icon build-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                </div>
                <h3>Migration Azure</h3>
                <p class="service-tagline">On-premise vers le cloud</p>
                <ul class="service-features">
                    <li>Audit de l'existant</li>
                    <li>Plan de migration</li>
                    <li>Migration VMs, données, apps</li>
                    <li>Optimisation des coûts</li>
                    <li>Formation équipes</li>
                    <li>Support post-migration</li>
                </ul>
                <p class="service-price">À partir de <strong>5 000 € HT</strong></p>
            </article>

            <!-- AKS -->
            <article class="service-card featured">
                <div class="service-badge">Populaire</div>
                <div class="service-icon run-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                    </svg>
                </div>
                <h3>AKS Clé en Main</h3>
                <p class="service-tagline">Kubernetes managé sur Azure</p>
                <ul class="service-features">
                    <li>Cluster AKS production-ready</li>
                    <li>Azure Container Registry</li>
                    <li>Monitoring avec Azure Monitor</li>
                    <li>CI/CD Azure DevOps / GitHub</li>
                    <li>Sécurité & RBAC</li>
                    <li>Documentation complète</li>
                </ul>
                <p class="service-price">À partir de <strong>8 000 € HT</strong></p>
            </article>

            <!-- Landing Zone -->
            <article class="service-card">
                <div class="service-icon deploy-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <line x1="3" y1="9" x2="21" y2="9"/>
                        <line x1="9" y1="21" x2="9" y2="9"/>
                    </svg>
                </div>
                <h3>Azure Landing Zone</h3>
                <p class="service-tagline">Fondations cloud solides</p>
                <ul class="service-features">
                    <li>Architecture multi-subscription</li>
                    <li>Gouvernance & policies</li>
                    <li>Réseau hub & spoke</li>
                    <li>Sécurité (Defender, Sentinel)</li>
                    <li>Gestion des identités (Entra ID)</li>
                    <li>Infrastructure as Code</li>
                </ul>
                <p class="service-price">À partir de <strong>10 000 € HT</strong></p>
            </article>
        </div>
    </div>
</section>
```

---

## 4. Navigation — Ajouter lien Azure

### Fichier : `index.html` ligne 36-41

**Avant :**
```html
<ul class="nav-links">
    <li><a href="#services" data-i18n="nav.services">Services</a></li>
    <li><a href="#tarifs" data-i18n="nav.pricing">Tarifs</a></li>
```

**Après :**
```html
<ul class="nav-links">
    <li><a href="#services" data-i18n="nav.services">Kubernetes</a></li>
    <li><a href="#azure">Azure</a></li>
    <li><a href="#tarifs" data-i18n="nav.pricing">Tarifs</a></li>
```

---

## 5. Section Technologies — Mettre Azure en avant

### Fichier : `index.html` lignes 893-901 (Cloud Providers)

**Avant :**
```html
<div class="tech-category">
    <h4 data-i18n="technologies.categories.cloud">Cloud Providers</h4>
    <div class="tech-tags">
        <span>Azure</span>
        <span>AWS</span>
        <span>GCP</span>
        <span>OVHcloud</span>
        <span>On-premise</span>
    </div>
</div>
```

**Après :**
```html
<div class="tech-category">
    <h4 data-i18n="technologies.categories.cloud">Cloud Providers</h4>
    <div class="tech-tags">
        <span class="tech-featured">Azure (Spécialité)</span>
        <span>AWS</span>
        <span>GCP</span>
        <span>OVHcloud</span>
        <span>On-premise</span>
    </div>
</div>
```

### Ajouter une nouvelle catégorie Azure après "Cloud Providers"

```html
<div class="tech-category">
    <h4>Services Azure</h4>
    <div class="tech-tags">
        <span>AKS</span>
        <span>Azure DevOps</span>
        <span>Container Registry</span>
        <span>Azure Monitor</span>
        <span>Key Vault</span>
        <span>Entra ID</span>
        <span>App Service</span>
        <span>Azure Functions</span>
    </div>
</div>
```

---

## 6. CSS — Style pour tech-featured

### Fichier : `css/styles.css` (ajouter)

```css
.tech-tags .tech-featured {
    background: linear-gradient(135deg, #0078d4, #00bcf2);
    color: white;
    font-weight: 600;
}

.azure-services {
    background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
}

.azure-services .service-card.featured {
    border-color: #0078d4;
}

.azure-services .service-badge {
    background: #0078d4;
}
```

---

## 7. Footer — Ajouter Azure

### Fichier : `index.html` lignes 1058-1065

**Avant :**
```html
<div class="footer-links">
    <h4 data-i18n="footer.services">Services</h4>
    <ul>
        <li><a href="#services">BUILD</a></li>
        <li><a href="#services">RUN</a></li>
        <li><a href="#services">DEPLOY</a></li>
        <li><a href="training.html" data-i18n="nav.training">Formations</a></li>
    </ul>
</div>
```

**Après :**
```html
<div class="footer-links">
    <h4 data-i18n="footer.services">Services</h4>
    <ul>
        <li><a href="#services">Kubernetes</a></li>
        <li><a href="#azure">Azure</a></li>
        <li><a href="#tarifs">Tarifs</a></li>
        <li><a href="training.html" data-i18n="nav.training">Formations</a></li>
    </ul>
</div>
```

---

## 8. Title de la page

### Fichier : `index.html` ligne 17

**Avant :**
```html
<title>Infogérance Kubernetes France | Build, Run, Deploy | DOVEAIA</title>
```

**Après :**
```html
<title>Expert Kubernetes & Azure France | Infrastructure Cloud | DOVEAIA</title>
```

---

## 9. Open Graph

### Fichier : `index.html` lignes 13-15

**Avant :**
```html
<meta property="og:title" content="Infogérance Kubernetes | DOVEAIA">
<meta property="og:description" content="Experts Kubernetes en France. Construction, exploitation et déploiement de clusters Kubernetes pour votre production.">
```

**Après :**
```html
<meta property="og:title" content="Expert Kubernetes & Azure | DOVEAIA">
<meta property="og:description" content="Spécialistes Kubernetes et Microsoft Azure en France. Infrastructure cloud clé en main pour votre production.">
```

---

## Résumé des modifications

| Section | Modification |
|---------|-------------|
| Meta/SEO | Ajouter Azure dans description et keywords |
| Logo subtitle | "Kubernetes Expert" → "Kubernetes & Azure Expert" |
| Hero | Nouveau titre et description |
| Navigation | Ajouter lien "Azure" |
| Nouvelle section | Services Azure (Migration, AKS, Landing Zone) |
| Technologies | Mettre Azure en avant + nouvelle catégorie services |
| CSS | Styles pour badges Azure |
| Footer | Ajouter Azure |
| Title | Inclure Azure |

---

## Prochaines étapes

1. [ ] Appliquer les modifications au HTML
2. [ ] Ajouter le CSS
3. [ ] Tester le rendu
4. [ ] Mettre à jour les traductions (i18n) si nécessaire
5. [ ] Déployer sur cloud.doveaia.com

---

*Document généré le 2025-02-01*
