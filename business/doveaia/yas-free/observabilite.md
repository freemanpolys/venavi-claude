# Architecture Observabilité — Grafana LGTM Stack

## Contexte

Infra existante en HA :

- **1 load balancer externe** (HAProxy / Nginx / F5) devant les serveurs applicatifs
- **2 serveurs applicatifs** : Nginx (reverse proxy) + Spring Boot (embedded)
- **1 serveur PostgreSQL master** + **1 slave** (réplication)
- **2 serveurs d'observabilité** en haute disponibilité

Objectif : collecter **logs, traces et métriques** avec la stack Grafana (Loki, Tempo, Mimir) en HA, stockage local sur disque (pas de MinIO/S3).

### Stratégie HA observabilité

- **Dual-write** : chaque agent Alloy envoie simultanément à **obs-server-1** et **obs-server-2**
- **Memberlist ring** : Loki, Mimir et Tempo utilisent memberlist pour se connaître mutuellement (coordination, déduplication des alertes)
- **Grafana** : tourne sur les 2 serveurs, chacun interroge ses backends locaux + le peer pour la vue complète
- **Accès** : VIP ou DNS round-robin devant les 2 Grafana (:3000)

---

## Vue d'ensemble

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                        ┌──────────────────────┐                             │
│                        │   Load Balancer (LB)  │                             │
│               Internet │  HAProxy / Nginx / F5 │                             │
│              ─────────▶│       :80 / :443      │                             │
│                        └──────────┬───────────┘                             │
│                          ┌───────┘└────────┐                                │
│                          ▼                  ▼                                │
│   ┌─────────────┐                              ┌─────────────┐             │
│   │  App Srv 1  │                              │  App Srv 2  │             │
│   │ Nginx + SB  │                              │ Nginx + SB  │             │
│   │ ┌─────────┐ │                              │ ┌─────────┐ │             │
│   │ │  Alloy  │ │                              │ │  Alloy  │ │             │
│   │ └────┬────┘ │                              │ └────┬────┘ │             │
│   └──────┼──────┘                              └──────┼──────┘             │
│          │         ┌───────────┐  ┌───────────┐       │                    │
│          │         │ PG Master │  │ PG Slave  │       │                    │
│          │         │ ┌───────┐ │  │ ┌───────┐ │       │                    │
│          │         │ │ Alloy │ │  │ │ Alloy │ │       │                    │
│          │         │ └───┬───┘ │  │ └───┬───┘ │       │                    │
│          │         └─────┼─────┘  └─────┼─────┘       │                    │
│          │               │              │              │                    │
│          ▼               ▼              ▼              ▼                    │
│   ┌──── dual-write ─────────────────────────────── dual-write ────┐        │
│   │                                                               │        │
│   ▼                                                               ▼        │
│   ┌───────────────────────────────┐  ┌───────────────────────────────┐     │
│   │    Serveur Observabilité 1    │  │    Serveur Observabilité 2    │     │
│   │                               │  │                               │     │
│   │ ┌───────┐ ┌────┐ ┌─────┐     │  │ ┌───────┐ ┌────┐ ┌─────┐     │     │
│   │ │Grafana│ │Loki│ │Tempo│     │  │ │Grafana│ │Loki│ │Tempo│     │     │
│   │ │ :3000 │ │:3100│ │:3200│     │  │ │ :3000 │ │:3100│ │:3200│     │     │
│   │ └───────┘ └────┘ └─────┘     │  │ └───────┘ └────┘ └─────┘     │     │
│   │           ┌─────┐             │  │           ┌─────┐             │     │
│   │           │Mimir│             │  │           │Mimir│             │     │
│   │           │:9009│             │  │           │:9009│             │     │
│   │           └─────┘             │  │           └─────┘             │     │
│   │                               │  │                               │     │
│   │ SSD local /var/lib/{loki,..}  │  │ SSD local /var/lib/{loki,..}  │     │
│   └──────────────┬────────────────┘  └───────────────┬───────────────┘     │
│                  │      memberlist (port 7946)        │                     │
│                  └───────────────────────────────────-┘                     │
│                                                                             │
│                  ┌──────────────────────────────┐                           │
│                  │  VIP / DNS round-robin :3000  │                           │
│                  └──────────────────────────────┘                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Composants et rôles

| Composant        | Signal      | Rôle                                                                 |
|------------------|-------------|----------------------------------------------------------------------|
| **Grafana**      | Visualisation | Dashboards, alertes, corrélation logs/metrics/traces               |
| **Mimir**        | Métriques   | Stockage long terme des métriques (compatible Prometheus)            |
| **Loki**         | Logs        | Agrégation des logs Nginx, Spring Boot, PostgreSQL                   |
| **Tempo**        | Traces      | Traces distribuées des requêtes Nginx → Spring Boot → PG            |
| **Grafana Alloy**| Collecte    | Agent unifié (remplace Promtail + Prometheus agent + OTel Collector) |

### Exporters à déployer

| Machine          | Composants à installer                          | Ports          |
|------------------|------------------------------------------------|----------------|
| App Srv 1 & 2    | Alloy, node_exporter, nginx-prometheus-exporter | 9100, 9113     |
| PG Master & Slave| Alloy, node_exporter, postgres_exporter         | 9100, 9187     |
| Obs Server 1 & 2 | Grafana, Mimir, Loki, Tempo                     | 3000, 9009, 3100, 3200, 7946 (memberlist) |

---

## Configuration Grafana Alloy — Serveurs applicatifs

Fichier `/etc/alloy/config.alloy` sur **App Srv 1** et **App Srv 2** :

```hcl
// ══════════════════════════════════════
// METRICS
// ══════════════════════════════════════

// Métriques système (CPU, RAM, disque, réseau)
prometheus.scrape "node" {
  targets    = [{"__address__" = "localhost:9100"}]
  forward_to = [prometheus.remote_write.mimir_1.receiver, prometheus.remote_write.mimir_2.receiver]
}

// Métriques Spring Boot via Actuator
prometheus.scrape "spring_boot" {
  targets      = [{"__address__" = "localhost:8080"}]
  metrics_path = "/actuator/prometheus"
  forward_to   = [prometheus.remote_write.mimir_1.receiver, prometheus.remote_write.mimir_2.receiver]
}

// Métriques Nginx
prometheus.scrape "nginx" {
  targets    = [{"__address__" = "localhost:9113"}]
  forward_to = [prometheus.remote_write.mimir_1.receiver, prometheus.remote_write.mimir_2.receiver]
}

// Dual-write : envoi simultané aux 2 serveurs obs
prometheus.remote_write "mimir_1" {
  endpoint {
    url = "http://obs-server-1:9009/api/v1/push"
  }
}

prometheus.remote_write "mimir_2" {
  endpoint {
    url = "http://obs-server-2:9009/api/v1/push"
  }
}

// ══════════════════════════════════════
// LOGS
// ══════════════════════════════════════

local.file_match "app_logs" {
  path_targets = [
    {__path__ = "/var/log/nginx/access.log",  host = "app-srv-1", service = "nginx"},
    {__path__ = "/var/log/nginx/error.log",   host = "app-srv-1", service = "nginx"},
    {__path__ = "/var/log/spring-boot/*.log", host = "app-srv-1", service = "spring-boot"},
  ]
}

loki.source.file "logs" {
  targets    = local.file_match.app_logs.targets
  forward_to = [loki.write.obs1.receiver, loki.write.obs2.receiver]
}

// Dual-write logs aux 2 serveurs obs
loki.write "obs1" {
  endpoint {
    url = "http://obs-server-1:3100/loki/api/v1/push"
  }
}

loki.write "obs2" {
  endpoint {
    url = "http://obs-server-2:3100/loki/api/v1/push"
  }
}

// ══════════════════════════════════════
// TRACES (réception OTLP depuis le Java agent)
// ══════════════════════════════════════

otelcol.receiver.otlp "default" {
  grpc { endpoint = "0.0.0.0:4317" }
  http { endpoint = "0.0.0.0:4318" }

  output {
    traces = [otelcol.exporter.loadbalancing.default.input]
  }
}

// Load-balancing des traces entre les 2 serveurs obs
otelcol.exporter.loadbalancing "default" {
  protocol {
    otlp {
      client {
        endpoint = "noop"
      }
    }
  }
  resolver {
    static {
      hostnames = ["obs-server-1:4317", "obs-server-2:4317"]
    }
  }
}
```

> **Note** : adapter `host = "app-srv-1"` → `"app-srv-2"` sur le second serveur.

---

## Configuration Grafana Alloy — Serveurs PostgreSQL

Fichier `/etc/alloy/config.alloy` sur **PG Master** et **PG Slave** :

```hcl
// ══════════════════════════════════════
// METRICS
// ══════════════════════════════════════

prometheus.scrape "node" {
  targets    = [{"__address__" = "localhost:9100"}]
  forward_to = [prometheus.remote_write.mimir_1.receiver, prometheus.remote_write.mimir_2.receiver]
}

prometheus.scrape "postgres" {
  targets    = [{"__address__" = "localhost:9187"}]
  forward_to = [prometheus.remote_write.mimir_1.receiver, prometheus.remote_write.mimir_2.receiver]
}

// Dual-write : envoi simultané aux 2 serveurs obs
prometheus.remote_write "mimir_1" {
  endpoint {
    url = "http://obs-server-1:9009/api/v1/push"
  }
}

prometheus.remote_write "mimir_2" {
  endpoint {
    url = "http://obs-server-2:9009/api/v1/push"
  }
}

// ══════════════════════════════════════
// LOGS
// ══════════════════════════════════════

local.file_match "pg_logs" {
  path_targets = [
    {__path__ = "/var/log/postgresql/*.log", host = "pg-master", service = "postgresql"},
  ]
}

loki.source.file "pg" {
  targets    = local.file_match.pg_logs.targets
  forward_to = [loki.write.obs1.receiver, loki.write.obs2.receiver]
}

// Dual-write logs aux 2 serveurs obs
loki.write "obs1" {
  endpoint {
    url = "http://obs-server-1:3100/loki/api/v1/push"
  }
}

loki.write "obs2" {
  endpoint {
    url = "http://obs-server-2:3100/loki/api/v1/push"
  }
}
```

> **Note** : adapter `host = "pg-master"` → `"pg-slave"` sur le serveur esclave.

---

## Configuration serveurs d'observabilité (x2)

> **Note** : les configs ci-dessous sont identiques sur **obs-server-1** et **obs-server-2**, sauf `instance_addr` qui doit être l'IP locale du serveur.

### Loki — `/etc/loki/config.yaml`

```yaml
auth_enabled: false

server:
  http_listen_port: 3100

common:
  ring:
    instance_addr: <IP_LOCALE>   # adapter par serveur
    kvstore:
      store: memberlist
  replication_factor: 1
  path_prefix: /var/lib/loki

memberlist:
  join_members:
    - obs-server-1:7946
    - obs-server-2:7946

schema_config:
  configs:
    - from: "2024-01-01"
      store: tsdb
      object_store: filesystem
      schema: v13
      index:
        prefix: index_
        period: 24h

storage_config:
  filesystem:
    directory: /var/lib/loki/chunks
  tsdb_shipper:
    active_index_directory: /var/lib/loki/index
    cache_location: /var/lib/loki/cache

compactor:
  working_directory: /var/lib/loki/compactor
  retention_enabled: true
  compaction_interval: 10m

limits_config:
  retention_period: 30d
  max_query_series: 5000
  ingestion_rate_mb: 10
  ingestion_burst_size_mb: 20
```

### Mimir — `/etc/mimir/config.yaml`

```yaml
multitenancy_enabled: false

server:
  http_listen_port: 9009

common:
  storage:
    backend: filesystem
    filesystem:
      dir: /var/lib/mimir/data

memberlist:
  join_members:
    - obs-server-1:7946
    - obs-server-2:7946

ingester:
  ring:
    instance_addr: <IP_LOCALE>   # adapter par serveur
    kvstore:
      store: memberlist
    replication_factor: 1

blocks_storage:
  backend: filesystem
  filesystem:
    dir: /var/lib/mimir/blocks
  tsdb:
    dir: /var/lib/mimir/tsdb
    retention_period: 90d

compactor:
  data_dir: /var/lib/mimir/compactor
  compaction_interval: 30m
  ring:
    kvstore:
      store: memberlist

ruler_storage:
  backend: filesystem
  filesystem:
    dir: /var/lib/mimir/rules

ruler:
  ring:
    kvstore:
      store: memberlist

limits:
  max_global_series_per_user: 500000
  ingestion_rate: 10000
  ingestion_burst_size: 200000
```

### Tempo — `/etc/tempo/config.yaml`

```yaml
server:
  http_listen_port: 3200

memberlist:
  join_members:
    - obs-server-1:7946
    - obs-server-2:7946

distributor:
  receivers:
    otlp:
      protocols:
        grpc:
          endpoint: "0.0.0.0:4317"
        http:
          endpoint: "0.0.0.0:4318"
  ring:
    kvstore:
      store: memberlist

ingester:
  ring:
    instance_addr: <IP_LOCALE>   # adapter par serveur
    kvstore:
      store: memberlist
    replication_factor: 1

storage:
  trace:
    backend: local
    local:
      path: /var/lib/tempo/traces
    wal:
      path: /var/lib/tempo/wal
    block:
      bloom_filter_false_positive: 0.05

compactor:
  compaction:
    block_retention: 336h  # 14 jours
  ring:
    kvstore:
      store: memberlist

metrics_generator:
  registry:
    external_labels:
      source: tempo
  storage:
    path: /var/lib/tempo/generator/wal
    remote_write:
      - url: http://localhost:9009/api/v1/push
```

### Grafana — `/etc/grafana/provisioning/datasources/datasources.yaml`

> Chaque Grafana pointe vers ses backends **locaux**. En dual-write, chaque serveur obs possède une copie complète des données.

```yaml
apiVersion: 1

datasources:
  - name: Mimir
    type: prometheus
    access: proxy
    url: http://localhost:9009/prometheus
    isDefault: true
    jsonData:
      httpMethod: POST

  - name: Loki
    type: loki
    access: proxy
    url: http://localhost:3100
    jsonData:
      derivedFields:
        - name: TraceID
          datasourceUid: tempo
          matcherRegex: "traceID=(\\w+)"
          url: "$${__value.raw}"

  - name: Tempo
    type: tempo
    access: proxy
    url: http://localhost:3200
    uid: tempo
    jsonData:
      tracesToLogs:
        datasourceUid: loki
        filterByTraceID: true
      tracesToMetrics:
        datasourceUid: mimir
      serviceMap:
        datasourceUid: mimir
```

### Grafana HA — `/etc/grafana/grafana.ini` (extrait)

```ini
[database]
# Base partagée pour synchroniser dashboards, users, alertes entre les 2 Grafana
# Option 1 : pointer les 2 Grafana vers le PG Master existant
type = postgres
host = pg-master:5432
name = grafana
user = grafana
password = <GRAFANA_DB_PASSWORD>

[unified_alerting]
# HA des alertes — évite les doublons de notifications
enabled = true
ha_peers = obs-server-1:9094,obs-server-2:9094
ha_listen_address = 0.0.0.0:9094
ha_advertise_address = <IP_LOCALE>:9094
```

---

## Instrumentation Spring Boot

### Dépendances Maven

```xml
<!-- pom.xml -->
<dependencies>
    <!-- Expose l'endpoint /actuator/prometheus (HTTP) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>

    <!-- Registry Prometheus pour Micrometer -->
    <dependency>
        <groupId>io.micrometer</groupId>
        <artifactId>micrometer-registry-prometheus</artifactId>
    </dependency>
</dependencies>
```

> **Les 2 sont nécessaires** : `micrometer-registry-prometheus` configure le registry, `spring-boot-starter-actuator` expose l'endpoint HTTP `/actuator/prometheus` que Alloy scrappe.

### Configuration Actuator — `application.yml`

```yaml
management:
  endpoints:
    web:
      exposure:
        include: health, info, prometheus, metrics
  metrics:
    tags:
      application: ${spring.application.name}
    distribution:
      percentiles-histogram:
        http.server.requests: true
```

### Lancement avec l'agent OpenTelemetry

```bash
java -javaagent:/opt/opentelemetry-javaagent.jar \
     -Dotel.service.name=yas-api \
     -Dotel.exporter.otlp.endpoint=http://localhost:4317 \
     -Dotel.traces.exporter=otlp \
     -Dotel.metrics.exporter=none \
     -Dotel.logs.exporter=none \
     -jar app.jar
```

> Les métriques sont gérées par Micrometer/Actuator, les logs par fichier + Alloy.
> L'agent OTel ne s'occupe que des **traces**.

---

## Dimensionnement disque — Serveurs observabilité (x2)

> En dual-write, chaque serveur obs stocke une copie complète. Le dimensionnement est **par serveur**.

| Composant | Rétention | Estimation volume / serveur | Chemin               |
|-----------|-----------|---------------------------|----------------------|
| Loki      | 30 jours  | 10 – 30 Go               | `/var/lib/loki/`     |
| Mimir     | 90 jours  | 5 – 15 Go                | `/var/lib/mimir/`    |
| Tempo     | 14 jours  | 5 – 20 Go                | `/var/lib/tempo/`    |
| Grafana   | —         | < 1 Go                    | `/var/lib/grafana/`  |
| **Total / serveur** |  | **~50 – 70 Go**          |                      |
| **Total infra (x2)** | | **~100 – 140 Go**        |                      |

**Recommandation par serveur** : SSD de 200 Go minimum pour confort et marge de croissance.

Specs serveur recommandées (x2) : **4 vCPU, 16 Go RAM, 200 Go SSD** chacun.

---

## Stockage : pourquoi pas MinIO/S3

- MinIO est passé sous **licence AGPLv3** — contraintes de conformité.
- Pour cette taille d'infra (4 machines sources), le **filesystem local suffit largement**.
- Si besoin futur d'object storage : migrer vers **Garage** ou **SeaweedFS** (Apache 2.0), ou un bucket cloud. Le changement est une modification de config (`backend: s3` au lieu de `filesystem`), pas de migration applicative.

---

## Dashboards Grafana recommandés

Importer depuis [grafana.com/dashboards](https://grafana.com/grafana/dashboards/) :

| Dashboard                    | ID    | Usage                              |
|------------------------------|-------|------------------------------------|
| Node Exporter Full           | 1860  | CPU, RAM, disque, réseau par srv   |
| Nginx Exporter               | 12708 | Requêtes, status codes, latence    |
| Spring Boot Observability    | 17175 | JVM, HTTP, threads, GC             |
| PostgreSQL Database          | 9628  | Connexions, requêtes, réplication  |

---

## Alertes essentielles à configurer

```yaml
# /etc/mimir/rules/alerts.yaml
groups:
  - name: infra
    rules:
      - alert: HighCpuUsage
        expr: 100 - (avg by(instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 85
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "CPU > 85% sur {{ $labels.instance }}"

      - alert: DiskSpaceLow
        expr: node_filesystem_avail_bytes{mountpoint="/"} / node_filesystem_size_bytes{mountpoint="/"} < 0.15
        for: 10m
        labels:
          severity: critical
        annotations:
          summary: "Disque < 15% sur {{ $labels.instance }}"

      - alert: SpringBootDown
        expr: up{job="spring_boot"} == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "Spring Boot down sur {{ $labels.instance }}"

      - alert: PostgresReplicationLag
        expr: pg_replication_lag_seconds > 30
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Lag de réplication PG > 30s"

      - alert: NginxHighErrorRate
        expr: rate(nginx_http_requests_total{status=~"5.."}[5m]) / rate(nginx_http_requests_total[5m]) > 0.05
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Taux d'erreur 5xx Nginx > 5%"
```

---

## Checklist de déploiement

### Serveurs observabilité (obs-server-1 & obs-server-2)

- [ ] **Obs 1 & 2** : installer Grafana, Loki, Mimir, Tempo
- [ ] **Obs 1 & 2** : créer les répertoires `/var/lib/{loki,mimir,tempo,grafana}`
- [ ] **Obs 1 & 2** : déployer les fichiers de config ci-dessus (adapter `<IP_LOCALE>`)
- [ ] **Obs 1 & 2** : vérifier la connectivité memberlist (port 7946) entre les 2 serveurs
- [ ] **Obs 1 & 2** : provisionner les datasources Grafana
- [ ] **Obs 1 & 2** : configurer Grafana HA (base PG partagée + unified_alerting)
- [ ] **Réseau** : configurer VIP ou DNS round-robin devant les 2 Grafana (:3000)

### Serveurs applicatifs

- [ ] **App Srv 1 & 2** : installer node_exporter, nginx-prometheus-exporter
- [ ] **App Srv 1 & 2** : installer et configurer Grafana Alloy (dual-write obs-1 + obs-2)
- [ ] **App Srv 1 & 2** : ajouter micrometer-registry-prometheus au pom.xml
- [ ] **App Srv 1 & 2** : lancer Spring Boot avec l'agent OpenTelemetry

### Serveurs PostgreSQL

- [ ] **PG Master & Slave** : installer node_exporter, postgres_exporter
- [ ] **PG Master & Slave** : installer et configurer Grafana Alloy (dual-write obs-1 + obs-2)
- [ ] **PG Master** : créer la base `grafana` pour le Grafana HA

### Validation

- [ ] **Grafana** : importer les dashboards (IDs 1860, 12708, 17175, 9628) sur un des 2 serveurs (synchronisé via PG)
- [ ] **Grafana** : configurer les règles d'alerte
- [ ] **Grafana** : configurer le canal de notification (email, Slack, etc.)
- [ ] **HA** : couper obs-server-1 et vérifier que obs-server-2 continue de recevoir et afficher
- [ ] **HA** : couper obs-server-2 et vérifier l'inverse
- [ ] **Validation** : vérifier la corrélation logs → traces → métriques sur les 2 serveurs
