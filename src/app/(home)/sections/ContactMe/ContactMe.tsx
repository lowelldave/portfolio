import { SocialLinks } from "@/components";

import "./style.css";

const ContactMe = () => {
  return (
    <div className="contact reveal">
      <p className="eyebrow">05 — Contact</p>
      <h2 className="contact__title">
        Wanna reach <em>out?</em>
      </h2>
      <p className="contact__subtitle">
        I would love to hear anything from you. Let&apos;s have a nice chat, shall we?
      </p>

      <div className="contact__actions">
        <a href="mailto:lowell.agnir@gmail.com" className="btn btn-primary">
          Email me
        </a>
        <a href="tel:+639293767107" className="btn btn-ghost">
          (+63) 929-376-7107
        </a>
      </div>

      <SocialLinks tone="light" className="contact__socials" />
    </div>
  );
};

export default ContactMe;
