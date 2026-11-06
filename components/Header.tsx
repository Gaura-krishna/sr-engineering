"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Add Training to the existing navigation
  const navigationLinks = [
    ...navLinks.filter((link) => link.label.toLowerCase() !== "training"),
    { label: "Training", href: "/training" },
  ];

  // Check whether a navigation item is active
  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return false;
    }

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const linkClass = (href: string, mobile = false) => {
    const active = isActive(href);

    return mobile
      ? `border-b border-white/5 py-4 text-xs font-bold uppercase tracking-wider transition-colors hover:text-[#e7b52f] ${
          active ? "text-[#e7b52f]" : "text-white/80"
        }`
      : `relative py-3 text-[11px] font-bold uppercase tracking-wide transition-colors hover:text-[#e7b52f] ${
          active
            ? "text-[#e7b52f] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#e7b52f]"
            : "text-white/80"
        }`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080a0c]/95 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:h-[86px] lg:px-12">

        {/* LOGO */}
        <Link
          href="/#home"
          aria-label="SR Engineering Design Solutions home"
          className="relative z-50 flex shrink-0 items-center"
        >
          <Image
            src="/logo.png"
            alt="SR Engineering Design Solutions"
            width={150}
            height={64}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={linkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="ml-2 inline-flex items-center gap-3 bg-[#e7b52f] px-5 py-3 text-[11px] font-extrabold uppercase tracking-wide text-black transition-colors hover:bg-white"
          >
            Get a Quote
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-white/15 xl:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-[#e7b52f] transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-[#e7b52f] transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        className={`absolute left-0 right-0 top-full border-b border-white/10 bg-[#080a0c] px-5 shadow-2xl transition-all duration-300 xl:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1600px] flex-col py-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={linkClass(link.href, true)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center gap-3 bg-[#e7b52f] px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-black"
          >
            Get a Quote <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}