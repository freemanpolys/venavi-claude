# Formation Kubernetes Fondamentaux

**Durée** : 3 jours (21 heures)
**Niveau** : Débutant à Intermédiaire
**Prérequis** : Notions de base Linux et conteneurs Docker
**Tarif** : 1 800 € HT / participant

---

## Objectifs de la formation

À l'issue de cette formation, les participants seront capables de :

- Comprendre l'architecture et les concepts fondamentaux de Kubernetes
- Déployer et gérer des applications conteneurisées sur un cluster
- Configurer les ressources de base (Pods, Deployments, Services)
- Mettre en place la persistance des données
- Appliquer les bonnes pratiques de sécurité et de monitoring

---

## Programme détaillé

### Jour 1 : Introduction et Architecture

**Matin (3h30)**
- Introduction à l'orchestration de conteneurs
- Historique et écosystème Kubernetes (CNCF)
- Architecture d'un cluster Kubernetes
  - Control Plane : API Server, etcd, Scheduler, Controller Manager
  - Worker Nodes : kubelet, kube-proxy, Container Runtime
- Installation d'un environnement de développement (Minikube, Kind)

**Après-midi (3h30)**
- Premiers pas avec kubectl
- Les Pods : unité de base de Kubernetes
- Labels, Selectors et Annotations
- Namespaces et organisation des ressources
- **TP** : Déployer sa première application

### Jour 2 : Workloads et Réseau

**Matin (3h30)**
- ReplicaSets et Deployments
- Stratégies de déploiement (Rolling Update, Recreate)
- DaemonSets et StatefulSets
- Jobs et CronJobs
- **TP** : Mise à jour d'une application avec zero-downtime

**Après-midi (3h30)**
- Modèle réseau Kubernetes
- Services : ClusterIP, NodePort, LoadBalancer
- Ingress et Ingress Controllers
- DNS interne et découverte de services
- **TP** : Exposer une application multi-tiers

### Jour 3 : Configuration, Stockage et Observabilité

**Matin (3h30)**
- ConfigMaps : externaliser la configuration
- Secrets : gérer les données sensibles
- Variables d'environnement et volumes de configuration
- Volumes et Persistent Volumes
- StorageClasses et provisionnement dynamique
- **TP** : Application avec base de données persistante

**Après-midi (3h30)**
- Gestion des ressources (requests/limits)
- Probes : Liveness, Readiness, Startup
- Introduction au monitoring avec Prometheus et Grafana
- Logs et debugging
- Bonnes pratiques et prochaines étapes
- **TP Final** : Déploiement complet d'une application 3-tiers

---

## Méthodes pédagogiques

- **40% Théorie** : Concepts et architecture
- **60% Pratique** : Exercices et travaux pratiques sur cluster réel
- Support de cours PDF fourni
- Accès à un environnement de lab pendant 30 jours après la formation

---

## Matériel nécessaire

- Ordinateur portable avec :
  - 8 Go RAM minimum (16 Go recommandés)
  - Docker Desktop ou accès SSH
  - Terminal (bash/zsh)
- Connexion internet stable

---

## Profils concernés

- Développeurs souhaitant déployer sur Kubernetes
- Administrateurs système en transition vers le Cloud Native
- DevOps débutants sur Kubernetes
- Architectes techniques

---

## Modalités

| Élément | Détail |
|---------|--------|
| **Format** | Présentiel ou distanciel |
| **Participants** | 4 à 10 personnes |
| **Certification** | Attestation de formation AKOUENDY |
| **Support** | PDF + accès lab 30 jours |

---

## Tarification

| Formule | Tarif HT |
|---------|----------|
| **Inter-entreprises** | 1 800 € / participant |
| **Intra-entreprise** (jusqu'à 8 personnes) | 7 500 € |
| **Formation individuelle** | 2 400 € |

*Tarifs incluant le support de cours et l'accès au lab.*

---

## Pourquoi choisir AKOUENDY ?

- **Formateurs certifiés CKA/CKAD** avec expérience terrain
- **Cas pratiques** issus de projets réels de production
- **Environnement de lab** basé sur RKE2/Rancher (même stack que nos offres d'infogérance)
- **Suivi post-formation** : 2 heures de support offert dans le mois suivant

---

## Prochaines sessions

Contactez-nous pour connaître les prochaines dates ou organiser une session intra-entreprise.

📧 formation@akouendy.com
📞 +33 (0)1 XX XX XX XX

---

*Document mis à jour le 19 janvier 2025*
