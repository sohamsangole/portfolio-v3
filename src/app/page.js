// page.js
"use client";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#121212] overflow-hidden">
      <div className="relative flex-1">
        <ParticleBackground />
        <div className="relative z-10">
          <HeroSection />
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-12 py-4 bg-[#121212] bg-opacity-90">
        <AboutSection />
        <Experience />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
