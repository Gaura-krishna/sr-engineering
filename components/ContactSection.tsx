
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { User, MapPin, Phone, Mail } from "lucide-react";
import { site } from "@/lib/content";
import ContactForm from "@/components/ContactForm";
import { socialLinks } from "./Footer";

const contactItems = [
  {
    icon: User,
    label: "Proprietor",
    value: "Esampelli Sriram ",
  },
  {
    icon: MapPin,
    label: "LOCATIONS",
    value: site.location,
  },
  {
    icon: Phone,
    label: "PHONE",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
  },
  {
    icon: Mail,
    label: "EMAIL",
    value: site.email,
    href: `mailto:${site.email}`,
  },
];

const revealVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

const staggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#090A0B] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background glow */}
      <motion.div
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#D6B15E]/10 blur-[130px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.7, 0.4],
            }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-[1500px]">
        {/* Intro */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerVariants}
          className="mb-14 max-w-2xl"
        >
          <motion.span
            variants={revealVariants}
            className="block text-xs font-bold tracking-[0.25em] text-[#D6B15E]"
          >
            LET'S BUILD TOGETHER
          </motion.span>

          <motion.h2
            variants={revealVariants}
            className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            Let's talk about
            <span className="text-[#D6B15E]"> your project.</span>
          </motion.h2>

          <motion.p
            variants={revealVariants}
            className="mt-6 max-w-xl text-sm leading-8 text-white/50 sm:text-base"
          >
            Tell us what you are working on. We'll connect with you
            to understand the requirements and discuss the right solution.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Contact information */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerVariants}
          >
            <motion.h3
              variants={revealVariants}
              className="mb-8 text-xl font-bold"
            >
              Contact Information
            </motion.h3>

            <div className="space-y-7">
              {contactItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={revealVariants}
                  className="flex items-start gap-5 border-b border-white/10 pb-7"
                >
                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { scale: 1.08, rotate: -5 }
                    }
                    className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D6B15E]/40 text-xl text-[#D6B15E] transition-colors hover:border-[#D6B15E]"
                  >
                    <item.icon className="h-5 w-5" />
                  </motion.div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#D6B15E]">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-3 block break-all text-sm leading-6 text-white/65 transition-colors duration-300 hover:text-[#D6B15E]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-3 text-sm leading-6 text-white/65">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}


              {/* Social links */}
              <div className="mt-2 flex flex-wrap gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex h-10 w-10 items-center justify-center border border-[#D6B15E]/40 text-[#D6B15E] transition-all duration-300 hover:border-black hover:bg-black hover:text-[#D6B15E]"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Technical requirement card */}
            <motion.div
              variants={revealVariants}
              whileHover={
                shouldReduceMotion ? undefined : { y: -4 }
              }
              className="mt-10 border border-[#D6B15E]/30 bg-[#D6B15E]/5 p-6 transition-colors duration-300 hover:border-[#D6B15E]/60"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#D6B15E]">
                Have a technical requirement?
              </p>

              <p className="mt-3 text-sm leading-7 text-white/55">
                Discuss your BIM, architectural, structural or MEPF
                requirements with our team.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={
              shouldReduceMotion ? false : { opacity: 0, x: 35 }
            }
            whileInView={
              shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
            }
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
