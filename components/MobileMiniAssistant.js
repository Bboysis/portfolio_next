"use client";

import { useState } from "react";

const options = [
  {
    label: "Projects",
    icon: "💼",
    target: "projects",
  },
  {
    label: "Skills",
    icon: "🛠",
    target: "skills",
  },
  {
    label: "About",
    icon: "👤",
    target: "about",
  },
  {
    label: "Contact",
    icon: "✉",
    target: "contact",
  },
];

export default function MobileMiniAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  const goToSection = (target) => {
    const element = document.getElementById(target);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <>
      {/* Assistant window */}
      <div
        className={`
          fixed
          bottom-28
          right-4
          z-[85]
          w-[calc(100vw-2rem)]
          max-w-[330px]
          overflow-hidden
          rounded-3xl
          border
          border-slate-line
          bg-[#0b1220]/95
          shadow-2xl
          shadow-black/30
          backdrop-blur-2xl
          transition-all
          duration-300
          light:bg-white/95
           
          ${
            isOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-5 opacity-0"
          }
        `}
      >
        {/* Header */}
        <div className="border-b border-slate-line px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-accent">
                Portfolio Guide
              </p>

              <h3 className="mt-1 font-display text-lg font-bold text-paper light:text-navy">
                👋 Hi there!
              </h3>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-slate-line
                text-paper/60
                transition
                hover:border-accent
                hover:text-accent
                light:text-navy/60
              "
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-sm leading-6 text-paper/60 light:text-navy/60">
            What would you like to explore?
          </p>

          <div className="mt-5 grid gap-3">
            {options.map((option) => (
              <button
                key={option.target}
                onClick={() =>
                  goToSection(option.target)
                }
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-slate-line
                  bg-white/[0.03]
                  px-4
                  py-3.5
                  text-left
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:border-accent/50
                  hover:bg-accent/[0.06]
                  light:bg-slate-50
                "
              >
                <span className="text-xl">
                  {option.icon}
                </span>

                <span className="flex-1 text-sm font-medium text-paper light:text-navy">
                  {option.label}
                </span>

                <span className="text-accent">
                  →
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open portfolio assistant"
        className="
          fixed
          bottom-24
          right-4
          z-[90]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-accent/40
          bg-accent
          text-2xl
          shadow-xl
          shadow-accent/20
          transition-all
          duration-300
          hover:scale-110
          active:scale-95
          
        "
      >
        {isOpen ? "✕" : "💬"}
      </button>
    </>
  );
}