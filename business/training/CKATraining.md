# CKA Certification Preparation Training

**Certified Kubernetes Administrator**

**Duration**: 5 days (35 hours)
**Level**: Intermediate to Advanced
**Prerequisites**: Hands-on Kubernetes experience and Linux system administration
**Price**: €3,200 excl. VAT / participant (exam fee not included)

---

## About CKA Certification

The **CKA** (Certified Kubernetes Administrator) certification is issued by the **Linux Foundation** and **CNCF**. It validates skills to install, configure, and administer production Kubernetes clusters.

### Exam Information

| Item | Details |
|------|---------|
| **Duration** | 2 hours |
| **Format** | Performance-based (command line) |
| **Environment** | Real Kubernetes clusters (multiple clusters) |
| **Passing score** | 66% minimum |
| **Validity** | 3 years |
| **Exam cost** | $445 USD (or course + exam bundle $645) |
| **Attempts** | 1 attempt + 1 free retake |

---

## Training Objectives

Prepare participants to pass the CKA exam by mastering:

- Kubernetes cluster installation and configuration
- Storage and network management
- Cluster and application troubleshooting
- Cluster security and access management

---

## Detailed Program

### Day 1: Cluster Architecture, Installation and Configuration (25%)

**Morning (3h30)**
- Deep dive into Kubernetes architecture
- Control Plane components and their interaction
- Worker Node components
- Internal communication process
- **Lab**: In-depth cluster exploration

**Afternoon (3h30)**
- Installing a cluster with kubeadm
- kubeadm configuration (ClusterConfiguration)
- Adding Worker Nodes
- TLS certificate management
- **Lab**: From-scratch installation of a multi-node cluster

### Day 2: Cluster Installation (continued) + Workloads and Scheduling (15%)

**Morning (3h30)**
- Upgrading Kubernetes clusters
- kubeadm upgrade process
- etcd backup and restore
- Control Plane high availability
- **Lab**: Cluster upgrade and etcd backup

**Afternoon (3h30)**
- Deployments, ReplicaSets and their management
- Scheduling: understanding kube-scheduler
- nodeSelector, affinity, and anti-affinity
- Taints and Tolerations
- **Lab**: Advanced scheduling configuration

### Day 3: Workloads (continued) + Services and Networking (20%)

**Morning (3h30)**
- Resource Limits and Requests
- LimitRanges and ResourceQuotas
- Static Pods and DaemonSets
- ConfigMaps and Secrets in depth
- **Lab**: Resource management and quotas

**Afternoon (3h30)**
- Kubernetes networking model
- CNI (Container Network Interface) and plugins
- Services: ClusterIP, NodePort, LoadBalancer, ExternalName
- Internal DNS (CoreDNS)
- **Lab**: Network configuration and debugging

### Day 4: Networking (continued) + Storage (10%) + Troubleshooting (30%)

**Morning (3h30)**
- Ingress and Ingress Controllers (Nginx, Traefik)
- NetworkPolicies: firewall rules
- Volumes: types and use cases
- PersistentVolumes and PersistentVolumeClaims
- StorageClasses and dynamic provisioning
- **Lab**: Advanced storage configuration

**Afternoon (3h30)**
- Troubleshooting methodology
- Debugging cluster components
- Debugging applications
- Logs: kubelet, API server, etcd
- Tools: kubectl describe, logs, exec, port-forward
- **Lab**: Realistic troubleshooting scenarios

### Day 5: Troubleshooting (continued) + Security + Mock Exam

**Morning (3h30)**
- Network troubleshooting
- Node troubleshooting
- RBAC: Roles, ClusterRoles, Bindings
- ServiceAccounts and tokens
- SecurityContexts and PodSecurityStandards
- **Lab**: Securing a cluster

**Afternoon (3h30)**
- **Mock Exam**: Real conditions simulation (2h)
- Group review and feedback
- Exam strategies:
  - Time management across multiple clusters
  - Navigating between kubectl contexts
  - Essential commands and documentation
- Q&A and final tips

---

## Domains Covered (Official CNCF Curriculum)

| Domain | Weight | Covered |
|--------|--------|---------|
| Cluster Architecture, Installation and Configuration | 25% | ✅ |
| Workloads and Scheduling | 15% | ✅ |
| Services and Networking | 20% | ✅ |
| Storage | 10% | ✅ |
| Troubleshooting | 30% | ✅ |

---

## CKA vs CKAD Differences

| Aspect | CKA | CKAD |
|--------|-----|------|
| **Focus** | Cluster administration | Application development |
| **Installation** | ✅ Required | ❌ Not covered |
| **etcd backup/restore** | ✅ Required | ❌ Not covered |
| **Troubleshooting** | 30% (cluster focus) | 15% (app focus) |
| **Networking** | CNI, advanced NetworkPolicies | Basic Services, Ingress |
| **Security** | RBAC, TLS certificates | SecurityContext, Secrets |

---

## Teaching Methods

- **30% Theory**: Concepts aligned with CKA curriculum
- **70% Hands-on**: Intensive exam-style exercises
- 2 mock exams with review
- Access to multi-cluster lab for 90 days

---

## Included Preparation Kit

- PDF course materials (300+ pages)
- 90-day lab access with multi-cluster environment
- 200+ exam-style practical exercises
- 2 complete mock exams
- kubeadm installation scripts
- kubectl and troubleshooting cheat sheet
- Complete revision checklist

---

## Pricing

| Option | Price excl. VAT |
|--------|-----------------|
| **Training only** | €3,200 / participant |
| **Training + exam voucher** | €3,600 / participant |
| **Private session** (up to 8 people) | €18,000 |
| **CKA + CKAD Bundle** (8 days) | €5,200 / participant |

*Exam voucher includes 1 attempt + 1 free retake (12-month validity).*

---

## Pass Guarantee

If you don't pass the exam after our training:

- **Free access** to the next preparation session (within 6 months)
- **Personalized coaching** (3h) to identify improvement areas
- **Extended lab access** for an additional 30 days

*Conditions: must have completed the full training and taken the exam within 3 months.*

---

## CKA Exam Tips

1. **Master kubeadm**: Installation is critical
2. **Practice troubleshooting**: 30% of the exam!
3. **Navigate between contexts**: `kubectl config use-context`
4. **Back up etcd**: Frequent exam exercise
5. **Know the documentation**: kubernetes.io is your friend
6. **Create aliases**: `alias k=kubectl` to save time
7. **Manage your time**: 2h for ~17 questions, prioritize

---

## Upcoming Sessions

Contact us for upcoming dates.

📧 training@akouendy.com
📞 +33 (0)1 XX XX XX XX

---

*Document updated January 19, 2025*
*Curriculum aligned with CKA v1.30 (2024)*
