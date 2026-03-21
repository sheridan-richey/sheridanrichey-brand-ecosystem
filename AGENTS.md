# AGENTS.md — Sheridan Richey Brand Ecosystem

This file orients AI assistants (and humans) on what this repo is and how to work in it. Prefer following the rules and docs referenced here over inferring from the codebase alone.

---

## Project identity

- **What it is**: Personal brand ecosystem for Sheridan Richey — website (sheridanrichey.com), content hub, and professional presence.
- **Audience**: "Alex, the Awakened Technologist" — mid-career professionals seeking purpose-driven transformation.
- **Conversion goals**: Grow the email list for **The ZAG Navigator** newsletter and capture leads for the **Prompt Architect's Toolkit** (and other lead magnets).
- **Framework**: All content and positioning tie back to the **ZAG Matrix** (ZEN, ACT, GEM).

---

## Tech stack

- **Site**: Next.js 14 (App Router), TypeScript, Tailwind CSS, React 18.
- **Content**: Markdown/MDX in `content/blog/` (zen, act, gem subdirs), parsed at build time via custom `website/lib/posts.ts` (gray-matter + fs). No Contentlayer.
- **Hosting**: Vercel. Production deploys use GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)); `website/vercel.json` disables Vercel’s native Git auto-deploy. E2E runs on push/PR to `main` via [`.github/workflows/playwright.yml`](.github/workflows/playwright.yml).
- **Tests**: Playwright E2E in `tests/e2e/`; default base URL is local so that `npm run dev` + `npm run test:e2e` validates the app under development.

---

## Content home

- **Blog**: Single source of truth is `content/blog/` at repo root. Subdirs `zen/`, `act/`, `gem/` map to ZAG pillars. Add or edit `.md`/`.mdx` there; the site builds from this directory.
- **Images**: Use `website/public/images/blog/` (or `website/public/images/blog/<post-slug>/`). Reference in markdown as `/images/blog/...`.
- **Rules and copy**: [RULES.md](RULES.md) and [.cursor/rules/](.cursor/rules/) define brand, PARA, and technical standards.

---

## How to work in this repo

1. **Code and content**: Follow [RULES.md](RULES.md) and the Cursor rules in [.cursor/rules/](.cursor/rules/). For content, use [content-strategy](.cursor/rules/content-strategy.mdc) and ZAG Matrix alignment. For Next.js and components, use [nextjs-architecture](.cursor/rules/nextjs-architecture.mdc) and [core-standards](.cursor/rules/core-standards.mdc).
2. **Organization**: Repo uses PARA at the root (1P = Projects, 2A = Areas, 3R = Resources, 4A = Archives). See [para-system](.cursor/rules/para-system.mdc).
3. **Decisions and context**: For the current refinement plan and captured decisions, see [1P/brand-dial-in/20260301-context-and-decisions.md](1P/brand-dial-in/20260301-context-and-decisions.md).

---

## Current priorities

- **Ship**: Commit, push to `main`, confirm GitHub Actions (Playwright + Deploy) and Vercel secrets. See [`1P/brand-dial-in/PUBLISH_CHECKLIST.md`](1P/brand-dial-in/PUBLISH_CHECKLIST.md).
- **Lead magnet**: Add `website/public/downloads/prompt-architects-toolkit.pdf` when ready (see `website/public/downloads/README.md`). `.gitignore` allows PDFs in that folder only.
- **Content**: New posts go in `content/blog/`; env vars for production are documented in `website/.env.example` (Beehiiv + Resend).
- **Ongoing**: Blog cadence, newsletter, and ZAG-aligned content per [`.cursor/rules/`](.cursor/rules/).

---

*Update this section when priorities shift. Historical decisions: [`1P/brand-dial-in/20260301-context-and-decisions.md`](1P/brand-dial-in/20260301-context-and-decisions.md).*
