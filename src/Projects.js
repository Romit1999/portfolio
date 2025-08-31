import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const containerRef = useRef(null);

    // Sample projects data
    const projectData = [
        {
            title: "Portfolio Website",
            description: "A personal portfolio built with React.",
            image: "Screenshot.png",
            live: "#",
            github: "#"
        },
         {
        title: "Digital Health Record",
        description: "A web application to manage patient health records securely with features for doctors and patients.",
        image: "W.jpg",  
        live: "#", 
        github: "#" 
    },
        {
            title: "Todo App",
            description: "Simple todo app using JavaScript.",
            image: "to-do-app.png",
            live: "#",
            github: "#"
        }
    ];

    // Load projects on mount
    useEffect(() => {
        setProjects(projectData);
    }, []);

    // Scroll animation
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
        handleScroll(); // check on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="projects" className="projects" ref={containerRef}>
            <h2 className="section-title">My Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                {/* <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
