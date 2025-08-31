// import React, { useState } from "react";
// import "./about.css";

// export default function About() {
//     const [animateSkills, setAnimateSkills] = useState(false);

//     const skills = [
//         { name: "React.js", level: 50 },
//         { name: "JavaScript", level: 60 },
//         { name: "CSS / HTML", level: 95 },
//         { name: "PHP", level: 80 },
//         { name: "MYSQL", level: 80 },
//         { name: "Wordpress", level: 80 },
//         { name: "Bootstrap", level: 80 },
//         { name: "Responsive Design", level: 90 },
//     ];

//     return (
//         <section id="about" className="about">
//             <h2 className="section-title">About Me</h2>
//             <div className="about-container">
//                 {/* Left side - text */}
//                 <div className="about-text">
//                     <p>
//                         Hi! I'm <span className="highlight">Romit</span>, a passionate frontend developer.
//                     </p>
//                     <p>
//                         Click below to see my skills animate smoothly:
//                     </p>

//                     <button className="btn btn-outline" onClick={() => setAnimateSkills(true)}>
//                         Show Skills
//                     </button>

//                     <div className="about-skills">
//                         {skills.map((skill, index) => (
//                             <div key={index} className="skill">
//                                 <span>{skill.name}</span>
//                                 <div className="skill-bar">
//                                     <div
//                                         className={`skill-fill ${animateSkills ? "active" : ""}`}
//                                         style={{ width: animateSkills ? `${skill.level}%` : "0%" }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right side - image */}
//                 <div className="about-image">
//                     <img src="Myimage2.jpg" alt="Profile" />
//                 </div>
//             </div>
//         </section>
//     );
// }


import React from "react";
import "./about.css";

export default function About() {
    return (
        <section id="about" className="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-container">
                {/* Left side - text */}
                <div className="about-text">
                  <p>
    Hi! I'm <span className="highlight">Romit</span>, a passionate <strong>Full Stack Developer</strong> with a love for creating modern, responsive, and user-friendly web applications.  
    I enjoy working with <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong> to build full-fledged applications.
</p>
<p>
    I am constantly learning new technologies and improving my skills to deliver high-quality projects.  
    I believe in clean code, smooth UI/UX, and creative problem solving.
</p>

                    <div className="about-skills">
                        {/* <span>React.js</span>
                        <span>JavaScript</span>
                        <span>CSS / HTML</span>
                        <span>Git & GitHub</span>
                        <span>PHP</span>
                        <span>MySql</span>
                        <span>Wordpress</span>
                        <span>Bootstrap</span> */}
                        {/* <span>Responsive Design</span> */}
                    </div>
                </div>

                {/* Right side - image */}
                <div className="about-image">
                    <img src="Myimage2.jpg" alt="Profile" />
                </div>
            </div>
        </section>
    );
}
