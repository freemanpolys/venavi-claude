# OpenFang vs Hermes Agent -- Analyse Critique pour DoveAIA

> **Objectif** : Choisir un framework d'agents autonomes pour déployer chez nos clients, avec backend Go, hébergement Azure Container Apps / VMs Azure ou Hetzner.
>
> **Date d'analyse** : 2026-03-31
> **Dernière mise à jour** : 2026-03-31 (v5 -- URLs inline, pattern 1 instance/client, fact-checks, coûts)

---

## TL;DR -- Verdict

| | OpenFang | Hermes Agent |
|---|---|---|
| **Recommandation** | **Choix DoveAIA** -- API REST riche, OFP clustering, RBAC, perf Rust, architecture "agent OS" | Bon pour messaging multi-plateforme, mais moins adapté à notre stack Go |
| **Pour DoveAIA** | Adopter comme agent runtime derrière notre Go API Gateway. **1 instance par client.** | Composant messaging optionnel si besoin de canaux spécifiques |

**OpenFang est le meilleur fit pour notre architecture Go + Azure**, à condition de l'utiliser comme runtime agent (pas comme plateforme SaaS standalone). Notre backend Go reste le cerveau (auth enterprise, multi-tenant, PostgreSQL, billing).

---

## 1. Identité des projets

### OpenFang

> **Docs** : [openfang.sh](https://www.openfang.sh/) | **Repo** : [github.com/RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | **Product Hunt** : [producthunt.com/products/openfang](https://www.producthunt.com/products/openfang)

- **Créateur** : Jaber (jaberjaber23), fondateur de RightNow AI -- **projet solo** (199/253 commits)
- **Stars** : ~15 955 | **Forks** : ~1 981 | **Issues ouvertes** : 97
- **Langage** : Rust (137K LOC, 14 crates) -- binaire unique ~32MB
- **Licence** : Apache 2.0 sur GitHub (le site dit MIT -- incohérence à surveiller)
- **Open-sourcé** : 1er mars 2026 (~5 semaines)
- **Version** : v0.5.7 (7 releases en 5 semaines)
- **Positionnement** : "Agent Operating System" -- un OS pour agents autonomes

### Hermes Agent

> **Docs** : [hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs/) | **Repo** : [github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | **Awesome list** : [github.com/0xNyk/awesome-hermes-agent](https://github.com/0xNyk/awesome-hermes-agent)

- **Créateur** : NousResearch (labo de recherche IA reconnu)
- **Stars** : ~19 055 | **Forks** : ~2 307 | **Issues ouvertes** : 1 066
- **Langage** : Python 3.11 (+ Node.js 22 pour browser/WhatsApp)
- **Licence** : MIT
- **Release** : 26 février 2026 (~5 semaines)
- **Version** : v0.6.0 (6 releases en mars 2026)
- **Positionnement** : "The agent that grows with you" -- agent personnel auto-améliorant

---

## 2. Architecture technique

### OpenFang -- Rust, orienté performance et sécurité

> **Doc architecture** : [openfang.sh/docs/architecture](https://www.openfang.sh/docs/architecture) | **Config** : [openfang.sh/docs/configuration](https://www.openfang.sh/docs/configuration)

```
CLI -> API (Axum 0.8, 70+ endpoints) -> Kernel -> Runtime/Channels/Wire/Skills -> Memory (SQLite) -> Shared Types
                                           |
                                     OFP P2P Network (libp2p, HMAC-SHA256)
```

- **Déploiement** : binaire unique ~32MB, macOS/Linux/Windows. Install : `curl -fsSL https://openfang.sh/install | sh`
- **Desktop** : app Tauri 2.0 (system tray, notifications)
- **API** : 70+ endpoints REST/WebSocket/SSE + interface compatible OpenAI `/v1/chat/completions` ([API Reference](https://github.com/RightNow-AI/openfang/blob/main/docs/api-reference.md))
- **Auth API** : Bearer token, SHA256 API key hash par user
- **Mémoire** : SQLite avec vector embeddings (all-MiniLM-L6-v2), knowledge graph, JSONL session mirroring, consolidation automatique (`consolidation_threshold = 10000`), decay rate configurable (`decay_rate = 0.1`)
- **Sandbox** : WASM dual-metered (fuel + epoch), subprocess isolation, taint tracking
- **Lifecycle agent** : Running -> Suspended -> Terminated, spawn/message/kill gated par capabilities
- **Anti-loop** : LoopGuard (SHA256 dedup, block à 5 répétitions, kill à 30)
- **Kernel modes** : `stable` (conservateur), `default`, `dev` (agressif) -- config : `mode = "stable"` pour prod
- **Protocoles** : MCP (client+serveur, stdio+SSE), Google A2A (.well-known/agent.json), OFP (P2P)
- **Langue/locale** : configurable via `language = "fr"`

**Performance revendiquée** ([SitePoint benchmarks](https://www.sitepoint.com/openfang-rust-agent-os-performance-benchmarks/) -- auto-publiée, non vérifiée indépendamment) :

| Métrique | OpenFang | CrewAI | LangGraph |
|---|---|---|---|
| Cold start | ~180ms | ~6s | ~6s |
| Mémoire idle | ~40MB | ~180MB | ~220MB |
| Tasks/sec (routing) | ~2 400 | ~180 | ~180 |
| Mémoire 100 agents | ~1.2GB | ~8.4GB | ~11GB |
| Taille install | ~32MB | ~280-410MB | ~280-410MB |

### Hermes Agent -- Python, orienté messaging et mémoire

> **Doc quickstart** : [hermes-agent.nousresearch.com/docs/getting-started/quickstart](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart/) | **Doc architecture** : [hermes-agent.nousresearch.com/docs/developer-guide/architecture](https://hermes-agent.nousresearch.com/docs/developer-guide/architecture)

```
CLI/Gateway -> AIAgent (orchestrateur sync) -> Tools/Skills/Memory -> LLM Provider
```

- **Déploiement** : pip/uv install, systemd (Linux) ou launchd (macOS)
- **Mémoire (3 couches)** :
  - `MEMORY.md` (~800 tokens) -- notes de l'agent sur l'environnement
  - `USER.md` (~500 tokens) -- profil utilisateur
  - Session Search -- SQLite FTS5 + résumé LLM
- **Sandbox** : Docker (`--cap-drop ALL`, no-new-privileges), SSH remote, Singularity, Modal, Daytona
- **Compression contexte** : LLM auxiliaire (Gemini Flash par défaut) quand le contexte dépasse le seuil
- **Max** : 90 itérations/tour, budget warnings à 70% et 90%
- **Protocole** : MCP (client+serveur), peut s'exposer comme serveur MCP via `hermes mcp serve`

---

## 3. Fact-checks -- Mythes vs réalité

Vérifications effectuées en lisant la doc de config complète ([openfang.sh/docs/configuration](https://www.openfang.sh/docs/configuration)) et le code source.

| Claim | Verdict | Preuve |
|---|---|---|
| **OpenFang supporte PostgreSQL** | **FAUX** | Config `[memory]` ne liste que `sqlite_path`. Le code utilise `rusqlite::Connection`. Un skill `postgres-expert` et une intégration MCP Postgres existent, mais le stockage interne est 100% SQLite. |
| **OpenFang supporte les skills Go via WASM** | **Partiellement vrai** | Listé dans un tableau "Rust, C, Go, etc." dans [skill-development.md](https://github.com/RightNow-AI/openfang/blob/main/docs/skill-development.md), mais **aucun exemple Go, aucun SDK Go, aucune doc Go**. Théoriquement faisable (`GOOS=wasip1 GOARCH=wasm`), chemin non testé. |
| **OpenFang a 140+ endpoints** | **Partiellement vrai** | [api-reference.md](https://github.com/RightNow-AI/openfang/blob/main/docs/api-reference.md) documente **79 REST + WebSocket + SSE** endpoints. Le site marketing dit "140+" -- probable double-comptage. |
| **Hermes est "self-improving"** | **Survendu** | Review indépendante ([DEV.to](https://dev.to/george_larson_3cc4a57b08b/hermes-agent-honest-review-1557)) : "structured note-taking" et "prompt injection with CRUD layer". Nécessite 50+ tâches similaires pour effet mesurable. |
| **Hermes-4-405B est supérieur** | **FAUX** | "Feels like Llama" selon les reviews. Le défaut pointe sur Claude Opus via OpenRouter, pas leur propre modèle. |

---

## 4. OFP -- OpenFang Protocol (clustering)

> **Doc config** : [openfang.sh/docs/configuration](https://www.openfang.sh/docs/configuration) section `[network]`

Point différenciant majeur d'OpenFang :

```toml
[network]
listen_addresses = ["/ip4/0.0.0.0/tcp/0"]
bootstrap_peers = []        # Multiaddresses pour DHT discovery cross-datacenter
mdns_enabled = true         # Auto-découverte réseau local
max_peers = 50
shared_secret = "my-cluster-secret"   # HMAC-SHA256 mutual auth
```

**Ce que OFP fait :**
- P2P peer discovery via libp2p + mDNS (auto-découverte réseau local)
- Auth mutuelle HMAC-SHA256 via shared secret
- Communication agent-to-agent cross-noeuds
- DHT discovery via bootstrap peers (pour clusters distribués Azure/Hetzner)
- Max 50 peers par noeud

**Ce que OFP ne fait PAS (confirmé par la doc) :**
- Pas de réplication SQLite entre noeuds
- Pas de shared state / synchronisation mémoire
- Pas de failover automatique
- Pas de load balancing intégré

**Implication pour DoveAIA** : on peut répartir les instances OpenFang sur plusieurs machines (Azure + Hetzner) et les agents communiquent entre eux via OFP. Le failover et le load balancing restent à gérer côté Go backend.

**Hermes Agent** : aucun équivalent. Pas de clustering, pas de P2P.

---

## 5. RBAC et gestion utilisateurs

> **Doc config** : [openfang.sh/docs/configuration](https://www.openfang.sh/docs/configuration) section `[[users]]`

### OpenFang -- RBAC 4 rôles + channel bindings

```toml
[[users]]
name = "Alice"
role = "owner"
api_key_hash = "sha256_hash_of_api_key"

[users.channel_bindings]
telegram = "123456"
discord = "987654321"
slack = "U0ABCDEFG"
```

| Rôle | Droits |
|---|---|
| **Owner** | Admin total -- agents, users, config |
| **Admin** | Gestion agents + settings, ne peut pas modifier les owners |
| **User** | Interaction avec les agents, gestion limitée |
| **Viewer** | Lecture seule |

- **Channel bindings** : identité cross-plateforme (1 user = N plateformes)
- **API key par user** : auth individuelle SHA256
- **Limitation** : pas de per-agent access control, pas de rôles custom, pas d'OIDC/SAML

### Hermes Agent

> **Doc** : [hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs/) sections gateway/security

- Allowlists par plateforme (Telegram IDs, Discord guilds, etc.)
- DM pairing avec codes cryptographiques
- Per-user session isolation en group chat (`group_sessions_per_user: true`)
- Profils isolés (mémoire, skills, config séparés)
- **Limitation** : pas de RBAC structuré, pas de rôles, pas d'API key management

**Verdict** : OpenFang a un vrai RBAC avec rôles + channel bindings. Hermes a des allowlists basiques.

---

## 6. LLM et providers supportés

### OpenFang -- 20 providers natifs avec fallback chain

> **Doc config** : [openfang.sh/docs/configuration](https://www.openfang.sh/docs/configuration) sections `[default_model]` et `[[fallback_providers]]`

```toml
[default_model]
provider = "anthropic"
model = "claude-sonnet-4-20250514"
api_key_env = "ANTHROPIC_API_KEY"

[[fallback_providers]]
provider = "groq"
model = "llama-3.3-70b"
api_key_env = "GROQ_API_KEY"
```

**20 providers** : Anthropic, Gemini, OpenAI, Groq, OpenRouter, DeepSeek, Together, Mistral, Fireworks, Ollama, vLLM, LM Studio, Perplexity, Cohere, AI21, Cerebras, SambaNova, HuggingFace, xAI, Replicate.

- **Fallback chain** configurable (si Anthropic down -> Groq -> etc.)
- **Per-channel model override** via `[channels.NAME.overrides]` (`model = "gemini-2.0-flash"`)
- **Cost tracking** intégré (`usage_footer = "full"` pour tokens + coût)

### Hermes Agent

> **Doc providers** : [hermes-agent.nousresearch.com/docs/getting-started/quickstart](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart/)

OpenRouter, Nous Portal, Anthropic (ChatGPT OAuth), OpenAI, Z.ai, Kimi, MiniMax, Alibaba/Qwen, HuggingFace, Vercel AI Gateway, Ollama, vLLM, etc.

- Default pointe sur **Claude Opus via OpenRouter** (pas leur propre modèle Hermes-4-405B)
- Pas de fallback chain documentée
- Per-channel model override via config

---

## 7. Agents autonomes

### OpenFang : "Hands"

> **Doc** : [openfang.sh/docs/hands](https://www.openfang.sh/docs/hands) (présumé) | **Homepage** : [openfang.sh](https://www.openfang.sh/) section Hands

Packages autonomes qui tournent sur schedule sans intervention :

| Hand | Fonction |
|---|---|
| **Clip** | Vidéo -> shorts automatiques |
| **Lead** | Génération de leads qualifiés avec scoring |
| **Collector** | Monitoring OSINT |
| **Predictor** | Prévisions avec calibration Brier score |
| **Researcher** | Fact-checking avec évaluation CRAAP |
| **Twitter** | Gestion de compte X |
| **Browser** | Automatisation web avec gates d'approbation |

Chaque Hand = `HAND.toml` + system prompt multi-phase + `SKILL.md` + settings compilés dans le binaire. Publiables sur FangHub.

### Hermes Agent : Skills auto-créées

> **Doc skills** : [hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs/) section skills | **Review critique** : [DEV.to honest review](https://dev.to/george_larson_3cc4a57b08b/hermes-agent-honest-review-1557) | **Issue inspirée par OpenFang** : [#492](https://github.com/NousResearch/hermes-agent/issues/492)

- L'agent crée automatiquement des skills (fichiers markdown + YAML frontmatter) après des tâches complexes (5+ tool calls)
- Standard ouvert `agentskills.io`, progressive disclosure 3 niveaux
- Skills Hub avec 7 sources de registres
- **Critique honnête** : ce sont des templates de system prompt avec CRUD, pas des capacités compilées. Le "self-improving" est du structured note-taking glorifié. Nécessite 50+ tâches similaires pour être utile. ([source](https://dev.to/george_larson_3cc4a57b08b/hermes-agent-honest-review-1557))

---

## 8. Skills et extensibilité

### OpenFang -- 5 types de skills

> **Doc** : [skill-development.md](https://github.com/RightNow-AI/openfang/blob/main/docs/skill-development.md)

| Type | Langage | Sandbox | Cas d'usage |
|---|---|---|---|
| **Python** | Python | Subprocess | Le plus simple, prototypage rapide |
| **WASM** | Rust, C, Go* | WASM Wasmtime, full sandbox | Sécurité maximale |
| **Node.js** | JavaScript | Subprocess | Intégrations web |
| **Prompt-only** | Markdown | N/A | Expertise domaine sans code |
| **Builtin** | Rust | Compilé dans le binaire | Performance maximale |

*\*Go via WASM : listé dans la doc comme supporté via `wasm32-wasi` (Go supporte `GOOS=wasip1 GOARCH=wasm`), mais aucun exemple Go, aucun SDK Go, aucune doc Go spécifique. Chemin théorique non testé en production. Commencer par Python ou Rust.* ([source](https://github.com/RightNow-AI/openfang/blob/main/docs/skill-development.md))

38 outils built-in + MCP client/serveur + 60 skills bundled.

### Hermes Agent -- Skills markdown + plugins

> **Doc** : [hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs/) sections tools/skills

- Fichiers markdown + YAML frontmatter (standard agentskills.io)
- 40+ outils built-in (web, terminal, files, browser, media, orchestration)
- Plugin architecture (`~/.hermes/plugins/` -- drop Python files)
- MCP client/serveur (stdio + HTTP)

---

## 9. Canaux de communication

### Contrainte critique : 1 canal = 1 instance

> **Doc config** : [openfang.sh/docs/configuration](https://www.openfang.sh/docs/configuration) section `[channels]`

**OpenFang utilise des tables TOML simples (`[channels.whatsapp]`), pas des arrays (`[[channels.whatsapp]]`).** Conséquence : **1 seul bot/numéro par type de canal par instance**.

```toml
# UNE SEULE config WhatsApp possible par instance
[channels.whatsapp]
access_token_env = "WHATSAPP_ACCESS_TOKEN"
verify_token_env = "WHATSAPP_VERIFY_TOKEN"
phone_number_id = "123456789"
webhook_port = 8443
allowed_users = []
```

**Si Client-A a le WhatsApp +33 6xx et Client-B a le WhatsApp +33 7xx -> il faut 2 instances OpenFang.** C'est ce qui impose le pattern **1 instance par client** (voir section 16).

Même contrainte pour Hermes Agent (1 bot token par plateforme par instance).

### OpenFang -- 40 adapters avec overrides par canal

> **Doc config** : [openfang.sh/docs/configuration](https://www.openfang.sh/docs/configuration) sections `[channels.*]` et `[channels.*.overrides]`

Chaque canal supporte des overrides :
```toml
[channels.telegram.overrides]
model = "gemini-2.0-flash"          # Modèle différent par canal
system_prompt = "Tu es un assistant..."
dm_policy = "respond"               # respond | allowed_only | ignore
group_policy = "mention_only"       # all | mention_only | commands_only | ignore
rate_limit_per_user = 10            # Messages/min par user
threading = true
output_format = "telegram_html"     # markdown | telegram_html | slack_mrkdwn | plain_text
```

Canaux confirmés dans la config :

| Canal | Config clé |
|---|---|
| **Telegram** | `bot_token_env`, `allowed_users`, `poll_interval_secs` (1) |
| **Discord** | `bot_token_env`, `allowed_guilds`, `intents` (33280) |
| **Slack** | `app_token_env`, `bot_token_env`, `allowed_channels` |
| **WhatsApp** | `access_token_env`, `verify_token_env`, `phone_number_id`, `webhook_port` (8443) |
| **Teams** | `app_id`, `app_password_env`, `webhook_port` (3978), `allowed_tenants` |
| **Signal** | `api_url`, `phone_number`, `allowed_users` |
| **Matrix** | `homeserver_url`, `user_id`, `access_token_env`, `allowed_rooms` |
| **Email** | `imap_host`, `smtp_host`, IMAP port 993, SMTP port 587, `poll_interval_secs` (30) |
| **IRC** | `server`, `port` (6667), `nick`, `use_tls` |
| **Zulip** | `server_url`, `bot_email`, `api_key_env`, `streams` |
| **XMPP** | `jid`, `server`, `port` (5222), `rooms` |
| **Twitch** | `oauth_token_env`, `channels`, `nick` ("openfang") |
| **Mastodon** | `instance_url`, `access_token_env` |
| **Bluesky** | `identifier`, `app_password_env`, `service_url` ("https://bsky.social") |
| **Webhook** | `secret_env`, `listen_port` (8460), `callback_url` |
| + 25 autres | LINE, Mattermost, DingTalk, etc. |

### Hermes Agent -- 14 plateformes

> **Doc** : [hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs/) section messaging gateway

Telegram, Discord, Slack, WhatsApp, Signal, SMS (Twilio), Email, Home Assistant, Mattermost, Matrix, DingTalk, Feishu/Lark, WeCom, Open WebUI, Webhooks.

| Avantage | OpenFang | Hermes |
|---|---|---|
| Nombre de canaux | **40** | 14 |
| Overrides par canal | Modèle, prompt, rate limit, policy | Basique |
| Home Assistant | Non | **Oui** |
| SMS (Twilio) | Non | **Oui** |
| Teams | **Oui** | Non |
| Bluesky/Mastodon/Twitch | **Oui** | Non |

---

## 10. Web search et outils intégrés

### OpenFang

> **Doc config** : [openfang.sh/docs/configuration](https://www.openfang.sh/docs/configuration) sections `[web]`, `[web.brave]`, `[web.tavily]`, `[web.perplexity]`, `[web.fetch]`

```toml
[web]
search_provider = "auto"    # auto | brave | tavily | perplexity | duckduckgo
cache_ttl_minutes = 15

[web.brave]
api_key_env = "BRAVE_API_KEY"
max_results = 5
country = "FR"
search_lang = "fr"
freshness = "pw"            # pd (jour) | pw (semaine) | pm (mois)

[web.tavily]
api_key_env = "TAVILY_API_KEY"
search_depth = "advanced"   # basic | advanced
include_answer = true       # Résumé AI inclus

[web.perplexity]
api_key_env = "PERPLEXITY_API_KEY"
model = "sonar"

[web.fetch]
max_chars = 50000
max_response_bytes = 10485760   # 10MB
timeout_secs = 30
readability = true              # HTML -> Markdown extraction
```

4 backends de recherche avec cache, localisation FR, et extraction readability.

### Hermes Agent

> **Doc tools** : [hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs/) section tools

Firecrawl, Tavily, Exa, backends parallèles. Browser automation avec session recording. Image analysis, TTS (Edge/ElevenLabs/OpenAI).

---

## 11. MCP (Model Context Protocol)

### OpenFang

> **Doc config** : [openfang.sh/docs/configuration](https://www.openfang.sh/docs/configuration) section `[[mcp_servers]]`

```toml
[[mcp_servers]]
name = "postgres"
timeout_secs = 30
env = ["DATABASE_URL"]

[mcp_servers.transport]
type = "stdio"
command = "npx"
args = ["-y", "@modelcontextprotocol/server-postgres"]
```

- Client MCP : stdio + SSE transports
- Serveur MCP : OpenFang s'expose comme serveur MCP
- Env passthrough configurable (seules les vars listées sont transmises)
- Timeout par serveur

### Hermes Agent

> **Doc** : [hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs/) section MCP

- Client MCP : stdio + HTTP
- Serveur MCP : `hermes mcp serve` expose 10 tools (conversations, messages, events)
- Tool filtering (whitelist/blacklist)
- Sampling support (serveurs MCP peuvent demander de l'inférence LLM)

---

## 12. A2A (Agent-to-Agent Protocol)

### OpenFang

> **Doc config** : [openfang.sh/docs/configuration](https://www.openfang.sh/docs/configuration) section `[a2a]`

```toml
[a2a]
enabled = true
listen_path = "/a2a"

[[a2a.external_agents]]
name = "research-agent"
url = "https://research.example.com/.well-known/agent.json"
```

Implémentation du [Google A2A protocol](https://github.com/google/A2A) -- découverte d'agents externes via `.well-known/agent.json`.

### Hermes Agent

- `delegate_task` pour spawner des sous-agents isolés
- Pas de standard A2A
- Multi-agent orchestration demandée mais pas implémentée ([Issue #344](https://github.com/NousResearch/hermes-agent/issues/344))

---

## 13. Sécurité

> **OpenFang** : [openfang.sh/docs/security](https://www.openfang.sh/docs/security) (présumé) | **Analyse indépendante** : [OpenFang vs OpenClaw Security](https://promptinjection.github.io/2026/03/02/openfang-vs-openclaw-security-comparison.html)
> **Hermes** : [hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs/) section security

| Couche | OpenFang | Hermes Agent |
|---|---|---|
| Sandbox exécution | WASM dual-metered | Docker (--cap-drop ALL) |
| RBAC | 4 rôles (owner/admin/user/viewer) | Allowlists basiques |
| Signing | Ed25519 manifest signing | - |
| Audit trail | Merkle chain | - |
| Taint tracking | Oui | - |
| SSRF protection | Oui | Oui (always-on, fail-closed) |
| Prompt injection scan | Oui | Oui (context file scanning) |
| Secret zeroization | Oui | - |
| Rate limiting | GCRA + per-user per-channel | - |
| Path traversal | Oui | - |
| PII redaction | - | Oui (gateway mode) |
| MCP credential filter | - | Oui |
| Dangerous cmd approval | - | Manual/Smart/Off, 60s timeout |
| **Total couches** | **16** | **5** |

**Bug critique OpenFang** : [Issue #919](https://github.com/RightNow-AI/openfang/issues/919) -- `rm` bypass l'allowlist même quand `exec_policy.mode = "allowlist"` ne l'inclut pas. Faille sécurité ouverte.

**Comparaison indépendante** : un [blog sécurité](https://promptinjection.github.io/2026/03/02/openfang-vs-openclaw-security-comparison.html) a testé 7 vecteurs d'attaque -- OpenFang gagne sur les 7 catégories vs OpenClaw. Mais le bug #919 montre que les couches ont des failles en pratique.

---

## 14. Analyse critique -- Ce qui manque

### OpenFang -- Risques à accepter

> Issues enterprise : [#322](https://github.com/RightNow-AI/openfang/issues/322) | Dashboard sans auth : [#912](https://github.com/RightNow-AI/openfang/issues/912)

| Point | Évaluation | Mitigation |
|---|---|---|
| **SQLite uniquement** | Pas de PostgreSQL natif (confirmé dans [config](https://www.openfang.sh/docs/configuration) : seul `sqlite_path` existe) | Notre Go backend gère Postgres, OpenFang = runtime éphémère |
| **Pas de multi-tenant natif** | Pas d'isolation tenant dans le binaire | 1 instance par client + RBAC interne + Go gateway |
| **1 canal par type par instance** | `[channels.whatsapp]` = table unique, pas array | 1 instance par client résout le problème |
| **Pas d'OIDC/SAML** | Pas d'auth enterprise | Notre Go backend gère Azure AD, OpenFang derrière |
| **Pre-1.0** | Breaking changes garantis | Pin sur un commit, tester avant upgrade |
| **Projet solo** | Bus factor de 1 (199/253 commits par jaberjaber23) | Code Apache 2.0, on peut fork |
| **Go WASM non testé** | Listé mais [aucun exemple Go](https://github.com/RightNow-AI/openfang/blob/main/docs/skill-development.md) | Python/Rust d'abord, Go WASM en R&D |
| **Bug sécurité** | [#919](https://github.com/RightNow-AI/openfang/issues/919) : `rm` bypass allowlist | Surveiller le fix, ne pas compter sur l'allowlist seul |
| **Dashboard sans auth** | [#912](https://github.com/RightNow-AI/openfang/issues/912) | Ne pas exposer, accès via Go gateway uniquement |

### Hermes Agent -- Limitations structurelles

> Review critique : [DEV.to](https://dev.to/george_larson_3cc4a57b08b/hermes-agent-honest-review-1557) | Issues : [#344](https://github.com/NousResearch/hermes-agent/issues/344), [#850](https://github.com/NousResearch/hermes-agent/issues/850)

| Point | Évaluation |
|---|---|
| **Single-user fondamentalement** | Pas conçu pour du multi-client |
| **Pas de REST API** | Intégration Go impossible sans bridge MCP |
| **Mémoire minuscule** | 800 tokens MEMORY + 500 tokens USER |
| **1 066 issues ouvertes** | Scope trop ambitieux, triage insuffisant |
| **"Self-improving" survendu** | Prompt template CRUD ([source](https://dev.to/george_larson_3cc4a57b08b/hermes-agent-honest-review-1557)) |
| **Pas de clustering** | 1 process = 1 machine |
| **Pas de RBAC** | Allowlists seulement |
| **Pas de full Docker** | Process principal sur l'hôte ([Issue #850](https://github.com/NousResearch/hermes-agent/issues/850)) |

---

## 15. Bugs et problèmes documentés

### OpenFang (issues GitHub)

| Issue | Gravité | Description | Status |
|---|---|---|---|
| [#919](https://github.com/RightNow-AI/openfang/issues/919) | **CRITIQUE** | `rm` bypass l'allowlist | Ouvert |
| [#916](https://github.com/RightNow-AI/openfang/issues/916) | Haute | Shell metacharacters bloqués trop agressivement | Ouvert |
| [#69](https://github.com/RightNow-AI/openfang/issues/69) | Haute | Agent loop brûlant $6/h en crédits API | **Corrigé** |
| [#904](https://github.com/RightNow-AI/openfang/issues/904) | Moyenne | Shutdown superviseur après ~30min d'inactivité | Ouvert |
| [#926](https://github.com/RightNow-AI/openfang/issues/926) | Moyenne | Erreurs de compilation (structs non-exhaustives) | Ouvert |
| [#913](https://github.com/RightNow-AI/openfang/issues/913) | Moyenne | Approval Telegram "inutilisable" | Ouvert |
| [#912](https://github.com/RightNow-AI/openfang/issues/912) | Moyenne | Dashboard web sans authentification | Ouvert |
| [#905](https://github.com/RightNow-AI/openfang/issues/905), [#911](https://github.com/RightNow-AI/openfang/issues/911) | Basse | Config API ne supporte pas les domaines | Ouvert |
| [#903](https://github.com/RightNow-AI/openfang/issues/903) | Basse | Panic rustls sur WebSocket Mattermost | Ouvert |

### Hermes Agent

| Problème | Source |
|---|---|
| Pas de multi-agent orchestration | [Issue #344](https://github.com/NousResearch/hermes-agent/issues/344) |
| Pas de déploiement full Docker | [Issue #850](https://github.com/NousResearch/hermes-agent/issues/850) |
| Demande d'adopter les "Hands" d'OpenFang | [Issue #492](https://github.com/NousResearch/hermes-agent/issues/492) |
| Skills = "structured prompt injection with CRUD" | [Review DEV.to](https://dev.to/george_larson_3cc4a57b08b/hermes-agent-honest-review-1557) |
| Hermes-4-405B "feels like Llama" | [Review DEV.to](https://dev.to/george_larson_3cc4a57b08b/hermes-agent-honest-review-1557) |
| Mixture of Agents coûte 5 appels frontier/query | [Review](https://medium.com/@Daniel.O.Ayo/claude-vs-hermes-vs-openclaw-which-ai-agent-is-actually-worth-paying-for-in-2026-81ad77de8225) |

---

## 16. Communauté et traction

| Métrique | OpenFang | Hermes Agent |
|---|---|---|
| GitHub Stars | ~15 955 ([repo](https://github.com/RightNow-AI/openfang)) | ~19 055 ([repo](https://github.com/NousResearch/hermes-agent)) |
| Forks | ~1 981 | ~2 307 |
| Contributeurs actifs | ~10 (1 dominant) | Plus large (NousResearch team) |
| HackerNews | [2 points](https://news.ycombinator.com/item?id=47171341) | [1 point](https://news.ycombinator.com/item?id=47234855) |
| Reddit | Rien trouvé | Rien trouvé |
| Product Hunt | [Listé](https://www.producthunt.com/products/openfang), réception mitigée | - |
| Reviews indépendantes | Peu (SEO) : [Medium](https://medium.com/ai-for-life/openfang-the-first-serious-agent-operating-system-and-why-it-matters-f361a7d9ba2b), [SitePoint](https://www.sitepoint.com/openfang-rust-agent-os-performance-benchmarks/) | 1 review honnête : [DEV.to](https://dev.to/george_larson_3cc4a57b08b/hermes-agent-honest-review-1557) |
| Comparaisons | [Slashdot](https://slashdot.org/software/comparison/Hermes-Agent-vs-OpenFang/), [Medium](https://medium.com/@Daniel.O.Ayo/claude-vs-hermes-vs-openclaw-which-ai-agent-is-actually-worth-paying-for-in-2026-81ad77de8225) | Idem |
| Déploiements prod | **Aucun documenté** | **Aucun documenté** |
| Release velocity | 7 releases / 5 semaines | 6 releases / 5 semaines |

---

## 17. Compatibilité avec notre stack -- Verdict

### Stack DoveAIA
- **Backend** : Go
- **Hébergement** : Azure Container Apps (principal), VMs Azure, Hetzner
- **Base de données** : PostgreSQL (côté Go)
- **Besoin** : Agents autonomes pour clients, potentiellement en SaaS

### OpenFang sur notre stack -- RECOMMANDÉ

> **API** : [api-reference.md](https://github.com/RightNow-AI/openfang/blob/main/docs/api-reference.md) | **Config** : [openfang.sh/docs/configuration](https://www.openfang.sh/docs/configuration)

| Aspect | Verdict |
|---|---|
| **Azure Container Apps** | Binaire unique ~32MB, ~40MB RAM idle -- **très économique** |
| **Go intégration** | **70+ REST endpoints** appelables depuis Go avec un simple HTTP client |
| **Multi-tenant** | 1 instance par client + RBAC 4 rôles + Go gateway pour routing |
| **Scaling horizontal** | OFP cluster multi-noeuds (Azure + Hetzner), Go gère le LB/failover |
| **Skills extensibles** | Python (simple), WASM Rust (perf), Go WASM (à tester en R&D) |
| **Canaux** | 40 adapters avec overrides modèle/prompt/rate-limit par canal |
| **Coût par client** | ~40-60MB RAM par instance |

### Hermes Agent sur notre stack -- NON RECOMMANDÉ comme runtime principal

> **Doc** : [hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs/)

| Aspect | Verdict |
|---|---|
| **Azure Container Apps** | Python ~180MB+, pas de full Docker ([Issue #850](https://github.com/NousResearch/hermes-agent/issues/850)) |
| **Go intégration** | **Aucune API REST** -- MCP server mode comme bridge possible mais lourd |
| **Multi-tenant** | 1 instance = 1 user, profils séparés mais pas de RBAC |
| **Scaling** | Pas de clustering, process unique |
| **Coût par client** | ~180-256MB RAM par instance |

---

## 18. Pattern de déploiement : 1 instance OpenFang par client

### Pourquoi 1 instance par client

La config OpenFang utilise des tables TOML simples (`[channels.whatsapp]`) et non des arrays. **1 seul bot/numéro par canal par instance.** Si chaque client a son propre WhatsApp/Telegram/Slack, il faut une instance dédiée.

| Raison | Détail |
|---|---|
| **Isolation données** | Chaque client a son SQLite, sa mémoire, ses sessions -- zéro risque de fuite |
| **Canaux dédiés** | Chaque client a ses propres bots (WhatsApp, Telegram, etc.) |
| **RBAC indépendant** | Le client est owner, ses users sont admin/user/viewer |
| **Config LLM séparée** | Client A utilise Claude, Client B utilise GPT-4, Client C utilise Groq |
| **Skills personnalisées** | Chaque client a ses Hands/skills métier spécifiques |
| **Facturation simple** | Usage trackable par instance via [API usage endpoints](https://github.com/RightNow-AI/openfang/blob/main/docs/api-reference.md) |
| **Blast radius** | Si l'instance Client-A plante, Client-B n'est pas impacté |

### Exception : modèle B2C avec bot partagé

Si tu proposes un bot unique DoveAIA (ex: "@DoveAIA_bot" sur Telegram) où plusieurs users interagissent, tu peux utiliser UNE instance avec RBAC + `allowed_users`. Mais c'est du B2C, pas du B2B.

### Coûts estimés

| Hébergement | RAM | Clients idle | Clients actifs | Coût/mois |
|---|---|---|---|---|
| **Hetzner CX22** | 4GB | ~80 | ~30-40 | 4.35€ |
| **Hetzner CX32** | 8GB | ~160 | ~60-80 | 7.49€ |
| **Azure B2s** | 4GB | ~80 | ~30-40 | ~30€ |
| **Azure Container Apps** (consumption) | À la demande | Illimité (scale-to-zero) | Pay-per-use | ~0.50-2€/client/mois |

### Architecture cible

```
┌──────────────────────────────────────────────────────────────────┐
│                      Go API Gateway                               │
│                (Azure Container Apps)                              │
│                                                                   │
│  ┌──────────┐  ┌───────────────┐  ┌───────────────────────────┐  │
│  │ Auth     │  │ Tenant        │  │ Billing / Metering        │  │
│  │ Azure AD │  │ Registry      │  │ (GET /api/usage/summary   │  │
│  │ OIDC     │  │ (PostgreSQL   │  │  par instance OpenFang)   │  │
│  │          │  │  + pgvector)  │  │                           │  │
│  └──────────┘  └───────────────┘  └───────────────────────────┘  │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │ Instance Manager                                           │   │
│  │ - Crée/détruit instances OpenFang par client               │   │
│  │ - Reverse proxy webhooks (port routing)                    │   │
│  │ - Health checks + restart                                  │   │
│  │ - Génère config.toml par client                           │   │
│  └──────┬──────────────┬──────────────┬──────────────────────┘   │
└─────────┼──────────────┼──────────────┼──────────────────────────┘
          │ REST         │ REST         │ REST
          ▼              ▼              ▼
┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│ OpenFang       │ │ OpenFang       │ │ OpenFang       │
│ Client-A       │ │ Client-B       │ │ Client-C       │
│                │ │                │ │                │
│ config.toml:   │ │ config.toml:   │ │ config.toml:   │
│  mode: stable  │ │  mode: stable  │ │  mode: stable  │
│  model: claude │ │  model: gpt-4  │ │  model: groq   │
│                │ │                │ │                │
│ [[users]]      │ │ [[users]]      │ │ [[users]]      │
│  Alice (owner) │ │  Carol (owner) │ │  Eve (owner)   │
│  Bob (user)    │ │  Dave (admin)  │ │  Frank (viewer)│
│                │ │                │ │                │
│ [channels]     │ │ [channels]     │ │ [channels]     │
│  WhatsApp      │ │  Slack         │ │  Telegram      │
│  +33 6xx       │ │  workspace-B   │ │  @bot-C        │
│  Telegram      │ │  Email         │ │  Discord       │
│  @bot-A        │ │  carol@b.com   │ │  guild-C       │
│                │ │                │ │                │
│ port: 50051    │ │ port: 50052    │ │ port: 50053    │
│ webhook: 8443  │ │ webhook: 8444  │ │ webhook: 8445  │
│ ~40MB RAM      │ │ ~40MB RAM      │ │ ~40MB RAM      │
│ SQLite local   │ │ SQLite local   │ │ SQLite local   │
└────────────────┘ └────────────────┘ └────────────────┘
         ▲                ▲                ▲
         └────── OFP P2P cluster ─────────┘
              (shared_secret commun)
```

### Flux de données

1. **Client envoie un message** (WhatsApp/Telegram/Slack) -> webhook -> Go reverse proxy -> bonne instance OpenFang
2. **OpenFang traite** via agent + LLM + tools + skills
3. **OpenFang répond** directement sur le canal
4. **Go backend poll** chaque instance via REST API (`GET /api/usage/summary`, `GET /api/sessions`) pour billing et analytics
5. **Go backend stocke** dans PostgreSQL : historique agrégé, métriques, facturation
6. **Go backend gère** : auth enterprise (Azure AD), création/destruction d'instances, failover

---

## 19. Stratégie de déploiement

| Phase | Action | Timeline |
|---|---|---|
| **Phase 1 -- POC** | 1 instance OpenFang, 2-3 clients pilotes, Go gateway minimal (reverse proxy + tenant registry) | Maintenant |
| **Phase 2 -- MVP** | Instance manager automatisé, config.toml templating, OFP cluster Azure+Hetzner | Après validation POC |
| **Phase 3 -- Scale** | Skills custom (Python d'abord, Go WASM en R&D), Hands personnalisés par métier client | Q3 2026 |
| **Phase 4 -- Prod** | Attendre OpenFang v1.0 (annoncé mi-2026), évaluer stabilité, contribuer upstream si nécessaire | Mi-2026+ |

---

## 20. Alternatives à garder en radar

Si OpenFang ne tient pas ses promesses (projet solo, pre-1.0, breaking changes) :

| Framework | Langage | Pourquoi en backup |
|---|---|---|
| **Google ADK-Go** | Go natif | Meilleur fit Go, mais pas d'agent runtime aussi complet |
| **LangGraph** | Python | Le plus battle-tested en prod (Uber, LinkedIn, Klarna) |
| **CrewAI** | Python | 12M+ agents/jour, prototypage rapide |
| **Custom Go agent** | Go | Contrôle total, s'inspirer des Hands d'OpenFang |

---

## 21. Plateforme DoveAIA -- Architecture type "MyClaw" sur OpenFang

> **Modèle de référence** : [myclaw.ai](https://myclaw.ai) -- plateforme managed hosting pour OpenClaw (instance isolée par client, SaaS subscription, zero-setup)

### Analyse de MyClaw.ai

MyClaw est un service SaaS qui vend des instances OpenClaw managées :
- **1 container isolé par client** -- données privées, pas de partage
- **Pricing** : Lite $19/mois (2 vCPU, 4GB, 40GB SSD), Pro $39/mois (4 vCPU, 8GB, 80GB), Max $79/mois (8 vCPU, 16GB, 160GB)
- **Zero setup** : provisioning en 30 secondes, auto-updates, daily backups
- **Dashboard web** : chat, tasks, memory, settings
- **Pas affilié à OpenClaw** -- service indépendant utilisant l'open-source

### DoveAIA peut faire la même chose avec OpenFang, en mieux

**Nos avantages sur MyClaw :**

| Aspect | MyClaw (OpenClaw) | DoveAIA (OpenFang) |
|---|---|---|
| **Runtime** | Python, ~180MB+ RAM | Rust, ~40MB RAM -- **4x moins cher en infra** |
| **Sécurité** | 3 couches basiques | 16 couches (WASM sandbox, Merkle audit, etc.) |
| **Canaux** | ~14 plateformes | **40 adapters** avec overrides par canal |
| **Clustering** | Non | OFP P2P -- scale-out cross datacenter |
| **RBAC** | Basique | 4 rôles + channel bindings |
| **Performance** | ~6s cold start, ~180MB idle | **~180ms cold start, ~40MB idle** |
| **API** | Limitée | **70+ REST endpoints** exploitables pour dashboard custom |
| **Skills WASM** | Non | Oui -- sandboxed, sécurisé |
| **Marché** | Anglophone, centré US | **Francophone + Europe**, Azure EU compliance |

### Architecture plateforme DoveAIA (v2 -- avec Chatwoot, RAG Engine, Qwen3)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         doveaia.com / app.doveaia.com                        │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │                      Frontend (Angular)                                  │ │
│  │                                                                         │ │
│  │  ┌──────────┐ ┌──────────────┐ ┌──────────┐ ┌──────────┐ ┌─────────┐  │ │
│  │  │ Landing  │ │ Dashboard    │ │ Base de  │ │ Settings │ │ Billing │  │ │
│  │  │ page     │ │ - Chat IA   │ │ connaiss.│ │ - Agents │ │ Stripe  │  │ │
│  │  │ Pricing  │ │ - Inbox CW  │ │ - Docs   │ │ - Canaux │ │ Usage   │  │ │
│  │  │ Signup   │ │ - Tasks     │ │ - Sites  │ │ - Skills │ │ Invoices│  │ │
│  │  │          │ │ - CSAT/SLA  │ │ - Emails │ │ - Users  │ │         │  │ │
│  │  │          │ │ - Reports   │ │ - Stats  │ │ - LLM    │ │         │  │ │
│  │  └──────────┘ └──────────────┘ └──────────┘ └──────────┘ └─────────┘  │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
│                              │ API calls                                     │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │                       Go API Backend (Azure Container Apps)              │ │
│  │                                                                         │ │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌────────────────────────┐  │ │
│  │  │ Auth Service     │  │ Instance Manager│  │ Chatwoot Orchestrator  │  │ │
│  │  │ - Azure AD B2C   │  │ - Provision OF  │  │ - Platform API         │  │ │
│  │  │ - JWT tokens     │  │ - Config.toml   │  │ - Account par client   │  │ │
│  │  │ - OAuth2 signup  │  │ - Health check  │  │ - AgentBot par inbox   │  │ │
│  │  │ - Password reset │  │ - Auto-restart  │  │ - Webhook router       │  │ │
│  │  └─────────────────┘  │ - Backup SQLite  │  │ - bot_handoff! handler │  │ │
│  │                        │ - Scale par plan │  └────────────────────────┘  │ │
│  │  ┌─────────────────┐  └─────────────────┘                              │ │
│  │  │ Billing Service  │  ┌─────────────────┐  ┌────────────────────────┐  │ │
│  │  │ - Stripe subs    │  │ Proxy Service   │  │ RAG Engine             │  │ │
│  │  │ - Plan tiers     │  │ - Reverse proxy │  │ - Web crawler (colly)  │  │ │
│  │  │ - Usage metering │  │ - Webhook route │  │ - Document ingester    │  │ │
│  │  │ - LLM cost       │  │ - WebSocket     │  │ - Email indexer (IMAP/ │  │ │
│  │  │   passthrough    │  │ - Rate limiting │  │   OAuth2 Gmail/M365)   │  │ │
│  │  └─────────────────┘  │ - TLS           │  │ - Content Pipeline     │  │ │
│  │                        └─────────────────┘  │   (chunk→embed→index)  │  │ │
│  │                                              └────────────────────────┘  │ │
│  │  ┌──────────────────────────────────────────────────────────────────┐   │ │
│  │  │ Data Layer                                                       │   │ │
│  │  │                                                                  │   │ │
│  │  │  PostgreSQL + pgvector           Redis          Azure Blob       │   │ │
│  │  │  ├─ tenants, users, subs        ├─ Cache       ├─ Documents     │   │ │
│  │  │  ├─ usage_snapshots             ├─ Sessions    ├─ Web crawls    │   │ │
│  │  │  ├─ rag_metadata, chunks        ├─ Queues CW   ├─ Backups OF   │   │ │
│  │  │  ├─ email_connections, filters  └─ Pub/Sub     └─ Attachments   │   │ │
│  │  │  ├─ vector embeddings (pgvector)                                │   │ │
│  │  │  └─ channel_configs, backups                                    │   │ │
│  │  └──────────────────────────────────────────────────────────────────┘   │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
│       │              │              │              │              │          │
│       ▼              ▼              ▼              ▼              ▼          │
│  ┌─────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │
│  │Chatwoot │  │OpenFang  │  │OpenFang  │  │OpenFang  │  │Qwen3 Embed   │  │
│  │(partagé)│  │Client-A  │  │Client-B  │  │Client-C  │  │Service       │  │
│  │         │  │(Starter) │  │(Pro)     │  │(Business)│  │              │  │
│  │ Rails + │  │ 1vCPU    │  │ 2vCPU    │  │ 4vCPU    │  │ vLLM/Ollama  │  │
│  │ Sidekiq │  │ 512MB    │  │ 1GB      │  │ 2GB      │  │ VL-Embed-2B  │  │
│  │ Vue.js  │  │ SQLite   │  │ SQLite   │  │ SQLite   │  │ VL-Reranker  │  │
│  │         │  │          │  │          │  │          │  │ qwen3-embed  │  │
│  │ Multi-  │  │ Channels:│  │ Channels:│  │ Channels:│  │              │  │
│  │ tenant  │  │ WhatsApp │  │ Slack    │  │ Teams    │  │ GPU: A10     │  │
│  │ accounts│  │ Telegram │  │ Email    │  │ WhatsApp │  │ (24GB VRAM)  │  │
│  │         │  │          │  │ Discord  │  │ Telegram │  │              │  │
│  │←AgentBot│  │          │  │          │  │          │  │ REST API     │  │
│  │ webhook→│──│──────────│──│──────────│──│──────────│  │ /embed       │  │
│  │         │  │          │  │          │  │          │  │ /rerank      │  │
│  └─────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────────┘  │
│       ↕              ▲              ▲              ▲                        │
│   Inbox UI           └──────── OFP P2P cluster ──┘                        │
│   CSAT/SLA                                                                 │
│   Reports                                                                  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### APIs OpenFang utilisées par le Go backend

> **Référence complète** : [api-reference.md](https://github.com/RightNow-AI/openfang/blob/main/docs/api-reference.md)

| Endpoint OpenFang | Utilisation Go backend | Fréquence |
|---|---|---|
| `GET /api/health` | Health check instance | Toutes les 30s |
| `GET /api/status` | Status détaillé (agents, mémoire) | Dashboard client |
| `GET /api/usage/summary` | Métriques usage (tokens, coût) | Polling billing (5min) |
| `GET /api/usage/by-model` | Coût par modèle LLM | Analytics client |
| `GET /api/agents` | Liste des agents du client | Dashboard |
| `POST /api/agents` | Créer un agent (onboarding client) | Provisioning |
| `POST /api/agents/{id}/message` | Envoyer un message (chat dashboard) | Temps réel |
| `GET /api/agents/{id}/ws` | WebSocket chat temps réel | Dashboard chat |
| `POST /api/agents/{id}/message/stream` | SSE streaming (réponse progressive) | Dashboard chat |
| `GET /api/sessions` | Historique conversations | Dashboard |
| `POST /api/sessions/{id}/compact` | Compacter une session | Maintenance |
| `GET /api/skills` | Skills installées | Settings client |
| `POST /api/skills/install` | Installer une skill | Settings client |
| `GET /api/models` | Modèles disponibles | Settings client |
| `PUT /api/providers/{name}` | Configurer clé API LLM | Onboarding |
| `POST /api/providers/{name}/test` | Tester connexion LLM | Onboarding |
| `GET /api/audit/recent` | Logs d'audit récents | Sécurité/compliance |
| `POST /api/system/shutdown` | Arrêter instance (cancel sub) | Billing |
| `GET /api/channels` | Canaux configurés | Settings |
| `GET /api/cron/jobs` | Tâches planifiées | Dashboard |

### Provisioning d'une instance client (flux Go -- v2 avec Chatwoot + RAG)

```
 1. Client souscrit (Stripe webhook -> Go backend)
    │
 2. Go backend crée le tenant en PostgreSQL
    │
 3. Go backend provisionne Chatwoot :
    │   POST /platform/api/v1/accounts  → créer account Chatwoot
    │   POST /api/v1/accounts/{id}/inboxes  → créer inbox (canal principal)
    │   POST /platform/api/v1/agent_bots  → créer AgentBot avec outgoing_url
    │   → Assigner AgentBot à l'inbox
    │   → Créer agents humains du client dans Chatwoot
    │
 4. Go backend génère config.toml OpenFang :
    │   - api_listen = "0.0.0.0:{port_attribué}"
    │   - api_key = "{generated_api_key}"
    │   - mode = "stable"
    │   - [default_model] provider = "anthropic" (ou choix client)
    │   - [[users]] name = "{client_name}", role = "owner"
    │   - [network] shared_secret = "{cluster_secret}"
    │
 5. Go backend lance le container OpenFang :
    │   docker run -d \
    │     --name openfang-{tenant_id} \
    │     --memory=512m --cpus=1 \
    │     -v /data/{tenant_id}:/root/.openfang \
    │     -p {api_port}:50051 \
    │     -p {webhook_port}:8443 \
    │     -e ANTHROPIC_API_KEY="{vault_ref}" \
    │     openfang:v0.5.7-pinned
    │
 6. Go backend attend health check OK :
    │   GET http://localhost:{api_port}/api/health
    │
 7. Go backend crée l'agent par défaut :
    │   POST http://localhost:{api_port}/api/agents
    │   Body: { "name": "assistant", "system_prompt": "..." }
    │
 8. Go backend configure les canaux (si tokens fournis) :
    │   -> Mise à jour config.toml + restart container
    │
 9. Go RAG Engine initialise l'espace client :
    │   → Créer container Blob Storage : {tenant_id}/documents/
    │   → Créer index search (Azure AI Search ou pgvector schema)
    │   → Enregistrer les metadata dans PostgreSQL
    │
10. Go backend envoie email de bienvenue au client
    │
11. Client accède à app.doveaia.com/dashboard
    │   → Dashboard IA (config agent, chat, tasks)
    │   → Base de connaissances (upload docs, crawler, email)
    │   → Inbox Chatwoot (conversations humaines, CSAT)
```

### Pricing DoveAIA -- Suggestion

> Inspiré de [MyClaw pricing](https://myclaw.ai) mais ajusté pour les coûts OpenFang (4x moins de RAM)

| Plan | Prix/mois | vCPU | RAM allouée | Canaux | Agents | Coût infra réel |
|---|---|---|---|---|---|---|
| **Starter** | 15€ | 1 | 512MB | 2 | 1 | ~1-2€ (Hetzner) |
| **Pro** | 35€ | 2 | 1GB | 5 | 3 | ~2-4€ (Hetzner) |
| **Business** | 75€ | 4 | 2GB | Illimité | 10 | ~4-8€ (Hetzner) |
| **Enterprise** | Sur devis | Dédié | Dédié | Illimité | Illimité | Variable |

**Marge brute estimée** : 80-95% sur Hetzner, 60-80% sur Azure. OpenFang à ~40MB idle permet des marges excellentes.

**Modèle LLM** : deux options :
1. **BYOK (Bring Your Own Key)** -- le client fournit sa clé Anthropic/OpenAI, on ne facture que l'infra
2. **Inclus** -- on mark-up les tokens LLM (ex: +30%) via notre propre clé API avec le [cost tracking OpenFang](https://github.com/RightNow-AI/openfang/blob/main/docs/api-reference.md) (`GET /api/usage/by-model`)

### RBAC par plan

> Config : [openfang.sh/docs/configuration](https://www.openfang.sh/docs/configuration) section `[[users]]`

| Plan | Users max | Rôles disponibles |
|---|---|---|
| **Starter** | 1 (owner) | owner |
| **Pro** | 5 | owner, admin, user |
| **Business** | 20 | owner, admin, user, viewer |
| **Enterprise** | Illimité | Tous + custom via Go backend |

### Backups et disaster recovery

```
Cron Go backend (quotidien) :
  1. Pour chaque tenant actif :
     - Copier /data/{tenant_id}/data/openfang.db
     - Compresser (gzip)
     - Upload Azure Blob Storage (container: backups/{tenant_id}/{date}.db.gz)
     - Retention: 30 jours (Starter), 90 jours (Pro), 1 an (Business)
  2. Cleanup vieux backups

Restore :
  1. Go backend stop le container OpenFang du client
  2. Télécharge le backup depuis Blob Storage
  3. Remplace openfang.db
  4. Restart container
  5. Vérifie health check
```

### Ce qui reste à construire (notre valeur ajoutée sur OpenFang)

| Composant | Technologie | Effort estimé |
|---|---|---|
| **Landing page + pricing** | Angular | S |
| **Auth (signup/login)** | Azure AD B2C + Go | M |
| **Dashboard client** | Angular (chat, tasks, memory, usage, RAG, inbox) | L |
| **Go API backend** | Go + PostgreSQL | L |
| **Instance Manager** | Go + Docker API / Azure Container Apps API | M |
| **Billing** | Go + Stripe | M |
| **Chatwoot Orchestrator** | Go + Chatwoot Platform API + AgentBot webhooks | M |
| **RAG Engine** | Go (colly, go-imap, docconv) + Blob Storage | L |
| **Embedding Service** | vLLM + Qwen3-VL-Embedding-2B (GPU A10) | M |
| **Content Pipeline** | Go (chunking, embedding client, indexing) | M |
| **Email Indexer** | Go + go-imap + Google/Microsoft Graph OAuth2 | M |
| **Reverse proxy / webhook routing** | Go (ou Traefik/Caddy) | S |
| **Config.toml templating** | Go text/template | S |
| **Backup service** | Go + Azure Blob Storage | S |
| **Monitoring/alerting** | Prometheus + Grafana (ou Azure Monitor) | M |
| **Skills marketplace (optionnel)** | Angular + Go + FangHub API | L |

S = Small (jours), M = Medium (semaines), L = Large (mois)

---

## 22. Agents autonomes -- Hands, Cron, Triggers, Workflows

> **API cron** : [api-reference.md](https://github.com/RightNow-AI/openfang/blob/main/docs/api-reference.md) sections cron/triggers/workflows | **Config** : [openfang.sh/docs/configuration](https://www.openfang.sh/docs/configuration)

### Cron / Tâches planifiées

OpenFang expose une API complète de scheduling :

| Endpoint | Méthode | Description |
|---|---|---|
| `/api/cron/jobs` | GET | Lister toutes les tâches planifiées |
| `/api/cron/jobs` | POST | Créer une tâche avec expression cron |
| `/api/cron/jobs/{id}` | DELETE | Supprimer une tâche |
| `/api/cron/jobs/{id}/enable` | PUT | Activer/désactiver une tâche |
| `/api/cron/jobs/{id}/status` | GET | Status + historique d'exécution |

**Cas d'usage DoveAIA** : un client peut configurer depuis le dashboard :
- "Tous les lundis à 8h, envoie-moi un résumé de mes emails importants sur Telegram"
- "Toutes les heures, surveille le prix de [produit] et alerte-moi si < 50€"
- "Chaque jour à 18h, génère un rapport de leads qualifiés"

Le Go backend crée ces jobs via `POST /api/cron/jobs` et affiche l'historique via `GET /api/cron/jobs/{id}/status`.

### Triggers (événementiel)

| Endpoint | Méthode | Description |
|---|---|---|
| `/api/triggers` | GET | Lister les triggers (filtre par agent) |
| `/api/triggers` | POST | Créer un trigger (condition -> action) |
| `/api/triggers/{id}` | PUT | Modifier un trigger |
| `/api/triggers/{id}` | DELETE | Supprimer un trigger |

Les triggers permettent l'exécution automatique basée sur des conditions (pas uniquement du temps). Ex: "quand un email arrive de @client.com -> résume et notifie sur Slack".

### Workflows

| Endpoint | Méthode | Description |
|---|---|---|
| `/api/workflows` | GET/POST | Lister/créer des workflows multi-étapes |
| `/api/workflows/{id}/run` | POST | Exécuter un workflow avec paramètres |
| `/api/workflows/{id}/runs` | GET | Historique d'exécution |

Les workflows chaînent plusieurs actions (agent call -> tool -> agent call -> notification).

### Hands autonomes

Les Hands combinent tout : un Hand est un agent + cron + triggers + skills, packagé dans un `HAND.toml`. Chaque Hand :
- Tourne sur un schedule défini (cron)
- Construit un knowledge graph au fil du temps
- Reporte au dashboard

**Hands pertinents pour nos clients :**

| Hand | Client type | Valeur |
|---|---|---|
| **Lead** | Agences, freelances | Génération leads qualifiés automatique |
| **Collector** | Veille concurrentielle | Monitoring OSINT sur les concurrents |
| **Researcher** | Cabinets, consultants | Fact-checking + synthèse de sources |
| **Twitter** | Marketing | Gestion automatisée de compte X |
| **Browser** | E-commerce | Surveillance prix, scraping automatisé |

**Hands custom à créer pour DoveAIA :**

| Hand custom | Description | Priorité |
|---|---|---|
| **Support** | Répond aux tickets clients sur les canaux, escalade si nécessaire | Haute |
| **Reporter** | Génère des rapports périodiques (KPIs, usage, activité) | Haute |
| **Onboarder** | Guide les nouveaux users du client dans les premiers jours | Moyenne |
| **Content** | Crée des drafts de contenu (social, newsletter) sur schedule | Moyenne |

### Quiet Hours (garde-fou autonomie)

> **Config** : [openfang.sh/docs/configuration](https://www.openfang.sh/docs/configuration) -- agent manifest

```toml
quiet_hours = "0 22 * * *"  # Cron expression : agent en pause de 22h à 6h
```

Important pour les clients : les agents ne dérangent pas la nuit. Configurable par agent.

### Intégration dans le dashboard DoveAIA

```
Dashboard Angular
├── Onglet "Automatisations"
│   ├── Tâches planifiées (CRUD via /api/cron/jobs)
│   │   └── UI : cron builder visuel + preview prochaines exécutions
│   ├── Triggers (CRUD via /api/triggers)
│   │   └── UI : "Quand [condition] alors [action]"
│   ├── Workflows (CRUD via /api/workflows)
│   │   └── UI : builder visuel type n8n simplifié
│   └── Historique d'exécution (/api/cron/jobs/{id}/status + /api/workflows/{id}/runs)
│
├── Onglet "Hands"
│   ├── Hands actifs (status, dernière exécution, prochaine)
│   ├── Marketplace : installer depuis FangHub
│   └── Config par Hand (schedule, paramètres, quiet hours)
```

---

## 23. Offre Self-Hosted -- Clients qui gardent leurs données

### Le besoin

Certains clients (banques, santé, défense, administrations, grands comptes RGPD-sensibles) **refuseront que leurs données transitent par notre infra**. Ils veulent :
- Agent IA sur LEUR infrastructure
- Données qui ne quittent JAMAIS leur réseau
- Contrôle total sur les clés LLM
- Audit et compliance interne

### Modèle d'offre

| Offre | Managed (SaaS) | Self-Hosted | Hybrid |
|---|---|---|---|
| **Infra** | DoveAIA (Azure/Hetzner) | Client (on-premise/cloud client) | Mix |
| **Données** | Chez nous (chiffrées, isolées) | Chez le client | Sensibles chez client, reste chez nous |
| **Updates** | Automatiques | Package livré, client applique | Auto pour notre partie, manuel pour la leur |
| **Support** | Inclus dans le plan | Contrat support séparé | Contrat support |
| **Prix** | Subscription mensuelle | Licence + support annuel | Subscription + licence |
| **Cible** | PME, startups, agences | Grands comptes, réglementé | ETI, scale-ups |

### Architecture Self-Hosted

Ce qu'on livre au client :

```
Package DoveAIA Self-Hosted (v2)
├── openfang (binaire Rust, version pinned)
├── doveaia-gateway (binaire Go, notre valeur ajoutée)
│   ├── Dashboard web (Angular, bundled)
│   ├── Instance manager local
│   ├── RAG Engine (crawler, document ingester, email indexer)
│   ├── Content Pipeline (chunking, embedding, indexing)
│   ├── Chatwoot Orchestrator (AgentBot, webhooks)
│   ├── Backup service local
│   ├── Config templating
│   └── Licence manager (vérifie licence DoveAIA)
├── chatwoot/ (Docker images, version pinned)
│   ├── chatwoot-rails
│   └── chatwoot-sidekiq
├── qwen3-embedding/ (optionnel, si GPU disponible)
│   ├── Qwen3-VL-Embedding-2B (modèle, Apache 2.0)
│   ├── Qwen3-VL-Reranker-2B (modèle, Apache 2.0)
│   └── vLLM / Ollama runtime
├── config-templates/
│   ├── config.toml.template
│   └── docker-compose.yml
├── scripts/
│   ├── install.sh
│   ├── upgrade.sh
│   └── backup.sh
└── docs/
    ├── installation-guide.md
    ├── admin-guide.md
    └── gpu-setup.md (pour Qwen3 embeddings)
```

### Déploiement type chez le client

```
Infrastructure client (on-premise ou cloud privé)
┌───────────────────────────────────────────────────────────────┐
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ doveaia-gateway (Go binary)                              │  │
│  │  - Dashboard : https://ai.client.com                     │  │
│  │  - Auth : LDAP/AD du client (OIDC)                       │  │
│  │  - RAG Engine (crawler, docs, email indexer)              │  │
│  │  - Chatwoot Orchestrator (AgentBot webhooks)              │  │
│  │  - PostgreSQL client (metadata, usage, pgvector)          │  │
│  │  - Licence check (call home chiffré)                      │  │
│  └──────┬──────────────┬──────────────┬─────────────────────┘  │
│         │              │              │                         │
│         ▼              ▼              ▼                         │
│  ┌──────────┐   ┌──────────┐   ┌───────────────────────────┐  │
│  │ OpenFang │   │ Chatwoot │   │ Qwen3-VL-Embedding-2B     │  │
│  │ (Rust)   │   │ (Rails)  │   │ (optionnel, si GPU dispo) │  │
│  │          │   │          │   │                             │  │
│  │ SQLite   │   │ Inbox UI │   │ vLLM sur GPU local         │  │
│  │ Channels │   │ Routing  │   │ OU Ollama qwen3-embedding  │  │
│  │ Skills   │   │ CSAT/SLA │   │ (text-only, CPU, 639MB)    │  │
│  │ LLM local│   │ Reports  │   │                             │  │
│  │ (Ollama) │   │ KB/Help  │   │ Fallback : Azure OpenAI    │  │
│  └──────────┘   └──────────┘   │ (si internet autorisé)     │  │
│                                 └───────────────────────────┘  │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Data (100% local)                                        │  │
│  │  PostgreSQL + pgvector │ Redis │ Disque local (docs/crawl)│  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                               │
│  Aucune donnée ne sort du réseau client                       │
└───────────────────────────────────────────────────────────────┘
         │
         │ Seuls flux sortants (optionnels) :
         │  1. Licence heartbeat (chiffré, pas de données)
         │  2. Mises à jour (pull new versions)
         ▼
    licence.doveaia.com
```

### Configuration GPU self-hosted pour embeddings

| Scenario | GPU | Modèle | VRAM | Notes |
|---|---|---|---|---|
| **Pas de GPU** | CPU seul | Qwen3-Embedding-0.6B via Ollama | 0 (639MB RAM) | Text-only, suffisant pour la plupart |
| **GPU budget** | RTX 3060 12GB | Qwen3-VL-Embedding-2B | 3-6 GB | Multimodal (images PDF, tableaux) |
| **GPU pro** | RTX 3090/A10 24GB | VL-Embed-2B + VL-Reranker-2B | 8-12 GB | Retrieve + rerank multimodal |
| **Pas de GPU, internet OK** | -- | Azure OpenAI text-embedding-3-large | -- | API cloud, embedding text-only |
| **Air-gap total** | CPU | Qwen3-Embedding-0.6B (Ollama offline) | 0 | Modèle pré-téléchargé, zéro internet |

### Modèle de licence Self-Hosted

| Plan | Prix/an | Inclus |
|---|---|---|
| **Self-Hosted Starter** | 2 000€ | 1 instance, 5 users, email support |
| **Self-Hosted Pro** | 5 000€ | 5 instances, 20 users, support prioritaire |
| **Self-Hosted Enterprise** | Sur devis | Illimité, SLA, support dédié, onboarding |

**Licence technique** : le binaire `doveaia-gateway` vérifie périodiquement un token de licence. Pas de call home avec des données -- juste un heartbeat chiffré "licence valide oui/non". Si le client est en air-gap total, on fournit une licence offline (fichier signé, validité 1 an).

### Ce qu'on ne livre PAS en self-hosted

- Le code source de `doveaia-gateway` (binaire compilé Go)
- L'accès à notre plateforme SaaS
- Les Hands custom DoveAIA (vendus séparément ou inclus dans Enterprise)
- Le support communautaire (réservé au SaaS)

OpenFang lui-même est open-source (Apache 2.0) -- le client peut l'utiliser seul. Notre valeur ajoutée c'est le gateway, le dashboard, l'instance management, et le support.

---

## 24. Stratégie embeddings -- Azure AI Search + migration pgvector

> **Azure AI Search** : [learn.microsoft.com/azure/search](https://learn.microsoft.com/en-us/azure/search/search-what-is-azure-search) | **pgvector** : [github.com/pgvector/pgvector](https://github.com/pgvector/pgvector)

### Le besoin

Les agents OpenFang doivent accéder aux **documents et sites web des clients** pour répondre avec contexte. Il faut :
1. Ingérer des documents (PDF, Word, Excel, emails)
2. Crawler des sites web
3. Chunker et vectoriser le contenu
4. Permettre la recherche sémantique (RAG)
5. Isoler les données par tenant

### Pourquoi Azure AI Search d'abord (MVP)

| Avantage | Détail |
|---|---|
| **Pipeline intégré** | Chunking + vectorisation automatiques via "AI enrichment" (skillsets) |
| **Indexeurs natifs** | Blob Storage, Cosmos DB, Azure SQL, SharePoint, OneLake -- upload un PDF dans Blob, il est indexé automatiquement |
| **Vectorisation intégrée** | Connexion directe Azure OpenAI pour embeddings (text-embedding-3-large, etc.) sans code |
| **Hybrid search** | Full-text + vector + reranking sémantique en une seule query |
| **Agentic retrieval** (preview) | Knowledge bases multi-sources avec décomposition de requêtes -- parfait pour agents OpenFang |
| **Sécurité enterprise** | Microsoft Entra (Azure AD), Private Link, RBAC document-level |
| **Pas de Go SDK mais REST API** | SDK .NET, Java, JS, Python. **Pas de Go SDK natif** -- mais REST API complète, appelable depuis Go |
| **Zéro infra à gérer** | Service managé, scaling automatique |
| **Multi-tenant natif** | 1 index par tenant OU filtres de sécurité par document |

### Pipeline d'ingestion pour les clients

```
Client upload (dashboard Angular)
  │
  ▼
Go backend reçoit le fichier
  │
  ├─► Stocke dans Azure Blob Storage (container: {tenant_id}/documents/)
  │
  ▼
Azure AI Search Indexer (automatique, pull mode)
  │
  ├─► Détecte le nouveau blob
  ├─► AI Enrichment Skillset :
  │     1. Document cracking (PDF, DOCX, XLSX, PPTX, HTML, TXT)
  │     2. Chunking (text split, configurable overlap)
  │     3. Vectorisation (Azure OpenAI text-embedding-3-large)
  │     4. Entity extraction (optionnel)
  │
  ▼
Azure AI Search Index (tenant_{id}_documents)
  │
  ▼
OpenFang agent query via MCP ou tool custom
  │
  ├─► Skill "search_documents" appelle Azure AI Search REST API
  ├─► Hybrid search (full-text + vector + semantic reranking)
  └─► Résultats injectés dans le contexte de l'agent
```

### Crawler de sites web

Azure AI Search n'a **pas de web crawler natif** pour sites externes. Solution :

```
Go backend
  │
  ├─► Cron : crawl site client (colly/go-rod en Go, ou Firecrawl)
  ├─► HTML -> Markdown (readability extraction)
  ├─► Stocke dans Azure Blob Storage ({tenant_id}/web/{domain}/)
  │
  ▼
Azure AI Search Indexer (auto-indexe les blobs Markdown)
```

Alternative : utiliser le tool `web_fetch` d'OpenFang qui a déjà readability extraction (`[web.fetch]` avec `readability = true`), et pousser les résultats dans Blob Storage.

### Configuration MCP pour connecter OpenFang à Azure AI Search

```toml
[[mcp_servers]]
name = "azure-search"
timeout_secs = 10
env = ["AZURE_SEARCH_ENDPOINT", "AZURE_SEARCH_API_KEY"]

[mcp_servers.transport]
type = "stdio"
command = "node"
args = ["azure-search-mcp-server.js"]
```

Ou via un tool custom Python/WASM qui appelle l'API REST Azure AI Search directement.

### Pricing Azure AI Search

> **Pricing** : [azure.microsoft.com/pricing/details/search](https://azure.microsoft.com/en-us/pricing/details/search/)

| Tier | Prix/mois | Stockage | Partitions | Réplicas | Usage DoveAIA |
|---|---|---|---|---|---|
| **Free** | 0€ | 50MB | 1 | 1 | Dev/test uniquement |
| **Basic** | ~60€ | 2GB | 1 | 3 | POC, 5-10 clients |
| **S1** | ~210€ | 25GB/partition | 12 | 12 | MVP, 10-50 clients |
| **S2** | ~830€ | 100GB/partition | 12 | 12 | Scale, 50-200 clients |

**Coût embeddings** : Azure OpenAI text-embedding-3-large = ~$0.13/1M tokens. Pour un client typique (100 documents, ~500 pages) = ~$0.50 one-shot + ~$0.10/mois pour updates.

### Migration future vers pgvector (Phase 3+)

Azure AI Search est parfait pour aller vite, mais à terme on peut vouloir :
- Réduire les coûts (pgvector sur PostgreSQL existant = gratuit)
- Unifier la stack (tout dans PostgreSQL)
- Self-hosted compatible (pas de dépendance Azure pour les clients on-premise)

**Stratégie de migration progressive :**

```
Phase 1 (MVP)     : Azure AI Search -- aller vite, pipeline intégré
Phase 2 (Scale)   : Azure AI Search + pgvector en parallèle (dual-write)
Phase 3 (Mature)  : pgvector principal, Azure AI Search optionnel (clients enterprise)
```

| Composant | Azure AI Search (Phase 1) | pgvector (Phase 3) |
|---|---|---|
| **Stockage vecteurs** | Index Azure | PostgreSQL + pgvector |
| **Chunking** | AI Enrichment skillset | Go service custom (ou LangChainGo) |
| **Embeddings** | Azure OpenAI intégré | Azure OpenAI / Ollama / local |
| **Full-text search** | Lucene intégré | PostgreSQL tsvector (natif) |
| **Hybrid search** | Natif (vector + BM25 + reranker) | pgvector + tsvector + RRF custom |
| **Indexeurs auto** | Blob, SQL, Cosmos, SharePoint | Go cron custom |
| **Coût** | ~60-210€/mois | 0€ (sur PostgreSQL existant) |
| **Multi-tenant** | Index par tenant ou filtres | Schema par tenant ou row-level security |
| **Self-hosted** | Non (Azure only) | Oui (PostgreSQL partout) |

### Interface d'abstraction Go (pour migration transparente)

```go
// search/search.go -- interface commune
type SearchService interface {
    // Indexation
    IndexDocument(ctx context.Context, tenantID string, doc Document) error
    IndexWebPage(ctx context.Context, tenantID string, url string, content string) error
    DeleteDocument(ctx context.Context, tenantID string, docID string) error

    // Recherche
    Search(ctx context.Context, tenantID string, query string, opts SearchOpts) ([]Result, error)
    VectorSearch(ctx context.Context, tenantID string, embedding []float32, opts SearchOpts) ([]Result, error)
    HybridSearch(ctx context.Context, tenantID string, query string, opts SearchOpts) ([]Result, error)
}

// search/azure.go -- implémentation Azure AI Search (Phase 1)
type AzureSearchService struct { ... }

// search/pgvector.go -- implémentation pgvector (Phase 3)
type PgVectorSearchService struct { ... }
```

Le Go backend utilise l'interface `SearchService`. La migration Azure -> pgvector se fait en changeant l'implémentation, sans toucher au reste du code.

### Ce que pgvector apporte en plus (quand on migrera)

> **pgvector** : [github.com/pgvector/pgvector](https://github.com/pgvector/pgvector)

| Feature PostgreSQL | Valeur pour DoveAIA |
|---|---|
| **pgvector** | Vector similarity search (cosine, L2, inner product) |
| **tsvector/tsquery** | Full-text search natif (multilingue, stemming FR) |
| **Row-Level Security** | Multi-tenant isolation au niveau SQL |
| **JSONB** | Métadonnées flexibles par document |
| **pg_cron** | Scheduling de re-indexation dans la DB |
| **Partitioning** | Tables partitionnées par tenant pour perf |
| **pg_trgm** | Recherche fuzzy / autocomplete |
| **PostGIS** | Recherche géospatiale (si besoin) |
| **Logical replication** | Sync vers replicas read-only pour search |

### Résumé décision embeddings (v2 -- avec Qwen3 + Chatwoot)

```
Phase 1 (MVP) :
  → Azure AI Search (Basic ~60€/mois)
  → Azure OpenAI text-embedding-3-large (text-only)
  → Pipeline : Blob Storage -> Indexer -> AI Enrichment -> Index
  → Chatwoot intégré : agents humains dans l'inbox, AI via AgentBot
  → Aller vite, zéro infra GPU

Phase 2 (Scale) :
  → Ajouter Qwen3-VL-Embedding-2B (vLLM, 1x A10 GPU)
  → Multimodal : PDFs visuels (tableaux, graphiques) searchables
  → pgvector sur PostgreSQL existant (dual-write avec Azure AI Search)
  → Qwen3-Embedding-0.6B via Ollama pour les clients self-hosted (CPU only)
  → RAG Engine complet : web crawler + documents + emails

Phase 3 (Production) :
  → Qwen3-VL-Embedding-2B + Qwen3-VL-Reranker-2B (retrieve→rerank)
  → pgvector principal, Azure AI Search optionnel (enterprise)
  → Self-hosted = tout local (Qwen3 Apache 2.0 + Chatwoot MIT + pgvector)
  → SaaS = choix Azure ou pgvector selon le plan

Interface Go SearchService + Embedder dès le jour 1 pour migration transparente.
Chatwoot SearchService intégré : les agents humains peuvent aussi chercher dans la KB.
```

---

S = Small (jours), M = Medium (semaines), L = Large (mois)

---

## 25. RAG Engine -- Module d'ingestion multi-sources

> Le RAG Engine est un **module Go du backend** qui gère l'ingestion, le chunking, la vectorisation et l'indexation de contenu provenant de multiples sources. Il alimente le `SearchService` (section 24) et rend les données accessibles aux agents OpenFang via hybrid search.

### Sources d'ingestion supportées

| Source | Mécanisme | Détails |
|---|---|---|
| **URL (site complet)** | Web crawler récursif | On donne une URL racine → le crawler découvre et indexe toutes les pages du site |
| **PDF / Documents** | Upload via dashboard Angular | PDF, DOCX, XLSX, PPTX, TXT, CSV, HTML — document cracking + chunking |
| **Email (boîte mail)** | Connexion IMAP/OAuth2 | Indexe le contenu des emails + pièces jointes, avec filtres (expéditeur, sujet, date, dossier) |
| **API externe** | Webhook / pull | Notion, Confluence, SharePoint, Google Drive — connecteurs à terme |

### Architecture du RAG Engine

```
┌─────────────────────────────────────────────────────────────┐
│                    RAG ENGINE (Go module)                     │
│                                                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────┐ │
│  │  Web     │  │ Document │  │  Email   │  │  API         │ │
│  │ Crawler  │  │ Ingester │  │ Indexer  │  │ Connectors   │ │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └──────┬───────┘ │
│       │              │              │               │         │
│       ▼              ▼              ▼               ▼         │
│  ┌────────────────────────────────────────────────────────┐  │
│  │              Content Pipeline                          │  │
│  │  1. Extract (texte brut, métadonnées)                  │  │
│  │  2. Clean (HTML→Markdown, dedup, normalisation)        │  │
│  │  3. Chunk (sliding window, overlap configurable)       │  │
│  │  4. Embed (Azure OpenAI / Ollama / local)              │  │
│  │  5. Index (SearchService → Azure AI Search / pgvector) │  │
│  └────────────────────────────────────────────────────────┘  │
│       │                                                       │
│       ▼                                                       │
│  ┌────────────────────────────────────────────────────────┐  │
│  │              Metadata Store (PostgreSQL)                │  │
│  │  • source_type, source_url, tenant_id                  │  │
│  │  • last_crawled, chunk_count, status                   │  │
│  │  • filters (email: sender, subject, folder)            │  │
│  └────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### 25.1 Web Crawler -- Indexation de sites complets

**Principe** : Le client donne une URL racine (ex: `https://example.com`), le crawler découvre récursivement toutes les pages et les indexe.

```go
// rag/crawler.go
type CrawlConfig struct {
    TenantID    string
    RootURL     string
    MaxDepth    int           // profondeur max de crawl (défaut: 5)
    MaxPages    int           // limite de pages (défaut: 500)
    AllowedPath []string      // ex: ["/docs", "/blog"] -- restreindre au sous-site
    ExcludePath []string      // ex: ["/admin", "/login"]
    RespectRobotsTxt bool     // défaut: true
    Schedule    string        // cron expression pour re-crawl (ex: "0 2 * * *")
    UserAgent   string
}

type CrawlJob struct {
    ID        string
    Config    CrawlConfig
    Status    CrawlStatus    // pending, running, completed, failed
    PagesFound    int
    PagesIndexed  int
    StartedAt     time.Time
    CompletedAt   time.Time
    Errors        []CrawlError
}
```

**Librairies Go recommandées** :
- **[colly](https://github.com/gocolly/colly)** — Crawling rapide, respecte robots.txt, callbacks par type de contenu
- **[go-rod](https://github.com/go-rod/rod)** — Pages JS-rendered (SPA Angular/React), headless Chrome
- **[go-readability](https://github.com/go-shiori/go-readability)** — Extraction article/contenu principal (comme Readability.js)

**Flow** :
```
POST /api/v1/rag/crawl
  body: { "url": "https://example.com", "max_depth": 3 }
  │
  ▼
Go CrawlService
  ├─► colly crawl (BFS, respecte robots.txt, rate-limit)
  ├─► Pour chaque page :
  │     1. go-readability → extrait contenu principal
  │     2. HTML → Markdown (nettoie nav, footer, ads)
  │     3. Stocke raw dans Blob Storage ({tenant}/web/{domain}/{path}.md)
  │     4. Content Pipeline → chunk + embed + index
  ├─► Sitemap.xml détecté → ajout URLs au crawl queue
  └─► Stocke métadonnées dans PostgreSQL (pages crawlées, status, dernière MAJ)
```

**API endpoints** :
```
POST   /api/v1/rag/crawl              -- Lancer un crawl
GET    /api/v1/rag/crawl              -- Lister les crawls du tenant
GET    /api/v1/rag/crawl/{id}         -- Status d'un crawl
DELETE /api/v1/rag/crawl/{id}         -- Supprimer un crawl et ses données
PUT    /api/v1/rag/crawl/{id}/refresh -- Re-crawl (mise à jour)
```

### 25.2 Document Ingester -- Upload PDF, DOCX, etc.

**Principe** : Le client upload des fichiers via le dashboard Angular. Le backend les traite et les indexe.

```go
// rag/documents.go
type DocumentUpload struct {
    TenantID    string
    Filename    string
    ContentType string   // application/pdf, application/vnd.openxmlformats-*, text/plain...
    Size        int64
    Tags        []string // tags custom du client
    Source      string   // "upload", "email_attachment", "api"
}

type SupportedFormats = []string{
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",  // .docx
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",        // .xlsx
    "application/vnd.openxmlformats-officedocument.presentationml.presentation", // .pptx
    "text/plain", "text/csv", "text/html", "text/markdown",
    "application/json",
    "message/rfc822",  // .eml
}
```

**Librairies Go** :
- **[unipdf](https://github.com/unidoc/unipdf)** — Extraction texte PDF (licence commerciale) ou **pdfcpu** (open source)
- **[docconv](https://github.com/sajari/docconv)** — Conversion multi-formats (PDF, DOCX, PPTX, HTML → texte)
- Azure **Document Intelligence** (ex Form Recognizer) — API pour OCR + extraction structurée (fallback pour PDFs scannés)

**Flow** :
```
POST /api/v1/rag/documents (multipart/form-data)
  │
  ▼
Go DocumentService
  ├─► Validation (type, taille max 100MB, virus scan optionnel)
  ├─► Stocke fichier original dans Blob Storage ({tenant}/documents/{id}/{filename})
  ├─► Extraction texte :
  │     PDF    → unipdf / Document Intelligence (OCR si scanné)
  │     DOCX   → docconv
  │     XLSX   → cellules → texte tabulaire
  │     HTML   → go-readability
  │     TXT/MD → tel quel
  ├─► Content Pipeline → chunk + embed + index
  └─► Métadonnées PostgreSQL (filename, pages, chunks, status)
```

**API endpoints** :
```
POST   /api/v1/rag/documents              -- Upload (multipart)
GET    /api/v1/rag/documents              -- Lister les documents du tenant
GET    /api/v1/rag/documents/{id}         -- Détail + chunks
DELETE /api/v1/rag/documents/{id}         -- Supprimer document et ses vecteurs
GET    /api/v1/rag/documents/{id}/chunks  -- Voir les chunks générés
POST   /api/v1/rag/documents/{id}/reindex -- Re-chunker/re-vectoriser
```

### 25.3 Email Indexer -- Ingestion boîte mail avec filtres

**Principe** : Le client connecte sa boîte mail (OAuth2 pour Gmail/Outlook, IMAP pour autres). Le système indexe les emails selon des filtres configurables.

```go
// rag/email.go
type EmailConnection struct {
    TenantID     string
    Provider     EmailProvider  // gmail, outlook, imap_custom
    // OAuth2 (Gmail, Outlook)
    AccessToken  string         // chiffré en DB
    RefreshToken string         // chiffré en DB
    // IMAP custom
    IMAPHost     string
    IMAPPort     int
    IMAPUser     string
    IMAPPass     string         // chiffré en DB
    TLS          bool
}

type EmailFilter struct {
    ID          string
    TenantID    string
    ConnectionID string
    // Filtres
    Folders     []string   // ex: ["INBOX", "Support", "Clients"]
    FromFilter  []string   // ex: ["*@client.com", "support@*"]
    ToFilter    []string
    SubjectContains []string  // ex: ["facture", "contrat"]
    DateFrom    *time.Time
    DateTo      *time.Time
    HasAttachment *bool
    ExcludeRead   bool
    // Indexation
    IndexBody       bool   // indexer le corps de l'email (défaut: true)
    IndexAttachments bool   // indexer les PJ via DocumentService (défaut: true)
    Schedule    string     // cron pour sync incrémentale (ex: "*/15 * * * *")
}
```

**Providers supportés** :

| Provider | Auth | Protocole | Notes |
|---|---|---|---|
| **Gmail** | OAuth2 (Google Workspace / personnel) | Gmail API | Scopes: `gmail.readonly`, labels comme filtres |
| **Outlook / M365** | OAuth2 (Microsoft Entra) | Microsoft Graph API | Dossiers, catégories, filtres OData |
| **IMAP custom** | Login/password ou OAuth2 | IMAP4 | Tout serveur compatible (OVH, Infomaniak, self-hosted) |

**Librairies Go** :
- **[go-imap](https://github.com/emersion/go-imap)** — Client IMAP complet
- **Google API Go Client** — `google.golang.org/api/gmail/v1`
- **Microsoft Graph Go SDK** — `github.com/microsoftgraph/msgraph-sdk-go`

**Flow** :
```
POST /api/v1/rag/email/connect
  body: { "provider": "outlook", "oauth_code": "..." }
  │
  ▼
Go EmailService
  ├─► Échange OAuth code → tokens (stockés chiffrés)
  ├─► Client configure filtres via dashboard
  │
POST /api/v1/rag/email/filters
  body: { "folders": ["INBOX"], "from": ["*@client.com"], "schedule": "*/15 * * * *" }
  │
  ▼
Sync incrémentale (cron ou webhook push)
  ├─► Fetch emails selon filtres
  ├─► Pour chaque email :
  │     1. Extraire sujet + corps (HTML→texte)
  │     2. Extraire métadonnées (from, to, date, thread_id)
  │     3. Pièces jointes → DocumentService (PDF, DOCX...)
  │     4. Content Pipeline → chunk + embed + index
  ├─► Tracking : last_sync_uid (IMAP) ou historyId (Gmail) ou deltaLink (Graph)
  └─► Métadonnées PostgreSQL (emails indexés, last_sync, errors)
```

**API endpoints** :
```
POST   /api/v1/rag/email/connect           -- Connecter une boîte mail (OAuth flow)
GET    /api/v1/rag/email/connections        -- Lister les connexions
DELETE /api/v1/rag/email/connections/{id}   -- Déconnecter (supprime tokens + données)
POST   /api/v1/rag/email/filters           -- Créer un filtre d'indexation
GET    /api/v1/rag/email/filters            -- Lister les filtres
PUT    /api/v1/rag/email/filters/{id}      -- Modifier un filtre
DELETE /api/v1/rag/email/filters/{id}      -- Supprimer un filtre
POST   /api/v1/rag/email/sync              -- Forcer une sync maintenant
GET    /api/v1/rag/email/stats             -- Stats (emails indexés, dernière sync, erreurs)
```

### 25.4 Content Pipeline -- Chunking & Embedding unifié

Le pipeline est **commun à toutes les sources**. Chaque source produit du texte brut + métadonnées, le pipeline s'occupe du reste.

```go
// rag/pipeline.go
type ContentPipeline struct {
    Chunker       Chunker
    Embedder      Embedder
    SearchService SearchService  // interface section 24
    MetadataStore MetadataStore  // PostgreSQL
}

type ChunkConfig struct {
    Strategy    string  // "sliding_window", "semantic", "sentence"
    ChunkSize   int     // tokens par chunk (défaut: 512)
    Overlap     int     // tokens de chevauchement (défaut: 50)
    MinChunkSize int    // ignore les chunks trop petits (défaut: 50)
}

type Chunk struct {
    ID          string
    DocumentID  string
    TenantID    string
    Content     string
    Embedding   []float32
    Metadata    ChunkMetadata
    Position    int       // ordre dans le document
}

type ChunkMetadata struct {
    SourceType  string    // "web", "document", "email"
    SourceURL   string    // URL crawlée, ou "upload://filename.pdf", ou "email://msgid"
    Title       string
    Author      string    // from (email), auteur (doc)
    CreatedAt   time.Time
    Tags        []string
    PageNumber  int       // pour PDFs
    ThreadID    string    // pour emails (regroupement conversation)
}
```

**Embeddings providers** :
```go
// rag/embedder.go
type Embedder interface {
    Embed(ctx context.Context, texts []string) ([][]float32, error)
    Dimension() int
}

// Implémentations :
// - AzureOpenAIEmbedder  (text-embedding-3-large, 3072 dims)
// - OllamaEmbedder       (nomic-embed-text, 768 dims) -- self-hosted
// - LocalEmbedder         (ONNX runtime en Go) -- air-gap
```

### 25.5 Dashboard Angular -- Gestion des sources RAG

Le dashboard expose une section **"Base de connaissances"** par client :

```
┌─────────────────────────────────────────────────────────┐
│  Base de connaissances                    [+ Ajouter]   │
│─────────────────────────────────────────────────────────│
│                                                          │
│  📄 Documents (12)        [Upload]                       │
│  ├─ contrat-client-A.pdf      3 240 chunks   ✅ Indexé  │
│  ├─ guide-produit-v3.docx     1 820 chunks   ✅ Indexé  │
│  └─ tarifs-2026.xlsx            45 chunks    ✅ Indexé  │
│                                                          │
│  🌐 Sites web (2)         [+ URL]                        │
│  ├─ example.com              342 pages   ⟳ Crawl 02h   │
│  └─ docs.example.com        127 pages   ✅ Indexé      │
│                                                          │
│  📧 Emails (1 connexion)  [Connecter]                    │
│  ├─ support@example.com (Outlook)                        │
│  │   Filtres : INBOX, de *@client.com                    │
│  │   1 247 emails indexés   ⟳ Sync toutes les 15min    │
│  └─ [Gérer filtres]                                      │
│                                                          │
│  📊 Stats globales                                       │
│  ├─ Total chunks : 18 432                                │
│  ├─ Stockage : 2.1 GB                                   │
│  └─ Dernière indexation : il y a 12 min                  │
└─────────────────────────────────────────────────────────┘
```

### 25.6 Intégration avec OpenFang

Les agents OpenFang accèdent à la base de connaissances via un **skill custom** qui appelle le Go backend :

```toml
# OpenFang config -- skill RAG
[[skills]]
name = "search_knowledge"
description = "Recherche dans la base de connaissances du client (documents, sites web, emails)"
```

Le skill appelle le Go backend qui route vers `SearchService` (Azure AI Search ou pgvector) :

```
Agent OpenFang reçoit une question
  │
  ├─► Skill "search_knowledge" → GET /api/v1/rag/search?q=...&tenant_id=...
  │
  ▼
Go RAG Engine
  ├─► HybridSearch (full-text + vector + reranking)
  ├─► Filtre par source_type si pertinent
  ├─► Top-K résultats (défaut: 5, configurable)
  │
  ▼
Résultats injectés dans le contexte de l'agent
  ├─► Chunks pertinents avec métadonnées source
  └─► Agent génère une réponse contextualisée
```

**API search unifiée** :
```
GET /api/v1/rag/search?q={query}&tenant_id={id}&source_type=web,document,email&top_k=5
```

### 25.7 Sécurité et isolation

| Aspect | Implémentation |
|---|---|
| **Isolation tenant** | Chaque requête filtrée par `tenant_id` — aucun cross-tenant possible |
| **Tokens OAuth chiffrés** | AES-256-GCM en DB, clé dans Azure Key Vault |
| **Emails** | Scope `readonly` uniquement — jamais d'écriture/envoi |
| **Documents** | Virus scan optionnel avant ingestion (ClamAV) |
| **Rate limiting** | Par tenant : max crawl concurrent, max uploads/jour |
| **RGPD** | Suppression complète (document + chunks + vecteurs) sur demande |
| **Self-hosted** | Tout reste local — aucune donnée ne transite par DoveAIA cloud |

### 25.8 Sizing et limites par tier

| Limite | Starter (15€) | Pro (35€) | Business (75€) | Enterprise |
|---|---|---|---|---|
| Documents uploadés | 50 | 500 | 5 000 | Illimité |
| Stockage total | 1 GB | 10 GB | 100 GB | Custom |
| Sites web crawlés | 1 | 5 | 20 | Illimité |
| Pages max par site | 100 | 500 | 5 000 | Illimité |
| Connexions email | 0 | 1 | 5 | Illimité |
| Emails indexés | -- | 5 000 | 50 000 | Illimité |
| Re-crawl fréquence | Hebdo | Quotidien | Toutes les heures | Custom |
| Sync email | -- | Toutes les heures | Toutes les 15 min | Temps réel |

---

## 26. Multimodal Embeddings -- Qwen3-VL-Embedding

> **Repo** : [github.com/QwenLM/Qwen3-VL-Embedding](https://github.com/QwenLM/Qwen3-VL-Embedding) | **HuggingFace** : [Qwen/Qwen3-VL-Embedding-2B](https://huggingface.co/Qwen/Qwen3-VL-Embedding-2B), [Qwen/Qwen3-VL-Embedding-8B](https://huggingface.co/Qwen/Qwen3-VL-Embedding-8B) | **Paper** : [arXiv:2601.04720](https://arxiv.org/abs/2601.04720)

### Pourquoi le multimodal change tout pour notre RAG Engine

Le RAG classique (section 25) extrait du texte des documents puis vectorise le texte. Problème : on perd les **tableaux, diagrammes, graphiques, mises en page** -- exactement ce qui contient souvent l'information clé dans un PDF business.

Avec Qwen3-VL-Embedding, on peut **embedder directement les pages PDF comme images** dans le même espace vectoriel que le texte. Une requête texte "montre-moi le chiffre d'affaires Q3" retrouve le tableau Excel ou le graphique du PDF -- sans OCR ni extraction de texte.

### Famille de modèles Qwen3 pour embeddings

#### A) Qwen3-VL-Embedding (multimodal -- notre choix)

| Spec | 2B | 8B |
|---|---|---|
| **Paramètres** | 2B | 8B |
| **Layers** | 28 | 36 |
| **Dimensions embedding** | jusqu'à 2048 (MRL : 64→2048) | jusqu'à 4096 (MRL : 64→4096) |
| **Context** | 32K tokens | 32K tokens |
| **Modalités** | Texte + Image + Vidéo + Screenshots | Texte + Image + Vidéo + Screenshots |
| **Langues** | 30+ | 30+ |
| **Licence** | Apache 2.0 | Apache 2.0 |
| **VRAM BF16** | ~5-6 GB | ~18-20 GB |
| **VRAM Q4** | ~3-4 GB | ~8-12 GB |
| **GPU minimum** | RTX 3060 12GB | RTX 3090 / A10 24GB |
| **Base** | Qwen3-VL-2B-Instruct | Qwen3-VL-8B-Instruct |

**Features clés** :
- **Matryoshka Representation Learning (MRL)** : dimension d'embedding ajustable de 64 à 4096 -- trade-off qualité/stockage/vitesse
- **Dual-tower architecture** : query et document encodés indépendamment (EOS token → embedding) → batch encoding efficace
- **Instruction-aware** : ajouter une instruction à la query améliore la précision de 1-5%
- **Quantization** : poids et embeddings quantizables

**Rerankers associés** :
- Qwen3-VL-Reranker-2B / 8B : architecture single-tower cross-attention pour re-scoring fin après retrieval initial

#### B) Qwen3-Embedding (text-only)

| Spec | 0.6B | 4B | 8B |
|---|---|---|---|
| **Dimensions** | 2048 | 4096 | 4096 |
| **Context** | 32K | 40K | 32K |
| **Langues** | 100+ | 100+ | 100+ |
| **Ollama** | 639 MB | 2.5 GB | 4.7 GB |
| **MTEB Multilingual** | -- | 69.45 | **70.58 (#1)** |

> **Repo** : [github.com/QwenLM/Qwen3-Embedding](https://github.com/QwenLM/Qwen3-Embedding) | **Paper** : [arXiv:2506.05176](https://arxiv.org/abs/2506.05176) | **Ollama** : `ollama pull qwen3-embedding`

### Benchmarks -- Pourquoi Qwen3 domine

#### Multimodal (MMEB-V2, 78 datasets) :

| Model | Overall | Image | Video | VisDoc |
|---|---|---|---|---|
| **Qwen3-VL-Embedding-8B** | **77.9** | 80.1 | 66.1 | 83.3 |
| Qwen3-VL-Embedding-2B | 73.2 | 76.5 | 63.6 | 79.2 |
| VLM2Vec | 59.2 | -- | -- | -- |
| GME-2B | 55.3 | -- | -- | -- |

#### Cross-modal retrieval (benchmark indépendant Cheney Zhang 2026) :

| Model | Cross-Modal | Cross-Lingual | Open-source ? |
|---|---|---|---|
| **Qwen3-VL-2B** | **0.945 (#1)** | 0.988 | Oui (Apache 2.0) |
| Gemini Embed 2 | 0.928 | **0.997** | Non (API Google) |
| Voyage MM-3.5 | 0.900 | 0.982 | Non (API payante) |
| OpenAI text-embedding-3-large | -- (text only) | 0.967 | Non (API payante) |
| Cohere embed-v4 | -- | 0.955 | Non (API payante) |
| BGE-M3 | -- (text only) | 0.940 | Oui |

**Le 2B open-source bat tous les modèles propriétaires en cross-modal.** Le modality gap (distance image↔texte pour un même concept) est de 0.25 vs 0.73 pour les concurrents.

#### Text-only (MTEB Multilingual) :

| Model | Score |
|---|---|
| **Qwen3-Embedding-8B** | **70.58 (#1 mondial)** |
| Qwen3-Embedding-4B | 69.45 |
| Gemini embedding | 68.37 |
| text-embedding-3-large | 58.93 |

### Déploiement pour DoveAIA

#### Option 1 : Ollama (simple, self-hosted)

```bash
# Text-only (production-ready)
ollama pull qwen3-embedding          # 8B, 4.7GB
ollama pull qwen3-embedding:0.6b     # 0.6B, 639MB (léger)

# Multimodal (community)
ollama pull MedAIBase/Qwen3-VL-Embedding:2b

# Usage
curl http://localhost:11434/api/embed \
  -d '{"model": "qwen3-embedding", "input": "Votre texte ici"}'
```

⚠️ L'API embed Ollama ne supporte pas bien les inputs images. Pour le multimodal, préférer vLLM.

#### Option 2 : vLLM (production, recommandé pour multimodal)

```python
# vLLM >= 0.14.0 requis
from vllm import LLM, EngineArgs

engine_args = EngineArgs(
    model="Qwen/Qwen3-VL-Embedding-2B",
    runner="pooling",
    dtype="bfloat16",
    trust_remote_code=True,
)
llm = LLM(**vars(engine_args))
# Expose une API OpenAI-compatible sur :8000
```

Le Go backend appelle vLLM via HTTP (API OpenAI-compatible).

#### Option 3 : Azure AI Foundry (managed)

- **Qwen3-Embedding-8B** disponible dans le [catalogue Azure AI](https://ai.azure.com/catalog/models/qwen-qwen3-embedding-8b)
- Deploy en 1 clic avec Text Embeddings Inference (TEI)
- Auto-scaling, managed endpoints
- **Qwen3-VL** aussi disponible via Azure AI Foundry avec backend vLLM

#### Option 4 : Docker TEI (self-hosted production)

```bash
docker run --gpus all -p 8080:80 -v hf_cache:/data \
  ghcr.io/huggingface/text-embeddings-inference:1.7.2 \
  --model-id Qwen/Qwen3-Embedding-8B --dtype float16
```

### Impact sur le RAG Engine (section 25)

#### Nouvelle stratégie de chunking dual-mode

```
Document PDF reçu
  │
  ├─► Mode texte (classique) :
  │     Extract texte → chunk → embed texte (Qwen3-Embedding)
  │
  ├─► Mode visuel (nouveau) :
  │     Render page en image (poppler) → embed image (Qwen3-VL-Embedding)
  │     ✓ Conserve tableaux, graphiques, diagrammes, mise en page
  │
  └─► Mode hybride (recommandé) :
        Pages text-heavy → embed texte
        Pages visual-heavy (tableaux, charts) → embed image
        Détection automatique via ratio texte/éléments visuels
```

#### Pipeline RAG multimodal complet

```
1. RETRIEVE (rapide, dual-tower)
   Query texte → Qwen3-VL-Embedding-2B → cosine similarity
   Retourne top-K chunks (texte ET images mélangés)

2. RERANK (précis, single-tower)
   Top-K → Qwen3-VL-Reranker-2B → re-scoring cross-attention
   Filtre top-3 les plus pertinents

3. GENERATE (réponse)
   Top-3 chunks → Qwen3-VL (ou Azure OpenAI GPT-4o) comme LLM
   Le LLM "lit" les images de tableaux/graphiques directement
   → Réponse contextualisée avec données visuelles
```

#### Interface Go mise à jour

```go
// rag/embedder.go -- interface mise à jour pour multimodal
type Embedder interface {
    // Text embedding
    EmbedText(ctx context.Context, texts []string) ([][]float32, error)
    // Image embedding (nouveau)
    EmbedImage(ctx context.Context, images [][]byte) ([][]float32, error)
    // Mixed embedding (nouveau)
    EmbedMixed(ctx context.Context, inputs []MultimodalInput) ([][]float32, error)
    // Dimension du vecteur
    Dimension() int
}

type MultimodalInput struct {
    Text  string   // texte optionnel
    Image []byte   // image optionnelle (PNG/JPEG)
    Instruction string // instruction pour améliorer la précision
}

// Implémentations :
type AzureOpenAIEmbedder struct { ... }       // text-embedding-3-large (text only)
type Qwen3Embedder struct { ... }             // qwen3-embedding via Ollama/vLLM (text only)
type Qwen3VLEmbedder struct { ... }           // qwen3-vl-embedding via vLLM (multimodal)
type OllamaEmbedder struct { ... }            // generic Ollama (text only)
```

#### Reranker service

```go
// rag/reranker.go
type Reranker interface {
    Rerank(ctx context.Context, query string, documents []RerankerDoc, topK int) ([]RankedResult, error)
}

type RerankerDoc struct {
    ID      string
    Text    string  // chunk texte
    Image   []byte  // ou image de la page
}

type RankedResult struct {
    DocID string
    Score float64
}

// Implémentations :
type Qwen3VLReranker struct { ... }  // vLLM, cross-attention multimodal
type CohereReranker struct { ... }   // API Cohere (fallback)
```

### Stratégie de déploiement par phase

```
Phase 1 (MVP) :
  → Azure OpenAI text-embedding-3-large (text only)
  → Azure AI Search
  → Simple, pas d'infra GPU à gérer
  → Suffisant pour 80% des cas

Phase 2 (Scale) :
  → Ajouter Qwen3-Embedding-0.6B via Ollama (text, self-hosted, léger)
  → Qwen3-VL-Embedding-2B via vLLM (multimodal, 1x A10 GPU)
  → pgvector pour stockage vecteurs
  → Les PDFs "visuels" (tableaux, graphiques) sont maintenant searchables

Phase 3 (Production) :
  → Qwen3-VL-Embedding-2B + Qwen3-VL-Reranker-2B
  → Pipeline retrieve → rerank → generate
  → Self-hosted clients : tout tourne sur leur infra (Apache 2.0)
  → GPU requis : 1x RTX 3060 12GB minimum (2B models)
```

### Coût GPU estimé

| Déploiement | GPU | Coût/mois | Usage |
|---|---|---|---|
| **Ollama qwen3-embedding:0.6b** | CPU seul | 0€ | Text-only, dev/petits clients |
| **Ollama qwen3-embedding** | GPU 8GB | ~30€ (Hetzner) | Text-only, production |
| **vLLM Qwen3-VL-Embedding-2B** | 1x A10 24GB | ~120€ (Hetzner) / ~350€ (Azure) | Multimodal, 10-50 clients |
| **vLLM Qwen3-VL-Embedding-8B** | 1x A100 40GB | ~300€ (Hetzner) / ~900€ (Azure) | Multimodal, max qualité |
| **Azure AI Foundry managed** | Auto-scale | Pay-per-request | Managed, zéro ops |

### Recommandation DoveAIA

| Besoin | Modèle | Pourquoi |
|---|---|---|
| **MVP (aller vite)** | Azure OpenAI text-embedding-3-large | Zéro infra, API simple |
| **Text-only self-hosted** | Qwen3-Embedding-0.6B (Ollama) | 639MB, tourne sur CPU, Apache 2.0 |
| **Multimodal production** | Qwen3-VL-Embedding-2B (vLLM) | #1 cross-modal, 12GB GPU, Apache 2.0 |
| **Max qualité** | Qwen3-VL-Embedding-8B + Reranker-8B | MMEB-V2 #1, nécessite A100 |
| **Clients self-hosted** | Qwen3-VL-Embedding-2B | Apache 2.0, tourne sur une RTX 3060 |

**Le sweet spot pour DoveAIA est Qwen3-VL-Embedding-2B** : open-source, bat les APIs propriétaires en cross-modal, tourne sur un GPU abordable (12GB), et permet le self-hosted pour les clients on-premise.

---

## 27. Chatwoot -- Service Client Multicanaux + Human Handoff

> **Docs API** : [developers.chatwoot.com](https://developers.chatwoot.com/introduction) | **Repo** : [github.com/chatwoot/chatwoot](https://github.com/chatwoot/chatwoot) (26K+ stars, MIT) | **Site** : [chatwoot.com](https://www.chatwoot.com)

### Pourquoi Chatwoot dans la stack

OpenFang excelle en **agents IA autonomes** (40+ canaux, 26 LLM providers, WASM skills). Mais il lui manque **tout ce qui concerne les agents humains** :
- Pas d'inbox UI pour les humains
- Pas de routing d'agents (round-robin, priority)
- Pas de CSAT / SLA / rapports de performance
- Pas de handoff AI → humain structuré
- Pas de knowledge base / help center

**Chatwoot comble exactement ce gap.** C'est l'alternative open-source à Intercom/Zendesk.

### Fiche technique

| Attribut | Détail |
|---|---|
| **Licence** | MIT (Community, self-hosted = gratuit) |
| **Stack** | Ruby on Rails + Vue.js 3 |
| **Base de données** | PostgreSQL 14+ (avec pgvector) |
| **Cache/Queue** | Redis 7.0+ / Sidekiq |
| **Real-time** | ActionCable (WebSocket) |
| **Stars GitHub** | ~26 200+ |
| **Contributors** | 500+ |
| **Version** | 4.0 (avec Captain AI intégré) |
| **Multi-tenant** | Natif (isolation par `account_id`) |
| **API** | 3 APIs : Application, Client, Platform |

### Canaux supportés nativement

| Canal | Attachements | Notes |
|---|---|---|
| Web Widget | Oui | Personnalisable, JS embed |
| Email | Oui | SMTP/IMAP |
| WhatsApp | Oui | Via Twilio ou WhatsApp Cloud API |
| Facebook Messenger | Oui | Meta Business |
| Instagram DM | Oui | Meta Business |
| Twitter/X | Oui | DMs |
| Telegram | Oui | Bot API |
| SMS | Non | Via Twilio |
| Line | Non | LINE Official Account |
| TikTok | Oui | Business API |
| **API Channel** | Oui | **Canal custom pour OpenFang** |

### Intégration OpenFang ↔ Chatwoot

**Le point d'intégration clé : AgentBot API**

```
Client envoie un message (WhatsApp, email, web...)
         │
         ▼
   Chatwoot reçoit le message
         │
         ▼
   AgentBot webhook → POST vers Go backend
         │
         ▼
   Go backend route vers OpenFang
         │
         ├─► OpenFang peut répondre ?
         │     Oui → Réponse via Chatwoot API
         │            POST /api/v1/accounts/:id/conversations/:id/messages
         │
         │     Non / Complexe / Client demande un humain
         │     → bot_handoff! → Conversation passe en "open"
         │     → Agent humain prend la main dans l'inbox Chatwoot
         │
         ▼
   CSAT envoyé automatiquement à la résolution
```

**AgentBot lifecycle** :
1. `POST /platform/api/v1/agent_bots` — créer le bot avec `outgoing_url` (webhook Go)
2. Bot assigné à une inbox
3. Chatwoot envoie les events : `message_created`, `conversation_created`
4. Go backend forward à OpenFang
5. Réponse via API Chatwoot
6. `bot_handoff!` quand escalade nécessaire

### Features clés pour le service client

| Feature | Détail |
|---|---|
| **Inbox unifié** | Tous les canaux dans une seule vue |
| **Routing agents** | Round-robin, smart (charge), priorité, manuel |
| **CSAT** | Enquête auto à la résolution, rapports tendances |
| **SLA** | FRT, NRT, temps de résolution, alertes breach (Enterprise) |
| **Automation** | Règles trigger→condition→action sur conversations |
| **Canned responses** | Templates avec variables, raccourcis `/` |
| **Teams** | Départements, assignation par équipe |
| **Labels** | Tags custom, filtres, reporting par label |
| **Reports** | Volume, temps de résolution, performance agent, CSAT |
| **Knowledge Base** | Articles, catégories, portail public, recherche pgvector |
| **Captain AI** | Copilot pour agents (suggestions, résumé, réécriture) |
| **Macros** | Actions multiples réutilisables |
| **Campaigns** | Outreach proactif (scheduled/trigger) |
| **Audit Logs** | Traçabilité (Enterprise) |
| **SSO** | Single Sign-On (Enterprise) |

### Multi-tenant pour DoveAIA

Chatwoot supporte le multi-tenant via `account_id` (isolation en DB). Avec la **Platform API** (self-hosted uniquement), notre Go backend peut :

```go
// Provisioning d'un nouveau client DoveAIA
func (s *ChatwootService) ProvisionClient(ctx context.Context, client Client) error {
    // 1. Créer un account Chatwoot
    account := chatwoot.CreateAccount(client.Name)

    // 2. Créer l'inbox avec le canal principal
    inbox := chatwoot.CreateInbox(account.ID, chatwoot.InboxParams{
        Name:    "WhatsApp " + client.Name,
        Channel: "whatsapp",
        // ... config canal
    })

    // 3. Créer l'AgentBot (OpenFang)
    bot := chatwoot.CreateAgentBot(chatwoot.AgentBotParams{
        Name:        "DoveAIA Agent",
        OutgoingURL: fmt.Sprintf("https://api.doveaia.com/webhook/chatwoot/%s", client.TenantID),
    })

    // 4. Assigner le bot à l'inbox
    chatwoot.AssignBotToInbox(bot.ID, inbox.ID)

    // 5. Créer les agents humains du client
    for _, agent := range client.Agents {
        chatwoot.CreateAgent(account.ID, agent.Email, agent.Name)
    }

    return nil
}
```

### Limites connues

| Limite | Impact | Mitigation |
|---|---|---|
| **Ruby on Rails** | Pas dans notre stack Go/Angular | Utiliser uniquement via API, pas de fork |
| **Captain AI = OpenAI only** | Pas d'Ollama/local | On utilise OpenFang pour l'IA, Captain en bonus |
| **White-label = Enterprise** | Payant pour supprimer le branding | Budget ~99€/agent/mois si nécessaire |
| **SMTP partagé** | 1 config SMTP pour tous les accounts | Utiliser un service email transactionnel (SendGrid) |
| **8-16 GB RAM** | Plus lourd qu'OpenFang (32MB) | Dédier un container/VM Chatwoot |

### Déploiement

```yaml
# Docker Compose Production
Services:
  chatwoot-rails:     # API + Web UI (port 3000)
  chatwoot-sidekiq:   # Background jobs
  postgresql:         # Peut partager avec notre Go backend
  redis:              # Cache + queues

# Resources : 4 CPU, 8-16 GB RAM, SSD
# Compatible Azure Container Apps / Hetzner Docker
```

**Coûts infra estimés** :

| Hébergement | Coût/mois | Notes |
|---|---|---|
| Hetzner CX42 (8 CPU, 16GB) | ~30€ | Budget, suffisant pour 50 clients |
| Azure Container Apps | ~100-200€ | Managed, auto-scale |
| PostgreSQL managé (Azure) | ~50€ | Partagé avec Go backend |
| Redis managé (Azure) | ~30€ | Ou Hetzner Redis |

### Pricing self-hosted

| Plan | Prix | Pour DoveAIA |
|---|---|---|
| **Community** | **Gratuit** (MIT) | MVP, toutes features sauf Enterprise |
| **Premium** | 19€/agent/mois | Support prioritaire |
| **Enterprise** | 99€/agent/mois | SLA, SSO, audit, white-label |

**Notre marge** : Chatwoot Community est gratuit. On facture nos clients pour l'accès à la plateforme (agents IA + humains), Chatwoot ne coûte que l'infra.

### Chatwoot vs OpenFang — Complémentaires

| Capability | OpenFang | Chatwoot | Ensemble |
|---|---|---|---|
| Canaux | 40+ | 13 | 40+ (API Channel bridge) |
| IA autonome 24/7 | **Oui** | Non | OpenFang |
| LLM providers | 26 | OpenAI seul | OpenFang |
| Inbox agents humains | Non | **Oui** | Chatwoot |
| Routing humain | Non | **Oui** | Chatwoot |
| CSAT / SLA | Non | **Oui** | Chatwoot |
| Reports perf | Non | **Oui** | Chatwoot |
| Knowledge base | Non | **Oui** | Chatwoot |
| Handoff AI→humain | Non | **bot_handoff!** | Chatwoot |
| Skills WASM | **Oui** | Non | OpenFang |
| Clustering P2P | **Oui** (OFP) | Non | OpenFang |

### Architecture finale intégrée

```
┌─────────────────────────────────────────────────────────────────┐
│                    PLATEFORME DOVEAIA                             │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │              Angular Dashboard (client)                      │ │
│  │  • Config agent IA  • Inbox humains  • Analytics  • RAG     │ │
│  └───────────────────────────┬─────────────────────────────────┘ │
│                              │                                    │
│  ┌───────────────────────────┴─────────────────────────────────┐ │
│  │              Go API Gateway                                  │ │
│  │  • Auth (Azure AD B2C)      • Billing (Stripe)              │ │
│  │  • Instance Manager         • RAG Engine                     │ │
│  │  • Chatwoot Orchestrator    • Webhook Router                │ │
│  └──┬──────────────┬──────────────┬───────────────┬────────────┘ │
│     │              │              │               │              │
│     ▼              ▼              ▼               ▼              │
│  ┌──────┐   ┌──────────┐   ┌──────────┐   ┌──────────────┐     │
│  │Chatwoot│  │OpenFang  │   │OpenFang  │   │ PostgreSQL   │     │
│  │(shared)│  │Client A  │   │Client B  │   │ + pgvector   │     │
│  │Rails + │  │(AI agent)│   │(AI agent)│   │ + Redis      │     │
│  │Sidekiq │  └──────────┘   └──────────┘   └──────────────┘     │
│  │        │       ↕ AgentBot webhook              ↕              │
│  │ Inbox  │←──────────────────────────────────────┘              │
│  │ CSAT   │  Chatwoot accounts = 1 par client (multi-tenant)    │
│  │ SLA    │  OpenFang instances = 1 par client (isolation)      │
│  │ Reports│                                                      │
│  └────────┘                                                      │
└─────────────────────────────────────────────────────────────────┘

Flow :
1. Message client → Canal (WhatsApp, email, web...)
2. Chatwoot inbox reçoit → AgentBot webhook → Go backend
3. Go backend → OpenFang (AI response)
4. OpenFang répond → via Chatwoot API → client
5. Si escalade → bot_handoff! → agent humain dans Chatwoot
6. Résolution → CSAT auto → rapport
```

---

S = Small (jours), M = Medium (semaines), L = Large (mois)

---

## Sources complètes

### Documentation officielle OpenFang
- [Homepage](https://www.openfang.sh/)
- [Configuration Reference](https://www.openfang.sh/docs/configuration)
- [Architecture](https://www.openfang.sh/docs/architecture)
- [Skill Development](https://github.com/RightNow-AI/openfang/blob/main/docs/skill-development.md)
- [API Reference (79 endpoints)](https://github.com/RightNow-AI/openfang/blob/main/docs/api-reference.md)

### Documentation officielle Hermes Agent
- [Docs](https://hermes-agent.nousresearch.com/docs/)
- [Quickstart](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart/)

### Dépôts GitHub
- [OpenFang](https://github.com/RightNow-AI/openfang) -- 15.9K stars, Apache 2.0
- [Hermes Agent](https://github.com/NousResearch/hermes-agent) -- 19K stars, MIT
- [awesome-hermes-agent](https://github.com/0xNyk/awesome-hermes-agent)

### Issues critiques OpenFang
- [#919 -- rm bypass allowlist (sécurité)](https://github.com/RightNow-AI/openfang/issues/919)
- [#322 -- Enterprise features request](https://github.com/RightNow-AI/openfang/issues/322)
- [#69 -- Agent loop $6/h burn (corrigé)](https://github.com/RightNow-AI/openfang/issues/69)
- [#912 -- Dashboard sans auth](https://github.com/RightNow-AI/openfang/issues/912)
- [#916 -- Shell metacharacters trop agressifs](https://github.com/RightNow-AI/openfang/issues/916)
- [#913 -- Approval Telegram inutilisable](https://github.com/RightNow-AI/openfang/issues/913)
- [#904 -- Shutdown après 30min inactivité](https://github.com/RightNow-AI/openfang/issues/904)
- [#926 -- Erreurs compilation](https://github.com/RightNow-AI/openfang/issues/926)
- [#903 -- Panic rustls Mattermost](https://github.com/RightNow-AI/openfang/issues/903)
- [#905 -- Config API domaines](https://github.com/RightNow-AI/openfang/issues/905)

### Issues critiques Hermes Agent
- [#344 -- Multi-agent architecture](https://github.com/NousResearch/hermes-agent/issues/344)
- [#850 -- Full Docker deployment](https://github.com/NousResearch/hermes-agent/issues/850)
- [#492 -- Hands-inspired feature request](https://github.com/NousResearch/hermes-agent/issues/492)

### Reviews et analyses indépendantes
- [Hermes Agent Honest Review - DEV Community](https://dev.to/george_larson_3cc4a57b08b/hermes-agent-honest-review-1557)
- [OpenFang vs OpenClaw Security - PromptInjection Blog](https://promptinjection.github.io/2026/03/02/openfang-vs-openclaw-security-comparison.html)
- [OpenFang Benchmarks - SitePoint](https://www.sitepoint.com/openfang-rust-agent-os-performance-benchmarks/)
- [OpenFang "First Serious Agent OS" - Medium](https://medium.com/ai-for-life/openfang-the-first-serious-agent-operating-system-and-why-it-matters-f361a7d9ba2b)
- [Claude vs Hermes vs OpenClaw - Medium](https://medium.com/@Daniel.O.Ayo/claude-vs-hermes-vs-openclaw-which-ai-agent-is-actually-worth-paying-for-in-2026-81ad77de8225)
- [Hermes Agent vs OpenFang - Slashdot](https://slashdot.org/software/comparison/Hermes-Agent-vs-OpenFang/)
- [Hermes Agent Why Gaining Ground - Medium](https://medium.com/@kunwarmahen/the-quiet-shift-in-ai-agents-why-hermes-is-gaining-ground-beyond-openclaw-6364df765d3a)
- [Coding CLI Tools Comparison - Tembo](https://www.tembo.io/blog/coding-cli-tools-comparison)

### Azure AI Search (embeddings)
- [Azure AI Search Overview](https://learn.microsoft.com/en-us/azure/search/search-what-is-azure-search)
- [Azure AI Search Pricing](https://azure.microsoft.com/en-us/pricing/details/search/)
- [Integrated Vectorization](https://learn.microsoft.com/en-us/azure/search/vector-search-integrated-vectorization)
- [Agentic Retrieval (preview)](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview)
- [Supported Data Sources (indexers)](https://learn.microsoft.com/en-us/azure/search/search-indexer-overview#supported-data-sources)
- [pgvector](https://github.com/pgvector/pgvector) -- migration cible Phase 3

### Qwen3 Embeddings (multimodal)
- [Qwen3-VL-Embedding GitHub](https://github.com/QwenLM/Qwen3-VL-Embedding) -- repo officiel, exemples, notebooks
- [Qwen3-VL-Embedding-2B (HuggingFace)](https://huggingface.co/Qwen/Qwen3-VL-Embedding-2B) -- model card
- [Qwen3-VL-Embedding-8B (HuggingFace)](https://huggingface.co/Qwen/Qwen3-VL-Embedding-8B) -- model card
- [Qwen3-VL-Reranker-2B (HuggingFace)](https://huggingface.co/Qwen/Qwen3-VL-Reranker-2B) -- reranker multimodal
- [Qwen3-Embedding GitHub](https://github.com/QwenLM/Qwen3-Embedding) -- text-only, MTEB #1
- [Qwen3-Embedding-8B (Azure AI)](https://ai.azure.com/catalog/models/qwen-qwen3-embedding-8b) -- déploiement Azure managé
- [Qwen3-VL-Embedding Blog](https://qwen.ai/blog?id=qwen3-vl-embedding) -- annonce officielle
- [Qwen3-Embedding Blog](https://qwenlm.github.io/blog/qwen3-embedding/) -- annonce text-only
- [Ollama qwen3-embedding](https://ollama.com/library/qwen3-embedding) -- déploiement Ollama
- [Multimodal RAG Notebook](https://github.com/QwenLM/Qwen3-VL-Embedding/blob/main/examples/Qwen3VL_Multimodal_RAG.ipynb) -- exemple end-to-end
- [arXiv:2601.04720](https://arxiv.org/abs/2601.04720) -- paper VL-Embedding
- [arXiv:2506.05176](https://arxiv.org/abs/2506.05176) -- paper Text Embedding
- [2026 Embedding Benchmark (Cheney Zhang)](https://dev.to/chen_zhang_bac430bc7f6b95/which-embedding-model-should-you-actually-use-in-2026-i-benchmarked-10-models-to-find-out-58bc) -- comparatif indépendant

### Chatwoot (service client multicanaux)
- [Chatwoot API Docs](https://developers.chatwoot.com/introduction) -- documentation API complète
- [Chatwoot GitHub](https://github.com/chatwoot/chatwoot) -- 26K+ stars, MIT
- [Chatwoot Self-Hosted Guide](https://www.chatwoot.com/docs/self-hosted/) -- installation Docker
- [AgentBot API](https://developers.chatwoot.com/docs/product/channels/api/send-messages) -- intégration bot externe
- [Platform API](https://developers.chatwoot.com/docs/platform/overview) -- gestion multi-tenant (self-hosted)
- [Chatwoot Go Client](https://github.com/Kai-Karren/chatwoot-golang-client) -- librairie Go communautaire
- [Chatwoot Webhooks](https://developers.chatwoot.com/docs/product/features/webhooks) -- events et payloads
- [Captain AI](https://www.chatwoot.com/docs/product/features/captain) -- agent IA intégré
- [Chatwoot Pricing](https://www.chatwoot.com/pricing/) -- plans cloud et self-hosted
- [Chatwoot Docker Compose](https://github.com/chatwoot/chatwoot/blob/develop/docker-compose.production.yaml) -- déploiement production
- [Chatwoot Research DoveAIA](/Users/jgaglo/venavi/business/doveaia/chatwoot-research.md) -- recherche détaillée locale

### Modèle de référence
- [MyClaw.ai](https://myclaw.ai) -- managed hosting OpenClaw, pricing $19-79/mois, modèle SaaS à reproduire

### Communauté
- [OpenFang - Product Hunt](https://www.producthunt.com/products/openfang)
- [OpenFang - Hacker News](https://news.ycombinator.com/item?id=47171341)
- [Hermes Agent - Hacker News](https://news.ycombinator.com/item?id=47234855)
- [OpenFang - FunBlocks AI Review](https://www.funblocks.net/aitools/reviews/openfang)
- [Hermes Agent - MarkTechPost](https://www.marktechpost.com/2026/02/26/nous-research-releases-hermes-agent-to-fix-ai-forgetfulness-with-multi-level-memory-and-dedicated-remote-terminal-access-support/)
- [Hermes Agent Setup Guide - BitDoze](https://www.bitdoze.com/hermes-agent-setup-guide/)
