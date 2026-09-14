import Link from "next/link";
import {
  ArrowRight,
  Share2,
  CheckCircle,
  Check,
  Heart,
  MessageCircle,
  Camera,
  BarChart3,
  Users,
  Zap,
  Sparkles,
  Video,
  Globe,
  MapPin,
  Mail,
  Layers,
  ShieldCheck,
  TrendingUp,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "Creative Social Media Marketing Services | Brand Growth — Aksh Digital",
  description:
    "Social media marketing services engineered to engage, convert, and scale. Instagram, LinkedIn, YouTube, Reels production, paid social ads, and community management by Aksh Digital.",
  alternates: {
    canonical: "https://www.akshdigital.in/services/social-media-marketing/",
  },
};

const services = [
  {
    id: "content-strategy",
    number: "01",
    badge: "Editorial Calendars & Copywriting",
    title: "Comprehensive Content Strategy & Brand Storytelling",
    icon: Camera,
    points: [
      "Data-backed editorial calendars crafted to establish brand authority, educate audiences, and spark engagement.",
      "Creative copywriting with compelling hooks, engaging storytelling, and clear calls to action.",
    ],
  },
  {
    id: "video-production",
    number: "02",
    badge: "Reels, Shorts & Motion Design",
    title: "High-Retention Short-Form Video & Visual Production",
    icon: Video,
    points: [
      "Production of high-performing Instagram Reels, YouTube Shorts, and TikTok-style content tailored to modern algorithmic feeds.",
      "Carousel design, infographic creation, and interactive motion graphics designed to lower ad fatigue and boost organic reach.",
    ],
  },
  {
    id: "paid-social",
    number: "03",
    badge: "Meta & LinkedIn Funnels",
    title: "Paid Social Media Advertising & Retargeting",
    icon: TrendingUp,
    points: [
      "Integration with our performance marketing agency India capabilities to run high-converting Meta Ads (Facebook & Instagram) and LinkedIn B2B campaigns.",
      "Custom pixel tracking, audience segmentation, lookalike audience modeling, and multi-tier retargeting funnels.",
    ],
  },
  {
    id: "community-management",
    number: "04",
    badge: "Audience Care & Social Listening",
    title: "Community Management & Social Listening",
    icon: Users,
    points: [
      "Active comment moderation, direct message triage, and proactive engagement to foster an authentic brand community.",
      "Sentiment analysis and social listening to identify trending conversations and customer pain points in real time.",
    ],
  },
];

const platformsData = [
  {
    name: "Instagram & Threads",
    badge: "Visual Storytelling",
    desc: "Aesthetic grid planning, viral short-form Reels, interactive Stories, and influencer collaboration workflows.",
  },
  {
    name: "LinkedIn B2B Marketing",
    badge: "Executive Thought Leadership",
    desc: "Founder brand building, B2B lead generation funnels, employer branding, and authoritative long-form content.",
  },
  {
    name: "YouTube & Video Platforms",
    badge: "Long & Short-Form Video",
    desc: "Channel optimization, YouTube Shorts distribution, thumbnail design, and organic video SEO.",
  },
  {
    name: "X (Twitter) & Pinterest",
    badge: "Real-Time & Discovery",
    desc: "Real-time conversation management, trending topic integration, and visual product discovery boards.",
  },
];

const domesticCities = [
  { city: "Jaipur (HQ)", slug: "jaipur", tag: "Headquarters" },
  { city: "Delhi NCR", slug: "delhi", tag: "Metro Scale" },
  { city: "Mumbai", slug: "mumbai", tag: "Creative Hub" },
  { city: "Bangalore", slug: "bangalore", tag: "Tech Sector" },
  { city: "Pune", slug: "pune", tag: "Emerging Metro" },
  { city: "Indore", slug: "indore", tag: "Tier-2 Growth" },
];

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Brand & Audience Audit",
    desc: "Analyzing existing engagement rates, competitor positioning, and audience demographics.",
  },
  {
    phase: "Phase 2",
    title: "Content Pillars & Creative Direction",
    desc: "Defining visual themes, tonality, weekly content pillars, and video production frameworks.",
  },
  {
    phase: "Phase 3",
    title: "Production & Distribution",
    desc: "Designing high-impact creatives, writing conversion-focused copy, and scheduling posts during peak engagement windows.",
  },
  {
    phase: "Phase 4",
    title: "Analytics & Paid Amplification",
    desc: "Monitoring engagement KPIs, identifying top-performing organic posts, and boosting winners via paid social funnels.",
  },
];

export default function SocialMediaMarketingPage() {
  return (
    <div className="bg-white">
      {/* ── 1. Hero Section ── */}
      <section className="relative overflow-hidden bg-[#0f1535] py-20 sm:py-24 md:py-28 px-4 sm:px-6">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-pink-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#f6ac55]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#f6ac55]">Social Media Marketing</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#d25c41]/30 bg-[#d25c41]/10 px-4 py-1.5 text-sm font-semibold text-[#f6ac55] mb-6">
            <Sparkles className="h-4 w-4" />
            Brand Storytelling &amp; Social Conversions
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Creative Social Media Marketing Services Engineered to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-[#d25c41] to-[#f6ac55]">
              Engage, Convert, and Scale
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Likes and vanity metrics don’t drive revenue—engaged communities and strategic funnels do. As a premier social media marketing agency in India, Aksh Digital blends scroll-stopping visual design, data-driven content distribution, and paid social campaigns to build lasting brand loyalty across Jaipur, Pan-India, the USA, and international markets.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d25c41] to-[#f6ac55] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg hover:shadow-[0_8px_25px_rgba(210,92,65,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request a Free Social Media Strategy Audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link
              href="#core-services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xs px-8 py-4 text-sm sm:text-base font-bold text-white hover:bg-white/15 transition-all duration-300"
            >
              Explore Our Social Media Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* ── Impact Metrics Strip ── */}
      <section className="border-b border-slate-100 bg-[#fafaf9] py-8 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "5.4x", label: "Average Engagement Lift", sub: "Algorithmic reach" },
            { num: "10M+", label: "Video Views Generated", sub: "Reels & Shorts production" },
            { num: "3.8x", label: "ROAS on Paid Social", sub: "Meta & LinkedIn funnels" },
            { num: "100%", label: "Custom Brand Creatives", sub: "Zero stock templates" },
          ].map(({ num, label, sub }) => (
            <div key={label} className="p-3">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#14183e]">{num}</p>
              <p className="mt-1 text-sm font-bold text-[#d25c41]">{label}</p>
              <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. Overview: Turning Social Presence into Commercial Value ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41]">
                  Conversion-Focused Social Systems
                </span>
                <span className="h-px w-8 bg-[#d25c41]/40" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#14183e] leading-tight mb-6">
                Moving Beyond Random Posting to{" "}
                <span className="text-[#d25c41]">Full-Funnel Social Growth</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                Most social media accounts underperform because they treat feeds like static notice boards instead of dynamic conversion funnels. Random posts without strategic hooks, inconsistent branding, and zero alignment with paid media result in wasted effort and stagnant growth.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                As a full-stack social media management agency India, Aksh Digital develops social systems that capture attention and nurture prospects toward direct conversion. Whether you need a dedicated social media marketing company in Jaipur to dominate regional brand visibility, multi-city distribution across top Indian hubs, or international creative execution with a trusted digital marketing agency USA partner, we deliver high-impact social media management tailored to your audience.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d25c41] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#b84d35] transition-all shadow-md"
                >
                  Schedule Content Briefing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {[
                {
                  icon: Video,
                  title: "High-Retention Visual Hooks",
                  desc: "Short-form video engineered with algorithmic pacing that hooks attention in the first 3 seconds.",
                },
                {
                  icon: TrendingUp,
                  title: "Multi-Tier Paid Retargeting",
                  desc: "Re-engaging video watchers and profile visitors with high-converting social commerce offers.",
                },
                {
                  icon: MessageCircle,
                  title: "Active Community Advocacy",
                  desc: "Transforming casual followers into brand advocates with responsive DM nurture and community care.",
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
          </div>
        </div>
      </section>

      {/* ── 3. Our Core Social Media Marketing Services ── */}
      <section id="core-services" className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fafaf9] border-t border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Full-Spectrum Execution
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Our Core Social Media Marketing Services
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Every deliverable is crafted by dedicated copywriters, designers, and video strategists to command attention.
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
                        Deliverable Standard
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        Original creative assets produced and scheduled 2 weeks in advance.
                      </p>
                      <Link
                        href="/contact/"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs font-bold text-[#d25c41] hover:bg-[#d25c41] hover:text-white hover:border-[#d25c41] transition-all"
                      >
                        Request Sample Assets &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Cross-Platform Expertise ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Platform Native
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Cross-Platform Expertise
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              We understand each channel's specific algorithm mechanics and user psychology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {platformsData.map((plat, pIdx) => (
              <div
                key={pIdx}
                className="rounded-3xl border border-slate-200 bg-[#fafaf9] p-8 hover:border-[#d25c41]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block rounded-full bg-slate-200/80 px-3 py-1 text-xs font-bold text-slate-700 mb-4">
                    {plat.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-[#14183e] mb-3">
                    {plat.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {plat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <Link
                    href="/contact/"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d25c41] hover:underline"
                  >
                    Scale on {plat.name.split(" ")[0]} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Domestic Domination & Global Delivery ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#0f1535] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-[#f6ac55] mb-4">
              <Globe className="h-3.5 w-3.5" />
              Delivery Framework
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Domestic Domination &amp; Global Delivery
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              We engineer localized social playbooks across Indian metros alongside high-velocity global social media support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Hyper-Local & Metro Distribution */}
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d25c41]/20 text-[#f6ac55]">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Hyper-Local &amp; Metro Distribution
                    </h3>
                    <p className="text-xs text-[#f6ac55] font-semibold">
                      Jaipur HQ &amp; Top Indian Metros
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Specialized social playbooks as a proven social media marketing agency Delhi, a creative social media agency in Mumbai, a tech-focused social media marketing company Bangalore, an agile social media marketing agency Pune, and a top social media marketing in Indore.
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
                <span>Domestic Indian Social Desk</span>
                <Link href="/contact/" className="text-[#f6ac55] hover:underline font-semibold">
                  Get Domestic Proposal &rarr;
                </Link>
              </div>
            </div>

            {/* Card 2: Global Social Management */}
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6ac55]/20 text-[#f6ac55]">
                    <Globe className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Global Social Management (USA, UK, Global)
                    </h3>
                    <p className="text-xs text-[#f6ac55] font-semibold">
                      Outsourced Social Media Services
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Complete social media strategy and execution for overseas brands through transparent outsourced digital marketing services, offering dedicated timezone overlap, two-week content sprint reviews, and live performance dashboards.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    {
                      icon: Clock,
                      title: "Timezone Aligned Execution",
                      desc: "Dedicated daily overlap covering EST, PST, and GMT.",
                    },
                    {
                      icon: Zap,
                      title: "Two-Week Content Sprints",
                      desc: "Content calendars, visual hooks, and ad assets ready 14 days in advance.",
                    },
                    {
                      icon: BarChart3,
                      title: "Live Reporting Dashboards",
                      desc: "Track follower quality, reach velocity, and paid social CAC in real time.",
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
                <span>Global SMM Operations</span>
                <Link href="/contact/" className="text-[#f6ac55] hover:underline font-semibold">
                  Schedule International Call &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Our 4-Phase Social Media Execution Framework ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              Production &amp; Scaling
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Our 4-Phase Social Media Execution Framework
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              From audit to high-converting creative distribution, built for predictable audience growth.
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

      {/* ── 7. Why Choose Aksh Digital for Social Media Marketing? ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fafaf9] border-t border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d25c41] block mb-3">
              The Aksh Digital Standard
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14183e] tracking-tight">
              Why Choose Aksh Digital for Social Media Marketing?
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              We turn social channels into profitable community assets that compound brand trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Revenue-Focused Mindset",
                desc: "We focus on qualified traffic, lead generation, and customer lifetime value rather than hollow follower counts.",
              },
              {
                icon: Layers,
                title: "Unified Design & Marketing Team",
                desc: "Your social media assets are built by experienced designers and copywriters who understand modern consumer behavior.",
              },
              {
                icon: ShieldCheck,
                title: "Transparent Monthly Deliverables",
                desc: "Flexible SMM packages in India with regular milestone reviews, real-time analytics, and zero rigid lock-in contracts.",
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
                      <CheckCircle className="h-4 w-4" /> Core Value
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. Ready to Build a High-Converting Social Presence? (Bottom CTA) ── */}
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
            Ready to Build a High-Converting Social Presence?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Claim Your Free Social Media Audit Today
          </h2>

          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Let our strategy team analyze your social profiles, evaluate competitor benchmarks, and design a custom 30-day content roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm sm:text-base font-bold text-[#d25c41] hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-0.5"
            >
              Request Your Free Social Audit
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
            No obligation. Zero lock-in contracts. Actionable creative insights.
          </p>
        </div>
      </section>
    </div>
  );
}
