
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Building2, Layers, Cpu, Check } from "lucide-react";

const expertise = [
  {
    number: "01",
    title: "Architecture",
    subtitle: "Architectural BIM",
    description:
      "Smart, functional and sustainable design workflows integrated with BIM.",
    icon: Building2,
    image: "/home/discipline-01.jpg",
    details: [
      "3D Architectural Modeling",
      "Design Documentation",
      "BIM Visualization",
    ],
  },
  {
    number: "02",
    title: "Structure",
    subtitle: "Structural Engineering",
    description:
      "Safe, efficient and coordinated structural modeling and documentation.",
    icon: Layers,
    image: "/home/discipline-02.jpg",
    details: [
      "Structural BIM Modeling",
      "Steel & Concrete Detailing",
      "Coordination",
    ],
  },
  {
    number: "03",
    title: "MEPF",
    subtitle: "Building Services",
    description:
      "Integrated Mechanical, Electrical, Plumbing and Fire Protection coordination.",
    icon: Cpu,
    image: "/home/discipline-03.jpg",
    details: [
      "Mechanical Systems",
      "Electrical Modeling",
      "Plumbing & Fire Protection",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 55,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function DisciplineMedia({
  number,
  image,
  title,
}: {
  number: string;
  image?: string;
  title: string;
}) {
  return (
    <div className="relative my-8 flex h-52 items-center justify-center overflow-hidden border border-white/10 bg-[#090A0B] transition-colors duration-500 group-hover:border-[#D6B15E]/40 group-hover:bg-[#111416]">
      {image ? (
        <>
          <Image
            src={image}
            alt={`${title} Discipline`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
            className="object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-85"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#171C20] via-[#090A0B]/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
        </>
      ) : (
        /* Technical grid fallback */
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#D6B15E_1px,transparent_1px),linear-gradient(90deg,#D6B15E_1px,transparent_1px)] [background-size:22px_22px]" />
      )}

      {/* Animated scanning line */}
      <motion.div
        animate={{ y: ["-100%", "300%"] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#D6B15E]/40"
      />
    </div>
  );
}

export default function ExpertiseSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-[#111416] px-5 py-20 text-[#F5F5F2] sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D6B15E]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-[1500px]">

        {/* SECTION HEADING */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-[#D6B15E]">
              OUR EXPERTISE
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Three disciplines.
              <br />
              <span className="text-[#D6B15E]">
                One coordinated workflow.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/55">
            Connecting architectural, structural and building
            services through intelligent engineering coordination.
          </p>
        </motion.div>

        {/* EXPERTISE CARDS */}
        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {expertise.map((item) => (
            <motion.article
              key={item.number}
              variants={cardVariants}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                    y: -8,
                    transition: { duration: 0.3 },
                  }
              }
              className="group relative overflow-hidden border border-white/10 bg-[#171C20] p-7 transition-colors duration-500 hover:border-[#D6B15E] hover:bg-[#090A0B] sm:p-9"
            >
              {/* CARD TOP */}
              <div className="relative flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-[#D6B15E]">
                  DISCIPLINE / {item.number}
                </span>

                <motion.span
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { rotate: 12, scale: 1.15 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="text-[#D6B15E]"
                >
                  <item.icon className="h-9 w-9" />
                </motion.span>
              </div>

              {/* DISCIPLINE IMAGE */}
              <DisciplineMedia
                number={item.number}
                image={item.image}
                title={item.title}
              />

              {/* CARD CONTENT */}
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D6B15E]">
                {item.subtitle}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#F5F5F2]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55 transition-colors duration-300 group-hover:text-white/70">
                {item.description}
              </p>

              {/* DETAILS */}
              <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                {item.details.map((detail, index) => (
                  <motion.li
                    key={detail}
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, x: -12 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.12,
                    }}
                    className="flex items-center gap-3 text-xs text-white/65"
                  >
                    <Check className="h-3 w-3 shrink-0 text-[#D6B15E]" />
                    {detail}
                  </motion.li>
                ))}
              </ul>

              {/* BOTTOM ACCENT */}
              <motion.div
                initial={{ scaleX: 0.2 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mt-8 h-px origin-left bg-[#D6B15E]/60"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
