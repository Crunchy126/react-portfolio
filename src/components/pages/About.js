import React, { Component } from "react";
// import Footer from "../Footer";
import FooterNoPic from "../FooterNoPic";


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
                I am an entry level front and/or back end developer with 3+ months of full-time training in the field.I've always enjoyed problem solving ever since I was a kid, and after years of honing those skills, I provide much more than my familiarity with JavaScript and many associated technologies.
              <br />
              <br />
                I began my higher education working towards an electrical engineering degree, but after realizing that college wasn't right for me, I searched for a reasonable alternative and began learning web development. This field is challenging and always growing, so naturally I was drawn to it.                
              <br />
              <br />
                My goals are to work hard so I can play hard, and in the process, make or do things that I'm proud of. As I
                learn, I'll want to learn more. The way I see it, the more tools I have under my belt, the better my work will be both in my job and in my side projects.
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
