import React, { useState, useEffect } from "react";
import "./ThemeToggle.css"; // Import separate CSS for clean structure

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <div className="theme-toggle-container" onClick={toggleTheme}>
            <div className={`toggle-circle ${theme === "dark" ? "dark" : ""}`}>
                {theme === "dark" ? "🌙" : "☀️"}
            </div>
        </div>
    );
}
