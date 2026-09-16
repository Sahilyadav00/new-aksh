import { getBlogs } from "@/lib/db";

export default async function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_HOSTNAME ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.akshdigital.in";
  const currentDate = new Date().toISOString();

  // Static routes configuration with trailing slashes
  const staticRoutes = [
    { url: "/", priority: 1.0, changeFrequency: "daily" },
    { url: "/about/", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/", priority: 0.9, changeFrequency: "weekly" },
    { url: "/services/seo/", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/digital-marketing/", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/social-media-marketing/", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/graphic-design/", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/web-development/", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/app-development/", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/performance-marketing/", priority: 0.8, changeFrequency: "monthly" },
    { url: "/portfolio/", priority: 0.8, changeFrequency: "monthly" },
    { url: "/blog/", priority: 0.8, changeFrequency: "daily" },
    { url: "/contact/", priority: 0.7, changeFrequency: "monthly" },
    { url: "/faq/", priority: 0.6, changeFrequency: "monthly" },
    // Dedicated Regional & Metropolitan SEO Landing Pages
    { url: "/seo-services/jaipur/", priority: 0.8, changeFrequency: "monthly" },
    { url: "/seo-services/delhi/", priority: 0.8, changeFrequency: "monthly" },
    { url: "/seo-services/mumbai/", priority: 0.8, changeFrequency: "monthly" },
    { url: "/seo-services/bangalore/", priority: 0.8, changeFrequency: "monthly" },
    { url: "/seo-services/pune/", priority: 0.8, changeFrequency: "monthly" },
    { url: "/seo-services/indore/", priority: 0.8, changeFrequency: "monthly" },
    { url: "/seo-services/chandigarh/", priority: 0.8, changeFrequency: "monthly" },
    { url: "/seo-services/kolkata/", priority: 0.8, changeFrequency: "monthly" },
    { url: "/seo-services/hyderabad/", priority: 0.8, changeFrequency: "monthly" },
    { url: "/seo-services/chennai/", priority: 0.8, changeFrequency: "monthly" },
    { url: "/seo-services/lucknow/", priority: 0.8, changeFrequency: "monthly" },
    { url: "/seo-services/bhiwadi-alwar/", priority: 0.8, changeFrequency: "monthly" },
  ].map((route) => ({
    url: `${baseUrl}${route.url === "/" ? "/" : route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Dynamic blog routes
  let blogRoutes = [];
  try {
    const blogs = await getBlogs();
    blogRoutes = (blogs || []).map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}/`,
      lastModified: blog.date ? new Date(blog.date).toISOString() : currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error building sitemap blog routes:", error);
  }

  return [...staticRoutes, ...blogRoutes];
}
