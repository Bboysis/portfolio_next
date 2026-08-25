import ContactForm from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contact — Sisay Abebayew",
  description: "Get in touch to start a project or collaboration.",
};

const directLinks = [
  { label: "Email", value: "sisayabebayew@gmail.com", href: "mailto:hello@sisaydev.com" },
  { label: "WhatsApp", value: "Message on WhatsApp", href: "https://wa.me/+251965681966" },
  { label: "LinkedIn", value: "linkedin.com/in/sisayabebayew", href: "https://linkedin.com/in/sisayabebayew" },
  { label: "GitHub", value: "github.com/sisayabebayew", href: "https://github.com/bboysis" },
];

export default function ContactPage() {
  return (
    <div className="section-container py-24">
      <p className="eyebrow mb-3">Get In Touch</p>
      <h1 className="font-display text-3xl font-bold text-paper sm:text-4xl light:text-navy">
        Let&apos;s Talk About Your Project
      </h1>
      <p className="mt-4 max-w-xl text-paper/60 light:text-navy/60">
        Fill out the form or reach out directly — whichever&apos;s easier.
      </p>

      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_320px]">
        <div className="card p-6 sm:p-8">
          <ContactForm />
        </div>

        <div className="space-y-4">
          {directLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card block p-5 transition hover:border-accent/60"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {link.label}
              </p>
              <p className="mt-1 text-sm text-paper/80 light:text-navy/80">{link.value}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
