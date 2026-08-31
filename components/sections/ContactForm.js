 "use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const email = "sisayabebayew@gmail.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy email:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // For now, show success message.
    // Later we can connect this to EmailJS,
    // Formspree, Resend, or your backend.
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="section-container relative z-10">
        {/* =========================
            SECTION HEADING
        ========================== */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">
            Get In Touch
          </p>

          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl light:text-navy">
            Let&apos;s Build Something
            <span className="text-accent"> Great</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-paper/60 sm:text-lg light:text-navy/60">
            Have a project, an idea, or an opportunity?
            I&apos;m always open to discussing new ideas and
            building practical digital solutions.
          </p>
        </div>

        {/* =========================
            CONTACT CARDS
        ========================== */}

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* EMAIL */}

          <div
            className="
              group
              rounded-2xl
              border
              border-slate-line
              bg-white/[0.03]
              p-6
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-accent/50
              hover:bg-accent/[0.05]
              hover:shadow-lg
              hover:shadow-accent/10
              light:bg-white
              light:shadow-md
            "
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition group-hover:scale-110">
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </div>

            <p className="text-sm text-paper/50 light:text-navy/50">
              Email
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-2 block break-all text-sm font-medium text-paper transition hover:text-accent light:text-navy"
            >
              {email}
            </a>

            <button
              onClick={copyEmail}
              className="mt-4 text-xs font-medium text-accent transition hover:text-accent-bright"
            >
              {copied ? "✓ Copied" : "Copy email"}
            </button>
          </div>

          {/* WHATSAPP */}

          <div
            className="
              group
              rounded-2xl
              border
              border-slate-line
              bg-white/[0.03]
              p-6
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-accent/50
              hover:bg-accent/[0.05]
              hover:shadow-lg
              hover:shadow-accent/10
              light:bg-white
              light:shadow-md
            "
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition group-hover:scale-110">
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.4 8.4 0 0 1-4-.95L3 20l1.1-5.1a8.4 8.4 0 0 1-.95-4A8.5 8.5 0 1 1 21 11.5Z" />
              </svg>
            </div>

            <p className="text-sm text-paper/50 light:text-navy/50">
              WhatsApp
            </p>

            <a
              href="https://wa.me/251965681966"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm font-medium text-paper transition hover:text-accent light:text-navy"
            >
              Chat on WhatsApp
            </a>

            <p className="mt-4 text-xs text-paper/40 light:text-navy/40">
              Usually responds quickly
            </p>
          </div>

          {/* LOCATION */}

          <div
            className="
              group
              rounded-2xl
              border
              border-slate-line
              bg-white/[0.03]
              p-6
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-accent/50
              hover:bg-accent/[0.05]
              hover:shadow-lg
              hover:shadow-accent/10
              light:bg-white
              light:shadow-md
            "
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition group-hover:scale-110">
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>

            <p className="text-sm text-paper/50 light:text-navy/50">
              Location
            </p>

            <p className="mt-2 text-sm font-medium text-paper light:text-navy">
              Ethiopia
            </p>

            <p className="mt-4 text-xs text-paper/40 light:text-navy/40">
              Available for remote projects
            </p>
          </div>

          {/* AVAILABILITY */}
          <div
            className="
              group
              rounded-2xl
              border
              border-slate-line
              bg-white/[0.03]
              p-6
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-accent/50
              hover:bg-accent/[0.05]
              hover:shadow-lg
              hover:shadow-accent/10
              light:bg-white
              light:shadow-md
            "
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
              </span>
            </div>

            <p className="text-sm text-paper/50 light:text-navy/50">
              Availability
            </p>

            <p className="mt-2 text-sm font-medium text-paper light:text-navy">
              Open to opportunities
            </p>

            <p className="mt-4 text-xs text-paper/40 light:text-navy/40">
              Freelance &amp; full-time
            </p>
          </div>
        </div>

        {/* =========================
            CONTACT FORM
        ========================== */}

        <div className="mx-auto mt-16 max-w-4xl">
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-line
              bg-white/[0.03]
              p-6
              backdrop-blur-xl
              sm:p-10
              light:bg-white
              light:shadow-xl
            "
          >
            {/* Decorative glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/10 blur-[80px]" />

            <div className="relative">
              <div className="mb-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Start a Conversation
                </p>

                <h3 className="mt-3 font-display text-2xl font-bold text-paper sm:text-3xl light:text-navy">
                  Tell Me About Your Project
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-paper/55 light:text-navy/60">
                  Share a few details about your idea. The more information
                  you provide, the easier it will be to understand your
                  project and discuss the best solution.
                </p>
              </div>

              {/* SUCCESS MESSAGE */}

              {submitted && (
                <div className="mb-8 flex items-center gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-4 text-sm text-accent">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-navy">
                    ✓
                  </span>

                  <div>
                    <p className="font-semibold">
                      Message prepared successfully!
                    </p>

                    <p className="mt-1 text-xs text-paper/60 light:text-navy/60">
                      Your form details have been received locally.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* NAME + EMAIL */}

                <div className="grid gap-5 md:grid-cols-2">
                  <FormField
                    label="Full Name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* PHONE + PROJECT TYPE */}

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+251 ..."
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  <SelectField
                    label="Project Type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    options={[
                      "Portfolio Website",
                      "Business Website",
                      "E-Commerce Website",
                      "Management System",
                      "Web Application",
                      "UI / UX Design",
                      "Other",
                    ]}
                  />
                </div>

                {/* BUDGET + TIMELINE */}

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <SelectField
                    label="Budget Range"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    options={[
                      "Not sure yet",
                      "Small Project",
                      "Medium Project",
                      "Large Project",
                      "Let's discuss",
                    ]}
                  />

                  <SelectField
                    label="Preferred Timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    options={[
                      "As soon as possible",
                      "Within 1 month",
                      "1 - 3 months",
                      "Flexible",
                    ]}
                  />
                </div>

                {/* MESSAGE */}

                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-paper/80 light:text-navy/80"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your idea, goals, features, or anything important about your project..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-slate-line
                      bg-navy/30
                      px-4
                      py-3
                      text-sm
                      text-paper
                      outline-none
                      transition-all
                      placeholder:text-paper/30
                      focus:border-accent
                      focus:ring-4
                      focus:ring-accent/10
                      light:bg-slate-50
                      light:text-navy
                      light:placeholder:text-navy/35
                    "
                  />
                </div>

                {/* SUBMIT */}
                <div className="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                  <p className="max-w-md text-xs leading-5 text-paper/40 light:text-navy/45">
                    By sending this message, you are starting a conversation
                    about your project. I&apos;ll review the details and get
                    back to you.
                  </p>

                  <button
                    type="submit"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-accent
                      px-7
                      py-3.5
                      text-sm
                      font-semibold
                      text-navy
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:bg-accent-bright
                      hover:shadow-lg
                      hover:shadow-accent/30
                    "
                  >
                    Send Message

                    <svg
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* =========================
            SOCIAL MEDIA
        ========================== */}

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-paper/40 light:text-navy/40">
            Connect With Me
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/bboysis"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sisayabebayew"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/bboysis"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@bboysis"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              TikTok
            </a>

            <a
              href="https://t.me/bboysis"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


/* =========================================
   REUSABLE INPUT FIELD
========================================= */

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-paper/80 light:text-navy/80"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="
          w-full
          rounded-xl
          border
          border-slate-line
          bg-navy/30
          px-4
          py-3
          text-sm
          text-paper
          outline-none
          transition-all
          placeholder:text-paper/30
          focus:border-accent
          focus:ring-4
          focus:ring-accent/10
          light:bg-slate-50
          light:text-navy
          light:placeholder:text-navy/35
        "
      />
    </div>
  );
}


/* =========================================
   REUSABLE SELECT FIELD
========================================= */

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-paper/80 light:text-navy/80"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="
          w-full
          appearance-none
          rounded-xl
          border
          border-slate-line
          bg-navy/30
          px-4
          py-3
          text-sm
          text-paper
          outline-none
          transition-all
          focus:border-accent
          focus:ring-4
          focus:ring-accent/10
          light:bg-slate-50
          light:text-navy
        "
      >
        <option value="">
          Select an option
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-navy text-paper"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}