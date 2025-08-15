import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] text-gray-400 px-6 md:px-20 py-10 border-t border-gray-200">
      {/* Top part */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 text-sm font-semibold text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 mb-6">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <Image
              src="/img/peeralgoLogo.svg"
              alt="IIPWorks Logo"
              width={200} // increase from 120
              height={80} // increase from 40
              priority
              className="w-[90px] h-auto" // override any limits and control width manually
            />
          </Link>

          {/* Social Icons */}
          <div className="flex gap-4">
            <img
              src="/img/Instagram.svg"
              alt="Instagram"
              className="w-10 h-10 cursor-pointer hover:opacity-80"
            />
            <img
              src="/img/Twitter.svg"
              alt="Twitter"
              className="w-10 h-10 cursor-pointer hover:opacity-80"
            />
            <img
              src="/img/Linkedin.svg"
              alt="LinkedIn"
              className="w-10 h-10 cursor-pointer hover:opacity-80"
            />
          </div>
        </div>

        {/* <div className="mb-4 md:mb-0">Pune | Mumbai | Dubai | Remote</div> */}

        <div className="text-[#1C1C1C99]/60 text-xs">
          ©2025 EduMentor. All Rights Reserved.
        </div>
      </div>

      <hr className="border-gray-300 mb-8" />

      {/* Middle part */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 mb-8 items-center md:items-start text-center md:text-left">
        {/* Left: Newsletter */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="w-full max-w-md px-4 py-6 rounded-[16px] bg-[rgba(255,255,255,0.05)] flex flex-col items-center md:items-start gap-2">
            <h3 className="text-md">Newsletter</h3>
            <h2 className="text-lg text-black">
              Stay updated with the latest Updates about the tech space{" "}
            </h2>
            <form className="flex flex-col sm:flex-row w-full gap-2 mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 bg-[#1C1C1C1A] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Signup
              </button>
            </form>
          </div>
        </div>

        {/* Right: Explore & Resources */}
        <div className="w-full md:w-1/2 flex flex-col sm:flex-row justify-center md:justify-end gap-10 text-center md:text-left">
          <div>
            <h4 className="font-semibold mb-4 text-black">Explore</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-gray-300 cursor-pointer">Home</li>
              <li className="hover:text-gray-300 cursor-pointer">About Us</li>
              <li className="hover:text-gray-300 cursor-pointer">Solutions</li>
              <li className="hover:text-gray-300 cursor-pointer">Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-black">Resources</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-gray-300 cursor-pointer">Site Map</li>
              <li className="hover:text-gray-300 cursor-pointer">
                Terms of Services
              </li>
              <li className="hover:text-gray-300 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom part */}
      {/* <div className="text-center text-gray-600 text-sm space-y-2 sm:space-y-0 sm:space-x-6">
        <div>
          <a href="mailto:info@gmail.com" className="hover:text-gray-300">
            info@gmail.com
          </a>{" "}
          |{" "}
          <a href="mailto:sales@gmail.com" className="hover:text-gray-300">
            sales@gmail.com
          </a>{" "}
          |{" "}
          <a
            href="https://www.andpworks.com"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.andpworks.com
          </a>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
