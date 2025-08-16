import ZagMatrixSidebar from '@/components/ZagMatrixSidebar'
import { allPosts } from 'contentlayer/generated'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import Link from 'next/link'

// Sort posts: featured first, then non-featured, both in descending date order
const blogPosts = allPosts
  .map(post => {
    return {
      ...post,
      date: new Date(post.date).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      featured: post.featured === true,
      author: null // Temporarily remove author until contentlayer issue is resolved
    }
  })
  .sort((a, b) => {
    // First sort by featured status (featured posts first)
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    // Then sort by date (newest first)
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  })

const categoryColorMap: Record<string, string> = {
  ZAG: 'bg-teal-500 text-white',
  ZEN: 'bg-zag-zen-light text-zag-zen-dark',
  ACT: 'bg-zag-act-light text-zag-act-dark',
  GEM: 'bg-zag-gem-light text-zag-gem-dark',
  Featured: 'bg-teal-500/10 text-teal-500',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-bg to-white">
      {/* Header */}
      <div className="bg-white border-b border-smoke">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img 
                  src="/sheridan-blog.jpg" 
                  alt="Sheridan Richey" 
                  className="rounded-full shadow-lg w-24 h-24 object-cover object-top border-4 border-white" 
                />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-smoke">
                  <img
                    src="/assets/Emblem/SVG/Asset 4.svg"
                    alt="SR"
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
            <h1 className="font-manrope text-4xl md:text-5xl font-bold text-phantom mb-4">
              The ZAG Blog
            </h1>
            <p className="font-manrope text-xl text-graphite">
              Insights, strategies, and stories for awakened technologists ready to integrate 
              clarity, momentum, and mastery into their purpose-driven careers.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((post) => (
        <div key={post.slug} className="bg-gradient-to-br from-primary-500/5 to-light-teal/5 border-b border-smoke">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-primary-500/10 rounded-full mb-4">
                  <span className="text-primary-500 font-manrope text-sm font-medium">Featured Post</span>
                </div>
                <h2 className="font-manrope text-3xl md:text-4xl font-bold text-phantom mb-4">
                  {post.title}
                </h2>
                <p className="font-manrope text-lg text-graphite mb-6">
                  {post.description}
                </p>
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

      {/* All Posts */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="font-manrope text-3xl font-bold text-phantom mb-4">All Articles</h2>
          <p className="font-manrope text-graphite">
            Explore insights and strategies for your career transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="bg-white rounded-xl shadow-sm border border-smoke overflow-hidden hover:shadow-lg transition-all duration-200 h-full flex flex-col cursor-pointer">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${categoryColorMap[post.category] || 'bg-primary-500/10 text-primary-500'}`}>{post.category}</span>
                    {post.featured && (
                      <span className="inline-flex items-center px-2 py-1 bg-primary-500/10 rounded-full">
                        <span className="text-primary-500 font-manrope text-xs font-medium">Featured</span>
                      </span>
                    )}
                  </div>
                  <h3 className="font-manrope text-xl font-bold text-phantom mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="font-manrope text-graphite mb-4 line-clamp-3 flex-1">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-graphite">
                      <Calendar className="h-4 w-4" />
                      <span className="font-manrope text-sm">{post.date}</span>
                    </div>
                    <div className="font-manrope text-teal-500 group-hover:text-teal-600 font-medium text-sm transition-colors duration-200">
                      Read More →
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-br from-primary-500/5 to-light-teal/5 rounded-2xl p-8 border border-smoke">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-manrope text-2xl font-bold text-phantom mb-4">
              Stay Connected with Your ZAG Journey
            </h3>
            <p className="font-manrope text-graphite mb-6">
              Get weekly insights, strategies, and stories delivered to your inbox. 
              Join other awakened technologists on their transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/newsletter"
                className="font-manrope bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg transition-colors duration-200 font-semibold"
              >
                Join the Newsletter
              </Link>
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