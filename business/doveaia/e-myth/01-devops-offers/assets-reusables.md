# Assets Réutilisables DevOps

## Objectif
Chaque mission doit être plus rapide que la précédente grâce à ces assets.

---

## Modules Terraform

### Structure
```
terraform-modules/
├── azure/
│   ├── aks-cluster/
│   ├── vnet/
│   ├── storage-account/
│   ├── key-vault/
│   ├── container-registry/
│   └── app-service/
├── aws/
│   ├── eks-cluster/
│   ├── vpc/
│   ├── s3/
│   ├── rds/
│   └── ecr/
└── common/
    ├── tags/
    └── naming/
```

### Module AKS Cluster (Exemple)
```hcl
# modules/azure/aks-cluster/main.tf
# TODO: Créer module réutilisable

# Variables standardisées
# - cluster_name
# - location
# - node_count
# - node_size
# - kubernetes_version
# - tags

# Outputs standardisés
# - cluster_id
# - kube_config
# - cluster_fqdn
```

### Checklist Modules à Créer
- [ ] AKS cluster complet
- [ ] VNet avec subnets standards
- [ ] Key Vault avec policies
- [ ] Container Registry
- [ ] Storage Account
- [ ] App Service + Plan

---

## Helm Charts

### Structure
```
helm-charts/
├── base-app/              # App web standard
├── api-service/           # API REST/GraphQL
├── worker/                # Background jobs
├── cronjob/               # Tâches planifiées
└── monitoring-stack/      # Prometheus + Grafana
```

### Chart Base App (Template)
```yaml
# charts/base-app/values.yaml
replicaCount: 2

image:
  repository: ""
  tag: "latest"
  pullPolicy: IfNotPresent

service:
  type: ClusterIP
  port: 80

ingress:
  enabled: true
  className: nginx
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
  hosts:
    - host: app.example.com
      paths:
        - path: /
          pathType: Prefix

resources:
  limits:
    cpu: 500m
    memory: 512Mi
  requests:
    cpu: 100m
    memory: 128Mi

autoscaling:
  enabled: false
  minReplicas: 2
  maxReplicas: 10
  targetCPUUtilizationPercentage: 80
```

### Checklist Charts à Créer
- [ ] Base app avec ingress + TLS
- [ ] API avec health checks
- [ ] Worker avec queue
- [ ] CronJob template
- [ ] Stack monitoring complète

---

## Pipelines CI/CD

### GitLab CI Templates
```yaml
# .gitlab-ci-templates/docker-build.yml
.docker_build:
  stage: build
  image: docker:latest
  services:
    - docker:dind
  script:
    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .
    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
  only:
    - main
    - develop
```

```yaml
# .gitlab-ci-templates/k8s-deploy.yml
.k8s_deploy:
  stage: deploy
  image: bitnami/kubectl:latest
  script:
    - kubectl set image deployment/$APP_NAME $APP_NAME=$CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
    - kubectl rollout status deployment/$APP_NAME
```

### GitHub Actions Templates
```yaml
# .github/workflows/templates/docker-build.yml
name: Docker Build

on:
  workflow_call:
    inputs:
      image_name:
        required: true
        type: string

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: docker/setup-buildx-action@v3
      - uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      - uses: docker/build-push-action@v5
        with:
          push: true
          tags: ghcr.io/${{ github.repository }}/${{ inputs.image_name }}:${{ github.sha }}
```

### Checklist Pipelines
- [ ] Build Docker multi-stage
- [ ] Tests automatisés
- [ ] Scan sécurité (Trivy)
- [ ] Deploy K8s
- [ ] Deploy Helm
- [ ] Terraform plan/apply

---

## Ansible Playbooks

### Structure
```
ansible-playbooks/
├── roles/
│   ├── common/           # Packages de base
│   ├── docker/           # Installation Docker
│   ├── kubernetes/       # Config kubectl
│   └── monitoring/       # Node exporter
├── inventories/
│   ├── dev/
│   ├── staging/
│   └── prod/
└── playbooks/
    ├── setup-server.yml
    ├── deploy-app.yml
    └── update-system.yml
```

### Checklist Playbooks
- [ ] Setup serveur de base
- [ ] Installation Docker
- [ ] Configuration kubectl
- [ ] Installation monitoring agents

---

## Scripts Utilitaires

### Bootstrap Cluster
```bash
#!/bin/bash
# scripts/bootstrap-k8s.sh
# TODO: Script de setup initial cluster

# 1. Installer cert-manager
# 2. Configurer cluster-issuer
# 3. Installer ingress-nginx
# 4. Créer namespaces standards
# 5. Configurer RBAC de base
```

### Backup Script
```bash
#!/bin/bash
# scripts/backup-k8s.sh
# TODO: Backup des ressources K8s importantes

# 1. Export des secrets (chiffrés)
# 2. Export des configmaps
# 3. Export des PVCs
# 4. Upload vers storage sécurisé
```

### Checklist Scripts
- [ ] Bootstrap cluster K8s
- [ ] Backup automatisé
- [ ] Restore procedure
- [ ] Health check cluster
- [ ] Cost optimization report

---

## Documentation Templates

### README Projet
```markdown
# [Nom Projet] - Infrastructure

## Architecture
[Diagramme]

## Prérequis
- Terraform >= 1.5
- kubectl >= 1.28
- Helm >= 3.12

## Déploiement
1. `terraform init`
2. `terraform plan`
3. `terraform apply`

## Accès
- Cluster: `az aks get-credentials ...`
- Dashboard: https://grafana.xxx

## Contacts
- Responsable: [Nom]
- Support: [Email]
```

### Runbook Template
```markdown
# Runbook: [Nom du Service]

## Vue d'ensemble
[Description]

## Dépendances
- Database: PostgreSQL
- Cache: Redis
- Queue: RabbitMQ

## Démarrage/Arrêt
[Commandes]

## Scaling
[Procédure]

## Troubleshooting
### Problème 1: [Description]
**Symptômes:** ...
**Solution:** ...

### Problème 2: [Description]
**Symptômes:** ...
**Solution:** ...

## Contacts d'urgence
[Liste]
```

### Checklist Docs
- [ ] Template README
- [ ] Template Runbook
- [ ] Template ADR (Architecture Decision Record)
- [ ] Template Post-mortem

---

## Progression

### Semaine 1-2 : Priorités
- [ ] Module Terraform AKS
- [ ] Module Terraform VNet
- [ ] Chart Helm base-app
- [ ] Pipeline GitLab CI build+deploy

### Semaine 3-4 : Extension
- [ ] Modules Terraform restants
- [ ] Charts Helm API + Worker
- [ ] Pipeline GitHub Actions
- [ ] Scripts bootstrap

### Mois 2+ : Amélioration continue
- [ ] Retours clients intégrés
- [ ] Nouveaux modules selon demande
- [ ] Documentation enrichie

---

## Règle d'Or

> Après chaque mission, ajoute au moins 1 asset réutilisable.
> Si tu copies-colles, tu dois créer un template.

---

*Dernière mise à jour : [DATE]*
