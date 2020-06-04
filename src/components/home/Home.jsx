import React from "react";
import "./Home.css";
import Img from "./backgroundImg.png";

export default class Home extends React.Component {
  goToContactMe = () => {
    this.props.history.push("/contact");
  };
  goToResume = () => {
    this.props.history.push("/resume");
  };
  render() {
    return (
      <React.Fragment>
        <img src={Img} alt="Background" className="" />
        <div id="home" className="container-fluid homePg">
          <div className="row justify-content-center">
            <p className="dev">DEVELOPER.</p>
          </div>
          <div className="row justify-content-center">
            <button className="btn btn-secondary col-xl-3 col-lg-3 col-md-3 contactBtn" onClick={this.goToContactMe}>
              Contact Me
            </button>
            <button className="btn btn-secondary col-xl-3 col-lg-3 col-md-3 resumeBtn" onClick={this.goToResume}>
              Resume
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
