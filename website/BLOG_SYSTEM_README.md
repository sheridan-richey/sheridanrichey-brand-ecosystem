# Blog System Documentation

## Overview

The blog system is now fully data-driven, making it easy to add new blog posts and authors without touching multiple files. The system uses:

- **Contentlayer** for MDX processing
- **Centralized author data** in `data/authors.ts`
- **YAML frontmatter** for blog post metadata
- **Automatic author attribution** and contributor pages

## Adding New Blog Posts

### 1. Create the MDX File

Create a new `.mdx` file in the `posts/` directory with the following frontmatter structure:

```yaml
---
title: "Your Blog Post Title"
description: "A compelling description of your blog post"
date: "2025-07-26"
category: "GEM"  # Options: ZEN, ACT, GEM, Leadership, Entrepreneurship, Wellness
author: "sheridan-richey"  # Must match an author ID from data/authors.ts
tags:
  - "tag1"
  - "tag2"
  - "tag3"
featured: false  # Optional, defaults to false
---
```

### 2. Write Your Content

After the frontmatter, write your blog post content using standard Markdown/MDX:

```markdown
# Your Blog Post Title

Your content here...

## Section Headers

- Bullet points
- More content

**Bold text** and *italic text* are supported.
```

### 3. Automatic Integration

Once you add the file and deploy:
- ✅ Blog post appears on `/blog` page
- ✅ Author attribution is automatically added
- ✅ Post appears on author's contributor profile
- ✅ Proper sorting (featured first, then by date)
- ✅ Category tags with consistent brand styling

## Adding New Authors

### 1. Update Author Data

Add the new author to `data/authors.ts`:

```typescript
export const authors: Record<string, Author> = {
  // ... existing authors
  'new-author-id': {
    id: 'new-author-id',
    name: 'Author Name',
    title: 'Author Title',
    bio: 'Author bio...',
    headshot: '/assets/images/contributors/author-headshot.jpg',
    linkedin: 'https://linkedin.com/in/author-profile'  // Optional
  }
};
```

### 2. Add Headshot Image

Place the author's headshot in `public/assets/images/contributors/` with the filename referenced in the author data.

### 3. Use in Blog Posts

Reference the author ID in blog post frontmatter:

```yaml
author: "new-author-id"
```

## Brand Guidelines

### Category Tag Colors

All category tags use consistent teal brand colors:

- **ZAG**: `bg-teal-500 text-white` (solid teal background)
- **ZEN**: `bg-teal-500/10 text-teal-500` (light teal background)
- **ACT**: `bg-teal-500/10 text-teal-500` (light teal background)
- **GEM**: `bg-teal-500/10 text-teal-500` (light teal background)
- **Leadership**: `bg-teal-500/10 text-teal-500` (light teal background)

### Author Attribution

Author attribution appears on:
- Blog post cards on `/blog` page
- Blog post cards on home page Latest Insights
- Individual blog post pages (About the Author section)
- Contributor profile pages

## File Structure

```
website/
├── data/
│   └── authors.ts              # Centralized author data
├── posts/
│   ├── your-blog-post.mdx      # Blog post files
│   └── ...
├── app/
│   ├── blog/
│   │   ├── page.tsx            # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx        # Individual blog post page
│   └── contributors/
│       └── page.tsx            # Contributors page
├── components/
│   ├── BlogCard.tsx            # Blog post card component
│   ├── LatestInsights.tsx      # Home page blog section
│   └── ContributorCard.tsx     # Contributor profile card
└── contentlayer.config.ts      # Contentlayer configuration
```

## Contentlayer Schema

The blog post schema includes:

```typescript
{
  title: string,           // Required
  description: string,     // Required
  date: Date,             // Required
  category: string,       // Required (enum)
  author: string,         // Required (must match author ID)
  tags: string[],         // Optional
  featured: boolean,      // Optional (defaults to false)
  image: string          // Optional
}
```

## Best Practices

### 1. Author IDs
- Use kebab-case for author IDs (e.g., `sheridan-richey`)
- Keep IDs consistent and descriptive
- Update all references when changing an author ID

### 2. Categories
- Use the predefined categories: ZEN, ACT, GEM, Leadership, Entrepreneurship, Wellness
- Categories determine tag styling and organization

### 3. Tags
- Use descriptive, relevant tags
- Keep tags consistent across similar posts
- Tags help with content discovery and SEO

### 4. Featured Posts
- Use `featured: true` sparingly for important posts
- Featured posts appear first in blog listings
- Only one featured post should be active at a time

## Troubleshooting

### Common Issues

1. **Author not found**: Ensure the author ID in the blog post matches an ID in `data/authors.ts`
2. **Build errors**: Check that all required frontmatter fields are present
3. **Styling issues**: Verify category tags use the correct brand colors
4. **Missing images**: Ensure headshot paths in author data are correct

### Development Workflow

1. Add new blog post MDX file
2. Test locally with `npm run dev`
3. Verify author attribution appears correctly
4. Check category tag styling
5. Deploy with `vercel --prod`

## Migration Notes

This system replaces the previous hardcoded approach where:
- ❌ Author data was duplicated across multiple files
- ❌ Adding a blog post required updating multiple components
- ❌ Tag styling was inconsistent
- ❌ Twitter links were included (removed since authors don't have Twitter)

The new system provides:
- ✅ Single source of truth for author data
- ✅ Automatic integration of new blog posts
- ✅ Consistent brand styling
- ✅ Simplified maintenance 