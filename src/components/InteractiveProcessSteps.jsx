"use client";

import React, { useState } from "react";
import {
  GitBranch,
  ShieldCheck,
  HandHelping,
  Flag,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery & Market Audit",
    timeframe: "Days 1–5",
    description:
      "Deep competitor audits, keyword gap analysis, technical Core Web Vitals benchmark, and conversion funnel research.",
    highlights: [
      "Full technical SEO & conversion audit",
      "Competitor ad spend & keyword intelligence",
      "Ideal Customer Profile (ICP) segmentation",
    ],
    icon: GitBranch,
  },
  {
    step: "02",
    title: "Strategic Roadmap",
    timeframe: "Days 6–10",
    description:
      "Custom growth sprints tailored to high-ROAS marketing funnels and modern Next.js engineering architecture.",
    highlights: [
      "Custom multi-channel growth blueprint",
      "Wireframing & high-converting ad copy angles",
      "Milestone and sprint timeline alignment",
    ],
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Agile Build & Launch",
    timeframe: "Days 11–25",
    description:
      "Rapid development sprints, clean code deployment, and multi-tier ad campaign activation across Google, Meta & LinkedIn.",
    highlights: [
      "Clean Next.js / React production deployment",
      "Pixel & Server-Side Conversion API integration",
      "A/B creative ad split testing rollout",
    ],
    icon: HandHelping,
  },
  {
    step: "04",
    title: "Scale & Dominate",
    timeframe: "Ongoing Sprints",
    description:
      "Continuous conversion rate optimization, data analysis, and scalable market dominance with predictable ROI.",
    highlights: [
      "Weekly transparent ROAS & rank reports",
      "Iterative conversion rate optimization (CRO)",
      "Budget scale on highest-converting channels",
    ],
    icon: Flag,
  },
];

export default function InteractiveProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="mt-12">
     

      {/* Grid of Step Cards with Active Highlight */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {steps.map((item, index) => {
          const isActive = activeStep === index;
          const Icon = item.icon;

          return (
            <div
              key={item.step}
              onClick={() => setActiveStep(index)}
              className={`group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer border ${
                isActive
                  ? "bg-linear-to-b from-white via-orange-50/30 to-amber-50/20 border-primary/50 shadow-xl -translate-y-1.5"
                  : "bg-linear-to-b from-white to-slate-50/50 border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-md"
              }`}
            >
              <div>
                {/* Header: Step Badge & Timeframe */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-extrabold tracking-wider transition-colors ${
                      isActive
                        ? "bg-primary text-white shadow-xs"
                        : "bg-slate-900 text-white"
                    }`}
                  >
                    STEP {item.step}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {item.timeframe}
                  </span>
                </div>

                {/* Icon */}
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl mb-4 transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                      : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Deliverables */}
                <div className="pt-3 border-t border-slate-200/60 space-y-1.5">
                  {item.highlights.map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

            
            </div>
          );
        })}
      </div>
    </div>
  );
}
