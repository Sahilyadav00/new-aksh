import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  FileText,
  HeartHandshake,
  Lightbulb,
  Mail,
  MessageCircle,
  Palette,
  Rocket,
  Send,
  Smile,
  Target,
  TrendingUp,
  UserRound,
  Users,
} from "lucide-react";

const SITE_URL = "https://www.akshdigital.in";
const CAREERS_EMAIL = "akshdigital9@gmail.com";
const EMAIL_SUBJECT = "Career Enquiry – [Your Name]";
const MAILTO = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;

export const metadata = {
  title: "Careers at Aksh Digital | Join Our Team in Jaipur",
  description:
    "Explore careers at Aksh Digital. We welcome creative, curious people in digital marketing, design, and technology. Share your resume or portfolio with us.",
  alternates: {
    canonical: `${SITE_URL}/careers/`,
  },
};

const perks = [
  {
    Icon: Palette,
    title: "Creativity Without Limits",
    text: "Bring your ideas to life, explore new possibilities, and challenge conventional thinking.",
  },
  {
    Icon: TrendingUp,
    title: "Continuous Growth",
    text: "Learn new skills, embrace challenges, and discover opportunities to develop professionally.",
  },
  {
    Icon: Users,
    title: "Collaboration That Inspires",
    text: "We believe the best ideas emerge when people share knowledge, perspectives, and experiences.",
  },
  {
    Icon: Target,
    title: "Work That Matters",
    text: "Be part of a journey focused on helping businesses build stronger brands and grow in the digital world.",
  },
];

const values = [
  { Icon: Lightbulb, label: "Take initiative" },
  { Icon: MessageCircle, label: "Communicate openly" },
  { Icon: HeartHandshake, label: "Support your teammates" },
  { Icon: Smile, label: "Bring a positive mindset" },
];

const shareItems = [
  { Icon: FileText, label: "Resume" },
  { Icon: Briefcase, label: "Portfolio" },
  { Icon: UserRound, label: "Professional profile" },
];

function SectionHeading({ children, className = "" }) {
  return (
    <div className={className}>
      <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-semibold leading-tight tracking-tight text-slate-900">
        {children}
      </h2>
      <span className="mt-4 flex gap-1" aria-hidden="true">
        <span className="h-1 w-8 rounded-full bg-primary" />
        <span className="h-1 w-4 rounded-full bg-primary/60" />
        <span className="h-1 w-2 rounded-full bg-primary/30" />
      </span>
    </div>
  );
}

export default function CareersPage() {
  return (
    <>
      {/* Hero — same warm gradient + dotted pattern as the home hero */}
      <section className="relative w-full overflow-hidden bg-linear-to-b from-[#fdfaf8] via-[#faf7f3] to-[#f8f4ed] border-b border-orange-100/60 px-4 sm:px-6 md:px-8 py-14 ">
        <div
          className="pointer-events-none absolute -top-24 right-0 h-120 w-120 rounded-full bg-linear-to-br from-orange-200/20 via-amber-100/15 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"
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

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-500"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-slate-700">Careers</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/70 text-orange-600 text-xs sm:text-[13px] font-semibold tracking-wide shadow-2xs">
            <Briefcase className="w-3.5 h-3.5" strokeWidth={2.5} />
            <span>Careers • Join Our Journey</span>
          </div>

          <h1 className="text-[34px] sm:text-[46px] md:text-[56px] font-semibold text-slate-900 leading-[1.1] mt-5 mb-4 tracking-tight">
            Careers at{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#e85b2e] via-[#ee7439] to-[#f58d4a]">
              Aksh Digital
            </span>
          </h1>

          <p className="text-lg sm:text-xl font-semibold text-slate-800 mb-6">
            Your Talent. Our Vision. Infinite Possibilities.
          </p>

          <div className="space-y-4 text-slate-600 text-[15px] sm:text-[16px] leading-relaxed max-w-2xl mx-auto">
            <p>
              At Aksh Digital, we believe great work begins with great people.
              We&apos;re passionate about creativity, innovation, technology,
              and building digital experiences that make a difference.
            </p>
            <p>
              We value fresh perspectives, curiosity, collaboration, and the
              desire to keep growing. If you&apos;re excited about turning ideas
              into impact, we&apos;d love to connect with you.
            </p>
            <p className="font-medium text-slate-800">
              Let&apos;s create something meaningful together.
            </p>
          </div>

          <div className="mt-9 flex justify-center">
            <a
              href="#lets-connect"
              className="group flex items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-primary to-secondary px-9 py-4 text-base font-bold text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_35px_rgba(210,92,65,0.45)]"
            >
              <span>Get in Touch</span>
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5"
                strokeWidth={2.5}
              />
            </a>
          </div>
        </div>
      </section>

      {/* More Than Just Work */}
      <section className="w-full bg-linear-to-b from-[#f8f4ed] via-[#faf8f5] to-white px-4 sm:px-6 md:px-8 py-16 ">
        <div className="mx-auto max-w-6xl">
          <SectionHeading className="flex flex-col items-center text-center">
            More Than Just Work
          </SectionHeading>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-3xl border border-slate-200/70 bg-white p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_14px_40px_rgba(210,92,65,0.10)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary text-white shadow-md shadow-primary/20">
                  <Icon className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-slate-900">
                  {title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="w-full bg-white px-4 sm:px-6 md:px-8 py-16 ">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <SectionHeading>Our Culture</SectionHeading>
            <div className="mt-6 space-y-4 text-[15px] sm:text-base leading-relaxed text-slate-600">
              <p>
                At Aksh Digital, we believe in staying curious, adapting to
                change, and finding better ways to solve problems.
              </p>
              <p>
                We appreciate people who take initiative, communicate openly,
                support their teammates, and approach challenges with a positive
                mindset.
              </p>
              <p>
                Our goal is to build an environment where ideas are valued,
                learning is encouraged, and everyone has the opportunity to make
                a meaningful contribution.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-orange-100 bg-linear-to-br from-orange-50/80 via-[#fdf8f3] to-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <p className="mb-5 text-[13px] font-semibold uppercase tracking-wider text-primary">
                What We Value
              </p>
              <ul className="grid gap-3">
                {values.map(({ Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3.5 rounded-2xl border border-slate-200/70 bg-white px-4 py-3.5 font-medium text-slate-800"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Create an Opportunity */}
      <section className="w-full bg-white px-4 sm:px-6 md:px-8 pb-16 sm:pb-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-linear-to-br from-primary via-[#e0743f] to-secondary px-6 py-12 sm:px-12 sm:py-14 text-white shadow-xl shadow-primary/20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(#ffffff 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Rocket className="h-6 w-6" strokeWidth={2.25} />
            </span>
            <h2 className="mt-6 text-balance text-[26px] sm:text-[34px] md:text-[38px] font-semibold leading-tight tracking-tight">
              Don&apos;t Just Look for an Opportunity. Create One.
            </h2>
            <div className="mt-5 space-y-3 text-[15px] sm:text-base leading-relaxed text-white/90">
              <p>
                Your skills, ideas, and perspective could be a valuable addition
                to our journey.
              </p>
              <p>
                Even if there isn&apos;t a suitable opportunity available right
                now, we welcome introductions from people who connect with our
                vision and are interested in future possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect */}
      <section
        id="lets-connect"
        className="scroll-mt-24 w-full bg-linear-to-b from-white via-[#faf8f5] to-[#f8f4ed] px-4 sm:px-6 md:px-8 py-16"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <SectionHeading>Let&apos;s Connect</SectionHeading>
            <p className="mt-6 text-lg font-semibold text-slate-800">
              Think you could be a great fit for Aksh Digital?
            </p>
            <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-slate-600">
              Share your resume, portfolio, or professional profile with us.
              Tell us a little about yourself, what you do best, and how
              you&apos;d like to contribute.
            </p>

            <ul className="mt-6 flex flex-wrap gap-3">
              {shareItems.map(({ Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-4 py-2 text-[14px] font-medium text-slate-700 shadow-xs"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200/70 bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
              <dl className="space-y-4">
                <div className="flex items-start gap-3.5 rounded-2xl border border-slate-200/70 bg-[#faf8f5] p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-4.5 w-4.5" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Email
                    </dt>
                    <dd>
                      <a
                        href={MAILTO}
                        className="wrap-break-word text-[15px] sm:text-base font-semibold text-slate-800 hover:text-primary transition-colors"
                      >
                        {CAREERS_EMAIL}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl border border-slate-200/70 bg-[#faf8f5] p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FileText className="h-4.5 w-4.5" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Subject
                    </dt>
                    <dd className="wrap-break-word text-[15px] sm:text-base font-semibold text-slate-800">
                      {EMAIL_SUBJECT}
                    </dd>
                  </div>
                </div>
              </dl>

              <a
                href={MAILTO}
                className="group mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-primary to-secondary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_35px_rgba(210,92,65,0.45)]"
              >
                <Send className="h-4.5 w-4.5" strokeWidth={2.5} />
                <span>Email Us Your Profile</span>
              </a>

              <p className="mt-5 text-center text-[15px] font-medium text-slate-600">
                We look forward to connecting with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing banner — matches the home page dark CTA */}
      <section className="relative w-full overflow-hidden border-t border-slate-800 bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 px-4 sm:px-6 md:px-8 py-16 text-white">
        <div
          className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-mesh-1"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-secondary/15 blur-3xl animate-mesh-2"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-2">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary">
              Aksh Digital
            </span>
            <span className="flex gap-1" aria-hidden="true">
              <span className="h-0.5 w-6 rounded-full bg-primary/70" />
              <span className="h-0.5 w-4 rounded-full bg-primary/50" />
              <span className="h-0.5 w-2 rounded-full bg-primary/30" />
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold leading-tight tracking-tight">
            Where Creativity Meets{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Digital Growth.
            </span>
          </h2>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={MAILTO}
              className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-primary to-secondary px-9 py-4 text-base font-bold text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_35px_rgba(210,92,65,0.5)] sm:w-auto"
            >
              <span>Share Your Profile</span>
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5"
                strokeWidth={2.5}
              />
            </a>
            <Link
              href="/about/"
              className="flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4 text-primary" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
