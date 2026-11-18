"use client";

import { scrollToSection } from "./navigation.type";

interface ILinkItem {
  label: string;
  url: string;
  active: string;
}

const LinkItem = ({ label, url, active }: ILinkItem) => {
  const isActive = active === url;

  return (
    <li>
      <button
        type="button"
        onClick={() => scrollToSection(url)}
        className={`navigation__link ${isActive ? "is-active" : ""}`}
        aria-current={isActive ? "true" : undefined}
      >
        {label}
      </button>
    </li>
  );
};

export default LinkItem;
