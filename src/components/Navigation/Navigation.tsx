import Link from 'next/link';
import LinkItem from './LinkItem';

import './style.css';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        <LinkItem label="HOME" url="/" />
        <LinkItem label="ABOUT" url="/about" />
        <LinkItem label="PROFILE" url="/profile" />
      </ul>
    </div>
  )
}

export default Navigation
