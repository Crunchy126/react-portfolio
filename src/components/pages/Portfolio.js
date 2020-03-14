import React, { Component } from "react";
import PigBank from "../../pictures/Pig-E-Bank.PNG";
import Webgen from "../../pictures/webgen.JPG";
import Cibus from "../../pictures/Cibus.JPG";
import FooterNoPic from "../FooterNoPic";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center about-me">Portfolio</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2"></div>

              <div className="col-md-4 images">
                <p className="text-center text-pink">Pig E-Bank</p>
                <a
                  href="https://ajrsabet.github.io/Screen_Time_Tracker/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={PigBank} className="img-fluid" alt="Responsive" />
                </a>
                <a
                  className="git-link"
                  href="https://github.com/ajrsabet/Screen_Time_Tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link to the Github repository
                </a>
              </div>

              <div className="col-md-4 images">
                <p className="text-center text-pink">Cibus</p>
                <a href="https://cibusapp.herokuapp.com" target="_blank">
                  <img
                    src={Cibus}
                    className="img-fluid"
                    alt="Responsive"
                    rel="noopener noreferrer"
                  />
                </a>
                <a
                  className="git-link"
                  href="https://github.com/Javeyn/Cibus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link to the Github repository
                </a>
              </div>

              <div className="col-md-2"></div>
            </div>

            <div className="row margin-bottom">
              <div className="col-md-2"></div>

              <div className="col-md-4 images">
                <p className="text-center text-pink">Webgen</p>
                <a
                  href="https://webgen2020.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Webgen} className="img-fluid" alt="Responsive" />
                </a>
                <a
                  className="git-link"
                  href="https://github.com/rafaykhawar09/WebGen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link to the Github repository
                </a>
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>

        <div>
          <FooterNoPic></FooterNoPic>
        </div>
      </div>
    );
  }
}

export default Portfolio;
