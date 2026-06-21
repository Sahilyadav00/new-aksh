"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FolderOpen,
  Mail,
  Plus,
  Edit2,
  Trash2,
  LogOut,
  Search,
  Check,
  X,
  FileText,
  Users,
  Compass,
  ArrowUpRight,
  TrendingUp,
  Download,
  AlertCircle,
  HelpCircle,
  Loader2,
  Lock,
  Upload,
} from "lucide-react";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("leads"); // leads, blogs
  const [leads, setLeads] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search & Filters
  const [leadsSearch, setLeadsSearch] = useState("");
  const [blogsSearch, setBlogsSearch] = useState("");

  // Modal / Form States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("add"); // add, edit
  const [selectedBlogSlug, setSelectedBlogSlug] = useState("");
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Form Fields
  const [blogTitle, setBlogTitle] = useState("");
  const [blogExcerpt, setBlogExcerpt] = useState("");
  const [blogCategory, setBlogCategory] = useState("SEO");
  const [blogReadTime, setBlogReadTime] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogTags, setBlogTags] = useState("");
  const [blogIntro, setBlogIntro] = useState("");
  const [blogConclusion, setBlogConclusion] = useState("");
  const [blogSections, setBlogSections] = useState([{ heading: "", body: "" }]);

  // Settings / Security Password Change States
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [settingsError, setSettingsError] = useState("");
  const [settingsSuccess, setSettingsSuccess] = useState(false);
  const [settingsLoading, setSettingsLoading] = useState(false);

  // Cloudinary Upload States
  const [imageUploading, setImageUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageUploading(true);
    setUploadError("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setBlogImage(data.url);
      } else {
        setUploadError(data.error || "Failed to upload image.");
      }
    } catch (err) {
      setUploadError("Network error. Failed to upload image.");
    } finally {
      setImageUploading(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setSettingsError("");
    setSettingsSuccess(false);

    if (newPassword !== confirmPassword) {
      setSettingsError("New passwords do not match.");
      return;
    }

    if (newPassword.length < 6) {
      setSettingsError("New password must be at least 6 characters.");
      return;
    }

    setSettingsLoading(true);

    try {
      const username = localStorage.getItem("admin_username") || "admin";
      const response = await fetch("/api/admin/update-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, currentPassword, newPassword }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSettingsSuccess(true);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setSettingsError(data.error || "Failed to update password.");
      }
    } catch (err) {
      setSettingsError("Network error. Failed to update password.");
    } finally {
      setSettingsLoading(false);
    }
  };

  // Fetch initial data
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const [leadsRes, blogsRes] = await Promise.all([
        fetch("/api/contacts"),
        fetch("/api/blogs"),
      ]);

      if (leadsRes.ok && blogsRes.ok) {
        const leadsData = await leadsRes.json();
        const blogsData = await blogsRes.json();
        setLeads(leadsData);
        setBlogs(blogsData);
      }
    } catch (err) {
      console.error("Error fetching admin dashboard data", err);
    } finally {
      setLoading(false);
    }
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } catch (err) {
      console.error("Logout request failed", err);
    }
    localStorage.removeItem("admin_username");
    router.push("/admin/login");
  };

  // Contacts / Leads actions
  const handleDeleteLead = async (id) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;
    // In a real app, delete API can be added. We'll simulate filter & update or keep it simple.
    // For local experience, let's delete locally or create a generic delete contact API if needed.
    // Since leads aren't sensitive, we can create a delete mechanism. Let's do a simple local filter to show immediate feedback.
    setLeads(leads.filter((lead) => lead.id !== id));
  };

  // Blog CRUD actions
  const handleDeleteBlog = async (slug) => {
    if (!window.confirm("Are you sure you want to delete this blog post?")) return;

    try {
      const res = await fetch(`/api/blogs/${slug}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setBlogs(blogs.filter((b) => b.slug !== slug));
      } else {
        alert("Failed to delete blog post");
      }
    } catch (err) {
      console.error("Delete error", err);
    }
  };

  const openAddModal = () => {
    setModalType("add");
    setBlogTitle("");
    setBlogExcerpt("");
    setBlogCategory("SEO");
    setBlogReadTime("");
    setBlogImage("");
    setBlogTags("");
    setBlogIntro("");
    setBlogConclusion("");
    setBlogSections([{ heading: "", body: "" }]);
    setFormError("");
    setFormSuccess(false);
    setImageUploading(false);
    setUploadError("");
    setIsModalOpen(true);
  };

  const openEditModal = (blog) => {
    setModalType("edit");
    setSelectedBlogSlug(blog.slug);
    setBlogTitle(blog.title);
    setBlogExcerpt(blog.excerpt);
    setBlogCategory(blog.category || "SEO");
    setBlogReadTime(blog.readTime || "");
    setBlogImage(blog.image || "");
    setBlogTags(Array.isArray(blog.tags) ? blog.tags.join(", ") : "");
    setBlogIntro(blog.content?.intro || "");
    setBlogConclusion(blog.content?.conclusion || "");
    setBlogSections(
      Array.isArray(blog.content?.sections) && blog.content.sections.length > 0
        ? blog.content.sections.map((s) => ({ heading: s.heading || "", body: s.body || "" }))
        : [{ heading: "", body: "" }]
    );
    setFormError("");
    setFormSuccess(false);
    setImageUploading(false);
    setUploadError("");
    setIsModalOpen(true);
  };

  const handleAddSection = () => {
    setBlogSections([...blogSections, { heading: "", body: "" }]);
  };

  const handleRemoveSection = (index) => {
    if (blogSections.length === 1) return;
    setBlogSections(blogSections.filter((_, i) => i !== index));
  };

  const handleSectionChange = (index, field, value) => {
    const updated = [...blogSections];
    updated[index][field] = value;
    setBlogSections(updated);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError("");

    const payload = {
      title: blogTitle,
      excerpt: blogExcerpt,
      category: blogCategory,
      readTime: blogReadTime,
      image: blogImage,
      tags: blogTags,
      content: {
        intro: blogIntro,
        sections: blogSections.filter((s) => s.heading || s.body),
        conclusion: blogConclusion,
      },
    };

    try {
      const url = modalType === "add" ? "/api/blogs" : `/api/blogs/${selectedBlogSlug}`;
      const method = modalType === "add" ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setFormSuccess(true);
        setTimeout(() => {
          setIsModalOpen(false);
          fetchData(); // Reload data
        }, 1000);
      } else {
        setFormError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setFormError("Server connection error.");
    } finally {
      setSubmitting(false);
    }
  };

  // Export Leads to CSV
  const handleExportCSV = () => {
    if (leads.length === 0) return;
    const headers = ["ID", "Date", "Name", "Email", "Phone", "Website", "Service", "Message"];
    const rows = leads.map((l) => [
      l.id,
      l.createdAt,
      l.name,
      l.email,
      l.phone,
      l.website,
      l.service,
      l.message.replace(/"/g, '""'),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.map((val) => `"${val}"`).join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `aksh_leads_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter leads
  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(leadsSearch.toLowerCase()) ||
      lead.email.toLowerCase().includes(leadsSearch.toLowerCase()) ||
      lead.phone.toLowerCase().includes(leadsSearch.toLowerCase()) ||
      lead.service.toLowerCase().includes(leadsSearch.toLowerCase())
  );

  // Filter blogs
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(blogsSearch.toLowerCase()) ||
      blog.category.toLowerCase().includes(blogsSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-[#131433] text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/assets/images/logo/logo.png"
              alt="AKSH DIGITAL Logo"
              width={130}
              height={36}
              className="h-9 w-auto object-contain brightness-0 invert"
              priority
            />
          </Link>
          <span className="bg-[#d25c41] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            Admin
          </span>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          <button
            onClick={() => setActiveTab("leads")}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === "leads"
                ? "bg-[#d25c41] text-white shadow-lg shadow-[#d25c41]/20"
                : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
          >
            <Users className="w-4 h-4" />
            Leads / Contacts
            {leads.length > 0 && (
              <span className="ml-auto bg-white/10 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                {leads.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("blogs")}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === "blogs"
                ? "bg-[#d25c41] text-white shadow-lg shadow-[#d25c41]/20"
                : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
          >
            <FileText className="w-4 h-4" />
            Manage Blogs
            {blogs.length > 0 && (
              <span className="ml-auto bg-white/10 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                {blogs.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === "settings"
                ? "bg-[#d25c41] text-white shadow-lg shadow-[#d25c41]/20"
                : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
          >
            <Lock className="w-4 h-4" />
            Security Settings
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Work Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header Stats bar */}
        <header className="bg-white border-b border-slate-100 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-slate-800">
              {activeTab === "leads"
                ? "Customer Leads Inbox"
                : activeTab === "blogs"
                  ? "Articles Database"
                  : "Security Settings"}
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              {activeTab === "leads"
                ? "Overview of submitted website forms"
                : activeTab === "blogs"
                  ? "Configure and update marketing content"
                  : "Manage authentication and password credentials"}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-slate-600">Local DB Storage</span>
            </div>
          </div>
        </header>

        {/* Dynamic content tab view */}
        <div className="flex-1 p-6 overflow-y-auto">
          {loading ? (
            <div className="h-96 flex flex-col items-center justify-center gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-[#d25c41]" />
              <p className="text-slate-400 text-sm">Loading records from local files...</p>
            </div>
          ) : activeTab === "leads" ? (
            /* LEADS LIST COMPONENT */
            <div className="space-y-6">
              {/* Stats Summary cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Leads</span>
                    <h3 className="text-2xl font-bold text-slate-800 mt-1">{leads.length}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                    <Users className="w-6 h-6" />
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">SEO Audits</span>
                    <h3 className="text-2xl font-bold text-slate-800 mt-1">
                      {leads.filter((l) => l.service === "seo" || l.service === "local-seo").length}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">PPC & Social</span>
                    <h3 className="text-2xl font-bold text-slate-800 mt-1">
                      {leads.filter((l) => l.service === "google-ads" || l.service === "social-media").length}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Table search & Export bar */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search leads by name, email, or service..."
                      value={leadsSearch}
                      onChange={(e) => setLeadsSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#d25c41] transition-all bg-slate-50"
                    />
                  </div>

                  {leads.length > 0 && (
                    <button
                      onClick={handleExportCSV}
                      className="flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 text-slate-600 font-semibold rounded-xl text-sm hover:bg-slate-50 transition-all cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      Export CSV
                    </button>
                  )}
                </div>

                {/* Table Data */}
                {filteredLeads.length === 0 ? (
                  <div className="py-16 text-center text-slate-400 space-y-2">
                    <AlertCircle className="w-8 h-8 mx-auto text-slate-300" />
                    <p className="text-sm font-semibold">No lead submissions found</p>
                    <p className="text-xs">Once users fill the contact form or popup, they will appear here.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-slate-400 text-xs font-bold uppercase tracking-wider border-b border-slate-100">
                          <th className="py-4 px-6">Date</th>
                          <th className="py-4 px-6">Name</th>
                          <th className="py-4 px-6">Contact Info</th>
                          <th className="py-4 px-6">Website / Service</th>
                          <th className="py-4 px-6">Message / Notes</th>
                          <th className="py-4 px-6 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-600">
                        {filteredLeads.map((lead) => (
                          <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-4 px-6 whitespace-nowrap text-xs text-slate-400">
                              {new Date(lead.createdAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </td>
                            <td className="py-4 px-6 font-bold text-slate-800">{lead.name}</td>
                            <td className="py-4 px-6">
                              <div className="font-semibold text-slate-700">{lead.phone}</div>
                              <div className="text-xs text-slate-400">{lead.email}</div>
                            </td>
                            <td className="py-4 px-6">
                              <div className="font-semibold text-slate-700 uppercase text-xs">
                                {lead.service}
                              </div>
                              {lead.website ? (
                                <a
                                  href={lead.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-[#d25c41] hover:underline block truncate max-w-48"
                                >
                                  {lead.website}
                                </a>
                              ) : (
                                <span className="text-xs text-slate-400">—</span>
                              )}
                            </td>
                            <td className="py-4 px-6 max-w-xs">
                              <p className="text-xs line-clamp-2 leading-relaxed" title={lead.message}>
                                {lead.message || <span className="italic text-slate-300">No message</span>}
                              </p>
                              {lead.analysisItems && (
                                <div className="flex flex-wrap gap-1 mt-1.5">
                                  {Object.entries(lead.analysisItems)
                                    .filter(([_, enabled]) => enabled)
                                    .map(([key]) => (
                                      <span
                                        key={key}
                                        className="bg-emerald-50 text-emerald-700 text-[9px] font-bold px-1.5 py-0.5 rounded border border-emerald-100"
                                      >
                                        Audit: {key}
                                      </span>
                                    ))}
                                </div>
                              )}
                            </td>
                            <td className="py-4 px-6 text-center">
                              <button
                                onClick={() => handleDeleteLead(lead.id)}
                                className="p-1.5 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-lg transition-colors cursor-pointer"
                                title="Delete Lead"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          ) : activeTab === "blogs" ? (
            /* BLOG LIST COMPONENT */
            <div className="space-y-6">
              {/* Blog list tools header */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search blogs by title or category..."
                    value={blogsSearch}
                    onChange={(e) => setBlogsSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#d25c41] transition-all bg-white"
                  />
                </div>

                <button
                  onClick={openAddModal}
                  className="flex items-center justify-center gap-2 bg-[#d25c41] text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:shadow-[0_4px_15px_rgba(210,92,65,0.3)] transition-all cursor-pointer whitespace-nowrap"
                >
                  <Plus className="w-4 h-4" />
                  New Blog Post
                </button>
              </div>

              {/* Blog posts list rendering */}
              {filteredBlogs.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm py-16 text-center text-slate-400 space-y-2">
                  <FileText className="w-8 h-8 mx-auto text-slate-300" />
                  <p className="text-sm font-semibold">No articles found</p>
                  <p className="text-xs">Create a new post using the button above.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBlogs.map((blog) => (
                    <div
                      key={blog.slug}
                      className="bg-white border border-slate-150 shadow-sm rounded-2xl overflow-hidden flex flex-col group hover:shadow-md transition-all"
                    >
                      <div className="relative h-40 bg-slate-100 overflow-hidden">
                        <img
                          src={blog.image || "/assets/images/home/BLOG-01.WEBP"}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute bottom-3 left-3 bg-[#131433] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                          {blog.category}
                        </span>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-1.5">
                          <span className="text-[10px] text-slate-400 font-semibold">{blog.date}</span>
                          <h3 className="font-bold text-slate-800 text-base leading-snug line-clamp-2" title={blog.title}>
                            {blog.title}
                          </h3>
                          <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                            {blog.excerpt}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400 font-medium">{blog.readTime || "5 min read"}</span>
                          <div className="flex gap-2">
                            <button
                              onClick={() => openEditModal(blog)}
                              className="p-1.5 hover:bg-slate-100 text-slate-500 rounded-lg transition-colors cursor-pointer"
                              title="Edit Article"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteBlog(blog.slug)}
                              className="p-1.5 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-lg transition-colors cursor-pointer"
                              title="Delete Article"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* SECURITY / CHANGE PASSWORD COMPONENT */
            <div className="max-w-md mx-auto bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 mt-4">
              <div>
                <h3 className="text-lg font-bold text-slate-800">Change Admin Password</h3>
                <p className="text-xs text-slate-400 mt-1">Configure a new secure password for this console.</p>
              </div>

              {settingsError && (
                <div className="p-3 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-semibold">
                  {settingsError}
                </div>
              )}

              {settingsSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-xl text-xs font-semibold">
                  Password updated successfully!
                </div>
              )}

              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    required
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#d25c41] text-sm text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#d25c41] text-sm text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#d25c41] text-sm text-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  disabled={settingsLoading}
                  className="w-full bg-[#d25c41] text-white font-bold py-3 px-6 rounded-xl hover:shadow-[0_4px_15px_rgba(210,92,65,0.25)] transition-all cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-50 text-xs uppercase tracking-wider"
                >
                  {settingsLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    <>
                      Update Password
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </main>

      {/* ADD / EDIT SLIDE MODAL PANEL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative bg-white w-full max-w-2xl h-full shadow-[0_0_50px_rgba(0,0,0,0.15)] flex flex-col z-10 animate-slide-left">
            <header className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-800 text-lg">
                  {modalType === "add" ? "Create New Article" : "Edit Article Details"}
                </h3>
                <p className="text-[11px] text-slate-400">Specify details of your marketing write-up</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </header>

            <form onSubmit={handleFormSubmit} className="flex-1 flex flex-col overflow-hidden">
              <div className="p-6 space-y-5 overflow-y-auto flex-1 text-sm text-slate-700">
                {formError && (
                  <div className="p-3 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-semibold">
                    {formError}
                  </div>
                )}
                {formSuccess && (
                  <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-xl text-xs font-semibold">
                    Article saved successfully! Closing...
                  </div>
                )}

                {/* Title */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Article Title
                  </label>
                  <input
                    type="text"
                    required
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                    placeholder="e.g. 10 Search Optimization Strategies for 2025"
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#d25c41] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Category */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Category
                    </label>
                    <select
                      value={blogCategory}
                      onChange={(e) => setBlogCategory(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-[#d25c41] transition-all"
                    >
                      <option value="SEO">SEO</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Performance Marketing">Performance Marketing</option>
                      <option value="Graphic Design">Graphic Design</option>
                    </select>
                  </div>

                  {/* Read Time */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Read Time (Optional)
                    </label>
                    <input
                      type="text"
                      value={blogReadTime}
                      onChange={(e) => setBlogReadTime(e.target.value)}
                      placeholder="e.g. 8 min read"
                      className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#d25c41] transition-all"
                    />
                  </div>
                </div>

                {/* Excerpt */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Excerpt / Short Description
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={blogExcerpt}
                    onChange={(e) => setBlogExcerpt(e.target.value)}
                    placeholder="A brief summary shown in the listing grid to hook readers..."
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#d25c41] transition-all resize-none"
                  />
                </div>

                {/* Cover Image Upload */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Cover Image
                  </label>

                  {blogImage ? (
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 group h-48 flex items-center justify-center">
                      <img
                        src={blogImage}
                        alt="Blog Cover Preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                        <label className="bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold px-4 py-2 rounded-xl cursor-pointer transition-all shadow-md">
                          Change Image
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                        <button
                          type="button"
                          onClick={() => setBlogImage("")}
                          className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-xl cursor-pointer transition-all shadow-md"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-slate-200 hover:border-[#d25c41] rounded-2xl p-6 transition-all bg-slate-50 flex flex-col items-center justify-center gap-2.5 text-center group relative min-h-36">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        disabled={imageUploading}
                      />
                      {imageUploading ? (
                        <>
                          <Loader2 className="w-8 h-8 text-[#d25c41] animate-spin" />
                          <span className="text-xs font-semibold text-slate-500">Uploading cover image...</span>
                        </>
                      ) : (
                        <>
                          <div className="p-2.5 bg-white rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300">
                            <Upload className="w-6 h-6 text-slate-400 group-hover:text-[#d25c41] transition-colors" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-slate-700">Click to upload cover image</p>
                            <p className="text-[10px] text-slate-400 mt-0.5">Supports PNG, JPG, WEBP, SVG</p>
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {uploadError && (
                    <p className="text-red-500 text-[11px] font-semibold flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {uploadError}
                    </p>
                  )}

                  {/* Manual URL entry fallback */}
                  <div className="pt-1">
                    <details className="group">
                      <summary className="text-[11px] font-semibold text-slate-400 hover:text-slate-600 cursor-pointer select-none transition-colors outline-none list-none flex items-center gap-1.5">
                        <span className="transition-transform group-open:rotate-90 text-[9px]">▶</span>
                        Or paste manual image URL
                      </summary>
                      <div className="mt-2">
                        <input
                          type="text"
                          value={blogImage}
                          onChange={(e) => setBlogImage(e.target.value)}
                          placeholder="e.g. /assets/images/home/BLOG-01.WEBP or https://..."
                          className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#d25c41] transition-all text-xs"
                        />
                      </div>
                    </details>
                  </div>
                </div>

                {/* Tags */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Tags (Comma separated)
                  </label>
                  <input
                    type="text"
                    value={blogTags}
                    onChange={(e) => setBlogTags(e.target.value)}
                    placeholder="e.g. SEO, Search, Google, 2025"
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#d25c41] transition-all"
                  />
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <h4 className="font-bold text-slate-800 text-sm mb-3">Detailed Content Layout</h4>
                </div>

                {/* Content Intro */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Introduction Paragraph
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={blogIntro}
                    onChange={(e) => setBlogIntro(e.target.value)}
                    placeholder="Opening paragraph of the article, usually displayed in bold..."
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#d25c41] transition-all resize-none"
                  />
                </div>

                {/* Repeatable Sections */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Body Sections
                    </label>
                    <button
                      type="button"
                      onClick={handleAddSection}
                      className="text-xs font-bold text-[#d25c41] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add Section
                    </button>
                  </div>

                  {blogSections.map((sec, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-slate-150 rounded-2xl relative space-y-3">
                      <button
                        type="button"
                        onClick={() => handleRemoveSection(idx)}
                        disabled={blogSections.length === 1}
                        className="absolute top-2 right-2 text-slate-400 hover:text-red-500 p-1 rounded-full hover:bg-slate-200/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        title="Remove Section"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>

                      <div className="space-y-1.5 pr-6">
                        <label className="block text-[11px] font-bold text-slate-400 uppercase">
                          Section {idx + 1} Heading
                        </label>
                        <input
                          type="text"
                          required
                          value={sec.heading}
                          onChange={(e) => handleSectionChange(idx, "heading", e.target.value)}
                          placeholder="e.g. 1. Focus on Intent Over Keywords"
                          className="w-full px-3 py-1.5 border border-slate-200 rounded-lg bg-white focus:outline-none focus:border-[#d25c41] transition-all text-xs"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-bold text-slate-400 uppercase">
                          Section {idx + 1} Body
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={sec.body}
                          onChange={(e) => handleSectionChange(idx, "body", e.target.value)}
                          placeholder="Write the paragraph content here..."
                          className="w-full px-3 py-1.5 border border-slate-200 rounded-lg bg-white focus:outline-none focus:border-[#d25c41] transition-all text-xs resize-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Conclusion */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Conclusion / Key Takeaway
                  </label>
                  <textarea
                    rows={3}
                    value={blogConclusion}
                    onChange={(e) => setBlogConclusion(e.target.value)}
                    placeholder="Concluding takeaway summary text..."
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#d25c41] transition-all resize-none"
                  />
                </div>
              </div>

              <footer className="px-6 py-4 border-t border-slate-100 flex items-center justify-end gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 border border-slate-200 text-slate-600 font-semibold rounded-xl text-sm hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-[#d25c41] text-white font-bold px-6 py-2.5 rounded-xl text-sm hover:shadow-[0_4px_15px_rgba(210,92,65,0.3)] transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      Publish Post
                    </>
                  )}
                </button>
              </footer>
            </form>
          </div>
        </div>
      )}

      {/* Custom sliding CSS animation */}
      <style jsx global>{`
        @keyframes slideLeft {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-left {
          animation: slideLeft 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
