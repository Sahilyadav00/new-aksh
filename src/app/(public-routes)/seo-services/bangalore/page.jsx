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
  Cpu,
} from "lucide-react";

export const metadata = {
  title:
    "SEO Agency in Bangalore | Best Digital Marketing Agency Bangalore – Aksh Digital",
  description:
    "Scale organic traffic and high-intent inbound revenue with Aksh Digital, a top SEO agency Bangalore and leading digital marketing agency Bangalore. SaaS SEO, tech enterprise search & Core Web Vitals engineering.",
  alternates: {
    canonical: "https://www.akshdigital.in/seo-services/bangalore/",
  },
};

const bangaloreHubs = [
  "Koramangala",
  "Indiranagar",
  "HSR Layout",
  "Whitefield",
  "Electronic City",
  "MG Road",
  "Bellandur",
  "Marathahalli",
  "JP Nagar",
  "Manyata Tech Park",
  "Domlur",
  "Hebbal",
];

const coreServices = [
  {
    number: "01",
    badge: "SaaS & Tech Search Capture",
    title: "SaaS, Tech & Enterprise B2B SEO",
    icon: Cpu,
    description:
      "Target high-intent transactional search terms like 'best digital marketing agency in bangalore', 'seo services in bangalore', and B2B SaaS software queries.",
    points: [
      "Target high-intent transactional search terms like best digital marketing agency in bangalore, seo services in bangalore, and B2B SaaS software queries.",
      "Pillar-and-cluster content frameworks designed to build topical authority across complex tech verticals.",
      "Comparison, alternative, and product-led SEO strategies to capture ready-to-buy software buyers.",
    ],
  },
  {
    number: "02",
    badge: "Map 3-Pack Dominance",
    title: "Hyper-Local SEO & Google Business Profile (GBP) Optimization",
    icon: MapPin,
    description:
      "Dominate local map searches and capture footfall across Bangalore's major startup clusters and commercial corridors.",
    points: [
      "As an experienced local search marketing agency, we optimize your Google Business Profile to capture the local Map 3-Pack across key commercial hubs (Koramangala, Indiranagar, HSR Layout, Whitefield, MG Road, and Electronic City).",
      "100% NAP (Name, Address, Phone Number) consistency and verified local citations.",
      "Geo-targeted landing page architectures designed for multi-location tech clinics, co-working spaces, and premium retail stores.",
    ],
  },
  {
    number: "03",
    badge: "Engineering & Speed",
    title: "Deep Technical SEO & Core Web Vitals Engineering",
    icon: Zap,
    description:
      "Eliminate client-side rendering bottlenecks and ensure flawless indexing across complex React/Next.js architectures.",
    points: [
      "JavaScript crawling and rendering fixes, server-side rendering (SSR) audits, and mobile responsiveness tuning.",
      "Comprehensive structured data schema (SoftwareApplication, Organization, LocalBusiness, FAQ, Product, and Service JSON-LD) implementation.",
      "Core Web Vitals remediation executed directly by in-house full-stack engineers.",
    ],
  },
  {
    number: "04",
    badge: "Authority PR & Topical Power",
    title: "Digital PR & High-Authority Backlink Acquisition",
    icon: Globe,
    description:
      "Build untouchable domain authority through editorial backlinks and coverage in high-DR tech publications.",
    points: [
      "100% white-hat link acquisition from authoritative tech blogs, reputable industry media, and high-DR publications.",
      "Brand mentions and editorial outreach designed to compound domain authority safely over time.",
      "Data-led digital PR campaigns and research reports that earn natural editorial citations from leading tech reporters.",
    ],
  },
  {
    number: "05",
    badge: "D2C & Retail Scaling",
    title: "E-Commerce & D2C Growth SEO",
    icon: ShoppingBag,
    description:
      "Scale Bangalore's direct-to-consumer disruptors and e-commerce stores across national search engine result pages.",
    points: [
      "Product and category optimization for Bangalore’s fast-scaling direct-to-consumer (D2C) brands.",
      "Faceted navigation management, crawl budget optimization, and conversion-focused product schema.",
      "Transactional funnel optimization designed to lower customer acquisition costs and increase organic average order value (AOV).",
    ],
  },
];

const integratedServices = [
  {
    title: "High-ROAS Paid Ads",
    badge: "Performance Media",
    icon: Megaphone,
    desc: "Complement organic search rankings with high-converting campaigns managed by our performance marketing agency in bangalore team to scale inbound demand.",
    href: "/services/performance-marketing/",
    linkText: "Explore Performance Marketing",
  },
  {
    title: "Social Media Authority",
    badge: "Community Growth",
    icon: Share2,
    desc: "Scale brand equity with creative campaigns from our dedicated social media marketing company bangalore specialists across LinkedIn, Instagram, and Twitter/X.",
    href: "/services/social-media-marketing/",
    linkText: "Explore Social Media",
  },
  {
    title: "Full-Stack Web Development",
    badge: "Engineering",
    icon: Code2,
    desc: "Deploy fast, scalable web platforms built on Next.js and React by our technical engineering unit to maximize conversion and search indexability.",
    href: "/services/web-development/",
    linkText: "Explore Web Development",
  },
];

const roadmapSteps = [
  {
    step: "01",
    title: "Technical & Competitor Gap Audit",
    desc: "Dissecting current site architecture, crawl logs, backlink profiles, and competitor positioning in Bangalore to uncover untapped organic traffic opportunities.",
  },
  {
    step: "02",
    title: "On-Page Architecture & Semantic Structuring",
    desc: "Resolving indexing bottlenecks, optimizing technical metadata, and structuring content clusters engineered to establish definitive topical authority.",
  },
  {
    step: "03",
    title: "Authority Building & Digital PR Outreach",
    desc: "Executing targeted white-hat backlink campaigns and optimizing local directory citations across high-authority tech media and verified Indian platforms.",
  },
  {
    step: "04",
    title: "Real-Time Tracking & Conversion Optimization",
    desc: "Continuous monitoring via Google Search Console and GA4 to track keyword trajectory and organic conversions with iterative, data-backed sprints.",
  },
];

const whyChooseUs = [
  {
    title: "Zero Black-Hat Shortcuts",
    icon: ShieldCheck,
    desc: "Strict adherence to Google Search Essentials for penalty-free, compounding organic growth that survives core algorithm shifts.",
  },
  {
    title: "Real-Time Dashboards",
    icon: BarChart3,
    desc: "24/7 visibility into organic traffic trends, keyword trajectories, and qualified inbound leads with transparent, executive-level reporting.",
  },
  {
    title: "Unified Development & Marketing",
    icon: Building2,
    desc: "Developers, SEO strategists, and performance marketers working under one roof to execute technical fixes without bureaucratic delays.",
  },
];

const otherCities = [
  { city: "Jaipur (HQ)", slug: "jaipur" },
  { city: "Delhi NCR", slug: "delhi" },
  { city: "Mumbai", slug: "mumbai" },
  { city: "Hyderabad", slug: "hyderabad" },
  { city: "Chennai", slug: "chennai" },
  { city: "Pune", slug: "pune" },
  { city: "Indore", slug: "indore" },
  { city: "Chandigarh", slug: "chandigarh" },
  { city: "Kolkata", slug: "kolkata" },
  { city: "Lucknow", slug: "lucknow" },
  { city: "Bhiwadi & Alwar", slug: "bhiwadi-alwar" },
];

export default function SEOBangalorePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aksh Digital - SEO Agency in Bangalore",
    description:
      "Premier SEO services and digital marketing agency in Bangalore specializing in SaaS SEO, enterprise search optimization, Core Web Vitals, and authoritative link building.",
    url: "https://www.akshdigital.in/seo-services/bangalore/",
    email: "connect@akshdigital.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: [
      "Bangalore",
      "Bengaluru",
      "Koramangala",
      "Indiranagar",
      "HSR Layout",
      "Whitefield",
      "Electronic City",
      "Karnataka",
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
            <span className="text-[#f6ac55]">Bangalore</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-[#f6ac55] backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#f6ac55] animate-pulse" />
            Enterprise SEO • Tech & Startup Search Dominance • Bangalore Hub
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            High-Growth SEO Services in Bangalore Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] via-[#f6ac55] to-[#f6ac55]">
              High-Intent Inbound Revenue
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            In India’s Silicon Valley, standing out takes more than standard
            optimization. Partner with a leading SEO agency Bangalore and
            trusted digital marketing agency Bangalore. Aksh Digital combines
            modern full-stack web engineering with advanced semantic search and
            technical SEO to help tech startups, SaaS companies, and enterprise
            brands dominate Page 1.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm font-bold text-white shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:opacity-95 hover:-translate-y-0.5 transition-all duration-300"
            >
              Claim Your Free Bangalore SEO Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="#bangalore-seo-framework"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Tech SEO Framework
            </a>
          </div>

          {/* Market Reach Tag */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-[#d25c41]" />
            <span>Serving SaaS Leaders, Startups & Global Enterprises Across Bengaluru</span>
          </div>
        </div>
      </section>

      {/* Overview: Why Bangalore Tech & Enterprise Brands Need Technical SEO Precision */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
                Overview: Technical Search Precision
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-6">
                Dominating Search Queries in India’s Innovation Capital
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                Bangalore is home to the most competitive tech startups, SaaS
                platforms, and enterprise hubs in Asia. From Koramangala and
                Indiranagar to Whitefield, HSR Layout, and Electronic City,
                reaching decision-makers requires capturing high-intent,
                bottom-of-the-funnel commercial search terms.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
                As a full-service software and digital marketing company, Aksh
                Digital approaches search ranking with engineering rigor. By
                integrating modern web frameworks (Next.js, React, Node.js)
                with semantic topical authority mapping and authoritative
                white-hat digital PR, our search engine optimization marketing
                agency builds organic search assets that drive qualified leads
                and reduce your customer acquisition costs (CAC).
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0f1535] px-6 py-3 text-sm font-semibold text-white hover:bg-[#d25c41] transition-colors duration-300"
                >
                  Consult Our Bangalore SEO Engineers
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
                  Key Tech & Startup Corridors
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  We deploy localized entity architecture tailored to Bangalore&apos;s
                  tech hubs, enterprise zones, and startup clusters.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {bangaloreHubs.map((hub) => (
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
                      Bangalore Map 3-Pack Authority
                    </span>
                    <span className="font-bold text-[#d25c41]">Top 3 Target</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      SaaS Intent Keyword Capture
                    </span>
                    <span className="font-bold text-emerald-600">High-Intent B2B</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      Next.js & React Optimization
                    </span>
                    <span className="font-bold text-[#0f1535]">Core Web Vitals Pass</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core SEO Services in Bangalore */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              Our Core SEO Services in Bangalore
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Engineered for High-Intent Inbound Revenue
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every vertical in Bengaluru demands high-precision execution. Here
              is our software-driven SEO stack designed to capture ready-to-buy
              commercial demand.
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

      {/* Integrated Growth: Full-Suite Synergies for Bangalore Brands */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              Integrated Growth Synergies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Integrated Growth: Full-Suite Synergies for Bangalore Brands
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Pair organic search positioning with multi-channel performance ads,
              social media authority, and modern software engineering to lower
              CAC and accelerate enterprise scaling.
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

      {/* 4-Step Bangalore SEO Roadmap */}
      <section
        id="bangalore-seo-framework"
        className="py-20 sm:py-28 px-4 sm:px-6 bg-[#0f1535] text-white relative overflow-hidden"
      >
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#d25c41]/15 blur-3xl" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#f6ac55]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold text-[#f6ac55] uppercase tracking-wider mb-4">
              Our 4-Step Bangalore SEO Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              A Repeatable, High-Impact Search Engine
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We eliminate guesswork with a disciplined 4-phase framework engineered
              to capture market share from entrenched tech and SaaS competitors.
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
              Start Step 1: Claim Your Bangalore Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Ambitious Brands Partner with Aksh Digital in Bangalore */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              The Aksh Digital Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Why Ambitious Brands Partner with Aksh Digital in Bangalore
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We bring engineering rigor, technical depth, and enterprise SaaS
              expertise to digital marketing in India’s innovation capital.
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

      {/* Ready to Scale Your Search Rankings in Bangalore? (Bottom CTA) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1535] via-[#1a224c] to-[#0f1535] py-20 sm:py-24 px-4 sm:px-6 text-center text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#d25c41]/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#f6ac55] uppercase tracking-wider mb-6">
            Ready to Scale Your Search Rankings in Bangalore?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Claim Your Free Bangalore SEO Audit Today
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let our search engineers analyze your website’s indexing errors,
            content gaps, and ranking bottlenecks to build a custom growth
            roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request Your Free Bangalore SEO Audit
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
            <span>Bengaluru, Karnataka • Pan-India</span>
          </div>
        </div>
      </section>
    </div>
  );
}
