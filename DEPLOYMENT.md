# DEPLOYMENT.md

## Deployment Platform
- **Platform:** Vercel
- **Production URL:** https://sheridanrichey.com

## Deployment Commands
- **Production Deploy:** `vercel --prod`
- **Preview Deploy:** _Not used currently_
- **Local Production Preview:**
  - `npm run build`
  - `npm run start`

## Workflow
- All blog posts in `/website/posts` as standard MDX with multi-line YAML frontmatter.
- Contentlayer is used for content pipeline.
- Auto-deploy on push to `main` branch: Yes (Vercel standard)
- Manual deploy instructions: None required; all handled by Vercel.

---
**This file is the persistent source of truth for deployment. I will reference it automatically for all future deployment questions.** 