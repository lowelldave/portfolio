'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import './style.css';

interface ILinkItem {
    label: string;
    url: string;
}

const LinkItem = ({ label, url }: ILinkItem) => {
    const pathname = usePathname();
    
    return (
        <li className={`navigation__list-item ${pathname === url ? 'active' : ''}`}>
            <Link
                href={ url }
                className={`navigation__link`}
            >
                { label }
            </Link>
        </li>
    );
};

export default LinkItem;