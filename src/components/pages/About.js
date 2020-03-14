import React, { Component } from "react";
import Footer from "../Footer";
import FooterNoPic from "../FooterNoPic";
// import "../styles/Allstyles.css"


class About extends Component {
  render(){
  return (
    <div>
      <div className="row">
      <div className="col-md-1"></div>

      <div className="col-md-8">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center about-me">
              About Me
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="text">
                As an avid nerd, it was only a matter of time before I was drawn into the realm of coding. I began my higher
                education working towards an electrical engineering degree, but after realizing that college wasn't right
                for me, I searched for a reasonable alternative and am currently enrolled in a coding bootcamp through
                University of Washington. This fast-paced and highly focused style of education is far more suitable for me.
              <br />
              <br />
              I enjoy problem solving, playing games, and learning. My favorite things involve all three, such as
                multiplayer strategy games.
              <br />
              <br />
              My goals are to work hard so I can play hard, and in the process, make or do something I'm proud of. As I
                  learn, I'll want to learn more. The more tools I have under my belt, the better my work will be, both in my
                  job and in my side projects.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-3 hidestuff"></div>
    </div>

      <div>
        <FooterNoPic></FooterNoPic>
      </div>
    </div>
  )};
}

export default About;
