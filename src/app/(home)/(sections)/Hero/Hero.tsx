import React from 'react';

import LinkList from './LinkList';
import './style.css';

const Hero = () => {

  return (
    <div className="hero">
        <div className="hero__details-container">
            <label className="hero__greetings">Hi there, I&apos;m</label>
            <h1 className="hero__name">Lowell Dave E. Agnir</h1>
            <label className="hero__subtitle">
                Frontend developer that specializes in UI/UX designs.
            </label>
        </div>
        <LinkList />
    </div>
  )
}

export default Hero;