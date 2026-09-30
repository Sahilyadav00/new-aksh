"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Target,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const sectors = [
  { id: "d2c", label: "D2C & E-Commerce", multiplier: "3.8x - 5.2x", timeline: "45-60 Days" },
  { id: "b2b", label: "B2B & SaaS Tech", multiplier: "+280% Inbound", timeline: "60-90 Days" },
  { id: "local", label: "Local & Regional Clinic", multiplier: "Page 1 Map Pack", timeline: "30-45 Days" },
  { id: "enterprise", label: "Corporate Enterprise", multiplier: "+420% Organic", timeline: "90 Days" },
];

const goals = [
  { id: "roas", label: "Scale Paid Ads & Maximize ROAS" },
  { id: "seo", label: "Dominate Google Page 1 Search" },
  { id: "web", label: "Launch Ultra-Fast Next.js Web App" },
  { id: "brand", label: "Omnichannel Viral Brand Growth" },
];

const strategies = {
  "d2c-roas": {
    badge: "E-Commerce ROAS Accelerator",
    strategy: "Meta Ads + Google Shopping (PMax) + Server-Side Conversion API (CAPI) + Abandoned Funnel Retargeting.",
    kpi: "Projected 3.8x - 4.5x blended ROAS within 60 days.",
  },
  "d2c-seo": {
    badge: "E-Commerce Search Domination",
    strategy: "Product schema optimization, commercial keyword clustering, high-authority backlink outreach, and Core Web Vitals speed tuning.",
    kpi: "Estimated +310% non-brand organic revenue.",
  },
  "d2c-web": {
    badge: "Headless E-Commerce Architecture",
    strategy: "Next.js App Router, sub-second checkout speeds, seamless Stripe/Razorpay checkout, and mobile-first micro-interactions.",
    kpi: "Estimated 2.2x increase in checkout conversion rate.",
  },
  "d2c-brand": {
    badge: "Viral Social Commerce",
    strategy: "Thumb-stopping UGC video reels, micro-influencer seeding, Instagram Shop synchronization, and brand storytelling.",
    kpi: "Estimated +400k qualified video views/month.",
  },
  "b2b-roas": {
    badge: "High-Intent B2B Pipeline",
    strategy: "LinkedIn Sponsored InMail, Google Search high-intent keyword capture, and account-based retargeting funnels.",
    kpi: "Estimated 40% reduction in Cost Per Qualified Lead (CPL).",
  },
  "b2b-seo": {
    badge: "Enterprise SaaS Search Authority",
    strategy: "Technical documentation SEO, programmatic comparison landing pages, thought leadership, and topical authority maps.",
    kpi: "Projected Page 1 ranking for primary industry search terms.",
  },
  "b2b-web": {
    badge: "Modern Full-Stack SaaS Portal",
    strategy: "Next.js, React, Node.js, PostgreSQL cloud infrastructure with role-based auth, dashboard UX, and enterprise-grade security.",
    kpi: "Sub-second dashboard load time & 99.9% uptime SLA.",
  },
  "b2b-brand": {
    badge: "B2B Authority & Thought Leadership",
    strategy: "Executive personal branding on LinkedIn, newsletter growth funnels, case study whitepapers, and viral tech infographics.",
    kpi: "Position brand as the recognized top-tier industry authority.",
  },
  "local-roas": {
    badge: "Hyper-Local Lead Generation",
    strategy: "Call-only Google Ads, localized radius Meta Ads, WhatsApp direct booking integrations, and instant lead notification bots.",
    kpi: "Instant daily inbound patient/client inquiries.",
  },
  "local-seo": {
    badge: "Google Map Pack #1 Ranking",
    strategy: "Google Business Profile optimization, local citation audit, localized reviews acquisition, and city-specific landing pages.",
    kpi: "Top 3 Google Map pack placement across target pin codes.",
  },
  "local-web": {
    badge: "High-Trust Regional Clinic Portal",
    strategy: "Mobile-optimized booking landing page, patient testimonials, doctor credentials, and 1-tap call/WhatsApp triggers.",
    kpi: "Doubled mobile conversion rates from local visitors.",
  },
  "local-brand": {
    badge: "Community Trust & Reputation",
    strategy: "Local community video spotlights, Google review management, educational reels, and regional language creative campaigns.",
    kpi: "Establish unmatched reputation in Jaipur and regional hubs.",
  },
  "enterprise-roas": {
    badge: "Multi-Million Global Media Buying",
    strategy: "Algorithmic bidding models, multi-touch attribution modeling, creative fatigue rotation, and international tax-optimized ad accounts.",
    kpi: "Consistent positive unit economics at high monthly scale.",
  },
  "enterprise-seo": {
    badge: "Global National Search Domination",
    strategy: "International hreflang multi-region SEO, semantic graph architecture, digital PR editorial features, and enterprise technical audits.",
    kpi: "Millions of organic impressions across USA, UK, and India.",
  },
  "enterprise-web": {
    badge: "Scalable Distributed Web Platforms",
    strategy: "Microservices architecture, Next.js ISR/SSR hybrid caching, AWS infrastructure, and enterprise SOC2 compliance readiness.",
    kpi: "Flawlessly handles massive concurrent peak traffic spikes.",
  },
  "enterprise-brand": {
    badge: "Omnichannel Category Leadership",
    strategy: "360-degree brand positioning, multi-channel video productions, PR press syndication, and unified visual brand design systems.",
    kpi: "Industry-defining category brand moat and valuation uplift.",
  },
};

export default function InteractiveGrowthAudit() {
  const [selectedSector, setSelectedSector] = useState("d2c");
  const [selectedGoal, setSelectedGoal] = useState("roas");

  const key = `${selectedSector}-${selectedGoal}`;
  const activePlan = strategies[key] || strategies["d2c-roas"];
  const currentSector = sectors.find((s) => s.id === selectedSector);

  return (
    <div className="relative w-full rounded-3xl border border-orange-200/70 bg-linear-to-br from-[#faf7f2] via-white to-amber-50/30 p-6 sm:p-10 shadow-xl overflow-hidden">
      {/* Decorative ambient blobs */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Interactive Headline & Tag */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Growth Roadmap Calculator
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Calculate Your Custom Growth Roadmap in 10 Seconds
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Select your industry sector and growth objective to reveal your tailored engineering and marketing strategy.
          </p>
        </div>

        {/* Step 1: Select Sector */}
        <div className="mb-6">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
            1. Select Your Business Model:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {sectors.map((s) => {
              const isSelected = selectedSector === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedSector(s.id)}
                  className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold text-left transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-md scale-102"
                      : "bg-white/90 text-slate-700 border-slate-200 hover:border-primary/40 hover:bg-white"
                  }`}
                >
                  <p className="leading-snug">{s.label}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Select Goal */}
        <div className="mb-8">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
            2. Select Your Primary Objective:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {goals.map((g) => {
              const isSelected = selectedGoal === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => setSelectedGoal(g.id)}
                  className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold text-left transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? "bg-linear-to-r from-primary to-secondary text-white border-primary shadow-md shadow-primary/20 scale-102"
                      : "bg-white/90 text-slate-700 border-slate-200 hover:border-primary/40 hover:bg-white"
                  }`}
                >
                  <p className="leading-snug">{g.label}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projection Results Card */}
        <div className="rounded-2xl border border-primary/25 bg-linear-to-br from-white via-orange-50/20 to-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-200/70">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-2">
                {activePlan.badge}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                Recommended 90-Day Execution Roadmap
              </h4>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-400">Timeline</p>
                <p className="text-xs sm:text-sm font-extrabold text-slate-800">{currentSector?.timeline}</p>
              </div>
              <div className="h-6 w-px bg-slate-200" />
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-400">Target Impact</p>
                <p className="text-xs sm:text-sm font-extrabold text-primary">{currentSector?.multiplier}</p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Strategic Blueprint:
              </p>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {activePlan.strategy}
              </p>

              <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-lg border border-emerald-200/60 inline-flex">
                <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{activePlan.kpi}</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end justify-center">
              <Link
                href="/contact/"
                className="group flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-primary px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Claim This Free Roadmap</span>
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1.5 transition-transform"
                  strokeWidth={2.5}
                />
              </Link>
              <p className="text-[11px] text-slate-500 mt-2 text-center md:text-right">
                Includes free technical audit & 30-min strategy call
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
