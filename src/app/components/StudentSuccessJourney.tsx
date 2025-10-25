"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const students = [
  { name: "Shourya Kaushik", img: "/img/Piyush.svg", company: "Google" },
  { name: "Siddhant Soni", img: "/img/Piyush.svg", company: "Amazon" },
  { name: "Siddhart", img: "/img/Piyush.svg", company: "Microsoft" },
  { name: "Rohit Sharma", img: "/img/Piyush.svg", company: "Netflix" },
  { name: "Atulya Kaushik", img: "/img/Piyush.svg", company: "Meta" },
  { name: "Sakshi Verma", img: "/img/Piyush.svg", company: "Swiggy" },
  { name: "Ravi Kumar", img: "/img/Piyush.svg", company: "Flipkart" },
  { name: "Arjun Patel", img: "/img/Piyush.svg", company: "Adobe" },
  { name: "Neha Gupta", img: "/img/Piyush.svg", company: "Zomato" },
];

export default function StudentSuccessJourney() {
  return (
    <section className="relative w-full bg-[#050A1F] py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,120,255,0.25),transparent_60%),radial-gradient(circle_at_bottom_left,rgba(255,0,150,0.25),transparent_60%)] animate-pulse"></div>

      {/* Title */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          Our Students’ Success Journey 
        </h2>
        <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto">
          Inspiring stories of learners achieving excellence in top companies.
        </p>
      </div>

      {/* Scrollable Cards Container */}
      <div className="relative z-10 max-w-7xl mx-auto overflow-hidden ">
        <div
          className="
            flex gap-6 sm:gap-8 overflow-x-auto overflow-y-hidden scrollbar-hide
            px-2 sm:px-4 pb-4 sm:pb-6
            snap-x snap-mandatory scroll-smooth
          "
        >
          {students.map((student, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="flex-shrink-0 w-64 sm:w-72 group relative flex flex-col items-center text-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 shadow-lg cursor-pointer snap-center"
            >
              {/* Image */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white/30 group-hover:border-blue-500 transition-all duration-300">
                <Image
                  src={student.img}
                  alt={student.name}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Name */}
              <h3 className="mt-4 text-base sm:text-lg font-semibold text-white">
                {student.name}
              </h3>

              {/* Company */}
              <p className="text-xs sm:text-sm text-gray-300 mb-4">
                {student.company}
              </p>

              {/* Hover Reveal Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs sm:text-sm font-medium shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-600 transition">
                  View Journey
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
