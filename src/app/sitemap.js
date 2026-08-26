import { getBlogs } from "@/lib/db";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://akshdigital.com";
  const currentDate = new Date().toISOString();

  // Static routes configuration
  const staticRoutes = [
    { url: "", priority: 1.0, changeFrequency: "daily" },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services", priority: 0.9, changeFrequency: "weekly" },
    { url: "/services/web-development", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/app-development", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/digital-marketing", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/performance-marketing", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/social-media", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/graphic-design", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/seo-strategies", priority: 0.8, changeFrequency: "monthly" },
    { url: "/seo-services", priority: 0.8, changeFrequency: "monthly" },
    { url: "/portfolio", priority: 0.8, changeFrequency: "monthly" },
    { url: "/blog", priority: 0.8, changeFrequency: "daily" },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { url: "/faq", priority: 0.6, changeFrequency: "monthly" },
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Dynamic blog routes
  let blogRoutes = [];
  try {
    const blogs = await getBlogs();
    blogRoutes = (blogs || []).map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.date ? new Date(blog.date).toISOString() : currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error building sitemap blog routes:", error);
  }

  return [...staticRoutes, ...blogRoutes];
}
