# Agent #1 : FAQ Intelligent Site Web

**Priorité** : ⭐⭐⭐ (À faire en premier)
**Effort** : 1 semaine (40h)
**ROI Business** : 🔥🔥🔥 Très élevé
**Valeur Démo** : 🎯🎯🎯 Excellente

---

## 🎯 Problème Résolu

### Pour Doveaia (Usage Interne)

**Avant** :
- ❌ Visiteurs site web partent sans contact (taux rebond 70%+)
- ❌ Questions répétitives par email/LinkedIn ("C'est quoi LLMOps ?", "Prix Starter ?")
- ❌ Pas de lead capture 24/7
- ❌ Impossible répondre en temps réel (surtout weekend/soir)

**Après** :
- ✅ Agent répond instantanément 24/7 aux questions visiteurs
- ✅ 80% questions récurrentes traitées automatiquement
- ✅ Lead capture intelligent (propose audit gratuit si intéressé)
- ✅ Taux conversion visiteur → lead : +150-200%
- ✅ Gain temps : 3-5h/semaine (pas de réponses emails basiques)

---

### Pour Prospects (Valeur Démo)

**Cas d'usage similaires que l'agent résout** :
- Support client L1 (e-commerce, SaaS)
- FAQ RH/IT interne (entreprises)
- Assistant recherche documentaire (juridique, compliance)
- Onboarding nouveaux clients (SaaS, banque)

**Message pitch** :
> "L'agent que vous testez sur notre site répond à 200+ questions/mois, 24/7. Il génère 5-10 leads qualifiés chaque mois. Temps de développement : 2 semaines. C'est exactement ce qu'on fait pour nos clients avec l'offre Starter."

---

## 🏗️ Architecture Technique

### Stack

```
┌─────────────────────────────────────────────────┐
│         FRONTEND - Widget Chat                  │
│  - JavaScript vanilla (léger, 15kb)             │
│  - Iframe OU Web Component                      │
│  - Design : Bubble coin bas-droit               │
│  - Responsive mobile                            │
└─────────────────────────────────────────────────┘
                    │ HTTPS REST API
                    ▼
┌─────────────────────────────────────────────────┐
│      BACKEND - Azure Functions (Python)         │
│  - Endpoint POST /chat                          │
│  - Rate limiting (10 req/min/IP)                │
│  - Validation input (max 500 chars)             │
│  - Logging (Application Insights)               │
└─────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────┐
│       AZURE AI FOUNDRY - Agent FAQ              │
│  - Model : GPT-4o-mini (rapide, économique)    │
│  - System Prompt : Expert Doveaia               │
│  - Tools :                                      │
│    • Search (Azure AI Search / FAQ KB)          │
│    • get_pricing (function calling)             │
│    • schedule_audit (webhook Calendly)          │
└─────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────┐
│     AZURE AI SEARCH - Knowledge Base            │
│  - Index "doveaia-faq"                          │
│  - 30-50 Q/R pré-écrites                        │
│  - Documents :                                  │
│    • Offres (Starter, Scale, Enterprise)        │
│    • Cas d'usage (12 fiches)                    │
│    • Blog posts techniques                      │
│  - Semantic search (vecteurs embeddings)        │
└─────────────────────────────────────────────────┘
```

---

## 📋 Fonctionnalités

### V1 (Semaine 1-2) - MVP

**Périmètre** :
- ✅ 10 questions/réponses de base (hard-codées)
- ✅ Widget chat basique (design simple)
- ✅ Agent répond via Azure AI Foundry
- ✅ Pas de RAG (réponses depuis system prompt)
- ✅ Déploiement sur doveaia.fr

**Questions couvertes V1** :
1. C'est quoi Doveaia ?
2. Quelle est la différence entre Copilot Studio et Azure AI Foundry ?
3. C'est quoi le LLMOps ?
4. Combien coûte l'offre Starter ?
5. Quel est le délai pour déployer un agent IA ?
6. Travaillez-vous uniquement sur Azure ?
7. Proposez-vous de l'infogérance ?
8. Comment réserver un audit gratuit ?
9. Quels sont vos cas d'usage typiques ?
10. Vous êtes basés où ?

---

### V2 (Semaine 3-4) - RAG + Lead Capture

**Améliorations** :
- ✅ RAG : Azure AI Search avec 30 Q/R
- ✅ Lead capture intelligent :
  - Si 3+ questions → Proposer audit gratuit
  - Formulaire : Nom, Email, Entreprise
  - Webhook → CRM (Notion ou HubSpot)
- ✅ Monitoring : Dashboard Application Insights
- ✅ Analytics : Questions sans réponse (à enrichir)

---

### V3 (Mois 2+) - Avancé

**Fonctionnalités avancées** :
- Conversations multi-tours (contexte maintenu)
- Recommandation offre (Starter vs Scale selon besoin)
- Handoff humain (si question complexe)
- Multilingue (FR/EN)
- A/B testing (messages CTA)

---

## 💻 Code Exemple : System Prompt

```python
# agents/faq-agent/prompts/system.txt

Tu es l'assistant virtuel de Doveaia, spécialiste des agents IA en production sur Azure AI Foundry.

## Ta mission
Répondre aux questions des visiteurs du site web Doveaia de manière claire, concise et professionnelle.

## Ton expertise
- Agents IA conversationnels (Azure AI Foundry)
- LLMOps (DevOps pour l'IA)
- Microsoft 365 Copilot & Copilot Studio
- Architecture cloud Azure
- Sécurité & gouvernance IA (RGPD, AI Act)

## Nos offres
**Starter** (5-10k€, 2-3 sem) : 1er agent IA simple, 1 source données
**Scale** (35-45k€, 6-10 sem) : 2-3 agents, multi-sources, LLMOps complet
**Enterprise** (sur devis) : Plateforme agents IA industrielle

## Ton comportement
1. Réponses courtes (3-5 phrases max)
2. Ton professionnel mais accessible
3. Si question hors périmètre : "Je ne peux pas répondre à ça, mais contactez-nous pour en discuter."
4. Si visiteur intéressé (pose 3+ questions) : Proposer audit gratuit 30 min
5. Toujours finir par CTA : "Voulez-vous en savoir plus ?" ou "Réserver un audit gratuit ?"

## Ce que tu NE fais PAS
- Pas de prix précis (dire "5-10k€" pour Starter, "contactez-nous" pour détails)
- Pas de promesses impossibles ("en 1 semaine", "100% automatisé")
- Pas de dénigrement concurrents
- Pas de code technique (orienter vers blog si besoin détails)

## Sources
Utilise la fonction `search_knowledge_base(query)` pour trouver des infos dans notre documentation.
```

---

## 💻 Code Exemple : Backend API

```python
# agents/faq-agent/api/chat.py

import os
from azure.functions import HttpRequest, HttpResponse
from azure.ai.projects import AIProjectClient
from azure.ai.projects.models import AgentThread, AgentMessage
import json

# Init Azure AI Foundry client
project_client = AIProjectClient(
    endpoint=os.environ["AZURE_AI_FOUNDRY_ENDPOINT"],
    credential=os.environ["AZURE_AI_FOUNDRY_KEY"]
)

agent_id = os.environ["FAQ_AGENT_ID"]

def main(req: HttpRequest) -> HttpResponse:
    """
    Endpoint POST /chat
    Body: {"message": "C'est quoi LLMOps ?", "thread_id": "optional"}
    """
    try:
        # Parse request
        data = req.get_json()
        user_message = data.get("message", "")
        thread_id = data.get("thread_id")  # Pour conversations multi-tours

        # Validation
        if not user_message or len(user_message) > 500:
            return HttpResponse("Invalid message", status_code=400)

        # Créer ou récupérer thread conversation
        if not thread_id:
            thread = project_client.agents.create_thread()
            thread_id = thread.id

        # Ajouter message utilisateur
        project_client.agents.create_message(
            thread_id=thread_id,
            role="user",
            content=user_message
        )

        # Exécuter agent
        run = project_client.agents.create_and_process_run(
            thread_id=thread_id,
            agent_id=agent_id
        )

        # Récupérer réponse
        messages = project_client.agents.list_messages(thread_id=thread_id)
        assistant_message = messages.data[0].content[0].text.value

        # Log analytics (Application Insights)
        log_chat_event(user_message, assistant_message, thread_id)

        # Response
        return HttpResponse(
            json.dumps({
                "reply": assistant_message,
                "thread_id": thread_id,
                "status": "success"
            }),
            mimetype="application/json",
            status_code=200
        )

    except Exception as e:
        log_error(str(e))
        return HttpResponse("Erreur serveur", status_code=500)

def log_chat_event(question, answer, thread_id):
    """Log vers Application Insights pour analytics"""
    # TODO: Implement logging
    pass
```

---

## 💻 Code Exemple : Widget Frontend

```html
<!-- Intégration site web (1 ligne) -->
<script src="https://cdn.doveaia.fr/chatbot-widget.js" data-agent-id="faq"></script>

<!-- OU version iframe -->
<iframe src="https://chat.doveaia.fr/widget?id=faq"
        style="position:fixed;bottom:20px;right:20px;width:400px;height:600px;border:none;z-index:9999">
</iframe>
```

```javascript
// chatbot-widget.js (simplifié)

class DoveaiaChatWidget {
  constructor() {
    this.apiEndpoint = 'https://api.doveaia.fr/chat';
    this.threadId = null;
    this.init();
  }

  init() {
    // Créer bubble widget
    this.createBubble();
    this.createChatWindow();
  }

  createBubble() {
    const bubble = document.createElement('div');
    bubble.id = 'doveaia-chat-bubble';
    bubble.innerHTML = '💬';
    bubble.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      background: #0078D4;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 28px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      z-index: 9999;
    `;
    bubble.onclick = () => this.toggleChat();
    document.body.appendChild(bubble);
  }

  createChatWindow() {
    const chatWindow = document.createElement('div');
    chatWindow.id = 'doveaia-chat-window';
    chatWindow.style.cssText = `
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 380px;
      height: 550px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      display: none;
      flex-direction: column;
      z-index: 9998;
    `;

    chatWindow.innerHTML = `
      <div class="chat-header" style="padding:16px;background:#0078D4;color:white;border-radius:12px 12px 0 0;">
        <h3 style="margin:0;font-size:16px;">Assistant Doveaia</h3>
        <p style="margin:4px 0 0 0;font-size:12px;opacity:0.9;">Posez vos questions sur nos offres IA</p>
      </div>
      <div class="chat-messages" id="chat-messages" style="flex:1;overflow-y:auto;padding:16px;"></div>
      <div class="chat-input" style="padding:12px;border-top:1px solid #eee;">
        <input type="text" id="chat-input-field" placeholder="Votre question..."
               style="width:calc(100% - 60px);padding:10px;border:1px solid #ddd;border-radius:8px;"/>
        <button id="chat-send-btn" style="width:50px;height:40px;margin-left:8px;background:#0078D4;color:white;border:none;border-radius:8px;cursor:pointer;">
          Envoyer
        </button>
      </div>
    `;

    document.body.appendChild(chatWindow);

    // Event listeners
    document.getElementById('chat-send-btn').onclick = () => this.sendMessage();
    document.getElementById('chat-input-field').onkeypress = (e) => {
      if (e.key === 'Enter') this.sendMessage();
    };

    // Message bienvenue
    this.addMessage('bot', 'Bonjour ! Je suis l\'assistant Doveaia. Comment puis-je vous aider ?');
  }

  toggleChat() {
    const chatWindow = document.getElementById('doveaia-chat-window');
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
  }

  async sendMessage() {
    const input = document.getElementById('chat-input-field');
    const message = input.value.trim();
    if (!message) return;

    // Afficher message user
    this.addMessage('user', message);
    input.value = '';

    // Loader
    this.addMessage('bot', 'Réflexion...', 'loading');

    try {
      // Call API
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          message: message,
          thread_id: this.threadId
        })
      });

      const data = await response.json();
      this.threadId = data.thread_id;

      // Remove loader
      document.querySelector('.loading')?.remove();

      // Afficher réponse bot
      this.addMessage('bot', data.reply);

    } catch (error) {
      document.querySelector('.loading')?.remove();
      this.addMessage('bot', 'Désolé, une erreur est survenue. Réessayez ou contactez-nous directement.');
    }
  }

  addMessage(role, content, className = '') {
    const messagesDiv = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role} ${className}`;
    messageDiv.style.cssText = `
      margin-bottom: 12px;
      padding: 10px 12px;
      border-radius: 8px;
      max-width: 80%;
      ${role === 'user' ? 'background:#0078D4;color:white;margin-left:auto;text-align:right;' : 'background:#f0f0f0;'}
    `;
    messageDiv.textContent = content;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
}

// Init
new DoveaiaChatWidget();
```

---

## 📊 Métriques & Monitoring

### Dashboard Application Insights

**KPIs à tracker** :
1. **Volumétrie** :
   - Nombre messages/jour
   - Nombre sessions chat/jour
   - Questions uniques (deduplicated)

2. **Engagement** :
   - Messages moyens/session
   - Durée session moyenne
   - Taux rebond (1 message puis quitte)

3. **Qualité** :
   - Taux satisfaction (👍/👎 en fin de conversation)
   - Questions sans réponse (agent dit "je ne sais pas")
   - Latence réponse (p50, p95)

4. **Business** :
   - CTA "Audit gratuit" cliqués
   - Formulaires soumis
   - Taux conversion visiteur → lead

**Alertes à configurer** :
- Latence > 5 sec (problème infra)
- Taux erreur > 5% (problème code/API)
- Questions sans réponse > 20% (enrichir KB)

---

## 💰 ROI Business Chiffré

### Coûts

**Développement** :
- Temps dev : 40h (1 semaine full-time)
- Coût opportunité : 40h × 100€/h = 4 000€

**Opérationnel mensuel** :
- Azure AI Foundry (GPT-4o-mini) : 20-40€/mois (200 conversations)
- Azure Functions : 5€/mois
- Azure AI Search : 20€/mois
- **Total** : 45-65€/mois

---

### Gains

**Gain temps** :
- Questions emails évitées : 30/mois × 5 min = 150 min = 2,5h/mois
- Valeur : 2,5h × 100€/h = 250€/mois

**Génération leads** :
- Leads générés : 5-10/mois (moyenne 7)
- Taux conversion lead → client : 20% (conservateur)
- Clients/mois : 1,4
- CA moyen : 7 000€ (Starter)
- **CA généré/mois** : 9 800€

**ROI** :
- Investissement : 4 000€ (dev) + 50€/mois (ops)
- Retour : 9 800€/mois (CA)
- **Break-even : 15 jours** 🚀

---

## 🎬 Script Démo Prospect

### Setup (Avant démo)

**Pré-requis** :
- Agent en prod sur doveaia.fr
- 30+ Q/R dans knowledge base
- Monitoring dashboard préparé (pour montrer analytics)

---

### Démo Live (5 min)

**Étape 1 : Montrer Widget (30 sec)**
> "Regardez notre site doveaia.fr. Vous voyez cette bulle bleue coin bas-droit ? C'est notre agent IA. Il tourne 24/7 depuis 3 semaines."

**Étape 2 : Poser Question Simple (1 min)**
> "Je vais lui demander : 'C'est quoi LLMOps ?'"
> [Taper question, attendre réponse 3 sec]
> "Voilà. Réponse structurée en 3 secondes. Il a cherché dans notre knowledge base Azure AI Search."

**Étape 3 : Poser Question Pricing (1 min)**
> "Maintenant : 'Combien coûte l'offre Starter ?'"
> [Réponse agent : "5-10k€, délai 2-3 semaines"]
> "Il connaît nos offres par cœur. Avant, on répondait à ça 10 fois/semaine par email."

**Étape 4 : Lead Capture (1 min)**
> "Si je pose 3 questions, il me propose un audit gratuit."
> [Poser 3ème question]
> [Agent propose : "Intéressé ? Réservez un audit de 30 min"]
> "Là, il capture mon email, crée un lead dans notre CRM. Automatique."

**Étape 5 : Montrer Analytics (1,5 min)**
> [Ouvrir dashboard Application Insights]
> "Voici les métriques. En 3 semaines :
> - 180 conversations
> - 420 messages échangés
> - 8 leads générés
> - Taux satisfaction : 92% (👍)
> - Latence moyenne : 2,1 secondes"

**Conclusion (30 sec)**
> "Cet agent nous a généré 8 leads en 3 semaines. 2 sont devenus clients = 15k€ CA. Temps de dev : 2 semaines. Coût Azure : 50€/mois. C'est ce qu'on appelle un quick win."

---

## 📝 Checklist Développement

### Semaine 1 : MVP

**Jour 1-2 : Setup Infra**
- [ ] Créer ressource Azure AI Foundry
- [ ] Créer agent FAQ (via portal ou SDK)
- [ ] Tester agent manuellement (Playground)
- [ ] Écrire 10 Q/R de base dans system prompt

**Jour 3-4 : Backend API**
- [ ] Créer Azure Function (Python)
- [ ] Endpoint POST /chat
- [ ] Intégrer SDK Azure AI Foundry
- [ ] Tests unitaires
- [ ] Déployer sur Azure

**Jour 5 : Frontend Widget**
- [ ] Développer widget JavaScript
- [ ] Design basique (bubble + chat window)
- [ ] Intégration API backend
- [ ] Tests cross-browser (Chrome, Firefox, Safari)

**Weekend : Intégration Site**
- [ ] Ajouter widget sur doveaia.fr
- [ ] Tests avec 3-5 beta-testeurs
- [ ] Corrections bugs
- [ ] Go-live ! 🚀

---

### Semaine 2 : Enrichissement

**Jour 1-2 : Azure AI Search (RAG)**
- [ ] Créer index Azure AI Search
- [ ] Upload 30 Q/R
- [ ] Configurer semantic search
- [ ] Intégrer agent avec Search (tool)

**Jour 3 : Lead Capture**
- [ ] Ajouter logique : Si 3+ questions → CTA
- [ ] Formulaire : Nom, Email, Entreprise
- [ ] Webhook CRM (Notion API)
- [ ] Email confirmation auto

**Jour 4-5 : Monitoring & Analytics**
- [ ] Setup Application Insights
- [ ] Logs customs (questions, réponses, latence)
- [ ] Dashboard Power BI ou Grafana
- [ ] Alertes (erreurs, latence)

---

## 🚀 Next Steps : Évolutions Possibles

### Court Terme (Mois 2)

- [ ] Multilingue (FR + EN)
- [ ] Recommandation offre intelligente (qualifier besoin → suggérer Starter vs Scale)
- [ ] Handoff humain (si question trop complexe → email alert)
- [ ] A/B testing CTA ("Réserver audit" vs "Demander démo")

### Moyen Terme (Mois 3-6)

- [ ] Voice-to-text (permettre questions audio)
- [ ] Intégration calendrier (booking direct RDV)
- [ ] Historique conversations (dashboard client)
- [ ] Agent proactif (propose contenu selon page visitée)

### Long Terme (6-12 mois)

- [ ] Agent multi-modal (répondre avec images, vidéos)
- [ ] Personnalisation (adapter ton selon visiteur : tech vs business)
- [ ] Prédiction churn (si visiteur revient 3x sans lead → action)
- [ ] SaaS produit (proposer widget aux clients)

---

**Document créé le 26/12/2024**
**Prochaine étape** : Commencer Jour 1 setup infra Azure AI Foundry
