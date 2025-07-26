import Link from 'next/link'
import ContributorCard from '@/components/ContributorCard'

export default function ContributorsPage() {
  // Contributor data - currently all blog posts are written by Sheridan Richey
  const contributors = [
    {
      id: 'sheridan-richey',
      name: 'Sheridan Richey',
      title: 'Founder & Chief Strategist',
      bio: 'Sheridan Richey is a seasoned executive leader and entrepreneur who has guided multiple SaaS companies through transformative growth. With over two decades of experience in product development, M&A, and team leadership, Sheridan has developed the ZAG Matrix framework to help awakened technologists navigate their mid-career transformation. His journey spans executive roles at AdvancedMD, SirsiDynix, Extensiv, and Henry Schein One, alongside entrepreneurial ventures through Bring It Forward Investments.',
      headshot: '/assets/images/contributors/sheridan-richey.jpg',
      linkedin: 'https://linkedin.com/in/sheridanrichey',
      twitter: 'https://twitter.com/sheridanrichey',
      authoredPosts: [
        {
          title: 'The ZAG Matrix: A Framework for Awakened Technologists',
          slug: 'zag-matrix-framework-introduction',
          date: '2025-07-21'
        },
        {
          title: 'Finding Clarity Mid-Career: The ZEN Framework',
          slug: 'finding-clarity-mid-career',
          date: '2024-01-16'
        },
        {
          title: 'Building Momentum Through Relationships: The ACT Framework',
          slug: 'building-momentum-through-relationships',
          date: '2024-01-16'
        },
        {
          title: 'Strategic Career Moves: The GEM Framework',
          slug: 'strategic-career-moves',
          date: '2024-01-16'
        }
      ]
    }
  ]

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
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