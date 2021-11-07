import React, { Component } from "react";
import ReactDOM from "react-dom";
import FontAwesomeIcon from "@fortawesome/fontawesome-free";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useLocation,
  useParams

} from "react-router-dom";

import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

import RockOn from "./components/Projects/RockOn/RockOn";
import Typerspace from "./components/Projects/Typerspace/Typerspace";
import ParkTest from "./components/Projects/ParkTest/ParkTest";
import Etms from "./components/Projects/Etms/Etms";
import CompleteAndCompete from "./components/Projects/CompleteAndCompete/CompleteAndCompete";
import Design from "./components/Projects/Design/Design";
import MaskPouch from "./components/Projects/MaskPouch/MaskPouch";

import "./App.css";

function App() {

  return (
    <div>
      {/* <div className="announcement">
        <p>Welcome to my portfolio reimagined! I just couldn't wait to replace <a href="https://benlapid.us/old">v1</a> so hold tight as I finish polishing my case studies!</p>
      </div> */}
      <div className="App" id="main-container">
        <Router basename={'/'}>
          <main>

            <nav>
              <NavLink className="logo" exact to="/">
                {/*<img src={require("./img/logo.svg").default}/>*/}
              </NavLink>

              <ul className="nav__pages center">
                {/*<li>
            <NavLink className="underline-link" activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="underline-link" activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>*/}
              </ul>
            </nav>

            <Switch>
              <Route exact path="/" component={Home} />
              <body>
                <Route path="/about" component={About} />
                <Route path="/rock-on" component={RockOn} />
                <Route path="/typerspace" component={Typerspace} />
                <Route path="/park-test" component={ParkTest} />
                <Route path="/etms" component={Etms} />
                <Route path="/complete-and-compete" component={CompleteAndCompete} />
                <Route path="/design" component={Design} />
                <Route path="/mask-pouch" component={MaskPouch} />
                <Route path="/contact" component={Contact} />
              </body>

            </Switch>
          </main>

          <footer>
            <div className="footer-wrapper">
              <h3>Let's get in touch.</h3>
              <div className="footer-links-wrapper">
                <ul className="footer-links">
                  <li><a href="https://linkedin.com/in/benlapidus">LinkedIn</a></li>
                  <li><a href="https://github.com/benjaminlapidus">Github</a></li>
                  <li><a href="mailto:blapidus@u.rochester.edu">Email</a></li>
                  <li><a href="https://benlapid.us/assets/ben-lapidus-resume.pdf">Resume</a></li>
                </ul>
              </div>
              <hr style={{ width: "25%", margin: "auto", marginTop: "1em", marginBottom: "1em" }} />

              <blockquote class="blockquote"><p>In an ever-changing technological landscape, where today's platforms are not tomorrow's platforms, the key seems to be that any one of these spaces can use a dose of humanity and art and culture.</p><p>– Ze Frank</p></blockquote>
            </div>
          </footer>

        </Router>


        <div className="icon-bar">
          <a href="https://www.linkedin.com/in/benlapidus/" className="linkedin"><i className="fa fa-linkedin"></i></a>
          <a href="https://github.com/benjaminlapidus" className="github"><i className="fa fa-github"></i></a>
          <a href="https://www.benlapid.us/assets/ben-lapidus-resume.pdf" className="resume"><i className="fa fa-file"></i></a>
        </div>
      </div>
    </div>
  );
}

export default App;