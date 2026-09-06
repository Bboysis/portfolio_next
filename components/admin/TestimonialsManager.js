"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function TestimonialsManager() {
  const supabase = createClient();

  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadTestimonials() {
    setLoading(true);

    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    setTestimonials(data || []);
    setLoading(false);
  }

  useEffect(() => {
    loadTestimonials();
  }, []);

  async function toggleApproved(testimonial) {
    const { error } = await supabase
      .from("testimonials")
      .update({
        approved: !testimonial.approved,
      })
      .eq("id", testimonial.id);

    if (error) {
      alert(error.message);
      return;
    }

    loadTestimonials();
  }

  async function deleteTestimonial(id) {
    const confirmed = window.confirm(
      "Delete this testimonial?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("testimonials")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    loadTestimonials();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <p className="text-cyan-400 text-sm">
            ADMIN
          </p>

          <h1 className="text-4xl font-bold">
            Testimonials
          </h1>

          <p className="text-slate-400 mt-2">
            Manage opinions from your visitors.
          </p>
        </div>

        {loading ? (
          <p className="text-slate-400">
            Loading testimonials...
          </p>
        ) : testimonials.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <p className="text-slate-400">
              No testimonials yet.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">

                  <div>
                    <h2 className="text-xl font-semibold">
                      {testimonial.name}
                    </h2>

                    <p className="text-cyan-400 text-sm mt-1">
                      {testimonial.role}
                      {testimonial.company
                        ? ` • ${testimonial.company}`
                        : ""}
                    </p>

                    <div className="mt-3">
                      {"⭐".repeat(testimonial.rating || 5)}
                    </div>

                    <p className="text-slate-300 mt-4 leading-relaxed">
                      "{testimonial.message}"
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">

                    <button
                      onClick={() =>
                        toggleApproved(testimonial)
                      }
                      className={`px-4 py-2 rounded-xl text-sm font-medium ${
                        testimonial.approved
                          ? "bg-green-500/10 text-green-400 border border-green-500/30"
                          : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {testimonial.approved
                        ? "Published"
                        : "Hidden"}
                    </button>
                    <button
                      onClick={() =>
                        deleteTestimonial(testimonial.id)
                      }
                      className="px-4 py-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/30"
                    >
                      Delete
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}