 "use client";

import Reveal from "@/components/ui/Reveal";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, modern and interactive user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Creating reliable application logic, APIs and business systems.",
    skills: [
      "PHP",
      "Node.js",
      "REST API",
      "Authentication",
      "API Integration",
    ],
  },
  {
    number: "03",
    title: "Database & Systems",
    description:
      "Designing structured databases and practical management systems.",
    skills: [
      "MySQL",
      "SQL",
      "Database Design",
      "ER Diagrams",
      "CRUD Systems",
    ],
  },
  {
    number: "04",
    title: "Programming",
    description:
      "Using programming fundamentals to solve real-world problems.",
    skills: [
      "JavaScript",
      "PHP",
      "C++",
      "Java",
      "Python",
    ],
  },
  {
    number: "05",
    title: "Tools & Workflow",
    description:
      "Tools I use to build, test, manage and deploy projects.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "XAMPP",
      "Netlify",
    ],
  },
  {
    number: "06",
    title: "Digital Solutions",
    description:
      "Turning ideas into complete, useful and scalable digital products.",
    skills: [
      "UI/UX",
      "Responsive Design",
      "SEO",
      "System Design",
      "Performance",
    ],
  },
];

export default function SkillsGrid() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-accent/[0.06]
          blur-[140px]
        "
      />

      <div className="section-container relative z-10">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <Reveal
          className="mx-auto max-w-3xl text-center"
          direction="up"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent/50" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Expertise
            </p>

            <span className="h-px w-10 bg-accent/50" />
          </div>

          <h2 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Skills That Turn
            <span className="text-accent"> Ideas Into Reality</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-paper/55 sm:text-lg light:text-navy/60">
            A practical combination of development, system design and
            problem-solving skills used to build complete digital solutions.
          </p>
        </Reveal>

        {/* =========================
            SKILLS GRID
        ========================== */}

        <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group, index) => (
            <Reveal
              key={group.number}
              delay={index * 100}
              direction="up"
            >
              <div
                className="
                  group
                  relative
                  h-full
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-line
                  bg-white/[0.025]
                  p-7
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-accent/40
                  hover:bg-accent/[0.035]
                  hover:shadow-2xl
                  hover:shadow-accent/10
                "
              >

                {/* Card glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-accent/10
                    opacity-0
                    blur-3xl
                    transition
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Number + Arrow */}
                <div className="relative flex items-center justify-between">

                  <span
                    className="
                      font-mono
                      text-xs
                      font-semibold
                      tracking-[0.2em]
                      text-accent/70
                    "
                  >
                    {group.number}
                  </span>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-line
                      text-sm
                      text-paper/30
                      transition-all
                      duration-500
                      group-hover:rotate-45
                      group-hover:border-accent/40
                      group-hover:text-accent
                    "
                  >
                    ↗
                  </span>

                </div>

                {/* Title */}
                <h3
                  className="
                    relative
                    mt-7
                    font-display
                    text-xl
                    font-bold
                    text-paper
                    transition-colors
                    duration-300
                    group-hover:text-accent
                    light:text-navy
                  "
                >
                  {group.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    relative
                    mt-3
                    min-h-[48px]
                    text-sm
                    leading-6
                    text-paper/45
                    light:text-navy/50
                  "
                >
                  {group.description}
                </p>

                {/* Divider */}
                <div className="relative my-6 h-px bg-gradient-to-r from-accent/30 via-slate-line to-transparent" />

                {/* Skills */}
                <div className="relative flex flex-wrap gap-2">

                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-slate-line
                        bg-black/10
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-paper/55
                        transition-all
                        duration-300
                        hover:border-accent/50
                        hover:bg-accent/10
                        hover:text-accent
                        light:text-navy/60
                      "
                    >
                      {skill}
                    </span>
                  ))}
                  </div>

                {/* Bottom animated line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-accent
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

              </div>
            </Reveal>
          ))}

        </div>

        {/* =========================
            BOTTOM MESSAGE
        ========================== */}

        <Reveal
          className="mx-auto mt-14 max-w-3xl text-center"
          delay={700}
          direction="up"
        >
          <p className="text-sm text-paper/40 light:text-navy/40">
            Always learning. Always building.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-accent/20" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}