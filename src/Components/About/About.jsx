import React from "react";
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/about_profile.jpg"

const About = () => {
    return (
        <div id="about" className="about">

            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt=""/>
            </div>

            <div className="about-sections">

                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>

                <div className="about-right">

                    <div className="about-para">
                        <p>I am Sooriyapalan Thanujan, a passionate Mechatronics and Software Engineering professional with experience in automation, embedded systems, robotics,web development & Software development. I enjoy building smart solutions that combine software and engineering to solve real-world problems.</p>
                        <p>To obtain a challenging position in the fields of software engineering, mechatronics, or automation where I can apply my technical knowledge, problem-solving abilities, and innovative thinking to contribute to organizational success while continuously improving my skills.</p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill"><p>Software Development</p><hr style={{width:"70%"}}></hr></div>
                        <div className="about-skill"><p>Web Development</p><hr style={{width:"80%"}}></hr></div>
                        <div className="about-skill"><p>Robotics & Automation</p><hr style={{width:"90%"}}></hr></div>
                        <div className="about-skill"><p>Embedded Systems</p><hr style={{width:"80%"}}></hr></div>
                        <div className="about-skill"><p>Electronics </p><hr style={{width:"90%"}}></hr></div>
                        <div className="about-skill"><p>Innovation</p><hr style={{width:"90%"}}></hr></div>
                    </div>
                </div>
            </div>

            <div className="about-achievments">

                <div className="about-achievment">
                    <h1>5+</h1>
                    <p>YEARS OF EXPRIENCE</p>
                </div>
                <hr/>

                <div className="about-achievment">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>

                <div className="about-achievment">
                    <h1>10+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>

            </div>
        </div>
    )
}

export default About