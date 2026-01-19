---
tags: type/commercial-proposal
aliases:
lead: Complete Kubernetes Managed Services Proposal - Build, Run & Deploy
visual: "![[logo-akouendy.png]]"
template-type: Commercial Proposal
template-version: "1.0"
created: 2025-01-19
updated: 2025-01-19
---

![[logo-akouendy.png|center|200]]

---

# Kubernetes Managed Services Proposal
## Build | Run | Deploy

---

##### <center>By James Kokou GAGLO</center>
##### <center>Cloud & Kubernetes Expert</center>

| Version | Date             | Comments        |
| ------- | :--------------: | --------------- |
| 1.0     | January 19, 2025 | Initial version |

---

## 1. Overview

Kubernetes has become the de facto standard for container orchestration in production environments. Its implementation and operation require deep expertise to ensure performance, security, and high availability.

**AKOUENDY** offers comprehensive Kubernetes managed services covering the entire lifecycle of your infrastructure:

- **BUILD**: Initial cluster construction and deployment
- **RUN**: Operations, maintenance, and continuous evolution
- **DEPLOY**: Application deployment and support

---

## 2. BUILD — Kubernetes Cluster Construction

### 2.1 Scope of Services

| Service                        | Description                                                                               |
| ------------------------------ | ----------------------------------------------------------------------------------------- |
| **Requirements Analysis**      | Study of your application architecture, volume, performance and security constraints      |
| **Technical Architecture**     | Cluster architecture design (HA control-plane, worker nodes, networking, storage)         |
| **Infrastructure Provisioning**| Deployment of underlying infrastructure (bare-metal, public or private cloud)             |
| **Kubernetes Installation**    | RKE2 cluster deployment following best practices                                          |
| **Administration Interface**   | Rancher installation and configuration (cluster management UI)                            |
| **Network Configuration**      | CNI setup (Calico, Cilium), K8s Gateway API, Load Balancer                               |
| **Initial Security**           | RBAC, Network Policies, Pod Security Standards, TLS certificates                          |
| **Observability**              | Monitoring stack (Prometheus, Grafana) and logging (Loki or ELK)                         |
| **Backup**                     | Velero configuration for etcd and Kubernetes resources backup                             |
| **Documentation**              | Complete technical documentation and operational runbooks                                 |
| **Training**                   | Knowledge transfer to your teams (1 day included)                                         |

### 2.2 BUILD Pricing

| Tier           | Nodes       | Control-Plane             | Timeline | Price (excl. VAT) |
| -------------- | ----------- | ------------------------- | -------- | ----------------- |
| **Starter**    | 3 workers   | 1 master                  | 5 days   | €4,500            |
| **Standard**   | 5 workers   | 3 masters (HA)            | 8 days   | €7,500            |
| **Enterprise** | 10+ workers | 3 masters (HA) + multi-AZ | 12 days  | €12,000           |

**Additional Options:**

| Option                                      | Price (excl. VAT)      |
| ------------------------------------------- | ---------------------- |
| Multi-cloud / hybrid cluster                | +€3,000                |
| GitOps integration (ArgoCD/FluxCD)          | +€1,500                |
| Service Mesh (Istio/Linkerd)                | +€2,000                |
| Complete CI/CD Toolchain (GitLab or Jenkins)| +€4,500                |
| Additional staging/development cluster      | +50% of main price     |
| Additional training (per day)               | €900                   |

**Complete CI/CD Toolchain Option Details:**

Installation and configuration of a CI/CD platform integrated with the cluster:
- **GitLab** (self-hosted) or **Jenkins** based on your preferences
- Private Docker image registry (Harbor or GitLab Registry)
- Image vulnerability scanning (Trivy)
- DAST application security scanning (OWASP ZAP)
- Code quality analysis (SonarQube)
- Secrets management (Vault or Sealed Secrets)
- Ready-to-use pipeline templates
- Kubernetes cluster integration (automated deployment)

---

## 3. RUN — Managed Services & Operations

### 3.1 Included Services

#### Operational Maintenance (MCO)

- 24/7 cluster monitoring (proactive alerting)
- TLS certificate management (automated renewal)
- Operating system security updates
- Regular cleanup (orphan pods, unused images, unused PVCs)
- etcd and control-plane integrity verification
- Capacity management and scaling needs anticipation

#### Security Maintenance (MCS)

- Security watch and critical patch application
- Regular vulnerability scanning (images, configurations)
- Quarterly compliance audit (CIS Benchmark)
- Secrets and credentials rotation
- RBAC and Network Policies review

#### Support & Assistance

| Level | Availability | Response Time | Resolution Time |
|-------|--------------|---------------|-----------------|
| **Critical Incidents (P1)** | 24/7 | 30 min | 4h |
| **Major Incidents (P2)** | Business days | 2h | 8h |
| **Minor Incidents (P3)** | Business days | 4h | 24h |
| **Requests (P4)** | Business days | 8h | 48h |

**Incident Qualification Matrix:**

| Level | Qualification Criteria |
|-------|------------------------|
| **P1 — Critical** | Production completely unavailable, ongoing data loss, actively exploited security breach, impact on 100% of users |
| **P2 — Major** | Major functionality unavailable, severe performance degradation (>50%), no workaround possible, impact on >30% of users |
| **P3 — Minor** | Secondary functionality impacted, workaround available, slight performance degradation, limited impact |
| **P4 — Request** | Information request, enhancement, non-urgent configuration change, technical question |

**Classification Examples:**

| Situation | Level |
|-----------|-------|
| Kubernetes cluster down, no pods responding | P1 |
| Corrupted database, data loss | P1 |
| Main API returning 500 errors, applications down | P1 |
| Non-critical microservice unavailable | P2 |
| Slow ingress, response time x3 | P2 |
| Rancher unavailable, cluster functional (kubectl OK) | P3 |
| Certificate expiring in 7 days | P3 |
| Logs not collected for 2h | P3 |
| Need to add a namespace | P4 |
| Configuration question | P4 |

> **Reclassification Clause**: AKOUENDY reserves the right to reclassify an incident if objective criteria do not match the declared level. In case of reclassification, the client is informed with justification.

#### Included Evolutions

- 1 major Kubernetes upgrade per year (planned)
- Minor evolutions and security patches
- Configuration adjustments (quotas, limits, policies)
- Monthly operations reports

### 3.2 RUN Pricing (monthly)

| Tier | Max Nodes | MCO | MCS | Support | Report | Price/month (excl. VAT) |
|------|-----------|-----|-----|---------|--------|-------------------------|
| **Essential** | 5 | ✓ | ✓ | H+4 (BD) | Quarterly | €600 |
| **Standard** | 10 | ✓ | ✓ | H+2 (BD) | Monthly | €900 |
| **Premium** | 20 | ✓ | ✓ | 24/7 | Monthly | €1,800 |
| **Enterprise** | Unlimited | ✓ | ✓ | 24/7 + dedicated | Weekly | On quote |

**Support Hours:**

| Tier | Hours | On-call Included |
|------|-------|------------------|
| Essential | Mon-Fri 9am-6pm (excl. holidays) | No |
| Standard | Mon-Fri 9am-6pm (excl. holidays) | No |
| Premium | 24/7 | Yes |
| Enterprise | 24/7 + dedicated contact | Yes |

**Minimum commitment:** 12 months
**Price revision:** Annual, indexed on cost evolution

**Additional Options:**

| Option | Price/month (excl. VAT) |
|--------|-------------------------|
| Additional cluster (staging/dev) | +50% |
| Weekly follow-up meeting | +€200 |

**On-call Options (for Essential and Standard tiers):**

| Option | Coverage | Price/month (excl. VAT) |
|--------|----------|-------------------------|
| Evening on-call | Mon-Fri 6pm-10pm | +€200 |
| Weekend on-call | Sat-Sun 9am-6pm | +€300 |
| Holiday on-call | Holidays 9am-6pm | +€150 |
| Full 24/7 on-call | All days, all hours | +€600 |

> **Out-of-contract Interventions**: Interventions requested outside contracted hours are billed at **€150/hour (excl. VAT)**, with a minimum of 2 hours billed.

---

## 4. DEPLOY — Application Deployment & Support

### 4.1 Proposed Services

#### Application Containerization

- Existing application analysis
- Optimized Dockerfile writing
- Multi-stage build configuration
- Image security scanning
- Publication to private registry

#### Kubernetes Deployment

- Kubernetes manifests writing (Deployment, Service, Ingress, ConfigMap, Secret)
- Resource configuration (requests/limits, HPA, PDB)
- Health checks setup (liveness, readiness, startup probes)
- Networking and exposure configuration
- Persistent storage integration

#### CI/CD and GitOps

- CI/CD pipeline configuration (GitLab CI, GitHub Actions, Azure DevOps)
- GitOps setup with ArgoCD or FluxCD
- Deployment strategies (rolling update, blue-green, canary)
- Environment management (dev, staging, prod)

#### DevOps Support

- Code review and best practices
- Application performance optimization
- Debugging and incident resolution
- Development team training

### 4.2 DEPLOY Pricing

#### Application Deployment Packages

Turnkey packages for complete application deployment on the Kubernetes cluster.

| Application Type | Complexity | Timeline | Price (excl. VAT) |
|------------------|------------|----------|-------------------|
| **Simple Application** | 1-3 services, stateless | 2-3 days | €1,800 |
| **Standard Application** | 4-8 services, with DB | 5 days | €3,500 |
| **Complex Application** | 10+ services, microservices | 10 days | €7,000 |

**Included in each package:**
- Application and dependencies analysis
- Dockerfile writing or optimization
- Kubernetes manifests creation (Deployment, Service, Ingress, ConfigMap, Secret)
- Resource configuration (requests/limits, probes, HPA)
- Target environment deployment
- Functional testing and validation
- Deployment documentation (runbook)

**Not included (options or time & materials):**
- Application code modification
- CI/CD configuration (see Toolchain option)
- Multiple environments (staging, preprod) — per-environment pricing
- Team training

#### Time & Materials — Custom Support

Flexible intervention mode for ad-hoc needs or missions not fitting a standard package.

| Formula | Price (excl. VAT) |
|---------|-------------------|
| **Half-day** (4h) | €450 |
| **Full day** (8h) | €850 |
| **5-day package** | €4,000 |
| **10-day package** | €7,500 |
| **Monthly package** (20 days) | €14,000 |

**Time & Materials Use Cases:**
- Development team support (pair programming, code review)
- Application incident debugging and resolution
- Performance optimization
- Existing application migration
- Training and skill development
- Custom CI/CD pipeline setup
- Architecture consulting

**Conditions:**
- Scheduling with 5 business days notice (except emergencies)
- On-site or remote interventions as needed
- Intervention report provided

#### Annual DEPLOY Packages

For clients with regular deployment and support needs.

| Package | Days Included | Price/year (excl. VAT) | Equivalent Daily Rate |
|---------|---------------|------------------------|----------------------|
| **DEPLOY 10** | 10 days | €8,000 | €800 |
| **DEPLOY 20** | 20 days | €15,000 | €750 |
| **DEPLOY 40** | 40 days | €28,000 | €700 |

**Annual Package Conditions:**

- Commitment: 12 months from signature
- Billing: 50% at order, 50% at 6 months
- Usage: days scheduled with 5 business days notice
- **Unused days rollover**: unused days at anniversary date can be rolled over up to **25% of the package** (2.5 days for DEPLOY 10, 5 days for DEPLOY 20, 10 days for DEPLOY 40), usable only during the **following quarter** after the anniversary date. Beyond this period, they expire permanently.

---

## 5. Bundled Offers

### 5.1 Kubernetes Starter Pack

Ideal for a first Kubernetes production deployment.

| Included | Details |
|----------|---------|
| BUILD Starter | 3 workers, 1 master cluster, Rancher |
| RUN Essential (12 months) | MCO + MCS + H+4 Support |
| DEPLOY (1 application) | Containerization + deployment |
| Training | 1 day for technical team |

**Pack Price:** €16,500 (excl. VAT) (instead of €18,900) — **Savings: €2,400**

> **Available Option**: Complete CI/CD Toolchain (GitLab/Jenkins, Harbor, Trivy, OWASP ZAP, SonarQube, Vault) — +€4,500 (excl. VAT)

### 5.2 Production Pack

For critical production environments with complete CI/CD pipeline.

| Included | Details |
|----------|---------|
| BUILD Standard | HA cluster 5 workers, 3 masters, Rancher |
| CI/CD Toolchain | GitLab/Jenkins, Harbor, Trivy, OWASP ZAP, SonarQube, Vault |
| GitOps | ArgoCD configured |
| RUN Standard (12 months) | MCO + MCS + H+2 Support |
| DEPLOY (3 applications) | Containerization + deployment |
| Training | 2 days |

**Pack Price:** €32,000 (excl. VAT) (instead of €37,600) — **Savings: €5,600**

### 5.3 Enterprise Pack

Complete solution for large organizations with full DevSecOps stack.

| Included | Details |
|----------|---------|
| BUILD Enterprise | HA multi-AZ cluster 10+ workers, Rancher |
| CI/CD Toolchain | GitLab/Jenkins, Harbor, Trivy, OWASP ZAP, SonarQube, Vault |
| GitOps + Service Mesh | ArgoCD + Istio |
| RUN Premium (12 months) | MCO + MCS + 24/7 Support |
| DEPLOY (unlimited) | 20 annual support days |
| Training | 5 days |

**Pack Price:** On quote (starting from €60,000 excl. VAT)

---

## 6. Our Commitments

| Commitment | Guarantee |
|------------|-----------|
| **Cluster Availability** | 99.9% (excluding planned maintenance) |
| **Response Time** | According to contracted support level |
| **Confidentiality** | Systematic NDA, data not shared |
| **Transparency** | Detailed reports, metrics access |
| **Reversibility** | Complete documentation, exit support |

---

## 7. Technologies Mastered

| Domain                       | Technologies                                     |
| ---------------------------- | ------------------------------------------------ |
| **Kubernetes Distributions** | Vanilla (kubeadm), RKE2, AKS, EKS, GKE, OKE      |
| **Cloud Providers**          | Azure, AWS, GCP, OVHcloud, On-premise            |
| **Networking**               | Calico, Cilium, Nginx Ingress, Traefik, MetalLB  |
| **Storage**                  | Longhorn, Rook-Ceph, native CSI drivers          |
| **Observability**            | Prometheus, Grafana, Loki, Tempo, AlertManager   |
| **Security**                 | Trivy, Falco, OPA/Gatekeeper, Vault              |
| **GitOps**                   | ArgoCD, FluxCD                                   |
| **Service Mesh**             | Istio, Linkerd                                   |
| **CI/CD**                    | GitLab CI, GitHub Actions, Azure DevOps, Jenkins |

---

## 8. General Terms

- **Billing**: 50% at order, 50% at delivery (BUILD/DEPLOY) | Monthly in advance (RUN)
- **Payment Methods**: Bank transfer, SEPA direct debit
- **Payment Terms**: 30 days from invoice date
- **Price Revision**: Annual on January 1st
- **Termination Notice**: 3 months before expiry (RUN contracts)
- **Reversibility Clause**: Exit support included at contract end

---

## 9. Contact

| | |
|---|---|
| **Company** | AKOUENDY |
| **Contact** | James Kokou GAGLO |
| **Email** | jkgaglo@akouendy.com |
| **Phone** | +33 7 49 62 49 89 |
| **Website** | www.doveaia.com |
| **SIRET** | [To complete] |

---

## 10. Next Steps

1. **Discovery Call**: Understanding your needs and constraints
2. **Custom Proposal**: Offer tailored to your context
3. **Technical Validation**: Architecture review and planning
4. **Kickoff**: Project launch within 2 weeks

---

<center>

**Ready to industrialize your Kubernetes infrastructure?**

Contact us for a no-obligation discussion.

📧 jkgaglo@akouendy.com | 📞 +33 7 49 62 49 89

</center>

---

*Document generated on January 19, 2025 — AKOUENDY © All rights reserved*
