import { SocialLinks } from "@/components";

import "./style.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <p className="eyebrow hero__greeting">Hi there, I&apos;m</p>
        <h1 className="hero__name">Lowell Dave E. Agnir</h1>
        <p className="hero__subtitle">
          Frontend developer that specializes in <em>UI/UX designs</em>.
        </p>

        <div className="hero__actions">
          <a href="#work" className="btn btn-primary">
            View my work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
      </div>

      <SocialLinks tone="light" className="hero__socials" />
    </div>
  );
};

export default Hero;
