import { getBlogs } from "@/lib/db";
import BlogListing from "@/components/BlogListing";
import { getPageMetadata } from "@/lib/page-meta";

export function generateMetadata() {
  return getPageMetadata("/blog/");
}

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
