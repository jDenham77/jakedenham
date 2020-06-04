import React from "react";
import "./ResponsiveNavbar.css";
import { Navbar } from "react-bootstrap";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";

class ResponsiveNavbar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "home",
      active: false,
    };
  }
  goToContactMe = () => {
    this.props.history.push("/contact");
  };
  render() {
    return (
      <div className="navBar">
        <Navbar collapseOnSelect expand="lg" bg="dark">
          <div className="container">
            <Navbar.Brand className="name" href="/jakedenham">
              Jacob Denham
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <nav className="m-auto">
                <button className="navLink" onClick={this.goToContactMe}>
                  Skills
                </button>
                <button className="navLink">Resume</button>
                <button className="navLink" href="/jakedenham/contact">
                  Contact
                </button>
                <button className="navLink" href="/about">
                  About
                </button>
                <div className="float-right linkedBorder">
                  <IconButton
                    className="linkedInBtn"
                    aria-label="Linkedin.com"
                    onClick={() => window.open("https://www.linkedin.com/in/jacob-denham-83400a199/")}
                  >
                    <LinkedInIcon className="linkedInIcon" style={{ fontSize: 40 }} />
                  </IconButton>
                </div>
                <div className="float-right gitBorder">
                  <IconButton
                    className="gitHubBtn"
                    aria-label="Github.com"
                    onClick={() => window.open("https://github.com/jDenham77/LA-Pathways")}
                  >
                    <GitHubIcon className="gitHubIcon" style={{ fontSize: 35 }} />
                  </IconButton>
                </div>
              </nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default ResponsiveNavbar;
