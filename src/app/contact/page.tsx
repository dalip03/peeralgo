"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

const topRightImg = "/img/shadow2.svg";
const bottomLeftImg = "/img/shadow1.svg";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });

  // Variants for staggered animation
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } 
    },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-white py-10 px-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <motion.span
        className="bg-blue-100 text-blue-600 text-xs font-semibold rounded-full px-4 py-2 mb-4 inline-block"
        variants={item}
      >
        Contact Us
      </motion.span>

      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-3 leading-tight text-[#191C20] text-center"
        variants={item}
      >
        Have Questions about <br className="hidden md:block" /> EduMentor?
      </motion.h2>

      <motion.p
        className="text-[#1C1C1C66] mb-7 max-w-2xl md:px-28 px-12 mx-auto text-sm text-center"
        variants={item}
      >
        Start trading with powerful tools, real-time insights, and a secure
        platform for better profits
      </motion.p>

      <motion.div
        className="relative flex bg-white flex-col w-full max-w-md rounded-3xl shadow-xl mx-auto mt-10 p-8 mb-8 overflow-hidden border border-gray-200"
        variants={item}
      >
        {/* Top-right image */}
        <img
          src={topRightImg}
          alt=""
          className="pointer-events-none select-none absolute rounded-2xl top-0 -right-10 w-72 h-28 object-contain"
        />
        {/* Bottom-left image */}
        <img
          src={bottomLeftImg}
          alt=""
          className="pointer-events-none select-none absolute bottom-0 left-24 w-72 h-28 object-contain"
        />

        <form className="flex flex-col gap-5 w-full relative z-10">
          <motion.div className="mt-5" variants={item}>
            <label className="block font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring focus:ring-blue-100 bg-gray-100 placeholder:text-gray-400"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </motion.div>

          <motion.div variants={item}>
            <label className="block font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring focus:ring-blue-100 bg-gray-100 placeholder:text-gray-400"
              placeholder="Enter your number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </motion.div>

          <motion.div variants={item}>
            <label className="block font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring focus:ring-blue-100 bg-gray-100 placeholder:text-gray-400"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </motion.div>

          <motion.div variants={item}>
            <label className="block font-medium text-gray-700 mb-1">Ask your Query</label>
            <textarea
              className="w-full px-4 py-2 min-h-[56px] rounded-md border border-gray-200 focus:outline-none focus:ring focus:ring-blue-100 bg-gray-100 placeholder:text-gray-400"
              placeholder="Enter your query"
              value={form.query}
              onChange={(e) => setForm({ ...form, query: e.target.value })}
            />
          </motion.div>

          <motion.button
            type="submit"
            className="mt-4 py-2 rounded-md bg-blue-500 mb-12 text-white font-semibold shadow hover:bg-blue-600 transition"
            variants={item}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
