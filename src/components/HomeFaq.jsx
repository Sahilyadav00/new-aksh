"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What digital marketing services do you offer?",
    answer: "Aksh Digital offers a complete suite of services including SEO Strategies, Performance Marketing (Google Ads & Meta Ads), Social Media Management, Graphic Design, Web Development, and App Development. We specialize in building custom growth campaigns for local and national brands.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer: "While some technical SEO issues can show quick improvements, ranking for competitive terms generally takes 3 to 6 months. Local SEO (like Google Business Profile optimization for specific cities) often starts delivering leads and phone calls within the first 45 to 60 days.",
  },
  {
    question: "What is your pricing model for advertising and marketing?",
    answer: "We offer transparent, customized monthly packages based on the scope of work and your budget. For ad management (Google & Meta), we charge a flat fee or a small percentage of ad spend depending on scale. We do not have long-term lock-ins; we work on a month-to-month basis.",
  },
  {
    question: "Do you only work with clients in Jaipur?",
    answer: "No, while our headquarters is in Jaipur, we work with clients all across India — including Delhi, Mumbai, Pune, Bangalore, and Indore. Our team utilizes online communication tools, weekly reporting dashboards, and dedicated WhatsApp support to ensure seamless collaboration.",
  },
  {
    question: "How do we get started with Aksh Digital?",
    answer: "It's simple! Reach out to us via our contact form or book a free audit session. We'll run a preliminary analysis of your website, SEO presence, or ad accounts, and set up a brief consultation call to present our findings and a custom growth strategy.",
  },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#fafaf9] px-3 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 border-y border-slate-200/50">
      <div className="mx-auto max-w-3xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d25c41] sm:text-sm">
              FAQ Section
            </span>
            <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden />
          </div>
          <h2 className="mt-5 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Find quick answers to common questions about our services, processes, and partnership.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center gap-4 px-5 py-4.5 sm:px-6 sm:py-5 text-left transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="flex-shrink-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#d25c41] text-white">
                  <Plus
                    className={`h-4 w-4 transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}
                  />
                </span>
                <span className="text-[15px] sm:text-base font-semibold text-[#14183e]">
                  {faq.question}
                </span>
              </button>
              
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 text-sm leading-relaxed pl-[3.5rem] sm:pl-[4.25rem]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions link */}
        <div className="text-center mt-10">
          <p className="text-slate-600 text-sm">
            Still have questions?{" "}
            <Link
              href="/faq"
              className="inline-flex items-center gap-1 font-bold text-[#d25c41] hover:underline"
            >
              Visit our full FAQ page
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
