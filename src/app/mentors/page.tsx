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
  const [showAllBadges, setShowAllBadges] = useState<{
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
    <div className="bg-[#f5f7fa] min-h-screen py-6 px-6 flex justify-center relative z-10">
      <Image
        src="/img/Ellipse.svg"
        alt="decoration"
        width={1050}
        height={1050}
        className="absolute left-0 top-0 pointer-events-none"
      />
      <div className="container mx-auto flex gap-4 z-20">
        {/* Main left side */}
        <div className="flex-1 max-w-4xl">
          {/* Search Bar */}
          <div className="rounded-xl flex items-center p-2 gap-2 mb-4 bg-[#eef2f7]">
            <div className="relative flex-1">
              {/* Search icon */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <Image
                  src="/img/search.svg"
                  alt="search"
                  width={18}
                  height={18}
                  className="text-gray-400"
                />
              </div>

              <input
                type="text"
                placeholder="Search for any skill, domain or name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md bg-[#eef2f7] border-none focus:outline-none placeholder:text-gray-400"
              />
            </div>
            <button className="bg-blue-500 text-white font-semibold rounded-md px-8 py-2 ml-2 shadow hover:bg-blue-600 transition">
              Search
            </button>
          </div>

          {/* Mentor Cards */}
          {filteredMentors.map((mentor) => {
            const readMore = expandedMentor[mentor.id] || false;
            const showAll = showAllBadges[mentor.id] || false;
            const maxVisibleBadges = 12;
            const visibleTags = showAll
              ? mentor.tags
              : mentor.tags.slice(0, maxVisibleBadges);
            const remainingCount = mentor.tags.length - maxVisibleBadges;

            return (
              <div
                key={mentor.id}
                className="bg-white  rounded-xl shadow flex flex-col md:flex-row p-6 mb-6 gap-2"
              >
                {/* Profile Section */}
                <div className="">
                  <div className=" flex gap-4">
                    <div className="relative w-[170px] h-[210px] rounded-[16px] overflow-hidden bg-gray-200 flex items-center justify-center">
                      <Image
                        src={mentor.profileImg}
                        alt="profile"
                        fill
                        sizes="120px"
                        className="object-cover object-top"
                        priority
                      />
                      {/* Rating badge on profile image */}
                      <div className="absolute bottom-2 left-2 justify-center text-black text-[14px] font-semibold px-2 py-1 rounded flex items-center gap-1">
                        <Image
                          alt="icons"
                          src="/mentor_assets/star.svg"
                          height={16}
                          width={16}
                        />{" "}
                        {mentor.rating}{" "}
                        <span className="text-white/60 font-extralight text-[10px]">
                          (50+ mentees){" "}
                        </span>
                      </div>
                    </div>

                    <div>
                      {/* profile info  */}
                      <div className="font-bold text-lg mb-1 flex items-center gap-2">
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
                      {/* company */}
                      <div className="inline-flex flex-col sm:flex-row sm:items-center gap-2 py-2 px-4 rounded-2xl shadow-sm bg-white border border-gray-200">
                        {/* Icon */}
                        <div className="flex items-center justify-center sm:justify-start">
                          <Image
                            alt="icons"
                            src="/img/amazon.svg"
                            height={24}
                            width={24}
                            className="w-5 h-5 sm:w-6 sm:h-6"
                          />
                        </div>

                        {/* Mentor info */}
                        <div className="flex flex-col gap-1 text-left">
                          <span className="font-semibold text-xs sm:text-sm text-gray-900 truncate">
                            {mentor.title}
                          </span>
                          <span className="font-medium text-xs text-gray-600">
                            {mentor.company}
                          </span>
                        </div>
                      </div>

                      <div className="text-gray-700 text-sm max-w-xs mt-2">
                        {readMore
                          ? mentor.description
                          : mentor.description.length > 210
                          ? mentor.description.slice(0, 110) + "..."
                          : mentor.description}
                        {mentor.description.length > 110 && (
                          <span
                            className="text-blue-500 text-[12px] font-medium cursor-pointer underline ml-1"
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
                    </div>

                    {/* "More" section */}
                    {expandedMentor[mentor.id + "-more"] && (
                      <div className=" text-xs text-gray-600 space-y-1">
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

                  {/* skills and more info */}
                  <div className="pl-2 mt-4 py-2">
                    <div className="mt-3 flex flex-wrap gap-2 max-w-[600px]">
                      {visibleTags.map((badge, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-600 rounded px-2 py-1 text-xs font-medium"
                        >
                          {badge}
                        </span>
                      ))}

                      {/* Show "+X more" button if there are more badges */}
                      {!showAll && remainingCount > 0 && (
                        <button
                          onClick={() =>
                            setShowAllBadges((prev) => ({
                              ...prev,
                              [mentor.id]: true,
                            }))
                          }
                          className="bg-blue-100 text-blue-600 rounded px-2 py-1 text-xs font-semibold hover:bg-blue-200 transition"
                        >
                          +{remainingCount} more
                        </button>
                      )}
                    </div>

                    <div className="flex gap-6 items-center text-xs text-gray-500 mt-6  justify-start">
                      <div className="flex gap-1">
                        <Image
                          alt="icons"
                          src="/mentor_assets/bag.svg"
                          height={16}
                          width={16}
                        />{" "}
                        <span>
                          For:{" "}
                          <span className="text-black font-medium">
                            {mentor.for}
                          </span>
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <Image
                          alt="icons"
                          src="/mentor_assets/target.svg"
                          height={16}
                          width={16}
                        />{" "}
                        <span>
                          Targeting Domain:{" "}
                          <span className="text-black font-medium">
                            {mentor.targeting}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Right */}
                <div className="flex flex-col justify-between items-center gap-2 min-w-[180px] ">
                  <ul className="text-[12px] text-gray-600 mb-2 space-y-2">
                    <li className="flex gap-2 items-center ">
                      <Image
                        alt="icons"
                        src="/mentor_assets/phone.svg"
                        height={10}
                        width={10}
                      />{" "}
                      {mentor.sessionsPerWeek}+ Sessions Per Week
                    </li>
                    <li className="flex gap-1 items-center">
                      <Image
                        alt="icons"
                        src="/mentor_assets/bag.svg"
                        height={14}
                        width={14}
                      />{" "}
                      Referrals in Top Companies{" "}
                      <span className=" text-blue-500 underline ml-1 cursor-pointer">
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
                      <span className="text-[10px] text-blue-500 underline cursor-pointer">
                        View
                      </span>
                    </li>
                  </ul>
                  <div>
                    <div className="flex w-full mt-10  mb-4 text-black font-bold text-lg items-center gap-1 justify-between ">
                      <span>
                        {" "}
                        ₹{mentor.price}{" "}
                        <span className="text-[10px] text-gray-400 font-extralight">
                          /month
                        </span>
                      </span>
                      <span className="flex gap-1 bg-blue-500 text-white text-[10px] font-semibold rounded-sm px-2 py-1 mb-1">
                        <Image
                          alt="icon"
                          src="/img/discount.svg"
                          height={10}
                          width={10}
                        />{" "}
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
        <aside className="w-full max-w-xs bg-[#F2F2F2] rounded-xl shadow p-6 flex flex-col gap-6">
          <div className="font-bold text-md ">Filter By</div>
          {/* Domain */}
          <div>
            <label className="font-medium text-[#1C1C1C] mb-2 block">
              Domain
            </label>
            <input
              type="text"
              placeholder="eg: frontend, backend, etc..."
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full px-3 py-2 rounded bg-white border-none focus:outline-none placeholder:text-[#999] placeholder:text-sm"
            />
            <div className="flex flex-wrap gap-2 mt-4">
              {allDomains.map((dom) => (
                <span
                  key={dom}
                  className={`px-4 py-2 rounded-2xl cursor-pointer ${
                    domain === dom
                      ? "bg-white text-black/80"
                      : "bg-white text-black/80"
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
             <label className="font-medium text-[#1C1C1C] mb-2 block">
            
              Offering Mentorship For
            </label>
            <select className="w-full px-3 py-2 rounded bg-white border-none cursor-pointer focus:outline-none text-gray-400 text-sm">
              <option>Select your experience</option>
              <option>Freshers</option>
              <option>Working Professionals</option>
              <option>Managers</option>
            </select>
          </div>
          {/* Pricing Slider */}
          <div>
             <label className="font-medium text-[#1C1C1C] mb-2 block">
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
              <label className="font-medium text-[#1C1C1C] mb-2 block">
              Companies
            </label>
            <input
              type="text"
              placeholder="eg: amazon, google, microsoft etc."
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-3 py-2 rounded bg-white placeholder:text-sm border-none focus:outline-none mb-1"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {allCompanies.map((comp) => (
                <span
                  key={comp}
                  className={`px-4 py-2 rounded-2xl cursor-pointer ${
                    company === comp
                        ? "bg-white text-black/80"
                      : "bg-white text-black/80"
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
              <label className="font-medium text-[#1C1C1C] mb-2 block">
              Skills
            </label>
            <input
              type="text"
              placeholder="eg: java, dsa, sql etc."
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="w-full px-3 py-2 rounded bg-white placeholder:text-sm border-none focus:outline-none mb-1"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {allSkills.map((sk) => (
                <span
                  key={sk}
                  className={`px-4 py-2 rounded-2xl cursor-pointer ${
                    skill === sk
                   ? "bg-white text-black/80"
                      : "bg-white text-black/80"
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
              <label className="font-medium text-[#1C1C1C] mb-2 block">
              Tools
            </label>
            <input
              type="text"
              placeholder="eg: postman, figma etc."
              value={tool}
              onChange={(e) => setTool(e.target.value)}
              className="w-full px-3 py-2 rounded bg-white placeholder:text-sm border-none focus:outline-none mb-1"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {allTools.map((toolI) => (
                <span
                  key={toolI}
                  className={`px-4 py-2 rounded-2xl cursor-pointer ${
                    tool === toolI
                     ? "bg-white text-black/80"
                      : "bg-white text-black/80"
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
              <label className="font-medium text-[#1C1C1C] mb-2 block">
              Languages
            </label>
            <input
              type="text"
              placeholder="eg: english, hindi, telugu etc."
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2 rounded bg-white placeholder:text-sm border-none focus:outline-none mb-1"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {allLanguages.map((lang) => (
                <span
                  key={lang}
                  className={`px-4 py-2 rounded-2xl cursor-pointer ${
                    language === lang
                ? "bg-white text-black/80"
                      : "bg-white text-black/80"
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
