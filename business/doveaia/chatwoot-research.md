# Chatwoot Research for DoveAIA Stack Integration

**Date**: 2026-03-31
**Context**: Evaluating Chatwoot as the human-agent customer service layer alongside OpenFang AI agents in a managed SaaS platform (Go backend, Angular frontend, Azure/Hetzner hosting).

---

## 1. What Is Chatwoot?

**Chatwoot** is an open-source, AI-powered customer engagement platform. It is a direct alternative to Intercom, Zendesk, and Freshdesk.

| Attribute | Detail |
|-----------|--------|
| **License** | MIT License (fully open-source, community edition) |
| **Primary Language** | Ruby on Rails (backend), Vue.js 3 (frontend) |
| **Other Languages** | JavaScript/TypeScript, HTML, CSS |
| **Database** | PostgreSQL 14+ (with pgvector for AI semantic search) |
| **Cache/Queue** | Redis 7.0+ |
| **Background Jobs** | Sidekiq |
| **Real-time** | ActionCable (WebSockets) |
| **GitHub Stars** | ~26,200+ |
| **GitHub Forks** | ~5,900+ |
| **Contributors** | 500+ |
| **Last Updated** | Active daily (last push: March 30, 2026) |
| **Latest Major** | Chatwoot 4.0 (with Captain AI agent) |
| **Self-hosted** | Yes, fully supported |
| **Cloud** | Yes, hosted by Chatwoot team |

### Architecture Overview

```
                    ┌─────────────┐
                    │   Nginx/    │
                    │  Reverse    │
                    │   Proxy     │
                    └──────┬──────┘
                           │
              ┌────────────┴────────────┐
              │                         │
       ┌──────┴──────┐          ┌──────┴──────┐
       │   Rails     │          │  Sidekiq    │
       │   Server    │          │  Workers    │
       │  (Port 3000)│          │ (Background)│
       └──────┬──────┘          └──────┬──────┘
              │                         │
       ┌──────┴─────────────────────────┴──────┐
       │                                        │
  ┌────┴────┐                            ┌─────┴─────┐
  │PostgreSQL│                            │   Redis   │
  │(pgvector)│                            │  (7.0+)   │
  └─────────┘                            └───────────┘
```

---

## 2. API and Integration Capabilities

### Three API Types

| API Type | Purpose | Auth Method | Availability |
|----------|---------|-------------|-------------|
| **Application API** | Account-level automation, agent-facing integrations | User `access_token` from Profile Settings | Cloud + Self-hosted |
| **Client API** | Build custom messaging experiences | `inbox_identifier` + `contact_identifier` | Cloud + Self-hosted |
| **Platform API** | Admin-level installation management | `access_token` from Super Admin Console | Self-hosted only |

### Key API Endpoint Groups

- **Conversations**: Create, list, update, assign, resolve, toggle status
- **Messages**: Create (incoming/outgoing), list, update, attachments
- **Contacts**: CRUD, search, filter, merge, custom attributes
- **Agents**: List, create, update, delete
- **Teams**: Create, manage, assign to conversations
- **Labels**: Create, list, assign to conversations/contacts
- **Inboxes**: Create, update, manage channels
- **Canned Responses**: CRUD for template messages
- **Automation Rules**: Create and manage triggers
- **Reports**: Fetch conversation/agent metrics
- **Webhooks**: Subscribe to events with URL + custom headers
- **Agent Bots**: Create, update, assign to inboxes
- **Custom Attributes**: Define and manage per account
- **Accounts**: Create, manage (Platform API)

### Webhooks System

- HTTP POST requests sent to your URL on events
- **Signed payloads** (HMAC verification for security)
- Events: `conversation_created`, `conversation_status_changed`, `message_created`, `message_updated`, `contact_created`, `contact_updated`, `webwidget_triggered`
- Custom headers supported
- Event filtering (subscribe only to events you care about)

### WebSocket / Real-time

- ActionCable-based WebSocket connections
- Subscribe using `pubsub_token` (provided at contact creation)
- Real-time events: new messages, typing indicators, presence updates, conversation status changes
- Selective broadcasting (efficient, not firehose)

### Go Backend Integration

**Yes, a Go backend can fully control Chatwoot via API.**

- Community Go client exists: `github.com/Kai-Karren/chatwoot-golang-client`
- Functions: `CreateContact()`, `CreateNewConversation()`, `CreateIncomingMessage()`, `CreateOutgoingMessage()`, `GetMessages()`
- All API endpoints are standard REST (JSON), so any HTTP client works
- Authentication: Bearer token in `api_access_token` header

---

## 3. Channels Supported

| Channel | Attachments | Outbound Limits | Notes |
|---------|-------------|-----------------|-------|
| **Web Widget** | Yes | Verified contacts only | Full formatting, customizable |
| **Email** | Yes | Unrestricted | Connect any SMTP/IMAP email |
| **WhatsApp** | Yes | Template-only after 24h | Via Twilio or WhatsApp Cloud API |
| **Facebook Messenger** | Yes | No outbound after 24h silence | Meta Business integration |
| **Instagram DM** | Yes | No outbound after 24h silence | Meta Business integration |
| **Twitter/X** | Yes | Platform limits apply | Direct messages |
| **Telegram** | Yes | Unrestricted | Bot API integration |
| **SMS** | No | Unrestricted | Via Twilio, Bandwidth, etc. |
| **Line** | No | Unrestricted | LINE Official Account |
| **TikTok** | Yes | No messages after 48h | Business API |
| **API Channel** | Yes | Custom agent reply window | **For building custom channels** |

### API Channel (Critical for DoveAIA)

The API Channel is how you connect **any custom platform**:
1. Create an API channel inbox with a callback URL
2. Create contacts via API
3. Initiate conversations via API
4. Send/receive messages via API
5. Receive webhook callbacks for agent responses

This means OpenFang's 40+ channel adapters can feed into Chatwoot via the API channel, giving agents a unified inbox for channels Chatwoot doesn't natively support.

---

## 4. Key Features for Service Client Platform

### Inbox Management
- Unified inbox across all channels
- Conversation filters (status, assignee, label, team, priority)
- Bulk actions on conversations
- Conversation snooze/mute
- Internal notes (private, not visible to customer)
- Mentions (@agent) for collaboration

### CSAT (Customer Satisfaction)
- Automatic survey sent on conversation resolution
- Configurable per inbox
- Label-based control (which conversations trigger CSAT)
- CSAT reports with ratings and feedback
- Track satisfaction trends over time

### Automation Rules
- **Trigger events**: conversation_created, conversation_updated, message_created, conversation_opened, conversation_resolved
- **Conditions**: Status, inbox, browser language, custom attributes, labels, priority, team
- **Actions**: Assign agent/team, add labels, send email, send message, email transcript, mute/snooze, resolve, trigger webhook, change priority

### Canned Responses
- Pre-written templates with variable substitution
- Shortcodes for quick access (type `/` to search)
- Account-level or personal canned responses

### Agent Assignment
- **Round-robin**: Automatic equal distribution
- **Smart assignment**: Based on agent capacity/workload
- **Priority-based**: Based on conversation priority
- Manual assignment to specific agents
- Auto-assignment on inbox level

### Teams / Departments
- Create teams with specific agents
- Assign conversations to teams
- Team-level notification settings
- Cross-team collaboration

### Labels / Tags
- Create custom labels
- Apply to conversations and contacts
- Filter conversations by labels
- Use in automation rules
- Reporting by labels

### Reports / Analytics
- **Conversation reports**: Volume, resolution time, response time
- **Agent reports**: Performance metrics per agent
- **Inbox reports**: Channel-specific metrics
- **Team reports**: Team performance
- **Label reports**: Topic/category analysis
- **CSAT reports**: Satisfaction scores and trends
- Date range filtering, CSV export

### SLA Management
- Define SLA policies with:
  - **FRT (First Response Time)** targets
  - **NRT (Next Response Time)** targets
  - **Resolution time** targets
- Apply SLAs based on priority, customer tier, inbox
- Automation rules can trigger SLA assignment
- SLA breach tracking and alerts
- **Note**: Enterprise feature

### Knowledge Base / Help Center
- Article management with categories
- Multi-language support
- Custom domain capability
- Markdown support
- Public portal for self-service
- Vector-based semantic search (pgvector)
- Captain AI uses help center for automated responses

### Additional Features
- **Macros**: Reusable multi-action templates
- **Campaigns**: Proactive outreach (scheduled or trigger-based)
- **Custom Attributes**: Define custom fields for contacts/conversations
- **Pre-chat Forms**: Collect info before conversation starts
- **Audit Logs**: Track all account actions (Enterprise)
- **SSO**: Single Sign-On (Enterprise)

---

## 5. AI/Bot Integration

### Captain AI (Built-in)

Chatwoot's native AI agent, powered by OpenAI:

- **Assistant Mode**: Auto-responds to customers using help center content + RAG
- **Copilot Mode**: Suggests replies to agents, summarizes conversations
- **Features**:
  - Reply suggestion
  - Conversation summarization
  - Message rewrite (tone/clarity)
  - Label suggestion
  - Follow-up generation
  - Document processing (PDF upload, FAQ generation)
  - Vector embeddings via pgvector for semantic search
- **Model Configuration** (per account):
  - Editor: gpt-4o-mini
  - Assistant: gpt-4o
  - Copilot: gpt-4o
  - Audio transcription: whisper-1
- **Custom OpenAI-compatible endpoints**: Azure OpenAI, local deployments supported
- **Limitation**: No Ollama/self-hosted LLM support yet (community concern)

### AgentBot API (For Plugging OpenFang)

This is the key integration point for DoveAIA:

```
Customer Message → Chatwoot Inbox
       │
       ▼
AgentBot receives webhook (POST to outgoing_url)
       │
       ▼
Your Go backend / OpenFang processes message
       │
       ▼
Responds via Chatwoot API: POST /api/v1/accounts/:id/conversations/:id/messages
       │
       ▼
Customer sees response in their channel
```

**AgentBot Lifecycle**:
1. **Create bot**: `POST /platform/api/v1/agent_bots` with name, outgoing_url (webhook)
2. **Assign to inbox**: Link bot via `AgentBotInbox`
3. **Receive events**: `widget_triggered`, `message_created`, `message_updated`
4. **Bot processes**: Forward to OpenFang for AI response
5. **Respond**: Post message back via Chatwoot API
6. **Handoff**: Call `bot_handoff!` when human needed → conversation moves to `open` status for agent pickup

**Webhook Events Received by Bot**:
- Conversation metadata
- Message content and sender info
- Contact/customer details
- Custom attributes and context

**Handoff Mechanism**:
- `bot_handoff!` changes status to `open`
- Fires `CONVERSATION_BOT_HANDOFF` event
- Enables human agent assignment
- Seamless transition from AI to human

### Dialogflow Integration
- Native Google Dialogflow support
- Requires: Project ID + Service Account credentials
- Automatic message forwarding to Dialogflow

### Custom Tools for Captain AI
- HTTP endpoint integration for external data sources
- Parameter schema definition (JSON)
- Authentication: none, bearer, basic, api_key
- Request/response templates for data transformation
- Allows Captain to query CRMs, knowledge bases, internal tools

---

## 6. Multi-tenant / White-label

### Multi-tenancy Architecture

Chatwoot supports multi-tenancy **out of the box**:

- Tenant isolation via `account_id` column in all tables
- Each account's data is isolated and inaccessible to others
- Shared infrastructure, reduced costs
- Per-account customization: inboxes, agents, branding

### Super Admin Capabilities
- Create and manage accounts
- Feature flag management per account
- White-label settings (Enterprise)
- Installation-level configuration
- Platform API for programmatic account management

### White-label (Enterprise Feature)
- Branding removal (remove Chatwoot branding)
- Custom branding per account
- Configurable from Super Admin panel
- Introduced in v3.4.0

### For DoveAIA's Use Case

Using the **Platform API** (self-hosted only), our Go backend can:
- Programmatically create accounts per client
- Create agents within each account
- Configure inboxes per account
- Set up Agent Bots (OpenFang) per account
- Manage everything via API

### Current Limitations
- Multiple brands share server-level SMTP credentials
- Multiple brands share inbound email processing credentials
- Email sending domains must be hosted on same infrastructure
- No per-account custom domain for the agent dashboard (workaround: reverse proxy)

---

## 7. Deployment

### Docker Production Stack

```yaml
Services:
  - Rails server (chatwoot/chatwoot:latest) → Port 3000
  - Sidekiq worker (chatwoot/chatwoot:latest)
  - PostgreSQL (pgvector:pg16)
  - Redis (alpine)
```

### System Requirements

| Resource | Minimum | Recommended |
|----------|---------|-------------|
| **RAM** | 4 GB (light) / 8 GB | 16 GB |
| **CPU** | 2 cores | 4 cores |
| **Storage** | 60 GB SSD | SSD, expandable |
| **PostgreSQL** | 14+ | 16 with pgvector |
| **Redis** | 7.0+ | 7.0+ |
| **OS** | Ubuntu 22.04 LTS | Any Docker host |
| **Docker** | 20.10.10+ | Latest |
| **Docker Compose** | v2.14.1+ | Latest |

### Scaling Strategy

1. **Separate Rails and Sidekiq** into independent containers → scale independently
2. **Managed PostgreSQL** (Azure Database for PostgreSQL) → offload DB management
3. **Managed Redis** (Azure Cache for Redis) → offload cache management
4. **S3-compatible storage** for file uploads (Azure Blob via S3 API)
5. **Nginx reverse proxy** with SSL termination
6. **Horizontal scaling**: Multiple Rails containers behind load balancer

### Azure Container Apps Compatibility

Chatwoot can run on Azure Container Apps:
- Deploy Rails and Sidekiq as separate container apps
- Use Azure Database for PostgreSQL Flexible Server
- Use Azure Cache for Redis
- Use Azure Blob Storage for uploads
- Container Apps handles scaling, HTTPS, and ingress
- **Alternative**: Azure Kubernetes Service (AKS) for more control
- **Budget option**: Hetzner Cloud with Docker Compose (lower cost)

### Deployment Steps (Docker)
1. Install Docker + Docker Compose
2. Download `.env` template and `docker-compose.production.yaml`
3. Configure environment variables (DB, Redis, SMTP, storage)
4. Run `docker compose run --rm rails bundle exec rails db:chatwoot_prepare`
5. `docker compose up -d`
6. Set up Nginx reverse proxy with SSL

---

## 8. Chatwoot vs OpenFang: Complementary, Not Competing

### What OpenFang Provides (That Chatwoot Doesn't)

| Capability | OpenFang | Chatwoot |
|-----------|----------|----------|
| 40+ channel adapters | Yes (native) | ~13 channels |
| 26 LLM providers | Yes | OpenAI only (Captain) |
| Autonomous AI agents | Yes (24/7, scheduled) | Limited (Captain, Enterprise) |
| Knowledge graph building | Yes | No |
| WASM sandboxed tools | Yes | No |
| Single binary deployment | Yes (~32MB) | No (full Rails stack) |
| Custom agent behaviors | Yes (30+ agent types) | Basic automation rules |
| Lead generation agents | Yes | No |
| Social media management agents | Yes | No |

### What Chatwoot Provides (That OpenFang Doesn't)

| Capability | Chatwoot | OpenFang |
|-----------|----------|----------|
| **Agent dashboard UI** | Full-featured web UI | No human-agent UI |
| **Human agent routing** | Round-robin, smart, priority | No |
| **CSAT surveys** | Built-in | No |
| **SLA management** | Yes (Enterprise) | No |
| **Inbox management** | Unified multi-channel inbox | No |
| **Agent performance reports** | Comprehensive | No |
| **Knowledge base / Help center** | Built-in with portal | No |
| **Canned responses / Macros** | Yes | No |
| **Team management** | Yes | No |
| **Conversation history UI** | Full searchable history | No |
| **Pre-chat forms** | Yes | No |
| **Human handoff workflow** | Native `bot_handoff!` | No |
| **CSAT / NPS tracking** | Yes | No |
| **Audit logs** | Yes (Enterprise) | No |

### The Ideal Coexistence Architecture for DoveAIA

```
Customer sends message (any channel)
         │
         ▼
   ┌─────────────┐
   │  OpenFang    │ ← 40+ channels, AI-first response
   │  AI Agents   │
   └──────┬──────┘
          │
     Can handle? ──Yes──► AI responds directly
          │
          No / Complex / Human requested
          │
          ▼
   ┌─────────────┐
   │  Chatwoot    │ ← Human agent picks up
   │  AgentBot    │    via unified inbox
   │  Handoff     │
   └──────┬──────┘
          │
          ▼
   Human agent resolves in Chatwoot UI
   (with AI-suggested replies from Captain/OpenFang)
```

**Integration Pattern**:
1. OpenFang handles initial customer contact across all channels
2. For channels Chatwoot supports natively (WhatsApp, Email, etc.): messages flow through Chatwoot with AgentBot → OpenFang
3. For channels only OpenFang supports: OpenFang handles AI, pushes to Chatwoot via API Channel when human needed
4. Human agents work in Chatwoot's unified inbox
5. CSAT, SLAs, reports all tracked in Chatwoot
6. Go backend orchestrates both systems via their respective APIs

---

## 9. Pricing

### Cloud-Hosted Plans

| Plan | Price | Agents | Conversations | Data Retention | Key Features |
|------|-------|--------|---------------|----------------|-------------|
| **Hacker** | Free | 2 | 500/month | 30 days | Web chat only |
| **Startups** | $19/agent/mo | Unlimited | Unlimited | 6 months | Email, social, WhatsApp, SMS, Telegram, Line, help center, basic automations, 300 Captain AI credits |
| **Business** | $39/agent/mo | Unlimited | Unlimited | 1 year | Full automations, teams, custom attributes, pre-chat forms, full reporting, 500 Captain AI credits |
| **Enterprise** | $99/agent/mo | Unlimited | Unlimited | 2 years | SSO, audit logs, SLAs, branding removal, dedicated account manager (20+ seats), 800 Captain AI credits |

Additional Captain AI credits: $20 per 1,000 credits.

### Self-Hosted Plans

| Plan | Price | Support | Notes |
|------|-------|---------|-------|
| **Community** | **Free** | Community only | Full MIT license, all features except Enterprise-gated ones |
| **Premium** | $19/agent/mo | Priority email | Pro features + premium support |
| **Enterprise** | $99/agent/mo | Phone + video + dedicated manager | SLAs, audit logs, white-label, SSO |

### For DoveAIA's Managed SaaS

**Recommended approach**: Self-hosted Community Edition (free, MIT license)
- No per-agent licensing cost
- Full API access including Platform API
- Multi-tenant via accounts
- Add Enterprise license only if needed for: SLA management, audit logs, SSO, white-labeling
- **Our margin**: We charge clients per-agent or per-conversation, Chatwoot itself costs nothing (self-hosted)

### Hidden Costs to Budget For
- WhatsApp/SMS: Carrier/Twilio fees per message
- Hosting: PostgreSQL, Redis, compute (est. $50-200/month on Hetzner, $200-500/month on Azure)
- Storage: File uploads, conversation attachments
- OpenAI API: If using Captain AI features
- No annual billing discounts available

---

## 10. Risk Assessment and Considerations

### Strengths
- Very active project (daily commits, 26k+ stars)
- MIT license = no licensing risk
- Comprehensive API = full programmatic control
- AgentBot pattern = perfect for OpenFang integration
- Multi-tenant out of the box
- Platform API for SaaS management
- Existing Go client library
- Large community (Discord, GitHub Discussions)
- Proven at scale (200M+ messages in some deployments)

### Risks / Concerns
- **Ruby on Rails**: Not in our core stack (Go/Angular). Maintenance, debugging, and customization require Rails knowledge
- **No Ollama/self-hosted LLM**: Captain AI requires OpenAI (concern for privacy-sensitive clients)
- **Enterprise features gated**: SLA, SSO, audit logs, white-label require paid Enterprise license
- **Email multi-tenant limitation**: Shared SMTP credentials across accounts
- **Resource-heavy**: 8-16GB RAM for production (vs OpenFang's 32MB binary)
- **Vue.js frontend**: Not Angular. If we need to customize the agent UI, it's a different framework

### Mitigation
- Use Chatwoot purely via API, don't customize the Rails codebase
- Use OpenFang for AI, Chatwoot only for human agent workflow
- Budget for Enterprise license if SLA/SSO are needed
- Deploy on Hetzner to keep costs low
- Use managed PostgreSQL/Redis to reduce ops burden

---

## 11. Decision Summary

Chatwoot is an excellent fit for DoveAIA's human-agent layer. The architecture should be:

1. **OpenFang** = AI brain (40+ channels, autonomous agents, LLM flexibility)
2. **Chatwoot** = Human agent workspace (inbox UI, routing, CSAT, SLAs, reports)
3. **Go backend** = Orchestrator (manages both via APIs, handles billing, multi-tenant provisioning)
4. **Angular frontend** = Client dashboard (shows metrics from both systems)

The AgentBot API is the bridge: OpenFang handles AI-first, hands off to Chatwoot when humans are needed, and the `bot_handoff!` mechanism makes this seamless.

---

## Sources

- [Chatwoot GitHub Repository](https://github.com/chatwoot/chatwoot)
- [Chatwoot Developer Docs - API Introduction](https://developers.chatwoot.com/api-reference/introduction)
- [Chatwoot Features](https://www.chatwoot.com/features)
- [Chatwoot Channels](https://www.chatwoot.com/features/channels)
- [Chatwoot Supported Features on Channels](https://developers.chatwoot.com/self-hosted/supported-features)
- [Chatwoot Pricing](https://www.chatwoot.com/pricing/)
- [Chatwoot Self-Hosted Pricing](https://www.chatwoot.com/pricing/self-hosted-plans/)
- [Chatwoot Pricing Analysis (Featurebase)](https://www.featurebase.app/blog/chatwoot-pricing)
- [Chatwoot Docker Deployment Guide](https://developers.chatwoot.com/self-hosted/deployment/docker)
- [Chatwoot Agent Bots Documentation](https://www.chatwoot.com/hc/user-guide/articles/1677497472-how-to-use-agent-bots)
- [Chatwoot API Channel](https://www.chatwoot.com/hc/user-guide/articles/1677839703-how-to-create-an-api-channel-inbox)
- [Chatwoot Webhooks Guide](https://www.chatwoot.com/hc/user-guide/articles/1677693021-how-to-use-webhooks)
- [Chatwoot AI and Automation (DeepWiki)](https://deepwiki.com/chatwoot/chatwoot/9-ai-and-automation)
- [Chatwoot Features and Capabilities (DeepWiki)](https://deepwiki.com/chatwoot/chatwoot/1.1-features-and-capabilities)
- [Chatwoot Multi-Tenant Overview](https://www.restack.io/docs/chatwoot-knowledge-chatwoot-multi-tenant-overview)
- [Chatwoot Enterprise Edition](https://developers.chatwoot.com/self-hosted/enterprise-edition)
- [Chatwoot SLA Management](https://www.chatwoot.com/features/sla/)
- [Chatwoot CSAT Reports](https://www.chatwoot.com/features/csat-reports)
- [Chatwoot Go Client](https://pkg.go.dev/github.com/Kai-Karren/chatwoot-golang-client/chatwootclient)
- [Chatwoot 4.0 HN Discussion](https://news.ycombinator.com/item?id=43840012)
- [OpenFang GitHub](https://github.com/RightNow-AI/openfang)
- [OpenFang Website](https://www.openfang.sh/)
- [Eesel AI - Chatwoot Overview](https://www.eesel.ai/blog/chatwoot)
- [Eesel AI - Chatwoot AI Guide](https://www.eesel.ai/blog/chatwoot-ai)
