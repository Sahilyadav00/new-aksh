import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Search,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Globe,
  Zap,
  Mail,
  ShieldCheck,
  Check,
  Building2,
  Share2,
  Code2,
  Megaphone,
  ShoppingBag,
  Layers,
  Sparkles,
  Factory,
} from "lucide-react";

export const metadata = {
  title:
    "SEO Agency in Kolkata | Best Digital Marketing Company Kolkata – Aksh Digital",
  description:
    "Scale organic traffic and high-value commercial revenue with Aksh Digital, a top SEO agency Kolkata and trusted digital marketing company in Kolkata. Local SEO, IT enterprise search, Core Web Vitals, and authoritative link building.",
  alternates: {
    canonical: "https://www.akshdigital.in/seo-services/kolkata/",
  },
};

const kolkataHubs = [
  "Salt Lake (Sector V)",
  "New Town",
  "Park Street",
  "Ballygunge",
  "Alipore",
  "Gariahat",
  "Howrah Industrial Belt",
  "Burrabazar Commercial Area",
  "Rajarhat",
  "Camac Street",
  "Dalhousie (BBD Bagh)",
  "Jadavpur",
];

const coreServices = [
  {
    number: "01",
    badge: "Enterprise & IT Search Capture",
    title: "High-Intent Commercial & IT Enterprise SEO",
    icon: Search,
    description:
      "Target competitive commercial search terms such as 'best digital marketing company in kolkata', 'seo services in kolkata', 'digital marketing agency in kolkata', and industry-specific B2B/B2C transactional queries.",
    points: [
      "Target competitive commercial search terms such as best digital marketing company in kolkata, seo services in kolkata, digital marketing agency in kolkata, and industry-specific B2B/B2C transactional queries.",
      "Deep search intent classification, faceted crawl optimization, and topical authority cluster development for IT consulting, SaaS, and corporate enterprises.",
      "Competitor search gap analysis engineered to outrank legacy domains and capture ready-to-buy commercial clients.",
    ],
  },
  {
    number: "02",
    badge: "Kolkata Map 3-Pack Dominance",
    title: "Hyper-Local SEO & Google Business Profile (GBP) Optimization",
    icon: MapPin,
    description:
      "Capture high-converting regional footfall and direct commercial inquiries across Kolkata's prime IT corridors and traditional commercial districts.",
    points: [
      "As an experienced local search marketing agency, we optimize your Google Business Profile to capture the local Map 3-Pack across high-density Kolkata hubs (Salt Lake Sector V, New Town, Park Street, Ballygunge, Alipore, Gariahat, and Howrah).",
      "100% NAP (Name, Address, Phone) citation consistency and localized review workflows that build strong regional consumer trust.",
      "Localized landing page architectures designed for healthcare clinics, retail stores, educational institutions, and corporate consultancies.",
    ],
  },
  {
    number: "03",
    badge: "Speed & Engineering Precision",
    title: "Technical SEO & Core Web Vitals Optimization",
    icon: Zap,
    description:
      "Eliminate crawling bottlenecks and optimize server performance for seamless indexing by Googlebot.",
    points: [
      "JavaScript rendering audits, server-side rendering (SSR) optimization, and mobile-first responsiveness tuning to comply with Google Search Essentials.",
      "Structured data schema implementation (Organization, LocalBusiness, FAQ, Product, and Service JSON-LD schemas) to secure rich snippet visibility.",
      "Core Web Vitals speed remediation engineered directly by our in-house full-stack developers.",
    ],
  },
  {
    number: "04",
    badge: "Editorial PR & Trust Signals",
    title: "Digital PR & High-Authority Backlink Acquisition",
    icon: Globe,
    description:
      "Build enduring domain rating (DR) through ethical, high-quality editorial placements in reputable industry and regional media.",
    points: [
      "100% white-hat link acquisition from authoritative regional news outlets, reputable industry publications, and niche-relevant blogs.",
      "Contextual brand citations and editorial outreach designed to compound your domain rating (DR) safely over time.",
      "Targeted regional media outreach that boosts local trust signals, brand mentions, and organic ranking power.",
    ],
  },
  {
    number: "05",
    badge: "Manufacturing, Export & D2C",
    title: "Manufacturing, Export, Retail & D2C E-Commerce SEO",
    icon: Factory,
    description:
      "Specialized search architectures tailored for Eastern India's manufacturing exporters, tea and textile labels, and fast-growing D2C brands.",
    points: [
      "Tailored SEO frameworks for Kolkata’s textile, tea, leather, and engineering exporters, as well as fast-scaling regional D2C brands.",
      "Multi-region indexing and structured schema integration to capture buyers locally, nationally, and globally.",
      "Product-level schema integration and frictionless transactional funnel optimization designed to maximize organic checkout rates.",
    ],
  },
];

const integratedServices = [
  {
    title: "High-ROAS Paid Media",
    badge: "Paid Advertising",
    icon: Megaphone,
    desc: "Complement organic rankings with high-converting search and social ad funnels managed by our performance marketing agency in kolkata specialists.",
    href: "/services/performance-marketing/",
    linkText: "Explore Performance Marketing",
  },
  {
    title: "Social Media Authority",
    badge: "Brand Resonance",
    icon: Share2,
    desc: "Build brand loyalty and engagement through our dedicated social media marketing agency in kolkata and social media company in kolkata teams.",
    href: "/services/social-media-marketing/",
    linkText: "Explore Social Media",
  },
  {
    title: "Modern Web Development",
    badge: "Engineering",
    icon: Code2,
    desc: "Deploy fast, conversion-optimized websites built on Next.js and React by our technical engineering unit to guarantee exceptional Core Web Vitals.",
    href: "/services/web-development/",
    linkText: "Explore Web Development",
  },
];

const roadmapSteps = [
  {
    step: "01",
    title: "Deep Technical Site & Competitor Gap Audit",
    desc: "We analyze your site architecture, crawl logs, and backlink health while benchmarking top-ranking competitors in Kolkata to uncover hidden ranking bottlenecks.",
  },
  {
    step: "02",
    title: "On-Page Architecture & Semantic Content Mapping",
    desc: "We resolve technical crawling errors, implement localized schema, and optimize core web pages for target city keywords and Kolkata commercial micro-markets.",
  },
  {
    step: "03",
    title: "Citation Building & Authority Outreach",
    desc: "We clean up directory listings and launch local digital PR outreach to acquire high-authority backlinks that reinforce domain power and geographic relevance.",
  },
  {
    step: "04",
    title: "Tracking, Lead Attribution & Conversion Optimization",
    desc: "Continuous monitoring via Google Search Console and GA4, tracking ranking trajectories, phone inquiries, and organic lead form fills with regular iterative sprints.",
  },
];

const whyChooseUs = [
  {
    title: "Strict White-Hat Compliance",
    icon: ShieldCheck,
    desc: "100% compliant with Google Search Essentials to ensure sustainable, penalty-free long-term rankings through every core algorithm update.",
  },
  {
    title: "Live, Real-Time Dashboards",
    icon: BarChart3,
    desc: "24/7 visibility into keyword rankings, organic traffic trends, and lead attribution with transparent, executive-level ROI reporting.",
  },
  {
    title: "Integrated Development & Marketing",
    icon: Building2,
    desc: "Developers, SEO strategists, and copywriters working collaboratively under one roof to resolve complex technical hurdles without vendor friction.",
  },
];

const otherCities = [
  { city: "Jaipur (HQ)", slug: "jaipur" },
  { city: "Delhi NCR", slug: "delhi" },
  { city: "Mumbai", slug: "mumbai" },
  { city: "Bangalore", slug: "bangalore" },
  { city: "Chennai", slug: "chennai" },
  { city: "Hyderabad", slug: "hyderabad" },
  { city: "Pune", slug: "pune" },
  { city: "Indore", slug: "indore" },
  { city: "Chandigarh", slug: "chandigarh" },
  { city: "Lucknow", slug: "lucknow" },
  { city: "Bhiwadi & Alwar", slug: "bhiwadi-alwar" },
];

export default function SEOKolkataPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aksh Digital - SEO Agency in Kolkata",
    description:
      "Premier SEO services and digital marketing agency in Kolkata specializing in local SEO, IT enterprise search, Core Web Vitals remediation, and link building.",
    url: "https://www.akshdigital.in/seo-services/kolkata/",
    email: "akshdigital9@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    areaServed: [
      "Kolkata",
      "Salt Lake",
      "New Town",
      "Park Street",
      "Howrah",
      "Ballygunge",
      "Alipore",
      "West Bengal",
      "India",
    ],
    priceRange: "$$",
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-28 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-[#d25c41]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[480px] w-[480px] rounded-full bg-[#f6ac55]/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-slate-400 mb-8 flex-wrap"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <Link
              href="/services/seo"
              className="hover:text-white transition-colors"
            >
              SEO Services
            </Link>
            <span>/</span>
            <span className="text-[#f6ac55]">Kolkata</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-[#f6ac55] backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#f6ac55] animate-pulse" />
            High-Intent Search Dominance • Eastern India Commercial Hub
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Premier SEO Services in Kolkata Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] via-[#f6ac55] to-[#f6ac55]">
              Page 1 Rankings
            </span>{" "}
            and Scalable Revenue
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            In the cultural and commercial capital of Eastern India, standing
            out requires more than basic optimization. Partner with a
            results-focused SEO agency Kolkata and trusted digital marketing
            company in Kolkata. Aksh Digital executes technical site
            architecture, local search optimization, and high-authority link
            acquisition that drive qualified inbound revenue across Salt Lake
            (Sector V), New Town, Park Street, Howrah, and Pan-India.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm font-bold text-white shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:opacity-95 hover:-translate-y-0.5 transition-all duration-300"
            >
              Claim Your Free Kolkata SEO Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="#kolkata-seo-framework"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Ranking Strategy
            </a>
          </div>

          {/* Market Reach Tag */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-[#d25c41]" />
            <span>
              Serving Enterprises, Exporters & High-Growth Brands Across Kolkata
              & Eastern India
            </span>
          </div>
        </div>
      </section>

      {/* Overview: Why Kolkata Businesses Need Advanced SEO Execution */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
                Overview: Advanced SEO Execution
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-6">
                Turning Regional Commercial Demand into Predictable Inbound
                Growth
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                Kolkata is a powerhouse economy blending IT and tech enterprises
                in Salt Lake Sector V and New Town, traditional industrial,
                manufacturing, and export giants across Howrah and Burrabazar,
                alongside booming healthcare, education, retail, and real estate
                hubs across South Kolkata and Rajarhat. To capture high-value
                commercial searches in this ecosystem, your business needs
                technical precision and deep local relevance.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
                As a full-stack software and digital marketing company, Aksh
                Digital approaches search ranking with engineering rigor. By
                pairing modern web speed (Next.js, React) with semantic keyword
                targeting, structured data architecture, and white-hat digital
                PR, our search engine optimization marketing agency secures
                lasting Page 1 positions, helps you capture high-intent
                commercial buyers, and lowers your long-term customer
                acquisition costs (CAC).
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0f1535] px-6 py-3 text-sm font-semibold text-white hover:bg-[#d25c41] transition-colors duration-300"
                >
                  Consult Our Kolkata SEO Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-[#d25c41] hover:text-[#d25c41] transition-colors duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-[#fafaf9] to-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#0f1535] mb-2">
                  Prime Kolkata Commercial Corridors
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  We deploy localized entity architectures tailored to
                  Kolkata&apos;s leading tech zones, corporate avenues, and
                  industrial clusters.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {kolkataHubs.map((hub) => (
                    <span
                      key={hub}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm"
                    >
                      <MapPin className="h-3 w-3 text-[#d25c41]" />
                      {hub}
                    </span>
                  ))}
                </div>
                <div className="pt-6 border-t border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      Kolkata Map 3-Pack Authority
                    </span>
                    <span className="font-bold text-[#d25c41]">
                      Top 3 Target
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      Citation Consistency
                    </span>
                    <span className="font-bold text-emerald-600">
                      100% NAP Match
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      Full-Stack Infrastructure
                    </span>
                    <span className="font-bold text-[#0f1535]">
                      Core Web Vitals Pass
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core SEO Services in Kolkata */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              Our Core SEO Services in Kolkata
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Engineered for Page 1 Rankings and Scalable Revenue
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every vertical in Eastern India requires strategic positioning.
              Here is our multi-layered SEO framework designed to capture
              high-value commercial market share.
            </p>
          </div>

          <div className="space-y-8">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                    <div className="flex items-start gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0f1535] text-white">
                        <Icon className="h-7 w-7 text-[#f6ac55]" />
                      </span>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#d25c41]">
                            Vertical {service.number}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-slate-300" />
                          <span className="inline-block rounded-full bg-slate-100 px-3 py-0.5 text-xs font-semibold text-slate-600">
                            {service.badge}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0f1535]">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                    {service.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-2xl bg-slate-50/80 p-4 border border-slate-100"
                      >
                        <Check className="h-5 w-5 text-[#d25c41] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrated Growth: Full-Suite Synergies for Kolkata Brands */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              Integrated Growth Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Integrated Growth: Full-Suite Synergies for Kolkata Brands
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Accelerate pipeline growth by uniting high-intent organic rankings
              with high-ROAS performance ads, social brand authority, and
              cutting-edge web engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integratedServices.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 flex flex-col justify-between hover:border-[#d25c41]/40 hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f1535] text-white group-hover:scale-105 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-[#f6ac55]" />
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0f1535] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#d25c41] hover:text-[#0f1535] transition-colors"
                  >
                    {item.linkText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Kolkata SEO Roadmap */}
      <section
        id="kolkata-seo-framework"
        className="py-20 sm:py-28 px-4 sm:px-6 bg-[#0f1535] text-white relative overflow-hidden"
      >
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#d25c41]/15 blur-3xl" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#f6ac55]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold text-[#f6ac55] uppercase tracking-wider mb-4">
              Our 4-Step Kolkata SEO Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Disciplined Roadmap to Page 1 Supremacy
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We eliminate guesswork with a battle-tested 4-step framework
              engineered to systematically elevate your Kolkata business to Page
              1.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between backdrop-blur-sm hover:border-[#f6ac55]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] to-[#f6ac55] mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] transition-all duration-300"
            >
              Start Step 1: Claim Your Kolkata Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Aksh Digital as Your Kolkata SEO Partner? */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              The Aksh Digital Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Why Choose Aksh Digital as Your Kolkata SEO Partner?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We blend software engineering speed, regional market insight, and
              strict white-hat ethics to deliver compounding commercial returns
              across Eastern India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d25c41]/10 mb-6">
                    <Icon className="h-6 w-6 text-[#d25c41]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#0f1535] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Metropolitan Hubs Interlinking */}
      <section className="py-12 px-4 sm:px-6 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">
            SEO Services Across Key Indian Metropolitan Hubs
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {otherCities.map(({ city, slug }) => (
              <Link
                key={slug}
                href={`/seo-services/${slug}/`}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:border-[#d25c41] hover:text-[#d25c41] transition-all duration-200"
              >
                SEO in {city}
                <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Outrank Competitors in Kolkata? (Bottom CTA) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1535] via-[#1a224c] to-[#0f1535] py-20 sm:py-24 px-4 sm:px-6 text-center text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#d25c41]/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#f6ac55] uppercase tracking-wider mb-6">
            Ready to Outrank Competitors in Kolkata?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Claim Your Free Kolkata Technical & SEO Audit Today
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let our search specialists analyze your website&apos;s ranking
            bottlenecks and outline a custom 90-day search roadmap for the
            Kolkata market.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request Your Free Kolkata SEO Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="mailto:akshdigital9@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              <Mail className="h-4 w-4 text-[#f6ac55]" />
              akshdigital9@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-[#d25c41]" />
            <span>Kolkata, West Bengal • Pan-India</span>
          </div>
        </div>
      </section>
    </div>
  );
}
