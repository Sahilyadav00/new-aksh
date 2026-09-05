import Link from "next/link";
import { ArrowRight, MapPin, Search, CheckCircle, TrendingUp, Star, Phone, BarChart3, Globe, Users } from "lucide-react";

export const metadata = {
  title: "SEO Services in Mumbai | Best SEO Agency Mumbai — Aksh Digital",
  description:
    "Aksh Digital offers top-rated SEO services in Mumbai. We help Mumbai businesses rank on Google page 1 with local SEO, technical SEO, and proven digital strategies.",
};

const cityData = {
  city: "Mumbai",
  tagline: "Mumbai's Growth-Focused SEO Agency",
  description:
    "From Bandra to BKC, we help Mumbai businesses rise above the digital noise and reach customers who are actively searching for them. Our data-driven SEO approach is built for Mumbai's fast-paced, competitive market.",
  localFacts: [
    "Proven SEO results for 40+ Mumbai-based businesses",
    "Understanding of Mumbai's diverse market — from SMBs to enterprises",
    "Local citation building and NAP consistency for Mumbai listings",
    "GMB optimisation targeting Mumbai's high-density search zones",
  ],
  nearbyAreas: ["Bandra", "BKC", "Andheri", "Powai", "Thane", "Navi Mumbai", "Borivali", "Worli"],
  faqs: [
    { q: "How competitive is SEO in Mumbai?", a: "Mumbai is India's commercial capital and one of the most SEO-competitive cities. But with a targeted, niche-specific approach, businesses can rank for high-intent local searches within 4–7 months." },
    { q: "Do you serve businesses in Thane and Navi Mumbai too?", a: "Yes, our local SEO services cover greater Mumbai including Thane, Navi Mumbai, Vasai-Virar, and all surrounding areas." },
    { q: "Can you help our Mumbai e-commerce business with SEO?", a: "Absolutely. We have extensive experience with e-commerce SEO for Mumbai-based online stores, including product page optimisation, category SEO, and technical e-commerce audits." },
    { q: "What results can I expect from SEO in Mumbai?", a: "Most Mumbai clients see measurable ranking improvements in 3–5 months and significant organic traffic growth within 6–9 months, depending on competition and current site health." },
  ],
};

const services = [
  { icon: Search, title: "Local SEO Mumbai", desc: "Rank for Mumbai-specific searches and 'near me' queries to capture high-intent local customers." },
  { icon: Globe, title: "Technical SEO", desc: "Site speed, mobile optimisation, and crawlability fixes that Google rewards with higher rankings." },
  { icon: BarChart3, title: "Content Marketing", desc: "Mumbai-focused content targeting local keywords with strong commercial and informational intent." },
  { icon: TrendingUp, title: "Link Building", desc: "Authoritative backlinks from Mumbai and national publications to strengthen your domain authority." },
  { icon: Users, title: "Google Business Profile", desc: "Complete GMB setup and optimisation to appear in Mumbai's local search map pack." },
  { icon: Star, title: "E-commerce SEO", desc: "Product and category page SEO tailored for Mumbai's thriving online shopping market." },
];

export default function SEOMumbaiPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#d25c41]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#f6ac55]/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/seo-strategies" className="hover:text-white transition-colors">SEO Services</Link>
            <span>/</span>
            <span className="text-[#f6ac55]">{cityData.city}</span>
          </nav>
          <div className="flex items-center gap-2 mb-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d25c41]/20">
              <MapPin className="h-5 w-5 text-[#d25c41]" />
            </span>
            <span className="text-sm font-semibold text-[#f6ac55] uppercase tracking-wider">SEO Services in {cityData.city}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-tight tracking-tight mb-6">
            SEO Services in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] to-[#f6ac55]">{cityData.city}</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-3">{cityData.tagline}</p>
          <p className="text-base text-slate-500 max-w-2xl leading-relaxed mb-8">{cityData.description}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-3.5 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300">
              Get Free SEO Audit — {cityData.city} <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link href="/services/seo-strategies" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300">
              Our SEO Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#d25c41] py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[{ num: "40+", label: `${cityData.city} Clients Served` }, { num: "82%", label: "First-Page Rankings" }, { num: "3.5x", label: "Avg. Traffic Growth" }, { num: "6 Months", label: "Avg. Time to Results" }].map(({ num, label }) => (
            <div key={label}><p className="text-3xl sm:text-4xl font-bold text-white">{num}</p><p className="mt-1 text-sm text-white/80 font-medium">{label}</p></div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">Our SEO Services in {cityData.city}</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Comprehensive SEO solutions for {cityData.city}'s competitive digital market.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:border-[#d25c41]/30 hover:-translate-y-1 transition-all duration-300">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d25c41]/10 mb-4"><Icon className="h-6 w-6 text-[#d25c41]" strokeWidth={2} /></span>
                <h3 className="text-lg font-bold text-[#14183e] mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#14183e] mb-4">Why {cityData.city} Businesses Trust Aksh Digital</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">In a city where millions compete for the same screen time, showing up first on Google isn't a luxury — it's a necessity. We help {cityData.city} businesses build a dominant, sustainable online presence.</p>
            <ul className="space-y-4">
              {cityData.localFacts.map((fact) => (
                <li key={fact} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#d25c41] mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-slate-700 text-[15px]">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#14183e] mb-4">Areas We Serve in {cityData.city}</h3>
            <div className="flex flex-wrap gap-2">
              {cityData.nearbyAreas.map((area) => (
                <span key={area} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                  <MapPin className="h-3.5 w-3.5 text-[#d25c41]" />{area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-[#14183e]">FAQs — SEO in {cityData.city}</h2></div>
          <div className="space-y-4">
            {cityData.faqs.map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-base font-bold text-[#14183e] mb-2">{q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">SEO Services in Other Cities</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[{ city: "Jaipur", slug: "jaipur" }, { city: "Delhi", slug: "delhi" }, { city: "Pune", slug: "pune" }, { city: "Bangalore", slug: "bangalore" }, { city: "Indore", slug: "indore" }].map(({ city, slug }) => (
              <Link key={slug} href={`/seo-services/${slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-[#d25c41] hover:text-[#d25c41] transition-all duration-200">
                SEO in {city} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#d25c41] to-[#b84d35] py-16 px-4 sm:px-6 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Rank #1 in {cityData.city}?</h2>
          <p className="text-white/80 mb-8">Get a free SEO audit and a personalised strategy for your {cityData.city} business today.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#d25c41] hover:bg-slate-50 transition-colors shadow-lg">
              Get Free SEO Audit <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors">
              <Phone className="h-4 w-4" /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
