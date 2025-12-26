# Agent FAQ : Plateforme SaaS Multi-Canal

**Évolution de l'Agent #1** : De quick win interne → Produit SaaS commercial
**Effort** : 6-8 semaines (MVP SaaS)
**ROI** : 🔥🔥🔥 Très élevé (produit récurrent)
**Modèle** : SaaS + Self-Hosted

---

## 🎯 Vision Produit

### De Quick Win à Produit SaaS

**Phase 1 (Semaine 1-2)** : Agent FAQ pour Doveaia (usage interne)
- Widget simple sur doveaia.fr
- 30 Q/R Doveaia
- 1 tenant (nous)

**Phase 2 (Semaine 3-8)** : **Plateforme SaaS Multi-Tenant**
- Dashboard client : Upload docs, config agent
- 3 canaux : Widget / Chatwoot / Teams
- Multi-tenant : Isolation données par client
- **Modèle business** : SaaS + Self-Hosted

---

## 💼 Modèle Business : 4 Options Chatwoot

### Vue d'ensemble des Modèles

Le produit SaaS propose **4 approches** pour l'intégration Chatwoot, chacune adaptée à un segment client différent :

1. **Chatwoot Cloud SaaS** : Client s'abonne directement à Chatwoot + Notre intégration agent IA (19€/mois + 19$/mois Chatwoot)
2. **Managed Doveaia** : Nous hébergeons et maintenons Chatwoot (149€/mois) ⭐ **RECOMMANDÉ**
3. **Self-Hosted Client** : Client installe Chatwoot lui-même (2 500€ one-time)
4. **Hybrid** : Offrir les 3 options selon le profil client

---

### Option 1 : Chatwoot Cloud SaaS (Intégration Simple)

#### Fonctionnement

**Le client s'abonne directement à Chatwoot Cloud** (chatwoot.com) :
- Compte Chatwoot Cloud : 19$/mois (plan Hacker)
- Notre intégration agent IA : **19€/mois** (add-on Doveaia)
- **Total client : ~38€/mois** (19$ Chatwoot + 19€ Doveaia)

**Workflow** :
```
1. Client crée compte sur app.chatwoot.com
2. Chatwoot lui facture 19$/mois directement
3. Client connecte son compte Chatwoot à notre plateforme (API key)
4. On configure webhook Chatwoot → Notre API
5. Notre agent IA répond automatiquement
```

**Architecture** :
```
Client Chatwoot Cloud (app.chatwoot.com)
    ↓ Webhook
Notre API (api.doveaia.fr)
    ↓
Agent IA Doveaia (Go + Eino)
    ↓ Réponse
Chatwoot Cloud → Visiteur
```

#### Pricing Chatwoot Cloud

**Plans Chatwoot officiels** :
- **Hacker** : 19$/mois (2 agents, 10 000 contacts)
- **Startup** : 49$/mois (5 agents, 25 000 contacts)
- **Business** : 99$/mois (agents illimités)

**Notre add-on** :
- **Intégration Agent IA** : **19€/mois**
  - Connexion webhook
  - Agent IA Doveaia
  - 1 000 conversations/mois
  - Support email

#### Avantages Client

✅ **Le moins cher** : 38€/mois total (vs 149€ Managed)
✅ **Infrastructure Chatwoot gérée** : Par Chatwoot directement
✅ **Marque connue** : Chatwoot = leader open-source
✅ **Scalable** : Plans Chatwoot jusqu'à illimité
✅ **Support Chatwoot** : Inclus dans leur abonnement

#### Avantages pour Doveaia

✅ **Pas d'infrastructure** : Zéro coût hébergement Chatwoot
✅ **Simple à déployer** : Juste un webhook à configurer
✅ **Marque établie** : Chatwoot vend pour nous
✅ **Scalable** : Pas de limite nombre clients

#### Inconvénients pour Doveaia

❌ **Marge faible** : 19€/mois (vs 97€ pour Managed)
❌ **Pas de contrôle** : Si Chatwoot a un incident, on ne peut rien faire
❌ **Dépendance** : Client peut se désabonner de nous, garder Chatwoot
❌ **Pas de lock-in** : Client peut changer d'intégrateur facilement

#### ROI Chatwoot Cloud

**À 10 clients** :
- Revenue : 19€ × 10 = **190€/mois MRR** (2 280€/an)
- Coût infra : 5€/mois (compute agent IA partagé)
- **Marge nette : 185€/mois (2 220€/an)**

**À 50 clients** :
- Revenue : 19€ × 50 = **950€/mois MRR** (11 400€/an)
- Coût infra : 20€/mois (compute)
- **Marge nette : 930€/mois (11 160€/an)**

**Comparaison avec Managed** :
- 50 clients Chatwoot Cloud : 11 400€/an marge
- 50 clients Managed : 65 400€/an marge
- **Managed = 5,7× plus rentable**

#### Intégration Technique

**Étape 1 : Client crée compte Chatwoot Cloud**
```
1. Client va sur https://app.chatwoot.com/signup
2. Crée compte (email + password)
3. Chatwoot lui facture 19$/mois (Stripe)
```

**Étape 2 : Configuration dans notre dashboard**
```typescript
// Dashboard Doveaia > Integrations > Chatwoot Cloud
export class ChatwootCloudIntegrationComponent {
  connectChatwootCloud() {
    const config = {
      chatwoot_account_id: this.form.value.accountId,
      chatwoot_api_key: this.form.value.apiKey,
      chatwoot_inbox_id: this.form.value.inboxId
    };

    this.http.post('/api/v1/integrations/chatwoot-cloud', config)
      .subscribe({
        next: () => {
          this.showMessage('Chatwoot Cloud connected successfully!');
        }
      });
  }
}
```

**Étape 3 : Backend configure webhook automatiquement**
```go
// internal/handler/integration_chatwoot_cloud.go
package handler

import (
    "context"
    "github.com/cloudwego/hertz/pkg/app"
)

type ConnectChatwootCloudRequest struct {
    ChatwootAccountID int    `json:"chatwoot_account_id" binding:"required"`
    ChatwootAPIKey    string `json:"chatwoot_api_key" binding:"required"`
    ChatwootInboxID   int    `json:"chatwoot_inbox_id" binding:"required"`
}

func ConnectChatwootCloudHandler(ctx context.Context, c *app.RequestContext) {
    tenantID := c.GetString("tenant_id")

    var req ConnectChatwootCloudRequest
    if err := c.BindAndValidate(&req); err != nil {
        c.JSON(400, map[string]string{"error": "Invalid request"})
        return
    }

    // Configurer webhook Chatwoot → Notre API
    webhookURL := fmt.Sprintf("https://api.doveaia.fr/chatwoot-cloud/%s", tenantID)

    err := chatwoot.CreateWebhook(
        accountID: req.ChatwootAccountID,
        apiKey: req.ChatwootAPIKey,
        webhookURL: webhookURL,
        events: []string{"message_created"},
    )
    if err != nil {
        c.JSON(500, map[string]string{"error": "Failed to create webhook"})
        return
    }

    // Sauvegarder config en DB
    integration := &models.Integration{
        TenantID:          tenantID,
        Type:              "chatwoot_cloud",
        ChatwootAccountID: req.ChatwootAccountID,
        ChatwootAPIKey:    req.ChatwootAPIKey,
        ChatwootInboxID:   req.ChatwootInboxID,
        Status:            "active",
    }
    db.Create(integration)

    c.JSON(200, map[string]interface{}{
        "message": "Chatwoot Cloud connected",
        "webhook_url": webhookURL,
    })
}
```

**Étape 4 : Webhook handler (même code que Self-Hosted)**
```go
// internal/handler/chatwoot_webhook.go
func ChatwootCloudWebhookHandler(ctx context.Context, c *app.RequestContext) {
    tenantID := c.Param("tenant_id")

    // Parse webhook payload
    var webhook ChatwootWebhook
    if err := c.BindJSON(&webhook); err != nil {
        c.JSON(400, map[string]string{"error": "Invalid payload"})
        return
    }

    // Ignorer messages bot (éviter boucle)
    if webhook.MessageType == "outgoing" {
        c.JSON(200, map[string]string{"status": "ignored"})
        return
    }

    // Get agent pour ce tenant
    faqAgent, _ := agentPool.GetOrCreate(ctx, tenantID)

    // Run agent
    response, err := faqAgent.Chat(ctx, tenantID, webhook.Content)
    if err != nil {
        c.JSON(500, map[string]string{"error": "Agent failed"})
        return
    }

    // Envoyer réponse à Chatwoot Cloud via leur API
    integration, _ := getIntegration(tenantID)
    err = chatwoot.SendMessage(
        accountID: integration.ChatwootAccountID,
        apiKey: integration.ChatwootAPIKey,
        conversationID: webhook.ConversationID,
        message: response,
    )

    c.JSON(200, map[string]string{"status": "replied"})
}
```

#### Segment Client Chatwoot Cloud

**Profil client idéal** :
- Petites entreprises (< 50 employés)
- Budget limité (< 50€/mois)
- Veulent marque connue (Chatwoot)
- Pas besoin customisation poussée
- OK avec dépendance tier externe

**Tunnel de conversion** :
```
1. Client découvre notre offre "Agent IA pour Chatwoot"
2. On propose : "Vous avez déjà Chatwoot ? Oui / Non"
3. Si OUI → Chatwoot Cloud (19€/mois intégration)
4. Si NON → Managed (149€/mois tout inclus) ⭐ RECOMMANDÉ
```

---

### Option 2 : Self-Hosted Client (Moins Rentable)

#### Fonctionnement

**Le client installe Chatwoot lui-même** :
```bash
# Client exécute sur son serveur
git clone https://github.com/chatwoot/chatwoot
docker-compose up
```

**Puis connecte notre agent IA** :
- Configure webhook Chatwoot → Notre API
- Webhook URL : `https://api.doveaia.fr/chatwoot/{tenant-id}`
- Notre agent IA répond via API Doveaia

#### Pricing Self-Hosted

- **Installation + Intégration** : 2 500€ one-time
- **Support annuel optionnel** : 500€/an
- **Code source** : Accès complet backend + agent
- **Déploiement** : Client héberge sur son infrastructure

**Détail 2 500€** :
- 1 jour setup Chatwoot chez client (infrastructure)
- 1 jour configuration webhook + agent
- 1 jour formation équipe client
- Documentation technique

#### Avantages Client

✅ **Contrôle total** : Données chez eux, leur infrastructure
✅ **Conformité** : Secteurs réglementés (Banque, Santé, Défense)
✅ **Pas de dépendance** : Fonctionne sans nous après setup
✅ **Coût prévisible** : One-time, pas d'abonnement

#### Inconvénients pour Doveaia

❌ **Pas de revenu récurrent** : 2 500€ puis plus rien (sauf support 500€/an)
❌ **Support complexe** : Client gère Chatwoot, on ne contrôle pas l'infra
❌ **Pas scalable** : Chaque client = intervention manuelle lourde
❌ **Churn élevé** : Client peut arrêter de payer agent IA, garde Chatwoot

**ROI** : 2 500€ one-time = 5 jours travail → Rentable mais pas récurrent

---

### Option 3 : Managed Chatwoot par Doveaia ⭐ RECOMMANDÉ

#### Fonctionnement

**Nous installons et maintenons Chatwoot pour chaque client** :
- 1 instance Chatwoot par client (isolation complète)
- Hébergement sur notre infra (Azure Kubernetes ou Container Apps)
- Agent IA pré-intégré (pas de configuration client)
- Maintenance incluse (updates, backups, monitoring)
- URL dédiée : `https://chat-{client-id}.doveaia.fr`

#### Architecture Managed Multi-Tenant

```
Azure Kubernetes Service (ou Container Apps)
├─ Namespace: tenant-abc
│   ├─ Chatwoot Pod (Docker)
│   ├─ PostgreSQL (Azure Database)
│   ├─ Redis (Azure Cache)
│   └─ Ingress: chat-abc.doveaia.fr
│
├─ Namespace: tenant-xyz
│   ├─ Chatwoot Pod
│   ├─ PostgreSQL
│   ├─ Redis
│   └─ Ingress: chat-xyz.doveaia.fr
│
└─ Shared Services
    ├─ Agent IA Doveaia (Go backend)
    ├─ Monitoring (Prometheus)
    └─ Backups (Azure Storage)
```

#### Pricing Managed

**Plan Managed** : **149€/mois**
- Chatwoot hébergé et maintenu
- Agent IA intégré (2 000 conversations/mois)
- Support prioritaire
- Backups quotidiens
- SSL inclus (Let's Encrypt auto)
- Personnalisation branding client
- URL dédiée

**Setup initial** :
- 500€ one-time (configuration initiale)
- **OU Inclus** si engagement 12 mois

#### Détail Coûts Infra (par client)

| Ressource | Coût mensuel |
|-----------|--------------|
| Azure Container Instance (Chatwoot) | 20€ |
| PostgreSQL (Azure DB Basic) | 15€ |
| Redis (Azure Cache Basic) | 10€ |
| Storage (backups) | 2€ |
| Compute agent IA (partagé) | 5€ |
| **Total infra/client** | **52€/mois** |

**Marge** :
- Revenue : 149€/mois
- Coût infra : 52€/mois
- **Marge brute : 97€/mois (65%)**

#### Avantages Client

✅ **Clé en main** : Pas de gestion technique
✅ **Maintenance incluse** : Updates automatiques
✅ **Support inclus** : On gère les incidents
✅ **Agent IA pré-intégré** : Fonctionne immédiatement
✅ **Scalable** : On augmente ressources si besoin
✅ **Sécurité** : SSL, backups, monitoring inclus

#### Avantages pour Doveaia

✅ **Revenu récurrent** : 149€/mois/client (MRR)
✅ **Contrôle total** : On maîtrise l'infra, pas de surprise
✅ **Scalabilité** : Automatisable (Terraform, CI/CD)
✅ **Upsell facile** : Client satisfait → Augmente plan
✅ **Rétention élevée** : Difficile de partir (migration complexe)
✅ **Cross-sell** : Ajouter Teams app, Analytics, etc.

#### ROI Managed

**À 10 clients** :
- Revenue : 1 490€/mois MRR (17 880€/an)
- Coût infra : 520€/mois (6 240€/an)
- **Marge nette : 970€/mois (11 640€/an)**

**À 50 clients** :
- Revenue : 7 450€/mois MRR (89 400€/an)
- Coût infra : ~2 000€/mois (économies d'échelle, 40€/client)
- **Marge nette : 5 450€/mois (65 400€/an, marge 73%)**

#### Automatisation Provisioning Managed

**Workflow nouveau client** (15 minutes automatisées) :

1. Client signe contrat Managed (149€/mois)
2. Script Terraform exécute :
   - Crée namespace Kubernetes
   - Déploie Chatwoot (Helm chart)
   - Provisionne PostgreSQL + Redis
   - Configure DNS : `chat-{client-id}.doveaia.fr`
   - Configure SSL (Let's Encrypt auto)
   - Intègre agent IA (webhook pré-configuré)
3. Email client : "Votre Chatwoot est prêt : https://chat-abc.doveaia.fr"
4. **Durée : 15 minutes automatisées**

---

### Option 4 : Hybrid (Offrir les 3)

#### Stratégie Commerciale Hybrid

**Proposer les 3 options selon le profil client** :

**Segment A : Chatwoot Cloud (20-30% clients)**
- **Profil** :
  - Petites entreprises (< 50 employés)
  - Budget très limité (< 50€/mois)
  - Ont déjà un compte Chatwoot Cloud
  - Veulent juste ajouter l'agent IA

- **Offre** :
  - Chatwoot Cloud + Intégration : **19€/mois**
  - On fournit : Webhook + Agent IA + Support email

**Segment B : Managed (60-70% clients)** ⭐ **PUSH PRINCIPAL**
- **Profil** :
  - PME/ETI sans équipe DevOps
  - Veulent solution clé en main
  - Préfèrent OpEx (mensuel) vs CapEx (one-time)
  - Budget récurrent OK (100-200€/mois)

- **Offre** :
  - Managed : **149€/mois**
  - On fournit : Hébergement + Maintenance + Support + Agent IA

**Segment C : Self-Hosted (5-10% clients)**
- **Profil** :
  - Grands comptes (CAC40, secteur régulé)
  - Exigence souveraineté données
  - Équipe IT forte (peuvent gérer Chatwoot)
  - Budget one-time disponible

- **Offre** :
  - Self-hosted : **2 500€** + 500€/an support
  - On fournit : Documentation, formation, support technique

#### Message Commercial Hybrid

> "Nous proposons **3 options Chatwoot + Agent IA** :
>
> **Option 1 : Chatwoot Cloud** (le moins cher) : 19€/mois
> - Vous avez déjà un compte Chatwoot Cloud
> - On connecte notre agent IA via webhook
> - Support email inclus
> - Idéal pour : Petites entreprises, budget limité
>
> **Option 2 : Managed** (recommandée ⭐) : 149€/mois
> - Nous hébergeons et maintenons Chatwoot pour vous
> - Agent IA pré-intégré, backups, SSL, monitoring
> - Support prioritaire, zéro gestion technique
> - Idéal pour : PME, ETI, startups
>
> **Option 3 : Self-Hosted** : 2 500€ one-time
> - Vous installez Chatwoot sur votre infrastructure
> - Nous intégrons notre agent IA
> - Support annuel optionnel : 500€
> - Idéal pour : Grands comptes, secteurs réglementés, équipes IT matures"

---

### Comparaison Finale des 4 Options

| Critère | Chatwoot Cloud | Managed Doveaia | Self-Hosted | Hybrid |
|---------|----------------|-----------------|-------------|--------|
| **Revenue/client/an** | 228€ (19€×12) | 1 788€ (149€×12) | 2 500€ one-time | Mixte |
| **Marge/client/an** | ~200€ (88%) | ~1 164€ (65%) | ~2 250€ (90%) | Mixte |
| **Récurrence** | ✅ Oui (MRR) | ✅ Oui (MRR) | ❌ Non | ✅ Majorité MRR |
| **Scalabilité** | ✅ Totale (zéro infra) | ✅ Automatisable | ❌ Manuel | ⚠️ Moyen |
| **Rétention** | ⚠️ Faible (facile partir) | ✅ Élevée (lock-in) | ⚠️ Faible | ⚠️ Moyen |
| **Complexité ops** | ✅ Très simple (webhook) | ⚠️ Infra à gérer | ⚠️ Support difficile | ⚠️ 3 modes |
| **Churn risk** | ⚠️ Élevé | ✅ Faible | ⚠️ Élevé | ⚠️ Moyen |
| **Coûts infra** | 5€/client/mois | 52€/client/mois | 0€ | Variable |

---

### Simulation Revenus (10 Clients)

**Scénario A : 100% Chatwoot Cloud**
- 10 clients × 19€/mois = **2 280€/an**
- Coûts infra : 5€/mois = 60€/an
- **Marge nette : 2 220€/an**
- **Avantage** : Zéro complexité, scalable à l'infini
- **Problème** : Très faible marge

**Scénario B : 100% Managed**
- 10 clients × 149€/mois = **17 880€/an**
- Coûts infra : 520€/mois = 6 240€/an
- **Marge nette : 11 640€/an**
- **Avantage** : Meilleure marge, MRR stable, lock-in élevé

**Scénario C : 100% Self-Hosted**
- 10 clients × 2 500€ = **25 000€ Year 1**
- Puis 10 clients × 500€/an support = **5 000€/an** (Year 2+)
- **Problème** : Revenue s'écroule après Year 1, pas récurrent

**Scénario D : Hybrid Réaliste** ⭐ **RECOMMANDÉ**
- 2 clients Chatwoot Cloud × 19€/mois = **456€/an**
- 7 clients Managed × 149€/mois = **12 516€/an**
- 1 client Self-Hosted × 2 500€ = **2 500€ Year 1**
- Coûts infra : (2×5€ + 7×52€) = 374€/mois = 4 488€/an
- **Total revenue Year 1 : 15 472€**
- **Marge nette : ~10 500€**

**Year 2+** (Hybrid) :
- 2 clients Chatwoot Cloud = 456€/an
- 7 clients Managed = 12 516€/an
- 1 client Self-Hosted support = 500€/an
- **Total revenue Year 2+ : 13 472€/an** (vs 5 000€ si 100% Self-Hosted)

---

### Valorisation Entreprise

**Impact sur valorisation** (méthode SaaS : 10-20× MRR annuel) :

**50 clients Managed** :
- 7 450€/mois MRR = 89 400€ ARR
- Valorisation = 89 400€ × 15 = **1,3M€**

**50 clients Self-Hosted** :
- 125 000€ one-time revenue
- Valorisation = 125 000€ × 2-3 = **~300k€**

**Conclusion** : Managed génère **4× plus de valorisation** que Self-Hosted !

---

### 🎯 Recommandation Finale : Stratégie Multi-Options

**Stratégie recommandée** : **Hybrid avec push Managed**

#### Pourquoi Hybrid avec 4 Options

**Offre d'entrée de gamme** : Chatwoot Cloud (19€/mois)
- Attire les petites entreprises avec budget limité
- Acquisition facile (clients Chatwoot existants)
- Coût quasi-nul pour nous (juste webhook)
- **Conversion** : 30% migrent vers Managed après 6 mois

**Offre principale** : Managed (149€/mois) ⭐ **PUSH PRINCIPAL**
- Meilleure marge (65%)
- MRR stable et valorisable
- Lock-in technique élevé (rétention)
- Automatisable via Kubernetes
- **Arguments clients** :
  - 70% des clients préfèrent "solution gérée" vs autres options
  - Budget OpEx mensuel > Budget CapEx one-time (PME/ETI)
  - Pas d'équipe DevOps interne (coût embauche > 149€/mois)

**Offre Enterprise** : Self-Hosted (2 500€ one-time)
- Grands comptes (CAC40, secteur régulé)
- Exigence souveraineté données
- Très bonne marge one-time (90%)
- 5-10% du marché seulement

#### Tunnel de Conversion Recommandé

```
1. Landing page : "Agent IA pour Chatwoot"
2. Question : "Avez-vous déjà Chatwoot ?"

   OUI → "Connectez votre Chatwoot Cloud" (19€/mois)
          ↓ Upsell après 3-6 mois
          "Migrez vers Managed pour plus de stabilité" (149€/mois)

   NON → "On vous recommande Managed" (149€/mois) ⭐ DEFAULT
         ↓ Alternative si budget
         "Ou Chatwoot Cloud" (19€/mois + 19$/mois Chatwoot)

   ENTERPRISE → "Self-Hosted" (2 500€ one-time)
```

#### Mix Clients Réaliste (50 clients)

**Mix optimal** :
- 10 clients Chatwoot Cloud (20%) : 19€/mois × 10 = 2 280€/an
- 35 clients Managed (70%) : 149€/mois × 35 = 62 580€/an
- 5 clients Self-Hosted (10%) : 2 500€ × 5 = 12 500€ Year 1

**Total revenue Year 1** : 77 360€
**Coûts infra** : (10×5€ + 35×52€) = 1 870€/mois = 22 440€/an
**Marge nette Year 1** : 54 920€

**Valorisation entreprise** :
- MRR : (10×19€ + 35×149€) = 5 405€/mois = 64 860€ ARR
- Valorisation = 64 860€ × 15 = **973 000€** (~1M€)

#### Pourquoi Managed reste le Focus Principal

**Arguments commerciaux** :
1. **Revenu récurrent** : MRR stable (vs one-time Self-Hosted)
2. **Scalabilité** : Automatisable (vs manuel Self-Hosted)
3. **Rétention** : Lock-in élevé (vs facile partir Chatwoot Cloud)
4. **Marge équilibrée** : 65% (vs 88% Chatwoot Cloud mais 5× moins revenue)
5. **Valorisation entreprise** : Investisseurs préfèrent MRR > 1M€ ARR

**Positionnement marketing** :
- **Homepage** : Push Managed (149€/mois) comme offre principale
- **USP** : "L'Intercom open-source avec IA intégrée, géré pour vous"
- **Alternative** : Mentionner Chatwoot Cloud (19€/mois) pour budget limité
- **Enterprise** : Self-Hosted (2 500€) en footer (pas mis en avant)

---

### Offres SaaS Complètes

#### Plans SaaS (Widget + Agent IA)

**Starter SaaS** : 49€/mois
- 1 agent FAQ
- **Widget web inclus** (pas Chatwoot)
- 500 conversations/mois
- Azure AI Search géré par nous
- Support email

**Pro SaaS** : 149€/mois ⭐ **RECOMMANDÉ**
- 3 agents FAQ
- **Widget + Chatwoot Managed inclus**
- 2 000 conversations/mois
- Personnalisation widget
- Support prioritaire
- Backups quotidiens

**Enterprise SaaS** : 499€/mois
- Agents illimités
- **Widget + Chatwoot Managed + Teams app**
- Conversations illimitées
- Azure AI Search dédié
- SSO (Azure AD)
- Support 24/7
- SLA 99,9%

---

#### Add-ons Chatwoot (Options Intégration)

Les clients peuvent choisir **comment** ils veulent Chatwoot :

**Option A : Chatwoot Cloud** (intégration) : +19€/mois
- Client a déjà compte Chatwoot Cloud (19$/mois payé à Chatwoot)
- On connecte notre agent IA via webhook
- **Total client** : Prix plan SaaS + 19€/mois (+ 19$/mois à Chatwoot)
- Exemple : Starter (49€) + Chatwoot Cloud (19€ + 19$) = ~88€/mois total

**Option B : Chatwoot Managed** (inclus dans Pro/Enterprise)
- Nous hébergeons Chatwoot pour le client
- Inclus dans plans Pro (149€) et Enterprise (499€)
- Pas de supplément

**Option C : Self-Hosted** : 2 500€ one-time + 500€/an support
- Client veut tout sur son infrastructure
- Code source complet (backend + agent + widget + Chatwoot setup)
- Déploiement client (leur infra)
- **Pas de revenu récurrent** (licence perpétuelle)
- Support annuel optionnel

---

## 🏗️ Architecture SaaS Multi-Tenant

### Vue d'ensemble

```
┌──────────────────────────────────────────────────────────────┐
│                     CLIENTS FINAUX                            │
│  - Visiteurs site web (posent questions au bot)              │
│  - Utilisateurs Teams (chat dans Teams)                      │
│  - Agents support (via Chatwoot)                             │
└──────────────────────────────────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│                 CANAUX (Multi-Options)                        │
│                                                               │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────────┐     │
│  │   WIDGET    │  │   CHATWOOT   │  │   TEAMS APP     │     │
│  │  JavaScript │  │  Self-Hosted │  │  Bot Framework  │     │
│  │  Embed site │  │  Open Source │  │  Teams Toolkit  │     │
│  └─────────────┘  └──────────────┘  └─────────────────┘     │
└──────────────────────────────────────────────────────────────┘
                             │
                             ▼ REST API / WebSocket
┌──────────────────────────────────────────────────────────────┐
│              DASHBOARD SAAS (Angular)                         │
│  - Login client (email + password)                           │
│  - Upload documents (PDF, Word, TXT)                         │
│  - Configuration agent (tone, langue, CTA)                   │
│  - Analytics (conversations, satisfaction)                   │
│  - Intégration canaux (widget code, Chatwoot setup)         │
└──────────────────────────────────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│            BACKEND - Go + Cloudwego Hertz                     │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐     │
│  │  API Gateway (Hertz)                                │     │
│  │  - JWT Auth (clients SaaS)                          │     │
│  │  - Rate Limiting (par tenant)                       │     │
│  │  - Router multi-tenant                              │     │
│  └─────────────────────────────────────────────────────┘     │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐     │
│  │  Services Layer                                     │     │
│  │  - ChatService (gestion conversations)              │     │
│  │  - DocumentService (upload, indexation)             │     │
│  │  - AgentService (Eino agents)                       │     │
│  │  - TenantService (isolation multi-tenant)           │     │
│  └─────────────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│           CLOUDWEGO EINO - AI Agents                          │
│                                                               │
│  ┌────────────────────────────────────────────────────┐      │
│  │  Agent Pool (1 par tenant)                         │      │
│  │  - tenant-1-agent: FAQ Entreprise A                │      │
│  │  - tenant-2-agent: FAQ Entreprise B                │      │
│  │  - tenant-3-agent: FAQ Entreprise C                │      │
│  └────────────────────────────────────────────────────┘      │
│                                                               │
│  - Model : Azure OpenAI GPT-4o-mini (économique)             │
│  - Tools : RAG (Azure AI Search), WebhookTool                │
│  - Memory : Conversation history (PostgreSQL)                │
└──────────────────────────────────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│         AZURE AI SEARCH (Multi-Tenant RAG)                    │
│                                                               │
│  - Index par tenant :                                        │
│    • faq-tenant-1 (Entreprise A docs)                        │
│    • faq-tenant-2 (Entreprise B docs)                        │
│    • faq-tenant-3 (Entreprise C docs)                        │
│                                                               │
│  - Isolation : Filtre automatique par tenant_id              │
│  - Indexation : Automatique après upload document            │
└──────────────────────────────────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│                   DATA LAYER                                  │
│                                                               │
│  ┌─────────────────────────────────────────────────┐         │
│  │  PostgreSQL (Primary DB)                        │         │
│  │  - tenants (clients SaaS)                       │         │
│  │  - users (comptes dashboard)                    │         │
│  │  - conversations (historique chats)             │         │
│  │  - messages (messages individuels)              │         │
│  │  - documents (metadata docs uploadés)           │         │
│  │  - analytics (métriques par tenant)             │         │
│  └─────────────────────────────────────────────────┘         │
│                                                               │
│  ┌─────────────────────────────────────────────────┐         │
│  │  Azure Blob Storage (Files)                     │         │
│  │  - /tenant-1/documents/*.pdf                    │         │
│  │  - /tenant-2/documents/*.pdf                    │         │
│  └─────────────────────────────────────────────────┘         │
│                                                               │
│  ┌─────────────────────────────────────────────────┐         │
│  │  Redis (Cache + Sessions)                       │         │
│  │  - JWT sessions                                 │         │
│  │  - Rate limiting counters                       │         │
│  └─────────────────────────────────────────────────┘         │
└──────────────────────────────────────────────────────────────┘
```

---

## 📱 Canaux d'Intégration

### Canal 1 : Widget Web (JavaScript)

**Usage** : Client embed le widget sur son site
**Code intégration** :
```html
<script src="https://cdn.doveaia.fr/widget.js"
        data-tenant-id="tenant-abc123">
</script>
```

**Features** :
- Bubble coin bas-droit (customisable)
- Chat window responsive
- Branding client (logo, couleurs)
- Mobile-friendly

**Revenue** : Inclus dans tous les plans SaaS

---

### Canal 2 : Chatwoot (Self-Hosted)

**Usage** : Client installe Chatwoot sur son infra, connecte notre agent
**Pourquoi Chatwoot ?**
- ✅ Open-source (MIT License)
- ✅ UX professionnelle (type Intercom/Zendesk)
- ✅ Multi-agents support (humain + bot)
- ✅ Handoff bot → humain seamless
- ✅ Analytics intégrés

**Architecture** :
```
Client installe Chatwoot (Docker)
    ↓
Configure Custom Inbox → Webhook notre API
    ↓
Messages visiteurs → Chatwoot → Notre API
    ↓
Notre agent répond → API → Chatwoot → Visiteur
```

**Setup Client** :
1. Installer Chatwoot : `docker-compose up` (15 min)
2. Créer Inbox Custom → Webhook URL : `https://api.doveaia.fr/chatwoot/{tenant-id}`
3. Configurer API key (fournie dans dashboard Doveaia)
4. Tester : Message visiteur → Bot répond

**Revenue** :
- Plan Pro+ (149€/mois)
- **OU Self-Hosted** : 2 500€ one-time (client héberge tout)

---

### Canal 3 : Microsoft Teams App

**Usage** : Bot dans Teams, employés posent questions internes (FAQ RH, IT, etc.)
**Cas d'usage** : Support interne entreprise (vs support client web)

**Architecture** :
```
Employee pose question dans Teams
    ↓
Teams Bot Framework → Azure Bot Service
    ↓
Webhook notre API (/teams/{tenant-id})
    ↓
Notre agent répond
    ↓
Réponse affichée dans Teams chat
```

**Développement** :
- Teams Toolkit (extension VS Code)
- Bot Framework SDK (Go : github.com/microsoft/botframework-sdk)
- App manifest Teams (JSON)

**Distribution** :
- Teams App Store (validation Microsoft)
- OU Sideload (installation manuelle par admin IT client)

**Revenue** : Plan Enterprise (499€/mois)

---

## 💻 Stack Technique Détaillée

### Backend : Go + Cloudwego + Nunu Layout Advanced

**Structure Projet** (basée sur [go-nunu/nunu-layout-advanced](https://github.com/go-nunu/nunu-layout-advanced)) :

```
doveaia-faq-saas/
├── cmd/
│   └── server/
│       └── main.go           # Point d'entrée API server
│       └── wire.go           # Dependency injection (Wire)
│       └── wire_gen.go       # Generated DI code
├── internal/
│   ├── handler/              # HTTP handlers (Hertz)
│   │   ├── chat.go
│   │   ├── document.go
│   │   ├── crawler.go
│   │   └── integration.go
│   ├── service/              # Business logic layer
│   │   ├── chat_service.go
│   │   ├── document_service.go
│   │   ├── agent_service.go
│   │   ├── crawler_service.go
│   │   └── domain_verification_service.go
│   ├── repository/           # Data access layer (Gorm)
│   │   ├── tenant_repository.go
│   │   ├── conversation_repository.go
│   │   ├── document_repository.go
│   │   └── crawl_job_repository.go
│   ├── model/                # Domain models
│   │   ├── tenant.go
│   │   ├── conversation.go
│   │   ├── document.go
│   │   └── crawl_job.go
│   ├── middleware/           # HTTP middlewares
│   │   ├── jwt.go
│   │   ├── rate_limit.go
│   │   └── tenant_context.go
│   └── server/               # Server setup
│       └── http.go           # Hertz server initialization
├── pkg/                      # Shared packages
│   ├── agent/                # Eino agent pool
│   │   └── faq_agent.go
│   ├── azure/                # Azure AI services
│   │   ├── search.go
│   │   ├── openai.go
│   │   └── blob.go
│   ├── chatwoot/             # Chatwoot API client
│   │   └── client.go
│   ├── crawler/              # Web crawler
│   │   └── crawler.go
│   └── helper/               # Utility functions
│       └── response.go
├── config/
│   ├── config.go             # Config struct
│   └── config.yaml           # Configuration file
├── api/
│   └── http/                 # API documentation
│       └── openapi.yaml      # OpenAPI spec
├── scripts/
│   ├── migration/            # Database migrations
│   └── seed/                 # Seed data
├── deployments/
│   ├── docker/
│   │   └── Dockerfile
│   └── kubernetes/
│       ├── deployment.yaml
│       └── service.yaml
├── test/                     # Integration tests
├── docs/                     # Documentation
├── web/                      # Angular dashboard (frontend)
├── go.mod
└── go.sum
```

**Principes Nunu Layout** :
- **Clean Architecture** : Séparation handler → service → repository
- **Dependency Injection** : Wire pour DI automatique
- **Interface-driven** : Chaque couche expose des interfaces
- **Testable** : Mocks faciles grâce aux interfaces

---

### Code Exemple : Structure Nunu Complète

#### 1. Configuration (config/config.go)

```go
// config/config.go
package config

import (
    "github.com/spf13/viper"
)

type Config struct {
    Server   ServerConfig   `mapstructure:"server"`
    Database DatabaseConfig `mapstructure:"database"`
    Azure    AzureConfig    `mapstructure:"azure"`
    Redis    RedisConfig    `mapstructure:"redis"`
    JWT      JWTConfig      `mapstructure:"jwt"`
}

type ServerConfig struct {
    Port string `mapstructure:"port"`
    Mode string `mapstructure:"mode"` // debug, release
}

type DatabaseConfig struct {
    Driver   string `mapstructure:"driver"`
    Host     string `mapstructure:"host"`
    Port     int    `mapstructure:"port"`
    Database string `mapstructure:"database"`
    Username string `mapstructure:"username"`
    Password string `mapstructure:"password"`
}

type AzureConfig struct {
    OpenAI struct {
        Endpoint   string `mapstructure:"endpoint"`
        APIKey     string `mapstructure:"api_key"`
        Deployment string `mapstructure:"deployment"`
    } `mapstructure:"openai"`
    AISearch struct {
        Endpoint string `mapstructure:"endpoint"`
        APIKey   string `mapstructure:"api_key"`
    } `mapstructure:"ai_search"`
    BlobStorage struct {
        AccountName string `mapstructure:"account_name"`
        AccountKey  string `mapstructure:"account_key"`
    } `mapstructure:"blob_storage"`
}

type RedisConfig struct {
    Host     string `mapstructure:"host"`
    Port     int    `mapstructure:"port"`
    Password string `mapstructure:"password"`
    DB       int    `mapstructure:"db"`
}

type JWTConfig struct {
    Secret     string `mapstructure:"secret"`
    ExpireTime int    `mapstructure:"expire_time"` // hours
}

func Load(configPath string) (*Config, error) {
    viper.SetConfigFile(configPath)
    viper.AutomaticEnv()

    if err := viper.ReadInConfig(); err != nil {
        return nil, err
    }

    var config Config
    if err := viper.Unmarshal(&config); err != nil {
        return nil, err
    }

    return &config, nil
}
```

#### 2. Models (internal/model/)

```go
// internal/model/tenant.go
package model

import (
    "time"
    "gorm.io/gorm"
)

type Tenant struct {
    ID        uint           `gorm:"primarykey" json:"id"`
    CreatedAt time.Time      `json:"created_at"`
    UpdatedAt time.Time      `json:"updated_at"`
    DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`

    Name      string `gorm:"size:255;not null" json:"name"`
    Email     string `gorm:"size:255;uniqueIndex;not null" json:"email"`
    Plan      string `gorm:"size:50;default:'starter'" json:"plan"` // starter, pro, enterprise
    Status    string `gorm:"size:50;default:'active'" json:"status"`

    // Agent config
    AgentTone         string `gorm:"size:100;default:'professional'" json:"agent_tone"`
    AgentLanguage     string `gorm:"size:10;default:'fr'" json:"agent_language"`
    AgentCTA          string `gorm:"size:500" json:"agent_cta"`
    AgentSystemPrompt string `gorm:"type:text" json:"agent_system_prompt"`
}

// internal/model/conversation.go
package model

type Conversation struct {
    ID        uint           `gorm:"primarykey" json:"id"`
    CreatedAt time.Time      `json:"created_at"`
    UpdatedAt time.Time      `json:"updated_at"`
    DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`

    TenantID uint   `gorm:"index;not null" json:"tenant_id"`
    ThreadID string `gorm:"size:255;index" json:"thread_id"`
    Source   string `gorm:"size:50" json:"source"` // widget, chatwoot, teams
    Status   string `gorm:"size:50;default:'active'" json:"status"`

    Messages []Message `gorm:"foreignKey:ConversationID" json:"messages,omitempty"`
}

type Message struct {
    ID             uint      `gorm:"primarykey" json:"id"`
    CreatedAt      time.Time `json:"created_at"`
    ConversationID uint      `gorm:"index;not null" json:"conversation_id"`
    Role           string    `gorm:"size:50;not null" json:"role"` // user, assistant
    Content        string    `gorm:"type:text;not null" json:"content"`
}

// internal/model/document.go
package model

type Document struct {
    ID        uint           `gorm:"primarykey" json:"id"`
    CreatedAt time.Time      `json:"created_at"`
    UpdatedAt time.Time      `json:"updated_at"`
    DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`

    TenantID uint   `gorm:"index;not null" json:"tenant_id"`
    Filename string `gorm:"size:255;not null" json:"filename"`
    BlobURL  string `gorm:"size:500;not null" json:"blob_url"`
    Status   string `gorm:"size:50;default:'pending'" json:"status"` // pending, indexed, error
}
```

#### 3. Repository Layer (internal/repository/)

```go
// internal/repository/repository.go
package repository

import "gorm.io/gorm"

type Repository struct {
    db              *gorm.DB
    TenantRepo      TenantRepository
    ConversationRepo ConversationRepository
    DocumentRepo    DocumentRepository
}

func NewRepository(db *gorm.DB) *Repository {
    return &Repository{
        db:              db,
        TenantRepo:      NewTenantRepository(db),
        ConversationRepo: NewConversationRepository(db),
        DocumentRepo:    NewDocumentRepository(db),
    }
}

// internal/repository/tenant_repository.go
package repository

import (
    "context"
    "doveaia/internal/model"
    "gorm.io/gorm"
)

type TenantRepository interface {
    Create(ctx context.Context, tenant *model.Tenant) error
    GetByID(ctx context.Context, id uint) (*model.Tenant, error)
    GetByEmail(ctx context.Context, email string) (*model.Tenant, error)
    Update(ctx context.Context, tenant *model.Tenant) error
}

type tenantRepository struct {
    db *gorm.DB
}

func NewTenantRepository(db *gorm.DB) TenantRepository {
    return &tenantRepository{db: db}
}

func (r *tenantRepository) Create(ctx context.Context, tenant *model.Tenant) error {
    return r.db.WithContext(ctx).Create(tenant).Error
}

func (r *tenantRepository) GetByID(ctx context.Context, id uint) (*model.Tenant, error) {
    var tenant model.Tenant
    err := r.db.WithContext(ctx).First(&tenant, id).Error
    return &tenant, err
}

func (r *tenantRepository) GetByEmail(ctx context.Context, email string) (*model.Tenant, error) {
    var tenant model.Tenant
    err := r.db.WithContext(ctx).Where("email = ?", email).First(&tenant).Error
    return &tenant, err
}

func (r *tenantRepository) Update(ctx context.Context, tenant *model.Tenant) error {
    return r.db.WithContext(ctx).Save(tenant).Error
}

// internal/repository/document_repository.go
package repository

import (
    "context"
    "doveaia/internal/model"
    "gorm.io/gorm"
)

type DocumentRepository interface {
    Create(ctx context.Context, doc *model.Document) error
    GetByID(ctx context.Context, id uint) (*model.Document, error)
    ListByTenant(ctx context.Context, tenantID uint) ([]*model.Document, error)
    UpdateStatus(ctx context.Context, id uint, status string) error
}

type documentRepository struct {
    db *gorm.DB
}

func NewDocumentRepository(db *gorm.DB) DocumentRepository {
    return &documentRepository{db: db}
}

func (r *documentRepository) Create(ctx context.Context, doc *model.Document) error {
    return r.db.WithContext(ctx).Create(doc).Error
}

func (r *documentRepository) GetByID(ctx context.Context, id uint) (*model.Document, error) {
    var doc model.Document
    err := r.db.WithContext(ctx).First(&doc, id).Error
    return &doc, err
}

func (r *documentRepository) ListByTenant(ctx context.Context, tenantID uint) ([]*model.Document, error) {
    var docs []*model.Document
    err := r.db.WithContext(ctx).Where("tenant_id = ?", tenantID).Find(&docs).Error
    return docs, err
}

func (r *documentRepository) UpdateStatus(ctx context.Context, id uint, status string) error {
    return r.db.WithContext(ctx).Model(&model.Document{}).
        Where("id = ?", id).
        Update("status", status).Error
}
```

#### 4. Service Layer (internal/service/)

```go
// internal/service/chat_service.go
package service

import (
    "context"
    "doveaia/internal/model"
    "doveaia/internal/repository"
    "doveaia/pkg/agent"
)

type ChatService interface {
    Chat(ctx context.Context, tenantID uint, message string, threadID string) (string, string, error)
}

type chatService struct {
    repo      *repository.Repository
    agentPool *agent.FAQAgentPool
}

func NewChatService(repo *repository.Repository, agentPool *agent.FAQAgentPool) ChatService {
    return &chatService{
        repo:      repo,
        agentPool: agentPool,
    }
}

func (s *chatService) Chat(ctx context.Context, tenantID uint, message string, threadID string) (string, string, error) {
    // Get tenant config
    tenant, err := s.repo.TenantRepo.GetByID(ctx, tenantID)
    if err != nil {
        return "", "", err
    }

    // Get or create conversation
    conv, err := s.getOrCreateConversation(ctx, tenantID, threadID)
    if err != nil {
        return "", "", err
    }

    // Save user message
    userMsg := &model.Message{
        ConversationID: conv.ID,
        Role:          "user",
        Content:       message,
    }
    if err := s.repo.db.Create(userMsg).Error; err != nil {
        return "", "", err
    }

    // Get agent
    ag, err := s.agentPool.GetOrCreate(ctx, tenant)
    if err != nil {
        return "", "", err
    }

    // Run agent
    response, err := ag.Chat(ctx, message, conv.ThreadID)
    if err != nil {
        return "", "", err
    }

    // Save assistant message
    assistantMsg := &model.Message{
        ConversationID: conv.ID,
        Role:          "assistant",
        Content:       response,
    }
    if err := s.repo.db.Create(assistantMsg).Error; err != nil {
        return "", "", err
    }

    return response, conv.ThreadID, nil
}

func (s *chatService) getOrCreateConversation(ctx context.Context, tenantID uint, threadID string) (*model.Conversation, error) {
    // Implementation...
    return nil, nil
}

// internal/service/document_service.go
package service

import (
    "context"
    "doveaia/internal/model"
    "doveaia/internal/repository"
    "doveaia/pkg/azure"
    "fmt"
)

type DocumentService interface {
    Upload(ctx context.Context, tenantID uint, filename string, content []byte) (*model.Document, error)
    List(ctx context.Context, tenantID uint) ([]*model.Document, error)
}

type documentService struct {
    repo        *repository.Repository
    azureClient *azure.BlobClient
}

func NewDocumentService(repo *repository.Repository, azureClient *azure.BlobClient) DocumentService {
    return &documentService{
        repo:        repo,
        azureClient: azureClient,
    }
}

func (s *documentService) Upload(ctx context.Context, tenantID uint, filename string, content []byte) (*model.Document, error) {
    // Upload to Azure Blob
    blobPath := fmt.Sprintf("tenant-%d/documents/%s", tenantID, filename)
    blobURL, err := s.azureClient.Upload(ctx, blobPath, content)
    if err != nil {
        return nil, err
    }

    // Save metadata in DB
    doc := &model.Document{
        TenantID: tenantID,
        Filename: filename,
        BlobURL:  blobURL,
        Status:   "pending",
    }

    if err := s.repo.DocumentRepo.Create(ctx, doc); err != nil {
        return nil, err
    }

    // TODO: Trigger async indexation job

    return doc, nil
}

func (s *documentService) List(ctx context.Context, tenantID uint) ([]*model.Document, error) {
    return s.repo.DocumentRepo.ListByTenant(ctx, tenantID)
}
```

#### 5. Handler Layer (internal/handler/)

```go
// internal/handler/chat_handler.go
package handler

import (
    "context"
    "github.com/cloudwego/hertz/pkg/app"
    "doveaia/internal/service"
    "doveaia/pkg/helper"
    "net/http"
)

type ChatHandler struct {
    chatService service.ChatService
}

func NewChatHandler(chatService service.ChatService) *ChatHandler {
    return &ChatHandler{chatService: chatService}
}

type ChatRequest struct {
    Message  string `json:"message" binding:"required"`
    ThreadID string `json:"thread_id"`
}

type ChatResponse struct {
    Reply    string `json:"reply"`
    ThreadID string `json:"thread_id"`
}

func (h *ChatHandler) Chat(ctx context.Context, c *app.RequestContext) {
    tenantID := c.GetUint("tenant_id") // From middleware

    var req ChatRequest
    if err := c.BindAndValidate(&req); err != nil {
        helper.ResponseError(c, http.StatusBadRequest, "Invalid request", err)
        return
    }

    reply, threadID, err := h.chatService.Chat(ctx, tenantID, req.Message, req.ThreadID)
    if err != nil {
        helper.ResponseError(c, http.StatusInternalServerError, "Chat failed", err)
        return
    }

    helper.ResponseSuccess(c, ChatResponse{
        Reply:    reply,
        ThreadID: threadID,
    })
}

// internal/handler/document_handler.go
package handler

import (
    "context"
    "github.com/cloudwego/hertz/pkg/app"
    "doveaia/internal/service"
    "doveaia/pkg/helper"
    "io"
    "net/http"
)

type DocumentHandler struct {
    docService service.DocumentService
}

func NewDocumentHandler(docService service.DocumentService) *DocumentHandler {
    return &DocumentHandler{docService: docService}
}

func (h *DocumentHandler) Upload(ctx context.Context, c *app.RequestContext) {
    tenantID := c.GetUint("tenant_id")

    file, err := c.FormFile("document")
    if err != nil {
        helper.ResponseError(c, http.StatusBadRequest, "No file uploaded", err)
        return
    }

    // Read file content
    fileContent, err := file.Open()
    if err != nil {
        helper.ResponseError(c, http.StatusInternalServerError, "Failed to read file", err)
        return
    }
    defer fileContent.Close()

    content, err := io.ReadAll(fileContent)
    if err != nil {
        helper.ResponseError(c, http.StatusInternalServerError, "Failed to read file", err)
        return
    }

    doc, err := h.docService.Upload(ctx, tenantID, file.Filename, content)
    if err != nil {
        helper.ResponseError(c, http.StatusInternalServerError, "Upload failed", err)
        return
    }

    helper.ResponseSuccess(c, doc)
}

func (h *DocumentHandler) List(ctx context.Context, c *app.RequestContext) {
    tenantID := c.GetUint("tenant_id")

    docs, err := h.docService.List(ctx, tenantID)
    if err != nil {
        helper.ResponseError(c, http.StatusInternalServerError, "Failed to list documents", err)
        return
    }

    helper.ResponseSuccess(c, docs)
}
```

#### 6. Middleware (internal/middleware/)

```go
// internal/middleware/tenant_context.go
package middleware

import (
    "context"
    "github.com/cloudwego/hertz/pkg/app"
    "doveaia/pkg/helper"
    "net/http"
)

// TenantContext extracts tenant_id from JWT and adds to context
func TenantContext() app.HandlerFunc {
    return func(ctx context.Context, c *app.RequestContext) {
        // Get tenant_id from JWT claims (set by JWTAuth middleware)
        tenantID, exists := c.Get("tenant_id")
        if !exists {
            helper.ResponseError(c, http.StatusUnauthorized, "Tenant ID not found", nil)
            c.Abort()
            return
        }

        c.Set("tenant_id", tenantID)
        c.Next(ctx)
    }
}

// internal/middleware/rate_limit.go
package middleware

import (
    "context"
    "github.com/cloudwego/hertz/pkg/app"
    "github.com/redis/go-redis/v9"
    "doveaia/pkg/helper"
    "fmt"
    "net/http"
    "time"
)

func RateLimit(redisClient *redis.Client, limit int, window time.Duration) app.HandlerFunc {
    return func(ctx context.Context, c *app.RequestContext) {
        // Get client IP or tenant_id
        key := fmt.Sprintf("rate_limit:%s", c.ClientIP())

        // Increment counter
        count, err := redisClient.Incr(ctx, key).Result()
        if err != nil {
            // If Redis fails, allow request (fail open)
            c.Next(ctx)
            return
        }

        // Set expiry on first request
        if count == 1 {
            redisClient.Expire(ctx, key, window)
        }

        // Check limit
        if count > int64(limit) {
            helper.ResponseError(c, http.StatusTooManyRequests, "Rate limit exceeded", nil)
            c.Abort()
            return
        }

        c.Next(ctx)
    }
}
```

#### 7. Server Setup (internal/server/ & cmd/server/)

```go
// internal/server/http.go
package server

import (
    "github.com/cloudwego/hertz/pkg/app/server"
    "doveaia/internal/handler"
    "doveaia/internal/middleware"
    "doveaia/config"
)

func NewHTTPServer(
    cfg *config.Config,
    chatHandler *handler.ChatHandler,
    docHandler *handler.DocumentHandler,
    // ... other handlers
) *server.Hertz {

    h := server.Default(
        server.WithHostPorts(":" + cfg.Server.Port),
    )

    // Public endpoints (widget, chatwoot, teams)
    public := h.Group("/api/v1")
    {
        public.POST("/chat/:tenant_id", chatHandler.Chat)
        // ... other public endpoints
    }

    // Protected endpoints (dashboard SaaS)
    auth := h.Group("/api/v1",
        middleware.JWTAuth(cfg.JWT.Secret),
        middleware.TenantContext(),
    )
    {
        auth.POST("/documents/upload", docHandler.Upload)
        auth.GET("/documents", docHandler.List)
        // ... other protected endpoints
    }

    return h
}

// cmd/server/main.go
package main

import (
    "context"
    "doveaia/config"
    "log"
)

func main() {
    // Load config
    cfg, err := config.Load("config/config.yaml")
    if err != nil {
        log.Fatalf("Failed to load config: %v", err)
    }

    // Initialize app via Wire DI
    app, cleanup, err := InitializeApp(cfg)
    if err != nil {
        log.Fatalf("Failed to initialize app: %v", err)
    }
    defer cleanup()

    // Start server
    app.HTTPServer.Spin()
}

// cmd/server/wire.go
//go:build wireinject
// +build wireinject

package main

import (
    "github.com/google/wire"
    "doveaia/config"
    "doveaia/internal/handler"
    "doveaia/internal/repository"
    "doveaia/internal/server"
    "doveaia/internal/service"
    "doveaia/pkg/agent"
    "doveaia/pkg/azure"
)

type App struct {
    HTTPServer *server.Hertz
}

func InitializeApp(cfg *config.Config) (*App, func(), error) {
    wire.Build(
        // Database
        repository.NewDatabase,
        repository.NewRepository,

        // Azure clients
        azure.NewBlobClient,
        azure.NewSearchClient,
        azure.NewOpenAIClient,

        // Agent pool
        agent.NewFAQAgentPool,

        // Services
        service.NewChatService,
        service.NewDocumentService,

        // Handlers
        handler.NewChatHandler,
        handler.NewDocumentHandler,

        // Server
        server.NewHTTPServer,

        // App
        wire.Struct(new(App), "*"),
    )
    return &App{}, nil, nil
}
```

---

### Code Exemple : Agent Eino Multi-Tenant

```go
// internal/agent/faq_agent.go
package agent

import (
    "context"
    "github.com/cloudwego/eino/flow/agent"
    "github.com/cloudwego/eino/components/model"
    "github.com/cloudwego/eino/components/tool"
    "doveaia/pkg/azure"
)

type FAQAgentPool struct {
    agents map[string]*agent.GraphAgent  // tenant_id -> agent
}

func NewFAQAgentPool() *FAQAgentPool {
    return &FAQAgentPool{
        agents: make(map[string]*agent.GraphAgent),
    }
}

// GetOrCreate agent pour un tenant
func (p *FAQAgentPool) GetOrCreate(ctx context.Context, tenantID string) (*agent.GraphAgent, error) {
    if ag, exists := p.agents[tenantID]; exists {
        return ag, nil
    }

    // Charger config tenant depuis DB
    config, err := loadTenantConfig(ctx, tenantID)
    if err != nil {
        return nil, err
    }

    // Créer Azure AI Search tool pour ce tenant
    searchTool := &tool.Tool{
        Name: "search_knowledge_base",
        Description: "Search in company knowledge base (FAQ, docs)",
        Function: func(ctx context.Context, query string) (string, error) {
            // Search dans index tenant spécifique
            results, err := azure.SearchIndex(
                ctx,
                indexName: fmt.Sprintf("faq-tenant-%s", tenantID),
                query: query,
                topK: 3,
            )
            if err != nil {
                return "", err
            }
            return formatSearchResults(results), nil
        },
    }

    // System prompt personnalisé par tenant
    systemPrompt := fmt.Sprintf(`
Tu es l'assistant virtuel de %s.

Ton rôle : Répondre aux questions des visiteurs en utilisant la base de connaissances.

Ton ton : %s

Si tu ne sais pas : "Je n'ai pas cette information dans ma base. Contactez-nous à %s"

Toujours finir par : "%s"
`, config.CompanyName, config.Tone, config.ContactEmail, config.CTA)

    // Créer agent Eino
    ag := agent.NewGraphAgent(
        model: model.NewAzureOpenAI(
            endpoint: os.Getenv("AZURE_OPENAI_ENDPOINT"),
            apiKey: os.Getenv("AZURE_OPENAI_KEY"),
            deployment: "gpt-4o-mini",
        ),
        tools: []tool.Tool{searchTool},
        systemPrompt: systemPrompt,
        temperature: 0.3,
    )

    p.agents[tenantID] = ag
    return ag, nil
}

// Chat method
func (p *FAQAgentPool) Chat(ctx context.Context, tenantID, userMessage string) (string, error) {
    ag, err := p.GetOrCreate(ctx, tenantID)
    if err != nil {
        return "", err
    }

    // Run agent
    response, err := ag.Run(ctx, userMessage)
    if err != nil {
        return "", err
    }

    return response, nil
}
```

---

### Code Exemple : Upload Document + Indexation

```go
// internal/handler/document.go
package handler

import (
    "context"
    "github.com/cloudwego/hertz/pkg/app"
    "doveaia/pkg/azure"
)

func UploadDocumentHandler(ctx context.Context, c *app.RequestContext) {
    // Get tenant from JWT
    tenantID := c.GetString("tenant_id")

    // Parse multipart form
    file, err := c.FormFile("document")
    if err != nil {
        c.JSON(400, map[string]string{"error": "No file uploaded"})
        return
    }

    // Save to Azure Blob Storage
    blobPath := fmt.Sprintf("tenant-%s/documents/%s", tenantID, file.Filename)
    blobURL, err := azure.UploadBlob(ctx, blobPath, file)
    if err != nil {
        c.JSON(500, map[string]string{"error": "Failed to upload"})
        return
    }

    // Save metadata in DB
    doc := &models.Document{
        TenantID: tenantID,
        Filename: file.Filename,
        BlobURL:  blobURL,
        Status:   "pending_indexation",
    }
    db.Create(doc)

    // Trigger async indexation job
    queue.Publish("index-document", map[string]interface{}{
        "document_id": doc.ID,
        "tenant_id":   tenantID,
        "blob_url":    blobURL,
    })

    c.JSON(200, map[string]interface{}{
        "message": "Document uploaded, indexation in progress",
        "document_id": doc.ID,
    })
}
```

---

### Code Exemple : Indexation Worker (Background Job)

```go
// cmd/worker/indexer.go
package main

import (
    "context"
    "doveaia/pkg/azure"
)

func indexDocumentJob(ctx context.Context, payload map[string]interface{}) error {
    tenantID := payload["tenant_id"].(string)
    blobURL := payload["blob_url"].(string)
    documentID := payload["document_id"].(uint)

    // 1. Download document from Blob
    content, err := azure.DownloadBlob(ctx, blobURL)
    if err != nil {
        return err
    }

    // 2. Extract text (PDF, Word, TXT)
    text, err := extractText(content)
    if err != nil {
        return err
    }

    // 3. Chunk text (500 mots par chunk)
    chunks := chunkText(text, maxWords: 500)

    // 4. Index dans Azure AI Search
    indexName := fmt.Sprintf("faq-tenant-%s", tenantID)
    for i, chunk := range chunks {
        doc := map[string]interface{}{
            "id":        fmt.Sprintf("%s-chunk-%d", documentID, i),
            "tenant_id": tenantID,
            "content":   chunk,
            "source":    blobURL,
        }
        err := azure.IndexDocument(ctx, indexName, doc)
        if err != nil {
            return err
        }
    }

    // 5. Update document status in DB
    db.Model(&models.Document{}).Where("id = ?", documentID).Update("status", "indexed")

    return nil
}
```

---

### Code Exemple : Web Crawling avec Validation Domaine

**Fonctionnalité** : Permet aux clients de crawler leur site web pour indexer automatiquement tout le contenu (vs upload manuel).

**Sécurité critique** : **Validation de propriété du domaine** avant crawl pour éviter qu'un client n'indexe un site concurrent.

#### Étape 1 : Validation de Propriété du Domaine

**2 méthodes de validation** (client choisit) :

**Méthode A : DNS TXT Record**
```
Client ajoute TXT record :
doveaia-verify.example.com TXT "doveaia-tenant-abc123"
```

**Méthode B : Fichier HTML**
```
Client upload fichier :
https://example.com/.well-known/doveaia-verify.html
Contenu : doveaia-tenant-abc123
```

**Code validation** :

```go
// internal/service/domain_verification.go
package service

import (
    "context"
    "fmt"
    "net"
    "net/http"
    "io"
)

type DomainVerifier struct{}

// VerifyDomainOwnership vérifie que le client possède bien le domaine
func (dv *DomainVerifier) VerifyDomainOwnership(ctx context.Context, domain, tenantID string) (bool, error) {
    // Méthode 1 : Vérifier DNS TXT record
    verified, err := dv.verifyViaDNS(domain, tenantID)
    if err == nil && verified {
        return true, nil
    }

    // Méthode 2 : Vérifier fichier HTML
    verified, err = dv.verifyViaHTML(domain, tenantID)
    if err == nil && verified {
        return true, nil
    }

    return false, fmt.Errorf("domain ownership not verified")
}

// verifyViaDNS vérifie via TXT record DNS
func (dv *DomainVerifier) verifyViaDNS(domain, tenantID string) (bool, error) {
    // Lookup TXT records pour doveaia-verify.domain
    verifyDomain := fmt.Sprintf("doveaia-verify.%s", domain)
    txtRecords, err := net.LookupTXT(verifyDomain)
    if err != nil {
        return false, err
    }

    // Chercher notre token
    expectedToken := fmt.Sprintf("doveaia-tenant-%s", tenantID)
    for _, record := range txtRecords {
        if record == expectedToken {
            return true, nil
        }
    }

    return false, fmt.Errorf("TXT record not found")
}

// verifyViaHTML vérifie via fichier .well-known
func (dv *DomainVerifier) verifyViaHTML(domain, tenantID string) (bool, error) {
    verifyURL := fmt.Sprintf("https://%s/.well-known/doveaia-verify.html", domain)

    resp, err := http.Get(verifyURL)
    if err != nil {
        return false, err
    }
    defer resp.Body.Close()

    if resp.StatusCode != 200 {
        return false, fmt.Errorf("file not found (status %d)", resp.StatusCode)
    }

    body, err := io.ReadAll(resp.Body)
    if err != nil {
        return false, err
    }

    expectedToken := fmt.Sprintf("doveaia-tenant-%s", tenantID)
    if string(body) == expectedToken {
        return true, nil
    }

    return false, fmt.Errorf("token mismatch")
}
```

---

#### Étape 2 : Handler API pour Crawler un Site Web

```go
// internal/handler/crawler.go
package handler

import (
    "context"
    "github.com/cloudwego/hertz/pkg/app"
    "doveaia/internal/service"
    "doveaia/pkg/crawler"
)

type CrawlWebsiteRequest struct {
    Domain    string `json:"domain" binding:"required"`
    StartURL  string `json:"start_url" binding:"required"`
    MaxPages  int    `json:"max_pages"`
    MaxDepth  int    `json:"max_depth"`
}

func CrawlWebsiteHandler(ctx context.Context, c *app.RequestContext) {
    tenantID := c.GetString("tenant_id")

    var req CrawlWebsiteRequest
    if err := c.BindAndValidate(&req); err != nil {
        c.JSON(400, map[string]string{"error": "Invalid request"})
        return
    }

    // Valeurs par défaut
    if req.MaxPages == 0 {
        req.MaxPages = 100
    }
    if req.MaxDepth == 0 {
        req.MaxDepth = 3
    }

    // CRITIQUE : Valider que le client possède bien ce domaine
    verifier := service.DomainVerifier{}
    verified, err := verifier.VerifyDomainOwnership(ctx, req.Domain, tenantID)
    if err != nil || !verified {
        c.JSON(403, map[string]string{
            "error": "Domain ownership not verified",
            "help": "Add DNS TXT record or HTML file to verify ownership",
        })
        return
    }

    // Créer crawl job en DB
    crawlJob := &models.CrawlJob{
        TenantID:  tenantID,
        Domain:    req.Domain,
        StartURL:  req.StartURL,
        MaxPages:  req.MaxPages,
        MaxDepth:  req.MaxDepth,
        Status:    "pending",
    }
    db.Create(crawlJob)

    // Trigger async crawl worker
    queue.Publish("crawl-website", map[string]interface{}{
        "crawl_job_id": crawlJob.ID,
        "tenant_id":    tenantID,
        "start_url":    req.StartURL,
        "max_pages":    req.MaxPages,
        "max_depth":    req.MaxDepth,
    })

    c.JSON(200, map[string]interface{}{
        "message": "Website crawl started",
        "job_id":  crawlJob.ID,
        "estimated_time": "5-15 minutes depending on size",
    })
}
```

---

#### Étape 3 : Crawler Worker (Background Job)

```go
// cmd/worker/crawler.go
package main

import (
    "context"
    "net/url"
    "golang.org/x/net/html"
    "doveaia/pkg/azure"
)

type WebCrawler struct {
    visited   map[string]bool
    queue     []string
    maxPages  int
    maxDepth  int
    baseURL   *url.URL
}

func crawlWebsiteJob(ctx context.Context, payload map[string]interface{}) error {
    tenantID := payload["tenant_id"].(string)
    startURL := payload["start_url"].(string)
    maxPages := payload["max_pages"].(int)
    maxDepth := payload["max_depth"].(int)
    crawlJobID := payload["crawl_job_id"].(uint)

    // Update status
    db.Model(&models.CrawlJob{}).Where("id = ?", crawlJobID).Update("status", "running")

    // Parse base URL
    baseURL, err := url.Parse(startURL)
    if err != nil {
        return err
    }

    crawler := &WebCrawler{
        visited:  make(map[string]bool),
        queue:    []string{startURL},
        maxPages: maxPages,
        maxDepth: maxDepth,
        baseURL:  baseURL,
    }

    // Crawl pages
    pages := crawler.Crawl(ctx)

    // Index chaque page dans Azure AI Search
    indexName := fmt.Sprintf("faq-tenant-%s", tenantID)
    for i, page := range pages {
        doc := map[string]interface{}{
            "id":        fmt.Sprintf("crawl-%s-page-%d", crawlJobID, i),
            "tenant_id": tenantID,
            "content":   page.Content,
            "title":     page.Title,
            "url":       page.URL,
            "source":    "website_crawl",
        }
        err := azure.IndexDocument(ctx, indexName, doc)
        if err != nil {
            return err
        }
    }

    // Update crawl job status
    db.Model(&models.CrawlJob{}).Where("id = ?", crawlJobID).Updates(map[string]interface{}{
        "status":       "completed",
        "pages_crawled": len(pages),
    })

    return nil
}

// Crawl method
func (c *WebCrawler) Crawl(ctx context.Context) []PageContent {
    var pages []PageContent
    depth := 0

    for len(c.queue) > 0 && len(pages) < c.maxPages && depth < c.maxDepth {
        url := c.queue[0]
        c.queue = c.queue[1:]

        if c.visited[url] {
            continue
        }
        c.visited[url] = true

        // Fetch page
        page, err := c.fetchPage(ctx, url)
        if err != nil {
            continue
        }

        pages = append(pages, page)

        // Extract links for next level
        links := c.extractLinks(page.HTML)
        c.queue = append(c.queue, links...)

        depth++
    }

    return pages
}

// fetchPage récupère le contenu d'une page
func (c *WebCrawler) fetchPage(ctx context.Context, pageURL string) (PageContent, error) {
    resp, err := http.Get(pageURL)
    if err != nil {
        return PageContent{}, err
    }
    defer resp.Body.Close()

    body, err := io.ReadAll(resp.Body)
    if err != nil {
        return PageContent{}, err
    }

    // Parse HTML
    doc, err := html.Parse(strings.NewReader(string(body)))
    if err != nil {
        return PageContent{}, err
    }

    // Extract title
    title := extractTitle(doc)

    // Extract text content (remove HTML tags)
    content := extractTextContent(doc)

    return PageContent{
        URL:     pageURL,
        Title:   title,
        Content: content,
        HTML:    string(body),
    }, nil
}

// extractLinks extrait les liens <a href="..."> d'une page
func (c *WebCrawler) extractLinks(htmlContent string) []string {
    doc, _ := html.Parse(strings.NewReader(htmlContent))

    var links []string
    var f func(*html.Node)
    f = func(n *html.Node) {
        if n.Type == html.ElementNode && n.Data == "a" {
            for _, attr := range n.Attr {
                if attr.Key == "href" {
                    // Parse link
                    linkURL, err := url.Parse(attr.Val)
                    if err != nil {
                        continue
                    }

                    // Résoudre URL relative → absolue
                    absoluteURL := c.baseURL.ResolveReference(linkURL)

                    // Filtrer : Garder uniquement les liens du même domaine
                    if absoluteURL.Host == c.baseURL.Host {
                        links = append(links, absoluteURL.String())
                    }
                }
            }
        }
        for child := n.FirstChild; child != nil; child = child.NextSibling {
            f(child)
        }
    }
    f(doc)

    return links
}

type PageContent struct {
    URL     string
    Title   string
    Content string
    HTML    string
}
```

---

#### Étape 4 : Dashboard UI pour Web Crawling

**Page "Knowledge Base" du dashboard Angular** :

```typescript
// knowledge-base.component.ts
export class KnowledgeBaseComponent {

  // Onglet 1 : Upload Documents (existant)
  uploadDocument(file: File) { ... }

  // Onglet 2 : Crawler Website (NOUVEAU)
  crawlWebsite() {
    const request = {
      domain: this.crawlForm.value.domain,
      start_url: this.crawlForm.value.startUrl,
      max_pages: 100,
      max_depth: 3
    };

    this.http.post('/api/v1/crawler/crawl', request)
      .subscribe({
        next: (response) => {
          this.showMessage('Website crawl started! This will take 5-15 minutes.');
          this.pollCrawlStatus(response.job_id);
        },
        error: (error) => {
          if (error.status === 403) {
            this.showDomainVerificationModal();
          }
        }
      });
  }

  // Afficher modal de vérification de domaine
  showDomainVerificationModal() {
    const tenantId = this.auth.getTenantId();
    const domain = this.crawlForm.value.domain;

    const modal = `
      Pour crawler votre site, vérifiez d'abord la propriété du domaine :

      Option 1 : DNS TXT Record
      Nom : doveaia-verify.${domain}
      Valeur : doveaia-tenant-${tenantId}

      Option 2 : Fichier HTML
      URL : https://${domain}/.well-known/doveaia-verify.html
      Contenu : doveaia-tenant-${tenantId}

      Après ajout, cliquez "Vérifier"
    `;

    this.dialog.open(VerificationModalComponent, { data: { message: modal }});
  }
}
```

---

#### Limites et Configuration Crawler

**Limites recommandées** (pour éviter abus) :

| Plan | Max Pages/Crawl | Max Depth | Fréquence Crawl |
|------|-----------------|-----------|-----------------|
| Starter | 50 pages | 2 niveaux | 1×/mois |
| Pro | 100 pages | 3 niveaux | 2×/mois |
| Enterprise | 500 pages | 5 niveaux | Illimité |

**Configuration** :
```go
// internal/config/crawler.go
var CrawlerLimits = map[string]CrawlerConfig{
    "starter": {
        MaxPages: 50,
        MaxDepth: 2,
        CrawlsPerMonth: 1,
    },
    "pro": {
        MaxPages: 100,
        MaxDepth: 3,
        CrawlsPerMonth: 2,
    },
    "enterprise": {
        MaxPages: 500,
        MaxDepth: 5,
        CrawlsPerMonth: 999,
    },
}
```

---

#### Avantages Web Crawling vs Upload Manuel

**Pour le client** :
- ✅ **Automatique** : Indexe tout le site en 1 clic (vs uploader PDF par PDF)
- ✅ **Toujours à jour** : Re-crawl périodique pour synchroniser changements
- ✅ **Complet** : Capture toutes les pages publiques (FAQ, docs, blog)

**Pour Doveaia** :
- ✅ **Adoption** : Onboarding client plus rapide (15 min vs 2h)
- ✅ **Upsell** : Feature premium (Plan Pro+)
- ✅ **Sticky** : Client dépend de nous pour crawler régulièrement

**Cas d'usage typiques** :
- Site web entreprise avec FAQ publique
- Documentation technique (type ReadTheDocs)
- Blog avec articles support client
- Help center (type Zendesk/Intercom)

---

#### Sécurité et Compliance

**Mesures de sécurité** :

1. ✅ **Validation domaine OBLIGATOIRE** : DNS TXT ou fichier HTML
2. ✅ **Respect robots.txt** : Ne pas crawler si disallow
3. ✅ **Rate limiting** : Max 1 requête/sec pour ne pas surcharger site client
4. ✅ **User-Agent identifiable** : `DoveaiaBot/1.0 (https://doveaia.fr/bot)`
5. ✅ **Timeout** : Max 30s par page (éviter blocage)
6. ✅ **Isolation tenant** : Chaque client crawl uniquement ses domaines vérifiés

**Code robots.txt check** :
```go
func respectsRobotsTxt(domain, path string) (bool, error) {
    robotsURL := fmt.Sprintf("https://%s/robots.txt", domain)
    resp, err := http.Get(robotsURL)
    if err != nil {
        return true, nil // Si pas de robots.txt, on peut crawler
    }
    defer resp.Body.Close()

    body, _ := io.ReadAll(resp.Body)
    robotsData, _ := robotstxt.FromBytes(body)

    return robotsData.TestAgent(path, "DoveaiaBot"), nil
}
```

---

## 🎨 Dashboard SaaS (Angular)

### Pages Principales

**1. Login / Signup**
- Email + Password
- OAuth2 Google/Microsoft (optionnel)

**2. Dashboard Home**
- Métriques : Conversations/mois, Taux résolution, Satisfaction
- Graphiques : Évolution conversations, Top questions

**3. Knowledge Base**
- Liste documents uploadés
- Upload nouveau document (drag & drop)
- Status indexation (pending, indexed, error)
- Preview document

**4. Agent Configuration**
- Tone (Professional, Friendly, Concise)
- Langue (FR, EN, ES)
- CTA (Call-to-action : "Contactez-nous", "Réserver démo")
- Fallback message (si pas de réponse)

**5. Integrations**
- **Widget** : Code embed à copier
- **Chatwoot** : URL webhook + API key
- **Teams** : Guide installation app

**6. Analytics**
- Conversations par jour/semaine/mois
- Questions sans réponse (to improve KB)
- Taux satisfaction (👍👎)
- Top questions

---

## 📊 Métriques & Monitoring

### Métriques Business (par tenant)

**Dashboard SaaS Client** :
- Conversations totales ce mois
- Taux résolution automatique (% sans escalade humain)
- Satisfaction moyenne (👍/👎 ratio)
- Top 10 questions posées
- Questions sans réponse (gaps KB)

### Métriques Tech (Ops)

**Prometheus + Grafana** :
- Latence API (p50, p95, p99)
- Throughput (req/sec)
- Error rate (% errors)
- Azure AI Search queries/sec
- OpenAI tokens consumed/day
- Database connections pool

**Alertes** :
- Latence > 5s (problème perf)
- Error rate > 5% (incident)
- OpenAI cost > 500€/day (anomalie usage)

---

## 💰 Coûts & Pricing

### Coûts Infra (par tenant moyen)

| Service | Coût/tenant/mois |
|---------|------------------|
| Azure OpenAI (GPT-4o-mini, 500 conv) | 15€ |
| Azure AI Search (tier Basic) | 5€ (partagé entre tenants) |
| Azure Blob Storage | 1€ |
| PostgreSQL | 2€ (partagé) |
| Redis | 1€ (partagé) |
| Compute (Azure Container Apps) | 10€ (partagé) |
| **Total/tenant** | **~20€/mois** |

### Pricing SaaS (pour rentabilité)

| Plan | Prix | Marge | Cible |
|------|------|-------|-------|
| Starter | 49€/mois | 29€ (59%) | PME, premiers clients |
| Pro | 149€/mois | 129€ (87%) | ETI, volume moyen |
| Enterprise | 499€/mois | 479€ (96%) | Grands comptes |

**Break-even** : 10 clients Starter = 490€/mois revenue, ~300€ marge

---

## 🚀 Roadmap Développement

### Phase 1 : MVP SaaS (Semaine 1-4)

**Semaine 1-2** : Backend Core
- [ ] Setup Go + Hertz + Eino
- [ ] Database schema (PostgreSQL)
- [ ] Multi-tenant agent pool
- [ ] API chat endpoint
- [ ] Auth JWT

**Semaine 3-4** : Dashboard + Widget
- [ ] Angular dashboard (login, upload docs)
- [ ] Widget JavaScript v1
- [ ] Indexation documents (worker)
- [ ] Déploiement Azure Container Apps

**Livrable** : SaaS fonctionnel pour 1-5 clients beta

---

### Phase 2 : Canaux Additionnels (Semaine 5-6)

**Semaine 5** : Chatwoot Integration
- [ ] Webhook handler Chatwoot
- [ ] Guide setup client
- [ ] Tests avec Chatwoot démo

**Semaine 6** : Teams App
- [ ] Bot Framework setup
- [ ] Teams manifest
- [ ] Déploiement Azure Bot Service

---

### Phase 3 : Features Avancées (Semaine 7-8)

- [ ] Analytics dashboard complet
- [ ] A/B testing messages
- [ ] Handoff bot → humain (Chatwoot)
- [ ] SSO Azure AD (Enterprise)
- [ ] Self-hosted package (Docker Compose)

---

## 💼 Go-to-Market

### Clients Cibles

**Segment 1 : PME/ETI Tech-Friendly**
- 50-500 employés
- Site web avec trafic > 1000 visiteurs/mois
- Déjà sensibilisés IA
- Budget IT : 5-20k€/an

**Segment 2 : E-commerce**
- Boutiques en ligne
- Support client chronophage
- FAQ répétitives (livraison, retours, paiement)

**Segment 3 : SaaS B2B**
- Startups/scale-ups SaaS
- Support L1 à automatiser
- Onboarding clients

### Canaux Acquisition

1. **Clients Doveaia consulting** : Upsell après projet agent IA
2. **Freemium** : 50 conversations/mois gratuit (acquisition)
3. **LinkedIn Ads** : Ciblage DSI/CTO/CMO
4. **Partenariats** : Microsoft AppSource, intégrateurs

---

## 📝 Checklist Go-Live

### Avant Lancement SaaS

- [ ] Backend Go déployé (Azure Container Apps)
- [ ] PostgreSQL provisionné (Azure Database)
- [ ] Redis provisionné (Azure Cache)
- [ ] Azure AI Search configuré (multi-tenant)
- [ ] Dashboard Angular déployé (CDN)
- [ ] Widget JS hébergé (CDN)
- [ ] Documentation API (Swagger)
- [ ] Guide intégration clients (notion/docs)
- [ ] Monitoring (Prometheus + Grafana)
- [ ] Alertes configurées (PagerDuty/Opsgenie)
- [ ] Tests charge (1000 req/sec)
- [ ] RGPD compliance check
- [ ] CGV/CGU rédigées
- [ ] Pricing page live
- [ ] Payment (Stripe intégré)

---

**Ce n'est plus un quick win, c'est un vrai produit SaaS ! 🚀**

**Investissement** : 8 semaines dev = 16 000€ coût opportunité
**Revenue potentiel** : 10 clients = 1 500€/mois MRR (18k€/an)
**Break-even** : 10 mois

---

**Document créé le 26/12/2024**
**Statut** : Vision produit SaaS, à valider avant développement
**Prochaine étape** : Décider si quick win simple OU produit SaaS ambitieux
