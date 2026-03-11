---
tags: type/offre-commerciale
aliases:
lead: Offre complète d'infogérance Kubernetes - Build, Run & Deploy
visual: "![[logo-akouendy.png]]"
template-type: Offre Commerciale
template-version: "1.0"
created: 2026-01-19
updated: 2026-01-26
---

![[logo-akouendy.png|center]]

---

# Offre d'Infogérance Kubernetes - CI/CD
## Build | Run | Deploy

---

##### <center>Par James Kokou GAGLO</center>
##### <center>Expert Cloud & Kubernetes</center>

| Version | Date            | Commentaires                |
| ------- | :-------------: | --------------------------- |
| 1.0     | 19 Janvier 2026 | Version initiale            |
| 1.1     | 26 Janvier 2026 | Révision tarifaire complète |

---

## 1. Présentation de l'offre

Kubernetes est devenu le standard de facto pour l'orchestration de conteneurs en production. Sa mise en œuvre et son exploitation requièrent une expertise pointue pour garantir performance, sécurité et haute disponibilité.

**AKOUENDY** vous propose une offre complète d'infogérance Kubernetes couvrant l'ensemble du cycle de vie de votre infrastructure :

- **BUILD** : Construction et déploiement initial de votre cluster
- **RUN** : Exploitation, maintenance et évolution continue
- **DEPLOY** : Déploiement et accompagnement de vos applications

---

## 2. BUILD — Construction de Cluster Kubernetes

### 2.1 Périmètre de la prestation

| Prestation                      | Description                                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------------------- |
| **Analyse des besoins**         | Étude de votre architecture applicative, volumétrie, contraintes de performance et sécurité |
| **Architecture technique**      | Conception de l'architecture cluster (control-plane HA, worker nodes, networking, storage)  |
| **Provisioning infrastructure** | Déploiement de l'infrastructure sous-jacente (bare-metal, cloud public ou privé)            |
| **Installation Kubernetes**     | Déploiement du cluster RKE2 selon les bonnes pratiques                                      |
| **Interface d'administration**  | Installation et configuration de Rancher (UI de gestion du cluster)                         |
| **Configuration réseau**        | Mise en place du CNI (Calico, Cilium), K8s Gateway API, Load Balancer                       |
| **Sécurité initiale**           | RBAC, Network Policies, Pod Security Standards, certificats TLS                             |
| **Observabilité**               | Stack de monitoring (Prometheus, Grafana) et logging (Loki ou ELK)                          |
| **Sauvegarde**                  | Configuration Velero pour backup etcd et ressources Kubernetes                              |
| **Documentation**               | Documentation technique complète et runbooks opérationnels                                  |
| **Formation**                   | Transfert de compétences à vos équipes (1 journée incluse)                                  |

### 2.2 Tarification BUILD

| Offre          | Nœuds       | Control-Plane             | Délai    | Tarif HT |
| -------------- | ----------- | ------------------------- | -------- | -------- |
| **Starter**    | 3 workers   | 1 master                  | 5 jours  | 6 000 €  |
| **Standard**   | 5 workers   | 3 masters (HA)            | 8 jours  | 10 000 € |
| **Enterprise** | 10+ workers | 3 masters (HA) + multi-AZ | 12 jours | 16 000 € |

**Options supplémentaires :**

| Option                                       | Tarif HT                |
| -------------------------------------------- | ----------------------- |
| Cluster multi-cloud / hybride                | +4 000 €                |
| Intégration GitOps (ArgoCD/FluxCD)           | +3 000 €                |
| Service Mesh (Istio/Linkerd)                 | +3 000 €                |
| Toolchain CI/CD complète (GitLab ou Jenkins) | +6 000 €                |
| Cluster de staging/développement additionnel | +50% du tarif principal |
| Formation supplémentaire (par journée)       | 1 200 €                 |

**Détail option Toolchain CI/CD complète :**

Installation et configuration d'une plateforme CI/CD intégrée au cluster :
- **GitLab** (auto-hébergé) ou **Jenkins** selon vos préférences
- Registry d'images Docker privé (Harbor ou GitLab Registry)
- Scan de vulnérabilités des images (Trivy)
- Scan de sécurité applicative DAST (OWASP ZAP)
- Analyse de qualité de code (SonarQube)
- Gestion des secrets (Vault ou Sealed Secrets)
- Pipelines templates prêts à l'emploi
- Intégration avec le cluster Kubernetes (déploiement automatisé)

---

## 3. RUN — Infogérance et Maintien en Condition Opérationnelle

### 3.0 Prérequis — Audit de Reprise (clusters non construits par AKOUENDY)

Pour tout cluster Kubernetes non construit par AKOUENDY, un **audit de reprise** est obligatoire avant la souscription d'un contrat RUN. Cet audit permet de :

- Documenter l'architecture et l'état actuel du cluster
- Évaluer la conformité sécurité (CIS Benchmark Kubernetes)
- Identifier les écarts par rapport aux bonnes pratiques
- Établir une baseline pour le MCO/MCS
- Fournir un plan de remédiation chiffré si nécessaire

| Taille cluster | Durée   | Tarif HT |
| -------------- | ------- | -------- |
| 1-5 nœuds      | 2 jours | 2 400 €  |
| 6-15 nœuds     | 3 jours | 3 600 €  |
| 16+ nœuds      | Sur devis | —      |

**Livrables :**
- Rapport d'audit complet (architecture, sécurité, performances)
- Liste des non-conformités et risques identifiés
- Plan de remédiation priorisé avec estimation
- Documentation technique de l'existant

> **Note** : Si des remédiations sont nécessaires avant prise en charge RUN, elles sont facturées séparément au tarif régie (1 100 €/jour).

### 3.1 Services inclus

#### Maintien en Condition Opérationnelle (MCO)

- Surveillance 24/7 du cluster (alerting proactif)
- Gestion des certificats TLS (renouvellement automatisé)
- Mises à jour de sécurité du système d'exploitation
- Nettoyage régulier (pods orphelins, images inutilisées, PVC non utilisés)
- Vérification de l'intégrité etcd et du control-plane
- Gestion de la capacité et anticipation des besoins de scaling

#### Maintien en Condition de Sécurité (MCS)

- Veille sécuritaire et application des correctifs critiques
- Scan régulier des vulnérabilités (images, configurations)
- Audit trimestriel de conformité (CIS Benchmark)
- Rotation des secrets et credentials
- Révision des RBAC et Network Policies

#### Support et Accompagnement

| Niveau | Disponibilité | Temps de réponse | Temps de résolution |
|--------|---------------|------------------|---------------------|
| **Incidents critiques (P1)** | 24/7 | 30 min | 4h |
| **Incidents majeurs (P2)** | Jours ouvrés | 2h | 8h |
| **Incidents mineurs (P3)** | Jours ouvrés | 4h | 24h |
| **Demandes (P4)** | Jours ouvrés | 8h | 48h |

**Grille de qualification des incidents :**

| Niveau            | Critères de qualification                                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **P1 — Critique** | Production totalement indisponible, perte de données en cours, faille de sécurité active exploitée, impact sur 100% des utilisateurs             |
| **P2 — Majeur**   | Fonctionnalité majeure indisponible, dégradation sévère des performances (>50%), pas de contournement possible, impact sur >30% des utilisateurs |
| **P3 — Mineur**   | Fonctionnalité secondaire impactée, contournement possible, dégradation légère des performances, impact limité                                   |
| **P4 — Demande**  | Demande d'information, évolution, changement de configuration non urgent, question technique                                                     |

**Exemples de classification :**

| Situation | Niveau |
|-----------|--------|
| Cluster Kubernetes down, aucun pod ne répond | P1 |
| Base de données corrompue, perte de données | P1 |
| API principale en erreur 500, applications KO | P1 |
| Un microservice non critique indisponible | P2 |
| Ingress lent, temps de réponse x3 | P2 |
| Rancher indisponible, cluster fonctionnel (kubectl OK) | P3 |
| Certificat expire dans 7 jours | P3 |
| Logs non collectés depuis 2h | P3 |
| Besoin d'ajouter un namespace | P4 |
| Question sur une configuration | P4 |

> **Clause de reclassification** : AKOUENDY se réserve le droit de reclassifier un incident si les critères objectifs ne correspondent pas au niveau déclaré. En cas de reclassification, le client en est informé avec justification.

#### Évolutions incluses

- 1 mise à jour majeure Kubernetes par an (planifiée)
- Évolutions mineures et patches de sécurité
- Ajustements de configuration (quotas, limites, policies)
- Rapports d'exploitation (fréquence selon offre)

### 3.2 Tarification RUN (annuel)

| Offre          | Nœuds max | MCO | MCS | Support      | Rapport     | Tarif HT/an |
| -------------- | --------- | --- | --- | ------------ | ----------- | ----------- |
| **Essentiel**  | 5         | ✓   | ✓   | H+4 (JO)     | Trimestriel | 9 600 €     |
| **Standard**   | 10        | ✓   | ✓   | H+2 (JO)     | Mensuel     | 14 400 €    |
| **Premium**    | 20        | ✓   | ✓   | 24/7         | Mensuel     | 21 600 €    |
| **Enterprise** | Illimité  | ✓   | ✓   | 24/7 + dédié | Hebdo       | Sur devis   |

**Plages horaires de support :**

| Offre | Plage horaire | Astreinte incluse |
|-------|---------------|-------------------|
| Essentiel | Lun-Ven 9h-18h (hors jours fériés) | Non |
| Standard | Lun-Ven 9h-18h (hors jours fériés) | Non |
| Premium | 24h/24, 7j/7 | Oui |
| Enterprise | 24h/24, 7j/7 + interlocuteur dédié | Oui |

**Engagement minimum :** 12 mois
**Révision tarifaire :** annuelle, indexée sur l'évolution des coûts

**Options supplémentaires (activables mensuellement) :**

| Option                            | Détail                                       | Tarif HT/mois |
| --------------------------------- | -------------------------------------------- | ------------- |
| Cluster additionnel (staging/dev) | Même niveau de service que cluster principal | +50%          |
| Réunion de suivi hebdomadaire     | 4 réunions/mois (1h), revue et planification | +200 €        |

**Options astreinte (activables mensuellement, pour offres Essentiel et Standard) :**

| Option                      | Plage couverte                | Tarif HT/mois |
| --------------------------- | ----------------------------- | ------------- |
| **Astreinte soir**          | Lun–Ven 18h–22h               | 400 €         |
| **Astreinte week-end**      | Sam–Dim 9h–18h                | 600 €         |
| **Astreinte jours fériés**  | 9h–18h                        | 300 €         |
| **Astreinte 24/7 complète** | Tous les jours, toutes heures | 1 500 €       |

> **Interventions hors plage contractuelle** : Les interventions demandées en dehors des plages horaires couvertes par le contrat sont facturées au tarif de **250 € HT/heure**, avec un minimum de **2 heures facturées**.
   En cas d’incident critique (niveau P1), une **majoration de 50 %** peut être appliquée selon le niveau d’urgence et la plage horaire (soirée, week-end ou jour férié).

---

## 4. DEPLOY — Déploiement et Accompagnement Applicatif

### 4.1 Services proposés

#### Containerisation d'applications

- Analyse complète de l'application existante
- Rédaction de Dockerfiles optimisés multi-stage build
- Scan de sécurité des images
- Publication sur registry privé

#### Déploiement Kubernetes

- Rédaction des manifests Kubernetes (Deployment, Service, Ingress, ConfigMap, Secret)
- Configuration des ressources (requests/limits, HPA, PDB)
- Mise en place des health checks (liveness, readiness, startup probes)
- Configuration du networking et exposition
- Intégration avec le stockage persistant

#### CI/CD et GitOps

- Configuration pipeline CI/CD (GitLab CI, GitHub Actions, Azure DevOps)
- Mise en place GitOps avec ArgoCD ou FluxCD
- Stratégies de déploiement (rolling update, blue-green, canary)
- Gestion des environnements (dev, staging, prod)

#### Accompagnement DevOps

- Revue de code et bonnes pratiques
- Optimisation des performances applicatives
- Debugging et résolution d'incidents
- Formation et montée en compétences des équipes

### 4.2 Tarification DEPLOY

#### Forfaits déploiement applicatif

| Type d'application       | Complexité                  | Délai       | Tarif HT |
| ------------------------ | --------------------------- | ----------- | -------- |
| **Application simple**   | 1-3 services, sans état     | 2-3 jours   | 2 800 €  |
| **Application standard** | 4-8 services, avec BDD      | 5-7 jours   | 5 000 €  |
| **Application complexe** | 10+ services, microservices | 10-14 jours | 10 500 € |

**Inclus dans chaque forfait :**
- Analyse de l'application et de ses dépendances
- Rédaction ou optimisation des Dockerfiles
- Création des manifests Kubernetes (Deployment, Service, Ingress, ConfigMap, Secret)
- Configuration des ressources (requests/limits, probes, HPA)
- Déploiement sur l'environnement cible
- Tests de bon fonctionnement et validation
- Documentation de déploiement (runbook)

**Non inclus (options ou régie) :**
- Modification du code applicatif
- Configuration CI/CD complète (voir option Toolchain)
- Environnements multiples (staging, preprod) — forfait par environnement
- Formation avancée des équipes

#### Régie — Accompagnement sur mesure

| Formule                        | Tarif HT |
| ------------------------------ | -------- |
| **Demi-journée** (4h)          | 600 €    |
| **Journée** (8h)               | 1 100 €  |
| **Forfait 5 jours**            | 5 500 €  |
| **Forfait 10 jours**           | 11 000 € |
| **Forfait mensuel** (20 jours) | 20 000 € |

**Cas d'usage de la régie :**
- Accompagnement des équipes de développement (pair programming, revue de code)
- Debugging et résolution d'incidents applicatifs
- Optimisation des performances
- Migration d'applications existantes
- Formation et montée en compétences
- Mise en place de pipelines CI/CD personnalisés
- Conseils et architecture

**Conditions :**
- Planification avec un préavis de 5 jours ouvrés (sauf urgence)
- Interventions sur site ou à distance selon les besoins
- Compte-rendu d'intervention fourni

#### Forfaits annuels DEPLOY

| Forfait       | Jours inclus | Tarif HT/an |
| ------------- | ------------ | ----------- |
| **DEPLOY 10** | 10 jours     | 12 000 €    |
| **DEPLOY 20** | 20 jours     | 22 000 €    |
| **DEPLOY 40** | 40 jours     | 40 000 €    |

**Conditions des forfaits annuels :**
- Engagement : 12 mois à compter de la signature
- Facturation : 50% à la commande, 50% à 6 mois
- Utilisation : journées planifiées avec un préavis de 5 jours ouvrés
- **Report des jours non consommés** : les jours non utilisés à la date anniversaire sont reportables à hauteur de **25% du forfait**, utilisables uniquement sur le **trimestre suivant** la date anniversaire. Au-delà de ce délai, ils expirent définitivement.

---

## 5. Offres packagées

### 5.1 Pack Démarrage Kubernetes

Idéal pour une première mise en production Kubernetes.

| Inclus                  | Détail                               |
| ----------------------- | ------------------------------------ |
| BUILD Starter           | Cluster 3 workers, 1 master, Rancher |
| RUN Essentiel (12 mois) | MCO + MCS + Support H+4              |
| DEPLOY (1 application)  | Containerisation + déploiement       |
| Formation               | 1 journée équipe technique           |

**Tarif pack :** 17 000 € HT (au lieu de 19 600 €) — **Économie : 2 600 €**

> **Option disponible** : Toolchain CI/CD complète (GitLab/Jenkins, Harbor, Trivy, OWASP ZAP, SonarQube, Vault) — +6 000 € HT

### 5.2 Pack Production

Pour les environnements de production critiques avec chaîne CI/CD complète.

| Inclus                  | Détail                                                     |
| ----------------------- | ---------------------------------------------------------- |
| BUILD Standard          | Cluster HA 5 workers, 3 masters, Rancher                   |
| Toolchain CI/CD         | GitLab/Jenkins, Harbor, Trivy, OWASP ZAP, SonarQube, Vault |
| GitOps                  | ArgoCD configuré                                           |
| RUN Standard (12 mois)  | MCO + MCS + Support H+2                                    |
| DEPLOY (3 applications) | Containerisation + déploiement                             |
| Formation               | 2 journées                                                 |

**Tarif pack :** 44 000 € HT (au lieu de 50 800 €) — **Économie : 6 800 €**

### 5.3 Pack Enterprise

Solution complète pour les grandes organisations avec toute la stack DevSecOps.

| Inclus                | Détail                                                     |
| --------------------- | ---------------------------------------------------------- |
| BUILD Enterprise      | Cluster HA multi-AZ 10+ workers, Rancher                   |
| Toolchain CI/CD       | GitLab/Jenkins, Harbor, Trivy, OWASP ZAP, SonarQube, Vault |
| GitOps + Service Mesh | ArgoCD + Istio                                             |
| RUN Premium (12 mois) | MCO + MCS + Support 24/7                                   |
| DEPLOY (illimité)     | 20 jours de régie annuels                                  |
| Formation             | 5 journées                                                 |

**Tarif pack :** Sur devis (à partir de 70 000 € HT)

---

## 6. Nos engagements

| Engagement | Garantie |
|------------|----------|
| **Disponibilité cluster** | 99,9% (hors maintenance planifiée) |
| **Temps de réponse** | Selon niveau de support contractualisé |
| **Confidentialité** | NDA systématique, données non partagées |
| **Transparence** | Rapports détaillés, accès aux métriques |
| **Réversibilité** | Documentation complète, accompagnement sortie |

---

## 7. Technologies maîtrisées

| Domaine                      | Technologies                                     |
| ---------------------------- | ------------------------------------------------ |
| **Distributions Kubernetes** | Vanilla (kubeadm), RKE2, AKS, EKS, GKE, OKE      |
| **Cloud Providers**          | Azure, AWS, GCP, OVHcloud, On-premise            |
| **Networking**               | Calico, Cilium, Nginx Ingress, Traefik, MetalLB  |
| **Storage**                  | Longhorn, Rook-Ceph, CSI drivers natifs          |
| **Observabilité**            | Prometheus, Grafana, Loki, Tempo, AlertManager   |
| **Sécurité**                 | Trivy, Falco, OPA/Gatekeeper, Vault              |
| **GitOps**                   | ArgoCD, FluxCD                                   |
| **Service Mesh**             | Istio, Linkerd                                   |
| **CI/CD**                    | GitLab CI, GitHub Actions, Azure DevOps, Jenkins |

---

## 8. Conditions générales

- **Facturation** : 50% à la commande, 50% à la livraison (BUILD/DEPLOY) | Annuel 50% à la signature, 50% à 6 mois (RUN)
- **Moyens de paiement** : Virement bancaire, prélèvement SEPA
- **Délai de paiement** : 30 jours date de facture
- **Révision tarifaire** : Annuelle au 1er janvier
- **Préavis résiliation** : 3 mois avant échéance (contrats RUN)
- **Clause de réversibilité** : Accompagnement inclus en fin de contrat

---

## 9. Contact

|                 |                      |
| --------------- | -------------------- |
| **Société**     | AKOUENDY              |
| **Responsable** | James Kokou GAGLO    |
| **Email**       | jkgaglo@akouendy.com |
| **Téléphone**   | +33 7 49 62 49 89    |
| **Site web**    | www.doveaia.com      |
| **SIRET**       | 94763010900033       |

---

## 10. Prochaines étapes

1. **Échange découverte** : Compréhension de vos besoins et contraintes
2. **Proposition personnalisée** : Offre adaptée à votre contexte
3. **Validation technique** : Revue d'architecture et planning
4. **Démarrage** : Lancement du projet sous 2 semaines

---

<center>

**Prêt à industrialiser votre infrastructure Kubernetes ?**

Contactez-nous pour un échange sans engagement.

📧 jkgaglo@akouendy.com | 📞 +33 7 49 62 49 89

</center>

---

*Document du 26 janvier 2026 — AKOUENDY © Tous droits réservés*
