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
];

const faqs = [
  {
    question: "Can I use your services before making a purchase decision?",
    answer:
      "Yes! We offer a free consultation call where we analyse your current digital presence and present a tailored strategy. No commitment needed.",
  },
  {
    question: "What is your marketing campaign execution process?",
    answer:
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
  },
];

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 md:py-28 px-4 sm:px-6">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#d25c41]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#f6ac55]/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
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
            </Link>
          </div>
        </div>
      </section>

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
            </div>
          ))}
        </div>
      </section>

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
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#d25c41] block mb-3">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#d25c41] text-white">
                    <Plus
                      className={`h-4 w-4 transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}
                    />
                  </span>
                  <span className="text-base font-semibold text-[#14183e]">
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
                    <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed pl-[4.25rem]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
        </div>
      </section>
    </div>
  );
}
