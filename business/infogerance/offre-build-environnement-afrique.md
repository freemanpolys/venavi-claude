# Offre BUILD — Mise en Place d'Environnements Applicatifs

**Applications Angular & Spring Boot — Serveurs / VMs Linux**

---

## Ce que nous faisons pour vous

Nous construisons et configurons vos environnements serveur de A à Z pour que vos équipes de développement puissent déployer immédiatement. À la fin de la prestation, vous disposez d'une infrastructure prête à l'emploi, documentée et sécurisée.

---

## Périmètre de la prestation

| Prestation | Description |
|------------|-------------|
| **Analyse des besoins** | Étude de votre architecture applicative, volumétrie, contraintes de performance et sécurité |
| **Provisioning serveurs** | Installation et configuration du système d'exploitation Linux (Ubuntu, Debian, RHEL) |
| **Hardening sécurité** | Sécurisation OS (pare-feu, SSH, fail2ban, désactivation services inutiles, mises à jour) |
| **Stack applicative** | Installation et configuration JVM, serveur d'applications (Tomcat, Spring Boot embedded), serveur web (Nginx) |
| **Base de données** | Installation et configuration PostgreSQL, MySQL ou MongoDB selon vos besoins |
| **Certificats SSL** | Mise en place Let's Encrypt ou certificats fournis, configuration HTTPS |
| **Configuration DNS** | Paramétrage DNS et configuration des virtual hosts |
| **Monitoring initial** | Mise en place du monitoring de disponibilité et alertes basiques |
| **Sauvegarde** | Configuration des sauvegardes automatisées (base de données + fichiers applicatifs) |
| **Documentation** | Documentation technique complète et runbook opérationnel |

---

## Architecture et tarification

### Essentiel — 2 serveurs

Architecture minimale pour une application en production.

| Serveur | Rôle |
|---------|------|
| **Serveur 1** | Application (Angular + Spring Boot + Nginx) |
| **Serveur 2** | Base de données (actif) |

| Prestation | Délai | Tarif HT |
|------------|-------|----------|
| Installation & configuration complète | 2 jours | **1 600 €** |

---

### Standard — 3 serveurs (HA applicative)

Haute disponibilité sur la couche applicative avec load balancing.

| Serveur | Rôle |
|---------|------|
| **Serveur 1** | Application (Angular + Spring Boot + Nginx) |
| **Serveur 2** | Application (Angular + Spring Boot + Nginx) |
| **Serveur 3** | Base de données (actif) |

**Inclus en plus :** Load balancer (HAProxy ou Nginx) pour la répartition de charge entre les 2 serveurs applicatifs.

| Prestation | Délai | Tarif HT |
|------------|-------|----------|
| Installation & configuration complète | 4 jours | **2 800 €** |

---

### Premium — 5 serveurs (HA complète + observabilité)

Haute disponibilité sur toutes les couches avec observabilité dédiée.

| Serveur       | Rôle                                                                |
| ------------- | ------------------------------------------------------------------- |
| **Serveur 1** | Application (Angular + Spring Boot + Nginx)                         |
| **Serveur 2** | Application (Angular + Spring Boot + Nginx)                         |
| **Serveur 3** | Base de données — actif (primaire)                                  |
| **Serveur 4** | Base de données — passif (réplica, bascule manuelle/automatique)    |
| **Serveur 5** | Observabilité (logs, métriques, traces — Prometheus, Grafana, Loki) |

**Inclus en plus :**
- Load balancer (HAProxy ou Nginx) pour la répartition de charge applicative
- Réplication BDD actif/passif avec bascule automatique (failover)
- Stack d'observabilité complète : Prometheus + Grafana (métriques), Loki (logs), Tempo (traces)
- Dashboards préconfigurés et alerting proactif

| Prestation | Délai | Tarif HT |
|------------|-------|----------|
| Installation & configuration complète | 10 jours | **6 000 €** |

---

### Comparatif

|                                        | Essentiel (2 srv) | Standard (3 srv) | Premium (5 srv) |
| -------------------------------------- | :----------------: | :--------------: | :-------------: |
| **Tarif HT**                           | 1 600 €            | 2 800 €          | 6 000 €         |
| **Délai**                              | 2 jours            | 4 jours          | 10 jours        |
| Hardening sécurité                     | oui                | oui              | oui             |
| Stack applicative (JVM/Nginx)          | oui                | oui              | oui             |
| Base de données                        | oui                | oui              | oui             |
| SSL / HTTPS                            | oui                | oui              | oui             |
| Configuration DNS                      | oui                | oui              | oui             |
| Monitoring initial                     | oui                | oui              | oui             |
| Sauvegarde automatisée                 | oui                | oui              | oui             |
| Documentation & runbook                | oui                | oui              | oui             |
| **HA applicative (load balancer)**     | —                  | oui              | oui             |
| **HA base de données (actif/passif)**  | —                  | —                | oui             |
| **Observabilité dédiée (Prometheus, Grafana, Loki)** | —    | —                | oui             |

---

## Options supplémentaires

| Option | Tarif HT |
|--------|----------|
| **CI/CD complète** (GitLab CI, GitHub Actions ou Jenkins intégré) | +2 000 € |
| **Serveur supplémentaire** (au-delà du forfait) | +650 € |
| **Formation équipe** (1 journée transfert de compétences) | 1 000 € |

---

## Ce qui n'est pas inclus

- Coût d'hébergement des serveurs/VMs (cloud provider ou hébergeur)
- Achat de noms de domaine
- Développement applicatif
- Migration de données depuis un environnement existant (sur devis)
- Licences logicielles tierces (si applicable)

---

## Conditions

- **Facturation** : 50% à la commande, 50% à la livraison
- **Délai de démarrage** : sous 5 jours ouvrés après validation de la commande
- **Prérequis client** : accès root/administrateur aux serveurs, accès DNS, informations d'architecture applicative
- **Garantie** : intervention corrective gratuite pendant 30 jours après livraison
- **Interventions à distance** : toutes les interventions sont réalisées à distance via accès sécurisé (SSH/VPN)
- **Moyens de paiement** : Virement bancaire, transfert international

---

## Questions fréquentes

**Qui fournit les serveurs ?**
Vous fournissez les serveurs (cloud ou hébergeur de votre choix). Nous pouvons vous conseiller sur le dimensionnement et le choix du provider si nécessaire.

**Puis-je combiner BUILD + RUN ?**
Oui. Si vous souscrivez un contrat RUN (exploitation & maintenance) dans la foulée du BUILD, vous bénéficiez d'une **remise de 10%** sur le forfait BUILD.

**Que se passe-t-il si j'ai besoin de serveurs supplémentaires plus tard ?**
Chaque serveur additionnel est facturé **650 € HT** unitairement, avec le même niveau de prestation.

**Mes serveurs sont déjà installés mais mal configurés, pouvez-vous intervenir ?**
Oui. Nous proposons un **audit de reprise** pour évaluer l'existant et remettre à niveau. Tarif : 1 000 € HT (1 à 5 serveurs) ou sur devis au-delà.

**Quelle est la différence entre les offres BUILD et RUN ?**
Le BUILD est une prestation ponctuelle de construction d'infrastructure. Le RUN est un contrat annuel d'exploitation et de maintenance. Les deux sont complémentaires : le BUILD met en place, le RUN maintient en condition opérationnelle.

**Comment se déroulent les interventions à distance ?**
Toutes les interventions sont réalisées à distance via accès sécurisé (SSH/VPN). Le décalage horaire entre la France et l'Afrique de l'Ouest (UTC vs UTC+1) est minimal et n'impacte pas la réactivité.
