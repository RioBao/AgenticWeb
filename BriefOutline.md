## TL;DR
A public, weekly MCP Ecosystem Map that combines editorial insight with transparent data to become *the* reference point for understanding MCP adoption, momentum, and gaps.

---

## Problem Statement
The MCP ecosystem is growing quickly, but information is fragmented across registries, platforms, and repos. Developers and platform teams lack a **neutral, credible, and repeatable** way to understand:
- Which MCPs matter *right now*
- How the ecosystem is evolving week to week
- Where real usage differs from hype

Without this, decision‑making is noisy and trust is low.

---

## Target Audience
**Primary**
- MCP developers & maintainers deciding what to build or support
- AI platform & registry teams tracking ecosystem health

**Secondary**
- Researchers & analysts studying agent ecosystems
- Power users evaluating MCP capabilities

---

## Core Outputs
### 1) Weekly MCP Ecosystem Report (Primary)
- Public, shareable, and linkable
- Published on a strict weekly cadence
- Opinionated, narrative‑driven analysis backed by data

### 2) MCP Analytics Dashboard (Secondary)
- Deep data exploration and validation
- Historical views and filtering
- Source of truth behind the weekly report

---

## Landing Page Strategy

The landing page should answer three questions in under 10 seconds:
1) *What is this?*
2) *Why should I trust it?*
3) *Why should I come back next week?*

The homepage is not the full report — it is a **curated, dynamic front door** into the ecosystem.

---

## Homepage Structure (Refined)

### 1. Hero Section — “What’s Happening This Week”
**Purpose:** Immediate relevance + freshness

- Headline: *“This Week in the MCP Ecosystem”*
- Subhead: *A neutral, data-driven view of what’s gaining traction, what’s fading, and what it means.*
- Metadata row: Week #, publish date, data sources count

**Featured Trending MCPs (Primary Hook)**
- 3–5 MCPs surfaced algorithmically
- Each card shows:
  - MCP name + short description
  - Trend signal (↑ usage %, ↑ rank, new entrant)
  - Why it’s interesting (1 sentence, editorial)

This is the main repeat-visit driver.

---

### 2. Ecosystem Pulse — One-Glance Metrics
**Purpose:** Establish credibility quickly

A tight metrics strip:
- Total MCPs tracked
- New MCPs this week
- Active MCPs (% with usage)
- Registries covered

Numbers first. No fluff.

---

### 3. Weekly Insight Highlights
**Purpose:** Show thinking, not just data

- 2–3 short insights pulled from the weekly report
- Written like analyst notes, not blog content
- Each insight answers: *“Why should a builder or platform care?”*

Example:
> “Usage is consolidating faster than registry growth — top 10 MCPs now account for XX% of observed activity.”

---

### 4. Trending vs Established MCPs
**Purpose:** Contrast momentum with incumbency

Two columns:
- **Trending Now** — fastest movers week-over-week
- **Established Leaders** — sustained top-tier MCPs

This prevents hype while still highlighting novelty.

---

### 5. Coverage & Transparency Block
**Purpose:** Trust and defensibility

- Logos of data sources
- MCP counts per source
- Link: *“Methodology & data →”*

Make it obvious this isn’t vibes-based.

---

### 6. Call to Action
**Purpose:** Deepen engagement

- Primary CTA: *“Read the full weekly report →”*
- Secondary CTA: *“Explore the analytics dashboard →”*

No newsletter popups. Let the work speak.

---

## How Trending MCPs Should Work (Important)

**Definition (Example Signals):**
- Largest week-over-week usage delta
- Rank velocity (not absolute rank)
- New MCPs crossing minimum activity thresholds

**Editorial Rule:**
- Every featured MCP must include *why* it’s trending
- No auto-generated hype language

This keeps the page fresh *and* intellectually honest.

---

### Analytics Dashboard Page
- Full MCP table (sortable)
- Filters: source, tier, technology, activity
- Technology & capability distribution
- Composite Index (CI) rankings
- Historical trend comparisons
- CSV / data export

---

## Key Features (MVP)
- Clear, published tier definitions (T1–T4)
- Usage‑weighted rankings (not just presence)
- Week‑over‑week diffs surfaced by default
- Full source transparency and attribution
- Visual‑first charts optimized for scanning

---

## Data Sources (Initial)
- Official MCP Registry
- ai.smithery
- glama
- Anthropic MCPs
- OpenAI MCPs

---

## Design Principles
- Editorial, research‑first tone
- Neutral and non‑promotional language
- Numbers over adjectives
- Clear hierarchy and whitespace
- Charts explain themselves at a glance

---

## Technical Approach
- Static site (GitHub Pages)
- Versioned weekly reports via Git commits
- Simple, reliable charting (Chart.js / Plotly)
- Deterministic data pipeline for reproducibility

---

## Milestones & Sequencing
- Initial Snapshot: XX weeks
- Visual & Tier Refinement: XX weeks
- Historical Comparisons: XX weeks
- Platform Data Partnerships: Later

---

## Success Signals
- Consistent repeat readership
- Organic shares by MCP developers
- Citations by platforms or researchers
- Inbound requests to reference or reuse data

---

## Explicit Non‑Goals
- Selling MCP tools or platforms
- Ranking based on subjective opinions alone
- Real‑time dashboards (weekly cadence only)
- Marketing or growth hacks

