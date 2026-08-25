"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const commands = [
  {
    name: "Home",
    description: "Go to the homepage",
    shortcut: "H",
    action: "home",
  },
  {
    name: "About",
    description: "Learn more about me",
    shortcut: "A",
    action: "about",
  },
  {
    name: "Projects",
    description: "Explore my projects",
    shortcut: "P",
    action: "projects",
  },
  {
    name: "Skills",
    description: "View my technical skills",
    shortcut: "S",
    action: "skills",
  },
  {
    name: "Experience",
    description: "View my experience",
    shortcut: "E",
    action: "experience",
  },
  {
    name: "Resume",
    description: "Open my CV / resume",
    shortcut: "R",
    action: "resume",
  },
  {
    name: "Contact",
    description: "Get in touch with me",
    shortcut: "C",
    action: "contact",
  },
];

export default function CommandPalette() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(0);

  const filteredCommands = commands.filter((command) =>
    command.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleKeyboard(event) {
      // Ctrl + K / Cmd + K
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        setOpen((value) => !value);
      }

      // Escape
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      setSearch("");
      setSelected(0);
    }
  }, [open]);

  useEffect(() => {
    function handleNavigation(event) {
      if (!open) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();

        setSelected((current) =>
          Math.min(current + 1, filteredCommands.length - 1)
        );
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();

        setSelected((current) =>
          Math.max(current - 1, 0)
        );
      }

      if (event.key === "Enter") {
        event.preventDefault();

        const command = filteredCommands[selected];

        if (command) {
          executeCommand(command);
        }
      }
    }

    window.addEventListener("keydown", handleNavigation);

    return () => {
      window.removeEventListener("keydown", handleNavigation);
    };
  }, [open, filteredCommands, selected]);

  function executeCommand(command) {
    setOpen(false);

    if (command.action === "home") {
      router.push("/");
      return;
    }

    if (command.action === "about") {
      router.push("/about");
      return;
    }

    if (command.action === "projects") {
      router.push("/projects");
      return;
    }

    if (command.action === "resume") {
      router.push("/resume");
      return;
    }

    if (command.action === "contact") {
      router.push("/contact");
      return;
    }

    if (command.action === "skills") {
      router.push("/#skills");
      return;
    }

    if (command.action === "experience") {
      router.push("/#experience");
      return;
    }
  }

  return (
    <>
      {/* Command Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="
          fixed
          bottom-6
          left-6
          z-40
          hidden
          items-center
          gap-2
          rounded-full
          border
          border-slate-line
          bg-navy/80
          px-4
          py-2.5
          text-xs
          text-paper/60
          shadow-xl
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-accent/40
          hover:text-accent
          md:flex
        "
      >
        <span className="font-mono text-accent">
          ⌘
        </span>

        <span>
          Command
        </span>

        <span className="rounded border border-slate-line px-1.5 py-0.5 font-mono text-[10px]">
          K
        </span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="
            fixed
            inset-0
            z-[99990]
            flex
            items-start
            justify-center
            bg-black/60
            px-4
            pt-[15vh]
            backdrop-blur-md
          "
          onMouseDown={() => setOpen(false)}
        >
          {/* Palette */}
          <div
            className="
              w-full
              max-w-xl
              overflow-hidden
              rounded-2xl
              border
              border-slate-line
              bg-navy
              shadow-2xl
              shadow-black/50
              animate-[commandIn_180ms_ease-out]
            "
            onMouseDown={(event) => event.stopPropagation()}
          >
            {/* Search */}
            <div className="flex items-center border-b border-slate-line px-5">
              <span className="mr-3 text-accent">
                ⌕
              </span>

              <input
                autoFocus
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setSelected(0);
                }}
                placeholder="Search commands..."
                className="
                  h-16
                  w-full
                  bg-transparent
                  text-sm
                  text-paper
                  outline-none
                  placeholder:text-paper/30
                "
              />

              <kbd
                className="
                  rounded-md
                  border
                  border-slate-line
                  px-2
                  py-1
                  font-mono
                  text-[10px]
                  text-paper/40
                "
              >
                ESC
              </kbd>
            </div>

            {/* Commands */}
            <div className="max-h-[55vh] overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="px-4 py-10 text-center">
                  <p className="text-sm text-paper/40">
                    No command found.
                  </p>
                </div>
              ) : (
                filteredCommands.map((command, index) => (
                  <button
                    key={command.name}
                    onMouseEnter={() => setSelected(index)}
                    onClick={() => executeCommand(command)}
                    className={`
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3.5
                      text-left
                      transition-all
                      duration-200
                      ${
                        selected === index
                          ? "bg-accent/10 text-accent"
                          : "text-paper/70 hover:bg-white/[0.03]"
                      }
                   ` }
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-lg
                          border
                          text-xs
                          ${
                            selected === index
                              ? "border-accent/30 bg-accent/10 text-accent"
                              : "border-slate-line text-paper/30"
                          }
                        `}
                      >
                        {command.shortcut}
                      </span>

                      <div>
                        <p className="text-sm font-medium">
                          {command.name}
                        </p>

                        <p className="mt-0.5 text-xs text-paper/30">
                          {command.description}
                        </p>
                      </div>
                    </div>

                    {selected === index && (
                      <span className="text-xs text-accent">
                        Enter ↵
                      </span>
                    )}
                  </button>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-slate-line px-5 py-3 text-[10px] text-paper/30">
              <span>
                Navigate with ↑ ↓
              </span>

              <span>
                Enter to select
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}