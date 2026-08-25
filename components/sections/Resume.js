"use client";

import Link from "next/link";

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent/10 blur-[130px]" />

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-4xl">
          
          {/* Heading */}
          <div className="text-center">
            <p className="eyebrow mb-4">
              Professional Profile
            </p>

            <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl light:text-navy">
              My <span className="text-accent">Resume</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-paper/60 sm:text-lg light:text-navy/60">
              Explore my professional background, technical skills,
              education, projects, and development experience.
            </p>
          </div>

          {/* Resume Card */}
          <div
            className="
              group
              relative
              mt-12
              overflow-hidden
              rounded-3xl
              border
              border-slate-line
              bg-white/[0.03]
              p-8
              text-center
              backdrop-blur-md
              transition-all
              duration-500
              hover:border-accent/40
              hover:bg-accent/[0.03]
              hover:shadow-2xl
              hover:shadow-accent/10
              sm:p-12
            "
          >
            {/* CV Icon */}
            <div
              className="
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-2xl
                border
                border-accent/20
                bg-accent/10
                text-accent
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-3
              "
            >
              <svg
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>

            <h3 className="mt-7 font-display text-2xl font-bold text-paper light:text-navy">
              Sisay Abebayew
            </h3>

            <p className="mt-2 text-sm text-accent">
              Full-Stack Developer &amp; Digital Solutions Architect
            </p>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-paper/50 light:text-navy/50">
              Interested in working together or learning more about my
              background? View my complete resume or download a copy for
              later.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              
              {/* View CV */}
              <a
               
                href="cv/photo_2026-08-24_22-10-01.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
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
                "
                
              >
            
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>

                View CV
              </a>

              {/* Download CV */}
              <a
                href="cv/photo_2026-08-24_22-10-01.jpg"
                download="Sisay-Abebayew-CV.pdf"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-slate-line
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-paper
                  transition-all
                  duration-300
                  hover:border-accent
                  hover:text-accent
                  light:text-navy
                "
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v12" />
                  <polyline points="7 10 12 15 17 10" />
                  <path d="M5 21h14" />
                </svg>

                Download CV
              </a>
            </div>

            {/* Decorative line */}
            <div className="mx-auto mt-10 h-px max-w-xs bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

            <p className="mt-5 text-xs text-paper/30 light:text-navy/30">
              Updated regularly as my skills and experience grow check everyday.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}