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
  FaFilter,
  FaTimes,
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
  const [showFilters, setShowFilters] = useState(false);

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
    <div className="bg-[#f5f7fa] min-h-screen py-4 md:py-6 px-3 md:px-6 flex justify-center relative z-10 overflow-x-hidden">
      <Image
        src="/img/Ellipse.svg"
        alt="decoration"
        width={1050}
        height={1050}
        className="absolute left-0 top-0 pointer-events-none hidden md:block"
      />
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 z-20 w-full">
        {/* Main content */}
        <div className="flex-1 w-full lg:max-w-4xl">
          {/* Search Bar */}
          <div className="rounded-xl flex flex-col sm:flex-row items-stretch sm:items-center p-2 gap-2 mb-4 bg-[#eef2f7]">
            <div className="relative flex-1">
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
                className="w-full pl-10 pr-4 py-2 rounded-md bg-[#eef2f7] border-none focus:outline-none placeholder:text-gray-400 text-sm"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex-1 sm:flex-none bg-blue-500 text-white font-semibold rounded-md px-6 sm:px-8 py-2 shadow hover:bg-blue-600 transition text-sm">
                Search
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden bg-gray-200 text-gray-700 font-semibold rounded-md px-4 py-2 shadow hover:bg-gray-300 transition flex items-center gap-2"
              >
                <FaFilter size={14} />
                Filters
              </button>
            </div>
          </div>

          {/* Mentor Cards */}
          <div className="space-y-4 md:space-y-6">
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
                  className="bg-white rounded-xl shadow flex flex-col p-4 md:p-6 gap-4"
                >
                  {/* Profile Section */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Profile Image */}
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      <div className="relative w-[140px] sm:w-[170px] h-[170px] sm:h-[210px] rounded-[16px] overflow-hidden bg-gray-200 flex items-center justify-center">
                        <Image
                          src={mentor.profileImg}
                          alt="profile"
                          fill
                          sizes="(max-width: 640px) 140px, 170px"
                          className="object-cover object-top"
                          priority
                        />
                        <div className="absolute bottom-2 left-2 justify-center text-black text-[12px] sm:text-[14px] font-semibold px-2 py-1 rounded flex items-center gap-1">
                          <Image
                            alt="icons"
                            src="/mentor_assets/star.svg"
                            height={16}
                            width={16}
                          />
                          {mentor.rating}
                          <span className="text-white/60 font-extralight text-[10px]">
                            (50+ mentees)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-base sm:text-lg mb-1 flex items-center gap-2">
                        {mentor.name}
                      </div>
                      <div className="flex flex-wrap items-center text-black/80 text-xs font-medium gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <Image
                            alt="icons"
                            src="/mentor_assets/location.svg"
                            height={14}
                            width={14}
                          />
                          <span>{mentor.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Image
                            alt="icons"
                            src="/mentor_assets/reviews.svg"
                            height={14}
                            width={14}
                          />
                          <span>{mentor.reviews} reviews</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Image
                            alt="icons"
                            src="/mentor_assets/language.svg"
                            height={14}
                            width={14}
                          />
                          <span>{mentor.languages.join("/")}</span>
                        </div>
                      </div>

                      {/* Company */}
                      <div className="inline-flex flex-row items-center gap-2 py-2 px-3 sm:px-4 rounded-2xl shadow-sm bg-white border border-gray-200 mb-3">
                        <div className="flex items-center justify-center">
                          <Image
                            alt="icons"
                            src="/img/amazon.svg"
                            height={20}
                            width={20}
                            className="w-4 h-4 sm:w-5 sm:h-5"
                          />
                        </div>
                        <div className="flex flex-col gap-1 text-left min-w-0">
                          <span className="font-semibold text-xs sm:text-sm text-gray-900 truncate">
                            {mentor.title}
                          </span>
                          <span className="font-medium text-xs text-gray-600 truncate">
                            {mentor.company}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="text-gray-700 text-xs sm:text-sm">
                        {readMore
                          ? mentor.description
                          : mentor.description.length > 110
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
                  </div>

                  {/* Skills and Tags */}
                  <div className="px-0 sm:px-2">
                    <div className="flex flex-wrap gap-2">
                      {visibleTags.map((badge, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-600 rounded px-2 py-1 text-xs font-medium"
                        >
                          {badge}
                        </span>
                      ))}
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

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-center text-xs text-gray-500 mt-4">
                      <div className="flex gap-1 items-center">
                        <Image
                          alt="icons"
                          src="/mentor_assets/bag.svg"
                          height={14}
                          width={14}
                        />
                        <span>
                          For:{" "}
                          <span className="text-black font-medium">
                            {mentor.for}
                          </span>
                        </span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <Image
                          alt="icons"
                          src="/mentor_assets/target.svg"
                          height={14}
                          width={14}
                        />
                        <span>
                          Targeting Domain:{" "}
                          <span className="text-black font-medium">
                            {mentor.targeting}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section - Info & CTA */}
                  <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-end gap-4 pt-4 border-t border-gray-100">
                    {/* Session Info */}
                    <ul className="text-[11px] sm:text-[12px] text-gray-600 space-y-2">
                      <li className="flex gap-2 items-center">
                        <Image
                          alt="icons"
                          src="/mentor_assets/phone.svg"
                          height={10}
                          width={10}
                        />
                        {mentor.sessionsPerWeek}+ Sessions Per Week
                      </li>
                      <li className="flex gap-1 items-center">
                        <Image
                          alt="icons"
                          src="/mentor_assets/bag.svg"
                          height={14}
                          width={14}
                        />
                        Referrals in Top Companies
                        <span className="text-blue-500 underline ml-1 cursor-pointer">
                          +{mentor.referrals} More
                        </span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <Image
                          alt="icons"
                          src="/mentor_assets/direction.svg"
                          height={14}
                          width={14}
                        />
                        Detailed Curriculum{" "}
                        {mentor.curriculum ? "Available" : "N/A"}
                        <span className="text-[10px] text-blue-500 underline cursor-pointer">
                          View
                        </span>
                      </li>
                    </ul>

                    {/* Price & Actions */}
                    <div className="flex flex-col items-stretch sm:items-end gap-3 min-w-[180px]">
                      <div className="flex items-center justify-between sm:justify-end gap-2">
                        <span className="text-black font-bold text-lg sm:text-xl">
                          ₹{mentor.price}
                          <span className="text-[10px] text-gray-400 font-extralight">
                            /month
                          </span>
                        </span>
                        <span className="flex gap-1 bg-blue-500 text-white text-[10px] font-semibold rounded-sm px-2 py-1">
                          <Image
                            alt="icon"
                            src="/img/discount.svg"
                            height={10}
                            width={10}
                          />
                          {mentor.discount}
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row lg:flex-col gap-2 w-full">
                        <button
                          className="flex-1 py-2 px-4 rounded-md border border-blue-500 font-semibold text-blue-700 bg-white hover:bg-blue-50 transition text-sm"
                          onClick={() => router.push(`/mentors/${mentor.id}`)}
                        >
                          View Profile
                        </button>
                        <button className="flex-1 py-2 px-4 rounded-md bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition text-sm">
                          Book a Free Trial
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar Filters - Desktop */}
        <aside className="hidden lg:block w-full lg:max-w-xs bg-[#F2F2F2] rounded-xl shadow p-6 flex-shrink-0 h-fit sticky top-4">
          <div className="font-bold text-md mb-6">Filter By</div>
          <div className="space-y-6">
            {/* Domain */}
            <div>
              <label className="font-medium text-[#1C1C1C] mb-2 block text-sm">
                Domain
              </label>
              <input
                type="text"
                placeholder="eg: frontend, backend, etc..."
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full px-3 py-2 rounded bg-white border-none focus:outline-none placeholder:text-[#999] placeholder:text-sm text-sm"
              />
              <div className="flex flex-wrap gap-2 mt-4">
                {allDomains.map((dom) => (
                  <span
                    key={dom}
                    className={`px-4 py-2 rounded-2xl cursor-pointer ${
                      domain === dom
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black/80"
                    } text-xs font-medium`}
                    onClick={() => setDomain(domain === dom ? "" : dom)}
                  >
                    {dom}
                  </span>
                ))}
              </div>
            </div>

            {/* Offering Mentorship For */}
            <div>
              <label className="font-medium text-[#1C1C1C] mb-2 block text-sm">
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
              <label className="font-medium text-[#1C1C1C] mb-2 block text-sm">
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
              <label className="font-medium text-[#1C1C1C] mb-2 block text-sm">
                Companies
              </label>
              <input
                type="text"
                placeholder="eg: amazon, google, microsoft etc."
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3 py-2 rounded bg-white placeholder:text-sm border-none focus:outline-none mb-1 text-sm"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {allCompanies.map((comp) => (
                  <span
                    key={comp}
                    className={`px-4 py-2 rounded-2xl cursor-pointer ${
                      company === comp
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black/80"
                    } text-xs font-medium`}
                    onClick={() => setCompany(company === comp ? "" : comp)}
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <label className="font-medium text-[#1C1C1C] mb-2 block text-sm">
                Skills
              </label>
              <input
                type="text"
                placeholder="eg: java, dsa, sql etc."
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                className="w-full px-3 py-2 rounded bg-white placeholder:text-sm border-none focus:outline-none mb-1 text-sm"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {allSkills.map((sk) => (
                  <span
                    key={sk}
                    className={`px-4 py-2 rounded-2xl cursor-pointer ${
                      skill === sk
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black/80"
                    } text-xs font-medium`}
                    onClick={() => setSkill(skill === sk ? "" : sk)}
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <label className="font-medium text-[#1C1C1C] mb-2 block text-sm">
                Tools
              </label>
              <input
                type="text"
                placeholder="eg: postman, figma etc."
                value={tool}
                onChange={(e) => setTool(e.target.value)}
                className="w-full px-3 py-2 rounded bg-white placeholder:text-sm border-none focus:outline-none mb-1 text-sm"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {allTools.map((toolI) => (
                  <span
                    key={toolI}
                    className={`px-4 py-2 rounded-2xl cursor-pointer ${
                      tool === toolI
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black/80"
                    } text-xs font-medium`}
                    onClick={() => setTool(tool === toolI ? "" : toolI)}
                  >
                    {toolI}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <label className="font-medium text-[#1C1C1C] mb-2 block text-sm">
                Languages
              </label>
              <input
                type="text"
                placeholder="eg: english, hindi, telugu etc."
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-3 py-2 rounded bg-white placeholder:text-sm border-none focus:outline-none mb-1 text-sm"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {allLanguages.map((lang) => (
                  <span
                    key={lang}
                    className={`px-4 py-2 rounded-2xl cursor-pointer ${
                      language === lang
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black/80"
                    } text-xs font-medium`}
                    onClick={() => setLanguage(language === lang ? "" : lang)}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Filter Modal */}
        {showFilters && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#F2F2F2] shadow-xl overflow-y-auto">
              <div className="sticky top-0 bg-[#F2F2F2] p-4 border-b border-gray-300 flex justify-between items-center z-10">
                <h2 className="font-bold text-lg">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="p-4 space-y-6">
                {/* Domain */}
                <div>
                  <label className="font-medium text-[#1C1C1C] mb-2 block text-sm">
                    Domain
                  </label>
                  <input
                    type="text"
                    placeholder="eg: frontend, backend, etc..."
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-white border-none focus:outline-none placeholder:text-[#999] placeholder:text-sm text-sm"
                  />
                  <div className="flex flex-wrap gap-2 mt-4">
                    {allDomains.map((dom) => (
                      <span
                        key={dom}
                        className={`px-4 py-2 rounded-2xl cursor-pointer ${
                          domain === dom
                            ? "bg-blue-500 text-white"
                            : "bg-white text-black/80"
                        } text-xs font-medium`}
                        onClick={() => setDomain(domain === dom ? "" : dom)}
                      >
                        {dom}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Offering Mentorship For */}
                <div>
                  <label className="font-medium text-[#1C1C1C] mb-2 block text-sm">
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
                  <label className="font-medium text-[#1C1C1C] mb-2 block text-sm">
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
                  <label className="font-medium text-[#1C1C1C] mb-2 block text-sm">
                    Companies
                  </label>
                  <input
                    type="text"
                    placeholder="eg: amazon, google, microsoft etc."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-white placeholder:text-sm border-none focus:outline-none mb-1 text-sm"
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {allCompanies.map((comp) => (
                      <span
                        key={comp}
                        className={`px-4 py-2 rounded-2xl cursor-pointer ${
                          company === comp
                            ? "bg-blue-500 text-white"
                            : "bg-white text-black/80"
                        } text-xs font-medium`}
                        onClick={() => setCompany(company === comp ? "" : comp)}
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <label className="font-medium text-[#1C1C1C] mb-2 block text-sm">
                    Skills
                  </label>
                  <input
                    type="text"
                    placeholder="eg: java, dsa, sql etc."
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-white placeholder:text-sm border-none focus:outline-none mb-1 text-sm"
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {allSkills.map((sk) => (
                      <span
                        key={sk}
                        className={`px-4 py-2 rounded-2xl cursor-pointer ${
                          skill === sk
                            ? "bg-blue-500 text-white"
                            : "bg-white text-black/80"
                        } text-xs font-medium`}
                        onClick={() => setSkill(skill === sk ? "" : sk)}
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <label className="font-medium text-[#1C1C1C] mb-2 block text-sm">
                    Tools
                  </label>
                  <input
                    type="text"
                    placeholder="eg: postman, figma etc."
                    value={tool}
                    onChange={(e) => setTool(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-white placeholder:text-sm border-none focus:outline-none mb-1 text-sm"
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {allTools.map((toolI) => (
                      <span
                        key={toolI}
                        className={`px-4 py-2 rounded-2xl cursor-pointer ${
                          tool === toolI
                            ? "bg-blue-500 text-white"
                            : "bg-white text-black/80"
                        } text-xs font-medium`}
                        onClick={() => setTool(tool === toolI ? "" : toolI)}
                      >
                        {toolI}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <label className="font-medium text-[#1C1C1C] mb-2 block text-sm">
                    Languages
                  </label>
                  <input
                    type="text"
                    placeholder="eg: english, hindi, telugu etc."
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-white placeholder:text-sm border-none focus:outline-none mb-1 text-sm"
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {allLanguages.map((lang) => (
                      <span
                        key={lang}
                        className={`px-4 py-2 rounded-2xl cursor-pointer ${
                          language === lang
                            ? "bg-blue-500 text-white"
                            : "bg-white text-black/80"
                        } text-xs font-medium`}
                        onClick={() => setLanguage(language === lang ? "" : lang)}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Filters Button */}
                <div className="sticky bottom-0 bg-[#F2F2F2] pt-4 pb-2 border-t border-gray-300">
                  <button
                    onClick={() => setShowFilters(false)}
                    className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}