import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo_v.png";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenu(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="navbar">
      <img className="nav-logo" src={logo} alt="NextGen logo" />

      <img
        src={menu_open}
        alt="Open menu"
        className="nav-mob-open"
        onClick={() => setMobileMenuOpen(true)}
      />

      <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
        <img
          src={menu_close}
          alt="Close menu"
          className="nav-mob-close"
          onClick={() => setMobileMenuOpen(false)}
        />

        <li onClick={() => scrollToSection("home")}>
          <p>Home</p>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li onClick={() => scrollToSection("about")}>
          <p>About Me</p>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li onClick={() => scrollToSection("services")}>
          <p>Services</p>
          {menu === "services" && <img src={underline} alt="" />}
        </li>

        <li onClick={() => scrollToSection("work")}>
          <p>Portfolio</p>
          {menu === "work" && <img src={underline} alt="" />}
        </li>

        <li onClick={() => scrollToSection("contact")}>
          <p>Contact</p>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>

      <div className="nav-connect" onClick={() => scrollToSection("contact")}>
        Connect With Me
      </div>
    </div>
  );
};

export default Navbar;
