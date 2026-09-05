"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search, ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const menuItems = [
    { name: "Home", href: "/", hasDropdown: false },
    { name: "About us", href: "/about", hasDropdown: false },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "SEO Strategies", href: "/services/seo-strategies" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "Social Media", href: "/services/social-media" },
        { name: "Graphic Design", href: "/services/graphic-design" },
        { name: "Web Development", href: "/services/web-development" },
        { name: "App Development", href: "/services/app-development" },
        { name: "Performance Marketing", href: "/services/performance-marketing" },
        { name: "── SEO by City ──", href: "/services/seo-strategies", isLabel: true },
        { name: "SEO in Jaipur", href: "/seo-services/jaipur" },
        { name: "SEO in Delhi", href: "/seo-services/delhi" },
        { name: "SEO in Mumbai", href: "/seo-services/mumbai" },
        { name: "SEO in Bangalore", href: "/seo-services/bangalore" },
        { name: "SEO in Pune", href: "/seo-services/pune" },
        { name: "SEO in Indore", href: "/seo-services/indore" },
      ],
    },
    { name: "Portfolio", href: "/portfolio", hasDropdown: false },
    { name: "Blog", href: "/blog", hasDropdown: false },
    // { name: "FAQ", href: "/faq", hasDropdown: false },
    // { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  return (
    <header ref={headerRef} className="relative z-50">
      <div className="max-w-384 mx-auto bg-white shadow-[0_12px_40px_-15px_rgba(0,0,0,0.06)] border border-slate-100/90 px-3 sm:px-6 md:px-8 py-3 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/assets/images/logo/logo.png"
            alt="AKSH DIGITAL Logo"
            width={160}
            height={44}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group py-2">
              <Link
                href={item.href}
                className="flex items-center text-[15px] font-medium text-slate-800 hover:text-primary transition-colors duration-200"
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 ml-1 text-slate-400 group-hover:text-primary transition-colors duration-200" />
                )}
              </Link>

              {/* Dropdown Menu */}
              {item.hasDropdown && item.dropdownItems && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 max-h-[80vh] overflow-y-auto">
                  <div className="py-2">
                    {item.dropdownItems.map((dropItem) =>
                      dropItem.isLabel ? (
                        <div key={dropItem.name} className="px-4 pt-3 pb-1">
                          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                            SEO by City
                          </span>
                          <div className="mt-1 h-px bg-slate-100" />
                        </div>
                      ) : (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-4 py-2 text-[14px] text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors duration-200"
                        >
                          {dropItem.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side actions (Desktop) */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          {/* Search Icon */}
          {/* <button
            className="p-2 hover:bg-slate-50 rounded-full transition-colors duration-200 group"
            aria-label="Search"
          >
            <Search
              className="w-5 h-5 text-slate-700 group-hover:text-primary transition-colors duration-200"
              strokeWidth={2.2}
            />
          </button> */}

          {/* Gradient CTA Button */}
          <Link
            href="/contact"
            className="group flex items-center bg-linear-to-r from-primary to-secondary text-white px-7 py-3 rounded-full font-semibold text-[15px] hover:shadow-[0_4px_18px_-4px_rgba(210,92,65,0.35)]  transition-all duration-300"
          >
            Get Started
            <ArrowRight
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            className="p-2 hover:bg-slate-50 rounded-full transition-colors duration-200"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-slate-700" strokeWidth={2.2} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-slate-50 rounded-full transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.8} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute left-0 right-0 top-16.5 overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-112.5 opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-5 flex flex-col gap-4">
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (!item.hasDropdown) setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between py-2 px-3 rounded-lg text-slate-800 hover:text-primary hover:bg-slate-50 font-medium transition-all duration-200"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </Link>
                {/* Mobile Dropdown Sub-menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className="flex flex-col gap-0.5 pl-4 mt-1 border-l-2 border-slate-100 ml-4">
                    {item.dropdownItems.map((dropItem) =>
                      dropItem.isLabel ? (
                        <div key={dropItem.name} className="px-3 pt-2 pb-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">SEO by City</span>
                          <div className="mt-1 h-px bg-slate-100" />
                        </div>
                      ) : (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-2 px-3 rounded-lg text-[14px] text-slate-600 hover:text-primary hover:bg-slate-50 transition-all duration-200"
                        >
                          {dropItem.name}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center bg-linear-to-r from-primary to-secondary text-white py-3 rounded-xl font-semibold text-center shadow-lg"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
