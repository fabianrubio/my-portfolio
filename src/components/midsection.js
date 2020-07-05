import React from "react";
import AvatarMe from "../images/my-avatar.png";
import Skills from "./skills";
import Experience from "./experience";

const Midsection = () => (
  <>
    <section
      id="about"
      className="hero is-primary is-fullheight is-fullheight-with-navbar"
    >
      <div className="hero-head">
        <div className="container">
          <div className="has-text-centered">
            <h2 className="has-text-white">About me</h2>
            <hr className="divider light" />
          </div>
        </div>
      </div>

      <div className="hero-body">
        <div className="container center">
          <div className="columns">
            <div className="column">
              <div className="container is-narrow">
                <div className="box">
                  <div className="content">
                    <div className="columns is-centered">
                      <div className="column is-one-quarter">
                        <figure>
                          <img className="avatar" src={AvatarMe} alt="" />
                        </figure>
                      </div>

                      <div className="column">
                        <article className="media">
                          <div className="media-content">
                            <p>
                              I'm a passionate developer with almost 2 years of
                              experience building exceptional, high-quality
                              websites and applications, who loves to improve
                              his skills every day.
                            </p>

                            <blockquote>
                              <p> Imagine, code and create.</p>
                            </blockquote>

                            <p>
                              Frontend is my true passion and I really enjoy the
                              whole process of creating UIs. From the first
                              brainstorming, wireframes, mockups, design, all
                              the way until the final product.
                            </p>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Skills />

    <Experience />
  </>
);

export default Midsection;
