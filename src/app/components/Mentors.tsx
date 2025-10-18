'use client';
import React, { useState } from 'react';

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

export default function Mentors() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const filteredMentors = mentors.filter(
    mentor => mentor.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#e3f0fd] flex flex-col items-center py-10 w-full">
      <div className="text-center mb-6">
        <h1 className="text-5xl md:text-4xl font-bold mb-3 leading-14 text-[#191C20]">
          600+ mentors are just a Free Trial Session away!
        </h1>
        <p className="text-gray-700 mb-4">
          Choose your ideal mentor and get started with a FREE trial session
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-medium px-6 py-3 rounded-full cursor-pointer border transition focus:outline-none
                ${activeCategory === cat
                  ? "text-white bg-blue-500"
                  : "text-blue-700 bg-white hover:bg-blue-50 active:bg-blue-100"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMentors.map((mentor, i) => (
          <div
            key={i}
            className="relative bg-white rounded-xl shadow-md p-6 w-72 flex flex-col items-start gap-3"
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
                <img src={mentor.logo} alt="" className="w-5 h-5 object-contain" />
              )}
              <span className="text-gray-600 text-sm">{mentor.company}</span>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white w-full py-2 rounded-lg font-medium hover:bg-blue-600 shadow transition"
            >
              Book a FREE Trial
            </button>
          </div>
        ))}
      </div>
      <button className="mt-10 px-6 py-3 rounded-lg shadow font-medium text-black cursor-pointer hover:bg-blue-50 transition">
        Explore All Mentors &rarr;
      </button>
    </div>
  );
}
