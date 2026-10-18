"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactScrollAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // GSAP context ensures all triggers and timelines clean up safely on navigation
    const ctx = gsap.context(() => {
      // ----------------------------------------------------
      // 1. HERO SECTION (Entrance animations on page load)
      // ----------------------------------------------------
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Tagline: Let's Connect
      heroTl.fromTo(
        ".hero-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.1 }
      );

      // Headline lines with smooth staggered reveal
      heroTl.fromTo(
        ".hero-title-line",
        { opacity: 0, y: 32, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: 0.12,
        },
        "-=0.4"
      );

      // Subtitle paragraph
      heroTl.fromTo(
        ".hero-paragraph",
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.75 },
        "-=0.5"
      );

      // Background circuit traces & particles
      heroTl.fromTo(
        ".hero-circuit",
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 1.1, ease: "power2.out" },
        "-=0.8"
      );

      // Right curved studio pod
      heroTl.fromTo(
        ".hero-pod",
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        "-=0.9"
      );

      // 3D Character with floating entrance
      heroTl.fromTo(
        ".hero-character",
        { opacity: 0, y: 45, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.15, ease: "back.out(1.2)" },
        "-=0.85"
      );

      // Parallax effect on hero character during scroll
      gsap.to(".hero-character", {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // ----------------------------------------------------
      // 2. CONTACT DETAILS & CARDS SECTION
      // ----------------------------------------------------
      // Section header ("Reach Out Directly")
      gsap.fromTo(
        ".contact-info-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-info-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 4 Contact Cards (Email, Phone, Office, Hours) - Staggered
      gsap.fromTo(
        ".contact-card",
        { opacity: 0, y: 35, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-cards-grid",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // Free Audit Highlight Card (Navy container with sparkles)
      gsap.fromTo(
        ".audit-card",
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".audit-card",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Audit Checklist items cascading inside the card
      gsap.fromTo(
        ".audit-item",
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".audit-card",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Right Column: Contact Form Container
      gsap.fromTo(
        ".contact-form-container",
        { opacity: 0, y: 45, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-form-container",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // ----------------------------------------------------
      // 3. PROCESS SECTION ("What Happens After You Contact Us?")
      // ----------------------------------------------------
      // Process section heading
      gsap.fromTo(
        ".process-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3 Process Step Cards (01, 02, 03) - Staggered cascade
      gsap.fromTo(
        ".process-step-card",
        { opacity: 0, y: 45, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-steps-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Step numbers (01, 02, 03) scale effect
      gsap.fromTo(
        ".process-number",
        { opacity: 0, scale: 0.75, y: -10 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.18,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".process-steps-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // ----------------------------------------------------
      // 4. EMBEDDED MAP SECTION
      // ----------------------------------------------------
      gsap.fromTo(
        ".map-container",
        { opacity: 0, scale: 0.96, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".map-container",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return null;
}
