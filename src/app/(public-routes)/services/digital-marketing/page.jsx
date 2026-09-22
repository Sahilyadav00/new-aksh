import Link from "next/link";
import {
  ArrowRight,
  Megaphone,
  CheckCircle,
  Mail,
  Target,
  BarChart3,
  Globe,
  TrendingUp,
  Users,
  Search,
  Code2,
  Share2,
  Activity,
  Layers,
  ShieldCheck,
  Check,
  Sparkles,
  MapPin,
  Clock,
  Zap,
} from "lucide-react";

export const metadata = {
  title:
    "Complete Digital Marketing Services | High-ROAS Growth — Aksh Digital",
  description:
    "Complete digital marketing services engineered for high ROI and market domination. SEO, Google & Meta Ads, Next.js web engineering, social media, and CRO by Aksh Digital.",
};

const verticals = [
  {
    id: "seo",
    number: "01",
    badge: "Organic Visibility & Authority",
    title: "Search Engine Optimization & Organic Growth",
    icon: Search,
    points: [
      "As an experienced search engine optimization marketing agency, we execute end-to-end technical, on-page, and local SEO to secure Page 1 rankings for commercial search terms.",
      "Establish lasting domain authority and capture high-intent inbound search traffic at zero ongoing cost-per-click.",
    ],
    link: "/services/seo/",
    linkText: "Explore SEO Solutions",
  },
  {
    id: "performance",
    number: "02",
    badge: "High-ROAS Paid Acquisition",
    title: "Performance Marketing & Paid Advertising",
    icon: Target,
    points: [
      "Partner with a data-first performance marketing agency India to run hyper-targeted campaigns across Google Search, Performance Max, and Meta Ads.",
      "Optimize media spend around strict return on ad spend (ROAS) and lower customer acquisition costs (CAC).",
    ],
    link: "/services/performance-marketing/",
    linkText: "Explore Paid Media",
  },
  {
    id: "web-dev",
    number: "03",
    badge: "Engineering & Conversion Funnels",
    title: "Modern Web & Landing Page Development",
    icon: Code2,
    points: [
      "Modern, lightning-fast digital assets engineered with Next.js, React, and Node.js by a top web development and digital marketing company.",
      "Custom conversion funnels, intuitive UI/UX design, and frictionless mobile checkouts built to turn visitors into paying customers.",
    ],
    link: "/services/web-development/",
    linkText: "Explore Web Engineering",
  },
  {
    id: "social",
    number: "04",
    badge: "Audience Engagement & Equity",
    title: "Social Media Marketing & Brand Building",
    icon: Share2,
    points: [
      "Scale your audience engagement with a premier social media marketing agency in India.",
      "High-impact video content, creative ad design, and strategic community management that build long-term brand equity.",
    ],
    link: "/services/social-media-marketing/",
    linkText: "Explore Social Media",
  },
  {
    id: "cro",
    number: "05",
    badge: "Data Analytics & User Testing",
    title: "Conversion Rate Optimization (CRO) & Data Analytics",
    icon: Activity,
    points: [
      "Detailed heat-mapping, user recording analysis, and rigorous A/B split testing to squeeze maximum value from your existing traffic.",
      "Advanced conversion tracking via Google Analytics 4 (GA4) and server-side APIs for crystal-clear attribution.",
    ],
    link: "/contact",
    linkText: "Request CRO Audit",
  },
];

const domesticCities = [
  { city: "Jaipur (HQ)", slug: "jaipur", tag: "Headquarters" },
  { city: "Delhi NCR", slug: "delhi", tag: "Metro Hub" },
  { city: "Mumbai", slug: "mumbai", tag: "Commercial Center" },
  { city: "Bangalore", slug: "bangalore", tag: "Tech Capital" },
  { city: "Pune", slug: "pune", tag: "Growth Center" },
  { city: "Indore", slug: "indore", tag: "Tier-2 Leader" },
];

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Full-Funnel Audit & Market Intelligence",
    desc: "Comprehensive analysis of your conversion funnel, competitor strengths, and high-value search gaps.",
  },
  {
    phase: "Phase 2",
    title: "Strategy Architecture & Media Planning",
    desc: "Formulating custom creative angles, conversion funnels, and balanced organic/paid media budgets.",
  },
  {
    phase: "Phase 3",
    title: "Multi-Channel Execution & Campaign Launch",
    desc: "Rapid deployment of ad creatives, technical on-page optimizations, and high-converting landing pages.",
  },
  {
    phase: "Phase 4",
    title: "Optimization, Attribution & Scaling",
    desc: "Relentless A/B testing of messaging and budget reallocation toward your highest-converting growth channels.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <div className="bg-white">
      {/* ── 1. Hero Section ── */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 md:py-28 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#d25c41]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#f6ac55]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-8">
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
            <span className="text-[#f6ac55]">Digital Marketing</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#d25c41]/30 bg-[#d25c41]/10 px-4 py-1.5 text-sm font-semibold text-[#f6ac55] mb-6">
            <Sparkles className="h-4 w-4" />
            Full-Funnel Growth Solutions
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Complete Digital Marketing Services Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] to-[#f6ac55]">
              High ROI &amp; Market Domination
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Turn your digital channels into predictable revenue streams. As a
            leading full-service digital marketing agency, Aksh Digital blends
            creative storytelling, search visibility, high-ROAS paid
            advertising, and conversion rate optimization to scale brands across
            Jaipur, Pan-India, the USA, and international markets.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Get a Free Marketing Strategy Session
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link
              href="#core-verticals"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xs px-8 py-4 text-sm sm:text-base font-bold text-white hover:bg-white/15 transition-all duration-300"
            >
              Explore Our Growth Channels
            </Link>
          </div>
        </div>
      </section>

      {/* ── Impact Metrics Bar ── */}
      <section className="border-b border-slate-100 bg-[#fafaf9] py-8 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            {
              num: "4.2x",
              label: "Average ROAS",
              sub: "Across Meta & Google Ads",
            },
            {
              num: "₹5Lac+",
              label: "Client Revenue",
              sub: "Generated systematically",
            },
            {
              num: "45%",
              label: "CPA Reduction",
              sub: "Funnel & CRO refinement",
            },
            {
              num: "98%",
              label: "Partner Retention",
              sub: "Month-to-month contracts",
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

      {/* ── 2. Overview: Why Your Brand Needs a Full-Funnel Digital Marketing Strategy ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41]">
                  Strategic Growth Architecture
                </span>
                <span className="h-px w-8 bg-[#d25c41]/40" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#14183e] leading-tight mb-6">
                Moving Beyond Fragmented Tactics to a{" "}
                <span className="text-[#d25c41]">Unified Growth Engine</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                Many brands struggle with digital growth because their marketing
                efforts operate in silos—developers build without considering
                user acquisition, social media teams focus on vanity likes, and
                ad agencies burn budget without fixing landing page conversion
                rates.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                As an integrated digital marketing and web development agency,
                Aksh Digital eliminates this fragmentation. We design, deploy,
                and scale holistic digital marketing solutions where technical
                web speed, organic SEO strategies, paid acquisition, and brand
                creative work together seamlessly. Whether you are an ambitious
                enterprise looking for a premier digital marketing company in
                Jaipur or an overseas business seeking an agile digital
                marketing agency USA partner, we deliver measurable, compounding
                results.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#b84d35] transition-all shadow-md"
                >
                  Schedule Your Funnel Review
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {[
                {
                  icon: Layers,
                  title: "Unified Marketing & Tech Stack",
                  desc: "Zero disconnect between front-end web engineering, analytics, and performance advertising teams.",
                },
                {
                  icon: TrendingUp,
                  title: "High-Intent Inbound Acquisition",
                  desc: "Attracting customers at peak buying intent through combined search ranking and targeted retargeting funnels.",
                },
                {
                  icon: ShieldCheck,
                  title: "Strict Unit Economics (CAC & ROAS)",
                  desc: "Every marketing rupee or dollar spent is tracked against pipeline contribution and revenue generated.",
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

      {/* ── 3. Our Core Digital Marketing Verticals ── */}
      <section
        id="core-verticals"
        className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fafaf9] border-t border-slate-100"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Comprehensive Service Grid
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Our Core Digital Marketing Verticals
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Precision execution across each revenue lever, customized to scale
              with your business stage.
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
                          Channel {vert.number}
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
                    </div>

                    <div className="md:w-60 shrink-0 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-5 md:pt-0 md:pl-8">
                      <span className="text-xs text-slate-400 font-semibold mb-2">
                        Strategic Channel
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        Tailored roadmap engineered around strict ROAS and
                        volume targets.
                      </p>
                      <Link
                        href={vert.link}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs font-bold text-[#d25c41] hover:bg-[#d25c41] hover:text-white hover:border-[#d25c41] transition-all"
                      >
                        {vert.linkText}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Tailored Execution: Hyper-Local Precision & Global Scale ── */}
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
              Delivery Framework
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Tailored Execution: Hyper-Local Precision &amp; Global Scale
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              We deploy proven digital marketing models calibrated for regional
              Indian metros and international overseas markets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Pan-India Market Dominance */}
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d25c41]/20 text-[#f6ac55]">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Pan-India Market Dominance
                    </h3>
                    <p className="text-xs text-[#f6ac55] font-semibold">
                      Jaipur HQ &amp; Metro Coverage
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Proven growth playbooks tailored for local market nuances as a
                  trusted digital marketing agency in Delhi NCR, a data-driven
                  digital marketing agency Mumbai, an agile digital marketing
                  agency Bangalore, a results-driven digital marketing company
                  in Pune, and a top digital marketing agency Indore.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                  {domesticCities.map(({ city, slug, tag }) => (
                    <Link
                      key={slug}
                      href={`/seo-services/${slug}`}
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
                <span>Domestic Indian Operations</span>
                <Link
                  href="/contact"
                  className="text-[#f6ac55] hover:underline font-semibold"
                >
                  Contact Domestic Team &rarr;
                </Link>
              </div>
            </div>

            {/* Card 2: Global Offshore Delivery */}
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6ac55]/20 text-[#f6ac55]">
                    <Globe className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Global Offshore Delivery
                    </h3>
                    <p className="text-xs text-[#f6ac55] font-semibold">
                      Serving USA, UK &amp; Worldwide
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Dedicated outsourced digital marketing services for companies
                  in the USA, UK, and worldwide, providing complete timezone
                  overlap, bi-weekly sprint reviews, and live metric tracking.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    {
                      icon: Clock,
                      title: "Dedicated Timezone Overlap",
                      desc: "Synchronized collaboration blocks covering EST, PST, and GMT.",
                    },
                    {
                      icon: Zap,
                      title: "Bi-Weekly Agile Sprints",
                      desc: "Rapid creative iteration, ad budget calibration, and roadmap reviews.",
                    },
                    {
                      icon: BarChart3,
                      title: "24/7 Live Looker Studio Dashboards",
                      desc: "Real-time visibility into traffic, acquisition costs, and closed pipeline.",
                    },
                  ].map((item, idx) => {
                    const IIcon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-3"
                      >
                        <IIcon className="h-4 w-4 text-[#f6ac55] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-white">
                            {item.title}
                          </p>
                          <p className="text-[11px] text-slate-300 leading-snug mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Global Offshore Desk</span>
                <Link
                  href="/contact"
                  className="text-[#f6ac55] hover:underline font-semibold"
                >
                  Schedule Offshore Consultation &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Our 4-Phase Growth Framework ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Systematic Execution
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Our 4-Phase Growth Framework
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              A disciplined, cyclical process designed to take your brand from
              initial audit to compounding market dominance.
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

      {/* ── 6. Why Ambitious Brands Choose Aksh Digital ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fafaf9] border-t border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Strategic Partnership
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Why Ambitious Brands Choose Aksh Digital
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Built on transparency, engineering rigor, and real commercial
              revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Complete Data Transparency",
                desc: "24/7 access to live reporting dashboards tracking traffic, pipeline leads, and return on ad spend.",
              },
              {
                icon: Layers,
                title: "Integrated Development & Marketing",
                desc: "No finger-pointing between developers and marketers—everything is handled by one unified team.",
              },
              {
                icon: ShieldCheck,
                title: "No Restrictive Lock-In Contracts",
                desc: "We believe in earning our partnership every month through tangible, measurable revenue growth.",
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
                      <CheckCircle className="h-4 w-4" /> Core Principle
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. Ready to Scale Your Brand Online? (Bottom CTA) ── */}
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
            Ready to Scale Your Brand Online?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Build Your Custom Growth Engine Today
          </h2>

          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Request a free 30-minute digital marketing audit and strategic
            roadmap with our Jaipur team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm sm:text-base font-bold text-[#d25c41] hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-0.5"
            >
              Claim Your Free Marketing Audit
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
            No obligation. Zero lock-in contracts. Full funnel and channel
            evaluation.
          </p>
        </div>
      </section>
    </div>
  );
}
