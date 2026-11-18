import Image from "next/image";
import type { CSSProperties, PropsWithChildren } from "react";

import "./style.css";

interface ISection extends PropsWithChildren {
  id?: string;
  className?: string;
  /** Small uppercase label above the title, e.g. "01 — Stack". */
  eyebrow?: string;
  title?: string;
  /** `muted` uses the alternate surface, `ink` the dark band. */
  variant?: "default" | "muted" | "ink";
  style?: CSSProperties;
  settings?: {
    bg?: {
      src: string;
      objectPosition?: string;
    };
    overlay?: {
      style: "gradient" | "none";
    };
  };
}

const Section = ({
  children,
  id,
  className,
  eyebrow,
  title,
  variant = "default",
  style,
  settings,
}: ISection) => {
  const { bg, overlay } = settings ?? {};

  return (
    <section id={id} className={`section section--${variant} ${className ?? ""}`} style={style}>
      {bg?.src && (
        <Image
          src={bg.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="section__bg"
          style={{ objectPosition: bg.objectPosition ?? "center" }}
        />
      )}
      {overlay && overlay.style !== "none" && (
        <div className={`section__overlay section__overlay--${overlay.style}`} />
      )}

      <div className="section__inner">
        {(eyebrow || title) && (
          <header className="section__header reveal">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="section__title">{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
