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

  // Framer Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-[#e3f0fd] flex flex-col items-center py-10 w-full">
      {/* Header Section */}
      <motion.div
        className="text-center mb-6 px-4 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#232323] mt-6 mb-3 leading-tight">
          600+ mentors are just a Free Trial Session away!
        </h1>
        <p className="text-gray-700 mb-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
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
            className="
              flex gap-3 overflow-x-auto whitespace-nowrap
              scrollbar-hide scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0
            "
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 font-medium text-sm sm:text-base px-4 py-2 rounded-full cursor-pointer border border-gray-200/80 shadow-sm transition focus:outline-none
                  ${
                    activeCategory === cat
                      ? "text-white bg-blue-500"
                      : "text-black bg-white hover:bg-blue-50 active:bg-blue-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Mentor Cards */}
      <motion.div
        className="
          w-full max-w-7xl
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8
          px-2 sm:px-6
        "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {filteredMentors.map((mentor, i) => (
          <motion.div
            key={i}
            className="relative bg-white rounded-xl shadow-md p-6 w-full flex flex-col items-start gap-3"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="font-semibold">{mentor.rating}</span>
            </div>
            <div>
              <div className="text-lg font-semibold mb-1">{mentor.name}</div>
              <div className="text-gray-800 font-medium">{mentor.role}</div>
              <div className="text-gray-500 text-sm">{mentor.experience}</div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              {mentor.logo && (
                <img
                  src={mentor.logo}
                  alt=""
                  className="w-5 h-5 object-contain"
                />
              )}
              <span className="text-gray-600 text-sm">{mentor.company}</span>
            </div>
            <button className="mt-4 bg-blue-500 text-white w-full py-2 rounded-lg font-medium hover:bg-blue-600 shadow transition">
              Book a FREE Trial
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Explore Button */}
      <motion.button
        onClick={() => router.push("/mentors")}
        className="flex items-center justify-center gap-1 mt-10 px-6 py-3 rounded-lg shadow font-medium text-black cursor-pointer hover:bg-blue-50 border border-gray-200/80 transition"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Explore All Mentors{" "}
        <Image alt="icon" src="/icons/rightArrowblack.svg" height={8} width={8} />
      </motion.button>
    </div>
  );
}
