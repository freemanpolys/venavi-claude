# MCP Agent Toolkit - Universal MCP Server for AI Coding Agents

**Date**: 2026-01-13
**Status**: Idea
**Category**: Developer Tools / AI Infrastructure

## Problem Statement

AI coding agents (Claude Code, Cursor, Windsurf, etc.) suffer from three critical inefficiencies:

1. **Slow codebase search**: Agents waste tokens and time searching through files without proper indexing. Every search is a full scan, leading to slow responses and wasted API costs.

2. **Tool context bloat**: Loading all available MCP tools into the LLM context wastes valuable tokens and confuses the model. Agents don't need 50 tools loaded when they only use 5 for a given task.

3. **Poor web research**: Current web tools are unreliable, return too much noise, or fail to extract relevant content. Agents struggle to research documentation, APIs, and solutions effectively.

## Target Audience

All developers using AI coding agents:
- **Individual developers**: Solo devs using Claude Code, Cursor, or similar tools who want faster, more efficient coding sessions
- **Dev teams at startups**: Small teams needing shared indexing and consistent tooling
- **Enterprise teams**: Organizations requiring reliable, performant AI tooling infrastructure

## Solution Overview

A unified MCP server with 3 core capabilities:

### 1. Codebase Indexer
- Pre-index codebase for instant file/symbol search
- **Full-text search with BM25 (Open Source)** - uses `pg_textsearch` for relevance-ranked results
- Semantic search using embeddings (find by meaning, not just keywords) - premium
- Incremental updates on file changes
- Language-aware parsing (Go, TypeScript, Python, etc.)

### 2. Tools Aggregator
- Dynamic tool loading based on task context
- Only expose relevant tools to reduce context usage
- Tool routing: determine which tools are needed for a request
- Compatible with any MCP tool ecosystem

### 3. Web Search & Read (Premium)
- **Google Search API** or **Bing Search API (Azure)** for reliable results
- Intelligent content extraction (no noise)
- Documentation-aware parsing
- Rate limiting and caching to reduce costs

## Competitive Analysis

| Feature | Gemini Design MCP | Mixedbread | MCP Agent Toolkit |
|---------|-------------------|------------|-------------------|
| Focus | Frontend code gen | Semantic search API | Multi-purpose AI agent support |
| Indexing | No | Yes (Stores) | Yes (codebase-focused) |
| Tool aggregation | No | No | Yes |
| Web search | No | No | Yes |
| Local-first | Yes | No (cloud) | Hybrid |
| Open Source | No | No | **Yes (full-text search)** |
| Pricing | 10K tokens free | Usage-based | Open-core + premium |

**Key differentiators**:
1. **Open-core model** - Free full-text search drives adoption, premium features monetize
2. All-in-one solution combining indexing + tools + web in one package
3. Developers can self-host the core forever, no vendor lock-in

## Tech Stack

**Open Source (Full-Text Search)**:
- Backend: **Go** (fast, single binary, great for CLI/server hybrid)
- Database: **PostgreSQL** (user's own instance)
- Search: **[pg_textsearch](https://github.com/timescale/pg_textsearch)** (Timescale) - BM25 ranking
  - Simple syntax: `ORDER BY content <@> 'search terms'`
  - Configurable BM25 parameters (k1, b)
  - Multi-language support (english, french, german, etc.)
  - Production-ready performance
- MCP Protocol: Standard MCP implementation in Go

**Premium Features**:
- Semantic search: Vector embeddings via Azure AI Search or Qdrant
- Web search: **Google Custom Search API** or **Azure Bing Search API**
- Web read: Colly or custom HTTP client with content extraction
- Cloud: **Azure** (App Service, Cosmos DB, Azure AI Search)

**Reasoning**:
- Go for fast, portable single binary
- PostgreSQL for full-text search is battle-tested and developers already run it
- `pg_textsearch` brings modern BM25 ranking (same algorithm as Elasticsearch) to Postgres
- No external dependencies for the open source version - just connect to your existing Postgres
- Web search APIs (Google/Bing) have costs, so naturally fits as a premium feature

## Revenue Model

**Open-Core + Premium tiers**:

### Open Source (Free Forever)
- Full-text search indexer using **your own PostgreSQL**
- Basic MCP server functionality
- Self-hosted, no limits, no cloud dependency
- Run locally with your existing Postgres instance

### Premium Features (Paid)
| Tier | Price | Features |
|------|-------|----------|
| Pro | $19/mo | Semantic search (embeddings), web search API, cloud sync |
| Team | $49/mo/seat | Shared indexes, team management, SSO, tools aggregator |
| Enterprise | Custom | Self-hosted premium, SLA, dedicated support |

**Strategy**: Open-source the full-text search to drive adoption. Monetize semantic search, web features, and team collaboration.

## Initial Thoughts

- **Open-core strategy**: Full-text search is the hook - give it away to build community and adoption. Once developers depend on it, upsell semantic search and team features.
- **Hybrid approach**: Local indexing runs on developer machine for speed and privacy. Web search and optional cloud sync use hosted API.
- Could integrate with existing embedding providers (OpenAI, Mixedbread, Cohere) or use local models
- MCP protocol is still evolving - need to stay current with spec changes
- Opportunity to become the "default" MCP server that ships with AI coding tools
- Open source builds trust with developers who are wary of vendor lock-in

## References

**Competitors**:
- [Gemini Design MCP](https://gemini-design-mcp.com/docs) - Premium frontend generation, 10K free tokens, simple install
- [Mixedbread](https://www.mixedbread.com/docs) - Search API with Stores, MCP server for AI assistants

**Tech**:
- [pg_textsearch](https://github.com/timescale/pg_textsearch) - Timescale's BM25 extension for Postgres (v0.4.0-dev, production-ready query performance)
- [Google Custom Search API](https://developers.google.com/custom-search) - Programmable search engine
- [Azure Bing Search API](https://www.microsoft.com/en-us/bing/apis/bing-web-search-api) - Web search via Azure Cognitive Services

## Next Steps

- [ ] Run `/saas:analyze-ideas` to evaluate complexity and priority
- [ ] Research existing codebase indexing solutions (tree-sitter, language servers)
- [ ] Prototype the indexer component in Go
- [ ] Create detailed spec with `/saas:create-spec` if promising
