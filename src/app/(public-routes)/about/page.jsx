import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  TrendingUp,
  BarChart3,
  Search,
  MapPin,
  MousePointerClick,
  Smartphone,
  Monitor,
  ArrowRight,
  Globe,
  Zap,
  Layers,
  Megaphone,
  CheckCircle2,
  Mail,
} from "lucide-react";

export const metadata = {
  title:
    "About Aksh Digital | Digital Marketing & Web Development Agency India",
  description:
    "Aksh Digital is a full-service digital marketing and web development agency in Jaipur. We help businesses across India, USA, and UK scale with SEO, performance ads, and modern web builds.",
  alternates: {
    canonical: "https://www.akshdigital.in/about/",
  },
};

const corePillars = [
  {
    title: "High-ROAS Performance Marketing",
    desc: "Stop wasting budget on vanity metrics. As a dedicated paid advertising agency, we manage data-backed campaigns across Google and Meta that focus on pure profitability and lower acquisition costs.",
    icon: Zap,
  },
  {
    title: "Organic Search Dominance",
    desc: "As an experienced search engine optimization marketing agency, we build sustainable organic authority through deep technical audits, semantic keyword mapping, and local Google Map rankings.",
    icon: Search,
  },
  {
    title: "Modern Web & App Development",
    desc: "We design fast, responsive platforms from scratch. Our digital builds are mobile-friendly, conversion-optimized, and engineered with Next.js, React, and Node.js.",
    icon: Layers,
  },
  {
    title: "Brand Storytelling & Social Reach",
    desc: "As a results-driven social media marketing agency, we create scroll-stopping visual assets and run engaging campaigns that transform casual followers into loyal brand advocates.",
    icon: Megaphone,
  },
];

const whyUs = [
  {
    title: "Clear, Honest Communication",
    desc: "No confusing industry jargon. You always know what we are building, why we are building it, and how it impacts your bottom line.",
  },
  {
    title: "Live, Real-Time Dashboards",
    desc: "Track your keyword rankings, traffic, ad spend, and conversion value whenever you want.",
  },
  {
    title: "Integrated Skillsets",
    desc: "You don't need five different vendors. Get your web development, SEO, and paid ad management handled under one roof.",
  },
  {
    title: "Flexible Growth Partnerships",
    desc: "We believe in earning your business every single month through performance, not restrictive long-term contracts.",
  },
];

const cityPresence = [
  {
    city: "Jaipur (HQ)",
    role: "Full-service digital marketing & web development",
  },
  { city: "Delhi NCR", role: "High-performance corporate SEO & paid ads" },
  { city: "Mumbai", role: "D2C performance marketing & enterprise web apps" },
  { city: "Bangalore", role: "Tech startup marketing & SaaS web platforms" },
  { city: "Pune", role: "Regional brand building & Google Ads campaigns" },
  { city: "Indore", role: "Local market digital growth & SEO strategy" },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pb-20 lg:pb-28 pt-5 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f0f8f6] -z-10 rounded-l-full hidden lg:block translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-semibold text-primary sm:text-[15px]">
                    About Our Agency
                  </span>
                  <span className="flex gap-1" aria-hidden>
                    <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                    <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                    <span className="h-0.5 w-2 rounded-full bg-primary/30" />
                  </span>
                </div>
                <h1 className="text-[32px] sm:text-[42px] md:text-[48px] font-semibold text-[#14183e] leading-[1.15] tracking-tight">
                  The Digital Marketing and Web Development Agency Engineering
                  Real Business Growth
                </h1>
              </div>

              <div className="space-y-5 text-gray-600 text-[15px] sm:text-base leading-relaxed">
                <p>
                  We started Aksh Digital with a simple goal: build meaningful
                  digital products and market them with complete clarity. As a
                  full-service digital agency headquartered in Jaipur, we help
                  local businesses dominate their markets while serving as a
                  trusted digital marketing agency USA and international brands
                  rely on for predictable scaling.
                </p>
                <p className="font-medium text-[#14183e] border-l-4 border-primary pl-4">
                  We are not a typical marketing company that focuses on vanity
                  metrics. Our approach is revenue-focused, conversion-oriented,
                  and strategically aligned with your business goals.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact/"
                  className="group inline-flex items-center gap-2 bg-linear-to-r from-primary to-secondary text-white px-7 py-3.5 rounded-full font-bold text-sm hover:shadow-[0_8px_25px_-5px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>Get a Free Audit</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </Link>
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 px-7 py-3.5 rounded-full font-bold text-sm hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>Our Services</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Aksh Digital Team Meeting"
                className="w-full h-full object-cover grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14183e]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story & Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[380px] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                alt="Aksh Digital strategy session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14183e]/40 to-transparent" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold text-primary sm:text-[15px]">
                  Our Story &amp; Background
                </span>
                <span className="flex gap-1" aria-hidden>
                  <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                  <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                  <span className="h-0.5 w-2 rounded-full bg-primary/30" />
                </span>
              </div>
              <h2 className="text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[38px] mb-6">
                Real People, Proven Strategies, and Measurable ROI
              </h2>
              <div className="space-y-5 text-gray-600 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Most business owners face the same frustrating problem:
                  software developers don&apos;t understand marketing funnels,
                  and marketing agencies don&apos;t understand modern code. That
                  disconnect leads to slow websites, wasted ad budgets, and poor
                  conversion rates.
                </p>
                <p>
                  Aksh Digital bridges that gap. We are a unified software and
                  digital marketing company. By bringing modern web developers
                  (Next.js, React, Node.js) under the same roof as dedicated
                  media buyers and search strategists, we build systems that
                  attract attention and turn clicks into revenue.
                </p>
                <p className="font-medium text-[#14183e] border-l-4 border-primary pl-4">
                  Whether you need a dedicated digital marketing company in
                  Jaipur, a proven performance marketing agency India, or
                  outsourced digital marketing services for your overseas
                  business, we treat your growth as our own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-10">
            <span className="text-sm font-semibold text-primary sm:text-[15px]">
              Mission &amp; Vision
            </span>
            <span className="flex gap-1" aria-hidden>
              <span className="h-0.5 w-6 rounded-full bg-primary/70" />
              <span className="h-0.5 w-4 rounded-full bg-primary/50" />
              <span className="h-0.5 w-2 rounded-full bg-primary/30" />
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-10 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-semibold text-[#14183e] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To provide transparent digital marketing solutions and scalable
                technology that lower customer acquisition costs and build
                long-term enterprise value for brands around the world.
              </p>
            </div>

            <div className="bg-[#14183e] rounded-2xl shadow-xl p-10 text-white hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                To be recognized as the best digital marketing agency in India,
                known for clear communication, technical excellence, and
                measurable return on investment.
              </p>
              <div className="bg-white/10 p-5 rounded-lg border border-white/10">
                <p className="font-semibold text-primary">
                  Aksh Digital is built on clarity, performance, and
                  accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-semibold text-primary sm:text-[15px]">
              Core Pillars
            </span>
            <span className="flex gap-1" aria-hidden>
              <span className="h-0.5 w-6 rounded-full bg-primary/70" />
              <span className="h-0.5 w-4 rounded-full bg-primary/50" />
              <span className="h-0.5 w-2 rounded-full bg-primary/30" />
            </span>
          </div>
          <h2 className="text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px] mb-12">
            How We Grow Your Business
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corePillars.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="group flex gap-5 p-7 rounded-2xl border border-slate-100 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#14183e] mb-2">
                    {title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domestic Domination & Global Reach */}
      <section className="py-20 bg-[#f8fafc] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Local presence */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold text-primary sm:text-[15px]">
                  Hyper-Local Indian Expertise
                </span>
                <span className="flex gap-1" aria-hidden>
                  <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                  <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                  <span className="h-0.5 w-2 rounded-full bg-primary/30" />
                </span>
              </div>
              <h2 className="text-[26px] font-semibold leading-tight text-[#14183e] sm:text-[32px] md:text-[36px] mb-4">
                Domestic Domination with a Global Reach
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                We understand the nuances of local Indian markets and serve
                clients spanning every major economic hub.
              </p>
              <div className="space-y-3">
                {cityPresence.map(({ city, role }) => (
                  <div
                    key={city}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-xs"
                  >
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#14183e] text-sm">
                        {city}
                      </span>
                      <span className="text-slate-500 text-sm"> — {role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Offshore */}
            <div className="bg-[#14183e] rounded-3xl p-8 sm:p-10 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold text-primary sm:text-[15px]">
                  Global Offshore Delivery
                </span>
                <span className="flex gap-1" aria-hidden>
                  <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                  <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                  <span className="h-0.5 w-2 rounded-full bg-primary/30" />
                </span>
              </div>
              <h3 className="text-[22px] sm:text-[28px] font-semibold text-white leading-tight mb-4">
                Trusted by USA &amp; UK Brands
              </h3>
              <p className="text-white/70 text-[15px] leading-relaxed mb-8">
                Looking for a reliable digital marketing agency in USA or UK
                markets? We provide flexible, cost-effective offshore
                partnerships with dedicated timezone overlap, two-week agile
                sprint cycles, and total transparency.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Dedicated timezone overlap (EST/PST & GMT)",
                  "2-week agile sprint cycles",
                  "Strict NDA & 100% IP ownership",
                  "Transparent weekly reporting",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[14px] sm:text-[15px] text-white/80 font-medium"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-secondary transition-colors"
              >
                Start a Partnership
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ambitious Brands Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-semibold text-primary sm:text-[15px]">
              Why Choose Us
            </span>
            <span className="flex gap-1" aria-hidden>
              <span className="h-0.5 w-6 rounded-full bg-primary/70" />
              <span className="h-0.5 w-4 rounded-full bg-primary/50" />
              <span className="h-0.5 w-2 rounded-full bg-primary/30" />
            </span>
          </div>
          <h2 className="text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px] mb-12">
            Why Ambitious Brands Work With Aksh Digital
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyUs.map(({ title, desc }, idx) => (
              <div
                key={title}
                className="flex items-start gap-4 p-7 rounded-2xl border border-slate-100 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#14183e] mb-2">
                    {title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-linear-to-r from-slate-900 via-[#1a2744] to-slate-900 text-white relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-primary/20 blur-[80px]" />
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-secondary/20 blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="text-sm font-semibold text-primary sm:text-[15px]">
              Ready to Scale Your Brand Online?
            </span>
            <span className="flex gap-1" aria-hidden>
              <span className="h-0.5 w-6 rounded-full bg-primary/70" />
              <span className="h-0.5 w-4 rounded-full bg-primary/50" />
              <span className="h-0.5 w-2 rounded-full bg-primary/30" />
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold leading-tight text-white mb-5">
            Let&apos;s Review Your Website, Analyze Your Competition &amp; Build
            a Custom Growth Strategy
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Let&apos;s review your website, analyze your market competition, and
            build a custom strategy to accelerate your digital growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="group inline-flex items-center gap-2 bg-linear-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-[0_8px_30px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <span>Claim Your Free Website &amp; Growth Audit</span>
              <ArrowRight
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-slate-400 text-sm">
            <Mail className="h-4 w-4 text-primary" />
            <span>hdigital9@gmail.com</span>
          </div>
        </div>
      </section>
    </div>
  );
}
