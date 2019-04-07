import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";

class Contact extends Component {
  Recaptcha = require("react-recaptcha");

  render() {
    return (
      <div id="contact">
        <form>
          <label htmlFor="important">Your name:</label>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            value=""
            // onChange={e => props.handleText(e)}
          />
        </form>
        <ReCAPTCHA sitekey="6Lcpu5wUAAAAADlLlNG03zh3vpS0LpPC74mYzy1d" />
      </div>
    );
  }
}

export default Contact;
