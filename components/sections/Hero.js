 "use client";

import dynamic from "next/dynamic";
import Link from "next/link";

// Load the 3D scene only in the browser.
// This prevents Three.js from running during server rendering.
const HeroScene = dynamic(
  () => import("@/components/three/HeroScene"),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="h-16 w-16 animate-pulse rounded-full border border-accent/30" />
          <div className="absolute inset-0 rounded-full border border-accent/10 animate-ping" />
        </div>
      </div>
    ),
  }
);

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-[92vh]
        items-center
        overflow-hidden
        bg-grid-glow
      "
    >
      {/* =========================================
          3D DEVELOPER WORKSPACE
      ========================================= */}
      <div
        className="
          absolute
          inset-0
          z-0
          md:left-[38%]
        "
      >
        <HeroScene />
      </div>

      {/* =========================================
          DARK GRADIENT OVER 3D
          Keeps text readable
      ========================================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-gradient-to-r
          from-navy
          via-navy/80
          to-transparent
          md:from-navy
          md:via-navy/60
          md:to-transparent
        "
      />

      {/* =========================================
          HERO CONTENT
      ========================================= */}
      <div
        className="
          section-container
          relative
          z-10
          grid
          gap-10
          py-28
          md:grid-cols-2
          md:py-32
        "
      >
        {/* =====================================
            LEFT SIDE
        ===================================== */}
        <div className="max-w-2xl animate-fade-up">

          {/* Availability */}
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-accent/20
              bg-accent/[0.06]
              px-4
              py-2
              backdrop-blur-sm
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-accent
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-accent
                  shadow-[0_0_10px_rgba(62,207,192,0.8)]
                "
              />
            </span>

            <span className="text-xs font-medium tracking-wide text-accent">
              AVAILABLE FOR PROJECTS
            </span>
          </div>

          {/* Small label */}
          <p className="eyebrow mb-4">
            Full-Stack Developer &amp; Digital Solutions Architect
          </p>

          {/* =====================================
              NAME
          ===================================== */}
          <h1
            className="
              font-display
              text-4xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-paper
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
              light:text-navy
            "
          >
            Building
            <span className="block">
              Digital
            </span>
            <span className="block text-accent">
              Solutions.
            </span>
          </h1>

          {/* Name */}
          <p
            className="
              mt-5
              font-display
              text-lg
              font-semibold
              text-paper/80
              light:text-navy/80
            "
          >
            Sisay Abebayew
          </p>

          {/* =====================================
              DESCRIPTION
          ===================================== */}
          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-7
              text-paper/65
              sm:text-lg
              sm:leading-8
              light:text-navy/65
            "
          >
            I build complete, practical, and user-friendly digital
            solutions that turn ideas into real, functional applications.
            From modern websites to full-stack management systems,
            I focus on solving real problems with clean technology.
          </p>

          {/* =====================================
              CTA BUTTONS
          ===================================== */}
          <div className="mt-9 flex flex-wrap gap-4">

            {/* Projects */}
            <Link
              href="/projects"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-accent
                px-6
                py-3.5
                text-sm
                font-semibold
                text-navy
                shadow-lg
                shadow-accent/10
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-accent-bright
                hover:shadow-xl
                hover:shadow-accent/20
              "
            >
              View Projects

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>

            {/* Hire */}
            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-line
                bg-white/[0.02]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-paper
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-accent/50
                hover:bg-accent/[0.05]
                hover:text-accent
                light:text-navy
              "
            >
              Hire Me

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>
            </Link>

          </div>

          {/* =====================================
              TECHNOLOGY / EXPERIENCE STRIP
          ===================================== */}
          <div
            className="
              mt-12
              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-3
              border-t
              border-slate-line
              pt-6
            "
          >
            <div>
              <p className="font-display text-lg font-bold text-paper light:text-navy">
                10+
              </p>

              <p className="text-xs text-paper/40 light:text-navy/40">
                Projects
              </p>
            </div>

            <div className="h-8 w-px bg-slate-line" />
            <div>
              <p className="font-display text-lg font-bold text-paper light:text-navy">
                Full-Stack
              </p>

              <p className="text-xs text-paper/40 light:text-navy/40">
                Development
              </p>
            </div>

            <div className="h-8 w-px bg-slate-line" />

            <div>
              <p className="font-display text-lg font-bold text-paper light:text-navy">
                Web
              </p>

              <p className="text-xs text-paper/40 light:text-navy/40">
                Digital Solutions
              </p>
            </div>
          </div>

        </div>

        {/* =========================================
            RIGHT SIDE — 3D SPACE
        ========================================= */}
        <div className="relative hidden min-h-[500px] md:block">

          {/* 3D label */}
          <div
            className="
              absolute
              bottom-16
              right-4
              z-20
              rounded-2xl
              border
              border-slate-line
              bg-navy/50
              px-4
              py-3
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-accent
                  shadow-[0_0_10px_rgba(62,207,192,0.8)]
                "
              />

              <div>
                <p className="text-xs font-medium text-paper/80">
                  Interactive Workspace
                </p>

                <p className="mt-0.5 text-[10px] text-paper/40">
                  Three.js • React • Web
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* =========================================
          BOTTOM SCROLL INDICATOR
      ========================================= */}
      <div
        className="
          absolute
          bottom-8
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          md:flex
        "
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-paper/30">
          Scroll
        </span>

        <div
          className="
            h-10
            w-px
            bg-gradient-to-b
            from-accent
            to-transparent
          "
        />
      </div>
    </section>
  );
}