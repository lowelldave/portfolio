import React from 'react';
import Image from 'next/image';

import './style.css';

interface ISection extends React.PropsWithChildren {
    className?: string;
    title?: string;
    bgsrc?: string;
}

const Section = ({ children, ...props }: ISection) => {
  return (
    <section {...props} className={`${props.className ?? ''} section`}>
      {!!props.bgsrc && <div className="section__overlay" />}
      {!!props.bgsrc && 
        <Image
          className="section__bg"
          src={props.bgsrc ?? ''}
          alt="section-background"
          fill
          loading="lazy"
        />
      }
      {!!props.title && <h2 className="section__name">{props.title}</h2>}
      {children}
    </section>
  )
};

export default Section;
