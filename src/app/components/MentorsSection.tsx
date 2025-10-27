"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";

const mentors = [
  {
    name: "Manish Pushkar",
    role: "Software Engineer 2",
    experience: "8 Years of Experience",
    rating: 5.0,
    company: "Company Name",
    logo: null,
    category: "Engineering",
  },
  {
    name: "Shishir Chandra",
    role: "Engineering Lead",
    experience: "16 Years of Experience",
    rating: 4.9,
    company: "Google",
    logo: "/img/amazon.svg",
    category: "Engineering",
  },
  {
    name: "Chetana Bollini",
    role: "Senior Software Engineer",
    experience: "7 Years of Experience",
    rating: 5.0,
    company: "Salesforce",
    logo: "/img/amazon.svg",
    category: "Engineering",
  },
  {
    name: "Vikas Bharti",
    role: "Senior Software Engineering Manager",
    experience: "16 Years of Experience",
    rating: 5.0,
    company: "Walmart Global Tech India",
    logo: "/img/amazon.svg",
    category: "Business",
  },
  {
    name: "Sidharth Shukla",
    role: "SDET-2",
    experience: "15 Years of Experience",
    rating: 5.0,
    company: "Amazon",
    logo: "/img/amazon.svg",
    category: "Data Science",
  },
  {
    name: "Mudassar Hakim",
    role: "Software Development Manager III",
    experience: "17 Years of Experience",
    rating: 5.0,
    company: "Amazon",
    logo: "/img/amazon.svg",
    category: "Product",
  },
];

const categories = ["Engineering", "Data Science", "Business", "Product"];

export default function MentorsSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const filteredMentors = mentors.filter(
    (mentor) => mentor.category === activeCategory
  );
  const router = useRouter();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 w-full transition-colors duration-300"
      style={{
        background: "var(--mentors-bg, #e3f0fd)",
      }}
    >
      {/* Header Section */}
      <motion.div
        className="text-center mb-6 px-4 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-2"
          style={{ color: "var(--mentors-heading, #232323)" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          600+ mentors are just a Free Trial Session away!
        </motion.h2>
        <p
          className="mb-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: "var(--mentors-text, #374151)" }}
        >
          Choose your ideal mentor and get started with a FREE trial session
        </p>

        {/* Category Tabs */}
        <motion.div
          className="w-full mb-10 items-center justify-center flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div
            className="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 font-medium text-sm sm:text-base px-4 py-2 rounded-full cursor-pointer border shadow-sm transition focus:outline-none ${
                  activeCategory === cat
                    ? "text-white"
                    : ""
                }`}
                style={{
                  background:
                    activeCategory === cat
                      ? "var(--mentors-accent, #3b82f6)"
                      : "var(--mentors-tab-bg, #ffffff)",
                  borderColor: "var(--mentors-border, #e5e7eb)",
                  color:
                    activeCategory === cat
                      ? "var(--mentors-tab-active-text, #ffffff)"
                      : "var(--mentors-tab-text, #000000)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Mentor Cards */}
      <motion.div
        className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {filteredMentors.map((mentor, i) => (
          <motion.div
            key={i}
            className="relative rounded-xl shadow-md p-6 w-full flex flex-col items-start gap-3 transition-colors duration-300"
            style={{
              background: "var(--mentors-card-bg, #ffffff)",
              border: "1px solid var(--mentors-border, #e5e7eb)",
              color: "var(--mentors-heading, #232323)",
            }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="font-semibold">{mentor.rating}</span>
            </div>
            <div>
              <div
                className="text-lg font-semibold mb-1"
                style={{ color: "var(--mentors-heading, #232323)" }}
              >
                {mentor.name}
              </div>
              <div
                className="font-medium"
                style={{ color: "var(--mentors-sub, #374151)" }}
              >
                {mentor.role}
              </div>
              <div
                className="text-sm"
                style={{ color: "var(--mentors-text, #6b7280)" }}
              >
                {mentor.experience}
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              {mentor.logo && (
                <img
                  src={mentor.logo}
                  alt=""
                  className="w-5 h-5 object-contain"
                />
              )}
              <span
                className="text-sm"
                style={{ color: "var(--mentors-text, #6b7280)" }}
              >
                {mentor.company}
              </span>
            </div>
            <button
              className="mt-4 w-full py-2 rounded-lg font-medium shadow transition"
              style={{
                background: "var(--mentors-accent, #3b82f6)",
                color: "var(--mentors-btn-text, #ffffff)",
              }}
            >
              Book a FREE Trial
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Explore Button */}
      <motion.button
        onClick={() => router.push("/mentors")}
        className="flex items-center justify-center gap-1 mt-10 px-6 py-3 rounded-lg shadow font-medium cursor-pointer border transition"
        style={{
          background: "var(--mentors-tab-bg, #ffffff)",
          borderColor: "var(--mentors-border, #e5e7eb)",
          color: "var(--mentors-heading, #232323)",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Explore All Mentors
        <Image alt="icon" src="/icons/rightArrowblack.svg" height={8} width={8} />
      </motion.button>
    </div>
  );
}
