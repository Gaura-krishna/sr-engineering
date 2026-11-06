
"use client";

import Image from "next/image";
import {
  ArrowRight,
  Users,
  Layers,
  Target,
  Clock,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import ContactSection from "@/components/ContactSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PortfolioBanner from "@/components/PortfolioBanner";
import ExpertiseSection from "@/components/ExpertiseSection";
import ServicesSection from "@/components/ServicesSection";
import OpportunitiesSection from "@/components/OpportunitiesSection";
import ProjectsSection1 from "@/components/ProjectsSection1";

const stats = [
  {
    value: "23–25",
    description: (
      <>
        Skilled BIM
        <br />
        Professionals
      </>
    ),
  },
  {
    value: "5+",
    description: (
      <>
        Core Software
        <br />
        Platforms
      </>
    ),
  },
  {
    value: "360°",
    description: (
      <>
        End-to-End
        <br />
        Solutions
      </>
    ),
  },
];

const features = [
  {
    icon: Users,
    title: "23–25",
    subtitle: "Skilled BIM Professionals",
  },
  {
    icon: Layers,
    title: "End-to-End",
    subtitle: "BIM & Engineering Solutions",
  },
  {
    icon: Target,
    title: "Precision",
    subtitle: "Quality & Coordination",
  },
  {
    icon: Clock,
    title: "On-Time",
    subtitle: "Project Delivery",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative isolate overflow-hidden bg-[#090A0B] text-white"
      >
        {/* Animated background effects */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                  x: [0, 35, 0],
                  y: [0, -25, 0],
                  scale: [1, 1.12, 1],
                }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D6B15E]/10 blur-[120px]"
          />

          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                  x: [0, -30, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.15, 1],
                }
            }
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#D6B15E]/10 blur-[140px]"
          />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />
        </div>

        <div className="mx-auto grid min-h-[650px] max-w-[1600px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-12 xl:px-16">

          {/* LEFT CONTENT */}
          <motion.div
            className="relative z-10 max-w-2xl"
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              variants={revealVariants}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#D6B15E]" />
              <p className="text-xs font-bold tracking-[0.28em] text-white sm:text-sm">
                PLANNING • DESIGNING • BIM MODELING
              </p>
            </motion.div>

            <motion.h1
              variants={revealVariants}
              className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
            >
              <span className="block text-[#D6B15E]">
                SR Engineering Design Solutions
              </span>
            </motion.h1>

            <motion.p
              variants={revealVariants}
              className="mt-7 max-w-xl text-lg leading-7 text-white/60 sm:text-base sm:leading-8"
            >
              Turning ideas into reality with innovative modelling, smart
              planning, and creative designing. We bring precision, purpose, and
              perfection to every project.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              variants={revealVariants}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-4 bg-[#D6B15E] px-7 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#E8C979]"
              >
                Our Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-4 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-[#D6B15E] hover:text-[#D6B15E]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* HERO STATISTICS */}
            <motion.div
              variants={containerVariants}
              className="mt-12 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-7"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.value}
                  variants={revealVariants}
                  className="px-3 first:pl-0 last:pr-0 sm:px-5"
                >
                  <strong className="block text-2xl font-bold text-[#D6B15E] sm:text-3xl">
                    {stat.value}
                  </strong>
                  <span className="mt-2 block text-[10px] leading-4 text-white/50 sm:text-xs">
                    {stat.description}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT BIM VISUALIZATION */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 45, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-3xl lg:max-w-none"
          >
            <div className="absolute -inset-3 rounded-sm border border-[#D6B15E]/20" />

            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative aspect-[4/3] overflow-hidden border border-white/10"
            >
              <Image
                src="/images-services/3d.jpg"
                alt="SR Engineering structural BIM building visualization"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090A0B]/35 via-transparent to-transparent" />

              {/* TECHNICAL LABEL */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.7 }}
                className="absolute bottom-4 left-4 border-l-2 border-[#D6B15E] bg-black/60 px-4 py-3 backdrop-blur-md sm:bottom-6 sm:left-6"
              >
                <p className="text-[9px] font-bold tracking-[0.2em] text-[#D6B15E]">
                  DIGITAL ENGINEERING
                </p>
                <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                  BIM • MODELING • COORDINATION
                </p>
              </motion.div>

              <span className="absolute right-4 top-4 text-[10px] font-semibold tracking-widest text-white/60">
                SR / 001
              </span>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-5 flex items-center justify-between text-[9px] tracking-[0.2em] text-white/40 sm:text-[10px]"
            >
              <span>STRUCTURAL BIM VISUALIZATION</span>
              <span>PRECISION IN EVERY DETAIL</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="border-y border-white/10 bg-[#111416] text-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-2 divide-x divide-y divide-white/10 px-5 py-5 sm:px-8 md:grid-cols-4 md:divide-y-0 lg:px-12">
          {features.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.1}
              className="flex items-center justify-center gap-3 px-3 py-5 sm:gap-4 md:py-4"
            >
              <motion.span
                whileHover={shouldReduceMotion ? undefined : { rotate: 8, scale: 1.15 }}
                className="text-[#D6B15E]"
              >
                <item.icon className="h-6 w-6" />
              </motion.span>

              <div>
                <h3 className="text-sm font-bold sm:text-base lg:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1 text-[10px] text-white/50 sm:text-xs">
                  {item.subtitle}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EXISTING PAGE SECTIONS */}
      <WhyChooseUs />
      <PortfolioBanner />
      <ExpertiseSection />
      <ServicesSection />
      <OpportunitiesSection />
      <ProjectsSection1 />
      <ContactSection />
    </main>
  );
}
