import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile.png";
// உங்கள் Resume PDF கோப்பை Import செய்யவும் (கோப்பின் பெயர் சரியாக உள்ளதா எனச் சரிபார்க்கவும்)
import resume_pdf from "../../assets/resume.pdf";

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

        {/* My Resume பட்டனை கிளிக் செய்தால் புதிய Tab-இல் PDF திறக்கும் */}
        <a
          href={resume_pdf}
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