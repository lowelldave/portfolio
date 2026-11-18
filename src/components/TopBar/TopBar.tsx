"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { toTitleCase } from "@/utils/string";

import "./style.css";

interface ITopBar {
  type: "work" | "project";
}

const TopBar = ({ type }: ITopBar) => {
  const router = useRouter();

  const handleBack = () => {
    // Fall back to the home page when the detail page was opened directly.
    if (window.history.length > 1) router.back();
    else router.push("/");
  };

  return (
    <header className="topbar">
      <div className="topbar__inner">
        <button type="button" className="topbar__back" onClick={handleBack}>
          <span aria-hidden="true">←</span> Back
        </button>
        <p className="topbar__label">{`${toTitleCase(type)} details`}</p>
        <Link href="/" className="topbar__brand" aria-label="Home">
          LA<span className="text-accent">.</span>
        </Link>
      </div>
    </header>
  );
};

export default TopBar;
