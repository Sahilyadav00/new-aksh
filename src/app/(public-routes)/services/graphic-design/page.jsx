import Link from "next/link";
import {
  ArrowRight,
  Palette,
  CheckCircle,
  Layers,
  PenTool,
  ImageIcon,
  Film,
  FileText,
  Package,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Graphic Design Services | Brand Identity & Creative Design — Aksh Digital",
  description:
    "Aksh Digital offers expert graphic design services including logo design, brand identity, social media creatives, packaging design, and UI/UX. Elevate your brand visually.",
};

const features = [
  { icon: PenTool, title: "Logo & Brand Identity", desc: "Distinctive logos and complete brand identity systems — colour palette, typography, guidelines — that make your brand unmistakable and unforgettable." },
  { icon: ImageIcon, title: "Social Media Creatives", desc: "Scroll-stopping posts, stories, carousels, and ad creatives tailored for each platform and optimised for engagement and brand consistency." },
  { icon: FileText, title: "Marketing Collateral", desc: "Brochures, flyers, presentations, business cards, and all print/digital marketing materials that reflect your brand's professionalism." },
  { icon: Package, title: "Packaging Design", desc: "Product packaging that stands out on shelves and online listings — combining visual appeal, brand alignment, and regulatory compliance." },
  { icon: Film, title: "Motion Graphics & Video", desc: "Animated logos, explainer videos, social media animations, and brand films that communicate complex ideas in visually compelling formats." },
  { icon: Layers, title: "UI/UX Design", desc: "Beautiful, intuitive digital interfaces for websites and apps — wireframes, prototypes, and pixel-perfect UI designs that convert and delight." },
];

const process = [
  { step: "01", title: "Discovery & Brand Brief", desc: "We learn everything about your brand, audience, competitors, and design preferences through a structured creative brief." },
  { step: "02", title: "Research & Concept Development", desc: "Our designers research your industry and develop 3–5 distinct creative concepts, each with a clear strategic rationale." },
  { step: "03", title: "Design & Refinement", desc: "We present initial designs and collaborate with you through revision rounds until every detail is exactly right." },
  { step: "04", title: "Finalisation & Delivery", desc: "All files are delivered in every format you need — print-ready, web-optimised, vector source files, and brand guidelines." },
];

const results = [
  { num: "500+", label: "Design Projects Completed" },
  { num: "4.9★", label: "Client Design Rating" },
  { num: "48hr", label: "First Concepts Turnaround" },
  { num: "100%", label: "Source File Ownership" },
];

const deliverables = [
  "Logo files (SVG, PNG, EPS, PDF)",
  "Brand guidelines document",
  "Colour codes (HEX, CMYK, Pantone)",
  "Typography kit with licensed fonts",
  "Social media profile templates",
  "Business card design",
  "Letterhead & email signature",
  "Unlimited revisions until satisfied",
];

export default function GraphicDesignPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#f6ac55]">Graphic Design</span>
          </nav>
          <div className="flex items-center gap-2 mb-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
              <Palette className="h-5 w-5 text-violet-400" />
            </span>
            <span className="text-sm font-semibold text-[#f6ac55] uppercase tracking-wider">Graphic Design</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-tight tracking-tight mb-6">
            Design That Makes Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
              Brand Unforgettable
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
            From brand identity to social media creatives — we craft visual experiences that communicate your brand's value, build trust, and drive business results.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-3.5 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300">
              Get a Design Quote
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300">
              ← All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-gradient-to-r from-violet-600 to-pink-600 py-10 px-4 sm:px-6">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">Our Graphic Design Services</h2>
            <p className="text-slate-600 max-w-xl mx-auto">From logos to full brand systems — every visual element your business needs to look world-class.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:border-violet-200 hover:-translate-y-1 transition-all duration-300">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 mb-4">
                  <Icon className="h-6 w-6 text-violet-600" strokeWidth={2} />
                </span>
                <h3 className="text-lg font-bold text-[#14183e] mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#14183e] mb-4">What's Included in Every Brand Package</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">We don't just hand you a logo file. We give you everything you need to use your brand consistently and professionally across every touchpoint.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-slate-700 text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-violet-50 to-pink-50 border border-violet-100 p-8 sm:p-10">
            <Palette className="h-12 w-12 text-violet-600 mb-4" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-[#14183e] mb-3">Design That Pays for Itself</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Businesses with strong visual identities convert 33% more leads, charge premium prices, and retain customers longer. Great design isn't an expense — it's your highest-ROI investment.
            </p>
            <div className="space-y-3">
              {[
                "33% higher conversion rates with professional design",
                "Premium pricing justified by premium brand perception",
                "2x faster decision-making trust from first visual impressions",
              ].map((fact) => (
                <div key={fact} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-violet-600 mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-slate-600 text-sm">{fact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">Our Design Process</h2>
            <p className="text-slate-600 max-w-xl mx-auto">A collaborative, transparent process designed to get you a result you're proud to call your brand.</p>
          </div>
          <div className="space-y-6">
            {process.map(({ step, title, desc }, i) => (
              <div key={step} className="flex gap-5 sm:gap-6 items-start">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white font-bold text-sm shadow-md">{step}</span>
                  {i < process.length - 1 && <span className="mt-2 h-12 w-px bg-violet-100" />}
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
            <h2 className="text-3xl font-bold text-[#14183e] mb-6">Why Choose Aksh Digital for Design?</h2>
            <ul className="space-y-4">
              {[
                "Senior designers with 5+ years of brand experience",
                "Strategy-first approach — design rooted in business goals",
                "Unlimited revisions until you're 100% satisfied",
                "Files delivered in all formats — print and digital",
                "Fast turnaround — first concepts in 48 hours",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-slate-700 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#0f1535] p-8 sm:p-10 text-center">
            <PenTool className="h-12 w-12 text-[#f6ac55] mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-white mb-3">Free Design Consultation</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Share your brand vision and we'll show you how great design can transform your business — with zero obligation.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#b84d35] transition-colors">
              <Phone className="h-4 w-4" />
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 to-pink-700 py-16 px-4 sm:px-6 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready for a Brand That Turns Heads?</h2>
          <p className="text-white/80 mb-8">Let's design a visual identity that your competitors will envy and your customers will trust.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-violet-700 hover:bg-slate-50 transition-colors shadow-lg">
            Start My Design Project
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
