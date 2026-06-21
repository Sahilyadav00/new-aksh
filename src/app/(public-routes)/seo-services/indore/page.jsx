import Link from "next/link";
import { ArrowRight, MapPin, Search, CheckCircle, TrendingUp, Star, Phone, BarChart3, Globe, Users } from "lucide-react";

export const metadata = {
  title: "SEO Services in Indore | Best SEO Company Indore — Aksh Digital",
  description:
    "Aksh Digital offers expert SEO services in Indore. We help Indore businesses rank on Google with local SEO, technical SEO, and content strategies designed for Madhya Pradesh's commercial hub.",
};

const cityData = {
  city: "Indore",
  tagline: "Indore's Most Trusted SEO Agency",
  description:
    "From Vijay Nagar to Scheme 54, we help Indore's fast-growing business community build a powerful online presence. As Madhya Pradesh's commercial capital, Indore's digital landscape is growing rapidly — and we make sure your business leads it.",
  localFacts: [
    "Proven SEO results for 30+ Indore-based businesses",
    "Deep knowledge of Indore's business community and competitive landscape",
    "Local citation building across Indore and MP business directories",
    "GMB optimisation to dominate Indore's growing local search market",
  ],
  nearbyAreas: ["Vijay Nagar", "Scheme 54", "Palasia", "Bhawarkuan", "Rajwada", "MG Road", "AB Road", "Bicholi Mardana"],
  faqs: [
    { q: "Is SEO worth investing in for an Indore business?", a: "Absolutely. Indore's business market is growing rapidly with increasing internet penetration. Businesses that invest in SEO now will gain a significant first-mover advantage in their categories." },
    { q: "Which Indore industries benefit most from SEO?", a: "SEO delivers excellent results for Indore businesses in real estate, education, healthcare, textile, manufacturing, retail, and the rapidly growing startup ecosystem." },
    { q: "Can you help my Indore business rank for statewide keywords?", a: "Yes. Alongside local Indore SEO, we also help businesses rank for Madhya Pradesh and national-level keywords to capture a broader audience." },
    { q: "Do you have experience with Hindi SEO content for Indore?", a: "Yes, we can create bilingual SEO content in both English and Hindi to capture a wider audience in Indore and across MP." },
  ],
};

const services = [
  { icon: Search, title: "Local SEO Indore", desc: "Rank for Indore-specific searches and local 'near me' queries to capture high-intent customers in the city." },
  { icon: Globe, title: "Technical SEO", desc: "Complete technical SEO audits ensuring your Indore website is fast, indexed, and Google-compliant." },
  { icon: BarChart3, title: "Content Marketing", desc: "Indore and MP-focused content targeting local keywords with strong commercial and informational value." },
  { icon: TrendingUp, title: "Link Building", desc: "Quality backlinks from Indore local websites, MP news portals, and national publications." },
  { icon: Users, title: "Google Business Profile", desc: "Full GMB optimisation to appear in Indore's local search pack and attract walk-in customers." },
  { icon: Star, title: "Bilingual SEO", desc: "English and Hindi SEO content to reach Indore's diverse audience across all demographics." },
];

export default function SEOIndorePage() {
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
            <Link href="/services/seo-strategies" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300">Our SEO Services</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#d25c41] py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[{ num: "30+", label: "Indore Clients Served" }, { num: "78%", label: "First-Page Rankings" }, { num: "3x", label: "Avg. Traffic Growth" }, { num: "4 Months", label: "Avg. Time to Results" }].map(({ num, label }) => (
            <div key={label}><p className="text-3xl sm:text-4xl font-bold text-white">{num}</p><p className="mt-1 text-sm text-white/80 font-medium">{label}</p></div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">Our SEO Services in {cityData.city}</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Complete SEO solutions tailored to {cityData.city}'s growing and diverse business market.</p>
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
            <h2 className="text-3xl font-bold text-[#14183e] mb-4">Why {cityData.city} Businesses Choose Aksh Digital</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">{cityData.city} is MP's commercial powerhouse. As digital adoption grows rapidly, businesses that establish strong online visibility now will own their market for years to come.</p>
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
            {[{ city: "Jaipur", slug: "jaipur" }, { city: "Delhi", slug: "delhi" }, { city: "Mumbai", slug: "mumbai" }, { city: "Pune", slug: "pune" }, { city: "Bangalore", slug: "bangalore" }].map(({ city, slug }) => (
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
          <p className="text-white/80 mb-8">Get a free SEO audit for your {cityData.city} business and start building your digital dominance today.</p>
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
