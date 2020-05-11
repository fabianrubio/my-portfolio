import React from "react";
import {
  FaSass,
  FaHtml5,
  FaReact,
  FaMobileAlt,
  FaRocket,
  FaOsi,
} from "react-icons/fa";

import "./style.scss";
import AvatarMe from "../images/my-avatar.png";
import Skills from "./skills";

const Midsection = () => (
  <div>
    <section class="section is-medium is-primary has-text-centered is-long">
      <div class="container">
        <div className="columns is-centered">
          <div className="column column is-three-fifths">
            <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">
              About me
            </h1>
            <hr className="divider light" />
          </div>
        </div>
      </div>
    </section>

    <section class="section content is-medium">
      <div class="container is-narrow">
        <div className="box">
          <div className="content">
            <div className="columns is-centered">
              <div class="column is-one-quarter">
                <figure>
                  <img className="avatar" src={AvatarMe} />
                </figure>
              </div>

              <div className="column">
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p className="is-size-5">
                        I'm a passionate developer with almost 2 years of
                        experience building exceptional, high-quality websites
                        and applications, who loves to improve his skills every
                        day.
                      </p>

                      <blockquote>
                        <p class="is-size-5"> Imagine, code and create.</p>
                      </blockquote>

                      <p className="is-size-5">
                        Frontend is my true passion and I really enjoy the whole
                        process of creating UIs. From the first brainstorming,
                        wireframes, mockups, design, all the way until the final
                        product.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Skills />

    {/* <section class="hero is-primary has-text-centered">
      <div class="hero-body">
        <div class="container is-narrow">
          <div className="box is-secondary">
            <div class="columns level">
              <div class="column level-item">
                <h1 class="title">Primary title</h1>
              </div>
              <div class="column level-item">
                <p>
                  Interested in working together? We should queue up a chat.
                  I’ll buy the coffee.
                </p>
              </div>
              <div class="column level-item">
                <a
                  class="button is-primary is-outlined is-rounded is-medium"
                  href="/project-planner"
                >
                  Let's do this
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    {/* <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-one-third">
            <article className="media">
              <figure className="media-left">
                <span className="icon is-medium">
                  <FaSass size="fa-2x" color="#d22780" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Sass</h1>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-third">
            <article className="media">
              <figure className="media-left">
                <span className="icon is-medium">
                  <FaHtml5 size="fa-2x" className="has-text-danger" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">HTML</h1>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-third">
            <article className="media">
              <figure className="media-left">
                <span className="icon is-medium">
                  <FaReact size="fa-2x" color="#5e227f" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">React</h1>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section> */}
  </div>
);

export default Midsection;
