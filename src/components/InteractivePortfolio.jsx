"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Sparkles } from "lucide-react";

const portfolioItems = [
  {
    src: "/assets/images/home/PROJECT-01.webp",
    title: "Brand Elevation & Creative Growth",
    category: "Full-Funnel Marketing",
    tags: ["Meta Ads", "Design System"],
    offsetClass: "translate-y-[40px] sm:translate-y-[60px]",
  },
  {
    src: "/assets/images/home/PROJECT-02.webp",
    title: "Next.js E-Commerce Platform",
    category: "Web Engineering",
    tags: ["Next.js", "PostgreSQL"],
    offsetClass: "-translate-y-4 sm:-translate-y-6",
  },
  {
    src: "/assets/images/home/PROJECT-03.webp",
    title: "National SEO Strategy & Ranking",
    category: "Organic Growth",
    tags: ["SEO", "Content Ops"],
    offsetClass: "translate-y-8 sm:translate-y-12",
  },
  {
    src: "/assets/images/home/PROJECT-06.webp",
    title: "PropTech SaaS & Mobile Portal",
    category: "Cloud Architecture",
    tags: ["React", "AWS"],
    offsetClass: "translate-y-0",
  },
  {
    src: "/assets/images/home/PROJECT-04.webp",
    title: "Global Lead Generation Engine",
    category: "Performance Ads",
    tags: ["Google Ads", "Analytics"],
    offsetClass: "translate-y-16 sm:translate-y-24",
  },
  {
    src: "/assets/images/home/PROJECT-05.webp",
    title: "Omnichannel Brand Scale",
    category: "Brand & Social",
    tags: ["Influencer", "Social"],
    offsetClass: "translate-y-2 sm:translate-y-4",
  },
];

export default function InteractivePortfolio() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="relative z-10 mt-10 sm:mt-14">
      {/* Visual gallery cluster */}
      <div className="flex items-end justify-center max-md:flex-wrap gap-3 sm:gap-4 md:gap-5 pb-8 scrollbar-none">
        {portfolioItems.map((item, index) => {
          const isHovered = activeItem === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
              className={`group relative h-56 w-36 sm:h-72 sm:w-48 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 cursor-pointer transition-all duration-500 ease-out hover:z-20 hover:scale-105 hover:shadow-2xl hover:border-primary/40 ${item.offsetClass}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={240}
                height={360}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient Scrim & Hover Overlay */}
              <div
                className={`absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/60 to-transparent flex flex-col justify-end p-4 text-white transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0 sm:group-hover:opacity-100"
                }`}
              >
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-secondary uppercase tracking-wider mb-1">
                  <Sparkles className="w-3 h-3" />
                  {item.category}
                </span>
                <h4 className="text-xs sm:text-sm font-bold line-clamp-2 leading-snug">
                  {item.title}
                </h4>

                <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                  <div className="flex gap-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/15 px-1.5 py-0.5 rounded text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-primary shrink-0" />
                </div>
              </div>

              {/* Minimal floating chip when not hovered */}
              <div
                className={`absolute bottom-3 left-3 right-3 px-2 py-1 rounded-md bg-black/40 backdrop-blur-md text-[11px] text-white font-medium truncate pointer-events-none transition-opacity duration-300 ${
                  isHovered ? "opacity-0" : "opacity-100 sm:group-hover:opacity-0"
                }`}
              >
                {item.category}
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Projects CTA */}
      <div className="mt-8 text-center">
        <Link
          href="/contact/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-xs sm:text-sm font-bold tracking-wide text-slate-800 hover:border-primary hover:text-primary transition-all duration-300 shadow-xs hover:shadow-md"
        >
          <span>Request Full Case Study Portfolio</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
