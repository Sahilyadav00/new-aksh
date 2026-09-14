"use client";
<<<<<<< HEAD
=======

>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Plus,
  Search,
  Megaphone,
  Share2,
  Globe,
<<<<<<< HEAD
  Smartphone,
  TrendingUp,
  CheckCircle,
  Star,
  Users,
  Award,
  BarChart3,
} from "lucide-react";

// export const metadata = {
//   title: "Our Services | SEO, Digital Marketing & Web Development — Aksh Digital",
//   description:
//     "Aksh Digital offers expert SEO strategies, digital marketing, social media management, web development, app development, and performance marketing services across India.",
// };

const services = [
  {
    icon: Search,
    title: "SEO Strategies",
    slug: "seo-strategies",
    description:
      "Dominate search rankings with data-driven SEO strategies that drive organic traffic, boost visibility, and generate qualified leads for your business.",
    tags: ["On-Page SEO", "Technical SEO", "Link Building"],
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Full-funnel digital marketing campaigns that connect your brand with the right audience at the right moment — from awareness to conversion.",
    tags: ["Google Ads", "PPC", "Email Marketing"],
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50",
  },
  {
    icon: Share2,
    title: "Social Media",
    slug: "social-media",
    description:
      "Build an engaged community and amplify your brand voice across Instagram, Facebook, LinkedIn, and more with compelling content strategies.",
    tags: ["Content Creation", "Community Mgmt", "Paid Social"],
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
  },
  {
    icon: Globe,
    title: "Web Development",
    slug: "web-development",
    description:
      "High-performance, SEO-friendly websites built with modern frameworks. Fast, secure, and crafted to convert visitors into customers.",
    tags: ["Next.js", "React", "WordPress"],
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Smartphone,
    title: "App Development",
    slug: "app-development",
    description:
      "Native and cross-platform mobile apps that deliver seamless user experiences on iOS and Android, built for scale and performance.",
    tags: ["React Native", "Flutter", "iOS & Android"],
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    slug: "performance-marketing",
    description:
      "ROI-focused paid campaigns across Google, Meta, and more. Every rupee spent is tracked, optimised, and turned into measurable results.",
    tags: ["Meta Ads", "Google Ads", "Retargeting"],
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
  },
];

const whyUs = [
  { icon: Award, label: "5+ Years Experience", value: "Proven track record" },
  { icon: Users, label: "200+ Happy Clients", value: "Across India" },
  { icon: BarChart3, label: "3x Average ROI", value: "Delivered consistently" },
  { icon: Star, label: "Google Partner", value: "Certified expertise" },
=======
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
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
];

const faqs = [
  {
    question: "Can I use your services before making a purchase decision?",
    answer:
<<<<<<< HEAD
      "Yes! We offer a free consultation call where we analyse your current digital presence and present a tailored strategy. No commitment needed.",
=======
      "Yes! We offer a free 30-minute consultation call and preliminary audit where we analyse your current digital presence, search rankings, or ad accounts, and present a tailored roadmap with zero commitment.",
  },
  {
    question: "How do you coordinate with international clients in the USA or UK?",
    answer:
      "We operate an agile offshore delivery model with dedicated daily timezone overlap (EST, PST, GMT). We manage sprint communications via Slack and Google Meet, providing weekly reviews and 24/7 access to live reporting dashboards.",
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
  },
  {
    question: "What is your marketing campaign execution process?",
    answer:
<<<<<<< HEAD
      "We build web-based reporting dashboards that act as a single client portal from which all your digital marketing analytics are reported, giving you 24/7 access to campaign performance.",
  },
  {
    question: "What does your new client onboarding process consist of?",
    answer:
      "Our onboarding includes an initial consultation, audit of existing assets, setup of reporting dashboards, and a walkthrough of your customised strategy — all within 5 business days.",
  },
  {
    question: "What kind of reports will I receive?",
    answer:
      "You will receive comprehensive weekly and monthly reports detailing campaign performance, key metrics, and actionable insights so you're always in the loop.",
  },
  {
    question: "Do you work with businesses outside Jaipur?",
    answer:
      "Absolutely. We serve clients pan-India and internationally. Our team operates remotely and we have experience working across diverse markets.",
=======
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
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
  },
];

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
<<<<<<< HEAD
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 md:py-28 px-4 sm:px-6">
        {/* decorative blobs */}
=======
      {/* ── 1. Hero Section ── */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 md:py-28 px-4 sm:px-6">
        {/* Decorative Blobs */}
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#d25c41]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#f6ac55]/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
<<<<<<< HEAD
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d25c41]/30 bg-[#d25c41]/10 px-4 py-1.5 text-sm font-semibold text-[#f6ac55] mb-6">
            <Star className="h-3.5 w-3.5 fill-[#f6ac55]" />
            What We Offer
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Services That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] to-[#f6ac55]">
              Drive Real Results
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From search visibility to stunning apps — we craft digital
            experiences that grow your brand and accelerate your revenue.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-3.5 text-sm font-bold text-white shadow-lg hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300"
            >
              Explore Services
=======
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
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* ── Stats strip ── */}
      <section className="border-b border-slate-100 bg-white py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {whyUs.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d25c41]/10">
                <Icon className="h-5 w-5 text-[#d25c41]" strokeWidth={2} />
              </span>
              <p className="text-lg sm:text-xl font-bold text-[#14183e]">{label}</p>
              <p className="text-sm text-slate-500">{value}</p>
=======
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
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            </div>
          ))}
        </div>
      </section>

<<<<<<< HEAD
      {/* ── Services Grid ── */}
      <section id="services" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#d25c41]/40" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#d25c41]">
                Our Services
              </span>
              <span className="h-px w-8 bg-[#d25c41]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#14183e] leading-tight">
              Everything You Need to
              <br className="hidden sm:block" />
              <span className="text-[#d25c41]"> Grow Digitally</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base leading-relaxed">
              A complete suite of digital services crafted to take your business
              from where it is to where it deserves to be.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {services.map(({ icon: Icon, title, slug, description, tags, color, bg }) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* hover gradient overlay */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl`}
                />

                {/* Icon */}
                <span className={`flex h-14 w-14 items-center justify-center rounded-xl ${bg} mb-5`}>
                  <Icon className={`h-7 w-7 bg-gradient-to-br ${color} text-transparent`} strokeWidth={2} style={{ stroke: "url(#grad)" }} />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d25c41" />
                        <stop offset="100%" stopColor="#f6ac55" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>

                <h3 className="text-xl font-bold text-[#14183e] mb-3 group-hover:text-[#d25c41] transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-5">
                  {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-full bg-slate-100 px-3 py-0.5 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-[#d25c41] group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── City SEO Quick Links ── */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-[#0f1535]">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Local SEO Services Across India
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-8">
            We offer city-specific SEO strategies to help you dominate local search results.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { city: "Jaipur", slug: "jaipur" },
              { city: "Delhi", slug: "delhi" },
              { city: "Mumbai", slug: "mumbai" },
              { city: "Pune", slug: "pune" },
              { city: "Bangalore", slug: "bangalore" },
              { city: "Indore", slug: "indore" },
            ].map(({ city, slug }) => (
              <Link
                key={slug}
                href={`/seo-services/${slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white hover:bg-[#d25c41] hover:border-[#d25c41] transition-all duration-300"
              >
                SEO in {city}
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold text-[#d25c41]">Why Aksh Digital</span>
              <span className="h-px w-8 bg-[#d25c41]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] leading-tight mb-6">
              We Don't Just Run Campaigns —{" "}
              <span className="text-[#d25c41]">We Build Growth Engines</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Our approach is rooted in data, creativity, and a relentless focus
              on your business outcomes. We are not just another agency — we are
              your dedicated growth partner.
            </p>
            <ul className="space-y-4">
              {[
                "Transparent, real-time reporting dashboards",
                "Dedicated account manager for every client",
                "No long-term lock-in — month-to-month contracts",
                "Results-first philosophy with measurable KPIs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#d25c41] mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-slate-700 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#b84d35] transition-colors"
            >
              Start Your Growth Journey
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "200+", label: "Projects Delivered" },
              { num: "98%", label: "Client Retention Rate" },
              { num: "5x", label: "Average Traffic Growth" },
              { num: "₹50Cr+", label: "Revenue Generated for Clients" },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-100 bg-[#fafaf9] p-6 sm:p-8 text-center hover:border-[#d25c41]/30 hover:shadow-md transition-all duration-300"
              >
                <p className="text-3xl sm:text-4xl font-bold text-[#d25c41]">{num}</p>
                <p className="mt-2 text-sm font-medium text-slate-600 leading-snug">{label}</p>
              </div>
            ))}
=======
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
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* ── FAQ ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#d25c41] block mb-3">
              Got Questions?
=======
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
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
<<<<<<< HEAD
                className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
=======
                className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden"
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left"
                  aria-expanded={openIndex === index}
                >
<<<<<<< HEAD
                  <span className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#d25c41] text-white">
                    <Plus
                      className={`h-4 w-4 transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}
                    />
                  </span>
                  <span className="text-base font-semibold text-[#14183e]">
=======
                  <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-[#d25c41]">
                    <Plus
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openIndex === index ? "rotate-45 text-[#d25c41]" : ""
                      }`}
                    />
                  </span>
                  <span className="text-base font-bold text-[#14183e]">
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
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
<<<<<<< HEAD
                    <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed pl-[4.25rem]">
=======
                    <p className="px-6 pb-6 text-slate-600 text-sm leading-relaxed pl-[4.25rem]">
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* ── Bottom CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#d25c41] to-[#b84d35] py-16 sm:py-20 px-4 sm:px-6 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Supercharge Your Digital Presence?
          </h2>
          <p className="text-white/80 text-base mb-8">
            Get a free strategy call with our experts — no commitment, no fluff.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#d25c41] hover:bg-slate-50 transition-colors shadow-lg"
          >
            Book a Free Call Today
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
=======
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
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
        </div>
      </section>
    </div>
  );
}
