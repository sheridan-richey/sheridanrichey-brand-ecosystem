import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { allPosts } from 'contentlayer/generated'
import BlogCard, { BlogCardPost } from './BlogCard'
import { getAuthor } from '@/data/authors'

function getLatestFeaturedPosts(posts: any[], count: number): BlogCardPost[] {
  // Sort by date descending
  const sorted = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(post => {
      const author = getAuthor(post.author)
      return {
        ...post,
        date: new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
        featured: post.featured === true,
        author: author
      }
    })
  const featured = sorted.filter(p => p.featured)
  const rest = sorted.filter(p => !p.featured)
  return [...featured.slice(0, count), ...rest].slice(0, count)
}

interface LatestInsightsProps {
  title?: string
  subtitle?: string
  postCount?: number
  showViewAllButton?: boolean
  className?: string
}

export default function LatestInsights({
  title = "Latest Insights",
  subtitle = "Practical wisdom for your transformation journey",
  postCount = 3,
  showViewAllButton = true,
  className = ""
}: LatestInsightsProps) {
  const latestPosts = getLatestFeaturedPosts(allPosts, postCount)

  return (
    <section className={`py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-phantom sm:text-4xl font-manrope">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-graphite font-manrope">
            {subtitle}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {latestPosts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        {showViewAllButton && (
          <div className="mt-16 text-center">
            <Link href="/blog" className="btn-primary inline-flex items-center">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
} 