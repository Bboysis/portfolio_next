 "use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 10,
    suffix: "+",
    label: "Projects Built",
  },
  {
    number: 15,
    suffix: "+",
    label: "Technologies",
  },
  {
    number: 3,
    suffix: "+",
    label: "Major Systems",
  },
  {
    number: 100,
    suffix: "%",
    label: "Dedication",
  },
];

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const numberRef = useRef(null);

  useEffect(() => {
    const element = numberRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(value * easeOut));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [started, value]);

  return (
    <span ref={numberRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="section-container relative z-10">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4">
            Portfolio Highlights
          </p>

          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl light:text-navy">
            Building <span className="text-accent">Real Solutions</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-paper/60 light:text-navy/60">
            A growing journey focused on learning, building, and creating
            practical digital experiences.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-line
                bg-white/[0.03]
                p-6
                text-center
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-accent/40
                hover:bg-accent/[0.04]
                hover:shadow-xl
                hover:shadow-accent/10
                sm:p-8
              "
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Number */}
              <div className="relative">
                <div className="font-display text-4xl font-bold tracking-tight text-accent sm:text-5xl">
                  <AnimatedNumber
                    value={stat.number}
                    suffix={stat.suffix}
                  />
                </div>
                {/* Label */}
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-paper/55 light:text-navy/55 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}