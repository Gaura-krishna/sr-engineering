
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const disciplines = [
  {
    number: "01",
    title: "Architecture",
    description:
      "Develop architectural drafting, modeling, visualization and BIM skills for modern building projects.",
    tools: ["AutoCAD", "Revit", "SketchUp", "3ds Max"],
    image: "/training/architecture.jpg",
  },
  {
    number: "02",
    title: "Civil & Structural",
    description:
      "Understand structural design workflows, construction drawings, detailing and structural BIM.",
    tools: ["AutoCAD", "Revit", "Navisworks"],
    image: "/training/civil.jpg",
  },
  {
    number: "03",
    title: "Electrical Engineering",
    description:
      "Explore electrical layouts, building services, electrical modeling and coordinated design.",
    tools: ["AutoCAD", "Revit"],
    image: "/training/electrical.jpg",
  },
  {
    number: "04",
    title: "Mechanical & HVAC",
    description:
      "Build practical knowledge of mechanical systems, HVAC layouts, equipment and MEP coordination.",
    tools: ["AutoCAD", "Revit", "Navisworks"],
    image: "/training/mechanical.jpg",
  },
  {
    number: "05",
    title: "Plumbing & MEP",
    description:
      "Learn plumbing system layouts, pipe routing, service coordination and detailed BIM modeling.",
    tools: ["AutoCAD", "Revit", "Navisworks"],
    image: "/training/plumbing.jpg",
  },
  {
    number: "06",
    title: "Fire Fighting",
    description:
      "Understand fire protection layouts, system modeling and coordination within building projects.",
    tools: ["AutoCAD", "Revit", "Navisworks"],
    image: "/training/fire-fighting.jpg",
  },
];

const software = [
  {
    name: "AutoCAD",
    type: "2D Drafting & Design",
    image: "/training/software/autocad.jpg",
  },
  {
    name: "Autodesk Revit",
    type: "Building Information Modeling",
    image: "/training/software/revit.jpg",
  },
  {
    name: "Navisworks",
    type: "Model Review & Coordination",
    image: "/training/software/navisworks.webp",
  },
  {
    name: "SketchUp",
    type: "3D Modeling & Visualization",
    image: "/training/software/sketchup.png",
  },
  {
    name: "3ds Max",
    type: "3D Rendering & Visualization",
    image: "/training/software/3dsmax.png",
  },
];

const benefits = [
  {
    number: "01",
    title: "Industry-Oriented Training",
    description:
      "Understand how engineering software and design workflows are used in professional environments.",
  },
  {
    number: "02",
    title: "Practical Project Learning",
    description:
      "Apply your knowledge through practical exercises and project-based learning.",
  },
  {
    number: "03",
    title: "Professional Mentorship",
    description:
      "Learn with guidance from trainers familiar with engineering design and BIM workflows.",
  },
  {
    number: "04",
    title: "Flexible Learning",
    description:
      "Explore coaching options designed to support different learning requirements.",
  },
  {
    number: "05",
    title: "Career Guidance",
    description:
      "Get guidance on technical skills, professional development and preparing for industry opportunities.",
  },
  {
    number: "06",
    title: "Demo Before Enrolling",
    description:
      "Understand the training approach and course expectations before making an enrolment decision.",
  },
];

const learningSteps = [
  {
    number: "01",
    title: "Learn",
    description:
      "Build a strong foundation in engineering concepts, design principles and software tools.",
  },
  {
    number: "02",
    title: "Practice",
    description:
      "Work through practical assignments and apply the concepts you have learned.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop project-based skills through engineering and BIM workflows.",
  },
  {
    number: "04",
    title: "Prepare",
    description:
      "Strengthen your technical confidence and prepare for professional opportunities.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e7b52f]">
      <span className="h-px w-8 bg-[#e7b52f]" />
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <main className="overflow-hidden bg-[#090a0b] text-white">

      {/* 01 - HERO */}
      <section className="relative flex min-h-[680px] items-center border-b border-white/10 lg:min-h-[780px]">
        <div className="absolute inset-0">
          <Image
            src="/training/training-hero.jpg"
            alt="Engineering professional working with a 3D BIM building model"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090a0b] via-[#090a0b]/90 to-[#090a0b]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090a0b] via-transparent to-black/20" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 py-28 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <SectionLabel>Training & Career Development</SectionLabel>

            <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
              Your Engineering
              <br />
              Degree Is Just
              <span className="block text-[#e7b52f]">
                The Beginning.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Transform your academic knowledge into industry-ready
              skills with professional BIM, CAD and engineering design
              training. Learn industry tools, practice real-world
              workflows and prepare for your engineering career.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#disciplines"
                className="inline-flex items-center bg-[#e7b52f] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#f4ca58]"
              >
                Explore Our Courses <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="#enquire"
                className="border border-white/35 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#e7b52f] hover:text-[#e7b52f]"
              >
                Book a Free Demo
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-7 text-xs uppercase tracking-[0.18em] text-white/55">
              <span>BIM Training</span>
              <span>Engineering Design</span>
              <span>Practical Learning</span>
              <span>Career Preparation</span>
            </div>
          </div>
        </div>
      </section>

      {/* 02 - INTRO */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <SectionLabel>More Than Software Training</SectionLabel>

            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Learn the tools.
              <span className="block text-[#e7b52f]">
                Build your future.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/60">
              A strong engineering career requires more than academic
              knowledge. It requires practical understanding, technical
              skills and the confidence to work with industry-standard
              tools and workflows.
            </p>

            <p className="mt-5 text-base leading-8 text-white/60">
              Our training approach connects engineering fundamentals
              with practical BIM and design applications, helping
              students and graduates take the next step towards
              professional development.
            </p>
          </div>
        </div>
      </section>

      {/* 03 - DISCIPLINES */}
      <section id="disciplines" className="bg-[#111213] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-14 max-w-3xl">
            <SectionLabel>Explore Your Path</SectionLabel>

            <h2 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Training for
              <span className="text-[#e7b52f]"> every discipline.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/55 sm:text-base">
              Choose a learning path that aligns with your engineering
              background and professional interests.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((item) => (
              <article
                key={item.number}
                className="group overflow-hidden border border-white/10 bg-[#090a0b] transition-colors duration-300 hover:border-[#e7b52f]/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                  <span className="absolute left-5 top-5 text-xs tracking-widest text-white/80">
                    / {item.number}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <p className="mt-3 min-h-20 text-sm leading-7 text-white/55">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="border border-white/10 px-3 py-1.5 text-[10px] text-white/60"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="#enquire"
                    className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#e7b52f]"
                  >
                    Enquire about this course
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 - SOFTWARE */}
      <section id="software" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <SectionLabel>Industry-Standard Tools</SectionLabel>

              <h2 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
                Master the tools
                <span className="block text-[#e7b52f]">
                  behind modern engineering.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/55">
              Explore professional design and BIM applications used
              across architecture, construction and engineering.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {software.map((item, index) => (
              <article
                key={item.name}
                className="group border border-white/10 bg-[#111213] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#e7b52f]/60"
              >
                <div className="relative mb-5 aspect-square overflow-hidden bg-[#1a1b1c]">
                  <Image
                    src={item.image}
                    alt={`${item.name} training`}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <span className="text-[10px] tracking-widest text-[#e7b52f]">
                  SOFTWARE / 0{index + 1}
                </span>

                <h3 className="mt-3 text-lg font-semibold">
                  {item.name}
                </h3>

                <p className="mt-2 min-h-10 text-xs leading-5 text-white/50">
                  {item.type}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05 - LEARNING EXPERIENCE */}
      <section className="bg-[#111213] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel>Our Learning Approach</SectionLabel>

              <h2 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                From learning
                <span className="block text-[#e7b52f]">
                  to doing.
                </span>
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-8 text-white/55 sm:text-base">
                We believe effective technical training should connect
                knowledge with application. Our learning approach
                encourages students to understand, practice and apply
                engineering concepts.
              </p>

              <div className="relative mt-10 aspect-[4/3] overflow-hidden">
                <Image
                  src="/training/training-hero.jpg"
                  alt="Practical BIM and engineering design training"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-0">
              {learningSteps.map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[55px_1fr] gap-5 border-b border-white/10 py-8"
                >
                  <span className="text-sm text-[#e7b52f]">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-7 text-white/50">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 - WHY CHOOSE US */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-14 max-w-3xl">
            <SectionLabel>Why SR Engineering</SectionLabel>

            <h2 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
              The right skills.
              <span className="block text-[#e7b52f]">
                The right direction.
              </span>
            </h2>
          </div>

          <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="border-b border-r border-white/10 p-7 transition-colors hover:bg-white/[0.025] sm:p-9"
              >
                <span className="text-xs tracking-widest text-[#e7b52f]">
                  / {benefit.number}
                </span>

                <h3 className="mt-7 text-xl font-semibold">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 07 - CAREER TRANSFORMATION */}
      <section className="relative overflow-hidden border-y border-white/10 py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/training/career-future.jpg"
            alt="Engineering professional working on architectural BIM models"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#090a0b]/90" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <SectionLabel>Your Career Journey</SectionLabel>

            <h2 className="text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              Don&apos;t just graduate.
              <span className="block text-[#e7b52f]">
                Prepare to build.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60">
              Turn your engineering education into practical
              capabilities. Develop your technical knowledge,
              strengthen your confidence and take the next step
              towards a professional career in BIM and engineering design.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#enquire"
                className="inline-flex items-center gap-2 bg-[#e7b52f] px-8 py-4 text-sm font-semibold text-black transition hover:bg-[#f4ca58]"
              >
                Start Your Journey <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="#disciplines"
                className="border border-white/30 px-8 py-4 text-sm font-semibold transition hover:border-[#e7b52f] hover:text-[#e7b52f]"
              >
                Explore Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 08 - ENQUIRY */}
      <section id="enquire" className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <SectionLabel>Take The First Step</SectionLabel>

            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Your career.
              <span className="block text-[#e7b52f]">
                Your skills.
                <br />
                Your future.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-white/55 sm:text-base">
              Ready to explore BIM and engineering design training?
              Connect with our team to discuss your engineering
              background, learning goals and suitable training options.
            </p>
          </div>

          <div className="border border-white/10 bg-[#111213] p-7 sm:p-10">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#e7b52f]">
              LET'S TALK ABOUT YOUR FUTURE
            </span>

            <h3 className="mt-5 text-2xl font-semibold">
              Interested in joining a program?
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/50">
              Contact our team to enquire about courses, training
              schedules, learning modes and demo classes.
            </p>

            <Link
              href="/contact"
              className="mt-8 flex w-full items-center justify-between bg-[#e7b52f] px-6 py-4 text-sm font-semibold text-black transition hover:bg-[#f4ca58]"
            >
              Enquire Now
              <ArrowUpRight className="h-5 w-5" />
            </Link>

            <p className="mt-5 text-center text-xs text-white/35">
              SR Engineering Design Solutions
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
