 "use client";

import { useState } from "react";

const skills = [
  {
    name: "HTML5",
    category: "Frontend",
    level: 95,
    icon: "🌐",
    description: "Semantic and responsive web structure.",
  },
  {
    name: "CSS3",
    category: "Frontend",
    level: 90,
    icon: "🎨",
    description: "Modern responsive layouts and animations.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: 85,
    icon: "⚡",
    description: "Interactive and dynamic web applications.",
  },
  {
    name: "React",
    category: "Frontend",
    level: 75,
    icon: "⚛️",
    description: "Component-based user interfaces.",
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: 70,
    icon: "▲",
    description: "Modern React applications and performance.",
  },
  {
    name: "PHP",
    category: "Backend",
    level: 85,
    icon: "🐘",
    description: "Server-side applications and web systems.",
  },
  {
    name: "MySQL",
    category: "Database",
    level: 85,
    icon: "🗄️",
    description: "Relational database design and management.",
  },
  {
    name: "SQL",
    category: "Database",
    level: 80,
    icon: "📊",
    description: "Database queries and data management.",
  },
  {
    name: "Git",
    category: "Tools",
    level: 75,
    icon: "🔧",
    description: "Version control and project management.",
  },
  {
    name: "GitHub",
    category: "Tools",
    level: 75,
    icon: "🐙",
    description: "Code hosting and collaboration.",
  },
  {
    name: "VS Code",
    category: "Tools",
    level: 90,
    icon: "💻",
    description: "Professional development environment.",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    level: 80,
    icon: "🅱️",
    description: "Responsive and modern user interfaces.",
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

export default function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter(
          (skill) => skill.category === activeCategory
        );

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[150px]" />

      <div className="section-container relative z-10">

        {/* ================= Heading ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="eyebrow mb-4">
            Technical Expertise
          </p>

          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl light:text-navy">
            Skills &{" "}
            <span className="text-accent">
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-paper/60 sm:text-lg light:text-navy/60">
            A growing collection of technologies and tools I use
            to design, build, and improve modern digital solutions.
          </p>

        </div>


        {/* ================= Filters ================= */}

        <div className="mt-12 flex flex-wrap justify-center gap-3">

          {categories.map((category) => {

            const active =
              activeCategory === category;

            return (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    active
                      ? "border-accent bg-accent text-navy shadow-lg shadow-accent/20"
                      : "border-slate-line bg-white/[0.03] text-paper/70 hover:border-accent/50 hover:text-accent light:text-navy/70"
                  }
                `}
              >
                {category}
              </button>
            );
          })}

        </div>


        {/* ================= Skills Grid ================= */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {filteredSkills.map((skill) => (

            <article
              key={skill.name}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-line
                bg-white/[0.03]
                p-6
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-accent/40
                hover:bg-accent/[0.04]
                hover:shadow-2xl
                hover:shadow-accent/10
              "
            >

              {/* Hover glow */}

              <div className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-accent/10
                blur-3xl
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              " />


              {/* Top section */}

              <div className="
                relative
                flex
                items-start
                justify-between
                gap-4
              ">

                {/* Icon */}

                <div className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-accent/20
                  bg-accent/10
                  text-2xl
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-3
                ">
                  {skill.icon}
                </div>


                {/* Percentage */}

                <span className="
                  rounded-full
                  border
                  border-accent/20
                  bg-accent/10
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-accent
                ">
                  {skill.level}%
                </span>

              </div>


              {/* Content */}

              <div className="relative mt-6">

                <p className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-accent/80
                ">
                  {skill.category}
                </p>


                <h3 className="
                  mt-2
                  font-display
                  text-xl
                  font-bold
                  text-paper
                  light:text-navy
                ">
                  {skill.name}
                </h3>


                <p className="
                  mt-3
                  text-sm
                  leading-6
                  text-paper/55
                  light:text-navy/55
                ">
                  {skill.description}
                </p>

              </div>


              {/* Progress bar */}

              <div className="relative mt-6">

                <div className="
                  mb-2
                  flex
                  justify-between
                  text-xs
                ">
                  <span className="
                    text-paper/45
                    light:text-navy/45
                  ">
                    Proficiency
                  </span>

                  <span className="text-accent">
                    {skill.level}%
                  </span>

                </div>


                <div className="
                  h-2
                  overflow-hidden
                  rounded-full
                  bg-white/10
                  light:bg-navy/10
                ">

                  <div
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-accent
                      to-accent-bright
                      transition-all
                      duration-1000
                      ease-out
                    "
                    style={{
                      width: `${skill.level}%`,
                    }}
                  />

                </div>

              </div>


              {/* Bottom line */}

              <div className="
                absolute
                bottom-0
                left-0
                h-[2px]
                w-0
                bg-accent
                transition-all
                duration-500
                group-hover:w-full
              " />

            </article>

          ))}

        </div>


        {/* Empty state */}

        {filteredSkills.length === 0 && (

          <div className="
            mt-12
            rounded-2xl
            border
            border-slate-line
            bg-white/[0.03]
            p-10
            text-center
            text-paper/60
            light:text-navy/60
          ">
            No skills found in this category.
          </div>

        )}

      </div>
    </section>
  );
}