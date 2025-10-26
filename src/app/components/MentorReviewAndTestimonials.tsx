"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function MentorReviewAndTestimonials() {
  // ✅ Full data in same file
  const mentorReviewsData = {
    trial: [
      {
        text: "Sir took the time to calmly and thoughtfully evaluate my current level of technical expertise, and he provided clear, actionable insights on the areas I need to strengthen and how to strategically move forward. His guidance was not only honest but also highly encouraging. I genuinely appreciate the value this session brought to me. I'm truly grateful for his mentorship and excited about the possibility of learning and growing under his continued guidance in the long term.",
        reviewer: "Piyush Talele",
        timeAgo: "1 month ago",
      },
      {
        text: "Vikas with vast experience had interacted with me in a calm manner. Went through past experience and got aware of my concerns and got clear of what I was expecting from the mentorship 🙂",
        reviewer: "Kuppannagari Somusundar Reddy",
        timeAgo: "1 month ago",
      },
      {
        text: "Vikas clarified and gave me a clear picture of what I have to do to achieve my target. He is motivating and resolved my queries. Looking forward to joining his Long term membership course in few days",
        reviewer: "Meghana",
        timeAgo: "2 months ago",
      },
      {
        text: "Vikas was really patient in listening to my queries and answered all of them. He was also quite frank in his suggestions which gave more clarity on the next areas of action.",
        reviewer: "Bharadwaj B",
        timeAgo: "5 months ago",
      },
    ],
    longterm: [
      {
        text: "Long-term mentorship has been invaluable for my growth.",
        reviewer: "Ramesh T",
        timeAgo: "3 months ago",
      },
      {
        text: "Weekly sessions kept me on track!",
        reviewer: "Priya Singh",
        timeAgo: "4 months ago",
      },
    ],
    placement: [
      {
        text: "Landed a great job thanks to mentor's guidance!",
        reviewer: "Ankit",
        timeAgo: "2 months ago",
      },
      {
        text: "Placement advice was spot on.",
        reviewer: "Swati K",
        timeAgo: "3 months ago",
      },
    ],
    trialCount: 104,
    longtermCount: 7,
    placementCount: 23,
  };

  // ✅ Tabs setup
  const TABS = [
    { key: "trial", label: "Trial Reviews" },
    { key: "longterm", label: "Long Term Mentorship Reviews" },
    { key: "placement", label: "Placement Stories" },
  ];

  const [activeTab, setActiveTab] = useState<"trial" | "longterm" | "placement">("trial");

  const tabCounts = {
    trial: mentorReviewsData.trialCount,
    longterm: mentorReviewsData.longtermCount,
    placement: mentorReviewsData.placementCount,
  };

  const reviews = mentorReviewsData[activeTab];

  return (
    <div className="bg-white shadow-sm rounded-xl border border-gray-200 p-6 mb-4 ">
      <h2 className="font-semibold text-xl mb-6 text-gray-900">
        Reviews &amp; Testimonials
      </h2>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 text-sm font-medium mb-3 gap-8 overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as "trial" | "longterm" | "placement")}
            className={`py-2 transition relative focus:outline-none ${
              activeTab === tab.key
                ? "text-blue-600 font-semibold"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {tab.label}{" "}
            <span className="">
              ({tabCounts[tab.key as keyof typeof tabCounts]})
            </span>
            {activeTab === tab.key && (
              <span className="absolute left-0 -bottom-[1px] w-full h-0.5 bg-blue-600 rounded transition-all" />
            )}
          </button>
        ))}
      </div>

      {/* Reviews */}
      <div className="divide-y divide-gray-200 py-2 min-h-[240px]">
        {reviews.length > 0 ? (
          reviews.map((review, idx) => (
            <div key={idx} className="py-4 space-y-3">
              <p className="text-gray-700 text-[15px] leading-relaxed">{review.text}</p>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
                <span className="font-medium text-gray-600">{review.reviewer}</span>
                <span className="text-gray-500 text-xs mt-2 md:mt-0">{review.timeAgo}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="py-10 text-center text-gray-400">No reviews found.</div>
        )}
      </div>

      {/* Show all button */}
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 rounded-lg  font-medium text-gray-800  text-sm  flex items-center gap-1 hover:bg-gray-200 transition">
          Show All {tabCounts[activeTab]}
          <ChevronDown className="h-5 w-5 text-gray-500 ml-1" />
        </button>
      </div>
    </div>
  );
}
