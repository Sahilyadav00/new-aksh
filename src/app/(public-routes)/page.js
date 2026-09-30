import Image from "next/image";
import Link from "next/link";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeFaq from "@/components/HomeFaq";
import ScrollObserver from "@/components/ScrollObserver";
import FreeAuditForm from "@/components/FreeAuditForm";
import AnimatedCounter from "@/components/AnimatedCounter";
import DualTechMarquee from "@/components/DualTechMarquee";
import InteractivePortfolio from "@/components/InteractivePortfolio";
import InteractiveServiceTabs from "@/components/InteractiveServiceTabs";
import InteractiveProcessSteps from "@/components/InteractiveProcessSteps";
import InteractiveGrowthAudit from "@/components/InteractiveGrowthAudit";
import InteractiveCityHubs from "@/components/InteractiveCityHubs";
import {
  ArrowRight,
  Lightbulb,
  Target,
  Megaphone,
  TrendingUp,
  Quote,
  Star,
  ShieldCheck,
  DollarSign,
  MessageSquare,
  ThumbsUp,
  GitBranch,
  HandHelping,
  Flag,
  Folder,
  User,
  Calendar,
  Globe,
  Building2,
  Zap,
  BarChart3,
  Check,
  X,
  Clock,
  Lock,
  CheckCircle2,
  Search,
  ShoppingBag,
  Stethoscope,
  Shirt,
  Layers,
  Award,
  Phone,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Digital Marketing Agency in Jaipur | SEO & Ads Company Aksh Digital",
  description:
    "Aksh Digital is a full-service software development and performance digital marketing agency headquartered in Jaipur, serving clients across India, USA, UK, and worldwide.",
  alternates: {
    canonical: "https://www.akshdigital.in/",
  },
};

const trustBadges = [
  "100% Data-Driven ROI",
  "Multi-Timezone Offshore Delivery",
  "Next.js & Modern Tech Stacks",
  "Pan-India & Global Campaign Expertise",
];

const platformBadges = [
  "Stripe",
  "AWS",
  "Meta Business Partner",
  "Google Ads Certified",
  "PostgreSQL",
  "Next.js",
  "React",
];

const coreServiceCards = [
  {
    title: "Search Engine Optimization (SEO Strategies)",
    summary:
      "Rank on Page 1 for high-intent national, global, and local search queries. We cover technical audits, semantic keyword mapping, high-authority link acquisition, and localized Google Map pack rankings.",
    keyFocus:
      "Local SEO (Jaipur & Indian Metros), Enterprise National SEO, and International E-Commerce Search Strategy.",
    href: "/services/seo/",
    icon: Search,
  },
  {
    title: "Performance Marketing & Paid Ads",
    summary:
      "Eliminate wasted ad spend. We create, test, and optimize high-converting Google Search, Performance Max, and Meta ad campaigns engineered for strict ROAS targets.",
    keyFocus:
      "Google Ads, Meta Ads (Facebook & Instagram), B2B LinkedIn Marketing, Multi-Tier Retargeting.",
    href: "/services/performance-marketing/",
    icon: Zap,
  },
  {
    title: "Web & Mobile App Development",
    summary:
      "Modern, ultra-fast, and responsive digital products built with Next.js, React, Node.js, and mobile frameworks. Designed for seamless user experience and maximum conversion rates.",
    keyFocus:
      "Custom Web Apps, Corporate Websites, Headless E-Commerce, iOS & Android Apps.",
    href: "/services/web-development/",
    icon: Layers,
  },
  {
    title: "Social Media Marketing & Brand Building",
    summary:
      "Elevate your brand narrative with thumb-stopping creative design, community management, and data-backed viral social distribution.",
    keyFocus:
      "Multi-Platform Management, Creative Video Strategy, Social Ads, Brand Identity Systems.",
    href: "/services/social-media-marketing/",
    icon: Megaphone,
  },
];

const workProcessSteps = [
  {
    step: "01",
    title: "Discovery & Market Audit",
    description:
      "Deep competitor audits, keyword gap analysis, technical benchmarks, and conversion funnel research.",
    icon: GitBranch,
  },
  {
    step: "02",
    title: "Strategic Roadmap",
    description:
      "Custom growth sprints tailored to high-ROAS marketing funnels and modern Next.js engineering.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Agile Build & Launch",
    description:
      "Rapid development sprints, clean code deployment, and multi-tier ad campaign activation.",
    icon: HandHelping,
  },
  {
    step: "04",
    title: "Scale & Dominate",
    description:
      "Continuous conversion rate optimization, data analysis, and scalable market dominance.",
    icon: Flag,
  },
];

const howWeDoItems = [
  {
    title: "Our Mission",
    description:
      "Our mission is to empower brands by crafting innovative and impactful creative solutions. needs strategic campaigns success.",
    icon: DollarSign,
  },
  {
    title: "Our Vision",
    description:
      "Our vision is to be the leading creative agency that redefines how brands connect with the world. We push the boundaries of creativity.",
    icon: Star,
  },
];

const devTechnologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "AWS",
  "MongoDB",
];

const growthTools = [
  "Google Ads",
  "Meta Ads Manager",
  "GA4",
  "Google Tag Manager",
  "SEMrush",
  "Ahrefs",
  "Hotjar",
  "Figma",
];

const industryVerticals = [
  {
    title: "E-Commerce & D2C",
    description:
      "High-ROAS shopping ads, product SEO, conversion rate optimization (CRO).",
    icon: ShoppingBag,
  },
  {
    title: "Real Estate & Construction",
    description:
      "Hyper-local lead generation, virtual tour websites, Google search ads.",
    icon: Building2,
  },
  {
    title: "B2B & SaaS / Tech",
    description:
      "LinkedIn outreach, high-intent SEO content funnels, full-stack web apps.",
    icon: Globe,
  },
  {
    title: "Healthcare & Clinics",
    description:
      "Local map pack SEO, reputation management, high-trust landing pages.",
    icon: Stethoscope,
  },
  {
    title: "Fashion & Lifestyle",
    description:
      "Influencer management, viral social media campaigns, Meta ad scaling.",
    icon: Shirt,
  },
];

const cityHubs = [
  {
    city: "Jaipur (HQ)",
    focus: "Complete Local SEO, Web Development & Social Media",
  },
  {
    city: "Delhi NCR",
    focus: "Performance Marketing & Corporate SEO Strategies",
  },
  {
    city: "Mumbai",
    focus: "D2C Performance Ads & Enterprise Web Apps",
  },
  {
    city: "Bangalore",
    focus: "Tech Startup Marketing & SaaS Web Platforms",
  },
  {
    city: "Pune & Indore",
    focus: "Regional Brand Building & Google Ads Campaigns",
  },
];

const whyChooseUsPillars = [
  {
    title: "Strategic Digital Marketing & Discovery",
    description:
      "Every growth initiative must drive direct business ROI. As a premier full-service digital marketing agency, we begin with in-depth competitor research, technical audits, and commercial objectives rather than generic deliverables.",
  },
  {
    title: "Integrated Omnichannel Synergy",
    description:
      "Search visibility, high-ROAS paid media, and modern tech stacks deliver exponential returns when connected. Our holistic approach aligns SEO strategies, performance marketing (Google & Meta Ads), social media marketing, and custom web development into a unified revenue engine.",
  },
  {
    title: "Data-Driven Performance & Optimization",
    description:
      "We eliminate guesswork through advanced conversion tracking and analytics. Continuous performance monitoring allows us to allocate ad spend efficiently, optimize high-intent keywords, and scale channels that generate the highest conversion value.",
  },
  {
    title: "Market-Specific Global & Local Execution",
    description:
      "Audience behaviors vary across regional and international borders. From local search dominance for businesses looking for a leading digital marketing company in Jaipur or key Indian metros to full-scale campaigns for brands targeting the USA, UK, and global markets, we engineer tailored solutions for every ecosystem.",
  },
  {
    title: "Transparent Reporting & Communication",
    description:
      "Complete clarity at every stage of execution. We provide regular sprint updates, transparent ROAS and organic ranking metrics, and direct access to your dedicated team.",
  },
  {
    title: "Sustainable Long-Term Growth Assets",
    description:
      "Beyond temporary vanity metrics, we engineer scalable digital assets, authoritative organic search rankings, and conversion funnels that compound in value and drive predictable business growth over time.",
  },
];

const blogPosts = [
  {
    title: "Services That Printing At You Is Important",
    category: "Workplace",
    date: "Sep 30, 2024",
    image: "/assets/images/home/BLOG-01.WEBP",
  },
  {
    title: "A Checklist To Improve Your Daily Routine",
    category: "Coding",
    date: "Sep 30, 2024",
    image: "/assets/images/home/BLOG-02.WEBP",
  },
  {
    title: "That Will Help You Get 1% Better Every Day",
    category: "Technology",
    date: "Sep 30, 2024",
    image: "/assets/images/home/BLOG-03.WEBP",
  },
];

const portfolioGallery = [
  {
    src: "/assets/images/home/PROJECT-01.webp",
    alt: "Creative team at work",
    className: "h-36 w-28 sm:h-48 sm:w-36 shrink-0 relative translate-y-[60px]",
  },
  {
    src: "/assets/images/home/PROJECT-02.webp",
    alt: "Design review session",
    className: "h-44 w-32 sm:h-52 sm:w-40 shrink-0 relative -translate-y-6",
  },
  {
    src: "/assets/images/home/PROJECT-03.webp",
    alt: "Project showcase",
    className: "h-44 w-32 sm:h-52 sm:w-40 shrink-0 relative translate-y-12",
  },
  {
    src: "/assets/images/home/PROJECT-06.webp",
    alt: "Studio brainstorming",
    className: "h-44 w-32 sm:h-52 sm:w-40 shrink-0 relative",
  },
  {
    src: "/assets/images/home/PROJECT-04.webp",
    alt: "Collaboration workspace",
    className: "h-44 w-32 sm:h-52 sm:w-40 shrink-0 relative translate-y-30",
  },
  {
    src: "/assets/images/home/PROJECT-05.webp",
    alt: "Studio brainstorming",
    className: "h-36 w-28 sm:h-54 sm:w-36 shrink-0 relative translate-y-0",
  },
];

export default function Home() {
  return (
    <>
      <ScrollObserver />

      {/* 1. Hero Section with Warm Light Gradient Background */}
      <section className="max-w-384 mx-auto w-full bg-linear-to-b from-[#faf8f5] via-[#fbf9f6] to-[#f5f2ed] border-b border-orange-100/60 shadow-[0_12px_40px_-15px_rgba(210,92,65,0.04)] px-3 sm:px-6 md:px-8 py-8 sm:py-16 relative overflow-hidden">
        {/* Ambient Animated Gradient Mesh Background */}
        <div
          className="pointer-events-none absolute -top-36 -left-36 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-mesh-1"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-secondary/15 blur-3xl animate-mesh-2"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(#14183e 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs sm:text-sm font-semibold tracking-wide hover:bg-primary/10 transition-colors duration-300 animate-on-load-fade-up animation-delay-100 shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Global Vision • Local Precision • Scalable Results</span>
              <ArrowRight className="w-3.5 h-3.5 text-primary/70" strokeWidth={2.5} />
            </div>

            {/* Primary H1 Headline */}
            <h1 className="text-[34px] sm:text-[48px] md:text-[54px] lg:text-[60px] font-semibold text-slate-900 leading-[1.12] mt-6 mb-6 tracking-tight animate-on-load-fade-up animation-delay-200">
              Software Development &amp;{" "}
              <span className="text-primary bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                Performance Marketing Agency
              </span>
            </h1>

            {/* Sub-Headline */}
            <p className="text-slate-600 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-8 max-w-xl animate-on-load-fade-up animation-delay-300">
              Partner with the leading growth and engineering agency in India for
              scalable web applications, dominant SEO strategies, and high-ROAS
              paid media campaigns. From Jaipur to high-growth businesses across
              the USA, UK, and worldwide, we turn digital presence into
              predictable revenue.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto animate-on-load-fade-up animation-delay-400">
              <Link
                href="/contact/"
                className="group flex items-center justify-center gap-2 bg-linear-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-[15px] hover:shadow-[0_8px_30px_-5px_rgba(210,92,65,0.45)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto shadow-lg shadow-primary/15"
              >
                <span>Schedule a Strategy Call</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                  strokeWidth={2.5}
                />
              </Link>
              <Link
                href="/services/"
                className="group flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-300 hover:border-slate-400 px-8 py-4 rounded-full font-bold text-[15px] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto shadow-2xs"
              >
                <span>Explore Our Services</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </Link>
            </div>

            {/* Hero Live Animated Stats Strip */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full animate-on-load-fade-up animation-delay-500">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  <AnimatedCounter target={450} suffix="+" />
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Campaigns Delivered</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                  <AnimatedCounter target={300} suffix="%" />
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Avg Traffic Growth</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  <AnimatedCounter target={4.3} decimals={1} suffix="x" />
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Blended ROAS</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  <AnimatedCounter target={99} suffix="%" />
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Client Retention</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Component with Ambient Layers */}
          <div className="relative w-full  overflow-hidden flex items-end justify-center animate-on-load-scale animation-delay-200">
            <div className="absolute w-full rounded-full aspect-square bg-primary/15 z-0 translate-y-[8%] animate-pulse-glow" />
            <div className="absolute w-[calc(100%-100px)] rounded-full aspect-square border border-primary/20 bg-secondary/20 z-0 translate-y-[8%] pointer-events-none" />

            {/* Floating Review Badge Overlay */}
            <div className="absolute top-4 left-2 sm:top-8 sm:left-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-100 flex items-center gap-3 animate-float-slow">
              <div className="flex -space-x-1.5">
                <div className="h-7 w-7 rounded-full bg-linear-to-br from-primary to-secondary text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-white">
                  AD
                </div>
                <div className="h-7 w-7 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-white">
                  5★
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-xs font-bold text-slate-900">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.9 / 5 Rating</span>
                </div>
                <p className="text-[10px] text-slate-500">120+ Verified Client Reviews</p>
              </div>
            </div>

            {/* Floating Tech Stack Badge */}
            <div className="absolute -bottom-2 right-2 sm:bottom-4 sm:right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl border border-slate-100 flex items-center gap-2 animate-float-reverse">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-slate-800">Next.js &amp; Performance Ads</span>
            </div>

            <div className="relative z-10 w-[220px] sm:w-[300px] md:w-[340px] lg:w-[500px] h-auto flex items-end">
              <Image
                src="/assets/images/home/social-media-trends.webp"
                alt="Software & Digital Marketing Agency representation"
                width={450}
                height={450}
                className="w-full h-auto object-contain select-none drop-shadow-[0_15px_35px_rgba(210,92,65,0.06)] hover:scale-[1.02] transition-transform duration-500 ease-out"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Strip with Soft Warm Gradient */}
      <section className="bg-linear-to-r from-orange-50/50 via-white/90 to-amber-50/50 border-b border-orange-100/70 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-linear-to-br from-white to-orange-50/40 rounded-xl px-3.5 py-2.5 border border-orange-100/80 shadow-2xs hover:border-primary/40 hover:shadow-xs transition-all duration-300"
            >
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Global Scale & Social Proof Strip */}
      <section className="w-full bg-slate-950 py-7 px-4 border-y border-slate-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-5">
            Trusted by Growing Businesses Across India &amp; Worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3">
            {platformBadges.map((badge) => (
              <span
                key={badge}
                className="text-slate-300 hover:text-white font-bold text-xs sm:text-sm tracking-wide flex items-center gap-2 transition-colors duration-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Aksh Digital Section */}
      <section className="relative w-full overflow-hidden bg-linear-to-b from-[#f5f2ed] via-[#faf8f5] to-[#f4f1ea] px-3 sm:px-6 md:px-8 py-14 sm:py-20 md:py-24 border-b border-orange-100/60">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-violet-200/35 blur-3xl" />
          <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {/* Left: image + floating elements */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none reveal reveal-left">
              <Lightbulb
                className="pointer-events-none absolute -left-2 top-8 z-0 h-28 w-28 text-slate-200/80 sm:h-36 sm:w-36"
                strokeWidth={1}
                aria-hidden
              />
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/assets/images/home/trusted-partner.webp"
                  alt="Aksh Digital team collaborating on software and marketing growth"
                  width={560}
                  height={520}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* Right: content */}
            <div className="relative font-sans">
              <Target
                className="pointer-events-none absolute -right-2 top-0 z-0 h-24 w-24 text-slate-200/70 sm:h-32 sm:w-32"
                strokeWidth={1}
                aria-hidden
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2 reveal reveal-right">
                  <span className="text-sm font-semibold text-primary sm:text-[15px]">
                    About Aksh Digital
                  </span>
                  <span className="flex gap-1" aria-hidden>
                    <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                    <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                    <span className="h-0.5 w-2 rounded-full bg-primary/30" />
                  </span>
                </div>

                <h2 className="mt-4 text-[28px] font-bold leading-tight text-[#1a2744] sm:text-[34px] md:text-[38px] lg:text-[42px] reveal reveal-right delay-100">
                  Empowering Businesses with Software Innovation &amp; Data-Driven
                  Growth
                </h2>

                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base reveal reveal-right delay-200">
                  Aksh Digital is a full-service software development and
                  performance digital marketing agency headquartered in Jaipur,
                  serving ambitious businesses across India, the USA, the UK,
                  and worldwide. We combine modern engineering—powered by
                  frameworks like Next.js and React—with high-ROAS marketing
                  funnels, search engine optimization, and paid advertising.
                  Whether scaling local market leadership or launching global
                  digital products, we deliver transparent, ROI-driven solutions
                  that turn web traffic into predictable revenue.
                </p>

                {/* Key Performance Highlights with Animated Counters */}
                <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 reveal reveal-right delay-300">
                  <li className="flex gap-4 bg-linear-to-br from-white via-white to-orange-50/30 p-5 rounded-2xl border border-orange-200/60 shadow-xs hover:shadow-xl hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                      <Megaphone className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold leading-tight text-slate-900">
                        <AnimatedCounter target={450} suffix="+" /> Successful Campaigns
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Data-backed SEO, Meta, and Google Ads strategies built
                        to maximize ROAS.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 bg-linear-to-br from-white via-white to-orange-50/30 p-5 rounded-2xl border border-orange-200/60 shadow-xs hover:shadow-xl hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                      <TrendingUp className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold leading-tight text-slate-900">
                        <AnimatedCounter target={300} suffix="%" /> Average Traffic Growth
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        High-intent organic and paid acquisition strategies for
                        scalability.
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Micro-CTA Quote */}
                <p className="mt-8 flex gap-2 text-[15px] font-bold italic text-[#1e3a6e] sm:text-base reveal reveal-right delay-400">
                  <Quote
                    className="mt-0.5 h-6 w-6 shrink-0 fill-[#93c5fd] text-[#93c5fd]"
                    aria-hidden
                  />
                  <span>
                    Let’s discuss your vision and build a custom digital growth
                    roadmap for your brand.
                  </span>
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-6 reveal reveal-right delay-500">
                  <Link
                    href="/about/"
                    className="inline-flex items-center justify-center rounded-full bg-[#3b6fd4] px-7 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:bg-[#2f5eb8] hover:shadow-md"
                  >
                    MORE ABOUT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom-right 3D character graphic */}
        <div className="pointer-events-none absolute -bottom-2 right-0 z-20 w-[100px] sm:w-[140px] md:w-[180px] lg:w-[220px] xl:w-[240px] reveal reveal-scale delay-300">
          <Image
            src="/assets/images/home/person-on-desk.webp"
            alt=""
            width={200}
            height={200}
            className="h-auto w-full object-contain drop-shadow-lg"
            aria-hidden
          />
        </div>
      </section>

      {/* 4. Core Services Section with Interactive Tabs & Light Gradient */}
      <section className="w-full bg-linear-to-b from-[#f4f1ea] via-[#faf8f5] to-white px-3 sm:px-6 md:px-8 py-14 sm:py-20 border-b border-orange-100/50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 sm:mb-12">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-primary sm:text-[15px]">
                What We Do
              </span>
              <span className="flex gap-1" aria-hidden>
                <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                <span className="h-0.5 w-2 rounded-full bg-primary/30" />
              </span>
            </div>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px] lg:text-[44px]">
              Full-Cycle Digital Solutions Engineered for Growth
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Comprehensive digital marketing and development services designed
              to scale your brand&apos;s reach and profitability.
            </p>
          </div>

          {/* Interactive Service Filter Tabs */}
          <InteractiveServiceTabs />

          <div className="mt-12 text-center">
            <Link
              href="/services/"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-sm font-bold tracking-wide text-white hover:bg-primary transition-colors duration-300 shadow-md"
            >
              View All Services &amp; Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Global & Local Delivery Framework */}
      <section className="w-full bg-linear-to-b from-white via-slate-50 to-[#f6f4ee] px-3 sm:px-6 md:px-8 py-14 sm:py-20 border-y border-slate-200/60">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-primary sm:text-[15px]">
                Global Reach, Local Touch
              </span>
              <span className="flex gap-1" aria-hidden>
                <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                <span className="h-0.5 w-2 rounded-full bg-primary/30" />
              </span>
            </div>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px] lg:text-[44px]">
              Built for Local Domination, Engineered for Global Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-blue-200/80 bg-linear-to-br from-white via-blue-50/20 to-indigo-50/25 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-blue-400/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mb-6 shadow-xs">
                <Globe className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                For International Clients (USA, UK, Global)
              </h3>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Access enterprise-level software engineering and performance
                marketing talent at cost-effective rates. Benefit from agile
                workflows, strict data security, and overlap-hour communication.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Flexible overlap-hour communication schedules</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Strict NDA &amp; 100% IP Code Ownership</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-orange-200/80 bg-linear-to-br from-white via-orange-50/20 to-amber-50/25 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-orange-400/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 mb-6 shadow-xs">
                <Building2 className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                For Pan-India &amp; Local Businesses (Jaipur HQ)
              </h3>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Leverage hyper-localized market insights, targeted
                vernacular/English omnichannel funnels, and on-the-ground local
                SEO strategies across Jaipur, Delhi NCR, Mumbai, Bangalore,
                Pune, and Indore.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Google Business Profile &amp; Map Pack domination</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>
                    On-ground Jaipur HQ support &amp; quick strategy meets
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Do & Interactive Process Steps */}
      <section className="w-full bg-linear-to-b from-[#f6f4ee] via-[#faf8f5] to-[#f4f1eb] px-3 sm:px-6 md:px-8 py-14 sm:py-20 border-b border-orange-100/50">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10 xl:gap-14">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-primary sm:text-[15px]">
                  How We Do
                </span>
                <span className="flex gap-1" aria-hidden>
                  <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                  <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                  <span className="h-0.5 w-2 rounded-full bg-primary/30" />
                </span>
              </div>
              <h2 className="mt-4 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px] lg:text-[44px]">
                Crafting Creative Solutions for Modern Brands
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-slate-600 sm:text-base lg:pt-8 lg:justify-self-end">
              Our comprehensive suite of digital marketing services is designed
              to elevate your brand&apos;s visibility and revenue.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:mt-14 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            {/* Left: mission list */}
            <div className="relative pl-2 sm:pl-4">
              <div
                className="absolute left-11 top-6 bottom-6 w-px bg-orange-200"
                aria-hidden="true"
              />
              <ul className="space-y-8 sm:space-y-10">
                {howWeDoItems.map(({ title, description, icon: Icon }) => (
                  <li key={title} className="relative flex gap-4 sm:gap-5">
                    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-[0_6px_20px_rgba(210,92,65,0.25)] sm:h-14 sm:w-14">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
                    </span>
                    <div className="pt-0.5">
                      <h3 className="text-lg font-semibold text-[#14183e] sm:text-xl">
                        {title}
                      </h3>
                      <p className="mt-2 text-[14px] font-medium leading-relaxed text-slate-600 sm:text-[15px]">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: image collage */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none lg:min-h-[420px]">
              <svg
                viewBox="0 0 120 120"
                className="pointer-events-none absolute -right-2 top-0 z-0 h-28 w-28 text-secondary/50 sm:h-36 sm:w-36"
                aria-hidden="true"
              >
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x2 = 60 + 50 * Math.cos(angle);
                  const y2 = 60 + 50 * Math.sin(angle);
                  return (
                    <line
                      key={i}
                      x1="60"
                      y1="60"
                      x2={x2}
                      y2={y2}
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  );
                })}
              </svg>

              <div className="absolute left-0 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-md bg-[#3b6fd4] text-white shadow-md sm:h-11 sm:w-11">
                <MessageSquare className="h-5 w-5" strokeWidth={2} />
              </div>

              <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-4 pt-8 pb-10">
                <div
                  className="relative mt-10 w-[46%] shrink-0 overflow-hidden shadow-lg rounded-2xl"
                  style={{
                    clipPath:
                      "polygon(14% 0, 100% 0, 100% 100%, 0 100%, 0 14%)",
                  }}
                >
                  <Image
                    src="/assets/images/home/PLAN-01.webp"
                    alt="Creative team collaboration"
                    width={280}
                    height={340}
                    className="h-[200px] w-full object-cover sm:h-[240px] md:h-[280px]"
                  />
                </div>

                <div
                  className="relative -mt-6 w-[46%] shrink-0 overflow-hidden shadow-lg rounded-2xl"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 86%, 86% 100%, 0 100%)",
                  }}
                >
                  <Image
                    src="/assets/images/home/PLAN-02.webp"
                    alt="Brand strategy meeting"
                    width={280}
                    height={340}
                    className="h-[200px] w-full object-cover sm:h-[240px] md:h-[280px]"
                  />
                </div>

                <div className="absolute left-1/2 top-1/2 z-30 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white shadow-xl sm:h-18 sm:w-18 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                  <div className="flex h-[calc(100%-16px)] w-[calc(100%-16px)] items-center justify-center bg-primary [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                    <Image
                      src="/assets/images/logo/logo-white.png"
                      alt="AKSH Digital"
                      width={36}
                      height={36}
                      className="h-8 w-auto object-contain sm:h-9"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-2 right-2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#3b6fd4] text-white shadow-[0_8px_24px_rgba(59,111,212,0.35)] sm:bottom-4 sm:right-4 sm:h-14 sm:w-14">
                <ThumbsUp className="h-6 w-6" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Follow 4 Easy Work Steps - Interactive Process Timeline */}
          <div className="mt-16 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
                Our Proven Process
              </span>
              <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden="true" />
            </div>
            <h2 className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 text-[26px] font-semibold uppercase leading-tight tracking-tight text-slate-900 sm:text-[32px] md:text-[36px]">
              Follow 4 Easy Work Steps
              <span
                className="inline-block h-2 w-2 rounded-full bg-primary"
                aria-hidden="true"
              />
            </h2>
            <p className="mt-3 text-slate-600 text-sm max-w-xl mx-auto">
              Click on each step below to inspect timeline, deliverables, and agile milestones.
            </p>
          </div>

          {/* Interactive Step-by-Step Component */}
          <InteractiveProcessSteps />
        </div>
      </section>

      {/* Interactive Growth Roadmap & Strategy Calculator */}
      <section className="w-full bg-linear-to-b from-[#f4f1eb] via-[#faf8f5] to-slate-950 px-3 sm:px-6 md:px-8 py-16 sm:py-22 border-b border-slate-800">
        <div className="mx-auto max-w-5xl">
          <InteractiveGrowthAudit />
        </div>
      </section>

      {/* Extra Section 1: Dedicated Global Delivery & Offshore Value Section */}
      <section className="w-full bg-slate-950 text-white px-3 sm:px-6 md:px-8 py-16 sm:py-24 border-y border-slate-800 relative overflow-hidden">
        {/* Ambient Dark Glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="mb-14">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-primary sm:text-[15px]">
                Offshore Excellence
              </span>
              <span className="flex gap-1" aria-hidden>
                <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                <span className="h-0.5 w-2 rounded-full bg-primary/30" />
              </span>
            </div>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight text-white sm:text-[34px] md:text-[40px] lg:text-[44px]">
              Seamless Offshore Collaboration &amp; Global Delivery
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              High-performing engineering &amp; marketing execution tailored for
              international founders and growth leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md p-6 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(210,92,65,0.18)] hover:-translate-y-1 transition-all duration-300 reveal delay-100">
              <Clock className="h-8 w-8 text-primary mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-white mb-2">
                Time Zone Overlap
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Dedicated hours overlapping with US (EST/PST) and UK (GMT)
                business days for real-time collaboration.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md p-6 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(210,92,65,0.18)] hover:-translate-y-1 transition-all duration-300 reveal delay-200">
              <MessageSquare
                className="h-8 w-8 text-primary mb-4"
                strokeWidth={2}
              />
              <h3 className="text-lg font-bold text-white mb-2">
                Communication &amp; Transparency
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Daily/weekly sprint reporting via Slack, ClickUp, Jira, and
                Google Meet with clear milestone tracking.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-800/60 backdrop-blur-md p-6 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(210,92,65,0.18)] hover:-translate-y-1 transition-all duration-300 reveal delay-300">
              <Award className="h-8 w-8 text-primary mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-white mb-2">
                Cost-to-Quality Advantage
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Enterprise-grade software engineering and performance marketing
                at competitive offshore pricing.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md p-6 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(210,92,65,0.18)] hover:-translate-y-1 transition-all duration-300 reveal delay-400">
              <Lock className="h-8 w-8 text-primary mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-white mb-2">
                Data Protection &amp; IP Security
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Strict NDAs, secure Git code repositories, and complete 100%
                client intellectual property ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section 3: Industry / Vertical Expertise Grid */}
      <section className="w-full bg-linear-to-b from-[#f7f5f0] via-[#fbfaf8] to-[#f4f1ea] px-3 sm:px-6 md:px-8 py-16 sm:py-24 border-t border-slate-200/60 relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="mb-14">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-primary sm:text-[15px]">
                Niche Mastery
              </span>
              <span className="flex gap-1" aria-hidden>
                <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                <span className="h-0.5 w-2 rounded-full bg-primary/30" />
              </span>
            </div>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px] lg:text-[44px]">
              Tailored Growth Strategies for Diverse Industries
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl">
              From high-velocity e-commerce and multi-location healthcare practices to specialized B2B SaaS, we engineer industry-specific playbooks tailored to your buyer journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryVerticals.map(({ title, description, icon: Icon }, idx) => (
              <div
                key={title}
                className={`group rounded-2xl border border-slate-200/80 bg-linear-to-br from-white via-white/95 to-orange-50/20 p-6 sm:p-8 hover:bg-white hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 card-smooth reveal ${
                  idx === 0
                    ? "delay-100"
                    : idx === 1
                    ? "delay-200"
                    : idx === 2
                    ? "delay-300"
                    : idx === 3
                    ? "delay-400"
                    : "delay-500"
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 to-orange-500/10 text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-2xs">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Technologies & Growth Stack Marquee */}
      <DualTechMarquee
        devTechnologies={devTechnologies}
        growthTools={growthTools}
      />

      {/* 7. Client Results & Testimonials */}
      <HomeTestimonials />

      {/* Latest Work / Interactive Portfolio */}
      <section className="relative w-full bg-linear-to-b from-[#f8f6f2] via-[#faf8f5] to-[#f4f0e8] px-3 sm:px-6 md:px-8 py-16 sm:py-22 border-t border-slate-200/60">
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
              Featured Work &amp; Case Studies
            </span>
            <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden />
          </div>

          <h2 className="mt-5 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px]">
            Explore Proven High-Growth Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
            Our portfolio of scalable web applications, enterprise digital platforms, and high-conversion marketing funnels.
          </p>
        </div>

        <InteractivePortfolio />
      </section>

      {/* 8. Frequently Asked Questions (FAQ) */}
      <HomeFaq />

      {/* Extra Section 6: Local City Quick-Access Hub */}
      <section className="w-full bg-linear-to-b from-[#f9f7f4] via-[#faf8f5] to-[#f4f0e8] px-3 sm:px-6 md:px-8 py-16 sm:py-22 border-t border-slate-200/60">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-sm font-semibold text-primary sm:text-[15px]">
                Pan-India Presence
              </span>
              <span className="flex gap-1" aria-hidden>
                <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                <span className="h-0.5 w-2 rounded-full bg-primary/30" />
              </span>
            </div>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px]">
              Scaling Brands Across India&apos;s Key Economic Hubs
            </h2>
            <p className="mt-3 text-slate-600 text-sm max-w-2xl">
              Explore our localized digital growth strategies, client results, and market-specific acceleration playbooks by region.
            </p>
          </div>

          <InteractiveCityHubs />
        </div>
      </section>

      {/* Extra Section 7: Why Businesses Choose Aksh Digital (SEO Trust Narrative) */}
      <section className="w-full bg-linear-to-b from-[#f4f1ea] via-[#faf8f5] to-[#f1ede5] px-3 sm:px-6 md:px-8 py-16 sm:py-24 border-t border-slate-200/60">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-sm font-semibold text-primary sm:text-[15px]">
                Why Choose Us
              </span>
              <span className="flex gap-1" aria-hidden>
                <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                <span className="h-0.5 w-2 rounded-full bg-primary/30" />
              </span>
            </div>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px] lg:text-[44px]">
              Why Businesses Choose Aksh Digital: India&apos;s Trusted Growth Partner
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl">
              We engineer scalable software architectures, organic search authority, and high-conversion funnels designed to deliver lasting, compounding business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="group relative rounded-2xl border border-slate-200/80 bg-linear-to-br from-white via-white to-amber-50/15 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 card-smooth"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 to-orange-500/10 text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {`0${idx + 1}`}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-all" />
                </div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2.5 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final Call to Action (CTA Banner) */}
      <section className="w-full bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-18 sm:py-24 px-3 sm:px-6 md:px-8 relative overflow-hidden border-t border-slate-800">
        {/* Ambient Animated Blobs */}
        <div
          className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-mesh-1"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-secondary/15 blur-3xl animate-mesh-2"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-5xl text-center relative z-10">
          <div className="flex items-center gap-2 justify-center mb-6">
            <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest">
              Let&apos;s Build Your Growth Roadmap
            </span>
            <span className="flex gap-1" aria-hidden>
              <span className="h-0.5 w-6 rounded-full bg-primary/70" />
              <span className="h-0.5 w-4 rounded-full bg-primary/50" />
              <span className="h-0.5 w-2 rounded-full bg-primary/30" />
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[38px] md:text-[46px] font-semibold leading-tight text-white max-w-4xl mx-auto tracking-tight">
            Ready to Turn Your Digital Channels into a Predictable Growth
            Engine?
          </h2>
          <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need full-stack software development, complete SEO
            management, or high-ROAS paid ads, our team is ready to build your
            custom growth roadmap.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="group relative flex items-center justify-center gap-2.5 bg-linear-to-r from-primary to-secondary text-white px-9 py-4.5 rounded-full font-bold text-base hover:shadow-[0_8px_35px_rgba(210,92,65,0.5)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto shadow-xl shadow-primary/20"
            >
              <span>Book Your Free Consultation &amp; Audit</span>
              <ArrowRight
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5"
                strokeWidth={2.5}
              />
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs sm:text-sm">
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="h-4 w-4 text-primary" />
              akshdigital9@gmail.com
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-2 text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              WhatsApp Support Available
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
