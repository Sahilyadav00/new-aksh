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
} from "lucide-react";

export const metadata = {
  title:
    "SEO Agency in Delhi | Best Digital Marketing Company Delhi NCR – Aksh Digital",
  description:
    "Scale organic traffic and outrank competitors with Aksh Digital, a top SEO agency in Delhi and leading digital marketing agency in Delhi NCR providing local SEO, enterprise search optimization, and link building.",
  alternates: {
    canonical: "https://www.akshdigital.in/seo-services/delhi/",
  },
};

const ncrHubs = [
  "Connaught Place",
  "Cyber City (Gurgaon)",
  "South Delhi",
  "Nehru Place",
  "Noida Sector 62",
  "Gurgaon Sector 29",
  "Okhla Industrial Area",
  "Dwarka",
  "Saket",
  "Lajpat Nagar",
  "Netaji Subhash Place",
  "Aerocity",
];

const coreServices = [
  {
    number: "01",
    badge: "Commercial Search Capture",
    title: "Enterprise & High-Intent Commercial SEO",
    icon: Search,
    description:
      "Target high-volume, transactional keywords such as 'best digital marketing company in delhi ncr', 'seo services in delhi', and competitive industry B2B/B2C terms.",
    points: [
      "Target high-volume, transactional keywords such as best digital marketing company in delhi ncr, seo services in delhi, and competitive industry B2B/B2C terms.",
      "Structural site hierarchy optimization, faceted crawl remediation, and complete content cluster execution.",
      "In-depth competitor keyword gap analysis and intent-driven search architecture designed for conversion.",
    ],
  },
  {
    number: "02",
    badge: "Google 3-Pack Dominance",
    title: "Hyper-Local SEO & Google Business Profile (GBP) Domination",
    icon: MapPin,
    description:
      "Capture immediate regional demand across Delhi, Gurgaon, Noida, and the wider NCR corridor.",
    points: [
      "As an experienced local search marketing agency, we optimize your Google Business Profile to capture the local 3-Pack across high-density NCR hubs (South Delhi, Connaught Place, Nehru Place, Gurgaon Sector 29/Cyber City, and Noida Sector 62).",
      "100% NAP (Name, Address, Phone) citation consistency and localized review workflows that build strong regional trust.",
      "Localized landing page deployment targeting specific business sectors, industrial zones, and micro-markets.",
    ],
  },
  {
    number: "03",
    badge: "Engineering & Speed",
    title: "Technical SEO & Core Web Vitals Engineering",
    icon: Zap,
    description:
      "Eliminate indexing bottlenecks and optimize server performance for seamless crawling by Googlebot.",
    points: [
      "Full crawlability audits, JavaScript rendering optimization, server-side rendering (SSR), and mobile responsiveness checks.",
      "Structured data schema implementation (Organization, LocalBusiness, FAQ, Product, and Service Schema) for enhanced rich search snippets.",
      "Core Web Vitals speed remediation executed directly by our in-house developers.",
    ],
  },
  {
    number: "04",
    badge: "High-Authority PR & Trust",
    title: "Digital PR & High-Authority Backlink Acquisition",
    icon: Globe,
    description:
      "Build untouchable domain authority through strictly white-hat, contextual editorial link outreach.",
    points: [
      "Strict white-hat link acquisition from authoritative media publications, national news sites, and niche-relevant domains.",
      "Contextual brand citations and digital PR outreach that safely build and compound domain rating (DR) over time.",
      "Data-backed outreach campaigns that generate organic media pickups and regional industry recognition.",
    ],
  },
  {
    number: "05",
    badge: "National Scaling",
    title: "E-Commerce & Multi-Regional Search Growth",
    icon: ShoppingBag,
    description:
      "Scale Delhi NCR retail chains, D2C disruptors, and fashion exporters across Pan-India and global search engines.",
    points: [
      "Product and category page optimization for Delhi NCR D2C brands, fashion manufacturers, and retail chains.",
      "Multi-region indexing and structured schema integration to drive high-margin organic transactions across India.",
      "Faceted navigation optimization, inventory schema synchronization, and transactional funnel refinement.",
    ],
  },
];

const integratedServices = [
  {
    title: "High-ROAS Paid Ads",
    badge: "Media Buying",
    icon: Megaphone,
    desc: "Complement organic rankings with targeted PPC campaigns managed by our performance marketing agency Delhi team to capture immediate high-intent buyers.",
    href: "/services/performance-marketing/",
    linkText: "Explore Performance Marketing",
  },
  {
    title: "Social Media Authority",
    badge: "Brand Engagement",
    icon: Share2,
    desc: "Build brand loyalty and engagement through our dedicated social media marketing agency Delhi and social media management agency in Delhi specialists.",
    href: "/services/social-media-marketing/",
    linkText: "Explore Social Media Services",
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
    desc: "We dissect your current indexing health, crawl logs, backlink profile, and evaluate top-ranking competitors in Delhi NCR to identify core ranking bottlenecks.",
  },
  {
    step: "02",
    title: "On-Page Architecture & Semantic Optimization",
    desc: "We fix code bottlenecks, optimize metadata, and deploy intent-driven content clusters engineered to satisfy Google's algorithmic quality standards.",
  },
  {
    step: "03",
    title: "Authority Outreach & Citation Building",
    desc: "We build authoritative local and national backlinks alongside verified directory citations to reinforce domain power and regional relevance.",
  },
  {
    step: "04",
    title: "Tracking, Lead Attribution & Conversion Optimization",
    desc: "Continuous monitoring via Google Search Console and GA4, tracking ranking trajectories, phone inquiries, and organic lead form fills.",
  },
];

const whyChooseUs = [
  {
    title: "No Black-Hat Tactics",
    icon: ShieldCheck,
    desc: "100% compliant with Google Search Essentials to ensure sustainable, penalty-free long-term rankings that weather core algorithm updates.",
  },
  {
    title: "Live, Transparent Dashboards",
    icon: BarChart3,
    desc: "Real-time visibility into keyword rankings, organic traffic trends, and lead attribution with clear, actionable monthly executive summaries.",
  },
  {
    title: "Integrated Development & Marketing",
    icon: Building2,
    desc: "Developers, SEO strategists, and copywriters working collaboratively under one roof to resolve technical and architectural bottlenecks instantly.",
  },
];

const otherCities = [
  { city: "Jaipur (HQ)", slug: "jaipur" },
  { city: "Mumbai", slug: "mumbai" },
  { city: "Bangalore", slug: "bangalore" },
  { city: "Hyderabad", slug: "hyderabad" },
  { city: "Chennai", slug: "chennai" },
  { city: "Pune", slug: "pune" },
  { city: "Indore", slug: "indore" },
  { city: "Chandigarh", slug: "chandigarh" },
  { city: "Kolkata", slug: "kolkata" },
  { city: "Lucknow", slug: "lucknow" },
  { city: "Bhiwadi & Alwar", slug: "bhiwadi-alwar" },
];

export default function SEODelhiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aksh Digital - SEO Agency in Delhi NCR",
    description:
      "Premier SEO services and digital marketing agency in Delhi NCR providing local SEO, enterprise search optimization, Core Web Vitals remediation, and link building.",
    url: "https://www.akshdigital.in/seo-services/delhi/",
    email: "hdigital9@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressRegion: "Delhi NCR",
      addressCountry: "IN",
    },
    areaServed: [
      "Delhi",
      "New Delhi",
      "Gurgaon",
      "Noida",
      "Connaught Place",
      "South Delhi",
      "Cyber City",
      "Delhi NCR",
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
            <span className="text-[#f6ac55]">Delhi NCR</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-[#f6ac55] backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#f6ac55] animate-pulse" />
            High-Intent Search Dominance • Delhi NCR Market
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Premier SEO Services in Delhi Engineered to Capture{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] via-[#f6ac55] to-[#f6ac55]">
              High-Value Commercial Leads
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            In India’s most competitive business hub, basic SEO is not enough.
            Partner with a proven SEO agency in Delhi and trusted digital
            marketing company in Delhi NCR. Aksh Digital delivers technical site
            architecture, localized search targeting, and high-authority link
            acquisition that drive qualified inbound revenue across Delhi,
            Gurgaon, Noida, and Pan-India.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm font-bold text-white shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:opacity-95 hover:-translate-y-0.5 transition-all duration-300"
            >
              Claim Your Free Delhi SEO Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="#delhi-seo-framework"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Our Ranking Framework
            </a>
          </div>

          {/* Market Reach Tag */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-[#d25c41]" />
            <span>
              Serving Enterprise & High-Growth Brands Across Delhi, Gurgaon,
              Noida & NCR
            </span>
          </div>
        </div>
      </section>

      {/* Overview: Why Delhi NCR Brands Need Advanced SEO Strategy */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
                Overview: Advanced NCR Search Strategy
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-6">
                Cutting Through Extreme Market Saturation with Technical SEO
                Precision
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                Delhi NCR is one of the densest and most competitive commercial
                landscapes in Asia. From corporate enterprises in Connaught
                Place and tech startups in Cyber City (Gurgaon) to manufacturing
                and media hubs in Noida, traditional keyword stuffing fails
                against aggressive competitors.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
                As an integrated digital marketing and web development agency,
                Aksh Digital approaches search ranking with engineering rigor.
                By pairing modern web speed (Next.js, React) with deep semantic
                keyword mapping, entity-based search optimization, and white-hat
                digital PR, our search engine optimization marketing agency
                secures long-term Page 1 positions, helps you capture
                high-converting queries, and reduces reliance on expensive paid
                ads.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0f1535] px-6 py-3 text-sm font-semibold text-white hover:bg-[#d25c41] transition-colors duration-300"
                >
                  Consult Our Delhi NCR SEO Team
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
                  High-Density NCR Hubs We Target
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  We deploy hyper-targeted local schemas and cluster content
                  mapped to specific commercial and tech epicenters across the
                  NCR.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {ncrHubs.map((hub) => (
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
                      NCR Google 3-Pack Strategy
                    </span>
                    <span className="font-bold text-[#d25c41]">
                      Active Targeting
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      Citation Consistency
                    </span>
                    <span className="font-bold text-emerald-600">
                      100% NAP Match
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      Technical Speed Audit
                    </span>
                    <span className="font-bold text-[#0f1535]">
                      Core Web Vitals Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core SEO Services in Delhi NCR */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              Our Core SEO Services in Delhi NCR
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Engineered for High Commercial Lead Capture
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every Delhi NCR vertical has intense competition. Here is our
              multi-tiered SEO arsenal designed to secure commanding organic
              rankings.
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

      {/* Integrated Growth: Full-Suite Synergies in Delhi NCR */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              Integrated Growth Synergies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Integrated Growth: Full-Suite Synergies in Delhi NCR
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Achieve exponential growth by aligning high-intent organic
              rankings with high-ROAS paid media, social brand resonance, and
              custom web engineering.
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

      {/* 4-Step Delhi SEO Roadmap */}
      <section
        id="delhi-seo-framework"
        className="py-20 sm:py-28 px-4 sm:px-6 bg-[#0f1535] text-white relative overflow-hidden"
      >
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#d25c41]/15 blur-3xl" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#f6ac55]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold text-[#f6ac55] uppercase tracking-wider mb-4">
              Our 4-Step Delhi SEO Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              A Rigorous, Repeatable Ranking Architecture
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We eliminate guesswork with a proven four-step framework built to
              overcome entrenched competitors across the Delhi NCR market.
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
              Start Step 1: Claim Your Delhi Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Ambitious Brands Choose Aksh Digital in Delhi NCR */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              The Aksh Digital Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Why Ambitious Brands Choose Aksh Digital in Delhi NCR
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We blend engineering speed with white-hat search excellence to
              deliver compounding organic visibility that converts visitors into
              high-ticket contracts.
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

      {/* Ready to Outrank Competitors in Delhi NCR? (Bottom CTA) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1535] via-[#1a224c] to-[#0f1535] py-20 sm:py-24 px-4 sm:px-6 text-center text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#d25c41]/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#f6ac55] uppercase tracking-wider mb-6">
            Ready to Outrank Competitors in Delhi NCR?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Claim Your Free Delhi Technical & SEO Audit Today
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let our search specialists analyze your website&apos;s hidden
            ranking bottlenecks and outline a custom 90-day search roadmap for
            the Delhi NCR market.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request Your Free Delhi SEO Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="mailto:hdigital9@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              <Mail className="h-4 w-4 text-[#f6ac55]" />
              hdigital9@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-[#d25c41]" />
            <span>Delhi NCR • Pan-India</span>
          </div>
        </div>
      </section>
    </div>
  );
}
