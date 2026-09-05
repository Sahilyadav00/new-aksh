import Link from "next/link";
import {
  ArrowRight,
  Globe,
  CheckCircle,
  Zap,
  ShieldCheck,
  Smartphone,
  Code2,
  BarChart3,
  Layers,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Web Development Services | Fast, SEO-Ready Websites — Aksh Digital",
  description:
    "Aksh Digital builds high-performance, SEO-friendly websites using Next.js, React, and WordPress. Custom web solutions designed to convert visitors into customers.",
};

const features = [
  { icon: Code2, title: "Custom Website Development", desc: "Bespoke websites built from the ground up in Next.js or React — fast, scalable, and tailored to your brand." },
  { icon: Layers, title: "WordPress & CMS Development", desc: "Powerful CMS-driven websites that let you manage content easily without touching any code." },
  { icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect layouts that look and perform flawlessly on every device — mobile, tablet, and desktop." },
  { icon: Zap, title: "Performance Optimisation", desc: "Core Web Vitals tuning, image optimisation, and caching strategies for blazing-fast load times." },
  { icon: ShieldCheck, title: "Security & Maintenance", desc: "SSL, regular updates, uptime monitoring, and daily backups — your site stays secure 24/7." },
  { icon: BarChart3, title: "SEO-Ready Architecture", desc: "Clean HTML structure, schema markup, and technical SEO built in from day one — not bolted on after." },
];

const techStack = [
  "Next.js", "React", "Node.js", "TypeScript", "WordPress", "Tailwind CSS", "MongoDB", "PostgreSQL", "AWS", "Vercel",
];

const process = [
  { step: "01", title: "Discovery & Wireframing", desc: "We map out your site structure, user journeys, and conversion goals before writing a single line of code." },
  { step: "02", title: "UI/UX Design", desc: "High-fidelity Figma designs that reflect your brand and are optimised for user engagement and conversion." },
  { step: "03", title: "Development & CMS Setup", desc: "Clean, well-documented code developed in sprints with regular previews for your feedback." },
  { step: "04", title: "Testing & QA", desc: "Cross-browser testing, performance audits, accessibility checks, and SEO validation before go-live." },
  { step: "05", title: "Launch & Support", desc: "Smooth deployment with post-launch monitoring and 30 days of free support to ensure everything runs perfectly." },
];

const results = [
  { num: "100+", label: "Websites Delivered" },
  { num: "99.9%", label: "Uptime Guaranteed" },
  { num: "<1.5s", label: "Avg. Load Time" },
  { num: "4.9★", label: "Client Satisfaction" },
];

export default function WebDevelopmentPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#f6ac55]">Web Development</span>
          </nav>
          <div className="flex items-center gap-2 mb-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20">
              <Globe className="h-5 w-5 text-emerald-400" />
            </span>
            <span className="text-sm font-semibold text-[#f6ac55] uppercase tracking-wider">Web Development</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-tight tracking-tight mb-6">
            Websites Built to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Convert & Rank
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
            We design and develop high-performance websites that make powerful first impressions,
            rank on Google, and turn visitors into loyal customers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-3.5 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300">
              ← All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-10 px-4 sm:px-6">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">What We Build</h2>
            <p className="text-slate-600 max-w-xl mx-auto">From landing pages to complex web apps — we deliver websites that work as hard as you do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 mb-4">
                  <Icon className="h-6 w-6 text-emerald-600" strokeWidth={2} />
                </span>
                <h3 className="text-lg font-bold text-[#14183e] mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 px-4 sm:px-6 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6">Technologies We Use</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">Our Development Process</h2>
            <p className="text-slate-600 max-w-xl mx-auto">A transparent, collaborative process that keeps you informed at every stage.</p>
          </div>
          <div className="space-y-6">
            {process.map(({ step, title, desc }, i) => (
              <div key={step} className="flex gap-5 sm:gap-6 items-start">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-sm shadow-md">{step}</span>
                  {i < process.length - 1 && <span className="mt-2 h-12 w-px bg-emerald-100" />}
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
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#14183e] mb-6">Why Build With Aksh Digital?</h2>
            <ul className="space-y-4">
              {[
                "Designs that reflect your brand — not templates",
                "Built with Next.js for max speed and SEO",
                "Mobile-first, accessible, and responsive by default",
                "Lifetime source code ownership — you're not locked in",
                "Post-launch support and maintenance packages available",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-slate-700 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#0f1535] p-8 sm:p-10 text-center">
            <Globe className="h-12 w-12 text-[#f6ac55] mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-white mb-3">Free Website Consultation</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Tell us about your project and get a detailed scope, timeline, and quote — within 24 hours.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#b84d35] transition-colors">
              <Phone className="h-4 w-4" />
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-700 py-16 px-4 sm:px-6 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Build Something Remarkable</h2>
          <p className="text-white/80 mb-8">A website that wins customers before you even say hello.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-emerald-700 hover:bg-slate-50 transition-colors shadow-lg">
            Start Your Project
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
