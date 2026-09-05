import Link from "next/link";
import { projects } from "@/data/projects";
import DeveloperDashboard from "@/components/DeveloperDashboard";
import MobileScrollProgress from "@/components/MobileScrollProgress";
 export const metadata = {
  title: "Projects — Sisay Abebayew",
  description: "A complete collection of full-stack systems and websites I've built.",
};
 export default function ProjectsPage() {
  return (
    <div className="section-container py-24">
      <p className="eyebrow mb-3">Full Collection</p>
      <h1 className="font-display text-3xl font-bold text-paper sm:text-4xl light:text-navy">
        All Projects
      </h1>
      <p className="mt-4 max-w-xl text-paper/60 light:text-navy/60">
        {projects.length} systems and websites spanning full-stack platforms,
        business sites, and client work.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="card group p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/60"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {project.category}
              </p>
              {project.featured && (
                <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent">
                  Featured
                </span>
              )}
            </div>
             <h3 className="mt-3 font-display text-lg font-semibold text-paper light:text-navy">
              {project.title}
            </h3>
            <p className="mt-3 text-sm text-paper/60 light:text-navy/60">
              {project.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-line px-2.5 py-1 text-[11px] text-paper/60 light:text-navy/60"
                >
                  {tech}
                </span>
              ))}
             </div>
             
          </Link>
          
        ))}
      </div>
      <DeveloperDashboard/>
      <MobileScrollProgress/>
    </div>
  );
}
