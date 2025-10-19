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
      { title: "1:1 Planning Session", duration: "30 Minutes" },
      { title: "2 Upskilling Sessions", duration: "60 Minutes" },
      { title: "1:1 Monthly Retrospective Session", duration: "30 Minutes" },
      { title: "Instant Call with Mentor", duration: "24x7" },
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
  {
    id: 4,
    title: "Month 4 of Mentorship",
    goal: "Backend Project and Real-World Scenarios",
    sessions: [],
    topics: [],
    projects: [],
  },
  {
    id: 5,
    title: "Month 5 of Mentorship",
    goal: "Mock Interviews and Resume Review",
    sessions: [],
    topics: [],
    projects: [],
  },
  {
    id: 6,
    title: "Month 6 of Mentorship",
    goal: "Final Capstone Project & Career Prep",
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
    <div className="bg-[#FFF9F2] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200  mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">What will be covered</h2>

        {/* Duration Tabs */}
        <div className="flex gap-2 flex-wrap">
          {durations.map((d) => (
            <button
              key={d}
              onClick={() => setDuration(d)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                duration === d
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-5">
        This is a tentative mentorship curriculum that will change based on your needs after the first discussion with the mentor.
      </p>

      {/* Month Sections */}
      <div className="space-y-3">
        {monthsData.map((month) => {
          const isOpen = expanded.includes(month.id);
          return (
            <div
              key={month.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => toggleMonth(month.id)}
                className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{month.title}</h3>
                  <p className="text-sm text-gray-500">
                    This module contains 6 sessions with mentor, 3 topics & 1 study material
                  </p>
                </div>
                {isOpen ? (
                  <ChevronUp className="text-gray-600" />
                ) : (
                  <ChevronDown className="text-gray-600" />
                )}
              </button>

              {/* Animated Expanded Section */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="border-t border-gray-100 bg-[#FFFBF7] overflow-hidden"
                  >
                    <div className="px-4 py-5 space-y-5">
                      {/* Goal & Sessions */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-1">
                          Goal & Sessions For The Month
                        </h4>
                        <p className="text-gray-700 mb-3 text-sm">{month.goal}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {month.sessions.map((s, i) => (
                            <div
                              key={i}
                              className="border border-gray-200 rounded-lg p-3 text-sm flex justify-between items-center bg-white"
                            >
                              <span className="text-gray-800">{s.title}</span>
                              <span className="text-gray-500">{s.duration}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Topics */}
                      {month.topics.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">
                            Topics For The Month
                          </h4>
                          <div className="space-y-2">
                            {month.topics.map((topic, idx) => (
                              <div
                                key={idx}
                                className="border border-gray-200 rounded-lg bg-white p-2 text-sm text-gray-800"
                              >
                                {topic}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Projects */}
                      {month.projects.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">
                            Resources / Assignments / Projects
                          </h4>
                          <ul className="list-disc list-inside text-gray-800 text-sm">
                            {month.projects.map((p, i) => (
                              <li key={i}>{p}</li>
                            ))}
                          </ul>
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

      {/* Expand/Collapse Button */}
      <div className="flex justify-end mt-5">
        <button
          onClick={handleExpandAll}
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          {expanded.length === monthsData.length
            ? "Collapse All Months"
            : "Expand All Months"}
        </button>
      </div>
    </div>
  );
}
