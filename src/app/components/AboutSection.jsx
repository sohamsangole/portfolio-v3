"use client";
import React, { useTransition, useState } from "react";
// Removed Image import

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white h-screen flex items-center justify-end " id="about">
      <div className="flex flex-col md:flex-row items-center md:justify-end gap-8 md:gap-16">
        <div className="text-left max-w-xl">
          <h2 className="text-white text-4xl font-bold mb-4">About Me</h2>
          <p className="text-white text-base sm:text-lg lg:text-2xl">
            A passionate and driven technology enthusiast, I focus on building innovative solutions through deep learning, app development, and web technologies. With hands-on experience in machine learning and app development, I am constantly exploring new ways to apply my skills in impactful projects. Having worked on applications ranging from healthcare to smart music recommendations, my goal is to leverage cutting-edge technology to solve real-world problems. Whether leading teams or collaborating on complex projects, I am committed to pushing the boundaries of what&apos;s possible in the tech space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
