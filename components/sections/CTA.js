import Link from "next/link";

export default function CTA() {
  return (
    <section className="section-container py-24">
      <div className="card relative overflow-hidden px-8 py-16 text-center sm:px-16">
        <p className="eyebrow mb-4">Let&apos;s Work Together</p>
        <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl light:text-navy">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-paper/60 light:text-navy/60">
          Whether it&apos;s a full-stack system, a business website, or a
          freelance collaboration — I&apos;d love to hear about it.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy transition hover:bg-accent-bright"
          >
            Get in Touch
          </Link>
          <a
            href="/cv/sisay-abebayew-cv.pdf"
            download
            className="rounded-full border border-slate-line px-6 py-3 text-sm font-semibold text-paper transition hover:border-accent hover:text-accent light:text-navy"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
