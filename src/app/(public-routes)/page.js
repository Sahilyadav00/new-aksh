import Image from "next/image";
import Link from "next/link";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeFaq from "@/components/HomeFaq";
import ScrollObserver from "@/components/ScrollObserver";
import {
  ArrowRight,
  Lightbulb,
  Target,
  Megaphone,
  TrendingUp,
  Quote,
  DollarSign,
  Star,
  ShieldCheck,
  MessageSquare,
  ThumbsUp,
  GitBranch,
  HandHelping,
  Flag,
  Folder,
  User,
  Calendar,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";


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
];

export default function Home() {
  return (
    <>
      <ScrollObserver />
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
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Component */}
          <div className="relative w-full overflow-hidden flex items-end justify-center animate-on-load-scale animation-delay-200">
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
                width={450}
                height={450}
                className="w-full h-auto object-contain select-none drop-shadow-[0_15px_35px_rgba(210,92,65,0.06)] hover:scale-[1.02] transition-transform duration-500 ease-out"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* About Our Company */}
      <section className="relative w-full overflow-hidden bg-[#faf9f7] px-3 sm:px-6 md:px-8 pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
        >
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-violet-200/35 blur-3xl" />
          <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
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
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none reveal reveal-left">
              <Lightbulb
                className="pointer-events-none absolute -left-2 top-8 z-0 h-28 w-28 text-slate-200/80 sm:h-36 sm:w-36"
                strokeWidth={1}
                aria-hidden
              />

              <div className="relative z-10 overflow-hidden rounded-2xl">
                <Image
                  src="/assets/images/home/trusted-partner.webp"
                  alt="Team collaborating on digital marketing"
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
                    About Our Company
                  </span>
                  <span className="flex gap-1" aria-hidden>
                    <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                    <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                    <span className="h-0.5 w-2 rounded-full bg-primary/30" />
                  </span>
                </div>

                <h2 className="mt-4 text-[28px] font-bold leading-tight text-[#1a2744] sm:text-[34px] md:text-[38px] lg:text-[42px] reveal reveal-right delay-100">
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

                <p className="mt-8 flex gap-2 text-[15px] font-bold italic text-[#1e3a6e] sm:text-base reveal reveal-right delay-400">
                  <Quote
                    className="mt-0.5 h-6 w-6 shrink-0 fill-[#93c5fd] text-[#93c5fd]"
                    aria-hidden
                  />
                  <span>
                    let&apos;s get in touch and have discussion the solution we
                    offer
                  </span>
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-6 reveal reveal-right delay-500">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-lg bg-[#3b6fd4] px-7 py-3.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#2f5eb8]"
                  >
                    MORE ABOUT US
                  </Link>

                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-slate-200 to-slate-300 text-sm font-bold text-slate-700 ring-2 ring-white">
                      RR
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-slate-900">
                        Ronald Richards
                      </p>
                      <p className="text-sm text-slate-500">Co, Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom-right 3D character */}
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
            </div>
          </div>
        </div>
      </section>

      {/* How We Do */}
      <section className="w-full bg-white px-3 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10 xl:gap-14">
            <div className="reveal reveal-left">
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
            <p className="max-w-md text-[15px] leading-relaxed text-slate-600 sm:text-base lg:pt-8 lg:justify-self-end reveal reveal-right delay-100">
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

              <ul className="space-y-8 sm:space-y-10">
                {howWeDoItems.map(({ title, description, icon: Icon }, idx) => (
                  <li key={title} className={`relative flex gap-4 sm:gap-5 reveal reveal-left delay-${(idx + 1) * 100}`}>
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
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none lg:min-h-[420px] reveal reveal-right delay-200">
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
            ))}
          </div>
        </div>
      </section>

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
                    className={`whitespace-nowrap text-xl font-bold uppercase tracking-wide sm:text-2xl md:text-3xl ${isFilled
                      ? "text-white"
                      : "text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.7)]"
                      }`}
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

      {/* Latest Work / Portfolio */}
      <section className="relative w-full  bg-white px-3 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-3 reveal reveal-scale">
            <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
              Latest Work
            </span>
            <span className="h-px w-8 bg-slate-200 sm:w-12" aria-hidden />
          </div>

          <h2 className="mt-5 text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px] reveal reveal-scale delay-100">
            Explore Our Project
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base reveal reveal-scale delay-200">
            Our comprehensive suite of digital marketing services is designed to
            elevate your brand&apos;s visibility.
          </p>
        </div>

        <div className="relative z-10 mt-10 sm:mt-12">
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
              </div>
            ))}
          </div>
        </div>
      </section>

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

    </>
  );
}
