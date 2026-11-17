import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { getBlogImage } from "@/lib/blog-image";
import { AuthorAvatar, CategoryPill, DEFAULT_AUTHOR } from "./BlogUi";

function PostMeta({ post, className = "" }) {
  if (!post.date && !post.readTime) return null;
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 ${className}`}>
      {post.date && (
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 text-primary/80" />
          {post.date}
        </span>
      )}
      {post.readTime && (
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-primary/80" />
          {post.readTime}
        </span>
      )}
    </div>
  );
}

// Grid card used on /blog and in "related posts" on the article page.
export default function BlogCard({ post }) {
  const author = post.author || DEFAULT_AUTHOR;
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-orange-200/60 bg-linear-to-br from-white via-white to-orange-50/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_20px_40px_-12px_rgba(210,92,65,0.22)]"
    >
      <div className="relative m-3 mb-0 aspect-16/10 overflow-hidden rounded-2xl bg-orange-50">
        <Image
          src={getBlogImage(post.image)}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <CategoryPill className="absolute left-3 top-3 shadow-xs backdrop-blur-sm">{post.category}</CategoryPill>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
        <div className="mb-4 h-1 w-8 rounded-full bg-linear-to-r from-primary to-secondary transition-all duration-300 group-hover:w-14" />
        <PostMeta post={post} className="mb-3" />
        <h3 className="mb-3 line-clamp-3 text-lg font-bold leading-snug text-[#14183e] transition-colors group-hover:text-primary sm:text-[19px]">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-orange-100/80 pt-4">
          <span className="flex min-w-0 items-center gap-2 text-xs font-semibold text-slate-600">
            <AuthorAvatar name={author} className="h-7 w-7 text-[10px]" />
            <span className="truncate">{author}</span>
          </span>
          <span className="flex shrink-0 items-center gap-1.5 text-xs font-bold text-primary">
            Read article
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

// Large horizontal card for the featured post on /blog.
export function FeaturedBlogCard({ post }) {
  const author = post.author || DEFAULT_AUTHOR;
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-orange-200/60 bg-linear-to-br from-white via-white to-orange-50/50 shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-primary/40 hover:shadow-[0_24px_48px_-16px_rgba(210,92,65,0.25)] lg:grid-cols-2"
    >
      <div className="relative m-3 aspect-16/10 overflow-hidden rounded-2xl bg-orange-50 lg:mr-0 lg:aspect-auto lg:min-h-90">
        <Image
          src={getBlogImage(post.image)}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          loading="eager"
          fetchPriority="high"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-[#e85b2e] to-[#f58d4a] px-3 py-1 text-xs font-bold text-white shadow-md">
          Featured
        </span>
      </div>

      <div className="relative flex flex-col justify-center p-6 sm:p-10">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <CategoryPill>{post.category}</CategoryPill>
          <PostMeta post={post} />
        </div>
        <h2 className="mb-4 line-clamp-3 text-2xl font-semibold leading-tight tracking-tight text-[#14183e] transition-colors group-hover:text-primary sm:text-3xl lg:text-[34px]">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="mb-7 line-clamp-3 text-[15px] leading-relaxed text-slate-600 sm:text-base">{post.excerpt}</p>
        )}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
            <AuthorAvatar name={author} />
            {author}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#e85b2e] via-[#ee7439] to-[#f58d4a] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(232,91,46,0.45)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_16px_32px_-5px_rgba(232,91,46,0.6)]">
            Read Full Article
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </Link>
  );
}
