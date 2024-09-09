import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const projectsData = [
  {
    id: 1,
    title: "Pong Game",
    description: "Developed using Deep Q-Network (DQN) to enhance AI performance.",
    image: "/images/projects/1.png",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/sohamsangole/Ping-Pong-Game-Reinforcement-Learrning",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and experience, built using React, Next.js, and Tailwind CSS.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
  },
  {
    id: 3,
    title: "University Probability Predictor",
    description: "Achieved 92% accuracy in predicting university acceptance probabilities.",
    image: "/images/projects/3.png",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/sohamsangole/University-Probability-Predictor",
  },
  {
    id: 4,
    title: "Project F2",
    description: "An app that fetches your Spotify data using the Spotify Web API with a Django backend and Flutter frontend.",
    image: "/images/projects/4.png",
    tag: ["All", "App"],
    gitUrl: "https://github.com/sohamsangole/project-f2",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const { theme } = useContext(ThemeContext);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" style={{ backgroundColor: `rgba(${parseInt(theme.background.slice(1, 3), 16)}, ${parseInt(theme.background.slice(3, 5), 16)}, ${parseInt(theme.background.slice(5, 7), 16)}, 0.8)` }}>
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12" style={{ color: theme.text }}>
        Projects
      </h2>
      <div className="hidden md:flex text-white flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="App"
          isSelected={tag === "App"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              theme={theme}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
