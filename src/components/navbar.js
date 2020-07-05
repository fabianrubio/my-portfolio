import React, { useEffect, useRef, useState } from "react";
import useScrollPosition from "@react-hook/window-scroll";
import { Link, animateScroll as scroll } from "react-scroll";
import brand from "../images/fr-brand.svg";

function Navbar() {
  const scrollY = useScrollPosition(60 /*frames per second*/);

  const [isActive, setIsActive] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div className="hero-head">
      <nav
        ref={myRef}
        className={`navbar is-fixed-top ${scrollY > 0 && "scrolled"}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <img src={brand} onClick={scrollToTop} alt="brand" />
            </a>

            <button
              className={`button is-white navbar-burger burger ${isActive &&
                "is-active"}`}
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
            </button>
          </div>

          <div
            id="navbarBasicExample"
            className={`navbar-menu ${isActive ? "is-active" : ""}`}
          >
            <div className="navbar-end">
              <Link
                activeClass="is-active"
                className="navbar-item"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Home
              </Link>
              <Link
                activeClass="is-active"
                className="navbar-item"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  setIsActive(false);
                }}
              >
                About
              </Link>
              <Link
                activeClass="is-active"
                className="navbar-item"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Skills
              </Link>
              <Link
                activeClass="is-active"
                className="navbar-item"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Experience
              </Link>
              <Link
                activeClass="is-active"
                className="navbar-item"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
