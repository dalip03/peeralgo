import React from "react";

// Dummy data
const articles = [
  {
    img: "/article.jpg", // Place or import your image here
    tag: "Education",
    title: "How Online Learning is Completely Transforming the Western Education System",
    date: "January 27, 2025",
    read: "4 min read",
  },
  // Duplicate for demo only
  {
    img: "/article.jpg",
    tag: "Education",
    title: "How Online Learning is Completely Transforming the Western Education System",
    date: "January 27, 2025",
    read: "4 min read",
  },
  {
    img: "/article.jpg",
    tag: "Education",
    title: "How Online Learning is Completely Transforming the Western Education System",
    date: "January 27, 2025",
    read: "4 min read",
  },
  {
    img: "/article.jpg",
    tag: "Education",
    title: "How Online Learning is Completely Transforming the Western Education System",
    date: "January 27, 2025",
    read: "4 min read",
  },
  {
    img: "/article.jpg",
    tag: "Education",
    title: "How Online Learning is Completely Transforming the Western Education System",
    date: "January 27, 2025",
    read: "4 min read",
  },
  {
    img: "/article.jpg",
    tag: "Education",
    title: "How Online Learning is Completely Transforming the Western Education System",
    date: "January 27, 2025",
    read: "4 min read",
  },
];

export default function Blogs() {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 bg-[#f9fafc]">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="bg-blue-100 text-blue-600 text-xs font-semibold rounded-full px-3 py-1 mb-3 inline-block">
          Expert Insights
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          What’s New at EduMentor
        </h2>
        <p className="text-gray-400 text-base font-medium mb-1">
          Discover the latest articles on learning strategies, industry trends, and career growth.
        </p>
      </div>

      {/* Article Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 w-full max-w-5xl">
        {articles.map((article, idx) => (
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
              <span className="bg-blue-100 text-blue-600 text-xs font-semibold rounded px-3 py-1 inline-block w-fit mb-2">
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

      {/* Explore All Button */}
      <button className="px-6 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold shadow hover:bg-blue-200 transition">
        Explore all
      </button>
    </div>
  );
}
