import Link from "next/link";
import {
  ArrowRight,
  Palette,
  CheckCircle,
<<<<<<< HEAD
=======
  Check,
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
  Layers,
  PenTool,
  ImageIcon,
  Film,
  FileText,
  Package,
<<<<<<< HEAD
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
=======
  Sparkles,
  TrendingUp,
  Target,
  Camera,
  Globe,
  MapPin,
  Mail,
  Clock,
  Zap,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "High-Impact Graphic Design & Brand Identity Services — Aksh Digital",
  description:
    "Graphic design services engineered to capture attention and drive conversions. Logos, brand identity, performance ad creatives, UI/UX, and marketing collateral by Aksh Digital.",
  alternates: {
    canonical: "https://www.akshdigital.in/services/graphic-design/",
  },
};

const services = [
  {
    id: "brand-identity",
    number: "01",
    badge: "Logos, Typography & Guidelines",
    title: "Brand Identity & Visual Systems",
    icon: PenTool,
    points: [
      "Custom logo design, brand style guides, typography systems, and color palettes.",
      "Comprehensive brand guideline documentation to ensure visual consistency across all touchpoints.",
      "Corporate stationery, business cards, email signatures, and pitch deck presentations.",
    ],
  },
  {
    id: "performance-ads",
    number: "02",
    badge: "Direct-Response Meta & Display",
    title: "High-Converting Performance Ad Creatives",
    icon: Target,
    points: [
      "Static and animated ad creatives engineered for Google Display, Meta Ads (Facebook & Instagram), and LinkedIn.",
      "Rapid creative variant production for A/B split testing to combat ad fatigue and lower customer acquisition costs (CAC).",
      "Thumb-stopping direct response layouts designed in collaboration with our performance marketing agency India specialists.",
    ],
  },
  {
    id: "social-creatives",
    number: "03",
    badge: "Carousels, Reels & Motion",
    title: "Social Media Creatives & Motion Graphics",
    icon: Camera,
    points: [
      "Custom Instagram carousel templates, feed graphics, and story layouts.",
      "Engaging infographic design, vector illustrations, and short-form motion graphics tailored for maximum shareability.",
      "Branded channel assets for YouTube, LinkedIn, X, and Pinterest.",
    ],
  },
  {
    id: "ui-ux",
    number: "04",
    badge: "Modern Interfaces & Components",
    title: "UI/UX & Web Design Assets",
    icon: Layers,
    points: [
      "Modern website UI layouts, landing page assets, and interactive component styling.",
      "Custom vector icons, data visualization graphics, and interactive design elements that complement modern development stacks like Next.js and React.",
    ],
  },
  {
    id: "collateral-print",
    number: "05",
    badge: "Brochures, Packaging & Catalogs",
    title: "Marketing Collateral & Print Media",
    icon: Package,
    points: [
      "High-resolution corporate brochures, product catalogs, roll-up banners, and event backdrops.",
      "Packaging and label design tailored for retail, D2C, and e-commerce distribution.",
    ],
  },
];

const domesticCities = [
  { city: "Jaipur (Studio HQ)", slug: "jaipur", tag: "Creative Studio" },
  { city: "Delhi NCR", slug: "delhi", tag: "Corporate Scale" },
  { city: "Mumbai", slug: "mumbai", tag: "Media Capital" },
  { city: "Bangalore", slug: "bangalore", tag: "Tech Brands" },
  { city: "Pune", slug: "pune", tag: "Emerging Enterprises" },
  { city: "Indore", slug: "indore", tag: "Fast-Growth Hub" },
];

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Creative Discovery & Brand Briefing",
    desc: "We analyze your brand values, target audience demographics, and competitor visual positioning.",
  },
  {
    phase: "Phase 2",
    title: "Moodboarding & Concept Formulation",
    desc: "Developing initial design directions, color harmony concepts, and wireframe layouts.",
  },
  {
    phase: "Phase 3",
    title: "High-Fidelity Design & Iteration",
    desc: "Crafting pixel-perfect design deliverables with structured feedback loops via Figma.",
  },
  {
    phase: "Phase 4",
    title: "Multi-Format Asset Export & Delivery",
    desc: "Supplying production-ready files in all required formats (SVG, PNG, WebP, PDF, AI, PSD) optimized for web and print.",
  },
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
];

export default function GraphicDesignPage() {
  return (
    <div className="bg-white">
<<<<<<< HEAD
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
=======
      {/* ── 1. Hero Section ── */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 md:py-28 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#f6ac55]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#f6ac55]">Graphic Design</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#d25c41]/30 bg-[#d25c41]/10 px-4 py-1.5 text-sm font-semibold text-[#f6ac55] mb-6">
            <Sparkles className="h-4 w-4" />
            Visual Identity &amp; Creative Performance
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            High-Impact Graphic Design Services Engineered to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-[#d25c41] to-[#f6ac55]">
              Capture Attention and Drive Conversions
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Visuals should do more than look good—they must build trust and inspire action. As a premier digital marketing and design agency, Aksh Digital blends creative storytelling with conversion-focused design principles. From our creative studio in Jaipur to fast-scaling brands across Pan-India, the USA, and worldwide, we produce visual assets that elevate your brand and maximize campaign ROI.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request a Free Creative Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link
              href="#core-services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xs px-8 py-4 text-sm sm:text-base font-bold text-white hover:bg-white/15 transition-all duration-300"
            >
              View Design Capabilities
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Results */}
      <section className="bg-gradient-to-r from-violet-600 to-pink-600 py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {results.map(({ num, label }) => (
            <div key={label}>
              <p className="text-3xl sm:text-4xl font-bold text-white">{num}</p>
              <p className="mt-1 text-sm text-white/80 font-medium">{label}</p>
=======
      {/* ── Impact Metrics Strip ── */}
      <section className="border-b border-slate-100 bg-[#fafaf9] py-8 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "500+", label: "Creative Assets Delivered", sub: "Digital & physical print" },
            { num: "48hr", label: "Sprint Turnaround", sub: "Fast concept delivery" },
            { num: "33%", label: "Higher Conversion Lift", sub: "Custom UI/UX & ad creatives" },
            { num: "100%", label: "Source File Ownership", sub: "Figma, AI, PSD & SVG" },
          ].map(({ num, label, sub }) => (
            <div key={label} className="p-3">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#14183e]">{num}</p>
              <p className="mt-1 text-sm font-bold text-[#d25c41]">{label}</p>
              <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            </div>
          ))}
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* ── 2. Overview: Why Design is a Strategic Revenue Driver ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41]">
                  Performance-Led Aesthetics
                </span>
                <span className="h-px w-8 bg-[#d25c41]/40" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#14183e] leading-tight mb-6">
                Moving from Basic Visuals to{" "}
                <span className="text-[#d25c41]">Conversion-Optimized Brand Design</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                In crowded digital feeds, your visual presentation determines whether a prospective customer stops to engage or scrolls past. Weak design, inconsistent branding, and generic stock imagery erode trust and decrease ad performance.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                As an integrated digital marketing and web development agency, Aksh Digital treats graphic design as a core performance mechanism. We design visual assets that support your entire customer journey—from thumb-stopping social ads and polished corporate branding to frictionless web UI/UX. Whether you need a dedicated branding agency in Jaipur to define your local identity or an agile offshore design team supporting your international campaigns as a digital marketing agency USA partner, we deliver creative assets built to perform.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#b84d35] transition-all shadow-md"
                >
                  Book Creative Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {[
                {
                  icon: Target,
                  title: "Thumb-Stopping Ad Architecture",
                  desc: "Direct response typography, contrast hierarchies, and visual cues tailored to combat banner blindness.",
                },
                {
                  icon: Layers,
                  title: "Cohesive Multi-Platform Systems",
                  desc: "Consistent visual language across Meta, Google, LinkedIn, web platforms, and print collateral.",
                },
                {
                  icon: Zap,
                  title: "Developer-Ready Asset Integration",
                  desc: "Pixel-perfect SVGs, WebP exports, and UI components built to slide cleanly into Next.js and React codebases.",
                },
              ].map((card, idx) => {
                const CIcon = card.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-[#fafaf9] p-6 hover:border-[#d25c41]/40 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d25c41]/10 text-[#d25c41]">
                        <CIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <h4 className="text-base font-bold text-[#14183e] mb-1">
                          {card.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* ── 3. Our Core Graphic Design & Creative Services ── */}
      <section id="core-services" className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fafaf9] border-t border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Full-Spectrum Creative Suite
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Our Core Graphic Design &amp; Creative Services
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Every design asset is crafted by senior art directors and conversion specialists with an eye for commercial results.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((item) => {
              const SIcon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-xs hover:shadow-xl hover:border-[#d25c41]/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-bold text-[#d25c41]">
                          <SIcon className="h-3.5 w-3.5" />
                          {item.badge}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                          Vertical {item.number}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#14183e] mb-5">
                        {item.title}
                      </h3>

                      <ul className="space-y-3.5">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3">
                            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d25c41] text-white">
                              <Check className="h-2.5 w-2.5 stroke-[3]" />
                            </span>
                            <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                              {pt}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:w-56 shrink-0 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-5 md:pt-0 md:pl-8">
                      <span className="text-xs text-slate-400 font-semibold mb-2">
                        Design Standard
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        Structured Figma workspaces, live prototyping, and uncompressed production exports.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs font-bold text-[#d25c41] hover:bg-[#d25c41] hover:text-white hover:border-[#d25c41] transition-all"
                      >
                        Request Design Scope &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* ── 4. Cross-Market Delivery: Local Excellence & Global Scale ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#0f1535] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-[#f6ac55] mb-4">
              <Globe className="h-3.5 w-3.5" />
              Creative Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Cross-Market Delivery: Local Excellence &amp; Global Scale
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              High-touch creative brand identity for domestic Indian champions paired with flexible offshore design bandwidth for overseas partners.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Hyper-Local Indian Brand Presence */}
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d25c41]/20 text-[#f6ac55]">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Hyper-Local Indian Brand Presence
                    </h3>
                    <p className="text-xs text-[#f6ac55] font-semibold">
                      Jaipur Studio &amp; Metro Coverage
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Delivering custom visual branding tailored for regional nuances as a trusted creative partner in Jaipur, Delhi NCR, Mumbai, Bangalore, Pune, and Indore.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                  {domesticCities.map(({ city, slug, tag }) => (
                    <Link
                      key={slug}
                      href={`/seo-services/${slug}/`}
                      className="group p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-[#d25c41] hover:border-[#d25c41] transition-all text-xs text-white flex flex-col justify-between"
                    >
                      <span className="font-bold flex items-center justify-between">
                        {city}
                        <ArrowRight className="h-3 w-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </span>
                      <span className="text-[10px] text-slate-400 group-hover:text-white/80 mt-1">
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Jaipur Creative Studio</span>
                <Link href="/contact/" className="text-[#f6ac55] hover:underline font-semibold">
                  Contact Design Studio &rarr;
                </Link>
              </div>
            </div>

            {/* Card 2: Global Offshore Design Services */}
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6ac55]/20 text-[#f6ac55]">
                    <Globe className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Global Offshore Design Services (USA, UK, Global)
                    </h3>
                    <p className="text-xs text-[#f6ac55] font-semibold">
                      Outsourced Design Bandwidth
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Dedicated design sprints for international agencies and enterprises needing high-volume creative production, rapid turnaround times, and direct Slack/Figma collaboration through our outsourced digital marketing services.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    {
                      icon: Clock,
                      title: "Dedicated Timezone Synchronicity",
                      desc: "Overlapping work hours for real-time reviews in EST, PST, and GMT.",
                    },
                    {
                      icon: Zap,
                      title: "High-Volume Sprint Output",
                      desc: "Rapid ad creative variants, landing page layouts, and marketing assets.",
                    },
                    {
                      icon: Layers,
                      title: "Figma & Cloud Source Control",
                      desc: "Collaborate directly in cloud files with complete source vector access.",
                    },
                  ].map((item, idx) => {
                    const IIcon = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-3">
                        <IIcon className="h-4 w-4 text-[#f6ac55] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-white">{item.title}</p>
                          <p className="text-[11px] text-slate-300 leading-snug mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-slate-400">
                <span>International Design Desk</span>
                <Link href="/contact" className="text-[#f6ac55] hover:underline font-semibold">
                  Book Offshore Design Sprint &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Our 4-Step Creative Workflow ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Design Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Our 4-Step Creative Workflow
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              A structured, collaborative pipeline designed to eliminate endless revision rounds and deliver high-impact results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {roadmapPhases.map((phase, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl border border-slate-200 bg-[#fafaf9] p-8 hover:border-[#d25c41]/40 hover:shadow-lg transition-all duration-300"
              >
                <span className="inline-block rounded-full bg-[#d25c41] text-white text-xs font-bold px-3 py-1 mb-4">
                  {phase.phase}
                </span>
                <h3 className="text-xl font-bold text-[#14183e] mb-3">
                  {phase.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Why Choose Aksh Digital for Graphic Design? ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fafaf9] border-t border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Creative Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Why Choose Aksh Digital for Graphic Design?
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              We connect visual artistry directly with commercial performance metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Marketing-Driven Approach",
                desc: "Our designers work hand-in-hand with our paid media buyers and SEO strategists to ensure every asset drives tangible business metrics.",
              },
              {
                icon: Layers,
                title: "Multi-Format Versatility",
                desc: "Seamless execution across digital, mobile, web, and physical print mediums.",
              },
              {
                icon: Zap,
                title: "Fast Turnaround & Dedicated Sprints",
                desc: "Transparent milestones with zero delays, offering scalable design bandwidth without the overhead of hiring in-house.",
              },
            ].map((card, idx) => {
              const PIcon = card.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-9 hover:border-[#d25c41]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d25c41]/10 text-[#d25c41] mb-6">
                      <PIcon className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h3 className="text-xl font-bold text-[#14183e] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold text-[#d25c41] uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle className="h-4 w-4" /> Design Standard
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. Ready to Transform Your Visual Identity? (Bottom CTA) ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#d25c41] via-[#c65239] to-[#b84d35] py-20 sm:py-24 px-4 sm:px-6 text-center text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-white mb-6 uppercase tracking-wider">
            Ready to Transform Your Visual Identity?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Claim Your Free Creative &amp; Brand Audit
          </h2>

          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Let our design team evaluate your current brand assets and provide actionable recommendations to enhance visual appeal and conversion rates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm sm:text-base font-bold text-[#d25c41] hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-0.5"
            >
              Get Started with Custom Design
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="mailto:connect@akshdigital.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-xs px-7 py-4 text-sm sm:text-base font-semibold text-white hover:bg-white/20 transition-all"
            >
              <Mail className="h-4 w-4" />
              connect@akshdigital.com
            </a>
          </div>

          <p className="text-xs text-white/70">
            No obligation. Zero lock-in contracts. Actionable visual recommendations.
          </p>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
        </div>
      </section>
    </div>
  );
}
