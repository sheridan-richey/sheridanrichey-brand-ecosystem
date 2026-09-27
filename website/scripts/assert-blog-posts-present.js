/**
 * CI guard: ensures blog markdown is resolvable the same way as lib/posts.ts
 * after a website-only (Vercel-like) build context.
 */
const fs = require('fs')
const path = require('path')

const websiteRoot = path.join(__dirname, '..')
const minPosts = Number.parseInt(process.env.MIN_BLOG_POSTS || '6', 10)

function resolveContentDir() {
  const parentHub = path.join(websiteRoot, '..', 'content', 'blog')
  const staged = path.join(websiteRoot, 'content', 'blog')
  if (fs.existsSync(parentHub)) return parentHub
  if (fs.existsSync(staged)) return staged
  return null
}

function countMarkdownFiles(dir) {
  if (!dir || !fs.existsSync(dir)) return 0
  let count = 0
  const walk = (current) => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (/\.(md|mdx)$/i.test(entry.name)) count += 1
    }
  }
  walk(dir)
  return count
}

const contentDir = resolveContentDir()
const count = countMarkdownFiles(contentDir)

console.log(`[assert-blog-posts] content dir: ${contentDir ?? '(none)'}`)
console.log(`[assert-blog-posts] markdown files: ${count} (minimum ${minPosts})`)

if (!contentDir) {
  console.error('[assert-blog-posts] No content/blog directory found')
  process.exit(1)
}

if (count < minPosts) {
  console.error(`[assert-blog-posts] Expected at least ${minPosts} posts, found ${count}`)
  process.exit(1)
}

// When simulating Vercel, parent hub should be hidden and staged copy used.
if (process.env.REQUIRE_STAGED_CONTENT === '1') {
  const staged = path.join(websiteRoot, 'content', 'blog')
  const parentHub = path.join(websiteRoot, '..', 'content', 'blog')
  if (fs.existsSync(parentHub)) {
    console.error(
      '[assert-blog-posts] REQUIRE_STAGED_CONTENT=1 but repo-root content/blog is still present'
    )
    process.exit(1)
  }
  if (!fs.existsSync(staged)) {
    console.error('[assert-blog-posts] REQUIRE_STAGED_CONTENT=1 but website/content/blog is missing')
    process.exit(1)
  }
  if (contentDir !== staged) {
    console.error('[assert-blog-posts] Expected to resolve staged content, got', contentDir)
    process.exit(1)
  }
}

console.log('[assert-blog-posts] OK')
