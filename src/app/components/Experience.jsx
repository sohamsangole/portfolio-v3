"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const experiences = [
    {
        role: "Summer Intern",
        company: "Thermax Limited",
        duration: "June 2024 - July 2024",
        location: "Pune, India",
        bulletPoints: [
            "Trained machine learning models for the Heating Division.",
            "Integrated over 200 models into the Edge Live Portal.",
            "Enhanced asset management efficiency by over 50%."
        ]
    },
    {
        role: "App Developer",
        company: "KEM Hospital",
        duration: "June 2023 - Present",
        location: "Mumbai, India",
        bulletPoints: [
            "Developed a mobile application for detecting early signs of MDR TB.",
            "Used Deep Learning algorithms for analysis.",
            "Integrated APIs for efficient model deployment."
        ]
    },
    {
        role: "Machine Learning Coordinator",
        company: "COC, VJTI",
        duration: "June 2023 - July 2024",
        location: "Mumbai, India",
        bulletPoints: [
            "Organized workshops for machine learning concepts.",
            "Mentored over 100 juniors in various ML projects.",
            "Led multiple hands-on sessions and hackathons."
        ]
    },
    {
        role: "Inheritance Mentor",
        company: "COC, VJTI",
        duration: "September 2022 - Jan 2023",
        location: "Mumbai, India",
        bulletPoints: [
            "Mentored a team on developing a Song Audio Identifier and Recommender App.",
            "Guided juniors on software architecture and machine learning models.",
            "Helped foster collaboration and innovation in junior teams."
        ]
    },
];

const Experience = () => {
    const ref = useRef(null);
    const { theme } = useContext(ThemeContext);
    const isInView = useInView(ref, { threshold: 0.1 });

    const experienceVariants = {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    };

    return (
        <section className="py-12" style={{ backgroundColor: `rgba(${parseInt(theme.background.slice(1, 3), 16)}, ${parseInt(theme.background.slice(3, 5), 16)}, ${parseInt(theme.background.slice(5, 7), 16)}, 0.8)` }}>
            <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: theme.text }}>
                Experience
            </h2>
            <div className="relative" ref={ref}>
                <div
                    className="absolute md:left-1/2 left-6 transform md:-translate-x-1/2 top-0 w-0.5 h-full hidden md:block"
                    style={{ backgroundColor: theme.text }}
                ></div>

                {experiences.map((exp, index) => {
                    return (
                        <motion.div
                            key={index}
                            variants={experienceVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 1, delay: index * 0.6 }}
                            className={`mb-12 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} flex-col`}
                        >
                            <div
                                className="w-5 h-5 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
                                style={{ backgroundColor: theme.text }}
                            ></div>

                            <div
                                className={`w-full md:w-5/12 p-6 bg-black bg-opacity-10 hover:bg-opacity-30 rounded-xl relative ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
                                style={{ color: theme.text, borderColor: theme.border }}
                            >
                                <h3 className="text-xl font-semibold" style={{ color: theme.text }}>
                                    {exp.role}{" "}
                                    <span className="text-xl">@ {exp.company}</span>
                                </h3>
                                <p className="text-lg">
                                    {exp.duration} • {exp.location}
                                </p>
                                <ul className="list-disc pl-5 mt-2" style={{ color: theme.secondaryText }}>
                                    {exp.bulletPoints.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;