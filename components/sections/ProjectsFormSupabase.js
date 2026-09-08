"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ProjectsFromSupabase() {
  const supabase = createClient();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error(
        "Failed to load projects:",
        error
      );

      setLoading(false);
      return;
    }

    setProjects(data || []);
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="py-20 text-center text-slate-400">
        Loading projects...
      </div>
    );
  }

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Selected Work
          </p>

          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Featured Projects
          </h2>
        </div>

        {projects.length === 0 ? (
          <p className="text-slate-400">
            No projects available.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >

                {project.image_url && (
                  <div className="overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="p-6">

                  {project.category && (
                    <p className="mb-3 text-sm text-cyan-400">
                      {project.category}
                    </p>
                  )}

                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/60">
                    {project.description}
                  </p>

                  {project.technologies?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">

                      {project.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                          >
                            {technology}
                          </span>
                        )
                      )}

                    </div>
                  )}

                  <div className="mt-6 flex gap-3">

                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                      >
                        Live Demo
                      </a>
                    )}

                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/10 px-5 py-2 text-sm text-white transition hover:bg-white/10"
                      >
                        GitHub
                      </a>
                    )}

                  </div>

                </div>

              </article>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}