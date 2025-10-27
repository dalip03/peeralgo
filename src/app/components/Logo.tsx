"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Logo() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  return (
    <Link href="/" className="inline-block min-w-[100px]">
      {isDark ? (
        <span
          style={{
            fontWeight: 500,
            fontSize: 32,
            color: "white",
            letterSpacing: "1px",
            lineHeight: "1",
            fontFamily: "inherit"
          }}
        >
          Peeralgo
        </span>
      ) : (
        <Image
          src="/img/peeralgoLogo.svg"
          alt="Peeralgo Logo"
          width={160}
          height={40}
          priority
          style={{ width: 160, height: "auto", display: "block" }}
        />
      )}
    </Link>
  );
}
