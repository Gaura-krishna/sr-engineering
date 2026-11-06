
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Home, Building2, Compass, Globe } from "lucide-react";

const categories = [
  { icon: Home, title: "Residential", description: "Housing & Villas" },
  { icon: Building2, title: "Commercial", description: "Offices & Retail" },
  { icon: Compass, title: "Middle East", description: "UAE Projects" },
  { icon: Globe, title: "UK / USA", description: "International" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function PortfolioBanner() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#090A0B] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
      {/* Background glow */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
              x: [0, -30, 0],
              y: [0, 25, 0],
              scale: [1, 1.15, 1],
            }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#D6B15E]/10 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block text-xs font-bold tracking-[0.25em] text-[#D6B15E]"
          >
            OUR PORTFOLIO
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            Building long-term
            <br />
            relationships through
            <br />
            <span className="text-[#D6B15E]">
              trust, quality, and results.
            </span>
          </motion.h2>
        </motion.div>

        {/* RIGHT PORTFOLIO CARD */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, x: 45, scale: 0.97 }
          }
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={
            shouldReduceMotion
              ? undefined
              : { y: -5, transition: { duration: 0.3 } }
          }
          className="border border-white/10 bg-[#171C20] p-6 transition-colors duration-300 hover:border-[#D6B15E]/40 sm:p-9"
        >
          {/* PROJECT COUNT */}
          <div className="flex items-center gap-5 border-b border-white/10 pb-8">
            <motion.span
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, scale: 0.7 }
              }
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "backOut",
              }}
              className="text-6xl font-bold text-[#D6B15E] sm:text-7xl"
            >
              20<sup className="text-3xl">+</sup>
            </motion.span>

            <div>
              <p className="text-lg font-bold">Projects</p>
              <p className="mt-1 text-xs text-white/40">
                Project experience and capabilities
              </p>
            </div>
          </div>

          {/* PROJECT CATEGORIES */}
          <motion.div
            variants={containerVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2"
          >
            {categories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { x: 5, transition: { duration: 0.25 } }
                }
                className="group flex items-center gap-4"
              >
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                        rotate: 8,
                        scale: 1.1,
                      }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D6B15E]/30 text-2xl text-[#D6B15E] transition-colors duration-300 group-hover:bg-[#D6B15E] group-hover:text-black"
                >
                  <category.icon className="h-6 w-6" />
                </motion.div>

                <div>
                  <h3 className="text-sm font-bold">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/40">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
