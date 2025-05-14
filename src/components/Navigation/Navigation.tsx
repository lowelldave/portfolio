"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";

import { useMediaQuery } from "@/hooks";

import LinkItem from "./LinkItem";
import BurgerMenu from "./BurgerMenu";
import type { RouteList } from "./navigation.type";
import "./style.css";

const menu: RouteList = [
  { label: "Intro", url: "#hero" },
  { label: "Stack", url: "#techstack" },
  { label: "Work", url: "#work" },
  { label: "Project", url: "#project" },
  { label: "Training", url: "#training" },
];

const Navigation = () => {
  const { isReached: isMobile, isScreenLoaded } = useMediaQuery(767);
  const [activeSection, setActiveSection] = useState('#hero');
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const viewable = entries.filter((item) => item.isIntersecting);
  
      if (viewable.length === 0) return;
      
      const activeId = viewable[0].target.id;
      setActiveSection(`#${activeId}`);
    }, {
      threshold: 0.8
    });
  
    menu.forEach((item) => {
      const element = document.querySelector(item.url);
  
      if (!element) return;
  
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    }
  }, []);

  return (
    <motion.nav className="navigation">
      <AnimatePresence mode="sync">
        {isScreenLoaded &&
          (isMobile ? (
            <BurgerMenu route={menu} active={activeSection} />
          ) : (
            <motion.ul
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{ delay: 0.5 }}
              className="navigation__list"
            >
              {menu.map(({ label, url }) => (
                <LinkItem label={label} url={url} key={`route-${label}`} active={activeSection} />
              ))}
            </motion.ul>
          ))}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
