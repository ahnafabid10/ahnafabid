"use client";

import { useState } from "react";
import { Send, Mail, Clock, Users, MapPin, ArrowLeft } from "lucide-react";

const inputCls =
    "w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/30 transition";

function Field({
    label,
    children,
    className = "",
}: {
    label: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={className}>
            <label className="block text-sm font-semibold text-white/70 mb-2">
                {label}
            </label>
            {children}
        </div>
    );
}

function InfoItem({
    icon: Icon,
    title,
    subtitle,
    href,
}: {
    icon: React.ElementType;
    title: string;
    subtitle: string;
    href?: string;
}) {
    const content = (
        <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-white/50" strokeWidth={1.5} />
            </div>
            <div>
                <p className="text-[15px] font-semibold text-white">{title}</p>
                <p className="text-sm text-white/50">{subtitle}</p>
            </div>
        </div>
    );

    if (href) {
        return (
            <a href={href} className="block hover:opacity-80 transition-opacity">
                {content}
            </a>
        );
    }

    return content;
}

export default function ContactPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        role: "Tech Talent",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                throw new Error('Failed to send message');
            }

            setSubmitted(true);
            setForm({ name: "", email: "", role: "Tech Talent", message: "" });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            console.error(err);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact-form" className="section-bg min-h-screen px-4 py-12 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-337.5">
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/50 mb-10">
                    Contact
                </p>

                <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">

                    {/* ── Left side ── */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="font-bold leading-snug text-white text-4xl">
                            Start a conversation<br />with me
                        </h2>
                        <p className="mt-4 text-[15px] leading-7 text-white/50">
                            Whether you have a project in mind, want to collaborate, or just
                            want to say hi, I&apos;m always happy to chat. Reach out and
                            I&apos;ll get back to you as soon as I can.
                        </p>

                        <div className="mt-8 space-y-5">
                            <InfoItem icon={Mail} title="Email" subtitle="abidnirob10@gmail.com" href="mailto:abidnirob10@gmail.com" />
                            <InfoItem icon={MapPin} title="Location" subtitle="Based in Mymensingh, Bangladesh" />
                            <InfoItem icon={Clock} title="Response time" subtitle="Within 48 hours" />
                            <InfoItem icon={Users} title="Open to" subtitle="Freelance, Full-time & Collaboration" />
                        </div>
                    </div>

                    {/* ── Right side — form card ── */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl border border-white/8 bg-white/3 p-8 shadow-xl">

                            {submitted && (
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#0a0a0a]/90 text-center backdrop-blur-sm">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
                                        <svg className="h-7 w-7 text-white/80" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">Message sent</h3>
                                    <p className="text-sm text-white/40">I&apos;ll get back to you shortly.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <Field label="Full name">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            className={inputCls}
                                        />
                                    </Field>
                                    <Field label="Email">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email Address"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            className={inputCls}
                                        />
                                    </Field>
                                </div>

                                <Field label="I am a">
                                    <select
                                        name="role"
                                        value={form.role}
                                        onChange={handleChange}
                                        className={inputCls + " appearance-none"}
                                    >
                                        <option className="bg-[#0f0f0f]">Tech Talent</option>
                                        <option className="bg-[#0f0f0f]">Hiring Company</option>
                                        <option className="bg-[#0f0f0f]">Sponsor / Partner</option>
                                        <option className="bg-[#0f0f0f]">Other</option>
                                    </select>
                                </Field>

                                <Field label="Message" className="mb-1">
                                    <textarea
                                        name="message"
                                        placeholder="Tell me how I can help you…"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={5}
                                        required
                                        className={inputCls + " resize-none"}
                                    />
                                </Field>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 transition-colors text-white font-semibold rounded-xl py-3.5 text-[15px] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-4 h-4" />
                                    {isLoading ? "Sending…" : "Send message"}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
