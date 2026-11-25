"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  Check,
  Edit2,
  EyeOff,
  Globe,
  Loader2,
  RotateCcw,
  Search,
  X,
} from "lucide-react";
import { PAGE_GROUPS, SITE_URL } from "@/lib/site-pages";

const META_TITLE_LIMIT = 60;
const META_DESCRIPTION_LIMIT = 160;

const EMPTY_FORM = { metaTitle: "", metaDescription: "", metaKeywords: "", noindex: false };

function hasCustomText(override) {
  return Boolean(override?.metaTitle || override?.metaDescription || override?.metaKeywords?.length);
}

function formatDate(iso) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function CharCount({ value, limit }) {
  return (
    <span className={`text-[11px] font-semibold ${value.length > limit ? "text-amber-600" : "text-slate-400"}`}>
      {value.length}/{limit}
    </span>
  );
}

// Admin → Page SEO: edit title, description, keywords and "Hide from Google" for every
// page in src/lib/site-pages.js. Blog posts are edited in Manage Blogs instead.
export default function PageSeoManager() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [search, setSearch] = useState("");
  const [notice, setNotice] = useState("");

  const [editing, setEditing] = useState(null); // page being edited
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/admin/page-meta");
        if (!res.ok) {
          throw new Error(res.status === 401 ? "Your session has expired. Please sign in again." : "Could not load pages.");
        }
        const data = await res.json();
        if (!cancelled) setPages(data);
      } catch (err) {
        if (!cancelled) setLoadError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return pages;
    return pages.filter((p) =>
      [p.label, p.path, p.override?.metaTitle || p.title].some((v) => v.toLowerCase().includes(q)),
    );
  }, [pages, search]);

  const customCount = pages.filter((p) => hasCustomText(p.override)).length;
  const hiddenCount = pages.filter((p) => p.override?.noindex).length;

  function openEditor(page) {
    setEditing(page);
    setForm({
      metaTitle: page.override?.metaTitle || "",
      metaDescription: page.override?.metaDescription || "",
      metaKeywords: (page.override?.metaKeywords || []).join(", "),
      noindex: Boolean(page.override?.noindex),
    });
    setSaveError("");
  }

  function closeEditor() {
    if (!saving) setEditing(null);
  }

  function applySaved(path, override) {
    setPages((prev) => prev.map((p) => (p.path === path ? { ...p, override } : p)));
  }

  async function save(payload) {
    setSaving(true);
    setSaveError("");
    try {
      const res = await fetch("/api/admin/page-meta", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: editing.path, ...payload }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to save");
      applySaved(editing.path, data.override);
      setNotice(
        data.override
          ? `Saved SEO for ${editing.label}. The live page updates on its next visit.`
          : `${editing.label} is back to its default SEO.`,
      );
      setEditing(null);
    } catch (err) {
      setSaveError(err.message);
    } finally {
      setSaving(false);
    }
  }

  function handleReset() {
    if (window.confirm(`Reset ${editing.label} to its default title and description?`)) {
      save(EMPTY_FORM);
    }
  }

  if (loading) {
    return (
      <div className="h-96 flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 animate-spin text-[#d25c41]" />
        <p className="text-slate-400 text-sm">Loading pages...</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-semibold flex items-center gap-2">
        <AlertCircle className="w-4 h-4 shrink-0" />
        {loadError}
      </div>
    );
  }

  // Live preview values for the editor
  const previewTitle = editing ? form.metaTitle.trim() || editing.title : "";
  const previewDescription = editing ? form.metaDescription.trim() || editing.description : "";

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: "Pages", value: pages.length, tone: "bg-blue-50 text-blue-500", Icon: Globe },
          { label: "Custom SEO", value: customCount, tone: "bg-orange-50 text-[#d25c41]", Icon: Edit2 },
          { label: "Hidden from Google", value: hiddenCount, tone: "bg-red-50 text-red-500", Icon: EyeOff },
        ].map(({ label, value, tone, Icon }) => (
          <div key={label} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</span>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{value}</h3>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tone}`}>
              <Icon className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>

      {notice && (
        <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-xl text-xs font-semibold flex items-center gap-2">
          <Check className="w-4 h-4 shrink-0" />
          <span className="flex-1">{notice}</span>
          <button onClick={() => setNotice("")} className="text-emerald-600 hover:text-emerald-800" aria-label="Dismiss">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Search */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search pages by name, URL or title..."
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 text-sm focus:outline-none focus:border-[#d25c41] focus:bg-white transition-all"
          />
        </div>
        <p className="text-xs text-slate-400 sm:max-w-xs">
          Blog posts have their own SEO fields in <span className="font-semibold text-slate-500">Manage Blogs</span>.
        </p>
      </div>

      {/* Pages by group */}
      {PAGE_GROUPS.map((group) => {
        const rows = filtered.filter((p) => p.group === group);
        if (!rows.length) return null;
        return (
          <section key={group} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <h2 className="px-5 py-3 border-b border-slate-100 bg-slate-50/70 text-xs font-bold text-slate-500 uppercase tracking-wider">
              {group} <span className="text-slate-400">({rows.length})</span>
            </h2>
            <ul className="divide-y divide-slate-100">
              {rows.map((page) => {
                const custom = hasCustomText(page.override);
                const hidden = Boolean(page.override?.noindex);
                return (
                  <li key={page.path} className="px-5 py-4 flex flex-col md:flex-row md:items-center gap-3 hover:bg-slate-50/60 transition-colors">
                    <div className="md:w-56 shrink-0">
                      <p className="font-bold text-slate-800 text-sm">{page.label}</p>
                      <a
                        href={page.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-400 hover:text-[#d25c41] break-all"
                      >
                        {page.path}
                      </a>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#1a0dab] truncate">
                        {page.override?.metaTitle || page.title}
                      </p>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {page.override?.metaDescription || page.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap md:justify-end md:w-64 shrink-0">
                      {custom ? (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-orange-50 text-[#d25c41] border border-orange-100">
                          Custom
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                          Default
                        </span>
                      )}
                      {hidden && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-100 inline-flex items-center gap-1">
                          <EyeOff className="w-3 h-3" /> Hidden
                        </span>
                      )}
                      {page.override?.updatedAt && (
                        <span className="text-[11px] text-slate-400">{formatDate(page.override.updatedAt)}</span>
                      )}
                      <button
                        onClick={() => openEditor(page)}
                        className="ml-auto md:ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 border border-slate-200 hover:border-[#d25c41] hover:text-[#d25c41] transition-colors"
                      >
                        <Edit2 className="w-3.5 h-3.5" /> Edit
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      {!filtered.length && (
        <div className="bg-white rounded-2xl border border-slate-100 p-10 text-center text-sm text-slate-400">
          No pages match &ldquo;{search}&rdquo;.
        </div>
      )}

      {/* Editor drawer */}
      {editing && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={closeEditor} />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              save(form);
            }}
            className="relative bg-white w-full max-w-2xl h-full shadow-[0_0_50px_rgba(0,0,0,0.15)] flex flex-col z-10 animate-slide-left"
          >
            <header className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div className="min-w-0">
                <h3 className="font-bold text-slate-800 text-lg">Edit SEO — {editing.label}</h3>
                <p className="text-[11px] text-slate-400 truncate">{SITE_URL}{editing.path}</p>
              </div>
              <button
                type="button"
                onClick={closeEditor}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-50 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              {saveError && (
                <div className="p-3 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-semibold">
                  {saveError}
                </div>
              )}

              <p className="text-xs text-slate-500 bg-slate-50 border border-slate-100 rounded-xl p-3">
                Leave a field empty to use the page&apos;s default (shown greyed out). Changes go live on the
                page&apos;s next visit.
              </p>

              {/* Meta Title */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="page-meta-title" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Meta Title
                  </label>
                  <CharCount value={form.metaTitle || editing.title} limit={META_TITLE_LIMIT} />
                </div>
                <input
                  id="page-meta-title"
                  type="text"
                  value={form.metaTitle}
                  onChange={(e) => setForm({ ...form, metaTitle: e.target.value })}
                  placeholder={editing.title}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl bg-white text-sm focus:outline-none focus:border-[#d25c41] transition-all"
                />
              </div>

              {/* Meta Description */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="page-meta-description" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Meta Description
                  </label>
                  <CharCount value={form.metaDescription || editing.description} limit={META_DESCRIPTION_LIMIT} />
                </div>
                <textarea
                  id="page-meta-description"
                  rows={4}
                  value={form.metaDescription}
                  onChange={(e) => setForm({ ...form, metaDescription: e.target.value })}
                  placeholder={editing.description}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl bg-white text-sm focus:outline-none focus:border-[#d25c41] transition-all resize-none"
                />
              </div>

              {/* Meta Keywords */}
              <div className="space-y-1.5">
                <label htmlFor="page-meta-keywords" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Meta Keywords
                </label>
                <input
                  id="page-meta-keywords"
                  type="text"
                  value={form.metaKeywords}
                  onChange={(e) => setForm({ ...form, metaKeywords: e.target.value })}
                  placeholder="e.g. SEO agency Jaipur, digital marketing company"
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl bg-white text-sm focus:outline-none focus:border-[#d25c41] transition-all"
                />
                <p className="text-[11px] text-slate-400">Comma-separated. Optional; no page has keywords by default.</p>
              </div>

              {/* Hide from Google */}
              <label className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 cursor-pointer hover:border-slate-300 transition-colors">
                <input
                  type="checkbox"
                  checked={form.noindex}
                  onChange={(e) => setForm({ ...form, noindex: e.target.checked })}
                  className="mt-0.5 h-4 w-4 accent-[#d25c41]"
                />
                <span>
                  <span className="block text-sm font-bold text-slate-800">Hide from Google</span>
                  <span className="block text-xs text-slate-500 mt-0.5">
                    Adds a &ldquo;noindex&rdquo; tag and removes the page from the sitemap. The page stays
                    visible to visitors.
                  </span>
                </span>
              </label>

              {/* Google preview */}
              <div className="space-y-1.5">
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Google preview</span>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  {form.noindex ? (
                    <p className="text-sm text-slate-400 flex items-center gap-2">
                      <EyeOff className="w-4 h-4" /> Hidden from Google: this page won&apos;t appear in search results.
                    </p>
                  ) : (
                    <>
                      <p className="text-xs text-slate-500 truncate">
                        {SITE_URL.replace("https://", "")}
                        {editing.path === "/" ? "" : ` › ${editing.path.split("/").filter(Boolean).join(" › ")}`}
                      </p>
                      <p className="text-lg text-[#1a0dab] leading-snug mt-0.5 line-clamp-1">{previewTitle}</p>
                      <p className="text-sm text-slate-600 leading-snug mt-1 line-clamp-2">{previewDescription}</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <footer className="px-6 py-4 border-t border-slate-100 flex items-center gap-3">
              {editing.override && (
                <button
                  type="button"
                  onClick={handleReset}
                  disabled={saving}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset to default
                </button>
              )}
              <div className="ml-auto flex items-center gap-3">
                <button
                  type="button"
                  onClick={closeEditor}
                  disabled={saving}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold text-white bg-[#d25c41] hover:bg-[#b94d35] shadow-lg shadow-[#d25c41]/20 transition-colors disabled:opacity-60"
                >
                  {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                  Save
                </button>
              </div>
            </footer>
          </form>
        </div>
      )}
    </div>
  );
}
