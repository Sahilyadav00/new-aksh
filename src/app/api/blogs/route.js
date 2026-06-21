import { NextResponse } from "next/server";
import { getBlogs, createBlog } from "@/lib/db";
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
    const { title, excerpt, category, readTime, author, image, tags, content } = body;

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
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date().toLocaleDateString("en-US", options);

    // Estimate read time if not provided
    let finalReadTime = readTime;
    if (!finalReadTime) {
      const wordsCount = JSON.stringify(content).split(/\s+/).length;
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
      image: image || "/assets/images/home/BLOG-01.WEBP",
      tags: Array.isArray(tags) ? tags : typeof tags === "string" ? tags.split(",").map(t => t.trim()) : [],
      content: {
        intro: content.intro || excerpt,
        sections: Array.isArray(content.sections) ? content.sections : [],
        conclusion: content.conclusion || "",
      },
    };

    await createBlog(newBlog);

    return NextResponse.json({ success: true, blog: newBlog }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 });
  }
}
