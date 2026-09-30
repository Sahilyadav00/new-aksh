"use client";

import React from "react";
import { Star, Sparkles } from "lucide-react";

export default function DualTechMarquee({ devTechnologies, growthTools }) {
  return (
    <section className="relative w-full overflow-hidden border-y border-slate-800 bg-slate-950 py-10">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(210,92,65,0.08)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      {/* Fade Gradients at Left & Right Edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-linear-to-r from-slate-950 via-slate-950/80 to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-linear-to-l from-slate-950 via-slate-950/80 to-transparent z-10"
        aria-hidden="true"
      />

      <div className="space-y-6">
        {/* Row 1: Dev Technologies (Scroll Left) */}
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee-scroll flex w-max items-center gap-6 pr-6">
            {[...devTechnologies, ...devTechnologies, ...devTechnologies].map(
              (name, index) => (
                <div
                  key={`dev-${name}-${index}`}
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-slate-800 bg-slate-900/70 text-slate-200 text-sm font-semibold tracking-wide whitespace-nowrap shadow-xs hover:border-primary/50 hover:bg-slate-800 transition-colors"
                >
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span>{name}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Row 2: Marketing & Growth Stack (Scroll Right / Reverse) */}
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee-scroll-reverse flex w-max items-center gap-6 pr-6">
            {[...growthTools, ...growthTools, ...growthTools].map(
              (name, index) => (
                <div
                  key={`growth-${name}-${index}`}
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-slate-800/80 bg-slate-900/50 text-slate-300 text-sm font-semibold tracking-wide whitespace-nowrap shadow-xs hover:border-secondary/50 hover:bg-slate-800 transition-colors"
                >
                  <Sparkles className="h-3.5 w-3.5 text-secondary" />
                  <span>{name}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
