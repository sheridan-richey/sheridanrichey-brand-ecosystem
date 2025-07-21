import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, Share2 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// This would typically come from your CMS or data source
const blogPosts = [
  {
    title: "The ZAG Matrix: A Framework for Awakened Technologists",
    description: "Discover how the ZAG Matrix helps mid-career professionals integrate clarity, momentum, and mastery into purpose-driven careers. A proven framework for those who've achieved success but crave greater meaning.",
    date: "2025-07-21",
    category: "ZAG",
    tags: ["ZAG Matrix", "career transformation", "mid-career", "purpose", "framework", "executive leadership"],
    featured: true,
    slug: "zag-matrix-framework-introduction",
    content: `
# The ZAG Matrix: A Framework for Awakened Technologists

You've achieved success. You've built a career. You've proven your value. But something's missing.

This is the paradox that haunts mid-career professionals: you've reached the heights you once dreamed of, only to discover that success alone isn't enough. You're not alone in this feeling—and there's a framework that can help.

## The Awakened Technologist's Dilemma

Meet Alex. Alex is a mid-career professional who has achieved what most people consider success:

- **Career:** Senior leadership role at a respected company
- **Financial:** Comfortable income and growing wealth
- **Skills:** Proven track record and strong reputation
- **Network:** Valuable connections and industry recognition

But Alex feels stuck. The next promotion doesn't excite them. The bigger paycheck doesn't satisfy them. They're successful by every traditional metric, yet they're questioning whether this is what they actually want.

**Sound familiar?**

This is the moment of awakening that many high-achieving professionals experience in their 30s and 40s. It's not a crisis—it's an evolution. You're not failing; you're growing beyond the metrics that once defined your success.

## Introducing the ZAG Matrix

The ZAG Matrix is a framework I've developed through 20+ years of executive leadership and entrepreneurship. It's designed specifically for professionals like Alex—and like you—who have achieved success but are ready for something more meaningful.

### What ZAG Stands For

**Z** - **ZEN (Zeal Evolves Now)**: Finding clarity, purpose, and mental resilience
**A** - **ACT (Awaken Core Thrust)**: Building physical well-being and strengthening key relationships
**G** - **GEM (Growth Earns Mastery)**: Applying zeal and energy toward strategic career moves and entrepreneurial growth

Think of it as a Rubik's cube for your career—three interconnected dimensions that, when aligned, create a life of purpose, momentum, and mastery.

## The Three Pillars Explained

### ZEN: The Foundation of Clarity

**Zeal Evolves Now** is about reconnecting with your authentic self and finding clarity in what truly matters.

**Key Questions:**
- What problems do I genuinely enjoy solving?
- When do I feel most energized and alive?
- What would I do even if I wasn't getting paid for it?

**Practical Application:**
- Daily mindfulness practices
- Regular reflection and journaling
- Identifying your core values and drivers
- Letting go of what no longer serves you

ZEN is the foundation. Without clarity about who you are and what you want, everything else becomes misaligned.

### ACT: The Engine of Momentum

**Awaken Core Thrust** focuses on building the physical and relational foundation that sustains long-term growth.

**Key Areas:**
- **Physical Well-being:** Energy management, health optimization, stress resilience
- **Key Relationships:** Strengthening connections with family, mentors, and trusted advisors
- **Core Systems:** Building habits and routines that support your goals

**Practical Application:**
- Establishing consistent sleep and exercise routines
- Investing in relationships that matter most
- Creating systems that reduce decision fatigue
- Building resilience for the challenges ahead

ACT is the engine. It's about having the energy and support to sustain the journey.

### GEM: The Strategy of Mastery

**Growth Earns Mastery** is about applying your clarity and energy toward strategic career moves and entrepreneurial opportunities.

**Key Focus Areas:**
- **Strategic Career Moves:** Identifying opportunities that align with your ZEN clarity
- **Entrepreneurial Growth:** Building side projects, investments, or new ventures
- **Skill Development:** Continuously evolving your capabilities
- **Network Expansion:** Connecting with people who can accelerate your growth

**Practical Application:**
- Identifying high-impact career opportunities
- Building multiple income streams
- Developing skills that compound over time
- Creating strategic partnerships and collaborations

GEM is the strategy. It's about making smart moves that compound your growth over time.

## Why This Framework Works

The ZAG Matrix works because it addresses the three critical gaps that most career frameworks miss:

### 1. **Integration Over Isolation**
Most career advice focuses on one dimension—either mindset, relationships, or strategy. The ZAG Matrix recognizes that these elements are interconnected and must work together.

### 2. **Purpose Over Position**
Traditional career advice focuses on climbing the ladder. The ZAG Matrix helps you build a life that aligns with your authentic self.

### 3. **Sustainability Over Speed**
Quick fixes and shortcuts don't work for lasting transformation. The ZAG Matrix is designed for sustainable, long-term growth.

## How to Apply the ZAG Matrix

### Start with ZEN (Clarity)
1. **Week 1:** Assess your current satisfaction levels across all life areas
2. **Week 2:** Identify what truly energizes and motivates you
3. **Week 3:** Clarify your core values and non-negotiables
4. **Week 4:** Create a vision for what you want your life to look like

### Build ACT (Momentum)
1. **Month 2:** Establish foundational health and energy practices
2. **Month 3:** Strengthen key relationships and support systems
3. **Month 4:** Create systems and routines that support your goals

### Execute GEM (Mastery)
1. **Month 5:** Identify strategic opportunities that align with your clarity
2. **Month 6:** Begin building multiple income streams and growth channels
3. **Month 7+:** Continuously iterate and optimize based on results

## The Transformation Journey

The ZAG Matrix isn't a quick fix—it's a framework for transformation. Here's what you can expect:

### Phase 1: Awakening (Months 1-3)
- Increased clarity about what you truly want
- Growing dissatisfaction with the status quo
- Initial steps toward change

### Phase 2: Building (Months 4-6)
- Establishing new habits and systems
- Strengthening relationships and support
- Beginning to see momentum

### Phase 3: Accelerating (Months 7-12)
- Strategic moves that compound your growth
- Multiple income streams and opportunities
- Living a life that aligns with your authentic self

## Your Next Steps

The ZAG Matrix is more than a framework—it's a roadmap for the life you're meant to live. Here's how to get started:

### 1. **Assess Your Current State**
Take an honest look at where you are in each pillar:
- **ZEN:** How clear are you about what you want?
- **ACT:** How strong is your foundation of energy and relationships?
- **GEM:** How strategic are your career and growth moves?

### 2. **Identify Your Starting Point**
Most people are strong in one or two areas but weak in others. Where do you need to focus first?

### 3. **Take One Small Step**
Transformation happens through consistent action. What's one small step you can take today?

## The Invitation

If you're reading this and nodding along, you're ready for the next phase of your journey. The ZAG Matrix isn't just about career success—it's about building a life that feels authentic, meaningful, and aligned with who you truly are.

**The question isn't whether you can transform your career and life—it's whether you're ready to do the work.**

Are you ready to stop chasing success and start living ZAG?
    `
  },
  {
    title: "Finding Clarity When You're Stuck in Success",
    description: "How to break through the plateau of achievement and discover what truly drives you forward in your career and life.",
    date: "2024-01-16",
    category: "ZEN",
    tags: ["clarity", "purpose", "mid-career", "transformation"],
    featured: false,
    slug: "finding-clarity-mid-career",
    content: `
# Finding Clarity When You're Stuck in Success

You've climbed the ladder. You've hit your targets. You've built a reputation. But something's missing.

This is the paradox of mid-career success: you've achieved what you set out to achieve, but now you're questioning whether it's what you actually want. You're not alone in this feeling.

## The Success Plateau

Most high-achieving professionals hit this wall around their mid-30s to early 40s. You've mastered your craft, built relationships, and proven your value. But the next steps aren't as clear as they once were.

The problem isn't that you're not successful—it's that success has become comfortable, and comfort is the enemy of growth.

## The ZEN Framework: Your Path to Clarity

This is exactly where the **ZEN (Zeal Evolves Now)** component of the ZAG Matrix becomes crucial. Here's how to apply it:

### 1. **Zeal** - Reconnect with Your Core Drivers

Ask yourself these questions:
- What problems do I genuinely enjoy solving?
- When do I feel most energized at work?
- What would I do even if I wasn't getting paid for it?

Your answers reveal your authentic zeal—the intrinsic motivation that sustains long-term engagement.

### 2. **Evolves** - Embrace Continuous Transformation

Success isn't a destination; it's a journey of constant evolution. Consider:
- What skills do I need to develop for the next phase?
- How can I expand my impact beyond my current role?
- What new challenges would stretch me in meaningful ways?

### 3. **Now** - Take Immediate Action

Clarity comes through action, not endless contemplation. Start with:
- A 30-day experiment in a new area of interest
- A conversation with someone who's made a similar transition
- A small investment in learning something completely new

## Practical Steps to Break Through

### Week 1: Assessment
- **Monday**: Journal about your current satisfaction levels across work, relationships, health, and growth
- **Wednesday**: Identify 3 areas where you feel most stuck
- **Friday**: List 3 potential directions that excite you

### Week 2: Exploration
- **Monday**: Reach out to someone who's successfully navigated a similar transition
- **Wednesday**: Try something completely outside your comfort zone
- **Friday**: Reflect on what you learned and how it feels

### Week 3: Experimentation
- **Monday**: Start a small project in an area of interest
- **Wednesday**: Share your experiment with a trusted colleague or mentor
- **Friday**: Assess what you've learned and what's next

### Week 4: Integration
- **Monday**: Identify patterns in what energizes you
- **Wednesday**: Create a 90-day plan for your next phase
- **Friday**: Commit to one significant action that moves you forward

## The Power of Small Wins

Remember, transformation doesn't happen overnight. It's the accumulation of small, consistent actions that create lasting change.

Start with one small step today. Maybe it's:
- Scheduling a coffee with someone whose career path intrigues you
- Signing up for a course in an area you've been curious about
- Taking on a project that stretches your current capabilities

## What's Next?

Clarity is just the beginning. Once you have it, you'll need to build momentum (ACT) and apply it strategically (GEM). But clarity is the foundation that makes everything else possible.

**The question isn't whether you'll find clarity—it's whether you're willing to do the work to discover it.**

What's one small action you can take today to move toward greater clarity in your career?
    `
  }
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
          <p className="font-body text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            href="/blog"
            className="inline-flex items-center font-body bg-[#279595] hover:bg-[#1f7a7a] text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
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
              <span className="inline-flex items-center px-3 py-1 bg-[#279595]/10 rounded-full">
                <span className="text-[#279595] font-body text-sm font-medium">{post.category}</span>
              </span>
              {post.featured && (
                <span className="inline-flex items-center px-3 py-1 bg-[#6366F1]/10 rounded-full">
                  <span className="text-[#6366F1] font-body text-sm font-medium">Featured</span>
                </span>
              )}
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {post.title}
            </h1>
            
            <p className="font-body text-xl text-slate-600 mb-6">
              {post.description}
            </p>
            
            <div className="flex items-center gap-6 text-slate-500">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="font-body text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span className="font-body text-sm">{post.category}</span>
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
              {post.content}
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
            {post.tags.map((tag) => (
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