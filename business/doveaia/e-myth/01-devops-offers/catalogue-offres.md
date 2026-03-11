# Catalogue Offres DevOps Packagées

## Philosophie
> "Je ne vends plus mon temps. Je vends un RÉSULTAT à prix fixe."

---

## Offre 1 : Cluster Kubernetes Production-Ready

### Description
Mise en place d'un cluster Kubernetes complet, sécurisé et prêt pour la production.

### Inclus
- [ ] Cluster K8s (AKS/EKS/GKE selon choix)
- [ ] Ingress controller configuré (Nginx/Traefik)
- [ ] Cert-manager pour SSL automatique
- [ ] Namespaces structurés (dev/staging/prod)
- [ ] RBAC configuré
- [ ] Network policies de base
- [ ] Documentation complète
- [ ] Formation équipe (2h)

### Non inclus
- Migration d'applications existantes
- CI/CD (voir offre dédiée)
- Monitoring avancé (voir offre dédiée)

### Livrables
1. Cluster opérationnel
2. Documentation technique
3. Runbook opérationnel
4. Session de transfert de compétences

### Prix
| Taille | Prix | Temps estimé |
|--------|------|--------------|
| Small (dev/staging) | 4 000€ | 2-3 jours |
| Medium (prod simple) | 6 500€ | 3-4 jours |
| Large (prod HA) | 10 000€ | 5-7 jours |

### Maintenance optionnelle
500€/mois : Support, mises à jour, monitoring

---

## Offre 2 : Pipeline CI/CD Complet

### Description
Mise en place d'un pipeline d'intégration et déploiement continu.

### Inclus
- [ ] Configuration GitLab CI / GitHub Actions / Azure DevOps
- [ ] Build automatisé (Docker)
- [ ] Tests automatisés intégrés
- [ ] Déploiement multi-environnement
- [ ] Gestion des secrets
- [ ] Notifications (Slack/Teams)
- [ ] Documentation

### Options
- [ ] Scans de sécurité (SAST/DAST) : +1 500€
- [ ] GitOps (ArgoCD/Flux) : +2 000€

### Livrables
1. Pipeline fonctionnel
2. Templates réutilisables
3. Documentation
4. Formation équipe (1h)

### Prix
| Complexité | Prix | Temps estimé |
|------------|------|--------------|
| Simple (1 app, 2 env) | 2 500€ | 1-2 jours |
| Standard (3 apps, 3 env) | 4 500€ | 2-3 jours |
| Complexe (microservices) | 7 000€ | 4-5 jours |

---

## Offre 3 : Stack Monitoring & Observabilité

### Description
Mise en place d'une solution de monitoring complète.

### Inclus
- [ ] Prometheus + Grafana
- [ ] Dashboards métiers pré-configurés
- [ ] Alerting (PagerDuty/OpsGenie/email)
- [ ] Métriques applicatives de base
- [ ] Logs centralisés (Loki/ELK light)
- [ ] Documentation

### Dashboards inclus
- Infrastructure (CPU, RAM, Disk, Network)
- Kubernetes (pods, deployments, nodes)
- Application (latence, erreurs, throughput)

### Livrables
1. Stack monitoring déployée
2. Dashboards configurés
3. Alertes configurées
4. Runbook d'incident
5. Formation équipe (1h)

### Prix
| Périmètre | Prix | Temps estimé |
|-----------|------|--------------|
| Infra seule | 2 000€ | 1 jour |
| Infra + K8s | 3 500€ | 2 jours |
| Full stack | 5 000€ | 3 jours |

### Maintenance optionnelle
300€/mois : Évolution dashboards, support alerting

---

## Offre 4 : Infrastructure as Code (Terraform)

### Description
Codification complète de votre infrastructure cloud.

### Inclus
- [ ] Modules Terraform pour votre infra
- [ ] State management sécurisé (remote backend)
- [ ] Environnements séparés (workspaces)
- [ ] Variables et outputs documentés
- [ ] CI/CD pour Terraform (plan/apply)
- [ ] Documentation

### Clouds supportés
- Azure (spécialité)
- AWS
- GCP

### Livrables
1. Code Terraform organisé
2. Modules réutilisables
3. Pipeline CI/CD Terraform
4. Documentation
5. Formation équipe (2h)

### Prix
| Complexité | Prix | Temps estimé |
|------------|------|--------------|
| Simple (10-20 ressources) | 3 500€ | 2 jours |
| Medium (20-50 ressources) | 6 000€ | 3-4 jours |
| Complexe (50+ ressources) | 10 000€+ | 5+ jours |

---

## Offre 5 : Migration Conteneurs

### Description
Conteneurisation et migration de vos applications vers Docker/Kubernetes.

### Inclus
- [ ] Audit applications existantes
- [ ] Dockerfile optimisés
- [ ] Docker Compose pour dev local
- [ ] Manifests Kubernetes
- [ ] Helm charts si pertinent
- [ ] Migration progressive
- [ ] Documentation

### Non inclus
- Refactoring applicatif
- Cluster K8s (voir offre dédiée)

### Livrables
1. Applications conteneurisées
2. Docker Compose
3. Manifests K8s / Helm charts
4. Guide de migration
5. Formation équipe (2h)

### Prix
| Nb applications | Prix | Temps estimé |
|-----------------|------|--------------|
| 1-2 apps simples | 3 000€ | 2 jours |
| 3-5 apps | 7 000€ | 4-5 jours |
| 5-10 apps | 12 000€ | 7-10 jours |
| 10+ apps | Sur devis | - |

---

## Offre 6 : Audit & Recommandations DevOps

### Description
Audit complet de votre infrastructure et pratiques DevOps.

### Inclus
- [ ] Analyse infrastructure actuelle
- [ ] Revue des pratiques CI/CD
- [ ] Évaluation sécurité
- [ ] Analyse des coûts cloud
- [ ] Rapport détaillé
- [ ] Roadmap d'amélioration priorisée

### Livrables
1. Rapport d'audit (20-30 pages)
2. Matrice de maturité DevOps
3. Roadmap recommandée
4. Estimation budgétaire
5. Présentation aux stakeholders (1h)

### Prix
| Périmètre | Prix | Temps estimé |
|-----------|------|--------------|
| Startup/PME | 2 500€ | 2-3 jours |
| ETI | 5 000€ | 4-5 jours |
| Grande entreprise | Sur devis | - |

---

## Packs Combinés (Réduction 15%)

### Pack Starter : K8s + CI/CD
- Cluster K8s Small
- Pipeline CI/CD Simple
- **Prix pack : 5 500€** (vs 6 500€)

### Pack Production : K8s + CI/CD + Monitoring
- Cluster K8s Medium
- Pipeline CI/CD Standard
- Stack Monitoring Full
- **Prix pack : 13 000€** (vs 15 500€)

### Pack Enterprise : Tout inclus
- Cluster K8s Large
- Pipeline CI/CD Complexe
- Stack Monitoring Full
- Infrastructure as Code Medium
- **Prix pack : 24 000€** (vs 28 000€)

---

## Conditions Générales

### Paiement
- 50% à la commande
- 50% à la livraison
- Maintenance : mensuel, prélevé automatiquement

### Délais
- Démarrage : sous 2 semaines après signature
- Livraison : selon durée estimée + 20% marge

### Garantie
- 30 jours de support inclus post-livraison
- Corrections bugs sans frais
- Évolutions : sur devis

### Prérequis Client
- Accès admin au cloud provider
- Point de contact technique disponible
- Environnement de test si migration

---

## Comment Commander

1. **Contact** : [email/calendly]
2. **Call découverte** (30 min gratuit)
3. **Proposition personnalisée** (sous 48h)
4. **Signature & acompte**
5. **Kick-off & livraison**

---

*Tarifs valables jusqu'au [DATE + 6 mois]*
*TVA non applicable, art. 293B du CGI* (si micro/franchise)
