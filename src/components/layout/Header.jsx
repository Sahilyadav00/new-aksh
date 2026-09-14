"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search, ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setExpandedItem(null);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setExpandedItem(null);
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
    { name: "About us", href: "/about/", hasDropdown: false },
    {
      name: "Services",
      href: "/services/",
      hasDropdown: true,
      dropdownItems: [
        { name: "SEO Services", href: "/services/seo/" },
        { name: "Performance Marketing", href: "/services/performance-marketing/" },
        { name: "Digital Marketing", href: "/services/digital-marketing/" },
        { name: "Social Media Marketing", href: "/services/social-media-marketing/" },
        { name: "Graphic Design", href: "/services/graphic-design/" },
        { name: "Web Development", href: "/services/web-development/" },
        { name: "App Development", href: "/services/app-development/" },
        // { name: "── SEO by City ──", href: "/services/seo/", isLabel: true },
        // { name: "SEO in Jaipur", href: "/seo-services/jaipur/" },
        // { name: "SEO in Delhi", href: "/seo-services/delhi/" },
        // { name: "SEO in Mumbai", href: "/seo-services/mumbai/" },
        // { name: "SEO in Bangalore", href: "/seo-services/bangalore/" },
        // { name: "SEO in Pune", href: "/seo-services/pune/" },
        // { name: "SEO in Indore", href: "/seo-services/indore/" },
        // { name: "SEO in Chandigarh", href: "/seo-services/chandigarh/" },
        // { name: "SEO in Kolkata", href: "/seo-services/kolkata/" },
        // { name: "SEO in Hyderabad", href: "/seo-services/hyderabad/" },
        // { name: "SEO in Chennai", href: "/seo-services/chennai/" },
        // { name: "SEO in Lucknow", href: "/seo-services/lucknow/" },
        // { name: "SEO in Bhiwadi & Alwar", href: "/seo-services/bhiwadi-alwar/" },
      ],
    },
    { name: "Portfolio", href: "/portfolio/", hasDropdown: false },
    { name: "Blog", href: "/blog/", hasDropdown: false },
    // { name: "FAQ", href: "/faq/", hasDropdown: false },
    // { name: "Contact", href: "/contact/", hasDropdown: false },
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
            href="/contact/"
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
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              if (mobileMenuOpen) setExpandedItem(null);
            }}
            className="p-2 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-xl transition-colors duration-200"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={2} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-40 md:hidden transition-opacity duration-300"
          onClick={() => {
            setMobileMenuOpen(false);
            setExpandedItem(null);
          }}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute left-0 right-0 top-full px-3 sm:px-6 pt-2 pb-4 z-50 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 p-4 sm:p-5 flex flex-col gap-3 max-h-[calc(100vh-5.5rem)] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                {item.hasDropdown ? (
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedItem(
                        expandedItem === item.name ? null : item.name,
                      )
                    }
                    className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl text-[15px] font-medium transition-all duration-200 text-left ${
                      expandedItem === item.name
                        ? "bg-slate-50 text-primary font-semibold"
                        : "text-slate-800 hover:text-primary hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        expandedItem === item.name
                          ? "rotate-180 text-primary"
                          : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setExpandedItem(null);
                    }}
                    className="flex items-center justify-between py-2.5 px-3.5 rounded-xl text-slate-800 hover:text-primary hover:bg-slate-50 font-medium text-[15px] transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Mobile Dropdown Sub-menu */}
                {item.hasDropdown &&
                  item.dropdownItems &&
                  expandedItem === item.name && (
                    <div className="flex flex-col gap-1 pl-3 pr-1 py-1 mt-1 border-l-2 border-primary/25 ml-4">
                      <Link
                        href={item.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setExpandedItem(null);
                        }}
                        className="flex items-center justify-between py-2 px-3 rounded-lg text-[13.5px] font-semibold text-primary hover:bg-primary/5 transition-colors"
                      >
                        <span>All {item.name} Overview</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      {item.dropdownItems.map((dropItem) =>
                        dropItem.isLabel ? (
                          <div key={dropItem.name} className="px-3 pt-2 pb-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                              {dropItem.name.replace(/^[─\s]+|[─\s]+$/g, "")}
                            </span>
                            <div className="mt-1 h-px bg-slate-100" />
                          </div>
                        ) : (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setExpandedItem(null);
                            }}
                            className="py-2 px-3 rounded-lg text-[13.5px] text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors"
                          >
                            {dropItem.name}
                          </Link>
                        ),
                      )}
                    </div>
                  )}
              </div>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <Link
              href="/contact/"
              onClick={() => {
                setMobileMenuOpen(false);
                setExpandedItem(null);
              }}
              className="flex items-center justify-center bg-linear-to-r from-primary to-secondary text-white py-3.5 rounded-xl font-semibold text-center shadow-lg shadow-primary/15 hover:shadow-primary/25 transition-all duration-200"
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
