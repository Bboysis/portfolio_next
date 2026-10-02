"use client";

import { useEffect, useState } from "react";

const navigation = [
  {
    id: "home",
    label: "Home",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-full w-full"
      >
        <path
          d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    id: "map",
    label: "About",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-full w-full"
      >
        <circle
          cx="12"
          cy="8"
          r="4"
        />

        <path
          d="M4 21c.7-4 3.3-6 8-6s7.3 2 8 6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-full w-full"
      >
        <path
          d="M7 7h10"
          strokeLinecap="round"
        />

        <path
          d="M7 12h10"
          strokeLinecap="round"
        />

        <path
          d="M7 17h6"
          strokeLinecap="round"
        />

        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="4"
        />
      </svg>
    ),
  },

  {
    id: "resume",
    label: "Resume",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-full w-full"
      >
        <path
          d="M6 3h9l4 4v14H6V3Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M14 3v5h5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M9 12h6"
          strokeLinecap="round"
        />

        <path
          d="M9 16h6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    id: "contact",
    label: "Contact",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-full w-full"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
        />

        <path
          d="m3 7 9 6 9-6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.35;

      let currentSection = "home";

      navigation.forEach((item) => {
        if (item.id === "home") {
          return;
        }

        const section = document.getElementById(item.id);

        if (!section) {
          return;
        }

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < bottom
        ) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      aria-label="Mobile navigation"
      className="
        fixed
        bottom-4
        left-1/2
        z-[90]
        w-[calc(100%-2rem)]
        max-w-[440px]
        -translate-x-1/2
        rounded-[30px]
        border
        border-slate-line
        bg-[#07111f]/95
        px-2
        py-2
        shadow-[0_15px_50px_rgba(0,0,0,0.35)]
        backdrop-blur-2xl
        light:bg-white/95
      "
      style={{
        paddingBottom:
          "calc(env(safe-area-inset-bottom) + 0.5rem)",
      }}
    >
      <div className="flex items-center justify-between">
        {navigation.map((item) => {
          const isActive =
            activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() =>
                scrollToSection(item.id)
              }
              aria-label={item.label}
              aria-current={
                isActive ? "page" : undefined
              }
              className={`
                relative
                flex
                h-[68px]
                min-w-[62px]
                flex-1
                flex-col
                items-center
                justify-center
                gap-1
                rounded-[24px]
                px-1
                transition-all
                duration-300
                active:scale-95
                ${
                  isActive
                    ? "bg-accent/15 text-accent shadow-[0_0_25px_rgba(78,205,196,0.10)]"
                    : "text-paper/45 hover:text-paper/70 light:text-navy/45 light:hover:text-navy/70"
                }
              `}
            >
              {/* Icon */}
              <span
                className={`
                  relative
                  z-10
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  transition-transform
                  duration-300
                  ${
                    isActive
                      ? "scale-110"
                      : "scale-100"
                  }
                `}
              >
                {item.icon}
              </span>

              {/* Label */}
              <span
                className={`
                  relative
                  z-10
                  whitespace-nowrap
                  text-[10px]
                  font-medium
                  transition-colors
                  duration-300
                  ${
                    isActive
                      ? "font-semibold text-accent"
                      : ""
                  }
                `}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}