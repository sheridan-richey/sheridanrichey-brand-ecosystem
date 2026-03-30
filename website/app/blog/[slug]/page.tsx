import AboutAuthor from '@/components/AboutAuthor'
import NewsletterCTA from '@/components/NewsletterCTA'
import { CTAButtonLink } from '@/components/ui/cta-button'
import { getAuthor } from '@/data/authors'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { ArrowLeft, Calendar, Share2, Tag } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

/**
 * Removes the first markdown block when it is a single-line ATX H1 (`# Title`).
 * Hero already shows frontmatter title; body often repeats `# Title` from authoring.
 */
function stripLeadingH1Block(body: string): string {
  const trimmed = body.trimStart()
  const blocks = trimmed.split(/\n\n/)
  if (blocks.length === 0) return body
  const first = blocks[0].trim()
  // One `#` only (not `##`), then space and heading text
  if (/^#\s+\S[^\n]*$/.test(first)) {
    return blocks.slice(1).join('\n\n').trimStart()
  }
  return body
}

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

const markdownComponents = {
  h1: ({ children }: { children?: React.ReactNode }) => (
    <h1 className="font-manrope text-4xl font-bold text-phantom mt-8 mb-6">{children}</h1>
  ),
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="font-manrope text-2xl sm:text-[1.65rem] font-semibold text-phantom mt-14 mb-4 scroll-mt-24">{children}</h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="font-manrope text-xl font-semibold text-phantom mt-8 mb-3">{children}</h3>
  ),
  h4: ({ children }: { children?: React.ReactNode }) => (
    <h4 className="font-manrope text-lg font-semibold text-phantom mt-6 mb-2">{children}</h4>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="mb-6 leading-[1.75]">{children}</p>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="list-disc list-outside mb-6 space-y-2 pl-5">{children}</ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="list-decimal list-outside mb-6 space-y-2 pl-5">{children}</ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => <li className="pl-1">{children}</li>,
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold text-phantom">{children}</strong>
  ),
  em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="border-l-4 border-primary-500 pl-4 italic text-graphite mb-6">{children}</blockquote>
  ),
  code: ({ children }: { children?: React.ReactNode }) => (
    <code className="bg-cloud px-2 py-1 rounded text-sm font-mono">{children}</code>
  ),
  pre: ({ children }: { children?: React.ReactNode }) => (
    <pre className="bg-cloud p-4 rounded-lg overflow-x-auto mb-6 max-w-none border border-smoke">{children}</pre>
  ),
  table: ({ children }: { children?: React.ReactNode }) => (
    <div className="overflow-x-auto mb-6 max-w-none">
      <table className="min-w-full border-collapse border border-smoke text-sm">{children}</table>
    </div>
  ),
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <img src={src} alt={alt ?? ''} className="my-6 max-w-full rounded-lg border border-smoke" />
  )
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const categoryColorMap: Record<string, string> = {
    ZAG: 'bg-teal-500 text-white',
    ZEN: 'bg-zag-zen-light text-zag-zen-dark',
    ACT: 'bg-zag-act-light text-zag-act-dark',
    GEM: 'bg-zag-gem-light text-zag-gem-dark',
    Featured: 'bg-teal-500/10 text-teal-500'
  }

  const author = getAuthor(post.author)

  if (!author) {
    notFound()
  }

  const formattedPost = {
    ...post,
    date: new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
    featured: post.featured === true,
    body: { raw: post.bodyRaw }
  }

  const rawBody = stripLeadingH1Block(formattedPost.bodyRaw)
  const blocks = rawBody.split(/\n\n/)
  const showMidPostCta = blocks.length >= 2
  const introMd = showMidPostCta ? blocks[0] : rawBody
  const restMd = showMidPostCta ? blocks.slice(1).join('\n\n') : ''

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-bg to-white">
      <div className="bg-white border-b border-smoke">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            href="/blog"
            className="inline-flex items-center font-manrope text-primary-500 hover:text-primary-600 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${categoryColorMap[formattedPost.category] || 'bg-teal-500/10 text-teal-500'}`}
              >
                {formattedPost.category}
              </span>
              {formattedPost.featured && (
                <span className="inline-flex items-center px-3 py-1 bg-teal-500/10 rounded-full">
                  <span className="text-primary-500 font-manrope text-sm font-medium">Featured</span>
                </span>
              )}
            </div>

            <h1 className="font-manrope text-4xl md:text-5xl font-bold text-phantom mb-4">{formattedPost.title}</h1>

            <p className="font-manrope text-xl text-graphite mb-6">{formattedPost.description}</p>

            <div className="flex flex-wrap items-center gap-6 text-graphite">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="font-manrope text-sm">{formattedPost.date}</span>
              </div>
              <button
                type="button"
                className="flex items-center gap-2 hover:text-primary-500 transition-colors duration-200"
              >
                <Share2 className="h-4 w-4" />
                <span className="font-manrope text-sm">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-lg max-w-none">
          <div className="blog-content mx-auto max-w-[65ch] text-[17px] sm:text-lg leading-[1.75] text-graphite font-manrope">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {introMd}
            </ReactMarkdown>
            {showMidPostCta && (
              <div className="my-12 rounded-2xl border border-smoke bg-gradient-to-br from-primary-500/5 to-light-teal/5 p-8 text-center">
                <p className="mb-4 font-manrope text-sm text-graphite">Get the weekly letter for awakened technologists.</p>
                <NewsletterCTA ctaSource="blog_post_mid" variant="default" size="lg" className="font-manrope font-semibold">
                  Subscribe to The ZAG Navigator
                </NewsletterCTA>
              </div>
            )}
            {showMidPostCta && (
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {restMd}
              </ReactMarkdown>
            )}
          </div>
        </article>

        <div className="mx-auto mt-12 max-w-[65ch]">
          <div className="rounded-2xl border border-smoke bg-gradient-to-br from-primary-500/5 to-primary-500/10 p-8 text-center">
            <h3 className="mb-3 font-manrope text-2xl font-bold text-phantom">The ZAG Navigator</h3>
            <p className="mb-6 font-manrope text-graphite">
              Weekly signal for clarity, momentum, and mastery—no fluff.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
              <NewsletterCTA
                ctaSource="blog_post_footer"
                variant="default"
                size="lg"
                className="font-manrope font-semibold px-8 py-3 h-auto min-h-[2.75rem]"
              >
                Subscribe to The ZAG Navigator
              </NewsletterCTA>
              <CTAButtonLink href="/zag-matrix" variant="journey-start" size="md">
                Explore the Framework
              </CTAButtonLink>
            </div>
          </div>
        </div>

        <AboutAuthor author={author} />

        <div className="mt-12 border-t border-smoke pt-8">
          <div className="mb-4 flex items-center gap-2">
            <Tag className="h-4 w-4 text-graphite" />
            <span className="font-manrope text-sm font-medium text-phantom">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {formattedPost.tags?.map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-full bg-cloud px-3 py-1">
                <span className="font-manrope text-sm text-graphite">{tag}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
