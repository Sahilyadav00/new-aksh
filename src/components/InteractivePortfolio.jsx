"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Sparkles } from "lucide-react";

const portfolioItems = [
  {
    src: "/assets/images/home/iPhone-13-PRO-localhost.webp",
    title: "Aksh Digital Ecosystem",
    category: "Web & Mobile Development",
    tags: ["Next.js", "Full-Stack Dev"],
    offsetClass: "translate-y-2 sm:translate-y-4",
    link: "https://akshdigital.in",
  },
  {
    src: "/assets/images/home/iPhone-13-PRO-cityrides.generativebee.com.webp",
    title: "City Ride Regional Mobility",
    category: "SEO & Organic Growth",
    tags: ["Local SEO", "High Intent"],
    offsetClass: "-translate-y-2 sm:-translate-y-4",
    link: "https://cityrides.generativebee.com",
  },
  {
    src: "/assets/images/home/iPhone-13-PRO-www.generativebee.com.webp",
    title: "Genbee Modern Platform",
    category: "Web Development",
    tags: ["React & AI", "Modern UI/UX"],
    offsetClass: "translate-y-3 sm:translate-y-5",
    link: "https://generativebee.com",
  },
  {
    src: "/assets/images/home/iPhone-13-PRO-padhaarosa.com.webp",
    title: "Padhaaro Sa Hospitality",
    category: "Performance Marketing",
    tags: ["Meta Ads", "Google Ads"],
    offsetClass: "-translate-y-1 sm:-translate-y-2",
    link: "https://padhaarosa.com",
  },
];

export default function InteractivePortfolio() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="relative z-10 mt-10 sm:mt-14">
      {/* Visual gallery cluster */}
      <div className="flex items-end justify-center max-md:flex-wrap gap-4 sm:gap-6 md:gap-8 pb-14 scrollbar-none pt-4">
        {portfolioItems.map((item, index) => {
          const isHovered = activeItem === index;

          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${item.title}`}
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
              className={`group relative h-76 w-[152px] sm:h-[390px] sm:w-[195px] md:h-[440px] md:w-[220px] shrink-0 cursor-pointer transition-all duration-500 ease-out hover:z-20 hover:-translate-y-2 hover:scale-[1.03] block ${item.offsetClass}`}
            >
              {/* iPhone 13 Pro Device Mockup */}
              <div className="relative h-full w-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={440}
                  height={892}
                  className="h-full w-full object-contain filter drop-shadow-[0_16px_24px_rgba(20,24,62,0.14)] transition-all duration-500 group-hover:drop-shadow-[0_28px_36px_rgba(20,24,62,0.26)]"
                  priority
                />

                {/* Inner Screen Hover Overlay - precisely contoured inside the phone bezel */}
                <div
                  className={`absolute inset-[7px] sm:inset-[9px] md:inset-[10px] rounded-[24px] sm:rounded-[32px] md:rounded-[36px] bg-slate-950/85 backdrop-blur-xs flex flex-col justify-end p-3.5 sm:p-5 text-white transition-opacity duration-300 overflow-hidden ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-secondary uppercase tracking-wider mb-1">
                    <Sparkles className="w-3 h-3 text-secondary" />
                    {item.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold line-clamp-2 leading-snug">
                    {item.title}
                  </h4>

                  <div className="mt-2 sm:mt-3 pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-slate-300">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/20 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary shrink-0 ml-1">
                      <span>View</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Pill Badge when not hovered */}
              <div
                className={`absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md text-[10px] sm:text-[11px] font-semibold text-slate-800 transition-all duration-300 pointer-events-none flex items-center gap-1.5 ${
                  isHovered
                    ? "opacity-0 scale-90 translate-y-1"
                    : "opacity-100 scale-100"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{item.category}</span>
              </div>
            </a>
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
