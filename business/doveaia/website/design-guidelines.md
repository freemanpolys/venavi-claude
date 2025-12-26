# Design Guidelines Doveaia

**Identité Visuelle & Charte Graphique**
*Version 1.0 - Décembre 2024*

---

## 1. Positionnement Visuel

### Personnalité de la Marque

**Attributs** :
- **Technique** : Expertise DevOps, IA, Azure
- **Fiable** : Production-ready, sécurité, conformité
- **Moderne** : Tech stack actuel, innovation
- **Accessible** : B2B sans jargon inutile

**Ton Visuel** :
- Professionnel mais pas corporate lourd
- Tech mais pas geek ésotérique
- Moderne mais pas startup "too cool"
- Confiance mais pas rigide

**Inspirations** :
- Vercel (moderne, épuré, tech)
- Stripe (professionnel, clair, confiance)
- Azure Docs (technique, accessible)

---

## 2. Palette de Couleurs

### Couleurs Principales

**Primaire : Bleu Azure (Lien Microsoft/Azure)**
- `#0078D4` (Azure Blue)
- Usage : CTA, liens, highlights
- Symbolise : Technologie, confiance, Microsoft ecosystem

**Secondaire : Bleu Foncé (Profondeur)**
- `#003D5C` (Dark Blue)
- Usage : Titres, texte important, footer
- Symbolise : Expertise, sérieux, profondeur technique

**Accent : Vert Validation**
- `#10B981` (Success Green)
- Usage : Checkmarks, success states, trust indicators
- Symbolise : Validation, production ready, succès

### Couleurs Neutres

**Gris Foncé (Texte Principal)**
- `#1F2937` (Gray 900)
- Usage : Corps de texte, paragraphes

**Gris Moyen (Texte Secondaire)**
- `#6B7280` (Gray 500)
- Usage : Sous-titres, descriptions, labels

**Gris Clair (Backgrounds)**
- `#F9FAFB` (Gray 50)
- Usage : Sections alternées, cards backgrounds

**Blanc**
- `#FFFFFF`
- Usage : Background principal, cards

### Couleurs Système

**Warning** : `#F59E0B` (Amber 500) - Alertes non-critiques
**Error** : `#EF4444` (Red 500) - Erreurs, urgent
**Info** : `#3B82F6` (Blue 500) - Informations, tooltips

---

## 3. Typographie

### Font Principale : Inter

**Raisons** :
- Lisibilité excellente (web & mobile)
- Moderne sans être "designey"
- Google Fonts (gratuit, CDN rapide)
- Variantes : 400, 500, 600, 700

**Usage** :
- Headings : Inter 600 (Semi-Bold) ou 700 (Bold)
- Body text : Inter 400 (Regular)
- Emphasis : Inter 500 (Medium)

**Alternatives** :
- Primary : **Inter**
- Fallback : -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

### Font Code : Fira Code

**Raisons** :
- Lisibilité code (ligatures)
- Monospace professionnel
- Utilisé par devs (crédibilité)

**Usage** :
- Code snippets
- Exemples techniques
- Commandes CLI

---

## 4. Hiérarchie Typographique

### Desktop

**H1 (Hero Titles)**
- Font : Inter 700
- Size : 48px (3rem)
- Line height : 1.2
- Color : `#1F2937`
- Usage : Titre principal homepage

**H2 (Section Titles)**
- Font : Inter 600
- Size : 36px (2.25rem)
- Line height : 1.3
- Color : `#1F2937`
- Usage : Titres sections principales

**H3 (Subsection Titles)**
- Font : Inter 600
- Size : 24px (1.5rem)
- Line height : 1.4
- Color : `#003D5C`
- Usage : Sous-titres, cards headers

**H4 (Card Titles)**
- Font : Inter 600
- Size : 18px (1.125rem)
- Line height : 1.5
- Color : `#1F2937`

**Body Text**
- Font : Inter 400
- Size : 16px (1rem)
- Line height : 1.6
- Color : `#6B7280`

**Small Text**
- Font : Inter 400
- Size : 14px (0.875rem)
- Line height : 1.5
- Color : `#9CA3AF`
- Usage : Captions, footnotes

### Mobile

**Réduction -20%** :
- H1 : 38px
- H2 : 28px
- H3 : 20px
- Body : 16px (inchangé pour lisibilité)

---

## 5. Espacement & Grille

### Système d'Espacement (Tailwind-like)

**Base : 4px (0.25rem)**

Multiplicateurs :
- 1 = 4px
- 2 = 8px
- 3 = 12px
- 4 = 16px
- 6 = 24px
- 8 = 32px
- 12 = 48px
- 16 = 64px
- 20 = 80px
- 24 = 96px

**Usage** :
- Padding cards : 24px (6)
- Margin sections : 64px (16) desktop, 48px (12) mobile
- Gap grid : 24px (6)

### Grille Layout

**Desktop** :
- Max-width : 1280px
- Padding sides : 48px
- Grid : 12 colonnes
- Gap : 24px

**Tablet** :
- Max-width : 768px
- Padding sides : 32px
- Grid : 8 colonnes

**Mobile** :
- Max-width : 375-428px
- Padding sides : 16px
- Grid : 4 colonnes

---

## 6. Composants UI

### Boutons

**CTA Principal (Primary)**
- Background : `#0078D4`
- Color : White
- Padding : 12px 24px
- Border-radius : 8px
- Font : Inter 600, 16px
- Hover : Background `#005A9E` (darker)
- Shadow : 0px 4px 6px rgba(0, 0, 0, 0.1)

**CTA Secondaire (Secondary)**
- Background : Transparent
- Border : 2px solid `#0078D4`
- Color : `#0078D4`
- Padding : 12px 24px
- Border-radius : 8px
- Hover : Background `#F0F9FF` (light blue)

**CTA Tertiaire (Ghost)**
- Background : Transparent
- Color : `#6B7280`
- Padding : 12px 24px
- Hover : Color `#0078D4`

### Cards

**Carte Standard**
- Background : White
- Border : 1px solid `#E5E7EB`
- Border-radius : 12px
- Padding : 24px
- Shadow : 0px 1px 3px rgba(0, 0, 0, 0.1)
- Hover : Shadow 0px 4px 12px rgba(0, 0, 0, 0.15)

**Carte Highlight (Offre recommandée)**
- Border : 2px solid `#0078D4`
- Shadow : 0px 4px 12px rgba(0, 120, 212, 0.2)
- Badge : "Recommandé" (coin supérieur droit)

### Icons

**Style** :
- Outline (pas filled)
- Stroke width : 2px
- Size : 24px (standard), 32px (large), 16px (small)

**Librairie Recommandée** :
- Heroicons (MIT, Tailwind ecosystem)
- Feather Icons (alternative)

**Couleur** :
- Default : `#6B7280`
- Hover : `#0078D4`
- Active : `#003D5C`

### Badges

**Trust Badge (RGPD, Azure Partner)**
- Background : `#F0F9FF`
- Border : 1px solid `#0078D4`
- Color : `#0078D4`
- Padding : 4px 12px
- Border-radius : 16px (pill)
- Font : Inter 600, 12px

**Status Badge (Nouveau, Populaire)**
- Background : `#10B981`
- Color : White
- Padding : 4px 8px
- Border-radius : 4px
- Font : Inter 600, 11px uppercase

---

## 7. Imagery & Visuals

### Style Illustrations

**Type** :
- Isométrique moderne (agents IA, pipelines, Azure infra)
- Flat design avec profondeur (gradients subtils)
- Pas de 3D réaliste (trop lourd)

**Palette Illustrations** :
- Primaire : Bleus (`#0078D4`, `#003D5C`)
- Accents : Vert (`#10B981`), Violet (`#8B5CF6`)
- Backgrounds : Gris clair (`#F9FAFB`)

**Sources** :
- Undraw.co (customisable, gratuit)
- DrawKit (premium, 29$)
- Illustration personnalisée (Fiverr 50-200€)

### Photos

**Style** :
- Professionnelles mais pas stock photos génériques
- Focus : Data centers, développeurs au travail, dashboards
- Éviter : Poignées de main corporate, sourires forcés

**Sources** :
- Unsplash (gratuit, haute qualité)
- Pexels (gratuit)
- Burst Shopify (gratuit)

**Traitement** :
- Overlay bleu subtil (`#0078D4` opacity 10-20%)
- Gradient overlay (dark bottom pour texte blanc)

### Vidéos

**Hero Video** (optionnel) :
- Loop 10-15 sec
- Thème : Agents IA en action, pipelines CI/CD, dashboards
- Muet avec option son
- Compression WebM + MP4 fallback

---

## 8. Animations & Interactions

### Principes

**Subtle & Fast** :
- Durée : 150-300ms
- Easing : ease-in-out
- Pas d'animations "wow" inutiles

### Animations Clés

**Hover Boutons**
```css
transition: all 0.2s ease-in-out;
transform: translateY(-2px);
box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
```

**Hover Cards**
```css
transition: all 0.3s ease-in-out;
transform: translateY(-4px);
box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
```

**Scroll Reveal** (sections apparaissent au scroll)
- Fade in + Translate Y (20px)
- Durée : 400ms
- Décalage entre éléments : 100ms

**Micro-interactions**
- Checkbox checked : Scale + Checkmark animate
- Form error : Shake horizontal (2px, 3 fois)
- Success message : Fade in + Slide down

---

## 9. Responsive Design

### Breakpoints

- **Mobile** : < 640px
- **Tablet** : 640px - 1024px
- **Desktop** : > 1024px
- **Large Desktop** : > 1280px

### Approche

**Mobile-First** :
- Développer d'abord mobile
- Puis enrichir pour desktop

**Adaptations Mobiles** :
- Navigation : Hamburger menu
- CTA : Sticky bottom (toujours visible)
- Grids : 1 colonne (vs 2-3 desktop)
- Hero : Image en haut, texte en bas
- Formulaires : Full width inputs

---

## 10. Accessibilité (A11y)

### Contraste

**WCAG 2.1 Level AA** :
- Texte normal : Ratio 4.5:1 minimum
- Texte large (> 18px) : Ratio 3:1 minimum
- CTA : Ratio 4.5:1 minimum

**Validation** :
- `#0078D4` sur White : ✅ 4.54:1 (OK)
- `#003D5C` sur White : ✅ 10.71:1 (Excellent)
- `#6B7280` sur White : ✅ 4.68:1 (OK)

### Keyboard Navigation

- Tous les CTAs accessibles au clavier (Tab)
- Focus visible (outline bleu `#0078D4`)
- Skip to main content link (invisible mais accessible)

### Screen Readers

- Alt text descriptif images
- ARIA labels boutons icons
- Semantic HTML (nav, main, section, article)

### Motion

- Respecter prefers-reduced-motion
- Option désactiver animations

---

## 11. Performance

### Images

**Format** :
- WebP (modern browsers)
- JPEG fallback (old browsers)
- PNG pour logos avec transparence

**Compression** :
- Quality 85% (balance qualité/poids)
- Responsive images (srcset)
- Lazy loading (loading="lazy")

**Sizes** :
- Hero : 1920x1080 max
- Cards : 800x600 max
- Thumbnails : 400x300 max

### Fonts

**Optimisation** :
- Preload Inter (display=swap)
- Subset fonts (latin uniquement)
- Variable fonts si compatible

### CSS/JS

- Minification
- Critical CSS inline
- Defer non-critical JS
- Tree shaking (Tailwind purge)

---

## 12. Exemples de Sections

### Hero Section

```
[Background gradient: White → Gray 50]

[Logo Doveaia]  [Nav: Offres | Cas d'Usage | Ressources | À Propos]  [CTA: Audit Gratuit]

                    ╔═══════════════════════════════════════╗
                    ║   Vos Agents IA en Production,       ║
                    ║        Pas en Démo                    ║
                    ║                                       ║
                    ║  Nous industrialisons vos agents IA  ║
                    ║  sur Azure AI Foundry avec LLMOps    ║
                    ╚═══════════════════════════════════════╝

          [Bouton: Audit IA Gratuit]  [Bouton: Voir nos offres]

        ✓ 5 clients en production  ✓ 0 POC abandonné  ✓ 100% Azure France

                    [Illustration: Agent IA + Azure + CI/CD]
```

### Offres Section

```
                ╔═══════════════════════════════════════════════╗
                ║  3 Offres Packagées, De la Preuve            ║
                ║       de Valeur à la Plateforme               ║
                ╚═══════════════════════════════════════════════╝

┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│   STARTER       │  │   SCALE ⭐      │  │   ENTERPRISE    │
│                 │  │ [Recommandé]    │  │                 │
│  Premier agent  │  │ Multi-agents    │  │ Plateforme      │
│  1 source       │  │ 3-5 sources     │  │ Illimité        │
│                 │  │                 │  │                 │
│  5-10k€         │  │  35-45k€        │  │  Sur devis      │
│                 │  │                 │  │                 │
│ [Démarrer]      │  │ [Démarrer]      │  │ [Contacter]     │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

---

## 13. Checklist Design

### Avant Production

- [ ] Palette couleurs définie et documentée
- [ ] Fonts chargées et testées (Inter + Fira Code)
- [ ] Composants UI créés (boutons, cards, badges)
- [ ] Icons library intégrée (Heroicons)
- [ ] Responsive testé (mobile, tablet, desktop)
- [ ] Accessibilité validée (contraste, keyboard, screen readers)
- [ ] Performance optimisée (Lighthouse > 90)
- [ ] Animations testées (hover, scroll reveal)
- [ ] Images compressées (WebP + JPEG fallback)
- [ ] SEO on-page (meta, alt text, semantic HTML)

---

## 14. Outils Recommandés

**Design** :
- Figma (mockups, prototypes)
- Coolors.co (palette generator)
- Contrast Checker (a11y)

**Développement** :
- Tailwind CSS (utility-first CSS)
- Headless UI (composants accessibles)
- Framer Motion (animations React)

**Testing** :
- Lighthouse (performance)
- WAVE (accessibilité)
- BrowserStack (cross-browser)

**Assets** :
- Undraw.co (illustrations)
- Unsplash (photos)
- Heroicons (icons)

---

**Document créé le 26/12/2024**
**Prochaine mise à jour** : Après feedback utilisateurs et A/B testing
