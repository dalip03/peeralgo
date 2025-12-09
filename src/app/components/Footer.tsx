"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialIcons = [
    {
      name: "Instagram",
      lightIcon: "/icons/Instagramlight.svg",
      darkIcon: "/icons/Instagramlight.svg",
    },
    {
      name: "Twitter",
      lightIcon: "/icons/Twitterlight.svg",
      darkIcon: "/icons/Twitterdark.svg",
    },
    {
      name: "LinkedIn",
      lightIcon: "/icons/Linkedindark.svg",
      darkIcon: "/icons/Linkedinlight.svg",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="px-4 sm:px-6 md:px-20 py-10 border-t transition-colors duration-300"
      style={{
        background: "var(--footer-bg, #ffffff)",
        borderColor: "var(--footer-border, #e5e7eb)",
        color: "var(--footer-text, #4b5563)",
      }}
    >
      {/* Top Section */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 text-center md:text-left"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15 },
            show: { opacity: 1, y: 0 },
          }}
          className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-8"
        >
          <Link href="/" className="flex-shrink-0 flex items-center">
            <span className="text-xl sm:text-2xl font-semibold tracking-wide text-[var(--logo-light-color)] dark:text-[var(--logo-dark-color)]">
              Peeralgo
            </span>
          </Link>

          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4">
            {socialIcons.map((social) => (
              <React.Fragment key={social.name}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Image
                    src={social.lightIcon}
                    alt={social.name}
                    width={35}
                    height={35}
                    className="w-9 h-9 sm:w-10 sm:h-10 cursor-pointer hover:opacity-80 transition-opacity dark:hidden"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }}>
                  <Image
                    src={social.darkIcon}
                    alt={social.name}
                    width={35}
                    height={35}
                    className="w-9 h-9 sm:w-10 sm:h-10 cursor-pointer hover:opacity-80 transition-opacity hidden dark:block"
                  />
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15 },
            show: { opacity: 1, y: 0 },
          }}
          className="text-xs"
          style={{ color: "var(--footer-muted, #1C1C1C99)" }}
        >
          ©2025 Peeralgo. All Rights Reserved.
        </motion.div>
      </motion.div>

      <hr
        className="my-8"
        style={{ borderColor: "var(--footer-divider, #d1d5db)" }}
      />

      {/* Middle Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 mb-8 items-center md:items-start text-center md:text-left">
        
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center md:justify-start shadow-sm rounded-2xl"
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
              className="text-lg leading-snug"
              style={{ color: "var(--footer-heading, #000000)" }}
            >
              Stay updated with the latest updates about the tech space
            </h2>

            <form
              className="
                w-full flex items-center gap-2 mt-2 border rounded-2xl 
                bg-[rgba(0,0,0,0.05)] p-2 transition-colors duration-300
              "
              style={{ borderColor: "var(--footer-input-border, #e5e7eb)" }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  flex-grow min-w-0 px-3 py-2 rounded-2xl bg-transparent 
                  placeholder:text-gray-500 text-sm
                  focus:outline-none focus:ring-1 focus:ring-blue-100
                "
                required
              />

              <button
                type="submit"
                className="
                  bg-blue-500 text-white px-3 py-2 rounded-3xl cursor-pointer 
                  whitespace-nowrap text-sm
                "
              >
                Signup
              </button>
            </form>
          </div>
        </motion.div>

        {/* Explore + Resources */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex flex-wrap justify-center md:justify-end gap-12"
        >
          <div>
            <h4
              className="font-semibold mb-3"
              style={{ color: "var(--footer-heading, #000000)" }}
            >
              Explore
            </h4>
            <ul
              className="space-y-2"
              style={{ color: "var(--footer-link, #4b5563)" }}
            >
              <li><Link href="/" className="hover:text-black block">Home</Link></li>
              <li><Link href="/" className="hover:text-black block">About Us</Link></li>
              <li><Link href="/" className="hover:text-black block">Solutions</Link></li>
              <li><Link href="/blogs" className="hover:text-black block">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold mb-3"
              style={{ color: "var(--footer-heading, #000000)" }}
            >
              Resources
            </h4>
            <ul
              className="space-y-2"
              style={{ color: "var(--footer-link, #4b5563)" }}
            >
              <li className="hover:text-gray-400 cursor-pointer">Site Map</li>
              <li>
                <Link
                  href="/FindMentor"
                  className="hover:text-gray-400 block"
                >
                  Find Mentor
                </Link>
              </li>
              <li className="hover:text-gray-400 cursor-pointer">
                Terms of Services
              </li>
              <li className="hover:text-gray-400 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
