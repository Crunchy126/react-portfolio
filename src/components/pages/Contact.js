import React, { Component } from "react";
import FooterNoPic from "../FooterNoPic";


class Contact extends Component {
  render(){
  return (
    <div>
      <div class="row ">
      <div class="col-md-12">
        <h1 class="text-center about-me">
          Contact
        </h1>
      </div>
      <div class="row">
        <div class="col-md-12 contactbody">

          <div class="row">

            <div class="col-md-2">
            </div>
            <div class="col-md-3 text-pink">
              <p>Github Profile Page:</p>
              <a href="https://github.com/Crunchy126" target="_blank" rel="noopener noreferrer">Crunchy126</a>
            </div>

            <div class="col-md-2">
            </div>

            <div class="col-md-3 text-pink">
              <p>Linkin Profile Page:</p>
              <a href="https://www.linkedin.com/in/liam-hayes-619813195/" target="_blank" rel="noopener noreferrer">Liam Hayes</a>
            </div>
      
            <div class="col-md-2">
            </div>
          </div>

          <br/>
          <br/>
          <br/>

          <div class="row text-pink">
            <div class="col-md-2">
            </div>
            <div class="col-md-4">
              <p>
                Email address: liamh1267@gmail.com
              </p>
            </div>
            <div class="col-md-4">
              <p>
                Phone Number: 314 800 3339
              </p>
            </div>

          </div>
          <div class="contactbottom">
          </div>
        </div>

      </div>
    </div>

    <div>
    <FooterNoPic></FooterNoPic>
    </div>

  </div>
  )};
}

export default Contact;
