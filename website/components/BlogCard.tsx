import Link from 'next/link';
import { Calendar } from 'lucide-react';

const categoryColorMap: Record<string, string> = {
  ZAG: 'bg-[#279595]/10 text-[#279595]',
  ZEN: 'bg-[#279595]/10 text-[#279595]',
  ACT: 'bg-[#279595]/10 text-[#279595]',
  GEM: 'bg-[#279595]/10 text-[#279595]',
  Featured: 'bg-[#279595]/10 text-[#279595]',
};

export type BlogCardPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  featured?: boolean;
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
  );
} 