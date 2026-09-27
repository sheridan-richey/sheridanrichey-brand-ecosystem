/**
 * Copies repo-root content/blog into website/content/blog for deployments where
 * the Vercel project root is website/ (no sibling content/ on the build machine).
 * Local dev can keep using ../content/blog via lib/posts.ts when the hub exists.
 */
const fs = require('fs')
const path = require('path')

const websiteRoot = path.join(__dirname, '..')
const target = path.join(websiteRoot, 'content', 'blog')
const source = path.join(websiteRoot, '..', 'content', 'blog')

function countMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return 0
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

if (!fs.existsSync(source)) {
  const existing = countMarkdownFiles(target)
  if (existing > 0) {
    console.log(`[stage-blog-content] Hub missing; using ${existing} staged post(s) in ${target}`)
    process.exit(0)
  }
  console.warn(`[stage-blog-content] No source at ${source} and no staged content at ${target}`)
  const strict =
    process.env.VERCEL === '1' ||
    process.env.CI === 'true' ||
    process.env.GITHUB_ACTIONS === 'true'
  if (strict) {
    console.error('[stage-blog-content] Refusing to build without blog content in CI/Vercel')
    process.exit(1)
  }
  process.exit(0)
}

fs.mkdirSync(path.dirname(target), { recursive: true })
fs.rmSync(target, { recursive: true, force: true })
fs.cpSync(source, target, { recursive: true })

const staged = countMarkdownFiles(target)
console.log(`[stage-blog-content] Staged ${staged} markdown file(s) to ${target}`)

const strictDeploy =
  process.env.VERCEL === '1' ||
  process.env.CI === 'true' ||
  process.env.GITHUB_ACTIONS === 'true'
if (strictDeploy && staged === 0) {
  console.error('[stage-blog-content] CI/Vercel build requires at least one blog post')
  process.exit(1)
}
