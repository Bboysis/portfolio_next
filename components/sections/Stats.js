"use client";

const stats = [
  {
    number: "10+",
    label: "Projects Built",
    description: "Websites, systems, and digital solutions",
  },
  {
    number: "15+",
    label: "Technologies",
    description: "Languages, frameworks, and development tools",
  },
  {
    number: "3+",
    label: "Management Systems",
    description: "Real-world business management applications",
  },
  {
    number: "100%",
    label: "Learning Mindset",
    description: "Always improving and exploring new technology",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[130px]" />

      <div className="section-container relative z-10">

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-line bg-slate-line md:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="
                group
                relative
                bg-navy
                p-6
                text-center
                transition-all
                duration-500
                hover:bg-accent/[0.04]
                sm:p-8
              "
            >
              {/* Number */}
              <div
                className="
                  font-display
                  text-3xl
                  font-bold
                  text-accent
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {stat.number}
              </div>

              {/* Label */}
              <h3 className="mt-3 font-display text-sm font-semibold text-paper sm:text-base light:text-navy">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="mx-auto mt-2 max-w-[180px] text-xs leading-5 text-paper/40 light:text-navy/40">
                {stat.description}
              </p>

              {/* Accent line */}
              <div
                className="
                  mx-auto
                  mt-5
                  h-px
                  w-8
                  bg-accent/30
                  transition-all
                  duration-500
                  group-hover:w-16
                  group-hover:bg-accent
                "
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}