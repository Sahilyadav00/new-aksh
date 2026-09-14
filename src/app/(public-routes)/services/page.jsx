"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Plus,
  Search,
  Megaphone,
  Share2,
  Globe,
  Palette,
  CheckCircle2,
  Check,
  TrendingUp,
  Award,
  Users,
  BarChart3,
  Star,
  Clock,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  Zap,
  Code2,
  Target,
  Layers,
  Laptop,
} from "lucide-react";

const servicesData = [
  {
    id: "seo",
    slug: "seo",
    badge: "Organic Visibility & Search Authority",
    headline: "Dominate Page 1 Rankings with a Top Search Engine Optimization Marketing Agency",
    overview:
      "Stop settling for low-intent traffic. Our SEO strategies focus on driving qualified organic leads and high-converting buyers directly to your digital doorstep.",
    icon: Search,
    color: "from-[#d25c41] to-[#f6ac55]",
    bg: "bg-orange-50",
    coreCapabilities: [
      {
        title: "Technical SEO & Architecture",
        desc: "Core Web Vitals optimization, server-side rendering support, and crawlability improvements.",
      },
      {
        title: "Local Search Marketing Agency Solutions",
        desc: "Google Business Profile scaling and localized map-pack ranking across Jaipur, Delhi NCR, Mumbai, and tier-1 Indian metros.",
      },
      {
        title: "Enterprise & E-Commerce SEO",
        desc: "High-intent keyword mapping, competitive content gap analysis, and white-hat digital PR link building.",
      },
    ],
    targetMarkets: ["Local (Jaipur)", "National (India-wide)", "International (USA, UK, Worldwide)"],
    linkText: "Explore SEO Strategies",
  },
  {
    id: "ads",
    slug: "performance-marketing",
    badge: "High-ROAS Paid Acquisition",
    headline: "Scale Ad Revenue with a Proven Performance Marketing Agency India",
    overview:
      "Eliminate wasted ad spend with targeted ad campaigns engineered for strict customer acquisition cost (CAC) and return on ad spend (ROAS) targets.",
    icon: Target,
    color: "from-blue-600 to-indigo-600",
    bg: "bg-blue-50",
    coreCapabilities: [
      {
        title: "Google Ads Management",
        desc: "High-intent Search Ads, Performance Max campaigns, Shopping feeds, and YouTube video ads.",
      },
      {
        title: "Meta Ads (Facebook & Instagram)",
        desc: "Creative testing funnels, audience lookalikes, dynamic product ads, and multi-tier retargeting.",
      },
      {
        title: "B2B Paid Acquisition",
        desc: "Lead generation and account-based marketing (ABM) on LinkedIn and programmatic ad networks.",
      },
      {
        title: "Analytics & Server-Side Tracking",
        desc: "Accurate attribution modeling via Google Tag Manager and Conversions API (CAPI).",
      },
    ],
    targetMarkets: ["D2C Brands", "B2B SaaS & Tech", "Local & Multi-City Services"],
    linkText: "Explore Performance Marketing",
  },
  {
    id: "dev",
    slug: "web-development",
    badge: "Modern Engineering & CRO",
    headline: "Fast, Scalable Products from a Leading Web Development and Digital Marketing Company",
    overview:
      "We design and build ultra-fast, responsive web and mobile applications from the ground up, turning visitors into long-term customers.",
    icon: Code2,
    color: "from-emerald-600 to-teal-600",
    bg: "bg-emerald-50",
    coreCapabilities: [
      {
        title: "Modern Web Frameworks",
        desc: "High-performance web builds powered by Next.js, React, and Node.js.",
      },
      {
        title: "Mobile App Development",
        desc: "Cross-platform iOS and Android mobile solutions built for speed, security, and intuitive UX.",
      },
      {
        title: "Headless E-Commerce",
        desc: "Custom Shopify and headless commerce architectures built for rapid checkout and zero friction.",
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        desc: "Data-backed UI/UX wireframing, A/B landing page testing, and heat-map analytics.",
      },
    ],
    targetMarkets: ["Fast-Growing Startups", "E-Commerce Stores", "Enterprise Platforms"],
    linkText: "Explore Web Engineering",
  },
  {
    id: "social",
    slug: "social-media-marketing",
    badge: "Audience Engagement & Brand Equity",
    headline: "Transform Followers into Brand Advocates with a Premier Social Media Marketing Agency in India",
    overview:
      "Build a lasting, recognizable brand identity that commands attention across crowded feeds.",
    icon: Share2,
    color: "from-pink-600 to-rose-600",
    bg: "bg-pink-50",
    coreCapabilities: [
      {
        title: "Content Strategy & Storytelling",
        desc: "High-retention short-form video concepts (Reels/Shorts), carousel design, and thought-leadership copy.",
      },
      {
        title: "Community Management",
        desc: "Active social listening, audience interaction, and reputation management.",
      },
      {
        title: "Paid Social Synergy",
        desc: "Aligning organic brand storytelling with high-converting social media advertising funnels.",
      },
    ],
    targetMarkets: ["Consumer Brands", "Personal Brands & Founders", "B2B Social Thought Leadership"],
    linkText: "Explore Social Media Services",
  },
  {
    id: "design",
    slug: "graphic-design",
    badge: "Visual Identity & Creative Strategy",
    headline: "Visual Assets That Command Attention and Inspire Trust",
    overview:
      "Stand out in competitive markets with cohesive visual branding designed for modern digital consumption.",
    icon: Palette,
    color: "from-violet-600 to-purple-600",
    bg: "bg-violet-50",
    coreCapabilities: [
      {
        title: "Brand Identity Kits",
        desc: "Logo design, visual guidelines, typography, and color systems.",
      },
      {
        title: "High-Converting Ad Creatives",
        desc: "Performance-focused static and motion graphics designed to lower ad fatigue.",
      },
      {
        title: "Marketing Collateral",
        desc: "Pitch decks, brochures, landing page graphics, and sales enablement assets.",
      },
    ],
    targetMarkets: ["Emerging Brands", "Performance Advertisers", "Corporate Rebranding"],
    linkText: "Explore Creative Design",
  },
];

const domesticCities = [
  { city: "Jaipur (HQ)", slug: "jaipur", tag: "Headquarters" },
  { city: "Delhi NCR", slug: "delhi", tag: "Metro Hub" },
  { city: "Mumbai", slug: "mumbai", tag: "Financial Hub" },
  { city: "Bangalore", slug: "bangalore", tag: "Tech Capital" },
  { city: "Pune", slug: "pune", tag: "Growth Center" },
  { city: "Indore", slug: "indore", tag: "Tier-2 Leader" },
];

const whyUsPoints = [
  {
    icon: Layers,
    title: "No Disjointed Teams",
    desc: "Get your software engineering, SEO, and paid ad management handled under one unified roof.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Data Transparency",
    desc: "Live KPI dashboards tracking rankings, ad spend efficiency, pipeline value, and return on investment.",
  },
  {
    icon: ShieldCheck,
    title: "Performance-Driven Partnerships",
    desc: "No rigid lock-in contracts; we earn your partnership every month through measurable business growth.",
  },
];

const faqs = [
  {
    question: "Can I use your services before making a purchase decision?",
    answer:
      "Yes! We offer a free 30-minute consultation call and preliminary audit where we analyse your current digital presence, search rankings, or ad accounts, and present a tailored roadmap with zero commitment.",
  },
  {
    question: "How do you coordinate with international clients in the USA or UK?",
    answer:
      "We operate an agile offshore delivery model with dedicated daily timezone overlap (EST, PST, GMT). We manage sprint communications via Slack and Google Meet, providing weekly reviews and 24/7 access to live reporting dashboards.",
  },
  {
    question: "What is your marketing campaign execution process?",
    answer:
      "We follow a two-week agile sprint framework: audit & benchmark, strategy blueprint, technical setup & tracking validation, iterative creative deployment, and real-time performance optimization.",
  },
  {
    question: "Are your ad management fees separate from media spend?",
    answer:
      "Yes, 100% of your advertising budget goes directly to the advertising platforms (Google Ads, Meta Ads) via your company billing account. Our management fee is transparent, fixed or tiered, with zero hidden markups.",
  },
  {
    question: "Do your web development services include technical SEO and CRO?",
    answer:
      "Every web application engineered by our team includes server-side rendering, semantic schema markup, Core Web Vitals optimization, and conversion-focused UI/UX right out of the box.",
  },
];

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* ── 1. Hero Section ── */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 md:py-28 px-4 sm:px-6">
        {/* Decorative Blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#d25c41]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#f6ac55]/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#f6ac55]">Services</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#d25c41]/30 bg-[#d25c41]/10 px-4 py-1.5 text-sm font-semibold text-[#f6ac55] mb-6">
            <Sparkles className="h-4 w-4" />
            Full-Spectrum Growth & Engineering
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Scalable Digital Marketing Services Built to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] to-[#f6ac55]">
              Acquire, Convert, and Retain
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            As a full service digital marketing agency, Aksh Digital unites modern software engineering with data-backed media buying. From our headquarters as a trusted digital marketing company in Jaipur to high-growth enterprises seeking an agile digital marketing agency USA partner, we deliver transparent, revenue-driven complete digital marketing solutions.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Schedule a Free Discovery Call
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link
              href="#services-overview"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xs px-8 py-4 text-sm sm:text-base font-bold text-white hover:bg-white/15 transition-all duration-300"
            >
              Explore Services Grid
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust Metrics Bar ── */}
      <section className="border-b border-slate-100 bg-white py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { label: "200+ Projects", desc: "Delivered Pan-India & Global" },
            { label: "3.4x Average ROAS", desc: "Performance Ad Spend" },
            { label: "98% Client Retention", desc: "Month-to-Month Partnerships" },
            { label: "Zero Lock-In", desc: "Agile Two-Week Sprints" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-slate-50 transition-colors">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#14183e] mb-1">
                {stat.label}
              </span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. Services Overview Grid ── */}
      <section id="services-overview" className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#d25c41]/40" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#d25c41]">
                Complete Capabilities
              </span>
              <span className="h-px w-8 bg-[#d25c41]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Services Overview Grid
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Every service is engineered as a high-performance growth channel, integrating seamlessly with your broader revenue strategy.
            </p>
          </div>

          <div className="space-y-10 sm:space-y-12">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xs hover:shadow-xl hover:border-[#d25c41]/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8">
                    {/* Left Column: Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-bold text-[#d25c41]">
                          <Icon className="h-3.5 w-3.5" />
                          {service.badge}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          Channel 0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#14183e] leading-snug mb-4">
                        {service.headline}
                      </h3>

                      <p className="text-slate-600 text-base leading-relaxed mb-6">
                        {service.overview}
                      </p>

                      {/* Core Capabilities */}
                      <div className="mt-6 border-t border-slate-100 pt-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                          Core Capabilities:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.coreCapabilities.map((cap, capIdx) => (
                            <div
                              key={capIdx}
                              className="rounded-2xl bg-[#fafaf9] border border-slate-100 p-4 transition-colors hover:bg-orange-50/40 hover:border-orange-200/60"
                            >
                              <div className="flex items-start gap-2.5">
                                <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d25c41] text-white">
                                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                                </span>
                                <div>
                                  <h5 className="text-sm font-bold text-[#14183e]">
                                    {cap.title}
                                  </h5>
                                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    {cap.desc}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Target Markets */}
                      {service.targetMarkets && (
                        <div className="mt-6 flex flex-wrap items-center gap-2 pt-2">
                          <span className="text-xs font-bold text-slate-500 mr-2">
                            Target Markets:
                          </span>
                          {service.targetMarkets.map((market, mIdx) => (
                            <span
                              key={mIdx}
                              className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                            >
                              {market}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right Column: CTA Box */}
                    <div className="lg:w-72 shrink-0 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8">
                      <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-orange-50/30 p-5 border border-slate-100">
                        <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.bg} mb-4`}>
                          <Icon className="h-6 w-6 text-[#d25c41]" />
                        </span>
                        <h4 className="text-base font-bold text-[#14183e] mb-1">
                          Tailored Execution
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed mb-4">
                          Customized deliverables with dedicated account direction and transparent ROI reporting.
                        </p>
                        <Link
                          href={`/services/${service.slug}/`}
                          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-[#d25c41] border border-slate-200 hover:bg-[#d25c41] hover:text-white hover:border-[#d25c41] shadow-xs transition-all duration-300"
                        >
                          {service.linkText}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>

                      <div className="mt-4 text-center">
                        <Link
                          href="/contact/"
                          className="text-xs font-semibold text-slate-500 hover:text-[#d25c41] transition-colors"
                        >
                          Request Custom Scope &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Global Offshore & Domestic Delivery Framework ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#0f1535] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-[#f6ac55] mb-4">
              <Globe className="h-3.5 w-3.5" />
              Delivery Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Global Offshore &amp; Domestic Delivery Framework
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Engineered to serve dynamic regional businesses across India and enterprise brands worldwide with agile collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Hyper-Local Indian Reach */}
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d25c41]/20 text-[#f6ac55]">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Hyper-Local Indian Reach
                    </h3>
                    <p className="text-xs text-[#f6ac55] font-semibold">
                      Pan-India Metro Presence
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  We provide customized campaigns as a leading digital marketing agency in Delhi NCR, a data-driven digital marketing agency Mumbai, an agile digital marketing agency Bangalore, a results-oriented digital marketing company in Pune, and a top digital marketing agency Indore.
                </p>

                {/* City Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
                  {domesticCities.map(({ city, slug, tag }) => (
                    <Link
                      key={slug}
                      href={`/seo-services/${slug}`}
                      className="group flex flex-col p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-[#d25c41] hover:border-[#d25c41] transition-all duration-300"
                    >
                      <span className="text-xs font-bold text-white group-hover:text-white flex items-center justify-between">
                        {city}
                        <ArrowRight className="h-3 w-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </span>
                      <span className="text-[10px] text-slate-400 group-hover:text-white/80 mt-0.5">
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Headquarters: Jaipur, Rajasthan</span>
                <Link href="/contact" className="text-[#f6ac55] hover:underline font-semibold">
                  Contact Domestic Desk &rarr;
                </Link>
              </div>
            </div>

            {/* Card 2: Global Offshore Model */}
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6ac55]/20 text-[#f6ac55]">
                    <Globe className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Global Offshore Model
                    </h3>
                    <p className="text-xs text-[#f6ac55] font-semibold">
                      Serving USA, UK &amp; Worldwide
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  We offer flexible outsourced digital marketing services for international brands in the USA, UK, and worldwide, complete with overlapping timezone communication, transparent bi-weekly sprints, and real-time live reporting.
                </p>

                {/* Offshore Highlights */}
                <div className="space-y-3 mb-8">
                  {[
                    {
                      icon: Clock,
                      title: "Dedicated Timezone Overlap",
                      desc: "Synchronized communication blocks covering EST, PST, and GMT for agile execution.",
                    },
                    {
                      icon: Zap,
                      title: "Two-Week Agile Sprints",
                      desc: "Iterative roadmaps, rapid asset delivery, and continuous A/B test feedback loops.",
                    },
                    {
                      icon: BarChart3,
                      title: "24/7 Live KPI Dashboards",
                      desc: "Full Looker Studio access tracking organic search, blended CAC, and campaign ROAS.",
                    },
                  ].map((feature, fIdx) => {
                    const FIcon = feature.icon;
                    return (
                      <div key={fIdx} className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-3">
                        <FIcon className="h-4 w-4 text-[#f6ac55] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-white">{feature.title}</p>
                          <p className="text-[11px] text-slate-300 leading-snug mt-0.5">{feature.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-slate-400">
                <span>International Delivery Desk</span>
                <Link href="/contact" className="text-[#f6ac55] hover:underline font-semibold">
                  Book International Briefing &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Why Choose Our Digital Marketing Solutions? ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#d25c41] block mb-3">
              The Aksh Digital Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Why Choose Our Digital Marketing Solutions?
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              We eliminate the traditional friction between engineering and media buying to build predictable growth engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUsPoints.map((point, idx) => {
              const PIcon = point.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200/90 bg-[#fafaf9] p-8 sm:p-9 hover:border-[#d25c41]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d25c41]/10 text-[#d25c41] mb-6">
                      <PIcon className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h3 className="text-xl font-bold text-[#14183e] mb-3">
                      {point.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-200/60">
                    <span className="text-xs font-bold text-[#d25c41] uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Guaranteed Standard
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. FAQs Section ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fafaf9] border-t border-slate-100">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#d25c41] block mb-3">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-[#d25c41]">
                    <Plus
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openIndex === index ? "rotate-45 text-[#d25c41]" : ""
                      }`}
                    />
                  </span>
                  <span className="text-base font-bold text-[#14183e]">
                    {faq.question}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-slate-600 text-sm leading-relaxed pl-[4.25rem]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Bottom CTA: Ready to Accelerate Your Digital Growth? ── */}
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
            Ready to Accelerate Your Digital Growth?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Build a Custom Roadmap for Your Brand
          </h2>

          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Book a free 30-minute growth and technical audit with our Jaipur team to evaluate your current digital presence and discover high-value conversion opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm sm:text-base font-bold text-[#d25c41] hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-0.5"
            >
              Claim Your Free Growth Audit
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
            No obligation. Zero lock-in contracts. 100% actionable insights.
          </p>
        </div>
      </section>
    </div>
  );
}
