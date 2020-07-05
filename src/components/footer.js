import React from "react";
import { FaCodepen, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
import FormSubmit from "./submit";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            linkedin
            codepen
            github
            bulma
          }
        }
      }
    `}
    render={(data) => (
      <>
        <div
          id="contact"
          className="contact hero is-fullheight is-fullheight-with-navbar"
        >
          <section className="section call-to-action is-primary">
            <div className="container is-narrow">
              <div className="box">
                <div className="columns">
                  <div className="column">
                    <div className="has-text-centered">
                      <h2 className="has-text-white">Contact</h2>
                      <hr className="divider light" />
                    </div>
                  </div>
                </div>
                <div className="form-submit">
                  <FormSubmit />
                </div>
              </div>
            </div>
          </section>

          <footer className="section is-primary is-small has-text-centered">
            <div className="container is-narrow">
              <div className="social-icons">
                <a
                  className="button is-medium"
                  href={data.site.siteMetadata.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon is-small">
                    <span className="icon">
                      <FaLinkedinIn />
                    </span>
                  </span>
                </a>

                <a
                  className="button is-medium"
                  href={data.site.siteMetadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon is-small">
                    <span className="icon">
                      <FaGithub />
                    </span>
                  </span>
                </a>

                <a
                  className="button is-medium"
                  href={data.site.siteMetadata.codepen}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon is-small">
                    <span className="icon">
                      <FaCodepen />
                    </span>
                  </span>
                </a>
              </div>
              <div className="has-white-text">
                © {new Date().getFullYear()}, Designed & Built by Fabian
              </div>
              <div className="made-by-bulma">
                <a
                  href={data.site.siteMetadata.bulma}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://bulma.io/images/made-with-bulma--white.png"
                    alt="Made with Bulma"
                    width="163"
                    height="31"
                  />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </>
    )}
  />
);

export default Footer;
