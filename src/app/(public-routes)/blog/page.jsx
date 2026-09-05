import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  User,
  Folder,
  Search,
  TrendingUp,
  Clock,
} from "lucide-react";
import { getBlogs } from "@/lib/db";

export const metadata = {
  title: "Blog | Digital Marketing & SEO Insights — Aksh Digital",
  description:
    "Stay ahead with expert articles on SEO, digital marketing, social media, web development, and performance marketing from the Aksh Digital team.",
};

const categories = [
  "All",
  "SEO",
  "Digital Marketing",
  "Social Media",
  "Web Development",
  "Performance Marketing",
  "Graphic Design",
];

const categoryColors = {
  SEO: "bg-orange-100 text-orange-700",
  "Digital Marketing": "bg-blue-100 text-blue-700",
  "Social Media": "bg-pink-100 text-pink-700",
  "Web Development": "bg-emerald-100 text-emerald-700",
  "Performance Marketing": "bg-amber-100 text-amber-700",
  "Graphic Design": "bg-violet-100 text-violet-700",
};

export default async function BlogPage() {
  const blogPosts = await getBlogs();
  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter((p) => p !== featuredPost);
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#d25c41]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#f6ac55]/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d25c41]/30 bg-[#d25c41]/10 px-4 py-1.5 text-sm font-semibold text-[#f6ac55] mb-6">
            <TrendingUp className="h-3.5 w-3.5" />
            Digital Marketing Insights
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-tight tracking-tight mb-6">
            Expert Insights to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] to-[#f6ac55]">
              Grow Your Business
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Actionable strategies, industry trends, and proven frameworks from the Aksh Digital team — delivered straight to your screen.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-white/10 border border-white/20 rounded-full py-3.5 pl-12 pr-6 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d25c41]/60 focus:bg-white/15 transition-all text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-slate-100 bg-white py-5 px-4 sm:px-6 sticky top-0 z-40 shadow-sm">
        <div className="mx-auto max-w-6xl flex items-center gap-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 ${
                cat === "All"
                  ? "bg-[#d25c41] text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-[#d25c41]/10 hover:text-[#d25c41]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#fafaf9]">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#d25c41] mb-6">Featured Article</p>
            <Link href={`/blog/${featuredPost.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 lg:h-auto min-h-[280px] overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${categoryColors[featuredPost.category] || "bg-slate-100 text-slate-700"}`}>
                  <Folder className="h-3 w-3" />
                  {featuredPost.category}
                </span>
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{featuredPost.date}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#14183e] leading-tight mb-4 group-hover:text-[#d25c41] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-2 text-sm font-bold text-[#d25c41] group-hover:gap-3 transition-all duration-300">
                  Read Full Article <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#14183e]">Latest Articles</h2>
            <span className="text-sm text-slate-500">{regularPosts.length} articles</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${categoryColors[post.category] || "bg-slate-100 text-slate-700"}`}>
                    <Folder className="h-3 w-3" />
                    {post.category}
                  </span>
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{post.date}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#14183e] leading-snug mb-3 group-hover:text-[#d25c41] transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <User className="h-3.5 w-3.5" />
                      <span>{post.author}</span>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-bold text-[#d25c41]">
                      Read <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#d25c41] to-[#b84d35] py-16 px-4 sm:px-6 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 mx-auto max-w-xl">
          <h2 className="text-3xl font-bold text-white mb-3">Get Insights Delivered Weekly</h2>
          <p className="text-white/80 mb-8 text-sm">Join 2,000+ marketers who read our newsletter every week.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full px-5 py-3 text-sm text-slate-800 focus:outline-none"
            />
            <button className="rounded-full bg-[#14183e] text-white px-6 py-3 text-sm font-bold hover:bg-slate-800 transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
