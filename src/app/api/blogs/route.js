import { NextResponse } from "next/server";
import { getBlogs, createBlog, unsetFeaturedExcept } from "@/lib/db";
import { parseList, cleanText, revalidateBlogPaths } from "@/lib/blog";
import { getSession } from "../../../lib/session";

export async function GET(request) {
  try {
    const blogs = await getBlogs();
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized. Please login." }, { status: 401 });
    }

    const body = await request.json();
    const {
      title, excerpt, category, readTime, author, image, tags, content,
      metaTitle, metaDescription, metaKeywords, featured,
    } = body;

    if (!title || !excerpt || !category || !content) {
      return NextResponse.json({ error: "Missing required fields (title, excerpt, category, content)" }, { status: 400 });
    }

    // Helper to generate a slug from the title
    let slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const blogs = await getBlogs();

    // Ensure slug is unique
    let originalSlug = slug;
    let counter = 1;
    while (blogs.some((b) => b.slug === slug)) {
      slug = `${originalSlug}-${counter}`;
      counter++;
    }

    // Format Date: e.g. "June 15, 2026"
    const now = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = now.toLocaleDateString("en-US", options);

    // Estimate read time if not provided
    let finalReadTime = readTime;
    if (!finalReadTime) {
      const textOnly = (typeof content === "string" ? content : JSON.stringify(content))
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      const wordsCount = textOnly.split(/\s+/).filter(Boolean).length;
      const minutes = Math.max(1, Math.ceil(wordsCount / 200));
      finalReadTime = `${minutes} min read`;
    }

    const newBlog = {
      slug,
      title,
      excerpt,
      category,
      date: formattedDate,
      readTime: finalReadTime,
      author: author || "Aksh Digital Team",
      image: image || "", // empty = placeholder shown at render time
      tags: parseList(tags),
      content: typeof content === "string" ? content : (content?.html || content?.intro || ""),
      metaTitle: cleanText(metaTitle),
      metaDescription: cleanText(metaDescription),
      metaKeywords: parseList(metaKeywords),
      featured: Boolean(featured),
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
    };

    const result = await createBlog(newBlog);
    if (!result) {
      return NextResponse.json({ error: "Failed to save blog post" }, { status: 500 });
    }
    if (newBlog.featured) await unsetFeaturedExcept(slug);

    revalidateBlogPaths();

    return NextResponse.json({ success: true, blog: newBlog }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 });
  }
}
