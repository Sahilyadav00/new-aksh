import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  CheckCircle,
  Target,
  BarChart3,
  Repeat,
  DollarSign,
  Zap,
  Globe,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Performance Marketing Services | Maximise ROI on Ad Spend — Aksh Digital",
  description:
    "Aksh Digital's performance marketing experts run Google Ads, Meta Ads, and retargeting campaigns with a laser focus on ROI. Pay only for results that matter.",
};

const features = [
  { icon: Target, title: "Google Ads Management", desc: "Search, Display, Shopping, and YouTube campaigns expertly managed to maximise every rupee of your budget." },
  { icon: Globe, title: "Meta Ads (Facebook & Instagram)", desc: "Precision audience targeting, creative testing, and budget optimisation for maximum ROAS on Meta platforms." },
  { icon: Repeat, title: "Retargeting Campaigns", desc: "Re-engage visitors who left without converting with personalised ads that bring them back ready to buy." },
  { icon: BarChart3, title: "Conversion Tracking Setup", desc: "Full-funnel tracking via Google Tag Manager, GA4, and Meta Pixel so every action is measured and optimised." },
  { icon: DollarSign, title: "Budget Optimisation", desc: "Continuous bid management, audience refinement, and creative rotation to reduce CPA and scale winners." },
  { icon: Zap, title: "Landing Page Optimisation", desc: "High-converting landing pages and A/B tests that dramatically improve conversion rates from your ad traffic." },
];

const process = [
  { step: "01", title: "Account Audit", desc: "We analyse your existing ad accounts (or build from scratch), identifying wasted spend and missed opportunities." },
  { step: "02", title: "Strategy & Media Plan", desc: "A detailed media plan with channel allocation, audience strategy, creative brief, and monthly budget phasing." },
  { step: "03", title: "Creative Production", desc: "Ad copy, creatives, and landing pages built to capture attention and drive action at every funnel stage." },
  { step: "04", title: "Launch & Optimise", desc: "Campaigns go live with daily monitoring and weekly optimisation cycles to improve performance continuously." },
  { step: "05", title: "Report & Scale", desc: "Monthly performance reviews with clear attribution data and a scaling roadmap for the next period." },
];

const results = [
  { num: "4.2x", label: "Average ROAS Achieved" },
  { num: "55%", label: "Avg. CPA Reduction" },
  { num: "₹20Cr+", label: "Revenue Generated" },
  { num: "200+", label: "Campaigns Optimised" },
];

export default function PerformanceMarketingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-amber-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#f6ac55]">Performance Marketing</span>
          </nav>
          <div className="flex items-center gap-2 mb-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
              <TrendingUp className="h-5 w-5 text-amber-400" />
            </span>
            <span className="text-sm font-semibold text-[#f6ac55] uppercase tracking-wider">Performance Marketing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-tight tracking-tight mb-6">
            Every Rupee Spent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Earns More Back
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
            Data-driven paid advertising campaigns across Google, Meta, and beyond —
            engineered to deliver the highest possible return on every rupee you invest.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-3.5 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300">
              Get a Free Ad Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300">
              ← All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-10 px-4 sm:px-6">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">Our Performance Marketing Services</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Results-focused paid media management across every major platform.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:border-amber-200 hover:-translate-y-1 transition-all duration-300">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 mb-4">
                  <Icon className="h-6 w-6 text-amber-600" strokeWidth={2} />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">Our Optimisation Process</h2>
            <p className="text-slate-600 max-w-xl mx-auto">A rigorous, data-driven cycle that continuously improves your ad performance.</p>
          </div>
          <div className="space-y-6">
            {process.map(({ step, title, desc }, i) => (
              <div key={step} className="flex gap-5 sm:gap-6 items-start">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-sm shadow-md">{step}</span>
                  {i < process.length - 1 && <span className="mt-2 h-12 w-px bg-amber-100" />}
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
            <h2 className="text-3xl font-bold text-[#14183e] mb-6">Why Choose Aksh Digital for Paid Ads?</h2>
            <ul className="space-y-4">
              {[
                "Google & Meta Certified performance marketing experts",
                "Zero wastage — budget allocated to proven audiences only",
                "Weekly performance reports with full transparency",
                "Creative refresh every 2 weeks to prevent ad fatigue",
                "Dedicated performance manager with direct WhatsApp access",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-slate-700 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#0f1535] p-8 sm:p-10 text-center">
            <TrendingUp className="h-12 w-12 text-[#f6ac55] mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-white mb-3">Free Ad Account Audit</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              We'll audit your existing Google or Meta ad account and show you exactly where you're wasting budget — for free.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#b84d35] transition-colors">
              <Phone className="h-4 w-4" />
              Get Free Audit
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600 py-16 px-4 sm:px-6 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Scale Your Revenue?</h2>
          <p className="text-white/80 mb-8">Let's build a performance marketing machine that generates predictable, scalable revenue growth.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-amber-700 hover:bg-slate-50 transition-colors shadow-lg">
            Start Scaling Now
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
