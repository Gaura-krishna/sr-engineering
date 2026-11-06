

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";
import ContactPageForm from "@/components/ContactPageForm";

const contactItems = [
  {
    icon: MapPin,
    label: "OUR LOCATION",
    value: site.location,
  },
  {
    icon: Phone,
    label: "CALL US",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
  },
  {
    icon: Mail,
    label: "EMAIL US",
    value: site.email,
    href: `mailto:${site.email}`,
  },
];

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090A0B] text-white">
      {/* Hero */}
      <section className="relative px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pb-28 lg:pt-32">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#D6B15E]/10 blur-[130px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#D6B15E]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-[1500px]">
          <div className="mb-8 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-[#D6B15E]">
            <span className="h-px w-9 bg-[#D6B15E]" />
            GET IN TOUCH
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
                Let&apos;s build
                <br />
                <span className="text-[#D6B15E]">something great.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-sm leading-8 text-white/55 sm:text-base">
                Have a project in mind or need engineering support?
                Tell us about your requirements. Our team is ready
                to understand your vision and discuss the right solution.
              </p>
            </div>

            <div className="border-l border-[#D6B15E]/40 pl-6 lg:mb-2">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#D6B15E]">
                SR ENGINEERING DESIGN SOLUTIONS
              </p>
              <p className="mt-4 text-lg leading-8 text-white/75">
                Engineering precision.
                <br />
                Design excellence.
                <br />
                Practical solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="border-t border-white/10 bg-[#111416] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Contact details */}
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-[#D6B15E]">
              CONTACT INFORMATION
            </span>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Let&apos;s talk about
              <span className="block text-[#D6B15E]">your project.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-white/55">
              Reach out to us directly or send your project enquiry
              through the form. We look forward to hearing from you.
            </p>

            <div className="mt-12 space-y-8">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-5 border-b border-white/10 pb-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D6B15E]/40 text-xl text-[#D6B15E]">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#D6B15E]">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-3 block break-all text-sm leading-6 text-white/70 transition-colors hover:text-[#D6B15E]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-3 text-sm leading-6 text-white/70">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Enquiry form */}
          <div className="border border-white/10 bg-[#090A0B] p-6 sm:p-10 lg:p-12">
            <div className="mb-9">
              <span className="text-xs font-bold tracking-[0.25em] text-[#D6B15E]">
                SEND AN ENQUIRY
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Tell us about your project.
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/50">
                Share a few details and we&apos;ll be able to understand
                how we can help.
              </p>
            </div>

            <ContactPageForm />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-8 border-t border-white/10 pt-12 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-[#D6B15E]">
              HAVE A PROJECT IN MIND?
            </span>

            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              Let&apos;s make it happen.
            </h2>
          </div>

          <a
            href={`mailto:${site.email}`}
            className="inline-flex w-fit items-center gap-4 bg-[#D6B15E] px-7 py-4 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#E8C979]"
          >
            Email Our Team <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
