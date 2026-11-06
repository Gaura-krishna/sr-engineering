
"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { serviceOptions } from "@/lib/content";

export default function ContactForm() {
  const [showToast, setShowToast] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setShowToast(true);
    e.currentTarget.reset();

    window.setTimeout(() => {
      setShowToast(false);
    }, 4000);
  }

  return (
    <>
      <form
        id="contactForm"
        onSubmit={handleSubmit}
        className="relative space-y-6 border border-white/10 bg-[#111416] p-5 sm:p-8 lg:p-10"
      >
        {/* Form heading */}
        <div className="mb-8">
          <p className="text-xs font-bold tracking-[0.2em] text-[#e7b52f]">
            START A CONVERSATION
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Tell us about your project.
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/45">
            Share your requirements and our team can discuss
            the right engineering solution with you.
          </p>
        </div>

        {/* Name and phone */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Full Name *
            </span>

            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full border border-white/10 bg-[#090b0d] px-4 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#e7b52f]"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Phone Number *
            </span>

            <input
              name="phone"
              type="tel"
              required
              placeholder="+91"
              className="w-full border border-white/10 bg-[#090b0d] px-4 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#e7b52f]"
            />
          </label>
        </div>

        {/* Email */}
        <label className="block space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
            Email Address *
          </span>

          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full border border-white/10 bg-[#090b0d] px-4 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#e7b52f]"
          />
        </label>

        {/* Service */}
        <label className="block space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
            Service Required
          </span>

          <select
            name="service"
            defaultValue={serviceOptions[0]}
            className="w-full appearance-none border border-white/10 bg-[#090b0d] px-4 py-4 text-sm text-white outline-none transition-colors focus:border-[#e7b52f]"
          >
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        {/* Message */}
        <label className="block space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
            Project Details *
          </span>

          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell us about your project or engineering requirements..."
            className="w-full resize-y border border-white/10 bg-[#090b0d] px-4 py-4 text-sm leading-6 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#e7b52f]"
          />
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-4 bg-[#e7b52f] px-7 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-white sm:w-auto"
        >
          Send Message
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>

        <p className="text-xs leading-5 text-white/35">
          Demo form only. Email or CRM integration is required
          before accepting live enquiries.
        </p>
      </form>

      {/* Toast */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 right-6 z-[100] flex max-w-[calc(100vw-3rem)] items-center gap-2 border border-[#e7b52f]/40 bg-[#111416] px-6 py-4 text-sm text-white shadow-2xl transition-all duration-300 ${
          showToast
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-4 opacity-0"
        }`}
      >
        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#e7b52f]" />
        <span>Thanks! Your message is ready for the next setup step.</span>
      </div>
    </>
  );
}
