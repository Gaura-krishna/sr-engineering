
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";

const projects = [
    {
        number: "01",
        id: "residential",
        category: "RESIDENTIAL DEVELOPMENT",
        title: "Residential",
        subtitle: "Spaces designed for living. Structures built to last.",
        description:
            "Engineering and BIM support for residential developments of varying scales. From individual buildings and low-rise homes to complex multi-storey residential structures, we support projects through coordinated design and detailed modeling.",
        range: ["Individual", "G+2", "G+5", "G+10", "G+15 to G+25"],
        images: [
            {
                src: "/projects/residential-01.jpg",
                alt: "Contemporary residential architecture",
                className: "col-span-2 row-span-2",
            },
            {
                src: "/projects/residential-02.jpg",
                alt: "Residential apartment development",
                className: "col-span-1",
            },
            {
                src: "/projects/residential-03.jpg",
                alt: "High rise residential tower",
                className: "col-span-1",
            },
        ],
    },
    {
        number: "02",
        id: "commercial",
        category: "COMMERCIAL DEVELOPMENT",
        title: "Commercial",
        subtitle: "Building solutions designed around complexity.",
        description:
            "Supporting commercial developments with engineering design, BIM modeling, and multidisciplinary coordination. Our scope covers basement structures, ground-level developments, and multi-storey commercial buildings.",
        range: [
            "B-3",
            "G+3",
            "Up to 6 Floors",
            "Design Coordination",
            "BIM Modeling",
        ],
        images: [
            {
                src: "/projects/commercial-01.jpg",
                alt: "Modern commercial building",
                className: "col-span-2 row-span-2",
            },
            {
                src: "/projects/commercial-02.jpg",
                alt: "Commercial building interior",
                className: "col-span-1",
            },
            {
                src: "/projects/commercial-03.jpg",
                alt: "Commercial architecture",
                className: "col-span-1",
            },
        ],
    },
    {
        number: "03",
        id: "international",
        category: "INTERNATIONAL PROJECTS",
        title: "UAE & UK",
        subtitle: "Engineering expertise across international markets.",
        description:
            "Our international project experience includes developments in the Middle East and UK. We support project teams with coordinated engineering, BIM workflows, technical detailing, and project-specific documentation.",
        range: [
            "UAE",
            "Middle East",
            "United Kingdom",
            "BIM Coordination",
            "Technical Design",
        ],
        images: [
            {
                src: "/projects/uae-01.jpg",
                alt: "Modern UAE architectural development",
                className: "col-span-2 row-span-2",
            },
            {
                src: "/projects/uk-01.jpg",
                alt: "United Kingdom architecture",
                className: "col-span-1",
            },
            {
                src: "/projects/international-01.jpg",
                alt: "International building project",
                className: "col-span-1",
            },
        ],
    },
    {
        number: "04",
        id: "specialized",
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
                className: "col-span-2 row-span-2",
            },
            {
                src: "/projects/airport-01.jpg",
                alt: "Modern airport terminal architecture",
                className: "col-span-1",
            },
            {
                src: "/projects/resort-01.webp",
                alt: "Luxury resort architecture",
                className: "col-span-1",
            },
        ],
    },
];

const projectLinks = projects.map((project) => ({
    id: project.id,
    number: project.number,
    label: project.title,
}));

function Reveal({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const reducedMotion = useReducedMotion();

    return (
        <motion.div
            initial={
                reducedMotion
                    ? false
                    : { opacity: 0, y: 35 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: reducedMotion ? 0 : 0.8,
                delay: reducedMotion ? 0 : delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

function ProjectGallery({
    images,
}: {
    images: (typeof projects)[number]["images"];
}) {
    const reducedMotion = useReducedMotion();

    return (
        <div className="grid grid-cols-3 grid-rows-[180px_180px] gap-2 sm:grid-rows-[240px_240px] lg:grid-rows-[260px_260px]">
            {images.map((image, index) => (
                <motion.div
                    key={image.src}
                    initial={
                        reducedMotion
                            ? false
                            : { opacity: 0, scale: 0.96 }
                    }
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: reducedMotion ? 0 : 0.8,
                        delay: reducedMotion ? 0 : index * 0.12,
                    }}
                    className={`group relative overflow-hidden bg-[#171C20] ${image.className}`}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 70vw, 45vw"
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />

                    <div className="absolute inset-0 border border-white/0 transition-all duration-500 group-hover:border-[#D6B15E]/40" />
                </motion.div>
            ))}
        </div>
    );
}

function ProjectSection({
    project,
    index,
}: {
    project: (typeof projects)[number];
    index: number;
}) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const reducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(
        scrollYProgress,
        [0, 1],
        reducedMotion ? [0, 0] : [35, -35]
    );

    const smoothImageY = useSpring(imageY, {
        stiffness: 90,
        damping: 25,
        mass: 0.3,
    });

    const reverse = index % 2 !== 0;

    return (
        <section
            ref={sectionRef}
            id={project.id}
            className="scroll-mt-32 border-t border-white/10 py-20 sm:py-24 lg:py-32"
        >
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
                {/* Project information */}
                <div className={reverse ? "lg:order-2" : ""}>
                    <Reveal>
                        <div className="mb-7 flex items-center justify-between">
                            <span className="text-[10px] font-bold tracking-[0.25em] text-[#D6B15E] sm:text-xs">
                                {project.category}
                            </span>

                            <span className="text-sm font-medium text-white/30">
                                / {project.number}
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h2 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                            {project.title}
                            <span className="mt-4 block text-lg font-normal leading-relaxed text-white/45 sm:text-xl">
                                {project.subtitle}
                            </span>
                        </h2>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="mt-7 max-w-xl text-sm leading-8 text-white/55 sm:text-base">
                            {project.description}
                        </p>
                    </Reveal>

                    <Reveal delay={0.25}>
                        <div className="mt-10">
                            <span className="text-[10px] font-bold tracking-[0.25em] text-[#D6B15E]">
                                PROJECT TYPES & SCOPE
                            </span>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.range.map((item) => (
                                    <span
                                        key={item}
                                        className="border border-white/15 px-4 py-2 text-xs text-white/65 transition-all duration-300 hover:border-[#D6B15E] hover:bg-[#D6B15E]/5 hover:text-[#D6B15E]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <Link
                            href="/contact"
                            className="group mt-10 inline-flex items-center gap-5 text-sm font-semibold text-white transition-colors hover:text-[#D6B15E]"
                        >
                            Discuss a similar project

                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6B15E]/40 text-lg text-[#D6B15E] transition-all duration-300 group-hover:translate-x-2 group-hover:bg-[#D6B15E] group-hover:text-black">
                                →
                            </span>
                        </Link>
                    </Reveal>
                </div>

                {/* Project images */}
                <motion.div
                    style={{ y: smoothImageY }}
                    className={`relative ${reverse ? "lg:order-1" : ""}`}
                >
                    <ProjectGallery images={project.images} />

                    <div className="mt-4 flex items-center justify-between text-[10px] font-semibold tracking-[0.2em] text-white/35">
                        <span>SR ENGINEERING DESIGN SOLUTIONS</span>
                        <span>{project.number} </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default function ProjectsPage() {
    const reducedMotion = useReducedMotion();

    return (
        <main className="overflow-hidden bg-[#090A0B] text-white">
            {/* Hero */}
            <section className="relative flex min-h-[85vh] items-center px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
                <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-[#D6B15E]/10 blur-[150px]" />

                <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D6B15E]/30 to-transparent" />

                <div className="relative mx-auto w-full max-w-[1500px]">
                    <Reveal>
                        <div className="mb-10 flex items-center gap-3 text-xs font-bold tracking-[0.3em] text-[#D6B15E]">
                            <span className="h-px w-10 bg-[#D6B15E]" />
                            OUR WORK / PORTFOLIO
                        </div>
                    </Reveal>

                    <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
                        <div>
                            <motion.h1
                                initial={
                                    reducedMotion
                                        ? false
                                        : { opacity: 0, y: 60 }
                                }
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: reducedMotion ? 0 : 1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="max-w-5xl text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[100px]"
                            >
                                Projects
                                <span className="block text-[#D6B15E]">
                                    that shape
                                </span>
                                <span className="block">possibilities.</span>
                            </motion.h1>

                            <Reveal delay={0.25}>
                                <p className="mt-9 max-w-2xl text-sm leading-8 text-white/55 sm:text-base">
                                    Explore our project capabilities across residential,
                                    commercial, international, and specialized developments.
                                    Every project reflects our commitment to coordinated
                                    engineering, design precision, and BIM expertise.
                                </p>
                            </Reveal>
                        </div>

                        <Reveal delay={0.35}>
                            <div className="border-l border-[#D6B15E]/40 pl-6 lg:mb-3">
                                <span className="text-xs font-bold tracking-[0.25em] text-[#D6B15E]">
                                    OUR APPROACH
                                </span>

                                <p className="mt-5 text-2xl font-medium leading-relaxed text-white/80 sm:text-3xl">
                                    Built on vision.
                                    <br />
                                    Driven by detail.
                                </p>

                                <div className="mt-8 flex items-center gap-3 text-xs font-semibold tracking-widest text-white/40">
                                    <span className="h-8 w-px bg-[#D6B15E]" />
                                    SCROLL TO EXPLORE
                                    <span className="animate-bounce text-lg text-[#D6B15E]">
                                        ↓
                                    </span>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Hero bottom stats */}
                    <div className="mt-20 grid grid-cols-2 border-t border-white/10 pt-8 sm:grid-cols-4">
                        {[
                            { value: "01–04", label: "PROJECT CATEGORIES" },
                            { value: "BIM", label: "ENGINEERING SUPPORT" },
                            { value: "UAE & UK", label: "INTERNATIONAL SCOPE" },
                            { value: "MULTI-SCALE", label: "PROJECT CAPABILITIES" },
                        ].map((item, index) => (
                            <Reveal key={item.label} delay={index * 0.1}>
                                <div className="py-3 sm:border-r sm:border-white/10 sm:px-5 first:sm:pl-0 last:sm:border-r-0">
                                    <p className="text-xl font-bold text-[#D6B15E] sm:text-2xl">
                                        {item.value}
                                    </p>
                                    <p className="mt-2 text-[9px] font-semibold tracking-[0.15em] text-white/40 sm:text-[10px]">
                                        {item.label}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sticky project navigation */}
            <nav className="sticky top-20 z-30 border-y border-white/10 bg-[#090A0B]/90 backdrop-blur-xl">
                <div className="mx-auto flex max-w-[1500px] items-center gap-7 overflow-x-auto px-5 py-5 sm:px-8 lg:px-12">
                    <span className="hidden shrink-0 text-[10px] font-bold tracking-[0.2em] text-[#D6B15E] lg:block">
                        EXPLORE
                    </span>

                    {projectLinks.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="group flex shrink-0 items-center gap-2 text-xs font-semibold text-white/45 transition-colors hover:text-[#D6B15E]"
                        >
                            <span className="text-[10px] text-[#D6B15E]/60">
                                {item.number}
                            </span>
                            <span>{item.label}</span>
                        </a>
                    ))}
                </div>
            </nav>

            {/* Projects */}
            <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
                {projects.map((project, index) => (
                    <ProjectSection
                        key={project.id}
                        project={project}
                        index={index}
                    />
                ))}
            </div>

            {/* Closing CTA */}
            <section className="relative overflow-hidden border-t border-white/10 bg-[#111416] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
                <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#D6B15E]/10 blur-[130px]" />

                <div className="relative mx-auto flex max-w-[1500px] flex-col justify-between gap-12 lg:flex-row lg:items-center">
                    <div>
                        <Reveal>
                            <span className="text-xs font-bold tracking-[0.25em] text-[#D6B15E]">
                                HAVE A PROJECT IN MIND?
                            </span>

                            <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                                Let's turn your vision
                                <span className="block text-[#D6B15E]">
                                    into reality.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-xl text-sm leading-8 text-white/50 sm:text-base">
                                Tell us about your next development. Let's discuss
                                how our engineering and BIM expertise can support it.
                            </p>
                        </Reveal>
                    </div>

                    <Reveal delay={0.2}>
                        <Link
                            href="/contact"
                            className="group inline-flex w-fit shrink-0 items-center gap-6 bg-[#D6B15E] px-8 py-5 text-xs font-bold uppercase tracking-[0.15em] text-black transition-colors duration-300 hover:bg-[#E8C979]"
                        >
                            Start a Conversation

                            <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                                ↗
                            </span>
                        </Link>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
