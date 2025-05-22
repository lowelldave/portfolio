"use client";

import { useState } from "react";

import type { RouteList } from './navigation.type';

function BurgerMenu({ route, active }: { route: RouteList, active: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (id: string) => () => {
    const element = document.querySelector(id);

    element?.scrollIntoView({ behavior: "smooth"});
}

  return (
    <div className="burger-menu">
      <div className="burger-menu__container" onClick={handleToggle}>
        <div className={`burger-menu__bar-1 ${isOpen ? 'open' : ''}`}></div>
        <div className={`burger-menu__bar-2 ${isOpen ? 'open' : ''}`}></div>
        <div className={`burger-menu__bar-3 ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`burger-menu__dropdown ${isOpen ? 'open' : 'close'}`}>
        <nav className="burger-menu__list">
          {route.map(({ label, url }) =>
            <button
              onClick={handleClick(url)}
              key={`route-${label}`}
              className={`burger-menu__list-item ${active === url ? 'active' : ''}`}
            >
              {label}
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}

export default BurgerMenu;
