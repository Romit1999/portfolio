import React from "react";
import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
export default function Home() {
     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };
    return (
        <section id="home" className="home">
            {/* Left Side - Text */}
            <div className="home-content">
               <h1>
    Hello, I'm <span className="highlight">ROMIT</span> 👋
</h1>
<h2>Full Stack Developer | React & Node.js Enthusiast</h2>
<p>
    I love building modern, responsive, and full-featured web applications.  
    Passionate about clean code, smooth UI/UX, and creating complete digital experiences from frontend to backend.
</p>

                <div className="home-buttons">
                    <a href="#projects" className="btn">View Projects</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="home-image">
                <img src="Myimage.jpg" alt="Profile" />
            </div>

           {/* Right Side - Carousel */}
            {/* <div className="home-image">
                <Slider {...settings}>
                    <div><img src="Myimage.jpg" alt="Profile 1" /></div>
                    <div><img src="Myimage2.jpg" alt="Profile 2" /></div>
                    <div><img src="Myimage3.jpg" alt="Profile 3" /></div>
                </Slider>
            </div> */}

        </section>
    );
}
