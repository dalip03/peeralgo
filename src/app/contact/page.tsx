"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const topRightImg = "/img/shadow2.svg";
const bottomLeftImg = "/img/shadow1.svg";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center py-10 px-4 transition-colors duration-300"
      style={{
        background: "var(--contact-bg, #ffffff)",
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <motion.span
        className="text-xs font-semibold rounded-full px-4 py-2 mb-4 inline-block transition-colors duration-300"
        style={{
          background: "var(--contact-badge-bg, #DBEAFE)",
          color: "var(--contact-badge-text, #2563EB)",
        }}
        variants={item}
      >
        Contact Us
      </motion.span>

      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-3 leading-tight text-center transition-colors duration-300"
        style={{
          color: "var(--contact-heading, #191C20)",
        }}
        variants={item}
      >
        Have Questions about <br className="hidden md:block" /> Peeralgo?
      </motion.h2>

      <motion.p
        className="mb-7 max-w-2xl md:px-28 px-12 mx-auto text-sm text-center transition-colors duration-300"
        style={{
          color: "var(--contact-text-muted, #1C1C1C66)",
        }}
        variants={item}
      >
        Start trading with powerful tools, real-time insights, and a secure
        platform for better profits
      </motion.p>

      <motion.div
        className="relative flex flex-col w-full max-w-md rounded-3xl shadow-xl mx-auto mt-6 p-8 mb-8 overflow-hidden border transition-colors duration-300"
        style={{
          background: "var(--contact-card-bg, #ffffff)",
          borderColor: "var(--contact-border, #e5e7eb)",
        }}
        variants={item}
      >
        {/* Top-right image */}
        <Image
          src={topRightImg}
          alt=""
          width={288} // equivalent to w-72 (72*4=288px)
          height={112} // equivalent to h-28 (28*4=112px)
          className="pointer-events-none select-none absolute rounded-2xl top-0 -right-10 w-72 h-28 object-contain opacity-80"
          draggable={false}
          priority={false} // or true if it's important to load early
        />
       
        <Image
          src={bottomLeftImg}
          alt=""
          width={288} // w-72
          height={112} // h-28
          className="pointer-events-none select-none absolute bottom-0 left-24 w-72 h-28 object-contain opacity-80"
          draggable={false}
          priority={false}
        />
        <form className="flex flex-col gap-5 w-full relative z-10">
          <motion.div className="mt-5" variants={item}>
            <label
              className="block font-medium mb-1 transition-colors duration-300"
              style={{ color: "var(--contact-label, #374151)" }}
            >
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-100 transition-colors duration-300"
              style={{
                background: "var(--contact-input-bg, #f3f4f6)",
                borderColor: "var(--contact-input-border, #e5e7eb)",
                color: "var(--contact-input-text, #111827)",
              }}
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </motion.div>

          <motion.div variants={item}>
            <label
              className="block font-medium mb-1 transition-colors duration-300"
              style={{ color: "var(--contact-label, #374151)" }}
            >
              Phone Number
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-100 transition-colors duration-300"
              style={{
                background: "var(--contact-input-bg, #f3f4f6)",
                borderColor: "var(--contact-input-border, #e5e7eb)",
                color: "var(--contact-input-text, #111827)",
              }}
              placeholder="Enter your number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </motion.div>

          <motion.div variants={item}>
            <label
              className="block font-medium mb-1 transition-colors duration-300"
              style={{ color: "var(--contact-label, #374151)" }}
            >
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-100 transition-colors duration-300"
              style={{
                background: "var(--contact-input-bg, #f3f4f6)",
                borderColor: "var(--contact-input-border, #e5e7eb)",
                color: "var(--contact-input-text, #111827)",
              }}
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </motion.div>

          <motion.div variants={item}>
            <label
              className="block font-medium mb-1 transition-colors duration-300"
              style={{ color: "var(--contact-label, #374151)" }}
            >
              Ask your Query
            </label>
            <textarea
              className="w-full px-4 py-2 min-h-[56px] rounded-md border focus:outline-none focus:ring focus:ring-blue-100 transition-colors duration-300"
              style={{
                background: "var(--contact-input-bg, #f3f4f6)",
                borderColor: "var(--contact-input-border, #e5e7eb)",
                color: "var(--contact-input-text, #111827)",
              }}
              placeholder="Enter your query"
              value={form.query}
              onChange={(e) => setForm({ ...form, query: e.target.value })}
            />
          </motion.div>

          <motion.button
            type="submit"
            className="mt-4 py-2 rounded-md mb-12 font-semibold shadow transition-colors duration-300"
            style={{
              background: "var(--contact-btn-bg, #3b82f6)",
              color: "var(--contact-btn-text, #ffffff)",
            }}
            variants={item}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
