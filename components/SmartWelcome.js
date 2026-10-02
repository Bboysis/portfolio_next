"use client";

import { useEffect, useRef, useState } from "react";

export default function SmartWelcome() {
  const [visible, setVisible] = useState(false);
  const [greeting, setGreeting] = useState("Welcome");

  const showTimerRef = useRef(null);
  const hideTimerRef = useRef(null);

  useEffect(() => {
    // If the user manually closed it before,
    // don't show it again during this browser session.
    const dismissed = sessionStorage.getItem("welcome-dismissed");

    if (dismissed === "true") {
      return;
    }

    // Determine greeting
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("Good morning");
    } else if (hour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }

    // Show after 1.2 seconds
    showTimerRef.current = setTimeout(() => {
      setVisible(true);

      // Automatically hide 3 seconds AFTER appearing
      hideTimerRef.current = setTimeout(() => {
        setVisible(false);
      }, 3000);
    }, 1200);

    return () => {
      clearTimeout(showTimerRef.current);
      clearTimeout(hideTimerRef.current);
    };
  }, []);

  const closeWelcome = () => {
    setVisible(false);

    // Manual X click means don't show again
    // during this browser session.
    sessionStorage.setItem("welcome-dismissed", "true");

    clearTimeout(showTimerRef.current);
    clearTimeout(hideTimerRef.current);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-5 z-[100] w-[calc(100%-40px)] max-w-sm animate-fade-up rounded-2xl border border-slate-line bg-navy/90 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl light:bg-white/90">
      {/* Glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative">

        {/* Close Button */}
        <button
          onClick={closeWelcome}
          aria-label="Close welcome message"
          className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg text-paper/50 transition hover:bg-white/10 hover:text-accent light:text-navy/50 light:hover:bg-navy/5"
        >
          ✕
        </button>

        {/* Status */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
            Portfolio Online
          </span>
        </div>

        {/* Greeting */}
        <h3 className="mt-4 pr-8 font-display text-xl font-bold text-paper light:text-navy">
          {greeting} 👋
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-paper/60 light:text-navy/60">
          Welcome to my digital portfolio. Explore my projects,
          skills, and the solutions I&apos;m building.
        </p>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-3">
          <a
            href="#projects"
            onClick={closeWelcome}
            className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-navy transition-all hover:scale-105 hover:bg-accent-bright"
          >
            Explore Projects
          </a>

          <button
            onClick={closeWelcome}
            className="text-xs font-medium text-paper/50 transition hover:text-accent light:text-navy/50"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}