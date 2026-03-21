# Blog System Documentation

## Overview

The blog system is data-driven using a custom content pipeline. It uses:

- **Markdown/MDX** in `content/blog/` at repo root (single source of truth)
- **gray-matter** for frontmatter parsing in `website/lib/posts.ts`
- **Centralized author data** in `website/data/authors.ts`
- **YAML frontmatter** for blog post metadata
- **Automatic author attribution** and contributor pages

## Content home: `content/blog/`

All blog posts live under `content/blog/` with subdirectories by category:

- `content/blog/zen/` — ZEN pillar posts
- `content/blog/act/` — ACT pillar posts
- `content/blog/gem/` — GEM pillar posts
- `content/blog/zag/` — ZAG / framework posts

Slug is derived from the **filename** (without extension), e.g. `career-transition-optconnect.md` → `/blog/career-transition-optconnect`.

## Adding New Blog Posts

### 1. Create the Markdown file

Create a new `.md` or `.mdx` file in the appropriate `content/blog/<category>/` directory with this frontmatter:

```yaml
---
title: "Your Blog Post Title"
description: "A compelling description of your blog post"
date: "2025-07-26"
category: "GEM"   # One of: ZEN, ACT, GEM, ZAG, Featured
author: "sheridan-richey"   # Must match an author ID from website/data/authors.ts
tags:
  - "tag1"
  - "tag2"
featured: false   # Optional, defaults to false
---
```

### 2. Write your content

Use standard Markdown (and MDX if needed) after the frontmatter.

### 3. Images in posts

- Place images in `website/public/images/blog/<post-slug>/`
- Reference them in markdown as: `/images/blog/<post-slug>/photo.jpg`

Example: for post slug `career-transition-optconnect`, use `website/public/images/blog/career-transition-optconnect/hero.jpg` and in the post write `![Hero](/images/blog/career-transition-optconnect/hero.jpg)`.

## Categories

Allowed values for `category` in frontmatter: **ZEN**, **ACT**, **GEM**, **ZAG**, **Featured**.

## Adding New Authors

Add the author to `website/data/authors.ts` and reference the author ID in post frontmatter. See the "Adding New Authors" section in this file (below) for the full structure.

## File structure

```
(repo root)/
├── content/
│   └── blog/
│       ├── zen/
│       ├── act/
│       ├── gem/
│       └── zag/
├── website/
│   ├── lib/
│   │   └── posts.ts         # getAllPosts(), getPostBySlug()
│   ├── data/
│   │   └── authors.ts
│   ├── public/
│   │   └── images/
│   │       └── blog/        # Per-post images: <post-slug>/...
│   ├── app/
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   └── contributors/
│   └── components/
│       ├── BlogCard.tsx
│       └── LatestInsights.tsx
```

## Best practices

- Use kebab-case for filenames (e.g. `finding-clarity-mid-career.md`).
- Categories: ZEN, ACT, GEM, ZAG, Featured only.
- Use `featured: true` sparingly; featured posts appear first in listings.
