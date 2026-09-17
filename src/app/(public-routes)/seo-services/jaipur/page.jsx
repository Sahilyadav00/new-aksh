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
  Compass,
} from "lucide-react";

export const metadata = {
  title:
    "Premier SEO Services in Jaipur | Best SEO Company Jaipur — Aksh Digital",
  description:
    "Stop losing customers to local competitors. Aksh Digital delivers premier SEO services in Jaipur, Google Business Profile (GBP) ranking, technical audits, and high-intent organic lead generation.",
  alternates: {
    canonical: "https://www.akshdigital.in/seo-services/jaipur/",
  },
};

const commercialHubs = [
  "Malviya Nagar",
  "Mansarovar",
  "Vaishali Nagar",
  "C-Scheme",
  "Sitapura",
  "MI Road",
  "Tonk Road",
  "Raja Park",
  "Ajmer Road",
  "Jagatpura",
  "Sodala",
  "VKI Area",
];

const coreServices = [
  {
    number: "01",
    badge: "Google 3-Pack & Citation Dominance",
    title: "Hyper-Local SEO & Google Business Profile (GBP) Optimization",
    icon: MapPin,
    description:
      "Dominate local map searches and capture high-intent buyers right in your immediate service area.",
    points: [
      "Optimization of your Google Business Profile to dominate the local Map 3-Pack for high-intent searches.",
      "Building localized citations across top Indian directories with 100% consistent NAP (Name, Address, Phone Number) data.",
      "Local review generation workflows and geo-tagged visual assets to establish high regional search authority.",
    ],
  },
  {
    number: "02",
    badge: "High-Conversion Geo Mapping",
    title: "Transactional Keyword Research & City-Specific Mapping",
    icon: Search,
    description:
      "Target lucrative commercial queries mapped specifically to high-growth Jaipur neighborhoods and business clusters.",
    points: [
      "Identifying high-conversion, localized search terms like 'best digital marketing company in jaipur', 'seo company in jaipur', and industry-specific commercial queries.",
      "Creating localized landing page architectures that capture intent across major Jaipur commercial hubs (Malviya Nagar, Mansarovar, Vaishali Nagar, C-Scheme, Sitapura, and MI Road).",
      "Analyzing competitor search gaps to outrank entrenched regional players for commercial-intent keywords.",
    ],
  },
  {
    number: "03",
    badge: "Speed, Schema & Search Essentials",
    title: "Technical SEO & Core Web Vitals Optimization",
    icon: Zap,
    description:
      "Eliminate crawling bottlenecks and implement high-precision structured data for rich search engine snippets.",
    points: [
      "Comprehensive crawl audits, indexation fixes, and mobile responsiveness tuning to comply with Google Search Essentials.",
      "Structured data schema (LocalBusiness JSON-LD, FAQ, Review schema) implementation to secure rich search snippets.",
      "Site speed remediation engineered by our in-house web development and digital marketing company specialists.",
    ],
  },
  {
    number: "04",
    badge: "Authority PR & Topical Relevance",
    title: "Regional Content Strategy & Local Link Building",
    icon: Globe,
    description:
      "Establish deep topical authority and genuine regional trust through contextual backlink acquisitions.",
    points: [
      "Building authoritative contextual backlinks from reputable regional publications, industry blogs, and local news outlets.",
      "Content creation targeted at solving specific regional consumer pain points while building topical authority.",
      "Developing evergreen local resource hubs that naturally attract organic citations and social shares.",
    ],
  },
  {
    number: "05",
    badge: "Scalable D2C & B2B Expansion",
    title: "E-Commerce & National Growth Strategy",
    icon: ShoppingBag,
    description:
      "Scale Jaipur-born enterprises, exporters, and manufacturers across domestic and international markets.",
    points: [
      "Category and product-level SEO for Jaipur-based manufacturers, fashion labels, handicraft exporters, and D2C brands expanding nationwide.",
      "Alignment with our performance marketing agency India and Google ads agency in Jaipur capabilities to maximize blended customer acquisition.",
      "International hreflang and multi-currency search structuring for regional exporters entering US and European markets.",
    ],
  },
];

const integratedServices = [
  {
    title: "High-ROAS Paid Ads",
    badge: "Media Buying",
    icon: Megaphone,
    desc: "Seamlessly run targeted search and social campaigns with our dedicated google ads agency in jaipur and ppc company in jaipur team to drive immediate, measurable revenue.",
    href: "/services/performance-marketing/",
    linkText: "Explore Google Ads & PPC",
  },
  {
    title: "Social Media Dominance",
    badge: "Brand Storytelling",
    icon: Share2,
    desc: "Build local brand equity and engaging visual storytelling with our social media marketing agency in jaipur and social media company in jaipur specialists across Meta, LinkedIn, and Instagram.",
    href: "/services/social-media-marketing/",
    linkText: "Explore Social Media",
  },
  {
    title: "Modern Web Development",
    badge: "Engineering",
    icon: Code2,
    desc: "Fast, custom web builds developed with Next.js and React that lower bounce rates, boost Google Core Web Vitals, and maximize on-page user conversion.",
    href: "/services/web-development/",
    linkText: "Explore Web Development",
  },
];

const roadmapSteps = [
  {
    step: "01",
    title: "Local Search Audit & Competitive Analysis",
    desc: "We analyze your existing search rankings, audit your GBP health, and benchmark competitor visibility in Jaipur to identify immediate ranking bottlenecks and traffic opportunities.",
  },
  {
    step: "02",
    title: "On-Page Remediation & Geo-Targeted Structuring",
    desc: "We resolve technical crawling errors, implement localized schema, and optimize core web pages for target city keywords and major Jaipur commercial micro-markets.",
  },
  {
    step: "03",
    title: "Citation Cleanup & Authority Outreach",
    desc: "We clean up inconsistent directory listings and launch local digital PR outreach to acquire high-authority regional backlinks that solidify local search dominance.",
  },
  {
    step: "04",
    title: "Tracking, Lead Attribution & Continuous Optimization",
    desc: "Real-time monitoring via Google Search Console and GA4, tracking phone calls, directional requests, and website conversions with ongoing iterative enhancements.",
  },
];

const whyChooseUs = [
  {
    title: "On-the-Ground Market Expertise",
    icon: Building2,
    desc: "As a homegrown digital marketing company in jaipur, we understand the exact buying behavior, regional vernacular, and search trends of the local market.",
  },
  {
    title: "Transparent Live Dashboards",
    icon: BarChart3,
    desc: "Track your keyword rankings, organic traffic, and lead volume with 24/7 access to real-time analytics and clear, jargon-free monthly ROI reporting.",
  },
  {
    title: "No Black-Hat Shortcuts",
    icon: ShieldCheck,
    desc: "100% white-hat SEO methodologies that protect your business from algorithmic penalties and deliver sustainable, compounding returns over time.",
  },
];

const otherCities = [
  { city: "Delhi NCR", slug: "delhi" },
  { city: "Mumbai", slug: "mumbai" },
  { city: "Bangalore", slug: "bangalore" },
  { city: "Hyderabad", slug: "hyderabad" },
  { city: "Chennai", slug: "chennai" },
  { city: "Pune", slug: "pune" },
  { city: "Indore", slug: "indore" },
  { city: "Chandigarh", slug: "chandigarh" },
  { city: "Kolkata", slug: "kolkata" },
  { city: "Lucknow", slug: "lucknow" },
  { city: "Bhiwadi & Alwar", slug: "bhiwadi-alwar" },
];

export default function SEOJaipurPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aksh Digital - SEO Company in Jaipur",
    description:
      "Premier SEO services and digital marketing agency in Jaipur specializing in local SEO, Google Business Profile optimization, and technical search engineering.",
    url: "https://www.akshdigital.in/seo-services/jaipur/",
    email: "hdigital9@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.9124",
      longitude: "75.7873",
    },
    areaServed: [
      "Jaipur",
      "Malviya Nagar",
      "Mansarovar",
      "Vaishali Nagar",
      "C-Scheme",
      "Sitapura",
      "Rajasthan",
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
            <span className="text-[#f6ac55]">Jaipur</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-[#f6ac55] backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#f6ac55] animate-pulse" />
            Local Dominance • High Organic Intent • Jaipur HQ
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Premier SEO Services in Jaipur Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] via-[#f6ac55] to-[#f6ac55]">
              Page 1 Rankings
            </span>{" "}
            and Direct Leads
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Stop losing customers to local competitors. As the best digital
            marketing agency in Jaipur, Aksh Digital executes data-backed local
            SEO, Google Business Profile (GBP) ranking strategies, and technical
            search optimization that position your brand in front of high-intent
            buyers across Jaipur, Rajasthan, and nationwide.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm font-bold text-white shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:opacity-95 hover:-translate-y-0.5 transition-all duration-300"
            >
              Claim Your Free Jaipur SEO Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="#local-seo-framework"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Local SEO Framework
            </a>
          </div>

          {/* Location Verification Tag */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-[#d25c41]" />
            <span>
              Headquartered in Jaipur, Rajasthan • Serving Local & Pan-India
              Enterprises
            </span>
          </div>
        </div>
      </section>

      {/* Overview: Why Jaipur Businesses Need Localized SEO Precision */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
                Overview: Localized SEO Precision
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-6">
                Turning Regional Search Demand into Predictable Inbound
                Customers
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                Jaipur is one of India&apos;s fastest-growing commercial and
                startup hubs. Whether you operate a luxury hospitality brand, an
                export business, a healthcare clinic, or a modern retail store,
                standard national SEO strategies won&apos;t capture local buyers
                searching for immediate solutions.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
                As a full-stack software and digital marketing company
                headquartered right here in Jaipur, Aksh Digital bridges
                technical engineering with localized market intelligence. By
                combining high-speed web platforms (Next.js, React) with
                hyper-targeted on-page optimization, local citations, and
                authoritative link building, our SEO marketing agency ensures
                your business dominates local search results, captures the
                Google Map 3-Pack, and converts search queries into paying
                clients.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0f1535] px-6 py-3 text-sm font-semibold text-white hover:bg-[#d25c41] transition-colors duration-300"
                >
                  Consult Our Jaipur SEO Team
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
                  Key Jaipur Commercial Hubs We Dominate
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  We build geo-targeted search architectures tailored to the
                  exact residential and business districts where your target
                  demographic makes buying decisions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {commercialHubs.map((hub) => (
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
                      Google Map 3-Pack Reach
                    </span>
                    <span className="font-bold text-[#d25c41]">
                      Top 3 Verified
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      NAP Consistency Guarantee
                    </span>
                    <span className="font-bold text-emerald-600">
                      100% Accurate
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      Local Intent Lead Attribution
                    </span>
                    <span className="font-bold text-[#0f1535]">
                      Call & Direction Tracking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core SEO Services in Jaipur */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              Our Core SEO Services in Jaipur
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Comprehensive Search Solutions for Regional Market Dominance
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every business requires a custom search footprint. From local map
              rankings to nationwide brand scaling, here is how our Jaipur team
              engineers organic search results.
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

      {/* Integrated Growth: Beyond SEO for Jaipur Brands */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              Integrated Growth Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Integrated Growth: Beyond SEO for Jaipur Brands
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Achieve compounding revenue by uniting organic search visibility
              with high-ROAS paid media, social brand resonance, and custom
              software engineering.
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

      {/* 4-Step Local SEO Ranking Roadmap */}
      <section
        id="local-seo-framework"
        className="py-20 sm:py-28 px-4 sm:px-6 bg-[#0f1535] text-white relative overflow-hidden"
      >
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#d25c41]/15 blur-3xl" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#f6ac55]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold text-[#f6ac55] uppercase tracking-wider mb-4">
              Our 4-Step Local SEO Ranking Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              A Transparent, Data-Driven Ranking Process
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We eliminate guesswork with a disciplined 4-step framework
              engineered to systematically elevate your Jaipur business to Page
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
              Start Step 1: Claim Your Local Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Aksh Digital as Your Jaipur SEO Partner? */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-semibold text-[#d25c41] uppercase tracking-wider mb-4">
              Local Advantage & Transparency
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1535] leading-tight mb-4">
              Why Choose Aksh Digital as Your Jaipur SEO Partner?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We combine localized market intuition with elite engineering
              standards so your search investments produce compounding
              commercial returns.
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

      {/* Other Cities Section */}
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

      {/* Ready to Dominate Page 1 Rankings in Jaipur? (Bottom CTA) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1535] via-[#1a224c] to-[#0f1535] py-20 sm:py-24 px-4 sm:px-6 text-center text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#d25c41]/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#f6ac55] uppercase tracking-wider mb-6">
            Ready to Dominate Page 1 Rankings in Jaipur?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Claim Your Free Local SEO & Website Audit Today
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let our Jaipur SEO specialists analyze your website, identify
            ranking bottlenecks, and build a custom 90-day search dominance
            roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request Your Free Jaipur SEO Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="mailto:hdigital9@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              <Mail className="h-4 w-4 text-[#f6ac55]" />
              hdigital9@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-[#d25c41]" />
            <span>Jaipur, Rajasthan, India</span>
          </div>
        </div>
      </section>
    </div>
  );
}
