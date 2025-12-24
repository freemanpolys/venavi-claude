# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository purpose

This repo is primarily a **knowledge and planning workspace**, not a traditional application codebase. You use it to:
- Organize your daily life, tasks, and routines
- Capture and refine SaaS ideas (backed by Go, Angular, Azure)
- Plan and track personal and professional projects
- Draft and store thoughts on various topics
- Prepare content and processes for YouTube videos and newsletters

You will write about Go, Angular, and Azure here (what you learned, what you built, what you are thinking about) but **actual application source code will not live in this repo**. The core of this repository is **thinking, planning, and knowledge management** that can later be turned into content.

## High-level structure (proposed)

This repo is organized around life, business, and content, not around a single app. A Claude instance should expect folders similar to these (names can be adjusted to your taste):

```text
.
├─ .claude/                  # Optional: settings for Claude Code
├─ braindumps/               # Raw ideas, unstructured thoughts, thinking about Go/Angular/Azure
├─ business/                 # Business strategy, offers, audience, positioning, pricing
├─ daily-brief/              # Short daily snapshots / dashboards
├─ daily-journal/            # Longer daily entries about what you did and learned
├─ journal/                  # General journaling if you want it separate from daily-journal
├─ metrics/                  # Dashboards, KPIs (YouTube, newsletter, SaaS, personal)
├─ my-other-sites/           # Notes about other websites/projects you run
├─ newsletter/
│   ├─ drafts/               # newsletter-YYYY-MM-DD.md files
│   ├─ Newsletter Links.md   # Links to possibly include in future issues
│   └─ weekly-dashboards/    # Weekly newsletter performance / content dashboards
├─ youtube/
│   ├─ ideas/                # One file per video idea
│   ├─ scripts/              # Full scripts or detailed outlines
│   └─ dashboards/           # Analytics notes, experiments, growth plans
└─ saas/
    ├─ ideas/                # SaaS product ideas and problem statements
    ├─ specs/                # More detailed specs and architecture thinking
    └─ experiments/          # Notes from prototypes / experiments (no source code)
```

### How Claude should use this structure

- Prefer **editing existing files** instead of creating new ones unless you are clearly starting a new idea, day, or project.
- When in doubt about where something belongs:
  - Use `braindumps/` for rough, early thoughts.
  - Use `daily-journal/` or `daily-brief/` to log what you did today.
  - Use `saas/ideas/` for new SaaS ideas and `saas/specs/` when the idea becomes more detailed.
  - Use `newsletter/drafts/` for any newsletter drafts and `youtube/ideas/` or `youtube/scripts/` for video-related work.

### How Claude should use this structure

- Prefer **editing existing files** instead of creating new ones unless the structure clearly calls for a new file (e.g., a new project under `2-projects/saas/` or a new day under `1-daily/2025/`).
- Keep the structure **lightweight**: don’t over-nest folders or introduce complex templates unless you ask.
- When in doubt, default to placing new planning documents in:
  - `0-inbox/` for rough thoughts
  - `2-projects/` for anything that is clearly a project with a goal

## Working with content (not code)

Most of the work in this repo is text: markdown notes, plans, and documents. When modifying or creating files:

- Keep notes **concise and practical**. Focus on decisions, next steps, and key insights.
- Use simple markdown (headings, lists, checkboxes) rather than complex formatting unless you ask otherwise.
- When refactoring notes, avoid changing the meaning; preserve your original intent and voice.

### Daily notes

If there is a `1-daily/` structure:
- Append to today’s file instead of creating many tiny files for the same day.
- Group content by sections, such as:
  - `## Today` – what happened
  - `## Focus` – what you’re focusing on
  - `## Ideas` – new things that appeared today

### Projects

In `2-projects/`:
- Each project folder can have a `README.md` (or `index.md`) describing:
  - Goal
  - Why it matters
  - Current status
  - Next actions (checkbox list)
- Claude should help keep these up to date when you change direction.

## SaaS development orientation (Go, Angular, Azure)

This repo is for **thinking about and planning** SaaS, not necessarily hosting all source code. When helping with SaaS-related content here, Claude should:

- Capture **architecture ideas** for Go backends (APIs, services, domain models) and Angular frontends (modules, components, state) as markdown diagrams, outlines, or specs.
- Help you think through **Azure usage** (e.g., which services to use and why) at a planning/spec level.
- Separate **specs and notes** from actual application code. For example:
  - Specs/notes in `2-projects/saas/idea-name/`
  - Real code can live in a separate repo or a `code/` subfolder if you decide to add it later.

If real Go/Angular code is added here in the future, Claude should:
- Derive actual build/test commands from `go.mod`, `package.json`, or other config files instead of inventing them.
- Document those commands in an updated version of this file under a new section like `## Development commands`.

## YouTube and newsletter workflows

For content work, use this repo to store **processes, outlines, and drafts**.

Suggested conventions (only apply if matching folders/files exist):

- `2-projects/content/youtube/`
  - One folder per video idea with:
    - `idea.md` – problem, audience, key message
    - `script.md` – detailed script or bullet outline
    - `checklist.md` – steps from recording to publishing (or use shared playbook)

- `2-projects/content/newsletter/`
  - One folder per issue or per series
  - Files for outline, draft, and final version

The `playbooks/youtube/` and `playbooks/newsletter/` folders can store reusable checklists and templates that new videos or newsletters can copy from.

## How future Claude instances should behave here

When starting a new task in this repo:

1. **Identify context**
   - Look for relevant folders under `1-daily/`, `2-projects/`, `3-areas/`, or `playbooks/`.
   - If nothing exists yet, propose a simple location based on the structure above and confirm with the user when needed.

2. **Prefer evolution over reinvention**
   - Update existing project docs and daily notes rather than creating many disconnected files.
   - When reorganizing, clearly explain what moved where.

3. **Don’t assume build/lint/test commands**
   - Until real application code and config files exist, treat this repo as note-centric.
   - If code is later added, derive commands from the actual files and then update this CLAUDE.md accordingly.

4. **Keep it lightweight**
   - Avoid heavy processes, complex templates, or rigid structures unless the user explicitly asks.
   - The goal is to **support thinking and planning**, not to enforce a strict system.
