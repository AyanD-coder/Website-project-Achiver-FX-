"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string, defaultValue = false) {
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    const updateMatch = () => setMatches(mediaQuery.matches);

    updateMatch();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateMatch);

      return () => mediaQuery.removeEventListener("change", updateMatch);
    }

    if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(updateMatch);

      return () => mediaQuery.removeListener(updateMatch);
    }
  }, [query]);

  return matches;
}
