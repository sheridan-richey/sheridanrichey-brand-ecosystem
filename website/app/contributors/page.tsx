import Link from 'next/link'
import ContributorCard from '@/components/ContributorCard'
import { getAllAuthors } from '@/data/authors'
import { allPosts } from 'contentlayer/generated'

export default function ContributorsPage() {
  // Get all authors and their authored posts
  const authors = getAllAuthors()
  const contributors = authors.map(author => {
    const authoredPosts = allPosts
      .filter(post => post.author === author.id)
      .map(post => ({
        title: post.title,
        slug: post.slug,
        date: new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return {
      ...author,
      authoredPosts
    }
  })

  return (
    <div className="min-h-screen bg-light-bg">
      {/* Header */}
      <div className="bg-white border-b border-smoke">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-h1 font-manrope font-bold text-phantom mb-6">
              Our Contributors
            </h1>
            <p className="text-lead font-manrope text-graphite max-w-3xl mx-auto">
              Meet the talented team of strategists, architects, and storytellers dedicated to helping you navigate your journey of transformation.
            </p>
          </div>
        </div>
      </div>

      {/* Contributors Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contributors.map((contributor) => (
            <ContributorCard key={contributor.id} contributor={contributor} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white border-t border-smoke">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-h2 font-manrope font-semibold text-phantom mb-4">
            Want to Contribute?
          </h2>
          <p className="text-body font-manrope text-graphite mb-8">
            We're always looking for experienced professionals who share our vision of helping awakened technologists transform their careers and lives.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-manrope font-medium rounded-lg transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
} 