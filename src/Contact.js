import React, { useRef, useEffect } from "react";
import "./Contact.css";

export default function Contact() {
    const containerRef = useRef(null);

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
        <section id="contact" className="contact" ref={containerRef}>
            <h2 className="section-title">Contact Me</h2>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="text" placeholder="Subject" required />
                <textarea placeholder="Your Message" rows="6" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}
