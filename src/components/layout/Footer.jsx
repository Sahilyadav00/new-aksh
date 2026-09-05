"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

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

export default function Footer() {
  return (<>

    <section className="w-full py-12  sm:py-16  md:py-20">
      <div className="relative mx-auto ">
        <div className="relative flex md:ps-[30%] min-h-[280px] flex-col md:min-h-[220px] md:flex-row md:items-stretch">
          <div className="md:absolute left-0 top-0 z-20 text-center flex shrink-0 flex-col justify-center bg-primary md:translate-y-[-30%] px-8 py-10 sm:px-10 sm:py-12 md:w-[35%] md:h-[80%]  lg:px-12 md:pl-[13%]">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Get In Touch
            </h2>
            <p className="text-lg font-medium text-white/90 sm:text-xl">
              Contact Us
            </p>
          </div>

          <div className="relative z-10  flex flex-1 flex-col justify-center bg-[#14183e] px-8 py-10 sm:px-10 sm:py-12 md:-ml-8 md:mt-0 md:pl-16 lg:pl-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
              <div className="flex flex-col items-center justify-center gap-4">
                <Phone
                  className="mt-1 h-11 w-11  shrink-0 text-secondary/80"
                  strokeWidth={1.75}
                />
                <div className="space-y-1 text-white">
                  <a
                    href="tel:+980098987984"
                    className="block text-[15px] hover:text-primary/90 transition-colors sm:text-base"
                  >
                    980 098 987 98 4
                  </a>
                  <a
                    href="tel:+098908980675"
                    className="block text-[15px] hover:text-primary/90 transition-colors sm:text-base"
                  >
                    098 (908) 980 675
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <Mail
                  className="mt-1 h-12 w-12 shrink-0 text-secondary/80"
                  strokeWidth={1.75}
                />
                <div className="space-y-1 text-center text-white">
                  <a
                    href="mailto:info@webexampe.com"
                    className="block text-[15px] hover:text-primary/90 transition-colors sm:text-base"
                  >
                    info@webexampe.com
                  </a>
                  <a
                    href="mailto:jobs@webmail.com"
                    className="block text-[15px] hover:text-primary/90 transition-colors sm:text-base"
                  >
                    jobs.webmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <MapPin
                  className="mt-1 h-12 w-12 shrink-0 text-secondary/80"
                  strokeWidth={1.75}
                />
                <p className="text-[15px] text-center leading-relaxed text-white sm:text-base">
                  14/A, New Castle Tower
                  <br />
                  New York, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



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
              Aksh Digital is a premium digital marketing agency in Jaipur offering SEO services, Google Ads management, social media marketing, and website development across India. We help businesses generate leads, increase visibility, and scale revenue with performance-driven strategies.
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
                className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_auto_auto] gap-x-8 lg:pl-10">
            {/* Column 2: Quick Links */}
            <div className=" max-w-50">
              <div className="relative mb-6 pb-2 inline-block">
                <h3 className="text-lg font-bold text-slate-900">Quick Links</h3>
                <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-slate-400/80" />
              </div>
              <ul className="flex flex-col gap-3.5">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Blog", href: "/blog" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Contact", href: "/contact" },
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
                <h3 className="text-lg font-bold text-slate-900">Our Services</h3>
                <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-slate-400/80" />
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "SEO Strategies", href: "/services/seo-strategies" },
                  { label: "Digital Marketing", href: "/services/digital-marketing" },
                  { label: "Social Media", href: "/services/social-media" },
                  { label: "Web Development", href: "/services/web-development" },
                  { label: "App Development", href: "/services/app-development" },
                  { label: "Performance Marketing", href: "/services/performance-marketing" },
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
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Address
                  </span>
                  <h4 className="text-[22px] font-bold text-slate-900 leading-tight mb-2">
                    Ready To Get Started?
                  </h4>
                  <p className="text-[14px] text-black leading-relaxed">
                    It is a long established fact that a reader will be distracted
                    layout.
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
                        href="mailto:connect@akshdigital.com"
                        className="text-[14px] text-slate-600 hover:text-primary block font-medium transition-colors truncate"
                      >
                        connect@akshdigital.com
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
                        href="tel:+88012365478900"
                        className="text-[14px] text-slate-600 hover:text-primary block font-medium transition-colors"
                      >
                        +880 123 654 789 00
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2 col-span-3 mt-5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">SEO Company in</p>
              <div className="flex flex-wrap gap-2">
                We deliver to : pan india across
                {[
                  { label: "Jaipur", href: "/seo-services/jaipur" },
                  { label: "Delhi", href: "/seo-services/delhi" },
                  { label: "Mumbai", href: "/seo-services/mumbai" },
                  { label: "Bangalore", href: "/seo-services/bangalore" },
                  { label: "Pune", href: "/seo-services/pune" },
                  { label: "Indore", href: "/seo-services/indore" },
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
            Copyright © 2026 Aksh Digital – Digital Marketing Agency in Jaipur. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 lg:mr-20">
            <a
              href="#"
              className="p-2 hover:bg-slate-200/60 rounded-full transition-colors duration-200 text-black hover:text-primary"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-slate-200/60 rounded-full transition-colors duration-200 text-black hover:text-primary"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-slate-200/60 rounded-full transition-colors duration-200 text-black hover:text-primary"
              aria-label="Linkedin"
            >
              <LinkedinIcon />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-slate-200/60 rounded-full transition-colors duration-200 text-black hover:text-primary"
              aria-label="Pinterest"
            >
              <PinterestIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </>

  );
}
