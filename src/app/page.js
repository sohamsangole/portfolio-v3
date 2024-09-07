"use client";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import Experience from "./components/Experience";
import DotNavigation from "./components/DotNavigation";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#121212] overflow-hidden">
      <DotNavigation />
      <div id="hero" className="relative flex-1">
        <ParticleBackground />
        <div className="relative z-10">
          <HeroSection />
        </div>
      </div>
      <div id="about" className="relative z-10 container mx-auto px-12 py-4 bg-[#121212] bg-opacity-90">
        <AboutSection />
      </div>
      <div id="experience" className="relative z-10 container mx-auto px-12 py-4 bg-[#121212] bg-opacity-90">
        <Experience />
      </div>
      <div id="projects" className="relative z-10 container mx-auto px-12 py-4 bg-[#121212] bg-opacity-90">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
