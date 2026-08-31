"use client";

import { useEffect, useState } from "react";

const commands = {
  help: [
    "Available commands:",
    "about      → Learn about me",
    "skills     → View technical skills",
    "projects   → Explore my projects",
    "contact    → Get in touch",
    "clear      → Clear terminal",
  ],

  about: [
    "Sisay Abebayew",
    "Full-Stack Developer",
    "",
    "Building practical and user-friendly",
    "digital solutions.",
  ],

  skills: [
    "Frontend:",
    "HTML • CSS • JavaScript • React • Next.js",
    "",
    "Backend:",
    "PHP • MySQL",
    "",
    "Tools:",
    "Git • GitHub • VS Code",
  ],

  projects: [
    "Featured projects:",
    "01 → Pharmacy Management System",
    "02 → School Management System",
    "03 → Hotel Management System",
    "04 → E-Commerce Website",
  ],

  contact: [
    "Email: sisayabebayew@gmail.com",
    "Location: Ethiopia",
    "",
    "Status: Open to opportunities 🟢",
  ],
};

const quickCommands = ["help", "about", "skills", "projects", "contact"];

export default function DeveloperTerminal() {
  const [history, setHistory] = useState([
    "Welcome to Sisay's Developer Terminal.",
    "Type 'help' or choose a command below.",
    "",
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const runCommand = (command) => {
    const cleanCommand = command.trim().toLowerCase();

    if (!cleanCommand || isTyping) return;

    setInput("");

    if (cleanCommand === "clear") {
      setHistory([]);
      return;
    }

    const output = commands[cleanCommand];

    setHistory((previous) => [
      ...previous,
      `$ ${cleanCommand}`,
      ...(output || [`Command not found: ${cleanCommand}`, "Try typing: help"]),
      "",
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    runCommand(input);
  };

  useEffect(() => {
    setIsTyping(false);
  }, [history]);

  return (
    <section
      id="terminal"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[160px]" />

      <div className="section-container relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">
            Interactive Terminal
          </p>

          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl light:text-navy">
            Explore My
            <span className="text-accent"> Developer World</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-paper/60 sm:text-lg light:text-navy/60">
            Try a command and explore my skills, projects, and development
            journey.
          </p>
        </div>

        {/* Terminal */}
        <div className="mx-auto mt-14 max-w-4xl">
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
            {/* Terminal header */}
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
              {/* Window buttons */}
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              {/* Terminal title */}
              <div className="flex items-center gap-2 text-xs text-paper/50 light:text-navy/50">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />

                <span>
                  sisay@portfolio:~
                </span>
              </div>

              <div className="w-10" />
            </div>

            {/* Terminal body */}
            <div className="min-h-[380px] p-5 font-mono text-sm sm:p-7">
              {/* History */}
              <div className="space-y-1">
                {history.map((line, index) => (
                  <p
                    key={`${line}-${index}`}
                    className={
                      line.startsWith("$")
                        ? "text-accent"
                        : "text-paper/70 light:text-navy/70"
                    }
                  >
                    {line || "\u00A0"}
                  </p>
                ))}
              </div>

              {/* Input */}
              <form
                onSubmit={handleSubmit}
                className="mt-4 flex items-center gap-2"
              >
                <span className="text-accent">
                  $
                </span>

                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="type a command..."
                  className="
                    w-full
                    bg-transparent
                    text-paper
                    outline-none
                    placeholder:text-paper/25
                    light:text-navy
                    light:placeholder:text-navy/30
                  "
                  autoComplete="off"
                  spellCheck="false"
                />

                <button
                  type="submit"
                  className="
                    rounded-lg
                    border
                    border-accent/30
                    px-3
                    py-1.5
                    text-xs
                    font-semibold
                    text-accent
                    transition
                    hover:bg-accent/10
                  "
                >
                  Run
                </button>
              </form>
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
              <p className="mb-3 text-xs text-paper/40 light:text-navy/40">
                QUICK COMMANDS
              </p>

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
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-paper/40 light:text-navy/40">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>

            Terminal online — ready for interaction
          </div>
        </div>
      </div>
    </section>
  );
}
              