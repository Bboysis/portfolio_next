import { timeline } from "@/data/experience";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import MobileScrollProgress from "@/components/MobileScrollProgress";
 export const metadata = {
  title: "Experience — Sisay Abebayew",
  description:
    "Experience, education, and professional journey of Sisay Abebayew.",
};

export default function ExperiencePage() {
  return (
    <main className="section-container py-24">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow mb-4">My Journey</p>

        <h1 className="font-display text-4xl font-bold text-paper sm:text-5xl light:text-navy">
          Experience & Education
        </h1>

        <p className="mt-5 max-w-2xl text-paper/65 light:text-navy/65">
          My journey in technology, software development, and education.
        </p>

        <ol className="mt-14 space-y-10 border-l border-slate-line pl-7">
          {timeline.map((entry, index) => (
            <li key={index} className="relative">
              <span className="absolute -left-[33px] top-2 h-3 w-3 rounded-full bg-accent shadow-lg shadow-accent/40" />

              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {entry.period}
              </p>

              <h2 className="mt-2 font-display text-xl font-bold text-paper light:text-navy">
                {entry.title}
              </h2>

              <p className="mt-1 text-sm text-paper/50 light:text-navy/50">
                {entry.org}
              </p>

              <p className="mt-3 max-w-2xl leading-relaxed text-paper/70 light:text-navy/70">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
      <CurrentlyBuilding/>
      <MobileScrollProgress/>
    </main>
  );
}