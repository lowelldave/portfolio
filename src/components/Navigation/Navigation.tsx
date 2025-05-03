"use client";
import { motion, AnimatePresence } from "motion/react";

import { useMediaQuery } from "@/hooks";

import LinkItem from "./LinkItem";
import BurgerMenu from "./BurgerMenu";
import type { RouteList } from "./navigation.type";
import "./style.css";

const menu: RouteList = [
  { label: "HOME", url: "/" },
  { label: "ABOUT", url: "/about" },
  { label: "PROFILE", url: "/profile" },
];

const Navigation = () => {
  const { isReached: isMobile, isScreenLoaded } = useMediaQuery(767);

  return (
    <motion.nav className="navigation">
      <AnimatePresence mode="sync">
        {isScreenLoaded &&
          (isMobile ? (
            <BurgerMenu route={menu} />
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
                <LinkItem label={label} url={url} key={`route-${label}`} />
              ))}
            </motion.ul>
          ))}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
