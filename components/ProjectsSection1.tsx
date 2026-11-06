
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "RESIDENTIAL DEVELOPMENT",
    title: "Residential",
    subtitle: "From individual homes to high-rise developments.",
    description:
      "Engineering and BIM support for residential developments of varying scales. From individual buildings and low-rise homes to complex multi-storey residential structures, we support projects through coordinated design and detailed modeling.",
    range: ["Individual", "G+2", "G+5", "G+10", "G+15 to G+25"],
    images: [
      {
        src: "/projects/residential-01.jpg",
        alt: "Contemporary residential architecture",
        className: "col-span-2 row-span-2 aspect-[4/3]",
      },
      {
        src: "/projects/residential-02.jpg",
        alt: "Residential apartment development",
        className: "col-span-1 aspect-[4/3]",
      },
      {
        src: "/projects/residential-03.jpg",
        alt: "High rise residential tower",
        className: "col-span-1 aspect-[4/3]",
      },
    ],
  },
  {
    number: "02",
    category: "COMMERCIAL DEVELOPMENT",
    title: "Commercial",
    subtitle: "Building solutions designed around complexity.",
    description:
      "Supporting commercial developments with engineering design, BIM modeling, and multidisciplinary coordination. Our scope covers basement structures, ground-level developments, and multi-storey commercial buildings.",
    range: ["B-3", "G+3", "Up to 6 Floors", "Design Coordination", "BIM Modeling"],
    images: [
      {
        src: "/projects/commercial-01.jpg",
        alt: "Modern commercial building",
        className: "col-span-2 row-span-2 aspect-[4/3]",
      },
      {
        src: "/projects/commercial-02.jpg",
        alt: "Commercial building interior",
        className: "col-span-1 aspect-[4/3]",
      },
      {
        src: "/projects/commercial-03.jpg",
        alt: "Commercial architecture",
        className: "col-span-1 aspect-[4/3]",
      },
    ],
  },
  {
    number: "03",
    category: "INTERNATIONAL PROJECTS",
    title: "UAE & UK",
    subtitle: "Engineering expertise across international markets.",
    description:
      "Our international project experience includes developments in the Middle East and UK. We support project teams with coordinated engineering, BIM workflows, technical detailing, and project-specific documentation.",
    range: ["UAE", "Middle East", "United Kingdom", "BIM Coordination", "Technical Design"],
    images: [
      {
        src: "/projects/uae-01.jpg",
        alt: "Modern UAE architectural development",
        className: "col-span-2 row-span-2 aspect-[4/3]",
      },
      {
        src: "/projects/uk-01.jpg",
        alt: "United Kingdom architecture",
        className: "col-span-1 aspect-[4/3]",
      },
      {
        src: "/projects/international-01.jpg",
        alt: "International building project",
        className: "col-span-1 aspect-[4/3]",
      },
    ],
  },
  {
    number: "04",
    category: "SPECIALIZED DEVELOPMENTS",
    title: "Beyond Buildings",
    subtitle: "Complex spaces. Specialized engineering.",
    description:
      "Our project capabilities extend beyond conventional buildings to large-scale public, entertainment, transportation, retail, and hospitality developments. We bring coordinated design and technical modeling to projects with demanding architectural and engineering requirements.",
    range: [
      "Grandstands",
      "Stadiums",
      "Airports",
      "Shopping Malls",
      "Resorts",
    ],
    images: [
      {
        src: "/projects/stadium-01.jpg",
        alt: "Large sports stadium and grandstand",
        className: "col-span-2 row-span-2 aspect-[4/3]",
      },
      {
        src: "/projects/airport-01.jpg",
        alt: "Modern airport terminal architecture",
        className: "col-span-1 aspect-[4/3]",
      },
      {
        src: "/projects/resort-01.webp",
        alt: "Luxury resort architecture",
        className: "col-span-1 aspect-[4/3]",
      },
    ],
  },
];

const revealVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
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

function ProjectGallery({
  images,
  reduceMotion,
}: {
  images: (typeof projects)[number]["images"];
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      variants={staggerVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-3 grid-rows-2 gap-3"
    >
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          variants={revealVariants}
          whileHover={
            reduceMotion
              ? undefined
              : { y: -5, transition: { duration: 0.3 } }
          }
          className={`group relative overflow-hidden bg-[#171C20] ${image.className}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <motion.div
            initial={false}
            className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent"
          />

          {!reduceMotion && (
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="pointer-events-none absolute inset-0 border border-[#D6B15E]/40"
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function ProjectsSection1() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="projects"
      className="overflow-hidden bg-[#090A0B] py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Intro */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerVariants}
          className="mb-20 grid gap-8 lg:mb-28 lg:grid-cols-2 lg:items-end"
        >
          <div>
            <motion.span
              variants={revealVariants}
              className="mb-6 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-[#D6B15E]"
            >
              <span className="h-px w-9 bg-[#D6B15E]" />
              SELECTED PROJECTS
            </motion.span>

            <motion.h2
              variants={revealVariants}
              className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Built on vision.
              <span className="block text-[#D6B15E]">
                Driven by detail.
              </span>
            </motion.h2>
          </div>

          <motion.div variants={revealVariants} className="max-w-lg lg:ml-auto">
            <p className="text-base leading-8 text-white/55">
              Every development brings a unique set of challenges.
              We combine engineering knowledge, design precision,
              and BIM expertise to support projects across different
              sectors and scales.
            </p>
          </motion.div>
        </motion.div>

        {/* Project categories */}
        <div className="space-y-28 md:space-y-36">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView={shouldReduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.12 }}
              variants={staggerVariants}
            >
              {/* Project category header */}
              <motion.div
                variants={revealVariants}
                className="mb-8 flex items-center justify-between border-b border-white/15 pb-5"
              >
                <span className="text-xs font-semibold tracking-[0.25em] text-[#D6B15E]">
                  {project.category}
                </span>

                <span className="text-sm text-white/35">
                  / {project.number}
                </span>
              </motion.div>

              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
                {/* Text content */}
                <motion.div
                  variants={revealVariants}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  <motion.h3
                    variants={revealVariants}
                    className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
                  >
                    {project.title}

                    <span className="mt-3 block text-lg font-normal text-white/45 sm:text-xl">
                      {project.subtitle}
                    </span>
                  </motion.h3>

                  <motion.p
                    variants={revealVariants}
                    className="mt-7 max-w-lg text-sm leading-8 text-white/55 sm:text-base"
                  >
                    {project.description}
                  </motion.p>

                  <motion.div variants={revealVariants} className="mt-9">
                    <span className="text-[10px] font-semibold tracking-[0.25em] text-[#D6B15E]">
                      PROJECT TYPES & SCOPE
                    </span>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.range.map((item) => (
                        <motion.span
                          key={item}
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : { y: -3, borderColor: "#D6B15E" }
                          }
                          className="border border-white/15 px-4 py-2 text-xs text-white/65 transition-colors hover:border-[#D6B15E] hover:text-[#D6B15E]"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.a
                    variants={revealVariants}
                    href="#contact"
                    whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                    className="group mt-9 inline-flex items-center gap-4 text-sm font-semibold"
                  >
                    Discuss a similar project

                    <ArrowRight className="h-4 w-4 text-[#D6B15E] transition-transform group-hover:translate-x-2" />
                  </motion.a>
                </motion.div>

                {/* Image gallery */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <ProjectGallery
                    images={project.images}
                    reduceMotion={shouldReduceMotion}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerVariants}
          className="mt-28 border-t border-white/15 pt-12 md:mt-36"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <motion.span
                variants={revealVariants}
                className="block text-xs font-semibold tracking-[0.25em] text-[#D6B15E]"
              >
                YOUR NEXT PROJECT STARTS HERE
              </motion.span>

              <motion.h3
                variants={revealVariants}
                className="mt-4 text-3xl font-semibold sm:text-4xl"
              >
                Let's turn your vision into reality.
              </motion.h3>
            </div>

            <motion.a
              variants={revealVariants}
              href="#contact"
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              className="inline-flex w-fit items-center gap-4 bg-[#D6B15E] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#E8C979]"
            >
              Start a Conversation
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
