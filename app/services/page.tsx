
"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, ArrowDown, ArrowRight, Check } from "lucide-react";
import { socialLinks } from "@/components/Footer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-10 bg-[#D6B15E]" />
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6B15E]">
        {children}
      </span>
    </div>
  );
}

const serviceCategories = [
  {
    number: "01",
    title: "Planning",
    description:
      "Organized architectural and engineering plans developed around project requirements.",
    detail: "Project layouts · Floor plans · Building sections",
    href: "#planning",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architectural and structural design solutions supported by technical drawings and documentation.",
    detail: "Architectural design · RCC structural design",
    href: "#design",
  },
  {
    number: "03",
    title: "Modelling",
    description:
      "Three-dimensional building visualization and BIM-based architectural and structural modelling.",
    detail: "Revit · BIM modelling · 3D visualization",
    href: "#modelling",
  },
  {
    number: "04",
    title: "Installing",
    description:
      "Installation-related services identified as part of our engineering service offering.",
    detail: "Discuss your installation requirements",
    href: "#installation",
  },
  {
    number: "05",
    title: "Freelancing",
    description:
      "Flexible, project-based engineering design and modelling engagement opportunities.",
    detail: "Project support · Design assistance",
    href: "#freelancing",
  },
  {
    number: "06",
    title: "Coaching & Training",
    description:
      "Professional learning focused on engineering design and BIM-related software.",
    detail: "AutoCAD · Revit · BIM",
    href: "#training",
  },
];

const tools = [
  { name: "Revit", category: "Architecture & Structure" },
  { name: "AutoCAD", category: "Technical Drawings" },
  { name: "ETABS", category: "Structural Analysis" },
  { name: "SAFE", category: "Foundation & Slab Analysis" },
  { name: "Tekla", category: "Structural Modelling" },
  { name: "Lumion / Enscape", category: "3D Visualization" },
];

const workflow = [
  {
    number: "01",
    title: "Project Discussion",
    description:
      "Understand project requirements, scope, expectations and intended deliverables.",
  },
  {
    number: "02",
    title: "Planning & Assessment",
    description:
      "Identify design requirements, project constraints and technical considerations.",
  },
  {
    number: "03",
    title: "Design & Modelling",
    description:
      "Develop the agreed architectural and structural designs, drawings and BIM models.",
  },
  {
    number: "04",
    title: "Technical Review",
    description:
      "Review design information and coordinate relevant project disciplines.",
  },
  {
    number: "05",
    title: "Project Deliverables",
    description:
      "Organize and provide the agreed drawings, models and technical documentation.",
  },
];

export default function Page() {
  return (
    <main className="overflow-hidden bg-[#090A0B] text-[#F5F5F2]">

      {/* HERO */}
      <section className="relative flex min-h-[680px] items-center overflow-hidden border-b border-white/10 md:min-h-[760px]">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('/services/services-hero-image.jpg')",
            backgroundPosition: "left",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0B] via-[#090A0B]/90 to-[#090A0B]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0B] via-transparent to-[#090A0B]/30" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-36 md:px-10 lg:px-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Engineering Services</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-semibold leading-[1.06] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Engineering
              <br />
              Solutions.
              <br />
              <span className="text-[#D6B15E]">
                From Concept
                <br className="hidden sm:block" /> to Creation.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-8 text-white/65 md:text-lg"
            >
              We transform engineering requirements into practical design
              solutions through thoughtful planning, technical expertise and
              advanced digital modelling.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.16em] text-white/55"
            >
              <span>Planning</span>
              <span className="text-[#D6B15E]">/</span>
              <span>Design</span>
              <span className="text-[#D6B15E]">/</span>
              <span>Modelling</span>
              <span className="text-[#D6B15E]">/</span>
              <span>Engineering Solutions</span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#D6B15E] px-7 py-4 text-sm font-semibold text-[#090A0B] transition hover:bg-[#E8C979]"
              >
                Discuss Your Project <ArrowUpRight className="h-4 w-4" />
              </Link>

              <a
                href="#services-overview"
                className="inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-sm font-semibold transition hover:border-[#D6B15E] hover:text-[#D6B15E]"
              >
                Explore Our Expertise <ArrowDown className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 right-10 hidden text-right lg:block">
          <p className="text-xs uppercase tracking-[0.25em] text-white/35">
            Design / Engineering / Technology
          </p>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section
        id="services-overview"
        className="bg-[#111416] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <Reveal className="mb-14 max-w-3xl">
            <SectionLabel>Our Services</SectionLabel>

            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              Comprehensive Engineering Services
              <span className="text-[#D6B15E]"> Under One Roof.</span>
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-white/55">
              We offer engineering-related services focused on planning,
              design, modelling and technical support, alongside installation,
              freelance engagements and professional training.
            </p>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {serviceCategories.map((service) => (
              <motion.a
                key={service.number}
                href={service.href}
                variants={fadeUp}
                className="group min-h-[270px] border-b border-r border-white/10 p-7 transition duration-300 hover:bg-[#171C20] md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#D6B15E]">
                    {service.number}
                  </span>

                  <ArrowUpRight className="h-5 w-5 text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D6B15E]" />
                </div>

                <h3 className="mt-12 text-2xl font-semibold transition group-hover:text-[#D6B15E]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  {service.description}
                </p>

                <p className="mt-6 text-xs leading-6 text-white/35">
                  {service.detail}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TECHNICAL EXPERTISE INTRO */}
      {/* <section className="border-y border-white/10 bg-[#090A0B] py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:px-16">
          <Reveal>
            <SectionLabel>Technical Expertise</SectionLabel>

            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              Explore Our
              <br />
              <span className="text-[#D6B15E]">
                Engineering Capabilities.
              </span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="max-w-2xl leading-8 text-white/55">
              Our project portfolio demonstrates work across residential
              architectural planning, RCC structural design, BIM modelling and
              complex foundation engineering. Explore the technical areas
              supported by our documented project examples.
            </p>
          </Reveal>
        </div>
      </section> */}

      {/* PLANNING */}
      <section
        id="planning"
        className="scroll-mt-24 bg-[#090A0B] py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-2 lg:items-center lg:px-16">
          <Reveal className="order-2 lg:order-1">
            <SectionLabel>01 / Planning</SectionLabel>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Every successful project begins with a
              <span className="text-[#D6B15E]"> well-defined plan.</span>
            </h2>

            <p className="mt-7 leading-8 text-white/55">
              We translate project requirements into structured architectural
              plans and technical layouts that form the foundation for design
              development. Our documented residential projects demonstrate
              planning for multi-storey buildings and apartment developments.
            </p>

            <div className="mt-9 border-t border-white/10 pt-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6B15E]">
                Relevant Deliverables
              </h3>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Residential building floor plans",
                  "Apartment floor planning",
                  "Stilt parking layouts",
                  "Terrace planning",
                  "Building sections and elevations",
                  "Lift and staircase layouts",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/65">
                    <Check className="h-4 w-4 shrink-0 text-[#D6B15E]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-sm text-white/35">
              Featured applications: G+3 residential villa and G+4 apartment
              complex.
            </p>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="relative aspect-[5/4] overflow-hidden bg-[#171C20]">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('/services/planning-drawings.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <span className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.25em] text-[#D6B15E]">
                Architectural Planning
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DESIGN */}
      <section
        id="design"
        className="scroll-mt-24 border-y border-white/10 bg-[#111416] py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-2 lg:items-center lg:px-16">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden bg-[#171C20]">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('/services/structural-design.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <span className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.25em] text-[#D6B15E]">
                Architectural & Structural Design
              </span>
            </div>
          </Reveal>

          <Reveal>
            <SectionLabel>02 / Design</SectionLabel>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Designing structures with
              <span className="text-[#D6B15E]"> purpose and precision.</span>
            </h2>

            <p className="mt-7 leading-8 text-white/55">
              We develop architectural and structural design solutions that
              bring together building functionality, structural requirements
              and visual considerations. Our project examples include
              residential buildings and a multi-storey high-rise development.
            </p>

            <div className="mt-9 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6B15E]">
                  Architectural Design
                </h3>

                <ul className="mt-5 space-y-3 text-sm text-white/60">
                  {[
                    "Building floor plans",
                    "Front and side elevations",
                    "Longitudinal and cross-sections",
                    "Facade development",
                    "Balcony and staircase details",
                    "Lift-core details",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-[#D6B15E]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6B15E]">
                  Structural Design
                </h3>

                <ul className="mt-5 space-y-3 text-sm text-white/60">
                  {[
                    "RCC framed structural systems",
                    "Column, beam and slab layouts",
                    "Structural sections and detailing",
                    "Foundation-related design",
                    "RCC and steel design for the featured high-rise",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-[#D6B15E]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MODELLING */}
      <section
        id="modelling"
        className="scroll-mt-24 bg-[#090A0B] py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-2 lg:items-center lg:px-16">
          <Reveal>
            <SectionLabel>03 / BIM & 3D Modelling</SectionLabel>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Visualize. Coordinate.
              <span className="text-[#D6B15E]">
                {" "}Build with better understanding.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-white/55">
              Digital modelling helps represent architectural and structural
              designs in three dimensions, supporting visualization and
              technical understanding. Our documented work includes
              architectural and structural BIM modelling, Revit models and
              three-dimensional elevation visualization.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                "Architectural 3D building modelling",
                "Structural BIM modelling",
                "Revit architectural modelling",
                "Revit structural modelling",
                "3D elevation visualization",
                "LOD 400 structural modelling for the featured high-rise",
              ].map((item) => (
                <div
                  key={item}
                  className="border-l border-[#D6B15E]/60 py-2 pl-4 text-sm leading-6 text-white/65"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden bg-[#171C20]">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('/services/bim-modelling.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

              <span className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.25em] text-[#D6B15E]">
                BIM & Digital Modelling
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDATION ENGINEERING */}
      <section className="border-y border-white/10 bg-[#111416] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <SectionLabel>Advanced Structural Engineering</SectionLabel>

              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Engineering solutions for
                <span className="text-[#D6B15E]">
                  {" "}complex foundations.
                </span>
              </h2>

              <p className="mt-7 leading-8 text-white/55">
                The documented G+12 high-rise project demonstrates structural
                and foundation-related design work involving deep pile
                foundations, basement excavation support and coordination
                around existing underground infrastructure.
              </p>

              <div className="mt-8 border-l-2 border-[#D6B15E] pl-5">
                <p className="text-sm leading-7 text-white/65">
                  Featured application
                </p>

                <p className="mt-1 text-xl font-semibold">
                  G+12 High-Rise Building
                </p>

                <p className="mt-2 text-sm text-white/45">
                  Structural design with complex foundation system
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div
                className="relative min-h-[320px] overflow-hidden bg-[#171C20] md:min-h-[480px]"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,.65), transparent 60%), url('/services/foundation-engineering.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span className="absolute bottom-7 left-7 text-xs uppercase tracking-[0.25em] text-[#D6B15E]">
                  Structural & Foundation Engineering
                </span>
              </div>
            </Reveal>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-14 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              "RCC and steel structural analysis and design",
              "Deep pile foundation design",
              "Sheet pile and shoring design",
              "Deep basement excavation support",
              "Structural transfer solutions",
              "MEP and underground utility clash detection",
            ].map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="flex min-h-[125px] items-start gap-4 border-b border-r border-white/10 p-6"
              >
                <span className="text-sm text-[#D6B15E]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-7 text-white/65">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INSTALLATION / FREELANCING */}
      <section className="border-y border-white/10 bg-[#090A0B] py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <Reveal className="mb-14 max-w-3xl">
            <SectionLabel>Additional Services</SectionLabel>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Flexible support for
              <span className="text-[#D6B15E]">
                {" "}different project needs.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-white/55">
              Our service offering also includes installation-related services
              and freelance engineering engagements. Contact us to discuss
              your requirements and confirm the relevant scope.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            <Reveal className="border border-white/10 bg-[#111416] p-8 transition hover:border-[#D6B15E]/40 md:p-10">
              <span className="text-sm text-[#D6B15E]">
                04 / Installing
              </span>

              <h3
                id="installation"
                className="mt-10 scroll-mt-24 text-3xl font-semibold"
              >
                Installation Services
              </h3>

              <p className="mt-5 leading-8 text-white/55">
                Installation is identified as one of our service categories.
                Share your project requirements with us so the relevant
                installation scope and delivery approach can be discussed.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#D6B15E] transition hover:gap-5"
              >
                Discuss Installation Requirements <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal className="border border-white/10 bg-[#111416] p-8 transition hover:border-[#D6B15E]/40 md:p-10">
              <span className="text-sm text-[#D6B15E]">
                05 / Freelancing
              </span>

              <h3
                id="freelancing"
                className="mt-10 scroll-mt-24 text-3xl font-semibold"
              >
                Freelance Engineering Support
              </h3>

              <p className="mt-5 leading-8 text-white/55">
                We welcome enquiries for flexible, project-based engineering
                design and modelling engagements. Discuss your scope,
                expected outputs and project timeline with our team.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#D6B15E] transition hover:gap-5"
              >
                Discuss a Project <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="border-y border-white/10 bg-[#111416] py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <SectionLabel>Engineering Technology</SectionLabel>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Powered by
              <span className="text-[#D6B15E]">
                {" "}engineering technologies.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-white/50">
              Software identified in the project portfolio supports
              architectural design, structural engineering, modelling and
              visualization.
            </p>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 border-l border-t border-white/10 md:grid-cols-3 lg:grid-cols-6"
          >
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                variants={fadeUp}
                className="flex min-h-[160px] flex-col justify-between border-b border-r border-white/10 bg-transparent p-5 transition hover:bg-[#171C20] md:p-6"
              >
                <span className="text-lg font-semibold text-[#D6B15E]">
                  {tool.name}
                </span>

                <span className="mt-8 text-xs leading-5 text-white/40">
                  {tool.category}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TRAINING */}
      <section
        id="training"
        className="scroll-mt-24 bg-[#090A0B] py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-16">
          <Reveal>
            <SectionLabel>06 / Coaching & Training</SectionLabel>

            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              Building engineering skills through
              <span className="text-[#D6B15E]">
                {" "}practical learning.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl leading-8 text-white/55">
              Alongside engineering design services, SR Engineering identifies
              coaching and training as part of its offering. The training
              initiative focuses on engineering design and BIM-related
              software to help learners strengthen their technical knowledge.
            </p>

            <Link
              href="/training"
              className="mt-9 inline-flex items-center gap-3 bg-[#D6B15E] px-7 py-4 text-sm font-semibold text-[#090A0B] transition hover:bg-[#E8C979]"
            >
              Explore Training Programs <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal className="border border-white/10 bg-[#111416] p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D6B15E]">
              Training Areas
            </p>

            <div className="mt-8 space-y-0">
              {[
                "AutoCAD",
                "Revit Architecture",
                "Revit Structure",
                "BIM Modelling",
                "3D Visualization",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-white/10 py-5"
                >
                  <span className="text-base font-medium text-white/75">
                    {item}
                  </span>

                  <span className="text-sm text-[#D6B15E]">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#D6B15E] py-24 text-[#090A0B] md:py-32">
        <div className="absolute -right-28 -top-40 h-[500px] w-[500px] rounded-full border border-black/10" />
        <div className="absolute -right-10 -top-20 h-[350px] w-[350px] rounded-full border border-black/10" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[1fr_auto] lg:items-end lg:px-16">
          <Reveal className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-black/60">
              Let&apos;s Work Together
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
              Have an engineering
              <br />
              project in mind?
            </h2>

            <p className="mt-7 max-w-2xl leading-8 text-black/65">
              From architectural design and structural engineering to BIM
              modelling and technical support, let&apos;s discuss how SR Engineering
              Design Solutions can support your project.
            </p>
          </Reveal>

          <Reveal className="flex flex-col items-start gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-5 border border-[#090A0B] px-8 py-5 text-sm font-bold transition hover:bg-[#090A0B] hover:text-[#D6B15E]"
            >
              Request a Project Consultation
              <ArrowUpRight className="h-5 w-5" />
            </Link>

            <a
              href="tel:+919281202550"
              className="text-sm font-semibold text-black/70 transition hover:text-black"
            >
              +91 92812 02550
            </a>

            <a
              href="mailto:srengineeringdesignsolutions@gmail.com"
              className="break-all text-sm text-black/70 transition hover:text-black"
            >
              srengineeringdesignsolutions@gmail.com
            </a>

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
                    className="flex h-10 w-10 items-center justify-center border border-black/20 text-black/80 transition-all duration-300 hover:border-black hover:bg-black hover:text-[#D6B15E]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WORKING PROCESS */}
      <section className="bg-[#111416] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <Reveal className="mb-16 max-w-3xl">
            <SectionLabel>Our Working Process</SectionLabel>

            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              A clear process.
              <br />
              <span className="text-[#D6B15E]">
                A coordinated approach.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-white/50">
              We begin by understanding your technical requirements and
              defining an appropriate approach for the agreed project scope.
            </p>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative grid gap-9 sm:grid-cols-2 lg:grid-cols-5"
          >
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 lg:block" />

            {workflow.map((step) => (
              <motion.div key={step.number} variants={fadeUp}>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#D6B15E] bg-[#111416] text-sm font-semibold text-[#D6B15E]">
                  {step.number}
                </div>

                <h3 className="mt-7 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-10 text-xs leading-6 text-white/35">
            The process shown is a proposed project-enquiry and delivery
            framework. The actual workflow and deliverables are agreed for
            each engagement.
          </p>
        </div>
      </section>
    </main>
  );
}
