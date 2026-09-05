"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Aksh Digital built a custom SEO strategy for our e-commerce brand that increased our organic traffic by 410% in just 8 months. Their team in Jaipur is responsive, transparent, and incredibly knowledgeable.",
    name: "Rahul Sharma",
    role: "Founder, Jaipur Fashion House",
    rating: 5,
  },
  {
    text: "The web and mobile application developed by Aksh Digital completely transformed our customer experience. It is lightning-fast, beautifully designed, and has doubled our trial signups.",
    name: "Priya Verma",
    role: "CEO, PropFind Realty",
    rating: 5,
  },
  {
    text: "We outsourced our Meta and Google Ads to their performance marketing team, and our ROAS jumped to 4.3x in the first 60 days. They are the best performance marketing agency we've worked with.",
    name: "Anjali Kapoor",
    role: "Marketing Director, GlowUp Skincare",
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
              Testimonials
            </span>
            <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden />
          </div>
          <h2 className="mt-5 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px]">
            Trusted By Growing Brands
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Discover how we help businesses across India drive real growth, increase visibility, and scale revenue.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map(({ text, name, role, rating }, i) => (
            <div
              key={i}
              className="relative group rounded-2xl border border-slate-200/60 bg-white p-6 sm:p-8 hover:shadow-xl hover:border-[#d25c41]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon */}
                <div className="flex justify-between items-center mb-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 group-hover:bg-[#d25c41]/10 transition-colors duration-300">
                    <Quote className="h-5 w-5 text-[#d25c41] transform -scale-x-100" />
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
