// app/page.js
"use client";

import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext"; // Import ThemeContext
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import Experience from "./components/Experience";
import DotNavigation from "./components/DotNavigation";
import ToggleButton from "./components/ToggleButton";
import ContactMe from "./components/ContactMe";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className="relative flex min-h-screen flex-col">
      <DotNavigation />
      <div id="hero" className="relative flex-1">
        <ParticleBackground />
        <div className="relative z-10">
          <HeroSection />
        </div>
      </div>
      <div id="about" className="relative z-10 container mx-auto px-12 py-4" >
        <AboutSection />
      </div>
      <div id="experience" className="relative z-10 container mx-auto px-12 py-4" >
        <Experience />
      </div>
      <div id="projects" className="relative z-10 container mx-auto px-12 py-4" >
        <ProjectsSection />
      </div>
      <div id="contact" className="relative z-10 container mx-auto px-12 py-4" >
        <ContactMe />
      </div>
      <Footer />
      <ToggleButton />
    </main>
  );
}
