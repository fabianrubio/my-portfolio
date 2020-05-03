import React from "react";
import { FaGithub } from "react-icons/fa";

import "./style.scss";

import gatsbyLogo from "../images/gatsby-icon.png";
import bulmaLogo from "../images/bulma-logo.png";
import Navbar from "./navbar";

const Header = ({ siteTitle }) => (
  <section className="hero gradientBg is-fullheight-with-navbar">
    <Navbar />
    <div className="hero-body">
      <div className="container center">
        <article className="media"></article>
      </div>
    </div>
  </section>
);

export default Header;
