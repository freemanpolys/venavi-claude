# Boilerplate — Fonctionnalités existantes

> Inventaire complet de tout ce qui est déjà implémenté dans le boilerplate BizCraft.
> Dernière mise à jour : 2026-03-06

---

## Stack technique

### Backend (Go 1.24)

| Composant | Technologie | Package |
|---|---|---|
| Framework HTTP | Gin | `github.com/gin-gonic/gin` |
| ORM | GORM | `gorm.io/gorm` |
| DI | Wire | `github.com/google/wire` |
| Configuration | Viper | `github.com/spf13/viper` |
| Logging | Zap | `go.uber.org/zap` |
| JWT | golang-jwt | `github.com/golang-jwt/jwt/v5` |
| JWKS (Entra ID) | lestrrat-go/jwx | `github.com/lestrrat-go/jwx/v2` |
| UUID | google/uuid | `github.com/google/uuid` |
| BaseModel (GORM) | gorm-utils | `github.com/andiwork/gorm-utils` |
| Password hashing | bcrypt | `golang.org/x/crypto/bcrypt` |
| Snowflake ID | sonyflake | `github.com/sony/sonyflake` |
| Scheduler | gocron | `github.com/go-co-op/gocron` |
| Swagger | swag + gin-swagger | `github.com/swaggo/swag` |
| Testing | testify + httpexpect + sqlmock | — |
| DB drivers | PostgreSQL, MySQL, SQLite | `gorm.io/driver/*` |
| Redis | go-redis | `github.com/redis/go-redis/v9` |
| MongoDB | mongo-driver | `go.mongodb.org/mongo-driver` |

**Module Go** : `biscraft`

### Frontend (Angular 19)

| Composant | Technologie | Package |
|---|---|---|
| Framework | Angular 19 | `@angular/core ^19.2.0` |
| Auth Azure | MSAL Angular | `@azure/msal-angular ^4.0.23` |
| Styling | Tailwind CSS 4 + DaisyUI 5 | `tailwindcss ^4.1.18`, `daisyui ^5.5.14` |
| i18n | ngx-translate | `@ngx-translate/core ^17.0.0` |
| Charts | Chart.js + ng2-charts | `chart.js ^4.5.1` |
| Calendar | FullCalendar | `@fullcalendar/angular ^6.1.20` |
| State | Angular Signals | natif |
| Testing | Karma + Jasmine | — |

### Infrastructure (Terraform)

| Service Azure | Usage |
|---|---|
| Container Apps | API Go |
| Container Registry | Images Docker |
| PostgreSQL Flexible Server | Base de données (v16) |
| Blob Storage | Fichiers (uploads, avatars) |
| Key Vault | Secrets (DB password, JWT, Stripe, Resend, Event Grid) |
| Log Analytics | Monitoring |
| Event Grid Topic | Événements async (user, payment, file) |
| Functions (Go custom handler) | Event Grid subscribers |

---

## Architecture backend

```
HTTP Request → Router → Middleware → Handler → Service → Repository → Database (GORM)
```

### Structure des répertoires

```
biscraft/
├── cmd/
│   ├── server/              # API HTTP (point d'entrée principal)
│   │   └── wire/            # Wire DI : wire.go + wire_gen.go
│   ├── task/                # Background job processor (gocron)
│   └── migration/           # Migrations DB (GORM AutoMigrate)
├── internal/
│   ├── handler/             # Handlers HTTP
│   │   ├── handler.go       # Base handler
│   │   ├── user.go          # Register, Login, GetProfile, UpdateProfile
│   │   ├── entra.go         # Endpoint protégé Entra ID
│   │   ├── apikey.go        # CRUD API keys
│   │   └── waitlist.go      # Subscribe, Check, Admin CRUD
│   ├── service/             # Logique métier
│   │   ├── service.go       # Base service
│   │   ├── user.go          # Register, Login, GetProfile, UpdateProfile, IsAdminEmail
│   │   ├── apikey.go        # Create, List, Delete, ValidateKey
│   │   └── waitlist.go      # Subscribe, Check, AdminList, Activate, Deactivate
│   ├── repository/          # Accès données (GORM)
│   │   ├── repository.go    # Base repo + Transaction
│   │   ├── user.go          # Create, Update, GetByID, GetByEmail
│   │   ├── apikey.go        # Create, ListByUserID, DeleteByID, GetByKeyHash
│   │   └── waitlist_entry.go# Create, GetByEmail, List, UpdateStatus
│   ├── model/               # Entités GORM
│   │   ├── base.go          # BaseModel = utils.Model (UUID)
│   │   ├── user.go
│   │   ├── apikey.go
│   │   └── waitlist_entry.go
│   ├── middleware/           # Middleware Gin
│   │   ├── entra.go         # EntraExternalIDAuth (JWKS)
│   │   ├── jwt.go           # StrictAuth, NoStrictAuth, FlexAuth
│   │   ├── admin.go         # AdminOnly (email-based)
│   │   ├── waitlist_gate.go # WaitlistGate
│   │   ├── cors.go          # CORS
│   │   ├── log.go           # Response logging
│   │   └── sign.go          # API signing (désactivé)
│   ├── router/              # Définitions des routes
│   │   ├── router.go        # RouterDeps struct
│   │   ├── user.go          # /register, /login, /user
│   │   ├── entra.go         # /entra/protected
│   │   ├── apikey.go        # /apikeys CRUD
│   │   └── waitlist.go      # /waitlist, /admin/waitlist
│   └── server/              # Setup serveur
│       ├── http.go          # HTTP server + AutoMigrate hook
│       ├── job.go           # Job server (gocron)
│       └── migration.go     # Migration server
├── api/v1/                  # DTOs et codes d'erreur
│   ├── v1.go                # Response wrapper {code, message, data}
│   ├── errors.go            # Codes d'erreur
│   ├── user.go              # RegisterRequest, LoginRequest, etc.
│   ├── apikey.go            # CreateApiKeyRequest, etc.
│   └── waitlist.go          # WaitlistSubscribeRequest, etc.
├── pkg/                     # Packages partagés
│   ├── app/                 # Lifecycle, graceful shutdown
│   ├── config/              # Chargement Viper
│   ├── email/               # Email sender (interface + Resend impl)
│   ├── jwt/                 # JWT generation/validation
│   ├── log/                 # Zap structured logging
│   ├── server/              # HTTP server wrapper
│   ├── sid/                 # Snowflake ID
│   ├── turnstile/           # Cloudflare Turnstile (+ noop fallback)
│   └── zapgorm2/            # Zap adapter pour GORM
├── config/                  # Fichiers YAML
│   ├── local.yml            # Dev (PostgreSQL, Entra ID, debug)
│   └── prod.yml             # Prod (SQLite default, info logging)
├── docs/                    # Swagger auto-généré
├── deploy/
│   ├── build/Dockerfile     # Multi-stage Go build
│   ├── docker-compose/      # MySQL + Redis
│   └── terraform/           # Azure infra complète
└── test/                    # Tests (handler, service, repository, mocks)
```

---

## Schémas de données (GORM)

### BaseModel (toutes les entités)

```go
// github.com/andiwork/gorm-utils — utils.Model
type BaseModel struct {
    ID        uuid.UUID      `gorm:"type:uuid;primaryKey"`
    CreatedAt time.Time
    UpdatedAt time.Time
    DeletedAt gorm.DeletedAt `gorm:"index"`
    OwnedBy   string
    CreatedBy string
    UpdatedBy string
}
```

### User

```go
type User struct {
    BaseModel
    UserId   string `gorm:"unique;not null" json:"user_id"`
    Nickname string `gorm:"not null" json:"nickname"`
    Password string `gorm:"not null" json:"password"`
    Email    string `gorm:"not null" json:"email"`
}
// Table: users
```

### ApiKey

```go
type ApiKey struct {
    BaseModel
    UserID            string    `gorm:"index;not null" json:"user_id"`
    KeyHash           string    `gorm:"uniqueIndex;not null" json:"key_hash"`
    KeyPrefix         string    `gorm:"not null" json:"key_prefix"`
    ExpiresAt         time.Time `gorm:"not null" json:"expires_at"`
    RequestCount      int64     `gorm:"default:0" json:"request_count"`
    BudgetLimitUSD    int64     `gorm:"default:0" json:"budget_limit_usd"`    // microdollars
    TotalSpendUSD     int64     `gorm:"default:0" json:"total_spend_usd"`
    TotalInputTokens  int64     `gorm:"default:0" json:"total_input_tokens"`
    TotalOutputTokens int64     `gorm:"default:0" json:"total_output_tokens"`
}
// Table: api_keys
```

### WaitlistEntry

```go
type WaitlistEntry struct {
    BaseModel
    Email       string     `gorm:"uniqueIndex;not null" json:"email"`
    FullName    string     `gorm:"not null" json:"full_name"`
    Status      string     `gorm:"default:pending;not null" json:"status"` // pending, active
    Source      string     `gorm:"default:landing_page" json:"source"`
    ActivatedAt *time.Time `json:"activated_at"`
    ActivatedBy string     `json:"activated_by"`
}
// Table: waitlist_entries
```

---

## API endpoints

### Format de réponse standard

```json
{"code": 0, "message": "ok", "data": {...}}
```

### Codes d'erreur

| Code | Constante | Message |
|---|---|---|
| 0 | `ErrSuccess` | ok |
| 400 | `ErrBadRequest` | Bad Request |
| 401 | `ErrUnauthorized` | Unauthorized |
| 404 | `ErrNotFound` | Not Found |
| 500 | `ErrInternalServerError` | Internal Server Error |
| 1001 | `ErrEmailAlreadyUse` | The email is already in use |
| 2001 | `ErrApiKeyRequired` | API key required |
| 2002 | `ErrApiKeyInvalid` | Invalid API key |
| 2003 | `ErrApiKeyExpired` | API key expired |
| 2005 | `ErrBudgetExceeded` | Budget limit exceeded |
| 2006 | `ErrApiKeysLimitExceeded` | API keys limit exceeded |
| 3001 | `ErrTurnstileFailed` | Bot verification failed |
| 3002 | `ErrWaitlistAlreadyActive` | Email is already active |
| 3003 | `ErrWaitlistNotActive` | Account not yet activated |
| 3004 | `ErrWaitlistEntryNotFound` | Waitlist entry not found |

### Routes

| Méthode | Path | Auth | Middleware | Description |
|---|---|---|---|---|
| `POST` | `/v1/register` | — | — | Inscription (email + password) |
| `POST` | `/v1/login` | — | — | Connexion → JWT local |
| `PUT` | `/v1/user` | Entra ID | — | Mise à jour profil |
| `GET` | `/v1/entra/protected` | Entra ID | — | Endpoint test Entra |
| `POST` | `/v1/apikeys` | Entra ID | WaitlistGate | Créer une API key |
| `GET` | `/v1/apikeys` | Entra ID | WaitlistGate | Lister API keys |
| `DELETE` | `/v1/apikeys/:id` | Entra ID | WaitlistGate | Supprimer API key |
| `POST` | `/v1/waitlist` | — | — | S'inscrire à la waitlist |
| `GET` | `/v1/waitlist/check` | — | — | Vérifier statut waitlist |
| `GET` | `/v1/admin/waitlist` | Entra ID | AdminOnly | Lister les entrées (paginé) |
| `PUT` | `/v1/admin/waitlist/:id/activate` | Entra ID | AdminOnly | Activer un utilisateur |
| `PUT` | `/v1/admin/waitlist/:id/deactivate` | Entra ID | AdminOnly | Désactiver un utilisateur |
| `GET` | `/v1/config/public` | — | — | Config publique (waitlist_enabled) |
| `GET` | `/swagger/*any` | — | — | Documentation Swagger |

### DTOs (api/v1/)

**User** :
```go
RegisterRequest  { Email, Password }
LoginRequest     { Email, Password }
LoginResponseData { AccessToken }
UpdateProfileRequest  { Nickname, Email }
GetProfileResponseData { UserId, Nickname, IsAdmin }
```

**ApiKey** :
```go
CreateApiKeyRequest  { ExpiresInDays, BudgetLimitUSD }
CreateApiKeyResponse { Id, Key, KeyPrefix, ExpiresAt, BudgetLimitUSD }
ApiKeyListItem       { Id, KeyPrefix, ExpiresAt, RequestCount, BudgetLimitUSD, TotalSpendUSD, CreatedAt }
ListApiKeysResponse  { Keys[], ApiKeysLimit, CurrentKeysCount }
```

**Waitlist** :
```go
WaitlistSubscribeRequest  { Email, FullName, TurnstileToken }
WaitlistSubscribeResponse { Message }
WaitlistCheckResponse     { Subscribed, Status }
WaitlistEntryItem         { ID, Email, FullName, Status, Source, ActivatedAt, ActivatedBy, CreatedAt }
WaitlistListResponse      { Entries[], Total, Page, Limit }
```

---

## Authentification

### Microsoft Entra External ID (CIAM) — méthode principale

**Backend** (`internal/middleware/entra.go`) :
- Middleware `EntraExternalIDAuth` valide les tokens Entra ID via JWKS
- Vérifie issuer (`<tenant>.ciamlogin.com`), audience, expiration, signature RSA
- Extrait les claims et les place dans le contexte Gin :
  - `user_id` → OID (Object ID Entra)
  - `user_email` → email / preferred_username / UPN
  - `user_name` → nom complet
  - `tenant_id` → Tenant ID
  - `entra_claims` → objet complet `EntraIDClaims`

**Frontend** (`@azure/msal-angular`) :
- Config MSAL : `frontend/src/app/auth-config.ts` + `frontend/src/app/msal/msal-config.ts`
- `AuthService` utilise `MsalService` pour login/logout
- `authInterceptor` acquiert les tokens via `acquireTokenSilent()`
- Auth guard vérifie la présence d'un compte MSAL

**Config** (`config/local.yml`) :
```yaml
auth:
  providers:
    entra_id:
      tenant_id: "b26f34a5-7ca4-4eca-8546-ed245a4570df"
      tenant_domain: "doveaialabs"
      client_id: "41da7207-da13-443e-8610-17e36ff9d404"
      client_id_allowed:
        - "41da7207-da13-443e-8610-17e36ff9d404"  # Backend
        - "e40f470c-58a6-48ad-8f3e-a4d1fbcfd35d"  # Frontend
      api_audience: "api://41da7207-da13-443e-8610-17e36ff9d404"
```

### JWT local (secondaire, register/login)

**Backend** (`internal/middleware/jwt.go`) :
- `StrictAuth` — JWT obligatoire
- `NoStrictAuth` — JWT optionnel
- `FlexAuth` — JWT local, fallback Entra ID

> Note : seul `EntraExternalIDAuth` est utilisé dans les routes actuelles.

---

## Frontend — Pages et composants

### Layouts

| Layout | Usage |
|---|---|
| `AuthLayoutComponent` | Pages auth (login, register, forgot-password) |
| `MainLayoutComponent` | Pages authentifiées (sidebar + header) |

### Pages

| Page | Route | Guard | Description |
|---|---|---|---|
| Landing | `/` | — | Hero, features, pricing, social proof, waitlist/signup, footer |
| Login | `/login` | guestGuard | Email/password + bouton "Sign in with Microsoft" |
| Register | `/register` | guestGuard | Formulaire nom/email/password |
| Forgot Password | `/forgot-password` | guestGuard | Email + envoi lien (frontend only, pas de backend) |
| Azure Login | — | — | Login MSAL (redirect) |
| Auth Callback | `/auth-callback` | — | Handler redirect MSAL, charge profil, redirige dashboard |
| Dashboard | `/dashboard` | authGuard | Stats cards, Monthly Active Users chart, Revenue chart |
| Leads | `/leads` | authGuard | Table leads (mock) |
| Transactions | `/transactions` | authGuard | Liste transactions (mock) |
| Analytics | `/analytics` | authGuard | Page Views, Visitors, Bounce Rate, Duration, filtres date |
| Integrations | `/integrations` | authGuard | Cards intégrations (Slack, Stripe, GitHub, etc.) |
| Calendar | `/calendar` | authGuard | Vue calendrier (mock, FullCalendar) |
| Settings: Profile | `/settings/profile` | authGuard | Formulaire profil, langue, timezone |
| Settings: Billing | `/settings/billing` | authGuard | Plan actuel, moyen de paiement (placeholder) |
| Settings: Team | `/settings/team` | authGuard | Table membres avec rôles (mock) |
| Settings: API Keys | `/settings/api-keys` | authGuard | CRUD complet : créer, lister, copier, supprimer |
| Admin: Waitlist | `/admin/waitlist` | authGuard | Panel admin : liste, filtre, activer/désactiver |
| Waitlist Pending | `/waitlist-pending` | — | Page info pour utilisateurs en attente |
| 404 | `/404` | — | Page not found |

### Services frontend

| Service | Fichier | Rôle |
|---|---|---|
| `AuthService` | `core/services/auth.service.ts` | Dual auth (local + MSAL), signals user/token/isAdmin |
| `ApiKeyService` | `core/services/api-key.service.ts` | CRUD API keys via HTTP |
| `WaitlistService` | `core/services/waitlist.service.ts` | Subscribe waitlist, check status |
| `AdminWaitlistService` | `core/services/admin-waitlist.service.ts` | Admin : list/activate/deactivate |
| `AppConfigService` | `core/services/app-config.service.ts` | Config runtime backend (`/v1/config/public`) |
| `LanguageService` | `core/services/language.service.ts` | i18n switch FR/EN, persist localStorage |
| `MenuPreferencesService` | `core/services/menu-preferences.service.ts` | Visibilité menu sidebar, persist localStorage |

### i18n

- Langues : **Anglais** (`en.json`), **Français** (`fr.json`)
- Sections traduites : common, auth, sidebar, header, dashboard, leads, transactions, analytics, integrations, calendar, settings, notFound, languages, landing, admin, waitlistPending

### Feature flags (environment)

```typescript
features: {
  enableAnalytics: true,
  enableCalendar: true,
  enableAzureAd: true,
}
```

---

## Configuration

### Backend (`config/local.yml`)

```yaml
env: local
http:
  host: 0.0.0.0
  port: 8000
security:
  jwt:
    key: "QQYnRFerJTSEcrfB89fw8prOaObmrch8"
auth:
  providers:
    entra_id:
      tenant_id: "..."
      client_id: "..."
      client_id_allowed: [...]
      api_audience: "api://..."
data:
  db:
    default:
      driver: postgres
      dsn: "postgres://demo:demo@localhost:5432/bizcraft?sslmode=disable"
  redis:
    addr: 127.0.0.1:6350
resend:
  api_key: ""
  from_email: "noreply@agentdx.app"
turnstile:
  secret_key: ""
waitlist:
  enabled: false
  admin_email: "admin@doveaia.com"
admin:
  emails:
    - "freemanpolys@gmail.com"
user:
  api_keys_limit: 1
```

### Frontend (`environments/environment.development.ts`)

```typescript
{
  production: false,
  useMock: false,
  apiUrl: 'http://localhost:8000',
  turnstile: { siteKey: '...' },
  msal: {
    clientId: 'e40f470c-...',
    authority: 'https://doveaialabs.ciamlogin.com/',
    redirectUri: 'http://localhost:4200/dashboard',
    postLogoutRedirectUri: '/',
  },
  features: { enableAnalytics, enableCalendar, enableAzureAd },
  landing: { enableWaitlist, productName, pricing[], socialProof, footer },
}
```

---

## Wire DI (Dependency Injection)

```
cmd/server/wire/wire.go

Provider sets :
├── repositorySet : DB, Repository, Transaction, UserRepository, ApiKeyRepository, WaitlistEntryRepository
├── serviceSet    : Service, UserService, ApiKeyService, WaitlistService
├── handlerSet    : Handler, UserHandler, EntraHandler, ApiKeyHandler, WaitlistHandler
├── jobSet        : Job, UserJob
└── serverSet     : HTTPServer, JobServer

Extra providers : sid.NewSid, jwt.NewJwt, email.NewEmailSender, turnstile.NewTurnstileValidator
RouterDeps       : wire.Struct(new(router.RouterDeps), "*")
```

---

## Middleware disponibles

| Middleware | Fichier | Actif | Description |
|---|---|---|---|
| CORS | `cors.go` | Oui (global) | Mirror origin, preflight OPTIONS |
| Response Log | `log.go` | Oui (global) | Log response body + durée |
| Entra ID Auth | `entra.go` | Oui (par route) | Valide tokens Entra, set context |
| AdminOnly | `admin.go` | Oui (admin routes) | Vérifie email admin list |
| WaitlistGate | `waitlist_gate.go` | Oui (API key routes) | Bloque utilisateurs non activés |
| StrictAuth | `jwt.go` | Écrit, non utilisé | JWT local obligatoire |
| NoStrictAuth | `jwt.go` | Écrit, non utilisé | JWT local optionnel |
| FlexAuth | `jwt.go` | Écrit, non utilisé | JWT local → fallback Entra |
| Sign | `sign.go` | Désactivé | Signature API (MD5) |

---

## Déploiement

### Docker

- `deploy/build/Dockerfile` : Multi-stage (Go 1.19 builder + Alpine 3.16)
- `deploy/docker-compose/docker-compose.yml` : MySQL 8.0 (port 3380) + Redis 6 (port 6350)

### Terraform (Azure)

Répertoire : `deploy/terraform/`

Ressources provisionnées :
- Azure Container Apps (API Go) avec liveness/readiness probes
- Azure Container Registry
- Azure Key Vault (secrets DB, JWT, Stripe, Resend, Event Grid)
- Azure PostgreSQL Flexible Server v16
- Azure Blob Storage (containers: uploads, avatars)
- Azure Log Analytics Workspace
- Azure Event Grid Topic
- Azure Functions (Go custom handler) avec Event Grid subscriptions

---

## Ce qui n'est PAS implémenté

- Endpoint `forgot-password` backend (le frontend l'appelle mais rien côté serveur)
- Password reset token flow
- Email verification à l'inscription
- `GET /v1/user` (GetProfile) n'a pas de route enregistrée (seul `PUT /v1/user` est routé)
- Health/readiness endpoints (`/health`, `/ready`) référencés dans Terraform
- Rate limiting middleware
- CI/CD GitHub Actions
- Background job server (câblé dans Wire mais commenté dans `newApp`)
- Config `prod.yml` minimaliste (pas d'Entra ID, pas d'email, pas de waitlist)
