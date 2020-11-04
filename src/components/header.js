import React from 'react';
import FrontendDesigner from '../images/frontend-designer.svg';
import Navbar from './navbar';
import { scroller } from 'react-scroll';
import { StaticQuery, graphql } from 'gatsby';

const scrollTo = () => {
  scroller.scrollTo('contact', {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset: -70,
  });
};

function Header() {
  return (
    <StaticQuery
      query={graphql`
        query resumeQuery {
          site {
            siteMetadata {
              urlResume
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Navbar />
          <section
            id='home'
            className='hero is-fullheight is-fullheight-with-navbar'
          >
            <div className='hero-body'>
              <div className='container center'>
                <div className='columns'>
                  <div className='column is-half'>
                    <h4>Hey 👋 I'm</h4>
                    <h1 className='has-text-primary'>Fabian Rubio</h1>
                    <h2>I'm Front-End Developer.</h2>
                    <br />
                    <h4 className='field'>
                      Specializing in building awesome, high-quality websites,
                      applications and everything in between.
                    </h4>

                    <div className='level'>
                      <div className='level-left'>
                        <div className='level-item'>
                          <button
                            onClick={scrollTo}
                            className='button is-primary is-rounded is-outlined'
                          >
                            Hire me
                          </button>
                        </div>
                        <div className='level-item'>
                          <a
                            target='_black'
                            rel='noopener noreferrer'
                            href={data.site.siteMetadata.urlResume}
                            className='button is-primary is-rounded is-outlined'
                          >
                            Resume
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='column'>
                    <img src={FrontendDesigner} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    />
  );
}

export default Header;
