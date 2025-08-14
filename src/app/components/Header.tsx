"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Mentors", href: "/about" },
  { label: "Blog", href: "/ourServices" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="inline-block">
            <Image
              src="/img/peeralgoLogo.svg"
              alt="IIPWorks Logo"
              width={400} // increase from 120
              height={160} // increase from 40
              priority
              className="w-[160px] h-auto" // override any limits and control width manually
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                pathname === item.href
                  ? " text-black"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            href="#"
            className="text-sm font-semibold bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-md transition"
          >
            Book a Free Demo
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
            <Menu size={24} color="black" />
          </button>
        </div>
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
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-72 h-full bg-white z-50 shadow-lg p-6"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Menu"
                >
                  <X size={24} color="black" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex flex-col gap-3">
                {/* Logo */}
                <div className="flex items-center">
                  <Link href="/" className="inline-block">
                    <Image
                      src="/img/peeralgoLogo.svg"
                      alt="IIPWorks Logo"
                      width={120}
                      height={40}
                      priority
                      className="h-auto w-auto max-h-40"
                    />
                  </Link>
                </div>

                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-md text-sm font-medium transition ${
                      pathname === item.href
                        ? "bg-gray-200 text-black"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 block text-sm font-semibold bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-md transition"
                >
                  Book a Free Demo
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
