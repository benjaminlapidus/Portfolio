import React, { Component, useEffect } from "react";
import "aos/dist/aos.css";
import Badge from 'react-bootstrap/Badge'
import AOS from "aos";

import "./Home.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 250,
      disable: "mobile",
      offset: 25,
      easing: "ease-in-out-quart",
    });
  }, []);
  return (
    <div>
      <div className="Home">
        <h1>Hi there!</h1>
        <h2>I'm Ben.</h2>
        <div className="home__description">
          <p>
            I'm a senior <span>@TheUniversityOfRochester</span> pursuing a
            double major in computer science and economics.
          </p>
          <p>
            Currently an intern <span>@GeneralMotors</span> helping to develop
            the best in-car speech recognition tools.
          </p>
        </div>
        <p className="button-wrapper">
          <a href="#work" className="btn-1">
            Check out my work<i className="button-icon fa fa-chevron-left"></i>
          </a>
        </p>
      </div>

      <article className="SelectedWork">
        <a id="work"></a>
        <h3>Selected Work</h3>
        <ol>
          <li>
            {" "}
            <div data-aos="fade-up">
              <section className="SelectedWork__card">
                <div className="SelectedWork__container">
                  <div className="row">
                    <div className="double-column">
                      <img
                        src={require("./../../img/profile-revolutionary.png")}
                      />
                    </div>
                    <div className="column SelectedWord__information">
                      <h4>Rock On</h4>
                      <div className="md-chips">
                        <div class="md-chip">React</div>
                        <div class="md-chip">CSS</div>
                        <div class="md-chip">JavaScript</div>
                        <div class="md-chip">JSX</div>
                        <div class="md-chip">Personal Project</div>
                      </div>
                      <p className="SelectedWord__description">
                        Rock On is a web-based quiz that allows users to sign
                        into their Spotify account. Then,{" "}
                        <strike> thanks to hours of work</strike> automagically,
                        a custom quiz is generated based on the user's listening
                        habits.
                      </p>
                      <div className="links">
                        
                        <a className="underline_link" href="https://github.com/bashcorp/spotifyquiz">
                          Source Code →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </li>
          <li>
            {" "}
            <div data-aos="fade-up">
              <section className="SelectedWork__card">
                <div className="SelectedWork__container">
                  <div className="row">
                    <div className="double-column">
                      <img
                        src={require("./../../img/profile-revolutionary.png")}
                      />
                    </div>
                    <div className="column SelectedWord__information">
                      <h4>Typerspace</h4>
                      <div className="md-chips">
                        <div class="md-chip">React</div>
                        <div class="md-chip">CSS</div>
                        <div class="md-chip">JavaScript</div>

                        <div class="md-chip">Heroku</div>
                        <div class="md-chip">Hackathon</div>
                      </div>
                      <p className="SelectedWord__description">
                        j - f - j - f - j - f - j - f - j - f...
                        <br />
                        <br />
                        Practicing typing is mundane and boring. Typerspace
                        modernizes typing practice by allowing users to train
                        alongside their favorite YouTube videos.
                      </p>
                      <div className="links">
                        
                        <a className="underline_link" href="https://github.com/benjaminlapidus/typerspace">
                          Source Code →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </li>
          <li>
            {" "}
            <div data-aos="fade-up">
              <section className="SelectedWork__card">
                <div className="SelectedWork__container">
                  <div className="row">
                    <div className="double-column">
                      <img
                        src={require("./../../img/profile-revolutionary.png")}
                      />
                    </div>
                    <div className="column SelectedWord__information">
                      <h4>PARK Viz</h4>
                      <div className="md-chips">
                        <div class="md-chip">React</div>
                        <div class="md-chip">Product Design</div>
                      </div>
                      <p className="SelectedWord__description">
                        PARK Viz is a contribution to the PARK Study at the
                        University of Rochester Human-Computer Interaction Lab.
                        The aim is to identify, monitor, and visualize symptoms
                        of Parkinson's disease on any web-enabled device.
                      </p>
                      <div className="links">
                        <a
                          className="underline_link"
                          target="_blank"
                          href="https://sites.google.com/u.rochester.edu/park-viz/home?authuser=0"
                        >
                          Case Study + Demo →
                        </a>
                        <a
                          className="underline_link"
                          target="_blank"
                          href="https://github.com/park-viz/park-viz"
                        >
                          Source Code →
                        </a>
                        <a
                          className="underline_link"
                          target="_blank"
                          href="https://parktest.net/about.html"
                        >
                          About the PARK Study →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </li>
          <li>
            {" "}
            <div data-aos="fade-up">
              <section className="SelectedWork__card">
                <div className="SelectedWork__container">
                  <div className="row">
                    <div className="double-column">
                      <img
                        src={require("./../../img/profile-revolutionary.png")}
                      />
                    </div>
                    <div className="column SelectedWord__information">
                      <h4>E.T.M.S.</h4>
                      <div className="md-chips">
                        <div class="md-chip">React</div>
                        <div class="md-chip">Full-stack</div>
                        <div class="md-chip">CSS</div>
                        <div class="md-chip">Java Spring</div>
                        <div class="md-chip">Hibernate</div>
                      </div>
                      <p className="SelectedWord__description">
                        The Employee Training Management System is an internal
                        tool developed for the Clerk's Office at the U.S.
                        Bankruptcy Court. It maintained a log of training
                        courses, individual training records, and multiple
                        access levels (plus dark mode!)
                      </p>
                      <div className="links">
                        <a className="underline_link" href="www.google.com">
                          Case Study →
                        </a>
                        <a
                          className="underline_link"
                          href="https://github.com/benjaminlapidus/ETMS-v2"
                        >
                          Source Code →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </li>
          <li>
            {" "}
            <div data-aos="fade-up">
              <section className="SelectedWork__card">
                <div className="SelectedWork__container">
                  <div className="row">
                    <div className="double-column">
                      <img
                        src={require("./../../img/profile-revolutionary.png")}
                      />
                    </div>
                    <div className="column SelectedWord__information">
                      <h4>Complete & Compete</h4>
                      <div className="md-chips">
                        <div class="md-chip">Big Data</div>
                        <div class="md-chip">Web Development</div>
                      </div>
                      <p className="SelectedWord__description">
                        Amid the coronavirus pandemic, the Complete & Compete
                        challenge was a program designed to incentivize students
                        to complete a daily health screening.
                      </p>
                      <div className="links">
                        <a className="underline_link" href="www.google.com">
                          Case Study →
                        </a>
                        <a
                          className="underline_link"
                          target="_blank"
                          href="https://www.rochester.edu/college/wcsa/programs/complete-and-compete.html"
                        >
                          Live Website →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </li>
          <li>
            {" "}
            <div data-aos="fade-up">
              <section className="SelectedWork__card">
                <div className="SelectedWork__container">
                  <div className="row">
                    <div className="double-column">
                      <img
                        src={require("./../../img/profile-revolutionary.png")}
                      />
                    </div>
                    <div className="column SelectedWord__information">
                      <h4>Mask Pouch</h4>
                      <div className="md-chips">
                        <div class="md-chip">Product Design</div>
                        <div class="md-chip">User Research</div>
                      </div>
                      <p className="SelectedWord__description">
                        Spot On is a web-based quiz that allows users to sign
                        into their Spotify account. Then,{" "}
                        <strike> thanks to hours of work</strike> automagically,
                        a custom quiz is generated based on the user's listening
                        habits.
                      </p>
                      <div className="links">
                        <a className="underline_link" href="www.google.com">
                          Case Study →
                        </a>
                        <a className="underline_link" href="www.google.com">
                          Live Demo →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </li>
          <li>
            {" "}
            <div data-aos="fade-up">
              <section className="SelectedWork__card">
                <div className="SelectedWork__container">
                  <div className="row">
                    <div className="double-column">
                      <img
                        src={require("./../../img/profile-revolutionary.png")}
                      />
                    </div>
                    <div className="column SelectedWord__information">
                      <h4>NuclearNana</h4>
                      <div className="md-chips">
                        <div class="md-chip">Product Design</div>
                        <div class="md-chip">User Research</div>
                      </div>
                      <p className="SelectedWord__description">
                        Spot On is a web-based quiz that allows users to sign
                        into their Spotify account. Then,{" "}
                        <strike> thanks to hours of work</strike> automagically,
                        a custom quiz is generated based on the user's listening
                        habits.
                      </p>
                      <div className="links">
                        <a className="underline_link" href="www.google.com">
                          Case Study →
                        </a>
                        <a className="underline_link" href="www.google.com">
                          Live Demo →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </li>
        </ol>
      </article>
    </div>
  );
}

export default Home;