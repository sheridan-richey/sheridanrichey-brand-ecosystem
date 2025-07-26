import Link from 'next/link'
import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react'

interface ZagMatrixSidebarProps {
  className?: string
}

export default function ZagMatrixSidebar({ className = "" }: ZagMatrixSidebarProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 border border-smoke ${className}`}>
      <div className="text-center mb-6">
        <h3 className="font-manrope text-2xl font-bold text-phantom mb-2">The ZAG Matrix</h3>
        <p className="font-manrope text-graphite text-sm">Three interconnected pillars of transformation</p>
      </div>
      
      {/* Visual Matrix */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-2">
            <span className="font-manrope text-xl font-bold text-white">Z</span>
          </div>
          <h4 className="font-manrope text-sm font-bold text-primary-500">Clarity</h4>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-2">
            <span className="font-manrope text-xl font-bold text-white">A</span>
          </div>
          <h4 className="font-manrope text-sm font-bold text-primary-500">Momentum</h4>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-2">
            <span className="font-manrope text-xl font-bold text-white">G</span>
          </div>
          <h4 className="font-manrope text-sm font-bold text-primary-500">Mastery</h4>
        </div>
      </div>

      {/* Brief Explanations */}
      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 bg-primary-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <Target className="h-3 w-3 text-primary-500" />
          </div>
          <div>
            <h5 className="font-manrope text-sm font-semibold text-phantom mb-1">ZEN</h5>
            <p className="font-manrope text-xs text-graphite">Find clarity, purpose, and mental resilience</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 bg-primary-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <Users className="h-3 w-3 text-primary-500" />
          </div>
          <div>
            <h5 className="font-manrope text-sm font-semibold text-phantom mb-1">ACT</h5>
            <p className="font-manrope text-xs text-graphite">Build physical well-being and strengthen relationships</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 bg-primary-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <TrendingUp className="h-3 w-3 text-primary-500" />
          </div>
          <div>
            <h5 className="font-manrope text-sm font-semibold text-phantom mb-1">GEM</h5>
            <p className="font-manrope text-xs text-graphite">Apply energy toward strategic career moves and growth</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Link 
          href="/zag-matrix"
          className="inline-flex items-center font-manrope text-primary-500 hover:text-primary-600 font-semibold text-sm transition-colors duration-200"
        >
          Learn the full framework
          <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  )
} 