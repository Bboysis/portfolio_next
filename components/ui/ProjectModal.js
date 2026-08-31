 "use client";

import Image from "next/image";
import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasImage = project.image && project.image.trim() !== "";

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        p-4
        sm:p-6
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Background overlay */}
      <button
        onClick={onClose}
        aria-label="Close project preview"
        className="
          absolute
          inset-0
          h-full
          w-full
          cursor-default
          bg-navy/80
          backdrop-blur-md
        "
      />

      {/* Modal */}
      <div
        className="
          relative
          z-10
          max-h-[90vh]
          w-full
          max-w-4xl
          overflow-y-auto
          rounded-3xl
          border
          border-slate-line
          bg-[#08111f]
          shadow-2xl
          shadow-black/50
          light:bg-white
        "
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="
            absolute
            right-4
            top-4
            z-30
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-navy/80
            text-xl
            text-paper
            backdrop-blur-md
            transition-all
            hover:scale-110
            hover:border-accent
            hover:text-accent
            light:border-navy/10
            light:bg-white/90
            light:text-navy
          "
        >
          ✕
        </button>

        {/* Project visual */}
        {hasImage ? (
          <div className="relative aspect-[16/8] w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-transparent to-transparent light:from-white" />
          </div>
        ) : (
          <div
            className="
              relative
              flex
              h-64
              items-center
              justify-center
              overflow-hidden
              border-b
              border-slate-line
              bg-gradient-to-br
              from-accent/[0.12]
              via-transparent
              to-white/[0.03]
              sm:h-72
            "
          >
            {/* Decorative grid */}
            <div
              className="
                absolute
                inset-0
                opacity-20
                [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
                [background-size:32px_32px]
              "
            />

            <div className="absolute h-40 w-40 rounded-full bg-accent/20 blur-3xl" />

            <div
              className="
                relative
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-3xl
                border
                border-accent/30
                bg-navy/60
                text-3xl
                text-accent
                backdrop-blur-xl
                light:bg-white/70
              "
            >
              💻
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs tracking-widest text-accent">
              PROJECT {project.number}
            </span>

            <span
              className="
                rounded-full
                border
                border-accent/20
                bg-accent/10
                px-3
                py-1
                text-[11px]
                font-medium
                text-accent
              "
            >
              {project.status}
            </span>
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent/70">
            {project.category}
          </p>

          <h2
            id="project-modal-title"
            className="
              mt-3
              font-display
              text-3xl
              font-bold
              text-paper
              sm:text-4xl
              light:text-navy
            "
          >
            {project.title}
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-paper/65 light:text-navy/65">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold text-paper light:text-navy">
              Technologies Used
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-accent/20
                    bg-accent/10
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-accent
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            {project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-accent
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-navy
                  transition-all
                  hover:-translate-y-1
                  hover:bg-accent-bright
                  hover:shadow-lg
                  hover:shadow-accent/20
                "
              >
                View Live Project ↗
              </a>
            )}

            {project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-line
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-paper
                  transition-all
                  hover:border-accent
                  hover:text-accent
                  light:text-navy
                "
              >
                View Source Code
              </a>
            )}
            {project.liveUrl === "#" &&
              project.githubUrl === "#" && (
                <span className="py-3 text-sm text-paper/40 light:text-navy/40">
                  Project links will be available soon.
                </span>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}