import React, { useEffect, useRef } from "react";
import "./Skills.css";

export default function Skills() {
    const containerRef = useRef(null);

  
const skills = {
    "Frontend": ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "TailwindCSS"],
    "Backend": ["Node.js", "Express", "PHP", "MySQL", "MongoDB", "WordPress"],  
    "Tools & Others": ["Git", "GitHub", "VS Code", "Postman"]
};

    
    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const top = container.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (top < windowHeight - 100) {
                container.classList.add("animate");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); 

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="skills" className="skills" ref={containerRef}>
            <h2 className="section-title">My Skills</h2>
            <div className="skills-container">
                {Object.keys(skills).map((category, i) => (
                    <div key={i} className="skills-category">
                        <h3>{category}</h3>
                        <div className="skills-badges">
                            {skills[category].map((skill, index) => (
                                <span key={index} className="skill-badge">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
