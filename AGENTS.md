# AGENTS.md — Sheridan Richey Brand Ecosystem

This file orients AI assistants (and humans) on what this repo is and how to work in it. Prefer following the rules and docs referenced here over inferring from the codebase alone.

---

## Documentation hierarchy (source of truth)

When guidance conflicts, the higher-ranked source wins:

1. **This file (`AGENTS.md`)** — Repo operating map: identity, stack, where truth lives, priorities.
2. **[`.cursor/rules/*.mdc`](.cursor/rules/)** — Enforceable standards (code, Next.js, content, testing, workflow, PARA placement).
3. **App onboarding** — [README.md](README.md) (repo quick start), [website/README.md](website/README.md) (Next.js app), [website/BLOG_SYSTEM_README.md](website/BLOG_SYSTEM_README.md) (blog pipeline detail).
4. **`2A/` and `3R/`** — Supplementary reference (areas, templates, setup notes). Must not override rules; if something duplicates a rule, the rule wins.
5. **`1P/`** — Strategic initiative context and decisions (not a second standards layer).

**Deprecated:** [RULES.md](RULES.md) is a stub pointing here and to `.cursor/rules/`. Do not treat it as authoritative.

**Active work:** Use [GitHub Issues](https://github.com/sheridan-richey/sheridanrichey-brand-ecosystem/issues) for tasks, bugs, and content work items—not markdown trackers in `1P/`.

**Skills:** Repeatable procedures live under `.cursor/skills/` (e.g. creating a blog post). Rules define *what* must be true; skills describe *how* to execute a workflow.

---

## Doc maintenance triggers

Update `AGENTS.md` and/or the relevant `.mdc` rule when you:

- Change the content pipeline, app routing, or major dependencies (e.g. Next.js version).
- Change deploy/CI behavior (GitHub Actions, Vercel, env vars).
- Add or remove a lead magnet, newsletter integration, or conversion path.
- Introduce a new doc surface that agents should treat as canonical.

---

## Project identity

- **What it is**: Personal brand ecosystem for Sheridan Richey — website (sheridanrichey.com), content hub, and professional presence.
- **Audience**: "Alex, the Awakened Technologist" — mid-career professionals seeking purpose-driven transformation.
- **Conversion goals**: Grow the email list for **The ZAG Navigator** newsletter and capture leads for the **Prompt Architect's Toolkit** (and other lead magnets).
- **Framework**: All content and positioning tie back to the **ZAG Matrix** (ZEN, ACT, GEM).

---

## Tech stack

- **Site**: Next.js 14 (App Router), TypeScript, Tailwind CSS, React 18.
- **Content**: Markdown/MDX in `content/blog/` (zen, act, gem, zag subdirs), parsed at build time via custom [`website/lib/posts.ts`](website/lib/posts.ts) (gray-matter + fs). No Contentlayer.
- **Hosting**: Vercel. Production deploys use GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)); `website/vercel.json` disables Vercel’s native Git auto-deploy. E2E runs on push/PR to `main` via [`.github/workflows/playwright.yml`](.github/workflows/playwright.yml).
- **Tests**: Playwright E2E in `tests/e2e/`; [`playwright.config.js`](playwright.config.js) targets a local base URL and starts the Next dev server on port **3100** by default (`E2E_PORT`) so it does not conflict with a manual `next dev` on port 3000.

---

## Content home

- **Blog**: Single source of truth is `content/blog/` at repo root. Subdirs `zen/`, `act/`, `gem/` (and `zag/`) map to categories. Add or edit `.md`/`.mdx` there; the site builds from this directory.
- **Images**: Use `website/public/images/blog/` (or `website/public/images/blog/<post-slug>/`). Reference in markdown as `/images/blog/...`.
- **Standards**: Brand and technical standards are in [`.cursor/rules/`](.cursor/rules/) — see [content-strategy](.cursor/rules/content-strategy.mdc), [nextjs-architecture](.cursor/rules/nextjs-architecture.mdc), [core-standards](.cursor/rules/core-standards.mdc), [agentic-workflows](.cursor/rules/agentic-workflows.mdc), [para-system](.cursor/rules/para-system.mdc).

---

## Other doc locations (reference, not rules)

These are intentionally outside PARA; link here instead of duplicating:

- **[`professional-roles/`](professional-roles/)** — Role descriptions (OptConnect, Bring It Forward, Henry Schein One).
- **[`github-profile/`](github-profile/)** — GitHub profile README and setup notes for the profile repo.
- **[`templates/bio-templates/`](templates/bio-templates/)** — Bio copy templates (also see `3R/templates/`).

---

## How to work in this repo

1. **Code and content**: Follow [`.cursor/rules/`](.cursor/rules/). For content, use [content-strategy](.cursor/rules/content-strategy.mdc). For Next.js and components, use [nextjs-architecture](.cursor/rules/nextjs-architecture.mdc) and [core-standards](.cursor/rules/core-standards.mdc). For planning and issues, use [agentic-workflows](.cursor/rules/agentic-workflows.mdc).
   - **Delivery policy:** plan and implement in a feature branch, pass local quality gates, merge by PR with green CI, then verify production deployment/smoke checks (see [agentic-workflows](.cursor/rules/agentic-workflows.mdc) and [testing-deployment](.cursor/rules/testing-deployment.mdc)).
2. **Organization**: Durable knowledge uses PARA at the root (`2A`, `3R`, selective `1P`, optional `4A`). See [para-system](.cursor/rules/para-system.mdc). **Work tracking** belongs in GitHub Issues, not duplicate trackers in markdown.
3. **Decisions and context**: For captured decisions, see [`1P/brand-dial-in/20260301-context-and-decisions.md`](1P/brand-dial-in/20260301-context-and-decisions.md).

---

## Current priorities

- **Ship**: Commit to a feature branch, merge to `main` via PR, then confirm GitHub Actions (Playwright + Deploy) and Vercel secrets. See [`1P/brand-dial-in/PUBLISH_CHECKLIST.md`](1P/brand-dial-in/PUBLISH_CHECKLIST.md).
- **Lead magnet**: Add `website/public/downloads/prompt-architects-toolkit.pdf` when ready (see `website/public/downloads/README.md`). `.gitignore` allows PDFs in that folder only.
- **Content**: New posts go in `content/blog/`; env vars for production are documented in `website/.env.example` (Beehiiv + Resend).
- **Ongoing**: Blog cadence, newsletter, and ZAG-aligned content per [`.cursor/rules/`](.cursor/rules/).

---

*Update the priorities section when it shifts. Historical decisions: [`1P/brand-dial-in/20260301-context-and-decisions.md`](1P/brand-dial-in/20260301-context-and-decisions.md).*
