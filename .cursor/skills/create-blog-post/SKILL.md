---
name: create-blog-post
description: Create a new blog post from a ZAG-aligned brief using content/blog and website conventions.
---

# Create a blog post (ZAG brief → published markdown)

## When to use

You are adding or drafting a post for sheridanrichey.com. Blog content lives only under **`content/blog/`**; the site reads posts via **`website/lib/posts.ts`**.

## Steps

1. **Pick pillar folder** under `content/blog/`: `zen/`, `act/`, `gem/`, or `zag/` as appropriate.
2. **Filename = slug** — e.g. `my-post-title.md` → route `/blog/my-post-title`. Use kebab-case; avoid spaces.
3. **Frontmatter** (required fields align with [website/BLOG_SYSTEM_README.md](../../../website/BLOG_SYSTEM_README.md)):

```yaml
---
title: "Post title"
description: "SEO/social description"
date: "YYYY-MM-DD"
category: "ZEN"   # ZEN | ACT | GEM | ZAG | Featured
author: "sheridan-richey"   # must exist in website/data/authors.ts
tags:
  - tag-one
featured: false
---
```

4. **Body** — Markdown (or MDX if the project supports it for that file). Keep tone aligned with ZAG and audience per `.cursor/rules/content-strategy.mdc`.
5. **Images** — Put files in `website/public/images/blog/<slug>/` and reference as `/images/blog/<slug>/file.jpg`.
6. **Verify** — `npm run dev`, open `/blog/<slug>`, check layout and metadata.

## Do not

- Do not add posts under `website/posts/` or rely on Contentlayer for this pipeline.
- Do not duplicate author data; use `website/data/authors.ts` IDs.

## References

- [AGENTS.md](../../../AGENTS.md)
- [website/BLOG_SYSTEM_README.md](../../../website/BLOG_SYSTEM_README.md)
- [website/lib/posts.ts](../../../website/lib/posts.ts)
