import Link from "next/link";
import {
  ArrowRight,
  Megaphone,
  CheckCircle,
  Mail,
  Target,
  BarChart3,
  Globe,
  TrendingUp,
  Users,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Digital Marketing Services | Full-Funnel Campaigns — Aksh Digital",
  description:
    "Aksh Digital offers expert digital marketing services including Google Ads, PPC, email marketing, and more. Drive qualified traffic and conversions with data-driven campaigns.",
};

const features = [
  {
    icon: Target,
    title: "Pay-Per-Click (PPC)",
    desc: "Google Search, Display, and Shopping campaigns managed by certified experts. Maximum ROAS with minimum wastage.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Automated email sequences that nurture leads, onboard customers, and re-engage inactive subscribers at scale.",
  },
  {
    icon: Globe,
    title: "Content Marketing",
    desc: "Blog articles, guides, and multimedia content that attracts, educates, and converts your ideal audience.",
  },
  {
    icon: BarChart3,
    title: "Conversion Rate Optimisation",
    desc: "Landing page A/B testing, UX improvements, and funnel analysis to turn more visitors into paying customers.",
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    desc: "Authentic partnerships with relevant micro and macro influencers to amplify your brand reach and credibility.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Reporting",
    desc: "Real-time dashboards and weekly reports that show you exactly which channels are driving revenue.",
  },
];

const process = [
  { step: "01", title: "Discovery & Goal Setting", desc: "We deep-dive into your business, competitors, and audience to set measurable, realistic targets." },
  { step: "02", title: "Strategy Design", desc: "A custom multi-channel marketing blueprint aligned with your budget, timeline, and business objectives." },
  { step: "03", title: "Campaign Launch", desc: "Creative assets, ad copies, audiences, and tracking are set up and launched with precision." },
  { step: "04", title: "Optimise & Scale", desc: "Continuous A/B testing and budget reallocation to maximise performance week over week." },
  { step: "05", title: "Report & Grow", desc: "Monthly strategy reviews with actionable insights and a growth roadmap for the next quarter." },
];

const results = [
  { num: "4x", label: "Average ROAS Delivered" },
  { num: "150+", label: "Campaigns Managed" },
  { num: "40%", label: "Avg. CPA Reduction" },
  { num: "₹10Cr+", label: "Ad Spend Managed" },
];

export default function DigitalMarketingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#f6ac55]">Digital Marketing</span>
          </nav>
          <div className="flex items-center gap-2 mb-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20">
              <Megaphone className="h-5 w-5 text-blue-400" />
            </span>
            <span className="text-sm font-semibold text-[#f6ac55] uppercase tracking-wider">Digital Marketing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-tight tracking-tight mb-6">
            Marketing That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Moves the Needle
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
            Full-funnel digital marketing campaigns built to attract, engage, and convert
            your ideal customers — at every stage of their journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-3.5 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Get a Free Strategy Session
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300">
              ← All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {results.map(({ num, label }) => (
            <div key={label}>
              <p className="text-3xl sm:text-4xl font-bold text-white">{num}</p>
              <p className="mt-1 text-sm text-white/80 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">What We Offer</h2>
            <p className="text-slate-600 max-w-xl mx-auto">End-to-end digital marketing solutions designed for measurable business growth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 mb-4">
                  <Icon className="h-6 w-6 text-blue-600" strokeWidth={2} />
                </span>
                <h3 className="text-lg font-bold text-[#14183e] mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">Our Process</h2>
            <p className="text-slate-600 max-w-xl mx-auto">From strategy to execution — a clear, accountable roadmap for your campaigns.</p>
          </div>
          <div className="space-y-6">
            {process.map(({ step, title, desc }, i) => (
              <div key={step} className="flex gap-5 sm:gap-6 items-start">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm shadow-md">
                    {step}
                  </span>
                  {i < process.length - 1 && <span className="mt-2 h-12 w-px bg-blue-100" />}
                </div>
                <div className="pt-2 pb-6">
                  <h3 className="text-lg font-bold text-[#14183e] mb-1.5">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#14183e] mb-6">Why Aksh Digital?</h2>
            <ul className="space-y-4">
              {[
                "Google & Meta Certified marketing professionals",
                "Dedicated campaign manager for each client",
                "Real-time reporting dashboard — 24/7 access",
                "Proven cross-industry experience (E-commerce, SaaS, Local)",
                "No hidden fees — 100% transparent pricing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-slate-700 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#0f1535] p-8 sm:p-10 text-center">
            <Megaphone className="h-12 w-12 text-[#f6ac55] mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-white mb-3">Free Marketing Audit</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              We'll review your current marketing setup and tell you exactly where you're leaving money on the table.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#b84d35] transition-colors">
              <Phone className="h-4 w-4" />
              Book Free Audit
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 py-16 px-4 sm:px-6 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Grow Your Business?</h2>
          <p className="text-white/80 mb-8">Let's craft a digital marketing strategy that drives real, measurable revenue for your brand.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-blue-600 hover:bg-slate-50 transition-colors shadow-lg">
            Start Growing Today
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
