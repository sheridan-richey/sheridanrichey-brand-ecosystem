import Link from 'next/link'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import { allPosts } from 'contentlayer/generated'

// Sort posts by date (newest first) and format dates
const blogPosts = allPosts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map(post => ({
    ...post,
    date: new Date(post.date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }),
    featured: post.featured === true,
  }))

const categoryColorMap: Record<string, string> = {
  ZAG: 'bg-[#279595] text-white',
  ZEN: 'bg-[#6366F1]/10 text-[#6366F1]',
  ACT: 'bg-[#279595]/10 text-[#279595]',
  GEM: 'bg-[#8B5A3C]/10 text-[#8B5A3C]',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <img src="/sheridan-blog.jpg" alt="Sheridan Richey" className="rounded-2xl shadow-xl w-40 h-52 object-cover object-top mb-6 md:mb-0" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                The ZAG Blog
              </h1>
              <p className="font-body text-xl text-slate-600 max-w-3xl mx-auto md:mx-0">
                Insights, strategies, and stories for awakened technologists ready to integrate 
                clarity, momentum, and mastery into their purpose-driven careers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((post) => (
        <div key={post.slug} className="bg-gradient-to-br from-[#279595]/5 to-[#6366F1]/5 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-[#279595]/10 rounded-full mb-4">
                  <span className="text-[#279595] font-body text-sm font-medium">Featured Post</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {post.title}
                </h2>
                <p className="font-body text-lg text-slate-600 mb-6">
                  {post.description}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Calendar className="h-4 w-4" />
                    <span className="font-body text-sm">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className={`h-4 w-4 ${
                      post.category === 'ZEN' ? 'text-[#6366F1]' :
                      post.category === 'ACT' ? 'text-[#279595]' :
                      post.category === 'GEM' ? 'text-[#8B5A3C]' :
                      'text-[#279595]'
                    }`} />
                    <span className={`font-body text-sm font-medium ${
                      post.category === 'ZEN' ? 'text-[#6366F1]' :
                      post.category === 'ACT' ? 'text-[#279595]' :
                      post.category === 'GEM' ? 'text-[#8B5A3C]' :
                      'text-[#279595]'
                    }`}>{post.category}</span>
                  </div>
                </div>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center font-body bg-[#279595] hover:bg-[#1f7a7a] text-white px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                  <div className="text-center mb-6">
                    <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">The ZAG Matrix</h3>
                    <p className="font-body text-slate-600">Three interconnected pillars of transformation</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                      <span className="font-heading text-xl font-bold text-white">Z</span>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#279595] to-[#34D399] rounded-lg flex items-center justify-center">
                      <span className="font-heading text-xl font-bold text-white">A</span>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8B5A3C] to-[#D97706] rounded-lg flex items-center justify-center">
                      <span className="font-heading text-xl font-bold text-white">G</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-center">
                    <div>
                      <h4 className="font-heading text-sm font-bold text-[#6366F1]">Clarity</h4>
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-[#279595]">Momentum</h4>
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-[#8B5A3C]">Mastery</h4>
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
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">All Articles</h2>
          <p className="font-body text-slate-600">
            Explore insights and strategies for your career transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${categoryColorMap[post.category] || 'bg-[#279595]/10 text-[#279595]'}`}>{post.category}</span>
                  {post.featured && (
                    <span className="inline-flex items-center px-2 py-1 bg-[#6366F1]/10 rounded-full">
                      <span className="text-[#6366F1] font-body text-xs font-medium">Featured</span>
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="font-body text-slate-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Calendar className="h-4 w-4" />
                    <span className="font-body text-sm">{post.date}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="font-body text-[#279595] hover:text-[#1f7a7a] font-medium text-sm transition-colors duration-200"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-br from-[#279595]/5 to-[#6366F1]/5 rounded-2xl p-8 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">
              Stay Connected with Your ZAG Journey
            </h3>
            <p className="font-body text-slate-600 mb-6">
              Get weekly insights, strategies, and stories delivered to your inbox. 
              Join other awakened technologists on their transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#279595] focus:border-transparent"
              />
              <button className="font-body bg-[#279595] hover:bg-[#1f7a7a] text-white px-6 py-3 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 