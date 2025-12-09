"use client";
import React, { useState, useMemo, useEffect } from "react";
import { mentors } from "../data/mentorsData";
import { useRouter } from "next/navigation";
import { FaFilter, FaTimes } from "react-icons/fa";
import Image from "next/image";

/**
 * NOTE:
 * - This file assumes you already have global CSS variables defined
 *   (as you confirmed). Example variable names used below:
 *   --bg-color, --card-bg, --input-bg, --text-color, --secondary-text,
 *   --border, --accent, --badge-bg
 *
 * - All hard-coded hex colors have been replaced with CSS variable references
 *   using Tailwind arbitrary value syntax where appropriate (e.g. bg-[var(--bg-color)]).
 */

/* Filter lists (kept same as your original) */
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

  // Theme state (CSS variables are expected to be defined globally)
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Filters & UI state (kept from your original file)
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
  const [showAllBadges, setShowAllBadges] = useState<{ [id: string]: boolean }>(
    {}
  );
  const [showFilters, setShowFilters] = useState(false);

  // Apply theme by setting a data attribute on <html> (you said you already have global CSS vars)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Filtered mentors (same logic, unchanged)
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
    <div className="min-h-screen py-4 md:py-6 px-3 md:px-6 flex justify-center relative z-10 overflow-x-hidden bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300">
      {/* Decorative ellipse (kept) */}
      <Image
        src="/img/Ellipse.svg"
        alt="decoration"
        width={1050}
        height={1050}
        className="absolute left-0 top-0 pointer-events-none hidden md:block"
      />

      {/* Theme toggle (top-right) */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
          className="border border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-color)] px-3 py-1.5 rounded-lg text-sm hover:bg-[var(--input-bg)] transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row gap-4 z-20 w-full max-w-7xl">
        {/* Main content */}
        <div className="flex-1 w-full lg:max-w-4xl">
          {/* Search Bar */}
          <div
            className="rounded-xl flex flex-col border border-gray-600/20 sm:flex-row items-stretch sm:items-center p-2 gap-2 mb-4"
            // use container-level background via input-bg variable
            style={{ background: "var(--input-bg)" }}
          >
            <div className="relative flex-1">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ">
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
                className="w-full pl-10 pr-4 py-2 rounded-md bg-[transparent] border-none focus:outline-none placeholder:text-[var(--secondary-text)] text-sm"
                aria-label="Search mentors"
              />
            </div>

            <div className="flex gap-2">
              <button
                className="flex-1 border cursor-pointer border-gray-100/20 sm:flex-none bg-[var(--accent)] text-[var(--btn-text)] font-semibold rounded-md px-6 sm:px-8 py-2 shadow hover:brightness-90 transition text-sm"
                onClick={() => {
                  /* keep same behavior — could optionally trigger a search */
                }}
              >
                Search
              </button>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden bg-[var(--card-bg)] text-[var(--text-color)] font-semibold rounded-md px-4 py-2 shadow hover:opacity-95 transition flex items-center gap-2 border border-[var(--border)]"
                aria-expanded={showFilters}
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
                  className="rounded-xl shadow flex flex-col p-4 md:p-6 gap-4"
                  style={{
                    background: "var(--card-bg)",
                    border: `1px solid var(--border)`,
                  }}
                >
                  {/* Profile Section */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Profile Image */}
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      <div
                        className="relative w-[140px] sm:w-[170px] h-[170px] sm:h-[210px] rounded-[16px] overflow-hidden flex items-center justify-center"
                        style={{ background: "var(--badge-bg, #e6eefc)" }}
                      >
                        <Image
                          src={mentor.profileImg}
                          alt="profile"
                          fill
                          sizes="(max-width: 640px) 140px, 170px"
                          className="object-cover object-top"
                          priority
                        />
                        <div
                          className="absolute bottom-2 left-2 justify-center text-[12px] sm:text-[14px] font-semibold px-2 py-1 rounded flex items-center gap-1"
                          style={{
                            color: "white",
                          }}
                        >
                          <Image
                            alt="icons"
                            src="/mentor_assets/star.svg"
                            height={16}
                            width={16}
                          />
                          {mentor.rating}
                          <span
                            className="font-extralight text-[10px]"
                            style={{ color: "white" }}
                          >
                            (50+ mentees)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1 min-w-0">
                      <div
                        className="font-bold text-base sm:text-lg mb-1 flex items-center gap-2"
                        style={{ color: "var(--text-color)" }}
                      >
                        {mentor.name}
                      </div>
                      <div
                        className="flex flex-wrap items-center text-xs font-medium gap-2 mb-2"
                        style={{ color: "var(--secondary-text)" }}
                      >
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
                      <div
                        className="inline-flex flex-row items-center gap-2 py-2 px-3 sm:px-4 rounded-2xl shadow-sm mb-3"
                        style={{
                          background: "var(--card-bg)",
                          border: `1px solid var(--border)`,
                        }}
                      >
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
                          <span
                            className="font-semibold text-xs sm:text-sm truncate"
                            style={{ color: "var(--text-color)" }}
                          >
                            {mentor.title}
                          </span>
                          <span
                            className="font-medium text-xs truncate"
                            style={{ color: "var(--secondary-text)" }}
                          >
                            {mentor.company}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <div
                        className="text-xs sm:text-sm"
                        style={{ color: "var(--secondary-text)" }}
                      >
                        {readMore
                          ? mentor.description
                          : mentor.description.length > 110
                          ? mentor.description.slice(0, 110) + "..."
                          : mentor.description}
                        {mentor.description.length > 110 && (
                          <span
                            className="text-[12px] font-medium cursor-pointer underline ml-1"
                            onClick={() =>
                              setExpandedMentor((exp) => ({
                                ...exp,
                                [mentor.id]: !readMore,
                              }))
                            }
                            style={{ color: "var(--accent)" }}
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
                      {visibleTags.map((badge: string, idx: number) => (
                        <span
                          key={idx}
                          className="rounded px-2 py-1 text-xs font-medium"
                          style={{
                            background: "var(--input-bg)",
                            color: "var(--secondary-text)",
                            border: `1px solid var(--border)`,
                          }}
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
                          className="rounded px-2 py-1 text-xs font-semibold hover:opacity-95 transition"
                          style={{
                            background: "var(--accent)",
                            color: "#fff",
                          }}
                        >
                          +{remainingCount} more
                        </button>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-center text-xs mt-4">
                      <div
                        className="flex gap-1 items-center"
                        style={{ color: "var(--secondary-text)" }}
                      >
                        <Image
                          alt="icons"
                          src="/mentor_assets/bag.svg"
                          height={14}
                          width={14}
                        />
                        <span>
                          For:{" "}
                          <span
                            style={{
                              color: "var(--text-color)",
                              fontWeight: 600,
                            }}
                          >
                            {mentor.for}
                          </span>
                        </span>
                      </div>
                      <div
                        className="flex gap-1 items-center"
                        style={{ color: "var(--secondary-text)" }}
                      >
                        <Image
                          alt="icons"
                          src="/mentor_assets/target.svg"
                          height={14}
                          width={14}
                        />
                        <span>
                          Targeting Domain:{" "}
                          <span
                            style={{
                              color: "var(--text-color)",
                              fontWeight: 600,
                            }}
                          >
                            {mentor.targeting}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section - Info & CTA */}
                  <div
                    className="flex flex-col lg:flex-row justify-between items-stretch lg:items-end gap-4 pt-4"
                    style={{ borderTop: `1px solid var(--border)` }}
                  >
                    {/* Session Info */}
                    <ul
                      className="text-[11px] sm:text-[12px] space-y-2"
                      style={{ color: "var(--secondary-text)" }}
                    >
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
                        <span
                          style={{
                            color: "var(--accent)",
                            textDecoration: "underline",
                            marginLeft: 6,
                            cursor: "pointer",
                          }}
                        >
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
                        <span
                          style={{
                            color: "var(--accent)",
                            textDecoration: "underline",
                            marginLeft: 6,
                            cursor: "pointer",
                            fontSize: 10,
                          }}
                        >
                          View
                        </span>
                      </li>
                    </ul>

                    {/* Price & Actions */}
                    <div className="flex flex-col items-stretch sm:items-end gap-3 min-w-[180px]">
                      <div className="flex items-center justify-between sm:justify-end gap-2">
                        <span
                          style={{
                            color: "var(--text-color)",
                            fontWeight: 700,
                            fontSize: 20,
                          }}
                        >
                          ₹{mentor.price}
                          <span
                            style={{
                              color: "var(--secondary-text)",
                              fontWeight: 300,
                              fontSize: 10,
                            }}
                          >
                            /month
                          </span>
                        </span>
                        <span
                          style={{
                            background:
                              "var(--mentorsearch-btn-secondary-border)",
                            color: "var(--accent)",
                            display: "inline-flex",
                            gap: 6,
                            alignItems: "center",
                            padding: "4px 6px",
                            borderRadius: 4,
                            fontSize: 10,
                            fontWeight: 600,
                          }}
                        >
                          <Image
                            alt="icon"
                            src="/img/discount.svg"
                            height={10}
                            width={10}
                          />
                          {mentor.discount}
                        </span>
                      </div>

                      <div className="flex flex-col  sm:flex-row lg:flex-col gap-2 w-full">
                        <button
                          className="flex-1 py-2 px-4 cursor-pointer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rounded-md border font-semibold text-sm"
                          style={{
                            borderColor:
                              "var(--mentorsearch-btn-secondary-border)",
                            color: "var(--accent)",
                            background: "var(--card-bg)",
                          }}
                          onClick={() => router.push(`/mentors/${mentor.id}`)}
                        >
                          View Profile
                        </button>
                        <button
                          className="flex-1 py-2 cursor-pointer px-4 rounded-md border font-semibold text-sm"
                          style={{
                            borderColor:
                              "var(--mentorsearch-btn-secondary-border)",
                            color: "var(--accent)",
                            background:
                              "var(--mentorsearch-btn-secondary-border)",
                          }}
                        >
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
        <aside
          className="hidden lg:block w-full lg:max-w-xs rounded-xl p-6 flex-shrink-0 h-fit sticky"
          style={{
            background: "var(--card-bg)",
            border: `1px solid var(--border)`,
          }}
        >
          <div
            className="font-bold text-md mb-6"
            style={{ color: "var(--text-color)" }}
          >
            Filter By
          </div>

          <div className="space-y-6">
            {/* Domain */}
            <div>
              <label
                className="font-medium mb-2 block text-sm"
                style={{ color: "var(--text-color)" }}
              >
                Domain
              </label>

              <input
                type="text"
                placeholder="eg: frontend, backend, etc..."
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[var(--card-bg)] border-none focus:outline-none placeholder:text-[var(--secondary-text)] placeholder:text-sm text-sm"
              />

              <div className="flex flex-wrap gap-2 mt-4">
                {allDomains.map((dom) => (
                  <span
                    key={dom}
                    onClick={() => setDomain(domain === dom ? "" : dom)}
                    className={`px-4 py-2 rounded-2xl cursor-pointer text-xs font-medium transition-all duration-200
              ${
                domain === dom
                  ? "text-blue-600 border-blue-500 shadow-sm scale-[1.05]"
                  : "text-[var(--text-color)] border-[var(--border)] bg-[var(--card-bg)]"
              }
            `}
                    style={{ borderWidth: "1px" }}
                  >
                    {dom}
                  </span>
                ))}
              </div>
            </div>

            {/* Companies */}
            <div>
              <label
                className="font-medium mb-2 block text-sm"
                style={{ color: "var(--text-color)" }}
              >
                Companies
              </label>

              <input
                type="text"
                placeholder="eg: amazon, google, microsoft etc."
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[var(--card-bg)] placeholder:text-sm border-none focus:outline-none mb-1 text-sm"
              />

              <div className="flex flex-wrap gap-2 mt-2">
                {allCompanies.map((comp) => (
                  <span
                    key={comp}
                    onClick={() => setCompany(company === comp ? "" : comp)}
                    className={`px-4 py-2 rounded-2xl cursor-pointer text-xs font-medium transition-all duration-200
              ${
                company === comp
                  ? "text-blue-600 border-blue-500  shadow-sm scale-[1.05]"
                  : "text-[var(--text-color)] border-[var(--border)] bg-[var(--card-bg)]"
              }
            `}
                    style={{ borderWidth: "1px" }}
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <label
                className="font-medium mb-2 block text-sm"
                style={{ color: "var(--text-color)" }}
              >
                Skills
              </label>

              <input
                type="text"
                placeholder="eg: java, dsa, sql etc."
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[var(--card-bg)] placeholder:text-sm border-none focus:outline-none mb-1 text-sm"
              />

              <div className="flex flex-wrap gap-2 mt-2">
                {allSkills.map((sk) => (
                  <span
                    key={sk}
                    onClick={() => setSkill(skill === sk ? "" : sk)}
                    className={`px-4 py-2 rounded-2xl cursor-pointer text-xs font-medium transition-all duration-200
              ${
                skill === sk
                  ? "text-blue-600 border-blue-500  shadow-sm scale-[1.05]"
                  : "text-[var(--text-color)] border-[var(--border)] bg-[var(--card-bg)]"
              }
            `}
                    style={{ borderWidth: "1px" }}
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <label
                className="font-medium mb-2 block text-sm"
                style={{ color: "var(--text-color)" }}
              >
                Tools
              </label>

              <input
                type="text"
                placeholder="eg: postman, figma etc."
                value={tool}
                onChange={(e) => setTool(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[var(--card-bg)] placeholder:text-sm border-none focus:outline-none mb-1 text-sm"
              />

              <div className="flex flex-wrap gap-2 mt-2">
                {allTools.map((toolI) => (
                  <span
                    key={toolI}
                    onClick={() => setTool(tool === toolI ? "" : toolI)}
                    className={`px-4 py-2 rounded-2xl cursor-pointer text-xs font-medium transition-all duration-200
              ${
                tool === toolI
                  ? "text-blue-600 border-blue-500  shadow-sm scale-[1.05]"
                  : "text-[var(--text-color)] border-[var(--border)] bg-[var(--card-bg)]"
              }
            `}
                    style={{ borderWidth: "1px" }}
                  >
                    {toolI}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <label
                className="font-medium mb-2 block text-sm"
                style={{ color: "var(--text-color)" }}
              >
                Languages
              </label>

              <input
                type="text"
                placeholder="eg: english, hindi, telugu etc."
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[var(--card-bg)] placeholder:text-sm border-none focus:outline-none mb-1 text-sm"
              />

              <div className="flex flex-wrap gap-2 mt-2">
                {allLanguages.map((lang) => (
                  <span
                    key={lang}
                    onClick={() => setLanguage(language === lang ? "" : lang)}
                    className={`px-4 py-2 rounded-2xl cursor-pointer text-xs font-medium transition-all duration-200
              ${
                language === lang
                  ? "text-blue-600 border-blue-500  shadow-sm scale-[1.05]"
                  : "text-[var(--text-color)] border-[var(--border)] bg-[var(--card-bg)]"
              }
            `}
                    style={{ borderWidth: "1px" }}
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
            <div
              className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto"
              style={{ background: "var(--card-bg)" }}
            >
              <div
                className="sticky top-0 p-4 border-b border-[var(--border)] flex justify-between items-center z-10"
                style={{ background: "var(--card-bg)" }}
              >
                <h2
                  className="font-bold text-lg"
                  style={{ color: "var(--text-color)" }}
                >
                  Filters
                </h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-[var(--secondary-text)] hover:text-[var(--text-color)]"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="p-4 space-y-6">
                {/* Domain */}
                <div>
                  <label
                    className="font-medium mb-2 block text-sm"
                    style={{ color: "var(--text-color)" }}
                  >
                    Domain
                  </label>
                  <input
                    type="text"
                    placeholder="eg: frontend, backend, etc..."
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[var(--card-bg)] border-none focus:outline-none placeholder:text-[var(--secondary-text)] placeholder:text-sm text-sm"
                  />
                  <div className="flex flex-wrap gap-2 mt-4">
                    {allDomains.map((dom) => (
                      <span
                        key={dom}
                        onClick={() => setDomain(domain === dom ? "" : dom)}
                        className={`
                  px-4 py-2 rounded-2xl cursor-pointer text-xs font-medium border transition-all duration-200
                  ${
                    domain === dom
                      ? "border-blue-500 text-blue-600 shadow-sm scale-[1.03]"
                      : "border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-color)] hover:border-blue-400 hover:text-blue-500"
                  }
                `}
                      >
                        {dom}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Offering Mentorship For */}
                <div>
                  <label
                    className="font-medium mb-2 block text-sm"
                    style={{ color: "var(--text-color)" }}
                  >
                    Offering Mentorship For
                  </label>
                  <select className="w-full px-3 py-2 rounded bg-[var(--card-bg)] border-none cursor-pointer focus:outline-none text-[var(--secondary-text)] text-sm">
                    <option>Select your experience</option>
                    <option>Freshers</option>
                    <option>Working Professionals</option>
                    <option>Managers</option>
                  </select>
                </div>

                {/* Pricing Slider */}
                <div>
                  <label
                    className="font-medium mb-2 block text-sm"
                    style={{ color: "var(--text-color)" }}
                  >
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
                  <div
                    className="flex justify-between text-xs mt-1"
                    style={{ color: "var(--secondary-text)" }}
                  >
                    <span>{minPrice}</span>
                    <span>{maxPrice}</span>
                  </div>
                </div>

                {/* Companies */}
                <div>
                  <label
                    className="font-medium mb-2 block text-sm"
                    style={{ color: "var(--text-color)" }}
                  >
                    Companies
                  </label>
                  <input
                    type="text"
                    placeholder="eg: amazon, google, microsoft etc."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[var(--card-bg)] placeholder:text-sm border-none focus:outline-none mb-1 text-sm"
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {allCompanies.map((comp) => (
                      <span
                        key={comp}
                        onClick={() => setCompany(company === comp ? "" : comp)}
                        className={`
                  px-4 py-2 rounded-2xl cursor-pointer text-xs font-medium border transition-all duration-200
                  ${
                    company === comp
                      ? "border-blue-500 text-blue-600 shadow-sm scale-[1.03]"
                      : "border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-color)] hover:border-blue-400 hover:text-blue-500"
                  }
                `}
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <label
                    className="font-medium mb-2 block text-sm"
                    style={{ color: "var(--text-color)" }}
                  >
                    Skills
                  </label>
                  <input
                    type="text"
                    placeholder="eg: java, dsa, sql etc."
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[var(--card-bg)] placeholder:text-sm border-none focus:outline-none mb-1 text-sm"
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {allSkills.map((sk) => (
                      <span
                        key={sk}
                        onClick={() => setSkill(skill === sk ? "" : sk)}
                        className={`
                  px-4 py-2 rounded-2xl cursor-pointer text-xs font-medium border transition-all duration-200
                  ${
                    skill === sk
                      ? "border-blue-500 text-blue-600 shadow-sm scale-[1.03]"
                      : "border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-color)] hover:border-blue-400 hover:text-blue-500"
                  }
                `}
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <label
                    className="font-medium mb-2 block text-sm"
                    style={{ color: "var(--text-color)" }}
                  >
                    Tools
                  </label>
                  <input
                    type="text"
                    placeholder="eg: postman, figma etc."
                    value={tool}
                    onChange={(e) => setTool(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[var(--card-bg)] placeholder:text-sm border-none focus:outline-none mb-1 text-sm"
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {allTools.map((toolI) => (
                      <span
                        key={toolI}
                        onClick={() => setTool(tool === toolI ? "" : toolI)}
                        className={`
                  px-4 py-2 rounded-2xl cursor-pointer text-xs font-medium border transition-all duration-200
                  ${
                    tool === toolI
                      ? "border-blue-500 text-blue-600 shadow-sm scale-[1.03]"
                      : "border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-color)] hover:border-blue-400 hover:text-blue-500"
                  }
                `}
                      >
                        {toolI}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <label
                    className="font-medium mb-2 block text-sm"
                    style={{ color: "var(--text-color)" }}
                  >
                    Languages
                  </label>
                  <input
                    type="text"
                    placeholder="eg: english, hindi, telugu etc."
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[var(--card-bg)] placeholder:text-sm border-none focus:outline-none mb-1 text-sm"
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {allLanguages.map((lang) => (
                      <span
                        key={lang}
                        onClick={() =>
                          setLanguage(language === lang ? "" : lang)
                        }
                        className={`
                  px-4 py-2 rounded-2xl cursor-pointer text-xs font-medium border transition-all duration-200
                  ${
                    language === lang
                      ? "border-blue-500 text-blue-600 shadow-sm scale-[1.03]"
                      : "border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-color)] hover:border-blue-400 hover:text-blue-500"
                  }
                `}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Filters */}
                <div
                  className="sticky bottom-0 pt-4 pb-2 border-t border-[var(--border)]"
                  style={{ background: "var(--card-bg)" }}
                >
                  <button
                    onClick={() => setShowFilters(false)}
                    className="w-full py-3 font-semibold rounded-lg shadow hover:opacity-95 transition"
                    style={{ background: "var(--accent)", color: "#fff" }}
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
