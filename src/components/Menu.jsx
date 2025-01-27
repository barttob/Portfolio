import React from "react";
import { useState } from "react";
import { motion, useCycle } from "framer-motion";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

import Scroll from "../subComponents/Scroll";
import { MenuToggle } from "../subComponents/MenuToggle";

import "../styles/Menu.css";

import "../styles/ThemeToggle.css";

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

const toggleTheme = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const Menu = ({ scrollPosition }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className={`menu ${isOpen ? "menu--height" : ""}`}>
      <a href="#">
        {/* <img src="HEXLogoLight.svg" alt="logo" className="menu__logo"/> */}
        <svg
          viewBox="0 0 83 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="menu__logo"
        >
          <g clip-path="url(#clip0_19_4)">
            <path
              d="M6.33052 6.4L19.1538 0L44.6923 12.8L70.2308 0L83 6.4L63.8462 16V60.8L57.4615 64L51.0769 60.8V22.4L31.9231 32L44.6923 38.4V51.2L19.1538 64L0 54.4V41.6L19.1538 51.2L31.9231 44.8L0 28.8V16L19.1538 25.6L31.9231 19.2L6.33052 6.4Z"
              fill="#121912"
            />
          </g>
        </svg>
      </a>

      <motion.div
        
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <MenuToggle toggle={() => toggleOpen()} className="menu__toggler"/>

        {/* <button onClick={handleToggle}> */}
        {/* {navbarOpen ? ( */}
        {/* <MdClose className="menu__icon" /> */}
        {/* ) : ( */}
        {/* <FiMenu className="menu__icon" /> */}
        {/* )} */}
        {/* {navbarOpen ? "Close" : "Open"} */}
        {/* </button> */}
      </motion.div>

      <div className={`menu__toggle ${isOpen ? "showMenu" : ""}`}>
        <div className="menu__list">
          <a className="menu__list--item" href="#" onClick={toggleOpen}>
            home
          </a>
          <a className="menu__list--item" href="#about" onClick={toggleOpen}>
            about me
          </a>
          <a className="menu__list--item" href="#work" onClick={toggleOpen}>
            work
          </a>
          <a className="menu__list--item" href="#contact" onClick={toggleOpen}>
            contact
          </a>
        </div>
      </div>

      <div className="menu__list--under">
        <div className="menu__list">
          <a
            className={`menu__list--item ${
              scrollPosition < 26 ? "menu__list--item--active" : ""
            }`}
            href="#"
          >
            home
          </a>
          <a
            className={`menu__list--item ${
              scrollPosition >= 26 && scrollPosition < 58
                ? "menu__list--item--active"
                : ""
            }`}
            href="#about"
          >
            about me
          </a>
          <a
            className={`menu__list--item ${
              scrollPosition >= 58 && scrollPosition < 82
                ? "menu__list--item--active"
                : ""
            }`}
            href="#work"
          >
            work
          </a>
          <a
            className={`menu__list--item ${
              scrollPosition >= 82 ? "menu__list--item--active" : ""
            }`}
            href="#contact"
          >
            contact
          </a>
        </div>
        <Scroll />
      </div>
      <div className="toggle-theme-wrapper">
        {/* <span>☀️</span> */}
        <img src="SVG/Sun.svg" alt="moon" />
        <label className="toggle-theme" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            onChange={toggleTheme}
            defaultChecked={defaultDark}
          />
          <div className="toggler round"></div>
        </label>
        {/* <span>🌒</span> */}
        <img src="SVG/Moon.svg" alt="moon" />
      </div>
    </div>
  );
};

export default Menu;
