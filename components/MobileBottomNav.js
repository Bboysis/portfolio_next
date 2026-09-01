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
    id: "projects",
    label: "Projects",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2"
        />
        <path d="M7 8h10" />
        <path d="M7 12h6" />
        <path d="M7 16h4" />
      </svg>
    ),
  },
  {
    id: "skills",
    label: "Skills",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          d="M12 2v4"
          strokeLinecap="round"
        />
        <path
          d="M12 18v4"
          strokeLinecap="round"
        />
        <path
          d="m4.93 4.93 2.83 2.83"
          strokeLinecap="round"
        />
        <path
          d="m16.24 16.24 2.83 2.83"
          strokeLinecap="round"
        />
        <path
          d="M2 12h4"
          strokeLinecap="round"
        />
        <path
          d="M18 12h4"
          strokeLinecap="round"
        />
        <path
          d="m4.93 19.07 2.83-2.83"
          strokeLinecap="round"
        />
        <path
          d="m16.24 7.76 2.83-2.83"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="12"
          r="3"
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
    id: "contact",
    label: "Contact",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
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
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      let currentSection = "home";

      navigation.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

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
      window.removeEventListener("scroll", handleScroll);
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
    <>
      {/* Mobile bottom spacing */}
      <div className="" />
      {/* Bottom Navigation */}
      <nav
        aria-label="Mobile navigation"
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-[90]
          border-t
          border-slate-line
          bg-[#07111f]/95
          px-2
          pb-[calc(env(safe-area-inset-bottom)+0.5rem)]
          pt-2
          shadow-[0_-10px_40px_rgba(0,0,0,0.18)]
          backdrop-blur-2xl
           
          light:bg-white/95
        "
      >
        <div className="mx-auto flex max-w-lg items-end justify-around">
          {navigation.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                className="
                  relative
                  flex
                  min-w-[58px]
                  flex-col
                  items-center
                  justify-center
                  gap-1
                  rounded-xl
                  px-2
                  py-1.5
                  transition-all
                  duration-300
                "
              >
                {/* Active glow */}
                {isActive && (
                  <span
                    className="
                      absolute
                      inset-0
                      rounded-xl
                      bg-accent/10
                    "
                  />
                )}

                {/* Active indicator */}
                <span
                  className={`
                    absolute
                    -top-2
                    h-1
                    w-7
                    rounded-full
                    bg-accent
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                    }
                 ` }
                />

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
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "scale-110 text-accent"
                        : "text-paper/45 light:text-navy/45"
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
                    text-[10px]
                    font-medium
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "text-accent"
                        : "text-paper/45 light:text-navy/45"
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
    </>
  );
}