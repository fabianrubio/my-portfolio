import React from "react";
import { FaGithub } from "react-icons/fa";

import "./style.scss";
import gatsbyLogo from "../images/gatsby-icon.png";
import bulmaLogo from "../images/bulma-logo.png";

const Navbar = () => (
  <div className="hero-head is-hidden-mobile">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#home">
          FR
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
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

export default Navbar;
