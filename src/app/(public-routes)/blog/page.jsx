import { getBlogs } from "@/lib/db";
import BlogListing from "@/components/BlogListing";

export const metadata = {
  title: "Blog | Digital Marketing & SEO Insights — Aksh Digital",
  description:
    "Stay ahead with expert articles on SEO, digital marketing, social media, web development, and performance marketing from the Aksh Digital team.",
  alternates: {
    canonical: "https://www.akshdigital.in/blog/",
  },
};

export default async function BlogPage() {
  const blogs = await getBlogs();
  // The listing doesn't need article bodies; keep the client payload small.
  const posts = blogs.map(({ content, ...rest }) => rest);

  return (
    <div className="bg-white">
      <BlogListing posts={posts} />
    </div>
  );
}
