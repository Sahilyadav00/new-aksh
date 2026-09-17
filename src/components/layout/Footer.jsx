"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";

// Custom SVG Icons to match mockup design exactly
const AppleIcon = (props) => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" {...props}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.82M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.57 2.95-1.39z" />
  </svg>
);

const AndroidIcon = (props) => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" {...props}>
    <path d="M17.6 9.48l1.7-2.95a.43.43 0 0 0-.16-.59.43.43 0 0 0-.59.16l-1.74 3a11.19 11.19 0 0 0-9.62 0L5.45 6.1a.43.43 0 0 0-.59-.16.43.43 0 0 0-.16.59l1.7 2.95A11.77 11.77 0 0 0 2 17.5h20a11.77 11.77 0 0 0-4.4-8.02zM7 14.75a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm10 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
  </svg>
);

const PinterestIcon = (props) => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.4 7.63 11.13-.1-.95-.2-2.4.04-3.43.22-.93 1.4-5.93 1.4-5.93s-.36-.72-.36-1.77c0-1.66.96-2.9 2.17-2.9 1.02 0 1.51.77 1.51 1.69 0 1.03-.66 2.56-.99 3.99-.28 1.19.6 2.16 1.77 2.16 2.12 0 3.76-2.24 3.76-5.47 0-2.86-2.06-4.86-5-4.86-3.4 0-5.4 2.56-5.4 5.2 0 1.03.4 2.13.9 2.73.1.12.1.22.08.33-.1.39-.3 1.2-.34 1.35-.06.24-.2.33-.46.21-1.73-.8-2.82-3.34-2.82-5.37 0-4.37 3.18-8.38 9.15-8.38 4.8 0 8.53 3.42 8.53 8 0 4.77-3 8.6-7.17 8.6-1.4 0-2.72-.73-3.17-1.59l-.86 3.29c-.31 1.2-1.15 2.7-1.72 3.63A12 12 0 1 0 12 0z" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
const InstagramIcon = (props) => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function Footer() {
  return (
    <>
      {/* ── Pre-Footer Contact Banner ── */}
      {/* <section className="w-full py-10 sm:py-14 md:py-16 relative z-20">
        <div className="max-w-384 mx-auto px-3 sm:px-6 md:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(20,24,62,0.16)] border border-slate-100 flex flex-col md:flex-row items-stretch">
            <div className="relative z-10 md:w-[38%] bg-gradient-to-br from-[#d25c41] via-[#d25c41] to-[#f6ac55] p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-between overflow-hidden">
              <div
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-white uppercase tracking-wider mb-4 backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  Get In Touch
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight mb-3">
                  Ready to Scale Your Inbound Revenue?
                </h2>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  Connect with our search specialists and engineering team for a
                  comprehensive website, SEO &amp; ROI growth audit.
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-4">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#14183e] text-white px-7 py-3.5 text-sm font-bold shadow-xl hover:bg-slate-900 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>Claim Free Growth Audit</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            <div className="relative z-10 md:w-[62%] bg-[#14183e] p-8 sm:p-10 lg:p-12 flex flex-col justify-center overflow-hidden">
              <div className="pointer-events-none absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-[#d25c41]/10 blur-3xl" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 relative z-10">
                <div className="group flex flex-col items-start p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d25c41]/50 hover:bg-white/10 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d25c41]/20 text-[#f6ac55] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Direct Connect
                  </span>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    Strategy Desk
                  </h3>
                  <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                    Mon – Sat (9:30 AM – 7:00 PM IST)
                  </p>
                  <Link
                    href="/contact/"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f6ac55] hover:text-white transition-colors mt-auto"
                  >
                    <span>Book Discovery Call</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="group flex flex-col items-start p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d25c41]/50 hover:bg-white/10 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6ac55]/20 text-[#f6ac55] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Email Inquiries
                  </span>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    Send a Message
                  </h3>
                  <a
                    href="mailto:akshdigital9@gmail.com"
                    className="text-xs font-semibold text-[#f6ac55] hover:text-white transition-colors break-all mb-1"
                  >
                    akshdigital9@gmail.com
                  </a>
                  <p className="text-[11px] text-slate-400 mt-auto">
                    Reply within 24 hours
                  </p>
                </div>

                <div className="group flex flex-col items-start p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d25c41]/50 hover:bg-white/10 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d25c41]/20 text-[#f6ac55] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Headquarters
                  </span>
                  <h3 className="text-base font-bold text-white mb-1">
                    Jaipur, Rajasthan
                  </h3>
                  <p className="text-xs text-slate-300 mb-1">
                    India (Global Delivery)
                  </p>
                  <p className="text-[11px] text-slate-400 mt-auto">
                    Serving Pan-India, USA &amp; UK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <footer className="relative bg-[#f4f5f7] text-slate-800 py-16 overflow-hidden w-full mt-auto border-t border-slate-200/50">
        {/* Decorative background rings to match mockup visual circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-1">
          {/* Left Concentric Arcs */}
          <div className="absolute -left-64 top-14 w-[400px] h-[400px] rounded-full border border-slate-300/40 bg-black/5 opacity-70" />
          <div className="absolute -left-48 -bottom-48 w-[500px] h-[500px] rounded-full border border-slate-300/50 bg-black/15 opacity-70" />

          {/* Right Concentric Arcs */}
          {/* <div className="absolute -right-80 -top-80 w-[1000px] h-[1000px] rounded-full border border-slate-300/30 bg-white/20 opacity-70" />
        <div className="absolute -right-64 -top-64 w-[800px] h-[800px] rounded-full border border-slate-300/40 bg-white/40 opacity-70" /> */}
          <div className="absolute -right-48 -bottom-5 w-[570px] h-[570px] rounded-full border border-slate-300/50 bg-black/4 opacity-70" />
          {/* <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-slate-200/40 blur-3xl opacity-50" /> */}
        </div>

        <div className="max-w-384 mx-auto px-3 sm:px-6 md:px-8 relative z-10">
          {/* Footer Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-12 lg:gap-8 items-start">
            {/* Column 1: Logo & Branding */}
            <div className="flex flex-col">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/assets/images/logo/logo.png"
                  alt="AKSH DIGITAL Logo"
                  width={160}
                  height={44}
                  className="h-15 w-auto object-contain"
                  priority
                />
              </Link>
              <p className="text-black text-[15px] leading-relaxed mb-8 max-w-sm">
                Aksh Digital is a premium digital marketing agency in Jaipur
                offering SEO services, Google Ads management, social media
                marketing, and website development across India. We help
                businesses generate leads, increase visibility, and scale
                revenue with performance-driven strategies.
              </p>
              {/* <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#"
                className="flex items-center gap-2.5 bg-slate-900 text-white px-5 py-3 rounded-full hover:bg-slate-800 transition-all duration-200 shadow-sm text-sm font-semibold group"
              >
                <AppleIcon
                  fill="white"
                  className="transition-transform shrink-0 size-5 duration-200 text-white group-hover:scale-110"
                />
                <span className="whitespace-nowrap">App Store</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2.5 bg-transparent text-slate-800 border border-slate-300 px-5 py-3 rounded-full hover:bg-slate-200/50 transition-all duration-200 shadow-sm text-sm font-semibold group"
              >
                <AndroidIcon className="transition-transform duration-200 shrink-0 size-5 group-hover:scale-110" />
                <span className="whitespace-nowrap">Play Store</span>
              </a>
            </div> */}

              <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 transition-all duration-300 hover:shadow-md hover:border-slate-300 mt-2">
                <iframe
                  title="Aksh Digital Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.629050516898!2d75.78727085!3d26.9124336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3e16275039f%3A0x67c33116dfa996f0!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full transition-all duration-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-1! md:grid-cols-2! lg:grid-cols-[auto_auto_auto] gap-8 lg:pl-10">
              {/* Column 2: Quick Links */}
              <div className=" max-w-50">
                <div className="relative mb-6 pb-2 inline-block">
                  <h3 className="text-lg font-bold text-slate-900">
                    Quick Links
                  </h3>
                  <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-slate-400/80" />
                </div>
                <ul className="flex flex-col gap-3.5">
                  {[
                    { label: "Home", href: "/" },
                    { label: "About Us", href: "/about/" },
                    { label: "Services", href: "/services/" },
                    { label: "Portfolio", href: "/portfolio/" },
                    { label: "Blog", href: "/blog/" },
                    { label: "FAQ", href: "/faq/" },
                    { label: "Contact", href: "/contact/" },
                  ].map(({ label, href }) => (
                    <li key={label} className="overflow-hidden">
                      <Link
                        href={href}
                        className="text-[15px] text-black hover:text-primary font-medium hover:translate-x-1 transition-all duration-200 inline-block"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Our Services */}
              <div className="lg:pl-4">
                <div className="relative mb-6 pb-2 inline-block">
                  <h3 className="text-lg font-bold text-slate-900">
                    Our Services
                  </h3>
                  <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-slate-400/80" />
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    {
                      label: "Digital Marketing",
                      href: "/services/digital-marketing/",
                    },
                    {
                      label: "Performance Marketing",
                      href: "/services/performance-marketing/",
                    },
                    {
                      label: "SEO Services",
                      href: "/services/seo/",
                    },

                    {
                      label: "Social Media Marketing",
                      href: "/services/social-media-marketing/",
                    },
                    {
                      label: "Web Development",
                      href: "/services/web-development/",
                    },
                    {
                      label: "App Development",
                      href: "/services/app-development/",
                    },

                    {
                      label: "Graphic Design",
                      href: "/services/graphic-design/",
                    },
                  ].map(({ label, href }) => (
                    <li key={label} className="overflow-hidden">
                      <Link
                        href={href}
                        className="text-[15px] text-black hover:text-primary font-medium hover:translate-x-1 transition-all duration-200 inline-block"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Contact / Address Card */}
              <div>
                <div className="bg-white rounded-[2rem] p-7 sm:p-8 shadow-[0_24px_50px_-15px_rgba(0,0,0,0.04)] border border-slate-100/90 flex flex-col gap-6 w-full lg:max-w-sm ml-auto">
                  <div>
                    <h4 className="text-[22px] font-bold text-slate-900 leading-tight mb-2">
                      Ready To Get Started?
                    </h4>
                    <p className="text-[14px] text-black leading-relaxed">
                      It is a long established fact that a reader will be
                      distracted layout.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 pt-4 border-t border-slate-100">
                    {/* Email Info */}
                    <div className="flex gap-3.5 items-center">
                      <div className="p-2.5 bg-slate-50 rounded-xl text-slate-600 border border-slate-100 shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <a
                          href="mailto:akshdigital9@gmail.com"
                          className="text-[14px] text-slate-600 hover:text-primary block font-medium transition-colors truncate"
                        >
                          akshdigital9@gmail.com
                        </a>
                        {/* <a
                      href="mailto:info@Niotech.com"
                      className="text-[14px] text-slate-600 hover:text-primary block font-medium transition-colors truncate"
                    >
                      info@Niotech.com
                    </a> */}
                      </div>
                    </div>

                    {/* Phone Info */}
                    <div className="flex gap-3.5 items-center">
                      <div className="p-2.5 bg-slate-50 rounded-xl text-slate-600 border border-slate-100 shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <a
                          href="tel:+919549949918"
                          className="text-[14px] text-slate-600 hover:text-primary block font-medium transition-colors"
                        >
                          9549949918
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-2 lg:col-span-3 mt-5">
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                  SEO Services in
                </p>
                <div className="flex flex-wrap gap-2">
                  {/* We deliver to : pan india across */}
                  {[
                    { label: "Jaipur", href: "/seo-services/jaipur/" },
                    { label: "Delhi", href: "/seo-services/delhi/" },
                    { label: "Mumbai", href: "/seo-services/mumbai/" },
                    { label: "Bangalore", href: "/seo-services/bangalore/" },
                    { label: "Pune", href: "/seo-services/pune/" },
                    { label: "Indore", href: "/seo-services/indore/" },
                    { label: "Chandigarh", href: "/seo-services/chandigarh/" },
                    { label: "Kolkata", href: "/seo-services/kolkata/" },
                    { label: "Hyderabad", href: "/seo-services/hyderabad/" },
                    { label: "Chennai", href: "/seo-services/chennai/" },
                    { label: "Lucknow", href: "/seo-services/lucknow/" },
                    {
                      label: "Bhiwadi & Alwar",
                      href: "/seo-services/bhiwadi-alwar/",
                    },
                  ].map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="text-[14px] text-slate-600 hover:text-primary font-medium  transition-all duration-200 inline-block"
                    >
                      <span>{label}</span>,
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className="mt-5 pt-8 border-t border-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[14px] text-slate-600 font-medium">
              Copyright © 2026 Aksh Digital – Digital Marketing Agency in
              Jaipur. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2 lg:mr-20">
              <a
                href="https://www.facebook.com/profile.php?id=61593092715463"
                className="p-2 hover:bg-slate-200/60 rounded-full transition-colors duration-200 text-black hover:text-primary"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              {/* <a
                href="#"
                className="p-2 hover:bg-slate-200/60 rounded-full transition-colors duration-200 text-black hover:text-primary"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a> */}
              {/* <a
                href="#"
                className="p-2 hover:bg-slate-200/60 rounded-full transition-colors duration-200 text-black hover:text-primary"
                aria-label="Linkedin"
              >
                <LinkedinIcon />
              </a> */}
              <a
                href="https://www.instagram.com/_akshdigital/"
                className="p-2 hover:bg-slate-200/60 rounded-full transition-colors duration-200 text-black hover:text-primary"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
