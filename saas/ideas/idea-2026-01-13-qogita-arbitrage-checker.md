# Qogita Arbitrage Checker

**Date**: 2026-01-13
**Status**: Idea
**Category**: TBD

## Problem Statement

Amazon arbitrage sellers face three major pain points:

1. **Time-consuming research** - Manual product research across Qogita wholesale marketplace and Amazon takes too long
2. **Complex profit calculation** - Hard to accurately calculate margins when factoring in Amazon fees, FBA costs, shipping, and wholesale prices
3. **Data fragmentation** - Information is scattered across multiple tools and sites with no unified view

Sellers need a fast, simple way to check if a Qogita product is profitable for Amazon resale.

## Target Audience

- **Amazon FBA sellers** - Individual sellers doing online arbitrage on Amazon FBA
- **Reseller businesses** - Small businesses focused on wholesale arbitrage
- **Side hustlers** - People looking for profitable products as a side income

Ideal customer: Someone already sourcing or considering sourcing from Qogita for Amazon arbitrage who wants to validate product profitability quickly.

## Solution Overview

A simple, Google-like search interface where users can:

1. Enter a Qogita product (URL, name, or EAN/UPC)
2. Instantly see profitability metrics:
   - Qogita wholesale price
   - Current Amazon selling price
   - Amazon fees (referral, FBA, etc.)
   - Estimated profit margin
   - ROI percentage
   - Sales rank/demand indicators

**Core value proposition**: One search = instant profitability answer. No spreadsheets, no manual calculations, no tab-switching.

## Existing Asset

Already have an app that scrapes Qogita products and tracks daily KPIs on Amazon. This provides:
- Product data pipeline
- Amazon metrics collection
- Foundation to build the SaaS on

## Tech Stack

**Suggested**:
- Backend: Go (existing scraper infrastructure)
- Frontend: Angular (simple, fast SPA)
- Cloud: Azure (App Service, Functions, SQL Database, Storage)
- Data: Existing scraper data + real-time lookups

**Reasoning**: Leverages existing Go scraper code, Angular keeps frontend simple, Azure aligns with your stack expertise.

## Revenue Model

**Subscription** - Tiered pricing based on features:
- Basic: $19/month - X searches/day, basic profit calculator
- Pro: $39/month - Unlimited searches, historical data
- Business: $79/month - Bulk search, price alerts, API access

## Key Features (MVP vs Future)

### MVP (Keep it simple)
- Single product search bar
- Instant profitability display
- Clean, fast UI

### Future Enhancements
- Price alerts (notify when products become profitable)
- Bulk search (CSV upload for multiple products)
- Historical data/trends

## Initial Thoughts

- **Competitive advantage**: You already have the data pipeline built
- **Simplicity is key**: Google-style single search bar, instant results
- **Market validation**: Check if arbitrage sellers actually use Qogita at scale
- **Moat consideration**: How hard is the scraping to replicate?

## Next Steps

- [ ] Run `/saas:analyze-ideas` to evaluate complexity and priority
- [ ] Validate market size (how many active Qogita arbitrage sellers exist?)
- [ ] Create detailed spec with `/saas:create-spec` if promising
- [ ] Define MVP scope precisely
