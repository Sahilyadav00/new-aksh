import clientPromise from "./mongodb";
import crypto from "crypto";


// Cache database connection
async function getDb() {
  const client = await clientPromise;
  return client.db();
}

const initialBlogs = [
  {
    slug: "seo-strategies-2025",
    title: "10 SEO Strategies That Will Dominate Search Rankings in 2025",
    excerpt: "Google's algorithm evolves constantly. Here are the proven SEO tactics that drive first-page rankings in 2025 — from Core Web Vitals to E-E-A-T optimisation.",
    category: "SEO",
    date: "June 5, 2025",
    readTime: "8 min read",
    author: "Aksh Digital Team",
    image: "/assets/images/home/BLOG-01.WEBP",
    tags: ["SEO", "Google", "Rankings", "2025"],
    content: {
      intro: "Search engine optimisation has never been more dynamic. With Google rolling out multiple algorithm updates every year, businesses that rely on outdated tactics are losing ground fast. In 2025, winning at SEO means understanding not just keywords — but user intent, page experience, and topical authority.",
      sections: [
        {
          heading: "1. Prioritise E-E-A-T Above Everything",
          body: "Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) is no longer just a guideline — it's a ranking signal. Google wants to see real people behind content. Add author bios, credentials, first-hand experience, and cite reputable sources on every page."
        },
        {
          heading: "2. Master Core Web Vitals",
          body: "Page speed, interactivity, and visual stability (LCP, FID, CLS) are hard ranking factors. Use tools like PageSpeed Insights and GTmetrix to audit your site. Target LCP under 2.5s and CLS under 0.1 for competitive rankings."
        },
        {
          heading: "3. Build Topical Authority, Not Just Backlinks",
          body: "Google rewards sites that comprehensively cover a topic. Create content clusters — a pillar page with multiple supporting blog posts that interlink. This signals deep expertise and dramatically improves rankings for an entire topic area."
        },
        {
          heading: "4. Optimise for Search Intent",
          body: "Stop targeting keywords. Start targeting intent. For every target keyword, identify whether the searcher wants information, a comparison, or to buy — then match your page format accordingly. Mismatch = high bounce rate = lower rankings."
        },
        {
          heading: "5. Local SEO is More Powerful Than Ever",
          body: "With the rise of 'near me' searches and Google Maps prominence, local SEO delivers some of the highest-intent traffic available. Optimise your Google Business Profile, build local citations, and create location-specific landing pages."
        },
        {
          heading: "6. Create Video Content Strategically",
          body: "YouTube is the world's second-largest search engine. Video content that answers specific questions ranks in both YouTube and Google SERPs. Start a content series around your key topics and embed videos in relevant blog posts."
        },
        {
          heading: "7. Use AI Tools as Accelerators, Not Replacements",
          body: "AI writing tools like Gemini and ChatGPT can accelerate content production, but Google penalises thin, AI-generated content. Use AI for research, outlines, and ideation — but add human insight, examples, and analysis before publishing."
        },
        {
          heading: "8. Fix Technical SEO Foundations",
          body: "No amount of content will rescue a technically broken site. Audit your crawlability, XML sitemap, robots.txt, canonical tags, structured data, and internal linking structure. Technical SEO is the foundation everything else builds on."
        },
        {
          heading: "9. Earn High-Quality Backlinks Strategically",
          body: "Links remain one of Google's top 3 ranking factors. Focus on digital PR, expert roundups, resource page link building, and original research/data that others naturally want to cite. Avoid low-quality link schemes."
        },
        {
          heading: "10. Measure What Matters with GA4",
          body: "Google Analytics 4 gives you deeper insights into user journeys. Set up conversion tracking, monitor engagement rate over bounce rate, and use the Exploration reports to identify your top-performing content and scaling opportunities."
        }
      ],
      conclusion: "SEO in 2025 rewards businesses that invest in real value — comprehensive content, fast pages, strong authority, and genuine user experience. Start implementing these strategies today, and within 6–9 months you'll see compounding results that your competitors can't easily replicate."
    }
  },
  {
    slug: "performance-marketing-roas",
    title: "How to Double Your ROAS with Performance Marketing in 90 Days",
    excerpt: "A step-by-step breakdown of the exact campaign structure, bidding strategies, and creative testing frameworks that deliver 4x+ ROAS across Google and Meta.",
    category: "Performance Marketing",
    date: "May 28, 2025",
    readTime: "10 min read",
    author: "Aksh Digital Team",
    image: "/assets/images/home/BLOG-02.WEBP",
    tags: ["Performance Marketing", "Google Ads", "Meta Ads", "ROAS"],
    content: {
      intro: "Most businesses running paid ads are leaving money on the table — not because they're spending too little, but because their campaigns are poorly structured. In this article, we break down the exact framework we use to double ROAS for our clients within 90 days.",
      sections: [
        { heading: "Week 1–2: Audit & Restructure", body: "Before spending another rupee, audit your existing accounts. Identify wasted spend, consolidate ad groups, and restructure campaigns by intent stage — Awareness, Consideration, Conversion. Most accounts we audit have 40–60% of budget going to the wrong audiences." },
        { heading: "Week 3–4: Build Your Creative System", body: "Creative is the #1 lever in Meta ads. Test 3 different hooks, 3 different formats (static, carousel, video), and 2 different CTAs. Let data — not opinions — decide your winners. Run each test for at least 7 days and ₹3,000+ spend before judging." },
        { heading: "Month 2: Scale What Works", body: "Once you've found winning combinations, scale them with budget increases of 20–30% every 2–3 days. Aggressive scaling kills performance. Gradual scaling lets the algorithm maintain delivery efficiency while spending more." },
        { heading: "Month 3: Retargeting & LTV Maximisation", body: "Your warmest audiences convert at 3–5x higher ROAS than cold traffic. Build retargeting sequences for website visitors (7, 14, 30-day windows), video viewers, and email lists. Pair with upsell offers to maximise revenue per customer." }
      ],
      conclusion: "Doubling ROAS isn't magic — it's methodology. Audit ruthlessly, test systematically, scale carefully, and retarget relentlessly. These 90 days of disciplined execution create a paid advertising machine that compounds over time."
    }
  },
  {
    slug: "social-media-engagement-tips",
    title: "7 Social Media Content Types That Drive Massive Engagement in 2025",
    excerpt: "Stop guessing what to post. Here are the content formats your audience actually engages with — backed by data from 50+ brand campaigns.",
    category: "Social Media",
    date: "May 18, 2025",
    readTime: "6 min read",
    author: "Aksh Digital Team",
    image: "/assets/images/home/BLOG-03.WEBP",
    tags: ["Social Media", "Content Strategy", "Instagram", "Engagement"],
    content: {
      intro: "Posting consistently isn't enough. To build an engaged following in 2025, you need to post the right types of content — formats the platform algorithm rewards and your audience actually stops to interact with.",
      sections: [
        { heading: "1. Educational Carousels", body: "Slide-by-slide educational content consistently outperforms single images on Instagram. Swipe-through posts on topics like 'How to do X in 5 steps' drive saves (the most valuable engagement signal) and shares." },
        { heading: "2. Behind-the-Scenes Reels", body: "Authenticity wins. Show your team, your process, your workspace, your wins and failures. Audiences connect with humans, not brands. BTS content has 2–3x higher engagement rates than polished promotional videos." },
        { heading: "3. 'Myth vs. Reality' Posts", body: "Controversy and surprise trigger engagement. Create posts that bust common myths in your industry. They generate saves, shares, and comments from people tagging friends who believe the myth." },
        { heading: "4. Poll and Question Stories", body: "Instagram Stories with interactive stickers (polls, questions, quizzes) have 40% higher completion rates. Use them daily to keep your audience engaged and gather market research simultaneously." },
        { heading: "5. Customer Transformation Stories", body: "Social proof in storytelling format — before/after results, case studies, testimonial videos — builds trust faster than any other content type. Make your customer the hero of the story." },
        { heading: "6. Trending Audio Reels", body: "Using trending audio in the first 24–48 hours gives your Reels a massive algorithmic boost. Keep a list of trending sounds and adapt them quickly with relevant content for your niche." },
        { heading: "7. Value Bombs in Text Overlays", body: "Short, punchy Reels with text overlays stating one powerful insight ('The most underrated SEO tactic in 2025 is...') hook viewers in the first 2 seconds — the most critical window for stop-scroll performance." }
      ],
      conclusion: "The brands winning on social media in 2025 are those that mix education, entertainment, and authenticity. Test 2–3 of these content types every week and let your analytics show you what your specific audience loves most."
    }
  },
  {
    slug: "nextjs-seo-web-development",
    title: "Why Next.js is the Best Framework for SEO-Friendly Websites",
    excerpt: "Server-side rendering, image optimisation, and lightning-fast load times — here's why Next.js is the go-to framework for businesses serious about search visibility.",
    category: "Web Development",
    date: "May 10, 2025",
    readTime: "7 min read",
    author: "Aksh Digital Team",
    image: "/assets/images/home/BLOG-01.WEBP",
    tags: ["Next.js", "Web Development", "SEO", "Performance"],
    content: {
      intro: "Your website's framework isn't just a technical decision — it's an SEO decision. The wrong framework can sabotage your rankings before you even write a word of content. Here's why Next.js has become the gold standard for high-performance, SEO-optimised websites.",
      sections: [
        { heading: "Server-Side Rendering (SSR) for Instant Indexability", body: "Search engine crawlers can't reliably execute JavaScript. Client-rendered apps (React SPA, Vue) often appear as blank pages to Googlebot. Next.js renders HTML on the server, delivering fully-formed, crawlable pages that get indexed faster and more accurately." },
        { heading: "Static Site Generation for Blazing Speed", body: "For content pages that don't change often, Next.js generates static HTML at build time. This means zero server response time — pages load in milliseconds, hitting Core Web Vitals targets that directly impact rankings." },
        { heading: "Built-in Image Optimisation", body: "The next/image component automatically serves WebP format, lazy loads images, and resizes them to the viewport. This single feature alone can cut your Largest Contentful Paint (LCP) time in half." },
        { heading: "Automatic Code Splitting", body: "Next.js only sends the JavaScript required for each page — not the entire application. Smaller bundles mean faster page loads, better Time to Interactive (TTI), and happier both users and Google." },
        { heading: "Easy Metadata & Structured Data", body: "With Next.js App Router, setting unique title tags, meta descriptions, Open Graph tags, and JSON-LD structured data per page is clean and intuitive. Perfect SEO metadata across hundreds of pages becomes manageable." }
      ],
      conclusion: "For businesses that take their online presence seriously, Next.js isn't just a nice-to-have — it's the right foundation. It pairs performance engineering with developer experience in a way no other framework matches for production SEO websites."
    }
  },
  {
    slug: "local-seo-jaipur-guide",
    title: "The Complete Guide to Local SEO for Jaipur Businesses in 2025",
    excerpt: "If your Jaipur business isn't showing up in local searches, you're losing customers every day. Here's everything you need to dominate local search in the Pink City.",
    category: "SEO",
    date: "April 30, 2025",
    readTime: "9 min read",
    author: "Aksh Digital Team",
    image: "/assets/images/home/BLOG-02.WEBP",
    tags: ["Local SEO", "Jaipur", "Google Business Profile", "Near Me"],
    content: {
      intro: "Jaipur's business landscape is evolving rapidly. More customers than ever are searching Google to discover local businesses — restaurants, doctors, lawyers, tutors, salons, and everything in between. If you're not showing up in those searches, your competitors are getting those customers.",
      sections: [
        { heading: "Step 1: Claim and Optimise Your Google Business Profile", body: "Your GBP listing is the single most important local SEO asset. Fill every field: business name, address, phone number (NAP), category, hours, website, photos (minimum 20), services, and Q&A. An incomplete GBP is practically invisible." },
        { heading: "Step 2: NAP Consistency Across All Directories", body: "Your Name, Address, and Phone number must be identical everywhere online — Justdial, Sulekha, IndiaMart, Facebook, your website, and every local directory. Even minor inconsistencies confuse Google and hurt your map pack rankings." },
        { heading: "Step 3: Generate and Respond to Reviews", body: "Reviews are a top local ranking factor. Send WhatsApp messages to happy customers asking for a Google review (include the direct link). Respond to every review — positive and negative — within 24 hours. Businesses with 50+ reviews dramatically outperform those with fewer." },
        { heading: "Step 4: Create Jaipur-Specific Content", body: "Write blog posts and landing pages that mention specific Jaipur localities, landmarks, and community topics. A plumber who writes about 'burst pipe emergencies in Mansarovar, Jaipur' will outrank generic plumbing content for local searches." },
        { heading: "Step 5: Build Local Citations", body: "Get listed on Jaipur-specific business directories, local news sites, and community platforms. Each citation acts as a vote of confidence in your local legitimacy." }
      ],
      conclusion: "Local SEO in Jaipur is an ongoing process, not a one-time task. Businesses that consistently build their local presence — reviews, content, citations, and GBP optimisation — will own their market within 6–12 months."
    }
  },
  {
    slug: "brand-identity-design-tips",
    title: "How Great Graphic Design Builds Brand Trust and Drives More Sales",
    excerpt: "Design is not decoration — it's strategy. Learn how cohesive brand identity, visual hierarchy, and consistent design language directly impact your bottom line.",
    category: "Graphic Design",
    date: "April 20, 2025",
    readTime: "5 min read",
    author: "Aksh Digital Team",
    image: "/assets/images/home/BLOG-03.WEBP",
    tags: ["Graphic Design", "Brand Identity", "Visual Design", "Branding"],
    content: {
      intro: "People judge books by their covers — and businesses by their design. In a world of infinite choices, visual identity is often the first and most powerful factor in a customer's trust decision. Great design isn't cosmetic; it's commercial.",
      sections: [
        { heading: "First Impressions Happen in 50 Milliseconds", body: "Research shows it takes just 50ms for a visitor to form an opinion of your website. A professional, cohesive design signals credibility and competence instantly. Poor design triggers doubt, and once lost, trust is nearly impossible to recover." },
        { heading: "Colour Psychology Drives Purchase Decisions", body: "Colours evoke emotions and associations that influence buying behaviour. Blue builds trust (used by banks and tech companies). Red creates urgency. Green signals safety and growth. Choosing the right colour palette for your brand is a strategic decision, not a personal preference." },
        { heading: "Consistency Creates Recognition", body: "Brands like Apple and Nike are instantly recognisable because every touchpoint — from their website to packaging to ads — uses the same visual language. Consistency builds familiarity, and familiarity builds trust, which drives sales." },
        { heading: "Typography Communicates Personality", body: "The fonts you choose communicate who you are before a customer reads a single word. Serif fonts signal tradition and authority. Sans-serif fonts feel modern and approachable. Script fonts evoke creativity. Choose typography that matches your brand personality and stick with it." },
        { heading: "Visual Hierarchy Guides Action", body: "Great design leads the eye from attention → interest → desire → action. Strategic use of size, contrast, colour, and whitespace guides visitors naturally toward the outcome you want — whether that's a purchase, enquiry, or download." }
      ],
      conclusion: "Every rupee invested in professional graphic design returns multiple times over through higher trust, better conversion rates, and stronger brand recall. Design is not a cost — it's a revenue strategy."
    }
  },
  {
    slug: "digital-marketing-checklist-2025",
    title: "The 2025 Digital Marketing Checklist Every Business Needs",
    excerpt: "A comprehensive, actionable checklist covering SEO, paid ads, social media, content marketing, and analytics — use this to audit and upgrade your entire strategy.",
    category: "Digital Marketing",
    date: "April 10, 2025",
    readTime: "11 min read",
    author: "Aksh Digital Team",
    image: "/assets/images/home/BLOG-01.WEBP",
    tags: ["Digital Marketing", "Strategy", "Checklist", "2025"],
    content: {
      intro: "Most businesses run their digital marketing reactively — posting when they remember, running ads when sales dip, and checking analytics occasionally. In 2025, the businesses winning online run a systematic, checked-off strategy. Here's the complete checklist.",
      sections: [
        { heading: "SEO Checklist", body: "✓ Google Search Console set up and monitored weekly\n✓ Google Business Profile updated with fresh photos and posts\n✓ Core Web Vitals in 'Good' range\n✓ Blog publishing minimum 2x per month\n✓ Internal linking reviewed quarterly\n✓ Backlink profile audited every 6 months" },
        { heading: "Paid Advertising Checklist", body: "✓ Conversion tracking set up (Google Tag Manager + GA4)\n✓ Meta Pixel installed and verified\n✓ Retargeting audiences built (website visitors, video viewers)\n✓ Ad creative refreshed every 2–3 weeks\n✓ Weekly performance review against ROAS/CPA targets\n✓ Negative keyword list maintained" },
        { heading: "Social Media Checklist", body: "✓ Content calendar planned 2 weeks in advance\n✓ Posting minimum 4x per week across primary platforms\n✓ Stories/Reels published daily\n✓ Comments and DMs responded to within 4 hours\n✓ Monthly analytics reviewed for top-performing content\n✓ Competitor content monitored weekly" },
        { heading: "Email Marketing Checklist", body: "✓ Welcome sequence set up for new subscribers\n✓ Monthly newsletter sent consistently\n✓ Email list cleaned every 6 months\n✓ Open rate and click rate tracked and compared to benchmarks\n✓ Abandoned cart/lead nurture sequences live" }
      ],
      conclusion: "Save this checklist and review it every quarter. The businesses that consistently execute these fundamentals don't need tricks or hacks — the fundamentals, done consistently, are enough to outperform 90% of competitors."
    }
  },
  {
    slug: "google-ads-campaign-structure",
    title: "The Perfect Google Ads Campaign Structure for Maximum ROI",
    excerpt: "A poorly structured Google Ads account wastes thousands of rupees every month. Here's the campaign architecture that certified experts use to maximise performance.",
    category: "Performance Marketing",
    date: "March 28, 2025",
    readTime: "8 min read",
    author: "Aksh Digital Team",
    image: "/assets/images/home/BLOG-02.WEBP",
    tags: ["Google Ads", "PPC", "Campaign Structure", "ROI"],
    content: {
      intro: "Google Ads can be your most profitable marketing channel — or your biggest money pit. The difference almost always comes down to campaign structure. A well-architected account gives Google's algorithm the data it needs to optimise; a poorly structured one wastes budget on irrelevant clicks.",
      sections: [
        { heading: "Campaign Type Selection", body: "Use Search campaigns for high-intent, bottom-of-funnel keywords. Performance Max for e-commerce and broad reach. Display for retargeting and awareness. YouTube for video. Don't mix intent levels in a single campaign — it confuses bidding algorithms." },
        { heading: "Ad Group Granularity", body: "Each ad group should focus on a tightly related set of keywords (ideally 5–15). Tight ad groups allow your ad copy to be highly relevant to search queries, improving Quality Score, which lowers CPC and improves ad position." },
        { heading: "Match Type Strategy", body: "Start with Exact and Phrase match to control spend. Add Broad match only once you have sufficient conversion data (50+ conversions per month) and a strong negative keyword list. Uncontrolled broad match is where most budget waste happens." },
        { heading: "Bidding Strategy Selection", body: "For new campaigns (<30 conversions/month), use Manual CPC or Maximise Clicks. Once you hit 30+ conversions, switch to Target CPA or Target ROAS. Smart bidding requires data — give it without enough and you'll burn budget." },
        { heading: "Ad Copy Best Practices", body: "Write 3 responsive search ads per ad group. Use your primary keyword in the headline and display URL. Address the user's intent explicitly. Test benefit-focused vs. feature-focused copy. Include social proof (rated 4.8★, 500+ projects delivered)." }
      ],
      conclusion: "A perfect Google Ads structure won't guarantee results overnight, but it creates the conditions for the algorithm to optimise effectively. Pair great structure with strong landing pages and consistent optimisation, and your ROAS will compound month over month."
    }
  },
  {
    slug: "instagram-reels-strategy",
    title: "Instagram Reels Strategy That Grew Our Clients 10k Followers in 30 Days",
    excerpt: "Short-form video is the fastest-growing content format. Here's the exact Reels framework we use to grow brand accounts consistently and predictably.",
    category: "Social Media",
    date: "March 15, 2025",
    readTime: "6 min read",
    author: "Aksh Digital Team",
    image: "/assets/images/home/BLOG-03.WEBP",
    tags: ["Instagram", "Reels", "Social Media Growth", "Video Marketing"],
    content: {
      intro: "Instagram Reels are the single most powerful organic growth lever on social media right now. When done right, a single Reel can reach 10x your follower count and bring in hundreds of new followers in 24 hours. Here's the exact framework we use for our clients.",
      sections: [
        { heading: "The 3-Second Hook Rule", body: "Instagram decides in the first 3 seconds whether to push your Reel to more people. Your opening must create immediate curiosity, surprise, or value. Start with a bold statement, a surprising fact, or a visual that demands attention — never a logo intro or slow pan." },
        { heading: "The AIDA Format for Reels", body: "Structure your Reel like a mini sales letter: Attention (0–3s hook), Interest (show what they'll learn/see), Desire (build anticipation), Action (CTA at the end). This framework works for educational, entertaining, and promotional content alike." },
        { heading: "Trending Audio Timing", body: "Use a trending sound within 24–48 hours of it going viral. Instagram's algorithm pushes content using trending audio to explore feeds. Keep a daily habit of checking the Reels audio trending tab and brainstorm how to adapt top sounds to your niche." },
        { heading: "Posting Frequency and Timing", body: "Post 5–7 Reels per week for aggressive growth. Post between 6–9am or 7–9pm in your timezone. Consistency signals to the algorithm that you're a reliable content source, increasing your baseline reach over time." },
        { heading: "Repurpose and Cross-Post", body: "Every Reel should be posted to Instagram, TikTok, and YouTube Shorts (without watermarks). Each platform has a different audience — the same video can bring in followers across all three simultaneously with zero extra production time." }
      ],
      conclusion: "Growing on Instagram Reels isn't about luck — it's about understanding the algorithm, creating compelling hooks, and posting consistently. Implement this framework for 30 days and you'll see measurable follower growth and engagement lift."
    }
  }
];

// Helper to seed initial blogs if collections are empty
async function seedDatabase(db) {
  const count = await db.collection("blogs").countDocuments();
  if (count === 0) {
    console.log("Seeding default blog posts into MongoDB...");
    await db.collection("blogs").insertMany(initialBlogs);
  }
}

export async function getBlogs() {
  try {
    const db = await getDb();
    await seedDatabase(db);
    // Fetch and return blogs (exclude MongoDB _id from causing Next.js serialization warnings)
    const result = await db.collection("blogs").find({}).toArray();
    return result.map(({ _id, ...rest }) => rest);
  } catch (err) {
    console.error("Error reading blogs from MongoDB", err);
    return [];
  }
}

export async function getBlogBySlug(slug) {
  try {
    const db = await getDb();
    const result = await db.collection("blogs").findOne({ slug });
    if (!result) return null;
    const { _id, ...rest } = result;
    return rest;
  } catch (err) {
    console.error(`Error reading blog ${slug} from MongoDB`, err);
    return null;
  }
}

export async function createBlog(blog) {
  try {
    const db = await getDb();
    await seedDatabase(db);
    return await db.collection("blogs").insertOne(blog);
  } catch (err) {
    console.error("Error creating blog in MongoDB", err);
    return false;
  }
}

export async function updateBlog(slug, updatedBlog) {
  try {
    const db = await getDb();
    // Exclude _id to prevent MongoDB exception when updating
    const { _id, ...updatePayload } = updatedBlog;
    return await db.collection("blogs").updateOne({ slug }, { $set: updatePayload });
  } catch (err) {
    console.error(`Error updating blog ${slug} in MongoDB`, err);
    return false;
  }
}

export async function deleteBlog(slug) {
  try {
    const db = await getDb();
    return await db.collection("blogs").deleteOne({ slug });
  } catch (err) {
    console.error(`Error deleting blog ${slug} from MongoDB`, err);
    return false;
  }
}

export async function getContacts() {
  try {
    const db = await getDb();
    const result = await db.collection("contacts").find({}).sort({ createdAt: -1 }).toArray();
    return result.map(({ _id, ...rest }) => ({
      _id: _id.toString(), // Convert Object ID to string if needed
      ...rest
    }));
  } catch (err) {
    console.error("Error reading contacts from MongoDB", err);
    return [];
  }
}

export async function createContact(contact) {
  try {
    const db = await getDb();
    return await db.collection("contacts").insertOne(contact);
  } catch (err) {
    console.error("Error saving contact to MongoDB", err);
    return false;
  }
}

export async function deleteContact(id) {
  try {
    const db = await getDb();
    return await db.collection("contacts").deleteOne({ id });
  } catch (err) {
    console.error(`Error deleting contact ${id} from MongoDB`, err);
    return false;
  }
}

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

async function seedAdminUser(db) {
  const count = await db.collection("admin_users").countDocuments();
  if (count === 0) {
    const passwordHash = hashPassword("admin123");
    await db.collection("admin_users").insertOne({
      username: "admin",
      passwordHash,
      createdAt: new Date().toISOString(),
    });
    console.log("Seeded default admin user to MongoDB.");
  }
}

export async function verifyAdminCredentials(username, password) {
  try {
    const db = await getDb();
    await seedAdminUser(db);
    const user = await db.collection("admin_users").findOne({ username });
    if (!user) return false;
    return user.passwordHash === hashPassword(password);
  } catch (err) {
    console.error("Error verifying admin credentials", err);
    return false;
  }
}

export async function updateAdminPassword(username, currentPassword, newPassword) {
  try {
    const db = await getDb();
    await seedAdminUser(db);
    const user = await db.collection("admin_users").findOne({ username });
    if (!user) return { success: false, error: "Admin user not found" };

    if (user.passwordHash !== hashPassword(currentPassword)) {
      return { success: false, error: "Incorrect current password" };
    }

    const newPasswordHash = hashPassword(newPassword);
    await db.collection("admin_users").updateOne(
      { username },
      { $set: { passwordHash: newPasswordHash, updatedAt: new Date().toISOString() } }
    );
    return { success: true };
  } catch (err) {
    console.error("Error updating admin password", err);
    return { success: false, error: "Database error" };
  }
}

