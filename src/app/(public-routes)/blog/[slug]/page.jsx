import { cache } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  Phone,
  Share2,
  Tag,
} from "lucide-react";
import { getBlogs, getBlogBySlug } from "@/lib/db";
import { getBlogImage, getBlogCoverImage } from "@/lib/blog-image";
import BlogCard from "@/components/blog/BlogCard";
import BlogLeadForm from "@/components/blog/BlogLeadForm";
import {
  AuthorAvatar,
  BlogCtaBanner,
  CategoryPill,
  DEFAULT_AUTHOR,
  Eyebrow,
  HeroBackdrop,
} from "@/components/blog/BlogUi";

const SITE_URL = "https://www.akshdigital.in";
const PHONE_DISPLAY = "+91 95499 49918";
const PHONE_LINK = "tel:+919549949918";

// Shared by generateMetadata and the page so the post is fetched once per request.
const getPost = cache((slug) => getBlogBySlug(slug));

function toIsoDate(value) {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
}

function absoluteUrl(src) {
  if (!src) return undefined;
  if (/^https?:\/\//i.test(src)) return src;
  return `${SITE_URL}${src.startsWith("/") ? "" : "/"}${src}`;
}

// Admin-entered meta fields win; otherwise fall back to the post's own content.
function getPostSeo(post, slug) {
  const keywords = post.metaKeywords?.length
    ? post.metaKeywords
    : post.tags || [];
  return {
    title: post.metaTitle || `${post.title} — Aksh Digital Blog`,
    description: post.metaDescription || post.excerpt,
    keywords,
    url: `${SITE_URL}/blog/${slug}/`,
    image: absoluteUrl(getBlogCoverImage(post.image)),
    publishedTime: toIsoDate(post.createdAt || post.date),
    modifiedTime: toIsoDate(post.updatedAt || post.createdAt || post.date),
  };
}

// Brand icons (not available in this version of lucide-react)
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.931-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12.012 2C6.48 2 2 6.48 2 12.012c0 1.764.456 3.48 1.332 5.004L2 22l5.124-1.308a9.927 9.927 0 0 0 4.888 1.272c5.532 0 10.012-4.48 10.012-10.012C22.024 6.48 17.544 2 12.012 2zm6.264 14.34c-.252.708-1.476 1.344-2.028 1.416-.504.072-1.02.108-3.192-.792-2.772-1.14-4.56-3.96-4.704-4.14-.132-.18-1.14-1.512-1.14-2.892 0-1.38.72-2.052.972-2.328.252-.276.552-.348.732-.348.18 0 .36 0 .516.012.168.012.396-.06.624.492.228.552.78 1.908.852 2.052.072.144.12.312.024.504-.096.192-.144.312-.288.48-.144.168-.3.372-.432.504-.144.144-.3.3-.132.588.168.288.756 1.248 1.62 2.016.9 1.104 1.632 1.44 1.92 1.584.288.144.456.12.624-.072.168-.192.732-.852.924-1.14.192-.288.384-.24.648-.144.264.096 1.68.792 1.968.936.288.144.48.216.552.336.072.132.072.768-.18 1.476z" />
  </svg>
);

function getShareLinks(url, title) {
  const u = encodeURIComponent(url);
  return [
    {
      label: "Facebook",
      Icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    },
    {
      label: "X",
      Icon: XIcon,
      href: `https://twitter.com/intent/tweet?url=${u}&text=${encodeURIComponent(title)}`,
    },
    {
      label: "LinkedIn",
      Icon: LinkedinIcon,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    },
    {
      label: "WhatsApp",
      Icon: WhatsAppIcon,
      href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    },
  ];
}

export async function generateStaticParams() {
  const allPosts = await getBlogs();
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post)
    return {
      title: "Article Not Found — Aksh Digital Blog",
      robots: { index: false },
    };

  const seo = getPostSeo(post, slug);
  const author = post.author || DEFAULT_AUTHOR;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: author }],
    alternates: {
      canonical: seo.url,
    },
    openGraph: {
      type: "article",
      url: seo.url,
      siteName: "Aksh Digital",
      title: seo.title,
      description: seo.description,
      publishedTime: seo.publishedTime,
      modifiedTime: seo.modifiedTime,
      authors: [author],
      section: post.category,
      tags: post.tags || [],
      images: seo.image ? [{ url: seo.image, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: seo.image ? [seo.image] : undefined,
    },
  };
}

function ArticleBody({ content }) {
  // Posts from the rich-text editor are HTML strings; styled by .blog-content in globals.css.
  if (typeof content === "string") {
    return (
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Legacy posts: { intro, sections[], conclusion }
  return (
    <>
      <div className="blog-content">
        {content?.intro && <p className="blog-lead">{content.intro}</p>}
        {Array.isArray(content?.sections) &&
          content.sections.map((section, i) => (
            <section key={i}>
              <h2>{section.heading}</h2>
              <p className="whitespace-pre-line">{section.body}</p>
            </section>
          ))}
      </div>
      {content?.conclusion && (
        <div className="mt-10 rounded-2xl border border-orange-200/70 bg-linear-to-br from-orange-50/80 to-white p-6 sm:p-7">
          <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-[#14183e]">
            <CheckCircle className="h-5 w-5 text-primary" />
            Key Takeaway
          </h3>
          <p className="leading-relaxed text-slate-700">{content.conclusion}</p>
        </div>
      )}
    </>
  );
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-linear-to-b from-[#fdfaf8] via-[#faf7f3] to-[#f8f4ed] px-4">
        <HeroBackdrop />
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-3xl font-semibold text-[#14183e] sm:text-4xl">
            Article Not Found
          </h1>
          <p className="mb-6 text-slate-600">
            The article you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#e85b2e] via-[#ee7439] to-[#f58d4a] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(232,91,46,0.45)]"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  // Same-category posts first, then the latest others.
  const otherPosts = (await getBlogs()).filter((p) => p.slug !== slug);
  const sameCategory = otherPosts.filter((p) => p.category === post.category);
  const relatedPosts = [
    ...sameCategory,
    ...otherPosts.filter((p) => p.category !== post.category),
  ].slice(0, 3);
  const relatedHeading =
    post.category && sameCategory.length >= relatedPosts.length
      ? `More in ${post.category}`
      : "You May Also Like";

  const seo = getPostSeo(post, slug);
  const author = post.author || DEFAULT_AUTHOR;
  const shareLinks = getShareLinks(seo.url, post.title);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: seo.description,
    image: seo.image ? [seo.image] : undefined,
    datePublished: seo.publishedTime,
    dateModified: seo.modifiedTime,
    author: {
      "@type": author === DEFAULT_AUTHOR ? "Organization" : "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Aksh Digital",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/images/logo/logo.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": seo.url },
    articleSection: post.category,
    keywords: seo.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero — warm gradient like the home hero */}
      <section className="relative w-full overflow-hidden border-b border-orange-100/60 bg-linear-to-b from-[#fdfaf8] via-[#faf7f3] to-[#f8f4ed] px-4 sm:px-6 md:px-8 py-6">
        <HeroBackdrop />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-500"
          >
            <Link
              href="/"
              className="shrink-0 transition-colors hover:text-primary"
            >
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/blog/"
              className="shrink-0 transition-colors hover:text-primary"
            >
              Blog
            </Link>
            <span aria-hidden="true">/</span>
            <span className="max-w-[14rem] truncate font-medium text-slate-700 sm:max-w-md">
              {post.title}
            </span>
          </nav>

          <CategoryPill className="shadow-2xs">{post.category}</CategoryPill>

          <h1 className="mx-auto mt-5 max-w-4xl text-balance text-[30px] font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-[40px] md:text-[48px]">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base md:text-lg">
              {post.excerpt}
            </p>
          )}

          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-2xl border border-orange-100 bg-white/80 px-5 py-2.5 text-sm text-slate-600 shadow-2xs sm:rounded-full">
            <span className="inline-flex items-center gap-2 font-semibold text-slate-800">
              <AuthorAvatar name={author} className="h-7 w-7 text-[10px]" />
              {author}
            </span>
            {post.date && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-primary" />
                {post.date}
              </span>
            )}
            {post.readTime && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" />
                {post.readTime}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Article + sticky lead form */}
      <section className="w-full bg-linear-to-b from-[#f4f1ea] via-[#faf8f5] to-[#f1ede5] px-4 sm:px-6 md:px-8 pt-6">
        {/* <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_360px]"> */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8">
          <article className="min-w-0">
            <div className="overflow-hidden rounded-3xl border border-orange-200/60 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="relative m-3 aspect-video overflow-hidden rounded-2xl bg-orange-50">
                <Image
                  src={getBlogImage(post.image)}
                  alt={post.title}
                  fill
                  sizes="(min-width: 960px) 870px, 100vw"
                  loading="eager"
                  fetchPriority="high"
                  className="object-cover"
                />
              </div>

              <div className="px-5 pb-8 pt-5 sm:px-10 sm:pb-12 sm:pt-8">
                <ArticleBody content={post.content} />

                {post.tags?.length > 0 && (
                  <div className="mt-10 flex flex-wrap items-center gap-2">
                    <Tag
                      className="h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-orange-200/70 bg-orange-50/60 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-orange-100 pt-6">
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Share2 className="h-4 w-4 text-primary" /> Share this
                    article
                  </p>
                  <div className="flex items-center gap-2">
                    {shareLinks.map(({ label, Icon, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Share on ${label}`}
                        title={`Share on ${label}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-200/70 bg-white text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:bg-primary hover:text-white hover:shadow-[0_8px_20px_-6px_rgba(210,92,65,0.5)]"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/blog/"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Back to All Articles
            </Link>
          </article>

          {/* Sticky only when the viewport is tall enough to show the whole form */}
          {/* <aside className="lg:self-start lg:[@media(min-height:860px)]:sticky lg:[@media(min-height:860px)]:top-24">
            <BlogLeadForm category={post.category} />
            <a
              href={PHONE_LINK}
              className="group mt-4 flex items-center gap-3 rounded-2xl border border-orange-200/60 bg-white/80 px-4 py-3 shadow-2xs transition-all hover:border-primary/40"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Phone className="h-4 w-4" />
              </span>
              <span className="text-sm leading-tight">
                <span className="block text-xs text-slate-500">
                  Prefer to talk? Call us
                </span>
                <span className="font-bold text-[#14183e]">
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>
          </aside> */}
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="w-full border-t border-slate-200/60 bg-linear-to-b from-[#f8f6f2] via-[#faf8f5] to-[#f4f0e8] px-4 py-12 sm:px-6 sm:py-16 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <Eyebrow>Keep Reading</Eyebrow>
                <h2 className="mt-3 text-[26px] font-semibold leading-tight text-[#14183e] sm:text-[32px]">
                  {relatedHeading}
                </h2>
              </div>
              <Link
                href="/blog/"
                className="text-sm font-bold text-primary hover:underline"
              >
                View all articles →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
              {relatedPosts.map((rp) => (
                <BlogCard key={rp.slug} post={rp} />
              ))}
            </div>
          </div>
        </section>
      )}

      <BlogCtaBanner
        eyebrow="Let's Build Your Growth Roadmap"
        title="Ready to Implement These Strategies?"
        text="Let our experts build and execute a custom digital strategy for your business — from SEO and paid ads to high-converting websites."
        buttonLabel="Get a Free Strategy Call"
      />
    </>
  );
}
