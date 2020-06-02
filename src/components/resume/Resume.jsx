import React, { Component } from "react";
import "./Resumes.css";
import { Document, Page, pdfjs } from "react-pdf";
import MyResume from "./MyResume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class App extends Component {
  state = { pageNumber: 1 };

  render() {
    return (
      <div className="resumePg container-fluid">
        <div className="card container resumeCard">
          <div className="row">
            <div className="display-3 title1">Resume</div>
            <p className="resInfo">
              Here's a canvas of my resume that I uploaded. If you would like to download an official Microsoft Word Document, please visit
              my
              <a href="linkedin.com/in/jacob-denham-83400a199" className="linkedInRes">
                Linkedin
              </a>{" "}
              page.
            </p>
          </div>
        </div>
        <div className="resume">
          <Document file={MyResume} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={this.state.pageNumber} />
          </Document>
        </div>
      </div>
    );
  }
}
