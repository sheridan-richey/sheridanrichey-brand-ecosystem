---
name: refinement completion review
overview: Close the remaining gap between the implemented refinement work and the original plan by finishing the token/style sweep, fixing publish-readiness gaps, and bringing the plan/docs into sync with reality.
todos:
  - id: finish-phase-5-sweep
    content: Complete Phase 5 brand-token/style cleanup across all 12 files with off-brand classes.
    status: completed
  - id: close-publish-gaps
    content: Restore missing tracked assets, fix .gitignore for PDF, update .env.example, fix unsupported newsletter copy.
    status: completed
  - id: reconcile-deploy-docs
    content: Update deployment workflow/docs, align Node versions, add push-to-main Playwright trigger, update sitemap.
    status: completed
  - id: refresh-project-memory
    content: Bring AGENTS.md, context doc, and original plan status tracking into sync with the actual post-refinement state.
    status: completed
  - id: verify-and-publish
    content: Re-run full build + Playwright E2E, then commit, push, and do a production smoke check.
    status: completed
isProject: false
---

# Finish Original Refinement Plan

## Findings

- The original plan file still marks every phase as `pending` in `.cursor/plans/slr_brand_launch_refinement_8d469c34.plan.md`, even though most implementation work is already present.
- The biggest true implementation gap is the unfinished **Phase 5 token sweep**. `gray-*`, `teal-*`, `blue-*`, and other off-system classes remain in **12 files** (full list in Step 1 below).
- **Image assets are tracked in git but missing from disk.** `git ls-tree HEAD` shows `sheridan-headshot.jpg`, contributor photos, brand JPEGs/PNGs, etc. all committed, but only ~17 of ~68 tracked files under `website/public/` exist on the working tree. `git status` reports "clean" (likely an index/checkout inconsistency from the repo move). Fix: `git checkout -- website/public/` to restore all tracked assets.
- `**.gitignore` blocks PDFs** (line 160: `*.pdf`). The toolkit download page references `website/public/downloads/prompt-architects-toolkit.pdf`, but that file cannot be committed without adding a negation rule.
- `**.env.example` is incomplete**: missing `RESEND_API_KEY`, `FROM_EMAIL`, `TO_EMAIL` required by `website/app/api/contact/route.ts`.
- **Stale docs**: `AGENTS.md` still says Phase 0/1/2/3 are next; `2A/technical-maintenance/deployment-process.md` still refers to `posts/`; newsletter page still has "Join hundreds of technologists..." (unsupported claim).
- **Sitemap is static**, dated 2024-01-20, and missing `/community`, `/speaking`, `/zag-matrix`, `/downloads/prompt-architects-toolkit`, and the `career-transition-optconnect` blog post.
- **CI gaps**: `playwright.yml` only triggers on `pull_request` and `workflow_dispatch`, not on direct pushes to `main`. Node version mismatch: `deploy.yml` uses Node 18; `playwright.yml` uses Node 20.

## Recommended Sequence

1. Finish the real remaining product/code work first (token sweep).
2. Fix publish-readiness assets and environment documentation.
3. Reconcile deployment workflows and operational docs.
4. Update project memory (AGENTS, context doc, original plan statuses).
5. Re-run build + full Playwright E2E, then publish.

---

## Implementation Plan

### 1. Complete Phase 5 token sweep (12 files)

Replace all `gray-*`, `slate-*`, `blue-*`, and ad-hoc `teal-*` classes with the brand token set from `website/tailwind.config.js`. Token mapping:

- `gray-50` hover states -> `light-bg` or `cloud`
- `gray-200`/`gray-300` borders -> `smoke`
- `gray-500`/`gray-600` text -> `graphite`
- `gray-700`/`gray-900` text -> `phantom` or `arsenic`
- `teal-500`/`teal-600` -> `primary-500` / `primary-600`
- `teal-100` bg -> `primary-500/10`
- `blue-500` focus rings -> `primary-500`

**Full file list** (confirmed via grep):

1. `website/components/NewsletterSignup.tsx` -- heaviest; ~20 `gray-*` and `blue-*` instances
2. `website/components/Header.tsx` -- `teal-500/600` on newsletter CTA button
3. `website/app/community/page.tsx` -- many `teal-*` and `gray-*`
4. `website/app/contact/page.tsx` -- `gray-50` hover states
5. `website/app/speaking/page.tsx` -- `gray-50`
6. `website/app/page.tsx` -- `gray-50` on CTA link
7. `website/app/zag-matrix/zen/page.tsx` -- `gray-300`, `gray-700`
8. `website/app/zag-matrix/gem/page.tsx` -- `gray-300`, `gray-700`
9. `website/components/ZagMatrixOverview.tsx` -- verify; may be clean after earlier fix (false positive on `translate`)
10. `website/components/HeroSection.tsx` -- verify; grep matched `translate-y-8` not actual gray/teal
11. `website/components/ui/button.tsx` -- skip if shadcn/radix primitive (not marketing surface)
12. `website/components/ui/cta-button.tsx` -- skip if shadcn/radix primitive (not marketing surface)

For `button.tsx` / `cta-button.tsx`: if these are generic UI primitives (shadcn-style), leave them alone and document that brand tokens apply to page/component code, not base UI primitives.

### 2. Close publish blockers and credibility gaps

- **Restore missing tracked assets**: Run `git checkout -- website/public/` to restore all tracked image files (headshot, contributor photos, brand JPEGs/PNGs) that exist in the git tree at HEAD but are missing from the working directory (~51 files).
- **Fix `.gitignore` for toolkit PDF**: Add `!website/public/downloads/*.pdf` as a negation rule so the toolkit PDF can be committed. Then add the actual PDF when available at `website/public/downloads/prompt-architects-toolkit.pdf`. (PDF is a user-provided asset; if not ready yet, leave a placeholder note and keep the page live with the email gate working.)
- **Update `.env.example`**: Add `RESEND_API_KEY`, `FROM_EMAIL`, `TO_EMAIL` to `website/.env.example` so the contact form API requirements are documented alongside the existing Beehiiv vars.
- **Fix unsupported copy**: Remove or rephrase "Join hundreds of technologists who've already started their ZAG journey" from `website/app/newsletter/page.tsx` (line 309). Replace with honest, aspirational wording.

### 3. Reconcile deployment and workflow truth

- **Add push-to-main trigger for Playwright**: Update `.github/workflows/playwright.yml` to also trigger on `push: branches: [main]` so E2E runs on every push, not just PRs and manual dispatch. This aligns with `PUBLISH_CHECKLIST.md` which claims Playwright runs "on push/PR."
- **Normalize Node version**: Change `deploy.yml` from Node 18 to Node 20 to match `playwright.yml`. Both workflows should use the same runtime.
- **Update deployment docs**: In `2A/technical-maintenance/deployment-process.md`, replace `posts/` references with `content/blog/`; clarify that Vercel Git deploys are disabled (`vercel.json`) and production deploys happen via `deploy.yml` GitHub Action; update the pre-publish workflow to reference the actual test/build commands.
- **Update sitemap**: Replace the static `website/public/sitemap.xml` (dated 2024-01-20) with one that includes all current routes: `/`, `/about`, `/blog`, `/resources`, `/contact`, `/newsletter`, `/community`, `/speaking`, `/zag-matrix`, `/zag-matrix/zen`, `/zag-matrix/act`, `/zag-matrix/gem`, `/downloads/prompt-architects-toolkit`, and all blog post slugs. Update `lastmod` dates.

### 4. Bring project memory up to date

- **Update AGENTS.md**: Replace the "Current priorities" section to reflect post-refinement state. Priority is now: publish, add toolkit PDF, write new content. Remove references to Phase 0/1/2/3 as future work.
- **Refresh context doc**: Update `1P/brand-dial-in/20260301-context-and-decisions.md` with what is complete, what remains (toolkit PDF, ongoing content), and the Phase 5 scope decision (brand tokens on marketing surfaces; UI primitives exempted).
- **Mark original plan statuses**: In `.cursor/plans/slr_brand_launch_refinement_8d469c34.plan.md`, change all completed phases from `pending` to `completed`. Phase 0b (repo move) should be marked `completed` if the move to `c:\code\` is the permanent location, or left `pending` if not.

### 5. Final verification and launch readiness

- Re-run `npm run build` in `website/` to confirm no regressions from token sweep.
- Start dev server (`npm run dev` in `website/`), then run full Playwright E2E suite (`npm run test:e2e` from repo root). All 47+ tests must pass.
- Commit all changes with a clear message.
- Push to `main` and verify both GitHub Actions workflows (Playwright and Deploy) pass.
- After deploy, production smoke check: homepage (hero image loads), blog (posts render), newsletter signup, contact form submission, `/zag-collective` redirect to `/community`, `/downloads/prompt-architects-toolkit` page.

## Success Criteria

- No `gray-`*, `slate-`*, `blue-*`, or ad-hoc `teal-*` in page/component code (UI primitives exempted and documented).
- All tracked assets restored to disk; hero image, contributor photos visible in dev.
- `.gitignore` allows toolkit PDF; `.env.example` documents all required production vars.
- Sitemap reflects current routes and dates.
- CI runs E2E on both PRs and pushes to main; both workflows use Node 20.
- AGENTS.md, context doc, and original plan statuses accurately describe the current state.
- Local build + full Playwright suite green before publish.
- Production smoke check passes after deploy.

