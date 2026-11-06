"use client";

import { useEffect } from "react";

export default function SiteEffects() {
  useEffect(() => {
    const header = document.getElementById("header");
    const progress = document.getElementById("progress");

    const updateScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 20);
      const h = document.documentElement;
      if (progress) {
        const denom = h.scrollHeight - h.clientHeight;
        progress.style.width = `${denom > 0 ? (window.scrollY / denom) * 100 : 0}%`;
      }
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    const sections = [...document.querySelectorAll<HTMLElement>("main section[id]")];
    const links = [
      ...document.querySelectorAll<HTMLAnchorElement>(".nav a:not(.nav-cta)"),
    ];

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((link) =>
              link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${entry.target.id}`,
              ),
            );
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((s) => sectionObserver.observe(s));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    return () => {
      window.removeEventListener("scroll", updateScroll);
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return <div className="progress" id="progress" />;
}
