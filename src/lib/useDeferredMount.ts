"use client";

import { useEffect, useRef, useState } from "react";

type DeferredMountOptions = {
  once?: boolean;
  rootMargin?: string;
};

export function useDeferredMount<T extends HTMLElement>({
  once = true,
  rootMargin = "320px 0px",
}: DeferredMountOptions = {}) {
  const ref = useRef<T | null>(null);
  const [shouldMount, setShouldMount] = useState(
    () =>
      typeof window !== "undefined" && !("IntersectionObserver" in window),
  );

  useEffect(() => {
    if (shouldMount && once) {
      return;
    }

    const node = ref.current;

    if (!node) {
      return;
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          setShouldMount(true);

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setShouldMount(false);
        }
      },
      { rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, rootMargin, shouldMount]);

  return { ref, shouldMount };
}
