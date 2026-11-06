
import Image from "next/image";
import { ArrowRight, ArrowUp, MapPin, Phone, Mail } from "lucide-react";
import { site } from "@/lib/content";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "@/components/SocialIcons";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Training & Opportunities", href: "#opportunities" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const footerServices = [
  "BIM Modeling",
  "BIM Coordination",
  "Clash Detection",
  "MEP Design",
  "Shop Drawings",
  "Construction Documentation",
];

export const socialLinks = [
  {
    name: "Instagram",
    href: site.social.instagram,
    icon: InstagramIcon,
  },
  {
    name: "Facebook",
    href: site.social.facebook,
    icon: FacebookIcon,
  },
  {
    name: "LinkedIn",
    href: site.social.linkedin,
    icon: LinkedInIcon,
  },
  {
    name: "WhatsApp",
    href: site.social.whatsapp,
    icon: WhatsAppIcon,
  },
  // {
  //   name: "YouTube",
  //   href: site.social.youtube,
  //   icon: YouTubeIcon,
  // },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080a0c] text-white">

      {/* Footer main */}
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:px-12 lg:py-20">

        {/* Brand */}
        <div>
          <a href="#home" aria-label="SR Engineering home">
            <Image
              src="/logo.png"
              alt="SR Engineering Design Solutions"
              width={150}
              height={64}
              className="h-16 w-auto object-contain"
            />
          </a>

          <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
            Delivering precise, coordinated and construction-ready
            BIM and engineering solutions through innovation,
            technical expertise and quality-driven workflows.
          </p>

          {/* Social links */}
          <div className="mt-7 flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-all duration-300 hover:border-[#e7b52f] hover:bg-[#e7b52f] hover:text-black"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.18em] text-[#e7b52f]">
            Quick Links
          </h3>

          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-[#e7b52f]"
                >
                  <span className="text-[#e7b52f] opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.18em] text-[#e7b52f]">
            Our Services
          </h3>

          <ul className="space-y-4">
            {footerServices.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-[#e7b52f]"
                >
                  <span className="text-[#e7b52f] opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.18em] text-[#e7b52f]">
            Get In Touch
          </h3>

          <div className="space-y-6">

            <div className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#e7b52f]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/80">
                  Location
                </p>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  {site.location}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#e7b52f]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/80">
                  Phone
                </p>
                <a
                  href={`tel:${site.phone}`}
                  className="mt-2 block text-sm text-white/50 transition-colors hover:text-[#e7b52f]"
                >
                  {site.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#e7b52f]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/80">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block break-all text-sm text-white/50 transition-colors hover:text-[#e7b52f]"
                >
                  {site.email}
                </a>
              </div>
            </div>

          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 border border-[#e7b52f]/50 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#e7b52f] transition-all hover:bg-[#e7b52f] hover:text-black"
          >
            Request a Quote <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:px-8 md:flex-row md:text-left lg:px-12">

          <p className="text-xs text-white/40">
            © All Rights Reserved by SR Engineering Design Solutions.
          </p>

          <a
            href="#home"
            className="text-xs font-semibold tracking-wider text-white/50 transition-colors hover:text-[#e7b52f]"
          >
            <span className="inline-flex items-center gap-1.5">
              BACK TO TOP <ArrowUp className="h-3 w-3" />
            </span>
          </a>

          <p className="text-xs text-white/40">
            Engineering Precision. Digital Excellence.
          </p>

        </div>
      </div>
    </footer>
  );
}
