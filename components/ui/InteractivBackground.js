"use client";

import { useEffect, useState } from "react";

export default function InteractiveBackground() {
  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Main mouse-following glow */}
      <div
        className="
          absolute
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-accent/10
          blur-[120px]
          transition-all
          duration-700
          ease-out
          light:bg-accent/10
        "
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
      />

      {/* Static secondary glow */}
      <div
        className="
          absolute
          left-[10%]
          top-[20%]
          h-80
          w-80
          rounded-full
          bg-accent/5
          blur-[130px]
        "
      />

      {/* Bottom glow */}
      <div
        className="
          absolute
          bottom-[10%]
          right-[10%]
          h-96
          w-96
          rounded-full
          bg-accent/5
          blur-[150px]
        "
      />
    </div>
  );
}