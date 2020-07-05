import React from "react";

const Experience = () => (
  <>
    <section className="hero is-fullheight is-fullheight-with-navbar">
      <div id="experience">
        <div className="hero-head">
          <div className="container">
            <div className="has-text-centered">
              <h2>Experience</h2>
              <hr className="divider" />
            </div>
          </div>
        </div>

        <div className="hero-body">
          <div className="container experience">
            <div className="container is-narrow">
              <div className="box">
                <div className="content">
                  <div className="columns">
                    <div className="column">
                      <p>
                        <strong className="has-text-primary">Lumbrera</strong>
                      </p>
                      <p>Jul 2019 - Jul 2020</p>
                      <ul>
                        <li>
                          Write modern, performant, maintainable code for a
                          diverse array of client and internal projects.
                        </li>
                        <li>
                          Work with a variety of different languages,
                          frameworks, platforms, and content management systems
                          such as JavaScript, TypeScript, React and Vue.
                        </li>
                        <li>
                          Communicate with multi-disciplinary teams of
                          developers and ux designers on a daily basis.
                        </li>
                      </ul>
                    </div>
                    <div className="column">
                      <p>
                        <strong className="has-text-primary">
                          Expertos en Sistemas S. C.
                        </strong>
                      </p>
                      <p>Dec 2018 - Jul 2019</p>
                      <ul>
                        <li>
                          Worked with a small team to build a platform for the
                          management of vehicle leasing of the Tip Mexico, a
                          leading company in the leasing and administration of
                          transportation equipment in Mexico.
                        </li>
                        <li>
                          Contributed extensively to Digital Leasing, developing
                          UI views and using APIs to connect REST-based
                          services.
                        </li>
                        <li>
                          Communicate with multi-disciplinary teams of
                          developers.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Experience;
