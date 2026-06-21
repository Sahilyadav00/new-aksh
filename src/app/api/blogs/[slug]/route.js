import { NextResponse } from "next/server";
import { getBlogBySlug, updateBlog, deleteBlog } from "@/lib/db";
import { getSession } from "../../../../lib/session";

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blog post" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized. Please login." }, { status: 401 });
    }

    const { slug } = await params;
    const body = await request.json();
    const { title, excerpt, category, readTime, author, image, tags, content } = body;

    const existingBlog = await getBlogBySlug(slug);

    if (!existingBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Build the updated blog post fields
    const updatedBlog = {
      title: title || existingBlog.title,
      excerpt: excerpt || existingBlog.excerpt,
      category: category || existingBlog.category,
      readTime: readTime || existingBlog.readTime,
      author: author || existingBlog.author,
      image: image || existingBlog.image,
      tags: Array.isArray(tags) ? tags : typeof tags === "string" ? tags.split(",").map(t => t.trim()) : existingBlog.tags,
      content: {
        intro: content?.intro || existingBlog.content.intro,
        sections: Array.isArray(content?.sections) ? content.sections : existingBlog.content.sections,
        conclusion: content?.conclusion || existingBlog.content.conclusion,
      },
    };

    await updateBlog(slug, updatedBlog);

    return NextResponse.json({ success: true, blog: { ...existingBlog, ...updatedBlog } });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update blog post" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized. Please login." }, { status: 401 });
    }

    const { slug } = await params;
    const result = await deleteBlog(slug);

    if (result && result.deletedCount === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Blog post deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete blog post" }, { status: 500 });
  }
}
