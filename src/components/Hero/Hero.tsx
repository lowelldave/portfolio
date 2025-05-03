import React from 'react';

import { readJSON } from '@/utils/file';
import type { IResponse } from '@/types/data.type';

import LinkItem from './LinkItem';
import './style.css';

const Hero = async () => {
  const { social }: IResponse = await readJSON('/data.json');

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
            {social.map(item => <LinkItem data={item} key={`link-${item.name}`} />)}
          </div>
        </div>
    </div>
  )
}

export default Hero;