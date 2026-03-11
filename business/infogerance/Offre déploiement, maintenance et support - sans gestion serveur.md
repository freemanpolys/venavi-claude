# Offre Déploiement, Maintenance & Support Applicatif

**Applications Angular & Spring Boot — Environnement 3 serveurs (dev, staging, production)**
**Périmètre : applicatif uniquement — gestion serveur assurée par votre équipe interne**

---

## Ce que nous faisons pour vous

Votre équipe interne gère vos serveurs. Nous prenons en charge tout ce qui concerne votre application :

- **Configurer** vos serveurs pour le bon fonctionnement de l'application (reverse proxy, runtime, variables d'environnement, pipelines CI/CD)
- **Déployer** vos nouvelles versions de manière fiable et reproductible
- **Maintenir** votre application à jour, sécurisée et performante
- **Intervenir** rapidement en cas d'incident applicatif

---

## Qui fait quoi

Pour éviter toute ambiguïté, voici la répartition des responsabilités entre votre équipe et la nôtre.

### Nous (périmètre applicatif)

- Configuration applicative des serveurs (Nginx/reverse proxy, runtime Java/Node, variables d'environnement)
- Pipelines de déploiement (CI/CD, scripts, procédures)
- Mise à jour des dépendances applicatives (Spring Boot, Angular, librairies)
- Patchs de sécurité sur les frameworks et le runtime (JVM, Node.js)
- Diagnostic et résolution des incidents applicatifs
- Optimisation des performances de l'application

### Votre équipe interne (périmètre serveur)

- Administration système (OS, comptes, accès SSH)
- Mises à jour et patchs du système d'exploitation
- Gestion réseau et pare-feu
- Sauvegardes et restauration
- Monitoring infrastructure (CPU, RAM, disque)
- Gestion des certificats SSL
- Espace disque et rotation des logs système

### Responsabilités partagées

| Sujet | Nous | Votre équipe |
|-------|------|--------------|
| Certificats SSL | Signalement du renouvellement nécessaire | Installation et renouvellement |
| Espace disque | Alerter si les logs applicatifs grossissent | Surveiller et agir sur le stockage |
| Incidents | Diagnostic applicatif, correction | Diagnostic infrastructure, escalade |
| Accès serveur | Demander les accès nécessaires | Fournir et maintenir les accès |

---

## Prérequis de votre côté

Pour que nous puissions intervenir efficacement, votre équipe doit garantir :

- Un accès SSH opérationnel aux 3 serveurs
- Un environnement serveur fonctionnel (OS à jour, ports ouverts, ressources suffisantes)
- Un interlocuteur technique identifié pour les sujets infrastructure
- Un délai de réponse raisonnable sur les demandes d'accès ou de configuration serveur

---

## Choisissez votre niveau de service

### Basic — 5 000 € HT / an

Pour les applications stables, avec peu de mises en production.

**Déploiements** : jusqu'à 5 par an

**Ce qui est inclus :**
- Configuration initiale des serveurs pour l'application
- Correction des bugs signalés
- Patchs de sécurité critiques sur les frameworks et le runtime
- Support par ticket — réponse sous 1 jour ouvré
- Diagnostic et résolution d'erreurs applicatives

---

### Standard — 10 000 € HT / an

Pour les applications actives, avec des mises à jour régulières.

**Déploiements** : jusqu'à 10 par an

**Ce qui est inclus (tout le Basic +) :**
- Mise à jour des dépendances Spring Boot et Angular
- Mise à jour du runtime Java et Node.js
- Maintenance des pipelines CI/CD
- Support prioritaire — réponse sous 4 heures ouvrées
- Intervention en cas d'indisponibilité applicative
- Assistance technique à vos équipes internes

---

### Premium — 22 000 € HT / an

Pour les applications critiques qui ne peuvent pas se permettre de tomber.

**Déploiements** : jusqu'à 20 par an

**Ce qui est inclus (tout le Standard +) :**
- Optimisation des performances applicatives
- Revue technique trimestrielle
- Maintien en conditions opérationnelles complet (MCO applicatif)
- Astreinte 24h/24, 7j/7 sur le périmètre applicatif
- Intervention prioritaire sur incidents critiques
- Analyse de performance post-incident

---

## Comparatif rapide

|                                    | Basic       | Standard     | Premium      |
|------------------------------------|:-----------:|:------------:|:------------:|
| **Déploiements / an**              | 5           | 10           | 20           |
| Configuration serveur applicative  | oui         | oui          | oui          |
| Patchs sécurité frameworks/runtime | oui         | oui          | oui          |
| Correction de bugs                 | oui         | oui          | oui          |
| Mise à jour dépendances            | —           | oui          | oui          |
| Mise à jour runtime (JVM, Node)    | —           | oui          | oui          |
| Maintenance pipelines CI/CD        | —           | oui          | oui          |
| Optimisation performances          | —           | —            | oui          |
| Revue technique trimestrielle      | —           | —            | oui          |
| **Temps de réponse**               | J+1 ouvré   | ≤ 4h ouvrées | Prioritaire  |
| **Astreinte 24/7**                 | —           | —            | oui          |
| **Prix annuel HT**                 | 5 000 €     | 10 000 €     | 22 000 €     |

---

## Ce qui n'est pas inclus

Quelle que soit la formule choisie :

- Développement de nouvelles fonctionnalités
- Refonte d'architecture applicative
- Migration majeure d'infrastructure
- Administration système et réseau (responsabilité de votre équipe)
- Gestion des sauvegardes, du pare-feu et des certificats SSL
- Intervention sur des composants tiers hors de notre périmètre

Ces prestations peuvent être proposées sur devis, en régie ou au forfait.

---

## Questions fréquentes

**Que se passe-t-il si mon serveur tombe et que l'application est inaccessible ?**
Nous diagnostiquons immédiatement si le problème est applicatif. Si c'est un problème serveur (réseau, disque, OS), nous alertons votre équipe et collaborons avec elle pour rétablir le service.

**Qui gère les certificats SSL ?**
Votre équipe. Nous vous signalons les expirations à venir et nous assurons que l'application est correctement configurée pour les utiliser.

**Que se passe-t-il si je dépasse mon quota de déploiements ?**
Chaque déploiement supplémentaire est facturé unitairement. Le tarif exact est défini dans le contrat.

**Puis-je changer d'offre en cours d'année ?**
Oui, vous pouvez passer à une offre supérieure à tout moment. Le complément est calculé au prorata.

**Qu'est-ce qui déclenche un ticket de support ?**
Tout incident ou dysfonctionnement applicatif : erreur, lenteur anormale, indisponibilité de l'application. Les demandes de nouvelles fonctionnalités et les problèmes purement serveur ne sont pas des tickets de support.

**L'astreinte 24/7 couvre-t-elle aussi les problèmes serveur ?**
Non. L'astreinte couvre le périmètre applicatif. Si un incident applicatif nécessite une action côté serveur, nous contactons votre équipe pour coordonner l'intervention.

**De quoi avez-vous besoin pour démarrer ?**
Un accès SSH aux 3 serveurs, les spécifications de l'environnement actuel (OS, versions, architecture), et un interlocuteur technique identifié côté infrastructure.
