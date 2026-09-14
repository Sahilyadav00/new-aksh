import { getBlogs } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
<<<<<<< HEAD
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://akshdigital.com";
=======
  const baseUrl =
    process.env.NEXT_PUBLIC_HOSTNAME ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.akshdigital.in";
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758

  let blogs = [];
  try {
    blogs = (await getBlogs()) || [];
  } catch (error) {
    console.error("Error fetching blogs for llms.txt:", error);
  }

  const blogListMd = blogs
    .map(
      (b) =>
<<<<<<< HEAD
        `- [${b.title}](${baseUrl}/blog/${b.slug}): ${b.excerpt || b.title}`
=======
        `- [${b.title}](${baseUrl}/blog/${b.slug}/): ${b.excerpt || b.title}`
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
    )
    .join("\n");

  const content = `# Aksh Digital

> Aksh Digital is a full-service Digital Marketing, Web & Mobile App Development, SEO, Performance Marketing, and Graphic Design Agency based in India, serving global clients.

## Core Services
<<<<<<< HEAD
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
=======
- [Web Development](${baseUrl}/services/web-development/): Custom websites, Next.js, React, e-commerce platforms, and conversion-optimised landing pages.
- [App Development](${baseUrl}/services/app-development/): iOS and Android mobile apps engineered with modern, scalable tech stacks.
- [SEO Services](${baseUrl}/services/seo/): Search Engine Optimization, Technical SEO, E-E-A-T audits, and keyword ranking growth strategies.
- [Digital Marketing](${baseUrl}/services/digital-marketing/): Comprehensive online marketing strategies, brand positioning, and lead generation.
- [Performance Marketing](${baseUrl}/services/performance-marketing/): High-ROI Google Ads, Meta Ads (Facebook/Instagram), and targeted PPC campaigns.
- [Social Media Marketing](${baseUrl}/services/social-media-marketing/): Content creation, Instagram Reels strategy, community management, and social growth.
- [Graphic Design](${baseUrl}/services/graphic-design/): Brand identity design, UI/UX, corporate branding, logos, and marketing collaterals.

## SEO by City
- [SEO in Jaipur](${baseUrl}/seo-services/jaipur/)
- [SEO in Delhi](${baseUrl}/seo-services/delhi/)
- [SEO in Mumbai](${baseUrl}/seo-services/mumbai/)
- [SEO in Bangalore](${baseUrl}/seo-services/bangalore/)
- [SEO in Pune](${baseUrl}/seo-services/pune/)
- [SEO in Indore](${baseUrl}/seo-services/indore/)
- [SEO in Chandigarh](${baseUrl}/seo-services/chandigarh/)
- [SEO in Kolkata](${baseUrl}/seo-services/kolkata/)
- [SEO in Hyderabad](${baseUrl}/seo-services/hyderabad/)
- [SEO in Chennai](${baseUrl}/seo-services/chennai/)
- [SEO in Lucknow](${baseUrl}/seo-services/lucknow/)
- [SEO in Bhiwadi & Alwar](${baseUrl}/seo-services/bhiwadi-alwar/)

## Key Pages
- [Home](${baseUrl}/): Overview of Aksh Digital's services, metrics, client reviews, and capabilities.
- [About Us](${baseUrl}/about/): Our vision, company culture, expertise, and team profile.
- [Services](${baseUrl}/services/): Complete directory of digital marketing and engineering services.
- [Portfolio](${baseUrl}/portfolio/): Real-world client case studies and digital transformation stories.
- [Blog](${baseUrl}/blog/): Expert articles on SEO, web tech, social media growth, and digital strategy.
- [FAQ](${baseUrl}/faq/): Answers to common questions regarding pricing, timelines, workflow, and deliverables.
- [Contact](${baseUrl}/contact/): Get in touch with our team for project inquiries or to schedule a free strategy session.
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758

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
