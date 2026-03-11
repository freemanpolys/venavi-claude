# Workshop Landing Page Template - DoveAIA

> Template inspiré de workshop-openclaw.shubham-sharma.com
> Copier ce fichier et remplir les sections `[PLACEHOLDER]` pour chaque nouveau workshop.

---

## Référence visuelle

**Source** : [https://workshop-openclaw.shubham-sharma.com](https://workshop-openclaw.shubham-sharma.com)

**Capture complète** :

![Workshop OpenClaw - Page complète de référence](./workshop-openclaw-reference.png)

---

## Configuration

```yaml
workshop:
  titre: "[TITRE DU WORKSHOP]"
  date: "[JOUR] [DATE] · [HEURE]"
  duree: "[X] heures"
  prix_early_bird: "[XX]€"
  prix_normal: "[XXX]€"
  replay: true
  support_post_workshop: false
  url_reservation: "[URL_STRIPE_OU_LEMONSQUEEZY]"
```

---

## 1. NAVIGATION

```
[Logo DoveAIA]                    [Badge: Live · STATUS] [CTA: Réserver]
```

- Logo : DoveAIA Labs (ou sous-marque workshop)
- Badge statut : `Live`, `Complet`, `Replay disponible`
- CTA primaire : lien vers réservation

---

## 2. HERO SECTION

**Tag live** : `Live · [JOUR DATE] · [HEURE]`

**Titre principal** (1 ligne, impactful) :
> [VERBE D'ACTION] [SUJET] [PROMESSE CLAIRE]
>
> Exemple : "Déployez votre cluster Kubernetes en production en 2h"

**Sous-titre** (1-2 lignes, clarification) :
> [Détail technique + contexte + durée + niveau requis]
>
> Exemple : "Installation, configuration et sécurisation — de zéro à prod sur Azure AKS, pas à pas, en live"

**CTA primaire** :
> `Réserver au prix early bird — [XX]€`

**CTA secondaire** :
> `Voir le programme`

**4 Stats crédibilité** :

| Stat | Valeur |
|------|--------|
| [Métrique audience] | [Ex: X abonnés YouTube / newsletter] |
| [Nombre modules] | [Ex: 6 modules live] |
| [Niveau requis] | [Ex: Zéro prérequis / Niveau intermédiaire] |
| [Accès replay] | [Ex: Replay à vie inclus] |

---

## 3. SECTION RESULTATS

**Intro** :
> "[VOTRE PHRASE D'ACCROCHE]. Pas une démo — votre [SUJET], sur votre infra."

**8 cas d'usage concrets** (avec icônes) :

| # | Cas d'usage | Description courte |
|---|-------------|-------------------|
| 1 | [Cas 1] | [1 ligne de description] |
| 2 | [Cas 2] | [1 ligne de description] |
| 3 | [Cas 3] | [1 ligne de description] |
| 4 | [Cas 4] | [1 ligne de description] |
| 5 | [Cas 5] | [1 ligne de description] |
| 6 | [Cas 6] | [1 ligne de description] |
| 7 | [Cas 7] | [1 ligne de description] |
| 8 | [Cas 8] | [1 ligne de description] |

**Note clé** :
> "Le module [XX] configure votre premier [LIVRABLE] en live"

---

## 4. SECTION PROGRAMME

**Titre** : "Installation complète, de zéro à opérationnel"

| Module | Titre | Description | Durée estimée |
|--------|-------|-------------|---------------|
| 01 | [Titre module] | [Ce qu'on fait + outils utilisés] | ~XX min |
| 02 | [Titre module] | [Ce qu'on fait + outils utilisés] | ~XX min |
| 03 | [Titre module] | [Ce qu'on fait + outils utilisés] | ~XX min |
| 04 | [Titre module] | [Ce qu'on fait + outils utilisés] | ~XX min |
| 05 | [Titre module] | [Ce qu'on fait + outils utilisés] | ~XX min |
| 06 | [Titre module] | [Ce qu'on fait + outils utilisés] | ~XX min |

**Encart avertissement** (optionnel, si sujet sensible) :
> "[SUJET] touche à [RISQUE] — une mauvaise config = [CONSEQUENCE]."
>
> Exemple : "Kubernetes en prod touche à votre infra — une mauvaise config = downtime et failles de sécurité."

---

## 5. SECTION FORMAT

| Détail | Valeur |
|--------|--------|
| Durée | [X] heures |
| Date | [Date complète] |
| Format | Live screen-sharing (pas de slides) |
| Replay | Accès à vie inclus |
| Note | État de la techno capturé en [mois année] |

---

## 6. SECTION COMPETENCES ACQUISES (Après le workshop)

**Titre** : "Ce que vous saurez faire après"

Liste des compétences (8 items) :

- [ ] [Compétence 1 — verbe d'action + résultat concret]
- [ ] [Compétence 2]
- [ ] [Compétence 3]
- [ ] [Compétence 4]
- [ ] [Compétence 5]
- [ ] [Compétence 6]
- [ ] [Compétence 7]
- [ ] [Compétence 8]

---

## 7. SECTION A PROPOS (Qui suis-je)

**Nom** : [VOTRE NOM]

**Photo** : [URL ou chemin]

**Bio courte** (3-4 lignes) :
> [Parcours pertinent pour ce workshop. Ex: ancien SRE chez X, Y années d'expérience, formateur...]

**Stats crédibilité** :

| Métrique | Valeur |
|----------|--------|
| [Audience 1] | [Nombre] |
| [Audience 2] | [Nombre] |
| [Expérience] | [Nombre] années |
| [Apprenants formés] | [Nombre]+ |

**Preuve sociale** (optionnel) :
> "[Citation ou stat virale — ex: vidéo à XXK vues]"

**Phrase perso** :
> "[Pourquoi je fais ce workshop — authenticité et connexion]"

---

## 8. SECTION TARIF

**Offre unique — Early Bird**

```
Prix barré : [XXX]€
Prix actuel : [XX]€
Type       : Paiement unique, accès à vie
```

**Inclus** :
- Session live de [X]h ([date, heure])
- Replay à vie
- [Bonus 1 — ex: liste de ressources vérifiées]
- [Bonus 2 — ex: session Q&A live]
- [Bonus 3 — ex: réduction partenaire]

**Non inclus** :
- [Ex: Support individuel post-workshop]

---

## 9. SECTION FAQ

| Question | Réponse |
|----------|---------|
| [Question 1 — niveau/prérequis] | [Réponse rassurante] |
| [Question 2 — coûts récurrents] | [Détail transparent des coûts] |
| [Question 3 — livrable concret] | [Ce qu'ils auront à la fin] |
| [Question 4 — replay] | [Politique de replay] |
| [Question 5 — pourquoi pas gratuit/YouTube] | [Valeur ajoutée du live] |
| [Question 6 — support après] | [Politique claire] |
| [Question 7 — remboursement] | [Politique] |

---

## 10. FOOTER

```
© [ANNEE] [NOM / MARQUE]
[Lien CGV] · [Lien Mentions légales] · [Lien Contact]
```

---

## NOTES DE DESIGN

### Palette de couleurs DoveAIA

```css
/* Adapter selon la charte DoveAIA */
--primary: #[COULEUR_PRIMAIRE];       /* CTA, accents */
--primary-hover: #[COULEUR_HOVER];
--bg-dark: #0a0a0a;                   /* Fond principal (dark mode) */
--bg-card: #1a1a1a;                   /* Fond des cartes */
--text-primary: #ffffff;
--text-secondary: #a0a0a0;
--warning: #f59e0b;                   /* Encarts avertissement */
--success: #10b981;                   /* Badges live, validations */
```

### Layout

- **Mobile-first** : breakpoint principal à 768px
- **Grille** : cartes modulaires en grid (2-4 colonnes desktop, 1 colonne mobile)
- **Animations** : fade-up staggeré sur le hero, hover scale sur les cartes
- **Typography** : titres bold sans-serif, corps regular, monospace pour les éléments techniques

### Stack technique suggéré

| Option | Tech | Notes |
|--------|------|-------|
| Simple | HTML/CSS/JS statique | Un seul fichier, déploiement Vercel/Netlify |
| Intermédiaire | Astro + Tailwind | SSG, rapide, composants réutilisables |
| Avancé | Next.js + Tailwind | Si besoin de paiement intégré, analytics avancés |

### Intégrations

- **Paiement** : Stripe Checkout ou Lemon Squeezy
- **Email** : Formulaire vers ConvertKit / Mailchimp / Resend
- **Analytics** : Plausible ou Fathom (RGPD-friendly)
- **Live** : Zoom / StreamYard / Google Meet (lien envoyé par email post-achat)

---

## CHECKLIST DE LANCEMENT

- [ ] Remplir tous les `[PLACEHOLDER]` de ce template
- [ ] Créer la page (HTML ou framework choisi)
- [ ] Configurer le paiement (Stripe/LemonSqueezy)
- [ ] Configurer l'email de confirmation post-achat
- [ ] Tester le parcours complet (achat → email → lien live)
- [ ] Configurer le domaine (ex: workshop.doveaia.com)
- [ ] Préparer le contenu du workshop (modules, démo)
- [ ] Planifier la promo (LinkedIn, newsletter, YouTube)
- [ ] Vérifier les CGV et mentions légales
- [ ] Tester sur mobile
