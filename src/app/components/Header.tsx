"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle"; // Make sure this file exists as in previous responses

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Mentors", href: "/mentors" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="w-full"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        boxShadow: "0 1px 4px rgba(16,30,54,.04)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 flex items-center w-[120px] sm:w-[160px]"
        >
          {/* Light mode → SVG logo */}
          <Image
            src="/img/peeralgoLogo.svg"
            alt="Peeralgo Logo"
            width={160}
            height={40}
            priority
            style={{ width: "100%", height: "auto" }}
            className="dark:hidden"
          />

          {/* Dark mode → Text logo */}
          <span
            className="hidden dark:inline-block  text-xl sm:text-2xl tracking-wide"
            style={{
              color: "var(--accent)",
            }}
          >
            Peeralgo
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8 flex-1 justify-center">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition"
              style={{
                color:
                  pathname === item.href
                    ? "var(--primary)"
                    : "var(--foreground)",
                background:
                  pathname === item.href
                    ? "var(--card-bg, #f7f9fc)"
                    : "transparent",
                fontWeight: pathname === item.href ? 700 : 500,
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Demo Button & Theme Toggle for Desktop */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Link
            href="#"
            className="text-xs sm:text-sm font-semibold"
            style={{
              background: "var(--primary)",
              color: "#fff",
              padding: "8px 15px",
              borderRadius: 8,
              transition: "background .2s",
              fontWeight: 600,
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "var(--hoverprimary,#2565b8)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "var(--primary)")
            }
          >
            Book a Free Demo
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
          className="inline-flex items-center justify-center md:hidden ml-2"
          style={{ background: "none", border: "none", padding: 0 }}
        >
          <Menu size={28} color="var(--foreground)" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
              style={{ cursor: "pointer" }}
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-4/5 max-w-[300px] h-full flex flex-col bg-[var(--background)] z-50 shadow-2xl"
              style={{
                background: "var(--background)",
                boxShadow: "0 6px 32px rgba(0,0,0,.16)",
              }}
            >
              {/* Close Button */}
              <div className="flex justify-end mt-3 mr-3">
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Menu"
                  style={{ background: "none", border: "none", padding: 0 }}
                >
                  <X size={28} color="var(--foreground)" />
                </button>
              </div>

              {/* Drawer Menu */}
              <nav className="flex flex-col gap-1 mt-3 px-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-2 py-3 rounded-md text-sm font-medium transition"
                    style={{
                      color:
                        pathname === item.href
                          ? "var(--primary)"
                          : "var(--foreground)",
                      background:
                        pathname === item.href
                          ? "var(--card-bg, #f7f9fc)"
                          : "transparent",
                      fontWeight: pathname === item.href ? 700 : 500,
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 block text-sm font-semibold"
                  style={{
                    background: "var(--primary)",
                    color: "#fff",
                    padding: "10px 18px",
                    borderRadius: 8,
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  Book a Free Demo
                </Link>
                <div className="mt-3 pb-2 flex justify-end">
                  <ThemeToggle />
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
