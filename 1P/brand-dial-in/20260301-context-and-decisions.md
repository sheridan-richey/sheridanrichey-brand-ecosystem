# Brand Dial-In: Context and Decisions (2026-03-01)

This document captures the decisions from the full project review session so they survive the repo move and inform all subsequent phases. Update this file as phases complete or new decisions are made.

---

## Tech

- **Replace Contentlayer** with a custom content layer: `website/lib/posts.ts` using Node `fs` + `gray-matter`. No build-step content generation; read from files at build/request time.
- **Single content home**: `content/blog/` at repo root (with `zen/`, `act/`, `gem/` subdirs). All live blog posts live here; remove `website/posts/` and the sync script after migration.
- **Upgrade Next.js** from 13.5 to 14.x. Remove Contentlayer at upgrade time; use a temporary posts stub until the real `lib/posts` is implemented.
- **Blog images**: Store in `website/public/images/blog/` (or per-post `website/public/images/blog/<post-slug>/`). Reference in markdown as `/images/blog/...`. No colocated assets in `content/blog` for now.
- **Blog categories**: Restrict to ZEN, ACT, GEM, ZAG, Featured. Drop Leadership, Entrepreneurship, Wellness from the schema.

---

## Process

- **Move repo out of OneDrive** to a non-synced path (e.g. `C:\Dev\SLR.com`) to avoid Git/sync conflicts. Clone fresh after Phase 0 docs are committed and pushed.
- **Keep repo public**; treat the repo as part of the transparent brand story.
- **Keep PARA in the repo** for now (1P, 2A, 3R, 4A). Revisit if project/doc volume grows or contributors need a simpler code-only view.

---

## Tests

- **Default E2E to local**: Playwright `baseURL` should default to `http://localhost:3000` so `npm run dev` + `npm run test:e2e` validates the app under development. Use `BASE_URL=https://sheridanrichey.com` only when intentionally testing production.
- **Fix brittle selectors** before the upgrade: nav link count (at least N, not exactly 7), newsletter form fields (`name` not `first_name`; `role`), and remove or rewrite the blog "categories and filtering" test to match actual behavior.
- **Add content-pipeline tests** after the custom `lib/posts` is live: e.g. blog index has at least one post; known slug (e.g. `career-transition-optconnect`) loads with expected title.
- **CI**: Update the Playwright workflow to build and run the branch under test, then run E2E against that build (not production). Ensures "tests pass" means "this branch works."

---

## Style

- **Single token set**: Use only brand tokens from `website/tailwind.config.js` — phantom, graphite, smoke, cloud, light-bg, primary (teal). No `slate-*`, `gray-*`, `secondary-*`, `accent-*`, or hardcoded hex in page/component code.
- **Align all pages**: About, blog post template, and ZAG pillar pages (zen, act, gem) currently use a different palette; bring them in line with the same tokens and `font-manrope`.
- **Font loading**: Remove duplicate Manrope import from `globals.css`; rely on `next/font` in `layout.tsx` only.

---

## Content and Structure

- **Remove duplicate community page**: One URL for the Slack community (e.g. `/community`). Remove `/zag-collective` and add a redirect to `/community`.
- **Remove test/dev artifacts**: Delete `website/app/test-deployment/page.tsx`, `website/app/page-backup.tsx`, `website/components/NewsletterTest.tsx`.
- **Simplify footer**: Each destination once (no duplicate Newsletter/Speaking/Resources links). Suggested groups: Content (Blog, Resources, Newsletter); About (About, Contact, Speaking); ZAG Matrix (Framework); Connect (LinkedIn).
- **Newsletter naming**: Use "The ZAG Navigator" consistently (H1, CTAs). Remove or replace fake testimonials and "500+ subscribers" unless backed by data.
- **ZAG Matrix page**: Remove the "Resources to Support Your Journey" three-card section (redundant with nav). Keep "How It Works" and final CTA.
- **Resources page**: Remove dead links (ZAG Assessment, Weekly Planner, Executive Checklist) until those routes exist. Keep only the Prompt Architect's Toolkit entry and build its gated download in the lead-magnet phase.
- **Optional**: Fold Contributors into About or rename "Our Team" to "Contributors" if the page is kept.

---

## Lead Magnet and Conversion

- **Prompt Architect's Toolkit**: Implement `/downloads/prompt-architects-toolkit` page that requires newsletter signup (email) to unlock the PDF. Use existing `/api/newsletter` with `ctaSource: 'lead_magnet_toolkit'`.
- **Blog CTA**: Every blog post should end with a clear "Subscribe to The ZAG Navigator" (or equivalent) CTA; ensure wording is consistent with the newsletter naming above.

---

## Execution Guardrails (from plan)

- Work in a dedicated branch after the move (e.g. `refactor/next14-content-pipeline`).
- Checkpoint commit after each phase with a clear message.
- Do not proceed to the next phase until the current phase's verify checklist passes.
- Keep production deploys blocked until Phase 4 (CI update) is complete.
- Create a rollback point before Phase 2 (Next upgrade) and before Phase 3 (content pipeline).

---

*Last updated: 2026-03-01. Update this file when phases complete or decisions change.*
