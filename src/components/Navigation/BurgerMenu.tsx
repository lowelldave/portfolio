"use client";

import { useState } from "react";

import { scrollToSection, type RouteList } from "./navigation.type";

const BurgerMenu = ({ route, active }: { route: RouteList; active: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (url: string) => {
    scrollToSection(url);
    setIsOpen(false);
  };

  return (
    <div className={`burger-menu ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="burger-menu__toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <span className="burger-menu__bar" />
        <span className="burger-menu__bar" />
      </button>

      <nav id="mobile-menu" className="burger-menu__panel" aria-label="Sections" inert={!isOpen}>
        <ul className="burger-menu__list">
          {route.map(({ label, url }, idx) => (
            <li key={`route-${label}`}>
              <button
                type="button"
                onClick={() => handleClick(url)}
                className={`burger-menu__item ${active === url ? "is-active" : ""}`}
              >
                <span className="burger-menu__index">{String(idx + 1).padStart(2, "0")}</span>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
