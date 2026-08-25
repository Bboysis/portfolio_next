 "use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "sisayabebayew@gmail.com";

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

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="section-container relative z-10">

        {/* Section heading */}
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

        {/* Contact cards */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Email */}
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

          {/* WhatsApp */}
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
                <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c.5 1 1.3 1.8 2.3 2.3l.7-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.4.1-2.3-.6-4.5-2.8-5.1-5.1-.2-.5-.1-1 .1-1.4Z" />
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

          {/* Location */}
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

          {/* Availability */}
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
            "
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition group-hover:scale-110">
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

        {/* Social media */}
        <div className="mx-auto mt-16 max-w-3xl text-center">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-paper/40 light:text-navy/40">
            Connect With Me
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/bboysis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-button"
            >
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sisayabebayew"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-button"
            >
              LinkedIn
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/bboysis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-button"
            >
              Instagram
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/sisay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="social-button"
            >
              YouTube
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/bboysis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="social-button"
            >
              TikTok
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/bboysis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="social-button"
            >
              Telegram
            </a>

          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-14 max-w-3xl text-center">

          <div className="rounded-3xl border border-accent/20 bg-accent/[0.04] p-8 backdrop-blur-md sm:p-10">

            <h3 className="font-display text-2xl font-bold text-paper sm:text-3xl light:text-navy">
              Have an idea?
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-paper/60 light:text-navy/60">
              Tell me what you&apos;re building and let&apos;s explore
              how I can help turn your idea into a real digital solution.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-4">

              <a
                href={`mailto:${email}`}
                className="
                  rounded-full
                  bg-accent
                  px-7
                  py-3
                  text-sm
                  font-semibold
                  text-navy
                  transition
                  hover:scale-105
                  hover:bg-accent-bright
                "
              >
                Send Me an Email
              </a>

              <a
                href="https://wa.me/251965681966"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  border
                  border-slate-line
                  px-7
                  py-3
                  text-sm
                  font-semibold
                  text-paper
                  transition
                  hover:border-accent
                  hover:text-accent
                  light:text-navy
                "
              >
                WhatsApp Me
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}