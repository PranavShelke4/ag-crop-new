import React from "react";
import "../Style/Contact_Us.css";

function Contact_Us() {
  return (
    <div className="Contact_Us">
      <h3>Contact Us</h3>
      <form className="contact-us-form">
        <div className="form-group-inputs">
          <div className="form-side-1">
            <label htmlFor="name">First Name: </label>
            <input
              className="form-input"
              type="text"
              id="name"
              name="First Name"
            />
          </div>
          <div className="form-side-2">
            <label htmlFor="name">Last Name: </label>
            <input
              className="form-input"
              type="text"
              id="name"
              name="Last Name"
            />
          </div>
        </div>
        <label htmlFor="email">Email: </label> <br />
        <input
          className="form-input"
          type="email"
          id="email"
          name="Email"
        />
        <br />
        <label htmlFor="Phone">Phone: </label> <br />
        <input
          className="form-input"
          type="number"
          id="Phone"
          name="Phone"
        />
        <br />
        <label htmlFor="name">Company: </label> <br />
        <input
          className="form-input"
          type="text"
          id="name"
          name="Company"
        />
        <br />
        <label htmlFor="message">Describe your requirement: </label> <br />
        <textarea className="form-input" id="message" name="Message" /> <br />
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact_Us;
