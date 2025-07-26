import Link from 'next/link';
import { Calendar, User } from 'lucide-react';

const categoryColorMap: Record<string, string> = {
  ZAG: 'bg-teal-500 text-white',
  ZEN: 'bg-teal-500/10 text-teal-500',
  ACT: 'bg-teal-500/10 text-teal-500',
  GEM: 'bg-teal-500/10 text-teal-500',
  Leadership: 'bg-teal-500/10 text-teal-500',
  Featured: 'bg-teal-500/10 text-teal-500',
};

export type BlogCardPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  featured?: boolean;
  author?: {
    name: string;
    title: string;
  };
};

export default function BlogCard({ post }: { post: BlogCardPost }) {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 card">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${categoryColorMap[post.category] || 'bg-[#279595]/10 text-[#279595]'}`}>{post.category}</span>
          {post.featured && (
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${categoryColorMap['Featured']}`}>Featured</span>
          )}
        </div>
        <h3 className="font-heading text-xl font-bold text-slate-900 mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="font-body text-slate-600 mb-4 line-clamp-3">
          {post.description}
        </p>
        {post.author && (
          <div className="flex items-center gap-2 text-slate-500 mb-4">
            <User className="h-4 w-4" />
            <span className="font-body text-sm font-medium">{post.author.name}</span>
            <span className="font-body text-xs text-slate-400">•</span>
            <span className="font-body text-xs">{post.author.title}</span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500">
            <Calendar className="h-4 w-4" />
            <span className="font-body text-sm">{post.date}</span>
          </div>
          <Link 
            href={`/blog/${post.slug}`}
            className="font-body text-teal-500 hover:text-teal-600 font-medium text-sm transition-colors duration-200"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
} 