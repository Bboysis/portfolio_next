"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const commandList = [
  "help",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
  "social",
  "system",
  "date",
  "whoami",
  "pwd",
  "ls",
  "clear",
];

const commands = {
  help: {
    title: "Available commands",
    lines: [
      "help        → Show available commands",
      "about       → Learn about me",
      "skills      → View technical skills",
      "projects    → Explore my projects",
      "experience  → View my experience",
      "contact     → Get in touch",
      "social      → Open my social profiles",
      "system      → View system information",
      "date        → Show current date and time",
      "whoami      → Show current user",
      "pwd         → Show current directory",
      "ls          → List available sections",
      "clear       → Clear terminal",
    ],
  },

  about: {
    title: "About Sisay",
    lines: [
      "Sisay Abebayew",
      "Full-Stack Developer",
      "",
      "Building practical, modern and user-friendly",
      "digital solutions.",
      "",
      "Currently focused on:",
      "• Web application development",
      "• Modern UI/UX",
      "• Database-driven systems",
      "• Full-stack development",
    ],
  },

  skills: {
    title: "Technical Skills",
    lines: [
      "Frontend",
      "────────",
      "HTML • CSS • JavaScript",
      "React • Next.js",
      "Tailwind CSS",
      "",
      "Backend",
      "───────",
      "PHP • MySQL",
      "PostgreSQL • Supabase",
      "",
      "Tools",
      "─────",
      "Git • GitHub • VS Code",
    ],
  },

  projects: {
    title: "Featured Projects",
    lines: [
      "01 → Pharmacy Management System",
      "02 → School Management System",
      "03 → Hotel Management System",
      "04 → E-Commerce Website",
      "05 → Personal Gym Trainer Website",
      "06 → QR Menu System",
      "",
      "Use the Projects page to explore them in detail.",
    ],
  },

  experience: {
    title: "Experience",
    lines: [
      "Software Development",
      "────────────────────",
      "Building full-stack web applications",
      "and database-driven systems.",
      "",
      "Current focus:",
      "• Next.js",
      "• JavaScript",
      "• PHP",
      "• PostgreSQL",
      "• Supabase",
      "• Modern UI/UX",
    ],
  },

  contact: {
    title: "Contact",
    lines: [
      "Email:",
      "sisayabebayew@gmail.com",
      "",
      "Location:",
      "Addis Ababa, Ethiopia",
      "",
      "Availability:",
      "Open to freelance & full-time opportunities 🟢",
      "",
      "Response time:",
      "Usually within 24 hours.",
    ],
  },

  social: {
    title: "Social Profiles",
    lines: [
      "GitHub    → github.com/bboysis",
      "LinkedIn  → linkedin.com/in/sisayabebeyew",
      "Instagram → instagram.com/bboysis",
      "Telegram  → t.me/bboysis",
    ],
  },

  system: {
    title: "System Information",
    lines: [
      "Portfolio OS",
      "────────────",
      "Name       : Sisay Portfolio",
      "Runtime    : Next.js",
      "Framework  : React",
      "Language   : JavaScript",
      "Styling    : Tailwind CSS",
      "Database   : Supabase",
      "Deployment : Vercel",
      "Status     : ONLINE",
    ],
  },

  whoami: {
    title: "Current User",
    lines: [
      "visitor@sisay-portfolio",
      "",
      "You are currently exploring",
      "Sisay's developer portfolio.",
    ],
  },

  pwd: {
    title: "Current Directory",
    lines: [
      "/home/sisay/portfolio",
    ],
  },

  ls: {
    title: "Directory Contents",
    lines: [
      "about/",
      "skills/",
      "projects/",
      "experience/",
      "contact/",
      "social/",
      "resume/",
      "terminal/",
    ],
  },
};

const quickCommands = [
  "help",
  "about",
  "skills",
  "projects",
  "contact",
];

function getDateOutput() {
  const now = new Date();

  return [
    "Current date and time",
    "─────────────────────",
    now.toLocaleString(),
    "",
    "Timezone: East Africa Time (UTC+3)",
  ];
}

function normalizeCommand(value) {
  return value.trim().toLowerCase();
}

function getSuggestion(command) {
  if (!command) return null;

  const match = commandList.find(
    (item) =>
      item.startsWith(command) ||
      command.startsWith(item)
  );

  return match || null;
}

export default function DeveloperTerminal() {
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "Initializing Sisay Developer Terminal...",
    },
    {
      type: "system",
      text: "System ready.",
    },
    {
      type: "system",
      text: "Type 'help' to see available commands.",
    },
    {
      type: "blank",
      text: "",
    },
  ]);

  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isBooting, setIsBooting] = useState(true);
  const [commandCount, setCommandCount] = useState(0);

  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  const availableCommands = useMemo(
    () => commandList,
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    terminalBodyRef.current?.scrollTo({
      top: terminalBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const focusTerminal = () => {
    inputRef.current?.focus();
  };

  const addHistory = (items) => {
    setHistory((previous) => [
      ...previous,
      ...items,
    ]);
  };

  const runCommand = (rawCommand) => {
    const command = normalizeCommand(rawCommand);

    if (!command) return;

    setInput("");
    setHistoryIndex(-1);

    if (command === "clear") {
      setHistory([]);
      setCommandCount((count) => count + 1);
      focusTerminal();
      return;
    }

    if (!commandHistory.includes(command)) {
      setCommandHistory((previous) => [
        ...previous,
        command,
      ]);
    }

    setCommandCount((count) => count + 1);

    if (command === "date") {
      addHistory([
        {
          type: "command",
          text: `$ ${command}`,
        },
        ...getDateOutput().map((text) => ({
          type: "output",
          text,
        })),
        {
          type: "blank",
          text: "",
        },
      ]);

      focusTerminal();
      return;
    }

    const result = commands[command];

    if (result) {
      addHistory([
        {
          type: "command",
          text: `$ ${command}`,
        },
        {
          type: "title",
          text: result.title,
        },
        ...result.lines.map((text) => ({
          type: "output",
          text,
        })),
        {
          type: "blank",
          text: "",
        },
      ]);
    } else {
      const suggestion = getSuggestion(command);

      addHistory([
        {
          type: "command",
          text: `$ ${command}`,
        },
        {
          type: "error",
          text: `Command not found: ${command}`,
        },
        {
          type: "output",
          text: suggestion
            ? `Did you mean: ${suggestion}?`
            : "Type 'help' to see available commands.",
        },
        {
          type: "blank",
          text: "",
        },
      ]);
    }

    focusTerminal();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    runCommand(input);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (commandHistory.length === 0) return;

      const nextIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(historyIndex - 1, 0);

      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (commandHistory.length === 0) return;

      if (historyIndex === -1) return;

      const nextIndex = historyIndex + 1;

      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    }

    if (event.key === "Tab") {
      event.preventDefault();

      const current = normalizeCommand(input);

      if (!current) return;

      const matches = availableCommands.filter((command) =>
        command.startsWith(current)
      );

      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }

    if (event.ctrlKey && event.key.toLowerCase() === "l") {
      event.preventDefault();
      setHistory([]);
    }

    if (event.ctrlKey && event.key.toLowerCase() === "k") {
      event.preventDefault();
      focusTerminal();
    }
  };

  return (
    <section
      id="terminal"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[170px]" />

      <div className="section-container relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">
            Interactive Terminal
          </p>

          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl light:text-navy">
            Explore My
            <span className="text-accent">
              {" "}
              Developer World
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-paper/60 sm:text-lg light:text-navy/60">
            Explore my skills, projects, experience and
            developer profile through an interactive terminal.
          </p>
        </div>

        {/* Terminal */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              border-slate-line
              bg-[#071015]/95
              shadow-2xl
              shadow-accent/10
              backdrop-blur-xl
              light:bg-white/95
            "
          >
            {/* Header */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-slate-line
                px-5
                py-4
                sm:px-6
              "
            >
              {/* Traffic lights */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>

              {/* Terminal title */}
              <div className="flex items-center gap-2 text-xs text-paper/50 light:text-navy/50">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-accent" />
                </span>

                <span className="font-mono">
                  sisay@portfolio:~
                </span>
              </div>

              {/* Command count */}
              <div className="font-mono text-[10px] text-paper/30 light:text-navy/30">
                {commandCount} cmd
              </div>
            </div>

            {/* Terminal body */}
            <div
              ref={terminalBodyRef}
              onClick={focusTerminal}
              className="
                relative
                h-[420px]
                overflow-y-auto
                p-5
                font-mono
                text-sm
                sm:p-7
              "
            >
              {/* Scanline effect */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.025]
                  [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)]
                  [background-size:100%_4px]
                "
              />

              <div className="relative z-10 space-y-1">
                {history.map((item, index) => {
                  if (item.type === "blank") {
                    return (
                      <div
                        key={index}
                        className="h-2"
                      />
                    );
                  }

                  if (item.type === "command") {
                    return (
                      <p
                        key={index}
                        className="text-accent"
                      >
                        {item.text}
                      </p>
                    );
                  }

                  if (item.type === "title") {
                    return (
                      <p
                        key={index}
                        className="mt-2 font-semibold text-accent"
                      >
                        {item.text}
                      </p>
                    );
                  }

                  if (item.type === "error") {
                    return (
                      <p
                        key={index}
                        className="text-red-400"
                      >
                        {item.text}
                      </p>
                    );
                  }

                  return (
                    <p
                      key={index}
                      className="text-paper/70 light:text-navy/70"
                    >
                      {item.text || "\u00A0"}
                    </p>
                  );
                })}

                {/* Input */}
                {!isBooting && (
                  <form
                    onSubmit={handleSubmit}
                    className="mt-3 flex items-center gap-2"
                  >
                    <span className="text-accent">
                      $
                    </span>

                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(event) => {
                        setInput(event.target.value);
                        setHistoryIndex(-1);
                      }}
                      onKeyDown={handleKeyDown}
                      autoComplete="off"
                      spellCheck="false"
                      autoFocus
                      placeholder="type a command..."
                      className="
                        min-w-0
                        flex-1
                        bg-transparent
                        text-paper
                        outline-none
                        placeholder:text-paper/25
                        light:text-navy
                        light:placeholder:text-navy/30
                      "
                    />

                    <span className="hidden text-accent/60 sm:inline">
                      ▌
                    </span>
                  </form>
                )}
              </div>
            </div>

            {/* Quick commands */}
            <div
              className="
                border-t
                border-slate-line
                px-5
                py-4
                sm:px-6
              "
            >
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[10px] font-semibold tracking-[0.18em] text-paper/40 light:text-navy/40">
                  QUICK COMMANDS
                </p>

                <p className="hidden font-mono text-[10px] text-paper/30 sm:block light:text-navy/30">
                  ↑ ↓ history · TAB autocomplete · CTRL+L clear
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {quickCommands.map((command) => (
                  <button
                    key={command}
                    type="button"
                    onClick={() => runCommand(command)}
                    className="
                      rounded-full
                      border
                      border-slate-line
                      px-3
                      py-1.5
                      font-mono
                      text-xs
                      text-paper/70
                      transition-all
                      hover:border-accent/50
                      hover:bg-accent/10
                      hover:text-accent
                      light:text-navy/70
                    "
                  >
                    {command}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => runCommand("clear")}
                  className="
                    rounded-full
                    border
                    border-red-400/20
                    px-3
                    py-1.5
                    font-mono
                    text-xs
                    text-red-400/80
                    transition
                    hover:bg-red-400/10
                  "
                >
                  clear
                </button>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-paper/40 light:text-navy/40">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-accent" />
            </span>

            <span>
              Terminal online — ready for interaction
            </span>

            <span className="hidden sm:inline">•</span>

            <span className="hidden sm:inline">
              {availableCommands.length} commands available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}