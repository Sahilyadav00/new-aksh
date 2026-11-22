import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  Eye,
  Globe,
  Layers,
  Lightbulb,
  MapPin,
  Megaphone,
  Rocket,
  Search,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import ScrollObserver from "@/components/ScrollObserver";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  BlogCtaBanner,
  Eyebrow,
  GRADIENT_TEXT,
  HeroBackdrop,
} from "@/components/blog/BlogUi";

export const metadata = {
  title:
    "About Aksh Digital | Digital Marketing & Web Development Agency India",
  description:
    "Aksh Digital is a full-service digital marketing and web development agency in Jaipur. We help businesses across India, USA, and UK scale with SEO, performance ads, and modern web builds.",
  alternates: {
    canonical: "https://www.akshdigital.in/about/",
  },
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
const STORY_IMAGE =
  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

// Same four trust points as the home hero.
const heroHighlights = [
  { Icon: Rocket, top: "Scalable", bottom: "Solutions" },
  { Icon: TrendingUp, top: "High", bottom: "Performance" },
  { Icon: Users, top: "Global", bottom: "Clients" },
  { Icon: ShieldCheck, top: "Trusted", bottom: "Partnership" },
];

// Same strip as under the home hero.
const trustBadges = [
  "100% Data-Driven ROI",
  "Multi-Timezone Offshore Delivery",
  "Next.js & Modern Tech Stacks",
  "Pan-India & Global Campaign Expertise",
];

// Same figures as the home "About Aksh Digital" stat cards.
const stats = [
  {
    Icon: Megaphone,
    target: 50,
    suffix: "+",
    label: "Successful Campaigns",
    text: "Data-backed SEO, Meta, and Google Ads strategies built to maximize ROAS.",
  },
  {
    Icon: TrendingUp,
    target: 200,
    suffix: "%",
    label: "Average Traffic Growth",
    text: "High-intent organic and paid acquisition strategies for scalability.",
  },
];

const corePillars = [
  {
    title: "High-ROAS Performance Marketing",
    desc: "Stop wasting budget on vanity metrics. As a dedicated paid advertising agency, we manage data-backed campaigns across Google and Meta that focus on pure profitability and lower acquisition costs.",
    icon: Zap,
  },
  {
    title: "Organic Search Dominance",
    desc: "As an experienced search engine optimization marketing agency, we build sustainable organic authority through deep technical audits, semantic keyword mapping, and local Google Map rankings.",
    icon: Search,
  },
  {
    title: "Modern Web & App Development",
    desc: "We design fast, responsive platforms from scratch. Our digital builds are mobile-friendly, conversion-optimized, and engineered with Next.js, React, and Node.js.",
    icon: Layers,
  },
  {
    title: "Brand Storytelling & Social Reach",
    desc: "As a results-driven social media marketing agency, we create scroll-stopping visual assets and run engaging campaigns that transform casual followers into loyal brand advocates.",
    icon: Megaphone,
  },
];

const whyUs = [
  {
    title: "Clear, Honest Communication",
    desc: "No confusing industry jargon. You always know what we are building, why we are building it, and how it impacts your bottom line.",
  },
  {
    title: "Live, Real-Time Dashboards",
    desc: "Track your keyword rankings, traffic, ad spend, and conversion value whenever you want.",
  },
  {
    title: "Integrated Skillsets",
    desc: "You don't need five different vendors. Get your web development, SEO, and paid ad management handled under one roof.",
  },
  {
    title: "Flexible Growth Partnerships",
    desc: "We believe in earning your business every single month through performance, not restrictive long-term contracts.",
  },
];

const cityPresence = [
  {
    city: "Jaipur (HQ)",
    role: "Full-service digital marketing & web development",
  },
  { city: "Delhi NCR", role: "High-performance corporate SEO & paid ads" },
  { city: "Mumbai", role: "D2C performance marketing & enterprise web apps" },
  { city: "Bangalore", role: "Tech startup marketing & SaaS web platforms" },
  { city: "Pune", role: "Regional brand building & Google Ads campaigns" },
  { city: "Indore", role: "Local market digital growth & SEO strategy" },
];

const offshorePoints = [
  "Dedicated timezone overlap (EST/PST & GMT)",
  "2-week agile sprint cycles",
  "Strict NDA & 100% IP ownership",
  "Transparent weekly reporting",
];

// Wave swoosh from the home "Local / Global" cards, pinned to the card bottom.
function CardWave({ d, fill }) {
  return (
    <svg
      viewBox="0 200 900 400"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] w-full select-none"
      aria-hidden="true"
    >
      <path d={d} fill={fill} />
    </svg>
  );
}

const BLUE_WAVE =
  "M0 245L37.5 262.8C75 280.7 150 316.3 225 320.5C300 324.7 375 297.3 450 314.5C525 331.7 600 393.3 675 414.3C750 435.3 825 415.7 862.5 405.8L900 396L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z";
const ORANGE_WAVE =
  "M0 250L37.5 271.2C75 292.3 150 334.7 225 366.7C300 398.7 375 420.3 450 428C525 435.7 600 429.3 675 393C750 356.7 825 290.3 862.5 257.2L900 224L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z";

const dotMatrix = {
  backgroundImage: "radial-gradient(#ea580c 1.5px, transparent 1.5px)",
  backgroundSize: "14px 14px",
};

export default function AboutPage() {
  return (
    <>
      <ScrollObserver />

      {/* 1. Hero — warm gradient, two columns like the home hero */}
      <section className="relative w-full overflow-hidden border-b border-orange-100/60 bg-linear-to-b from-[#fdfaf8] via-[#faf7f3] to-[#f8f4ed] px-4 py-8 shadow-[0_12px_40px_-15px_rgba(210,92,65,0.04)] sm:px-6 md:px-8">
        <HeroBackdrop />

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Left: text */}
          <div className="flex flex-col items-start text-left">
            <div className="animate-on-load-fade-up inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-orange-600 shadow-2xs sm:text-[13px]">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <span>About Our Agency</span>
              <ArrowRight className="h-3.5 w-3.5 text-orange-500" strokeWidth={2.5} />
            </div>

            <h1 className="animate-on-load-fade-up animation-delay-100 mt-5 text-[32px] font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-[42px] md:text-[48px] lg:text-[44px] xl:text-[50px]">
              The Digital Marketing and Web Development Agency Engineering{" "}
              <span className={GRADIENT_TEXT}>Real Business Growth</span>
            </h1>

            <div className="animate-on-load-fade-up animation-delay-200 mt-6 space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-base">
              <p>
                We started Aksh Digital with a simple goal: build meaningful
                digital products and market them with complete clarity. As a
                full-service digital agency headquartered in Jaipur, we help
                local businesses dominate their markets while serving as a
                trusted digital marketing agency USA and international brands
                rely on for predictable scaling.
              </p>
              <p className="border-l-4 border-primary pl-4 font-medium text-slate-800">
                We are not a typical marketing company that focuses on vanity
                metrics. Our approach is revenue-focused, conversion-oriented,
                and strategically aligned with your business goals.
              </p>
            </div>

            <div className="animate-on-load-fade-up animation-delay-300 mt-8 flex w-full flex-wrap items-center gap-3.5 sm:w-auto sm:gap-4">
              <Link
                href="/contact/"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-[#e85b2e] via-[#ee7439] to-[#f58d4a] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(232,91,46,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-5px_rgba(232,91,46,0.6)] sm:w-auto sm:px-8 sm:py-4 sm:text-[15px]"
              >
                <span>Get a Free Audit</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </Link>
              <Link
                href="/services/"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-slate-200/90 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 sm:w-auto sm:px-8 sm:py-4 sm:text-[15px]"
              >
                <span>Our Services</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </Link>
            </div>

            <div className="animate-on-load-fade-up animation-delay-400 mt-9 grid w-full grid-cols-2 gap-4 border-t border-slate-200/70 pt-7 sm:grid-cols-4">
              {heroHighlights.map(({ Icon, top, bottom }) => (
                <div key={top} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100/70 text-[#e85b2e] shadow-2xs sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <span className="text-xs font-bold leading-tight text-slate-900 sm:text-[13px]">
                    <span className="block">{top}</span>
                    <span className="block">{bottom}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image with halos and floating cards */}
          <div className="relative mx-auto w-full max-w-[520px] select-none py-6 sm:py-8">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-200/40 bg-linear-to-tr from-orange-200/20 via-amber-100/25 to-orange-100/10 sm:h-[480px] sm:w-[480px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/30 bg-linear-to-br from-orange-100/25 to-transparent sm:h-[370px] sm:w-[370px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -left-2 top-0 -z-10 h-24 w-24 opacity-25"
              style={dotMatrix}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-2 bottom-0 -z-10 h-24 w-24 opacity-25"
              style={dotMatrix}
              aria-hidden="true"
            />

            <div className="relative z-10 aspect-5/4 w-full overflow-hidden rounded-3xl border-4 border-white bg-orange-50 shadow-[0_24px_60px_-20px_rgba(20,24,62,0.35)]">
              <Image
                src={HERO_IMAGE}
                alt="Aksh Digital Team Meeting"
                fill
                sizes="(min-width: 640px) 520px, 90vw"
                loading="eager"
                fetchPriority="high"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#14183e]/45 via-transparent to-transparent" />
            </div>

            {/* Rating (top left) */}
            <div className="card-smooth animate-float-slow absolute -left-2 top-0 z-20 flex items-center gap-2.5 rounded-2xl border border-slate-100/90 bg-white/95 p-2.5 shadow-[0_14px_36px_rgba(0,0,0,0.08)] backdrop-blur-md sm:-left-6 sm:gap-3 sm:p-3.5">
              <div className="flex -space-x-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-tr from-amber-400 to-orange-400 text-[9px] font-bold text-white ring-2 ring-white sm:h-7 sm:w-7">
                  JD
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-tr from-orange-500 to-red-400 text-[9px] font-bold text-white ring-2 ring-white sm:h-7 sm:w-7">
                  SK
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#14183e] text-[8px] font-bold text-white ring-2 ring-white sm:h-7 sm:w-7 sm:text-[9px]">
                  5K+
                </span>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-[11px] font-extrabold text-[#14183e] sm:text-[13px]">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span>4.9 / 5 Rating</span>
                </div>
                <p className="text-[9.5px] font-medium text-slate-500 sm:text-[11px]">
                  From Verified Clients
                </p>
              </div>
            </div>

            {/* Growth (bottom right) */}
            <div className="card-smooth animate-float-reverse absolute -right-2 bottom-2 z-20 flex min-w-[150px] flex-col rounded-2xl border border-slate-100/90 bg-white/95 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.09)] backdrop-blur-md sm:-right-6 sm:bottom-4 sm:min-w-[180px] sm:p-4">
              <div className="mb-2 flex h-8 items-end justify-between gap-1 px-1" aria-hidden="true">
                <span className="h-2.5 w-2 rounded-t-xs bg-linear-to-t from-orange-500/80 to-amber-300 opacity-60" />
                <span className="h-4 w-2 rounded-t-xs bg-linear-to-t from-orange-500/80 to-amber-300 opacity-70" />
                <span className="h-5 w-2 rounded-t-xs bg-linear-to-t from-orange-500/80 to-amber-300 opacity-80" />
                <span className="h-6 w-2 rounded-t-xs bg-linear-to-t from-orange-500/80 to-amber-300 opacity-90" />
                <span className="h-7 w-2 rounded-t-xs bg-linear-to-t from-orange-500 to-amber-400" />
                <span className="h-8 w-2 rounded-t-xs bg-linear-to-t from-orange-500 to-amber-400" />
              </div>
              <div className="text-base font-extrabold leading-none text-emerald-600 sm:text-lg">
                +230%
              </div>
              <div className="mt-0.5 text-[9.5px] font-semibold text-slate-500 sm:text-[10.5px]">
                Avg. Revenue Growth
              </div>
            </div>

            {/* HQ (bottom left) */}
            <div className="card-smooth absolute -left-2 bottom-16 z-20 hidden items-center gap-2.5 rounded-2xl border border-slate-100/90 bg-white/95 px-3.5 py-2.5 shadow-[0_14px_36px_rgba(0,0,0,0.08)] backdrop-blur-md sm:-left-8 sm:flex">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-100/80 text-orange-600 shadow-2xs">
                <MapPin className="h-4 w-4" strokeWidth={2.4} />
              </span>
              <span className="text-left text-xs font-extrabold leading-tight text-slate-900">
                <span className="block">Jaipur HQ</span>
                <span className="block font-semibold text-slate-500">
                  India · USA · UK
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust badges strip — same as under the home hero */}
      <section className="border-b border-orange-100/70 bg-[linear-gradient(90deg,#f5f2ed_50%,#FFCC8041_100%)] py-6">
        <div className="reveal mx-auto grid w-full max-w-6xl grid-cols-2 gap-3 px-4 sm:gap-4 sm:px-8 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2.5 rounded-xl border border-orange-100/80 bg-linear-to-br from-white to-orange-50/40 px-3.5 py-2.5 text-xs font-semibold text-slate-700 shadow-2xs transition-all duration-300 hover:border-primary/40 hover:shadow-xs sm:text-sm"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Our Story & Background */}
      <section className="relative w-full overflow-hidden border-b border-orange-100/60 bg-linear-to-b from-[#f5f2ed] via-[#faf8f5] to-[#f4f1ea] px-4 py-14 sm:px-6 sm:py-16 md:px-8">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-violet-200/35 blur-3xl" />
          <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: image + stat counters */}
          <div className="reveal reveal-left">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <Lightbulb
                className="pointer-events-none absolute -left-4 -top-6 z-0 h-28 w-28 text-slate-200/80 sm:h-36 sm:w-36"
                strokeWidth={1}
                aria-hidden="true"
              />
              <div className="relative z-10 aspect-4/3 overflow-hidden rounded-3xl border-4 border-white bg-orange-50 shadow-xl">
                <Image
                  src={STORY_IMAGE}
                  alt="Aksh Digital strategy session"
                  fill
                  sizes="(min-width: 1024px) 560px, (min-width: 640px) 512px, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#14183e]/35 to-transparent" />
              </div>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {stats.map(({ Icon, target, suffix, label, text }) => (
                <li
                  key={label}
                  className="flex gap-4 rounded-2xl border border-orange-200/60 bg-linear-to-br from-white via-white to-orange-50/30 p-5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <div className="text-xl font-semibold leading-tight text-slate-900">
                      <AnimatedCounter target={target} suffix={suffix} /> {label}
                    </div>
                    <p className="mt-1 text-xs text-slate-500">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: story */}
          <div className="reveal reveal-right relative">
            <Target
              className="pointer-events-none absolute -right-2 -top-4 z-0 h-24 w-24 text-slate-200/70 sm:h-32 sm:w-32"
              strokeWidth={1}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <Eyebrow>Our Story &amp; Background</Eyebrow>
              <h2 className="mt-4 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[38px]">
                Real People, Proven Strategies, and{" "}
                <span className={GRADIENT_TEXT}>Measurable ROI</span>
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-base">
                <p>
                  Most business owners face the same frustrating problem:
                  software developers don&apos;t understand marketing funnels,
                  and marketing agencies don&apos;t understand modern code. That
                  disconnect leads to slow websites, wasted ad budgets, and poor
                  conversion rates.
                </p>
                <p>
                  Aksh Digital bridges that gap. We are a unified software and
                  digital marketing company. By bringing modern web developers
                  (Next.js, React, Node.js) under the same roof as dedicated
                  media buyers and search strategists, we build systems that
                  attract attention and turn clicks into revenue.
                </p>
                <p className="rounded-2xl border border-orange-200/70 bg-white/70 p-5 font-medium text-[#14183e] shadow-2xs">
                  Whether you need a dedicated digital marketing company in
                  Jaipur, a proven performance marketing agency India, or
                  outsourced digital marketing services for your overseas
                  business, we treat your growth as our own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="w-full overflow-hidden bg-linear-to-b from-[#f4f1ea] via-[#faf8f5] to-white px-4 py-14 sm:px-6 sm:py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <Eyebrow center>Mission &amp; Vision</Eyebrow>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            <div className="reveal reveal-left h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-orange-200/60 bg-linear-to-br from-white via-white to-orange-50/50 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_20px_40px_-12px_rgba(210,92,65,0.22)] sm:p-10">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-200/30 blur-3xl"
                  aria-hidden="true"
                />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary text-white shadow-md shadow-primary/20">
                  <Target className="h-7 w-7" strokeWidth={2} />
                </span>
                <div className="relative mt-6 mb-4 h-1 w-8 rounded-full bg-linear-to-r from-primary to-secondary transition-all duration-300 group-hover:w-14" />
                <h2 className="relative mb-4 text-2xl font-semibold text-[#14183e] sm:text-[26px]">
                  Our Mission
                </h2>
                <p className="relative leading-relaxed text-slate-600">
                  To provide transparent digital marketing solutions and
                  scalable technology that lower customer acquisition costs and
                  build long-term enterprise value for brands around the world.
                </p>
              </div>
            </div>

            <div className="reveal reveal-right delay-200 h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-800 bg-linear-to-br from-slate-950 via-slate-900 to-[#1a2744] p-8 text-white shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(210,92,65,0.35)] sm:p-10">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl"
                  aria-hidden="true"
                />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white">
                  <Eye className="h-7 w-7" strokeWidth={2} />
                </span>
                <div className="relative mt-6 mb-4 h-1 w-8 rounded-full bg-linear-to-r from-primary to-secondary transition-all duration-300 group-hover:w-14" />
                <h2 className="relative mb-4 text-2xl font-semibold sm:text-[26px]">
                  Our Vision
                </h2>
                <p className="relative mb-6 leading-relaxed text-white/80">
                  To be recognized as the best digital marketing agency in
                  India, known for clear communication, technical excellence,
                  and measurable return on investment.
                </p>
                <div className="relative rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p className="font-semibold text-orange-300">
                    Aksh Digital is built on clarity, performance, and
                    accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Pillars */}
      <section className="w-full border-t border-slate-200/60 bg-linear-to-b from-white via-[#faf8f5] to-[#f6f4ee] px-4 py-14 sm:px-6 sm:py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-10 sm:mb-12">
            <Eyebrow>Core Pillars</Eyebrow>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px]">
              How We Grow Your Business
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2">
            {corePillars.map(({ title, desc, icon: Icon }, idx) => (
              <div key={title} className={`reveal h-full delay-${(idx + 1) * 100}`}>
                <div className="group relative flex h-full gap-5 overflow-hidden rounded-3xl border border-orange-200/60 bg-linear-to-br from-white via-white to-orange-50/40 p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_20px_40px_-12px_rgba(210,92,65,0.22)] sm:p-8">
                  <span
                    className="pointer-events-none absolute -bottom-10 right-3 select-none text-[8rem] font-extrabold italic leading-none tracking-tighter text-slate-900/5 transition-all duration-500 group-hover:text-primary/15"
                    aria-hidden="true"
                  >
                    {`0${idx + 1}`}
                  </span>
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary text-white shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <div className="relative">
                    <div className="mb-4 h-1 w-8 rounded-full bg-linear-to-r from-primary to-secondary transition-all duration-300 group-hover:w-14" />
                    <h3 className="mb-2 text-lg font-bold leading-snug text-[#14183e] transition-colors group-hover:text-primary sm:text-[19px]">
                      {title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Domestic Domination & Global Reach — styled like the home Local/Global cards */}
      <section className="relative w-full overflow-hidden bg-linear-to-b from-[#f6f4ee] via-[#faf8f5] to-[#f4f1eb] px-4 py-14 sm:px-6 sm:py-16 md:px-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="reveal mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <Eyebrow center>Hyper-Local Indian Expertise</Eyebrow>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight tracking-tight text-[#14183e] sm:text-[36px] md:text-[40px]">
              Domestic Domination with a Global Reach
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
              We understand the nuances of local Indian markets and serve
              clients spanning every major economic hub.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Local presence */}
            <div className="reveal reveal-left h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[#f97316] bg-white p-7 shadow-[0_12px_40px_-12px_rgba(249,115,22,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(249,115,22,0.22)] sm:p-9">
                <div className="pointer-events-none absolute right-2 top-2 w-28 select-none opacity-90 sm:right-3 sm:top-3 sm:w-40">
                  <Image
                    src="/assets/images/home/Hawa Mahal.png"
                    alt=""
                    width={220}
                    height={150}
                    className="h-auto w-full object-contain drop-shadow-xs"
                  />
                </div>
                <CardWave d={ORANGE_WAVE} fill="#ffedd5" />

                <div className="relative z-10">
                  <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-200/80 bg-orange-50 text-orange-600 shadow-xs transition-transform duration-300 group-hover:scale-105">
                    <Building2 className="h-7 w-7" strokeWidth={2.2} />
                  </span>
                  <h3 className="pr-24 text-xl font-bold leading-tight text-[#0f172a] sm:pr-32 sm:text-2xl">
                    Pan-India City Hubs
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {cityPresence.map(({ city, role }) => (
                      <li
                        key={city}
                        className="flex items-start gap-3 rounded-xl border border-orange-100 bg-white/90 p-3.5 shadow-2xs backdrop-blur-sm"
                      >
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm">
                          <span className="font-bold text-[#14183e]">{city}</span>
                          <span className="text-slate-500"> — {role}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Global offshore */}
            <div className="reveal reveal-right delay-200 h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[#5dade2] bg-white p-7 shadow-[0_12px_40px_-12px_rgba(59,130,246,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.22)] sm:p-9">
                <div className="pointer-events-none absolute right-4 top-4 w-32 select-none opacity-80 sm:right-6 sm:top-6 sm:w-44">
                  <Image
                    src="/assets/images/home/Global Network.png"
                    alt=""
                    width={450}
                    height={320}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <CardWave d={BLUE_WAVE} fill="#dbeafe" />

                <div className="relative z-10 flex h-full flex-col">
                  <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200/80 bg-blue-50 text-blue-600 shadow-xs transition-transform duration-300 group-hover:scale-105">
                    <Globe className="h-7 w-7" strokeWidth={2.2} />
                  </span>
                  <p className="text-sm font-semibold text-blue-600 sm:text-[15px]">
                    Global Offshore Delivery
                  </p>
                  <h3 className="mt-2 pr-24 text-xl font-bold leading-tight text-[#0f172a] sm:pr-32 sm:text-2xl">
                    Trusted by USA &amp; UK Brands
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    Looking for a reliable digital marketing agency in USA or UK
                    markets? We provide flexible, cost-effective offshore
                    partnerships with dedicated timezone overlap, two-week agile
                    sprint cycles, and total transparency.
                  </p>
                  <ul className="mt-7 space-y-3.5">
                    {offshorePoints.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-[13px] font-semibold text-slate-800 sm:text-[14px]"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1d4ed8] text-white shadow-xs">
                          <Check className="h-3 w-3" strokeWidth={3.2} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <Link
                      href="/contact/"
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-md transition-colors duration-300 hover:bg-primary"
                    >
                      Start a Partnership
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                        strokeWidth={2.5}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Ambitious Brands Work With Us — home "Why Choose Us" glass cards */}
      <section className="w-full border-t border-slate-200/60 bg-linear-to-b from-[#f4f1ea] via-[#faf8f5] to-[#f1ede5] px-4 py-14 sm:px-6 sm:py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-12 text-center">
            <Eyebrow center>Why Choose Us</Eyebrow>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px]">
              Why Ambitious Brands Work With{" "}
              <span className="text-primary">Aksh Digital</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4">
            {whyUs.map(({ title, desc }, idx) => (
              <div key={title} className={`reveal h-full delay-${(idx + 1) * 100}`}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/80 bg-linear-to-br from-white/85 via-white/70 to-white/50 p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-white/90 hover:shadow-[0_20px_40px_-12px_rgba(210,92,65,0.18)]">
                  <div className="pointer-events-none absolute left-6 right-6 top-0 h-0.5 bg-linear-to-r from-transparent via-white to-transparent" />
                  <span
                    className="pointer-events-none absolute -bottom-10 right-3 select-none text-[8rem] font-extrabold italic leading-none tracking-tighter text-slate-900/[0.07] transition-all duration-500 group-hover:scale-105 group-hover:text-primary/20"
                    aria-hidden="true"
                  >
                    {`0${idx + 1}`}
                  </span>
                  <div className="relative z-10">
                    <div className="mb-5 h-1 w-8 rounded-full bg-linear-to-r from-primary to-secondary transition-all duration-300 group-hover:w-14" />
                    <h3 className="mb-3 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-primary">
                      {title}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed text-slate-600 sm:text-[14px]">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA — same dark banner as the home page */}
      <BlogCtaBanner
        eyebrow="Ready to Scale Your Brand Online?"
        title="Let's Review Your Website, Analyze Your Competition & Build a Custom Growth Strategy"
        text="Let's review your website, analyze your market competition, and build a custom strategy to accelerate your digital growth."
        buttonLabel="Claim Your Free Website & Growth Audit"
      />
    </>
  );
}
