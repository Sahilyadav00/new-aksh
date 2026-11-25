import Image from "next/image";
import Link from "next/link";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeFaq from "@/components/HomeFaq";
import ScrollObserver from "@/components/ScrollObserver";
import HomeScrollAnimations from "@/components/HomeScrollAnimations";
import FreeAuditForm from "@/components/FreeAuditForm";
import AnimatedCounter from "@/components/AnimatedCounter";
import DualTechMarquee from "@/components/DualTechMarquee";
import InteractivePortfolio from "@/components/InteractivePortfolio";
import InteractiveServiceTabs from "@/components/InteractiveServiceTabs";
import InteractiveProcessSteps from "@/components/InteractiveProcessSteps";
import InteractiveGrowthAudit from "@/components/InteractiveGrowthAudit";
import InteractiveCityHubs from "@/components/InteractiveCityHubs";
import IndustryHexagons from "@/components/IndustryHexagons";
import {
  ArrowRight,
  Lightbulb,
  Target,
  Megaphone,
  TrendingUp,
  Quote,
  Star,
  ShieldCheck,
  Rocket,
  Users,
  ChevronDown,
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
import { getPageMetadata } from "@/lib/page-meta";

export function generateMetadata() {
  return getPageMetadata("/");
}

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



export default function Home() {
  return (
    <>
      <ScrollObserver />
      <HomeScrollAnimations />

      {/* 1. Hero Section with Warm Light Gradient Background */}
      <section className="home-hero-section max-w-384 mx-auto w-full bg-linear-to-b from-[#fdfaf8] via-[#faf7f3] to-[#f8f4ed] border-b border-orange-100/60 shadow-[0_12px_40px_-15px_rgba(210,92,65,0.04)] px-3 md:px-6 py-4  relative overflow-hidden">
        {/* Ambient Gradient Glows and Dotted Pattern */}
        <div
          className="pointer-events-none absolute -top-24 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-200/20 via-amber-100/15 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(#d97757 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left max-w-2xl">
            {/* Live Status Pill */}
            <div className="home-hero-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/70 text-orange-600 text-xs sm:text-[13px] font-semibold tracking-wide shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <span>Global Vision • Local Precision • Scalable Results</span>
              <ArrowRight
                className="w-3.5 h-3.5 text-orange-500"
                strokeWidth={2.5}
              />
            </div>

            {/* Primary H1 Headline */}
            <h1 className="home-hero-title text-[34px] sm:text-[46px] md:text-[52px] lg:text-[56px] xl:text-[64px] font-semibold text-slate-900 leading-[1.1] mt-5 mb-5 tracking-tight">
              Software Development &amp;{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#e85b2e] via-[#ee7439] to-[#f58d4a]">
                Performance Marketing Agency
              </span>
            </h1>

            {/* Sub-Headline */}
            <p className="home-hero-sub text-slate-600 text-[14.5px] sm:text-[15.5px] md:text-[16px] leading-relaxed mb-7 max-w-xl">
              Partner with the leading growth and engineering agency in India
              for scalable web applications, dominant SEO strategies, and
              high-ROAS paid media campaigns. From Jaipur to high-growth
              businesses across the USA, UK, and worldwide, we turn digital
              presence into predictable revenue.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap gap-3.5 sm:gap-4 items-center w-full sm:w-auto">
              <Link
                href="/contact/"
                className="home-hero-cta group inline-flex items-center justify-center gap-2.5 bg-linear-to-r from-[#e85b2e] via-[#ee7439] to-[#f58d4a] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-[15px] shadow-[0_10px_25px_-5px_rgba(232,91,46,0.45)] hover:shadow-[0_16px_32px_-5px_rgba(232,91,46,0.6)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              >
                <span>Schedule a Strategy Call</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </Link>
              <Link
                href="/services/"
                className="home-hero-cta group inline-flex items-center justify-center gap-2.5 bg-white text-slate-800 border border-slate-200/90 hover:border-slate-300 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-[15px] shadow-xs hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              >
                <span>Explore Our Services</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </Link>
            </div>

            {/* 4-Pillars Trust Features Strip */}
            <div className="mt-9 pt-7 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-4 w-full">
              <div className="home-hero-trust-item flex items-center gap-3">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-orange-100/70 text-[#e85b2e] shadow-2xs">
                  <Rocket className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <div className="text-left font-bold text-slate-900 text-xs sm:text-[13px] leading-tight">
                  <div>Scalable</div>
                  <div>Solutions</div>
                </div>
              </div>

              <div className="home-hero-trust-item flex items-center gap-3">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-orange-100/70 text-[#e85b2e] shadow-2xs">
                  <TrendingUp className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <div className="text-left font-bold text-slate-900 text-xs sm:text-[13px] leading-tight">
                  <div>High</div>
                  <div>Performance</div>
                </div>
              </div>

              <div className="home-hero-trust-item flex items-center gap-3">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-orange-100/70 text-[#e85b2e] shadow-2xs">
                  <Users className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <div className="text-left font-bold text-slate-900 text-xs sm:text-[13px] leading-tight">
                  <div>Global</div>
                  <div>Clients</div>
                </div>
              </div>

              <div className="home-hero-trust-item flex items-center gap-3">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-orange-100/70 text-[#e85b2e] shadow-2xs">
                  <ShieldCheck className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <div className="text-left font-bold text-slate-900 text-xs sm:text-[13px] leading-tight">
                  <div>Trusted</div>
                  <div>Partnership</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Component matching Reference Mockup with Floating UI Badges */}
          <div className="lg:col-span-6 xl:col-span-6 relative w-full flex items-center justify-center lg:justify-end py-6 sm:py-8 select-none">
            <div className="relative w-full max-w-[480px] sm:max-w-[520px] md:max-w-[560px] flex items-center justify-center">
              {/* 1. Ambient Concentric Warm Circular Halos behind the Girl */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] md:w-[500px] md:h-[500px] rounded-full border border-orange-200/40 bg-gradient-to-tr from-orange-200/20 via-amber-100/25 to-orange-100/10 pointer-events-none -z-10"
                aria-hidden="true"
              />
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[390px] md:h-[390px] rounded-full border border-orange-300/30 bg-gradient-to-br from-orange-100/25 to-transparent pointer-events-none -z-10"
                aria-hidden="true"
              />
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-orange-400/15 blur-2xl pointer-events-none -z-10"
                aria-hidden="true"
              />

              {/* Dotted Grid Matrix Top Left */}
              <div
                className="absolute top-6 left-6 sm:top-16 sm:left-10 w-24 h-24 opacity-25 pointer-events-none -z-10"
                style={{
                  backgroundImage:
                    "radial-gradient(#ea580c 1.5px, transparent 1.5px)",
                  backgroundSize: "14px 14px",
                }}
                aria-hidden="true"
              />

              {/* Dotted Grid Matrix Bottom Right */}
              <div
                className="absolute bottom-6 right-4 sm:bottom-8 sm:right-6 w-24 h-24 opacity-25 pointer-events-none -z-10"
                style={{
                  backgroundImage:
                    "radial-gradient(#ea580c 1.5px, transparent 1.5px)",
                  backgroundSize: "14px 14px",
                }}
                aria-hidden="true"
              />

              {/* 2. Main Hero Transparent Girl Image with Bottom-Only Shadow */}
              <div className="relative z-10 w-full flex flex-col items-center justify-center">
                <div className="home-hero-image relative w-fit flex items-center justify-center">
                  <Image
                    src="/assets/images/home/hero-imagee.png"
                    alt="Aksh Digital - Growth & Performance Marketing"
                    width={1150}
                    height={1148}
                    className="w-[300px] sm:w-[390px] md:w-[440px] lg:w-[480px] h-auto object-contain select-none relative z-10"
                    priority
                  />
                  {/* Bottom-Only Soft Ambient Contact Floor Shadow */}
                  <div
                    className="absolute -bottom-3 sm:-bottom-5 left-1/2 -translate-x-1/2 w-[85%] h-7 sm:h-10 bg-radial from-slate-900/35 via-orange-950/20 to-transparent rounded-[100%] blur-md pointer-events-none z-0"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2 w-[65%] h-4 sm:h-6 bg-radial from-orange-900/45 via-orange-900/15 to-transparent rounded-[100%] blur-xs pointer-events-none z-0"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* 3. Floating UI Card: Rating Badge (Top Left) */}
              <div className="home-hero-card-left absolute top-0 -left-2 sm:top-2 sm:-left-6 lg:-left-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 shadow-[0_14px_36px_rgba(0,0,0,0.08)] border border-slate-100/90 flex items-center gap-2.5 sm:gap-3.5 hover:scale-105 transition-all duration-300 card-smooth">
                {/* Avatar Stack */}
                <div className="flex -space-x-2">
                  <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-linear-to-tr from-amber-400 to-orange-400 text-white font-bold text-[9px] ring-2 ring-white">
                    JD
                  </span>
                  <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-linear-to-tr from-orange-500 to-red-400 text-white font-bold text-[9px] ring-2 ring-white">
                    SK
                  </span>
                  <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-linear-to-tr from-slate-700 to-slate-900 text-white font-bold text-[9px] ring-2 ring-white">
                    AM
                  </span>
                  <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#14183e] text-white font-bold text-[8px] sm:text-[9px] ring-2 ring-white">
                    5K+
                  </span>
                </div>
                {/* Rating Info */}
                <div className="text-left">
                  <div className="flex items-center gap-1 text-[11px] sm:text-[13px] font-extrabold text-[#14183e]">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>4.9 / 5 Rating</span>
                  </div>
                  <p className="text-[9.5px] sm:text-[11px] text-slate-500 font-medium">
                    From Verified Clients
                  </p>
                </div>

                {/* Curved Arrow pointing down to girl */}
                <svg
                  className="absolute -bottom-6 right-3 w-6 h-6 text-orange-500 pointer-events-none hidden sm:block"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M4 4 C 4 14, 10 18, 18 16"
                    strokeDasharray="2.5 2.5"
                  />
                  <polygon
                    points="14,20 20,16 16,11"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </div>

              {/* 4. Floating UI Card: Performance Ads Bar (Bottom Left) */}
              <div className="home-hero-card-bottom absolute bottom-6 -left-2 sm:bottom-10 sm:-left-6 lg:-left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-[0_14px_36px_rgba(0,0,0,0.08)] border border-slate-100/90 flex flex-col min-w-[140px] sm:min-w-[170px] hover:scale-105 transition-all duration-300 card-smooth">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-amber-500 mb-2">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span className="text-slate-800 font-extrabold">
                    Performance Ads
                  </span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  {/* Ascending mini bars */}
                  <div className="flex items-end gap-1 h-6 sm:h-7">
                    <span className="w-1.5 bg-orange-500 rounded-t-xs h-2.5 animate-pulse" />
                    <span
                      className="w-1.5 bg-orange-500 rounded-t-xs h-4.5 animate-pulse"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-1.5 bg-orange-500 rounded-t-xs h-6 animate-pulse"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-base sm:text-xl font-extrabold text-[#14183e] leading-none">
                      3.2x
                    </div>
                    <div className="text-[9.5px] sm:text-[10.5px] text-slate-500 font-semibold mt-0.5">
                      Higher ROI
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Floating UI Card: Growth Chart (Top Right) */}
              <div className="home-hero-card-bottom absolute top-2 -right-2 sm:top-6 sm:-right-6 lg:-right-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-[0_16px_40px_rgba(0,0,0,0.09)] border border-slate-100/90 flex flex-col min-w-[155px] sm:min-w-[190px] md:min-w-[210px] hover:scale-105 transition-all duration-300 card-smooth">
                {/* Header */}
                <div className="flex items-center justify-between mb-2.5 text-[11px]">
                  <span className="font-extrabold text-slate-900 text-xs sm:text-[13px]">
                    Growth
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium flex items-center gap-0.5 bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded-md">
                    Last 6 Months
                    <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
                  </span>
                </div>
                {/* Chart Graphic Area */}
                <div className="relative h-10 sm:h-12 w-full mb-2 flex items-end justify-between px-1">
                  {/* SVG Upward Curved Arrow Line */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 160 50"
                    fill="none"
                  >
                    <path
                      d="M 6 42 C 45 38, 95 24, 146 8"
                      stroke="#f97316"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <polygon points="144,3 154,8 145,15" fill="#f97316" />
                  </svg>
                  <div className="w-2 sm:w-2.5 bg-gradient-to-t from-orange-500/80 to-amber-300 rounded-t-xs h-2.5 opacity-60" />
                  <div className="w-2 sm:w-2.5 bg-gradient-to-t from-orange-500/80 to-amber-300 rounded-t-xs h-4.5 opacity-70" />
                  <div className="w-2 sm:w-2.5 bg-gradient-to-t from-orange-500/80 to-amber-300 rounded-t-xs h-6 opacity-80" />
                  <div className="w-2 sm:w-2.5 bg-gradient-to-t from-orange-500/80 to-amber-300 rounded-t-xs h-8 opacity-90" />
                  <div className="w-2 sm:w-2.5 bg-gradient-to-t from-orange-500 to-amber-400 rounded-t-xs h-9.5" />
                  <div className="w-2 sm:w-2.5 bg-gradient-to-t from-orange-500 to-amber-400 rounded-t-xs h-11" />
                </div>
                {/* Metric */}
                <div>
                  <div className="text-base sm:text-lg font-extrabold text-emerald-600 leading-none">
                    +230%
                  </div>
                  <div className="text-[9.5px] sm:text-[10.5px] text-slate-500 font-semibold mt-0.5">
                    Avg. Revenue Growth
                  </div>
                </div>

                {/* Top curved connecting arrow */}
                <svg
                  className="absolute -top-7 -left-5 w-12 h-9 text-orange-500 pointer-events-none hidden sm:block"
                  viewBox="0 0 45 30"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M 6 26 Q 24 4, 38 8"
                    strokeDasharray="3 3"
                    strokeWidth="1.8"
                  />
                  <polygon
                    points="38,3 42,12 34,9"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </div>

              {/* 6. Floating UI Card: Web & Mobile Development Badge (Bottom Right) */}
              <div className="home-hero-card-bottom absolute bottom-8 -right-2 sm:bottom-14 sm:-right-6 lg:-right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-[0_14px_36px_rgba(0,0,0,0.08)] border border-slate-100/90 flex items-center gap-2.5 sm:gap-3 hover:scale-105 transition-all duration-300 card-smooth">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-orange-100/80 text-orange-600 font-mono font-bold text-xs sm:text-sm shadow-2xs">
                  {"</>"}
                </div>
                <div className="text-left font-extrabold text-slate-900 text-[11px] sm:text-xs leading-tight">
                  <div>Web &amp; Mobile</div>
                  <div>Development</div>
                </div>

                {/* Arrow pointing to card */}
                <svg
                  className="absolute -top-6 left-2 w-7 h-7 text-orange-500 pointer-events-none hidden sm:block"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M 20 2 C 20 12, 10 16, 5 22"
                    strokeDasharray="2.5 2.5"
                    strokeWidth="1.8"
                  />
                  <polygon
                    points="1,18 7,25 9,17"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Strip with Soft Warm Gradient */}
      <section className="home-trust-strip bg-[linear-gradient(90deg,#f5f2ed_50%,#FFCC8041_100%)] border-b border-orange-100/70 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="home-trust-badge flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-linear-to-br from-white to-orange-50/40 rounded-xl px-3.5 py-2.5 border border-orange-100/80 shadow-2xs hover:border-primary/40 hover:shadow-xs transition-all duration-300"
            >
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Global Scale & Social Proof Strip */}
      {/* <section className="w-full bg-slate-950 py-7 px-4 border-y border-slate-800 relative overflow-hidden">
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
      </section> */}

      {/* 3. About Aksh Digital Section */}
      <section className="home-about-section relative w-full overflow-hidden bg-linear-to-b from-[#f5f2ed] via-[#faf8f5] to-[#f4f1ea] px-3 sm:px-6 md:px-8 pt-6 sm:pt-12 md:pt-16 border-b border-orange-100/60">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-violet-200/35 blur-3xl" />
          <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center  lg:grid-cols-2 gap-6 lg:gap-12 ">
            {/* Left: image + floating elements */}
            <div className="home-about-image relative mx-auto w-full max-w-lg lg:max-w-none">
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
            <div className="home-about-text relative font-sans">
              <Target
                className="pointer-events-none absolute -right-2 top-0 z-0 h-24 w-24 text-slate-200/70 sm:h-32 sm:w-32"
                strokeWidth={1}
                aria-hidden
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-primary sm:text-[15px]">
                    About Aksh Digital
                  </span>
                  <span className="flex gap-1" aria-hidden>
                    <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                    <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                    <span className="h-0.5 w-2 rounded-full bg-primary/30" />
                  </span>
                </div>

                <h2 className="mt-4 text-[28px] font-bold leading-tight text-[#1a2744] sm:text-[34px] md:text-[38px] lg:text-[42px]">
                  Empowering Businesses with Software Innovation &amp;
                  Data-Driven Growth
                </h2>

                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
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
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          <div className="">
            {/* Key Performance Highlights with Animated Counters */}
            <ul className="home-about-stats-grid mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              <li className="home-about-stat-card flex gap-4 bg-linear-to-br from-white via-white to-orange-50/30 p-5 rounded-2xl border border-orange-200/60 shadow-xs hover:shadow-xl hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                  <Megaphone className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <div className="text-xl font-semibold leading-tight text-slate-900">
                    <AnimatedCounter target={50} suffix="+" /> Successful
                    Campaigns
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Data-backed SEO, Meta, and Google Ads strategies built to
                    maximize ROAS.
                  </p>
                </div>
              </li>
              <li className="home-about-stat-card flex gap-4 bg-linear-to-br from-white via-white to-orange-50/30 p-5 rounded-2xl border border-orange-200/60 shadow-xs hover:shadow-xl hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                  <TrendingUp className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <div className="text-xl font-semibold leading-tight text-slate-900">
                    <AnimatedCounter target={200} suffix="%" /> Average Traffic
                    Growth
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    High-intent organic and paid acquisition strategies for
                    scalability.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="home-about-quote flex delay-300">
            <div>
              {/* Micro-CTA Quote */}
              <p className="mt-8 flex gap-2 text-[15px] font-bold italic text-[#1e3a6e] sm:text-base">
                <Quote
                  className="mt-0.5 h-6 w-6 shrink-0 fill-[#93c5fd] text-[#93c5fd]"
                  aria-hidden
                />
                <span>
                  Let’s discuss your vision and build a custom digital growth
                  roadmap for your brand.
                </span>
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-6">
                <Link
                  href="/about/"
                  className="inline-flex items-center justify-center rounded-full bg-[#3b6fd4] px-7 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:bg-[#2f5eb8] hover:shadow-md"
                >
                  MORE ABOUT US
                </Link>
              </div>
            </div>
            <Image
              src="/assets/images/home/Futuristic-3D-Analytics-Workspace.webp"
              alt=""
              width={100}
              height={100}
              className="h-auto w-1/2 hidden sm:block object-contain drop-shadow-lg "
              aria-hidden
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* 4. Core Services Section with Interactive Tabs & Light Gradient */}
      <section className="home-services-section w-full bg-linear-to-b from-[#f4f1ea] via-[#faf8f5] to-white px-3 sm:px-6 md:px-8 py-12  border-b border-orange-100/50">
        <div className="mx-auto max-w-6xl">
          <div className="home-services-header mb-10 sm:mb-12">
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
          <div className="home-services-tabs">
            <InteractiveServiceTabs />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services/"
              className="home-services-cta inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-sm font-bold tracking-wide text-white hover:bg-primary transition-colors duration-300 shadow-md"
            >
              View All Services &amp; Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Global & Local Delivery Framework */}
      <section className="home-hubs-section relative w-full bg-linear-to-b from-[#f6f4ee] via-[#faf8f5] to-[#f4f1eb]  px-4 sm:px-6 md:px-8 py-12  overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Section Header: Centered Eyebrow & High-Contrast Heading */}
          <div className="home-hubs-header relative mb-12  text-center max-w-3xl mx-auto">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center justify-center gap-3 mb-3 sm:mb-4">
              <span className="h-0.5 w-6 rounded-full bg-primary" />
              <span className="text-sm sm:text-[15px] font-semibold text-primary tracking-wide">
                Global Reach, Local Touch
              </span>
              <span className="h-0.5 w-6 rounded-full bg-primary" />
            </div>

            {/* Heading */}
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] leading-[1.25] text-[#14183e] tracking-tight">
              <span className="font-medium text-slate-800">Built for </span>
              <span className="font-semibold text-[#0f172a]">
                Local Domination
              </span>
              <span className="font-medium text-slate-800">,</span>
              <br />
              <span className="font-medium text-slate-800">
                Engineered for{" "}
              </span>
              <span className="font-semibold text-[#0f172a]">Global Scale</span>
            </h2>
          </div>

          {/* Two Distinct Comparison Cards */}
          <div className="home-hubs-cards grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: For International Clients */}
            <div className="home-hubs-card-global group relative rounded-3xl border-2 border-[#5dade2] bg-white p-7 sm:p-9 lg:p-11 shadow-[0_12px_40px_-12px_rgba(59,130,246,0.12)] hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.22)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between">
              {/* World Map with Dotted Network Connections in Top-Right */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-36 sm:w-48 h-24 sm:h-28 pointer-events-none select-none opacity-80">
                <Image
                  src="/assets/images/home/Global Network.png"
                  alt="Global Network"
                  width={450}
                  height={320}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Bottom-Right Blue Wave Swoosh */}
              <div className="absolute top-0 right-0 pointer-events-none select-none">
                <svg
                  id="visual"
                  viewBox="0 0 900 600"
                  width="900"
                  height="600"
                  version="1.1"
                >
                  <path
                    d="M0 245L37.5 262.8C75 280.7 150 316.3 225 320.5C300 324.7 375 297.3 450 314.5C525 331.7 600 393.3 675 414.3C750 435.3 825 415.7 862.5 405.8L900 396L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z"
                    fill="#dbeafe"
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                  />
                </svg>
              </div>

              <div>
                {/* Icon Badge */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200/80 text-blue-600 mb-6 shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <Globe className="h-7 w-7" strokeWidth={2.2} />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
                  For International Clients <br className="hidden sm:inline" />
                  <span>(USA, UK, Global)</span>
                </h3>

                {/* Description */}
                <p className="mt-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-lg">
                  Access enterprise-level software engineering and performance
                  marketing talent at cost-effective rates. Benefit from agile
                  workflows, strict data security, and overlap-hour
                  communication.
                </p>
              </div>

              {/* Feature Checklist */}
              <ul className="mt-8 space-y-3.5 relative z-10">
                <li className="flex items-center gap-3 text-xs sm:text-[14px] font-semibold text-slate-800">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1d4ed8] text-white shadow-xs">
                    <Check className="h-3 w-3" strokeWidth={3.2} />
                  </span>
                  <span>Flexible overlap-hour communication schedules</span>
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-[14px] font-semibold text-slate-800">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1d4ed8] text-white shadow-xs">
                    <Check className="h-3 w-3" strokeWidth={3.2} />
                  </span>
                  <span>Strict NDA &amp; 100% IP Code Ownership</span>
                </li>
              </ul>
            </div>

            {/* Card 2: For Pan-India & Local Businesses */}
            <div className="home-hubs-card-local group relative rounded-3xl border-2 border-[#f97316] bg-white p-7 sm:p-9 lg:p-11 shadow-[0_12px_40px_-12px_rgba(249,115,22,0.12)] hover:shadow-[0_20px_50px_-12px_rgba(249,115,22,0.22)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between">
              {/* Miniature Hawa Mahal in Top-Right Corner */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-36 sm:w-60 pointer-events-none select-none opacity-90 overflow-hidden">
                <Image
                  src="/assets/images/home/Hawa Mahal.png"
                  alt="Hawa Mahal Jaipur"
                  width={220}
                  height={150}
                  className="w-full h-full object-contain object-top-right drop-shadow-xs"
                />
              </div>

              {/* Bottom-Right Orange Wave Swoosh */}
              <div className="absolute top-0 right-0  pointer-events-none select-none">
                <svg
                  id="visual"
                  viewBox="0 0 900 600"
                  width="900"
                  height="600"
                  version="1.1"
                >
                  <path
                    d="M0 250L37.5 271.2C75 292.3 150 334.7 225 366.7C300 398.7 375 420.3 450 428C525 435.7 600 429.3 675 393C750 356.7 825 290.3 862.5 257.2L900 224L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z"
                    fill="#ffedd5"
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                  />
                </svg>
              </div>

              <div>
                {/* Icon Badge */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 border border-orange-200/80 text-orange-600 mb-6 shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <Building2 className="h-7 w-7" strokeWidth={2.2} />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
                  For Pan-India &amp; Local <br className="hidden sm:inline" />
                  <span>Businesses (Jaipur HQ)</span>
                </h3>

                {/* Description */}
                <p className="mt-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-lg">
                  Leverage hyper-localized market insights, targeted
                  vernacular/English omnichannel funnels, and on-the-ground
                  local SEO strategies across Jaipur, Delhi NCR, Mumbai,
                  Bangalore, Pune, and Indore.
                </p>
              </div>

              {/* Feature Checklist */}
              <ul className="mt-8 space-y-3.5 relative z-10">
                <li className="flex items-center gap-3 text-xs sm:text-[14px] font-semibold text-slate-800">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-white shadow-xs">
                    <Check className="h-3 w-3" strokeWidth={3.2} />
                  </span>
                  <span>Google Business Profile &amp; Map Pack domination</span>
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-[14px] font-semibold text-slate-800">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-white shadow-xs">
                    <Check className="h-3 w-3" strokeWidth={3.2} />
                  </span>
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
      <section className="home-process-section w-full py-12 bg-linear-to-b from-[#f6f4ee] via-[#faf8f5] to-[#f4f1eb] px-3 sm:px-6 md:px-8 border-b border-orange-100/50">
        <div className="mx-auto max-w-7xl">
          {/* Follow 4 Easy Work Steps - Interactive Process Timeline */}
          <div className="home-process-header text-center">
            <div className="flex items-center justify-center gap-3">
              <span
                className="h-px w-8 bg-slate-200 sm:w-12"
                aria-hidden="true"
              />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
                Our Proven Process
              </span>
              <span
                className="h-px w-8 bg-slate-200 sm:w-12"
                aria-hidden="true"
              />
            </div>
            <h2 className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 text-[26px] font-semibold uppercase leading-tight tracking-tight text-slate-900 sm:text-[32px] md:text-[36px]">
              Follow 4 Easy Work Steps
              <span
                className="inline-block h-2 w-2 rounded-full bg-primary"
                aria-hidden="true"
              />
            </h2>
            <p className="mt-3 text-slate-600 text-sm max-w-xl mx-auto">
              Click on each step below to inspect timeline, deliverables, and
              agile milestones.
            </p>
          </div>

          {/* Interactive Step-by-Step Component */}
          <div className="home-process-steps">
            <InteractiveProcessSteps />
          </div>
        </div>
      </section>

      {/* Extra Section 3: Industry / Vertical Expertise (Honeycomb Hexagons) */}
      <section className="home-hexagons-section w-full bg-linear-to-b from-[#fbf9f5] via-[#faf7f2] to-[#f6f2ea] px-3 sm:px-6 md:px-8 py-12 border-t border-slate-200/60 relative overflow-hidden">
        {/* Soft Ambient Warm Glow */}
        <div
          className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-amber-200/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="home-hexagons-header text-center max-w-3xl mx-auto">
            {/* Centered Eyebrow */}
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <span className="text-sm font-semibold text-primary sm:text-[15px] tracking-wide">
                Niche Mastery
              </span>
              <span
                className="flex items-center gap-1.5 ml-1"
                aria-hidden="true"
              >
                <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                <span className="h-0.5 w-3.5 rounded-full bg-primary/50" />
                <span className="h-0.5 w-2 rounded-full bg-primary/30" />
              </span>
            </div>

            {/* Centered All-Caps Heading */}
            <h2 className="text-[26px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-semibold uppercase leading-tight text-[#14183e] tracking-tight">
              Tailored Growth Strategies for Diverse Industries
            </h2>

            {/* Subtitle */}
            <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              From high-velocity e-commerce and multi-location healthcare
              practices to specialized B2B SaaS, we engineer industry-specific
              playbooks tailored to your buyer journeys.
            </p>
          </div>

          {/* Hexagonal Honeycomb Cluster */}
          <div className="home-hexagons-cluster">
            <IndustryHexagons />
          </div>
        </div>
      </section>

      {/* Dual Technologies & Growth Stack Marquee */}
      <div className="home-tech-marquee">
        <DualTechMarquee
          devTechnologies={devTechnologies}
          growthTools={growthTools}
        />
      </div>

      {/* 7. Client Results & Testimonials */}
      <HomeTestimonials />

      {/* Latest Work / Interactive Portfolio */}
      <section className="home-portfolio-section relative w-full bg-linear-to-b from-[#f8f6f2] via-[#faf8f5] to-[#f4f0e8] px-3 sm:px-6 md:px-8 py-12 border-t border-slate-200/60">
        <div className="home-portfolio-header relative z-10 mx-auto max-w-7xl text-center">
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
            Our portfolio of scalable web applications, enterprise digital
            platforms, and high-conversion marketing funnels.
          </p>
        </div>

        <div className="home-portfolio-body">
          <InteractivePortfolio />
        </div>
      </section>

      {/* Extra Section 7: Why Businesses Choose Aksh Digital (SEO Trust Narrative) */}
      <section className="home-why-section w-full bg-linear-to-b from-[#f4f1ea] via-[#faf8f5] to-[#f1ede5] px-3 sm:px-6 md:px-8 py-12 border-t border-slate-200/60">
        <div className="mx-auto max-w-6xl">
          <div className="home-why-header mb-14 text-center ">
            <div className="flex items-center gap-2 justify-center">
              <span className="flex gap-1" aria-hidden>
                <span className="h-0.5 w-2 rounded-full bg-primary/30" />
                <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                <span className="h-0.5 w-6 rounded-full bg-primary/70" />
              </span>
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
              Why Businesses Choose Aksh Digital
              <span className="text-primary block">
                India&apos;s Trusted Growth Partner
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              We engineer scalable software architectures, organic search
              authority, and high-conversion funnels designed to deliver
              lasting, compounding business value.
            </p>
          </div>

          <div className="home-why-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {whyChooseUsPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="home-why-card group relative rounded-3xl border border-white/80 bg-linear-to-br from-white/85 via-white/70 to-white/50 backdrop-blur-md p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(210,92,65,0.18)] hover:border-primary/40 hover:bg-white/90 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Glass Top Highlight */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-linear-to-r from-transparent via-white to-transparent pointer-events-none" />

                {/* Big Watermark Step Number */}
                <span
                  className="absolute -bottom-12 right-3 font-sans font-extrabold italic text-[10rem] text-slate-900/[0.07] group-hover:text-primary/20 tracking-tighter select-none pointer-events-none transition-all duration-500 group-hover:scale-105 "
                  aria-hidden="true"
                >
                  {`0${idx + 1}`}
                </span>

                <div className="relative z-10">
                  {/* Accent Pill Bar */}
                  <div className="h-1 w-8 rounded-full bg-gradient-to-r from-primary to-secondary mb-5 group-hover:w-14 transition-all duration-300" />

                  {/* Title */}
                  <h3 className="font-bold text-slate-900 text-lg sm:text-[19px] mb-3 group-hover:text-primary transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions (FAQ) */}
      <HomeFaq />

      {/* 9. Final Call to Action (CTA Banner) */}
      <section className="home-cta-section w-full bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-18 sm:py-24 px-3 sm:px-6 md:px-8 relative overflow-hidden border-t border-slate-800">
        {/* Ambient Animated Blobs */}
        <div
          className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-mesh-1"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-secondary/15 blur-3xl animate-mesh-2"
          aria-hidden="true"
        />

        <div className="home-cta-content mx-auto max-w-5xl text-center relative z-10">
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
