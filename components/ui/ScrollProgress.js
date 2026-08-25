"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress((scrollTop / documentHeight) * 100);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[9999] h-[2px] w-full pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-accent shadow-[0_0_10px_rgba(62,207,192,0.8)] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}