import React, { Component } from "react";
import "./contact.scss";

class Contact extends Component {
  render() {
    return (
      <div className="contactSectionFix" id="contact">
        <div className="contactSection">
          <p className="contactTitle">{this.props.text.contactTxt1} </p>
          <span className="contactUndeline" />
          <form
            className="formSection"
            method="POST"
            action="https://formspree.io/krzychu700@gmail.com"
          >
            <p className="formText">{this.props.text.contactTxt2} </p>
            <input
              className="formInput"
              type="text"
              name="name"
              placeholder={this.props.text.contactTxt2}
            />
            <p className="formText">{this.props.text.contactTxt3} </p>
            <input
              className="formInput"
              type="email"
              name="email"
              placeholder={this.props.text.contactTxt3}
            />
            <p className="formText"> {this.props.text.contactTxt4}</p>
            <textarea
              className="formTextArea"
              name="message"
              placeholder={this.props.text.contactTxt4}
            />
            <button className="buttonSubmit" type="submit">
              {this.props.text.contactTxt5}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
