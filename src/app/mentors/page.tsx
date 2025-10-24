"use client";
import React, { useState, useMemo } from "react";
import { mentors } from "../data/mentorsData";
import { useRouter } from "next/navigation";
import {
  FaStar,
  FaMapMarkerAlt,
  FaBuilding,
  FaLanguage,
  FaUserTie,
  FaBook,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import Image from "next/image";

const allDomains = [
  "Frontend",
  "Backend",
  "Fullstack",
  "DevOps & Sec",
  "Cloud",
  "QA / Automation Testing",
  "Data Scientist",
  "Data Analyst",
];
const allCompanies = [
  "Amazon",
  "Microsoft",
  "Tata Consultancy Services",
  "Google",
  "Adobe",
];
const allSkills = [
  "Leadership & Communication",
  "SQL",
  "DSA",
  "Java",
  "System Design",
];
const allTools = ["Postman", "Visual Studio Code", "Docker", "GitHub"];
const allLanguages = ["English", "Hindi", "Telugu", "Tamil", "Marathi"];

export default function MentorSearchPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState("");
  const [company, setCompany] = useState("");
  const [skill, setSkill] = useState("");
  const [tool, setTool] = useState("");
  const [language, setLanguage] = useState("");
  const [minPrice, setMinPrice] = useState(150);
  const [maxPrice, setMaxPrice] = useState(7000);
  const [expandedMentor, setExpandedMentor] = useState<{
    [id: string]: boolean;
  }>({});

  const filteredMentors = useMemo(
    () =>
      mentors.filter(
        (mentor) =>
          (!search ||
            mentor.name.toLowerCase().includes(search.toLowerCase()) ||
            mentor.title.toLowerCase().includes(search.toLowerCase())) &&
          (!domain || mentor.domain.includes(domain)) &&
          (!company || mentor.companies.includes(company)) &&
          (!skill || mentor.skills.includes(skill)) &&
          (!tool || mentor.tools.includes(tool)) &&
          (!language || mentor.languages.includes(language)) &&
          mentor.price >= minPrice &&
          mentor.price <= maxPrice
      ),
    [search, domain, company, skill, tool, language, minPrice, maxPrice]
  );

  return (
    <div className="bg-[#f5f7fa] min-h-screen py-8 px-0 flex justify-center">
      <div className="container mx-auto flex gap-6">
        {/* Main left side */}
        <div className="flex-1 max-w-4xl">
          {/* Search Bar */}
          <div className="rounded-xl bg-white shadow flex items-center p-3 gap-2 mb-8">
            <input
              type="text"
              placeholder="Search for any skill, domain or name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md bg-[#eef2f7] border-none focus:outline-none"
            />
            <button className="bg-blue-500 text-white font-semibold rounded-md px-8 py-2 ml-2 shadow hover:bg-blue-600 transition">
              Search
            </button>
          </div>
          {/* Mentor Cards */}
          {filteredMentors.map((mentor) => {
            const readMore = expandedMentor[mentor.id] || false;
            return (
              <div
                key={mentor.id}
                className="bg-white rounded-xl shadow flex flex-col md:flex-row p-6 mb-6 gap-6"
              >
                {/* Profile Section */}
                <div className="flex gap-6">
                  <div className="relative w-[120px] h-[160px] rounded-[16px] overflow-hidden bg-gray-200 border flex items-center justify-center">
                    <Image
                      src={mentor.profileImg}
                      alt="profile"
                      fill
                      sizes="120px"
                      className="object-cover object-top"
                      priority
                    />
                    {/* Rating badge on profile image */}
                    <div className="absolute bottom-2 left-2  text-black text-[12px] font-semibold px-2 py-1 rounded flex items-center gap-1">
                      <Image
                        alt="icons"
                        src="/mentor_assets/star.svg"
                        height={12}
                        width={12}
                      />{" "}
                      {mentor.rating}{" "}
                      <span className="text-white/60 font-extralight text-[8px]">
                        (50+ mentees){" "}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 flex items-center gap-2">
                      <BsFillPersonFill className="inline-block text-gray-400" />
                      {mentor.name}
                    </div>
                    <div className="flex items-center text-black/80 text-xs font-medium gap-2 mb-2">
                      <Image
                        alt="icons"
                        src="/mentor_assets/location.svg"
                        height={16}
                        width={16}
                      />
                      <span>{mentor.location}</span>
                      <Image
                        alt="icons"
                        src="/mentor_assets/reviews.svg"
                        height={16}
                        width={16}
                      />{" "}
                      <span>{mentor.reviews} reviews</span>
                      <Image
                        alt="icons"
                        src="/mentor_assets/language.svg"
                        height={16}
                        width={16}
                      />{" "}
                      <span>{mentor.languages.join("/")}</span>
                    </div>
                    <div className="flex flex-col py-4 sm:flex-row sm:items-center justify-start gap-2 p-2 shadow-sm w-full">
                      {/* Icon */}
                      <div className="flex items-center gap-2">
                        <Image
                          alt="icons"
                          src="/img/amazon.svg"
                          height={20}
                          width={20}
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                      </div>

                      {/* Mentor info */}
                      <div className="flex flex-col gap-1 font-medium text-xs sm:text-sm w-full">
                        <span className="truncate">{mentor.title}</span>
                        <span className="font-medium text-gray-600 rounded inline-block w-fit">
                          {mentor.company}
                        </span>
                      </div>
                    </div>

                    <div className="text-gray-700 text-sm max-w-md mt-4">
                      {readMore
                        ? mentor.description
                        : mentor.description.length > 210
                        ? mentor.description.slice(0, 110) + "..."
                        : mentor.description}
                      {mentor.description.length > 110 && (
                        <span
                          className="text-blue-500 cursor-pointer underline ml-1"
                          onClick={() =>
                            setExpandedMentor((exp) => ({
                              ...exp,
                              [mentor.id]: !readMore,
                            }))
                          }
                        >
                          {readMore ? "Show Less" : "Read More"}
                        </span>
                      )}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {mentor.tags.map((badge) => (
                        <span
                          key={badge}
                          className="bg-[#eef2f7] text-gray-600 rounded px-2 py-1 text-xs font-medium"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mt-4 justify-between">
                      <div className="flex items-center gap-1">
                        <Image
                          alt="icons"
                          src="/mentor_assets/bag.svg"
                          height={16}
                          width={16}
                        />{" "}
                        <span>For: {mentor.for}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Image
                          alt="icons"
                          src="/mentor_assets/target.svg"
                          height={16}
                          width={16}
                        />{" "}
                        <span>Targeting Domain: {mentor.targeting}</span>
                      </div>
                      <span
                        className="text-blue-500 underline cursor-pointer flex items-center"
                        onClick={() =>
                          setExpandedMentor((exp) => ({
                            ...exp,
                            [mentor.id + "-more"]: !exp[mentor.id + "-more"],
                          }))
                        }
                      >
                        More{" "}
                        {expandedMentor[mentor.id + "-more"] ? (
                          <FaChevronUp className="ml-1" />
                        ) : (
                          <FaChevronDown className="ml-1" />
                        )}
                      </span>
                    </div>
                    {/* "More" section */}
                    {expandedMentor[mentor.id + "-more"] && (
                      <div className="mt-3 text-xs text-gray-600 space-y-1">
                        <div>
                          <FaUserTie className="inline-block mr-1" />
                          Experience: {mentor.sessionsPerWeek}+ Sessions/Week
                        </div>
                        <div>
                          <FaBuilding className="inline-block mr-1" />
                          Referrals in Top Companies: {mentor.referrals}
                        </div>
                        <div>
                          <FaBook className="inline-block mr-1" />
                          Curriculum:{" "}
                          {mentor.curriculum ? "Available" : "Not Available"}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* Card Right */}
                <div className="flex flex-col justify-between items-center gap-2 min-w-[180px]">
                  <ul className="text-[11px] text-gray-500 mb-2 space-y-2">
                    <li className="flex gap-2 items-center">
                      <Image
                        alt="icons"
                        src="/mentor_assets/phone.svg"
                        height={10}
                        width={10}
                      />{" "}
                      {mentor.sessionsPerWeek}+ Sessions Per Week
                    </li>
                    <li className="flex gap-2 items-center">
                      <Image
                        alt="icons"
                        src="/mentor_assets/bag.svg"
                        height={14}
                        width={14}
                      />{" "}
                      Referrals in Top Companies{" "}
                      <span className="text-blue-500 underline ml-1">
                        +{mentor.referrals} More
                      </span>
                    </li>

                    <li className="flex gap-2 items-center">
                      <Image
                        alt="icons"
                        src="/mentor_assets/direction.svg"
                        height={14}
                        width={14}
                      />{" "}
                      Detailed Curriculum{" "}
                      {mentor.curriculum ? "Available" : "N/A"}
                    </li>
                  </ul>
<div>
                  <div className="flex w-full mt-10  mb-4 text-black font-bold text-lg items-center gap-1 justify-between ">
                  
                  <span> ₹{mentor.price}{" "}
                    <span className="text-[10px] text-gray-400 font-extralight">/month</span></span> 
                    <span className="bg-blue-500 text-white text-[10px] font-semibold rounded-sm px-2 py-1 mb-1">
                    {mentor.discount}
                  </span>
                  </div>
                  
                  <button
                    className="w-full py-2 cursor-pointer px-2 rounded-md border border-blue-500 font-semibold text-blue-700 bg-white hover:bg-blue-50 transition mb-2"
                    onClick={() => router.push(`/mentors/${mentor.id}`)}
                  >
                    View Profile
                  </button>
                  <button className="w-full py-2 cursor-pointer px-2 rounded-md bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition">
                    Book a Free Trial
                  </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Sidebar Filters */}
        <aside className="w-full max-w-xs bg-white rounded-xl shadow p-6 flex flex-col gap-6">
          <div className="font-bold text-lg mb-4">Filter By</div>
          {/* Domain */}
          <div>
            <label className="font-semibold text-gray-700 mb-2 block">
              Domain
            </label>
            <input
              type="text"
              placeholder="eg: frontend, backend, etc."
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full px-3 py-2 rounded bg-[#eef2f7] border-none focus:outline-none"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {allDomains.map((dom) => (
                <span
                  key={dom}
                  className={`px-2 py-1 rounded cursor-pointer ${
                    domain === dom
                      ? "bg-blue-500 text-white"
                      : "bg-blue-100 text-blue-600"
                  } text-xs font-medium`}
                  onClick={() => setDomain(dom)}
                >
                  {dom}
                </span>
              ))}
            </div>
          </div>
          {/* Offering Mentorship For */}
          <div>
            <label className="font-semibold text-gray-700 mb-2 block">
              Offering Mentorship For
            </label>
            <select className="w-full px-3 py-2 rounded bg-[#eef2f7] border-none focus:outline-none">
              <option>Select your experience</option>
              <option>Freshers</option>
              <option>Working Professionals</option>
              <option>Managers</option>
            </select>
          </div>
          {/* Pricing Slider */}
          <div>
            <label className="font-semibold text-gray-700 mb-2 block">
              Pricing
            </label>
            <input
              type="range"
              min={150}
              max={7000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>{minPrice}</span>
              <span>{maxPrice}</span>
            </div>
          </div>
          {/* Companies */}
          <div>
            <label className="font-semibold text-gray-700 mb-2 block">
              Companies
            </label>
            <input
              type="text"
              placeholder="eg: amazon, google, microsoft etc."
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-3 py-2 rounded bg-[#eef2f7] border-none focus:outline-none mb-1"
            />
            <div className="flex flex-wrap gap-2">
              {allCompanies.map((comp) => (
                <span
                  key={comp}
                  className={`px-2 py-1 rounded cursor-pointer ${
                    company === comp
                      ? "bg-blue-500 text-white"
                      : "bg-[#eef2f7] text-gray-600"
                  } text-xs font-medium`}
                  onClick={() => setCompany(comp)}
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>
          {/* Skills */}
          <div>
            <label className="font-semibold text-gray-700 mb-2 block">
              Skills
            </label>
            <input
              type="text"
              placeholder="eg: java, dsa, sql etc."
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="w-full px-3 py-2 rounded bg-[#eef2f7] border-none focus:outline-none mb-1"
            />
            <div className="flex flex-wrap gap-2">
              {allSkills.map((sk) => (
                <span
                  key={sk}
                  className={`px-2 py-1 rounded cursor-pointer ${
                    skill === sk
                      ? "bg-blue-500 text-white"
                      : "bg-[#eef2f7] text-gray-600"
                  } text-xs font-medium`}
                  onClick={() => setSkill(sk)}
                >
                  {sk}
                </span>
              ))}
            </div>
          </div>
          {/* Tools */}
          <div>
            <label className="font-semibold text-gray-700 mb-2 block">
              Tools
            </label>
            <input
              type="text"
              placeholder="eg: postman, figma etc."
              value={tool}
              onChange={(e) => setTool(e.target.value)}
              className="w-full px-3 py-2 rounded bg-[#eef2f7] border-none focus:outline-none mb-1"
            />
            <div className="flex flex-wrap gap-2">
              {allTools.map((toolI) => (
                <span
                  key={toolI}
                  className={`px-2 py-1 rounded cursor-pointer ${
                    tool === toolI
                      ? "bg-blue-500 text-white"
                      : "bg-[#eef2f7] text-gray-600"
                  } text-xs font-medium`}
                  onClick={() => setTool(toolI)}
                >
                  {toolI}
                </span>
              ))}
            </div>
          </div>
          {/* Languages */}
          <div>
            <label className="font-semibold text-gray-700 mb-2 block">
              Languages
            </label>
            <input
              type="text"
              placeholder="eg: english, hindi, telugu etc."
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2 rounded bg-[#eef2f7] border-none focus:outline-none mb-1"
            />
            <div className="flex flex-wrap gap-2">
              {allLanguages.map((lang) => (
                <span
                  key={lang}
                  className={`px-2 py-1 rounded cursor-pointer ${
                    language === lang
                      ? "bg-blue-500 text-white"
                      : "bg-[#eef2f7] text-gray-600"
                  } text-xs font-medium`}
                  onClick={() => setLanguage(lang)}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
