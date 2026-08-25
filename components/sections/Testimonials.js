"use client";

const testimonials = [
  {
    name: "senay",
    role: "Client / Business Owner",
    message:
      "Working with Sisay was a great experience. He understood the project requirements and turned the idea into a practical and professional digital solution.",
  },
  {
    name: "dr yshak",
    role: "Project Client",
    message:
      "The project was well organized, responsive, and easy to use. Communication was clear and the final result matched what we needed.",
  },
  {
    name: "mr gullat",
    role: "Business Owner",
    message:
      "Sisay delivered a modern and functional website with attention to both design and usability.",
  },
];

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

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-accent/10 blur-[130px]" />

      <div className="section-container relative z-10">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="eyebrow mb-4">
            Client Feedback
          </p>

          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl light:text-navy">
            What People
            <span className="text-accent"> Say</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-paper/60 sm:text-lg light:text-navy/60">
            Feedback from people and clients I have worked with
            throughout my development journey.
          </p>

        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
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
                hover:-translate-y-2
                hover:border-accent/40
                hover:bg-accent/[0.03]
                hover:shadow-2xl
                hover:shadow-accent/10
              "
            >

              {/* Quote icon */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-accent/20
                  bg-accent/10
                  text-accent
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
              >
                <QuoteIcon />
              </div>

              {/* Stars */}
              <div className="mt-6 flex gap-1 text-accent">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              {/* Message */}
              <p className="mt-5 text-sm leading-7 text-paper/60 light:text-navy/60">
                “{testimonial.message}”
              </p>
              {/* Client */}
              <div className="mt-7 border-t border-slate-line pt-5">
                <h3 className="font-display font-semibold text-paper light:text-navy">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-xs text-accent">
                  {testimonial.role}
                </p>
              </div>

              {/* Decorative glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -right-16
                  h-32
                  w-32
                  rounded-full
                  bg-accent/10
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-accent/20
                "
              />

            </article>
          ))}

        </div>

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
