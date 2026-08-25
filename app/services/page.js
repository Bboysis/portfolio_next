import Link from "next/link";

const services = [
  {
    title: "Full-Stack Web Applications",
    description:
      "End-to-end systems — from database design to a polished interface — for businesses that need real software, not just a website.",
  },
  {
    title: "Business & Brand Websites",
    description:
      "Fast, responsive, SEO-ready websites that give a business or service provider a credible online presence.",
  },
  {
    title: "System Design & Architecture",
    description:
      "Planning data models, workflows, and integrations for management systems (inventory, booking, admin platforms).",
  },
  {
    title: "API Integration",
    description:
      "Connecting third-party services — payments, maps, messaging, and more — into existing or new applications.",
  },
  {
    title: "Freelance & Contract Work",
    description:
      "Available for fixed-scope projects or ongoing contract collaboration with startups and agencies.",
  },
];

export const metadata = {
  title: "Services — Sisay Abebayew",
  description: "Full-stack development services for businesses and startups.",
};

export default function ServicesPage() {
  return (
    <div className="section-container py-24">
      <p className="eyebrow mb-3">What I Offer</p>
      <h1 className="font-display text-3xl font-bold text-paper sm:text-4xl light:text-navy">
        Services
      </h1>
      <p className="mt-4 max-w-xl text-paper/60 light:text-navy/60">
        Practical, complete solutions — built to work, not just to demo.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="card p-6">
            <h3 className="font-display text-lg font-semibold text-paper light:text-navy">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/65 light:text-navy/65">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="card mt-16 px-8 py-12 text-center">
        <h2 className="font-display text-2xl font-bold text-paper light:text-navy">
          Have a project in mind?
        </h2>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy transition hover:bg-accent-bright"
        >
          Start a Conversation
        </Link>
      </div>
    </div>
  );
}
