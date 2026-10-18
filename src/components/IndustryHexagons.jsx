"use client";

import React, { useState, useRef } from "react";
import {
  ShoppingBag,
  Building2,
  Globe,
  HeartPulse,
  Shirt,
} from "lucide-react";

const industries = [
  {
    id: "ecommerce",
    title: "E-Commerce & D2C",
    description:
      "High-ROAS shopping ads, product SEO, conversion rate optimization (CRO).",
    icon: ShoppingBag,
    row: "top",
  },
  {
    id: "realestate",
    title: "Real Estate & Construction",
    description:
      "Hyper-local lead generation, virtual tour websites, Google search ads.",
    icon: Building2,
    row: "top",
  },
  {
    id: "b2b",
    title: "B2B & SaaS / Tech",
    description:
      "Linkedin outreach, high-intent SEO content funnels, full-stack web apps.",
    icon: Globe,
    row: "bottom",
  },
  {
    id: "healthcare",
    title: "Healthcare & Clinics",
    description:
      "Local map pack SEO, reputation management, high-trust landing pages.",
    icon: HeartPulse,
    row: "bottom",
  },
  {
    id: "fashion",
    title: "Fashion & Lifestyle",
    description:
      "Influencer management, viral social media campaigns, Meta ad scaling.",
    icon: Shirt,
    row: "bottom",
  },
];

function HexagonCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="group relative w-[265px] h-[305px] sm:w-[285px] sm:h-[325px] transition-all duration-300 hover:-translate-y-2 select-none shrink-0">
      {/* SVG Rounded Hexagon Background & Border */}
      <svg
        viewBox="0 0 280 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_12px_28px_rgba(210,92,65,0.08)] group-hover:drop-shadow-[0_20px_35px_rgba(246,172,85,0.28)] transition-all duration-300"
      >
        {/* Outer Hexagon Shape with Symmetrically Rounded Corners */}
        <path
          d="M 148 15 L 260 81 Q 268 85 268 97 L 268 223 Q 268 235 260 239 L 148 305 Q 140 310 132 305 L 20 239 Q 12 235 12 223 L 12 97 Q 12 85 20 81 L 132 15 Q 140 10 148 15 Z"
          fill="url(#hexCardFill)"
          stroke="url(#hexCardStroke)"
          strokeWidth="2.5"
          className="transition-all duration-300"
        />

        {/* Subtle Top-Center Ambient Light */}
        <path
          d="M 148 15 L 260 81 Q 268 85 268 97 L 268 223 Q 268 235 260 239 L 148 305 Q 140 310 132 305 L 20 239 Q 12 235 12 223 L 12 97 Q 12 85 20 81 L 132 15 Q 140 10 148 15 Z"
          fill="url(#hexCardGlow)"
          className="opacity-75 group-hover:opacity-100 transition-opacity duration-300"
        />
      </svg>

      {/* Hexagon Content Area */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-2 pb-6 sm:pt-3 sm:pb-7 z-10 pointer-events-none">
        {/* Copper Metallic Icon */}
        <div className="mb-2 sm:mb-3 flex items-center justify-center">
          <Icon
            className="w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110"
            stroke="url(#copperIconGrad)"
            strokeWidth={1.8}
          />
        </div>

        {/* Title */}
        <h3 className="text-[13.5px] sm:text-[14.5px] font-extrabold uppercase tracking-wider text-[#14183e] group-hover:text-primary transition-colors duration-200 leading-snug max-w-[210px]">
          {item.title}
        </h3>

        {/* Description */}
        <p className="mt-1.5 sm:mt-2 text-slate-600 text-[11px] sm:text-[12px] leading-relaxed max-w-[195px] mx-auto">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function IndustryHexagons() {
  const topRow = industries.filter((i) => i.row === "top");
  const bottomRow = industries.filter((i) => i.row === "bottom");
  const [activeIdx, setActiveIdx] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const cardWidth = 265 + 16; // width + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIdx(Math.max(0, Math.min(industries.length - 1, index)));
  };

  const scrollToSlide = (idx) => {
    if (!carouselRef.current) return;
    const cardWidth = 265 + 16;
    carouselRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: "smooth",
    });
    setActiveIdx(idx);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-4 sm:py-8 overflow-hidden md:overflow-visible">
      {/* Shared SVG Gradients for Hexagons & Copper Outlined Icons */}
      <svg width="0" height="0" className="absolute -z-50 pointer-events-none" aria-hidden="true">
        <defs>
          {/* Copper Metallic Icon Gradient */}
          <linearGradient id="copperIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97757" />
            <stop offset="35%" stopColor="#c25e43" />
            <stop offset="75%" stopColor="#b4533c" />
            <stop offset="100%" stopColor="#ea907a" />
          </linearGradient>

          {/* Hexagon Ivory/White Gradient Fill */}
          <linearGradient id="hexCardFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#fdfcfb" />
            <stop offset="100%" stopColor="#f8f5ee" />
          </linearGradient>

          {/* Hexagon Amber/Golden/Orange Gradient Border Stroke */}
          <linearGradient id="hexCardStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde68a" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#f97316" stopOpacity="0.55" />
            <stop offset="80%" stopColor="#fdba74" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fb923c" stopOpacity="0.75" />
          </linearGradient>

          {/* Hexagon Top Center Subtle Ambient Glow */}
          <radialGradient id="hexCardGlow" cx="50%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#fff7ed" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Ambient Hexagonal Circuit Mesh Watermark (Left) */}
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-64 h-80 pointer-events-none opacity-20 hidden lg:block select-none">
        <svg viewBox="0 0 240 320" fill="none" className="w-full h-full stroke-amber-600/70" strokeWidth="1.2">
          <path d="M 40 40 L 90 10 L 140 40 L 140 100 L 90 130 L 40 100 Z" />
          <path d="M 140 40 L 190 10 L 240 40 L 240 100 L 190 130 L 140 100 Z" />
          <path d="M 90 130 L 140 100 L 190 130 L 190 190 L 140 220 L 90 190 Z" />
          <path d="M 40 100 L 90 130 L 90 190 L 40 220 L -10 190 L -10 130 Z" />
          <line x1="90" y1="130" x2="60" y2="150" strokeDasharray="3 3" />
          <line x1="140" y1="220" x2="140" y2="270" strokeDasharray="3 3" />
          <circle cx="90" cy="130" r="3" fill="#ea580c" />
          <circle cx="140" cy="40" r="3" fill="#ea580c" />
          <circle cx="140" cy="100" r="3" fill="#ea580c" />
          <circle cx="190" cy="130" r="3" fill="#ea580c" />
          <circle cx="140" cy="220" r="3" fill="#ea580c" />
        </svg>
      </div>

      {/* Ambient Hexagonal Circuit Mesh Watermark (Right) */}
      <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-64 h-80 pointer-events-none opacity-20 hidden lg:block select-none scale-x-[-1]">
        <svg viewBox="0 0 240 320" fill="none" className="w-full h-full stroke-amber-600/70" strokeWidth="1.2">
          <path d="M 40 40 L 90 10 L 140 40 L 140 100 L 90 130 L 40 100 Z" />
          <path d="M 140 40 L 190 10 L 240 40 L 240 100 L 190 130 L 140 100 Z" />
          <path d="M 90 130 L 140 100 L 190 130 L 190 190 L 140 220 L 90 190 Z" />
          <path d="M 40 100 L 90 130 L 90 190 L 40 220 L -10 190 L -10 130 Z" />
          <line x1="90" y1="130" x2="60" y2="150" strokeDasharray="3 3" />
          <line x1="140" y1="220" x2="140" y2="270" strokeDasharray="3 3" />
          <circle cx="90" cy="130" r="3" fill="#ea580c" />
          <circle cx="140" cy="40" r="3" fill="#ea580c" />
          <circle cx="140" cy="100" r="3" fill="#ea580c" />
          <circle cx="190" cy="130" r="3" fill="#ea580c" />
          <circle cx="140" cy="220" r="3" fill="#ea580c" />
        </svg>
      </div>

      {/* Center Subtle Amber Glow Aura behind Honeycomb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-linear-to-r from-amber-200/20 via-orange-100/25 to-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ========================================================
          DESKTOP & TABLET HONEYCOMB CLUSTER (2 Top, 3 Bottom)
          ======================================================== */}
      <div className="hidden md:block relative">
        {/* Row 1: Top 2 Hexagons */}
        <div className="flex justify-center items-center gap-5 lg:gap-6 relative z-10">
          {topRow.map((item) => (
            <HexagonCard key={item.id} item={item} />
          ))}
        </div>

        {/* Row 2: Bottom 3 Hexagons (Interlocked via negative margin) */}
        <div className="flex justify-center items-center gap-5 lg:gap-6 -mt-18 lg:-mt-20 relative z-20">
          {bottomRow.map((item) => (
            <HexagonCard key={item.id} item={item} />
          ))}
        </div>

        {/* Glowing Junction Stars between Honeycomb Vertices */}
        {/* Junction 1: Top-Center meeting point */}
        <div
          className="absolute left-1/2 top-[240px] lg:top-[252px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-10 h-10 rounded-full bg-amber-400/40 blur-md animate-pulse" />
          <svg
            className="w-4.5 h-4.5 absolute text-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.9)]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z" />
          </svg>
        </div>

        {/* Junction 2: Left Honeycomb meeting point */}
        <div
          className="absolute left-[calc(50%-150px)] lg:left-[calc(50%-154px)] top-[240px] lg:top-[252px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-8 h-8 rounded-full bg-amber-400/35 blur-md animate-pulse" />
          <svg
            className="w-3.5 h-3.5 absolute text-amber-300 drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z" />
          </svg>
        </div>

        {/* Junction 3: Right Honeycomb meeting point */}
        <div
          className="absolute left-[calc(50%+150px)] lg:left-[calc(50%+154px)] top-[240px] lg:top-[252px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-8 h-8 rounded-full bg-amber-400/35 blur-md animate-pulse" />
          <svg
            className="w-3.5 h-3.5 absolute text-amber-300 drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z" />
          </svg>
        </div>
      </div>

      {/* ========================================================
          MOBILE RESPONSIVE (Smooth Horizontal Snap Carousel)
          ======================================================== */}
      <div className="md:hidden relative z-10 w-full">
        {/* Horizontal scroll container with snap */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 px-6 py-4 justify-start"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {industries.map((item) => (
            <div key={item.id} className="snap-center shrink-0">
              <HexagonCard item={item} />
            </div>
          ))}
        </div>

        {/* Carousel Pagination Indicator Dots & Swipe Hint */}
        <div className="flex flex-col items-center justify-center gap-2 mt-2">
          <div className="flex items-center gap-2">
            {industries.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIdx === idx
                    ? "w-7 bg-primary shadow-xs"
                    : "w-2 bg-amber-600/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
            Swipe to explore industries
          </span>
        </div>
      </div>
    </div>
  );
}
