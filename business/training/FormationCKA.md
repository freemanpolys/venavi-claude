# Formation Préparation CKA

**Certified Kubernetes Administrator**

**Durée** : 5 jours (35 heures)
**Niveau** : Intermédiaire à Avancé
**Prérequis** : Expérience pratique avec Kubernetes et administration système Linux
**Tarif** : 3 200 € HT / participant (hors frais d'examen)

---

## À propos de la certification CKA

La certification **CKA** (Certified Kubernetes Administrator) est délivrée par la **Linux Foundation** et la **CNCF**. Elle valide les compétences pour installer, configurer et administrer des clusters Kubernetes en production.

### Informations sur l'examen

| Élément | Détail |
|---------|--------|
| **Durée** | 2 heures |
| **Format** | Performance-based (ligne de commande) |
| **Environnement** | Clusters Kubernetes réels (plusieurs clusters) |
| **Score requis** | 66% minimum |
| **Validité** | 3 ans |
| **Coût examen** | $445 USD (ou bundle cours + examen $645) |
| **Tentatives** | 1 passage + 1 repasse gratuite |

---

## Objectifs de la formation

Préparer les participants à réussir l'examen CKA en maîtrisant :

- L'installation et la configuration de clusters Kubernetes
- La gestion du stockage et du réseau
- Le troubleshooting de clusters et d'applications
- La sécurisation des clusters et la gestion des accès

---

## Programme détaillé

### Jour 1 : Cluster Architecture, Installation and Configuration (25%)

**Matin (3h30)**
- Architecture Kubernetes approfondie
- Composants du Control Plane et leur interaction
- Composants des Worker Nodes
- Processus de communication interne
- **TP** : Exploration d'un cluster en détail

**Après-midi (3h30)**
- Installation d'un cluster avec kubeadm
- Configuration de kubeadm (ClusterConfiguration)
- Ajout de Worker Nodes
- Gestion des certificats TLS
- **TP** : Installation from scratch d'un cluster multi-nœuds

### Jour 2 : Cluster Installation (suite) + Workloads and Scheduling (15%)

**Matin (3h30)**
- Mise à jour de clusters Kubernetes (upgrade)
- Processus de mise à jour kubeadm
- Sauvegarde et restauration d'etcd
- Haute disponibilité du Control Plane
- **TP** : Upgrade d'un cluster et backup etcd

**Après-midi (3h30)**
- Deployments, ReplicaSets et leur gestion
- Scheduling : comprendre le kube-scheduler
- nodeSelector, affinity et anti-affinity
- Taints et Tolerations
- **TP** : Configuration avancée du scheduling

### Jour 3 : Workloads (suite) + Services and Networking (20%)

**Matin (3h30)**
- Resource Limits et Requests
- LimitRanges et ResourceQuotas
- Static Pods et DaemonSets
- ConfigMaps et Secrets en profondeur
- **TP** : Gestion des ressources et quotas

**Après-midi (3h30)**
- Modèle réseau Kubernetes
- CNI (Container Network Interface) et plugins
- Services : ClusterIP, NodePort, LoadBalancer, ExternalName
- DNS interne (CoreDNS)
- **TP** : Configuration réseau et debugging

### Jour 4 : Networking (suite) + Storage (10%) + Troubleshooting (30%)

**Matin (3h30)**
- Ingress et Ingress Controllers (Nginx, Traefik)
- NetworkPolicies : règles de pare-feu
- Volumes : types et cas d'usage
- PersistentVolumes et PersistentVolumeClaims
- StorageClasses et provisionnement dynamique
- **TP** : Configuration stockage avancée

**Après-midi (3h30)**
- Méthodologie de troubleshooting
- Debugging des composants du cluster
- Debugging des applications
- Logs : kubelet, API server, etcd
- Outils : kubectl describe, logs, exec, port-forward
- **TP** : Scénarios de troubleshooting réalistes

### Jour 5 : Troubleshooting (suite) + Security + Examen blanc

**Matin (3h30)**
- Troubleshooting réseau
- Troubleshooting des nœuds
- RBAC : Roles, ClusterRoles, Bindings
- ServiceAccounts et tokens
- SecurityContexts et PodSecurityStandards
- **TP** : Sécurisation d'un cluster

**Après-midi (3h30)**
- **Examen blanc** : Simulation conditions réelles (2h)
- Correction collective et retour d'expérience
- Stratégies pour l'examen :
  - Gestion du temps sur plusieurs clusters
  - Navigation entre contextes kubectl
  - Commandes essentielles et documentation
- Questions/Réponses et conseils finaux

---

## Domaines couverts (Curriculum officiel CNCF)

| Domaine | Poids | Couvert |
|---------|-------|---------|
| Cluster Architecture, Installation and Configuration | 25% | ✅ |
| Workloads and Scheduling | 15% | ✅ |
| Services and Networking | 20% | ✅ |
| Storage | 10% | ✅ |
| Troubleshooting | 30% | ✅ |

---

## Différences CKA vs CKAD

| Aspect | CKA | CKAD |
|--------|-----|------|
| **Focus** | Administration cluster | Développement applicatif |
| **Installation** | ✅ Obligatoire | ❌ Non couvert |
| **etcd backup/restore** | ✅ Obligatoire | ❌ Non couvert |
| **Troubleshooting** | 30% (focus cluster) | 15% (focus app) |
| **Réseau** | CNI, NetworkPolicies avancées | Services basiques, Ingress |
| **Sécurité** | RBAC, certificats TLS | SecurityContext, Secrets |

---

## Méthodes pédagogiques

- **30% Théorie** : Concepts alignés sur le curriculum CKA
- **70% Pratique** : Exercices intensifs type examen
- 2 examens blancs avec correction
- Accès à un lab multi-clusters pendant 90 jours

---

## Kit de préparation inclus

- Support de cours PDF (300+ pages)
- Accès lab 90 jours avec environnement multi-clusters
- 200+ exercices pratiques type examen
- 2 examens blancs complets
- Scripts d'installation kubeadm
- Aide-mémoire kubectl et troubleshooting
- Checklist de révision complète

---

## Tarification

| Formule | Tarif HT |
|---------|----------|
| **Formation seule** | 3 200 € / participant |
| **Formation + voucher examen** | 3 600 € / participant |
| **Intra-entreprise** (jusqu'à 8 personnes) | 18 000 € |
| **Bundle CKA + CKAD** (8 jours) | 5 200 € / participant |

*Le voucher examen inclut 1 passage + 1 repasse gratuite (validité 12 mois).*

---

## Garantie de réussite

Si vous ne réussissez pas l'examen après notre formation :

- **Accès gratuit** à la prochaine session de préparation (dans les 6 mois)
- **Coaching personnalisé** (3h) pour identifier les axes d'amélioration
- **Accès lab prolongé** de 30 jours supplémentaires

*Conditions : avoir suivi l'intégralité de la formation et passé l'examen dans les 3 mois.*

---

## Conseils pour l'examen CKA

1. **Maîtrisez kubeadm** : L'installation est critique
2. **Pratiquez le troubleshooting** : 30% de l'examen !
3. **Naviguez entre contextes** : `kubectl config use-context`
4. **Sauvegardez etcd** : Exercice fréquent à l'examen
5. **Connaissez la documentation** : kubernetes.io est votre ami
6. **Créez des alias** : `alias k=kubectl` pour gagner du temps
7. **Gérez votre temps** : 2h pour ~17 questions, priorisez

---

## Prochaines sessions

Contactez-nous pour connaître les prochaines dates.

📧 formation@akouendy.com
📞 +33 (0)1 XX XX XX XX

---

*Document mis à jour le 19 janvier 2025*
*Curriculum aligné sur CKA v1.30 (2024)*
