"use client";

import { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { RouteList } from './navigation.type';

function BurgerMenu({ route }: { route: RouteList }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
            <Link
              href={url}
              key={`route-${label}`}
              className={`burger-menu__list-item ${pathname === url ? 'active' : ''}`}
            >
              {label}
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}

export default BurgerMenu;
