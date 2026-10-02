"use client";

import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/bboysis",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
      >
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.12c-3.2.69-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.4-5.27 5.69.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sisay-abebayew",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
      >
        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.37 4.28 5.46v6.29ZM5.32 7.4a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.98H3.54v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.21 24 24 .77 24 0Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/bboysis",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
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
    name: "Telegram",
    href: "https://t.me/bboysis",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
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

const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Resume", href: "/resume" },
  { name: "Testimonials", href: "/testimonials" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Terminal", href: "/terminal" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-line bg-navy">
      {/* Subtle premium glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-56 w-56 rounded-full bg-accent/[0.035] blur-[100px]" />

        <div className="absolute right-1/4 bottom-0 h-56 w-56 rounded-full bg-accent/[0.025] blur-[100px]" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid gap-12 py-14 sm:py-16 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10 lg:py-20">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center"
            >
              <span className="font-display text-2xl font-bold tracking-tight text-paper transition-colors duration-300 group-hover:text-accent light:text-navy">
                Sisay
              </span>

              <span className="font-display text-2xl font-bold tracking-tight text-accent">
                .dev
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-paper/45 light:text-navy/45">
              Full-Stack Developer building practical,
              modern, and user-focused digital solutions
              that solve real-world problems.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="
                    group flex h-9 w-9
                    items-center justify-center
                    rounded-lg
                    border border-slate-line
                    bg-white/[0.025]
                    text-paper/45
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-accent/40
                    hover:bg-accent/10
                    hover:text-accent
                    light:text-navy/45
                  "
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-paper/75 light:text-navy/75">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      group inline-flex items-center gap-2
                      text-xs text-paper/40
                      transition-colors duration-300
                      hover:text-accent
                      light:text-navy/40
                    "
                  >
                    <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-2.5" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-paper/75 light:text-navy/75">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      group inline-flex items-center gap-2
                      text-xs text-paper/40
                      transition-colors duration-300
                      hover:text-accent
                      light:text-navy/40
                    "
                  >
                    <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-2.5" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href="mailto:sisayabebayew@gmail.com"
              className="
                mt-6 inline-block
                text-xs text-paper/40
                transition-colors duration-300
                hover:text-accent
                light:text-navy/40
              "
            >
              sisayabebayew@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-line" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-paper/25 light:text-navy/25">
            © {new Date().getFullYear()} Sisay Abebayew.
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent/70 shadow-[0_0_8px_rgba(78,205,196,0.5)]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper/25 light:text-navy/25">
              Built with intention
            </span>
          </div>
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              group flex items-center gap-2
              self-start
              text-[10px]
              uppercase
              tracking-[0.16em]
              text-paper/30
              transition-colors duration-300
              hover:text-accent
              sm:self-auto
              light:text-navy/30
            "
          >
            Back to top

            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}