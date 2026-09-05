"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LeaveTestimonial() {
  const [form, setForm] = useState({
    name: "",
    role: "",
    company: "",
    message: "",
    rating: 5,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("");

    if (!form.name.trim()) {
      setStatus("Please enter your name.");
      return;
    }

    if (!form.message.trim()) {
      setStatus("Please write your testimonial.");
      return;
    }

    if (form.message.trim().length < 10) {
      setStatus("Your testimonial should be at least 10 characters.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("testimonials")
      .insert([
        {
          name: form.name.trim(),
          role: form.role.trim() || null,
          company: form.company.trim() || null,
          message: form.message.trim(),
          rating: Number(form.rating),
          approved: true,
        },
      ]);

    if (error) {
      console.error("Testimonial submission error:", error);
      setStatus("Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    setForm({
      name: "",
      role: "",
      company: "",
      message: "",
      rating: 5,
    });

    setStatus(
      "Thank you! Your testimonial has been submitted and is waiting for approval."
    );

    setLoading(false);
  }

  return (
    <div className="mx-auto mt-16 max-w-3xl">
      <div
        className="
          rounded-3xl
          border
          border-slate-line
          bg-white/[0.03]
          p-7
          backdrop-blur-md
          sm:p-10
        "
      >
        <div className="text-center">
          <p className="eyebrow mb-4">Share Your Experience</p>

          <h3 className="font-display text-2xl font-bold text-paper sm:text-3xl light:text-navy">
            Leave a
            <span className="text-accent"> Testimonial</span>
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-paper/55 light:text-navy/55">
            If we have worked together, I would love to hear about your
            experience.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="testimonial-name"
              className="mb-2 block text-sm font-medium text-paper/80 light:text-navy/80"
            >
              Your Name *
            </label>

            <input
              id="testimonial-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="
                w-full
                rounded-2xl
                border
                border-slate-line
                bg-black/20
                px-4
                py-3
                text-sm
                text-paper
                outline-none
                transition
                placeholder:text-paper/30
                focus:border-accent
                focus:ring-1
                focus:ring-accent
                light:bg-navy/[0.03]
                light:text-navy
                light:placeholder:text-navy/30
              "
            />
          </div>

          {/* Role + Company */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="testimonial-role"
                className="mb-2 block text-sm font-medium text-paper/80 light:text-navy/80"
              >
                Your Role
              </label>
              <input
                id="testimonial-role"
                type="text"
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="e.g. Business Owner"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-line
                  bg-black/20
                  px-4
                  py-3
                  text-sm
                  text-paper
                  outline-none
                  transition
                  placeholder:text-paper/30
                  focus:border-accent
                  focus:ring-1
                  focus:ring-accent
                  light:bg-navy/[0.03]
                  light:text-navy
                  light:placeholder:text-navy/30
                "
              />
            </div>

            <div>
              <label
                htmlFor="testimonial-company"
                className="mb-2 block text-sm font-medium text-paper/80 light:text-navy/80"
              >
                Company
              </label>

              <input
                id="testimonial-company"
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="e.g. ABC Company"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-line
                  bg-black/20
                  px-4
                  py-3
                  text-sm
                  text-paper
                  outline-none
                  transition
                  placeholder:text-paper/30
                  focus:border-accent
                  focus:ring-1
                  focus:ring-accent
                  light:bg-navy/[0.03]
                  light:text-navy
                  light:placeholder:text-navy/30
                "
              />
            </div>
          </div>

          {/* Rating */}
          <div>
            <label
              htmlFor="testimonial-rating"
              className="mb-2 block text-sm font-medium text-paper/80 light:text-navy/80"
            >
              Rating
            </label>

            <select
              id="testimonial-rating"
              name="rating"
              value={form.rating}
              onChange={handleChange}
              className="
                w-full
                rounded-2xl
                border
                border-slate-line
                bg-black/20
                px-4
                py-3
                text-sm
                text-paper
                outline-none
                focus:border-accent
                focus:ring-1
                focus:ring-accent
                light:bg-navy/[0.03]
                light:text-navy
              "
            >
              <option value="5">★★★★★ — 5 Stars</option>
              <option value="4">★★★★☆ — 4 Stars</option>
              <option value="3">★★★☆☆ — 3 Stars</option>
              <option value="2">★★☆☆☆ — 2 Stars</option>
              <option value="1">★☆☆☆☆ — 1 Star</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="testimonial-message"
              className="mb-2 block text-sm font-medium text-paper/80 light:text-navy/80"
            >
              Your Testimonial *
            </label>

            <textarea
              id="testimonial-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your experience working with me..."
              rows={5}
              required
              className="
                w-full
                resize-none
                rounded-2xl
                border
                border-slate-line
                bg-black/20
                px-4
                py-3
                text-sm
                leading-6
                text-paper
                outline-none
                transition
                placeholder:text-paper/30
                focus:border-accent
                focus:ring-1
                focus:ring-accent
                light:bg-navy/[0.03]
                light:text-navy
                light:placeholder:text-navy/30
              "
            />
          </div>

          {/* Status */}
          {status && (
            <div
              className="
                rounded-2xl
                border
                border-accent/20
                bg-accent/10
                px-4
                py-3
                text-center
                text-sm
                text-accent
              "
            >
              {status}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              rounded-full
              bg-accent
              px-6
              py-3.5
              text-sm
              font-semibold
              text-navy
              transition-all
              hover:scale-[1.02]
              hover:bg-accent-bright
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {loading ? "Submitting..." : "Submit Testimonial"}
          </button>

          <p className="text-center text-xs text-paper/35 light:text-navy/40">
            Your testimonial will appear after it has been reviewed and
            approved.
          </p>
        </form>
      </div>
    </div>
  );
}