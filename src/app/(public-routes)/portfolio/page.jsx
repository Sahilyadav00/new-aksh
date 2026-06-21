import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Star,
  Globe,
  Smartphone,
  TrendingUp,
  Share2,
  Search,
  Filter,
} from "lucide-react";

export const metadata = {
  title: "Portfolio | Our Work & Case Studies — Aksh Digital",
  description:
    "Explore Aksh Digital's portfolio — web design, mobile apps, SEO case studies, and digital marketing campaigns that delivered real results for real businesses across India.",
};

const categories = ["All", "Web Design", "Mobile App", "SEO", "Branding", "Social Media"];

const stats = [
  { num: "200+", label: "Projects Delivered" },
  { num: "50+", label: "Happy Clients" },
  { num: "15+", label: "Industries Served" },
  { num: "4.9★", label: "Average Rating" },
];

const projects = [
  {
    title: "Jaipur Luxury Hotel — Complete Digital Rebrand",
    category: "Web Design",
    description: "A complete digital transformation for a boutique luxury hotel in Jaipur. Redesigned website, local SEO, and Instagram growth strategy that drove 3x bookings.",
    tags: ["Next.js", "SEO", "Social Media"],
    result: "3x increase in direct bookings",
    resultType: "positive",
    image: "/assets/images/home/PROJECT-01.webp",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "E-Commerce Fashion Brand — SEO & Performance Marketing",
    category: "SEO",
    description: "Built an organic traffic engine for a Jaipur-based fashion brand through technical SEO, content marketing, and Google Shopping campaigns.",
    tags: ["E-commerce SEO", "Google Ads", "Content"],
    result: "410% organic traffic growth in 8 months",
    resultType: "positive",
    image: "/assets/images/home/PROJECT-02.webp",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Real Estate App — iOS & Android",
    category: "Mobile App",
    description: "End-to-end development of a property listing and tour-booking app for a Jaipur real estate firm. Built in React Native with real-time chat and AR property tours.",
    tags: ["React Native", "Firebase", "AR"],
    result: "5,000+ downloads in first month",
    resultType: "positive",
    image: "/assets/images/home/PROJECT-03.webp",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Healthcare Clinic Chain — Local SEO",
    category: "SEO",
    description: "Multi-location local SEO strategy for a healthcare group across 5 Jaipur locations. GMB optimisation, review management, and local content drove a 220% increase in phone enquiries.",
    tags: ["Local SEO", "GMB", "Reputation"],
    result: "220% more phone calls from search",
    resultType: "positive",
    image: "/assets/images/home/PROJECT-04.webp",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "D2C Skincare Brand — Social Media & Influencer Strategy",
    category: "Social Media",
    description: "Built a 50k Instagram following from scratch for a Jaipur-based skincare startup through Reels strategy, micro-influencer campaigns, and UGC frameworks.",
    tags: ["Instagram", "Influencer", "UGC"],
    result: "0 → 50k followers in 6 months",
    resultType: "positive",
    image: "/assets/images/home/PROJECT-05.webp",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "EdTech Platform — Complete Brand Identity",
    category: "Branding",
    description: "Created the entire brand identity for a Jaipur EdTech startup — logo, colour system, typography, UI kit, and brand guidelines — ahead of their ₹2Cr seed round.",
    tags: ["Logo Design", "Brand Guidelines", "UI Kit"],
    result: "Raised ₹2Cr seed round post-rebrand",
    resultType: "positive",
    image: "/assets/images/home/PROJECT-06.webp",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "B2B SaaS Website — Conversion Optimisation",
    category: "Web Design",
    description: "Redesigned a SaaS company's marketing website with conversion-focused UX, A/B-tested landing pages, and a new pricing page — resulting in a 67% lift in trial signups.",
    tags: ["Next.js", "CRO", "A/B Testing"],
    result: "67% lift in free trial signups",
    resultType: "positive",
    image: "/assets/images/home/PROJECT-01.webp",
    color: "from-sky-500 to-blue-500",
  },
  {
    title: "Restaurant Chain — Performance Marketing",
    category: "Social Media",
    description: "Meta and Google Ads campaigns for a 6-location restaurant chain in Rajasthan. Hyperlocal targeting, menu offer ads, and retargeting drove table bookings and delivery orders.",
    tags: ["Meta Ads", "Google Ads", "Hyperlocal"],
    result: "4.3x ROAS on ₹5L monthly spend",
    resultType: "positive",
    image: "/assets/images/home/PROJECT-02.webp",
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Logistics Company — Mobile App & Dashboard",
    category: "Mobile App",
    description: "Built a driver tracking app and client-facing shipment dashboard for a Jaipur logistics firm. Real-time GPS, push notifications, and automated delivery reports.",
    tags: ["Flutter", "Node.js", "Maps API"],
    result: "40% reduction in delivery disputes",
    resultType: "positive",
    image: "/assets/images/home/PROJECT-03.webp",
    color: "from-slate-600 to-slate-800",
  },
];

const categoryColors = {
  "Web Design": "bg-blue-100 text-blue-700",
  "Mobile App": "bg-violet-100 text-violet-700",
  SEO: "bg-orange-100 text-orange-700",
  Branding: "bg-amber-100 text-amber-700",
  "Social Media": "bg-pink-100 text-pink-700",
};

const testimonials = [
  {
    text: "Aksh Digital completely transformed our online presence. Our website traffic is up 4x and we're getting quality leads every day from Google.",
    name: "Rahul Sharma",
    role: "Founder, Jaipur Fashion House",
    rating: 5,
  },
  {
    text: "The app they built for us is beautiful and incredibly fast. Our customers love it and the 5-star reviews on the App Store prove it.",
    name: "Priya Verma",
    role: "CEO, PropFind Realty",
    rating: 5,
  },
  {
    text: "Our Instagram went from 1k to 45k followers in 5 months. The team really understands social media and delivers consistent results.",
    name: "Anjali Kapoor",
    role: "Founder, GlowUp Skincare",
    rating: 5,
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#d25c41]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#f6ac55]/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d25c41]/30 bg-[#d25c41]/10 px-4 py-1.5 text-sm font-semibold text-[#f6ac55] mb-6">
            <Star className="h-3.5 w-3.5 fill-[#f6ac55]" />
            Our Work
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-tight tracking-tight mb-6">
            Projects That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d25c41] to-[#f6ac55]">
              Deliver Results
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Real businesses. Measurable results. From SEO wins to stunning apps — here's a snapshot of the work we're proud of.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-3.5 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300">
              Start Your Project <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#d25c41] py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map(({ num, label }) => (
            <div key={label}>
              <p className="text-3xl sm:text-4xl font-bold text-white">{num}</p>
              <p className="mt-1 text-sm text-white/80 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-slate-100 bg-white py-5 px-4 sm:px-6 sticky top-0 z-40 shadow-sm">
        <div className="mx-auto max-w-6xl flex items-center gap-2 overflow-x-auto scrollbar-none">
          <Filter className="h-4 w-4 text-slate-400 shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 ${
                cat === "All"
                  ? "bg-[#d25c41] text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-[#d25c41]/10 hover:text-[#d25c41]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 group-hover:opacity-40 transition-opacity duration-300`} />
                  <span className={`absolute top-3 left-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${categoryColors[project.category] || "bg-white/90 text-slate-700"}`}>
                    {project.category}
                  </span>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700">
                      <ExternalLink className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-[#14183e] leading-snug mb-2 group-hover:text-[#d25c41] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Result */}
                  <div className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-2.5">
                    <TrendingUp className="h-4 w-4 text-emerald-600 shrink-0" strokeWidth={2} />
                    <span className="text-xs font-bold text-emerald-700">{project.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e]">What Our Clients Say</h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">Real feedback from real clients who've seen real results.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.map(({ text, name, role, rating }) => (
              <div key={name} className="rounded-2xl border border-slate-100 bg-[#fafaf9] p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#f6ac55] text-[#f6ac55]" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-5">&ldquo;{text}&rdquo;</p>
                <div>
                  <p className="text-sm font-bold text-[#14183e]">{name}</p>
                  <p className="text-xs text-slate-500">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 px-4 sm:px-6 bg-[#fafaf9] border-y border-slate-100">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6">Industries We've Served</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Real Estate", "Healthcare", "E-Commerce", "Education", "Hospitality", "Logistics", "Fashion", "SaaS", "Finance", "Food & Beverage"].map((ind) => (
              <span key={ind} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#d25c41] to-[#b84d35] py-16 px-4 sm:px-6 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Your Project Could Be Next</h2>
          <p className="text-white/80 mb-8">Tell us your goals and let's build something remarkable together.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#d25c41] hover:bg-slate-50 transition-colors shadow-lg">
            Start a Project <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
