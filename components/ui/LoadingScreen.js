"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let fadeTimer;
    let hideTimer;

    const finishLoading = () => {
      // Give the browser a moment to finish painting the page
      fadeTimer = setTimeout(() => {
        setLoading(false);

        // Allow the fade animation to finish
        hideTimer = setTimeout(() => {
          setVisible(false);
        }, 800);
      }, 3000);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
    }

    // Safety fallback
    const safetyTimer = setTimeout(() => {
      finishLoading();
    }, 6000);

    return () => {
      window.removeEventListener("load", finishLoading);

      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      clearTimeout(safetyTimer);
    };
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
        bg-[#06182b]
        transition-all
        duration-800
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          loading
            ? "opacity-100 scale-100"
            : "pointer-events-none opacity-0 scale-[1.015]"
        }
      `}
    >
      {/* Soft background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-accent/5
          blur-[100px]
        "
      />

      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          text-center
        "
      >
        {/* Logo */}
        <div
          className="
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-[24px]
            border
            border-accent/30
            bg-accent/[0.035]
            shadow-[0_0_50px_rgba(78,205,196,0.08)]
            animate-loader-logo
          "
        >
          <span
            className="
              font-display
              text-4xl
              font-bold
              text-accent
            "
          >
            S
          </span>
        </div>

        {/* Brand */}
        <h1
          className="
            mt-8
            font-display
            text-3xl
            font-bold
            tracking-tight
            text-paper
          "
        >
          Sisay<span className="text-accent">.dev</span>
        </h1>

        {/* Status */}
        <p
          className="
            mt-5
            text-[12px]
            font-medium
            uppercase
            tracking-[0.35em]
            text-paper/40
            animate-loader-text
          "
        >
          Initializing
        </p>

        {/* Progress */}
        <div
          className="
            mt-10
            h-[3px]
            w-[270px]
            overflow-hidden
            rounded-full
            bg-white/[0.08]
          "
        >
          <div
            className="
              h-full
              w-[45%]
              rounded-full
              bg-accent
              shadow-[0_0_14px_rgba(78,205,196,0.45)]
              animate-loader-progress
            "
          />
        </div>

        {/* Loading dots */}
        <div className="mt-7 flex items-center gap-2">
          <span className="loader-dot loader-dot-1" />
          <span className="loader-dot loader-dot-2" />
          <span className="loader-dot loader-dot-3" />
        </div>
      </div>
    </div>
  );
}