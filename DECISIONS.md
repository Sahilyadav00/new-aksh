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

## 2026-11-17 — Terms & Conditions page

**Goal:** New Terms & Conditions page using the provided content, styled like the home page.

- **Route:** `/terms-and-conditions/` → `src/app/(public-routes)/terms-and-conditions/page.jsx`. It's a server component with static `metadata` (title, description, canonical). Content lives in a `sections` array (paragraph and list blocks) so the text is easy to edit.
- **UI:** Reuses home page patterns: the warm gradient hero with dotted pattern and orange pill badge, the gradient heading span, white rounded cards, and the dark CTA banner. Desktop has a sticky table of contents (`top-28` to clear the sticky header; sections use `scroll-mt-28`). On mobile the table of contents is a collapsible `<details>`.
- **Content edits (user approved):**
  - Jurisdiction placeholder → "Jaipur, Rajasthan" (HQ).
  - Address → "Jaipur, Rajasthan, India". The site has no street address; replace it if a registered street address is needed legally.
  - Email/phone → akshdigital9@gmail.com, +91 95499 49918 (same as footer/contact page).
  - Services list: "SEM and paid advertising" → "SEM, performance marketing and paid advertising"; "Website design and development" → "Website and mobile app design and development". Both match services the site actually offers.
  - The Privacy Policy mention is plain text. No privacy page exists yet; link it once one is created.
- **Links added (user chose all):** footer bottom bar (next to the copyright), `sitemap.js` (priority 0.3, yearly), `llms.txt`, and a consent line under the Contact form submit button.
- **Alternatives considered:** Keeping the placeholders visible (rejected), and a `/terms/` short URL (the full slug reads better and matches the page title).

**Result:** ESLint clean. On a temporary dev server (port 3005, stopped afterwards):
- The page returns 200 with the correct title and canonical, 18 sections and no `[Insert …]` placeholders.
- The footer link, the contact consent line, the sitemap entry and the llms.txt entry are all present.
- Desktop and mobile screenshots checked.
- The dev "1 Issue" badge is a pre-existing hydration mismatch in `WhatsAppButton` (styled-jsx class names), not this page.

## 2026-11-17 — Privacy Policy page + shared legal layout

**Goal:** New Privacy Policy page from the provided content, matching the Terms page and home page style.

- **Route:** `/privacy-policy/` → `src/app/(public-routes)/privacy-policy/page.jsx`, with static `metadata` (title, description, canonical).
- **Shared layout (user approved):** Moved the Terms page's hero, table of contents, section cards, contact cards and CTA into `src/components/legal/LegalPage.jsx`. Both legal pages now pass `sections` data plus hero/CTA props. The component also exports `TextLink` for inline links. New block types: `h3` (sub-headings like "A. Personal and Contact Information") and `table` (the cookie table). Terms page output is unchanged apart from the new Privacy Policy link.
- **Content:**
  - The pasted text stopped mid-sentence in Section 5. At the user's request I completed Section 5 and drafted sections 6–14: Sharing, Third-Party Services, Retention, Security, Your Rights (aligned with India's DPDP Act 2023), Children, International Transfers, Changes, Contact & Grievance. **These drafted sections should get a legal review.**
  - Named the tools the site actually uses (user approved): Google Analytics (G-T2DPVZG6X8), Google Tag Manager, the Google Maps embed (footer + contact page), WhatsApp, and MongoDB storage of form data (described generically as "cloud database provider").
  - Added a cookie table: `_ga`, `_ga_*`, `welcome_popup_dismissed` (30 min), `whatsapp_tooltip_dismissed` (30 min), Google Maps cookies, `admin_session` (24 h, admin only).
  - Replaced "cookie controls, where provided" with browser settings plus the Google Analytics opt-out add-on, because the site has no cookie consent banner.
  - No Grievance Officer name was given, so the grievance contact uses the business email/phone.
- **Links (user's choice):** footer bottom bar (next to Terms), Terms §11 "Privacy Policy" → link, `sitemap.js`, `llms.txt`. Form consent lines were **not** changed (not selected).
- **Alternatives considered:** Separate copy of the layout per page (rejected: the two pages would drift apart). Keeping the generic "where enabled" wording (rejected: less accurate).

**Result:** ESLint clean. On the temporary dev server:
- `/privacy-policy/` returns 200 with 14 sections and the cookie table.
- `/terms-and-conditions/` still has 18 sections and now links to the privacy page.
- The sitemap and llms.txt include the new page.
- Desktop and mobile screenshots checked.
- The temporary server was stopped afterwards. An earlier `TaskStop` had left its `next dev` child running, so I killed it by PID.

## 2026-11-17 — Careers page

**Goal:** New Careers page from the provided content, styled like the home page and the legal pages.

- **Route:** `/careers/` → `src/app/(public-routes)/careers/page.jsx`. It's a server component with static `metadata` (title, description, canonical). It doesn't use `LegalPage`, because that layout is built for numbered legal sections and a table of contents, which this page doesn't need.
- **Sections:** The page follows the copy in order:
  1. Hero (warm gradient, pill badge, gradient "Aksh Digital", tagline, intro).
  2. "More Than Just Work": 4 icon cards.
  3. "Our Culture": the text plus a "What We Value" list taken from the culture copy.
  4. The "Create One." orange banner.
  5. "Let's Connect": a share-items list and an email card.
  6. Dark closing banner with "Where Creativity Meets Digital Growth."
- **Content edits (user approved):**
  - `[Insert Official Business Email]` → `akshdigital9@gmail.com`, the same address used in the footer, contact page and legal pages.
  - The email links are `mailto:` with the subject `Career Enquiry – [Your Name]` already filled in.
  - The hero "Get in Touch" button scrolls to `#lets-connect` on the same page (it doesn't go to `/contact/`). The site already sets `scroll-behavior: smooth` globally, and the section uses `scroll-mt-24` to clear the sticky header.
- **Small additions not in the copy:** the badge "Careers • Join Our Journey", the "What We Value" label and items, the button labels "Email Us Your Profile" and "Share Your Profile", and a "Learn more about us" link to `/about/`.
- **No `JobPosting` JSON-LD:** no specific openings are listed, and Google treats JobPosting markup without a real vacancy as a policy violation. Add it per role if openings are published later.
- **Links (user's choice):** footer Quick Links (between FAQ and Contact), `sitemap.js` (priority 0.5, monthly), `llms.txt`. Header nav was **not** changed (not selected).
- **Alternatives considered:** A "Get in Touch" button that opens the email app directly, or that goes to `/contact/`. Rejected: scrolling first shows applicants what to send. Also considered dropping the email and using the contact form (rejected).

**Result:** ESLint clean.
- The page was checked on the `next dev` server already running on port 3005. That server stopped partway through, so the desktop shots were taken on a temporary server on port 3007, which I stopped afterwards.
- `/careers/` returns 200 with the correct title and canonical, the `#lets-connect` anchor and the prefilled `mailto` subject. No `[Insert …]` placeholders remain.
- The sitemap and llms.txt include `/careers/`.
- Desktop (1440px) and mobile (390px, no horizontal overflow) screenshots checked.
- The "Create One." banner heading uses `text-balance` so "One." doesn't wrap onto a line by itself.
