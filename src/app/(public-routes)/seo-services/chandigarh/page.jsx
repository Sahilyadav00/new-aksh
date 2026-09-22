import Link from "next/link";
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
  Compass,
} from "lucide-react";

export const metadata = {
  title:
    "SEO Agency in Chandigarh | Best Digital Marketing Company Chandigarh – Aksh Digital",
  description:
    "Scale organic traffic and commercial leads across the Tricity with Aksh Digital, a top SEO agency in Chandigarh and trusted digital marketing company in Chandigarh. Local SEO, GBP ranking & technical search optimization.",
  alternates: {
    canonical: "https://www.akshdigital.in/seo-services/chandigarh/",
  },
};

const tricityHubs = [
  "Sector 17 (City Centre)",
  "Sector 35",
  "Sector 34 (Education Hub)",
  "Rajiv Gandhi IT Park",
  "Industrial Area Phase 1 & 2",
  "Mohali Phase 8B",
  "Mohali Sector 67 & 82",
  "Panchkula Sector 5",
  "Zirakpur Commercial Belt",
  "Sector 22",
  "Manimajra",
  "Aerocity Mohali",
];

const coreServices = [
  {
    number: "01",
    badge: "Tricity Map 3-Pack Dominance",
    title: "Hyper-Local SEO & Google Business Profile (GBP) Domination",
    icon: MapPin,
    description:
      "Dominate local map searches and capture high-intent consumer footfall across Chandigarh, Mohali, and Panchkula.",
    points: [
      "Dominate the local Google Map 3-Pack for high-intent queries like best digital marketing company in chandigarh and seo services in chandigarh.",
      "Build verified local citations across top Indian directories with 100% consistent NAP (Name, Address, Phone Number) data.",
      "Local review generation systems and geo-tagged visual assets targeting key hubs across Sector 17, Sector 35, Sector 22, Industrial Area Phase 1 & 2, Mohali Phase 8B, and Panchkula.",
    ],
  },
  {
    number: "02",
    badge: "High-Intent Commercial Mapping",
    title: "Transactional Keyword Research & Tricity-Specific Mapping",
    icon: Search,
    description:
      "Capture high-conversion search queries for consultancies, tech companies, healthcare clinics, and retail stores.",
    points: [
      "Target commercial search terms for immigration consultancies, IT & SaaS companies, healthcare clinics, hospitality, and educational institutions.",
      "Develop localized landing pages optimized to capture user intent across Chandigarh, Mohali, Zirakpur, and Panchkula.",
      "Structure high-converting conversion funnels engineered to transform searchers into qualified phone calls and direct consults.",
    ],
  },
  {
    number: "03",
    badge: "Speed & Schema Engineering",
    title: "Technical SEO & Core Web Vitals Optimization",
    icon: Zap,
    description:
      "Eliminate crawling bottlenecks and optimize website infrastructure to comply with Google Search Essentials.",
    points: [
      "Full crawlability audits, indexation fixes, and mobile responsiveness tuning to comply with Google Search Essentials.",
      "Structured data schema implementation (Organization, LocalBusiness, FAQ, Product, and Service JSON-LD schemas) to secure rich snippet visibility.",
      "Core Web Vitals speed remediation engineered directly by our in-house full-stack developers.",
    ],
  },
  {
    number: "04",
    badge: "Editorial PR & Trust Signals",
    title: "Digital PR & High-Authority Backlink Acquisition",
    icon: Globe,
    description:
      "Build enduring domain rating (DR) through ethical, high-quality editorial placements in reputable industry media.",
    points: [
      "100% white-hat link acquisition from authoritative media publications, regional news outlets, and niche-relevant blogs.",
      "Contextual brand citations and digital PR outreach that safely build and compound domain rating (DR) over time.",
      "Regional media outreach designed to reinforce local entity trust, brand mentions, and geographic search relevance.",
    ],
  },
  {
    number: "05",
    badge: "Export, D2C & Global Reach",
    title: "E-Commerce & Global Growth Strategy",
    icon: ShoppingBag,
    description:
      "Scale Tricity manufacturers, exporters, and direct-to-consumer brands across domestic and international markets.",
    points: [
      "Category and product-level SEO for Tricity manufacturers, exporters, and fast-scaling D2C fashion/lifestyle brands.",
      "Multi-region indexing and structured schema integration to capture domestic buyers as well as international markets (USA, UK, Canada).",
      "International hreflang targeting and structured data optimization for cross-border e-commerce and consultancy portals.",
    ],
  },
];

const integratedServices = [
  {
    title: "High-ROAS Paid Ads",
    badge: "Paid Media",
    icon: Megaphone,
    desc: "Complement organic search rankings with high-converting search and social ad funnels managed by our performance marketing agency in chandigarh specialists.",
    href: "/services/performance-marketing/",
    linkText: "Explore Performance Marketing",
  },
  {
    title: "Social Media Dominance",
    badge: "Brand Storytelling",
    icon: Share2,
    desc: "Build brand equity and engagement through our dedicated social media marketing agency in chandigarh and social media company in chandigarh teams.",
    href: "/services/social-media-marketing/",
    linkText: "Explore Social Media",
  },
  {
    title: "Modern Web Development",
    badge: "Engineering",
    icon: Code2,
    desc: "Deploy fast, conversion-optimized websites built on Next.js and React by our technical engineering unit to guarantee exceptional Core Web Vitals.",
    href: "/services/web-development/",
    linkText: "Explore Web Development",
  },
];

const roadmapSteps = [
  {
    step: "01",
    title: "Technical Site & Competitor Gap Audit",
    desc: "We analyze your site architecture, crawl logs, and backlink health while benchmarking top-ranking competitors in the Tricity to uncover hidden ranking bottlenecks.",
  },
  {
    step: "02",
    title: "On-Page Architecture & Semantic Content Mapping",
    desc: "We resolve technical crawling errors, implement localized schema, and optimize core web pages for target city keywords and Tricity micro-markets.",
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
  { city: "Indore", slug: "indore" },
  { city: "Kolkata", slug: "kolkata" },
  { city: "Lucknow", slug: "lucknow" },
  { city: "Bhiwadi & Alwar", slug: "bhiwadi-alwar" },
];

export default function SEOChandigarhPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aksh Digital - SEO Agency in Chandigarh",
    description:
      "Premier SEO services and digital marketing agency in Chandigarh specializing in Tricity local SEO, GBP ranking, technical audits, and link building.",
    url: "https://www.akshdigital.in/seo-services/chandigarh/",
    email: "akshdigital9@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chandigarh",
      addressRegion: "Chandigarh",
      addressCountry: "IN",
    },
    areaServed: [
      "Chandigarh",
      "Mohali",
      "Panchkula",
      "Zirakpur",
      "Punjab",
      "Haryana",
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
            <span className="text-[#f6ac55]">Chandigarh</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-[#f6ac55] backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#f6ac55] animate-pulse" />
            High-Intent Search Dominance • Tricity Market (Chandigarh, Mohali,
            Panchkula)
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Premier SEO Services in Chandigarh Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] via-[#f6ac55] to-[#f6ac55]">
              Page 1 Domination
            </span>{" "}
            and High-Intent Leads
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Stop losing commercial customers to local competitors across the
            Tricity. As a leading SEO agency in Chandigarh and trusted digital
            marketing company in Chandigarh, Aksh Digital executes technical
            site audits, Google Business Profile (GBP) ranking strategies, and
            authoritative link building to help your brand capture ready-to-buy
            customers across Chandigarh, Mohali, Panchkula, and Pan-India.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm font-bold text-white shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:opacity-95 hover:-translate-y-0.5 transition-all duration-300"
            >
              Claim Your Free Chandigarh SEO Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="#chandigarh-seo-framework"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Local Ranking Framework
            </a>
          </div>

          {/* Market Reach Tag */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-[#d25c41]" />
            <span>
              Serving High-Growth Enterprises Across Chandigarh, Mohali,
              Panchkula & North India
            </span>
          </div>
        </div>
      </section>

      {/* Overview: Why Tricity Businesses Need Localized SEO Precision */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
                Overview: Localized SEO Precision
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-6">
                Turning Northern India&apos;s Commercial Hub into a Predictable
                Inbound Growth Engine
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                The Chandigarh Tricity region is a booming economic powerhouse,
                driving significant growth across IT startups in Rajiv Gandhi
                Chandigarh Technology Park (IT Park) and Mohali (Sector 67/82),
                overseas immigration and education consultancies in Sector 17
                and Sector 34, luxury healthcare, real estate, and retail. To
                win high-intent commercial searches in this market, generic
                optimization is not enough.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
                As a full-stack software and digital marketing company, Aksh
                Digital approaches search ranking with engineering precision. By
                pairing modern front-end speed (Next.js, React) with semantic
                topical authority mapping, structured data architecture, and
                white-hat digital PR, our search engine optimization marketing
                agency secures lasting Page 1 positions, captures
                high-converting queries, and lowers your long-term customer
                acquisition costs (CAC).
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0f1535] px-6 py-3 text-sm font-semibold text-white hover:bg-[#d25c41] transition-colors duration-300"
                >
                  Consult Our Chandigarh SEO Team
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
                  Prime Tricity Commercial Zones
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  We engineer localized entity architectures tailored to
                  Chandigarh, Mohali, and Panchkula&apos;s primary commercial
                  and tech epicenters.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {tricityHubs.map((hub) => (
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
                      Tricity Map 3-Pack Target
                    </span>
                    <span className="font-bold text-[#d25c41]">
                      Top 3 Authority
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      NAP Consistency
                    </span>
                    <span className="font-bold text-emerald-600">
                      100% Verified
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      Full-Stack Infrastructure
                    </span>
                    <span className="font-bold text-[#0f1535]">
                      Core Web Vitals Pass
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core SEO Services in Chandigarh & Tricity */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              Our Core SEO Services in Chandigarh & Tricity
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Engineered for Page 1 Domination and High-Intent Leads
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every vertical in the Tricity requires high-precision execution.
              Here is our multi-tiered SEO arsenal designed to secure commanding
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
          </div>
        </div>
      </section>

      {/* Integrated Growth: Full-Suite Synergies for Chandigarh Brands */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              Integrated Growth Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Integrated Growth: Full-Suite Synergies for Chandigarh Brands
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Accelerate inbound lead volume by uniting high-intent organic
              rankings with high-ROAS performance media, social brand authority,
              and cutting-edge web engineering.
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

      {/* 4-Step Chandigarh SEO Roadmap */}
      <section
        id="chandigarh-seo-framework"
        className="py-20 sm:py-28 px-4 sm:px-6 bg-[#0f1535] text-white relative overflow-hidden"
      >
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#d25c41]/15 blur-3xl" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#f6ac55]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold text-[#f6ac55] uppercase tracking-wider mb-4">
              Our 4-Step Chandigarh SEO Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Disciplined Roadmap to Page 1 Supremacy
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We eliminate guesswork with a battle-tested 4-step framework
              engineered to systematically elevate your Tricity business to Page
              1.
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
              Start Step 1: Claim Your Chandigarh Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Aksh Digital as Your Chandigarh SEO Partner? */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              The Aksh Digital Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Why Choose Aksh Digital as Your Chandigarh SEO Partner?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We combine software engineering speed, regional market insight,
              and strict white-hat ethics to deliver compounding commercial
              returns across the Tricity.
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Dominate Page 1 Rankings in Chandigarh? (Bottom CTA) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1535] via-[#1a224c] to-[#0f1535] py-20 sm:py-24 px-4 sm:px-6 text-center text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#d25c41]/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#f6ac55] uppercase tracking-wider mb-6">
            Ready to Dominate Page 1 Rankings in Chandigarh?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Claim Your Free Chandigarh Technical & SEO Audit Today
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let our search specialists analyze your website&apos;s ranking
            bottlenecks and outline a custom 90-day search roadmap for the
            Chandigarh and Tricity market.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request Your Free Chandigarh SEO Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="mailto:akshdigital9@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              <Mail className="h-4 w-4 text-[#f6ac55]" />
              akshdigital9@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-[#d25c41]" />
            <span>Chandigarh Tricity • Pan-India</span>
          </div>
        </div>
      </section>
    </div>
  );
}
