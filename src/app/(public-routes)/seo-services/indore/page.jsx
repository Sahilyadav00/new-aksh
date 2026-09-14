import Link from "next/link";
<<<<<<< HEAD
import { ArrowRight, MapPin, Search, CheckCircle, TrendingUp, Star, Phone, BarChart3, Globe, Users } from "lucide-react";

export const metadata = {
  title: "SEO Services in Indore | Best SEO Company Indore — Aksh Digital",
  description:
    "Aksh Digital offers expert SEO services in Indore. We help Indore businesses rank on Google with local SEO, technical SEO, and content strategies designed for Madhya Pradesh's commercial hub.",
};

const cityData = {
  city: "Indore",
  tagline: "Indore's Most Trusted SEO Agency",
  description:
    "From Vijay Nagar to Scheme 54, we help Indore's fast-growing business community build a powerful online presence. As Madhya Pradesh's commercial capital, Indore's digital landscape is growing rapidly — and we make sure your business leads it.",
  localFacts: [
    "Proven SEO results for 30+ Indore-based businesses",
    "Deep knowledge of Indore's business community and competitive landscape",
    "Local citation building across Indore and MP business directories",
    "GMB optimisation to dominate Indore's growing local search market",
  ],
  nearbyAreas: ["Vijay Nagar", "Scheme 54", "Palasia", "Bhawarkuan", "Rajwada", "MG Road", "AB Road", "Bicholi Mardana"],
  faqs: [
    { q: "Is SEO worth investing in for an Indore business?", a: "Absolutely. Indore's business market is growing rapidly with increasing internet penetration. Businesses that invest in SEO now will gain a significant first-mover advantage in their categories." },
    { q: "Which Indore industries benefit most from SEO?", a: "SEO delivers excellent results for Indore businesses in real estate, education, healthcare, textile, manufacturing, retail, and the rapidly growing startup ecosystem." },
    { q: "Can you help my Indore business rank for statewide keywords?", a: "Yes. Alongside local Indore SEO, we also help businesses rank for Madhya Pradesh and national-level keywords to capture a broader audience." },
    { q: "Do you have experience with Hindi SEO content for Indore?", a: "Yes, we can create bilingual SEO content in both English and Hindi to capture a wider audience in Indore and across MP." },
  ],
};

const services = [
  { icon: Search, title: "Local SEO Indore", desc: "Rank for Indore-specific searches and local 'near me' queries to capture high-intent customers in the city." },
  { icon: Globe, title: "Technical SEO", desc: "Complete technical SEO audits ensuring your Indore website is fast, indexed, and Google-compliant." },
  { icon: BarChart3, title: "Content Marketing", desc: "Indore and MP-focused content targeting local keywords with strong commercial and informational value." },
  { icon: TrendingUp, title: "Link Building", desc: "Quality backlinks from Indore local websites, MP news portals, and national publications." },
  { icon: Users, title: "Google Business Profile", desc: "Full GMB optimisation to appear in Indore's local search pack and attract walk-in customers." },
  { icon: Star, title: "Bilingual SEO", desc: "English and Hindi SEO content to reach Indore's diverse audience across all demographics." },
];

export default function SEOIndorePage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#d25c41]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#f6ac55]/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/seo-strategies" className="hover:text-white transition-colors">SEO Services</Link>
            <span>/</span>
            <span className="text-[#f6ac55]">{cityData.city}</span>
          </nav>
          <div className="flex items-center gap-2 mb-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d25c41]/20">
              <MapPin className="h-5 w-5 text-[#d25c41]" />
            </span>
            <span className="text-sm font-semibold text-[#f6ac55] uppercase tracking-wider">SEO Services in {cityData.city}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-tight tracking-tight mb-6">
            SEO Services in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] to-[#f6ac55]">{cityData.city}</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-3">{cityData.tagline}</p>
          <p className="text-base text-slate-500 max-w-2xl leading-relaxed mb-8">{cityData.description}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-3.5 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300">
              Get Free SEO Audit — {cityData.city} <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link href="/services/seo-strategies" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300">Our SEO Services</Link>
=======
import {
  ArrowRight,
  MapPin,
  Search,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Globe,
  Zap,
  Mail,
  ShieldCheck,
  Check,
  Building2,
  Share2,
  Code2,
  Megaphone,
  ShoppingBag,
  Layers,
  Sparkles,
  Store,
} from "lucide-react";

export const metadata = {
  title:
    "SEO Agency in Indore | Best Digital Marketing Agency Indore – Aksh Digital",
  description:
    "Scale organic traffic and high-intent leads with Aksh Digital, a premier SEO agency in Indore and leading digital marketing agency Indore. Local SEO, Google Business Profile ranking, technical audits, and high-authority link building.",
  alternates: {
    canonical: "https://www.akshdigital.in/seo-services/indore/",
  },
};

const indoreHubs = [
  "Vijay Nagar",
  "New Palasia",
  "Bhawar Kuan",
  "AB Road",
  "Super Corridor",
  "Sapna Sangeeta",
  "Pithampur Industrial Area",
  "Scheme 54",
  "Rajwada",
  "MG Road",
  "Bicholi Mardana",
  "Rau",
];

const coreServices = [
  {
    number: "01",
    badge: "Map 3-Pack Dominance",
    title: "Hyper-Local SEO & Google Business Profile (GBP) Domination",
    icon: MapPin,
    description:
      "Dominate local map searches and capture footfall and calls across Indore's key commercial and retail districts.",
    points: [
      "Dominate the local Google Map 3-Pack for high-intent queries like best digital marketing company in indore and seo services in indore.",
      "Build verified local citations across top Indian directories with 100% consistent NAP (Name, Address, Phone Number) data.",
      "Implement local review generation systems and geo-tagged visual assets across high-density Indore hubs (Vijay Nagar, New Palasia, Bhawar Kuan, AB Road, Super Corridor, and Sapna Sangeeta).",
    ],
  },
  {
    number: "02",
    badge: "Commercial Search Capture",
    title: "Transactional Keyword Research & City-Specific Mapping",
    icon: Search,
    description:
      "Target lucrative commercial search queries tailored for Indore B2B, retail, industrial, and service businesses.",
    points: [
      "Identify high-conversion, commercial search terms tailored for Indore B2B, retail, industrial, and service businesses.",
      "Structure localized landing pages designed to capture regional buyer intent with frictionless conversion paths.",
      "Analyze regional search gaps to dominate high-volume localized terms with targeted content cluster architectures.",
    ],
  },
  {
    number: "03",
    badge: "Engineering & Speed",
    title: "Technical SEO & Core Web Vitals Optimization",
    icon: Zap,
    description:
      "Eliminate crawling errors and optimize frontend performance to comply strictly with Google Search Essentials.",
    points: [
      "Full crawlability audits, indexation fixes, and mobile responsiveness tuning to comply with Google Search Essentials.",
      "Structured data schema implementation (Organization, LocalBusiness, FAQ, Product, and Service JSON-LD schemas) to secure rich search snippets.",
      "Core Web Vitals speed remediation engineered directly by our in-house developers.",
    ],
  },
  {
    number: "04",
    badge: "Editorial PR & Regional Authority",
    title: "Digital PR & High-Authority Backlink Acquisition",
    icon: Globe,
    description:
      "Acquire authoritative editorial links from reputable media platforms and regional business portals.",
    points: [
      "100% white-hat link acquisition from authoritative media publications, regional news outlets, and niche-relevant blogs.",
      "Contextual brand citations and digital PR outreach that safely build and compound domain rating (DR) over time.",
      "Targeted regional media outreach that boosts local trust signals, brand mentions, and organic ranking power.",
    ],
  },
  {
    number: "05",
    badge: "Textiles, FMCG & D2C",
    title: "E-Commerce & Multi-Regional Search Growth",
    icon: ShoppingBag,
    description:
      "Scale Indore's textile manufacturers, FMCG producers, and fast-growing D2C startups across Pan-India.",
    points: [
      "Category and product-level SEO for Indore’s textile manufacturers, food and FMCG brands, and fast-scaling D2C startups.",
      "Multi-region indexing and structured schema integration to drive high-margin organic transactions across India.",
      "Conversion-focused e-commerce SEO architectures designed to maximize organic basket sizes and repeat purchases.",
    ],
  },
];

const integratedServices = [
  {
    title: "High-ROAS Paid Ads",
    badge: "Paid Advertising",
    icon: Megaphone,
    desc: "Complement organic search rankings with high-converting search and social ad funnels managed by our performance marketing agency Indore specialists.",
    href: "/services/performance-marketing/",
    linkText: "Explore Performance Marketing",
  },
  {
    title: "Social Media Dominance",
    badge: "Brand Storytelling",
    icon: Share2,
    desc: "Build brand equity and engagement through our dedicated social media marketing in Indore and social media management agency teams.",
    href: "/services/social-media-marketing/",
    linkText: "Explore Social Media",
  },
  {
    title: "Modern Web Development",
    badge: "Engineering",
    icon: Code2,
    desc: "Deploy fast, conversion-optimized websites built on Next.js and React by our technical engineering unit to guarantee flawless Core Web Vitals.",
    href: "/services/web-development/",
    linkText: "Explore Web Development",
  },
];

const roadmapSteps = [
  {
    step: "01",
    title: "Technical Site & Competitor Gap Audit",
    desc: "We analyze your site architecture, crawl logs, and backlink health while benchmarking the top-ranking competitors in Indore to uncover hidden ranking bottlenecks.",
  },
  {
    step: "02",
    title: "On-Page Architecture & Semantic Content Mapping",
    desc: "We resolve technical crawling errors, implement localized schema, and optimize core web pages for target city keywords and high-density commercial micro-markets.",
  },
  {
    step: "03",
    title: "Citation Building & Authority Outreach",
    desc: "We clean up directory listings and launch local digital PR outreach to acquire high-authority backlinks that reinforce domain power and geographic relevance.",
  },
  {
    step: "04",
    title: "Tracking, Lead Attribution & Conversion Optimization",
    desc: "Continuous monitoring via Google Search Console and GA4, tracking ranking trajectories, phone inquiries, and organic lead form fills with regular iterative sprints.",
  },
];

const whyChooseUs = [
  {
    title: "Strict White-Hat Compliance",
    icon: ShieldCheck,
    desc: "100% compliant with Google Search Essentials to ensure sustainable, penalty-free long-term rankings through every core algorithm update.",
  },
  {
    title: "Live, Real-Time Dashboards",
    icon: BarChart3,
    desc: "24/7 visibility into keyword rankings, organic traffic trends, and lead attribution with transparent, executive-level ROI reporting.",
  },
  {
    title: "Integrated Development & Marketing",
    icon: Building2,
    desc: "Developers, SEO strategists, and copywriters working collaboratively under one roof to resolve complex technical hurdles without vendor friction.",
  },
];

const otherCities = [
  { city: "Jaipur (HQ)", slug: "jaipur" },
  { city: "Delhi NCR", slug: "delhi" },
  { city: "Mumbai", slug: "mumbai" },
  { city: "Bangalore", slug: "bangalore" },
  { city: "Hyderabad", slug: "hyderabad" },
  { city: "Chennai", slug: "chennai" },
  { city: "Pune", slug: "pune" },
  { city: "Chandigarh", slug: "chandigarh" },
  { city: "Kolkata", slug: "kolkata" },
  { city: "Lucknow", slug: "lucknow" },
  { city: "Bhiwadi & Alwar", slug: "bhiwadi-alwar" },
];

export default function SEOIndorePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aksh Digital - SEO Agency in Indore",
    description:
      "Premier SEO services and digital marketing agency in Indore specializing in local SEO, Google Business Profile ranking, technical search audits, and link building.",
    url: "https://www.akshdigital.in/seo-services/indore/",
    email: "connect@akshdigital.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    areaServed: [
      "Indore",
      "Vijay Nagar",
      "Palasia",
      "AB Road",
      "Super Corridor",
      "Pithampur",
      "Madhya Pradesh",
      "India",
    ],
    priceRange: "$$",
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-28 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-[#d25c41]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[480px] w-[480px] rounded-full bg-[#f6ac55]/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-slate-400 mb-8 flex-wrap"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <Link
              href="/services/seo"
              className="hover:text-white transition-colors"
            >
              SEO Services
            </Link>
            <span>/</span>
            <span className="text-[#f6ac55]">Indore</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-[#f6ac55] backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#f6ac55] animate-pulse" />
            High-Intent Organic Visibility • Indore Commercial Hub
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Data-Driven SEO Services in Indore Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] via-[#f6ac55] to-[#f6ac55]">
              Page 1 Domination
            </span>{" "}
            and High-Intent Leads
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Stop losing commercial customers to local competitors. As a premier
            digital marketing agency Indore and results-focused SEO agency in
            Indore, Aksh Digital executes technical site audits, Google Business
            Profile (GBP) ranking strategies, and authoritative link building to
            help your brand capture ready-to-buy customers across Indore,
            Madhya Pradesh, and Pan-India.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm font-bold text-white shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:opacity-95 hover:-translate-y-0.5 transition-all duration-300"
            >
              Claim Your Free Indore SEO Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="#indore-seo-framework"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Our Ranking Framework
            </a>
          </div>

          {/* Market Reach Tag */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-[#d25c41]" />
            <span>Serving Businesses Across Indore, Pithampur & Central India</span>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="bg-[#d25c41] py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[{ num: "30+", label: "Indore Clients Served" }, { num: "78%", label: "First-Page Rankings" }, { num: "3x", label: "Avg. Traffic Growth" }, { num: "4 Months", label: "Avg. Time to Results" }].map(({ num, label }) => (
            <div key={label}><p className="text-3xl sm:text-4xl font-bold text-white">{num}</p><p className="mt-1 text-sm text-white/80 font-medium">{label}</p></div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">Our SEO Services in {cityData.city}</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Complete SEO solutions tailored to {cityData.city}'s growing and diverse business market.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:border-[#d25c41]/30 hover:-translate-y-1 transition-all duration-300">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d25c41]/10 mb-4"><Icon className="h-6 w-6 text-[#d25c41]" strokeWidth={2} /></span>
                <h3 className="text-lg font-bold text-[#14183e] mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#14183e] mb-4">Why {cityData.city} Businesses Choose Aksh Digital</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">{cityData.city} is MP's commercial powerhouse. As digital adoption grows rapidly, businesses that establish strong online visibility now will own their market for years to come.</p>
            <ul className="space-y-4">
              {cityData.localFacts.map((fact) => (
                <li key={fact} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#d25c41] mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-slate-700 text-[15px]">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#14183e] mb-4">Areas We Serve in {cityData.city}</h3>
            <div className="flex flex-wrap gap-2">
              {cityData.nearbyAreas.map((area) => (
                <span key={area} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                  <MapPin className="h-3.5 w-3.5 text-[#d25c41]" />{area}
                </span>
              ))}
=======
      {/* Overview: Why Indore Businesses Need Localized SEO Precision */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
                Overview: Localized SEO Precision
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-6">
                Turning Central India&apos;s Commercial Hub into a Predictable Inbound Growth Engine
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                As the commercial and educational capital of Madhya Pradesh,
                Indore is experiencing rapid digital growth across retail,
                healthcare, real estate, manufacturing, and tech startups. From
                Vijay Nagar and Palasia to Super Corridor and Pithampur
                industrial zones, standard search tactics fail against
                aggressive regional competitors.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
                As an integrated software and digital marketing company, Aksh
                Digital approaches search ranking with engineering rigor. By
                pairing modern front-end frameworks (Next.js, React) with
                semantic topical authority mapping, structured data
                architecture, and white-hat digital PR, our search engine
                optimization marketing agency secures lasting Page 1 positions,
                helps you capture high-intent commercial buyers, and lowers your
                long-term customer acquisition costs (CAC).
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0f1535] px-6 py-3 text-sm font-semibold text-white hover:bg-[#d25c41] transition-colors duration-300"
                >
                  Consult Our Indore SEO Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-[#d25c41] hover:text-[#d25c41] transition-colors duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-[#fafaf9] to-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#0f1535] mb-2">
                  Prime Indore Commercial Corridors
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  We deploy localized entity architectures tailored to Indore&apos;s
                  premier commercial districts, tech corridors, and industrial
                  zones.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {indoreHubs.map((hub) => (
                    <span
                      key={hub}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm"
                    >
                      <MapPin className="h-3 w-3 text-[#d25c41]" />
                      {hub}
                    </span>
                  ))}
                </div>
                <div className="pt-6 border-t border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      Indore Map 3-Pack Reach
                    </span>
                    <span className="font-bold text-[#d25c41]">Top 3 Authority</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      Citation Consistency
                    </span>
                    <span className="font-bold text-emerald-600">100% NAP Match</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      Full-Stack Architecture
                    </span>
                    <span className="font-bold text-[#0f1535]">Core Web Vitals Pass</span>
                  </div>
                </div>
              </div>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-[#14183e]">FAQs — SEO in {cityData.city}</h2></div>
          <div className="space-y-4">
            {cityData.faqs.map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-base font-bold text-[#14183e] mb-2">{q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
              </div>
            ))}
=======
      {/* Core SEO Services in Indore */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              Our Core SEO Services in Indore
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Engineered for Page 1 Domination and High-Intent Leads
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every vertical in Indore requires high-precision execution. Here
              is our multi-tiered SEO arsenal designed to secure commanding
              organic market share.
            </p>
          </div>

          <div className="space-y-8">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                    <div className="flex items-start gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0f1535] text-white">
                        <Icon className="h-7 w-7 text-[#f6ac55]" />
                      </span>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#d25c41]">
                            Vertical {service.number}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-slate-300" />
                          <span className="inline-block rounded-full bg-slate-100 px-3 py-0.5 text-xs font-semibold text-slate-600">
                            {service.badge}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0f1535]">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                    {service.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-2xl bg-slate-50/80 p-4 border border-slate-100"
                      >
                        <Check className="h-5 w-5 text-[#d25c41] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="py-12 px-4 sm:px-6 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">SEO Services in Other Cities</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[{ city: "Jaipur", slug: "jaipur" }, { city: "Delhi", slug: "delhi" }, { city: "Mumbai", slug: "mumbai" }, { city: "Pune", slug: "pune" }, { city: "Bangalore", slug: "bangalore" }].map(({ city, slug }) => (
              <Link key={slug} href={`/seo-services/${slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-[#d25c41] hover:text-[#d25c41] transition-all duration-200">
                SEO in {city} <ArrowRight className="h-3.5 w-3.5" />
=======
      {/* Integrated Growth: Full-Suite Synergies for Indore Brands */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              Integrated Growth Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Integrated Growth: Full-Suite Synergies for Indore Brands
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Accelerate pipeline growth by uniting high-intent organic rankings
              with high-ROAS performance media, social brand resonance, and
              cutting-edge web engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integratedServices.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 flex flex-col justify-between hover:border-[#d25c41]/40 hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f1535] text-white group-hover:scale-105 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-[#f6ac55]" />
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0f1535] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#d25c41] hover:text-[#0f1535] transition-colors"
                  >
                    {item.linkText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Indore SEO Roadmap */}
      <section
        id="indore-seo-framework"
        className="py-20 sm:py-28 px-4 sm:px-6 bg-[#0f1535] text-white relative overflow-hidden"
      >
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#d25c41]/15 blur-3xl" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#f6ac55]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold text-[#f6ac55] uppercase tracking-wider mb-4">
              Our 4-Step Indore SEO Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Disciplined Roadmap to Page 1 Supremacy
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We eliminate guesswork with a battle-tested 4-step framework engineered
              to systematically elevate your Indore business to Page 1.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between backdrop-blur-sm hover:border-[#f6ac55]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] to-[#f6ac55] mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] transition-all duration-300"
            >
              Start Step 1: Claim Your Indore Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Aksh Digital as Your Indore SEO Partner? */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              The Aksh Digital Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Why Choose Aksh Digital as Your Indore SEO Partner?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We combine software engineering speed, regional commercial insight,
              and strict white-hat ethics to deliver compounding commercial
              returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d25c41]/10 mb-6">
                    <Icon className="h-6 w-6 text-[#d25c41]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#0f1535] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Metropolitan Hubs Interlinking */}
      <section className="py-12 px-4 sm:px-6 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">
            SEO Services Across Key Indian Metropolitan Hubs
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {otherCities.map(({ city, slug }) => (
              <Link
                key={slug}
                href={`/seo-services/${slug}/`}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:border-[#d25c41] hover:text-[#d25c41] transition-all duration-200"
              >
                SEO in {city}
                <ArrowRight className="h-3 w-3" />
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
              </Link>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="relative overflow-hidden bg-gradient-to-br from-[#d25c41] to-[#b84d35] py-16 px-4 sm:px-6 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Rank #1 in {cityData.city}?</h2>
          <p className="text-white/80 mb-8">Get a free SEO audit for your {cityData.city} business and start building your digital dominance today.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#d25c41] hover:bg-slate-50 transition-colors shadow-lg">
              Get Free SEO Audit <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors">
              <Phone className="h-4 w-4" /> Call Us Now
            </a>
          </div>
=======
      {/* Ready to Dominate Page 1 Rankings in Indore? (Bottom CTA) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1535] via-[#1a224c] to-[#0f1535] py-20 sm:py-24 px-4 sm:px-6 text-center text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#d25c41]/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#f6ac55] uppercase tracking-wider mb-6">
            Ready to Dominate Page 1 Rankings in Indore?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Claim Your Free Indore Technical & SEO Audit Today
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let our search specialists analyze your website&apos;s ranking
            bottlenecks and outline a custom 90-day search roadmap for the Indore
            market.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request Your Free Indore SEO Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="mailto:connect@akshdigital.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              <Mail className="h-4 w-4 text-[#f6ac55]" />
              connect@akshdigital.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-[#d25c41]" />
            <span>Indore, Madhya Pradesh • Pan-India</span>
          </div>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
        </div>
      </section>
    </div>
  );
}
