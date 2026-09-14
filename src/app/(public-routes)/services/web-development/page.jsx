import Link from "next/link";
import {
  ArrowRight,
  Globe,
  CheckCircle,
<<<<<<< HEAD
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
=======
  Check,
  Zap,
  ShieldCheck,
  Code2,
  BarChart3,
  Layers,
  ShoppingBag,
  Sparkles,
  Cpu,
  TrendingUp,
  MapPin,
  Mail,
  Clock,
  Database,
  Server,
  Smartphone,
} from "lucide-react";

export const metadata = {
  title: "Custom Web Development & Engineering Services — Aksh Digital",
  description:
    "High-performance custom web development engineered for speed, security, and scalability. Next.js, React, Node.js, headless e-commerce, and SaaS platforms by Aksh Digital.",
  alternates: {
    canonical: "https://www.akshdigital.in/services/web-development/",
  },
};

const services = [
  {
    id: "full-stack",
    number: "01",
    badge: "Next.js, React & Node.js",
    title: "Custom Full-Stack Web Applications",
    icon: Code2,
    points: [
      "Modern, server-side rendered (SSR) web applications built with Next.js, React, Node.js, and TypeScript.",
      "Scalable database architecture using PostgreSQL and MongoDB, deployed on high-availability cloud infrastructure like AWS and Docker.",
      "Modular code structure designed for fast feature deployment, enterprise security, and long-term maintainability.",
    ],
  },
  {
    id: "corporate-websites",
    number: "02",
    badge: "Sub-Second Speed & CRO",
    title: "Conversion-Focused Corporate & Business Websites",
    icon: Globe,
    points: [
      "Custom UI/UX wireframes designed to guide prospective clients toward high-value conversion actions.",
      "Ultra-fast Core Web Vitals optimization ensuring sub-second load times and lower bounce rates.",
      "Native search engine compatibility engineered from day one by our search engine optimization marketing agency specialists.",
    ],
  },
  {
    id: "ecommerce",
    number: "03",
    badge: "Shopify & Headless Architecture",
    title: "Headless & Scalable E-Commerce Development",
    icon: ShoppingBag,
    points: [
      "Custom headless e-commerce builds, custom Shopify architectures, and high-volume product catalogs.",
      "Frictionless checkout funnels, multi-currency payment gateway integrations (Stripe, Razorpay, PayPal), and real-time inventory management.",
      "Seamless alignment with our performance marketing agency India team to support high-ROAS shopping and dynamic product ads.",
    ],
  },
  {
    id: "portals-saas",
    number: "04",
    badge: "Dashboards & MVPs",
    title: "Custom Web Portals & SaaS MVP Development",
    icon: Layers,
    points: [
      "Scalable minimum viable products (MVPs), customer dashboards, and internal workflow management portals.",
      "Secure RESTful and GraphQL API development, role-based authentication, and third-party SaaS integrations.",
      "Agile sprint workflows designed to launch market-ready software products on accelerated timelines.",
    ],
  },
  {
    id: "maintenance-speed",
    number: "05",
    badge: "24/7 Uptime & Security",
    title: "Website Maintenance, Security & Speed Optimization",
    icon: ShieldCheck,
    points: [
      "24/7 uptime monitoring, security patching, SSL management, and automated database backups.",
      "Ongoing Core Web Vitals maintenance, technical SEO health monitoring, and speed remediation.",
    ],
  },
];

const techStackGroups = [
  {
    category: "Front-End Engineering",
    skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    category: "Back-End & APIs",
    skills: ["Node.js", "Express", "Python", "GraphQL", "REST APIs"],
  },
  {
    category: "Database & Cloud",
    skills: ["PostgreSQL", "MongoDB", "AWS", "Docker", "Vercel", "Redis"],
  },
  {
    category: "Tracking & Analytics",
    skills: ["Google Tag Manager", "GA4 Server-Side Tracking", "Meta Conversions API (CAPI)"],
  },
];

const domesticCities = [
  { city: "Jaipur (HQ)", slug: "jaipur", tag: "Engineering HQ" },
  { city: "Delhi NCR", slug: "delhi", tag: "Enterprise Scale" },
  { city: "Mumbai", slug: "mumbai", tag: "Commercial Hub" },
  { city: "Bangalore", slug: "bangalore", tag: "Tech Ecosystem" },
  { city: "Pune", slug: "pune", tag: "Software Center" },
  { city: "Indore", slug: "indore", tag: "Emerging Tech" },
];

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Architecture & Technical Discovery",
    desc: "We map user journeys, define database schemas, and outline conversion funnels before writing a single line of code.",
  },
  {
    phase: "Phase 2",
    title: "UI/UX Wireframing & Prototyping",
    desc: "Crafting high-fidelity, interactive prototypes in Figma for user feedback and design validation.",
  },
  {
    phase: "Phase 3",
    title: "Clean Code Engineering & Testing",
    desc: "Developing modular, fully tested components with automated CI/CD deployment pipelines.",
  },
  {
    phase: "Phase 4",
    title: "Launch, SEO Validation & Scaling",
    desc: "Rigorous cross-browser testing, Core Web Vitals speed checks, technical SEO schema validation, and smooth production rollout.",
  },
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
];

export default function WebDevelopmentPage() {
  return (
    <div className="bg-white">
<<<<<<< HEAD
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
=======
      {/* ── 1. Hero Section ── */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 md:py-28 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#f6ac55]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#f6ac55]">Web Development</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#d25c41]/30 bg-[#d25c41]/10 px-4 py-1.5 text-sm font-semibold text-[#f6ac55] mb-6">
            <Sparkles className="h-4 w-4" />
            High-Performance Engineering &amp; CRO
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Custom Web Development and Digital Marketing Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#d25c41] to-[#f6ac55]">
              Speed, Security, and Scalability
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            A website shouldn't just exist as an online brochure—it must function as your highest-converting sales engine. As a premier web development and digital marketing company, Aksh Digital engineers lightning-fast, custom web applications using Next.js, React, and Node.js. Headquartered in Jaipur and serving high-growth brands across Pan-India, the USA, the UK, and global markets, we build digital infrastructure that drives measurable revenue.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request a Free Technical &amp; UI/UX Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link
              href="#tech-stack"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xs px-8 py-4 text-sm sm:text-base font-bold text-white hover:bg-white/15 transition-all duration-300"
            >
              View Tech Stack &amp; Capabilities
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Results */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-10 px-4 sm:px-6">
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
            { num: "<1.2s", label: "Average Page Load Time", sub: "Core Web Vitals green" },
            { num: "100%", label: "Server-Side Rendered (SSR)", sub: "Next.js & React architecture" },
            { num: "99.9%", label: "Cloud Uptime Reliability", sub: "AWS & Docker deployment" },
            { num: "0%", label: "Third-Party CMS Bloat", sub: "Clean, bespoke codebases" },
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
=======
      {/* ── 2. Overview: Why Modern Businesses Need Engineering-First Web Development ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41]">
                  Engineering-Led Growth
                </span>
                <span className="h-px w-8 bg-[#d25c41]/40" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#14183e] leading-tight mb-6">
                Bridging the Gap Between Clean Code, Technical SEO, and{" "}
                <span className="text-[#d25c41]">High Conversion Rates</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                Slow loading speeds, bloated CMS plugins, and poor mobile responsiveness quietly destroy your marketing ROI. When your codebase is poorly structured, search engines struggle to crawl your pages, and prospective customers bounce before seeing your offer.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                As an integrated digital marketing and website development firm, Aksh Digital approaches web creation with full-funnel thinking. We combine clean, scalable front-end and back-end architecture with built-in SEO strategies and conversion rate optimization (CRO). Whether you are an Indian enterprise looking for a dependable digital marketing company in Jaipur or an international brand seeking a high-caliber digital marketing agency USA offshore development partner, we build digital platforms built to scale.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#b84d35] transition-all shadow-md"
                >
                  Schedule Technical Architecture Review
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {[
                {
                  icon: Cpu,
                  title: "Zero Plugin Bloat & Pure Code",
                  desc: "Custom Next.js and Node.js solutions running 5x faster than outdated, heavy CMS templates.",
                },
                {
                  icon: TrendingUp,
                  title: "Native Technical SEO Architecture",
                  desc: "Semantic HTML5, automated schema generation, and instant search indexation right out of the box.",
                },
                {
                  icon: Layers,
                  title: "CRO-Driven UI/UX Wireframing",
                  desc: "Intuitive checkout flows and friction-free user journeys engineered to turn visitors into revenue.",
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
            </div>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* ── 3. Our Core Web Development Services ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fafaf9] border-t border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Full-Stack Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Our Core Web Development Services
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Every build is engineered from scratch for enterprise reliability, high-volume traffic, and maximum conversion rates.
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
                        Engineering Standard
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        Custom Git repository, clean modular architecture, and complete source code handover.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs font-bold text-[#d25c41] hover:bg-[#d25c41] hover:text-white hover:border-[#d25c41] transition-all"
                      >
                        Request Project Scope &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Our Modern Technology Stack ── */}
      <section id="tech-stack" className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Modern Toolchain
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Our Modern Technology Stack
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              We leverage production-grade technologies trusted by the world's most demanding tech leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {techStackGroups.map((group, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-slate-200 bg-[#fafaf9] p-6 sm:p-7 hover:border-[#d25c41]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#14183e] mb-4 border-b border-slate-200/80 pb-3">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block rounded-full bg-white border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60">
                  <span className="text-[11px] font-bold text-[#d25c41] uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" /> Production Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Cross-Market Web Engineering: Domestic Mastery & Global Delivery ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#0f1535] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-[#f6ac55] mb-4">
              <Globe className="h-3.5 w-3.5" />
              Global Engineering Desk
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Cross-Market Web Engineering: Domestic Mastery &amp; Global Delivery
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              We build enterprise-grade software products for Indian market leaders and high-performing offshore teams for overseas clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Pan-India Digital Infrastructure */}
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d25c41]/20 text-[#f6ac55]">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Pan-India Digital Infrastructure
                    </h3>
                    <p className="text-xs text-[#f6ac55] font-semibold">
                      Jaipur HQ &amp; Top Indian Metros
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Delivering high-converting web solutions as a trusted partner across Jaipur, Delhi NCR, Mumbai, Bangalore, Pune, and Indore.
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
                <span>Jaipur Development Lab</span>
                <Link href="/contact/" className="text-[#f6ac55] hover:underline font-semibold">
                  Contact Domestic Engineering &rarr;
                </Link>
              </div>
            </div>

            {/* Card 2: Global Offshore Web Development */}
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6ac55]/20 text-[#f6ac55]">
                    <Globe className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Global Offshore Web Development (USA, UK, Global)
                    </h3>
                    <p className="text-xs text-[#f6ac55] font-semibold">
                      Outsourced Dedicated Engineering Teams
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Providing overseas enterprises with dedicated software teams through outsourced digital marketing services, offering complete timezone overlap, bi-weekly sprint reviews via Jira/Slack, and full IP protection.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    {
                      icon: Clock,
                      title: "Timezone Aligned Engineering",
                      desc: "Real-time communication blocks covering EST, PST, and GMT.",
                    },
                    {
                      icon: Zap,
                      title: "Bi-Weekly Agile Sprints",
                      desc: "Structured CI/CD deployments, sprint reviews, and Jira board transparency.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Full Intellectual Property (IP) Protection",
                      desc: "Strict NDAs, clear code transfer contracts, and 100% repository ownership.",
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
                <span>International Engineering Desk</span>
                <Link href="/contact" className="text-[#f6ac55] hover:underline font-semibold">
                  Schedule Offshore Architecture Call &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Our 4-Step Agile Web Development Process ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Engineering Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Our 4-Step Agile Web Development Process
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              From architecture blueprint to production release, built for speed and precision.
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

      {/* ── 7. Why Choose Aksh Digital for Web Development? ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fafaf9] border-t border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              The Engineering Difference
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Why Choose Aksh Digital for Web Development?
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              We bridge software engineering with conversion rate optimization to build websites that sell.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Built for Marketing & Conversions",
                desc: "We don't just write code; our media buyers and SEO strategists ensure your site is engineered to sell from day one.",
              },
              {
                icon: Zap,
                title: "Zero Plugin Bloat",
                desc: "Lightweight, custom-built solutions that run circles around outdated, slow template websites.",
              },
              {
                icon: Layers,
                title: "Direct Developer Access & Transparent Sprints",
                desc: "Clear milestone updates, transparent Git repositories, and direct communication with the engineering team.",
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
                      <CheckCircle className="h-4 w-4" /> Core Guarantee
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. Ready to Build a High-Performance Digital Platform? (Bottom CTA) ── */}
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
            Ready to Build a High-Performance Digital Platform?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Claim Your Free Technical &amp; Speed Audit Today
          </h2>

          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Let our full-stack engineering team evaluate your current website's code quality, speed bottlenecks, and conversion flow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm sm:text-base font-bold text-[#d25c41] hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-0.5"
            >
              Request Your Free Web Audit
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
            No obligation. Zero lock-in contracts. Comprehensive code &amp; speed analysis.
          </p>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
        </div>
      </section>
    </div>
  );
}
