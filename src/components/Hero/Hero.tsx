import Link from 'next/link';
import Image from 'next/image';

import React from 'react'

import './style.css';

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero__details-container">
            <label className="hero__greetings">Hi there, I'm</label>
            <h1 className="hero__name">Lowell Dave E. Agnir</h1>
            <label className="hero__subtitle">
                Frontend developer that specializes in UI/UX designs.
            </label>
        </div>
        <div className="hero__links-container">
          <div className="hero__links-wrapper">
            <div>
              <Link href="https://www.facebook.com/SoulExtinction08">
                <Image
                  src={'https://cdn.svgporn.com/logos/facebook.svg'}
                  width={0}
                  height={0}
                  alt={'facebook'}
                  className="hero__link-image"
                  loading="lazy"
                />
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/in/lowell-agnir/">
                <Image
                  src={'https://cdn.svgporn.com/logos/linkedin-icon.svg'}
                  width={0}
                  height={0}
                  alt={'linkedin'}
                  className="hero__link-image"
                  loading="lazy"
                />
              </Link>
            </div>
            <div>
              <Link href="https://github.com/lowelldave">
                <Image
                  src={'https://cdn.svgporn.com/logos/github-icon.svg'}
                  width={0}
                  height={0}
                  alt={'github'}
                  className="hero__link-image"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero;