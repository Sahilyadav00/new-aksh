import Link from "next/link";
import { ArrowRight, CalendarDays, Globe, Mail, MapPin, Phone, RefreshCw } from "lucide-react";

// Shared layout for legal pages (Terms & Conditions, Privacy Policy, ...).
// Styled after the home page: warm gradient hero, white cards, dark CTA banner.

const contactItems = [
  { Icon: Globe, label: "Website", value: "www.akshdigital.in", href: "/" },
  { Icon: Mail, label: "Email", value: "akshdigital9@gmail.com", href: "mailto:akshdigital9@gmail.com" },
  { Icon: Phone, label: "Phone", value: "+91 95499 49918", href: "tel:+919549949918" },
  {
    Icon: MapPin,
    label: "Business Address",
    value: "Jaipur, Rajasthan, India",
    href: "https://maps.google.com/?q=Jaipur,Rajasthan,India",
  },
];

const isExternal = (href) => /^https?:\/\//.test(href);

// Inline link for use inside section content (internal or external).
export function TextLink({ href, children }) {
  const className = "font-semibold text-primary hover:underline";
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function TocList({ sections }) {
  return (
    <ol className="space-y-0.5 text-[13.5px]">
      {sections.map((section, idx) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="flex items-start gap-2.5 rounded-lg px-2.5 py-1.5 text-slate-600 hover:bg-orange-50 hover:text-primary transition-colors"
          >
            <span className="w-5 shrink-0 font-semibold text-primary/70 tabular-nums">{idx + 1}.</span>
            <span className="leading-snug">{section.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

// Block types: { p }, { h3 }, { ul, columns? }, { table: { head, rows } }
function Block({ block }) {
  if (block.h3) {
    return <h3 className="pt-2 text-base sm:text-[17px] font-semibold text-slate-900">{block.h3}</h3>;
  }
  if (block.ul) {
    return (
      <ul className={`grid gap-x-6 gap-y-2.5 ${block.columns ? "sm:grid-cols-2" : ""}`}>
        {block.ul.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2.25 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.table) {
    return (
      <div className="overflow-x-auto rounded-2xl border border-slate-200/70">
        <table className="w-full min-w-[560px] border-collapse text-left text-[14px]">
          <thead className="bg-[#faf8f5] text-[12px] uppercase tracking-wider text-slate-500">
            <tr>
              {block.table.head.map((h) => (
                <th key={h} className="whitespace-nowrap px-4 py-3 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {block.table.rows.map((row, r) => (
              <tr key={r} className="align-top">
                {row.map((cell, c) => (
                  <td key={c} className={`px-4 py-3 ${c === 0 ? "font-semibold text-slate-800" : ""}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return <p>{block.p}</p>;
}

function ContactCards() {
  return (
    <div className="pt-1">
      <p className="mb-3 font-semibold text-slate-900">Aksh Digital</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {contactItems.map(({ Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            {...(isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-[#faf8f5] p-4 hover:border-primary/40 hover:bg-white transition-all"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</span>
              <span className="block break-words font-semibold text-slate-800 group-hover:text-primary transition-colors">
                {value}
              </span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function LegalPage({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  highlight,
  intro,
  effectiveDate,
  lastUpdated,
  introNote,
  sections,
  closingNote,
  cta,
}) {
  return (
    <>
      {/* Hero — same warm gradient + dotted pattern as the home hero */}
      <section className="relative w-full overflow-hidden bg-linear-to-b from-[#fdfaf8] via-[#faf7f3] to-[#f8f4ed] border-b border-orange-100/60 px-4 sm:px-6 md:px-8 py-14">
        <div
          className="pointer-events-none absolute -top-24 right-0 h-[480px] w-[480px] rounded-full bg-linear-to-br from-orange-200/20 via-amber-100/15 to-transparent blur-3xl"
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

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-slate-700">{`${title} ${highlight}`}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/70 text-orange-600 text-xs sm:text-[13px] font-semibold tracking-wide shadow-2xs">
            <BadgeIcon className="w-3.5 h-3.5" strokeWidth={2.5} />
            <span>{badgeText}</span>
          </div>

          <h1 className="text-[34px] sm:text-[46px] md:text-[56px] font-semibold text-slate-900 leading-[1.1] mt-5 mb-5 tracking-tight">
            {title}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#e85b2e] via-[#ee7439] to-[#f58d4a]">
              {highlight}
            </span>
          </h1>

          <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed max-w-2xl mx-auto">{intro}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[13px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-4 py-2 font-medium text-slate-700 shadow-xs">
              <CalendarDays className="h-4 w-4 text-primary" />
              Effective Date: <span className="font-semibold text-slate-900">{effectiveDate}</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-4 py-2 font-medium text-slate-700 shadow-xs">
              <RefreshCw className="h-4 w-4 text-primary" />
              Last Updated: <span className="font-semibold text-slate-900">{lastUpdated}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full bg-linear-to-b from-[#f8f4ed] via-[#faf8f5] to-white px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Table of Contents */}
          <aside className="lg:col-span-4 xl:col-span-3">
            {/* Mobile: collapsible */}
            <details className="group rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] lg:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-800">
                On This Page
                <ArrowRight className="h-4 w-4 text-primary transition-transform group-open:rotate-90" />
              </summary>
              <div className="mt-3 border-t border-slate-100 pt-3">
                <TocList sections={sections} />
              </div>
            </details>

            {/* Desktop: sticky */}
            <nav
              aria-label="Table of contents"
              className="sticky top-28 hidden max-h-[calc(100vh-8rem)] overflow-y-auto rounded-3xl border border-slate-200/70 bg-white/85 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-md lg:block"
            >
              <div className="mb-3 flex items-center gap-2 px-2.5">
                <span className="h-0.5 w-5 rounded-full bg-primary" />
                <span className="text-[13px] font-semibold uppercase tracking-wider text-primary">On This Page</span>
              </div>
              <TocList sections={sections} />
            </nav>
          </aside>

          {/* Sections */}
          <div className="space-y-5 lg:col-span-8 xl:col-span-9">
            {introNote && (
              <div className="rounded-3xl border border-orange-100 bg-orange-50/60 p-6 sm:p-7 text-[15px] leading-relaxed text-slate-700">
                {introNote}
              </div>
            )}

            {sections.map((section, idx) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-28 rounded-3xl border border-slate-200/70 bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
              >
                <div className="mb-4 flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary to-secondary text-sm font-bold text-white shadow-md shadow-primary/20">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="pt-1.5 text-xl sm:text-[22px] font-semibold leading-snug text-slate-900">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4 text-[15px] leading-relaxed text-slate-600 sm:pl-14">
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                  {section.contact && <ContactCards />}
                </div>
              </article>
            ))}

            {closingNote && (
              <p className="rounded-2xl border-l-4 border-primary bg-white p-5 sm:p-6 text-[15px] font-medium leading-relaxed text-slate-700 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
                {closingNote}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA — matches the home page banner */}
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
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary">{cta.eyebrow}</span>
            <span className="flex gap-1" aria-hidden="true">
              <span className="h-0.5 w-6 rounded-full bg-primary/70" />
              <span className="h-0.5 w-4 rounded-full bg-primary/50" />
              <span className="h-0.5 w-2 rounded-full bg-primary/30" />
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold leading-tight tracking-tight">
            {cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">{cta.text}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/"
              className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-primary to-secondary px-9 py-4 text-base font-bold text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_35px_rgba(210,92,65,0.5)] sm:w-auto"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={2.5} />
            </Link>
            <a
              href="mailto:akshdigital9@gmail.com"
              className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-primary" />
              akshdigital9@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
