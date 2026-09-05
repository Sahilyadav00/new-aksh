import { getBlogs } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://akshdigital.com";

  let blogs = [];
  try {
    blogs = (await getBlogs()) || [];
  } catch (error) {
    console.error("Error fetching blogs for llms.txt:", error);
  }

  const blogListMd = blogs
    .map(
      (b) =>
        `- [${b.title}](${baseUrl}/blog/${b.slug}): ${b.excerpt || b.title}`
    )
    .join("\n");

  const content = `# Aksh Digital

> Aksh Digital is a full-service Digital Marketing, Web & Mobile App Development, SEO, Performance Marketing, and Graphic Design Agency based in India, serving global clients.

## Core Services
- [Web Development](${baseUrl}/services/web-development): Custom websites, Next.js, React, e-commerce platforms, and conversion-optimised landing pages.
- [App Development](${baseUrl}/services/app-development): iOS and Android mobile apps engineered with modern, scalable tech stacks.
- [SEO Services](${baseUrl}/seo-services): Search Engine Optimization, Technical SEO, E-E-A-T audits, and keyword ranking growth strategies.
- [Digital Marketing](${baseUrl}/services/digital-marketing): Comprehensive online marketing strategies, brand positioning, and lead generation.
- [Performance Marketing](${baseUrl}/services/performance-marketing): High-ROI Google Ads, Meta Ads (Facebook/Instagram), and targeted PPC campaigns.
- [Social Media Management](${baseUrl}/services/social-media): Content creation, Instagram Reels strategy, community management, and social growth.
- [Graphic Design](${baseUrl}/services/graphic-design): Brand identity design, UI/UX, corporate branding, logos, and marketing collaterals.
- [SEO Strategies](${baseUrl}/services/seo-strategies): Data-driven SEO roadmaps tailored for long-term organic dominance.

## Key Pages
- [Home](${baseUrl}): Overview of Aksh Digital's services, metrics, client reviews, and capabilities.
- [About Us](${baseUrl}/about): Our vision, company culture, expertise, and team profile.
- [Portfolio](${baseUrl}/portfolio): Real-world client case studies and digital transformation stories.
- [Blog](${baseUrl}/blog): Expert articles on SEO, web tech, social media growth, and digital strategy.
- [FAQ](${baseUrl}/faq): Answers to common questions regarding pricing, timelines, workflow, and deliverables.
- [Contact](${baseUrl}/contact): Get in touch with our team for project inquiries or to schedule a free strategy session.

## Dynamic Articles & Resources
${blogListMd || "No articles available at this time."}

## Optional / Extended Context
- [Full LLM Context](${baseUrl}/llms-full.txt): Extended markdown details including comprehensive service documentation, FAQs, and full article section outlines for LLMs.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
