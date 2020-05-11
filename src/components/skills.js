import React from "react";

import Angular from "../images/svg/angular.svg";
import Bootstrap from "../images/svg/bootstrap-4.svg";
import Css from "../images/svg/css.svg";
import Gatsby from "../images/svg/gatsby.svg";
import Html from "../images/svg/html5.svg";
import JavaScript from "../images/svg/javascript.svg";
import TypeScript from "../images/svg/typescript.svg";
import Storybook from "../images/svg/storybook-icon.svg";
import Vue from "../images/svg/vue.svg";
import ReactJs from "../images/svg/react.svg";
import ReduxLibrary from "../images/svg/redux.svg";
import Bulma from "../images/svg/bulma.svg";
import VSCode from "../images/svg/vs-code.svg";
import Npm from "../images/svg/npm.svg";
import Yarn from "../images/svg/yarn.svg";
import Sass from "../images/svg/sass.svg";
import Docker from "../images/svg/docker.svg";
import Figma from "../images/svg/figma.svg";
import Firebase from "../images/svg/firebase.svg";
import Adobe from "../images/svg/adobe-xd.svg";

import "./style.scss";

const Skills = () => (
  <div>
    <section class="section is-medium is-primary has-text-centered is-long">
      <div class="container">
        <div className="columns is-centered">
          <div className="column column is-three-fifths">
            <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">
              Skills & Tools
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
            <div className="is-centered">
              <div className="columns is-multiline">
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={JavaScript} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">JavaScript</h1>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={TypeScript} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">TypeScript</h1>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={Html} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">HTML</h1>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={Css} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">CSS</h1>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="columns is-multiline">
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={Angular} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Angular</h1>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={Vue} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Vue</h1>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={ReactJs} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">React</h1>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={ReduxLibrary} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Redux</h1>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="columns is-multiline">
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={Bootstrap} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Bootstrap</h1>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={Bulma} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Bulma</h1>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={Gatsby} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Gatsby</h1>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={Storybook} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Storybook</h1>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="columns is-multiline">
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={Npm} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Npm</h1>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={Yarn} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Yarn</h1>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={VSCode} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Visual Studio Code</h1>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={Sass} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Sass</h1>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="columns is-multiline">
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={Adobe} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Adobe XD</h1>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={Figma} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Figma</h1>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={Docker} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Docker</h1>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-half is-one-quarter-widescreen">
                  <article className="media">
                    <figure className="media-left">
                      <span className="icon is-large">
                        <img src={Firebase} />
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Firebase</h1>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Skills;
