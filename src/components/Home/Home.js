import React, { Component, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import "./Home.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 250,
      disable: "mobile",
      offset: 0,
      easing: "ease-in-out-quart",
    });
  }, []);
  return (
    <div>
      <div className="row">
        <div className="column left Home">
          <h1>Hi there!</h1>
          <h2>I'm Ben.</h2>
          <div className="home__description">
            <p>
              I'm a senior <span>@TheUniversityOfRochester</span> pursuing a
              double major in computer science and economics.
            </p>
            <p>
              Recently completed an internship <span>@GeneralMotors</span> helping to
              create the best in-car speech recognition.
            </p>
          </div>
          <p>
            <a href="#work" className="btn-1">
              Check out my work<i className="button-icon fa fa-chevron-left"></i>
            </a>
          </p>
        </div>
        <div id="hide-on-small" className="column right">
          <figure >
            <img className="hero-img" style={{ height: "350px" }} alt="Abstract semi-transparent, purple and blue orb" src={require("./../../img/abstract.webp").default} />
          </figure>

        </div>
      </div>

      <article className="SelectedWork">
        <a id="work"></a>
        <h3>Selected Work</h3>
        <ol className="numberAccentWrapper">
          <li>
            {" "}
            <div data-aos="fade-up">
              <section className="SelectedWork__card">
                <div className="SelectedWork__container">
                  <div className="row">
                    <div className="double-column">
                      <img
                        src={require("./../../img/GM-logo.webp").default} alt="General Motors logo" />
                    </div>
                    <div className="column SelectedWord__information">
                      <h4>Automated Audio Validation</h4>
                      <div className="md-chips">
                        <div className="md-chip">JavaScript</div>
                        <div className="md-chip">Perl</div>
                        <div className="md-chip">Bootstrap</div>
                        <div className="md-chip">ChartJS</div>
                        <div className="md-chip">SQL</div>
                      </div>
                      <p className="SelectedWord__description">
                        During an internship at General Motors, I created a tool to validation over 1.2 million audio files to clean a database valued at several million dollars. Although the details of the project are confidential, my role persisted through the entire process. From interviewing stakeholders to outlining requirements to building the front and backend.
                      </p>

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
                        src={require("./../../img/sa.webp").default} alt="Student association logo" />
                    </div>
                    <div className="column SelectedWord__information">
                      <h4>Student Government Redesign</h4>
                      <div className="md-chips">

                        <div className="md-chip">PHP</div>
                        <div className="md-chip">JavaScript</div>
                        <div className="md-chip">jQuery</div>
                        <div className="md-chip">Web Design</div>
                        <div className="md-chip">HTML</div>
                        <div className="md-chip">CSS</div>
                        <div className="md-chip">Bootstrap</div>
                        <div className="md-chip">Wordpress</div>
                      </div>
                      <p className="SelectedWord__description">
                        I'm currently redesigning and building a new website for the student association at the University of Rochester. I designed and built a custom Wordpress theme and I'm pushing for release by the end of the semester. In the meantime, check out some early iterations.
                      </p>
                      <div className="links">
                        <a className="underline_link" rel="noreferrer" target="_blank" href="https://www.figma.com/file/pjaefT344DOd3dczlXTTS8/SA_Redesign?node-id=0%3A1">
                          Wireframe →
                        </a>
                        <a className="underline_link" rel="noreferrer" target="_blank" href="https://benlapidus.digitalscholar.rochester.edu/sa_redesign/html/">
                          Low fidelity prototype →
                        </a>
                        <a className="underline_link case-study" href="#">
                          Deployed →
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
                        src={require("./../../img/park-viz-logo.webp").default} alt="Logo of a minimalistic leaf inside a circle" />
                    </div>
                    <div className="column SelectedWord__information">
                      <h4>PARK Viz</h4>
                      <div className="md-chips">
                        <div className="md-chip">React</div>
                        <div className="md-chip">Product Design</div>
                      </div>
                      <p className="SelectedWord__description">
                        PARK Viz is a contribution to the PARK Study at the
                        University of Rochester Human-Computer Interaction Lab.
                        The aim is to identify, monitor, and visualize symptoms
                        of Parkinson's disease on any web-enabled device.
                      </p>
                      <div className="links">
                        <a
                          className="underline_link" rel="noreferrer"
                          target="_blank"
                          href="https://sites.google.com/u.rochester.edu/park-viz/home?authuser=0"
                        >
                          Case Study + Demo →
                        </a>
                        <a
                          className="underline_link" rel="noreferrer"
                          target="_blank"
                          href="https://github.com/park-viz/park-viz"
                        >
                          Source Code →
                        </a>
                        <a
                          className="underline_link" rel="noreferrer"
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
                        src={require("./../../img/dr-chatbot-logo_transparent.webp").default} alt="Shield reading Complete and Compete Dr. Chat Bot in front of coronavirus images" />
                    </div>
                    <div className="column SelectedWord__information">
                      <h4>Complete & Compete</h4>
                      <div className="md-chips">
                        <div className="md-chip">Big Data</div>
                        <div className="md-chip">HTML</div>
                        <div className="md-chip">CSS</div>
                        <div className="md-chip">Foundation 5</div>

                      </div>
                      <p className="SelectedWord__description">
                        Amid the coronavirus pandemic, I helped to Complete & Compete
                        challenge was a program designed to incentivize students
                        to complete a daily health screening. I was responsible for all things digital; created weekly reports summarizing 10,000+ screening results, designed and created the website, and built a weighted randomizer to draw names.
                      </p>
                      <div className="links">
                        <a className="underline_link" rel="noreferrer" target="_blank" href="./assets/C&C-Program-Summary.pdf">
                          Summary →
                        </a>
                        <a
                          className="underline_link" rel="noreferrer"
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
                        src={require("./../../img/banana-homepage.webp").default}
                        alt="Colorful website displayed on laptop monitor"
                      />
                    </div>
                    <div className="column SelectedWord__information">
                      <h4>NuclearNana</h4>
                      <div className="md-chips">
                        <div className="md-chip">Web development</div>
                        <div className="md-chip">React</div>
                        <div className="md-chip">Side project</div>
                        <div className="md-chip">Work in progress</div>
                      </div>
                      <p className="SelectedWord__description">
                        A chest x-ray exposes patients to about .1 millisieverts. So... what does that mean?
                        NuclearNana is an interactive experience designed to break down barriers in understanding radiation.
                      </p>
                      <div className="links">
                        <a className="underline_link" rel="noreferrer" target="_blank" href="https://github.com/benjaminlapidus/howmanybananas">
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
                        src={require("./../../img/profile-court.webp").default}
                        alt="Brown webpage with government logo displayed on desktop monitor"
                      />

                    </div>
                    <div className="column SelectedWord__information">
                      <h4>E.T.M.S.</h4>
                      <div className="md-chips">
                        <div className="md-chip">React</div>
                        <div className="md-chip">Full-stack</div>
                        <div className="md-chip">CSS</div>
                        <div className="md-chip">Java Spring</div>
                        <div className="md-chip">Hibernate</div>
                      </div>
                      <p className="SelectedWord__description">
                        The Employee Training Management System is an internal
                        tool developed for the Clerk's Office at the U.S.
                        Bankruptcy Court. It maintained a log of training
                        courses, individual training records, and multiple
                        access levels (plus dark mode!)
                      </p>
                      <div className="links">
                        <a
                          className="underline_link" rel="noreferrer" target="_blank"
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
        </ol>
      </article>
    </div>
  );
}

export default Home;