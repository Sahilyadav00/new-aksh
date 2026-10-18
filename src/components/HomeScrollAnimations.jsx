"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeScrollAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // ----------------------------------------------------
      // 1. HERO SECTION (Page Load + Smooth Sequence + Scroll Parallax)
      // ----------------------------------------------------
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Live status pill
      if (document.querySelector(".home-hero-pill")) {
        heroTl.fromTo(
          ".home-hero-pill",
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.65, delay: 0.1 }
        );
      }

      // Primary H1 Headline
      if (document.querySelector(".home-hero-title")) {
        heroTl.fromTo(
          ".home-hero-title",
          { opacity: 0, y: 35, filter: "blur(5px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.85 },
          "-=0.35"
        );
      }

      // Sub-headline paragraph
      if (document.querySelector(".home-hero-sub")) {
        heroTl.fromTo(
          ".home-hero-sub",
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.45"
        );
      }

      // Primary & Secondary CTAs
      if (document.querySelectorAll(".home-hero-cta").length > 0) {
        heroTl.fromTo(
          ".home-hero-cta",
          { opacity: 0, y: 22, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.12, ease: "back.out(1.2)" },
          "-=0.4"
        );
      }

      // 4-Pillars Trust Features Strip
      if (document.querySelectorAll(".home-hero-trust-item").length > 0) {
        heroTl.fromTo(
          ".home-hero-trust-item",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          "-=0.3"
        );
      }

      // Main Hero Image Graphic
      if (document.querySelector(".home-hero-image")) {
        heroTl.fromTo(
          ".home-hero-image",
          { opacity: 0, scale: 0.92, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.0, ease: "power3.out" },
          "-=0.75"
        );
      }

      // Floating UI Card - Rating (Top Left)
      if (document.querySelector(".home-hero-card-left")) {
        heroTl.fromTo(
          ".home-hero-card-left",
          { opacity: 0, x: -35, scale: 0.85 },
          { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "back.out(1.5)" },
          "-=0.55"
        );
      }

      // Floating UI Cards - Bottom/Right Badges
      if (document.querySelectorAll(".home-hero-card-bottom").length > 0) {
        heroTl.fromTo(
          ".home-hero-card-bottom",
          { opacity: 0, y: 30, scale: 0.85 },
          { opacity: 1, y: 0, scale: 1, duration: 0.75, stagger: 0.14, ease: "back.out(1.4)" },
          "-=0.55"
        );
      }

      // Parallax scroll on hero image
      if (document.querySelector(".home-hero-section") && document.querySelector(".home-hero-image")) {
        gsap.to(".home-hero-image", {
          y: 45,
          ease: "none",
          scrollTrigger: {
            trigger: ".home-hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // ----------------------------------------------------
      // 2. TRUST BADGES STRIP (Marquee / Proof)
      // ----------------------------------------------------
      if (document.querySelector(".home-trust-strip")) {
        gsap.fromTo(
          ".home-trust-strip",
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".home-trust-strip",
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );

        if (document.querySelectorAll(".home-trust-badge").length > 0) {
          gsap.fromTo(
            ".home-trust-badge",
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".home-trust-strip",
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }

      // ----------------------------------------------------
      // 3. ABOUT AKSH DIGITAL SECTION
      // ----------------------------------------------------
      if (document.querySelector(".home-about-section")) {
        if (document.querySelector(".home-about-image")) {
          gsap.fromTo(
            ".home-about-image",
            { opacity: 0, x: -40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-about-section",
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (document.querySelector(".home-about-text")) {
          gsap.fromTo(
            ".home-about-text",
            { opacity: 0, x: 40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-about-section",
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (document.querySelectorAll(".home-about-stat-card").length > 0) {
          gsap.fromTo(
            ".home-about-stat-card",
            { opacity: 0, y: 35, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-about-stats-grid",
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (document.querySelector(".home-about-quote")) {
          gsap.fromTo(
            ".home-about-quote",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-about-quote",
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }

      // ----------------------------------------------------
      // 4. CORE SERVICES SECTION
      // ----------------------------------------------------
      if (document.querySelector(".home-services-section")) {
        if (document.querySelector(".home-services-header")) {
          gsap.fromTo(
            ".home-services-header",
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-services-section",
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (document.querySelector(".home-services-tabs")) {
          gsap.fromTo(
            ".home-services-tabs",
            { opacity: 0, y: 40, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-services-tabs",
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (document.querySelector(".home-services-cta")) {
          gsap.fromTo(
            ".home-services-cta",
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".home-services-cta",
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }

      // ----------------------------------------------------
      // 5. GLOBAL & LOCAL DELIVERY FRAMEWORK
      // ----------------------------------------------------
      if (document.querySelector(".home-hubs-section")) {
        if (document.querySelector(".home-hubs-header")) {
          gsap.fromTo(
            ".home-hubs-header",
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-hubs-section",
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (document.querySelector(".home-hubs-card-global")) {
          gsap.fromTo(
            ".home-hubs-card-global",
            { opacity: 0, x: -45, scale: 0.97 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-hubs-cards",
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (document.querySelector(".home-hubs-card-local")) {
          gsap.fromTo(
            ".home-hubs-card-local",
            { opacity: 0, x: 45, scale: 0.97 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-hubs-cards",
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }

      // ----------------------------------------------------
      // 6. 4 EASY WORK STEPS (PROCESS)
      // ----------------------------------------------------
      if (document.querySelector(".home-process-section")) {
        if (document.querySelector(".home-process-header")) {
          gsap.fromTo(
            ".home-process-header",
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-process-section",
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (document.querySelector(".home-process-steps")) {
          gsap.fromTo(
            ".home-process-steps",
            { opacity: 0, y: 40, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-process-steps",
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }

      // ----------------------------------------------------
      // 7. INDUSTRY VERTICALS (HONEYCOMB HEXAGONS)
      // ----------------------------------------------------
      if (document.querySelector(".home-hexagons-section")) {
        if (document.querySelector(".home-hexagons-header")) {
          gsap.fromTo(
            ".home-hexagons-header",
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-hexagons-section",
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (document.querySelector(".home-hexagons-cluster")) {
          gsap.fromTo(
            ".home-hexagons-cluster",
            { opacity: 0, scale: 0.94, y: 35 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.95,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-hexagons-cluster",
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }

      // ----------------------------------------------------
      // 8. DUAL TECH & GROWTH TOOLS MARQUEE
      // ----------------------------------------------------
      if (document.querySelector(".home-tech-marquee")) {
        gsap.fromTo(
          ".home-tech-marquee",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".home-tech-marquee",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // ----------------------------------------------------
      // 9. CLIENT RESULTS & TESTIMONIALS
      // ----------------------------------------------------
      if (document.querySelector(".home-testimonials-section")) {
        if (document.querySelector(".home-testimonials-header")) {
          gsap.fromTo(
            ".home-testimonials-header",
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-testimonials-section",
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (document.querySelectorAll(".home-testimonial-card").length > 0) {
          gsap.fromTo(
            ".home-testimonial-card",
            { opacity: 0, y: 40, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-testimonials-section",
                start: "top 75%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }

      // ----------------------------------------------------
      // 10. FEATURED WORK / PORTFOLIO
      // ----------------------------------------------------
      if (document.querySelector(".home-portfolio-section")) {
        if (document.querySelector(".home-portfolio-header")) {
          gsap.fromTo(
            ".home-portfolio-header",
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-portfolio-section",
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (document.querySelector(".home-portfolio-body")) {
          gsap.fromTo(
            ".home-portfolio-body",
            { opacity: 0, y: 45, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-portfolio-body",
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }

      // ----------------------------------------------------
      // 11. WHY BUSINESSES CHOOSE AKSH DIGITAL (6 PILLARS)
      // ----------------------------------------------------
      if (document.querySelector(".home-why-section")) {
        if (document.querySelector(".home-why-header")) {
          gsap.fromTo(
            ".home-why-header",
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-why-section",
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (document.querySelectorAll(".home-why-card").length > 0) {
          gsap.fromTo(
            ".home-why-card",
            { opacity: 0, y: 45, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-why-grid",
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }

      // ----------------------------------------------------
      // 12. FREQUENTLY ASKED QUESTIONS (FAQ)
      // ----------------------------------------------------
      if (document.querySelector(".home-faq-section")) {
        if (document.querySelector(".home-faq-header")) {
          gsap.fromTo(
            ".home-faq-header",
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-faq-section",
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (document.querySelectorAll(".home-faq-item").length > 0) {
          gsap.fromTo(
            ".home-faq-item",
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-faq-list",
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }

      // ----------------------------------------------------
      // 13. FINAL CTA BANNER
      // ----------------------------------------------------
      if (document.querySelector(".home-cta-section")) {
        gsap.fromTo(
          ".home-cta-section",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".home-cta-section",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        if (document.querySelector(".home-cta-content")) {
          gsap.fromTo(
            ".home-cta-content",
            { opacity: 0, scale: 0.95 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".home-cta-content",
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }

      // ----------------------------------------------------
      // 14. UNIVERSAL HELPERS (.gsap-reveal, .gsap-reveal-left, .gsap-reveal-right, .gsap-reveal-scale)
      // ----------------------------------------------------
      gsap.utils.toArray(".gsap-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      gsap.utils.toArray(".gsap-reveal-left").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      gsap.utils.toArray(".gsap-reveal-right").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      gsap.utils.toArray(".gsap-reveal-scale").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.93 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(refreshTimeout);
      ctx.revert();
    };
  }, []);

  return null;
}
