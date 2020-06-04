import React from "react";
import "./App.css";
import ResponsiveNavbar from "./components/navbar/ResponsiveNavbar.jsx";
import { Route } from "react-router-dom";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import ContactMe from "./components/contactMe/ContactMe";
import Resume from "./components/resume/Resume";
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <ResponsiveNavbar />
      <div>
        <Route path="/home" component={Home} exact={true}></Route>
        <Route path="/skills" component={Skills} exact={true}></Route>
        <Route path="/resume" component={Resume} exact={true}></Route>
        <Route path="/contact" component={ContactMe} exact={true}></Route>
        <Route path="/about" component={AboutMe} exact={true}></Route>
      </div>
    </div>
  );
}

export default App;
