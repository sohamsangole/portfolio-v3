import React, { useTransition, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const { theme } = useContext(ThemeContext);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="h-screen flex items-center justify-end"
      id="about"
      style={{
        backgroundColor: `rgba(${parseInt(theme.background.slice(1, 3), 16)}, ${parseInt(theme.background.slice(3, 5), 16)}, ${parseInt(theme.background.slice(5, 7), 16)}, 0.8)`,
      }}
    >
      <div className="flex flex-col md:flex-row items-center md:justify-end gap-8 md:gap-16 p-6" style={{ color: theme.text }}>
        <div className="text-left max-w-xl">
          <h2 className="text-4xl font-bold mb-4" style={{ color: theme.text }}>
            About Me
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl">
            A passionate and driven technology enthusiast, I focus on building innovative solutions through deep learning, app development, and web technologies. With hands-on experience in machine learning and app development, I am constantly exploring new ways to apply my skills in impactful projects. Having worked on applications ranging from healthcare to smart music recommendations, my goal is to leverage cutting-edge technology to solve real-world problems. Whether leading teams or collaborating on complex projects, I am committed to pushing the boundaries of what&apos;s possible in the tech space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
