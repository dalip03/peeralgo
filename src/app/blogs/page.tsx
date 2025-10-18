"use client";
import React, { useState } from "react";

const articles = [
  {
    img: "/img/blogs.svg",
    tag: "Education",
    title:
      "How Online Learning is Completely Transforming the Western Education System",
    date: "January 27, 2025",
    read: "4 min read",
  },
  {
    img: "/img/blogs.svg",
    tag: "Education",
    title:
      "How Online Learning is Completely Transforming the Western Education System",
    date: "January 27, 2025",
    read: "4 min read",
  },
  {
    img: "/img/blogs.svg",
    tag: "Education",
    title:
      "How Online Learning is Completely Transforming the Western Education System",
    date: "January 27, 2025",
    read: "4 min read",
  },
  {
    img: "/img/blogs.svg",
    tag: "Education",
    title:
      "How Online Learning is Completely Transforming the Western Education System",
    date: "January 27, 2025",
    read: "4 min read",
  },
  {
    img: "/img/blogs.svg",
    tag: "Education",
    title:
      "How Online Learning is Completely Transforming the Western Education System",
    date: "January 27, 2025",
    read: "4 min read",
  },
  {
    img: "/img/blogs.svg",
    tag: "Education",
    title:
      "How Online Learning is Completely Transforming the Western Education System",
    date: "January 27, 2025",
    read: "4 min read",
  },
  // Example extra articles for demonstration
  {
    img: "/img/blogs.svg",
    tag: "Education",
    title: "New Era in EdTech",
    date: "February 10, 2025",
    read: "3 min read",
  },
  {
    img: "/img/blogs.svg",
    tag: "Education",
    title: "Hybrid Learning Models on the Rise",
    date: "March 5, 2025",
    read: "5 min read",
  },
];

export default function LatestArticles() {
  const [showAll, setShowAll] = useState(false);
  const visibleArticles = showAll ? articles : articles.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col items-center py-12 bg-[#f9fafc]">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="bg-blue-100 text-blue-600 text-xs font-semibold rounded-full px-4 py-2 mb-4 inline-block">
          Expert Insights
        </span>
        <h2 className="text-5xl md:text-4xl font-bold mb-3 leading-14 text-[#191C20]">
          What’s New at EduMentor
        </h2>
        <p className="text-[#1C1C1C66] max-w-2xl px-28 mx-auto text-sm text-center mb-1">
          Discover the latest articles on learning strategies, industry trends,
          and career growth.
        </p>
      </div>
      {/* Article Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 w-full max-w-5xl">
        {visibleArticles.map((article, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow flex flex-col overflow-hidden transition hover:shadow-lg"
          >
            <img
              src={article.img}
              alt="article"
              className="w-full h-56 object-cover"
            />
            <div className="p-5 flex flex-col gap-2">
              <span className="bg-blue-100 text-blue-600 text-xs font-semibold rounded-xl px-3 py-1 inline-block w-fit mb-2">
                {article.tag}
              </span>
              <h3 className="font-semibold text-base md:text-lg text-black leading-tight mb-2">
                {article.title}
              </h3>
              <div className="flex gap-4 text-xs text-gray-400 font-medium">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.read}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {articles.length > 6 && !showAll && (
        <button
          className="px-6 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold shadow hover:bg-blue-200 transition"
          onClick={() => setShowAll(true)}
        >
          Explore all
        </button>
      )}
    </div>
  );
}
