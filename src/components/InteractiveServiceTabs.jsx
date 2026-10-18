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

const serviceThemes = {
  seo: {
    cardBg: "bg-gradient-to-br from-white via-[#fffaf5] to-orange-100/40",
    border: "border-orange-200/90 hover:border-orange-400",
    shadowHover: "hover:shadow-[0_20px_45px_-10px_rgba(234,88,12,0.22)]",
    watermarkColor: "text-orange-500/10 group-hover:text-orange-500/32",
    categoryText: "text-orange-600",
    badge: "bg-orange-100/90 text-orange-800 border-orange-200",
    topBar: "bg-gradient-to-r from-orange-500 to-amber-500",
    arrowBtn:
      "bg-orange-50 border-orange-200 text-orange-600 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500",
    actionLink: "text-orange-600 group-hover:text-orange-700",
  },
  ads: {
    cardBg: "bg-gradient-to-br from-white via-[#f8faff] to-blue-100/40",
    border: "border-blue-200/90 hover:border-blue-400",
    shadowHover: "hover:shadow-[0_20px_45px_-10px_rgba(37,99,235,0.22)]",
    watermarkColor: "text-blue-500/10 group-hover:text-blue-500/32",
    categoryText: "text-blue-600",
    badge: "bg-blue-100/90 text-blue-800 border-blue-200",
    topBar: "bg-gradient-to-r from-blue-500 to-indigo-500",
    arrowBtn:
      "bg-blue-50 border-blue-200 text-blue-600 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500",
    actionLink: "text-blue-600 group-hover:text-blue-700",
  },
  dev: {
    cardBg: "bg-gradient-to-br from-white via-[#f6fdfa] to-emerald-100/40",
    border: "border-emerald-200/90 hover:border-emerald-400",
    shadowHover: "hover:shadow-[0_20px_45px_-10px_rgba(16,185,129,0.22)]",
    watermarkColor: "text-emerald-500/10 group-hover:text-emerald-500/32",
    categoryText: "text-emerald-600",
    badge: "bg-emerald-100/90 text-emerald-800 border-emerald-200",
    topBar: "bg-gradient-to-r from-emerald-500 to-teal-500",
    arrowBtn:
      "bg-emerald-50 border-emerald-200 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
    actionLink: "text-emerald-600 group-hover:text-emerald-700",
  },
  social: {
    cardBg: "bg-gradient-to-br from-white via-[#fff8fa] to-rose-100/40",
    border: "border-rose-200/90 hover:border-rose-400",
    shadowHover: "hover:shadow-[0_20px_45px_-10px_rgba(244,63,94,0.22)]",
    watermarkColor: "text-rose-500/10 group-hover:text-rose-500/32",
    categoryText: "text-rose-600",
    badge: "bg-rose-100/90 text-rose-800 border-rose-200",
    topBar: "bg-gradient-to-r from-rose-500 to-pink-500",
    arrowBtn:
      "bg-rose-50 border-rose-200 text-rose-600 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500",
    actionLink: "text-rose-600 group-hover:text-rose-700",
  },
};

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

      {/* Services Grid with Distinct Light Colors, Bold Watermark Icons & Elevation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
        {filteredServices.map((service) => {
          const Icon = service.icon;
          const theme = serviceThemes[service.id] || serviceThemes.seo;

          return (
            <div
              key={service.title}
              className={`group relative rounded-3xl border ${theme.border} ${theme.cardBg} p-7 sm:p-9 shadow-[0_4px_22px_-6px_rgba(0,0,0,0.04)] ${theme.shadowHover} hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden`}
            >
              {/* Top Gradient Highlight Line on Hover */}
              <div
                className={`absolute top-0 left-8 right-8 h-1 rounded-b-full ${theme.topBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Big, Distinctly Colored, Bold Watermark Icon in Card Background */}
              <div
                className={`absolute bottom-2 right-2 pointer-events-none select-none ${theme.watermarkColor} transition-all duration-500 transform group-hover:scale-105 group-hover:-rotate-3`}
                aria-hidden="true"
              >
                <Icon
                  className="w-56 h-56 sm:w-64 sm:h-64 -mr-4 -mb-4"
                  strokeWidth={3}
                />
              </div>

              <div className="relative z-10">
                {/* Header row with Category, Badge, Title and Circular Action Button */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1 pr-2">
                    {/* Category Label & Metric Tag */}
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider ${theme.categoryText}`}
                      >
                        {service.category}
                      </span>
                      <span className="inline-block w-1 h-1 rounded-full bg-slate-300" />
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border shadow-2xs ${theme.badge}`}
                      >
                        <TrendingUp className="w-3 h-3" />
                        {service.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Circular Arrow Link */}
                  <Link
                    href={service.href}
                    className={`shrink-0 w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-105 ${theme.arrowBtn}`}
                    aria-label={service.title}
                  >
                    <ArrowRight
                      className="h-5 w-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                      strokeWidth={2.2}
                    />
                  </Link>
                </div>

                {/* Summary Description */}
                <p className="mt-3 text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
                  {service.summary}
                </p>

                {/* Key Focus */}
                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Key Focus:
                  </p>
                  <p className="text-xs sm:text-[13.5px] font-semibold text-slate-800 leading-snug">
                    {service.keyFocus}
                  </p>
                </div>
              </div>

              {/* Bottom Footer Actions */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between relative z-10">
                <Link
                  href={service.href}
                  className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${theme.actionLink} transition-all`}
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </Link>
                <Link
                  href="/contact/"
                  className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Book Strategy Call →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
