"use client";

import { useEffect, useState } from "react";
 const sections = [
  {
    id: "home",
    label: "Home",
    number: "01",
    icon: "⌂",
  },
  {
    id: "about",
    label: "About",
    number: "02",
    icon: "◉",
  },
  {
    id: "skills",
    label: "Skills",
    number: "03",
    icon: "✦",
  },
  {
    id: "projects",
    label: "Projects",
    number: "04",
    icon: "▣",
  },
  {
    id: "experience",
    label: "Experience",
    number: "05",
    icon: "◈",
  },
  {
    id: "testimonials",
    label: "Feedback",
    number: "06",
    icon: "★",
  },
  {
    id: "contact",
    label: "Contact",
    number: "07",
    icon: "✉",
  },
];

export default function WebsiteMap() {
   const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        {
          threshold: 0.35,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="explore"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[160px]" />

      <div className="section-container relative z-10">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="eyebrow mb-4">
            Explore Portfolio
          </p>

          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl light:text-navy">
            Explore My
            <span className="text-accent"> Digital World</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-paper/60 sm:text-lg light:text-navy/60">
            Navigate through my portfolio and discover my skills,
            projects, experience, and development journey.
          </p>

        </div>

        {/* Map container */}
        <div
          className="
            mx-auto
            mt-14
            max-w-5xl
            rounded-3xl
            border
            border-slate-line
            bg-white/[0.03]
            p-5
            backdrop-blur-xl
            sm:p-8
            light:bg-white/70
          "
        >

          {/* Map header */}
          <div className="flex flex-col gap-4 border-b border-slate-line pb-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="font-display text-lg font-semibold text-paper light:text-navy">
                Portfolio Map
              </p>

              <p className="mt-1 text-xs text-paper/45 light:text-navy/45">
                Click a destination to explore
              </p>
            </div>

            {/* Status */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-2">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                Interactive Map
              </span>

            </div>

          </div>

          {/* Map */}
          <div className="relative mt-10">

           {/* Connecting line */}
            <div className="absolute left-1/2 top-6 hidden h-[calc(100%-48px)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent/30 to-transparent md:block" />

            <div className="grid gap-4 md:grid-cols-2 md:gap-x-20 md:gap-y-8">

              {sections.map((section, index) => {
                const isActive = activeSection === section.id;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={section.id}
                    className={`relative ${
                      isLeft ? "md:translate-x-0" : ""
                    }`}
                  >

                    {/* Central map node */}
                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        z-10
                        hidden
                        h-4
                        w-4
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        border-4
                        border-navy
                        bg-accent
                        md:block
                        light:border-white
                      "
                    />

                    {/* Map card */}
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`
                        group
                        relative
                        w-full
                        overflow-hidden
                        rounded-2xl
                        border
                        p-5
                        text-left
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "border-accent bg-accent/[0.08] shadow-lg shadow-accent/10"
                            : "border-slate-line bg-white/[0.02] hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/[0.04]"
                        }
                        light:bg-white/60
                     `}
                    >

                      {/* Number */}
                      <span className="absolute right-5 top-4 font-mono text-[10px] tracking-widest text-paper/30 light:text-navy/30">
                        {section.number}
                      </span>

                      <div className="flex items-center gap-4">

                        {/* Icon */}
                        <div
                          className={`
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            text-xl
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? "border-accent/40 bg-accent/15 text-accent"
                                : "border-slate-line bg-white/[0.04] text-paper/70 group-hover:border-accent/30 group-hover:text-accent light:text-navy/70"
                            }
                          `}
                        >
                          {section.icon}
                        </div>

                        {/* Text */}
                        <div>

                          <p
                            className={`
                              text-sm
                              font-semibold
                              transition
                              ${
                                isActive
                                  ? "text-accent"
                                  : "text-paper group-hover:text-accent light:text-navy"
                              }
                            `}
                          >
                            {section.label}
                          </p>

                          <p className="mt-1 text-xs text-paper/45 light:text-navy/45">
                            {isActive
                              ? "You are here"
                              : "Explore section"}
                          </p>

                        </div>

                      </div>

                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-accent to-transparent" />
                      )}

                    </button>

                  </div>
                );
              })}

            </div>

          </div>

          {/* Bottom navigation */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-slate-line pt-7">

            <span className="text-xs text-paper/40 light:text-navy/40">
              Current location:
            </span>

            <span className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent">
              {sections.find(
                (section) => section.id === activeSection
              )?.label || "Home"}
            </span>
           </div>

        </div>

      </div>
    </section>
  );
}