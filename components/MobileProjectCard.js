"use client";

import { useRef, useState } from "react";

const projects = [
  {
    title: "Pharmacy Management System",
    category: "Web Application",
    description:
      "A complete system for managing medicines, inventory, customers, suppliers, sales, and reports.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    number: "01",
  },
  {
    title: "Hotel Management System",
    category: "Management Platform",
    description:
      "A modern platform for managing hotel information, rooms, bookings, and customer experiences.",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    number: "02",
  },
  {
    title: "Personal Portfolio",
    category: "Developer Portfolio",
    description:
      "An interactive portfolio featuring modern UI, animations, responsive design, and immersive experiences.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    number: "03",
  },
];

export default function MobileProjectCards() {
  const [activeProject, setActiveProject] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const cardWidth = container.clientWidth * 0.86;
    const index = Math.round(container.scrollLeft / cardWidth);

    setActiveProject(
      Math.max(0, Math.min(index, projects.length - 1))
    );

    setExpanded(false);
  };

  return (
    <section
      id="mobile-projects"
      className="relative py-16 "
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative">
        {/* Heading */}
        <div className="px-5 text-center">
          <p className="eyebrow mb-3">My Work</p>

          <h2 className="font-display text-3xl font-bold text-paper light:text-navy">
            Explore My
            <span className="text-accent"> Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-paper/60 light:text-navy/60">
            Swipe through my featured projects and tap a card
            to explore more.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            mt-10
            flex
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            px-5
            pb-5
            [-ms-overflow-style:none]
            [scrollbar-width:none]
          "
        >
          {projects.map((project, index) => {
            const isActive = activeProject === index;
            const isExpanded = expanded && isActive;

            return (
              <article
                key={project.number}
                onClick={() => {
                  setActiveProject(index);
                  setExpanded(isActive ? !expanded : true);
                }}
                className={`
                  relative
                  min-w-[86%]
                  snap-center
                  overflow-hidden
                  rounded-3xl
                  border
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  ${
                    isActive
                      ? "border-accent/60 bg-accent/[0.07] shadow-xl shadow-accent/10"
                      : "border-slate-line bg-white/[0.03]"
                  }
                `}
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl font-bold text-accent/20">
                    {project.number}
                  </span>
                  <span
                    className={`
                      rounded-full
                      px-3
                      py-1
                      text-xs
                      font-medium
                      ${
                        isActive
                          ? "bg-accent/15 text-accent"
                          : "bg-white/[0.05] text-paper/50 light:text-navy/50"
                      }
                    `}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-8 font-display text-2xl font-bold text-paper light:text-navy">
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className={`
                    mt-4
                    text-sm
                    leading-7
                    text-paper/60
                    transition-all
                    light:text-navy/60
                    ${
                      isExpanded
                        ? ""
                        : "line-clamp-2"
                    }
                  `}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border
                        border-accent/20
                        bg-accent/[0.06]
                        px-3
                        py-1.5
                        text-xs
                        text-accent
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Tap indicator */}
                <button
                  type="button"
                  className="mt-7 flex items-center gap-2 text-sm font-medium text-accent"
                >
                  {isExpanded ? "Show less" : "Tap to see more"}

                  <span
                    className={`
                      transition-transform
                      duration-300
                      ${isExpanded ? "rotate-180" : ""}
                    `}
                  >
                    ↓
                  </span>
                </button>

                {/* Active glow */}
                {isActive && (
                  <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
                )}
              </article>
            );
          })}
        </div>

        {/* Project indicator */}
        <div className="mt-3 flex items-center justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.number}
              type="button"
              aria-label={`Go to project ${index + 1}`}
              onClick={() => {
                setActiveProject(index);
                setExpanded(false);

                if (scrollRef.current) {
                  const cardWidth =
                    scrollRef.current.clientWidth * 0.86;

                  scrollRef.current.scrollTo({
                    left: cardWidth * index,
                    behavior: "smooth",
                  });
                }
              }}
              className={`
                h-2.5
                rounded-full
                transition-all
                duration-300
                ${
                  activeProject === index
                    ? "w-8 bg-accent"
                    : "w-2.5 bg-paper/20 light:bg-navy/20"
                }
              `}
            />
          ))}
        </div>
        {/* Swipe text */}
        <p className="mt-5 text-center text-xs text-paper/40 light:text-navy/40">
          ← Swipe to explore →
        </p>
      </div>
    </section>
  );
}