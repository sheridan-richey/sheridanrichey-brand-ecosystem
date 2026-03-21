# Cursor Rules — Sheridan Richey Brand Ecosystem

Rules guide AI and human contributors. **Authoritative map:** [AGENTS.md](../../AGENTS.md).

## Rule files (single responsibility)

| Rule | Scope |
|------|--------|
| [core-standards.mdc](core-standards.mdc) | ZAG alignment, TS/Next quality, icons (Lucide), naming, always-on bar |
| [agentic-workflows.mdc](agentic-workflows.mdc) | Planning, GitHub Issues, labels, doc hygiene |
| [nextjs-architecture.mdc](nextjs-architecture.mdc) | `website/` app, `content/blog/` pipeline, components |
| [testing-deployment.mdc](testing-deployment.mdc) | Playwright, GitHub Actions, Vercel, env |
| [content-strategy.mdc](content-strategy.mdc) | ZAG content, blog categories, newsletter orientation |
| [collaboration-standards.mdc](collaboration-standards.mdc) | PRs, issues, handoffs |
| [para-system.mdc](para-system.mdc) | Where `1P`/`2A`/`3R`/`4A` fit vs GitHub Issues |

**Removed (merged elsewhere):** `ci-cd-workflow.mdc` and `vercel-config-location.mdc` → `testing-deployment.mdc`. `script-automation.mdc` → removed (obsolete); script specifics belong in repo `scripts/` README if needed.

## When to update

- Stack or content pipeline change → `AGENTS.md`, `nextjs-architecture.mdc`, `content-strategy.mdc`
- CI/deploy/env change → `testing-deployment.mdc`
- Workflow or issue policy change → `agentic-workflows.mdc`, `collaboration-standards.mdc`
- PARA placement change → `para-system.mdc`

## Current stack (snapshot)

- Next.js 14, TypeScript, Tailwind, blog from `content/blog/` via `website/lib/posts.ts`
- Vercel; GitHub Actions for deploy and Playwright
