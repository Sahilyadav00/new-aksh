import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ContactScrollAnimations from "@/components/ContactScrollAnimations";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Contact Aksh Digital | Digital Marketing & Web Development Agency Jaipur",
  description:
    "Contact Aksh Digital for SEO, Google Ads, web development, and performance marketing. Serving businesses in Jaipur, Delhi, Mumbai, Bangalore, and global markets (USA, UK).",
  alternates: {
    canonical: "https://www.akshdigital.in/contact/",
  },
};

const processSteps = [
  {
    step: "01",
    title: "Preliminary Audit (Within 24 Hours)",
    desc: "Our specialists conduct a preliminary review of your website architecture, current keyword visibility, or paid ad accounts.",
  },
  {
    step: "02",
    title: "30-Minute Discovery Call",
    desc: "We schedule a focused strategy discussion to identify growth levers, timeline expectations, and budget alignment.",
  },
  {
    step: "03",
    title: "Custom Action Plan",
    desc: "We present a tailored proposal covering exact digital marketing solutions, technical milestones, and transparent monthly deliverables — with zero lock-in contracts.",
  },
];

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "akshdigital9@gmail.com",
      action: "mailto:akshdigital9@gmail.com",
      actionLabel: "Send an Email",
    },
    {
      icon: Phone,
      title: "Phone / WhatsApp",
      detail: "9549949918",
      action: "tel:+919549949918",
      actionLabel: "Call or WhatsApp",
    },
    {
      icon: MapPin,
      title: "Office Location",
      detail: "Jaipur, Rajasthan, India",
      sub: "Serving: Jaipur, Delhi NCR, Mumbai, Bangalore, Pune, Indore & Global Markets",
      action: "https://maps.google.com/?q=Jaipur,Rajasthan,India",
      actionLabel: "Get Directions",
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Monday – Saturday | 9:30 AM – 7:00 PM IST",
      sub: "Dedicated overlap support available for US/UK client timezones",
      action: null,
      actionLabel: null,
    },
  ];

  const auditFeatures = [
    "Detailed Website Performance analysis",
    "Comprehensive SEO Visibility audit",
    "Ad Account Structure inspection",
    "Key Lead Generation Gaps identification",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* GSAP ScrollTrigger Animations Controller */}
      <ContactScrollAnimations />

      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden bg-[#14183e] text-white border-b border-[#23295c]">
        {/* Background Ambient Glow & Gradient */}
        <div
          className="absolute inset-0 pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          {/* Subtle brand radial depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_25%_25%,#1c2256_0%,#14183e_70%,#0d102e_100%)]" />

          {/* Warm Brand Ambient Glows */}
          <div className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 top-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

          {/* Circuit Board PCB Traces (Upper Section of Dark Area) in Project Theme */}
          <svg
            className="hero-circuit absolute top-0 left-[22%] sm:left-[28%] lg:left-[32%] w-[460px] h-[220px] pointer-events-none select-none"
            viewBox="0 0 460 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top trace */}
            <path
              d="M 20 28 H 135 L 175 68 H 315 L 345 98 H 450"
              stroke="rgba(255, 255, 255, 0.16)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Parallel trace with 45 degree step */}
            <path
              d="M 70 12 H 160 L 195 47 H 360 L 385 72 H 440"
              stroke="rgba(246, 172, 85, 0.28)"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
            {/* Lower branch trace */}
            <path
              d="M 120 88 H 210 L 245 123 H 410"
              stroke="rgba(210, 92, 65, 0.25)"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
            <path
              d="M 225 48 L 260 83 H 380"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* Circular Terminal Nodes - Aksh Digital Primary & Secondary */}
            <circle cx="135" cy="28" r="3" fill="rgba(255, 255, 255, 0.55)" />
            <circle cx="175" cy="68" r="2.5" fill="#f6ac55" />
            <circle cx="315" cy="68" r="3.5" fill="#d25c41" />
            <circle cx="360" cy="47" r="3" fill="#f6ac55" />
            <circle cx="210" cy="88" r="2.5" fill="rgba(255, 255, 255, 0.35)" />
            <circle cx="410" cy="123" r="3.5" fill="#f6ac55" />
            <circle cx="450" cy="98" r="4" fill="#d25c41" />
            
            {/* Glowing Brand Accent Rings */}
            <circle cx="315" cy="68" r="7" stroke="#d25c41" strokeWidth="0.8" opacity="0.6" />
            <circle cx="450" cy="98" r="8" stroke="#f6ac55" strokeWidth="0.8" opacity="0.7" />
          </svg>

          {/* Glowing Digital Data Stream (Mid-Right) - Brand Colors */}
          <svg
            className="hero-circuit absolute top-[42%] -translate-y-1/2 left-[26%] sm:left-[30%] lg:left-[33%] w-[420px] h-[150px] pointer-events-none select-none"
            viewBox="0 0 420 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0" y1="18" x2="350" y2="18" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="3 8" />
            <line x1="40" y1="44" x2="410" y2="44" stroke="#f6ac55" strokeWidth="1.5" strokeDasharray="4 10" opacity="0.75" />
            <line x1="15" y1="70" x2="390" y2="70" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="2 6" opacity="0.85" />
            <line x1="85" y1="96" x2="360" y2="96" stroke="#d25c41" strokeWidth="1.2" strokeDasharray="4 12" opacity="0.75" />
            <line x1="25" y1="122" x2="400" y2="122" stroke="rgba(246, 172, 85, 0.5)" strokeWidth="1.2" strokeDasharray="3 7" />
          </svg>
        </div>

        {/* Right Curved White Pod / Studio Backdrop (Desktop) */}
        <div
          className="hero-pod absolute top-0 right-0 bottom-0 w-[47%] lg:w-[48%] xl:w-[46%] hidden lg:block pointer-events-none select-none overflow-hidden z-[1]"
          aria-hidden="true"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 500 600"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="podBg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f1f4f9" />
                <stop offset="25%" stopColor="#f8fafd" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            {/* The white light pod shape */}
            <path
              d="M 140 0 C 40 160, 40 440, 130 600 L 500 600 L 500 0 Z"
              fill="url(#podBg)"
            />
            {/* White rim stroke separating the dark and light sections */}
            <path
              d="M 140 0 C 40 160, 40 440, 130 600"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
            {/* Left Column: Text & Headings */}
            <div className="lg:col-span-7 xl:col-span-7">
              {/* Tagline: Let's Connect in Brand Theme */}
              <div className="hero-badge flex items-center gap-2 mb-5">
                <span className="font-serif italic text-lg sm:text-xl text-secondary tracking-wide select-none">
                  Let&apos;s Connect
                </span>
                <span className="flex items-center gap-1.5" aria-hidden>
                  <span className="h-[2px] w-6 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  <span className="h-[2px] w-4 rounded-full bg-secondary/80" />
                  <span className="h-[2px] w-2.5 rounded-full bg-secondary/50" />
                </span>
              </div>

              {/* Main Heading with Signature Aksh Digital Brand Gradient */}
              <h1 className="text-[34px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-bold leading-[1.12] tracking-tight mb-6">
                <span className="hero-title-line block bg-gradient-to-r from-[#e85b2e] via-[#ee7439] to-[#f58d4a] bg-clip-text text-transparent">
                  Start Your Digital
                </span>
                <span className="hero-title-line block bg-gradient-to-r from-[#e85b2e] via-[#ee7439] to-[#f58d4a] bg-clip-text text-transparent">
                  Growth Journey
                </span>
                <span className="hero-title-line block text-white">
                  with Aksh Digital
                </span>
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="hero-paragraph text-slate-300 text-[15px] sm:text-base md:text-[17px] leading-relaxed max-w-xl font-normal">
                Whether you are looking for a reliable digital marketing company
                in Jaipur, need an experienced performance marketing agency India
                to scale ad revenue, or require offshore development support as a
                digital marketing agency USA partner, our team is ready to help
                you scale.
              </p>
            </div>

            {/* Right Column: 3D Character Illustration */}
            <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end items-center pr-0 sm:pr-4 lg:pr-6 xl:pr-10 pt-4 lg:pt-0">
              {/* Mobile / Tablet Light Backdrop Bubble */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white rounded-3xl -z-10 lg:hidden border-2 border-white/80 shadow-2xl"
                aria-hidden="true"
              />

              {/* Character Image positioned with plant overlapping curve */}
              <div className="hero-character relative w-[300px] sm:w-[380px] md:w-[420px] lg:w-[450px] xl:w-[480px] lg:-ml-10 select-none">
                <Image
                  src="/assets/images/home/icon-01.webp"
                  alt="Start Your Digital Growth Journey with Aksh Digital"
                  width={560}
                  height={560}
                  priority
                  className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Contact Info & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Contact details */}
            <div className="lg:col-span-5 space-y-10">
              <div className="contact-info-header">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-semibold text-primary sm:text-[15px]">
                    Reach Out Directly
                  </span>
                  <span className="flex gap-1" aria-hidden>
                    <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                    <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                    <span className="h-0.5 w-2 rounded-full bg-primary/30" />
                  </span>
                </div>
                <h2 className="text-[26px] font-semibold leading-tight text-[#14183e] sm:text-[32px] mb-3">
                  Direct Contact &amp; Office Information
                </h2>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  We are headquartered in Jaipur and serve clients across India,
                  USA, UK, and global markets.
                </p>
              </div>

              {/* Contact detail cards */}
              <div className="contact-cards-grid grid grid-cols-1 sm:grid-cols-2 gap-5">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="contact-card bg-slate-50 rounded-xl p-5 border border-slate-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-[#14183e] text-sm mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-700 text-sm font-medium mb-1">
                      {info.detail}
                    </p>
                    {info.sub && (
                      <p className="text-gray-500 text-xs leading-relaxed mb-2">
                        {info.sub}
                      </p>
                    )}
                    {info.action && (
                      <a
                        href={info.action}
                        target={
                          info.action.startsWith("http") ? "_blank" : "_self"
                        }
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-primary hover:text-secondary transition-colors"
                      >
                        {info.actionLabel} &rarr;
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Free audit highlights card */}
              <div className="audit-card bg-[#14183e] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-10">
                  <Sparkles className="w-48 h-48 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  What is included in the Free Audit?
                </h3>
                <p className="text-white/70 text-sm mb-5">
                  Our growth roadmap audit is completely custom-made by Aksh
                  Digital experts, pinpointing direct opportunities to double
                  your revenue flow.
                </p>
                <ul className="space-y-3">
                  {auditFeatures.map((feat, idx) => (
                    <li
                      key={idx}
                      className="audit-item flex items-center gap-3 text-sm text-white/90"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div id="consultation-form" className="contact-form-container lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* What Happens After You Contact Us */}
      <section className="py-20 bg-[#faf9f7] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="process-header">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold text-primary sm:text-[15px]">
                Our Process
              </span>
              <span className="flex gap-1" aria-hidden>
                <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                <span className="h-0.5 w-2 rounded-full bg-primary/30" />
              </span>
            </div>
            <h2 className="text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px] mb-12">
              What Happens After You Contact Us?
            </h2>
          </div>

          <div className="process-steps-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map(({ step, title, desc }) => (
              <div
                key={step}
                className="process-step-card relative flex flex-col p-8 rounded-2xl border border-slate-100 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300"
              >
                <span className="process-number text-[48px] font-black text-primary/10 leading-none mb-4 select-none">
                  {step}
                </span>
                <h3 className="text-lg font-semibold text-[#14183e] mb-3">
                  {title}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="map-container w-full h-[450px] relative bg-slate-100 overflow-hidden">
        <iframe
          title="Aksh Digital Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.629050516898!2d75.78727085!3d26.9124336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3e16275039f%3A0x67c33116dfa996f0!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=""
        />
      </section>
    </div>
  );
}
