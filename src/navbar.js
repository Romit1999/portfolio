import React from "react";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>MyPortfolio</h1>
            </div>

            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>

            <ThemeToggle />
        </nav>
    );
}
