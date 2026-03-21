# Sheridan Richey — Personal Brand Ecosystem

Personal brand website ([sheridanrichey.com](https://sheridanrichey.com)), content hub, and related assets. **How this repo works** (stack, doc hierarchy, priorities) lives in **[AGENTS.md](AGENTS.md)** — read that first.

## Quick start

**Prerequisites:** Node.js 18+, npm, Git.

```bash
git clone https://github.com/sheridan-richey/sheridanrichey-brand-ecosystem.git
cd sheridanrichey-brand-ecosystem
npm run setup
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The Next.js app lives in `website/`.

## Common commands

| Command | Purpose |
|--------|---------|
| `npm run dev` | Dev server (from repo root; runs `website`) |
| `npm run build` | Production build |
| `npm run lint` | ESLint in `website/` |
| `npm run test:e2e` | Playwright E2E (from `website/`) |

## Repo map

| Path | Purpose |
|------|---------|
| [website/](website/) | Next.js 14 app (App Router) — see [website/README.md](website/README.md) |
| [content/blog/](content/blog/) | Blog markdown (single source of truth for posts) |
| [tests/e2e/](tests/e2e/) | Playwright tests |
| [.github/workflows/](.github/workflows/) | CI: deploy, Playwright |
| [1P/](1P/), [2A/](2A/), [3R/](3R/), [4A/](4A/) | PARA-style knowledge (strategic notes, areas, resources, archives) |
| [professional-roles/](professional-roles/) | Role description copy |
| [github-profile/](github-profile/) | GitHub profile repo notes |

**Blog posts:** Add files under `content/blog/` (see [website/BLOG_SYSTEM_README.md](website/BLOG_SYSTEM_README.md)). There is no sync step to `website/posts/` — the app reads via `website/lib/posts.ts`.

## Standards and work tracking

- **Standards:** [`.cursor/rules/`](.cursor/rules/) (Next.js, content, testing, workflows).
- **Tasks and bugs:** [GitHub Issues](https://github.com/sheridan-richey/sheridanrichey-brand-ecosystem/issues).

## License

MIT — see [LICENSE](LICENSE).
