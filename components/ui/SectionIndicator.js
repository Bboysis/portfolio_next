"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-20% 0px -50% 0px",
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
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
    <nav
      className="
        fixed
        right-6
        top-1/2
        z-50
        hidden
        -translate-y-1/2
        lg:block
      "
      aria-label="Section navigation"
    >
      <div
        className="
          flex
          flex-col
          items-end
          gap-4
          rounded-full
          border
          border-slate-line
          bg-navy/60
          px-3
          py-4
          backdrop-blur-xl
          shadow-2xl
        "
      >
        {sections.map((section) => {
          const active = activeSection === section.id;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className="group flex items-center gap-3"
              aria-label={`Go to ${section.label}`}
              title={section.label}
            >
              <span
                className={`
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-wider
                  transition-all
                  duration-300
                  ${
                    active
                      ? "translate-x-0 text-accent opacity-100"
                      : "translate-x-2 text-paper/0 group-hover:translate-x-0 group-hover:text-paper/70"
                  }
                `}
              >
                {section.label}
              </span>

              <span
                className={`
                  block
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    active
                      ? "h-3 w-3 bg-accent shadow-[0_0_12px_rgba(62,207,192,0.8)]"
                      : "h-2 w-2 bg-paper/30 group-hover:bg-accent/70"
                  }
                `}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}