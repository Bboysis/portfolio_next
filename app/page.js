 import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Stats from "@/components/sections/Stats";
import SkillsGrid from "@/components/sections/SkillsGrid";
import Experience from "@/components/sections/Experience";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Statistics */}
      <Stats />

      {/* Skills */}
      <SkillsGrid />

      {/* Experience & Education */}
      <Experience />

      {/* Call To Action */}
      <CTA />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}