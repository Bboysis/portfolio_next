import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Sisay Abebayew`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="section-container py-24">
      <Link href="/projects" className="text-sm font-semibold text-accent hover:text-accent-bright">
        ← All Projects
      </Link>

      <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="eyebrow mb-3">{project.category}</p>
          <h1 className="font-display text-3xl font-bold text-paper sm:text-4xl light:text-navy">
            {project.title}
          </h1>
          <p className="mt-2 text-paper/50 light:text-navy/50">{project.role}</p>
        </div>

        <div className="flex gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-accent-bright"
            >
              Live Site ↗
            </a>
          ) : (
            <span className="rounded-full border border-slate-line px-5 py-2.5 text-sm text-paper/40 light:text-navy/40">
              Live link coming soon
            </span>
          )}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-line px-5 py-2.5 text-sm font-semibold text-paper transition hover:border-accent hover:text-accent light:text-navy"
            >
              GitHub ↗
            </a>
          ) : null}
        </div>
      </div>

      <div className="mt-10 aspect-video overflow-hidden rounded-2xl border border-slate-line bg-slate-panel">
        {/* Replace with real screenshot at project.image path once captured */}
        <div className="flex h-full w-full items-center justify-center text-sm text-paper/30">
          Project screenshot placeholder — add image at {project.image}
        </div>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_260px]">
        <div>
          <h2 className="font-display text-xl font-semibold text-paper light:text-navy">
            Overview
          </h2>
          <p className="mt-4 leading-relaxed text-paper/75 light:text-navy/75">
            {project.problem}
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
            Tech Stack
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-slate-line px-3 py-1.5 text-sm text-paper/75 light:text-navy/75"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
