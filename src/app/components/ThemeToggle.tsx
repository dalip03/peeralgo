"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check localStorage first, then OS preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
    } else if (savedTheme === "light") {
      setDark(false);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark, mounted]);

  if (!mounted) {
    return (
      <button
        style={{
          borderRadius: "8px",
          padding: "6px 14px",
          background: "var(--card-bg)",
          border: "1px solid var(--primary)",
          opacity: 0.5,
        }}
        disabled
      >
        ⚙️
      </button>
    );
  }

  return (
    <button
      onClick={() => setDark((d) => !d)}
      style={{
        borderRadius: "8px",
        padding: "6px 14px",
        background: "var(--card-bg)",
        color: "var(--foreground)",
        border: "1px solid var(--primary)",
        fontWeight: 500,
        transition: "all 0.2s ease",
        cursor: "pointer",
      }}
      aria-label="Toggle dark mode"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}