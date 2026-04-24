"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeSwitchProps {
  className?: string;
}

type ThemeMode = "light" | "dark";

const themeStorageKey = "theme";
const themeChangeEvent = "theme-change";

function getCurrentTheme(): ThemeMode {
  if (typeof document === "undefined") {
    return "light";
  }

  const root = document.documentElement;
  const currentTheme = root.dataset.theme;

  if (currentTheme === "light" || currentTheme === "dark") {
    return currentTheme;
  }

  return root.classList.contains("dark") ? "dark" : "light";
}

function syncRootTheme(nextTheme: ThemeMode) {
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(nextTheme);
  root.dataset.theme = nextTheme;
}

function applyTheme(nextTheme: ThemeMode) {
  syncRootTheme(nextTheme);
  window.localStorage.setItem(themeStorageKey, nextTheme);
  window.dispatchEvent(new Event(themeChangeEvent));
}

export default function ThemeSwitch({ className = "" }: ThemeSwitchProps) {
  const [theme, setTheme] = React.useState<ThemeMode>("light");

  React.useEffect(() => {
    const syncTheme = () => {
      const storedTheme = window.localStorage.getItem(themeStorageKey);
      const nextTheme =
        storedTheme === "dark" || storedTheme === "light"
          ? storedTheme
          : getCurrentTheme();

      setTheme(nextTheme);
      syncRootTheme(nextTheme);
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === themeStorageKey) {
        syncTheme();
      }
    };

    syncTheme();
    window.addEventListener("storage", handleStorage);
    window.addEventListener(themeChangeEvent, syncTheme);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(themeChangeEvent, syncTheme);
    };
  }, []);

  const toggleTheme = React.useCallback(() => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, [theme]);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      className={`relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/12 bg-white/[0.06] text-white shadow-[0_10px_24px_rgba(2,8,18,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.1] hover:shadow-[0_14px_30px_rgba(14,165,233,0.18)] [.light_&]:border-blue-100 [.light_&]:bg-white [.light_&]:text-blue-600 [.light_&]:shadow-[0_10px_24px_rgba(15,23,42,0.08)] [.light_&]:hover:bg-blue-50 [.light_&]:hover:shadow-[0_14px_28px_rgba(37,99,235,0.14)] ${className}`}
    >
      <Sun
        className={`absolute h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === "light"
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-5 scale-50 opacity-0"
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === "dark"
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-5 scale-50 opacity-0"
        }`}
      />
    </button>
  );
}
