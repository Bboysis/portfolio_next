"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Feedback" },
  { id: "contact", label: "Contact" },
];

export default function ScrollStory() {
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollStory = () => {
      // Page scroll progress
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(Math.min(Math.max(percentage, 0), 100));

      // Find active section
      let currentSection = "home";
      const viewportPoint = window.innerHeight * 0.45;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (
          rect.top <= viewportPoint &&
          rect.bottom >= viewportPoint
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    updateScrollStory();

    window.addEventListener("scroll", updateScrollStory, {
      passive: true,
    });

    window.addEventListener("resize", updateScrollStory);

    return () => {
      window.removeEventListener("scroll", updateScrollStory);
      window.removeEventListener("resize", updateScrollStory);
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

  const activeLabel =
    sections.find((section) => section.id === activeSection)?.label ||
    "Home";

  return (
    <>
      {/* Desktop scroll story */}
      <div
        className="
          fixed
          right-5
          top-1/2
          z-[70]
          hidden
          -translate-y-1/2
          xl:flex
          flex-col
          items-end
          gap-4
        "
      >
        {/* Active section name */}
        <div
          className="
            mb-2
            rounded-full
            border
            border-slate-line
            bg-navy/80
            px-4
            py-2
            text-xs
            font-semibold
            text-paper
            shadow-lg
            backdrop-blur-xl
            light:bg-white/80
            light:text-navy
          "
        >
          {activeLabel}
        </div>

        <div className="flex items-center gap-3">
          {/* Progress line */}
          <div className="relative h-48 w-[2px] overflow-hidden rounded-full bg-white/10 light:bg-navy/10">
            <div
              className="absolute left-0 top-0 w-full rounded-full bg-accent transition-all duration-300"
              style={{
                height: `${progress}%`,
              }}
            />
          </div>

          {/* Section indicators */}
          <div className="flex flex-col gap-3">
            {sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  aria-label={`Go to ${section.label}`}
                  title={section.label}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                  "
                  >
                  {/* Label on hover */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      right-12
                      scale-95
                      rounded-lg
                      border
                      border-slate-line
                      bg-navy/90
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-paper
                      opacity-0
                      shadow-lg
                      transition-all
                      duration-200
                      group-hover:scale-100
                      group-hover:opacity-100
                      light:bg-white/95
                      light:text-navy
                    "
                  >
                    {section.label}
                  </span>

                  {/* Dot */}
                  <span
                    className={`
                      relative
                      block
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "h-3 w-3 bg-accent shadow-lg shadow-accent/50"
                          : "h-2 w-2 bg-paper/30 hover:bg-paper/60 light:bg-navy/30"
                      }
                   ` }
                  >
                    {isActive && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-40" />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile progress bar */}
      <div
        className="
          fixed
          left-0
          top-0
          z-[90]
          h-[3px]
          w-full
          bg-transparent
          xl:hidden
        "
      >
        <div
          className="
            h-full
            bg-accent
            transition-[width]
            duration-200
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </>
  );
}