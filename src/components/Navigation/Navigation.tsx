"use client";

import { useState, useEffect } from "react";

import LinkItem from "./LinkItem";
import BurgerMenu from "./BurgerMenu";
import { scrollToSection, type RouteList } from "./navigation.type";
import "./style.css";

const menu: RouteList = [
  { label: "Intro", url: "#hero" },
  { label: "Stack", url: "#techstack" },
  { label: "Work", url: "#work" },
  { label: "Projects", url: "#project" },
  { label: "Training", url: "#training" },
  { label: "Contact", url: "#contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    // A section is "active" while it crosses the middle band of the viewport.
    // Works for sections taller than the screen, unlike a high threshold.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    menu.forEach(({ url }) => {
      const element = document.querySelector(url);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const isOverHero = activeSection === "#hero";

  return (
    <header className={`navigation ${isOverHero ? "navigation--transparent" : ""}`}>
      <div className="navigation__inner">
        <button
          type="button"
          className="navigation__brand"
          onClick={() => scrollToSection("#hero")}
          aria-label="Back to top"
        >
          LA<span className="navigation__brand-dot">.</span>
        </button>

        <nav aria-label="Sections" className="navigation__desktop">
          <ul className="navigation__list">
            {menu.slice(1).map(({ label, url }) => (
              <LinkItem label={label} url={url} key={`route-${label}`} active={activeSection} />
            ))}
          </ul>
        </nav>

        <BurgerMenu route={menu} active={activeSection} />
      </div>
    </header>
  );
};

export default Navigation;
