import { getAllPageMeta, getBlogs } from "@/lib/db";
import { SITE_PAGES } from "@/lib/site-pages";

// Built from the page list in src/lib/site-pages.js plus every blog post in MongoDB.
// Cached like the pages; refreshed whenever a blog post or a page's SEO is saved
// (revalidateBlogPaths / revalidatePageSeo).
export default async function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_HOSTNAME ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.akshdigital.in";

  // Admin overrides: "Hide from Google" pages are left out, and the date of the last
  // SEO edit is the page's lastModified. Pages never edited get no date: a made-up
  // "now" on every page teaches Google to ignore lastmod.
  const overrides = new Map((await getAllPageMeta()).map((meta) => [meta.path, meta]));

  const pageRoutes = SITE_PAGES.filter((page) => !overrides.get(page.path)?.noindex).map((page) => {
    const updatedAt = overrides.get(page.path)?.updatedAt;
    return {
      url: `${baseUrl}${page.path}`,
      ...(updatedAt && { lastModified: updatedAt }),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    };
  });

  // getBlogs returns [] if the database is unreachable.
  const blogs = await getBlogs();
  const blogRoutes = blogs.map((blog) => {
    const fromDate = blog.date ? new Date(blog.date) : null; // legacy posts: "June 15, 2026"
    const lastModified =
      blog.updatedAt ||
      blog.createdAt ||
      (fromDate && !Number.isNaN(fromDate.getTime()) ? fromDate.toISOString() : undefined);
    return {
      url: `${baseUrl}/blog/${blog.slug}/`,
      ...(lastModified && { lastModified }),
      changeFrequency: "weekly",
      priority: 0.7,
    };
  });

  return [...pageRoutes, ...blogRoutes];
}
