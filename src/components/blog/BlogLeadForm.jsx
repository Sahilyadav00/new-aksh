"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { Check, Loader2, Send, ShieldCheck, Sparkles } from "lucide-react";

const SERVICES = [
  { value: "seo", label: "SEO & Organic Search" },
  { value: "performance", label: "Performance Marketing (Google & Meta Ads)" },
  { value: "web-dev", label: "Web & Mobile App Development" },
  { value: "social-media", label: "Social Media Marketing & Brand Design" },
  { value: "full-service", label: "Full-Service Digital Transformation" },
];

// Pre-select the service that matches the article being read.
const SERVICE_BY_CATEGORY = {
  SEO: "seo",
  "Performance Marketing": "performance",
  "Web Development": "web-dev",
  "Social Media": "social-media",
  "Graphic Design": "social-media",
  "Digital Marketing": "full-service",
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
const labelClass = "mb-1.5 block text-xs font-semibold text-slate-700";

// Compact lead form for the article sidebar. Posts the same payload as the
// Contact page form to /api/contacts.
export default function BlogLeadForm({ category }) {
  const id = useId();
  const defaultService = SERVICE_BY_CATEGORY[category] || "seo";
  const emptyForm = { name: "", email: "", phone: "", website: "", service: defaultService, message: "" };

  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData(emptyForm);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error", error);
      setStatus("error");
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-orange-200/70 bg-linear-to-br from-white via-white to-orange-50/60 p-5 shadow-[0_20px_50px_-20px_rgba(210,92,65,0.25)] sm:p-6">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-200/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-orange-600">
          <Sparkles className="h-3 w-3" strokeWidth={2.5} />
          Free Growth Audit
        </span>
        <h2 className="mt-3 text-xl font-semibold leading-snug text-[#14183e]">
          Want results like these for your business?
        </h2>
        <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">
          Share a few details and our specialists will reach out within 24 hours with a custom growth plan.
        </p>

        {status === "success" ? (
          <div className="mt-5 space-y-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-center" role="status">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
              <Check className="h-6 w-6" strokeWidth={3} />
            </div>
            <h3 className="text-lg font-bold text-emerald-800">Request Received!</h3>
            <p className="text-sm text-emerald-700">
              Thank you! Our growth experts will review your details and get in touch within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="cursor-pointer text-sm font-semibold text-emerald-600 underline transition-colors hover:text-emerald-800"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
            <div>
              <label htmlFor={`${id}-name`} className={labelClass}>
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id={`${id}-name`}
                name="name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor={`${id}-email`} className={labelClass}>
                Business Email <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                id={`${id}-email`}
                name="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor={`${id}-phone`} className={labelClass}>
                Phone / WhatsApp <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                id={`${id}-phone`}
                name="phone"
                required
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor={`${id}-service`} className={labelClass}>
                Service Needed
              </label>
              <select
                id={`${id}-service`}
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={inputClass}
              >
                {SERVICES.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={`${id}-message`} className={labelClass}>
                Message
              </label>
              <textarea
                id={`${id}-message`}
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your goals or current challenges..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "error" && (
              <p className="text-center text-sm font-semibold text-red-500" role="alert">
                Failed to submit request. Please try again or call us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#e85b2e] via-[#ee7439] to-[#f58d4a] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(232,91,46,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-5px_rgba(232,91,46,0.6)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Get My Free Strategy Call
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                </>
              )}
            </button>

            <p className="flex items-start justify-center gap-1.5 text-center text-[11px] leading-relaxed text-slate-500">
              <ShieldCheck className="mt-px h-3.5 w-3.5 shrink-0 text-emerald-500" />
              <span>
                By submitting this form, you agree to our{" "}
                <Link href="/terms-and-conditions/" className="font-semibold text-primary hover:underline">
                  Terms &amp; Conditions
                </Link>
                .
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
