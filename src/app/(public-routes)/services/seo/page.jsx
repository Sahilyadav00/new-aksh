import Link from "next/link";
import {
  ArrowRight,
  Search,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Globe,
  Link2,
  FileText,
  Zap,
  MapPin,
  Mail,
  ShieldCheck,
  Check,
  ShoppingBag,
  Layers,
  Cpu,
  Sparkles,
  Clock,
} from "lucide-react";

export const metadata = {
  title:
    "Enterprise SEO Strategies & Services | Page 1 Domination — Aksh Digital",
  description:
    "Enterprise SEO strategies engineered for Page 1 domination and high-intent leads. Technical audits, high-authority link acquisition, local SEO, and semantic content by Aksh Digital.",
  alternates: {
    canonical: "https://www.akshdigital.in/services/seo/",
  },
};

const verticals = [
  {
    id: "technical",
    number: "01",
    badge: "Infrastructure, Speed & Crawlability",
    title: "Technical SEO & Core Web Vitals Optimization",
    icon: Zap,
    points: [
      "Crawlability audits, indexation optimization, and XML sitemap structuring.",
      "Server-side rendering (SSR) optimization for modern JavaScript applications.",
      "Mobile responsiveness, site speed enhancement, and Core Web Vitals remediation.",
    ],
  },
  {
    id: "semantic",
    number: "02",
    badge: "Intent Classification & Cluster Architecture",
    title: "Semantic Keyword & Topical Authority Mapping",
    icon: Search,
    points: [
      "Comprehensive competitor keyword gap analysis and intent classification (informational vs. transactional).",
      "Pillar-and-cluster content architecture designed to establish your domain as an authoritative industry leader.",
      "Long-tail keyword mapping targeting high-conversion commercial searches.",
    ],
  },
  {
    id: "local",
    number: "03",
    badge: "Geo-Targeted Intent & Map-Pack Dominance",
    title: "Hyper-Local SEO & Google Business Profile Management",
    icon: MapPin,
    points: [
      "As an experienced local search marketing agency, we optimize Google Business Profiles (GBP), build localized directory citations, and target geo-specific intent.",
      "Capture immediate local search volume across Jaipur, Delhi NCR, Mumbai, Bangalore, Pune, and Indore.",
    ],
    hasCities: true,
  },
  {
    id: "ecommerce",
    number: "04",
    badge: "High-Velocity Product Scaling",
    title: "E-Commerce & Enterprise National SEO",
    icon: ShoppingBag,
    points: [
      "Category and product-level optimization engineered to scale organic transactions for D2C brands.",
      "Faceted navigation indexing, structured data schema (JSON-LD) implementation, and rich snippets.",
    ],
  },
  {
    id: "backlinks",
    number: "05",
    badge: "White-Hat Editorial & Brand Mentions",
    title: "Authority Link Building & Digital PR",
    icon: Link2,
    points: [
      "100% white-hat, contextual link acquisition from authoritative, relevant industry publications.",
      "Brand mentions, editorial outreach, and high-value linkable assets that compound domain rating safely over time.",
    ],
  },
];

const roadmapSteps = [
  {
    phase: "Phase 1",
    title: "Deep Technical & Keyword Audit",
    desc: "We dissect your current website health, crawl logs, backlink profile, and competitor positioning.",
  },
  {
    phase: "Phase 2",
    title: "On-Page Remediation & Content Structuring",
    desc: "We resolve technical indexing bottlenecks, optimize metadata, and implement targeted topical content clusters.",
  },
  {
    phase: "Phase 3",
    title: "Authority Building & Digital Outreach",
    desc: "We launch targeted digital PR and link acquisition campaigns to build credible domain authority.",
  },
  {
    phase: "Phase 4",
    title: "Tracking, Conversion Optimization & Scaling",
    desc: "Continuous monitoring through Google Search Console and GA4, tracking keyword trajectories and optimizing conversion paths.",
  },
];

const domesticCities = [
  { city: "Jaipur (HQ)", slug: "jaipur" },
  { city: "Delhi NCR", slug: "delhi" },
  { city: "Mumbai", slug: "mumbai" },
  { city: "Bangalore", slug: "bangalore" },
  { city: "Pune", slug: "pune" },
  { city: "Indore", slug: "indore" },
  { city: "Chandigarh", slug: "chandigarh" },
  { city: "Kolkata", slug: "kolkata" },
  { city: "Hyderabad", slug: "hyderabad" },
  { city: "Chennai", slug: "chennai" },
  { city: "Lucknow", slug: "lucknow" },
  { city: "Bhiwadi & Alwar", slug: "bhiwadi-alwar" },
];

export default function SEOStrategiesPage() {
  return (
    <div className="bg-white">
      {/* ── 1. Hero Section ── */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 md:py-28 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#d25c41]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#f6ac55]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services/"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-[#f6ac55]">SEO Strategies</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#d25c41]/30 bg-[#d25c41]/10 px-4 py-1.5 text-sm font-semibold text-[#f6ac55] mb-6">
            <Sparkles className="h-4 w-4" />
            Data-Backed Organic Growth
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Enterprise SEO Strategies Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] to-[#f6ac55]">
              Page 1 Domination and High-Intent Leads
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Stop chasing vanity traffic. As a leading SEO agency in India, Aksh
            Digital executes technical audits, high-authority link acquisition,
            and semantic content architecture that position your brand in front
            of ready-to-buy customers across Jaipur, Pan-India, the USA, and
            worldwide.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Get a Free SEO &amp; Technical Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link
              href="#seo-framework"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xs px-8 py-4 text-sm sm:text-base font-bold text-white hover:bg-white/15 transition-all duration-300"
            >
              Explore Our SEO Framework
            </Link>
          </div>
        </div>
      </section>

      {/* ── Performance Signals Strip ── */}
      <section className="border-b border-slate-100 bg-[#fafaf9] py-8 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            {
              num: "3.8x",
              label: "Average Traffic Lift",
              sub: "Within 6–9 months",
            },
            {
              num: "85%+",
              label: "Page 1 Keyword Share",
              sub: "High-intent queries",
            },
            {
              num: "60%",
              label: "Reduction in Blended CAC",
              sub: "Compounding organic assets",
            },
            {
              num: "100%",
              label: "White-Hat Compliance",
              sub: "Google Search Essentials",
            },
          ].map(({ num, label, sub }) => (
            <div key={label} className="p-3">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#14183e]">
                {num}
              </p>
              <p className="mt-1 text-sm font-bold text-[#d25c41]">{label}</p>
              <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. Overview: Why Modern SEO Demands an Engineering Approach ── */}
      <section
        id="seo-framework"
        className="py-20 sm:py-24 px-4 sm:px-6 bg-white"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41]">
                  Engineering-Led Organic Search
                </span>
                <span className="h-px w-8 bg-[#d25c41]/40" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#14183e] leading-tight mb-6">
                Turning Organic Search into a{" "}
                <span className="text-[#d25c41]">
                  Predictable Inbound Revenue Engine
                </span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                Search algorithms have evolved far beyond basic keyword stuffing
                and low-quality directory backlinks. Modern search engines
                demand lightning-fast site architecture, clean code structure,
                semantic topical authority, and genuine user value.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                As a unified web development and digital marketing company, Aksh
                Digital approaches SEO with technical precision. By combining
                modern front-end frameworks (Next.js, React) with data-driven
                on-page and off-page optimization, our organic search marketing
                agency builds search assets that capture high-intent buyers,
                lower your customer acquisition costs (CAC), and protect your
                brand from volatile algorithm shifts.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#b84d35] transition-all shadow-md"
                >
                  Request Technical Strategy Session
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {[
                {
                  icon: Cpu,
                  title: "Code-Level Crawlability",
                  desc: "Optimized server-side rendering (SSR), clean DOM trees, and zero JavaScript rendering bottlenecks.",
                },
                {
                  icon: Layers,
                  title: "Topical Cluster Domination",
                  desc: "Comprehensive topic coverage that builds unshakeable topical authority in Google's Knowledge Graph.",
                },
                {
                  icon: ShieldCheck,
                  title: "Algorithm-Proof Resilience",
                  desc: "Strictly compliant white-hat architectures built to withstand and benefit from Core Algorithm updates.",
                },
              ].map((card, idx) => {
                const CIcon = card.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-[#fafaf9] p-6 hover:border-[#d25c41]/40 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d25c41]/10 text-[#d25c41]">
                        <CIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <h4 className="text-base font-bold text-[#14183e] mb-1">
                          {card.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Our Core SEO Services & Strategic Verticals ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fafaf9] border-t border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Specialized Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Our Core SEO Services &amp; Strategic Verticals
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Every vertical is calibrated to capture market share across
              technical infrastructure, localized search, and high-converting
              commercial intent.
            </p>
          </div>

          <div className="space-y-8">
            {verticals.map((vert) => {
              const VIcon = vert.icon;
              return (
                <div
                  key={vert.id}
                  className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-xs hover:shadow-xl hover:border-[#d25c41]/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-bold text-[#d25c41]">
                          <VIcon className="h-3.5 w-3.5" />
                          {vert.badge}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                          Vertical {vert.number}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#14183e] mb-5">
                        {vert.title}
                      </h3>

                      <ul className="space-y-3.5">
                        {vert.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3">
                            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d25c41] text-white">
                              <Check className="h-2.5 w-2.5 stroke-[3]" />
                            </span>
                            <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                              {pt}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {vert.hasCities && (
                        <div className="mt-6 pt-5 border-t border-slate-100">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                            Target Cities:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {domesticCities.map(({ city, slug }) => (
                              <Link
                                key={slug}
                                href={`/seo-services/${slug}`}
                                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-[#d25c41] hover:text-white hover:border-[#d25c41] transition-all"
                              >
                                {city}
                                <ArrowRight className="h-3 w-3" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="md:w-56 shrink-0 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-5 md:pt-0 md:pl-8">
                      <span className="text-xs text-slate-400 font-semibold mb-2">
                        Execution Standard
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        Custom scope aligned with target search volume and
                        business pipeline goals.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs font-bold text-[#d25c41] hover:bg-[#d25c41] hover:text-white hover:border-[#d25c41] transition-all"
                      >
                        Audit This Vertical &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Global Offshore & Domestic SEO Execution ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#0f1535] text-white relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-[#f6ac55] mb-4">
              <Globe className="h-3.5 w-3.5" />
              Cross-Border Reach
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Global Offshore &amp; Domestic SEO Execution
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Tailored organic search deployment whether you are building local
              dominance in Indian cities or acquiring market share across the
              USA and global territories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Pan-India Search Leadership */}
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d25c41]/20 text-[#f6ac55]">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Pan-India &amp; Regional Search Leadership
                    </h3>
                    <p className="text-xs text-[#f6ac55] font-semibold">
                      Jaipur HQ &amp; Tier-1 Metros
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  From establishing localized market dominance for brands
                  searching for a trusted digital marketing company in Jaipur to
                  competing nationally across competitive Indian metro markets,
                  we build authoritative footprint across Tier-1 and Tier-2
                  growth hubs.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                  {domesticCities.map(({ city, slug }) => (
                    <Link
                      key={slug}
                      href={`/seo-services/${slug}/`}
                      className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-[#d25c41] hover:border-[#d25c41] transition-all text-xs font-semibold text-white flex items-center justify-between"
                    >
                      {city}
                      <ArrowRight className="h-3 w-3 opacity-60" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Domestic Indian Desk</span>
                <Link
                  href="/contact/"
                  className="text-[#f6ac55] hover:underline font-semibold"
                >
                  Get Local SEO Proposal &rarr;
                </Link>
              </div>
            </div>

            {/* Card 2: Global & International SEO */}
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6ac55]/20 text-[#f6ac55]">
                    <Globe className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Global &amp; International SEO (USA, UK, Global)
                    </h3>
                    <p className="text-xs text-[#f6ac55] font-semibold">
                      Multi-Regional Organic Scale
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Structured hreflang implementations, multi-regional search
                  targeting, and offshore campaign execution for businesses
                  partnering with an international digital marketing agency USA
                  specialist.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Multi-country Hreflang tag configuration and international CDN optimization.",
                    "Timezone-overlapping communication (EST, PST, GMT) with transparent sprint reporting.",
                    "Global competitor backlink gap replication and high-DA editorial outreach.",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3"
                    >
                      <Check className="h-4 w-4 text-[#f6ac55] shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-300 leading-snug">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-slate-400">
                <span>International SEO Desk</span>
                <Link
                  href="/contact/"
                  className="text-[#f6ac55] hover:underline font-semibold"
                >
                  Schedule Global Briefing &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Our 4-Step SEO Growth Roadmap ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Execution Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Our 4-Step SEO Growth Roadmap
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              A disciplined, technical approach that removes guesswork and
              builds sustainable ranking momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {roadmapSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl border border-slate-200 bg-[#fafaf9] p-8 hover:border-[#d25c41]/40 hover:shadow-lg transition-all duration-300"
              >
                <span className="inline-block rounded-full bg-[#d25c41] text-white text-xs font-bold px-3 py-1 mb-4">
                  {step.phase}
                </span>
                <h3 className="text-xl font-bold text-[#14183e] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Why Ambitious Brands Partner with Aksh Digital for SEO ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fafaf9] border-t border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Proven Principles
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Why Ambitious Brands Partner with Aksh Digital for SEO
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Built on transparency, engineering rigor, and real commercial
              revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "No Black-Hat Shortcuts",
                desc: "We adhere strictly to Google Search Essentials and white-hat methodologies that safeguard your long-term organic rankings.",
              },
              {
                icon: BarChart3,
                title: "Transparent Live Dashboards",
                desc: "Track your keyword movements, impressions, organic clicks, and conversion value in real time.",
              },
              {
                icon: Layers,
                title: "Complete Synergy with Development & Ads",
                desc: "Seamless coordination between technical developers and performance marketers under one roof.",
              },
            ].map((card, idx) => {
              const PIcon = card.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-9 hover:border-[#d25c41]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d25c41]/10 text-[#d25c41] mb-6">
                      <PIcon className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h3 className="text-xl font-bold text-[#14183e] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold text-[#d25c41] uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle className="h-4 w-4" /> Core Value
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. Ready to Dominate Search Rankings? (Bottom CTA) ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#d25c41] via-[#c65239] to-[#b84d35] py-20 sm:py-24 px-4 sm:px-6 text-center text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-white mb-6 uppercase tracking-wider">
            Ready to Dominate Search Rankings?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Claim Your Free Technical SEO Audit Today
          </h2>

          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Discover hidden indexing errors, content gaps, and high-value
            keyword opportunities with our Jaipur strategy team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm sm:text-base font-bold text-[#d25c41] hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-0.5"
            >
              Request Your Free SEO Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="mailto:akshdigital9@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-xs px-7 py-4 text-sm sm:text-base font-semibold text-white hover:bg-white/20 transition-all"
            >
              <Mail className="h-4 w-4" />
              akshdigital9@gmail.com
            </a>
          </div>

          <p className="text-xs text-white/70">
            No obligation. Zero lock-in contracts. Full technical crawl
            breakdown.
          </p>
        </div>
      </section>
    </div>
  );
}
