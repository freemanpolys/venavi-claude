# Formation Préparation CKAD

**Certified Kubernetes Application Developer**

**Durée** : 4 jours (28 heures)
**Niveau** : Intermédiaire
**Prérequis** : Expérience pratique avec Kubernetes (équivalent Formation Fondamentaux)
**Tarif** : 2 500 € HT / participant (hors frais d'examen)

---

## À propos de la certification CKAD

La certification **CKAD** (Certified Kubernetes Application Developer) est délivrée par la **Linux Foundation** et la **CNCF**. Elle valide les compétences pour concevoir, construire et déployer des applications cloud-natives sur Kubernetes.

### Informations sur l'examen

| Élément | Détail |
|---------|--------|
| **Durée** | 2 heures |
| **Format** | Performance-based (ligne de commande) |
| **Environnement** | Cluster Kubernetes réel |
| **Score requis** | 66% minimum |
| **Validité** | 3 ans |
| **Coût examen** | $445 USD (ou bundle cours + examen $645) |
| **Tentatives** | 1 passage + 1 repasse gratuite |

---

## Objectifs de la formation

Préparer les participants à réussir l'examen CKAD en maîtrisant :

- Le design et le build d'applications conteneurisées
- Le déploiement et l'exposition des applications
- La configuration et la gestion de l'environnement applicatif
- L'observabilité et le debugging des applications

---

## Programme détaillé

### Jour 1 : Application Design and Build (20%)

**Matin (3h30)**
- Définir, construire et modifier des images de conteneurs
- Jobs et CronJobs pour les traitements batch
- Patterns de design multi-conteneurs :
  - Sidecar
  - Ambassador
  - Adapter
- **TP** : Création d'images optimisées et patterns multi-conteneurs

**Après-midi (3h30)**
- Utilisation des Volumes
- Persistent Volumes et Persistent Volume Claims
- StorageClasses
- **TP** : Application avec différents types de stockage

### Jour 2 : Application Deployment (20%)

**Matin (3h30)**
- Deployments : création et mise à jour
- Stratégies de déploiement avancées
- Rolling updates et rollbacks
- **TP** : Mise en place de déploiements Blue/Green et Canary

**Après-midi (3h30)**
- Helm : gestionnaire de packages Kubernetes
- Création et utilisation de charts Helm
- Kustomize pour la gestion des configurations
- **TP** : Packaging d'une application avec Helm

### Jour 3 : Application Observability and Maintenance (15%) + Environment, Configuration and Security (25%)

**Matin (3h30)**
- Comprendre les dépréciations d'API
- Probes : Liveness, Readiness et Startup
- Utilisation des logs conteneurs
- Debugging et troubleshooting des applications
- **TP** : Diagnostic et résolution de problèmes applicatifs

**Après-midi (3h30)**
- ConfigMaps : création et utilisation
- Secrets : gestion sécurisée
- SecurityContexts pour les Pods et conteneurs
- ServiceAccounts et RBAC
- ResourceQuotas et LimitRanges
- **TP** : Sécurisation d'une application

### Jour 4 : Services and Networking (20%) + Examen blanc

**Matin (3h30)**
- Services : ClusterIP, NodePort, LoadBalancer
- Ingress et Ingress Controllers
- NetworkPolicies pour la sécurité réseau
- **TP** : Configuration réseau complète d'une application

**Après-midi (3h30)**
- **Examen blanc** : Simulation conditions réelles (2h)
- Correction collective et retour d'expérience
- Stratégies pour l'examen :
  - Gestion du temps
  - Utilisation de la documentation officielle
  - Commandes essentielles et alias
- Questions/Réponses et conseils finaux

---

## Domaines couverts (Curriculum officiel CNCF)

| Domaine | Poids | Couvert |
|---------|-------|---------|
| Application Design and Build | 20% | ✅ |
| Application Deployment | 20% | ✅ |
| Application Observability and Maintenance | 15% | ✅ |
| Application Environment, Configuration and Security | 25% | ✅ |
| Services and Networking | 20% | ✅ |

---

## Méthodes pédagogiques

- **30% Théorie** : Concepts alignés sur le curriculum CKAD
- **70% Pratique** : Exercices intensifs type examen
- 2 examens blancs avec correction
- Accès à un lab de préparation pendant 60 jours

---

## Kit de préparation inclus

- Support de cours PDF (200+ pages)
- Accès lab 60 jours avec exercices progressifs
- 150+ exercices pratiques type examen
- 2 examens blancs complets
- Aide-mémoire kubectl et YAML
- Checklist de révision

---

## Tarification

| Formule | Tarif HT |
|---------|----------|
| **Formation seule** | 2 500 € / participant |
| **Formation + voucher examen** | 2 900 € / participant |
| **Intra-entreprise** (jusqu'à 8 personnes) | 12 000 € |

*Le voucher examen inclut 1 passage + 1 repasse gratuite (validité 12 mois).*

---

## Garantie de réussite

Si vous ne réussissez pas l'examen après notre formation :

- **Accès gratuit** à la prochaine session de préparation (dans les 6 mois)
- **Coaching personnalisé** (2h) pour identifier les axes d'amélioration

*Conditions : avoir suivi l'intégralité de la formation et passé l'examen dans les 3 mois.*

---

## Conseils pour l'examen

1. **Pratiquez quotidiennement** : L'examen est 100% pratique
2. **Maîtrisez kubectl** : Créez des alias pour gagner du temps
3. **Connaissez la documentation** : Seule source autorisée pendant l'examen
4. **Gérez votre temps** : Ne bloquez pas sur une question
5. **Utilisez les drapeaux** : `--dry-run=client -o yaml` est votre ami

---

## Prochaines sessions

Contactez-nous pour connaître les prochaines dates.

📧 formation@akouendy.com
📞 +33 (0)1 XX XX XX XX

---

*Document mis à jour le 19 janvier 2025*
*Curriculum aligné sur CKAD v1.30 (2024)*
