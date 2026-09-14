import Image from "next/image";
import Link from "next/link";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeFaq from "@/components/HomeFaq";
import ScrollObserver from "@/components/ScrollObserver";
<<<<<<< HEAD
=======
import FreeAuditForm from "@/components/FreeAuditForm";
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
import {
  ArrowRight,
  Lightbulb,
  Target,
  Megaphone,
  TrendingUp,
  Quote,
<<<<<<< HEAD
  DollarSign,
  Star,
  ShieldCheck,
=======
  Star,
  ShieldCheck,
  DollarSign,
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
  MessageSquare,
  ThumbsUp,
  GitBranch,
  HandHelping,
  Flag,
  Folder,
  User,
  Calendar,
<<<<<<< HEAD
=======
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
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

<<<<<<< HEAD

export const metadata = {
  title: "Digital Marketing Agency in Jaipur | SEO & Ads Company Aksh Digital",
  description: "Aksh Digital is a premium digital marketing agency in Jaipur offering SEO, Google Ads, Meta Ads, Local SEO, and website development services across India.",
}

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
  { src: "/assets/images/home/PROJECT-01.webp", alt: "Creative team at work", className: "h-36 w-28 sm:h-48 sm:w-36 shrink-0 relative translate-y-[60px]" },
  { src: "/assets/images/home/PROJECT-02.webp", alt: "Design review session", className: "h-44 w-32 sm:h-52 sm:w-40 shrink-0 relative -translate-y-6" },
  {
    src: "/assets/images/home/PROJECT-03.webp",
    alt: "Project showcase",
    className: "h-44 w-32 sm:h-52 sm:w-40 shrink-0 relative translate-y-12",
  },
  { src: "/assets/images/home/PROJECT-06.webp", alt: "Studio brainstorming", className: "h-44 w-32 sm:h-52 sm:w-40 shrink-0  relative " },
  { src: "/assets/images/home/PROJECT-04.webp", alt: "Collaboration workspace", className: "h-44 w-32 sm:h-52 sm:w-40 shrink-0  relative translate-y-30" },
  { src: "/assets/images/home/PROJECT-05.webp", alt: "Studio brainstorming", className: "h-36 w-28 sm:h-54 sm:w-36 shrink-0 relative translate-y-0" },
];

const devTechnologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "GraphQL",
=======
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
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
];

const workProcessSteps = [
  {
    step: "PROCESS-1",
    title: "Project Research",
    description: "This includes the use of robots & computer solution",
    icon: GitBranch,
  },
  {
    step: "PROCESS-2",
    title: "Start Working",
    description: "This includes the use of robots & computer solution",
    icon: ShieldCheck,
  },
  {
    step: "PROCESS-3",
    title: "Quality Products",
    description: "This includes the use of robots & computer solution",
    icon: HandHelping,
  },
  {
    step: "PROCESS-4",
    title: "Quality Finished",
    description: "This includes the use of robots & computer solution",
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
<<<<<<< HEAD
  {
    title: "What Sets Us Apart",
    description:
      "fostering a culture of innovation and continuous growth, we aim to shape the future of branding and to reach their full potential.",
    icon: ShieldCheck,
  },
];

const trustedPartners = [
  "Verifone",
  "SEPA",
  "Paysafe",
  "Stripe",
  "Elo",
  "Discover",
  "Payoneer",
  "af",
=======
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
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
];

export default function Home() {
  return (
    <>
      <ScrollObserver />
<<<<<<< HEAD
      <section className="max-w-384 mx-auto w-full bg-white shadow-[0_12px_40px_-15px_rgba(0,0,0,0.03)] px-3 sm:px-6 md:px-8 py-6 sm:py-12 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">

          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            {/* Badge Pill */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-primary text-sm  font-semibold tracking-wide hover:bg-primary/10 transition-colors duration-300 animate-on-load-fade-up animation-delay-100">
              <span>Crafting Your Ideas!</span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
            </div>

            {/* Heading */}
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[62px] font-semibold text-slate-900 leading-[1.15] mt-6 mb-6 tracking-tight animate-on-load-fade-up animation-delay-200">
              Software & Digital <br className="hidden sm:inline" />
              Marketing Company
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-8 max-w-xl animate-on-load-fade-up animation-delay-300">
              There are many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable. If you are
              going to use a passage of Lorem Ipsum,
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto animate-on-load-fade-up animation-delay-400">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 bg-linear-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-[15px] hover:shadow-[0_8px_25px_-5px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto shadow-lg shadow-primary/10"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
              <Link
                href="/services"
                className="group flex items-center justify-center gap-2 bg-transparent text-slate-700 border border-slate-300 hover:border-slate-400 px-8 py-4 rounded-full font-bold text-[15px] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
=======

      {/* 1. Hero Section */}
      <section className="max-w-384 mx-auto w-full bg-white shadow-[0_12px_40px_-15px_rgba(0,0,0,0.03)] px-3 sm:px-6 md:px-8 py-6 sm:py-12 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            {/* Pre-Title Tag */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-primary text-sm font-semibold tracking-wide hover:bg-primary/10 transition-colors duration-300 animate-on-load-fade-up animation-delay-100">
              <span>Global Vision • Local Precision • Scalable Results</span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
            </div>

            {/* Primary H1 Headline */}
            <h1 className="text-[32px] sm:text-[46px] md:text-[54px] lg:text-[60px] font-semibold text-slate-900 leading-[1.15] mt-6 mb-6 tracking-tight animate-on-load-fade-up animation-delay-200">
              Full-Service Software Development & Performance Marketing Agency
            </h1>

            {/* Sub-Headline */}
            <p className="text-slate-600 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-8 max-w-xl animate-on-load-fade-up animation-delay-300">
              Partner with the best digital marketing agency in India for
              scalable web applications, dominant SEO strategies, and high-ROAS
              paid media campaigns. From our headquarters in Jaipur to
              fast-growing businesses across the USA, UK, and Pan-India, we turn
              digital presence into predictable revenue.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto animate-on-load-fade-up animation-delay-400">
              <Link
                href="/contact/"
                className="group flex items-center justify-center gap-2 bg-linear-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-[15px] hover:shadow-[0_8px_25px_-5px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto shadow-lg shadow-primary/10"
              >
                <span>Schedule a Strategy Call</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </Link>
              <Link
                href="/services/"
                className="group flex items-center justify-center gap-2 bg-transparent text-slate-700 border border-slate-300 hover:border-slate-400 px-8 py-4 rounded-full font-bold text-[15px] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              >
                <span>Explore Our Services</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Component */}
          <div className="relative w-full overflow-hidden flex items-end justify-center animate-on-load-scale animation-delay-200">
<<<<<<< HEAD
            {/* Peach Background Circle, clipped at bottom */}
            <div className="absolute size-100 rounded-full bg-primary/20 z-0 translate-y-[8%]" />

            {/* Concentric Decorative Rings, clipped at bottom */}
            <div className="absolute size-80 rounded-full border border-primary/10 bg-secondary/30 z-0 translate-y-[8%] pointer-events-none" />

            {/* Glowing gradient backdrops for rich aesthetics */}
            {/* <div className="absolute w-60 h-60 rounded-full bg-secondary/10 blur-3xl -top-10 -right-10 z-0 pointer-events-none" />
          <div className="absolute w-60 h-60 rounded-full bg-primary/10 blur-3xl -bottom-10 -left-10 z-0 pointer-events-none" /> */}

            {/* Main Visual Image */}
            <div className="relative z-10 w-[220px] sm:w-[300px] md:w-[340px] lg:w-[380px] h-auto flex items-end">
              <Image
                src="/assets/images/home/social-media-trends.webp"
                alt="Software & Digital Marketing Company Representation"
=======
            <div className="absolute size-100 rounded-full bg-primary/20 z-0 translate-y-[8%]" />
            <div className="absolute size-80 rounded-full border border-primary/10 bg-secondary/30 z-0 translate-y-[8%] pointer-events-none" />

            <div className="relative z-10 w-[220px] sm:w-[300px] md:w-[340px] lg:w-[380px] h-auto flex items-end">
              <Image
                src="/assets/images/home/social-media-trends.webp"
                alt="Software & Digital Marketing Agency representation"
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
                width={450}
                height={450}
                className="w-full h-auto object-contain select-none drop-shadow-[0_15px_35px_rgba(210,92,65,0.06)] hover:scale-[1.02] transition-transform duration-500 ease-out"
                priority
              />
            </div>
          </div>
<<<<<<< HEAD

        </div>
      </section>

      {/* About Our Company */}
      <section className="relative w-full overflow-hidden bg-[#faf9f7] px-3 sm:px-6 md:px-8 pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
        >
=======
        </div>
      </section>

      <section className="bg-white  ">
        {/* Trust Badges Strip */}
        <div className="border-t border-slate-100 px-8 pt-6 pb-10 w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700"
            >
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Global Scale & Social Proof Strip */}
      <section className="w-full bg-slate-900 py-8 px-4 border-y border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
            Trusted by Growing Businesses Across India & Worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {platformBadges.map((badge) => (
              <span
                key={badge}
                className="text-slate-300 font-bold text-sm sm:text-base tracking-wide flex items-center gap-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Aksh Digital Section */}
      <section className="relative w-full overflow-hidden bg-[#faf9f7] px-3 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-violet-200/35 blur-3xl" />
          <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
<<<<<<< HEAD
          {/* Trusted Partners */}
          <div className="mb-10 sm:mb-12 text-center reveal reveal-scale">
            <p className="text-sm font-medium text-slate-500 tracking-wide">
              Trusted Partners
            </p>
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8 md:gap-x-10">
              {trustedPartners.map((name) => (
                <li
                  key={name}
                  className="text-[13px] sm:text-sm font-semibold text-slate-400 grayscale select-none"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {/* Left: image + floating cards */}
=======
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {/* Left: image + floating elements */}
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none reveal reveal-left">
              <Lightbulb
                className="pointer-events-none absolute -left-2 top-8 z-0 h-28 w-28 text-slate-200/80 sm:h-36 sm:w-36"
                strokeWidth={1}
                aria-hidden
              />
<<<<<<< HEAD

              <div className="relative z-10 overflow-hidden rounded-2xl">
                <Image
                  src="/assets/images/home/trusted-partner.webp"
                  alt="Team collaborating on digital marketing"
=======
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/assets/images/home/trusted-partner.webp"
                  alt="Aksh Digital team collaborating on software and marketing growth"
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
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
<<<<<<< HEAD
                    About Our Company
=======
                    About Aksh Digital
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
                  </span>
                  <span className="flex gap-1" aria-hidden>
                    <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                    <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                    <span className="h-0.5 w-2 rounded-full bg-primary/30" />
                  </span>
                </div>

                <h2 className="mt-4 text-[28px] font-bold leading-tight text-[#1a2744] sm:text-[34px] md:text-[38px] lg:text-[42px] reveal reveal-right delay-100">
<<<<<<< HEAD
                  Empower Your Business With Innovation
                </h2>

                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base reveal reveal-right delay-200">
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected
                  humour, or randomised words which don&apos;t look even slightly
                  believable.
                </p>

                <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 reveal reveal-right delay-300">
                  <li className="flex gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3b6fd4] text-white">
                      <Megaphone className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <p className="text-[15px] font-bold leading-snug text-slate-900">
                      Successful marketing campaigns
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3b6fd4] text-white">
                      <TrendingUp className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <p className="text-[15px] font-bold leading-snug text-slate-900">
                      Average increase in website traffic
                    </p>
                  </li>
                </ul>

=======
                  Empowering Businesses with Software Innovation & Data-Driven
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

                {/* Key Performance Highlights */}
                <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 reveal reveal-right delay-300">
                  <li className="flex gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <Megaphone className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-[15px] font-bold leading-snug text-slate-900">
                        450+ Successful Campaigns
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Data-backed SEO, Meta, and Google Ads strategies built
                        to maximize ROAS.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <TrendingUp className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-[15px] font-bold leading-snug text-slate-900">
                        300% Average Traffic Growth
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        High-intent organic and paid acquisition strategies for
                        scalability.
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Micro-CTA Quote */}
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
                <p className="mt-8 flex gap-2 text-[15px] font-bold italic text-[#1e3a6e] sm:text-base reveal reveal-right delay-400">
                  <Quote
                    className="mt-0.5 h-6 w-6 shrink-0 fill-[#93c5fd] text-[#93c5fd]"
                    aria-hidden
                  />
                  <span>
<<<<<<< HEAD
                    let&apos;s get in touch and have discussion the solution we
                    offer
=======
                    Let’s discuss your vision and build a custom digital growth
                    roadmap for your brand.
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
                  </span>
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-6 reveal reveal-right delay-500">
                  <Link
<<<<<<< HEAD
                    href="/about"
                    className="inline-flex items-center justify-center rounded-lg bg-[#3b6fd4] px-7 py-3.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#2f5eb8]"
=======
                    href="/about/"
                    className="inline-flex items-center justify-center rounded-full bg-[#3b6fd4] px-7 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:bg-[#2f5eb8] hover:shadow-md"
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
                  >
                    MORE ABOUT US
                  </Link>

                  <div className="flex items-center gap-3">
<<<<<<< HEAD
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-slate-200 to-slate-300 text-sm font-bold text-slate-700 ring-2 ring-white">
=======
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-primary to-secondary text-sm font-bold text-white ring-2 ring-white shadow-md">
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
                      RR
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-slate-900">
                        Ronald Richards
                      </p>
<<<<<<< HEAD
                      <p className="text-sm text-slate-500">Co, Founder</p>
=======
                      <p className="text-sm text-slate-500">
                        Co-Founder, Aksh Digital
                      </p>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom-right 3D character */}
=======
        {/* Bottom-right 3D character graphic */}
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
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

<<<<<<< HEAD
      {/* Featured Services */}
      <section className="w-full bg-white px-3 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 items-start">
          {/* Left */}
          <div className="max-w-xl reveal reveal-left">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-primary tracking-wide">
                Our featured services
              </span>
              <span className="flex gap-1" aria-hidden>
                <span className="h-0.5 w-7 rounded-full bg-primary/60" />
                <span className="h-0.5 w-4 rounded-full bg-primary/35" />
              </span>
            </div>

            <h2 className="mt-4 text-[34px] sm:text-[40px] md:text-[46px] font-semibold leading-tight text-[#14183e]">
              We Provide Exclusive
              <br className="hidden sm:block" />
              Service For You
            </h2>

            <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-slate-600 max-w-md">
              From SEO and paid advertising to web development and mobile apps — we deliver complete digital solutions that grow your business.
            </p>

            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-primary/40 px-7 py-3 text-sm font-bold tracking-wide text-primary hover:bg-primary/5 transition-colors"
              >
                ALL SERVICES
              </Link>
            </div>
          </div>

          {/* Right — real service links */}
          <div className="w-full reveal reveal-right delay-200">
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
              <nav className="divide-y divide-slate-200">
                {[
                  { label: "SEO Strategies", href: "/services/seo-strategies" },
                  { label: "Digital Marketing", href: "/services/digital-marketing" },
                  { label: "Social Media Marketing", href: "/services/social-media" },
                  { label: "Web Development", href: "/services/web-development" },
                  { label: "App Development", href: "/services/app-development" },
                  { label: "Performance Marketing", href: "/services/performance-marketing" },
                ].map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="group flex items-center justify-between px-6 py-5 hover:bg-primary transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-700 group-hover:text-white transition-colors">
                      {label}
                    </span>
                    <span className="text-slate-300 group-hover:text-white transition-colors">
                      <ArrowRight className="h-4 w-4 -rotate-45" strokeWidth={2.5} />
                    </span>
                  </Link>
                ))}
              </nav>
=======
      {/* 4. Core Services Section */}
      <section className="w-full bg-white px-3 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 sm:mb-16">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServiceCards.map(
              ({ title, summary, keyFocus, href, icon: Icon }) => (
                <div
                  key={title}
                  className="group relative rounded-2xl border border-slate-200/80 bg-white p-7 sm:p-9 shadow-xs hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon className="h-7 w-7" strokeWidth={2} />
                      </span>
                      <Link
                        href={href}
                        className="text-slate-400 group-hover:text-primary transition-colors"
                        aria-label={title}
                      >
                        <ArrowRight
                          className="h-5 w-5 -rotate-45"
                          strokeWidth={2.5}
                        />
                      </Link>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {title}
                    </h3>

                    <p className="mt-3 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      {summary}
                    </p>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Key Focus:
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        {keyFocus}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4">
                    <Link
                      href={href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary group-hover:underline"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services/"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-sm font-bold tracking-wide text-white hover:bg-primary transition-colors duration-300 shadow-md"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Global & Local Delivery Framework */}
      <section className="w-full bg-[#f8fafc] px-3 sm:px-6 md:px-8 py-14 sm:py-20 border-y border-slate-200/60">
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
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mb-6">
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
                  <span>Strict NDA & 100% IP Code Ownership</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 mb-6">
                <Building2 className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                For Pan-India & Local Businesses (Jaipur HQ)
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
                  <span>Google Business Profile & Map Pack domination</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>
                    On-ground Jaipur HQ support & quick strategy meets
                  </span>
                </li>
              </ul>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            </div>
          </div>
        </div>
      </section>

      {/* How We Do */}
      <section className="w-full bg-white px-3 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10 xl:gap-14">
<<<<<<< HEAD
            <div className="reveal reveal-left">
=======
            <div>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
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
<<<<<<< HEAD
            <p className="max-w-md text-[15px] leading-relaxed text-slate-600 sm:text-base lg:pt-8 lg:justify-self-end reveal reveal-right delay-100">
=======
            <p className="max-w-md text-[15px] leading-relaxed text-slate-600 sm:text-base lg:pt-8 lg:justify-self-end">
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
              Our comprehensive suite of digital marketing services is designed
              to elevate your brand&apos;s visibility.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:mt-14 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            {/* Left: mission list */}
            <div className="relative pl-2 sm:pl-4">
              <div
                className="absolute left-11 top-6 bottom-6 w-px bg-sky-200"
                aria-hidden
              />
<<<<<<< HEAD

              <ul className="space-y-8 sm:space-y-10">
                {howWeDoItems.map(({ title, description, icon: Icon }, idx) => (
                  <li key={title} className={`relative flex gap-4 sm:gap-5 reveal reveal-left delay-${(idx + 1) * 100}`}>
=======
              <ul className="space-y-8 sm:space-y-10">
                {howWeDoItems.map(({ title, description, icon: Icon }) => (
                  <li key={title} className="relative flex gap-4 sm:gap-5">
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
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
<<<<<<< HEAD
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none lg:min-h-[420px] reveal reveal-right delay-200">
=======
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none lg:min-h-[420px]">
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
              <svg
                viewBox="0 0 120 120"
                className="pointer-events-none absolute -right-2 top-0 z-0 h-28 w-28 text-secondary/50 sm:h-36 sm:w-36"
                aria-hidden
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
                  className="relative mt-10 w-[46%] shrink-0 overflow-hidden shadow-lg"
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
                  className="relative -mt-6 w-[46%] shrink-0 overflow-hidden shadow-lg"
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
<<<<<<< HEAD
        </div>
      </section>

      {/* Our Work Process */}
      <section className="w-full bg-white px-3 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-3 reveal reveal-scale">
            <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
              Our Work Process
            </span>
            <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden />
          </div>

          <h2 className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 text-[26px] font-semibold uppercase leading-tight tracking-tight text-slate-900 sm:text-[32px] md:text-[36px] reveal reveal-scale delay-100">
            Follow 4 Easy Work Steps
            <span
              className="inline-block h-2 w-2 rounded-full bg-primary"
              aria-hidden
            />
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5 xl:gap-6">
            {workProcessSteps.map(({ step, title, description, icon: Icon }, idx) => (
              <article
                key={step}
                className={`flex flex-col items-center rounded-xl border border-slate-100 bg-white px-5 py-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:px-6 sm:py-9 reveal reveal-scale delay-${idx === 0 ? "100" : idx === 1 ? "200" : idx === 2 ? "300" : "400"}`}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-primary sm:h-18 sm:w-18">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-primary">
                  {step}
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
              </article>
=======

          {/* Follow 4 Easy Work Steps */}
          <div className="mt-14 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
                Our Process
              </span>
              <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden />
            </div>
            <h2 className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 text-[26px] font-semibold uppercase leading-tight tracking-tight text-slate-900 sm:text-[32px] md:text-[36px]">
              Follow 4 Easy Work Steps
              <span
                className="inline-block h-2 w-2 rounded-full bg-primary"
                aria-hidden
              />
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5 xl:gap-6">
            {workProcessSteps.map(
              ({ step, title, description, icon: Icon }) => (
                <article
                  key={step}
                  className="flex flex-col items-center rounded-xl border border-slate-100 bg-white px-5 py-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:px-6 sm:py-9"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-primary sm:h-18 sm:w-18">
                    <Icon
                      className="h-7 w-7 sm:h-8 sm:w-8"
                      strokeWidth={1.75}
                    />
                  </span>
                  <p className="mt-5 text-xs font-bold uppercase tracking-wider text-primary">
                    {step}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {description}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Extra Section 1: Dedicated Global Delivery & Offshore Value Section */}
      <section className="w-full bg-slate-900 text-white px-3 sm:px-6 md:px-8 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
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
            <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6">
              <Clock className="h-8 w-8 text-primary mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-white mb-2">
                Time Zone Overlap
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Dedicated hours overlapping with US (EST/PST) and UK (GMT)
                business days for real-time collaboration.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6">
              <MessageSquare
                className="h-8 w-8 text-primary mb-4"
                strokeWidth={2}
              />
              <h3 className="text-lg font-bold text-white mb-2">
                Communication & Transparency
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Daily/weekly sprint reporting via Slack, ClickUp, Jira, and
                Google Meet with clear milestone tracking.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6">
              <Award className="h-8 w-8 text-primary mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-white mb-2">
                Cost-to-Quality Advantage
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Enterprise-grade software engineering and performance marketing
                at competitive offshore pricing.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6">
              <Lock className="h-8 w-8 text-primary mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-white mb-2">
                Data Protection & IP Security
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Strict NDAs, secure Git code repositories, and complete 100%
                client intellectual property ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section 2: Interactive "Free Website & SEO Audit" Lead Magnet */}
      <section className="w-full bg-linear-to-b from-slate-50 to-white px-3 sm:px-6 md:px-8 py-16 sm:py-20 border-b border-slate-200/60">
        <div className="mx-auto max-w-4xl text-center mb-10">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-primary sm:text-[15px]">
              High-Intent Growth Audit
            </span>
            <span className="flex gap-1" aria-hidden>
              <span className="h-0.5 w-6 rounded-full bg-primary/70" />
              <span className="h-0.5 w-4 rounded-full bg-primary/50" />
              <span className="h-0.5 w-2 rounded-full bg-primary/30" />
            </span>
          </div>
          <h2 className="mt-4 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px] lg:text-[44px]">
            Get a Free Technical &amp; SEO Growth Audit
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto italic font-medium">
            &ldquo;Discover your website&apos;s hidden conversion bottlenecks,
            SEO gaps, and ad spend leakage within 24 hours.&rdquo;
          </p>
        </div>
        <FreeAuditForm />
      </section>

      {/* Extra Section 3: Industry / Vertical Expertise Grid */}
      <section className="w-full bg-white px-3 sm:px-6 md:px-8 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryVerticals.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {description}
                </p>
              </div>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
      {/* Extra Section 4: "Why Choose Aksh Digital" Comparison Table */}
      <section className="w-full bg-[#faf9f7] px-3 sm:px-6 md:px-8 py-16 sm:py-20 border-y border-slate-200/60">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-primary sm:text-[15px]">
                Clear Value Advantage
              </span>
              <span className="flex gap-1" aria-hidden>
                <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                <span className="h-0.5 w-2 rounded-full bg-primary/30" />
              </span>
            </div>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px] lg:text-[44px]">
              Why Choose Aksh Digital
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <th className="py-4 px-6">Feature / Advantage</th>
                  <th className="py-4 px-6 text-slate-500">
                    Traditional Agencies
                  </th>
                  <th className="py-4 px-6 text-slate-500">
                    Cheap Freelancers
                  </th>
                  <th className="py-4 px-6 bg-primary/10 text-primary font-extrabold">
                    Aksh Digital
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">
                    Strategy & Execution
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    Cookie-cutter templates
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    Disjointed execution
                  </td>
                  <td className="py-4 px-6 bg-primary/5 font-bold text-primary">
                    Tailored full-funnel strategy
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">
                    Tech Stack
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    Outdated CMS platforms
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    Inconsistent code
                  </td>
                  <td className="py-4 px-6 bg-primary/5 font-bold text-primary">
                    Modern Next.js, React, Node.js
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">
                    Reporting
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    Vague monthly vanity metrics
                  </td>
                  <td className="py-4 px-6 text-slate-500">Rare updates</td>
                  <td className="py-4 px-6 bg-primary/5 font-bold text-primary">
                    Real-time ROAS & revenue dashboard
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">
                    Reach & Scalability
                  </td>
                  <td className="py-4 px-6 text-slate-500">Limited scope</td>
                  <td className="py-4 px-6 text-slate-500">Single skill set</td>
                  <td className="py-4 px-6 bg-primary/5 font-bold text-primary">
                    Hyper-local to global scalability
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
      {/* Development technologies marquee */}
      <section className="relative w-full overflow-hidden border-y border-white/10 bg-[url('/assets/images/home/process-1.webp')] bg-cover bg-center py-5 sm:py-6">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 48px)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(255,255,255,0.14)_0%,transparent_42%),radial-gradient(circle_at_85%_50%,rgba(0,0,0,0.12)_0%,transparent_40%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-green-500/40"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-primary to-transparent sm:w-32"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-primary to-transparent sm:w-32"
          aria-hidden
        />

        <div className="relative flex overflow-hidden">
          <div className="animate-marquee-scroll flex w-max items-center gap-10 pr-10 sm:gap-14 sm:pr-14">
            {[...devTechnologies, ...devTechnologies].map((name, index) => {
              const isFilled = index % 2 === 0;
              return (
                <span
                  key={`${name}-${index}`}
                  className="flex shrink-0 items-center gap-10 sm:gap-14"
                >
                  <span
<<<<<<< HEAD
                    className={`whitespace-nowrap text-xl font-bold uppercase tracking-wide sm:text-2xl md:text-3xl ${isFilled
                      ? "text-white"
                      : "text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.7)]"
                      }`}
=======
                    className={`whitespace-nowrap text-xl font-bold uppercase tracking-wide sm:text-2xl md:text-3xl ${
                      isFilled
                        ? "text-white"
                        : "text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.7)]"
                    }`}
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
                  >
                    {name}
                  </span>
                  <Star
                    className={`h-9 w-9 shrink-0  sm:h-12 sm:w-15 ${isFilled ? "fill-white text-white" : "text-white"}`}
                    aria-hidden
                  />
                </span>
              );
            })}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Latest Work / Portfolio */}
      <section className="relative w-full  bg-white px-3 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-3 reveal reveal-scale">
=======
      {/* 7. Client Results & Testimonials */}
      <HomeTestimonials />

      {/* Latest Work / Portfolio */}
      <section className="relative w-full bg-white px-3 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-3">
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
              Latest Work
            </span>
            <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden />
          </div>

<<<<<<< HEAD
          <h2 className="mt-5 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px] reveal reveal-scale delay-100">
            Explore Our Project
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base reveal reveal-scale delay-200">
            Our comprehensive suite of digital marketing services is designed to
            elevate your brand&apos;s visibility.
=======
          <h2 className="mt-5 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px]">
            Explore Our Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
            Our portfolio of scalable web applications and high-conversion
            marketing funnels.
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
          </p>
        </div>

        <div className="relative z-10 mt-10 sm:mt-12">
<<<<<<< HEAD
          <div className="flex items-end justify-center max-md:flex-wrap gap-2  pb-2 sm:gap-3 md:gap-4 scrollbar-none">
            {portfolioGallery.map(({ src, alt, className, featured }, index) => (
              <div
                key={`${alt}-${index}`}
                className={`relative reveal reveal-scale delay-${index === 0 ? "100" : index === 1 ? "200" : index === 2 ? "300" : index === 3 ? "400" : index === 4 ? "500" : "600"} ${className}`}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={featured ? 280 : 180}
                  height={featured ? 400 : 280}
                  className="h-full w-full object-cover"
                />
                {featured && (
                  <Link
                    href="/portfolio"
                    className="absolute left-1/2 top-[58%] z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_24px_rgba(210,92,65,0.45)] transition-transform hover:scale-105 sm:h-14 sm:w-14"
                    aria-label="View portfolio project"
                  >
                    <ArrowRight className="h-5 w-5 -rotate-45 sm:h-6 sm:w-6" strokeWidth={2.5} />
                  </Link>
                )}
=======
          <div className="flex items-end justify-center max-md:flex-wrap gap-2 pb-2 sm:gap-3 md:gap-4 scrollbar-none">
            {portfolioGallery.map(({ src, alt, className }, index) => (
              <div key={`${alt}-${index}`} className={`relative ${className}`}>
                <Image
                  src={src}
                  alt={alt}
                  width={180}
                  height={280}
                  className="h-full w-full object-cover rounded-xl shadow-md"
                />
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Testimonials */}
      <HomeTestimonials />

      {/* Latest Blog */}
      <section className="relative w-full overflow-x-hidden bg-white px-3 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-800 reveal reveal-scale">
            Our Blog
            <span aria-hidden>🔥</span>
          </span>

          <h2 className="mt-5 text-[26px] font-semibold leading-tight text-[#14183e] sm:text-[32px] md:text-[36px] reveal reveal-scale delay-100">
            Recent Articles And Latest Blog
          </h2>
        </div>

        <div className="relative z-10 mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {blogPosts.map(({ title, category, date, image }, idx) => (
            <article
              key={title}
              className={`overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] reveal reveal-left delay-${idx === 0 ? "100" : idx === 1 ? "200" : "300"}`}
            >
              <Link href="/blog" className="block">
                <div className="relative p-3 pb-0">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={image}
                      alt={title}
                      width={400}
                      height={240}
                      className="h-48 w-full object-cover sm:h-52"
                    />
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-800">
                      <Folder className="h-3.5 w-3.5" strokeWidth={2} />
                      {category}
                    </span>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                  <h3 className="text-left text-lg font-semibold leading-snug text-slate-900 sm:text-xl">
                    {title}
                  </h3>

                  <div className="my-4 h-px bg-slate-100" />

                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                    <span className="inline-flex text-blue/90 items-center gap-1.5">
                      <User className="h-4 w-4" strokeWidth={2} />
                      By Admin
                    </span>
                    <span className="text-slate-300" aria-hidden>
                      |
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" strokeWidth={2} />
                      {date}
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <HomeFaq />

      {/* Get In Touch / Contact */}

=======
      {/* 8. Frequently Asked Questions (FAQ) */}
      <HomeFaq />

      {/* Extra Section 6: Local City Quick-Access Hub */}
      <section className="w-full bg-[#faf9f7] px-3 sm:px-6 md:px-8 py-14 sm:py-18 border-t border-slate-200/60">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <div className="flex items-center gap-2">
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cityHubs.map(({ city, focus }) => (
              <div
                key={city}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <h3 className="font-bold text-slate-900 text-base">{city}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Section 7: Why Businesses Choose Aksh Digital (SEO Trust Narrative) */}
      <section className="w-full bg-white px-3 sm:px-6 md:px-8 py-16 sm:py-20 border-t border-slate-100">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="flex items-center gap-2">
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
              Why Businesses Choose Aksh Digital: India&apos;s Trusted Growth
              Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Strategic Digital Marketing & Discovery
                </h3>
                <p>
                  Every growth initiative must drive direct business ROI. As a
                  premier full-service digital marketing agency, we begin with
                  in-depth competitor research, technical audits, and commercial
                  objectives rather than generic deliverables.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Integrated Omnichannel Synergy
                </h3>
                <p>
                  Search visibility, high-ROAS paid media, and modern tech
                  stacks deliver exponential returns when connected. Our
                  holistic approach aligns SEO strategies, performance marketing
                  (Google & Meta Ads), social media marketing, and custom web
                  development into a unified revenue engine.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Data-Driven Performance & Optimization
                </h3>
                <p>
                  We eliminate guesswork through advanced conversion tracking
                  and analytics. Continuous performance monitoring allows us to
                  allocate ad spend efficiently, optimize high-intent keywords,
                  and scale channels that generate the highest conversion value.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Market-Specific Global & Local Execution
                </h3>
                <p>
                  Audience behaviors vary across regional and international
                  borders. From local search dominance for businesses looking
                  for a leading digital marketing company in Jaipur or key
                  Indian metros to full-scale campaigns for brands targeting the
                  USA, UK, and global markets, we engineer tailored solutions
                  for every ecosystem.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Transparent Reporting & Communication
                </h3>
                <p>
                  Complete clarity at every stage of execution. We provide
                  regular sprint updates, transparent ROAS and organic ranking
                  metrics, and direct access to your dedicated team.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Sustainable Long-Term Growth Assets
                </h3>
                <p>
                  Beyond temporary vanity metrics, we engineer scalable digital
                  assets, authoritative organic search rankings, and conversion
                  funnels that compound in value and drive predictable business
                  growth over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final Call to Action (CTA Banner) */}
      <section className="w-full bg-linear-to-r from-slate-900 via-[#1a2744] to-slate-900 text-white py-16 sm:py-20 px-3 sm:px-6 md:px-8 relative overflow-hidden">
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <div className="flex items-center gap-2 justify-center mb-6">
            <span className="text-sm font-semibold text-primary sm:text-[15px]">
              Let&apos;s Build Your Growth Roadmap
            </span>
            <span className="flex gap-1" aria-hidden>
              <span className="h-0.5 w-6 rounded-full bg-primary/70" />
              <span className="h-0.5 w-4 rounded-full bg-primary/50" />
              <span className="h-0.5 w-2 rounded-full bg-primary/30" />
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[38px] md:text-[46px] font-semibold leading-tight text-white max-w-4xl mx-auto">
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
              className="group flex items-center justify-center gap-2 bg-linear-to-r from-primary to-secondary text-white px-9 py-4.5 rounded-full font-bold text-base hover:shadow-[0_8px_30px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
            >
              <span>Book Your Free Consultation & Audit</span>
              <ArrowRight
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs sm:text-sm">
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              connect@akshdigital.com
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-emerald-400" />
              WhatsApp Support Available
            </span>
          </div>
        </div>
      </section>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
    </>
  );
}
