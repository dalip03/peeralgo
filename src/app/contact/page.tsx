'use client'

import React, { useState } from "react";

const topRightImg = "/img/shadow2.svg";
const bottomLeftImg = "/img/shadow1.svg";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-10">
      <span className="bg-blue-100 text-blue-600 text-xs font-semibold rounded-full px-4 py-2 mb-4 inline-block">
        Contact Us
      </span>
      <h2 className="text-5xl md:text-4xl font-bold mb-3 leading-14 text-[#191C20] text-center">
        Have Questions about <br /> EduMentor?
      </h2>
      <p className="text-[#1C1C1C66] mb-7 max-w-2xl px-28 mx-auto text-sm text-center">
        Start trading with powerful tools, real-time insights, and a
        secure platform for better profits
      </p>
      <div className="relative flex flex-col  w-full max-w-md rounded-3xl bg-white shadow-xl mx-auto mt-10 p-8 mb-8 overflow-hidden border border-gray-200">
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
          <div className="mt-5">
            <label className="block font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring focus:ring-blue-100 bg-gray-100 placeholder:text-gray-400"
              placeholder="Enter your name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring focus:ring-blue-100 bg-gray-100 placeholder:text-gray-400"
              placeholder="Enter your number"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring focus:ring-blue-100 bg-gray-100 placeholder:text-gray-400"
              placeholder="Enter your email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Ask your Query</label>
            <textarea
              className="w-full px-4 py-2 min-h-[56px] rounded-md border border-gray-200 focus:outline-none focus:ring focus:ring-blue-100 bg-gray-100 placeholder:text-gray-400"
              placeholder="Enter your query"
              value={form.query}
              onChange={e => setForm({ ...form, query: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="mt-4 py-2 rounded-md bg-blue-500 mb-12 text-white font-semibold shadow hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
