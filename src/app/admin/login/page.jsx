"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Lock, User, Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, loading, error, success
  const [errorMsg, setErrorMsg] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        localStorage.setItem("admin_username", username);
        router.push("/admin/dashboard");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Invalid username or password.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Failed to connect to the authentication server.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1535] flex items-center justify-center p-4 relative overflow-hidden select-none">
      {/* Visual background rings */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#d25c41]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#f6ac55]/10 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        {/* Brand Logo & Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/assets/images/logo/logo.png"
              alt="AKSH DIGITAL Logo"
              width={160}
              height={44}
              className="h-10 w-auto object-contain brightness-0 invert mx-auto"
              priority
            />
          </Link>
          <h2 className="text-2xl font-bold text-white tracking-tight">Admin Console</h2>
          <p className="text-slate-400 text-sm mt-1">Sign in to manage blogs and customer leads</p>
        </div>

        {status === "error" && (
          <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold leading-relaxed">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest" htmlFor="username">
              Username
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <User className="w-4 h-4" />
              </span>
              <input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 text-white text-sm focus:outline-none focus:border-[#d25c41]/60 focus:bg-white/10 transition-all placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest" htmlFor="password">
                Password
              </label>
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Lock className="w-4 h-4" />
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-11 text-white text-sm focus:outline-none focus:border-[#d25c41]/60 focus:bg-white/10 transition-all placeholder:text-slate-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full mt-4 bg-gradient-to-r from-[#d25c41] to-[#f6ac55] text-white font-bold py-3.5 px-6 rounded-2xl hover:shadow-[0_4px_25px_rgba(210,92,65,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wider"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Authenticating...
              </>
            ) : (
              <>
                Login
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Link href="/" className="text-xs text-slate-400 hover:text-white transition-colors">
            &larr; Back to Website
          </Link>
        </div>
      </div>
    </div>
  );
}
