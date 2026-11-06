
"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";

const inputClassName =
    "mt-2 w-full border border-white/10 bg-[#171C20] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#D6B15E]";

export default function ContactPageForm() {
    const [status, setStatus] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const name = String(formData.get("name") || "");
        const email = String(formData.get("email") || "");
        const phone = String(formData.get("phone") || "");
        const service = String(formData.get("service") || "");
        const message = String(formData.get("message") || "");

        const subject = `Project Enquiry - ${name}`;

        const body = [
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Service Required: ${service}`,
            "",
            "Project Details:",
            message,
        ].join("\n");

        const mailtoUrl = `mailto:${site.email}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;

        setStatus(
            "Your email application should open with your enquiry details. Please send the email to complete your enquiry."
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="name"
                        className="text-xs font-semibold tracking-wide text-white/75"
                    >
                        Full Name <span className="text-[#D6B15E]">*</span>
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required
                        autoComplete="name"
                        className={inputClassName}
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="text-xs font-semibold tracking-wide text-white/75"
                    >
                        Email Address <span className="text-[#D6B15E]">*</span>
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        autoComplete="email"
                        className={inputClassName}
                    />
                </div>

                <div>
                    <label
                        htmlFor="phone"
                        className="text-xs font-semibold tracking-wide text-white/75"
                    >
                        Phone Number
                    </label>

                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Your contact number"
                        autoComplete="tel"
                        className={inputClassName}
                    />
                </div>

                <div>
                    <label
                        htmlFor="service"
                        className="text-xs font-semibold tracking-wide text-white/75"
                    >
                        Service Required <span className="text-[#D6B15E]">*</span>
                    </label>

                    <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className={`${inputClassName} appearance-none`}
                    >
                        <option value="" disabled>
                            Select a service
                        </option>
                        <option value="BIM Services">BIM Services</option>
                        <option value="Architectural Design">
                            Architectural Design
                        </option>
                        <option value="Structural Engineering">
                            Structural Engineering
                        </option>
                        <option value="MEPF Services">MEPF Services</option>
                        <option value="Design Coordination">
                            Design Coordination
                        </option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="text-xs font-semibold tracking-wide text-white/75"
                >
                    Project Details <span className="text-[#D6B15E]">*</span>
                </label>

                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us about your project, requirements, timeline, or any questions..."
                    required
                    className={`${inputClassName} resize-y`}
                />
            </div>

            {status && (
                <p
                    role="status"
                    className="border border-[#D6B15E]/30 bg-[#D6B15E]/5 p-4 text-sm leading-6 text-[#D6B15E]"
                >
                    {status}
                </p>
            )}

            <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 bg-[#D6B15E] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black transition-colors hover:bg-[#E8C979] sm:w-auto"
            >
                Send Enquiry <ArrowUpRight className="h-4 w-4" />
            </button>
        </form>
    );
}
