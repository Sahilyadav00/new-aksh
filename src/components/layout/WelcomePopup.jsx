"use client";

import React, { useState, useEffect } from "react";
import { X, Send, Check, Loader2, Sparkles } from "lucide-react";
import { getCookie, setCookie } from "../../lib/cookies";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, loading, success
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "seo",
    message: "",
  });

  useEffect(() => {
    // Check if the popup was already dismissed
    const dismissed = getCookie("welcome_popup_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

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
          service: "seo",
          message: "",
        });
        // Auto close after 3 seconds on success
        setTimeout(() => {
          handleClose();
        }, 3000);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal Box */}
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.15)] border border-slate-100 max-w-lg w-full z-10 flex flex-col max-h-[90vh] animate-scale-up">
        {/* Header section with brand colors */}
        <div className="relative bg-linear-to-r from-primary to-secondary px-6 py-4 text-white text-center">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>
          {/* <div className="mx-auto w-12 h-12 rounded-full bg-white/70 flex items-center justify-center text-[#ff6a55] mb-3">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div> */}
          <h3 className="text-xl sm:text-2xl font-bold">Claim Your Free Growth Audit!</h3>
      
        </div>

        {/* Scrollable Form area */}
        <div className="p-6 overflow-y-auto flex-1">
          {status === "success" ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <Check className="w-8 h-8" strokeWidth={3} />
              </div>
              <h4 className="text-xl font-bold text-emerald-800">Request Received!</h4>
              <p className="text-slate-600 text-sm max-w-xs mx-auto leading-relaxed">
                Thank you! Our growth experts will review your website details and email your free strategy audit report shortly.
              </p>
              <p className="text-xs text-slate-400">Closing this popup shortly...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="popup-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="popup-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="popup-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="popup-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-slate-800"
                  />
                </div>
                <div>
                  <label htmlFor="popup-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="popup-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="popup-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Service of Interest
                </label>
                <select
                  id="popup-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-slate-800 bg-white"
                >
                  <option value="seo">Search Engine Optimization (SEO)</option>
                  <option value="local-seo">Local SEO & GMB Optimization</option>
                  <option value="google-ads">Google Ads & PPC Campaigns</option>
                  <option value="social-media">Social Media & Meta Ads</option>
                  <option value="web-dev">Website Development & CRO</option>
                </select>
              </div>

              <div>
                <label htmlFor="popup-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Message / Website URL (Optional)
                </label>
                <textarea
                  id="popup-message"
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Website link or comments..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-slate-800 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-xs font-semibold text-center">
                  Failed to send details. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full mt-2 bg-gradient-to-r from-primary to-secondary text-white font-bold py-3.5 px-6 rounded-xl hover:shadow-[0_4px_20px_rgba(210,92,65,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wider"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending details...
                  </>
                ) : (
                  <>
                    Claim My Free Audit
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
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
            transform: scale(0.95) translateY(10px);
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
