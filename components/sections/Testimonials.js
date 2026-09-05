 "use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
 function QuoteIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 11H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-5a5 5 0 0 0-5-5" />
      <path d="M20 11h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-5a5 5 0 0 0-5-5" />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch approved testimonials
  useEffect(() => {
    async function fetchTestimonials() {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("approved", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading testimonials:", error);
        setTestimonials([]);
      } else {
        setTestimonials(data || []);
      }

      setLoading(false);
    }

    fetchTestimonials();
  }, []);

  // Keep active index valid when data changes
  useEffect(() => {
    if (
      testimonials.length > 0 &&
      activeIndex >= testimonials.length
    ) {
      setActiveIndex(0);
    }
  }, [testimonials, activeIndex]);

  // Auto slide
  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () => {
    if (testimonials.length === 0) return;

    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previousTestimonial = () => {
    if (testimonials.length === 0) return;

    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-accent/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/5 blur-[120px]" />

      <div className="section-container relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Client Feedback</p>

          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl light:text-navy">
            What People
            <span className="text-accent"> Say</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-paper/60 sm:text-lg light:text-navy/60">
            Feedback from people and clients I have worked with
            throughout my development journey.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="mx-auto mt-14 max-w-4xl text-center">
            <p className="text-sm text-paper/50 light:text-navy/50">
              Loading testimonials...
            </p>
          </div>
        )}
        {/* Empty state */}
        {!loading && testimonials.length === 0 && (
          <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-slate-line bg-white/[0.03] p-10 text-center backdrop-blur-md">
            <p className="text-paper/60 light:text-navy/60">
              No approved testimonials yet.
            </p>
          </div>
        )}

        {/* Testimonials */}
        {!loading && testimonials.length > 0 && (
          <>
            {/* Main testimonial slider */}
            <div className="mx-auto mt-14 max-w-4xl">
              <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-line
                  bg-white/[0.03]
                  p-7
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:border-accent/40
                  hover:shadow-2xl
                  hover:shadow-accent/10
                  sm:p-10
                  lg:p-14
                "
              >
                {/* Decorative number */}
                <div className="absolute right-6 top-5 font-mono text-sm tracking-widest text-accent/40">
                  0{activeIndex + 1} / 0{testimonials.length}
                </div>

                {/* Quote icon */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-accent/20
                    bg-accent/10
                    text-accent
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-3
                  "
                >
                  <QuoteIcon />
                </div>

                {/* Stars */}
                <div className="mt-7 flex gap-1 text-lg text-accent">
                  {Array.from({
                    length: testimonials[activeIndex]?.rating || 5,
                  }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>

                {/* Message */}
                <div key={activeIndex} className="animate-fade-up">
                  <p className="mt-6 text-lg leading-8 text-paper/75 sm:text-xl sm:leading-9 light:text-navy/75">
                    “{testimonials[activeIndex].message}”
                  </p>

                  {/* Client information */}
                  <div className="mt-10 flex items-center gap-4 border-t border-slate-line pt-6">
                    {/* Avatar */}
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-accent/30
                        bg-accent/10
                        font-display
                        font-bold
                        text-accent
                      "
                    >
                      {testimonials[
                        activeIndex
                      ].name.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <h3 className="font-display text-base font-semibold text-paper light:text-navy">
                        {testimonials[activeIndex].name}
                      </h3>
                      <p className="mt-1 text-xs text-accent">
                        {testimonials[activeIndex].role}
                        {testimonials[activeIndex].company
                          ? ` • ${testimonials[activeIndex].company}
                          `: ""}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-24
                    -right-24
                    h-56
                    w-56
                    rounded-full
                    bg-accent/10
                    blur-3xl
                  "
                />
              </div>

              {/* Controls */}
              {testimonials.length > 1 && (
                <>
                  <div className="mt-8 flex items-center justify-center gap-5">
                    {/* Previous */}
                    <button
                      onClick={previousTestimonial}
                      aria-label="Previous testimonial"
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-line
                        text-paper
                        transition-all
                        hover:border-accent
                        hover:bg-accent/10
                        hover:text-accent
                        light:text-navy
                      "
                    >
                      <ArrowLeft />
                    </button>

                    {/* Indicators */}
                    <div className="flex items-center gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          aria-label={`Go to testimonial ${index + 1}`}
                          className={`
                            h-2.5
                            rounded-full
                            transition-all
                            duration-300
                            ${
                              activeIndex === index
                                ? "w-8 bg-accent"
                                : "w-2.5 bg-paper/20 hover:bg-accent/50 light:bg-navy/20"
                            }
                          `}
                        />
                      ))}
                    </div>

                    {/* Next */}
                    <button
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-line
                        text-paper
                        transition-all
                        hover:border-accent
                        hover:bg-accent/10
                        hover:text-accent
                        light:text-navy
                      "
                    >
                      <ArrowRight />
                    </button>
                  </div>

                  {/* Auto slide status */}
                  <p className="mt-5 text-center text-xs text-paper/35 light:text-navy/40">
                    {isPaused
                      ? "Slider paused"
                      : "Testimonials change automatically"}
                  </p>
                </>
              )}
            </div>
            {/* Small client preview cards */}
            {testimonials.length > 1 && (
              <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-3">
                {testimonials.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      rounded-2xl
                      border
                      p-5
                      text-left
                      transition-all
                      duration-300
                      ${
                        activeIndex === index
                          ? "border-accent/60 bg-accent/[0.08]"
                          : "border-slate-line bg-white/[0.02] hover:border-accent/30"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          font-semibold
                          ${
                            activeIndex === index
                              ? "border-accent bg-accent/15 text-accent"
                              : "border-slate-line text-paper/60 light:text-navy/60"
                          }
                        `}
                      >
                        {item.name.charAt(0).toUpperCase()}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-paper light:text-navy">
                          {item.name}
                        </p>

                        <p className="mt-1 truncate text-xs text-paper/45 light:text-navy/45">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </>
        )}
         {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-paper/40 light:text-navy/40">
            Have a project in mind?
          </p>

          <a
            href="#contact"
            className="
              mt-4
              inline-flex
              rounded-full
              bg-accent
              px-6
              py-3
              text-sm
              font-semibold
              text-navy
              transition-all
              hover:scale-105
              hover:bg-accent-bright
            "
          >
            Let&apos;s Work Together
          </a>
        </div>
      </div>
    </section>
  );
}