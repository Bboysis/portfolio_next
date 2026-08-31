"use client";

import { useState } from "react";

const technologies = [
  { name: "HTML", x: 12, y: 35, level: "Frontend" },
  { name: "CSS", x: 27, y: 18, level: "Frontend" },
  { name: "JavaScript", x: 48, y: 28, level: "Frontend" },
  { name: "React", x: 70, y: 16, level: "Frontend" },
  { name: "Next.js", x: 86, y: 38, level: "Frontend" },

  { name: "PHP", x: 22, y: 72, level: "Backend" },
  { name: "MySQL", x: 46, y: 78, level: "Database" },
  { name: "Java", x: 68, y: 70, level: "Programming" },
  { name: "Git", x: 84, y: 76, level: "Tools" },

  { name: "Tailwind", x: 50, y: 50, level: "Styling" },
];

const connections = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [2, 9],
  [9, 6],
  [9, 3],
  [9, 7],
];

export default function TechConstellation() {
  const [activeTech, setActiveTech] = useState(null);

  const getNode = (index) => technologies[index];

  return (
    <section
      id="tech-constellation"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[150px]" />

      <div className="section-container relative z-10">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">
            Technology Universe
          </p>

          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl light:text-navy">
            My Digital
            <span className="text-accent"> Constellation</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-paper/60 sm:text-lg light:text-navy/60">
            Explore the technologies and tools I use to design,
            develop, and bring digital ideas to life.
          </p>
        </div>

        {/* Constellation */}
        <div
          className="
            relative
            mx-auto
            mt-14
            h-[500px]
            max-w-6xl
            overflow-hidden
            rounded-3xl
            border
            border-slate-line
            bg-white/[0.03]
            backdrop-blur-xl
            sm:h-[580px]
          "
        >
          {/* Grid */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-20
              [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)]
              [background-size:45px_45px]
              light:opacity-30
            "
          />

          {/* SVG Connection Lines */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {connections.map(([from, to], index) => {
              const start = getNode(from);
              const end = getNode(to);

              const isActive =
                activeTech === from ||
                activeTech === to;

              return (
                <line
                  key={index}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke={
                    isActive
                      ? "#3ECFC0"
                      : "rgba(62, 207, 192, 0.22)"
                  }
                  strokeWidth={isActive ? "0.45" : "0.2"}
                  className="transition-all duration-300"
                />
              );
            })}
          </svg>

          {/* Tech Nodes */}
          {technologies.map((tech, index) => {
            const isActive = activeTech === index;
            return (
              <button
                key={tech.name}
                onMouseEnter={() => setActiveTech(index)}
                onMouseLeave={() => setActiveTech(null)}
                onFocus={() => setActiveTech(index)}
                onBlur={() => setActiveTech(null)}
                onClick={() =>
                  setActiveTech(
                    activeTech === index ? null : index
                  )
                }
                className="
                  group
                  absolute
                  -translate-x-1/2
                  -translate-y-1/2
                  focus:outline-none
                "
                style={{
                  left: `${tech.x}%`,
                  top: `${tech.y}%`,
                }}
              >
                {/* Outer glow */}
                <span
                  className={`
                    absolute
                    left-1/2
                    top-1/2
                    h-16
                    w-16
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-accent/10
                    blur-xl
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "scale-150 opacity-100"
                        : "scale-100 opacity-50"
                    }
                  `}
                />

                {/* Node */}
                <span
                  className={`
                    relative
                    flex
                    min-h-12
                    min-w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    px-4
                    py-3
                    text-xs
                    font-semibold
                    shadow-xl
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    sm:text-sm
                    ${
                      isActive
                        ? "scale-110 border-accent bg-accent text-navy shadow-accent/30"
                        : "border-accent/30 bg-navy/70 text-paper group-hover:border-accent group-hover:text-accent light:bg-white/80 light:text-navy"
                    }
                 ` }
                >
                  {tech.name}
                </span>

                {/* Technology category */}
                <span
                  className={`
                    absolute
                    left-1/2
                    top-full
                    mt-2
                    -translate-x-1/2
                    whitespace-nowrap
                    text-[10px]
                    uppercase
                    tracking-wider
                    text-accent
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0"
                    }
                  `}
                >
                  {tech.level}
                </span>
              </button>
            );
          })}

          {/* Center core */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              flex
              h-20
              w-20
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-accent/40
              bg-accent/10
              text-center
              text-xs
              font-semibold
              text-accent
              shadow-xl
              shadow-accent/20
              backdrop-blur-xl
              animate-pulse
            "
          >
            TECH
            <br />
            CORE
          </div>
          {/* Bottom information */}
          <div
            className="
              absolute
              bottom-5
              left-1/2
              -translate-x-1/2
              whitespace-nowrap
              rounded-full
              border
              border-slate-line
              bg-navy/60
              px-4
              py-2
              text-xs
              text-paper/60
              backdrop-blur-xl
              light:bg-white/80
              light:text-navy/60
            "
          >
            Hover or tap a technology to explore
          </div>
        </div>
      </div>
    </section>
  );
}