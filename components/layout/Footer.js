 "use client";

import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.12c-3.2.69-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.4-5.27 5.69.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.37 4.28 5.46v6.29ZM5.32 7.4a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.98H3.54v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Full-Stack Development",
  "Web Applications",
  "Management Systems",
  "Business Websites",
  "UI / UX Development",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-line bg-navy">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-accent/5 blur-[120px]" />

      <div className="section-container relative z-10">

        {/* Main footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-display text-2xl font-bold text-paper"
            >
              Sisay<span className="text-accent">.dev</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-paper/55">
              Full-Stack Developer & Digital Solutions Architect building
              practical, modern, and user-friendly digital solutions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
              <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    border border-slate-line
                    bg-white/[0.03]
                    text-paper/60
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-accent/50
                    hover:bg-accent/10
                    hover:text-accent
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-paper">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      text-sm text-paper/55
                      transition-colors duration-300
                      hover:text-accent
                    "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-paper">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-paper/55"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-paper">
              Let&apos;s Work Together
            </h3>

            <p className="mt-5 text-sm leading-6 text-paper/55">
              Have an idea, project, or business that needs a digital
              solution? Let&apos;s build it together.
            </p>

            <Link
              href="/contact"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-accent
                px-5
                py-3
                text-sm
                font-bold
                text-navy
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-accent-bright
              "
            >
              Hire Me
              <span>→</span>
            </Link>

            <a
              href="mailto:sisayabebayew@gmail.com"
              className="
                mt-4
                block
                text-sm
                text-paper/55
                transition-colors
                hover:text-accent
              "
            >
              sisayabebayew@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-slate-line
            py-6
            text-sm
            text-paper/40
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} Sisay Abebayew. All rights reserved.
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
          </div>
        </div>

      </div>
    </footer>
  );
}