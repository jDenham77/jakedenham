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
        <Route path="/jakedenham" component={Home} exact={true}></Route>
        <Route path="/skills" component={Skills} exact={true}></Route>
        <Route path="/jakedenham/resume" component={Resume} exact={true}></Route>
        <Route path="/jakedenham/contact" component={ContactMe} exact={true}></Route>
        <Route path="/jakedenham/about" component={AboutMe} exact={true}></Route>
      </div>
    </div>
  );
}

export default App;
