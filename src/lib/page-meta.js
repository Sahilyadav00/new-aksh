import { revalidatePath } from "next/cache";
import { getPageMeta } from "@/lib/db";
import { SITE_URL, getSitePage } from "@/lib/site-pages";

// Builds a page's Next.js metadata: the admin override from MongoDB (page_meta) when set,
// otherwise the defaults in src/lib/site-pages.js. If the database can't be reached,
// getPageMeta returns null and the defaults are used, so pages still build and render.
export async function getPageMetadata(path) {
  const page = getSitePage(path);
  if (!page) {
    throw new Error(`No SEO defaults for "${path}". Add the page to src/lib/site-pages.js.`);
  }

  const override = await getPageMeta(path);
  const title = override?.metaTitle || page.title;
  const description = override?.metaDescription || page.description;
  const keywords = override?.metaKeywords?.length ? override.metaKeywords : undefined;
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "Aksh Digital",
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    // "Hide from Google": keep following links, but don't index the page.
    ...(override?.noindex && { robots: { index: false, follow: true } }),
  };
}

// sitemap.xml is cached at build. With trailingSlash: true its URL cache tag is
// "/sitemap.xml/", but revalidatePath strips trailing slashes, so
// revalidatePath("/sitemap.xml") never matches. The "layout" type targets the
// sitemap's "/sitemap.xml/layout" tag instead (verified with `next build` + `next start`).
export function revalidateSitemap() {
  revalidatePath("/sitemap.xml", "layout");
}

// Pages are prerendered; refresh the edited page and the sitemap after an admin change.
export function revalidatePageSeo(path) {
  revalidatePath(path === "/" ? "/" : path.replace(/\/$/, ""));
  revalidateSitemap();
}
