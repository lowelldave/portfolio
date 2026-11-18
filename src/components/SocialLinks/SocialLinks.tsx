"use client";

import { useQuery } from "@tanstack/react-query";

import { dataQuery } from "@/api/data";

import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";
import "./style.css";

interface ISocialLinks {
  /** `light` = white icons for dark backgrounds, `dark` = ink icons for light ones. */
  tone?: "light" | "dark";
  className?: string;
}

const SocialLinks = ({ tone = "dark", className }: ISocialLinks) => {
  const { data = [], isPending } = useQuery({ ...dataQuery, select: (d) => d.social });

  return (
    <ul className={`social-links social-links--${tone} ${className ?? ""}`}>
      {isPending
        ? Array.from({ length: 3 }, (_, i) => <li key={i} className="social-links__placeholder" />)
        : data.map((item) => (
            <li key={`social-${item.id}`}>
              <a
                href={item.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                title={item.label}
                className="social-links__item"
              >
                <ImageWithFallback
                  src={item.imgUrl}
                  width={20}
                  height={20}
                  alt=""
                  className="social-links__icon"
                  fallbackSrc="/default.webp"
                />
              </a>
            </li>
          ))}
    </ul>
  );
};

export default SocialLinks;
