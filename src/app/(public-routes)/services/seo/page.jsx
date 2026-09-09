import Link from "next/link";
import {
  ArrowRight,
  Search,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Globe,
  Link2,
  FileText,
  Zap,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "SEO Strategies & Services | Rank Higher on Google — Aksh Digital",
  description:
    "Aksh Digital's expert SEO strategies help businesses rank on the first page of Google. We offer on-page SEO, technical SEO, link building, and local SEO services across India.",
};

const features = [
  {
    icon: Search,
    title: "On-Page SEO",
    desc: "Keyword research, meta optimisation, content structuring, and internal linking to make every page a ranking powerhouse.",
  },
  {
    icon: Zap,
    title: "Technical SEO",
    desc: "Site speed, Core Web Vitals, structured data, crawlability, and indexation fixes that Google rewards with higher rankings.",
  },
  {
    icon: Link2,
    title: "Link Building",
    desc: "High-authority backlinks from relevant, trusted domains that build your site's authority and accelerate ranking growth.",
  },
  {
    icon: Globe,
    title: "Local SEO",
    desc: "Google Business Profile optimisation, local citations, and geo-targeted content to dominate your city's search results.",
  },
  {
    icon: FileText,
    title: "SEO Content Strategy",
    desc: "Topical authority campaigns and blog content that ranks for high-intent keywords and converts readers into customers.",
  },
  {
    icon: BarChart3,
    title: "SEO Reporting & Analytics",
    desc: "Monthly ranking reports, traffic analysis, and competitor benchmarking so you see exactly where your investment is going.",
  },
];

const process = [
  { step: "01", title: "SEO Audit", desc: "A comprehensive technical and content audit of your current site to identify quick wins and growth opportunities." },
  { step: "02", title: "Strategy & Planning", desc: "Keyword mapping, competitor gap analysis, and a 90-day roadmap tailored to your goals and industry." },
  { step: "03", title: "On-Site Implementation", desc: "Our team implements all on-page and technical fixes directly — no back-and-forth or handholding required from you." },
  { step: "04", title: "Off-Page & Link Building", desc: "Targeted outreach to authoritative websites to earn backlinks that shift your domain authority upward." },
  { step: "05", title: "Monitor & Optimise", desc: "Weekly rank tracking and monthly strategy calls to refine our approach as the algorithm evolves." },
];

const results = [
  { num: "3x", label: "Average Traffic Growth" },
  { num: "85%", label: "First-Page Rankings Achieved" },
  { num: "60%", label: "Avg. Increase in Organic Leads" },
  { num: "6–9", label: "Months to Significant Results" },
];

export default function SEOStrategiesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#d25c41]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#f6ac55]/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#f6ac55]">SEO Strategies</span>
          </nav>
          <div className="flex items-center gap-2 mb-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d25c41]/20">
              <Search className="h-5 w-5 text-[#d25c41]" />
            </span>
            <span className="text-sm font-semibold text-[#f6ac55] uppercase tracking-wider">SEO Strategies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-tight tracking-tight mb-6">
            Rank Higher. Get Found.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] to-[#f6ac55]">
              Grow Faster.
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
            We build sustainable SEO strategies that put your business in front of the people
            actively searching for what you offer — and keep you there long-term.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-3.5 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Free SEO Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300"
            >
              ← All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Results Strip */}
      <section className="bg-[#d25c41] py-10 px-4 sm:px-6">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">
              Our SEO Service Offering
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              A holistic approach that covers every dimension of search engine optimisation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:border-[#d25c41]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d25c41]/10 mb-4">
                  <Icon className="h-6 w-6 text-[#d25c41]" strokeWidth={2} />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">
              Our SEO Process
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              A proven, systematic approach that delivers predictable, compounding results.
            </p>
          </div>
          <div className="space-y-6">
            {process.map(({ step, title, desc }, i) => (
              <div key={step} className="flex gap-5 sm:gap-6 items-start group">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d25c41] text-white font-bold text-sm shadow-md">
                    {step}
                  </span>
                  {i < process.length - 1 && (
                    <span className="mt-2 h-12 w-px bg-[#d25c41]/20" />
                  )}
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
            <h2 className="text-3xl font-bold text-[#14183e] mb-4">
              Why Choose Aksh Digital for SEO?
            </h2>
            <ul className="space-y-4 mt-6">
              {[
                "100% white-hat SEO — safe, sustainable, Google-compliant",
                "Dedicated SEO specialist assigned to your account",
                "Transparent monthly reporting with rank tracking",
                "Experience across 15+ industries and verticals",
                "Local + national SEO expertise under one roof",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#d25c41] mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-slate-700 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#0f1535] p-8 sm:p-10 text-center">
            <TrendingUp className="h-12 w-12 text-[#f6ac55] mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-white mb-3">
              Free SEO Health Check
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Get a detailed report on your website's current SEO health —
              absolutely free, with zero obligations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#b84d35] transition-colors"
            >
              <Phone className="h-4 w-4" />
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#d25c41] to-[#b84d35] py-16 px-4 sm:px-6 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Dominate Google Search?
          </h2>
          <p className="text-white/80 mb-8">
            Let's build an SEO strategy that puts you ahead of your competitors — permanently.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#d25c41] hover:bg-slate-50 transition-colors shadow-lg"
          >
            Start My SEO Journey
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
