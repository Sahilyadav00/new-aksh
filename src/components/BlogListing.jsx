"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Search, X } from "lucide-react";
import BlogCard, { FeaturedBlogCard } from "@/components/blog/BlogCard";
import {
  BlogCtaBanner,
  Eyebrow,
  GRADIENT_TEXT,
  HeroBackdrop,
} from "@/components/blog/BlogUi";

function matchesQuery(post, q) {
  if (!q) return true;
  return [post.title, post.excerpt, post.category, ...(post.tags || [])].some(
    (v) => v?.toLowerCase().includes(q),
  );
}

export default function BlogListing({ posts }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Categories come from real posts only
  const categories = [
    "All",
    ...new Set(posts.map((p) => p.category).filter(Boolean)),
  ];

  const q = query.trim().toLowerCase();
  const isFiltering = q !== "" || activeCategory !== "All";
  const featuredPost = posts.find((p) => p.featured) || posts[0];

  const gridPosts = isFiltering
    ? posts.filter(
        (p) =>
          (activeCategory === "All" || p.category === activeCategory) &&
          matchesQuery(p, q),
      )
    : posts.filter((p) => p !== featuredPost);

  const clearFilters = () => {
    setQuery("");
    setActiveCategory("All");
  };

  return (
    <>
      {/* Hero — same warm gradient + dotted pattern as the home hero */}
      <section className="relative w-full overflow-hidden border-b border-orange-100/60 bg-linear-to-b from-[#fdfaf8] via-[#faf7f3] to-[#f8f4ed] px-4 pt-6 sm:px-6 md:px-8">
        <HeroBackdrop />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-500"
          >
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-slate-700">Blog</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-orange-600 shadow-2xs sm:text-[13px]">
            <BookOpen className="h-3.5 w-3.5" strokeWidth={2.5} />
            <span>Aksh Digital Blog • Growth Insights</span>
          </div>

          <h1 className="mb-5 mt-5 text-[34px] font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-[46px] md:text-[56px]">
            Expert Insights to{" "}
            <span className={GRADIENT_TEXT}>Grow Your Business</span>
          </h1>
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base md:text-lg">
            Actionable strategies, industry trends, and proven frameworks on
            SEO, performance marketing, social media, and web development —
            straight from the Aksh Digital team.
          </p>

          {posts.length > 0 && (
            <div className="mx-auto mt-8 max-w-xl">
              <div className="relative">
                <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles, topics or tags..."
                  aria-label="Search articles"
                  className="w-full rounded-full border border-slate-200/90 bg-white py-4 pl-13 pr-6 text-sm text-slate-800 shadow-[0_10px_30px_-12px_rgba(210,92,65,0.18)] transition-all placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                />
              </div>
              <p className="mt-3 text-xs font-medium text-slate-500">
                {posts.length} {posts.length === 1 ? "article" : "articles"}
                {categories.length > 1 &&
                  ` • ${categories.length - 1} ${categories.length === 2 ? "topic" : "topics"}`}
              </p>
            </div>
          )}
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="bg-linear-to-b from-[#f4f1ea] via-[#faf8f5] to-[#f1ede5] px-4 py-10 text-center sm:px-6">
          <div className="mx-auto max-w-md rounded-3xl border border-orange-200/60 bg-white/80 p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-primary">
              <BookOpen className="h-6 w-6" />
            </span>
            <h2 className="mb-2 text-2xl font-semibold text-[#14183e]">
              No articles published yet
            </h2>
            <p className="text-sm text-slate-500">
              New insights are on the way — check back soon.
            </p>
          </div>
        </section>
      ) : (
        <section className="w-full bg-linear-to-b from-[#f4f1ea] via-[#faf8f5] to-[#f1ede5] px-4 py-6 sm:px-6 md:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Category chips */}
            {categories.length > 2 && (
              <div className="-mx-4 mb-10 overflow-x-auto px-4 sm:mx-0 sm:px-0 [scrollbar-width:none]">
                <div className="flex w-max items-center gap-2 sm:w-auto sm:flex-wrap sm:justify-center">
                  {categories.map((cat) => {
                    const active = cat === activeCategory;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setActiveCategory(cat)}
                        aria-pressed={active}
                        className={`shrink-0 cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                          active
                            ? "border-transparent bg-linear-to-r from-[#e85b2e] to-[#f58d4a] text-white shadow-[0_8px_20px_-6px_rgba(232,91,46,0.5)]"
                            : "border-orange-200/70 bg-white text-slate-600 hover:border-primary/40 hover:text-primary"
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Featured post (hidden while searching/filtering) */}
            {!isFiltering && featuredPost && (
              <div className="mb-14">
                <FeaturedBlogCard post={featuredPost} />
              </div>
            )}

            {/* Grid */}
            {(isFiltering || gridPosts.length > 0) && (
              <>
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <Eyebrow>
                      {isFiltering ? "Search Results" : "Latest Articles"}
                    </Eyebrow>
                    <h2 className="mt-3 text-[26px] font-semibold leading-tight text-[#14183e] sm:text-[32px]">
                      {isFiltering
                        ? activeCategory !== "All"
                          ? `Articles in ${activeCategory}`
                          : "Matching Articles"
                        : "Fresh Ideas for Your Growth"}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-orange-200/70 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                      {gridPosts.length}{" "}
                      {gridPosts.length === 1 ? "article" : "articles"}
                    </span>
                    {isFiltering && (
                      <button
                        type="button"
                        onClick={clearFilters}
                        className="inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-primary hover:underline"
                      >
                        <X className="h-3.5 w-3.5" /> Clear
                      </button>
                    )}
                  </div>
                </div>

                {gridPosts.length === 0 ? (
                  <div className="rounded-3xl border border-dashed border-orange-200 bg-white/70 py-16 text-center text-slate-500">
                    <p className="mb-1 font-semibold text-slate-700">
                      No articles match your search
                    </p>
                    <p className="text-sm">
                      Try a different keyword or category.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
                    {gridPosts.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      )}

      <BlogCtaBanner
        eyebrow="Let's Build Your Growth Roadmap"
        title="Ready to Turn These Insights into Real Growth?"
        text="Whether you need SEO, high-ROAS paid ads, or a high-converting website, our team will build a custom strategy for your business."
      />
    </>
  );
}
