import React from "react";
import { FaTwitter, FaGithub, FaMedium } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            twitter
            medium
            github
          }
        }
      }
    `}
    render={(data) => (
      <footer className="footer center has-background-light">
        <div className="content has-text-centered">
          © {new Date().getFullYear()}, Designed & Built Fabian
        </div>
      </footer>
    )}
  />
);

export default Footer;
