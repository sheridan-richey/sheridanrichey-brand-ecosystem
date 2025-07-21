import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, Share2 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Format the date and handle featured status
  const formattedPost = {
    ...post,
    date: new Date(post.date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }),
    featured: post.featured === 'true'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link 
            href="/blog"
            className="inline-flex items-center font-body text-[#279595] hover:text-[#1f7a7a] mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
                      <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full ${
                  formattedPost.category === 'ZEN' ? 'bg-[#6366F1]/10' :
                  formattedPost.category === 'ACT' ? 'bg-[#279595]/10' :
                  formattedPost.category === 'GEM' ? 'bg-[#8B5A3C]/10' :
                  'bg-[#279595]/10'
                }`}>
                  <span className={`font-body text-sm font-medium ${
                    formattedPost.category === 'ZEN' ? 'text-[#6366F1]' :
                    formattedPost.category === 'ACT' ? 'text-[#279595]' :
                    formattedPost.category === 'GEM' ? 'text-[#8B5A3C]' :
                    'text-[#279595]'
                  }`}>{formattedPost.category}</span>
                </span>
                {formattedPost.featured && (
                  <span className="inline-flex items-center px-3 py-1 bg-[#6366F1]/10 rounded-full">
                    <span className="text-[#6366F1] font-body text-sm font-medium">Featured</span>
                  </span>
                )}
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                {formattedPost.title}
              </h1>
              
              <p className="font-body text-xl text-slate-600 mb-6">
                {formattedPost.description}
              </p>
              
              <div className="flex items-center gap-6 text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="font-body text-sm">{formattedPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className={`h-4 w-4 ${
                    formattedPost.category === 'ZEN' ? 'text-[#6366F1]' :
                    formattedPost.category === 'ACT' ? 'text-[#279595]' :
                    formattedPost.category === 'GEM' ? 'text-[#8B5A3C]' :
                    'text-[#279595]'
                  }`} />
                  <span className={`font-body text-sm ${
                    formattedPost.category === 'ZEN' ? 'text-[#6366F1]' :
                    formattedPost.category === 'ACT' ? 'text-[#279595]' :
                    formattedPost.category === 'GEM' ? 'text-[#8B5A3C]' :
                    'text-[#279595]'
                  }`}>{formattedPost.category}</span>
                </div>
              <button className="flex items-center gap-2 hover:text-[#279595] transition-colors duration-200">
                <Share2 className="h-4 w-4" />
                <span className="font-body text-sm">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-lg max-w-none">
          <div className="blog-content font-body text-slate-700 leading-relaxed">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({children}) => <h1 className="font-heading text-4xl font-bold text-slate-900 mt-8 mb-6">{children}</h1>,
                h2: ({children}) => <h2 className="font-heading text-3xl font-bold text-slate-900 mt-8 mb-4">{children}</h2>,
                h3: ({children}) => <h3 className="font-heading text-2xl font-bold text-slate-900 mt-6 mb-3">{children}</h3>,
                h4: ({children}) => <h4 className="font-heading text-xl font-bold text-slate-900 mt-4 mb-2">{children}</h4>,
                p: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
                ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
                li: ({children}) => <li className="ml-4">{children}</li>,
                strong: ({children}) => <strong className="font-semibold text-slate-900">{children}</strong>,
                em: ({children}) => <em className="italic">{children}</em>,
                blockquote: ({children}) => <blockquote className="border-l-4 border-[#279595] pl-4 italic text-slate-600 mb-4">{children}</blockquote>,
                code: ({children}) => <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono">{children}</code>,
                pre: ({children}) => <pre className="bg-slate-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
              }}
            >
              {formattedPost.body.raw}
            </ReactMarkdown>
          </div>
        </article>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="h-4 w-4 text-slate-500" />
            <span className="font-body text-sm font-medium text-slate-700">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {formattedPost.tags?.map((tag) => (
              <span 
                key={tag}
                className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full"
              >
                <span className="font-body text-sm text-slate-600">{tag}</span>
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-[#279595]/5 to-[#6366F1]/5 rounded-2xl p-8 border border-slate-200">
          <div className="text-center">
            <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">
              Ready to Start Your ZAG Journey?
            </h3>
            <p className="font-body text-slate-600 mb-6">
              Join other awakened technologists who are transforming their careers and lives with the ZAG Matrix framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/zag-matrix"
                className="font-body bg-[#279595] hover:bg-[#1f7a7a] text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Explore the Framework
              </Link>
              <Link 
                href="/contact"
                className="font-body border-2 border-[#279595] text-[#279595] hover:bg-[#279595] hover:text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Join the Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 