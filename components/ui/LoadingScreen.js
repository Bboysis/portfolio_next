"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Give the browser a moment to finish rendering
      setTimeout(() => {
        setLoading(false);

        // Allow the exit animation to finish
        setTimeout(() => {
          setVisible(false);
        }, 700);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }

    // Safety fallback
    const fallback = setTimeout(() => {
      setLoading(false);

      setTimeout(() => {
        setVisible(false);
      }, 700);
    }, 4000);

    return () => clearTimeout(fallback);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        bg-navy
        transition-all
        duration-700
        ${
          loading
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }
      `}
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-accent/10
          blur-[100px]
        "
      />

      <div className="relative flex flex-col items-center">

        {/* Logo */}
        <div
          className="
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-2xl
            border
            border-accent/30
            bg-white/[0.03]
            shadow-2xl
            shadow-accent/10
            backdrop-blur-xl
          "
        >
          <span
            className="
              font-display
              text-3xl
              font-bold
              text-accent
            "
          >
            S
          </span>
        </div>

        {/* Name */}
        <h1
          className="
            mt-6
            font-display
            text-xl
            font-bold
            tracking-wide
            text-paper
          "
        >
          Sisay<span className="text-accent">.dev</span>
        </h1>

        {/* Loading text */}
        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-paper/40">
          Initializing
        </p>

        {/* Loading bar */}
        <div className="mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
          <div
            className="
              h-full
              w-1/2
              rounded-full
              bg-accent
              shadow-lg
              shadow-accent/50
              animate-[loading_1.4s_ease-in-out_infinite]
            "
          />
        </div>

        {/* Loading dots */}
        <div className="mt-5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent/60 [animation-delay:200ms]" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent/30 [animation-delay:400ms]" />
        </div>

      </div>
    </div>
  );
}