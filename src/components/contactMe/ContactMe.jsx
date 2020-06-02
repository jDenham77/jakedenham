import React from "react";
import "./ContactMe.css";

export default class ContactMe extends React.Component {
  render() {
    return (
      <div id="contactMe" className="contactMeCss">
        <div className="container card contactCard">
          <div className="row">
            <div className="display-3 contactTitle">Let's get in touch!</div>
          </div>
          <div className="row">
            <ul>
              <li>
                <p className="col-md-12 phone">Phone: (714) 529-2521</p>
              </li>
              <li>
                <a className="emailLink col-md-12" href="mailto:jakedenham70@gmail.com" rel="noopener noreferrer" target="_blank">
                  Send an Email
                </a>
              </li>
              <li>
                <a className="linkedLink col-md-12" href="mailto:jakedenham70@gmail.com" rel="noopener noreferrer" target="_blank">
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
