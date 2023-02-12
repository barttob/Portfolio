import React from "react";

import Scroll from "../subComponents/Scroll";

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
  return (
    <div className="menu">
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
      <div className="menu__list--under">
        <div className="menu__list">
          <a
            className="menu__list--item"
            href="#"
            style={
              scrollPosition < 26
                ? { fontWeight: "bold" }
                // ? { fontWeight: "bold", textDecoration: "underline" }
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
                ? { fontWeight: "bold" }
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
                ? { fontWeight: "bold" }
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
                ? { fontWeight: "bold" }
                : { fontWeight: "normal" }
            }
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
