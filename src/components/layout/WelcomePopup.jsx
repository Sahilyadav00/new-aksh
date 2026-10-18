"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Send,
  Check,
  Loader2,
  Sparkles,
  User,
  Mail,
  Phone,
  Globe,
  Briefcase,
  ShieldCheck,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { getCookie, setCookie } from "../../lib/cookies";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    service: "seo",
    message: "",
  });

  useEffect(() => {
    // Check if the popup was already dismissed
    const dismissed = getCookie("welcome_popup_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2500); // 2.5 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setCookie("welcome_popup_dismissed", "true", 30);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          website: "",
          service: "seo",
          message: "",
        });
        // Auto close after 2.8 seconds on success
        setTimeout(() => {
          handleClose();
        }, 2800);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error", error);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Modern Frosted Dark Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/65 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Glassmorphic Modal Box Container */}
      <div className="relative w-full max-w-lg my-auto rounded-3xl overflow-hidden bg-white/85 backdrop-blur-2xl border border-white/80 shadow-[0_25px_60px_-15px_rgba(20,24,62,0.35),0_0_0_1px_rgba(255,255,255,0.7)_inset] z-10 flex flex-col max-h-[92vh] animate-scale-up">
        {/* Specular top light streak */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white to-transparent pointer-events-none z-20" />

        {/* Ambient Glowing Color Orbs behind the frosted glass */}
        <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-amber-400/10 blur-2xl pointer-events-none" />

        {/* Floating Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-white/70 hover:bg-white text-slate-500 hover:text-slate-800 border border-slate-200/80 backdrop-blur-md shadow-xs flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Close popup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Section */}
        <div className="relative px-6 sm:px-8 pt-6 pb-2 text-center z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-[11px] font-bold uppercase tracking-wider backdrop-blur-md mb-2 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span>Limited Free Opportunity</span>
          </div>

          <h3 className="text-xl sm:text-[22px] font-black text-[#14183e] tracking-tight leading-snug">
            Claim Your Free Growth &amp; SEO Audit
          </h3>

          <p className="mt-1 text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
            Get actionable insights into keyword rankings, ad ROI leaks, and
            conversion opportunities from our senior strategists.
          </p>
        </div>

        {/* Form Body */}
        <div className="px-6 sm:px-8 pb-5 pt-2 overflow-y-auto flex-1 z-10 scrollbar-none">
          {status === "success" ? (
            <div className="py-8 text-center space-y-3.5">
              <div className="w-14 h-14 bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/15">
                <Check className="w-7 h-7" strokeWidth={3} />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Audit Request Received!
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm max-w-xs mx-auto leading-relaxed">
                Thank you! Our growth experts will analyze your digital footprint
                and deliver a custom strategy roadmap within 24 hours.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50/90 border border-emerald-200/60 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Report reserved for {formData.email || "your email"}</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
              {/* Name */}
              <div>
                <label
                  htmlFor="popup-name"
                  className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1"
                >
                  Full Name <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    id="popup-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-10 pr-3.5 py-2 rounded-xl bg-white/70 backdrop-blur-md border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/15 transition-all shadow-2xs"
                  />
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label
                    htmlFor="popup-email"
                    className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1"
                  >
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      id="popup-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full pl-10 pr-3.5 py-2 rounded-xl bg-white/70 backdrop-blur-md border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/15 transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="popup-phone"
                    className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1"
                  >
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      id="popup-phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-3.5 py-2 rounded-xl bg-white/70 backdrop-blur-md border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/15 transition-all shadow-2xs"
                    />
                  </div>
                </div>
              </div>

              {/* Website URL (Optional) */}
              <div>
                <label
                  htmlFor="popup-website"
                  className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1"
                >
                  Website / Domain URL{" "}
                  <span className="text-slate-400 font-normal lowercase">
                    (optional)
                  </span>
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    id="popup-website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                    className="w-full pl-10 pr-3.5 py-2 rounded-xl bg-white/70 backdrop-blur-md border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/15 transition-all shadow-2xs"
                  />
                </div>
              </div>

              {/* Service of Interest */}
              <div>
                <label
                  htmlFor="popup-service"
                  className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1"
                >
                  Primary Focus Area
                </label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    id="popup-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3.5 py-2 rounded-xl bg-white/70 backdrop-blur-md border border-slate-200/90 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/15 transition-all shadow-2xs cursor-pointer"
                  >
                    <option value="seo">Search Engine Optimization (SEO)</option>
                    <option value="performance-marketing">
                      Performance Marketing (Meta &amp; Google Ads)
                    </option>
                    <option value="web-dev">
                      Web &amp; Mobile App Development
                    </option>
                    <option value="local-seo">
                      Local SEO &amp; Google My Business
                    </option>
                    <option value="full-funnel">
                      Full-Funnel Growth Architecture
                    </option>
                  </select>
                </div>
              </div>

              {status === "error" && (
                <div className="p-2 rounded-xl bg-red-50/80 border border-red-200/80 text-red-600 text-xs font-semibold text-center backdrop-blur-sm">
                  Failed to send details. Please check your info and try again.
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full mt-1.5 bg-linear-to-r from-primary via-[#e24e33] to-secondary text-white font-bold py-3 px-6 rounded-xl shadow-[0_10px_25px_-5px_rgba(210,92,65,0.45)] hover:shadow-[0_15px_30px_-5px_rgba(210,92,65,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm uppercase tracking-wider"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Generating Audit Request...
                  </>
                ) : (
                  <>
                    <span>Claim My Free Growth Audit</span>
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>

              {/* Trust micro-badges */}
              <div className="pt-1.5 flex items-center justify-center gap-4 text-[10px] sm:text-[11px] font-semibold text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  100% Free
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  No Obligation
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-secondary" />
                  24h Turnaround
                </span>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Embedded slide/scale/fade animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
        .animate-scale-up {
          animation: scaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
