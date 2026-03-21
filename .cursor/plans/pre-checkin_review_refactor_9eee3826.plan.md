---
name: Pre-checkin review refactor
overview: "A minimal pre-checkin plan focused on safe release gates only: separate intentional work from repo noise, run lint/build/E2E, and fix only issues that can block push, CI, or obvious production behavior."
todos:
  - id: scope
    content: Inventory the dirty worktree and confirm what belongs in this push versus unrelated churn
    status: completed
  - id: gates
    content: Run website lint, build, and E2E in the current state
    status: completed
  - id: blockers
    content: Fix only check failures, CI reproducibility issues, or obvious production bugs discovered during review
    status: completed
  - id: hygiene
    content: Remove generated artifacts from the checkin path and tighten ignore rules only where they affect this push
    status: completed
  - id: reverify
    content: Re-run the release gates and prepare a concise checkin summary
    status: completed
isProject: false
---

# Pre-checkin safety plan

## Goal

Get the current work pushed safely and quickly. This plan intentionally avoids broader refactors, documentation cleanup, or architectural polish unless they directly block the push.

## Execution order

### 1. Scope the checkin first

Before touching code, review the dirty worktree and classify changes into:

- intended for this push
- generated noise or local artifacts
- unrelated in-flight work that should be left alone

This is the highest-risk part because the repo already has many modified, deleted, and untracked files. The first pass should focus on files like `[.gitignore](.gitignore)`, `[playwright.config.js](playwright.config.js)`, `[.github/workflows/playwright.yml](.github/workflows/playwright.yml)`, `[website/package.json](website/package.json)`, `[package.json](package.json)`, and any staged build/test output.

### 2. Run the release gates

Use `[1P/brand-dial-in/PUBLISH_CHECKLIST.md](1P/brand-dial-in/PUBLISH_CHECKLIST.md)` as the source of truth and run only the gates needed for a safe push:

1. `cd website && npm run lint`
2. `cd website && npm run build`
3. `npm run test:e2e`

If one of these fails, fix that failure before considering any cleanup work.

### 3. Fix only true blockers

Allowed fixes in this pass:

- lint, build, or E2E failures
- CI reproducibility issues that will likely fail after push
- obvious production bugs already visible in touched code
- generated files being accidentally included in the checkin

Known high-value checks from earlier review:

- `[.github/workflows/playwright.yml](.github/workflows/playwright.yml)` uses `npx wait-on`; if root dependencies do not provide it reliably, treat that as a CI blocker
- `[.gitignore](.gitignore)` does not currently ignore `test-results/`; if test artifacts are in the worktree, fix that in this pass
- `[website/app/api/contact/route.ts](website/app/api/contact/route.ts)` has very verbose production logging; only tighten it now if it is clearly risky and low-effort

### 4. Re-verify and stop

After blocker fixes:

1. Re-run lint
2. Re-run build
3. Re-run E2E
4. Summarize what is safe to include in the checkin

Stop there. Defer cleanup such as blog component deduplication, README updates, slug-guard improvements, SEO enhancements, and deprecated script cleanup to the next pass.

## Explicitly deferred

- `[website/app/blog/page.tsx](website/app/blog/page.tsx)` and `[website/components/BlogCard.tsx](website/components/BlogCard.tsx)` deduplication
- `[website/lib/posts.ts](website/lib/posts.ts)` slug-collision guard
- `[website/app/blog/[slug]/page.tsx](website/app/blog/[slug]/page.tsx)` share-button polish unless it is breaking tests
- `[website/README.md](website/README.md)` and broader documentation alignment
- `[scripts/sync-content.js](scripts/sync-content.js)` cleanup unless it directly affects current commands or CI

## Success criteria

- The intended checkin scope is clear
- No generated artifacts are accidentally included
- Lint passes
- Build passes
- E2E passes
- Any code changes made are narrowly tied to push safety