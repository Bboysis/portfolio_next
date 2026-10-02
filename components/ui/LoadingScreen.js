"use client";

import { useEffect, useState } from "react";

const STATUS_STAGES = [
  "INITIALIZING",
  "LOADING EXPERIENCE",
  "BUILDING INTERFACE",
  "CALIBRATING DETAILS",
  "READY",
];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let progressTimer;
    let stageTimer;
    let exitTimer;
    let hideTimer;

    const startTime = Date.now();
    const minimumDuration = 6500;

    // Smooth artificial progress.
    // It approaches 94% and waits for the page.
    progressTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;

      let nextProgress;

      if (elapsed < 1800) {
        nextProgress = (elapsed / 1800) * 28;
      } else if (elapsed < 3800) {
        nextProgress =
          28 + ((elapsed - 1800) / 2000) * 25;
      } else if (elapsed < 5200) {
        nextProgress =
          53 + ((elapsed - 3800) / 1400) * 23;
      } else {
        nextProgress = Math.min(
          94,
          76 + ((elapsed - 5200) / 1400) * 18
        );
      }

      setProgress(nextProgress);
    }, 40);

    // Change system status.
    stageTimer = setInterval(() => {
      setStage((current) => {
        if (current >= STATUS_STAGES.length - 2) {
          return current;
        }

        return current + 1;
      });
    }, 1450);

    const finish = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(
        0,
        minimumDuration - elapsed
      );

      setTimeout(() => {
        clearInterval(progressTimer);
        clearInterval(stageTimer);

        setProgress(100);
        setStage(STATUS_STAGES.length - 1);

        exitTimer = setTimeout(() => {
          setExiting(true);

          hideTimer = setTimeout(() => {
            setVisible(false);
          }, 900);
        }, 550);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, {
        once: true,
      });
    }

    // Never trap the visitor indefinitely.
    const safetyTimer = setTimeout(() => {
      finish();
    }, 9000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(stageTimer);

      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
      clearTimeout(safetyTimer);

      window.removeEventListener("load", finish);
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
        overflow-hidden
        bg-[#031426]
        text-paper
        transition-all
        duration-900
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          exiting
            ? "pointer-events-none scale-[1.035] opacity-0"
            : "scale-100 opacity-100"
        }
      `}
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(78,205,196,0.09),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(78,205,196,0.04),transparent_25%)]" />

      {/* Moving technical grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.055]
          animate-loader-grid
          bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
          bg-[size:55px_55px]
        "
      />

      {/* Large ambient glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-accent/[0.035]
          blur-[110px]
          animate-loader-breathe
        "
      />

      {/* =====================================================
          TOP INFORMATION
      ====================================================== */}

      <div
        className="
          absolute
          left-6
          right-6
          top-6
          flex
          items-center
          justify-between
          text-[9px]
          uppercase
          tracking-[0.28em]
          text-paper/30
          sm:left-10
          sm:right-10
          sm:top-10
        "
      >
        <span>SISAY.DEV</span>

        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-loader-status-dot" />
          SYSTEM ONLINE
        </span>
      </div>

      {/* =====================================================
          MAIN EXPERIENCE
      ====================================================== */}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[310px] w-[310px] sm:h-[370px] sm:w-[370px]">

          {/* Outer orbit */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              border
              border-accent/[0.08]
              animate-loader-orbit-slow
            "
          />

          {/* Second orbit */}
          <div
            className="
              absolute
              inset-[22px]
              rounded-full
              border
              border-accent/[0.12]
              border-dashed
              animate-loader-orbit-reverse
            "
          />

          {/* Third orbit */}
          <div
            className="
              absolute
              inset-[52px]
              rounded-full
              border
              border-accent/[0.18]
              animate-loader-orbit-fast
            "
          />

          {/* Orbital particles */}
          <span className="loader-orbit-particle loader-particle-one" />
          <span className="loader-orbit-particle loader-particle-two" />
          <span className="loader-orbit-particle loader-particle-three" />

          {/* Corner markers */}
          <span className="absolute left-[18%] top-[18%] h-1 w-1 rounded-full bg-accent/50" />
          <span className="absolute right-[18%] top-[27%] h-1 w-1 rounded-full bg-accent/30" />
          <span className="absolute bottom-[20%] left-[25%] h-1 w-1 rounded-full bg-accent/40" />
          <span className="absolute bottom-[25%] right-[20%] h-1 w-1 rounded-full bg-accent/60" />

          {/* =================================================
              PROGRESS RING
          ================================================== */}

          <svg
            className="
              absolute
              inset-0
              h-full
              w-full
              -rotate-90
            "
            viewBox="0 0 370 370"
          >
            <circle
              cx="185"
              cy="185"
              r="154"
              fill="none"
              stroke="rgba(78,205,196,0.06)"
              strokeWidth="1"
            />

            <circle
              cx="185"
              cy="185"
              r="154"
              fill="none"
              stroke="#4ECDC4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 154}
              strokeDashoffset={
                2 *
                Math.PI *
                154 *
                (1 - progress / 100)
              }
              className="
                transition-[stroke-dashoffset]
                duration-100
                ease-linear
              "
              style={{
                filter:
                  "drop-shadow(0 0 8px rgba(78,205,196,0.35))",
              }}
            />
          </svg>

          {/* =================================================
              CENTER CORE
          ================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-28
              w-28
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-[28px]
              border
              border-accent/25
              bg-[#071c30]/90
              shadow-[0_0_70px_rgba(78,205,196,0.08)]
              backdrop-blur-xl
              animate-loader-core
            "
          >
            <div
              className="
                absolute
                inset-2
                rounded-[22px]
                border
                border-accent/10
              "
            />

            <span
              className="
                relative
                z-10
                font-display
                text-5xl
                font-bold
                text-accent
                animate-loader-letter
              "
            >
              S
            </span>
          </div>

          {/* Coordinates */}
          <div
            className="
              absolute
              left-1/2
              top-[calc(50%+85px)]
              -translate-x-1/2
              whitespace-nowrap
              text-[8px]
              tracking-[0.35em]
              text-paper/20
            "
          >
            09°02′N · 38°44′E
          </div>
        </div>
      </div>

      {/* =====================================================
          BRAND + STATUS
      ====================================================== */}

      <div
        className="
          absolute
          bottom-[11%]
          left-1/2
          w-full
          -translate-x-1/2
          px-6
          text-center
        "
      >
        <h1
          className="
            font-display
            text-3xl
            font-bold
            tracking-tight
            sm:text-4xl
          "
        >
          Sisay<span className="text-accent">.dev</span>
        </h1>

        <div
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span
            className="
              h-px
              w-8
              bg-accent/30
            "
          />

          <p
            className="
              min-w-[180px]
              text-[10px]
              font-medium
              uppercase
              tracking-[0.32em]
              text-paper/40
            "
          >
            {STATUS_STAGES[stage]}
          </p>

          <span
            className="
              h-px
              w-8
              bg-accent/30
            "
          />
        </div>

        {/* Percentage */}
        <div className="mt-5">
          <span
            className="
              font-display
              text-sm
              tabular-nums
              text-accent/70
            "
          >
            {Math.round(progress)
              .toString()
              .padStart(2, "0")}
            %
          </span>
        </div>

        {/* Small system label */}
        <p
          className="
            mt-3
            text-[8px]
            uppercase
            tracking-[0.3em]
            text-paper/20
          "
        >
          Digital Portfolio · Experience Engine
        </p>
      </div>
    </div>
  );
}