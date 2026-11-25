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

## 2026-11-17 — Blog listing + article redesign, blog lead form

**Goal:** Redesign `/blog` and `/blog/[slug]` to match the home page style. Redesign the blog card. Add a lead capture form to the article page that posts to the same API as the Contact form.

- **Shared pieces (new, `src/components/blog/`):**
  - `BlogUi.jsx`: hero backdrop (warm glows + dotted pattern), eyebrow with the three bars, orange `CategoryPill`, `AuthorAvatar` (initials), the dark `BlogCtaBanner` copied from the home final CTA, and `DEFAULT_AUTHOR`.
  - `BlogCard.jsx`: grid card used on `/blog` and in related posts, plus `FeaturedBlogCard`. Both use the home card language: white-to-orange gradient, `rounded-3xl`, orange border, hover lift with an orange shadow, and a gradient accent bar that grows on hover.
  - `BlogLeadForm.jsx`: the lead form.
- **Category colours:** the per-category colour map (orange, blue, pink…) was dropped from both pages. Every category now uses one orange pill, matching the home page pills.
- **`/blog`:**
  - Warm hero with breadcrumb, search, and article/topic counts.
  - Category chips moved into the content area and are no longer sticky. They used to be `sticky top-0`, which slid them under the sticky header (`z-50`).
  - Search and filter logic is unchanged.
  - Dark CTA banner at the bottom.
- **`/blog/[slug]`:**
  - Warm hero (breadcrumb, category, title, excerpt, author/date/read-time pill).
  - Body: the article card on the left and the lead form in a sidebar on the right. On mobile the form comes after the article.
  - Related posts: same category first, then the latest others, so the section no longer disappears when a category has only one post.
  - Dark CTA banner.
  - SEO metadata and JSON-LD are unchanged.
- **Sticky sidebar:** `lg:[@media(min-height:860px)]:sticky top-24`. It is sticky only when the viewport is tall enough to show the whole form, so on short laptop screens (e.g. 1366×657) the submit button is never cut off.
- **Lead form (user's choices: compact, sticky sidebar, API untouched):**
  - Fields: Name, Email, Phone (required), Service, Message.
  - It POSTs the same payload shape as `ContactForm` (`name, email, phone, website: "", service, message`) to `/api/contacts`. No API changes.
  - The service is preselected from the post category (SEO → seo, Performance Marketing → performance, Web Development → web-dev, Social Media/Graphic Design → social-media, Digital Marketing → full-service).
  - Same success/error states and Terms consent line as `ContactForm`. No Privacy link was added, to stay consistent with the earlier decision not to change form consent lines.
  - A "Prefer to talk? Call us" card sits below the form.
  - **Not done (user's choice):** a `source` field for blog leads. In admin they look the same as contact-page leads.
- **Article body styles:** `@tailwindcss/typography` isn't installed, so the old `prose-*` classes did nothing and posts rendered unstyled. Added a scoped `.blog-content` block in `globals.css` inside `@layer components` (it beats preflight and loses to utilities). It styles headings (h2 gets a gradient side bar), lists with orange markers, links, blockquote, images, hr, code/pre, and tables. Tables scroll sideways on small screens; TipTap puts all rows in `<tbody>`, which the CSS relies on. No new dependency was added (user's choice over installing the plugin).
- **Share buttons:** the old `<button>`s did nothing. They are now real share links (Facebook, X, LinkedIn, WhatsApp) using the canonical post URL. The non-functional Bookmark button was removed. Tags are no longer styled as clickable.
- **Next 16:** cover images use `loading="eager"` + `fetchPriority="high"` instead of the deprecated `priority` prop.

**Result:** ESLint clean.
- Checked on a temporary dev server (port 3012, stopped afterwards; its leftover `next dev` child was killed by PID). The server pointed at a **scratch database `akshdigital_blog_preview`** on local MongoDB, seeded with 5 sample posts. The real local `akshdigital` DB was not touched.
- `/blog/`, two post pages and a missing slug all return 200; the missing slug shows "Article Not Found".
- Desktop (1440) and mobile (390, no horizontal overflow) screenshots checked.
- Sidebar is `static` at 1366×657 and `sticky` at 1440×900.
- Form submit in headless Chrome: POST `/api/contacts` → 201 and the success state shows. It saved exactly one lead, in the scratch DB only. The request goes through the existing 308 trailing-slash redirect, same as `ContactForm`.
- The dev "1 Issue" badge is still only the pre-existing `WhatsAppButton` styled-jsx hydration mismatch. It also shows on `/careers/`.
- The scratch DB was left in place; drop it if not needed.

## 2026-11-17 — Blog card titles: 3-line clamp

**Goal:** Vertical blog cards, 3 per row on large screens, titles limited to 3 lines with `line-clamp`.

- **Grid:** No change needed. `/blog` and related posts already use vertical `BlogCard`s in `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
- **Titles:** `BlogCard` title `line-clamp-2` → `line-clamp-3`. The same card is used for related posts on `/blog/[slug]`, so they change too. `FeaturedBlogCard` title had no clamp; it now uses `line-clamp-3`.
- **Featured card (user's choice):** The large horizontal featured card stays above the grid.
- **Alternative considered:** Turning the featured post into the first vertical card in the grid (user declined).

**Result:** ESLint clean on `BlogCard.jsx`.

## 2026-11-22 — Blog images: 16:9 cards, smaller article cover

**Goal:** Blog card images in 16:9. The article cover image on `/blog/[slug]` was too big (about 1126×633 at desktop) and should fit on one screen.

- **Grid card (`BlogCard`):** image box `aspect-16/10` → `aspect-video` (16:9). This applies to `/blog` and to related posts on the article page.
- **Featured card (user's choice: everywhere):** 16:9 on every screen size. Desktop used to be `lg:aspect-auto lg:min-h-90`, which stretched the image to the height of the text column. It now keeps 16:9 and is centred vertically next to the text (`self-center`).
- **Fit (user's choice):** kept `object-cover`. Non-16:9 uploads get their edges cropped to fill the box. 16:9 uploads aren't cropped.
- **Article page (user's choice: narrow the card):** the article column changed from `max-w-6xl` to `max-w-4xl` (896px). The cover still fills the card at 16:9 and is now about 870×490. Body text lines are shorter too. The column had been 6xl only because of the old lead-form sidebar, which is commented out. Related posts stay `max-w-6xl`. `sizes` updated to `(min-width: 960px) 870px, 100vw`; it still described the sidebar layout.
- **Alternatives considered:** capping only the image (≤896px wide and ≤60vh tall, centred in the wide card), or a height cap only (crops wider than 16:9 on wide screens). Also considered `object-contain` (no cropping, but adds empty bars).

**Result:** ESLint clean on both files. Not checked in a browser yet.

## 2026-11-22 — About page redesign (home page style)

**Goal:** Restyle `/about/` to match the home page. It used its own older look: slate/white backgrounds, a teal blob, plain cards, and hotlinked Unsplash photos in raw `<img>` tags.

- **File:** `src/app/(public-routes)/about/page.jsx`, rewritten. Metadata and canonical are unchanged. All existing copy is kept word for word (SEO text).
- **Sections:**
  1. **Hero (user's choice: two columns like home):** warm gradient + `HeroBackdrop`, orange pill, H1 ending in gradient text "Real Business Growth", gradient + white buttons, and the home 4-icon trust strip. On the right: the team photo with concentric halos, dot grids, and floating cards (4.9/5 rating, +230% revenue growth, Jaipur HQ). Text fades in on load (`animate-on-load-fade-up`). The image isn't animated, so it doesn't delay LCP.
  2. **Trust badges strip:** the same 4 badges as under the home hero.
  3. **Our Story:** photo + faint icon watermarks, like the home "About Aksh Digital" block. The home stat cards (`AnimatedCounter`, 50+ campaigns, 200% traffic growth) sit under the photo.
  4. **Mission & Vision:** a light orange-bordered card and a dark card, both with hover lift and a growing accent bar.
  5. **Core Pillars:** home-style cards with a gradient icon tile, accent bar and faint 01–04 watermark.
  6. **India + Global:** copies the home "Local / Global" cards. Orange border + Hawa Mahal + orange wave holds the 6 city hubs. Blue border + network globe + blue wave holds the USA/UK copy, checklist and "Start a Partnership".
  7. **Why Choose Us:** home glass cards with large watermark numbers, 4 across on desktop.
  8. **CTA:** reuses `BlogCtaBanner` with the page's existing CTA text.
- **Shared pieces:** `HeroBackdrop`, `Eyebrow`, `GRADIENT_TEXT` and `BlogCtaBanner` are imported from `components/blog/BlogUi.jsx` as is (not moved; a rename to a neutral folder can come later).
- **Images (user's choice):** kept the two Unsplash photos but serve them through `next/image` (`images.unsplash.com` is already in `remotePatterns`). Source width raised to 1200 for both. Hero image uses `loading="eager"` + `fetchPriority="high"` (Next 16 deprecates `priority`). They can be swapped for real team photos later.
- **Scroll reveal (user's choice):** `.reveal` + `ScrollObserver` (no GSAP). The page mounts `ScrollObserver` itself, because it isn't in the public layout. `.reveal` and `.delay-*` are unlayered CSS that set their own `transition`, which would override Tailwind's `transition-all` on hover cards. So `.reveal` goes on **wrapper divs only**, never on a card with hover effects.
- **Wave SVGs:** the home waves are a fixed 900×600 at the card top, which leaves a bare strip on cards taller than 600px (the city list on mobile). Here they're cropped (`viewBox="0 200 900 400"`) and stretched over the bottom 55% of the card with `preserveAspectRatio="none"`.
- **Small additions not in the copy:** the city card heading "Pan-India City Hubs", the floating hero cards, and the trust items (all three taken from the home page). The "Hyper-Local Indian Expertise" label moved from above the city list to the section header.
- **Small fix:** "Start a Partnership" linked to `/contact` without a trailing slash (a 308 redirect with `trailingSlash: true`). It now links to `/contact/`.
- **Not used (user's choice):** home testimonials.
- **Alternatives considered:** a centred hero like Careers/Blog (rejected for a home-like look). Also considered swapping in local home images, which would show the same pictures twice on the site.

**Result:** ESLint clean. Checked on the user's running dev server (port 3000) with headless Chrome:
- `/about/` returns 200.
- At 1440×900, 1366×657 and 390×844: no horizontal overflow, no broken images, and every `.reveal` block activates when scrolled.
- Desktop and mobile section screenshots checked. On mobile the floating hero cards stay inside the screen.
- The only console error is the existing `WhatsAppButton` styled-jsx hydration mismatch (in the layout, not this page).

## 2026-11-22 — Logo / Home links: fix two click bugs

**Request:** "add home page link in footer and header icon". Both logos already linked to `/`, and "Home" was already in the header menu and the footer Quick Links (confirmed in the rendered HTML). The user then said the logo click wasn't working. Real clicks in headless Chrome found two bugs:

1. **On the home page, the logo and "Home" did nothing.** A Next `<Link>` to the current URL causes no visible change, so from the bottom of `/` the click left you where you were.
2. **Mobile, menu open: the logo couldn't be tapped.** The dim backdrop (`fixed inset-0 z-40`, inside the sticky header) covered the whole header bar, which had no z-index of its own. `elementFromPoint` on the logo and on the ✕ button both returned the backdrop. Tapping the logo only closed the menu and never navigated.

- **Fix (user's choice: logos + Home links):**
  - New `src/components/layout/HomeLink.jsx` (client). It is a `<Link href="/">` that uses Next 16's `onNavigate` to cancel the navigation when already on `/` and smooth-scroll to the top instead. `onNavigate` only runs for in-app navigation, so Ctrl/⌘-click still opens a new tab (per `node_modules/next/dist/docs/.../link.md`).
  - Header: the logo uses `HomeLink` and also closes the mobile menu. The desktop and mobile "Home" items use `HomeLink` (`item.href === "/"`). The header bar now has `relative z-50`, so it sits above the backdrop: the logo and ✕ can be tapped and are no longer dimmed while the menu is open.
  - Footer: the logo and the "Home" Quick Link use `HomeLink`.
- **Also fixed (user approved):** the home page orange wave SVG used `stroke-linecap` / `stroke-linejoin` (HTML spelling), which logged React's "Invalid DOM property" error on every visit to `/`. Renamed to `strokeLinecap` / `strokeLinejoin`.
- **Alternatives considered:** logos only, or the mobile menu fix only (user chose both bugs, logos and Home links).

**Result:** ESLint clean on the 4 files. Tested on the running dev server (port 3000) with real mouse events in headless Chrome:
- Header and footer logo clicks from `/about/`, `/blog/`, `/careers/`, `/contact/` and `/services/` reach `/` at both 1440 and 390 wide (20/20).
- On `/`: the footer logo scrolls 9261 → 0, the header logo 2500 → 0, header "Home" 3000 → 0, and footer "Home" 9303 → 0.
- Mobile with the menu open: the logo now navigates `/about/` → `/` and closes the menu. Drawer "Home" goes to the top on `/` and navigates from `/blog/`, closing the menu both times.
- The `stroke-linecap` console error no longer appears.

## 2026-11-25 — Dynamic sitemap + admin-editable page SEO

**Goal:** Make the sitemap dynamic, and let the admin edit metadata for every page except blog posts, which already have their own fields.

**Before:**
- `sitemap.js` read blog posts from MongoDB, but the 29 other pages were a hardcoded list, each with `lastModified: now`. That tells Google every page changes on every regeneration, which makes it ignore the dates.
- 28 pages hardcoded `export const metadata` (title, description, canonical). `/faq/` got it from `faq/layout.jsx`.
- `/services/` (a client component) had **no metadata at all**: no `<title>`.
- `/services/digital-marketing/` had no canonical.
- No page except blog posts had Open Graph or Twitter tags.

**Decisions (user's choices):**
- **Editable fields:** Meta Title, Meta Description, Meta Keywords, plus **Hide from Google** (noindex). Not chosen: social share image, per-page sitemap priority/frequency.
- **Sitemap lastmod:** the date of the page's last admin SEO edit; omitted if it was never edited. Blog posts keep their own dates.
- **Defaults live in one file:** `src/lib/site-pages.js`.

**How it works:**
- `src/lib/site-pages.js`: plain-data list of the 29 pages: path, label, group (Main / Services / City SEO / Legal), sitemap priority + changeFrequency (copied from the old sitemap), and default title + description. It was **generated from the old `metadata` exports**, so the text is word for word. It's safe to import in client components (the admin UI uses `PAGE_GROUPS`/`SITE_URL`).
- MongoDB `page_meta` collection holds one doc per changed page: `{ path, metaTitle, metaDescription, metaKeywords[], noindex, updatedAt }`. Saving with everything empty deletes the doc (back to defaults). DB helpers are in `src/lib/db.js` (`getPageMeta`, `getAllPageMeta`, `upsertPageMeta`, `deletePageMeta`). They return null/[] on DB errors, so pages fall back to the defaults and builds don't fail.
- `src/lib/page-meta.js` → `getPageMetadata(path)` returns title, description, keywords (only if set), canonical, Open Graph (website), Twitter `summary` card, and `robots: noindex, follow` when hidden. Every page now does `export function generateMetadata() { return getPageMetadata("/x/"); }`. A path missing from `site-pages.js` throws a clear error.
- `/services/`: the client page moved (with `git mv`, so history is kept) to `services/ServicesPageClient.jsx`. A new server `services/page.jsx` renders it and provides metadata. A `services/layout.jsx` was **not** used, because layout metadata would be inherited by every `/services/*` page (e.g. a noindex would leak).
- `sitemap.js`: built from `SITE_PAGES` (minus hidden pages) plus blog posts. A bad legacy `date` string no longer throws.
- API `src/app/api/admin/page-meta/route.js` has GET (list with defaults + override), PUT (save; all-empty = reset) and DELETE `?path=` (reset). All require the admin session (401 otherwise). Paths not in `site-pages.js`, including blog post paths, get 400.
- Admin: new sidebar tab **Page SEO** (`src/components/admin/PageSeoManager.jsx`): summary cards, search, pages grouped, Custom/Default/Hidden badges and last-edit date. The right-side editor drawer (same pattern as the blog editor) has char counters (60/160), the default shown as the placeholder, a Hide-from-Google checkbox, a live Google preview, and Reset to default.

**Bug found and fixed (pre-existing): the sitemap never refreshed in production.** With `trailingSlash: true`, the sitemap's cache tag is `_N_T_/sitemap.xml/`, but `revalidatePath` strips trailing slashes (`node_modules/next/dist/server/web/spec-extension/revalidate.js`), so `revalidatePath("/sitemap.xml")` never matched. Blog create/edit/delete has been leaving the production sitemap stale. The fix is a shared `revalidateSitemap()` in `page-meta.js` → `revalidatePath("/sitemap.xml", "layout")`, which matches the sitemap's own `_N_T_/sitemap.xml/layout` tag. `revalidateBlogPaths()` uses it too. Page paths are unaffected: their tags have no trailing slash (`_N_T_/about`).

**New copy (please review):** `/services/` default title "Digital Marketing Services | SEO, Ads & Web Development — Aksh Digital" and a description based on the page's hero text. All other text is unchanged.

**Also:** removed 3 `SITE_URL` constants that only the old metadata used (careers, privacy, terms). Left out the dead `/services/social-media/` page (redirected in `next.config`), as the old sitemap did. The contact page keeps its CRLF line endings.

**Result:**
- ESLint clean on all 37 changed files.
- Dev server (temporary, port 3021, scratch DB `akshdigital_blog_preview`): all 29 pages render **exactly** their old title and description (compared with the extracted originals), plus canonical, og:*, and twitter:*. `/services/` now has a title.
- Sitemap: 29 pages without lastmod + 5 scratch blog posts with dates; the dead page is not listed.
- API end-to-end, 28/28 checks: 401 without login, 400 for unknown/blog paths, custom title/description/keywords render, keywords trimmed and de-duplicated, noindex renders `noindex, follow` and removes the page from the sitemap, lastmod = save time, DELETE and all-empty PUT both reset.
- Admin UI screenshots (desktop): 29 rows, editor + Google preview work, no console errors, no horizontal overflow at 390px.
- **Production** (`next build` + `next start` on the scratch DB), 17/17 checks:
  - All pages still build static (○).
  - An admin save shows on the page at its next visit (cache MISS) while other pages stay cached (HIT).
  - Hide/unhide updates the sitemap.
  - A new blog post appears in the sitemap and on `/blog/`, and disappears from the sitemap after delete.
  - The first run of these checks, before the fix, showed the sitemap never refreshing.
- Test data cleaned up: the scratch DB has no `page_meta` docs, and the test blog post was deleted.
- **`.next` now holds that test production build (made against the scratch DB).** Run `npm run build` before any `npm start`.
- Note for local testing: starting `next dev` from Git Bash with a lowercase `d:/` path made every `.jsx` route 404. Starting from `D:/` works.
