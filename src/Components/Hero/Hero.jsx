import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile.png";
// HTML கோப்பை URL-ஆக எடுக்க ?url சேர்க்க வேண்டும்
import resume_file from "../../assets/resume.html?url";

const Hero = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile" />

      <h1>
        <span>I'm Thaujan,</span> Mechatronics Engineer, Software Developer & Innovator In Sri Lanka
      </h1>

      <p>
        I design and build smart solutions using software, robotics, automation, and embedded systems.
        Passionate about creating innovative technologies that solve real-world problems.
      </p>

      <div className="hero-action">
        <div className="hero-connect" onClick={scrollToContact}>
          Connect With Me
        </div>

        <a
          href={resume_file}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;