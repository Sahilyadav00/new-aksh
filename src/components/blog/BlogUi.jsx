import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

// Small building blocks shared by /blog and /blog/[slug], styled after the home page.

export const DEFAULT_AUTHOR = "Aksh Digital Team";

export const GRADIENT_TEXT =
  "text-transparent bg-clip-text bg-linear-to-r from-[#e85b2e] via-[#ee7439] to-[#f58d4a]";

// Glows + dotted pattern used behind the home hero.
export function HeroBackdrop() {
  return (
    <>
      <div
        className="pointer-events-none absolute -top-24 right-0 h-120 w-120 rounded-full bg-linear-to-br from-orange-200/25 via-amber-100/15 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#d97757 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
    </>
  );
}

// "Label ——" eyebrow used above home section headings.
export function Eyebrow({ children, center = false }) {
  const bars = (reverse) => (
    <span className={`flex gap-1 ${reverse ? "flex-row-reverse" : ""}`} aria-hidden="true">
      <span className="h-0.5 w-6 rounded-full bg-primary/70" />
      <span className="h-0.5 w-4 rounded-full bg-primary/50" />
      <span className="h-0.5 w-2 rounded-full bg-primary/30" />
    </span>
  );
  return (
    <div className={`flex items-center gap-2 ${center ? "justify-center" : ""}`}>
      {center && bars(true)}
      <span className="text-sm font-semibold text-primary sm:text-[15px]">{children}</span>
      {bars(false)}
    </div>
  );
}

export function CategoryPill({ children, className = "" }) {
  if (!children) return null;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 text-xs font-semibold tracking-wide text-orange-600 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" />
      {children}
    </span>
  );
}

export function AuthorAvatar({ name, className = "h-8 w-8 text-[11px]" }) {
  const initials =
    (name || DEFAULT_AUTHOR)
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("") || "AD";
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary font-bold text-white ring-2 ring-white ${className}`}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

// Dark closing banner, same look as the home page's final CTA.
export function BlogCtaBanner({ eyebrow, title, text, buttonLabel = "Book Your Free Consultation & Audit" }) {
  return (
    <section className="relative w-full overflow-hidden border-t border-slate-800 bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8">
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-mesh-1"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-secondary/15 blur-3xl animate-mesh-2"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-5 flex items-center justify-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">{eyebrow}</span>
          <span className="flex gap-1" aria-hidden="true">
            <span className="h-0.5 w-6 rounded-full bg-primary/70" />
            <span className="h-0.5 w-4 rounded-full bg-primary/50" />
            <span className="h-0.5 w-2 rounded-full bg-primary/30" />
          </span>
        </div>
        <h2 className="mx-auto max-w-3xl text-[28px] font-semibold leading-tight tracking-tight text-white sm:text-[36px] md:text-[42px]">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{text}</p>

        <div className="mt-9 flex justify-center">
          <Link
            href="/contact/"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-primary to-secondary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_35px_rgba(210,92,65,0.5)] sm:w-auto"
          >
            <span>{buttonLabel}</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={2.5} />
          </Link>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-6 border-t border-slate-800/80 pt-6 text-xs text-slate-400 sm:text-sm">
          <a href="mailto:akshdigital9@gmail.com" className="flex items-center gap-2 transition-colors hover:text-white">
            <Mail className="h-4 w-4 text-primary" />
            akshdigital9@gmail.com
          </a>
          <span className="hidden text-slate-600 sm:inline">•</span>
          <span className="flex items-center gap-2 text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            WhatsApp Support Available
          </span>
        </div>
      </div>
    </section>
  );
}
