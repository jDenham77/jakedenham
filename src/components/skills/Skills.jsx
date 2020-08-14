import React from "react";
import "./Skills.css";
import Ajax from "./skillsImages/ajax.png";
import ReactJs from "./skillsImages/react.png";
import Azure from "./skillsImages/azure.png";
import Bootstrap from "./skillsImages/bootstrap.png";
import CSharp from "./skillsImages/cSharp.png";
import Css from "./skillsImages/css.png";
import Git from "./skillsImages/git.png";
import GoogleAnalytics from "./skillsImages/googleAnalytics.png";
import Html from "./skillsImages/html.png";
import Javascript from "./skillsImages/javascript.png";
import JQuery from "./skillsImages/jQuery.png";
import Json from "./skillsImages/json.png";
import Mvc from "./skillsImages/mvc.png";
import NetCore from "./skillsImages/netCore.png";
import NodeJs from "./skillsImages/nodeJs.png";
import Npm from "./skillsImages/npm.png";
import Postman from "./skillsImages/postman.png";
import RestApi from "./skillsImages/restApi.png";
import Sql from "./skillsImages/sql.png";
import Tfs from "./skillsImages/tfs.png";
import VisualStudio from "./skillsImages/visualStudio.png";
import VisualStudioCode from "./skillsImages/visualStudioCode.png";
import Xml from "./skillsImages/xml.png";
import Yarn from "./skillsImages/yarn.png";

export default class Skills extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="skills " className="skillsPg">
          <div className="container card skillsCard" id="skillsDetails">
            <div className="row">
              <div className="display-3 title">Skillset </div>
              <p className="card-text skillsInfo">
                This page consists of an overview of the languages, frameworks, libraries and softwares
                that I'm currently using.
              </p>
            </div>
          </div>
          <div className="container allImages card" id="skillsImages">
            <div className="container container1">
              <div className="row">
                <img
                  src={ReactJs}
                  onClick={() => window.open("https://reactjs.org/")}
                  alt="react"
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                />
                <img
                  src={Javascript}
                  onClick={() => window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript")}
                  alt="javascript"
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                />
                <img
                  src={CSharp}
                  onClick={() => window.open("https://docs.microsoft.com/en-us/dotnet/csharp/")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                />
                <img
                  src={Html}
                  onClick={() => window.open("https://html.spec.whatwg.org/multipage/")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                />
                <img
                  src={NetCore}
                  onClick={() => window.open("https://docs.microsoft.com/en-us/dotnet/core/")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                />
                <img
                  src={Sql}
                  onClick={() => window.open("https://docs.microsoft.com/en-us/sql/sql-server/")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                />
              </div>
            </div>
            <div className="container container2">
              <div className="row">
                <img
                  src={Css}
                  onClick={() => window.open("https://developer.mozilla.org/en-US/docs/Web/CSS")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>
                <img
                  src={Mvc}
                  onClick={() =>
                    window.open("https://docs.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started")
                  }
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>
                <img
                  src={NodeJs}
                  onClick={() => window.open("https://nodejs.org/en/docs/")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>
                <img
                  src={JQuery}
                  onClick={() => window.open("https://api.jquery.com/")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>
                <img
                  src={Bootstrap}
                  onClick={() => window.open("https://getbootstrap.com/")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>
                <img
                  src={Json}
                  onClick={() => window.open("https://www.json.org/json-en.html")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>
              </div>
            </div>
            <div className="container container3">
              <div className="row">
                <img
                  src={Git}
                  onClick={() => window.open("https://git-scm.com/doc")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>
                <img
                  src={Tfs}
                  onClick={() =>
                    window.open(
                      "https://docs.microsoft.com/en-us/archive/msdn-magazine/2007/january/team-system-team-foundation-server-version-control",
                    )
                  }
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>
                <img
                  src={Npm}
                  onClick={() => window.open("https://docs.npmjs.com/")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>
                <img
                  src={Yarn}
                  onClick={() => window.open("https://classic.yarnpkg.com/en/docs/")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>
                <img
                  src={Ajax}
                  onClick={() => window.open("https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>
                <img
                  src={RestApi}
                  onClick={() => window.open("https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>
              </div>
            </div>
            <div className="container container4">
              <div className="row">
                <img
                  src={VisualStudio}
                  onClick={() => window.open("https://docs.microsoft.com/en-us/visualstudio/?view=vs-2019")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>
                <img
                  src={Postman}
                  onClick={() => window.open("https://learning.postman.com/docs/postman/launching-postman/introduction/")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>
                <img
                  src={Xml}
                  onClick={() => window.open("https://docs.oc.tc/")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>
                <img
                  src={Azure}
                  onClick={() => window.open("https://docs.microsoft.com/en-us/azure/?product=featured")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>

                <img
                  src={VisualStudioCode}
                  onClick={() => window.open("https://docs.microsoft.com/en-us/visualstudio/?view=vs-2019")}
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>
                <img
                  src={GoogleAnalytics}
                  onClick={() =>
                    window.open(
                      "https://static.googleusercontent.com/media/www.google.com/en//grants/education/Google_Analytics_Training.pdf",
                    )
                  }
                  alt=""
                  className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 shakeIt "
                ></img>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
