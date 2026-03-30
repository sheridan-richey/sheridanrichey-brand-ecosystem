import BlogCard, { BlogCardPost } from '@/components/BlogCard'
import NewsletterCTA from '@/components/NewsletterCTA'
import ZagMatrixSidebar from '@/components/ZagMatrixSidebar'
import { getAllPosts } from '@/lib/posts'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
  const allPosts = getAllPosts()
  const blogPosts: BlogCardPost[] = allPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
    category: post.category,
    featured: post.featured === true,
    author: undefined
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-bg to-white">
      <div className="bg-white border-b border-smoke">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img
                  src="/sheridan-blog.jpg"
                  alt="Sheridan Richey"
                  className="rounded-full shadow-lg w-24 h-24 object-cover object-top border-4 border-white"
                />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-smoke">
                  <img src="/assets/Emblem/SVG/Asset 4.svg" alt="SR" className="w-4 h-4" />
                </div>
              </div>
            </div>
            <h1 className="font-manrope text-4xl md:text-5xl font-bold text-phantom mb-4">The ZAG Blog</h1>
            <p className="font-manrope text-lg md:text-xl text-graphite/90">
              One framework, three pillars—written for technologists who want signal, not noise.
            </p>
          </div>
        </div>
      </div>

      {blogPosts
        .filter((post) => post.featured)
        .map((post) => (
          <div key={post.slug} className="bg-white border-b border-smoke">
            <div className="max-w-7xl mx-auto px-6 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-primary-500/10 rounded-full mb-4">
                    <span className="text-primary-500 font-manrope text-sm font-medium">Featured Post</span>
                  </div>
                  <h2 className="font-manrope text-3xl md:text-4xl font-bold text-phantom mb-4">{post.title}</h2>
                  <p className="font-manrope text-lg text-graphite mb-6">{post.description}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-graphite">
                      <Calendar className="h-4 w-4" />
                      <span className="font-manrope text-sm">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4 text-primary-500" />
                      <span className="font-manrope text-sm font-medium text-primary-500">{post.category}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center font-manrope bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="relative">
                  <ZagMatrixSidebar />
                </div>
              </div>
            </div>
          </div>
        ))}

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="font-manrope text-3xl font-bold text-phantom mb-4">All Articles</h2>
          <p className="font-manrope text-graphite max-w-2xl">
            Weekly ideas in your inbox—browse the archive for the long-form version.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-smoke bg-gradient-to-br from-primary-500/5 to-light-teal/5 p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-manrope text-2xl font-bold text-phantom mb-4">The ZAG Navigator</h3>
            <p className="font-manrope text-graphite mb-6">
              Weekly clarity, momentum, and mastery—no fluff. Join the list.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <NewsletterCTA
                ctaSource="blog_index_footer"
                variant="default"
                size="lg"
                className="font-manrope font-semibold px-8 py-3 h-auto min-h-[2.75rem]"
              >
                Join the Newsletter
              </NewsletterCTA>
              <Link
                href="/zag-matrix"
                className="font-manrope border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-lg transition-colors duration-200 font-semibold"
              >
                Learn the Framework
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
