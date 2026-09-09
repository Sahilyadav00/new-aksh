"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    tag: "SEO & E-Commerce",
    text: "Aksh Digital scaled our organic search traffic by 410% within 8 months. Their Jaipur and international SEO strategies delivered quality inbound leads consistently.",
    name: "Founder",
    role: "Fashion & Lifestyle Brand",
    rating: 5,
  },
  {
    tag: "Web & Mobile Development",
    text: "The web platform built by Aksh Digital cut our load times in half and doubled our trial conversions. Flawless communication across time zones.",
    name: "CEO",
    role: "PropTech Platform",
    rating: 5,
  },
  {
    tag: "Performance Marketing",
    text: "Our blended ROAS hit 4.3x within 60 days of handing over our Google and Meta ad accounts. They are easily our highest-ROI growth partner.",
    name: "Growth Lead",
    role: "D2C Consumer Brand",
    rating: 5,
  },
];

export default function HomeTestimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafaf9] px-3 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 border-y border-slate-200/50">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#14183e 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d25c41] sm:text-sm">
              Client Results & Testimonials
            </span>
            <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden />
          </div>
          <h2 className="mt-5 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px]">
            Delivering Measurable Impact for Ambitious Brands
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Discover how we help businesses across India drive real growth, increase visibility, and scale revenue.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map(({ tag, text, name, role, rating }, i) => (
            <div
              key={i}
              className="relative group rounded-2xl border border-slate-200/60 bg-white p-6 sm:p-8 hover:shadow-xl hover:border-[#d25c41]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Tag & Rating */}
                <div className="flex justify-between items-center mb-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#d25c41]/10 text-[#d25c41]">
                    {tag}
                  </span>
                  {/* Rating */}
                  <div className="flex gap-0.5">
                    {[...Array(rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-4 w-4 fill-[#f6ac55] text-[#f6ac55]"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Content */}
                <p className="text-slate-700 text-[14px] sm:text-[15px] leading-relaxed mb-6 italic">
                  &ldquo;{text}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <p className="text-sm font-bold text-[#14183e]">{name}</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">{role}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
