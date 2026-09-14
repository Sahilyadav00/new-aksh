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
  Hospital,
} from "lucide-react";

export const metadata = {
  title:
    "SEO Agency in Lucknow | Best Digital Marketing Company Lucknow – Aksh Digital",
  description:
    "Dominate Page 1 search rankings and scale organic revenue with Aksh Digital, a premier SEO agency in Lucknow and trusted digital marketing company in Lucknow. Local SEO, GBP ranking, technical audits, and link building.",
  alternates: {
    canonical: "https://www.akshdigital.in/seo-services/lucknow/",
  },
};

const lucknowHubs = [
  "Gomti Nagar",
  "Hazratganj",
  "Aliganj",
  "Indira Nagar",
  "Mahanagar",
  "Shaheed Path",
  "Alambagh",
  "Aminabad",
  "Vibhuti Khand",
  "Chowk",
  "Kanpur Road",
  "Jankipuram",
];

const coreServices = [
  {
    number: "01",
    badge: "Local 3-Pack Supremacy",
    title: "Hyper-Local SEO & Google Business Profile (GBP) Domination",
    icon: MapPin,
    description:
      "Dominate the local Google Map 3-Pack for high-intent queries like 'best digital marketing company in lucknow' and 'seo services in lucknow'.",
    points: [
      "Dominate the local Google Map 3-Pack for high-intent queries like best digital marketing company in lucknow and seo services in lucknow.",
      "Build verified local citations across top Indian directories with 100% consistent NAP (Name, Address, Phone Number) data.",
      "Local review generation systems and geo-tagged visual assets targeting key hubs across Gomti Nagar, Hazratganj, Aliganj, Indira Nagar, Mahanagar, Shaheed Path, and Alambagh.",
    ],
  },
  {
    number: "02",
    badge: "Commercial Intent Mapping",
    title: "Transactional Keyword Research & City-Specific Mapping",
    icon: Search,
    description:
      "Target commercial search terms for healthcare networks, coaching institutes, real estate builders, IT startups, and traditional manufacturing/chikan handicraft exporters.",
    points: [
      "Target commercial search terms for healthcare networks, coaching institutes, real estate builders, IT startups, and traditional manufacturing/chikan handicraft exporters.",
      "Develop localized landing pages optimized to capture user intent across Lucknow and nearby Tier-2 commercial corridors.",
      "Strategic keyword clustering and intent-matched content silos designed to convert local searchers into booked calls and direct sales.",
    ],
  },
  {
    number: "03",
    badge: "Speed & Engineering Precision",
    title: "Technical SEO & Core Web Vitals Optimization",
    icon: Zap,
    description:
      "Full crawlability audits, indexation fixes, and mobile responsiveness tuning to comply with Google Search Essentials.",
    points: [
      "Full crawlability audits, indexation fixes, and mobile responsiveness tuning to comply with Google Search Essentials.",
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
      "100% white-hat link acquisition from authoritative media publications, regional news outlets, and niche-relevant blogs.",
    points: [
      "100% white-hat link acquisition from authoritative media publications, regional news outlets, and niche-relevant blogs.",
      "Contextual brand citations and digital PR outreach that safely build and compound domain rating (DR) over time.",
      "High-authority regional and industry editorial mentions that solidify trust signals and outrank competitors across UP search engines.",
    ],
  },
  {
    number: "05",
    badge: "Healthcare, Realty & D2C Focus",
    title: "Healthcare, Real Estate, Retail & D2C E-Commerce SEO",
    icon: ShoppingBag,
    description:
      "Specialized SEO frameworks for Lucknow’s super-specialty hospitals, real estate townships, fashion brands, and fast-scaling D2C startups.",
    points: [
      "Specialized SEO frameworks for Lucknow’s super-specialty hospitals, real estate townships, fashion brands, and fast-scaling D2C startups.",
      "Multi-region indexing and structured schema integration to drive high-margin organic transactions across India and global export markets.",
      "Product-level schema integration and frictionless transactional funnel optimization designed to maximize organic checkout rates.",
    ],
  },
];

const integratedServices = [
  {
    title: "High-ROAS Paid Ads",
    badge: "Performance Media",
    icon: Megaphone,
    desc: "Complement organic search rankings with high-converting search and social ad funnels managed by our performance marketing agency in lucknow specialists.",
    href: "/services/performance-marketing/",
    linkText: "Explore Performance Marketing",
  },
  {
    title: "Social Media Dominance",
    badge: "Brand Resonance",
    icon: Share2,
    desc: "Build brand equity and engagement through our dedicated social media marketing agency in lucknow and social media company in lucknow teams.",
    href: "/services/social-media-marketing/",
    linkText: "Explore Social Media",
  },
  {
    title: "Modern Web Development",
    badge: "Engineering",
    icon: Code2,
    desc: "Deploy fast, conversion-optimized websites built on Next.js and React by our technical engineering unit to deliver exceptional speed and Core Web Vitals.",
    href: "/services/web-development/",
    linkText: "Explore Web Development",
  },
];

const roadmapSteps = [
  {
    step: "01",
    title: "Technical Site & Competitor Gap Audit",
    desc: "We analyze your site architecture, crawl logs, and backlink health while benchmarking top-ranking competitors in Lucknow.",
  },
  {
    step: "02",
    title: "On-Page Architecture & Semantic Content Mapping",
    desc: "We resolve technical crawling errors, implement localized schema, and optimize core web pages for target city keywords.",
  },
  {
    step: "03",
    title: "Citation Building & Authority Outreach",
    desc: "We clean up directory listings and launch local digital PR outreach to acquire high-authority backlinks.",
  },
  {
    step: "04",
    title: "Tracking, Lead Attribution & Conversion Optimization",
    desc: "Continuous monitoring via Google Search Console and GA4, tracking ranking trajectories, phone inquiries, and organic lead form fills.",
  },
];

const whyChooseUs = [
  {
    title: "Strict White-Hat Compliance",
    icon: ShieldCheck,
    desc: "100% compliant with Google Search Essentials to ensure sustainable, penalty-free long-term rankings.",
  },
  {
    title: "Live, Real-Time Dashboards",
    icon: BarChart3,
    desc: "24/7 visibility into keyword rankings, organic traffic trends, and lead attribution.",
  },
  {
    title: "Integrated Development & Marketing",
    icon: Building2,
    desc: "Developers, SEO strategists, and copywriters working collaboratively under one roof.",
  },
];

const otherCities = [
  { city: "Jaipur (HQ)", slug: "jaipur" },
  { city: "Delhi NCR", slug: "delhi" },
  { city: "Mumbai", slug: "mumbai" },
  { city: "Bangalore", slug: "bangalore" },
  { city: "Hyderabad", slug: "hyderabad" },
  { city: "Chennai", slug: "chennai" },
  { city: "Pune", slug: "pune" },
  { city: "Indore", slug: "indore" },
  { city: "Chandigarh", slug: "chandigarh" },
  { city: "Kolkata", slug: "kolkata" },
  { city: "Bhiwadi & Alwar", slug: "bhiwadi-alwar" },
];

export default function SEOLucknowPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aksh Digital - SEO Agency in Lucknow",
    description:
      "Premier SEO agency and digital marketing company in Lucknow specializing in local search optimization, Google Business Profile ranking, technical SEO, and link building.",
    url: "https://www.akshdigital.in/seo-services/lucknow/",
    email: "connect@akshdigital.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    areaServed: [
      "Lucknow",
      "Gomti Nagar",
      "Hazratganj",
      "Aliganj",
      "Indira Nagar",
      "Mahanagar",
      "Shaheed Path",
      "Alambagh",
      "Kanpur",
      "Uttar Pradesh",
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
              href="/services/"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <Link
              href="/services/seo/"
              className="hover:text-white transition-colors"
            >
              SEO Services
            </Link>
            <span>/</span>
            <span className="text-[#f6ac55]">Lucknow</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-[#f6ac55] backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#f6ac55] animate-pulse" />
            High-Intent Search Dominance • Lucknow & UP Commercial Hub
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Premier SEO Services in Lucknow Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] via-[#f6ac55] to-[#f6ac55]">
              Page 1 Rankings
            </span>{" "}
            and Direct Leads
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Stop losing commercial customers to local competitors across Uttar
            Pradesh. As a results-driven SEO agency in Lucknow and trusted
            digital marketing company in Lucknow, Aksh Digital executes
            technical site audits, Google Business Profile (GBP) ranking
            strategies, and authoritative link building to help your brand
            capture ready-to-buy customers across Lucknow, Kanpur, and
            Pan-India.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center mb-10">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm font-bold text-white shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:opacity-95 hover:-translate-y-0.5 transition-all duration-300"
            >
              Claim Your Free Lucknow SEO Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="#lucknow-seo-framework"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Our Ranking Framework
            </a>
          </div>

          {/* Market Reach Tag */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-[#d25c41]" />
            <span>Serving Enterprises, Healthcare Providers & Startups Across Lucknow, Kanpur & Uttar Pradesh</span>
          </div>
        </div>
      </section>

      {/* Overview: Why Lucknow Businesses Need Localized SEO Precision */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
                Overview: Localized SEO Precision
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-6">
                Turning Uttar Pradesh’s Capital into a Predictable Inbound Growth Engine
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                Lucknow is rapidly transforming into a prominent economic and
                startup hub in North India. From IT and tech parks in Gomti Nagar
                and Shaheed Path to thriving healthcare, education, real estate,
                retail, and traditional export businesses across Hazratganj,
                Alambagh, and Aminabad, standard search tactics fail against
                aggressive regional competitors.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
                As a full-stack software and digital marketing company, Aksh
                Digital approaches search ranking with engineering rigor. By
                pairing modern front-end speed (Next.js, React) with semantic
                topical authority mapping, structured data architecture, and
                white-hat digital PR, our search engine optimization marketing
                agency secures lasting Page 1 positions, captures high-converting
                queries, and lowers your long-term customer acquisition costs
                (CAC).
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0f1535] px-6 py-3 text-sm font-semibold text-white hover:bg-[#d25c41] transition-colors duration-300"
                >
                  Consult Our Lucknow SEO Team
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
                  Key Lucknow Commercial Corridors
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  We deploy localized entity architectures tailored to Lucknow&apos;s
                  prominent commercial, IT, and retail centers.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {lucknowHubs.map((hub) => (
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
                      Lucknow Map 3-Pack Target
                    </span>
                    <span className="font-bold text-[#d25c41]">Top 3 Authority</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      Citation Consistency
                    </span>
                    <span className="font-bold text-emerald-600">100% NAP Match</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      Full-Stack Infrastructure
                    </span>
                    <span className="font-bold text-[#0f1535]">Core Web Vitals Pass</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core SEO Services in Lucknow */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              Our Core SEO Services in Lucknow
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Engineered for Page 1 Rankings and Direct Leads
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every vertical in Lucknow requires tailored search positioning.
              Explore our structured frameworks designed to capture high-value
              commercial queries across Uttar Pradesh.
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

      {/* Integrated Growth: Full-Suite Synergies for Lucknow Brands */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              Integrated Growth Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Integrated Growth: Full-Suite Synergies for Lucknow Brands
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Accelerate your digital trajectory by combining high-intent organic
              rankings with high-ROAS paid media, social brand resonance, and
              modern web development.
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

      {/* Our 4-Step Lucknow SEO Roadmap */}
      <section
        id="lucknow-seo-framework"
        className="py-20 sm:py-28 px-4 sm:px-6 bg-[#0f1535] text-white relative overflow-hidden"
      >
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#d25c41]/15 blur-3xl" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#f6ac55]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold text-[#f6ac55] uppercase tracking-wider mb-4">
              Our 4-Step Lucknow SEO Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Systematic Roadmap to Lucknow Search Dominance
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We eliminate guesswork with a battle-tested 4-step framework
              engineered to systematically elevate your Lucknow business to
              Page 1.
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
              Start Step 1: Claim Your Lucknow Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Aksh Digital as Your Lucknow SEO Partner? */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              The Aksh Digital Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Why Choose Aksh Digital as Your Lucknow SEO Partner?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We blend software engineering speed, regional market insight,
              and strict white-hat ethics to deliver compounding commercial
              returns across Uttar Pradesh.
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

      {/* Ready to Dominate Page 1 Rankings in Lucknow? (Bottom CTA) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1535] via-[#1a224c] to-[#0f1535] py-20 sm:py-24 px-4 sm:px-6 text-center text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#d25c41]/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#f6ac55] uppercase tracking-wider mb-6">
            Ready to Dominate Page 1 Rankings in Lucknow?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Claim Your Free Lucknow Technical & SEO Audit Today
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let our search specialists analyze your website&apos;s ranking
            bottlenecks and outline a custom 90-day search roadmap for the
            Lucknow market.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request Your Free Lucknow SEO Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="mailto:connect@akshdigital.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              <Mail className="h-4 w-4 text-[#f6ac55]" />
              connect@akshdigital.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-[#d25c41]" />
            <span>Lucknow, Uttar Pradesh • Pan-India</span>
          </div>
        </div>
      </section>
    </div>
  );
}
