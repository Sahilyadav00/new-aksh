// Every public page whose SEO can be edited in the admin panel (Admin → Page SEO),
// and the source of the sitemap's page list. Blog posts are not listed here: they
// have their own meta fields and are added to the sitemap from the database.
//
// title / description are the defaults. An admin override in MongoDB (page_meta)
// replaces them; clearing the override falls back to these.
//
// Adding a new page: add an entry here, then in the page file:
//   export function generateMetadata() { return getPageMetadata("/your-path/"); }
//
// Plain data only — safe to import from client components.

export const SITE_URL = "https://www.akshdigital.in";

export const PAGE_GROUPS = ["Main", "Services", "City SEO", "Legal"];

export const SITE_PAGES = [
  {
    path: "/",
    label: "Home",
    group: "Main",
    priority: 1.0,
    changeFrequency: "daily",
    title: "Digital Marketing Agency in Jaipur | SEO & Ads Company Aksh Digital",
    description:
      "Aksh Digital is a full-service software development and performance digital marketing agency headquartered in Jaipur, serving clients across India, USA, UK, and worldwide.",
  },
  {
    path: "/about/",
    label: "About Us",
    group: "Main",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "About Aksh Digital | Digital Marketing & Web Development Agency India",
    description:
      "Aksh Digital is a full-service digital marketing and web development agency in Jaipur. We help businesses across India, USA, and UK scale with SEO, performance ads, and modern web builds.",
  },
  {
    path: "/services/",
    label: "Services Overview",
    group: "Services",
    priority: 0.9,
    changeFrequency: "weekly",
    title: "Digital Marketing Services | SEO, Ads & Web Development — Aksh Digital",
    description:
      "Explore Aksh Digital's full-service digital marketing: SEO, performance marketing, social media, graphic design, and web and app development for businesses across India, the USA, and the UK.",
  },
  {
    path: "/services/seo/",
    label: "SEO Services",
    group: "Services",
    priority: 0.9,
    changeFrequency: "monthly",
    title: "Enterprise SEO Strategies & Services | Page 1 Domination — Aksh Digital",
    description:
      "Enterprise SEO strategies engineered for Page 1 domination and high-intent leads. Technical audits, high-authority link acquisition, local SEO, and semantic content by Aksh Digital.",
  },
  {
    path: "/services/digital-marketing/",
    label: "Digital Marketing",
    group: "Services",
    priority: 0.9,
    changeFrequency: "monthly",
    title: "Complete Digital Marketing Services | High-ROAS Growth — Aksh Digital",
    description:
      "Complete digital marketing services engineered for high ROI and market domination. SEO, Google & Meta Ads, Next.js web engineering, social media, and CRO by Aksh Digital.",
  },
  {
    path: "/services/social-media-marketing/",
    label: "Social Media Marketing",
    group: "Services",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "Creative Social Media Marketing Services | Brand Growth — Aksh Digital",
    description:
      "Social media marketing services engineered to engage, convert, and scale. Instagram, LinkedIn, YouTube, Reels production, paid social ads, and community management by Aksh Digital.",
  },
  {
    path: "/services/graphic-design/",
    label: "Graphic Design",
    group: "Services",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "High-Impact Graphic Design & Brand Identity Services — Aksh Digital",
    description:
      "Graphic design services engineered to capture attention and drive conversions. Logos, brand identity, performance ad creatives, UI/UX, and marketing collateral by Aksh Digital.",
  },
  {
    path: "/services/web-development/",
    label: "Web Development",
    group: "Services",
    priority: 0.9,
    changeFrequency: "monthly",
    title: "Custom Web Development & Engineering Services — Aksh Digital",
    description:
      "High-performance custom web development engineered for speed, security, and scalability. Next.js, React, Node.js, headless e-commerce, and SaaS platforms by Aksh Digital.",
  },
  {
    path: "/services/app-development/",
    label: "App Development",
    group: "Services",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "Custom App Development Services | iOS, Android & Flutter — Aksh Digital",
    description:
      "Mobile app development services engineered for retention, speed, and scale. Native iOS, Android, React Native, Flutter, and custom backend API architecture by Aksh Digital.",
  },
  {
    path: "/services/performance-marketing/",
    label: "Performance Marketing",
    group: "Services",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "Performance Marketing Services | High-ROAS Google & Meta Ads — Aksh Digital",
    description:
      "Data-driven performance marketing services engineered to lower CAC and maximize ROAS. Google Ads, Meta Ads, LinkedIn ABM, server-side tracking, and landing page CRO by Aksh Digital.",
  },
  {
    path: "/portfolio/",
    label: "Portfolio",
    group: "Main",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "Portfolio | Our Work & Case Studies — Aksh Digital",
    description:
      "Explore Aksh Digital's portfolio — web design, mobile apps, SEO case studies, and digital marketing campaigns that delivered real results for real businesses across India.",
  },
  {
    path: "/blog/",
    label: "Blog (listing)",
    group: "Main",
    priority: 0.8,
    changeFrequency: "daily",
    title: "Blog | Digital Marketing & SEO Insights — Aksh Digital",
    description:
      "Stay ahead with expert articles on SEO, digital marketing, social media, web development, and performance marketing from the Aksh Digital team.",
  },
  {
    path: "/contact/",
    label: "Contact",
    group: "Main",
    priority: 0.7,
    changeFrequency: "monthly",
    title: "Contact Aksh Digital | Digital Marketing & Web Development Agency Jaipur",
    description:
      "Contact Aksh Digital for SEO, Google Ads, web development, and performance marketing. Serving businesses in Jaipur, Delhi, Mumbai, Bangalore, and global markets (USA, UK).",
  },
  {
    path: "/faq/",
    label: "FAQ",
    group: "Main",
    priority: 0.6,
    changeFrequency: "monthly",
    title: "Frequently Asked Questions | Aksh Digital",
    description:
      "Find answers to frequently asked questions about Aksh Digital's SEO, performance marketing, web development, and full-service digital marketing solutions.",
  },
  {
    path: "/careers/",
    label: "Careers",
    group: "Main",
    priority: 0.5,
    changeFrequency: "monthly",
    title: "Careers at Aksh Digital | Join Our Team in Jaipur",
    description:
      "Explore careers at Aksh Digital. We welcome creative, curious people in digital marketing, design, and technology. Share your resume or portfolio with us.",
  },
  {
    path: "/terms-and-conditions/",
    label: "Terms & Conditions",
    group: "Legal",
    priority: 0.3,
    changeFrequency: "yearly",
    title: "Terms & Conditions | Aksh Digital",
    description:
      "Read the Terms & Conditions that govern the use of the Aksh Digital website and our SEO, paid advertising, social media, web development, and creative services.",
  },
  {
    path: "/privacy-policy/",
    label: "Privacy Policy",
    group: "Legal",
    priority: 0.3,
    changeFrequency: "yearly",
    title: "Privacy Policy | Aksh Digital",
    description:
      "Learn how Aksh Digital collects, uses, shares, and protects your personal information when you visit our website, contact us, or use our digital marketing and development services.",
  },
  {
    path: "/seo-services/jaipur/",
    label: "SEO in Jaipur",
    group: "City SEO",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "Premier SEO Services in Jaipur | Best SEO Company Jaipur — Aksh Digital",
    description:
      "Stop losing customers to local competitors. Aksh Digital delivers premier SEO services in Jaipur, Google Business Profile (GBP) ranking, technical audits, and high-intent organic lead generation.",
  },
  {
    path: "/seo-services/delhi/",
    label: "SEO in Delhi",
    group: "City SEO",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "SEO Agency in Delhi | Best Digital Marketing Company Delhi NCR – Aksh Digital",
    description:
      "Scale organic traffic and outrank competitors with Aksh Digital, a top SEO agency in Delhi and leading digital marketing agency in Delhi NCR providing local SEO, enterprise search optimization, and link building.",
  },
  {
    path: "/seo-services/mumbai/",
    label: "SEO in Mumbai",
    group: "City SEO",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "SEO Agency in Mumbai | Best Digital Marketing Agency Mumbai – Aksh Digital",
    description:
      "Scale organic traffic and commercial inbound revenue with Aksh Digital, a premier SEO agency Mumbai and top digital marketing agency in Mumbai. Local SEO, technical audits, Core Web Vitals, and authoritative link building.",
  },
  {
    path: "/seo-services/bangalore/",
    label: "SEO in Bangalore",
    group: "City SEO",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "SEO Agency in Bangalore | Best Digital Marketing Agency Bangalore – Aksh Digital",
    description:
      "Scale organic traffic and high-intent inbound revenue with Aksh Digital, a top SEO agency Bangalore and leading digital marketing agency Bangalore. SaaS SEO, tech enterprise search & Core Web Vitals engineering.",
  },
  {
    path: "/seo-services/pune/",
    label: "SEO in Pune",
    group: "City SEO",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "SEO Agency in Pune | Best Digital Marketing Company Pune – Aksh Digital",
    description:
      "Scale organic traffic and direct revenue with Aksh Digital, a results-driven SEO agency in Pune and trusted digital marketing company in Pune. Local SEO, IT enterprise search, Core Web Vitals, and authoritative link building.",
  },
  {
    path: "/seo-services/indore/",
    label: "SEO in Indore",
    group: "City SEO",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "SEO Agency in Indore | Best Digital Marketing Agency Indore – Aksh Digital",
    description:
      "Scale organic traffic and high-intent leads with Aksh Digital, a premier SEO agency in Indore and leading digital marketing agency Indore. Local SEO, Google Business Profile ranking, technical audits, and high-authority link building.",
  },
  {
    path: "/seo-services/chandigarh/",
    label: "SEO in Chandigarh",
    group: "City SEO",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "SEO Agency in Chandigarh | Best Digital Marketing Company Chandigarh – Aksh Digital",
    description:
      "Scale organic traffic and commercial leads across the Tricity with Aksh Digital, a top SEO agency in Chandigarh and trusted digital marketing company in Chandigarh. Local SEO, GBP ranking & technical search optimization.",
  },
  {
    path: "/seo-services/kolkata/",
    label: "SEO in Kolkata",
    group: "City SEO",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "SEO Agency in Kolkata | Best Digital Marketing Company Kolkata – Aksh Digital",
    description:
      "Scale organic traffic and high-value commercial revenue with Aksh Digital, a top SEO agency Kolkata and trusted digital marketing company in Kolkata. Local SEO, IT enterprise search, Core Web Vitals, and authoritative link building.",
  },
  {
    path: "/seo-services/hyderabad/",
    label: "SEO in Hyderabad",
    group: "City SEO",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "SEO Agency in Hyderabad | Best Digital Marketing Company Hyderabad – Aksh Digital",
    description:
      "Scale organic traffic and high-intent commercial leads with Aksh Digital, a top SEO agency in Hyderabad and trusted digital marketing company in Hyderabad. Local SEO, SaaS enterprise search, Core Web Vitals, and link building.",
  },
  {
    path: "/seo-services/chennai/",
    label: "SEO in Chennai",
    group: "City SEO",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "SEO Agency Chennai | Best Digital Marketing Company in Chennai – Aksh Digital",
    description:
      "Dominate Page 1 search rankings and scale organic revenue with Aksh Digital, a premier SEO company in Chennai and top digital marketing agency in Chennai offering enterprise SEO, local search optimization, and technical audits.",
  },
  {
    path: "/seo-services/lucknow/",
    label: "SEO in Lucknow",
    group: "City SEO",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "SEO Agency in Lucknow | Best Digital Marketing Company Lucknow – Aksh Digital",
    description:
      "Dominate Page 1 search rankings and scale organic revenue with Aksh Digital, a premier SEO agency in Lucknow and trusted digital marketing company in Lucknow. Local SEO, GBP ranking, technical audits, and link building.",
  },
  {
    path: "/seo-services/bhiwadi-alwar/",
    label: "SEO in Bhiwadi & Alwar",
    group: "City SEO",
    priority: 0.8,
    changeFrequency: "monthly",
    title: "SEO Agency in Bhiwadi & Alwar | Best Digital Marketing Company – Aksh Digital",
    description:
      "Capture high-value B2B manufacturing and commercial contracts with Aksh Digital, a top SEO agency in Bhiwadi and trusted digital marketing company in Alwar offering industrial SEO, local 3-Pack ranking, and technical audits.",
  },
];

export function getSitePage(path) {
  return SITE_PAGES.find((page) => page.path === path) || null;
}
