
"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import {
  Users,
  Layers,
  Target,
  Laptop,
  Clock,
  Globe,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "Skilled BIM professionals with practical project experience.",
  },
  {
    icon: Layers,
    title: "End-to-End Solutions",
    description: "From modeling and coordination to construction documentation.",
  },
  {
    icon: Target,
    title: "Precision & Quality",
    description: "Focused on accuracy, coordination and professional standards.",
  },
  {
    icon: Laptop,
    title: "Advanced Technology",
    description: "Industry tools including Revit, AutoCAD, BIM 360 and Navisworks.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Structured workflows designed to support dependable delivery.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description: "Workflows aligned with international BIM practices and expectations.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
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

export default function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[#111416] px-5 py-20 text-[#F5F5F2] sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#D6B15E]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-[1500px]">
        {/* SECTION HEADING */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-[#D6B15E]">
            WHY SR ENGINEERING?
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Designed to deliver
            <br />
            <span className="text-[#D6B15E]">confidence.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55">
            Engineering excellence through experience, technology,
            quality and a coordinated approach to every project.
          </p>
        </motion.div>

        {/* REASONS GRID */}
        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              variants={cardVariants}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                    y: -8,
                    transition: { duration: 0.3 },
                  }
              }
              className="group relative overflow-hidden border border-white/10 bg-[#171C20] p-7 transition-colors duration-300 hover:border-[#D6B15E] hover:bg-[#090A0B] sm:p-9"
            >
              {/* Hover background accent */}
              <motion.div
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#D6B15E]/0 blur-3xl transition-colors duration-500 group-hover:bg-[#D6B15E]/10"
              />

              <div className="relative flex items-center justify-between">
                <motion.span
                  className="text-[#D6B15E]"
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                        scale: 1.15,
                        rotate: 8,
                      }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <reason.icon className="h-8 w-8" />
                </motion.span>

                <span className="text-xs font-bold tracking-widest text-white/30 transition-colors duration-300 group-hover:text-[#D6B15E]">
                  0{index + 1}
                </span>
              </div>

              <h3 className="relative mt-8 text-xl font-bold text-[#F5F5F2]">
                {reason.title}
              </h3>

              <p className="relative mt-4 text-sm leading-7 text-white/55 transition-colors duration-300 group-hover:text-white/70">
                {reason.description}
              </p>

              {/* Animated gold underline */}
              <div className="relative mt-8 h-px w-full bg-white/10">
                <motion.div
                  className="h-full origin-left bg-[#D6B15E]"
                  initial={{ scaleX: 0.25 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
