"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Building2, CheckCircle2, Phone } from "lucide-react";

const cityData = [
  {
    city: "Jaipur (HQ)",
    tag: "Headquarters & Engineering Hub",
    focus: "Complete Local SEO, Next.js Web Development & Brand Social Media",
    metrics: "180+ Local Brands Scaled",
    description:
      "Our central executive office and engineering lab. Offering in-person strategy sessions, on-ground Jaipur SEO domination, Google Business Map Pack optimization, and full-stack software development.",
    address: "Mansarovar & Malviya Nagar Corridor, Jaipur, Rajasthan",
  },
  {
    city: "Delhi NCR",
    tag: "Corporate & Enterprise Growth",
    focus: "Performance Marketing & Corporate Enterprise SEO Strategies",
    metrics: "3.9x Average Blended ROAS",
    description:
      "Accelerating high-growth startups, corporate consultancies, and national service brands across Gurgaon, Noida, and New Delhi with high-intent search campaigns.",
    address: "Serving Delhi, Gurgaon & Noida Tech Corridors",
  },
  {
    city: "Mumbai",
    tag: "D2C & Consumer Brands",
    focus: "D2C Performance Ads, Creative Video Reels & E-Commerce Apps",
    metrics: "+340% E-Comm Revenue",
    description:
      "Scaling high-volume fashion, beauty, lifestyle, and consumer brands with thumb-stopping creative ad variations and ROAS-focused media buying.",
    address: "Bandra-Kurla Complex (BKC) & Lower Parel Network",
  },
  {
    city: "Bangalore",
    tag: "SaaS & Tech Startup Hub",
    focus: "Tech Startup Growth Marketing, Next.js Platforms & Funnels",
    metrics: "Sub-Second App Speed",
    description:
      "Partnering with founders and product teams in India's Silicon Valley to engineer scalable web architectures, SaaS landing pages, and international user acquisition pipelines.",
    address: "Indiranagar & Koramangala Startup Ecosystem",
  },
  {
    city: "Pune & Indore",
    tag: "Regional Economic Engines",
    focus: "Regional Brand Building, Google Ads & Lead Generation",
    metrics: "2.8x Inbound Inquiries",
    description:
      "Driving hyper-targeted regional customer acquisition for real estate developers, educational institutions, clinics, and manufacturing brands.",
    address: "Pune Tech Parks & Indore Commercial Hubs",
  },
];

export default function InteractiveCityHubs() {
  const [activeCityIdx, setActiveCityIdx] = useState(0);
  const activeCity = cityData[activeCityIdx];

  return (
    <div className="mt-8">
      {/* City Selection Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
        {cityData.map((item, idx) => {
          const isActive = activeCityIdx === idx;

          return (
            <button
              key={item.city}
              onClick={() => setActiveCityIdx(idx)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer border ${
                isActive
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-102"
                  : "bg-white/90 text-slate-700 border-slate-200 hover:border-primary/40 hover:bg-white"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <MapPin
                  className={`w-3.5 h-3.5 ${
                    isActive ? "text-primary" : "text-slate-400"
                  }`}
                />
                <span className="text-xs font-bold truncate">{item.city}</span>
              </div>
              <p
                className={`text-[11px] truncate font-medium ${
                  isActive ? "text-slate-300" : "text-slate-500"
                }`}
              >
                {item.metrics}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active City Feature Showcase Card with Light Warm Gradient */}
      <div className="rounded-3xl border border-orange-200/60 bg-linear-to-br from-white via-[#faf8f5] to-orange-50/25 p-7 sm:p-9 shadow-md transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                <Building2 className="w-3.5 h-3.5" />
                {activeCity.tag}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {activeCity.address}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Strategic Growth in {activeCity.city}
            </h3>

            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-5">
              {activeCity.description}
            </p>

            <div className="pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Core Focus: {activeCity.focus}</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Regional Performance Stat
              </p>
              <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-2">
                {activeCity.metrics}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Connect with our regional growth team for customized market penetration strategies.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <Link
                href="/contact/"
                className="group flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-primary text-white py-3 px-5 text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm"
              >
                <span>Schedule {activeCity.city.split(" ")[0]} Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
