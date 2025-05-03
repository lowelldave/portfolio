'use client';

import { useMediaQuery } from '@/hooks';

import LinkItem from './LinkItem';
import BurgerMenu from './BurgerMenu';
import type { RouteList } from './navigation.type';
import './style.css';

const menu: RouteList = [
  { label: 'HOME', url: '/' },
  { label: 'ABOUT', url: '/about' },
  { label: 'PROFILE', url: '/profile' },
];

const Navigation = () => {
  const { isReached: isMobile, isScreenLoaded } = useMediaQuery(767);

  return (
    <div className="navigation">
      {isScreenLoaded &&
        (
          isMobile ? 
            <BurgerMenu route={menu} /> :
            <ul className="navigation__list">
              {menu.map(({ label, url }) => <LinkItem label={label} url={url} key={`route-${label}`} />)}
            </ul>
        )
      }
    </div>
  )
}

export default Navigation
