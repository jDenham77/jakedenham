import React from "react";
import "./AboutMe.css";

export default class AboutMe extends React.Component {
  render() {
    return (
      <div id="aboutMe" className="aboutMePg">
        <div className="container card aboutCard">
          <div className="row">
            <div className="col-md-12 aboutTitle display-3">A Brief History of Myself: </div>
            <div className="col-md-12 aboutContent text">
              My name is Jacob Denham and I'm 29 years old. I'm a full-stack developer living in Orange County, CA. I took my first computer
              science course 4 years ago, wrote "Hello World!", and have been programming ever since. Through trial and error, I started to
              see how empowering, practical, and fun programming can be. How did I get into full-stack? After understanding the basics of
              front-end, I wanted to put my knowledge to the test, So I applied for a full-stack position for the City of Los Angeles. I had
              to go through a vetting process of candidates and was one of the chosen to assist in building the application LA Pathways.
            </div>
            <div className="col-md-12 aboutContent1 text">
              While working with LA, I got to learn SQL and ASP .Net. This is where I became a full-stack developer. We worked roughly 65-70
              hours a week making sure to deliver quality content at a quick pace. I also dove into JSX and learned about the power of
              React, Babel, and Webpack. I also got to connect to other API's, for example, I've connected to Amazon S3, Google Maps API,
              and SendGrid for emails.
            </div>
            <div className="col-md-12 aboutContent2 text">
              Since my completion with the City of LA, I've been working on my MCSA (Microsoft Certified Solutions Associate) in Web
              Applications. I've completed the Microsoft 70-480 (Programming in HTML, CSS, and JS), and have the 70-486 (ASP .Net MVC)
              scheduled for 6/30/2020. Almost daily I read, "Cracking the Coding Interview" by Gayle Laakmann to work on my algorithms and
              data structures. Additionally, I've completed 3 Udemy courses; "JavaScript Algorithms and Data Structures Masterclass" by Colt
              Steele, "Complete guide to building an app with .Net Core and React" by Neil Cummings, and "Querying Microsoft SQL Server with
              Transact-SQL" by Phillip Burton.
            </div>
            <div className="col-md-12 aboutContent3 text">
              “Those people who develop the ability to continuously acquire new and better forms of knowledge that they can apply to their
              work and to their lives will be the movers and shakers in our society for the indefinite future.” – Brain Tracy
            </div>
          </div>
        </div>
      </div>
    );
  }
}
