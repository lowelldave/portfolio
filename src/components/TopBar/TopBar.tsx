"use client";

import React, { ReactEventHandler } from "react";
import { useRouter } from 'next/navigation';

import { toTitleCase } from '@/utils/string';

import './style.css';

interface ITopBar {
    type: 'work' | 'project';
}

const TopBar = ({ type }: ITopBar) => {
    const router = useRouter();

    const handleBackClick: ReactEventHandler<HTMLButtonElement> = (e)  => {
        e.preventDefault();
        router.back();
    };

    return (
        <div className="topbar">
            <button
                className="topbar__button"
                onClick={handleBackClick}
            >
                &lt; Back
            </button>
            <label className="topbar__label">
                {`${toTitleCase(type ?? '')} Details`} 
            </label>
            
        </div>
    );
};

export default TopBar;
