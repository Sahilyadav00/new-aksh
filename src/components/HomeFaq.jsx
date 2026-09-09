"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Do you work with international clients outside of India?",
    answer: "Yes. A substantial part of our portfolio includes businesses across the USA, UK, and other global regions. We manage offshore development and global performance marketing campaigns with flexible communication schedules and transparent weekly reporting.",
  },
  {
    question: "How does Aksh Digital handle local SEO for specific cities like Jaipur?",
    answer: "We implement hyper-local SEO strategies, including Google Business Profile optimization, localized keyword targeting, citations, and localized landing pages that capture immediate regional search intent.",
  },
  {
    question: "What platforms and technologies do you specialize in?",
    answer: "Our software team specializes in Next.js, React, Node.js, TypeScript, PostgreSQL, and AWS. For digital marketing, we leverage Google Marketing Platform, Meta Ads Manager, SEMrush, Ahrefs, and advanced conversion tracking APIs.",
  },
  {
    question: "How long does it take to see results from SEO and ad campaigns?",
    answer: "While technical SEO optimizations and local map pack rankings often start delivering leads within 45 to 60 days, competitive national/global terms build over 3 to 6 months. For paid ads (Google & Meta), campaigns are optimized for positive ROAS within the first 30 to 60 days.",
  },
  {
    question: "How do we get started with Aksh Digital?",
    answer: "It's simple! Book a free strategy call or audit session. We will perform a preliminary analysis of your website, organic visibility, or ad accounts, and deliver a custom digital growth roadmap tailored to your target markets.",
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
