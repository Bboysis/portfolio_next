"use client";

import Link from "next/link";

export default function HireMeButton() {
  return (
    <Link
      href="/contact"
      className="
        group
        fixed
        bottom-6
        left-6
        z-50
        flex
        items-center
        gap-3
        rounded-full
        border
        border-accent/40
        bg-accent
        px-5
        py-3
        text-sm
        font-bold
        text-navy
        shadow-lg
        shadow-accent/20
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:bg-accent-bright
        hover:shadow-xl
        hover:shadow-accent/30
      "
      aria-label="Hire me"
    >
      {/* Briefcase icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </svg>

      <span>Hire Me</span>
    </Link>
  );
}