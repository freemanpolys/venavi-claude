# Comparatif Merchant of Record (MoR) - 2025

**Date**: 2026-01-29
**Objectif**: Choisir un MoR pour vendre du SaaS/produits digitaux

---

## TL;DR - Recommandations

| Profil | Recommandation |
|--------|----------------|
| Solo dev / MVP | **Polar** (4% + 0.40$, approbation rapide, dev-friendly) |
| **SaaS avec IA** | **Polar** (seul MoR vraiment IA-friendly) |
| SaaS établi (sans IA) | **Paddle** (robuste mais vérification longue) |
| Produits digitaux simples | **LemonSqueezy** (si pas pressé) |
| Gros volume | **FastSpring** (enterprise-grade) |
| Pas de clients encore | **Polar** ou **Stripe** (moins de friction) |

---

## Comparatif des frais

| Plateforme | Frais | MoR | Notes |
|------------|-------|-----|-------|
| **Polar** | 4% + 0.40$ | Oui | Le moins cher des MoR |
| **Paddle** | 5% + 0.50$ | Oui | Standard établi |
| **LemonSqueezy** | 5% + 0.50$ (+1.5% international) | Oui | Racheté par Stripe |
| **FastSpring** | 5.9% + 0.95$ (ou 8.9% flat) | Oui | Enterprise |
| **Gumroad** | 10% flat | Oui (depuis 01/2025) | Le plus cher |
| **Stripe** | 2.9% + 0.30$ | Non* | *MoR en beta privée (+3.5%) |

---

## Processus de validation - Le point critique

### LemonSqueezy

**Processus officiel:**
- Vérification identité (photo ID gouvernemental)
- Activation du store (KYC/KYB)
- Délai annoncé: 2-3 jours

**Réalité terrain (Trustpilot, Indie Hackers):**
- Délais réels: **1 semaine à 1 mois+**
- Rejets sans explication fréquents
- Support non-réactif depuis acquisition Stripe
- Demandes extensives: site web, réseaux sociaux, explication détaillée du business
- **Rejet si pas de client existant** rapporté par plusieurs utilisateurs
- Un utilisateur a attendu **3 semaines** sans réponse du support

**Ce qu'ils n'approuvent PAS:**
- Services (design, consulting...)
- Biens physiques
- Accès à groupes Telegram privés
- Produits sans fulfillment via leur plateforme

**Points positifs:**
- Une fois approuvé, ça fonctionne bien
- Interface simple et moderne
- Bons outils d'affiliation intégrés

> "They request a huge amount of data, detailed explanations, websites, social links, and business information, and after collecting everything, they suddenly reject applications."
> — Trustpilot review

---

### Paddle

**Processus officiel:**
- Phase 1: Inscription (15-20 min)
- Phase 2: Vérification site web (1-2 jours auto, 5-7 jours manuel)
- Phase 3: Vérification identité (2-3 jours)

**Réalité terrain (Indie Hackers, Dev.to):**
- Délais réels: **1 à 2+ semaines** pour les cas complexes
- Demandes répétées de documents
- Strict sur l'Acceptable Use Policy

**Ce qu'ils n'approuvent PAS:**
- Produits IA génératifs (considérés trop risqués)
- Plateformes d'apprentissage/certification
- Contenu adulte
- Industries régulées / high-risk

**Exigences obligatoires:**
- Email de domaine professionnel (pas Gmail/Outlook)
- Terms of Service + Privacy Policy sur le site
- Page contact avec email + téléphone
- Site web professionnel et complet

**Points positifs:**
- Plus robuste pour le B2B et les gros volumes
- Meilleure gestion des taxes internationales
- Support chargebacks inclus

> "Paddle annonce 3-5 jours, mais mon processus a dépassé 2 semaines avec des demandes répétées de documents pour une simple Delaware C-Corp."
> — Indie Hackers

---

### Polar

**Processus:**
- Vérification courte avant le premier payout
- Review complète: ~1 semaine max
- KYC standard

**Réalité terrain:**
- Processus réputé **plus simple et rapide**
- Plateforme jeune (2023) mais backing solide ($10M Accel en 2025)
- Focus développeurs / open-source

**Points positifs:**
- API excellente, UX moderne
- Open-source
- Frais les plus bas (4% + 0.40$)
- Équipe réactive

**Points négatifs:**
- Encore en développement (features manquantes)
- Pas de PayPal / BNPL
- Paiements carte uniquement (via Stripe Connect)
- Frais de dispute passés au marchand (15-30$/cas)

> "We switched to Polar because of their killer API, UX, and product. Also love that it's Open-Source."
> — Développeur sur X

---

### FastSpring

**Processus:**
- Non documenté publiquement
- Réputé plus enterprise-friendly

**Points positifs:**
- Acteur établi depuis 2005
- Très bon pour jeux vidéo et software desktop
- Support 24/7 multilingue
- 140+ devises, 70+ méthodes de paiement

**Points négatifs:**
- Frais plus élevés (5.9% + 0.95$)
- Interface moins moderne
- Orienté mid-to-large companies

---

### Gumroad

**Changement majeur (Janvier 2025):**
- Devient MoR (avant, les vendeurs étaient responsables des taxes)
- Frais augmentés à **10% flat**

**Implications:**
- Vendeurs avant 2025 peuvent avoir des obligations fiscales non déclarées
- Plateforme simpliste, pas adaptée au SaaS récurrent

**Points négatifs:**
- Frais très élevés
- Pas de gestion avancée des subscriptions
- Pas de features B2B

---

## Produits IA - Restrictions par plateforme

### Paddle - LE PLUS RESTRICTIF POUR L'IA

**Depuis septembre 2024, Paddle refuse les produits IA génératifs.**

Produits IA **INTERDITS** :
- Images générées par IA
- Face swaps / deepfakes
- Voice cloning / impersonation
- Chatbots NSFW
- Tout contenu généré par IA considéré "à risque"

**Pourquoi ?** Paddle assume le risque légal en tant que MoR. L'IA générative expose à :
- Violations de copyright
- Deepfakes malveillants
- Chargebacks élevés
- Risques réputationnels

**Conséquence :** Si ton SaaS utilise de l'IA générative (génération d'images, de texte, de voix...), **Paddle n'est probablement PAS une option**.

---

### LemonSqueezy - MODÉRÉ

Produits IA **explicitement interdits** :
- Chatbots NSFW (même via IA)
- Contenu sexuel généré par IA

Produits **dans une zone grise** :
- Outils marketing IA (certains refusés)
- SaaS IA général (au cas par cas)

**Conseil :** Contacte le support AVANT de postuler si ton produit utilise l'IA.

---

### Polar - LE PLUS OUVERT POUR L'IA

Produits IA **interdits** :
- Contenu adulte généré par IA
- Services médicaux IA (review plus stricte)

Produits IA **acceptés** :
- SaaS IA généralistes
- Outils de productivité IA
- API IA

**Polar est actuellement le MoR le plus friendly pour les SaaS IA** (hors contenu adulte).

---

### FastSpring - MODÉRÉ

- Pas de restrictions publiques spécifiques sur l'IA
- Au cas par cas selon le type de produit
- Plus flexible que Paddle pour les cas complexes

---

### Tableau récapitulatif IA

| Plateforme | SaaS IA général | Génération images | Chatbots | Voice AI |
|------------|-----------------|-------------------|----------|----------|
| **Polar** | ✅ OK | ✅ OK | ✅ OK (sauf NSFW) | ✅ OK |
| **LemonSqueezy** | ⚠️ Cas par cas | ⚠️ Cas par cas | ❌ NSFW interdit | ⚠️ Cas par cas |
| **FastSpring** | ✅ Probable | ⚠️ Cas par cas | ⚠️ Cas par cas | ⚠️ Cas par cas |
| **Paddle** | ❌ Refusé | ❌ Refusé | ❌ Refusé | ❌ Refusé |

**Ma reco pour SaaS IA : Polar** (ou Stripe direct si tu gères les taxes toi-même)

---

## Pas de clients ? Comment se faire approuver

### Le problème

Certains MoR (notamment LemonSqueezy) ont rejeté des demandes "parce qu'il n'y a pas de clients existants".

### Stratégies pour contourner ce blocage

#### 1. Montre une traction alternative

- **Waitlist** : "150 personnes inscrites sur la waitlist"
- **Beta users** : Même gratuits, ça compte
- **Followers réseaux sociaux** : Preuve d'audience
- **Communauté** : Discord, newsletter, YouTube

#### 2. Prépare une démo convaincante

- Vidéo Loom de 2-3 min montrant le produit
- Screenshots de l'interface
- Lien vers une version démo/sandbox

#### 3. Explique ta stratégie de lancement

Dans ta demande, inclus :
- "Lancement prévu le [date]"
- "Stratégie d'acquisition : [Product Hunt, SEO, ads...]"
- "Audience cible : [description précise]"

#### 4. Commence par les plateformes moins strictes

| Plateforme | Exige des clients ? |
|------------|---------------------|
| **Stripe** | Non |
| **Polar** | Non |
| **Paddle** | Non (mais exige un produit visible) |
| **LemonSqueezy** | Parfois (inconsistant) |

#### 5. Lance en "pre-order" ou "early access"

Certains MoR acceptent plus facilement si tu :
- Vends un accès anticipé à prix réduit
- Proposes une offre "lifetime deal" au lancement

### Template de message si refusé pour "pas de clients"

> "Merci pour votre retour. Je comprends votre préoccupation.
>
> Mon produit [nom] est actuellement en phase de pré-lancement avec :
> - [X] personnes sur la waitlist
> - [X] beta testers actifs
> - Lancement public prévu le [date]
>
> Voici une démo : [lien Loom]
>
> Ma stratégie d'acquisition : [Product Hunt + SEO + partenariats]
>
> Pouvez-vous reconsidérer ma demande ?"

---

## Matrice de décision

### Pour un MVP / Validation

**Recommandé: Polar ou Stripe direct**

- Polar: MoR, frais bas, approbation rapide
- Stripe: Pas MoR mais approbation quasi-instantanée, tu gères les taxes toi-même

### Pour SaaS avec IA (ton cas)

**Recommandé: Polar**

- Seul MoR vraiment ouvert aux produits IA
- Paddle refuse l'IA générative depuis sept 2024
- LemonSqueezy = zone grise, risque de rejet

**Alternative: Stripe direct**
- Pas MoR (tu gères TVA/taxes)
- Mais aucune restriction sur l'IA
- Approbation instantanée

### Pour scaler (5K+ MRR) - Sans IA

**Recommandé: Paddle**

- Les frais plus élevés sont compensés par la simplification fiscale
- Meilleur support B2B et invoicing
- ⚠️ Ne fonctionne PAS pour les produits IA

### Pour produits digitaux simples (ebooks, templates)

**Recommandé: LemonSqueezy** (si tu as le temps d'attendre l'approbation)

- Bonne UX pour les créateurs
- Affiliation intégrée

---

## Conseils pour l'approbation

### Général (tous les MoR)

1. **Prépare ton site avant de postuler**
   - Terms of Service
   - Privacy Policy
   - Page contact (email + téléphone)
   - Description claire du produit

2. **Utilise un email de domaine** (pas Gmail)

3. **Aie au moins un produit visible** sur ton site

4. **Si rejet**: demande une explication, corrige, re-postule

### LemonSqueezy spécifique

- Prépare une démo ou vidéo du produit
- Mets en avant tes réseaux sociaux
- Si tu n'as pas de clients, explique ta stratégie de lancement

### Paddle spécifique

- Vérifie que ton produit n'est PAS dans leur liste d'exclusion (AI générative!)
- Prépare des documents business (incorporation si applicable)
- Intègre en sandbox pendant que tu attends l'approbation live

---

## Alertes et risques

### LemonSqueezy + Stripe

Depuis le rachat par Stripe (juillet 2024):
- Roadmap publique supprimée
- Support dégradé selon les retours
- Incertitude sur l'avenir de la marque
- Stripe lance son propre MoR en beta

### Gumroad

Si tu as vendu via Gumroad avant janvier 2025:
- Tu pourrais avoir des obligations fiscales non déclarées
- Gumroad n'était PAS MoR avant cette date

---

## Sources

### Comparatifs généraux
- [LemonSqueezy vs Paddle - Boathouse](https://www.boathouse.co/knowledge/lemon-squeezy-vs-paddle-which-billing-solution-is-better-for-you)
- [Paddle Alternatives 2025 - Affonso](https://affonso.io/blog/paddle-alternatives-for-saas)
- [Polar Review - Dodo Payments](https://dodopayments.com/blogs/polar-sh-review)
- [Payment Providers Comparison - Supastarter](https://supastarter.dev/blog/saas-payment-providers-stripe-lemonsqueezy-polar-creem-comparison)
- [MoR Platforms for Freelancers - Ruul](https://ruul.io/blog/top-merchant-of-record-platforms-for-freelancers)

### Retours d'expérience validation
- [LemonSqueezy Reviews - Trustpilot](https://www.trustpilot.com/review/lemonsqueezy.com)
- [Poor Paddle Verification - Indie Hackers](https://www.indiehackers.com/post/poor-paddle-business-verification-experience-should-we-try-lemon-squeezy-3b11796b3a)
- [Paddle Approval Guide - Dev.to](https://dev.to/danteisshipping/2025-how-to-get-your-paddle-account-approved-in-48-hours-277a)
- [Do You Need to Incorporate for Paddle - Boathouse](https://www.boathouse.co/paddle-video-series-episode/3-do-you-need-to-incorporate-to-sell-with-paddle)

### Policies IA et restrictions
- [Paddle AUP Update GenAI - Boathouse](https://www.boathouse.co/paddle-video-series-episode/34-aup-update-gen-ai)
- [Paddle Acceptable Use Policy](https://www.paddle.com/help/start/intro-to-paddle/what-am-i-not-allowed-to-sell-on-paddle)
- [LemonSqueezy Prohibited Products](https://docs.lemonsqueezy.com/help/getting-started/prohibited-products)
- [Polar Acceptable Use](https://docs.polar.sh/merchant-of-record/acceptable-use)
