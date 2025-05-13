import React from "react";

import "./style.css";

interface ISection extends React.PropsWithChildren {
  className?: string;
  title?: string;
  settings?: {
    bg?: {
      src: string;
      isFill?: boolean;
      objectPosition?: string;
      position?: "right" | "left" | "center";
    }
    overlay?: {
      style: "dotted" | "none";
      color?: string;
      opacity?: number;
    };
  };
  variant?: 'dark' | 'light',
  style?: { [key: string]: string | number };
}

const Section = ({ children, ...props }: ISection) => {
  const olSettings = {
    visible: !!props.settings?.overlay,
    color: props.settings?.overlay?.color ?? 'black',
    style: props.settings?.overlay?.style ?? 'none',
    opacity: props.settings?.overlay?.opacity ?? 0.3,
  };

  const bgSettings = {
    isVisible: !!props.settings?.bg?.src,
    src: props.settings?.bg?.src !== '' ? props.settings?.bg?.src : 'default.jpg',
    isFill: props.settings?.bg?.isFill,
    position: props.settings?.bg?.position ?? '',
    objectPosition: props.settings?.bg?.objectPosition ?? 'initial',
  }

  return (
    <section
      {...props}
      className={`${props.variant ?? ''} ${props.className ?? ''} section`}
      style={{ ...props.style }}
    >
      {olSettings.visible && (
        <div
          className={`section__overlay ${olSettings.style}`}
          style={{
            backgroundColor: olSettings.color,
            opacity: olSettings.opacity,
          }}
        />
      )}
      {bgSettings.isVisible && (
        <img
          src={bgSettings.src}
          alt="section-background"
          loading="lazy"
          className={`section__bg ${bgSettings.position} ${bgSettings.isFill ? 'fill' : ''}`}
          style={{
            objectPosition: bgSettings.objectPosition,
          }}
        />
      )}
      {!!props.title && <h2 className="section__name">{props.title}</h2>}
      {children}
    </section>
  );
};

export default Section;
