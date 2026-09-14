import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  CheckCircle,
<<<<<<< HEAD
  Zap,
  ShieldCheck,
  Star,
  Code2,
  RefreshCw,
  BarChart3,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "App Development Services | iOS & Android Apps — Aksh Digital",
  description:
    "Aksh Digital builds high-performance native and cross-platform mobile apps for iOS and Android. React Native, Flutter, and custom app development services across India.",
};

const features = [
  { icon: Smartphone, title: "iOS App Development", desc: "Native Swift/Objective-C apps or cross-platform solutions that integrate deeply with Apple's ecosystem." },
  { icon: Code2, title: "Android App Development", desc: "High-performance Android apps built for the diverse device landscape, from budget to flagship." },
  { icon: RefreshCw, title: "Cross-Platform Apps", desc: "React Native and Flutter apps that share one codebase and run natively on both iOS and Android." },
  { icon: ShieldCheck, title: "Backend & API Development", desc: "Robust Node.js and cloud backends that power your app with real-time data, auth, and scalable infrastructure." },
  { icon: Zap, title: "App UI/UX Design", desc: "Intuitive, beautiful app interfaces that follow platform design guidelines and keep users coming back." },
  { icon: BarChart3, title: "ASO & App Analytics", desc: "App Store Optimisation and integrated analytics to improve visibility, downloads, and user retention." },
];

const process = [
  { step: "01", title: "Discovery & Requirement Analysis", desc: "We understand your app's core purpose, target users, and technical requirements to define the perfect scope." },
  { step: "02", title: "UX Wireframing & Prototyping", desc: "Interactive prototypes that let you experience the app before development begins — saving time and money." },
  { step: "03", title: "UI Design", desc: "Platform-native, visually stunning UI designed for engagement, accessibility, and brand consistency." },
  { step: "04", title: "Development & Testing", desc: "Agile sprints, regular builds, and rigorous QA across real devices to ensure a bug-free experience." },
  { step: "05", title: "Launch & Post-Launch Support", desc: "App Store / Play Store submission handled by us, plus 60 days of post-launch monitoring and support." },
];

const results = [
  { num: "50+", label: "Apps Delivered" },
  { num: "4.8★", label: "Avg. App Store Rating" },
  { num: "1M+", label: "Total App Downloads" },
  { num: "60 Days", label: "Post-Launch Support" },
=======
  Check,
  Zap,
  ShieldCheck,
  Code2,
  BarChart3,
  Layers,
  Sparkles,
  TrendingUp,
  MapPin,
  Mail,
  Clock,
  Database,
  Server,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "Custom App Development Services | iOS, Android & Flutter — Aksh Digital",
  description:
    "Mobile app development services engineered for retention, speed, and scale. Native iOS, Android, React Native, Flutter, and custom backend API architecture by Aksh Digital.",
  alternates: {
    canonical: "https://www.akshdigital.in/services/app-development/",
  },
};

const services = [
  {
    id: "cross-platform",
    number: "01",
    badge: "React Native & Flutter",
    title: "Cross-Platform Mobile App Development (React Native & Flutter)",
    icon: Smartphone,
    points: [
      "Single codebase deployment across both iOS and Android platforms, cutting development time and maintenance overhead without sacrificing native speed.",
      "Pixel-perfect UI rendering, smooth 60fps animations, and native device feature access (camera, geolocation, biometrics, Bluetooth).",
      "Highly scalable state management and modular architecture designed for rapid iteration.",
    ],
  },
  {
    id: "native-mobile",
    number: "02",
    badge: "Swift (iOS) & Kotlin (Android)",
    title: "Native iOS & Android Development",
    icon: Code2,
    points: [
      "Dedicated Swift (iOS) and Kotlin (Android) engineering tailored for hardware-intensive, enterprise-grade applications.",
      "Strict adherence to Apple App Store Human Interface Guidelines and Google Play Material Design principles.",
      "Maximum performance, zero-latency rendering, and deep OS-level integration.",
    ],
  },
  {
    id: "backend-apis",
    number: "03",
    badge: "Node.js, GraphQL & Microservices",
    title: "Custom Mobile Backend & Cloud API Architecture",
    icon: Server,
    points: [
      "Resilient backend systems built with Node.js, Python, TypeScript, and GraphQL/REST APIs.",
      "Scalable database engineering using PostgreSQL, MongoDB, and Redis caching layers deployed on AWS and Docker.",
      "Secure user authentication, role-based access control, and end-to-end data encryption.",
    ],
  },
  {
    id: "pwa",
    number: "04",
    badge: "Browser-Based App Experience",
    title: "Progressive Web Apps (PWAs)",
    icon: Globe,
    points: [
      "Lightweight, offline-ready web applications built using Next.js and React that deliver an app-like experience directly inside mobile browsers.",
      "Instant load times, push notifications, and home screen installation without requiring app store downloads.",
      "High-converting, low-friction digital touchpoints that reduce user drop-off.",
    ],
  },
  {
    id: "aso-acquisition",
    number: "05",
    badge: "Organic Rankings & Paid Installs",
    title: "App Store Optimization (ASO) & User Acquisition Synergy",
    icon: TrendingUp,
    points: [
      "Seamless alignment with our search engine optimization marketing agency and performance marketing agency India specialists to drive downloads.",
      "Keyword optimization for app store ranking, compelling screenshot/video design, and high-ROAS paid app install campaigns on Meta and Google UAC.",
    ],
  },
];

const techStackGroups = [
  {
    category: "Mobile Frameworks",
    skills: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)"],
  },
  {
    category: "Web & Progressive Apps",
    skills: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express", "Python", "GraphQL", "RESTful APIs"],
  },
  {
    category: "Databases & Cloud",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "AWS", "Docker", "Redis"],
  },
  {
    category: "Tracking & Analytics",
    skills: ["Firebase Analytics", "Mixpanel", "AppsFlyer", "GA4 Event Tracking"],
  },
];

const domesticCities = [
  { city: "Jaipur (HQ)", slug: "jaipur", tag: "Engineering Lab" },
  { city: "Delhi NCR", slug: "delhi", tag: "Enterprise Scale" },
  { city: "Mumbai", slug: "mumbai", tag: "Fintech & Commerce" },
  { city: "Bangalore", slug: "bangalore", tag: "Startup Hub" },
  { city: "Pune", slug: "pune", tag: "Software Center" },
  { city: "Indore", slug: "indore", tag: "Fast-Growth Tech" },
];

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Product Discovery & User Journey Mapping",
    desc: "We define user personas, map user flows, and outline database schemas to align technology with business goals.",
  },
  {
    phase: "Phase 2",
    title: "UI/UX Wireframing & Interactive Prototyping",
    desc: "Designing clickable, high-fidelity prototypes in Figma to test usability and validate design before development.",
  },
  {
    phase: "Phase 3",
    title: "Sprint Development & Quality Assurance",
    desc: "Writing clean, test-driven code with rigorous cross-device, functional, security, and edge-case testing.",
  },
  {
    phase: "Phase 4",
    title: "Store Submission, Analytics & Scale",
    desc: "Handling end-to-end App Store and Google Play submissions, setting up in-app attribution tracking, and optimizing conversion funnels.",
  },
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
];

export default function AppDevelopmentPage() {
  return (
    <div className="bg-white">
<<<<<<< HEAD
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#f6ac55]">App Development</span>
          </nav>
          <div className="flex items-center gap-2 mb-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
              <Smartphone className="h-5 w-5 text-violet-400" />
            </span>
            <span className="text-sm font-semibold text-[#f6ac55] uppercase tracking-wider">App Development</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-tight tracking-tight mb-6">
            Apps That Users{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
              Love & Return To
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
            We build native and cross-platform mobile apps for iOS and Android that are fast,
            intuitive, and built for real-world usage at scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-3.5 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300">
              Discuss Your App Idea
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300">
              ← All Services
=======
      {/* ── 1. Hero Section ── */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 md:py-28 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#f6ac55]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#f6ac55]">App Development</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#d25c41]/30 bg-[#d25c41]/10 px-4 py-1.5 text-sm font-semibold text-[#f6ac55] mb-6">
            <Sparkles className="h-4 w-4" />
            Scalable Mobile &amp; Cross-Platform Engineering
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Custom App Development Services Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-[#d25c41] to-[#f6ac55]">
              User Retention, Speed, and Scale
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            A great mobile app must do more than look modern—it must deliver seamless user experiences, rock-solid security, and high lifetime user value. As a full-stack software and digital marketing company, Aksh Digital builds native and cross-platform mobile applications that turn active users into long-term brand advocates. From our engineering hub in Jaipur to fast-scaling enterprises across Pan-India, the USA, the UK, and global markets, we turn innovative product ideas into market-ready applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Schedule a Product Strategy Call
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link
              href="#tech-stack"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xs px-8 py-4 text-sm sm:text-base font-bold text-white hover:bg-white/15 transition-all duration-300"
            >
              View Tech Stack &amp; Process
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Results */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-600 py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {results.map(({ num, label }) => (
            <div key={label}>
              <p className="text-3xl sm:text-4xl font-bold text-white">{num}</p>
              <p className="mt-1 text-sm text-white/80 font-medium">{label}</p>
=======
      {/* ── Impact Metrics Strip ── */}
      <section className="border-b border-slate-100 bg-[#fafaf9] py-8 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "60 FPS", label: "Smooth Native Rendering", sub: "React Native & Flutter" },
            { num: "99.9%", label: "Crash-Free Session Rate", sub: "Automated QA pipelines" },
            { num: "50+", label: "Apps Shipped Worldwide", sub: "iOS App Store & Google Play" },
            { num: "100%", label: "Source Code & IP Handover", sub: "Full enterprise ownership" },
          ].map(({ num, label, sub }) => (
            <div key={label} className="p-3">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#14183e]">{num}</p>
              <p className="mt-1 text-sm font-bold text-[#d25c41]">{label}</p>
              <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            </div>
          ))}
        </div>
      </section>

<<<<<<< HEAD
      {/* Features */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">Our App Development Services</h2>
            <p className="text-slate-600 max-w-xl mx-auto">From idea to launch — everything you need to bring your mobile app to life.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:border-violet-200 hover:-translate-y-1 transition-all duration-300">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 mb-4">
                  <Icon className="h-6 w-6 text-violet-600" strokeWidth={2} />
                </span>
                <h3 className="text-lg font-bold text-[#14183e] mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">How We Build Your App</h2>
            <p className="text-slate-600 max-w-xl mx-auto">A proven agile process that delivers quality, on time and within budget.</p>
          </div>
          <div className="space-y-6">
            {process.map(({ step, title, desc }, i) => (
              <div key={step} className="flex gap-5 sm:gap-6 items-start">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white font-bold text-sm shadow-md">{step}</span>
                  {i < process.length - 1 && <span className="mt-2 h-12 w-px bg-violet-100" />}
                </div>
                <div className="pt-2 pb-6">
                  <h3 className="text-lg font-bold text-[#14183e] mb-1.5">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#14183e] mb-6">Why Build Your App With Us?</h2>
            <ul className="space-y-4">
              {[
                "Full ownership of source code — always yours",
                "Experienced React Native & Flutter developers",
                "Real device testing on 20+ devices before launch",
                "Transparent pricing — no hidden costs or surprises",
                "Maintenance & update packages post-launch",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-slate-700 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#0f1535] p-8 sm:p-10 text-center">
            <Star className="h-12 w-12 text-[#f6ac55] mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-white mb-3">Free App Consultation</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Share your app idea and get a free consultation on tech stack, timeline, and budget estimate.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#b84d35] transition-colors">
              <Phone className="h-4 w-4" />
              Talk to an Expert
            </Link>
=======
      {/* ── 2. Overview: Engineering Mobile Products for High User Lifetime Value ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41]">
                  Retention-First Architecture
                </span>
                <span className="h-px w-8 bg-[#d25c41]/40" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#14183e] leading-tight mb-6">
                Bridging the Gap Between Intuitive UX, Clean Architecture, and{" "}
                <span className="text-[#d25c41]">User Acquisition</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                Building a successful mobile application requires balancing technical stability with post-launch growth marketing. High crash rates, slow transitions, and confusing onboarding flows lead to immediate app uninstalls and wasted acquisition budgets.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                As an integrated digital marketing and web development agency, Aksh Digital approaches mobile app development with end-to-end synergy. We engineer secure, modular front-end and back-end code while building conversion funnels, event tracking, and in-app analytics from day one. Whether you are looking for a reliable digital marketing company in Jaipur to launch a local on-demand service app or an overseas brand seeking a skilled digital marketing agency USA offshore development partner, we build scalable mobile products ready for market success.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#b84d35] transition-all shadow-md"
                >
                  Schedule Mobile Product Briefing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {[
                {
                  icon: Smartphone,
                  title: "Zero-Latency UI & Native 60fps",
                  desc: "Optimized component rendering, gesture responders, and thread isolation for butter-smooth mobile performance.",
                },
                {
                  icon: BarChart3,
                  title: "Full-Funnel Event & Attribution Tracking",
                  desc: "Out-of-the-box integration with Firebase, AppsFlyer, and Mixpanel to measure exact acquisition costs and user paths.",
                },
                {
                  icon: Layers,
                  title: "In-App Retention & Re-Engagement",
                  desc: "Intelligent push notification flows, deep linking, and automated lifecycle triggers that maximize LTV.",
                },
              ].map((card, idx) => {
                const CIcon = card.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-[#fafaf9] p-6 hover:border-[#d25c41]/40 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d25c41]/10 text-[#d25c41]">
                        <CIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <h4 className="text-base font-bold text-[#14183e] mb-1">
                          {card.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 to-purple-700 py-16 px-4 sm:px-6 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Have a Great App Idea?</h2>
          <p className="text-white/80 mb-8">Let's turn your vision into a product that users download and keep using.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-violet-700 hover:bg-slate-50 transition-colors shadow-lg">
            Build My App
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
=======
      {/* ── 3. Our Core App Development Services ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fafaf9] border-t border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Full-Lifecycle Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Our Core App Development Services
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Every build is tailored for maximum performance, frictionless user journeys, and seamless scalability.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((item) => {
              const SIcon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-xs hover:shadow-xl hover:border-[#d25c41]/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d25c41]/10 px-3.5 py-1 text-xs font-bold text-[#d25c41]">
                          <SIcon className="h-3.5 w-3.5" />
                          {item.badge}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                          Vertical {item.number}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#14183e] mb-5">
                        {item.title}
                      </h3>

                      <ul className="space-y-3.5">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3">
                            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d25c41] text-white">
                              <Check className="h-2.5 w-2.5 stroke-[3]" />
                            </span>
                            <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                              {pt}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:w-56 shrink-0 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-5 md:pt-0 md:pl-8">
                      <span className="text-xs text-slate-400 font-semibold mb-2">
                        Platform Standard
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        Native feature access, end-to-end encryption, and full App Store compliance.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs font-bold text-[#d25c41] hover:bg-[#d25c41] hover:text-white hover:border-[#d25c41] transition-all"
                      >
                        Request App Scope &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Our Mobile Technology Stack ── */}
      <section id="tech-stack" className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Production Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Our Mobile Technology Stack
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              We engineer cross-platform and native ecosystems designed for rapid release cycles and rock-solid uptime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {techStackGroups.map((group, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-slate-200 bg-[#fafaf9] p-6 sm:p-7 hover:border-[#d25c41]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#14183e] mb-4 border-b border-slate-200/80 pb-3">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block rounded-full bg-white border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60">
                  <span className="text-[11px] font-bold text-[#d25c41] uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" /> Production Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Global Offshore & Domestic Mobile App Delivery ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#0f1535] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-[#f6ac55] mb-4">
              <Globe className="h-3.5 w-3.5" />
              Delivery Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Global Offshore &amp; Domestic Mobile App Delivery
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              We deploy full-lifecycle engineering for emerging Indian digital innovators and dedicated offshore mobile development squads for overseas brands.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Pan-India Digital Transformation */}
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d25c41]/20 text-[#f6ac55]">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Pan-India Digital Transformation
                    </h3>
                    <p className="text-xs text-[#f6ac55] font-semibold">
                      Jaipur HQ &amp; Top Indian Metros
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Delivering end-to-end mobile applications for startups and enterprises across Jaipur, Delhi NCR, Mumbai, Bangalore, Pune, and Indore.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                  {domesticCities.map(({ city, slug, tag }) => (
                    <Link
                      key={slug}
                      href={`/seo-services/${slug}/`}
                      className="group p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-[#d25c41] hover:border-[#d25c41] transition-all text-xs text-white flex flex-col justify-between"
                    >
                      <span className="font-bold flex items-center justify-between">
                        {city}
                        <ArrowRight className="h-3 w-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </span>
                      <span className="text-[10px] text-slate-400 group-hover:text-white/80 mt-1">
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Jaipur Software Lab</span>
                <Link href="/contact/" className="text-[#f6ac55] hover:underline font-semibold">
                  Contact Domestic App Desk &rarr;
                </Link>
              </div>
            </div>

            {/* Card 2: Global Offshore Engineering */}
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6ac55]/20 text-[#f6ac55]">
                    <Globe className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Global Offshore Engineering (USA, UK, Global)
                    </h3>
                    <p className="text-xs text-[#f6ac55] font-semibold">
                      Outsourced Dedicated Mobile Squads
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Providing overseas companies with dedicated mobile app development teams through outsourced digital marketing services, complete with timezone overlap, weekly sprint reviews, clean documentation, and strict IP protection.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    {
                      icon: Clock,
                      title: "Timezone Aligned Sprints",
                      desc: "Real-time communication blocks covering EST, PST, and GMT.",
                    },
                    {
                      icon: Zap,
                      title: "Weekly Demo Builds",
                      desc: "Deploy testable TestFlight and Google Play Internal builds every sprint.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Enterprise IP & NDA Security",
                      desc: "Full intellectual property ownership transferred directly with transparent Git commits.",
                    },
                  ].map((item, idx) => {
                    const IIcon = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-3">
                        <IIcon className="h-4 w-4 text-[#f6ac55] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-white">{item.title}</p>
                          <p className="text-[11px] text-slate-300 leading-snug mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-slate-400">
                <span>International Mobile Desk</span>
                <Link href="/contact" className="text-[#f6ac55] hover:underline font-semibold">
                  Book Offshore App Discovery &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Our 4-Step Agile App Development Framework ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Lifecycle Execution
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Our 4-Step Agile App Development Framework
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              From user persona mapping to App Store launch and continuous scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {roadmapPhases.map((phase, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl border border-slate-200 bg-[#fafaf9] p-8 hover:border-[#d25c41]/40 hover:shadow-lg transition-all duration-300"
              >
                <span className="inline-block rounded-full bg-[#d25c41] text-white text-xs font-bold px-3 py-1 mb-4">
                  {phase.phase}
                </span>
                <h3 className="text-xl font-bold text-[#14183e] mb-3">
                  {phase.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Why Ambitious Brands Choose Aksh Digital for App Development ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fafaf9] border-t border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              The App Engineering Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Why Ambitious Brands Choose Aksh Digital for App Development
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              We eliminate app store friction by combining software engineering with post-launch growth marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Full-Funnel Alignment",
                desc: "We don't just deploy your app to the store; our growth marketers ensure your application is built for discoverability, retention, and scaling.",
              },
              {
                icon: ShieldCheck,
                title: "Clean Code & Total IP Ownership",
                desc: "Fully documented, modular codebases with 100% intellectual property ownership transferred directly to your organization.",
              },
              {
                icon: Layers,
                title: "Transparent Sprints & Real-Time Collaboration",
                desc: "Regular video sprint demos, shared Git repositories, and direct communication with project leads.",
              },
            ].map((card, idx) => {
              const PIcon = card.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-9 hover:border-[#d25c41]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d25c41]/10 text-[#d25c41] mb-6">
                      <PIcon className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h3 className="text-xl font-bold text-[#14183e] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold text-[#d25c41] uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle className="h-4 w-4" /> Core Guarantee
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. Ready to Turn Your Product Vision into a Live Application? (Bottom CTA) ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#d25c41] via-[#c65239] to-[#b84d35] py-20 sm:py-24 px-4 sm:px-6 text-center text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-white mb-6 uppercase tracking-wider">
            Ready to Turn Your Product Vision into a Live Application?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Claim Your Free Technical App Blueprint &amp; Consultation
          </h2>

          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Schedule a 30-minute discovery call with our software engineering team to review your app architecture, timeline, and development roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm sm:text-base font-bold text-[#d25c41] hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-0.5"
            >
              Request Your Free App Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="mailto:connect@akshdigital.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-xs px-7 py-4 text-sm sm:text-base font-semibold text-white hover:bg-white/20 transition-all"
            >
              <Mail className="h-4 w-4" />
              connect@akshdigital.com
            </a>
          </div>

          <p className="text-xs text-white/70">
            No obligation. Zero lock-in contracts. Full architectural and cost estimation.
          </p>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
        </div>
      </section>
    </div>
  );
}
