import { NextResponse } from "next/server";
import { getAllPageMeta, upsertPageMeta, deletePageMeta } from "@/lib/db";
import { getSession } from "@/lib/session";
import { cleanText, parseList } from "@/lib/blog";
import { revalidatePageSeo } from "@/lib/page-meta";
import { SITE_PAGES, getSitePage } from "@/lib/site-pages";

// Admin → Page SEO. Overrides live in MongoDB (page_meta); defaults in src/lib/site-pages.js.

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized. Please login." }, { status: 401 });
}

// Every editable page with its defaults and the current override (or null).
export async function GET() {
  if (!(await getSession())) return unauthorized();

  const overrides = new Map((await getAllPageMeta()).map((meta) => [meta.path, meta]));
  const pages = SITE_PAGES.map((page) => ({
    ...page,
    override: overrides.get(page.path) || null,
  }));
  return NextResponse.json(pages);
}

// Save a page's override. Saving with every field empty resets the page to its defaults.
export async function PUT(request) {
  if (!(await getSession())) return unauthorized();

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const path = body?.path;
  if (!getSitePage(path)) {
    return NextResponse.json({ error: "Unknown page" }, { status: 400 });
  }

  const fields = {
    metaTitle: cleanText(body.metaTitle),
    metaDescription: cleanText(body.metaDescription),
    metaKeywords: parseList(body.metaKeywords),
    noindex: Boolean(body.noindex),
  };
  const isEmpty =
    !fields.metaTitle && !fields.metaDescription && !fields.metaKeywords.length && !fields.noindex;

  const updatedAt = new Date().toISOString();
  const result = isEmpty
    ? await deletePageMeta(path)
    : await upsertPageMeta(path, { ...fields, updatedAt });
  if (!result) {
    return NextResponse.json({ error: "Failed to save page SEO" }, { status: 500 });
  }

  revalidatePageSeo(path);
  return NextResponse.json({
    success: true,
    override: isEmpty ? null : { path, ...fields, updatedAt },
  });
}

// Reset a page to its defaults.
export async function DELETE(request) {
  if (!(await getSession())) return unauthorized();

  const path = new URL(request.url).searchParams.get("path");
  if (!getSitePage(path)) {
    return NextResponse.json({ error: "Unknown page" }, { status: 400 });
  }

  const result = await deletePageMeta(path);
  if (!result) {
    return NextResponse.json({ error: "Failed to reset page SEO" }, { status: 500 });
  }

  revalidatePageSeo(path);
  return NextResponse.json({ success: true });
}
