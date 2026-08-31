 import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Stats from "@/components/sections/Stats";
import SkillsGrid from "@/components/sections/SkillsGrid";
import Testimonials from "@/components/sections/Testimonials";

import WebsiteMap from "@/components/WebsiteMap";
import SmartWelcome from "@/components/SmartWelcome";
import ScrollStory from "@/components/ScrollStory";
import DynamicBackground from "@/components/DynamicBackground";
import PortfolioAssistant from "../components/PortfolioAssistant";
 export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      
      {/* =========================================
          DYNAMIC BACKGROUND
          Fixed behind the entire website
      ========================================= */}
      <DynamicBackground />

      {/* =========================================
          SCROLL STORY
      ========================================= */}
      <ScrollStory />

      {/* =========================================
          WEBSITE CONTENT
      ========================================= */}
      <div className="relative z-10">
        
        {/* Hero */}
        <Hero />

        {/* Featured Projects */}
        <FeaturedProjects />

        {/* Statistics */}
        <Stats />

        {/* Skills */}
        <SkillsGrid />
 
        {/* Website Map */}
        <WebsiteMap />

        {/* Testimonials */}
        <Testimonials />
<PortfolioAssistant/>
      </div>
 
      <SmartWelcome />
<PortfolioAssistant/>
    </main>
  );
}