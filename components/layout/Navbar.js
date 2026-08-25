 "use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Home,
  User,
  FolderOpen,
  BriefcaseBusiness,
  FileText,
  Mail,
  Moon,
  Sun,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "About",
    href: "/about",
    icon: User,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: FolderOpen,
  },
  {
    name: "Experience",
    href: "/experience",
    icon: BriefcaseBusiness,
  },
  {
    name: "Resume",
    href: "/resume",
    icon: FileText,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // -----------------------------------------
  // LOAD SAVED THEME
  // -----------------------------------------
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.add("light");
    } else {
      setDarkMode(true);
      document.documentElement.classList.remove("light");
    }
  }, []);

  // -----------------------------------------
  // TOGGLE THEME
  // -----------------------------------------
  const toggleTheme = () => {
    const newDarkMode = !darkMode;

    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  // -----------------------------------------
  // CLOSE MENU
  // -----------------------------------------
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          TOP NAVIGATION BAR
      ===================================================== */}
      <header className="fixed left-0 right-0 top-0 z-[100]">
        <div className="mx-auto flex max-w-7xl items-center justify-end px-4 py-4 sm:px-6 lg:px-8">

          {/* -----------------------------------------
              RIGHT CONTROLS
          ----------------------------------------- */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* HIRE ME */}
            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-accent/30
                bg-slate-panel/80
                px-3.5
                py-2
                text-xs
                font-semibold
                text-accent
                shadow-lg
                shadow-black/10
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-accent
                hover:bg-accent/10
                hover:shadow-accent/10
                sm:px-4
                sm:py-2.5
                sm:text-sm
              "
            >
              {/* Green status dot */}
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>

              <span>Hire Me</span>

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            {/* THEME BUTTON */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-slate-line
                bg-slate-panel/80
                text-paper
                shadow-lg
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-accent
                hover:text-accent
                sm:h-10
                sm:w-10
              "
            >
              {darkMode ? (
                <Sun size={17} />
              ) : (
                <Moon size={17} />
              )}
            </button>

            {/* MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-slate-line
                bg-slate-panel/80
                text-paper
                shadow-lg
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-accent
                hover:text-accent
                sm:h-10
                sm:w-10
              "
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          BACKDROP
      ===================================================== */}
      <div
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          z-[110]
          bg-black/50
          backdrop-blur-[3px]
          transition-all
          duration-300
          ${
            menuOpen
              ? "visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }
        `}
      />

      {/* =====================================================
          NAVIGATION PANEL
      ===================================================== */}
      <aside
        className={`
          fixed
          right-3
          top-3
          z-[120]

          /* SMALLER WIDTH */
          w-[280px]
          max-w-[calc(100vw-24px)]

          /* SMALLER HEIGHT */
          max-h-[calc(100vh-24px)]

          overflow-y-auto

          rounded-2xl
          border
          border-slate-line

          bg-slate-panel/95

          p-4
          shadow-2xl
          shadow-black/40

          backdrop-blur-2xl

          transition-all
          duration-300
          ease-out

          sm:right-5
          sm:top-5
          sm:w-[300px]
          sm:p-5

          ${
            menuOpen
              ? "translate-x-0 scale-100 opacity-100"
              : "pointer-events-none translate-x-8 scale-95 opacity-0"
          }
       `}
      >

        {/* =================================================
            PANEL HEADER
        ================================================= */}
        <div className="mb-4 flex items-center justify-between">

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent/70">
              Navigation
            </p>

            <h2 className="mt-1 text-sm font-semibold text-paper light:text-navy">
              Explore my portfolio
            </h2>
          </div>

          {/* CLOSE */}
          <button
            onClick={closeMenu}
            aria-label="Close navigation"
            className="
            flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-slate-line
              text-paper/60
              transition-all
              duration-300
              hover:border-accent
              hover:text-accent
            "
          >
            <X size={16} />
          </button>
        </div>

        {/* =================================================
            NAVIGATION LINKS
        ================================================= */}
        <nav className="space-y-1.5">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-2.5
                  py-2.5

                  text-sm
                  font-medium
                  text-paper/75
                  light:text-navy/75

                  transition-all
                  duration-200

                  hover:bg-accent/10
                  hover:text-accent
                "
              >
                {/* ICON */}
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center

                    rounded-lg
                    border
                    border-slate-line

                    bg-slate-panel

                    text-paper/60
                    light:text-navy/60

                    transition-all
                    duration-200

                    group-hover:border-accent/40
                    group-hover:bg-accent/10
                    group-hover:text-accent
                  "
                >
                  <Icon size={17} />
                </span>

                {/* NAME */}
                <span className="flex-1">
                  {item.name}
                </span>

                {/* ACTIVE DOT / HOVER DOT */}
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-accent
                    opacity-0
                    transition-opacity
                    duration-200
                    group-hover:opacity-100
                  "
                />
              </Link>
            );
          })}
        </nav>

        {/* =================================================
            HIRE ME CTA INSIDE MENU
        ================================================= */}
        <div className="mt-4 border-t border-slate-line pt-4">

          <Link
            href="/contact"
            onClick={closeMenu}
            className="
              group
              flex
              items-center
              justify-between
              rounded-xl
              border
              border-accent/25
              bg-accent/5
              px-3
              py-2.5
              transition-all
              duration-300
              hover:border-accent/50
              hover:bg-accent/10
            "
          >
            <div className="flex items-center gap-2.5">

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-accent/10
                  text-accent
                "
              >
                <BriefcaseBusiness size={15} />
              </span>

              <div>
                <p className="text-xs font-semibold text-paper light:text-navy">
                  Let's work together
                </p>
                <p className="text-[10px] text-paper/50 light:text-navy/50">
                  Start a project
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={15}
              className="
                text-accent
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>

        {/* =================================================
            FOOTER
        ================================================= */}
        <div className="mt-3 text-center">
          <p className="text-[9px] uppercase tracking-[0.2em] text-paper/25 light:text-navy/25">
            Sisay Abebayew
          </p>
        </div>
      </aside>
    </>
  );
}