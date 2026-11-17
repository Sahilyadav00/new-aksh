import { NextResponse } from "next/server";
import { getBlogBySlug, updateBlog, deleteBlog, unsetFeaturedExcept } from "@/lib/db";
import { parseList, cleanText, revalidateBlogPaths } from "@/lib/blog";
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
    const {
      title, excerpt, category, readTime, author, image, tags, content,
      metaTitle, metaDescription, metaKeywords, featured,
    } = body;

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
      tags: tags !== undefined ? parseList(tags) : existingBlog.tags || [],
      content: content !== undefined ? content : existingBlog.content,
      // Meta fields can be cleared (empty = fall back to title/excerpt/tags on the page)
      metaTitle: metaTitle !== undefined ? cleanText(metaTitle) : existingBlog.metaTitle || "",
      metaDescription:
        metaDescription !== undefined ? cleanText(metaDescription) : existingBlog.metaDescription || "",
      metaKeywords:
        metaKeywords !== undefined ? parseList(metaKeywords) : existingBlog.metaKeywords || [],
      featured: featured !== undefined ? Boolean(featured) : Boolean(existingBlog.featured),
      updatedAt: new Date().toISOString(),
    };

    const result = await updateBlog(slug, updatedBlog);
    if (!result) {
      return NextResponse.json({ error: "Failed to save blog post" }, { status: 500 });
    }
    if (updatedBlog.featured) await unsetFeaturedExcept(slug);

    revalidateBlogPaths();

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

    if (!result) {
      return NextResponse.json({ error: "Failed to delete blog post" }, { status: 500 });
    }
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    revalidateBlogPaths();

    return NextResponse.json({ success: true, message: "Blog post deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete blog post" }, { status: 500 });
  }
}
