# Website — sheridanrichey.com

Next.js **14** (App Router), TypeScript, Tailwind CSS. Run from repo root with `npm run dev` or from this directory with `npm run dev`.

**URL:** [sheridanrichey.com](https://sheridanrichey.com)

## Quick start

```bash
# From repo root
cd sheridanrichey-brand-ecosystem
npm run setup
npm run dev

# Or from website/
cd website
npm install
npm run dev
```

- Dev: [http://localhost:3000](http://localhost:3000)
- Build: `npm run build` (root or `website/`)
- Lint: `npm run lint`
- E2E: `npm run test:e2e` (Playwright; config in repo root `playwright.config.js`)

## Layout

```
website/
├── app/              # App Router routes, layouts, API routes
├── components/       # React components
├── lib/              # posts.ts — reads ../content/blog at build/runtime
├── data/             # authors.ts and shared data
├── public/           # Static assets, images, downloads
└── package.json
```

Blog content is **not** in `website/posts/`. Posts live at repo root in `content/blog/` and are loaded by [`lib/posts.ts`](lib/posts.ts).

## Content and images

- **Full blog guide:** [BLOG_SYSTEM_README.md](./BLOG_SYSTEM_README.md) (frontmatter, categories, slugs, authors).
- **Resend (contact form):** [RESEND_SETUP.md](./RESEND_SETUP.md) and `.env.example` for env vars.
- **Public downloads:** [public/downloads/README.md](./public/downloads/README.md) (lead magnet PDF).
- **Image checklist:** [public/ASSETS_README.md](./public/ASSETS_README.md).

## Environment

Copy `website/.env.example` to `website/.env.local` for local secrets (Beehiiv, Resend, etc.). Production vars live in Vercel.

## More context

Repo-wide operating map: [../AGENTS.md](../AGENTS.md).
