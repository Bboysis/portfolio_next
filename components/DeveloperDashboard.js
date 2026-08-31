"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    label: "Projects Built",
    value: 12,
    suffix: "+",
    icon: "📁",
    description: "Digital solutions created",
  },
  {
    label: "Technologies",
    value: 10,
    suffix: "+",
    icon: "💻",
    description: "Tools and technologies",
  },
  {
    label: "Systems Developed",
    value: 6,
    suffix: "+",
    icon: "⚙️",
    description: "Complete management systems",
  },
  {
    label: "Learning",
    value: 100,
    suffix: "%",
    icon: "🚀",
    description: "Always improving",
  },
];

const activity = [
  { day: "Mon", level: 35 },
  { day: "Tue", level: 70 },
  { day: "Wed", level: 50 },
  { day: "Thu", level: 90 },
  { day: "Fri", level: 75 },
  { day: "Sat", level: 45 },
  { day: "Sun", level: 65 },
];

function useCountUp(target, duration = 1400) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;

    hasStarted.current = true;

    let startTime;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const easeOut = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(target * easeOut));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return count;
}

function StatCard({ stat }) {
  const count = useCountUp(stat.value);

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-line
        bg-white/[0.03]
        p-5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-accent/40
        hover:bg-accent/[0.04]
        hover:shadow-xl
        hover:shadow-accent/10
        light:bg-white/70
      "
    >
      {/* Decorative glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          bg-accent/10
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-accent/20
        "
      />

      <div className="relative flex items-start justify-between gap-3">

        <div>
          <p className="text-xs text-paper/50 light:text-navy/50">
            {stat.label}
          </p>

          <div className="mt-3 flex items-end gap-1">
            <span className="font-display text-3xl font-bold text-paper light:text-navy">
              {count}
            </span>

            <span className="mb-1 text-sm font-semibold text-accent">
              {stat.suffix}
            </span>
          </div>
        </div>

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-accent/20
            bg-accent/10
            text-xl
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:rotate-3
          "
        >
          {stat.icon}
        </div>

      </div>

      <p className="relative mt-4 text-xs text-paper/40 light:text-navy/40">
        {stat.description}
      </p>

    </article>
  );
}

export default function DeveloperDashboard() {
  return (
    <section
      id="developer-dashboard"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[160px]" />

      <div className="section-container relative z-10">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="eyebrow mb-4">
            Developer Dashboard
          </p>
          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl light:text-navy">
            Development
            <span className="text-accent"> Overview</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-paper/60 sm:text-lg light:text-navy/60">
            A quick overview of my development journey, projects,
            technologies, and continuous learning.
          </p>

        </div>

        {/* Dashboard */}
        <div className="mx-auto mt-14 max-w-6xl">

          {/* Statistics */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                stat={stat}
              />
            ))}

          </div>

          {/* Main dashboard */}
          <div className="mt-6 grid gap-6 lg:grid-cols-5">

            {/* Development activity */}
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-line
                bg-white/[0.03]
                p-6
                backdrop-blur-xl
                lg:col-span-3
                light:bg-white/70
              "
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="text-sm font-semibold text-paper light:text-navy">
                    Development Activity
                  </p>

                  <p className="mt-1 text-xs text-paper/45 light:text-navy/45">
                    Weekly development consistency
                  </p>
                </div>

                <div className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  This Week
                </div>

              </div>

              {/* Chart */}
              <div className="mt-10 flex h-48 items-end justify-between gap-3 sm:gap-5">

                {activity.map((item) => (
                  <div
                    key={item.day}
                    className="group flex h-full flex-1 flex-col justify-end"
                  >
                    <div className="relative flex flex-1 items-end">

                      {/* Percentage */}
                      <span
                        className="
                          absolute
                          -top-7
                          left-1/2
                          -translate-x-1/2
                          text-[10px]
                          text-accent
                          opacity-0
                          transition
                          group-hover:opacity-100
                        "
                      >
                        {item.level}%
                      </span>

                      {/* Bar */}
                      <div
                        className="
                          w-full
                          rounded-t-xl
                          bg-gradient-to-t
                          from-accent/30
                          to-accent
                          transition-all
                          duration-500
                          group-hover:brightness-125
                          group-hover:shadow-lg
                          group-hover:shadow-accent/20
                        "
                        style={{
                          height: `${item.level}%`,
                        }}
                      />
                    </div>

                    <p className="mt-3 text-center text-[10px] text-paper/45 light:text-navy/45">
                      {item.day}
                    </p>

                  </div>
                ))}

              </div>

            </div>
            {/* Current focus */}
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-line
                bg-white/[0.03]
                p-6
                backdrop-blur-xl
                lg:col-span-2
                light:bg-white/70
              "
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm font-semibold text-paper light:text-navy">
                    Current Focus
                  </p>

                  <p className="mt-1 text-xs text-paper/45 light:text-navy/45">
                    What I&apos;m improving
                  </p>
                </div>

                <span className="flex h-3 w-3 rounded-full bg-accent">
                  <span className="h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                </span>

              </div>

              <div className="mt-8 space-y-5">

                {/* Focus item */}
                <div>
                  <div className="mb-2 flex items-center justify-between">

                    <span className="text-xs font-medium text-paper/70 light:text-navy/70">
                      Full-Stack Development
                    </span>

                    <span className="text-xs text-accent">
                      85%
                    </span>

                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10 light:bg-navy/10">
                    <div className="h-full w-[85%] rounded-full bg-accent" />
                  </div>
                </div>

                {/* Focus item */}
                <div>
                  <div className="mb-2 flex items-center justify-between">

                    <span className="text-xs font-medium text-paper/70 light:text-navy/70">
                      UI / UX Design
                    </span>

                    <span className="text-xs text-accent">
                      75%
                    </span>

                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10 light:bg-navy/10">
                    <div className="h-full w-[75%] rounded-full bg-accent" />
                  </div>
                </div>

                {/* Focus item */}
                <div>
                  <div className="mb-2 flex items-center justify-between">

                    <span className="text-xs font-medium text-paper/70 light:text-navy/70">
                      Interactive Web
                    </span>

                    <span className="text-xs text-accent">
                      65%
                    </span>

                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10 light:bg-navy/10">
                    <div className="h-full w-[65%] rounded-full bg-accent" />
                  </div>
                </div>

              </div>

              {/* Bottom */}
              <div className="mt-8 rounded-2xl border border-accent/15 bg-accent/[0.04] p-4">

                <p className="text-xs leading-6 text-paper/55 light:text-navy/55">
                  Building stronger skills through practical projects,
                  continuous learning, and experimentation.
                </p>

              </div>

            </div>

          </div>

          {/* Dashboard footer */}
          <div
            className="
              mt-6
              flex
              flex-col
              items-center
              justify-between
              gap-4
              rounded-2xl
              border
              border-slate-line
              bg-white/[0.02]
              px-6
              py-5
              backdrop-blur-md
              sm:flex-row
              light:bg-white/60
            "
          >

            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                ⚡
              </div>

              <div>
                <p className="text-sm font-medium text-paper light:text-navy">
                  Keep Building
                </p>

                <p className="mt-1 text-xs text-paper/45 light:text-navy/45">
                  Progress comes from consistency.
                </p>
              </div>

            </div>

            <a
              href="#projects"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-accent/30
                px-5
                py-2.5
                text-xs
                font-semibold
                text-accent
                transition-all
                hover:bg-accent
                hover:text-navy
              "
            >
              Explore Projects
              →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
             