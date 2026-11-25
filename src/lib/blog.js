import { revalidatePath } from "next/cache";
import { revalidateSitemap } from "@/lib/page-meta";

// Accepts an array or a comma-separated string; returns a trimmed, de-duplicated list.
export function parseList(value) {
  const items = Array.isArray(value) ? value : typeof value === "string" ? value.split(",") : [];
  return [...new Set(items.map((v) => String(v).trim()).filter(Boolean))];
}

export function cleanText(value) {
  return typeof value === "string" ? value.trim() : "";
}

// Public blog pages are prerendered; refresh them whenever posts change in the DB.
export function revalidateBlogPaths() {
  revalidatePath("/blog");
  revalidatePath("/(public-routes)/blog/[slug]", "page");
  revalidateSitemap();
}
