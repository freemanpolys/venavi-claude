# Cahier des charges — SaaS **BizCraft**

> **Avertissement à mettre sur la page :**  
> Ce produit s’inspire des principes présentés dans _The E-Myth Revisited_ de Michael E. Gerber, sans affiliation officielle.

---

## 1. Présentation du projet

### Objectif

Créer un SaaS nommé **BizCraft** qui guide les entrepreneurs à travers toutes les étapes de **création, structuration et systématisation** de leur entreprise, en s’inspirant des principes du livre _The E-Myth Revisited_.

### Vision

Offrir une plateforme qui aide à :

- Identifier son profil entrepreneurial (Technicien / Manager / Entrepreneur).
    
- Concevoir les systèmes, processus et rôles clés de l’entreprise.
    
- Mettre en place une organisation reproductible et scalable.
    
- Suivre l’exécution et la croissance à travers des KPIs et roadmaps.
    

### Public cible

- Entrepreneurs individuels (SASU, micro-entreprise).
    
- Fondateurs techniques souhaitant se structurer.
    
- Coachs et consultants business.
    
- Petites agences ou indépendants voulant documenter leurs opérations.
    

---

## 2. Objectifs fonctionnels

|Objectif|Description|
|---|---|
|Diagnostic entrepreneurial (gratuit)|Questionnaire interactif sans compte, avec résumé immédiat et rapport PDF envoyé par email.|
|Roadmap personnalisée|Plan d’actions généré automatiquement selon le profil détecté.|
|Builder de processus (SOP)|Création, documentation et versioning des processus internes.|
|Gestion des rôles et organigramme|Création de fiches de poste et visualisation hiérarchique.|
|Gestion de l’offre et pricing|Définition des offres, tarifs et modèles économiques.|
|Génération de documents|Export PDF/Word (rapports, SOPs, fiches de poste).|
|Tableau de bord|Vue synthétique de la progression et des indicateurs.|
|Intégrations|Google, Notion, Stripe, etc.|
|Mode coach|Multi-tenant pour accompagner plusieurs entreprises clientes.|

---

## 3. Architecture du système

### 3.1 Schéma global

- **Frontend** : Angular standalone + Tailwind CSS
    
- **Backend** : Go (REST API )
    
- **Base de données** : PostgreSQL (Azure Database for PostgreSQL Flexible Server)
    
- **Stockage fichiers** : Azure Blob Storage
    
- **Authentification & identités** :
    
    - **Microsoft Entra External ID (Azure AD B2C)**
        
    - OAuth2 / OpenID Connect
        
    - SSO avec Microsoft, Google, LinkedIn
        
    - MFA configurable
        
    - Consentement RGPD géré par Entra
        
- **CI/CD** : GitLab CI
    
- **Hébergement** : **Azure Container Apps (ACA)**
    
    - Conteneurs Go et Angular distincts
        
    - Ingress public via HTTPS
        
    - Scaling automatique basé sur CPU/RAM ou requêtes HTTP
        
    - Secrets via Azure Key Vault
        
    - Observabilité native via Azure Monitor et Log Analytics
        
- **Monitoring** : Prometheus + Grafana (connecté à ACA)
    

---

## 4. Modèle de données

|Entité|Champs principaux|Description|
|---|---|---|
|**User**|id (Entra ID), email, display_name, role, company_id|Utilisateur du système|
|**Company**|id, name, legal_form, country|Entreprise gérée|
|**Audit**|id, email, company_id, scores {entrepreneur, manager, technician}, recommendations, report_sent|Résultats du diagnostic|
|**Process**|id, company_id, title, version, steps[]|Système / SOP|
|**Step**|id, process_id, title, description|Étape d’un processus|
|**ChecklistItem**|id, step_id, text, done, assignee_id|Élément de checklist|
|**RoleProfile**|id, company_id, title, responsibilities|Fiche de poste|
|**Document**|id, company_id, type, content, exported_at|Document généré|
|**KPI**|id, company_id, name, target, value, period|Indicateur clé de performance|

---

## 5. Parcours utilisateur

### 5.1 Diagnostic gratuit

1. L’utilisateur arrive sur `/diagnostic`.
    
2. Il complète le questionnaire (15–25 questions).
    
3. Résultat immédiat : radar **Entrepreneur / Manager / Technicien**.
    
4. Synthèse affichée à l’écran.
    
5. Formulaire :
    
    > “Renseignez votre email pour recevoir votre rapport PDF et votre plan d’action personnalisé.”
    
6. Rapport envoyé par email.
    
7. En cas de validation du lien : création automatique d’un compte **Entra External ID** (freemium).
    

### 5.2 Espace utilisateur

- Connexion via Entra (email ou SSO).
    
- Dashboard avec **roadmap personnalisée**.
    
- Création de processus, rôles, offres.
    
- Suivi de progression via KPIs.
    

### 5.3 Mode coach

- Tableau multi-entreprises.
    
- Suivi des audits clients.
    
- Export consolidé des rapports.
    

---

## 6. Fonctionnalités MVP

|Priorité|Fonctionnalité|Description|
|---|---|---|
|🟢 Haute|Diagnostic gratuit sans compte|Questionnaire + scoring + email|
|🟢 Haute|Génération rapport PDF|Résultats + recommandations|
|🟢 Haute|Auth via Entra External ID|Gestion identité & consentement|
|🟢 Haute|Process Builder|CRUD de SOPs (étapes, checklists)|
|🟡 Moyenne|Roadmap personnalisée|Actions selon profil|
|🟡 Moyenne|Dashboard|Vue synthétique progression|
|🟠 Basse|Fiches de poste|CRUD + export PDF|

---

## 7. Sécurité & conformité

- Authentification : Microsoft Entra External ID (OIDC).
    
- MFA activable.
    
- HTTPS obligatoire via ACA ingress.
    
- RGPD :
    
    - Consentement explicite à la collecte email.
        
    - Droit d’accès et suppression via Entra.
        
- Données non sauvegardées sans consentement.
    
- Sauvegardes quotidiennes (Azure Backup).
    
- Hébergement Azure France/Europe.
    

---

## 8. Modèle économique

|Plan|Prix|Contenu|
|---|---|---|
|**Gratuit**|0 €|Diagnostic + rapport PDF|
|**Pro**|29 €/mois|SOP illimités, exports, roadmap|
|**Business**|99 €/mois|Multi-entreprises, intégrations, support|
|**Coach**|199 €/mois|Comptes clients illimités, white-label, rapports avancés|

---

## 9. Roadmap prévisionnelle

|Phase|Durée|Livrables|
|---|---|---|
|**Phase 0 — Validation**|2 semaines|Prototype diagnostic public|
|**Phase 1 — MVP**|6 semaines|Diagnostic + PDF + Entra Auth + Process Builder|
|**Phase 2 — Dashboard & Roadmap**|4 semaines|KPIs et onboarding|
|**Phase 3 — Mode coach & Automatisations**|6 semaines|Multi-tenant, rappels|
|**Phase 4 — Marketplace & Templates**|8 semaines|SOPs publics, modèles légaux|

---

## 10. Tunnel marketing

|Étape|Description|Objectif|
|---|---|---|
|1️⃣|Landing page “Faites votre test gratuit BizCraft”|Génération de trafic|
|2️⃣|Questionnaire interactif|Engagement|
|3️⃣|Résultat immédiat|Valeur perçue|
|4️⃣|Saisie email|Génération de lead|
|5️⃣|Envoi du rapport + lien d’inscription|Conversion lead → utilisateur|
|6️⃣|Upsell vers Pro / Coach|Monétisation|

---

## 11. KPIs à suivre

- Taux de complétion du diagnostic
    
- Taux de saisie d’email
    
- Conversion email → compte Entra
    
- Taux d’ouverture de l’email rapport
    
- Création du premier process
    
- Conversion freemium → payant
    

---

## 12. Livrables techniques

- Template HTML + PDF du rapport
    
- API : `/api/diagnostic/submit`
    
- Connecteur Entra External ID (OAuth2 / OIDC)
    
- Envoi d’emails via Azure Communication Services / SendGrid
    
- Infrastructure déployée sur **Azure Container Apps**
    
- CI/CD GitLab avec pipelines multi-conteneurs
    
- Dashboards Grafana (usage + erreurs + métriques produit)
    

---

## 13. Équipe & rôles

|Rôle|Mission|
|---|---|
|**Product Owner**|Vision produit et priorisation|
|**Tech Lead (Go)**|Backend, PDF, intégration Entra|
|**Frontend Dev (Angular)**|Diagnostic, Dashboard|
|**UX/UI Designer**|Expérience utilisateur & design|
|**DevOps Azure**|CI/CD, Container Apps, monitoring|
|**Coach business**|Validation des contenus pédagogiques|

---

## 14. Annexes

- 📘 Référence : _The E-Myth Revisited_, Michael E. Gerber
    
- 🔗 Ressources : SOP types, fiches de poste, organigrammes
    
- 🧠 Inspirations UX : Notion, Process.st, Typeform, Trainual
    

---

© 2026 — Projet **BizCraft** — Tous droits réservés.  
Inspiré des principes de _The E-Myth Revisited_ de Michael E. Gerber, sans affiliation officielle.