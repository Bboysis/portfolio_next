"use client";

import { useEffect, useRef } from "react";

export default function DynamicBackground() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!glowRef.current) return;

      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      glowRef.current.style.transform = `
        translate(
          calc(${x * 40}px - 20px),
          calc(${y * 40}px - 20px)
        )
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Main moving glow */}
      <div
        ref={glowRef}
        className="
          absolute
          left-[10%]
          top-[15%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-accent/[0.07]
          blur-[140px]
          transition-transform
          duration-700
          ease-out
          light:bg-accent/[0.10]
        "
      />

      {/* Top right glow */}
      <div
        className="
          absolute
          right-[-120px]
          top-[20%]
          h-[380px]
          w-[380px]
          animate-pulse
          rounded-full
          bg-accent/[0.05]
          blur-[150px]
          light:bg-accent/[0.08]
        "
      />

      {/* Bottom glow */}
      <div
        className="
          absolute
          bottom-[-150px]
          left-[35%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-accent/[0.04]
          blur-[170px]
          light:bg-accent/[0.07]
        "
      />

      {/* Floating particles */}
      <div className="dynamic-particles">
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className={`dynamic-particle particle-${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}