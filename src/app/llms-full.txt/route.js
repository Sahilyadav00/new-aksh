import { getBlogs } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://akshdigital.com";

  let blogs = [];
  try {
    blogs = (await getBlogs()) || [];
  } catch (error) {
    console.error("Error fetching blogs for llms-full.txt:", error);
  }

  const detailedBlogsMd = blogs
    .map((b) => {
      let sectionsText = "";
      if (b.content && Array.isArray(b.content.sections)) {
        sectionsText = b.content.sections
          .map((s) => `### ${s.heading}\n${s.body}`)
          .join("\n\n");
      }
      return `## Article: [${b.title}](${baseUrl}/blog/${b.slug})
- **Category:** ${b.category || "General"}
- **Author:** ${b.author || "Aksh Digital Team"}
- **Read Time:** ${b.readTime || "N/A"}
- **Date:** ${b.date || "N/A"}
- **Summary:** ${b.excerpt}

${b.content?.intro || ""}

${sectionsText}

${b.content?.conclusion ? `**Conclusion:** ${b.content.conclusion}` : ""}
`;
    })
    .join("\n\n---\n\n");

  const content = `# Aksh Digital - Comprehensive AI Context & Documentation

> Full reference documentation for AI Assistants, Large Language Models (LLMs), and automated search engines regarding Aksh Digital agency capabilities, service details, and publication archives.

---

## 1. Company Overview
Aksh Digital is a premier full-service digital transformation agency headquartered in India, serving startups, SMEs, and enterprise brands worldwide. We specialize in end-to-end digital growth — blending software engineering, modern web development, SEO, performance advertising, social media scale, and corporate branding.

- **Website:** ${baseUrl}
- **Contact Page:** ${baseUrl}/contact
- **Key Focus:** High-ROI Digital Marketing, Mobile & Web Applications, Organic Search Dominance, Visual Branding.

---

## 2. In-Depth Service Breakdown

### Web Development (${baseUrl}/services/web-development)
We engineer fast, scalable, visually striking web platforms using modern architectures:
- **Technologies:** Next.js, React, Node.js, Tailwind CSS, MongoDB, Headless CMS, Cloudflare.
- **Offerings:** Custom Corporate Websites, E-Commerce Solutions, SaaS Web Apps, High-Converting Landing Pages, Progressive Web Apps (PWAs).
- **Core Value:** Core Web Vitals optimization (LCP < 2.5s), responsive layouts, modern aesthetics, and seamless user experiences.

### App Development (${baseUrl}/services/app-development)
End-to-end mobile application development for Android and iOS:
- **Technologies:** React Native, Flutter, Swift, Kotlin, Firebase, REST/GraphQL APIs.
- **Offerings:** Custom Mobile Apps, Enterprise Mobility Solutions, UI/UX Prototyping, App Store Optimization (ASO).

### SEO Services & Strategies (${baseUrl}/seo-services & ${baseUrl}/services/seo-strategies)
Data-driven organic search engine optimization engineered for rank 1 positioning:
- **Capabilities:** Technical SEO Audits, On-Page Optimization, E-E-A-T Signal Enhancement, Schema Markup, Keyword Intent Clustering, High-Authority Backlink Acquisition, Local SEO & Google Business Profile Management.

### Performance Marketing (${baseUrl}/services/performance-marketing)
Data-first, high-ROI paid ad campaign management across major advertising channels:
- **Platforms:** Google Ads (Search, Shopping, PMax, YouTube), Meta Ads (Facebook & Instagram), LinkedIn Ads.
- **Focus:** ROAS optimization, CPA reduction, funnel tracking with GTM & GA4, retargeting campaigns.

### Social Media Management (${baseUrl}/services/social-media)
Brand storytelling and viral short-form video strategies:
- **Services:** Instagram Reels creation, TikTok/Shorts content strategy, organic community engagement, monthly content calendars, analytics reporting.

### Graphic Design & Branding (${baseUrl}/services/graphic-design)
Visual identity design that establishes immediate authority:
- **Services:** Brand Identity & Style Guides, Logo Design, UI/UX Wireframing & Figma Prototypes, Marketing Collaterals, Social Media Creatives.

---

## 3. Frequently Asked Questions (FAQ)

### What types of businesses does Aksh Digital work with?
We work with startups, growing mid-sized companies, e-commerce brands, local enterprises, and global organizations seeking digital transformation.

### How quickly can a website or project be delivered?
Standard corporate websites typically take 2 to 4 weeks, while complex web applications or mobile apps range from 4 to 8+ weeks depending on scope.

### How does Aksh Digital measure marketing success?
We focus on metrics that directly impact revenue: Conversion Rate, Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Organic Traffic Growth, and Search Engine Rankings.

---

## 4. Complete Publication Archives & Articles

${detailedBlogsMd || "No publication archives available at this time."}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
