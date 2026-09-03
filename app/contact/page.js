 "use client";

import { useState } from "react";


 export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // your other existing states below

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);

  const email = "sisayabebayew@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy email:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  setLoading(true);
  setStatus("");

  try {
    const response = await fetch("loading", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message.");
    }

    setStatus("success");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    setStatus("error");
  } finally {
    setLoading(false);
  }
};

 
   

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-accent/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/5 blur-[140px]" />

      <div className="section-container relative z-10">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="eyebrow mb-4">Get In Touch</p>

          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl light:text-navy">
            Let&apos;s Start Something
            <span className="text-accent"> Great</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-paper/60 sm:text-lg light:text-navy/60">
            Have an idea, project, or opportunity? Let&apos;s connect and
            explore what we can build together.
          </p>
        </div>

        {/* Main grid */}
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* =========================
              LEFT SIDE
          ========================= */}
          <div className="space-y-8">
            
            {/* Title */}
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Contact Information
              </p>

              <h3 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl light:text-navy">
                Let&apos;s Connect
              </h3>

              <p className="mt-5 max-w-lg text-base leading-7 text-paper/60 light:text-navy/60">
                Have a project in mind or just want to chat? I&apos;d love
                to hear from you.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              
              {/* Email */}
              <div
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-line
                  bg-white/[0.03]
                  p-5
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-accent/40
                  hover:bg-accent/[0.04]
                  light:bg-white/60
                "
              >
                <div className="flex items-start gap-4">
                  
                  <div
                    className="
                    flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-accent/10
                      text-accent
                    "
                  >
                    ✉
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-[0.15em] text-paper/40 light:text-navy/40">
                      Email
                    </p>

                    <a
                      href={`mailto:${email}`}
                      className="
                        mt-2
                        block
                        break-all
                        font-medium
                        text-paper
                        transition
                        hover:text-accent
                        light:text-navy
                      "
                    >
                      {email}
                    </a>

                    <button
                      onClick={copyEmail}
                      className="
                        mt-3
                        text-xs
                        font-medium
                        text-accent
                        transition
                        hover:text-accent-bright
                      "
                    >
                      {copied ? "✓ Email copied" : "Copy email"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div
                className="
                  rounded-2xl
                  border
                  border-slate-line
                  bg-white/[0.03]
                  p-5
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-accent/40
                  hover:bg-accent/[0.04]
                  light:bg-white/60
                "
              >
                <div className="flex items-start gap-4">
                  
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-accent/10
                      text-accent
                    "
                  >
                    📍
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-paper/40 light:text-navy/40">
                      Location
                    </p>

                    <p className="mt-2 font-medium text-paper light:text-navy">
                      Addis Ababa, Ethiopia
                    </p>

                    <p className="mt-2 text-sm text-paper/50 light:text-navy/50">
                      Available for remote opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div
              className="
                rounded-2xl
                border
                border-accent/20
                bg-accent/[0.04]
                p-6
                backdrop-blur-md
              "
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/40 light:text-navy/40">
                Availability
              </p>

              <div className="mt-4 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                </span>
                <span className="font-semibold text-paper light:text-navy">
                  Available
                </span>
              </div>

              <p className="mt-3 text-sm text-paper/60 light:text-navy/60">
                Open for freelance &amp; full-time opportunities.
              </p>
            </div>

            {/* Response time */}
            <div
              className="
                rounded-2xl
                border
                border-slate-line
                bg-white/[0.03]
                p-6
                backdrop-blur-md
                light:bg-white/60
              "
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/40 light:text-navy/40">
                Response Time
              </p>

              <div className="mt-5 space-y-4">
                
                <div className="flex items-center gap-3">
                  <span className="text-lg">⏰</span>

                  <div>
                    <p className="text-sm font-medium text-paper light:text-navy">
                      EAT (UTC+3)
                    </p>

                    <p className="text-xs text-paper/50 light:text-navy/50">
                      East Africa Time
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-lg">✅</span>

                  <div>
                    <p className="text-sm font-medium text-paper light:text-navy">
                      Usually within 24 hours
                    </p>

                    <p className="text-xs text-paper/50 light:text-navy/50">
                      Often responds the same day
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-paper/40 light:text-navy/40">
                Find Me Online
              </p>

              <div className="flex flex-wrap gap-3">
                
                <a
                  href="https://github.com/bboysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/sisayabebayew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                >
                  LinkedIn
                </a>

                {/* Change this Twitter link to your real profile */}
                <a
                  href="#"
                  className="social-button"
                >
                  Twitter
                </a>

                <a
                  href="https://t.me/bboysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                >
                  Telegram
                </a>

                <a
                  href="https://www.instagram.com/bboysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                >
                  Instagram
                </a>

                <a
                  href="https://wa.me/251965681966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* =========================
          RIGHT SIDE - FORM
          ========================= */}
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-line
              bg-white/[0.03]
              p-6
              shadow-2xl
              shadow-black/10
              backdrop-blur-xl
              sm:p-8
              lg:p-10
              light:bg-white/70
            "
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative">
              
              {/* Form heading */}
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
                  Send a Message
                </p>

                <h3 className="mt-3 font-display text-2xl font-bold text-paper sm:text-3xl light:text-navy">
                  Tell me about your idea
                </h3>

                <p className="mt-3 text-sm leading-6 text-paper/60 light:text-navy/60">
                  Fill out the form below and your email application will
                  open with your message ready to send.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-paper light:text-navy"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-line
                      bg-white/[0.03]
                      px-4
                      py-3.5
                      text-sm
                      text-paper
                      outline-none
                      transition
                      placeholder:text-paper/30
                      focus:border-accent
                      focus:ring-2
                      focus:ring-accent/10
                      light:bg-white
                      light:text-navy
                      light:placeholder:text-navy/30
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-paper light:text-navy"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-line
                      bg-white/[0.03]
                      px-4
                      py-3.5
                      text-sm
                      text-paper
                      outline-none
                      transition
                      placeholder:text-paper/30
                      focus:border-accent
                      focus:ring-2
                      focus:ring-accent/10
                      light:bg-white
                      light:text-navy
                      light:placeholder:text-navy/30
                    "
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-paper light:text-navy"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-line
                      bg-white/[0.03]
                      px-4
                      py-3.5
                      text-sm
                      text-paper
                      outline-none
                      transition
                      placeholder:text-paper/30
                      focus:border-accent
                      focus:ring-2
                      focus:ring-accent/10
                      light:bg-white
                      light:text-navy
                      light:placeholder:text-navy/30
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-paper light:text-navy"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-slate-line
                      bg-white/[0.03]
                      px-4
                      py-3.5
                      text-sm
                      leading-6
                      text-paper
                      outline-none
                      transition
                      placeholder:text-paper/30
                      focus:border-accent
                      focus:ring-2
                      focus:ring-accent/10
                      light:bg-white
                      light:text-navy
                      light:placeholder:text-navy/30
                    "
                  />
                </div>

                {/* Submit */}
                 <button
  type="submit"
  disabled={loading}
  className="
    group
    flex
    w-full
    items-center
    justify-center
    gap-3
    rounded-xl
    bg-accent
    px-6
    py-4
    text-sm
    font-bold
    text-navy
    shadow-lg
    shadow-accent/20
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:bg-accent-bright
    active:scale-[0.98]
    disabled:cursor-not-allowed
    disabled:opacity-70
  "
>
  {loading ? "Sending..." : "Send Message"}

  {!loading && (
    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  )}
</button>
{status === "success" && (
  <div className="rounded-xl border border-green-400/30 bg-green-400/10 px-4 py-3 text-center text-sm text-green-400">
    ✓ Message sent successfully! I&apos;ll get back to you soon.
  </div>
)}

{status === "error" && (
  <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-center text-sm text-red-400">
    ✕ Something went wrong. Please try again.
  </div>
)}
                <p className="text-center text-xs leading-5 text-paper/40 light:text-navy/40">
                  Your message will open in your default email application.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
 }