"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

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

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center py-12 bg-[#f9fafc]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* Header */}
      <motion.div className="text-center w-full mx-auto mb-10" variants={card}>
        <span className="bg-blue-100 text-blue-600 text-xs font-semibold rounded-full px-4 py-2 mb-4 inline-block">
          Expert Insights
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight text-[#191C20] text-center">
          What’s New at EduMentor
        </h2>
        <p className="text-[#1C1C1C66] max-w-2xl md:px-28 mx-auto text-sm text-center mb-1">
          Discover the latest articles on learning strategies, industry trends,
          and career growth.
        </p>
      </motion.div>

      {/* Article Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 w-full max-w-5xl bg-[#1C1C1CB2]/2 rounded-2xl"
        variants={container}
      >
        {visibleArticles.map((article, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow flex flex-col overflow-hidden transition hover:shadow-lg"
            variants={card}
          >
            <div className="rounded-2xl p-6">
              <img
                src={article.img}
                alt="article"
                className="w-full h-56 object-cover rounded-2xl"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <span className="bg-blue-100 text-blue-500 text-xs font-semibold rounded-2xl px-4 py-2 inline-block w-fit mb-2">
                {article.tag}
              </span>
              <h3 className="font-semibold text-base md:text-lg text-black leading-tight mb-2">
                {article.title}
              </h3>
              <div className="flex gap-2 text-xs text-gray-600 font-medium">
                <span>{article.date}</span>
                <span>|</span>
                <span>{article.read}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {articles.length > 6 && !showAll && (
        <motion.button
          className="px-6 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold shadow hover:bg-blue-200 transition"
          onClick={() => setShowAll(true)}
          variants={card}
        >
          Explore all
        </motion.button>
      )}
    </motion.div>
  );
}
