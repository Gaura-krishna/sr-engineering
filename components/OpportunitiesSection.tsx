
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const journey = [
  { number: "01", label: "Training" },
  { number: "02", label: "Practical Learning" },
  { number: "03", label: "Project Experience" },
  { number: "04", label: "Freelance Opportunities" },
  { number: "05", label: "Growth" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function OpportunitiesSection() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {}
    : {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.2 },
    };

  return (
    <section
      id="opportunities"
      className="relative overflow-hidden bg-[#090A0B] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      <motion.div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#D6B15E]/10 blur-[120px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.8, 0.5],
            }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        {/* Visual */}
        <motion.div
          {...reveal}
          variants={fadeUpVariants}
          className="relative mx-auto flex aspect-square w-full max-w-[430px] items-center justify-center"
        >
          {/* Outer orbit */}
          <motion.div
            animate={
              shouldReduceMotion ? undefined : { rotate: 360 }
            }
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-4 rounded-full border border-[#D6B15E]/20"
          />

          {/* Middle orbit */}
          <motion.div
            animate={
              shouldReduceMotion ? undefined : { rotate: -360 }
            }
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-12 rounded-full border border-dashed border-[#D6B15E]/40"
          />

          {/* Inner orbit */}
          <motion.div
            animate={
              shouldReduceMotion ? undefined : { rotate: 360 }
            }
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-20 rounded-full border border-[#D6B15E]/30"
          />

          <motion.div
            className="absolute h-44 w-44 rounded-full bg-[#D6B15E]/10 blur-3xl"
            animate={
              shouldReduceMotion
                ? undefined
                : { scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Center logo */}
          <motion.div
            whileHover={
              shouldReduceMotion
                ? undefined
                : { scale: 1.06, boxShadow: "0 0 80px rgba(214,177,94,0.25)" }
            }
            className="relative flex h-32 w-32 items-center justify-center border border-[#D6B15E] bg-[#171C20] shadow-[0_0_60px_rgba(214,177,94,0.12)]"
          >
            <div className="text-center">
              <span className="block text-4xl font-bold text-[#D6B15E]">
                SR
              </span>
              <span className="mt-2 block text-[8px] tracking-[0.2em] text-white/60">
                ENGINEERING
              </span>
            </div>
          </motion.div>

          {/* Floating labels */}
          <motion.span
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -8, 0] }
            }
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-6 top-1/4 border border-[#D6B15E]/40 bg-[#171C20] px-3 py-2 text-xs text-[#D6B15E]"
          >
            BIM
          </motion.span>

          <motion.span
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, 8, 0] }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute right-2 top-1/3 border border-[#D6B15E]/40 bg-[#171C20] px-3 py-2 text-xs text-[#D6B15E]"
          >
            DESIGN
          </motion.span>

          <motion.span
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -7, 0] }
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-10 left-1/4 border border-[#D6B15E]/40 bg-[#171C20] px-3 py-2 text-xs text-[#D6B15E]"
          >
            GROWTH
          </motion.span>
        </motion.div>

        {/* Content */}
        <motion.div {...reveal} variants={containerVariants}>
          <motion.span
            variants={fadeUpVariants}
            className="block text-xs font-bold tracking-[0.25em] text-[#D6B15E]"
          >
            TRAINING + OPPORTUNITIES
          </motion.span>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            Learn. Practice.
            <br />
            <span className="text-[#D6B15E]">Work. Grow.</span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mt-7 max-w-2xl text-sm leading-8 text-white/55 sm:text-base"
          >
            We support students and job-seeking candidates who want
            to build practical BIM skills and gain real project exposure.
          </motion.p>

          <motion.p
            variants={fadeUpVariants}
            className="mt-4 max-w-2xl text-sm leading-8 text-white/55 sm:text-base"
          >
            After training, eligible candidates can have opportunities
            to contribute to projects based on their skills, availability
            and project requirements.
          </motion.p>

          {/* Journey */}
          <motion.div
            variants={containerVariants}
            className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
          >
            {journey.map((item) => (
              <motion.div
                key={item.number}
                variants={fadeUpVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { x: 5, borderColor: "rgba(214,177,94,0.9)" }
                }
                className="border-l border-[#D6B15E]/40 pl-4 transition-colors"
              >
                <motion.span
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.15 }}
                  className="inline-block text-sm font-bold text-[#D6B15E]"
                >
                  {item.number}
                </motion.span>

                <p className="mt-3 text-xs font-semibold leading-5 text-white/75">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.a
            variants={fadeUpVariants}
            href="#contact"
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-4 bg-[#D6B15E] px-7 py-4 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#E8C979]"
          >
            Know More
            <motion.span
              animate={
                shouldReduceMotion ? undefined : { x: [0, 5, 0] }
              }
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
