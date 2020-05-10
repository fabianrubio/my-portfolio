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
import Emoji from "./emoji";

const Midsection = () => (
  <div>
    <section class="hero is-fullheight is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Primary title</h1>
          <h2 class="subtitle">Primary subtitle</h2>
        </div>
      </div>
    </section>
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
