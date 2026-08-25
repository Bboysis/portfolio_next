 "use client";

const timeline = [
  {
    year: "2026 — Present",
    type: "Development",
    title: "Full-Stack Developer & Digital Solutions Architect",
    organization: "Independent / Personal Projects",
    description:
      "Designing and developing practical digital solutions, management systems, business websites, and modern web applications. Focused on creating clean interfaces, useful functionality, and real-world solutions.",
    technologies: ["JavaScript", "PHP", "MySQL", "React", "Next.js"],
  },
  {
    year: "2026",
    type: "Education",
    title: "Computer Science Student",
    organization: "University",
    description:
      "Developing a strong foundation in software development, databases, algorithms, web technologies, computer architecture, and software engineering.",
    technologies: [
      "Programming",
      "Databases",
      "Web Development",
      "Software Engineering",
    ],
  },
  {
    year: "2025 — 2026",
    type: "Development",
    title: "Web Development & Software Projects",
    organization: "Personal & Academic Projects",
    description:
      "Built multiple practical projects including management systems, business websites, e-commerce concepts, QR menu systems, and other web-based applications.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

const education = [
  {
    title: "Computer Science",
    institution: "University",
    period: "2024 — Present",
    description:
      "Studying computer science with a focus on programming, software development, databases, web technologies, and system design.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-accent/10 blur-[130px]" />

      <div className="section-container relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">
            My Journey
          </p>

          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl light:text-navy">
            Experience &
            <span className="text-accent"> Education</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-paper/60 sm:text-lg light:text-navy/60">
            My journey through computer science, software development,
            and practical project building.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative">

            {/* Vertical line */}
            <div
              className="
                absolute
                bottom-0
                left-[15px]
                top-0
                w-px
                bg-gradient-to-b
                from-accent
                via-accent/30
                to-transparent
                sm:left-1/2
                sm:-translate-x-1/2
              "
            />

            {timeline.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className={`relative mb-14 grid gap-8 sm:grid-cols-2 ${
                  index % 2 === 0
                    ? ""
                    : "sm:[&>*:first-child]:order-2"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="
                    absolute
                    left-[8px]
                    top-2
                    z-10
                    h-4
                    w-4
                    rounded-full
                    border-4
                    border-navy
                    bg-accent
                    shadow-lg
                    shadow-accent/30
                    sm:left-1/2
                    sm:-translate-x-1/2
                  "
                />
                {/* Date / Type */}
                <div
                  className={`pl-10 sm:pl-0 ${
                    index % 2 === 0
                      ? "sm:pr-12 sm:text-right"
                      : "sm:pl-12 sm:text-left"
                  }`}
                >
                  <span className="font-mono text-sm font-medium text-accent">
                    {item.year}
                  </span>

                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-paper/40 light:text-navy/40">
                    {item.type}
                  </p>
                </div>

                {/* Content */}
                <div
                  className={`pl-10 sm:pl-0 ${
                    index % 2 === 0
                      ? "sm:pl-12"
                      : "sm:pr-12"
                  }`}
                >
                  <div
                    className="
                      group
                      rounded-2xl
                      border
                      border-slate-line
                      bg-white/[0.03]
                      p-6
                      backdrop-blur-md
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-accent/40
                      hover:bg-accent/[0.03]
                      hover:shadow-xl
                      hover:shadow-accent/5
                    "
                  >
                    <h3 className="font-display text-xl font-bold text-paper light:text-navy">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-accent/80">
                      {item.organization}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-paper/55 light:text-navy/55">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-full
                            border
                            border-slate-line
                            bg-white/[0.03]
                            px-3
                            py-1.5
                            text-xs
                            text-paper/60
                            transition
                            group-hover:border-accent/20
                            group-hover:text-accent
                            light:text-navy/60
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="mb-8 text-center">
            <p className="eyebrow">
              Academic Background
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {education.map((item) => (
              <div
                key={item.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-line
                  bg-white/[0.03]
                  p-6
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-accent/40
                  hover:shadow-xl
                  hover:shadow-accent/5
                "
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-paper light:text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-accent">
                      {item.institution}
                    </p>
                  </div>

                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs text-accent">
                    {item.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-paper/55 light:text-navy/55">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}