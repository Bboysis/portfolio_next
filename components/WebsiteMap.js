"use client";

import Link from "next/link";
import { useState } from "react";

const nodes = [
  {
    id: "about",
    label: "About",
    description: "Who I am",
    href: "/about",
    position: "top",
  },
  {
    id: "projects",
    label: "Projects",
    description: "What I build",
    href: "/#projects",
    position: "right",
  },
  {
    id: "experience",
    label: "Experience",
    description: "My journey",
    href: "/experience",
    position: "bottom-right",
  },
  {
    id: "terminal",
    label: "Terminal",
    description: "Developer mode",
    href: "/terminal",
    position: "bottom",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    description: "What people say",
    href: "/testimonials",
    position: "bottom-left",
  },
  {
    id: "resume",
    label: "Resume",
    description: "My credentials",
    href: "/resume",
    position: "left",
  },
  {
    id: "contact",
    label: "Contact",
    description: "Let's connect",
    href: "/contact",
    position: "top-left",
  },
];

const mobileNodes = [
  {
    id: "about",
    label: "About",
    description: "Who I am",
    href: "/about",
  },
  {
    id: "projects",
    label: "Projects",
    description: "What I build",
    href: "/#projects",
  },
  {
    id: "experience",
    label: "Experience",
    description: "My journey",
    href: "/experience",
  },
  {
    id: "terminal",
    label: "Terminal",
    description: "Developer mode",
    href: "/terminal",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    description: "What people say",
    href: "/testimonials",
  },
  {
    id: "resume",
    label: "Resume",
    description: "My credentials",
    href: "/resume",
  },
  {
    id: "contact",
    label: "Contact",
    description: "Let's connect",
    href: "/contact",
  },
];

function Node({
  node,
  active,
  onHover,
  onLeave,
}) {
  return (
    <Link
      href={node.href}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={onLeave}
      className={`
        group absolute z-20
        flex w-32
        -translate-x-1/2
        -translate-y-1/2
        flex-col items-center
        transition-all duration-500
        ${active ? "scale-110" : "scale-100"}
      `}
    >
      {/* Node */}
      <div
        className={`
          relative flex h-16 w-16
          items-center justify-center
          rounded-2xl
          border
          backdrop-blur-xl
          transition-all duration-500
          ${
            active
              ? "border-accent bg-accent/15 shadow-[0_0_35px_rgba(78,205,196,0.22)]"
              : "border-slate-line bg-navy/80 group-hover:border-accent/50 group-hover:bg-accent/10"
          }
        `}
      >
        {/* Inner glow */}
        <span
          className={`
            absolute inset-2 rounded-xl
            transition-all duration-500
            ${
              active
                ? "bg-accent/10"
                : "bg-white/[0.02] group-hover:bg-accent/5"
            }
          `}
        />

        {/* Center */}
        <span
          className={`
            relative h-2.5 w-2.5 rounded-full
            transition-all duration-500
            ${
              active
                ? "bg-accent shadow-[0_0_14px_rgba(78,205,196,0.9)]"
                : "bg-paper/30 group-hover:bg-accent"
            }
          `}
        />
      </div>

      {/* Label */}
      <span
        className={`
          mt-3 text-center
          font-display text-xs font-semibold
          transition-colors duration-300
          ${
            active
              ? "text-accent"
              : "text-paper/70 group-hover:text-accent"
          }
          light:text-navy/70
        `}
      >
        {node.label}
      </span>

      {/* Description */}
      <span
        className="
          mt-1 text-center
          text-[10px]
          text-paper/35
          light:text-navy/40
        "
      >
        {node.description}
      </span>
    </Link>
  );
}

export default function WebsiteMap() {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section
      id="website-map"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.05] blur-[180px]" />

      <div className="section-container relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">
            Website Architecture
          </p>

          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl light:text-navy">
            Explore My
            <span className="text-accent">
              {" "}
              Digital Space
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-paper/60 sm:text-lg light:text-navy/60">
            Navigate through my portfolio using the interactive
            website map.
          </p>
        </div>

        {/* Desktop map */}
        <div className="relative mx-auto mt-16 hidden h-[620px] max-w-5xl md:block">
          {/* Grid */}
          <div
            className="
              absolute inset-0
              rounded-[3rem]
              border border-slate-line/60
              bg-white/[0.01]
              [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
              [background-size:60px_60px]
              light:bg-navy/[0.015]
            "
          />

          {/* SVG connections */}
          <svg
            viewBox="0 0 1000 620"
            className="pointer-events-none absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            {/* Main connections */}
            <line
              x1="500"
              y1="310"
              x2="500"
              y2="90"
              className={`
                stroke-slate-line
                transition-all duration-500
                ${
                  activeNode === "about"
                    ? "stroke-accent"
                    : ""
                }
              `}
              strokeWidth="1.5"
            />

            <line
              x1="500"
              y1="310"
              x2="790"
              y2="210"
              className={`
                stroke-slate-line
                transition-all duration-500
                ${
                  activeNode === "projects"
                    ? "stroke-accent"
                    : ""
                }
              `}
              strokeWidth="1.5"
            />

            <line
              x1="500"
              y1="310"
              x2="760"
              y2="470"
              className={`
                stroke-slate-line
                transition-all duration-500
                ${
                  activeNode === "experience"
                    ? "stroke-accent"
                    : ""
                }
              `}
              strokeWidth="1.5"
            />

            <line
              x1="500"
              y1="310"
              x2="500"
              y2="530"
              className={`
                stroke-slate-line
                transition-all duration-500
                ${
                  activeNode === "terminal"
                    ? "stroke-accent"
                    : ""
                }
              `}
              strokeWidth="1.5"
            />

            <line
              x1="500"
              y1="310"
              x2="240"
              y2="470"
              className={`
                stroke-slate-line
                transition-all duration-500
                ${
                  activeNode === "testimonials"
                    ? "stroke-accent"
                    : ""
                }
              `}
              strokeWidth="1.5"
            />

            <line
              x1="500"
              y1="310"
              x2="210"
              y2="210"
              className={`
                stroke-slate-line
                transition-all duration-500
                ${
                  activeNode === "resume"
                    ? "stroke-accent"
                    : ""
                }
              `}
              strokeWidth="1.5"
            />

            <line
              x1="500"
              y1="310"
              x2="310"
              y2="90"
              className={`
                stroke-slate-line
                transition-all duration-500
                ${
                  activeNode === "contact"
                    ? "stroke-accent"
                    : ""
                }
              `}
              strokeWidth="1.5"
            />

            {/* Animated orbit */}
            <circle
              cx="500"
              cy="310"
              r="180"
              fill="none"
              stroke="currentColor"
              className="text-accent/10"
              strokeWidth="1"
              strokeDasharray="4 12"
            />
          </svg>

          {/* Center */}
          <div
            className="
              absolute left-1/2 top-1/2
              z-30
              flex h-32 w-32
              -translate-x-1/2
              -translate-y-1/2
              items-center justify-center
              rounded-[2rem]
              border border-accent/40
              bg-[#071015]/95
              shadow-[0_0_60px_rgba(78,205,196,0.12)]
              backdrop-blur-xl
            "
          >
            <div className="absolute inset-2 rounded-[1.5rem] border border-accent/10" />

            <div className="relative text-center">
              <span className="block font-display text-xl font-bold tracking-tight text-paper">
                SISAY
              </span>

              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.25em] text-accent">
                Developer
              </span>
            </div>
          </div>

          {/* Nodes */}
          <div className="absolute left-1/2 top-[90px]">
            <Node
              node={nodes[0]}
              active={activeNode === "about"}
              onHover={setActiveNode}
              onLeave={() => setActiveNode(null)}
            />
          </div>

          <div className="absolute left-[79%] top-[34%]">
            <Node
              node={nodes[1]}
              active={activeNode === "projects"}
              onHover={setActiveNode}
              onLeave={() => setActiveNode(null)}
            />
          </div>

          <div className="absolute left-[76%] top-[76%]">
            <Node
              node={nodes[2]}
              active={activeNode === "experience"}
              onHover={setActiveNode}
              onLeave={() => setActiveNode(null)}
            />
          </div>

          <div className="absolute left-1/2 top-[85%]">
            <Node
              node={nodes[3]}
              active={activeNode === "terminal"}
              onHover={setActiveNode}
              onLeave={() => setActiveNode(null)}
            />
          </div>

          <div className="absolute left-[24%] top-[76%]">
            <Node
              node={nodes[4]}
              active={activeNode === "testimonials"}
              onHover={setActiveNode}
              onLeave={() => setActiveNode(null)}
            />
          </div>

          <div className="absolute left-[21%] top-[34%]">
            <Node
              node={nodes[5]}
              active={activeNode === "resume"}
              onHover={setActiveNode}
              onLeave={() => setActiveNode(null)}
            />
          </div>

          <div className="absolute left-[31%] top-[14%]">
            <Node
              node={nodes[6]}
              active={activeNode === "contact"}
              onHover={setActiveNode}
              onLeave={() => setActiveNode(null)}
            />
          </div>
        </div>

        {/* Mobile map */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:hidden">
          {/* Center */}
          <div
            className="
              col-span-2
              flex
              min-h-28
              items-center
              justify-center
              rounded-3xl
              border
              border-accent/30
              bg-accent/[0.04]
              shadow-[0_0_40px_rgba(78,205,196,0.08)]
            "
          >
            <div className="text-center">
              <div className="font-display text-xl font-bold text-paper light:text-navy">
                SISAY
              </div>

              <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-accent">
                Developer
              </div>
            </div>
          </div>

          {mobileNodes.map((node) => (
            <Link
              key={node.id}
              href={node.href}
              className="
                group
                rounded-2xl
                border
                border-slate-line
                bg-navy/50
                p-4
                transition-all
                duration-300
                hover:border-accent/40
                hover:bg-accent/[0.05]
              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-xl
                    border border-slate-line
                    bg-white/[0.02]
                    transition-all
                    group-hover:border-accent/40
                    group-hover:bg-accent/10
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-accent/50 transition-all group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(78,205,196,0.8)]" />
                </span>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-paper transition-colors group-hover:text-accent light:text-navy">
                    {node.label}
                  </p>

                  <p className="mt-0.5 truncate text-[10px] text-paper/35 light:text-navy/40">
                    {node.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer hint */}
        <div className="mt-8 text-center text-xs text-paper/35 light:text-navy/40">
          <span className="hidden md:inline">
            Hover over a node to explore the architecture
          </span>

          <span className="md:hidden">
            Tap a section to explore
          </span>
        </div>
      </div>
    </section>
  );
}