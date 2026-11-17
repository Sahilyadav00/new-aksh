# Decisions Log

## 2026-11-17 — Blog module: SEO meta fields, live data, admin form

**Goal:** Add meta data fields to blog posts and output them on the post page, stop showing dummy/static data, update the admin Add/Edit screen.

### 1. Meta fields: `metaTitle`, `metaDescription`, `metaKeywords[]`
- **Approach:** Optional fields stored on each blog document. On the post page, `generateMetadata` uses them first and falls back to `title` / `excerpt` / `tags` when empty. The page also outputs the canonical URL, Open Graph (article) tags, a Twitter `summary_large_image` card and `BlogPosting` JSON-LD.
- **Why:** Existing posts keep working without a migration, and admins only need to fill these in when they want to override the defaults.
- **Alternatives considered:** canonical override, separate OG image, and a robots/noindex toggle. Not chosen for now (user picked title + description + keywords).
- **Edit behaviour:** In PUT, meta fields use `!== undefined` (not `||`), so an admin can clear them.

### 2. Stale/static data on public pages
- **Problem:** `/blog` and `/blog/[slug]` are prerendered at build. Admin changes didn't appear until redeploy.
- **Approach:** `revalidateBlogPaths()` in `src/lib/blog.js` calls `revalidatePath` for `/blog`, every post page (`/(public-routes)/blog/[slug]`, `page`) and `/sitemap.xml` after every create, update and delete.
- **Why:** Pages stay static/fast and refresh on demand. Using `force-dynamic` would hit MongoDB on every request.
- **Also:** Removed the non-functional "Join 2,000+ marketers" newsletter from `/blog`.

### 3. Working search + real categories on `/blog`
- **Approach:** New client component `src/components/BlogListing.jsx`. Categories are built from the posts' own categories, and search matches title/excerpt/category/tags. The server page strips `content` before passing posts to keep the client payload small.
- **Alternatives considered:** Remove search/filter (rejected by user), or server-side search via `searchParams` (more complex, makes the page dynamic).

### 4. Featured post
- **Approach:** `featured` boolean, set with a toggle in the admin form. Saving a featured post un-features all others (`unsetFeaturedExcept`). `/blog` uses the featured post, or the newest post if none is featured.
- **Also:** `createdAt` / `updatedAt` ISO timestamps added on create/update. They are used for newest-first sorting, OG published/modified times, JSON-LD and sitemap `lastModified`. Legacy posts fall back to their `date` string.

### 5. Dummy data
- Deleted `what-is-lorem-ipsum` from the **local** MongoDB (user approved).
- The production Atlas DB was unreachable from the dev sandbox. The user will remove any dummy posts there via the admin dashboard's Delete button.

### 6. Fallback image → `Placeholder.webp` (follow-up request)
- **Approach:** `src/lib/blog-image.js` exports `getBlogImage()`. It returns the post's cover, or `/assets/images/Placeholder.webp` when there is none. It's used on the `/blog` cards (featured + grid), the post page hero, related-post cards and the admin cards. The API now saves `image: ""` instead of baking `BLOG-01.WEBP` into new posts.
- **Why:** If the default is saved into the DB, a render-time fallback never triggers. It also hides from the admin form that no cover was uploaded.
- **Legacy:** Posts that already have the old auto-saved `/assets/images/home/BLOG-01.WEBP` are treated as having no cover. That path's case doesn't match the real `BLOG-01.webp`, so it breaks on Linux hosts.
- **SEO:** `og:image`, Twitter image and JSON-LD `image` use only a real cover image (`getBlogCoverImage()`), never the placeholder.

### Smaller fixes made along the way
- POST/PUT/DELETE now return 500 when the DB write fails. Before, they reported success even when the write failed.
- Post page no longer crashes when a post has no `tags`. A missing post returns `noindex` metadata.

**Result:** ESLint is clean on all changed files. Against the running dev server, `/api/blogs` returns `[]`, `/blog/` renders the empty state with no newsletter, and a missing slug renders "Article Not Found" with `robots: noindex`.
