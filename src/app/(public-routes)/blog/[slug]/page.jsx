import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  CheckCircle,
  Tag,
} from "lucide-react";
import { getBlogs } from "@/lib/db";

// Custom Social Icon Components since they aren't available in this version of lucide-react
const Facebook = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


const categoryColors = {
  SEO: "bg-orange-100 text-orange-700",
  "Digital Marketing": "bg-blue-100 text-blue-700",
  "Social Media": "bg-pink-100 text-pink-700",
  "Web Development": "bg-emerald-100 text-emerald-700",
  "Performance Marketing": "bg-amber-100 text-amber-700",
  "Graphic Design": "bg-violet-100 text-violet-700",
};

export async function generateStaticParams() {
  const allPosts = await getBlogs();
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const allPosts = await getBlogs();
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog — Aksh Digital" };
  return {
    title: `${post.title} — Aksh Digital Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const allPosts = await getBlogs();
  const post = allPosts.find((p) => p.slug === slug);
  const relatedPosts = allPosts.filter((p) => p.slug !== slug && p.category === post?.category).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#14183e] mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-[#d25c41] font-semibold hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f1535] pt-16 sm:pt-20 pb-24 sm:pb-28 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#d25c41]/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#f6ac55] line-clamp-1">{post.title}</span>
          </nav>

          {/* Category Badge */}
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold mb-6 ${categoryColors[post.category] || "bg-slate-100 text-slate-700"}`}>
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-white leading-tight tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d25c41] text-white text-xs font-bold">AD</span>
              <span className="text-slate-300">{post.author}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-400"><Calendar className="h-4 w-4" />{post.date}</span>
            <span className="inline-flex items-center gap-1.5 text-slate-400"><Clock className="h-4 w-4" />{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative mx-auto max-w-4xl -mt-16 px-4 sm:px-6 z-20">
        <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <article className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Intro */}
          <p className="text-lg text-slate-700 leading-relaxed mb-10 font-medium border-l-4 border-[#d25c41] pl-5">
            {post.content.intro}
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {post.content.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl sm:text-2xl font-bold text-[#14183e] mb-3">{section.heading}</h2>
                <p className="text-slate-600 leading-relaxed text-base whitespace-pre-line">{section.body}</p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-10 rounded-2xl bg-[#fafaf9] border border-slate-200 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#14183e] mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#d25c41]" />
              Key Takeaway
            </h3>
            <p className="text-slate-700 leading-relaxed">{post.content.conclusion}</p>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-slate-400 shrink-0" />
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 hover:border-[#d25c41]/40 hover:text-[#d25c41] transition-colors cursor-pointer">
                {tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-semibold text-slate-700 flex items-center gap-2"><Share2 className="h-4 w-4" /> Share this article</p>
            <div className="flex items-center gap-2">
              {[
                { Icon: Facebook, label: "Facebook", color: "hover:text-blue-600" },
                { Icon: Twitter, label: "Twitter/X", color: "hover:text-slate-800" },
                { Icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-700" },
              ].map(({ Icon, label, color }) => (
                <button key={label} aria-label={`Share on ${label}`} className={`p-2.5 rounded-full border border-slate-200 text-slate-500 ${color} hover:border-current transition-all duration-200`}>
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </button>
              ))}
              <button aria-label="Bookmark" className="p-2.5 rounded-full border border-slate-200 text-slate-500 hover:text-[#d25c41] hover:border-[#d25c41]/40 transition-all duration-200">
                <Bookmark className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/blog" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-[#d25c41] hover:text-[#d25c41] transition-all duration-200">
              <ArrowLeft className="h-4 w-4" /> Back to All Articles
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-6 py-3 text-sm font-bold text-white hover:bg-[#b84d35] transition-colors ml-auto">
              Work With Us <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-14 px-4 sm:px-6 bg-[#fafaf9] border-t border-slate-100">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-[#14183e] mb-8">More in {post.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-44 overflow-hidden">
                    <Image src={rp.image} alt={rp.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-slate-500 mb-2 flex items-center gap-1"><Calendar className="h-3 w-3" />{rp.date}</p>
                    <h3 className="text-base font-bold text-[#14183e] leading-snug group-hover:text-[#d25c41] transition-colors">{rp.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#d25c41] to-[#b84d35] py-14 px-4 sm:px-6 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 mx-auto max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to Implement These Strategies?</h2>
          <p className="text-white/80 mb-6 text-sm">Let our experts build and execute a custom digital strategy for your business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#d25c41] hover:bg-slate-50 transition-colors shadow-lg">
            Get a Free Strategy Call <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
