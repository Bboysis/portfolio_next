"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (
      savedTheme === "dark" ||
      savedTheme === "light" ||
      savedTheme === "system"
    ) {
      setTheme(savedTheme);
    } else {
      setTheme("dark");
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    const applyTheme = (selectedTheme) => {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const shouldUseDark =
        selectedTheme === "dark" ||
        (selectedTheme === "system" && systemDark);

      root.classList.toggle("dark", shouldUseDark);
      root.classList.toggle("light", !shouldUseDark);
      root.style.colorScheme = shouldUseDark
        ? "dark"
        : "light";
    };

    applyTheme(theme);

    localStorage.setItem("theme", theme);

    if (theme !== "system") return;

    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleChange = () => {
      applyTheme("system");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleChange
      );
    };
  }, [theme, mounted]);

  const changeTheme = (nextTheme) => {
    if (
      nextTheme !== "dark" &&
      nextTheme !== "light" &&
      nextTheme !== "system"
    ) {
      return;
    }

    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: changeTheme,
        mounted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}