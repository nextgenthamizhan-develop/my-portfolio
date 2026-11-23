import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ee43975e-b9fe-4059-b511-5569ccfb5473");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
          </p>
          <div className="contact-details">
            <a
              href="mailto:Sooriyapalanthanujan1@gmail.com"
              className="contact-detail"
              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              <img src={mail_icon} alt="Email" />
              <p>Sooriyapalanthanujan1@gmail.com</p>
            </a>

            <a
              href="tel:+94762695281"
              className="contact-detail"
              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              <img src={call_icon} alt="Phone" />
              <p>+94762695281</p>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Kilinochchi,+Sri+Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail"
              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              <img src={location_icon} alt="Location" />
              <p>Sri Lanka</p>
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" name="name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" name="email" required />
          <label htmlFor="message">Write your message here</label>
          <textarea id="message" name="message" rows="8" placeholder="Enter your message" required></textarea>
          <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;