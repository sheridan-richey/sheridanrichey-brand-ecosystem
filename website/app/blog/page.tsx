import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Tag, User } from 'lucide-react'
import { allPosts } from 'contentlayer/generated'

// Author data mapping for blog posts
const getAuthorData = (postSlug: string) => {
  const authorMap: Record<string, any> = {
    'finding-clarity-mid-career': {
      name: 'Sheridan Richey',
      title: 'Founder & Chief Strategist'
    },
    'building-momentum-through-relationships': {
      name: 'Sheridan Richey',
      title: 'Founder & Chief Strategist'
    },
    'strategic-career-moves': {
      name: 'Sheridan Richey',
      title: 'Founder & Chief Strategist'
    },
    'zag-matrix-framework-introduction': {
      name: 'Sheridan Richey',
      title: 'Founder & Chief Strategist'
    },
    'system-architect-for-life': {
      name: 'Sean Hokanson',
      title: 'Contributing Editor & Systems Architect'
    }
  }
  
  return authorMap[postSlug] || authorMap['finding-clarity-mid-career'] // Default to Sheridan
}

// Sort posts: featured first, then non-featured, both in descending date order
const blogPosts = allPosts
  .map(post => {
    const author = getAuthorData(post.slug)
    return {
      ...post,
      date: new Date(post.date).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      featured: post.featured === true,
      author: author
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
  ZEN: 'bg-teal-500/10 text-teal-500',
  ACT: 'bg-teal-500/10 text-teal-500',
  GEM: 'bg-teal-500/10 text-teal-500',
  Leadership: 'bg-teal-500/10 text-teal-500',
};

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
                  <Image
                    src="/assets/Emblem/SVG/Asset 4.svg"
                    alt="SR"
                    width={16}
                    height={16}
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
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-smoke">
                  <div className="text-center mb-6">
                    <h3 className="font-manrope text-2xl font-bold text-phantom mb-2">The ZAG Matrix</h3>
                    <p className="font-manrope text-graphite">Three interconnected pillars of transformation</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                      <span className="font-manrope text-xl font-bold text-white">Z</span>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                      <span className="font-manrope text-xl font-bold text-white">A</span>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                      <span className="font-manrope text-xl font-bold text-white">G</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-center">
                    <div>
                      <h4 className="font-manrope text-sm font-bold text-primary-500">Clarity</h4>
                    </div>
                    <div>
                      <h4 className="font-manrope text-sm font-bold text-primary-500">Momentum</h4>
                    </div>
                    <div>
                      <h4 className="font-manrope text-sm font-bold text-primary-500">Mastery</h4>
                    </div>
                  </div>
                </div>
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
            <article key={post.slug} className="bg-white rounded-xl shadow-sm border border-smoke overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${categoryColorMap[post.category] || 'bg-primary-500/10 text-primary-500'}`}>{post.category}</span>
                  {post.featured && (
                    <span className="inline-flex items-center px-2 py-1 bg-primary-500/10 rounded-full">
                      <span className="text-primary-500 font-manrope text-xs font-medium">Featured</span>
                    </span>
                  )}
                </div>
                <h3 className="font-manrope text-xl font-bold text-phantom mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="font-manrope text-graphite mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center gap-2 text-graphite mb-4">
                  <User className="h-4 w-4" />
                  <span className="font-manrope text-sm font-medium">{post.author.name}</span>
                  <span className="font-manrope text-xs text-graphite">•</span>
                  <span className="font-manrope text-xs">{post.author.title}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-graphite">
                    <Calendar className="h-4 w-4" />
                    <span className="font-manrope text-sm">{post.date}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="font-manrope text-teal-500 hover:text-teal-600 font-medium text-sm transition-colors duration-200"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-br from-primary-500/5 to-light-teal/5 rounded-2xl p-8 border border-smoke">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-manrope text-2xl font-bold text-phantom mb-4">
              Stay Connected with Your ZAG Journey
            </h3>
            <p className="font-manrope text-graphite mb-6">
              Get weekly insights, strategies, and stories delivered to your inbox. 
              Join other awakened technologists on their transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-smoke rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="font-manrope bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 