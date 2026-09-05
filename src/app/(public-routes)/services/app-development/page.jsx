import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  CheckCircle,
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
];

export default function AppDevelopmentPage() {
  return (
    <div className="bg-white">
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
            </Link>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-600 py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {results.map(({ num, label }) => (
            <div key={label}>
              <p className="text-3xl sm:text-4xl font-bold text-white">{num}</p>
              <p className="mt-1 text-sm text-white/80 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

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
          </div>
        </div>
      </section>

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
        </div>
      </section>
    </div>
  );
}
