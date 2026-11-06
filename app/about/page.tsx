
"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";

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
  visible: {
    transition: { staggerChildren: 0.13 },
  },
};

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
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

const capabilities = [
  {
    number: "01",
    title: "Architectural Design",
    description:
      "Thoughtful architectural planning and design solutions that balance functionality, aesthetics and project requirements.",
  },
  {
    number: "02",
    title: "Structural Engineering",
    description:
      "Detailed structural design and engineering support focused on accuracy, coordination and practical execution.",
  },
  {
    number: "03",
    title: "Electrical Engineering",
    description:
      "Electrical design and documentation that support efficient, coordinated building systems.",
  },
  {
    number: "04",
    title: "Mechanical & HVAC",
    description:
      "Mechanical system design and HVAC coordination for integrated building environments.",
  },
  {
    number: "05",
    title: "Plumbing Design",
    description:
      "Building plumbing and public health engineering design with attention to system coordination.",
  },
  {
    number: "06",
    title: "Fire Protection",
    description:
      "Fire protection design support that considers building requirements and coordinated delivery.",
  },
];

const technologies = [
  {
    title: "Building Information Modeling",
    short: "BIM",
    description:
      "Intelligent 3D modeling and coordinated digital building information workflows.",
  },
  {
    title: "Revit & BIM Modeling",
    short: "REVIT",
    description:
      "Model development, documentation and multidisciplinary coordination.",
  },
  {
    title: "CAD & Drafting",
    short: "CAD",
    description:
      "Precise technical drawings and detailed engineering documentation.",
  },
  {
    title: "3D Visualization",
    short: "3D",
    description:
      "Visual communication that helps bring design concepts and spaces to life.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description: "We begin by understanding project goals, scope and requirements.",
  },
  {
    number: "02",
    title: "Plan & Analyze",
    description: "We evaluate project needs and establish a clear design approach.",
  },
  {
    number: "03",
    title: "Design & Develop",
    description: "Our team develops detailed engineering and digital design solutions.",
  },
  {
    number: "04",
    title: "Coordinate & Review",
    description: "We review design information and coordinate across disciplines.",
  },
  {
    number: "05",
    title: "Deliver & Support",
    description: "We deliver organized project outputs and support the next steps.",
  },
];

const benefits = [
  "Multidisciplinary engineering capabilities",
  "Technology-driven design workflows",
  "BIM-focused digital engineering",
  "Practical and project-oriented approach",
  "Focus on coordination and documentation",
  "Professional learning and development",
];

export default function Page() {
  return (
    <main className="overflow-hidden bg-[#090A0B] text-[#F5F5F2]">
      {/* HERO */}
      <section className="relative flex min-h-[720px] items-center overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('/about/about-hero-image.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0B] via-[#090A0B]/90 to-[#090A0B]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0B] via-transparent to-[#090A0B]/30" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-36 md:px-10 lg:px-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="mb-7 flex items-center gap-3">
              <span className="h-px w-12 bg-[#D6B15E]" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15E]">
                About SR Engineering
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl"
            >
              Engineering
              <br />
              Excellence.
              <br />
              <span className="text-[#D6B15E]">Designed for</span>
              <br />
              the Future.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-8 text-white/65 md:text-lg"
            >
              We bring engineering ideas to life through intelligent design
              solutions, advanced technologies and industry-focused expertise —
              while empowering professionals with the skills to shape tomorrow.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-3 bg-[#D6B15E] px-7 py-4 text-sm font-semibold text-[#090A0B] transition hover:bg-[#E8C979]"
              >
                Explore Our Services <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-sm font-semibold transition hover:border-[#D6B15E] hover:text-[#D6B15E]"
              >
                Get in Touch <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 right-10 hidden text-right lg:block">
          <p className="text-xs uppercase tracking-[0.3em] text-white/35">
            Engineering / Design / Innovation
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-2 lg:items-center lg:px-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#15191B]">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#D6B15E]">
                  Our Approach
                </p>
                <p className="mt-2 text-2xl font-medium">
                  Ideas into engineering solutions.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-7 -right-5 hidden h-36 w-36 border border-[#D6B15E]/50 md:block" />
          </Reveal>

          <Reveal className="lg:pl-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#D6B15E]">
              Who We Are
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Engineering Knowledge.
              <br />
              <span className="text-[#D6B15E]">Practical Solutions.</span>
              <br />
              Lasting Impact.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-white/60">
              <p>
                SR Engineering Design Solutions provides engineering design and technology solutions for the built, combining technical expertise with modern digital engineering.              </p>
              <p>
                We support projects through engineering design, documentation, BIM modeling, and coordination.

              </p>
              <p>
                We also offer industry-focused training to help aspiring professionals build practical skills and career readiness.

              </p>
            </div>
            <div className="mt-10 h-px w-full bg-white/10" />
            <p className="mt-5 text-sm font-medium tracking-wide text-[#D6B15E]">
              Engineering Design · Digital Technology · Professional Growth
            </p>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-[#101820] py-28 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <Reveal className="mb-16 max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#D6B15E]">
              What We Do
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              Engineering capabilities
              <span className="text-[#D6B15E]"> built around your needs.</span>
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-white/55">
              Our multidisciplinary approach connects design expertise across
              key engineering domains to support coordinated project delivery.
            </p>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {capabilities.map((item) => (
              <motion.div
                key={item.number}
                variants={fadeUp}
                className="group min-h-[260px] border-b border-r border-white/10 p-8 transition duration-300 hover:bg-white/[0.035] md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#D6B15E]">{item.number}</span>
                  <ArrowUpRight className="h-5 w-5 text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D6B15E]" />
                </div>
                <h3 className="mt-12 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/50">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-2 lg:items-center lg:px-16">
          <Reveal>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#D6B15E]">
              Technology & Innovation
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              Better design
              <br />
              through <span className="text-[#D6B15E]">digital thinking.</span>
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-white/55">
              We embrace modern engineering technologies to improve the way
              building information is developed, visualized and coordinated.
              Our digital workflows help connect design intent with practical
              project requirements.
            </p>
            <Link
              href="/services"
              className="mt-9 inline-flex items-center gap-3 border-b border-[#D6B15E] pb-2 text-sm font-semibold text-[#D6B15E] transition hover:gap-5"
            >
              Discover our capabilities <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            {technologies.map((item, index) => (
              <motion.div
                key={item.short}
                variants={fadeUp}
                className={`min-h-[220px] border border-white/10 p-6 transition duration-300 hover:border-[#D6B15E]/60 md:p-8 ${index === 1 || index === 2 ? "bg-[#101820]" : "bg-white/[0.025]"
                  }`}
              >
                <span className="text-3xl font-light tracking-tight text-[#D6B15E]">
                  {item.short}
                </span>
                <h3 className="mt-9 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#101820] py-28 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#D6B15E]">
              How We Work
            </p>
            <h2 className="text-4xl font-semibold md:text-6xl">
              A clear approach.
              <br />
              <span className="text-[#D6B15E]">Coordinated delivery.</span>
            </h2>
            <p className="mt-6 leading-8 text-white/50">
              Every project deserves a structured approach. We focus on
              understanding requirements, developing solutions and delivering
              coordinated design information.
            </p>
          </Reveal>

          <div className="relative">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 lg:block" />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5"
            >
              {process.map((item) => (
                <motion.div key={item.number} variants={fadeUp}>
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#D6B15E] bg-[#101820] text-sm font-semibold text-[#D6B15E]">
                    {item.number}
                  </div>
                  <h3 className="mt-7 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 md:px-10 lg:grid-cols-2 lg:px-16">
          <Reveal className="border border-white/10 bg-[#101820] p-9 md:p-14">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6B15E]">
              01 / Our Mission
            </span>
            <h2 className="mt-12 text-3xl font-semibold md:text-4xl">
              To deliver meaningful engineering solutions.
            </h2>
            <p className="mt-7 leading-8 text-white/55">
              Our mission is to support projects with thoughtful engineering
              design, modern digital technologies and a practical approach to
              technical delivery — while helping professionals develop
              relevant, industry-focused skills.
            </p>
          </Reveal>

          <Reveal className="border border-[#D6B15E]/30 bg-[#D6B15E] p-9 text-[#090A0B] md:p-14">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
              02 / Our Vision
            </span>
            <h2 className="mt-12 text-3xl font-semibold md:text-4xl">
              Shaping the future of engineering and design.
            </h2>
            <p className="mt-7 leading-8 text-black/65">
              Our vision is to contribute to a smarter built environment by
              connecting engineering knowledge, digital innovation and
              professional development.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROFESSIONAL DEVELOPMENT */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[#101820] py-24 md:py-28">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#D6B15E]/10" />
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#D6B15E]/10" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-16">
          <Reveal>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#D6B15E]">
              Beyond Engineering Services
            </p>
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
              Empowering the next generation of
              <span className="text-[#D6B15E]"> engineering professionals.</span>
            </h2>
            <p className="mt-7 max-w-2xl leading-8 text-white/55">
              We believe professional growth is an important part of the
              engineering ecosystem. Through practical training and coaching,
              we aim to help learners strengthen their technical foundations
              and become more familiar with industry tools and workflows.
            </p>
          </Reveal>

          <Reveal className="border border-white/10 bg-black/20 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D6B15E]">
              Learning Focus
            </p>
            <ul className="mt-7 space-y-5">
              {[
                "BIM and digital engineering",
                "Engineering design tools",
                "Practical project workflows",
                "Technical documentation",
                "Career-oriented skill development",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 text-sm text-white/75">
                  <Check className="h-4 w-4 shrink-0 text-[#D6B15E]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/training"
              className="mt-9 inline-flex w-full items-center justify-center gap-3 bg-[#D6B15E] px-6 py-4 text-sm font-semibold text-[#090A0B] transition hover:bg-[#E8C979]"
            >
              Explore Training Programs <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#D6B15E]">
                Why SR Engineering
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
                Built on knowledge.
                <br />
                <span className="text-[#D6B15E]">Driven by innovation.</span>
              </h2>
              <p className="mt-7 max-w-lg leading-8 text-white/50">
                We bring together engineering understanding, digital
                capabilities and a commitment to practical solutions.
              </p>
            </Reveal>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-0"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  variants={fadeUp}
                  className="flex items-center gap-6 border-b border-white/10 py-6"
                >
                  <span className="text-sm text-[#D6B15E]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base font-medium text-white/80 md:text-lg">
                    {benefit}
                  </p>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-[#D6B15E]" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#D6B15E] py-24 text-[#090A0B] md:py-32">
        <div className="absolute -right-20 -top-40 h-[500px] w-[500px] rounded-full border border-black/10" />
        <div className="absolute -right-5 -top-24 h-[350px] w-[350px] rounded-full border border-black/10" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 md:px-10 lg:flex-row lg:items-end lg:px-16">
          <Reveal className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-black/60">
              Let&apos;s Build What&apos;s Next
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
              Let's talk about
              <br />
              your project.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-black/65">
              Let&apos;s discuss how engineering design, digital technology and
              practical expertise can support your next project.
            </p>
          </Reveal>

          <Reveal>
            <Link
              href="/contact"
              className="inline-flex items-center gap-5 border border-[#090A0B] px-8 py-5 text-sm font-bold transition hover:bg-[#090A0B] hover:text-[#D6B15E]"
            >
              Start a Conversation <ArrowUpRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
