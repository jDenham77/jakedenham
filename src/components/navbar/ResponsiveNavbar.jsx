import React from "react";
import "./ResponsiveNavbar.css";
import { Navbar, Nav } from "react-bootstrap";
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
              <Nav className="m-auto">
                <Nav.Link className="navLink" href="https://jdenham77.github.io/jakedenham/skills">
                  Skills
                </Nav.Link>
                <Nav.Link className="navLink" href="resume">
                  Resume
                </Nav.Link>
                <Nav.Link className="navLink" href="contact">
                  Contact
                </Nav.Link>
                <Nav.Link className="navLink" href="about">
                  About
                </Nav.Link>
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
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default ResponsiveNavbar;
