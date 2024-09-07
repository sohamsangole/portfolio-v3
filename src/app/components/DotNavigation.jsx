import { useState, useEffect } from "react";

const DotNavigation = () => {
    const [activeSection, setActiveSection] = useState("hero");

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
        <div className="hidden md:flex fixed top-1/2 right-8 transform -translate-y-1/2 z-50 flex-col items-center space-y-4">
            {["hero", "about", "experience", "projects"].map((sectionId) => (
                <button
                    key={sectionId}
                    className={`w-4 h-4 opacity-40 rounded-full transition-all duration-300 ${activeSection === sectionId ? "bg-[#fae739]" : "bg-white"}`}
                    onClick={() => scrollToSection(sectionId)}
                    aria-label={`Scroll to ${sectionId} section`}
                />
            ))}
        </div>
    );
};

export default DotNavigation;
