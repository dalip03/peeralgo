"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const monthsData = [
  {
    id: 1,
    title: "Month 1 of Mentorship",
    goal: "Technical Improvement: Java & Multithreading, Core Java",
    sessions: [
      { title: "1:1 Planning Session", duration: "30 Minutes", color: "green" },
      { title: "2 Upskilling Sessions", duration: "60 Minutes", color: "green" },
      { title: "1:1 Monthly Retrospective Session", duration: "30 Minutes", color: "green" },
      { title: "Instant Chat With Mentor", duration: "Unlimited • 24x7", color: "blue" },
    ],
    topics: ["Multithreading", "Java-8", "Java"],
    projects: ["Assignment / Project 1"],
  },
  {
    id: 2,
    title: "Month 2 of Mentorship",
    goal: "Advanced Java and Data Structures",
    sessions: [],
    topics: [],
    projects: [],
  },
  {
    id: 3,
    title: "Month 3 of Mentorship",
    goal: "System Design & Problem Solving",
    sessions: [],
    topics: [],
    projects: [],
  },
];

type DurationType = "6 Months" | "3 Months" | "1 Month";

export default function MentorshipCurriculum() {
  const [expanded, setExpanded] = useState<number[]>([1]);
  const [duration, setDuration] = useState<DurationType>("6 Months");

  const durations: DurationType[] = ["6 Months", "3 Months", "1 Month"];

  const toggleMonth = (id: number) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    if (expanded.length === monthsData.length) setExpanded([]);
    else setExpanded(monthsData.map((m) => m.id));
  };

  return (
    <div
      className="p-4 sm:p-6 md:p-10 rounded-2xl border shadow-sm mx-auto w-full transition-colors duration-300"
      style={{
        backgroundColor: "var(--curriculum-bg)",
        borderColor: "var(--curriculum-border)",
        color: "var(--curriculum-text)",
      }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-4">
        <h2
          className="text-lg sm:text-xl font-semibold"
          style={{ color: "var(--curriculum-heading)" }}
        >
          What will be covered
        </h2>

        <div className="flex gap-2 flex-wrap">
          {durations.map((d) => (
            <button
              key={d}
              onClick={() => setDuration(d)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition`}
              style={{
                backgroundColor:
                  duration === d
                    ? "var(--curriculum-btn-active-bg)"
                    : "var(--curriculum-btn-bg)",
                color:
                  duration === d
                    ? "var(--curriculum-btn-active-text)"
                    : "var(--curriculum-btn-text)",
                borderColor:
                  duration === d
                    ? "var(--curriculum-btn-active-border)"
                    : "var(--curriculum-btn-border)",
              }}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <p
        className="text-xs sm:text-sm mb-6 leading-relaxed"
        style={{ color: "var(--curriculum-subtext)" }}
      >
        This is a tentative mentorship curriculum that will change based on your
        needs after the first discussion with the mentor.
      </p>

      {/* Meta */}
      <div
        className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs mb-4"
        style={{ color: "var(--curriculum-subtext)" }}
      >
        <span>48 Sessions</span>
        <span className="h-1 w-1 rounded-full hidden sm:block" style={{ background: "var(--curriculum-dot)" }}></span>
        <span>240 Topics</span>
        <span className="h-1 w-1 rounded-full hidden sm:block" style={{ background: "var(--curriculum-dot)" }}></span>
        <span>6 Study Materials</span>
        <button
          onClick={handleExpandAll}
          className="ml-auto font-medium hover:underline"
          style={{ color: "var(--curriculum-link)" }}
        >
          {expanded.length === monthsData.length
            ? "Collapse All Months"
            : "Expand All Months"}
        </button>
      </div>

      {/* Months */}
      <div className="space-y-3">
        {monthsData.map((month, idx) => {
          const isOpen = expanded.includes(month.id);
          const number = idx + 1;
          return (
            <div
              key={month.id}
              className="rounded-xl overflow-hidden transition hover:shadow-sm border"
              style={{
                background: "var(--curriculum-card-bg)",
                borderColor: "var(--curriculum-border)",
              }}
            >
              <button
                onClick={() => toggleMonth(month.id)}
                className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-5 py-3 sm:py-4 text-left focus:outline-none gap-2"
              >
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <div
                    className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full text-xs font-medium"
                    style={{
                      background: "var(--curriculum-number-bg)",
                      color: "var(--curriculum-number-text)",
                    }}
                  >
                    {number}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="font-semibold text-sm sm:text-base"
                        style={{ color: "var(--curriculum-heading)" }}
                      >
                        {month.title}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        <span className="text-[10px] sm:text-xs bg-green-100 text-green-700 px-2 py-[1px] rounded-full">
                          6 Sessions
                        </span>
                        <span className="text-[10px] sm:text-xs bg-orange-100 text-orange-700 px-2 py-[1px] rounded-full">
                          3 Topics
                        </span>
                        <span className="text-[10px] sm:text-xs bg-purple-100 text-purple-700 px-2 py-[1px] rounded-full">
                          1 Study Material
                        </span>
                      </div>
                    </div>
                    <p
                      className="text-xs sm:text-sm mt-1"
                      style={{ color: "var(--curriculum-subtext)" }}
                    >
                      This module contains following
                    </p>
                  </div>
                </div>

                {isOpen ? (
                  <ChevronUp
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    style={{ color: "var(--curriculum-icon)" }}
                  />
                ) : (
                  <ChevronDown
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    style={{ color: "var(--curriculum-icon)" }}
                  />
                )}
              </button>

              {/* Expand section */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="border-t"
                    style={{
                      borderColor: "var(--curriculum-border)",
                      background: "var(--curriculum-expanded-bg)",
                    }}
                  >
                    <div className="p-4 sm:p-5 space-y-5 sm:space-y-6">
                      <div>
                        <h4
                          className="text-sm font-semibold mb-1"
                          style={{ color: "var(--curriculum-heading)" }}
                        >
                          Goal & Sessions For The Month
                        </h4>
                        <p
                          className="text-xs sm:text-sm mb-4"
                          style={{ color: "var(--curriculum-text)" }}
                        >
                          {month.goal}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {month.sessions?.map((s, i) => {
                            const isBlue = s.color === "blue";
                            return (
                              <div
                                key={i}
                                className="flex items-center justify-between border rounded-md py-2 sm:py-3 px-3 sm:px-4 relative overflow-hidden"
                                style={{
                                  background: isBlue
                                    ? "var(--curriculum-session-blue-bg)"
                                    : "var(--curriculum-session-green-bg)",
                                  borderColor: "var(--curriculum-border)",
                                }}
                              >
                                <div
                                  className="absolute left-0 top-0 bottom-0 w-[3px] sm:w-[4px]"
                                  style={{
                                    background: isBlue
                                      ? "var(--curriculum-session-blue-line)"
                                      : "var(--curriculum-session-green-line)",
                                  }}
                                />
                                <div className="flex items-center gap-2">
                                  <span
                                    className="text-sm sm:text-lg"
                                    style={{
                                      color: isBlue
                                        ? "var(--curriculum-session-blue-icon)"
                                        : "var(--curriculum-session-green-icon)",
                                    }}
                                  >
                                    {isBlue ? "📞" : "🧭"}
                                  </span>
                                  <p
                                    className="text-xs sm:text-sm font-semibold"
                                    style={{
                                      color: "var(--curriculum-heading)",
                                    }}
                                  >
                                    {s.title}
                                  </p>
                                </div>
                                <p
                                  className="text-[10px] sm:text-xs whitespace-nowrap"
                                  style={{
                                    color: "var(--curriculum-subtext)",
                                  }}
                                >
                                  {s.duration}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Topics */}
                      {month.topics && month.topics.length > 0 && (
                        <div>
                          <h4
                            className="text-sm font-semibold mb-2 sm:mb-3"
                            style={{ color: "var(--curriculum-heading)" }}
                          >
                            What All Will Be Covered
                          </h4>
                          <div
                            className="border rounded-md shadow-sm p-3 sm:p-4"
                            style={{
                              background: "var(--curriculum-card-inner-bg)",
                              borderColor: "var(--curriculum-border)",
                            }}
                          >
                            <div className="flex items-center justify-between border-b pb-2 mb-3"
                              style={{ borderColor: "var(--curriculum-border)" }}
                            >
                              <p
                                className="text-sm font-semibold"
                                style={{ color: "var(--curriculum-heading)" }}
                              >
                                Topics For The Month
                              </p>
                              <p
                                className="text-xs font-medium text-orange-600"
                              >
                                {month.topics.length} Topics
                              </p>
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {month.topics.map((topic, tIdx) => (
                                <li
                                  key={tIdx}
                                  className="border rounded-md py-2 px-3 text-xs sm:text-sm"
                                  style={{
                                    background: "var(--curriculum-list-bg)",
                                    borderColor: "var(--curriculum-border)",
                                    color: "var(--curriculum-text)",
                                  }}
                                >
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Projects */}
                      {month.projects && month.projects.length > 0 && (
                        <div>
                          <h4
                            className="text-sm font-semibold mb-2"
                            style={{ color: "var(--curriculum-heading)" }}
                          >
                            Resources / Assignments / Projects
                          </h4>
                          <div
                            className="border rounded-md p-3 sm:p-4 shadow-sm text-xs sm:text-sm"
                            style={{
                              background: "var(--curriculum-card-inner-bg)",
                              borderColor: "var(--curriculum-border)",
                              color: "var(--curriculum-text)",
                            }}
                          >
                            {month.projects.map((p, i) => (
                              <p key={i}>{p}</p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
