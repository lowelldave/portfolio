import { useState, useCallback, useEffect } from "react";

export const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);
  const [isScreenLoaded, setIsScreenLoaded] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    setIsScreenLoaded(true);

    return () => media.removeEventListener("change", updateTarget);
  }, [width, updateTarget]);

  return { isReached: targetReached, isScreenLoaded };
};
