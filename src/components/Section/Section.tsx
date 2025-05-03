import React from "react";

import "./style.css";

interface ISection extends React.PropsWithChildren {
  className?: string;
  title?: string;
  settings?: {
    bgSrc?: string;
    bgPosition: "right" | "left" | "center" | "fill";
    overlay?: {
      style: "dotted" | "none";
      color?: string;
      opacity?: number;
    };
  };
  style?: any;
}

const Section = ({ children, ...props }: ISection) => {
  const isOLVisible = !!props.settings?.overlay;
  const OLColor = props.settings?.overlay?.color ?? 'black';
  const OLStyle = props.settings?.overlay?.style ?? 'none';
  const OLOpacity = props.settings?.overlay?.opacity ?? 0.3;

  return (
    <section {...props} className={`${props.className ?? ""} section`} style={{ ...props.style }} >
      {isOLVisible && (
        <div
          className={`section__overlay ${OLStyle}`}
          style={{
            backgroundColor: OLColor,
            opacity: OLOpacity,
          }}
        />
      )}
      {!!props.settings?.bgSrc && (
        <img
          src={props.settings.bgSrc ?? ""}
          alt="section-background"
          loading="lazy"
          className={`section__bg ${props.settings.bgPosition}`}
        />
      )}
      {!!props.title && <h2 className="section__name">{props.title}</h2>}
      {children}
    </section>
  );
};

export default Section;
