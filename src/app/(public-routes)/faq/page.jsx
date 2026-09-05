"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  Plus,
  ArrowRight,
  MessageSquare,
  Globe,
  Settings,
  ShieldAlert,
} from "lucide-react";

const faqCategories = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General & Agency" },
  { id: "seo", label: "SEO & Local Search" },
  { id: "ads", label: "Paid Ads & PPC" },
  { id: "dev", label: "Web & App Dev" },
];

const faqs = [
  // General
  {
    category: "general",
    question: "What digital marketing services does Aksh Digital provide?",
    answer: "We provide comprehensive digital growth services, including technical SEO strategies, local SEO (city-specific landing pages), performance marketing (Google Search/Shopping, Meta Ads/Instagram Ads), full-cycle social media management, brand identity & graphic design, and custom web & app development using modern frameworks like Next.js and React Native.",
  },
  {
    category: "general",
    question: "Do you require long-term contracts?",
    answer: "No, we believe in earning our clients' trust month after month. Most of our client partnerships run on a flexible month-to-month basis. However, for large-scale enterprise SEO or complex app development cycles, we may align on a 3-month or 6-month milestone agreement.",
  },
  {
    category: "general",
    question: "How do you communicate project updates and reporting?",
    answer: "Transparency is our core value. We share real-time looker studio dashboards where you can see live performance metrics. Additionally, you will have a dedicated account manager with direct WhatsApp access, and we hold bi-weekly or monthly alignment calls to discuss progress and strategies.",
  },
  {
    category: "general",
    question: "What sets Aksh Digital apart from other agencies?",
    answer: "We don't just run campaigns; we build custom growth engines. Unlike generic agencies that rely on templated strategies and stock creatives, we have in-house copywriters, designers, and developers. Every line of code, ad copy, and creative is tailored specifically to your audience and business KPIs.",
  },
  // SEO
  {
    category: "seo",
    question: "How long does it take to see organic traffic growth from SEO?",
    answer: "SEO is a compound interest model. While technical fixes and on-page updates can yield ranking improvements within the first 30 days, sustainable top-page organic rankings generally take 3 to 6 months. High-quality content and authoritative links take time to build search engine trust.",
  },
  {
    category: "seo",
    question: "What is Local SEO and why does my business need it?",
    answer: "Local SEO optimizes your digital footprint to drive traffic and leads from localized search queries. This is critical for businesses targeting customers in specific cities (e.g., Jaipur, Delhi, Bangalore). By optimizing your Google Business Profile (GMB) and building city-specific landing pages, we ensure your brand appears when customers search for services near them.",
  },
  {
    category: "seo",
    question: "Will you write the blog and landing page content for us?",
    answer: "Yes, we have a team of professional copywriters who specialize in SEO-optimized content writing. They conduct extensive keyword research, align with your brand voice, and write informative articles that rank high on Google and establish your business as an industry authority.",
  },
  {
    category: "seo",
    question: "How do you measure SEO success?",
    answer: "We focus on business-centric metrics. While we track keyword rankings and search impressions, our primary KPIs are organic traffic growth, GMB phone calls/direction requests, contact form submissions, and organic leads generated.",
  },
  // Paid Ads
  {
    category: "ads",
    question: "What advertising platforms do you manage?",
    answer: "We run paid search and display campaigns on Google Ads (Search, Display, Performance Max, YouTube, Shopping), Meta Ads (Facebook & Instagram), LinkedIn Ads for B2B targeting, and local classified platforms if relevant to your business.",
  },
  {
    category: "ads",
    question: "How much ad budget should I start with?",
    answer: "There is no one-size-fits-all answer. We analyze your industry, competitor bids, and business goals to propose a recommended media budget. For small local campaigns, we recommend starting with at least ₹20,000 to ₹30,000 monthly. For national campaigns, a higher budget is required to gather sufficient conversion data.",
  },
  {
    category: "ads",
    question: "How do you optimize campaigns to improve ROAS?",
    answer: "We use a rigorous data-driven optimization process. This includes setting up conversion APIs (Meta Pixel, GA4), conducting continuous A/B tests on ad creatives and headlines, weeding out negative search keywords, refining audience demographics, and advising on landing page conversion improvements.",
  },
  {
    category: "ads",
    question: "Are your ad management fees included in the ad budget?",
    answer: "No, our ad management fee is billed separately. 100% of your ad budget goes directly to the advertising platforms (Google or Meta) via your linked credit card or billing account. This ensures total transparency in ad spend.",
  },
  // Development
  {
    category: "dev",
    question: "What technologies do you use for website development?",
    answer: "We build modern, fast, and secure websites. Our stack focuses on React, Next.js, Node.js, Tailwind CSS, and headless CMS platforms. For e-commerce, we build custom storefronts or optimize Shopify implementations depending on the complexity of your inventory.",
  },
  {
    category: "dev",
    question: "Will my website be mobile-friendly and SEO-ready?",
    answer: "Absolutely. Every website we build is fully responsive across all screen sizes (mobiles, tablets, desktops) and features semantic HTML structure, schema markup, high speed index rankings, and Core Web Vitals optimizations right out of the box.",
  },
  {
    category: "dev",
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, we provide ongoing support, security updates, server monitoring, and content updates. We offer tailored maintenance packages so you can focus on running your business while we make sure your website remains secure and up-to-date.",
  },
  {
    category: "dev",
    question: "Can you build custom mobile apps?",
    answer: "Yes, we develop cross-platform mobile apps for both iOS and Android using React Native and Flutter. We manage the entire cycle — from wireframing, UX design, backend API development, to publishing on the Apple App Store and Google Play Store.",
  },
];

export default function FaqPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#d25c41]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#f6ac55]/10 blur-3xl" />
        
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#f6ac55]">FAQ</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#d25c41]/30 bg-[#d25c41]/10 px-4 py-1.5 text-sm font-semibold text-[#f6ac55] mb-6">
            <HelpCircle className="h-4 w-4" />
            Support Center
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-tight tracking-tight mb-6">
            How Can We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] to-[#f6ac55]">
              Help You?
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Browse through our frequently asked questions or type a keyword below to find quick answers.
          </p>

          {/* Search Bar */}
          <div className="mx-auto max-w-xl relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search questions (e.g. SEO, pricing, contract)..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setOpenIndex(null); // Close accordions when searching
              }}
              className="w-full pl-12 pr-6 py-4 rounded-full bg-white text-slate-900 placeholder-slate-400 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#d25c41] shadow-lg transition-all"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="border-b border-slate-100 bg-white py-6 px-4 sm:px-6 sticky top-0 z-40 shadow-xs">
        <div className="mx-auto max-w-4xl flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none py-1">
          {faqCategories.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                setActiveCategory(id);
                setOpenIndex(null); // Close accordions when changing category
              }}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                activeCategory === id
                  ? "bg-[#d25c41] text-white shadow-md"
                  : "bg-slate-50 text-slate-600 hover:bg-[#d25c41]/10 hover:text-[#d25c41]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion List */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-3xl">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/80 bg-white shadow-xs overflow-hidden transition-all duration-300 hover:border-[#d25c41]/20 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center gap-4 px-5 py-4.5 sm:px-6 sm:py-5 text-left"
                    aria-expanded={openIndex === index}
                  >
                    <span className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 group-hover:bg-[#d25c41]/10 text-[#d25c41] transition-colors duration-300">
                      <Plus
                        className={`h-4.5 w-4.5 transition-transform duration-300 ${
                          openIndex === index ? "rotate-45 text-[#d25c41]" : ""
                        }`}
                      />
                    </span>
                    <span className="text-base sm:text-[17px] font-bold text-[#14183e] leading-snug">
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
                      <p className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 text-[14px] sm:text-[15px] leading-relaxed pl-[3.5rem] sm:pl-[4.25rem]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* No Results State */
            <div className="text-center py-16 bg-white border border-slate-100 rounded-3xl p-8 shadow-xs">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 mb-5">
                <HelpCircle className="h-8 w-8 text-[#d25c41]" />
              </span>
              <h3 className="text-xl font-bold text-[#14183e] mb-2">No matching questions found</h3>
              <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6">
                We couldn't find any questions matching "{searchTerm}". Try checking other categories or searching for a different keyword.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
                className="inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#b84d35] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#d25c41] to-[#b84d35] py-16 sm:py-20 px-4 sm:px-6 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white mx-auto mb-5">
            <MessageSquare className="h-6 w-6" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white/80 text-base mb-8">
            Can't find the answer you're looking for? Reach out directly to our support team and we will get back to you within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#d25c41] hover:bg-slate-50 transition-colors shadow-lg"
            >
              Contact Support
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
