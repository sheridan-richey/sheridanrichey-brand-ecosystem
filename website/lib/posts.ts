import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

/** Allowed categories (ZAG Matrix + Featured). */
export type PostCategory = 'ZEN' | 'ACT' | 'GEM' | 'ZAG' | 'Featured'

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  category: string
  author: string
  tags?: string[]
  featured?: boolean
  bodyRaw: string
}

const CONTENT_DIR = path.join(process.cwd(), '..', 'content', 'blog')

function getAllMarkdownFiles(dir: string, files: string[] = []): string[] {
  if (!fs.existsSync(dir)) return files
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      getAllMarkdownFiles(fullPath, files)
    } else if (entry.isFile() && /\.(md|mdx)$/i.test(entry.name)) {
      files.push(fullPath)
    }
  }
  return files
}

function slugFromFilePath(filePath: string): string {
  const relative = path.relative(CONTENT_DIR, filePath)
  const withoutExt = relative.replace(/\.(md|mdx)$/i, '')
  return path.basename(withoutExt)
}

export function getAllPosts(): Post[] {
  const filePaths = getAllMarkdownFiles(CONTENT_DIR)
  const posts: Post[] = []

  for (const filePath of filePaths) {
    try {
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)
      const slug = slugFromFilePath(filePath)
      posts.push({
        slug,
        title: data.title ?? '',
        description: data.description ?? '',
        date: data.date ?? '',
        category: data.category ?? 'ZAG',
        author: data.author ?? '',
        tags: Array.isArray(data.tags) ? data.tags : undefined,
        featured: Boolean(data.featured),
        bodyRaw: content.trim(),
      })
    } catch (e) {
      console.warn('Skipping invalid post file:', filePath, e)
    }
  }

  // Sort: featured first, then by date descending
  return posts.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts()
  return posts.find((p) => p.slug === slug) ?? null
}
