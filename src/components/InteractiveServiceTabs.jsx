"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Zap,
  Layers,
  Megaphone,
  CheckCircle2,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const serviceData = [
  {
    id: "seo",
    category: "Search & SEO",
    title: "Search Engine Optimization (SEO Domination)",
    badge: "+320% Avg Visibility",
    summary:
      "Rank on Page 1 for high-intent national, global, and local search queries. We cover technical audits, semantic keyword mapping, high-authority link acquisition, and localized Google Map pack rankings.",
    keyFocus:
      "Local SEO (Jaipur & Indian Metros), Enterprise National SEO, and International E-Commerce Search Strategy.",
    deliverables: [
      "Technical Core Web Vitals Audit & Schema Markup",
      "High-Intent Semantic Keyword Clusters",
      "High-Authority Editorial Link Building",
      "Google Business Profile & Map Pack Domination",
    ],
    href: "/services/seo/",
    icon: Search,
    accentColor: "from-orange-500/10 to-amber-500/10",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
  },
  {
    id: "ads",
    category: "Paid Ads & ROAS",
    title: "Performance Marketing & Paid Media",
    badge: "4.3x Blended ROAS",
    summary:
      "Eliminate wasted ad spend. We create, test, and optimize high-converting Google Search, Performance Max, Meta, and LinkedIn ad campaigns engineered for strict revenue targets.",
    keyFocus:
      "Google Ads, Meta Ads (Facebook & Instagram), B2B LinkedIn Marketing, Multi-Tier Retargeting.",
    deliverables: [
      "High-Converting Ad Creatives & Video Variations",
      "Server-Side Conversion API (CAPI) Tracking",
      "ROAS-Focused Budget Allocation & Scaling",
      "Automated Retargeting & Cart Recovery Funnels",
    ],
    href: "/services/performance-marketing/",
    icon: Zap,
    accentColor: "from-amber-500/10 to-yellow-500/10",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
  },
  {
    id: "dev",
    category: "Web & Mobile Engineering",
    title: "Web & Mobile App Development",
    badge: "Sub-Second Load Times",
    summary:
      "Modern, ultra-fast, and responsive digital products built with Next.js, React, Node.js, and mobile frameworks. Designed for seamless user experience and maximum conversion rates.",
    keyFocus:
      "Custom Web Apps, Corporate Websites, Headless E-Commerce, iOS & Android Apps.",
    deliverables: [
      "Next.js App Router & Server Components",
      "Ultra-Fast Tailwind CSS & Mobile-First UX",
      "PostgreSQL, MongoDB & Secure Cloud APIs",
      "100% IP Code Ownership & Clean Architecture",
    ],
    href: "/services/web-development/",
    icon: Layers,
    accentColor: "from-blue-500/10 to-indigo-500/10",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    id: "social",
    category: "Social Media & Brand",
    title: "Social Media Marketing & Brand Building",
    badge: "Viral Reach & Engagement",
    summary:
      "Elevate your brand narrative with thumb-stopping creative design, short-form video reels, community management, and data-backed viral social distribution.",
    keyFocus:
      "Multi-Platform Management, Creative Video Strategy, Social Ads, Brand Identity Systems.",
    deliverables: [
      "Thumb-Stopping Reels & Motion Graphics",
      "Omnichannel Editorial Content Calendars",
      "Influencer Collabs & UGC Content Strategy",
      "Reputation & Active Community Management",
    ],
    href: "/services/social-media-marketing/",
    icon: Megaphone,
    accentColor: "from-rose-500/10 to-pink-500/10",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
  },
];

const categoryTabs = [
  { id: "all", label: "All Capabilities" },
  { id: "seo", label: "Search & SEO" },
  { id: "ads", label: "Paid Ads & ROAS" },
  { id: "dev", label: "Web Engineering" },
  { id: "social", label: "Social & Brand" },
];

export default function InteractiveServiceTabs() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredServices =
    activeTab === "all"
      ? serviceData
      : serviceData.filter((service) => service.id === activeTab);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
        {categoryTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-md scale-105"
                  : "bg-white/80 text-slate-600 border border-slate-200 hover:border-primary/40 hover:bg-white hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Services Grid with Light Gradient Backgrounds & Hover Elevation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredServices.map((service, idx) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className={`group relative rounded-3xl border border-slate-200/90 bg-linear-to-br from-white via-[#faf9f6] to-orange-50/20 p-7 sm:p-9 shadow-sm hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
            >
              {/* Top Gradient Highlight Bar */}
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-linear-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header row with Icon, Badge, and Action Link */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                      <Icon className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold border ${service.badgeColor}`}
                    >
                      <TrendingUp className="w-3 h-3" />
                      {service.badge}
                    </span>
                  </div>

                  <Link
                    href={service.href}
                    className="text-slate-400 group-hover:text-primary transition-colors h-10 w-10 rounded-full flex items-center justify-center group-hover:bg-primary/10"
                    aria-label={service.title}
                  >
                    <ArrowRight
                      className="h-5 w-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                      strokeWidth={2.5}
                    />
                  </Link>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  {service.summary}
                </p>

                {/* Key Deliverables Bullet Pills */}
                <div className="mt-5 space-y-2">
                  {service.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Key Focus:
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    {service.keyFocus}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 flex items-center justify-between">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary group-hover:underline"
                >
                  <span>Learn More</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform"
                    strokeWidth={2.5}
                  />
                </Link>
                <Link
                  href="/contact/"
                  className="text-[11px] font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Book Consultation →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
