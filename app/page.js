 import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Stats from "@/components/sections/Stats";
import SkillsGrid from "@/components/sections/SkillsGrid";
 
import WebsiteMap from "@/components/WebsiteMap";
import SmartWelcome from "@/components/SmartWelcome";
import ScrollStory from "@/components/ScrollStory";
import DynamicBackground from "@/components/DynamicBackground";
import PortfolioAssistant from "../components/PortfolioAssistant";
import MobileBottomNav from "@/components/MobileBottomNav";
import MobileScrollProgress from "@/components/MobileScrollProgress";
import MobileMiniAssistant from "@/components/MobileMiniAssistant";
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
        <MobileScrollProgress/>
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
 <PortfolioAssistant/>
      </div>
 <MobileMiniAssistant/>
      <SmartWelcome />
      <MobileBottomNav/>
<PortfolioAssistant/>
 
    </main>
  );
}