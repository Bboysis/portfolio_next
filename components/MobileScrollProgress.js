"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function MobileScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] =
    useState("Home");

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage =
        scrollHeight > 0
          ? Math.round((scrollTop / scrollHeight) * 100)
          : 0;

      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    updateScrollProgress();

    window.addEventListener(
      "scroll",
      updateScrollProgress,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateScrollProgress
      );
    };
  }, []);

  useEffect(() => {
    const observers = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentSection(section.label);
            }
          });
        },
        {
          threshold: 0.35,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) =>
        observer.disconnect()
      );
    };
  }, []);

  return (
    <div
      className="
        fixed
        left-1/2
        top-4
        z-[70]
        w-[calc(100%-2rem)]
        max-w-sm
        -translate-x-1/2
       "
    >
      <div
        className="
          rounded-2xl
          border
          border-slate-line
          bg-[#0b1220]/80
          px-4
          py-3
          shadow-lg
          shadow-black/20
          backdrop-blur-xl
          light:bg-white/80
        "
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-paper/40 light:text-navy/40">
              Exploring
            </p>

            <p className="mt-1 text-sm font-semibold text-paper light:text-navy">
              {currentSection}
            </p>
          </div>

          <div className="text-right">
            <span className="text-lg font-bold text-accent">
              {progress}%
            </span>

            <p className="text-[10px] text-paper/40 light:text-navy/40">
              explored
            </p>
          </div>
        </div>

        {/* Progress line */}
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10 light:bg-navy/10">
          <div
            className="h-full rounded-full bg-accent transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}