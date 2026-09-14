import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  CheckCircle,
<<<<<<< HEAD
=======
  Check,
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
  Target,
  BarChart3,
  Repeat,
  DollarSign,
  Zap,
  Globe,
<<<<<<< HEAD
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Performance Marketing Services | Maximise ROI on Ad Spend — Aksh Digital",
  description:
    "Aksh Digital's performance marketing experts run Google Ads, Meta Ads, and retargeting campaigns with a laser focus on ROI. Pay only for results that matter.",
};

const features = [
  { icon: Target, title: "Google Ads Management", desc: "Search, Display, Shopping, and YouTube campaigns expertly managed to maximise every rupee of your budget." },
  { icon: Globe, title: "Meta Ads (Facebook & Instagram)", desc: "Precision audience targeting, creative testing, and budget optimisation for maximum ROAS on Meta platforms." },
  { icon: Repeat, title: "Retargeting Campaigns", desc: "Re-engage visitors who left without converting with personalised ads that bring them back ready to buy." },
  { icon: BarChart3, title: "Conversion Tracking Setup", desc: "Full-funnel tracking via Google Tag Manager, GA4, and Meta Pixel so every action is measured and optimised." },
  { icon: DollarSign, title: "Budget Optimisation", desc: "Continuous bid management, audience refinement, and creative rotation to reduce CPA and scale winners." },
  { icon: Zap, title: "Landing Page Optimisation", desc: "High-converting landing pages and A/B tests that dramatically improve conversion rates from your ad traffic." },
];

const process = [
  { step: "01", title: "Account Audit", desc: "We analyse your existing ad accounts (or build from scratch), identifying wasted spend and missed opportunities." },
  { step: "02", title: "Strategy & Media Plan", desc: "A detailed media plan with channel allocation, audience strategy, creative brief, and monthly budget phasing." },
  { step: "03", title: "Creative Production", desc: "Ad copy, creatives, and landing pages built to capture attention and drive action at every funnel stage." },
  { step: "04", title: "Launch & Optimise", desc: "Campaigns go live with daily monitoring and weekly optimisation cycles to improve performance continuously." },
  { step: "05", title: "Report & Scale", desc: "Monthly performance reviews with clear attribution data and a scaling roadmap for the next period." },
];

const results = [
  { num: "4.2x", label: "Average ROAS Achieved" },
  { num: "55%", label: "Avg. CPA Reduction" },
  { num: "₹20Cr+", label: "Revenue Generated" },
  { num: "200+", label: "Campaigns Optimised" },
=======
  Sparkles,
  Layers,
  ShieldCheck,
  Users,
  MapPin,
  Mail,
  Clock,
  Search,
} from "lucide-react";

export const metadata = {
  title: "Performance Marketing Services | High-ROAS Google & Meta Ads — Aksh Digital",
  description:
    "Data-driven performance marketing services engineered to lower CAC and maximize ROAS. Google Ads, Meta Ads, LinkedIn ABM, server-side tracking, and landing page CRO by Aksh Digital.",
  alternates: {
    canonical: "https://www.akshdigital.in/services/performance-marketing/",
  },
};

const services = [
  {
    id: "google-ads",
    number: "01",
    badge: "Search, PMax & Shopping",
    title: "Google Ads Management & Paid Search (PPC)",
    icon: Search,
    points: [
      "High-intent Search campaigns targeting transactional commercial keywords to capture immediate in-market demand.",
      "Performance Max (PMax) campaigns leveraging smart bidding, asset groups, and first-party audience signals.",
      "High-converting Google Shopping campaigns for e-commerce, paired with optimized merchant feeds and product schemas.",
      "YouTube and Display network campaigns structured for brand awareness and direct-response lead generation.",
    ],
  },
  {
    id: "meta-ads",
    number: "02",
    badge: "Facebook & Instagram Scaling",
    title: "Meta Ads (Facebook & Instagram Advertising)",
    icon: Target,
    points: [
      "Direct-response video and static ad creative testing to identify winning hooks and reduce ad fatigue.",
      "Multi-tier retargeting funnels designed to re-engage website visitors, video viewers, and abandoned carts.",
      "Dynamic Product Ads (DPA) and Advantage+ shopping campaigns engineered to scale D2C e-commerce sales.",
      "Lead generation instant forms and custom WhatsApp direct-messaging funnels.",
    ],
  },
  {
    id: "b2b-abm",
    number: "03",
    badge: "Enterprise Pipeline & ABM",
    title: "B2B & Account-Based Paid Advertising (LinkedIn & Twitter)",
    icon: Users,
    points: [
      "Account-Based Marketing (ABM) campaigns targeting specific company sizes, job titles, and enterprise decision-makers on LinkedIn.",
      "Sponsored content, lead gen forms, and InMail messaging funnels designed to capture qualified corporate pipeline leads.",
      "Re-engagement campaigns targeting high-intent website visitors with relevant case studies and whitepapers.",
    ],
  },
  {
    id: "tracking-analytics",
    number: "04",
    badge: "Server-Side CAPI & GA4",
    title: "Conversion Tracking, Attribution & Analytics",
    icon: BarChart3,
    points: [
      "Server-side tracking setup via Google Tag Manager (GTM) and Meta Conversions API (CAPI) to bypass browser ad blockers and iOS tracking limits.",
      "Deep Google Analytics 4 (GA4) custom event mapping and cross-channel attribution modeling.",
      "Real-time live KPI dashboards displaying spend, cost per lead (CPL), customer acquisition cost (CAC), and return on ad spend (ROAS).",
    ],
  },
  {
    id: "cro-synergy",
    number: "05",
    badge: "Landing Pages & Creative Hooks",
    title: "Creative Production & Landing Page CRO Synergy",
    icon: Zap,
    points: [
      "Direct collaboration with our digital marketing and design agency team to produce high-converting ad visuals, motion graphics, and video hooks.",
      "Rapid landing page development and A/B split testing executed by our in-house web development and digital marketing company engineers.",
    ],
  },
];

const domesticCities = [
  { city: "Jaipur (HQ)", slug: "jaipur", tag: "Growth HQ" },
  { city: "Delhi NCR", slug: "delhi", tag: "Corporate Scale" },
  { city: "Mumbai", slug: "mumbai", tag: "Fintech & Retail" },
  { city: "Bangalore", slug: "bangalore", tag: "SaaS & Startups" },
  { city: "Pune", slug: "pune", tag: "Fast-Growth Hub" },
  { city: "Indore", slug: "indore", tag: "Tier-2 Engine" },
];

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Deep Account Audit & Tracking Validation",
    desc: "We audit your past ad data, analyze conversion tracking health, eliminate wasteful spend, and benchmark competitor ad strategies.",
  },
  {
    phase: "Phase 2",
    title: "Funnel Architecture & Creative Strategy",
    desc: "We map your customer journey, develop compelling direct-response ad angles, and build conversion-focused landing pages.",
  },
  {
    phase: "Phase 3",
    title: "Launch, Rapid Testing & Data Gathering",
    desc: "We launch controlled test campaigns across audience segments, bidding strategies, and creative variations to isolate top performers.",
  },
  {
    phase: "Phase 4",
    title: "Optimization, Scaling & ROAS Maximization",
    desc: "We allocate budget to winning ads, expand into lookalike and broader audiences, and continuously optimize landing pages to lower CAC.",
  },
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
];

export default function PerformanceMarketingPage() {
  return (
    <div className="bg-white">
<<<<<<< HEAD
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-amber-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#f6ac55]">Performance Marketing</span>
          </nav>
          <div className="flex items-center gap-2 mb-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
              <TrendingUp className="h-5 w-5 text-amber-400" />
            </span>
            <span className="text-sm font-semibold text-[#f6ac55] uppercase tracking-wider">Performance Marketing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-tight tracking-tight mb-6">
            Every Rupee Spent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Earns More Back
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
            Data-driven paid advertising campaigns across Google, Meta, and beyond —
            engineered to deliver the highest possible return on every rupee you invest.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-3.5 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300">
              Get a Free Ad Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300">
              ← All Services
=======
      {/* ── 1. Hero Section ── */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 md:py-28 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-amber-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#f6ac55]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#f6ac55]">Performance Marketing</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#d25c41]/30 bg-[#d25c41]/10 px-4 py-1.5 text-sm font-semibold text-[#f6ac55] mb-6">
            <Sparkles className="h-4 w-4" />
            High-ROAS Paid Acquisition &amp; Revenue Scaling
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Data-Driven Performance Marketing Services Engineered to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[#d25c41] to-[#f6ac55]">
              Lower CAC and Maximize ROAS
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Stop burning ad budget on vanity impressions and empty clicks. As a dedicated performance marketing agency India, Aksh Digital builds, tests, and optimizes full-funnel paid advertising campaigns across Google, Meta, and LinkedIn. From our growth hub in Jaipur to ambitious businesses across Pan-India, the USA, the UK, and global markets, we turn media spend into predictable, compounding revenue.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request a Free Ad Account &amp; ROAS Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link
              href="#core-services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xs px-8 py-4 text-sm sm:text-base font-bold text-white hover:bg-white/15 transition-all duration-300"
            >
              Explore Our Paid Media Channels
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Results */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {results.map(({ num, label }) => (
            <div key={label}>
              <p className="text-3xl sm:text-4xl font-bold text-white">{num}</p>
              <p className="mt-1 text-sm text-white/80 font-medium">{label}</p>
=======
      {/* ── Impact Metrics Strip ── */}
      <section className="border-b border-slate-100 bg-[#fafaf9] py-8 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "4.4x", label: "Average Campaign ROAS", sub: "Google & Meta ad accounts" },
            { num: "55%", label: "Reduction in Blended CAC", sub: "Creative & landing page CRO" },
            { num: "₹50Cr+", label: "Ad-Generated Revenue", sub: "Scaled for client partners" },
            { num: "0%", label: "Hidden Fees or Markups", sub: "100% direct client billing" },
          ].map(({ num, label, sub }) => (
            <div key={label} className="p-3">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#14183e]">{num}</p>
              <p className="mt-1 text-sm font-bold text-[#d25c41]">{label}</p>
              <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            </div>
          ))}
        </div>
      </section>

<<<<<<< HEAD
      {/* Features */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">Our Performance Marketing Services</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Results-focused paid media management across every major platform.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:border-amber-200 hover:-translate-y-1 transition-all duration-300">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 mb-4">
                  <Icon className="h-6 w-6 text-amber-600" strokeWidth={2} />
                </span>
                <h3 className="text-lg font-bold text-[#14183e] mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">Our Optimisation Process</h2>
            <p className="text-slate-600 max-w-xl mx-auto">A rigorous, data-driven cycle that continuously improves your ad performance.</p>
          </div>
          <div className="space-y-6">
            {process.map(({ step, title, desc }, i) => (
              <div key={step} className="flex gap-5 sm:gap-6 items-start">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-sm shadow-md">{step}</span>
                  {i < process.length - 1 && <span className="mt-2 h-12 w-px bg-amber-100" />}
                </div>
                <div className="pt-2 pb-6">
                  <h3 className="text-lg font-bold text-[#14183e] mb-1.5">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#14183e] mb-6">Why Choose Aksh Digital for Paid Ads?</h2>
            <ul className="space-y-4">
              {[
                "Google & Meta Certified performance marketing experts",
                "Zero wastage — budget allocated to proven audiences only",
                "Weekly performance reports with full transparency",
                "Creative refresh every 2 weeks to prevent ad fatigue",
                "Dedicated performance manager with direct WhatsApp access",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-slate-700 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#0f1535] p-8 sm:p-10 text-center">
            <TrendingUp className="h-12 w-12 text-[#f6ac55] mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-white mb-3">Free Ad Account Audit</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              We'll audit your existing Google or Meta ad account and show you exactly where you're wasting budget — for free.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#b84d35] transition-colors">
              <Phone className="h-4 w-4" />
              Get Free Audit
            </Link>
=======
      {/* ── 2. Overview: Why Modern Paid Acquisition Demands Full-Funnel Precision ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41]">
                  Scientific Media Buying
                </span>
                <span className="h-px w-8 bg-[#d25c41]/40" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#14183e] leading-tight mb-6">
                Eliminating Ad Waste with{" "}
                <span className="text-[#d25c41]">Scientific Testing and Conversion Tracking</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                Rising customer acquisition costs (CAC) and privacy changes mean broad targeting and generic ad boosts no longer work. Running profitable paid campaigns requires rigorous audience segmentation, dynamic creative testing, and server-side tracking.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                As a full-stack software and digital marketing company, Aksh Digital approaches performance marketing with technical and creative precision. We connect conversion-optimized landing pages (Next.js, React) with high-converting direct-response creatives and granular tracking architecture. Whether you need a top digital marketing company in Jaipur to capture local commercial leads or a proven paid advertising agency to scale your international e-commerce revenue as an offshore digital marketing agency USA partner, we deliver transparent, performance-driven growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#b84d35] transition-all shadow-md"
                >
                  Schedule Paid Media Diagnostic
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {[
                {
                  icon: BarChart3,
                  title: "Server-Side CAPI & Zero Signal Loss",
                  desc: "Bypassing browser ad-blockers and iOS privacy restrictions with robust GTM server-side tracking.",
                },
                {
                  icon: TrendingUp,
                  title: "Rapid Creative Variant Velocity",
                  desc: "A/B testing dozens of video hooks and static designs weekly to prevent audience fatigue.",
                },
                {
                  icon: Zap,
                  title: "High-Speed Landing Page Funnels",
                  desc: "Sub-second Next.js conversion landing pages built to turn paid clicks into immediate revenue.",
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
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600 py-16 px-4 sm:px-6 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Scale Your Revenue?</h2>
          <p className="text-white/80 mb-8">Let's build a performance marketing machine that generates predictable, scalable revenue growth.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-amber-700 hover:bg-slate-50 transition-colors shadow-lg">
            Start Scaling Now
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
=======
      {/* ── 3. Our Core Performance Marketing Services ── */}
      <section id="core-services" className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fafaf9] border-t border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Direct-Response Media Buying
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Our Core Performance Marketing Services
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Every paid acquisition campaign is engineered around bottom-line profitability and strict CAC/ROAS benchmarks.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((item) => {
              const SIcon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-xs hover:shadow-xl hover:border-[#d25c41]/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-bold text-[#d25c41]">
                          <SIcon className="h-3.5 w-3.5" />
                          {item.badge}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                          Vertical {item.number}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#14183e] mb-5">
                        {item.title}
                      </h3>

                      <ul className="space-y-3.5">
                        {item.points.map((pt, pIdx) => (
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
                    </div>

                    <div className="md:w-56 shrink-0 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-5 md:pt-0 md:pl-8">
                      <span className="text-xs text-slate-400 font-semibold mb-2">
                        Accountability Standard
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        Zero media markups. Live Looker Studio reporting dashboards accessible 24/7.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs font-bold text-[#d25c41] hover:bg-[#d25c41] hover:text-white hover:border-[#d25c41] transition-all"
                      >
                        Audit This Channel &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Cross-Market Media Buying: Domestic Domination & Global Scale ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#0f1535] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-[#f6ac55] mb-4">
              <Globe className="h-3.5 w-3.5" />
              Media Buying Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Cross-Market Media Buying: Domestic Domination &amp; Global Scale
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              We manage performance advertising calibrated for localized Indian metros and global e-commerce/B2B markets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Pan-India Performance Campaigns */}
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d25c41]/20 text-[#f6ac55]">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Pan-India Performance Campaigns
                    </h3>
                    <p className="text-xs text-[#f6ac55] font-semibold">
                      Jaipur HQ &amp; Top Indian Metros
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Delivering high-ROAS paid search and social campaigns tailored for regional and metro audiences as a proven digital marketing agency in Delhi NCR, a results-driven digital marketing agency Mumbai, an agile digital marketing agency Bangalore, a data-backed digital marketing company in Pune, and a top digital marketing agency Indore.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                  {domesticCities.map(({ city, slug, tag }) => (
                    <Link
                      key={slug}
                      href={`/seo-services/${slug}/`}
                      className="group p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-[#d25c41] hover:border-[#d25c41] transition-all text-xs text-white flex flex-col justify-between"
                    >
                      <span className="font-bold flex items-center justify-between">
                        {city}
                        <ArrowRight className="h-3 w-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </span>
                      <span className="text-[10px] text-slate-400 group-hover:text-white/80 mt-1">
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Domestic Media Buying Hub</span>
                <Link href="/contact/" className="text-[#f6ac55] hover:underline font-semibold">
                  Get Domestic Media Proposal &rarr;
                </Link>
              </div>
            </div>

            {/* Card 2: Global Offshore Media Buying */}
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6ac55]/20 text-[#f6ac55]">
                    <Globe className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Global Offshore Media Buying (USA, UK, Global)
                    </h3>
                    <p className="text-xs text-[#f6ac55] font-semibold">
                      Outsourced Media Management
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Providing international businesses with dedicated media buyers and campaign managers through outsourced digital marketing services, offering daily performance monitoring, timezone overlap, and strict ROAS accountability.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    {
                      icon: Clock,
                      title: "Daily Timezone Alignment",
                      desc: "Synchronized live campaign optimizations during US & UK business hours.",
                    },
                    {
                      icon: Zap,
                      title: "Rapid Ad Angle Deployment",
                      desc: "Weekly creative refreshes and audience exclusions to protect CPA targets.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "100% Billing Transparency",
                      desc: "Media spend billed straight to your credit card with zero hidden management markups.",
                    },
                  ].map((item, idx) => {
                    const IIcon = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-3">
                        <IIcon className="h-4 w-4 text-[#f6ac55] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-white">{item.title}</p>
                          <p className="text-[11px] text-slate-300 leading-snug mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Global Paid Media Desk</span>
                <Link href="/contact" className="text-[#f6ac55] hover:underline font-semibold">
                  Book Offshore Account Review &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Our 4-Phase Paid Media Scaling Framework ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Media Scaling Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Our 4-Phase Paid Media Scaling Framework
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              From audit to aggressive budget scaling, engineered to compound return on investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {roadmapPhases.map((phase, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl border border-slate-200 bg-[#fafaf9] p-8 hover:border-[#d25c41]/40 hover:shadow-lg transition-all duration-300"
              >
                <span className="inline-block rounded-full bg-[#d25c41] text-white text-xs font-bold px-3 py-1 mb-4">
                  {phase.phase}
                </span>
                <h3 className="text-xl font-bold text-[#14183e] mb-3">
                  {phase.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Why Ambitious Brands Choose Aksh Digital for Performance Marketing ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fafaf9] border-t border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              The Performance Difference
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Why Ambitious Brands Choose Aksh Digital for Performance Marketing
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              We align our incentives with your net profitability and revenue growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Strict ROAS Focus",
                desc: "We measure our success on bottom-line revenue, qualified leads, and net profitability—not impressions or clicks.",
              },
              {
                icon: DollarSign,
                title: "No Agency Markup on Ad Spend",
                desc: "Complete billing transparency with ad spend billed directly to your own ad accounts.",
              },
              {
                icon: Layers,
                title: "Integrated Creative & Tech Support",
                desc: "Instant access to our developers and graphic designers to build custom landing pages and fresh ad creatives without relying on third parties.",
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
                      <CheckCircle className="h-4 w-4" /> Core Guarantee
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. Ready to Scale Your Paid Media with Predictable Returns? (Bottom CTA) ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#d25c41] via-[#c65239] to-[#b84d35] py-20 sm:py-24 px-4 sm:px-6 text-center text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-white mb-6 uppercase tracking-wider">
            Ready to Scale Your Paid Media with Predictable Returns?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Claim Your Free Paid Ad &amp; ROAS Audit Today
          </h2>

          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Let our media buyers analyze your Google and Meta ad accounts to identify budget leakage, tracking errors, and high-growth scaling opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm sm:text-base font-bold text-[#d25c41] hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-0.5"
            >
              Request Your Free Paid Ads Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="mailto:connect@akshdigital.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-xs px-7 py-4 text-sm sm:text-base font-semibold text-white hover:bg-white/20 transition-all"
            >
              <Mail className="h-4 w-4" />
              connect@akshdigital.com
            </a>
          </div>

          <p className="text-xs text-white/70">
            No obligation. Zero lock-in contracts. Detailed account &amp; funnel analysis.
          </p>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
        </div>
      </section>
    </div>
  );
}
