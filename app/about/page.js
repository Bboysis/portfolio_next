import Image from "next/image";
import Resume from "@/components/sections/Resume";
import { timeline } from "@/data/experience";
export const metadata = {
  title: "About — Sisay Abebayew",
  description: "Full-Stack Developer & Digital Solutions Architect.",
};

export default function AboutPage() {
  return (
    <div className="section-container py-24">
      <div className="grid gap-12 md:grid-cols-[280px_1fr]">
        <div>
          <div className="aspect-square overflow-hidden rounded-2xl border border-slate-line bg-slate-panel">
            {/* Replace with your real photo at /public/images/profile.jpg */}
            <Image
            
              src="/images/coder.jpg"
              alt="Sisay Abebayew"
              width={560}
              height={560}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        <div>
          <p className="eyebrow mb-3">About Me</p>
          <h1 className="font-display text-3xl font-bold text-paper sm:text-4xl light:text-navy">
            Sisay Abebayew
          </h1>
          <p className="mt-2 text-paper/60 light:text-navy/60">
            Full-Stack Developer &amp; Digital Solutions Architect
          </p>

          {/* Placeholder bio — replace with your refined version once we draft it together */}
          <p className="mt-8 max-w-2xl leading-relaxed text-paper/75 light:text-navy/75">
            I build complete, practical, and user-friendly digital solutions
            that turn ideas into real, functional applications. My work spans
            full-stack systems — from pharmacy and school management
            platforms to e-commerce and booking systems — where I own every
            layer, from database design to the interface a client&apos;s
            customers actually use. I care about software that solves a real
            problem cleanly, not just looks good in a demo.
          </p>

          <div className="mt-12">
            <h2 className="mb-6 font-display text-xl font-semibold text-paper light:text-navy">
              Experience &amp; Education
            </h2>
            <ol className="space-y-8 border-l border-slate-line pl-6">
              {timeline.map((entry, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="text-xs uppercase tracking-wider text-accent">
                    {entry.period}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-paper light:text-navy">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-paper/50 light:text-navy/50">{entry.org}</p>
                  <p className="mt-2 text-sm text-paper/70 light:text-navy/70">
                    {entry.description}
                  </p>
                </li>
              ))}
            </ol>
            
          </div>
        </div>
      
      </div>
       <Resume/>
    </div>
    
  );
  
}
 