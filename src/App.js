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

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

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

    <div className="App" id="main-container">
      <Router basename={'/new'}>
              <main>

      <nav>
        <NavLink className="logo" exact to="/">
          <img src={require("./img/logo.svg")} />
        </NavLink>

        <ul className="nav__pages center">
          <li>
            <NavLink className="underline-link" activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="underline-link" activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        </nav>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/rock-on" component={RockOn} />
          <Route path="/typerspace" component={Typerspace} />
          <Route path="/park-test" component={ParkTest} />
          <Route path="/etms" component={Etms} />
          <Route path="/complete-and-compete" component={CompleteAndCompete} />
          <Route path="/design" component={Design} />
          <Route path="/mask-pouch" component={MaskPouch} />
          <Route path="/contact" component={Contact} />
        </Switch>
        </main>
        <footer>
        </footer>
      </Router>


      <div className="icon-bar">
  <a href="https://www.linkedin.com/in/benjaminlapidus/" className="linkedin"><i class="fa fa-linkedin"></i></a>
  <a href="https://github.com/benjaminlapidus" className="github"><i class="fa fa-github"></i></a>
  <a href="https://www.benlapid.us/assets/ben-lapidus-resume.pdf" className="resume"><i class="fa fa-file"></i></a>
</div>
    </div>
  );
}

export default App;