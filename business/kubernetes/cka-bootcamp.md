---
tags: type/offre-commerciale
aliases:
lead: Offre Bootcamp CKA - Préparation à la Certification Kubernetes Administrator
visual: "![[logo-akouendy.png]]"
template-type: Offre Commerciale
template-version: "1.0"
created: 2026-03-03
updated: 2026-03-03
---

![[logo-akouendy.png|center]]

---

# Bootcamp CKA — Certified Kubernetes Administrator
## Devenez certifié Kubernetes en 6 semaines

---

##### <center>Par James Kokou GAGLO</center>
##### <center>Expert Cloud & Kubernetes</center>

| Version | Date          | Commentaires     |
| ------- | :-----------: | ---------------- |
| 1.0     | 3 Mars 2026   | Version initiale |

---

## 1. Pourquoi ce bootcamp ?

La certification **CKA (Certified Kubernetes Administrator)** délivrée par la **CNCF / Linux Foundation** est la référence mondiale pour valider les compétences d'administration Kubernetes. Elle est exigée par de plus en plus d'entreprises et augmente le TJM de **15 à 25%** pour les freelances DevOps/SRE.

**Ce bootcamp n'est pas une formation classique de 4 jours.** C'est un parcours intensif de **6 semaines** combinant vidéos pré-enregistrées, sessions live hebdomadaires et labs pratiques pour vous amener au niveau de l'examen avec un taux de réussite maximal.

### L'examen CKA en bref

| Critère | Détail |
|---------|--------|
| **Format** | En ligne, supervisé, 100% pratique (aucun QCM) |
| **Durée** | 2 heures |
| **Score de passage** | 66% |
| **Version Kubernetes** | v1.34 |
| **Validité** | 3 ans |
| **Prix de l'examen** | $445 (≈ 410 €) |
| **Tentatives** | 2 tentatives incluses à l'inscription |

---

## 2. Programme du bootcamp

Le programme couvre les **5 domaines officiels** du syllabus CKA 2025/2026, avec leur pondération à l'examen.

### Semaine 1 — Fondamentaux & Architecture Cluster (25% de l'examen)

**Domaine : Cluster Architecture, Installation & Configuration**

| Thème | Contenu |
|-------|---------|
| Architecture Kubernetes | Control-plane, etcd, kubelet, kube-proxy, Container Runtime |
| Installation avec kubeadm | Bootstrap d'un cluster multi-nœuds from scratch |
| Haute disponibilité | Control-plane HA, stratégies de réplication etcd |
| RBAC | Rôles, ClusterRoles, Bindings, ServiceAccounts |
| Upgrade de cluster | Procédure de mise à jour kubeadm step-by-step |

**Lab pratique :** Déployer un cluster Kubernetes HA avec kubeadm sur des VMs

### Semaine 2 — Workloads & Scheduling (15% de l'examen)

**Domaine : Workloads & Scheduling**

| Thème | Contenu |
|-------|---------|
| Pods, ReplicaSets, Deployments | Cycle de vie, stratégies de déploiement |
| Rolling updates & Rollbacks | Mise à jour progressive, retour arrière |
| ConfigMaps & Secrets | Injection de configuration, gestion des secrets |
| Autoscaling | HPA, requests & limits, LimitRanges, ResourceQuotas |
| Scheduling avancé | Node affinity, taints & tolerations, Pod topology |
| DaemonSets & StatefulSets | Cas d'usage et configuration |

**Lab pratique :** Déployer une application multi-tier avec scaling automatique

### Semaine 3 — Services & Networking (20% de l'examen)

**Domaine : Services & Networking**

| Thème | Contenu |
|-------|---------|
| Modèle réseau Kubernetes | Communication Pod-to-Pod, CNI |
| Services | ClusterIP, NodePort, LoadBalancer, ExternalName |
| Network Policies | Isolation réseau, règles ingress/egress |
| Ingress & Gateway API | Configuration Ingress Controller, migration vers Gateway API |
| CoreDNS | Résolution DNS interne, dépannage DNS |
| kube-proxy | Modes iptables, IPVS |

**Lab pratique :** Configurer le networking complet d'une application avec Network Policies et Gateway API

### Semaine 4 — Storage (10% de l'examen)

**Domaine : Storage**

| Thème | Contenu |
|-------|---------|
| Volumes | emptyDir, hostPath, types de volumes |
| Persistent Volumes & Claims | PV, PVC, cycle de vie |
| Storage Classes | Provisioning dynamique, reclaim policies |
| Access Modes | RWO, ROX, RWX |
| CSI Drivers | Interface Container Storage |

**Lab pratique :** Mettre en place du stockage persistant avec provisioning dynamique

### Semaine 5 — Troubleshooting (30% de l'examen)

**Domaine : Troubleshooting — le plus gros coefficient**

| Thème | Contenu |
|-------|---------|
| Troubleshooting cluster | Diagnostiquer control-plane, etcd, kubelet |
| Troubleshooting nœuds | Node NotReady, ressources épuisées, kubelet |
| Troubleshooting réseau | Connectivité pods, services, DNS, Network Policies |
| Troubleshooting applications | CrashLoopBackOff, ImagePullBackOff, probes |
| Logs & monitoring | kubectl logs, events, describe, top |
| Outils de debug | kubectl debug, ephemeral containers, crictl |

**Lab pratique :** Scénarios de panne à diagnostiquer et résoudre en conditions d'examen

### Semaine 6 — Helm, Kustomize & Examens blancs

**Nouveautés syllabus 2025 + Préparation finale**

| Thème | Contenu |
|-------|---------|
| Helm | Charts, values, install, upgrade, rollback |
| Kustomize | Overlays, patches, bases |
| CRDs & Operators | Custom Resource Definitions, opérateurs |
| Examen blanc #1 | Simulation complète (2h, conditions réelles) |
| Examen blanc #2 | Simulation complète avec correction détaillée |
| Stratégies d'examen | Gestion du temps, raccourcis kubectl, navigation docs |

**Lab pratique :** 2 examens blancs complets avec debriefing en session live

---

## 3. Format du bootcamp

### Un format hybride optimisé pour l'apprentissage

| Composante | Détail |
|------------|--------|
| **Vidéos pré-enregistrées** | ~20h de contenu structuré, accessible 24/7 pendant 6 mois |
| **Sessions live hebdomadaires** | 4h/semaine (1 session de 4h ou 2 sessions de 2h) |
| **Groupe restreint** | Maximum 10 participants par cohorte |
| **Labs pratiques** | Environnements Kubernetes dédiés pour chaque participant |
| **Support continu** | Accès à un canal Slack/Discord privé pendant toute la durée |
| **Durée totale** | 6 semaines |

### Déroulement type d'une semaine

| Jour | Activité | Durée |
|------|----------|-------|
| Lundi → Mercredi | Visionnage des vidéos du module + exercices autonomes | ~3-4h |
| Jeudi ou Samedi | **Session live** : Q&A, labs guidés, corrections, approfondissements | 4h |
| Vendredi → Dimanche | Labs pratiques à faire en autonomie | ~3-4h |

### Prérequis participants

- Connaissances de base en Linux (ligne de commande, systemd, networking)
- Familiarité avec les conteneurs Docker
- Notions de base en YAML
- Un ordinateur avec connexion internet stable

---

## 4. Ce qui est inclus

| Inclus | Détail |
|--------|--------|
| **20h+ de vidéos** | Couvrant 100% du syllabus CKA 2025/2026 |
| **24h de sessions live** | 4h/semaine pendant 6 semaines |
| **Labs pratiques** | Environnements cloud pré-configurés |
| **2 examens blancs** | Simulation Killer.sh-style avec correction |
| **Support Slack/Discord** | Questions/réponses avec le formateur pendant 6 semaines |
| **Accès vidéos 6 mois** | Replay illimité après la fin du bootcamp |
| **Cheat sheets** | Fiches de révision pour chaque domaine |
| **Certificat de formation** | Attestation de suivi du bootcamp |

**Non inclus :**
- Le voucher d'examen CKA ($445 / ≈ 410 €) — à acheter directement sur training.linuxfoundation.org
- Les sessions Killer.sh (2 sessions incluses avec l'achat du voucher)

---

## 5. Tarification

### 5.1 Tarif par participant (B2C — inscription individuelle)

| Offre | Contenu | Tarif HT |
|-------|---------|----------|
| **Bootcamp CKA** | Programme complet 6 semaines (vidéos + live + labs) | **990 €** |
| **Bootcamp CKA + Voucher examen** | Programme complet + voucher CKA officiel | **1 350 €** |
| **Bootcamp CKA Premium** | Programme complet + voucher + 2h de coaching individuel | **1 590 €** |

**Tarifs préférentiels :**

| Réduction | Condition | Tarif HT |
|-----------|-----------|----------|
| **Early bird** | Inscription 30 jours avant le début | -15% |
| **Duo** | 2 inscriptions simultanées | -10% par personne |
| **Groupe 3+** | 3 inscriptions ou plus | -20% par personne |
| **Ancien participant** | Déjà suivi une formation AKOUENDY | -10% |

### 5.2 Tarif entreprise (B2B — cohorte privée)

Formation dédiée pour les équipes d'une même entreprise.

| Offre | Participants | Tarif HT |
|-------|-------------|----------|
| **Cohorte privée S** | Jusqu'à 5 participants | 4 500 € |
| **Cohorte privée M** | Jusqu'à 8 participants | 6 500 € |
| **Cohorte privée L** | Jusqu'à 10 participants | 8 000 € |

**Inclus dans les cohortes privées :**
- Programme adapté au contexte technique de l'entreprise
- Planning ajusté aux contraintes de l'équipe
- Rapport de progression individuel pour chaque participant
- Facturation sur devis avec bon de commande

### 5.3 Revenus estimés par cohorte (B2C)

| Scénario | Participants | Tarif unitaire | Revenu brut |
|----------|-------------|----------------|-------------|
| Cohorte minimale | 5 | 990 € | 4 950 € |
| Cohorte standard | 8 | 990 € | 7 920 € |
| Cohorte pleine | 10 | 990 € | 9 900 € |

---

## 6. TJM — Intervention pour plateformes de formation

Si le bootcamp est vendu via une plateforme tierce (école, organisme de formation, plateforme e-learning) et que j'interviens en tant que formateur expert.

### 6.1 Grille TJM formateur

| Type d'intervention | TJM HT |
|---------------------|--------|
| **Animation de sessions live** (4h = demi-journée) | 600 € |
| **Animation de sessions live** (journée complète 7h) | 1 100 € |
| **Création de contenu vidéo** (enregistrement + montage) | 1 200 € |
| **Conception pédagogique** (programme, exercices, labs) | 1 000 € |
| **Correction d'examens blancs / review** | 800 € |

### 6.2 Forfaits plateforme

| Forfait | Contenu | Tarif HT |
|---------|---------|----------|
| **Licence contenu seul** | Vidéos + supports, sans intervention live | 5 000 € / an |
| **Bootcamp clé en main** | Contenu + animation 6 semaines (1 cohorte) | 8 500 € |
| **Forfait annuel** | Contenu + animation de 4 cohortes / an | 28 000 € |

### 6.3 Conditions plateforme

- Les contenus restent la propriété intellectuelle d'AKOUENDY
- Licence d'utilisation non exclusive accordée à la plateforme
- Mise à jour du contenu incluse (1 mise à jour majeure / an)
- Mention obligatoire "Formation dispensée par James Kokou GAGLO — AKOUENDY"
- Droit de regard sur le pricing final proposé aux étudiants

---

## 7. Différenciateurs

| Avantage | Détail |
|----------|--------|
| **Formateur praticien** | Expert Kubernetes en activité, pas un formateur théorique |
| **Petit groupe** | Maximum 10 pour un suivi personnalisé |
| **100% pratique** | Labs sur de vrais clusters, pas de simulateurs limités |
| **Syllabus à jour** | Programme aligné sur le curriculum CKA 2025/2026 (Helm, Gateway API, CRDs) |
| **Support continu** | Pas seul entre les sessions — canal de discussion avec le formateur |
| **Flexibilité** | Vidéos à votre rythme + sessions live pour l'interaction |

---

## 8. Calendrier prévisionnel

| Cohorte | Début | Fin | Inscription avant |
|---------|-------|-----|-------------------|
| Cohorte #1 | À définir | — | — |
| Cohorte #2 | — | — | — |

**Fréquence cible :** 1 cohorte par mois (si demande suffisante)

---

## 9. Investissement formateur (coûts de production)

| Poste | Estimation |
|-------|------------|
| Enregistrement vidéos (~20h de contenu final) | 8-10 jours |
| Création des labs et exercices | 3-4 jours |
| Conception des examens blancs | 2 jours |
| Création des supports (slides, cheat sheets) | 2 jours |
| Mise en place infrastructure labs | 1-2 jours |
| **Total investissement initial** | **16-20 jours** |
| Animation par cohorte (6 semaines x 4h) | 6 demi-journées |
| Support Slack/Discord par cohorte | ~1h/jour |

---

## 10. Contact

|                 |                      |
| --------------- | -------------------- |
| **Société**     | AKOUENDY              |
| **Responsable** | James Kokou GAGLO    |
| **Email**       | jkgaglo@akouendy.com |
| **Téléphone**   | +33 7 49 62 49 89    |
| **Site web**    | www.doveaia.com      |

---

<center>

**Prêt à décrocher votre certification CKA ?**

Contactez-nous pour réserver votre place dans la prochaine cohorte.

jkgaglo@akouendy.com | +33 7 49 62 49 89

</center>

---

*Document du 3 mars 2026 — AKOUENDY - Tous droits réservés*
