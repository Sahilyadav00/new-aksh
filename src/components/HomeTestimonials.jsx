"use client";

import React, { useState } from "react";
import { Star, Quote, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

const testimonials = [
  {
    tag: "SEO & E-Commerce",
    kpi: "+410% Organic Traffic",
    text: "Aksh Digital scaled our organic search traffic by 410% within 8 months. Their Jaipur and international SEO strategies delivered quality inbound leads consistently.",
    name: "Aman Singhal",
    role: "Founder, D2C Lifestyle Apparel",
    initials: "AS",
    rating: 5,
  },
  {
    tag: "Web & Mobile Development",
    kpi: "2x Trial Signups",
    text: "The web platform built by Aksh Digital cut our load times in half and doubled our trial conversions. Flawless communication across time zones and rock-solid code.",
    name: "Vikram Mehta",
    role: "CEO, PropTech Cloud Solutions",
    initials: "VM",
    rating: 5,
  },
  {
    tag: "Performance Marketing",
    kpi: "4.3x Blended ROAS",
    text: "Our blended ROAS hit 4.3x within 60 days of handing over our Google and Meta ad accounts. They are easily our highest-ROI growth partner.",
    name: "Rohit Verma",
    role: "Head of Growth, Multi-Brand Retail",
    initials: "RV",
    rating: 5,
  },
];

export default function HomeTestimonials() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  return (
    <section className="relative w-full overflow-hidden bg-[#fafaf9] px-3 sm:px-6 md:px-8 py-14 sm:py-20 border-y border-slate-200/50">
      {/* Decorative ambient background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#14183e 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
              Client Results & Testimonials
            </span>
            <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden />
          </div>
          <h2 className="mt-5 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px]">
            Delivering Measurable Impact for Ambitious Brands
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Real founders, proven ROAS, and scalable technology. See why growth leaders trust Aksh Digital.
          </p>
        </div>

        {/* Testimonial Cards Grid with interactive hover elevation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map(
            ({ tag, kpi, text, name, role, initials, rating }, i) => {
              const isSelected = selectedIdx === i;

              return (
                <div
                  key={i}
                  onMouseEnter={() => setSelectedIdx(i)}
                  onMouseLeave={() => setSelectedIdx(null)}
                  className={`relative group rounded-3xl border bg-white p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    isSelected
                      ? "border-primary/40 shadow-xl -translate-y-1.5"
                      : "border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-lg"
                  }`}
                >
                  {/* Subtle top indicator bar */}
                  <div
                    className={`absolute top-0 left-8 right-8 h-1 rounded-b-full bg-linear-to-r from-primary to-secondary transition-opacity duration-300 ${
                      isSelected ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div>
                    {/* Category Tag & Rating */}
                    <div className="flex justify-between items-start gap-2 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
                        {tag}
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(rating)].map((_, idx) => (
                          <Star
                            key={idx}
                            className="h-4 w-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* KPI Highlight Badge */}
                    <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{kpi}</span>
                    </div>

                    {/* Content */}
                    <p className="text-slate-700 text-[14px] sm:text-[15px] leading-relaxed mb-6 italic">
                      &ldquo;{text}&rdquo;
                    </p>
                  </div>

                  {/* Author info & Verified tag */}
                  <div className="border-t border-slate-100 pt-4 mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-linear-to-br from-primary to-secondary text-white font-bold text-xs flex items-center justify-center shadow-xs">
                        {initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#14183e] leading-snug">
                          {name}
                        </p>
                        <p className="text-xs text-slate-500 font-medium">
                          {role}
                        </p>
                      </div>
                    </div>
                    <span
                      title="Verified Client"
                      className="text-emerald-500 flex items-center gap-1 text-[11px] font-semibold"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                    </span>
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Trust summary strip */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-6  text-slate-600 text-xs sm:text-sm font-semibold">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>100% Genuine Project Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>Jaipur HQ & Global Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            <span>Transparent Weekly Sprint Cadence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
