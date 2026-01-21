---
tags: type/offre-commerciale
aliases:
lead: Offre complète d'infogérance Kubernetes - Build, Run & Deploy
visual: "![[logo-DOVEAIA.png]]"
template-type: Offre Commerciale
template-version: "1.0"
created: 2025-01-19
updated: 2025-01-19
---

![[logo-DOVEAIA.png|center|200]]

---

# Offre d'Infogérance Kubernetes
## Build | Run | Deploy

---

##### <center>Par James Kokou GAGLO</center>
##### <center>Expert Cloud & Kubernetes</center>

| Version | Date            | Commentaires     |
| ------- | :-------------: | ---------------- |
| 1.0     | 19 Janvier 2025 | Version initiale |

---

## 1. Présentation de l'offre

Kubernetes est devenu le standard de facto pour l'orchestration de conteneurs en production. Sa mise en œuvre et son exploitation requièrent une expertise pointue pour garantir performance, sécurité et haute disponibilité.

**DOVEAIA** vous propose une offre complète d'infogérance Kubernetes couvrant l'ensemble du cycle de vie de votre infrastructure :

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
| **Starter**    | 3 workers   | 1 master                  | 5 jours  | 4 500 €  |
| **Standard**   | 5 workers   | 3 masters (HA)            | 8 jours  | 7 500 €  |
| **Enterprise** | 10+ workers | 3 masters (HA) + multi-AZ | 12 jours | 12 000 € |

**Options supplémentaires :**

| Option                                       | Tarif HT                |
| -------------------------------------------- | ----------------------- |
| Cluster multi-cloud / hybride                | +3 000 €                |
| Intégration GitOps (ArgoCD/FluxCD)           | +1 500 €                |
| Service Mesh (Istio/Linkerd)                 | +2 000 €                |
| Toolchain CI/CD complète (GitLab ou Jenkins) | +4 500 €                |
| Cluster de staging/développement additionnel | +50% du tarif principal |
| Formation supplémentaire (par journée)       | 900 €                   |

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

| Niveau | Critères de qualification |
|--------|---------------------------|
| **P1 — Critique** | Production totalement indisponible, perte de données en cours, faille de sécurité active exploitée, impact sur 100% des utilisateurs |
| **P2 — Majeur** | Fonctionnalité majeure indisponible, dégradation sévère des performances (>50%), pas de contournement possible, impact sur >30% des utilisateurs |
| **P3 — Mineur** | Fonctionnalité secondaire impactée, contournement possible, dégradation légère des performances, impact limité |
| **P4 — Demande** | Demande d'information, évolution, changement de configuration non urgent, question technique |

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

> **Clause de reclassification** : DOVEAIA se réserve le droit de reclassifier un incident si les critères objectifs ne correspondent pas au niveau déclaré. En cas de reclassification, le client en est informé avec justification.

#### Évolutions incluses

- 1 mise à jour majeure Kubernetes par an (planifiée)
- Évolutions mineures et patches de sécurité
- Ajustements de configuration (quotas, limites, policies)
- Rapports mensuels d'exploitation

### 3.2 Tarification RUN (mensuel)

| Offre | Nœuds max | MCO | MCS | Support | Rapport | Tarif HT/mois |
|-------|-----------|-----|-----|---------|---------|---------------|
| **Essentiel** | 5 | ✓ | ✓ | H+4 (JO) | Trimestriel | 600 € |
| **Standard** | 10 | ✓ | ✓ | H+2 (JO) | Mensuel | 900 € |
| **Premium** | 20 | ✓ | ✓ | 24/7 | Mensuel | 1 800 € |
| **Enterprise** | Illimité | ✓ | ✓ | 24/7 + dédié | Hebdo | Sur devis |

**Plages horaires de support :**

| Offre | Plage horaire | Astreinte incluse |
|-------|---------------|-------------------|
| Essentiel | Lun-Ven 9h-18h (hors jours fériés) | Non |
| Standard | Lun-Ven 9h-18h (hors jours fériés) | Non |
| Premium | 24h/24, 7j/7 | Oui |
| Enterprise | 24h/24, 7j/7 + interlocuteur dédié | Oui |

**Engagement minimum :** 12 mois
**Révision tarifaire :** annuelle, indexée sur l'évolution des coûts

**Options supplémentaires :**

| Option | Tarif HT/mois |
|--------|---------------|
| Cluster additionnel (staging/dev) | +50% |
| Réunion de suivi hebdomadaire | +200 € |

**Options astreinte (pour offres Essentiel et Standard) :**

| Option | Plage couverte | Tarif HT/mois |
|--------|----------------|---------------|
| Astreinte soir | Lun-Ven 18h-22h | +200 € |
| Astreinte week-end | Sam-Dim 9h-18h | +300 € |
| Astreinte jours fériés | Jours fériés 9h-18h | +150 € |
| Astreinte 24/7 complète | Tous les jours, toutes heures | +600 € |

> **Interventions hors plage contractuelle** : Les interventions demandées en dehors des plages horaires couvertes par le contrat sont facturées au tarif de **150 € HT/heure**, avec un minimum de 2 heures facturées.

---

## 4. DEPLOY — Déploiement et Accompagnement Applicatif

### 4.1 Services proposés

#### Containerisation d'applications

- Analyse de l'application existante
- Rédaction des Dockerfiles optimisés
- Configuration multi-stage build
- Scan de sécurité des images
- Publication sur registry privé

#### Déploiement Kubernetes

- Rédaction des manifests Kubernetes (Deployment, Service, Ingress, ConfigMap, Secret)
- Configuration des ressources (requests/limits, HPA, PDB)
- Mise en place des health checks (liveness, readiness, startup probes)
- Configuration du networking et de l'exposition
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
- Formation des équipes de développement

### 4.2 Tarification DEPLOY

#### Forfaits déploiement applicatif

Forfaits clé en main pour le déploiement complet d'une application sur le cluster Kubernetes.

| Type d'application | Complexité | Délai | Tarif HT |
|--------------------|------------|-------|----------|
| **Application simple** | 1-3 services, sans état | 2-3 jours | 1 800 € |
| **Application standard** | 4-8 services, avec BDD | 5 jours | 3 500 € |
| **Application complexe** | 10+ services, microservices | 10 jours | 7 000 € |

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
- Configuration CI/CD (voir option Toolchain)
- Environnements multiples (staging, preprod) — forfait par environnement
- Formation des équipes

#### Régie — Accompagnement sur mesure

Mode d'intervention flexible pour les besoins ponctuels ou les missions ne rentrant pas dans un forfait standard.

| Formule | Tarif HT |
|---------|----------|
| **Demi-journée** (4h) | 450 € |
| **Journée** (8h) | 850 € |
| **Forfait 5 jours** | 4 000 € |
| **Forfait 10 jours** | 7 500 € |
| **Forfait mensuel** (20 jours) | 14 000 € |

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

Pour les clients avec des besoins réguliers de déploiement et d'accompagnement.

| Forfait | Jours inclus | Tarif HT/an | Tarif jour équivalent |
|---------|--------------|-------------|----------------------|
| **DEPLOY 10** | 10 jours | 8 000 € | 800 € |
| **DEPLOY 20** | 20 jours | 15 000 € | 750 € |
| **DEPLOY 40** | 40 jours | 28 000 € | 700 € |

**Conditions des forfaits annuels :**

- Engagement : 12 mois à compter de la signature
- Facturation : 50% à la commande, 50% à 6 mois
- Utilisation : journées planifiées avec un préavis de 5 jours ouvrés
- **Report des jours non consommés** : les jours non utilisés à la date anniversaire sont reportables à hauteur de **25% du forfait** (soit 2,5 jours pour DEPLOY 10, 5 jours pour DEPLOY 20, 10 jours pour DEPLOY 40), utilisables uniquement sur le **trimestre suivant** la date anniversaire. Au-delà de ce délai, ils expirent définitivement.

---

## 5. Offres packagées

### 5.1 Pack Démarrage Kubernetes

Idéal pour une première mise en production Kubernetes.

| Inclus | Détail |
|--------|--------|
| BUILD Starter | Cluster 3 workers, 1 master, Rancher |
| RUN Essentiel (12 mois) | MCO + MCS + Support H+4 |
| DEPLOY (1 application) | Containerisation + déploiement |
| Formation | 1 journée équipe technique |

**Tarif pack :** 16 500 € HT (au lieu de 18 900 €) — **Économie : 2 400 €**

> **Option disponible** : Toolchain CI/CD complète (GitLab/Jenkins, Harbor, Trivy, OWASP ZAP, SonarQube, Vault) — +4 500 € HT

### 5.2 Pack Production

Pour les environnements de production critiques avec chaîne CI/CD complète.

| Inclus | Détail |
|--------|--------|
| BUILD Standard | Cluster HA 5 workers, 3 masters, Rancher |
| Toolchain CI/CD | GitLab/Jenkins, Harbor, Trivy, OWASP ZAP, SonarQube, Vault |
| GitOps | ArgoCD configuré |
| RUN Standard (12 mois) | MCO + MCS + Support H+2 |
| DEPLOY (3 applications) | Containerisation + déploiement |
| Formation | 2 journées |

**Tarif pack :** 32 000 € HT (au lieu de 37 600 €) — **Économie : 5 600 €**

### 5.3 Pack Enterprise

Solution complète pour les grandes organisations avec toute la stack DevSecOps.

| Inclus | Détail |
|--------|--------|
| BUILD Enterprise | Cluster HA multi-AZ 10+ workers, Rancher |
| Toolchain CI/CD | GitLab/Jenkins, Harbor, Trivy, OWASP ZAP, SonarQube, Vault |
| GitOps + Service Mesh | ArgoCD + Istio |
| RUN Premium (12 mois) | MCO + MCS + Support 24/7 |
| DEPLOY (illimité) | 20 jours de régie annuels |
| Formation | 5 journées |

**Tarif pack :** Sur devis (à partir de 60 000 € HT)

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

- **Facturation** : 50% à la commande, 50% à la livraison (BUILD/DEPLOY) | Mensuel terme à échoir (RUN)
- **Moyens de paiement** : Virement bancaire, prélèvement SEPA
- **Délai de paiement** : 30 jours date de facture
- **Révision tarifaire** : Annuelle au 1er janvier
- **Préavis résiliation** : 3 mois avant échéance (contrats RUN)
- **Clause de réversibilité** : Accompagnement inclus en fin de contrat

---

## 9. Contact

| | |
|---|---|
| **Société** | DOVEAIA |
| **Responsable** | James Kokou GAGLO |
| **Email** | jkgaglo@DOVEAIA.com |
| **Téléphone** | +33 7 49 62 49 89 |
| **Site web** | www.doveaia.com |
| **SIRET** | [À compléter] |

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

📧 jkgaglo@DOVEAIA.com | 📞 +33 7 49 62 49 89

</center>

---

*Document généré le 19 janvier 2025 — DOVEAIA © Tous droits réservés*
