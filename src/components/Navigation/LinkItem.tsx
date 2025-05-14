'use client';

import { useState, useEffect } from 'react';
import './style.css';

interface ILinkItem {
    label: string;
    url: string;
    active: string;
}

const LinkItem = ({ label, url, active }: ILinkItem) => {
    const handleClick = (id: string) => () => {
        const element = document.querySelector(id);

        element?.scrollIntoView({ behavior: "smooth"});
    }
    
    return (
        <li className={`navigation__list-item ${active === url ? 'active' : ''}`}>
            <button
                onClick={handleClick(url)}
                className={`navigation__link`}
            >
                { label }
            </button>
        </li>
    );
};

export default LinkItem;