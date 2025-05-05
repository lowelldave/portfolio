import React from "react";
import Link from 'next/link';

import "./style.css";

const ContactMe = () => {
  return (
    <div className="contact-me">
      <h2 className="contact-me__header">Contact Me:</h2>

      <div className="flex justify-between">
        <div className="contact-me__container">
          <label>+639293767107</label>

          <label>+639293767107</label>

          <label>+639293767107</label>
        </div>

        <div className="email-form">
          
          <a href="mailto:lowell.agnir@gmail.com">
            <label>Or Email me:</label>&gt;
          </a>
          {/* <form>
            <div>
              <label className="email-form__label" >Email</label>
              <textarea className="email-form__textarea" name="email-text" />
            </div>
            <div>
              <button type="button">Submit</button>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
