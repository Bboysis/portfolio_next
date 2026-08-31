"use client";

const activities = [
  {
    type: "CURRENTLY BUILDING",
    title: "Premium Digital Experiences",
    description:
      "Creating modern, interactive, and user-focused web experiences with smooth animations and practical functionality.",
    icon: "🚀",
    status: "In Progress",
    statusColor: "active",
    progress: 82,
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    type: "CURRENTLY LEARNING",
    title: "Advanced Web Development",
    description:
      "Exploring modern frontend technologies, better UI systems, performance optimization, and interactive web experiences.",
    icon: "📚",
    status: "Learning",
    statusColor: "learning",
    progress: 70,
    tags: ["JavaScript", "Three.js", "UI/UX"],
  },
  {
    type: "NEXT GOAL",
    title: "Build Bigger Digital Solutions",
    description:
      "Developing more complete applications and expanding my skills in modern technologies and professional software development.",
    icon: "🎯",
    status: "Next",
    statusColor: "next",
    progress: 45,
    tags: ["Full Stack", "AI", "Cloud"],
  },
];

function ArrowIcon() {
  return (
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
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function CurrentlyBuilding() {
  return (
    <section
      id="currently-building"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-accent/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/5 blur-[160px]" />

      <div className="section-container relative z-10">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.05] px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Live Developer Status
            </span>
          </div>

          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl light:text-navy">
            What I&apos;m
            <span className="text-accent"> Working On</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-paper/60 sm:text-lg light:text-navy/60">
            A quick look at what I&apos;m building, learning,
            and planning for the next stage of my development journey.
          </p>
        </div>

        {/* Activity cards */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">

          {activities.map((activity) => (
            <article
              key={activity.type}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-line
                bg-white/[0.03]
                p-7
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-accent/40
                hover:bg-accent/[0.04]
                hover:shadow-2xl
                hover:shadow-accent/10
                light:bg-white/70
              "
            >
              {/* Top glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 blur-3xl transition-all duration-500 group-hover:bg-accent/20" />
              {/* Header */}
              <div className="relative flex items-start justify-between gap-4">

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {activity.icon}
                </div>

                {/* Status */}
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1.5">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      activity.statusColor === "active"
                        ? "animate-pulse bg-accent"
                        : activity.statusColor === "learning"
                        ? "bg-yellow-400"
                        : "bg-blue-400"
                    }`}
                  />

                  <span className="text-[10px] font-semibold uppercase tracking-wider text-paper/60 light:text-navy/60">
                    {activity.status}
                  </span>
                </div>

              </div>

              {/* Type */}
              <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent/80">
                {activity.type}
              </p>

              {/* Title */}
              <h3 className="mt-3 font-display text-xl font-bold text-paper sm:text-2xl light:text-navy">
                {activity.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-paper/55 light:text-navy/60">
                {activity.description}
              </p>

              {/* Progress */}
              <div className="mt-7">

                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-paper/50 light:text-navy/50">
                    Progress
                  </span>

                  <span className="text-xs font-semibold text-accent">
                    {activity.progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10 light:bg-navy/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent/70 to-accent transition-all duration-1000 group-hover:brightness-125"
                    style={{
                      width: `${activity.progress}%`,
                    }}
                  />
                </div>

              </div>

              {/* Tags */}
              <div className="mt-7 flex flex-wrap gap-2">

                {activity.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-slate-line
                      bg-white/[0.03]
                      px-3
                      py-1.5
                      text-[11px]
                      font-medium
                      text-paper/60
                      transition
                      group-hover:border-accent/20
                      light:bg-navy/[0.03]
                      light:text-navy/65
                    "
                  >
                    {tag}
                  </span>
                ))}

              </div>

              {/* Bottom */}
              <div className="mt-7 flex items-center gap-2 border-t border-slate-line pt-5 text-xs font-medium text-accent transition-transform duration-300 group-hover:translate-x-1">
                <span>Development journey</span>
                <ArrowIcon />
              </div>

            </article>
          ))}

        </div>

        {/* Bottom status */}
        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center gap-3 rounded-2xl border border-slate-line bg-white/[0.02] px-6 py-5 text-center backdrop-blur-md sm:flex-row sm:text-left light:bg-white/60">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            ⚡
          </div>

          <p className="text-sm text-paper/60 light:text-navy/60">
            Always improving, always learning, and always looking for
            the next challenge.
          </p>

        </div>

      </div>
    </section>
  );
}