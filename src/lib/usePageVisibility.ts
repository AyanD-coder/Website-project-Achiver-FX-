"use client";

import { useEffect, useState } from "react";

export function usePageVisibility(defaultValue = true) {
  const [isVisible, setIsVisible] = useState(defaultValue);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const updateVisibility = () => {
      setIsVisible(document.visibilityState !== "hidden");
    };

    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);

    return () => {
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  return isVisible;
}
