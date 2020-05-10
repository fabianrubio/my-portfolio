import React from "react";
import { FaGithub } from "react-icons/fa";

import "./style.scss";

import gatsbyLogo from "../images/gatsby-icon.png";
import bulmaLogo from "../images/bulma-logo.png";
import FrontendDesigner from "../images/frontend-designer.svg";
import Navbar from "./navbar";

const Header = ({ siteTitle }) => (
  <>
    <Navbar />
    <section className="hero is-fullheight is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container center">
          <div class="columns">
            <div class="column is-half">
              <h4>Hi, my name is</h4>
              <h1 className="has-text-primary">Fabian Rubio</h1>
              <h2>I build things for the web.</h2>
              <br />
              <h4 className="field">
                Hi, my name is Fabian Rubio. I build things for the web. I'm a
                Frontend Developer, specializing in building exceptional
                websites, applications, and everything in between.
              </h4>

              <div class="level">
                <div class="level-left">
                  <div class="level-item">
                    <button class="button is-primary is-rounded is-outlined">
                      Hire me
                    </button>
                  </div>
                  <div class="level-item">
                    <button class="button is-primary is-rounded is-outlined">
                      Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <img src={FrontendDesigner} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Header;
