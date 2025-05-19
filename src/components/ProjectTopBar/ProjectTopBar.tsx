"use client";

import React from "react";
import { useRouter } from 'next/navigation';

const ProjectTopBar = () => {
    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    };

    return (
        <div className="bg-mainDark h-12 w-full px-10 py-2 flex items-center justify-start gap-4">
            <button
                className="bg-main px-4 py-2 rounded-lg text-sm font-bold"
                onClick={handleBackClick}
            >
                &lt; Back
            </button>
            <label className="text-main text-xl font-bold">
                Project Details
            </label>
            
        </div>
    );
};

export default ProjectTopBar;
