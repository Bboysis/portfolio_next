"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/bboysis",
    description: "View my code",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.12c-3.2.69-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.4-5.27 5.69.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sisayabebayew",
    description: "Connect professionally",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.37 4.28 5.46v6.29ZM5.32 7.4a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.98H3.54v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/bboysis",
    description: "Follow my journey",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@bboysis",
    description: "Watch my content",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/bboysis",
    description: "Message me",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path
          d="M21.5 3.5 3.2 10.55c-.9.35-.88 1.63.03 1.94l4.7 1.62 1.63 4.7c.31.91 1.59.93 1.94.03L21.5 3.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m8.1 14.1 5.05-3.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Resume", href: "/resume" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Full-Stack Development",
  "Web Applications",
  "Management Systems",
  "Business Websites",
  "UI / UX Development",
];

function ArrowUpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path
        d="M12 19V5M6 11l6-6 6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
      />
      <path
        d="m3 7 9 6 9-6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
    >
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
      />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="9" />
      <path
        d="M12 7v5l3 2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Addis_Ababa",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        "sisayabebayew@gmail.com"
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2200);
    } catch {
      window.location.href =
        "mailto:sisayabebayew@gmail.com";
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-line bg-navy">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/10 blur-[140px]" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-accent/10 blur-[140px]" />

        <div
          className="
            absolute inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        <div className="absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
      </div>

      <div className="section-container relative z-10">
        {/* =====================================================
            BIG CTA
        ====================================================== */}

        <section className="relative py-16 sm:py-20 lg:py-24">
          <div
            className="
              relative overflow-hidden
              rounded-[2rem]
              border border-accent/20
              bg-gradient-to-br
              from-accent/[0.08]
              via-white/[0.02]
              to-transparent
              px-6 py-10
              shadow-2xl shadow-black/10
              sm:px-10
              lg:px-14 lg:py-14
            "
          >
            {/* CTA glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-[90px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-accent/5 blur-[90px]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                  </span>

                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    Available for opportunities
                  </span>
                </div>

                <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-paper sm:text-4xl lg:text-5xl light:text-navy">
                  Have an idea?
                  <br />
                  <span className="text-accent">
                    Let&apos;s build it.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-paper/55 sm:text-base light:text-navy/55">
                  From concept to production, I build practical,
                  scalable, and user-focused digital solutions.
                  Let&apos;s turn your idea into something people
                  can actually use.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href="/contact"
                  className="
                    group inline-flex items-center justify-center
                    gap-3 rounded-full
                    bg-accent px-6 py-3.5
                    text-sm font-bold text-navy
                    shadow-lg shadow-accent/10
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-accent-bright
                    hover:shadow-xl hover:shadow-accent/20
                  "
                >
                  Start a Project

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRightIcon />
                  </span>
                </Link>

                <Link
                  href="/projects"
                  className="
                    inline-flex items-center justify-center
                    gap-3 rounded-full
                    border border-slate-line
                    bg-white/[0.03]
                    px-6 py-3.5
                    text-sm font-semibold
                    text-paper/80
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-accent/40
                    hover:bg-accent/10
                    hover:text-accent
                  "
                >
                  Explore Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT STATUS STRIP
        ====================================================== */}

        <section className="border-y border-slate-line">
          <div className="grid divide-y divide-slate-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {/* Location */}
            <div className="flex items-center gap-4 px-1 py-6 sm:px-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-line bg-white/[0.03] text-accent">
                <MapPinIcon />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-paper/35">
                  Location
                </p>
                <p className="mt-1 text-sm font-medium text-paper/80">
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center gap-4 px-1 py-6 sm:px-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-line bg-white/[0.03] text-accent">
                <ClockIcon />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-paper/35">
                  Local Time
                </p>

                <p className="mt-1 font-mono text-sm font-medium text-paper/80">
                  {currentTime || "--:--:--"}{" "}
                  <span className="text-paper/35">
                    EAT
                  </span>
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-4 px-1 py-6 sm:px-6">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-paper/35">
                  Availability
                </p>

                <p className="mt-1 text-sm font-medium text-emerald-300">
                  Open for work
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MAIN FOOTER CONTENT
        ====================================================== */}

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-display text-2xl font-bold text-paper light:text-navy"
            >
              <span>
                Sisay
                <span className="text-accent">.dev</span>
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-accent transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_12px_rgba(78,205,196,0.7)]" />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-paper/50 light:text-navy/50">
              Full-Stack Developer & Digital Solutions Architect
              building practical, modern, and user-friendly
              digital experiences.
            </p>

            {/* Email */}
            <button
              type="button"
              onClick={copyEmail}
              className="
                group mt-6 flex w-full max-w-sm
                items-center gap-3
                rounded-2xl
                border border-slate-line
                bg-white/[0.025]
                px-4 py-3
                text-left
                transition-all duration-300
                hover:border-accent/30
                hover:bg-accent/[0.04]
              "
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <MailIcon />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-[10px] uppercase tracking-[0.15em] text-paper/30">
                  Email
                </span>

                <span className="mt-0.5 block truncate text-xs text-paper/70">
                  {copied
                    ? "Email copied ✓"
                    : "sisayabebayew@gmail.com"}
                </span>
              </span>

              <span className="text-xs text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Copy
              </span>
            </button>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.name} — ${social.description}`}
                  title={social.description}
                  className="
                    group flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    border border-slate-line
                    bg-white/[0.025]
                    text-paper/50
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-accent/40
                    hover:bg-accent/10
                    hover:text-accent
                    hover:shadow-lg
                    hover:shadow-accent/5
                  "
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-paper light:text-navy">
              Explore
            </h3>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      group inline-flex items-center gap-2
                      text-sm text-paper/50
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-accent
                      light:text-navy/50
                    "
                  >
                    <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-paper light:text-navy">
              What I Build
            </h3>

            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="
                    flex items-center gap-2
                    text-sm text-paper/50
                    light:text-navy/50
                  "
                >
                  <span className="h-1 w-1 rounded-full bg-accent/60" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-paper light:text-navy">
              Let&apos;s Connect
            </h3>

            <p className="mt-6 text-sm leading-7 text-paper/50 light:text-navy/50">
              Have a project, idea, or business challenge?
              I&apos;m always interested in discussing meaningful
              digital solutions.
            </p>

                      <Link
                href="/contact"
                className="
                  group mt-6 inline-flex
                  items-center gap-3
                  rounded-full
                  border border-accent/30
                  bg-accent/10
                  px-5 py-3
                  text-sm font-semibold
                  text-accent
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-accent/60
                  hover:bg-accent
                  hover:text-navy
                  hover:shadow-lg
                  hover:shadow-accent/10
                "
              >
                Get in Touch

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRightIcon />
                </span>
              </Link>

              <a
                href="https://wa.me/251965681966"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-5 block text-xs
                  text-paper/35
                  transition-colors
                  hover:text-accent
                "
              >
                WhatsApp · +251 965 681 966
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            TECH STACK MINI BAR
        ====================================================== */}

        <div className="border-t border-slate-line py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-paper/30">
              <span>Built with</span>

              <span className="rounded-full border border-slate-line bg-white/[0.02] px-3 py-1 text-paper/45">
                Next.js
              </span>

              <span className="rounded-full border border-slate-line bg-white/[0.02] px-3 py-1 text-paper/45">
                JavaScript
              </span>

              <span className="rounded-full border border-slate-line bg-white/[0.02] px-3 py-1 text-paper/45">
                Tailwind CSS
              </span>

              <span className="rounded-full border border-slate-line bg-white/[0.02] px-3 py-1 text-paper/45">
                Supabase
              </span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="
                group inline-flex shrink-0
                items-center gap-2
                self-start
                rounded-full
                border border-slate-line
                bg-white/[0.02]
                px-4 py-2
                text-xs font-medium
                text-paper/50
                transition-all duration-300
                hover:-translate-y-1
                hover:border-accent/40
                hover:bg-accent/10
                hover:text-accent
                sm:self-auto
              "
            >
              Back to top

              <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                <ArrowUpIcon />
              </span>
            </button>
          </div>
        </div>

        {/* =====================================================
            COPYRIGHT
        ====================================================== */}

        <div
          className="
            flex flex-col gap-4
            border-t border-slate-line
            py-6
            text-xs text-paper/30
            sm:flex-row sm:items-center sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} Sisay Abebayew.
            All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-accent"
            >
              Privacy
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-accent"
            >
              Contact
            </Link>

            <span className="hidden text-paper/20 sm:inline">
              /
            </span>

            <span className="font-mono text-[10px] text-paper/25">
              SYS.SISAY
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
                