import React, { Component } from "react";
import "./contact.scss";

class Contact extends Component {
  render() {
    return (
      <div className="contactSectionFix" id="contact">
        <div className="contactSection">
          <p className="contactTitle">CONTACT WITH ME</p>
          <span className="contactUndeline" />
          <form
            className="formSection"
            method="POST"
            action="https://formspree.io/krzychu700@gmail.com"
          >
            <p className="formText">Your name:</p>
            <input
              className="formInput"
              type="text"
              name="name"
              placeholder="Your name"
            />
            <p className="formText">Your e-mail:</p>
            <input
              className="formInput"
              type="email"
              name="email"
              placeholder="Your email"
            />
            <p className="formText">Message for me:</p>
            <textarea
              className="formTextArea"
              name="message"
              placeholder="Your message"
            />
            <button className="buttonSubmit" type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
