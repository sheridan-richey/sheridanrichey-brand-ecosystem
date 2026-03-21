# Publish checklist — sheridanrichey.com

Use this after the refinement work is done and you want the updated site live.

---

## 1. Run checks locally (optional but recommended)

From repo root, with the site already built/run once:

```powershell
# Terminal 1: start dev server
cd website
npm run dev

# Terminal 2: run E2E and build
cd c:\code\sheridanrichey-brand-ecosystem
npm run test:e2e
npm run build
```

If `test:e2e` or `npm run build` fail, fix those before pushing.

---

## 2. Commit and push

```powershell
cd c:\code\sheridanrichey-brand-ecosystem
git status
git add -A
git commit -m "Brand refinement: Next 14, content pipeline, E2E fixes, content and UI cleanup"
git push origin main
```

(Use your actual branch if you use something other than `main`.)

---

## 3. Let CI/CD run

- **Playwright** (`.github/workflows/playwright.yml`): runs on **push to `main`**, **PRs to `main`**, and **workflow_dispatch**; builds the site, starts the server, runs E2E. Confirm it’s green in the Actions tab.
- **Deploy** (`.github/workflows/deploy.yml`): runs on push to `main` (and a few other branches); deploys to Vercel. Pushes to `main` use `--prod`, so production is updated.

If the deploy workflow fails, the usual cause is missing or wrong **GitHub secrets**:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Add/fix them under **Repo → Settings → Secrets and variables → Actions**.

---

## 4. Vercel project setup (only if this is a new or reconnected repo)

In the [Vercel dashboard](https://vercel.com):

- **Root directory:** `website`
- **Build command:** `npm run build`
- **Install command:** `npm install`
- **Environment variables:** same as in `2A/technical-maintenance/deployment-process.md` (e.g. `BEEHIIV_*`, `NEXT_PUBLIC_SITE_URL`, etc.)

If the project was already connected and working, you don’t need to change this.

---

## 5. After publish

- Open **https://sheridanrichey.com** and click through: homepage, blog, newsletter, contact, ZAG Matrix, resources.
- Confirm **https://sheridanrichey.com/zag-collective** redirects to **/community** (per `vercel.json`).
- When the PDF is ready, add **`website/public/downloads/prompt-architects-toolkit.pdf`** so the toolkit download works.

---

## Summary

| Step | Action |
|------|--------|
| 1 | (Optional) Run `npm run test:e2e` and `npm run build` locally |
| 2 | Commit and push to `main` (or your deploy branch) |
| 3 | Check GitHub Actions: Playwright and Deploy workflows pass |
| 4 | If deploy fails, add/fix VercEL_* secrets and Vercel root dir |
| 5 | Smoke-check the live site and add the toolkit PDF when ready |
