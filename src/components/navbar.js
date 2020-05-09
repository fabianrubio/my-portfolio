import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import useScrollPosition from "@react-hook/window-scroll";

import "./style.scss";

function Navbar() {
  const scrollY = useScrollPosition(60 /*frames per second*/);

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="hero-head">
      <nav
        class={`navbar is-fixed-top ${scrollY > 0 && "scrolled"}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="#home">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            id="burger"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div class="navbar-end">
            <a class="navbar-item">Home</a>
            <a class="navbar-item">About</a>
            <a class="navbar-item">Skills</a>
            <a class="navbar-item">Experience</a>
            <a class="navbar-item">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
