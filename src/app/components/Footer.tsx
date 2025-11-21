"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const socialIcons = [
    {
      name: "Instagram",
      lightIcon: "/icons/Instagramlight.svg", // Show in light mode
      darkIcon: "/icons/Instagramdark.svg", // Show in dark mode
    },
    {
      name: "Twitter",
      lightIcon: "/icons/Twitterlight.svg",
      darkIcon: "/icons/Twitterdark.svg",
    },
    {
      name: "LinkedIn",
      lightIcon: "/icons/Linkedinlight.svg",
      darkIcon: "/icons/Linkedindark.svg",
    },
  ];
  return (
    <footer
      className="px-6 md:px-20 py-10 border-t transition-colors duration-300"
      style={{
        background: "var(--footer-bg, #ffffff)",
        borderColor: "var(--footer-border, #e5e7eb)",
        color: "var(--footer-text, #4b5563)",
      }}
    >
      {/* Top part */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 text-sm font-semibold text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 mb-6">
          {/* Logo */}
          <Link href="/" className="inline-block">
            {/* Light theme: logo image */}
            <Image
              src="/img/peeralgoLogo.svg"
              alt="Peeralgo Logo"
              width={200}
              height={80}
              priority
              className="w-[90px] h-auto dark:hidden"
            />

            {/* Dark theme: text “Peeralgo” */}
            <span
              className="hidden dark:inline-block  text-2xl"
              style={{ color: "var(--accent)" }}
            >
              Peeralgo
            </span>
          </Link>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialIcons.map((social) => (
              <React.Fragment key={social.name}>
                {/* Light mode icon */}
                <img
                  src={social.lightIcon}
                  alt={social.name}
                  className="w-10 h-10 cursor-pointer hover:opacity-80 dark:hidden"
                />
                {/* Dark mode icon */}
                <img
                  src={social.darkIcon}
                  alt={social.name}
                  className="w-10 h-10 cursor-pointer hover:opacity-80 hidden dark:block"
                />
              </React.Fragment>
            ))}
          </div>
        </div>

        <div
          className="text-xs"
          style={{ color: "var(--footer-muted, #1C1C1C99)" }}
        >
          ©2025 Peeralgo. All Rights Reserved.
        </div>
      </div>

      <hr
        className="mb-8"
        style={{ borderColor: "var(--footer-divider, #d1d5db)" }}
      />

      {/* Middle part */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 mb-8 items-center md:items-start text-center md:text-left">
        {/* Left: Newsletter */}
        <div
          className="w-full md:w-1/2 inline-flex justify-center md:justify-start shadow-sm rounded-2xl"
          style={{
            background:
              "linear-gradient(103deg, rgba(28, 28, 28, 0.06) 7.05%, rgba(28, 28, 28, 0.12) 100.95%)",
          }}
        >
          <div className="w-full max-w-md px-4 py-6 rounded-[16px] bg-[rgba(255,255,255,0.05)] flex flex-col items-center md:items-start gap-2">
            <h3
              className="text-md"
              style={{ color: "var(--footer-heading, #000000)" }}
            >
              Newsletter
            </h3>
            <h2
              className="text-lg"
              style={{ color: "var(--footer-heading, #000000)" }}
            >
              Stay updated with the latest updates about the tech space
            </h2>
            <form
              className="flex flex-col sm:flex-row w-full gap-2 mt-2 border rounded-2xl bg-[rgba(0,0,0,0.05)] p-2 transition-colors duration-300"
              style={{
                borderColor: "var(--footer-input-border, #e5e7eb)",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 placeholder:text-gray-500 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-100 bg-transparent"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-2xl hover:bg-blue-700 transition"
              >
                Signup
              </button>
            </form>
          </div>
        </div>

        {/* Right: Explore & Resources */}
        <div className="w-full md:w-1/2 flex flex-row justify-center md:justify-end gap-6 sm:gap-10 text-center sm:text-left">
          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: "var(--footer-heading, #000000)" }}
            >
              Explore
            </h4>
            <ul
              className="space-y-2"
              style={{ color: "var(--footer-link, #4b5563)" }}
            >
              <li>
                <Link
                  href="/"
                  className="hover:text-black cursor-pointer block w-full"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-black cursor-pointer block w-full"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-black cursor-pointer block w-full"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-black cursor-pointer block w-full"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: "var(--footer-heading, #000000)" }}
            >
              Resources
            </h4>
            <ul
              className="space-y-2"
              style={{ color: "var(--footer-link, #4b5563)" }}
            >
              <li className="hover:text-black cursor-pointer">Site Map</li>
              <li className="hover:text-black cursor-pointer">
                Terms of Services
              </li>
              <li className="hover:text-black cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
