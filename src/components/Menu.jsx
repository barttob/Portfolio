import React from "react";

import Scroll from "../subComponents/Scroll";
import ThemeToggle from "../subComponents/ThemeToggle";

import "../styles/Menu.css";

const Menu = ({ scrollPosition }) => {
  return (
    <div className="menu">
      <a href="#">
        <img src="HEXLogoLight.svg" alt="logo" color="#fff"/>
      </a>
      <div className="menu__list--under">
        <div className="menu__list">
          <a
            className="menu__list--item"
            href="#"
            style={
              scrollPosition < 26
                ? { fontWeight: "bold", textDecoration: "underline" }
                : { fontWeight: "normal" }
            }
          >
            home
          </a>
          <a
            className="menu__list--item"
            href="#about"
            style={
              scrollPosition >= 26 && scrollPosition < 58
                ? { fontWeight: "bold", textDecoration: "underline" }
                : { fontWeight: "normal" }
            }
          >
            about me
          </a>
          <a
            className="menu__list--item"
            href="#work"
            style={
              scrollPosition >= 58 && scrollPosition < 82
                ? { fontWeight: "bold", textDecoration: "underline" }
                : { fontWeight: "normal" }
            }
          >
            work
          </a>
          <a
            className="menu__list--item"
            href="#contact"
            style={
              scrollPosition >= 82
                ? { fontWeight: "bold", textDecoration: "underline" }
                : { fontWeight: "normal" }
            }
          >
            contact
          </a>
        </div>
        <Scroll />
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Menu;
