 "use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ProjectsPage() {
  const supabase = createClient();

  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    technologies: "",
    status: "Completed",
    live_url: "",
    github_url: "",
    image: null,
  });

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    setLoading(true);

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error(error);
      alert(error.message);
    } else {
      setProjects(data || []);
    }

    setLoading(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleImageChange(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    setForm((prev) => ({
      ...prev,
      image: file,
    }));
  }

  function resetForm() {
    setForm({
      title: "",
      category: "",
      description: "",
      technologies: "",
      status: "Completed",
      live_url: "",
      github_url: "",
      image: null,
    });

    setEditingId(null);
  }

  async function uploadImage(file) {
    if (!file) return null;

    const fileExtension =
      file.name.split(".").pop();

    const fileName = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}.${fileExtension}`;

    const filePath = `projects/${fileName}`;

    const { error } = await supabase.storage
      .from("projects")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      throw error;
    }

    const { data } = supabase.storage
      .from("projects")
      .getPublicUrl(filePath);

    return {
      url: data.publicUrl,
      path: filePath,
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Project title is required.");
      return;
    }

    if (!form.description.trim()) {
      alert("Project description is required.");
      return;
    }

    setSaving(true);

    try {
      let imageUrl = null;

      if (editingId) {
        const existingProject = projects.find(
          (project) => project.id === editingId
        );

        imageUrl = existingProject?.image_url || null;
      }

      if (form.image) {
        const uploaded = await uploadImage(form.image);

        imageUrl = uploaded.url;
      }

      const technologies = form.technologies
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

      const projectData = {
        title: form.title.trim(),
        category: form.category.trim() || null,
        description: form.description.trim(),
        technologies,
        status: form.status,
        live_url: form.live_url.trim() || null,
        github_url: form.github_url.trim() || null,
        image_url: imageUrl,
      };

      if (editingId) {
        const { error } = await supabase
          .from("projects")
          .update(projectData)
          .eq("id", editingId);

        if (error) throw error;

        alert("Project updated successfully.");
      } else {
        const { error } = await supabase
          .from("projects")
          .insert([projectData]);

        if (error) throw error;

        alert("Project added successfully.");
      }

      resetForm();

      await loadProjects();
    } catch (error) {
      console.error(error);
      alert(error.message);
    }

    setSaving(false);
  }

  function editProject(project) {
    setEditingId(project.id);
    setForm({
      title: project.title || "",
      category: project.category || "",
      description: project.description || "",
      technologies:
        project.technologies?.join(", ") || "",
      status: project.status || "Completed",
      live_url: project.live_url || "",
      github_url: project.github_url || "",
      image: null,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function deleteProject(project) {
    const confirmed = window.confirm(
      `Delete "${project.title}"?`
    );

    if (!confirmed) return;

    try {
      const { error } = await supabase
        .from("projects")
        .delete()
        .eq("id", project.id);

      if (error) throw error;

      alert("Project deleted.");

      await loadProjects();
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white">
            Projects
          </h1>

          <p className="mt-2 text-slate-400">
            Manage the projects displayed on your portfolio.
          </p>
        </div>

        {/* FORM */}

        <section className="mb-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>
              <h2 className="text-xl font-semibold text-white">
                {editingId
                  ? "Edit Project"
                  : "Add New Project"}
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                {editingId
                  ? "Update your project information."
                  : "Add a project to your portfolio."}
              </p>
            </div>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
              >
                Cancel
              </button>
            )}

          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-5 md:grid-cols-2"
          >

            {/* TITLE */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Project Title
              </label>

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Pharmacy Management System"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
                required
              />
            </div>

            {/* CATEGORY */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Category
              </label>

              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Web Application"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>

            {/* DESCRIPTION */}

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-slate-300">
                Description
              </label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={5}
                placeholder="Describe your project..."
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
                required
              />
            </div>

            {/* TECHNOLOGIES */}
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Technologies
              </label>

              <input
                name="technologies"
                value={form.technologies}
                onChange={handleChange}
                placeholder="Next.js, Supabase, Tailwind"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
              />

              <p className="mt-1 text-xs text-slate-500">
                Separate technologies with commas.
              </p>
            </div>

            {/* STATUS */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Status
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
              >
                <option value="Completed">
                  Completed
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Coming Soon">
                  Coming Soon
                </option>
              </select>
            </div>

            {/* LIVE URL */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Live Website URL
              </label>

              <input
                type="url"
                name="live_url"
                value={form.live_url}
                onChange={handleChange}
                placeholder="https://example.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>

            {/* GITHUB */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                GitHub URL
              </label>

              <input
                type="url"
                name="github_url"
                value={form.github_url}
                onChange={handleChange}
                placeholder="https://github.com/..."
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>

            {/* IMAGE */}

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-slate-300">
                Project Image
              </label>

              <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleImageChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-300"
              />

              <p className="mt-2 text-xs text-slate-500">
                PNG, JPG or WebP recommended.
              </p>
            </div>

            {/* BUTTON */}

            <div className="md:col-span-2">

              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving
                  ? "Saving..."
                  : editingId
                  ? "Update Project"
                  : "Add Project"}
              </button>

            </div>

          </form>
        </section>

        {/* PROJECT LIST */}

        <section>

          <h2 className="mb-5 text-xl font-semibold text-white">
            Your Projects
          </h2>
          {loading ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">
              Loading projects...
            </div>
          ) : projects.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-10 text-center">
              <p className="text-slate-400">
                No projects yet.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Add your first project above.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

              {projects.map((project) => (
                <article
                  key={project.id}
                  className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
                >

                  {project.image_url ? (
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="h-52 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-52 items-center justify-center bg-slate-800 text-slate-500">
                      No Image
                    </div>
                  )}

                  <div className="p-5">

                    <div className="mb-3 flex items-center justify-between gap-3">

                      <h3 className="font-semibold text-white">
                        {project.title}
                      </h3>

                      <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                        {project.status}
                      </span>

                    </div>

                    {project.category && (
                      <p className="mb-3 text-sm text-cyan-400">
                        {project.category}
                      </p>
                    )}

                    <p className="line-clamp-3 text-sm leading-6 text-slate-400">
                      {project.description}
                    </p>

                    {project.technologies?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">

                        {project.technologies.map(
                          (technology) => (
                            <span
                              key={technology}
                              className="rounded-lg bg-slate-800 px-2 py-1 text-xs text-slate-300"
                            >
                              {technology}
                            </span>
                          )
                        )}

                      </div>
                    )}

                    <div className="mt-5 flex gap-3">

                      <button
                        onClick={() =>
                          editProject(project)
                        }
                        className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteProject(project)
                        }
                        className="rounded-lg border border-red-500/30 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10"
                      >
                        Delete
                      </button>

                    </div>

                  </div>
                </article>
              ))}

            </div>
          )}

        </section>

      </div>
    </main>
  );
}