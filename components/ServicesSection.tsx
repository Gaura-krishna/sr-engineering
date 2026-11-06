
"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

const services = [
  {
    id: "planning",
    number: "01",
    signal: "PL",
    label: "01 / PROJECT FOUNDATION",
    title: "Planning",
    description:
      "We establish a strong foundation for every project through strategic planning, project coordination and structured workflows. Our approach ensures clarity, efficiency and a clear direction from the beginning.",
    image: "/services/planning.jpg",
    tags: ["Project Planning", "BIM Strategy", "Coordination"],
  },
  {
    id: "design",
    number: "02",
    signal: "DS",
    label: "02 / CREATIVE DEVELOPMENT",
    title: "Design",
    description:
      "We transform concepts into practical engineering designs. Our team focuses on intelligent architectural and engineering solutions that balance functionality, aesthetics and technical requirements.",
    image: "/services/autocad01.jpg",
    tags: ["Architecture", "Engineering Design", "Documentation"],
  },
  {
    id: "modeling",
    number: "03",
    signal: "BM",
    label: "03 / DIGITAL CONSTRUCTION",
    title: "Modeling",
    description:
      "We develop intelligent 3D BIM models with accurate geometry, coordinated building systems and detailed project information to support better construction outcomes.",
    image: "/services/3dmodeling.png",
    tags: ["Revit", "3D BIM", "MEPF", "Structural BIM"],
  },
  {
    id: "installation",
    number: "04",
    signal: "IN",
    label: "04 / PROJECT EXECUTION",
    title: "Installing",
    description:
      "We support the transition from coordinated engineering models and documentation to on-site installation, helping teams execute projects with greater precision.",
    image: "/services/installation.jpg",
    tags: ["Installation Support", "Site Coordination", "Execution"],
  },
  {
    id: "freelancing",
    number: "05",
    signal: "FR",
    label: "05 / FLEXIBLE EXPERTISE",
    title: "Freelancing",
    description:
      "Flexible engineering and BIM services for companies, consultants and independent professionals. Get skilled support for project requirements, deadlines and specialized tasks.",
    image: "/services/freelancing.jpg",
    tags: ["BIM Outsourcing", "Project Support", "Consultancy"],
  },
  {
    id: "training",
    number: "06",
    signal: "TR",
    label: "06 / KNOWLEDGE DEVELOPMENT",
    title: "Coaching & Training",
    description:
      "We help aspiring engineers and professionals develop practical BIM knowledge through structured learning, software training and project-oriented guidance.",
    image: "/services/training.jpg",
    tags: ["BIM Training", "Practical Learning", "Career Guidance"],
  },
];

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#090A0B] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* BACKGROUND DECORATION */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
              x: [0, 25, 0],
              y: [0, -25, 0],
              scale: [1, 1.1, 1],
            }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#D6B15E]/[0.06] blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1450px]">

        {/* SECTION HEADING */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
          className="mb-20 max-w-full text-center"
        >
          <motion.p
            variants={revealVariants}
            className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#D6B15E]"
          >
            WHAT WE DO / OUR CAPABILITIES
          </motion.p>

          <motion.h2
            variants={revealVariants}
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl"
          >
            Engineering ideas.
            <br />
            <span className="text-[#D6B15E]">
              Building possibilities.
            </span>
          </motion.h2>

          <motion.p
            variants={revealVariants}
            className="mt-7 max-w-full text-sm leading-8 text-white/50 sm:text-base"
          >
            From initial planning to digital modeling and project
            execution, we deliver integrated engineering solutions
            designed to bring your vision to life.
          </motion.p>

          <motion.div
            variants={revealVariants}
            className="mt-9 flex items-center justify-center gap-3"
          >
            <motion.span
              animate={
                shouldReduceMotion
                  ? undefined
                  : { width: [48, 65, 48] }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-px bg-[#D6B15E]"
            />

            <span className="font-mono text-[10px] tracking-[0.2em] text-white/40">
              EXPLORE OUR SERVICES
            </span>
          </motion.div>
        </motion.div>

        {/* TIMELINE */}
        <div ref={containerRef} className="relative">

          {/* TIMELINE PROGRESS */}
          <div className="absolute bottom-0 left-[15px] top-0 hidden w-px bg-white/10 md:block lg:left-1/2 lg:-translate-x-1/2">
            <motion.div
              style={{
                height: shouldReduceMotion ? "100%" : lineHeight,
              }}
              className="w-full origin-top bg-gradient-to-b from-[#D6B15E] via-[#D6B15E]/80 to-[#D6B15E]/10"
            />
          </div>

          <div className="space-y-20 md:space-y-28">
            {services.map((service, index) => {
              const reverse = index % 2 !== 0;

              return (
                <motion.article
                  key={service.id}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                        opacity: 0,
                        y: 55,
                      }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1fr] md:gap-14 lg:gap-24 ${reverse ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                >
                  {/* TIMELINE MARKER */}
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                          opacity: 0,
                          scale: 0.5,
                        }
                    }
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                    }}
                    className="absolute -left-[1px] top-0 z-10 hidden md:flex lg:left-1/2 lg:-translate-x-1/2"
                  >
                    <div className="flex h-8 w-8 items-center justify-center border border-[#D6B15E] bg-[#090A0B]">
                      <span className="font-mono text-[9px] font-bold text-[#D6B15E]">
                        {service.signal}
                      </span>
                    </div>
                  </motion.div>

                  {/* IMAGE */}
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                          opacity: 0,
                          x: reverse ? 45 : -45,
                        }
                    }
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative min-w-0 overflow-hidden border border-white/10 bg-[#171C20] md:ml-12 md:mr-4 lg:mx-0"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {/* Autocad image */}
                      <Image
                        src={service.image}
                        alt={`${service.title} engineering services`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                      <motion.span
                        initial={
                          shouldReduceMotion
                            ? false
                            : { opacity: 0, y: 15 }
                        }
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.4,
                          duration: 0.5,
                        }}
                        className="absolute bottom-5 right-5 font-mono text-4xl font-bold text-white/50"
                      >
                        {service.number}
                      </motion.span>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
                      <span className="font-mono text-[9px] tracking-[0.2em] text-white/40">
                        ENGINEERING DIVISION
                      </span>

                      <motion.span
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                              opacity: [0.5, 1, 0.5],
                              scale: [0.85, 1, 0.85],
                            }
                        }
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="h-2 w-2 bg-[#D6B15E]"
                      />
                    </div>
                  </motion.div>

                  {/* SERVICE CONTENT */}
                  <motion.div
                    initial={shouldReduceMotion ? false : "hidden"}
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    variants={contentVariants}
                    className={`min-w-0 py-2 md:pl-5 lg:pl-0 ${reverse ? "md:pr-12 lg:pr-0" : ""
                      }`}
                  >
                    <motion.p
                      variants={revealVariants}
                      className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D6B15E]"
                    >
                      {service.label}
                    </motion.p>

                    <motion.h3
                      variants={revealVariants}
                      className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                    >
                      {service.title}
                      <span className="ml-2 text-[#D6B15E]">.</span>
                    </motion.h3>

                    <motion.p
                      variants={revealVariants}
                      className="mt-6 max-w-lg text-sm leading-8 text-white/50 sm:text-base"
                    >
                      {service.description}
                    </motion.p>

                    {/* SERVICE TAGS */}
                    <motion.div
                      variants={contentVariants}
                      className="mt-7 flex flex-wrap gap-2"
                    >
                      {service.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          variants={revealVariants}
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : { y: -3 }
                          }
                          className="border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[10px] text-white/60 transition-colors hover:border-[#D6B15E]/50 hover:text-[#D6B15E]"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.a
                      variants={revealVariants}
                      href="#contact"
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { x: 5 }
                      }
                      className="mt-9 inline-flex items-center gap-4 border-b border-[#D6B15E]/50 pb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#D6B15E] transition-all hover:gap-6 hover:border-[#D6B15E]"
                    >
                      Discuss This Service
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.a>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                opacity: 0,
                y: 35,
              }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-24 flex flex-col justify-between gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-center"
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] text-[#D6B15E]">
              HAVE A PROJECT IN MIND?
            </p>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Let's create something remarkable.
            </h3>
          </div>

          <motion.a
            href="#contact"
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                  scale: 1.04,
                }
            }
            whileTap={
              shouldReduceMotion
                ? undefined
                : {
                  scale: 0.97,
                }
            }
            className="inline-flex w-fit items-center gap-4 bg-[#D6B15E] px-7 py-4 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#E8C979]"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
