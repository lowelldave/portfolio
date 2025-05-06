import React from "react";
import Link from 'next/link';

import type { ISocialItem } from '@/types/data.type';

import LinkItem from '../Hero/LinkItem';
import "./style.css";

const ContactMe = ({ data }: { data: ISocialItem[] }) => {

  return (
    <div className="contact-me">
      <h2 className="contact-me__header">Wanna reach out?</h2>
      <p className="contact-me__subheader">I would love to hear anything from you. <br /> Let's have a nice chat, shall we?</p>

      <div className="contact-me__content">
        <div className="contact-me__container">
          <div className="contact-me__detail-group">
            <label>Contact me through:</label>
            <label className="font-bold">(+63) 929-376-7107</label>
          </div>

          <div className="contact-me__detail-group">
            <label>or through my socials:</label>
            <div className="contact-me__social-wrapper">
              {data.map((item) => <LinkItem data={item} key={`link-${item.name}`} />)}
            </div>
          </div>
        </div>

        <div className="contact-me__divider">
          <label className="contact-me__divider-text">OR</label>
        </div>

        <div className="contact-me__email-form">
          <a href="mailto:lowell.agnir@gmail.com" className="contact-me__email-button">
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
