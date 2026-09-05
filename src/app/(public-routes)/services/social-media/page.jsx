import Link from "next/link";
import {
  ArrowRight,
  Share2,
  CheckCircle,
  Heart,
  MessageCircle,
  Camera,
  BarChart3,
  Users,
  Zap,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Social Media Marketing Services | Build Your Brand Online — Aksh Digital",
  description:
    "Aksh Digital's social media services help brands grow on Instagram, Facebook, LinkedIn & more. Expert content creation, community management, and paid social campaigns.",
};

const platforms = [
  { name: "Instagram", color: "from-pink-500 to-rose-500", bg: "bg-pink-50" },
  { name: "Facebook", color: "from-blue-600 to-blue-500", bg: "bg-blue-50" },
  { name: "LinkedIn", color: "from-blue-700 to-blue-600", bg: "bg-sky-50" },
  { name: "YouTube", color: "from-red-600 to-red-500", bg: "bg-red-50" },
  { name: "Twitter/X", color: "from-slate-800 to-slate-700", bg: "bg-slate-50" },
  { name: "Pinterest", color: "from-red-500 to-pink-500", bg: "bg-rose-50" },
];

const features = [
  { icon: Camera, title: "Content Creation", desc: "Scroll-stopping graphics, reels, carousels, and copywriting crafted to reflect your brand voice and drive engagement." },
  { icon: MessageCircle, title: "Community Management", desc: "Daily engagement, comment moderation, DM responses, and reputation management to build a loyal following." },
  { icon: Users, title: "Paid Social Advertising", desc: "Laser-targeted Meta and LinkedIn ad campaigns that deliver qualified leads and e-commerce sales." },
  { icon: Heart, title: "Influencer Collaboration", desc: "Identifying and managing influencer partnerships that amplify your brand authentically to new audiences." },
  { icon: BarChart3, title: "Performance Analytics", desc: "Monthly social media reports tracking reach, engagement, follower growth, and paid campaign ROI." },
  { icon: Zap, title: "Social Strategy & Calendar", desc: "A 30-day content calendar with a clear posting strategy aligned with your business goals and key dates." },
];

const process = [
  { step: "01", title: "Brand Audit", desc: "We analyse your current social presence, competitors, and audience demographics to find gaps and opportunities." },
  { step: "02", title: "Strategy & Content Plan", desc: "A platform-specific strategy with content pillars, posting frequency, hashtag research, and paid ad plan." },
  { step: "03", title: "Content Production", desc: "Our creative team designs, writes, and schedules all content — you just approve." },
  { step: "04", title: "Publish & Engage", desc: "Timely posting and active engagement with your community to maximise organic reach and build trust." },
  { step: "05", title: "Analyse & Improve", desc: "Monthly performance reviews and strategy refinements based on what your audience responds to best." },
];

const results = [
  { num: "5x", label: "Average Engagement Lift" },
  { num: "10k+", label: "Followers Grown Monthly" },
  { num: "3.5x", label: "ROAS on Paid Social" },
  { num: "50+", label: "Brands Managed" },
];

export default function SocialMediaPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-pink-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#f6ac55]">Social Media</span>
          </nav>
          <div className="flex items-center gap-2 mb-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/20">
              <Share2 className="h-5 w-5 text-pink-400" />
            </span>
            <span className="text-sm font-semibold text-[#f6ac55] uppercase tracking-wider">Social Media Marketing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-tight tracking-tight mb-6">
            Build a Brand That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
              People Love
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
            We create compelling social media presences that build communities, drive engagement,
            and convert followers into paying customers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-3.5 text-sm font-bold text-white hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300">
              Get Social Strategy
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300">
              ← All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-600 py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {results.map(({ num, label }) => (
            <div key={label}>
              <p className="text-3xl sm:text-4xl font-bold text-white">{num}</p>
              <p className="mt-1 text-sm text-white/80 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="py-14 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#14183e] mb-3">Platforms We Manage</h2>
          <p className="text-slate-600 mb-8">We craft platform-native content for every major social network.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {platforms.map(({ name, color, bg }) => (
              <span key={name} className={`inline-flex items-center gap-2 rounded-full ${bg} px-5 py-2.5 text-sm font-bold bg-gradient-to-r ${color} text-transparent bg-clip-text border border-slate-200`}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">Our Social Media Services</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Everything you need to build a standout presence and grow an engaged community online.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:border-pink-200 hover:-translate-y-1 transition-all duration-300">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 mb-4">
                  <Icon className="h-6 w-6 text-pink-600" strokeWidth={2} />
                </span>
                <h3 className="text-lg font-bold text-[#14183e] mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fafaf9]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14183e] mb-4">How We Work</h2>
            <p className="text-slate-600 max-w-xl mx-auto">A streamlined process that keeps you in control while we handle the heavy lifting.</p>
          </div>
          <div className="space-y-6">
            {process.map(({ step, title, desc }, i) => (
              <div key={step} className="flex gap-5 sm:gap-6 items-start">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-600 text-white font-bold text-sm shadow-md">{step}</span>
                  {i < process.length - 1 && <span className="mt-2 h-12 w-px bg-pink-100" />}
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
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#14183e] mb-6">Why Choose Us for Social Media?</h2>
            <ul className="space-y-4">
              {[
                "In-house designers, videographers, and copywriters",
                "Platform-specific strategies — not one-size-fits-all",
                "No stock content — everything is original and branded",
                "Monthly content calendar shared 2 weeks in advance",
                "Dedicated social media manager on WhatsApp",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-pink-600 mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-slate-700 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#0f1535] p-8 sm:p-10 text-center">
            <Share2 className="h-12 w-12 text-[#f6ac55] mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-white mb-3">Free Social Media Audit</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              We'll review your current social channels and share a detailed report on what's working and what isn't — free of charge.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#b84d35] transition-colors">
              <Phone className="h-4 w-4" />
              Book Free Audit
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-600 to-rose-700 py-16 px-4 sm:px-6 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Go Viral?</h2>
          <p className="text-white/80 mb-8">Let's build a social media strategy that creates real connections and drives real revenue.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-pink-600 hover:bg-slate-50 transition-colors shadow-lg">
            Let's Build Your Brand
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
