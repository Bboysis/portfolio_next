"use client";

import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/bboysis",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sisay-abebayew",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/bboysis",
  },
  {
    name: "Telegram",
    href: "https://t.me/bboysis",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-line bg-navy">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/[0.04] blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Main footer */}
        <div className="flex flex-col items-center py-16 text-center sm:py-20">
          
          {/* Logo */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2"
          >
            <span className="font-display text-4xl font-bold tracking-tight text-paper transition-colors duration-300 group-hover:text-accent light:text-navy sm:text-5xl">
              Sisay
            </span>

            <span className="font-display text-4xl font-bold tracking-tight text-accent sm:text-5xl">
              .dev
            </span>

            <span className="mb-7 h-2 w-2 rounded-full bg-accent transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(78,205,196,0.7)]" />
          </Link>

          {/* Short description */}
          <p className="mt-5 max-w-md text-sm leading-7 text-paper/45 light:text-navy/45 sm:text-base">
            Full-Stack Developer building practical,
            modern, and user-focused digital solutions.
          </p>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="
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
                  light:text-navy/50
                "
              >
                {social.name}
              </a>
            ))}
          </div>
          {/* Email */}
          <a
            href="mailto:sisayabebayew@gmail.com"
            className="
              mt-7
              text-sm
              text-paper/40
              transition-colors
              duration-300
              hover:text-accent
              light:text-navy/40
            "
          >
            sisayabebayew@gmail.com
          </a>

          {/* Decorative line */}
          <div className="mt-12 flex w-full max-w-2xl items-center gap-4">
            <span className="h-px flex-1 bg-slate-line" />

            <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />

            <span className="h-px flex-1 bg-slate-line" />
          </div>

          {/* Bottom navigation */}
          <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <Link
              href="/"
              className="
                text-xs
                text-paper/40
                transition-colors
                hover:text-accent
                light:text-navy/40
              "
            >
              Home
            </Link>

            <Link
              href="/about"
              className="
                text-xs
                text-paper/40
                transition-colors
                hover:text-accent
                light:text-navy/40
              "
            >
              About
            </Link>

            <Link
              href="/projects"
              className="
                text-xs
                text-paper/40
                transition-colors
                hover:text-accent
                light:text-navy/40
              "
            >
              Projects
            </Link>

            <Link
              href="/resume"
              className="
                text-xs
                text-paper/40
                transition-colors
                hover:text-accent
                light:text-navy/40
              "
            >
              Resume
            </Link>

            <Link
              href="/contact"
              className="
                text-xs
                text-paper/40
                transition-colors
                hover:text-accent
                light:text-navy/40
              "
            >
              Contact
            </Link>
          </nav>
          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              mt-8
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-paper/25
              transition-all
              duration-300
              hover:-translate-y-1
              hover:text-accent
              light:text-navy/25
            "
          >
            ↑ Back to top
          </button>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-line py-5 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] text-paper/25 light:text-navy/25">
            © {new Date().getFullYear()} Sisay Abebayew
          </p>

          <p className="font-mono text-[10px] tracking-wider text-paper/20 light:text-navy/20">
            SISAY.DEV
          </p>
        </div>
      </div>
    </footer>
  );
}
