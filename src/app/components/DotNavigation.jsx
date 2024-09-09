import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const DotNavigation = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const { theme } = useContext(ThemeContext);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActiveSection(sectionId);
        }
    };

    useEffect(() => {
        const sections = ["hero", "about", "experience", "projects"];
        const sectionElements = sections.map((sectionId) =>
            document.getElementById(sectionId)
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sectionElements.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sectionElements.forEach((section) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    return (
        <div className="hidden md:flex fixed top-1/2 right-4 transform -translate-y-1/2 z-50 flex-col items-center space-y-4">
            {["hero", "about", "experience", "projects"].map((sectionId) => (
                <button
                    key={sectionId}
                    style={{
                        width: '1rem',
                        height: '1rem',
                        borderRadius: '50%',
                        backgroundColor: activeSection === sectionId
                            ? theme.primary_color
                            : theme.dots,
                        opacity: activeSection === sectionId ? 1 : 0.6,
                        transition: 'all 0.3s',
                    }}
                    onClick={() => scrollToSection(sectionId)}
                    aria-label={`Scroll to ${sectionId} section`}
                />
            ))}
        </div>
    );
};

export default DotNavigation;
