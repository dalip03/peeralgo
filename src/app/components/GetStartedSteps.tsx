"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GetStartedSteps() {
  const steps = [
    {
      num: "1",
      title: "Find Your Ideal Mentor",
      desc: "Browse from 600+ vested mentors and get to choose your ideal mentor according to your preferences and aspiration.",
      btn: {
        text: "Find Your Mentor ",
        link: "#",
      },
    },
    {
      num: "2",
      title: "Book a FREE Trial Session",
      desc: "Connect with mentor and see how mentor will help you achieve your goal faster & avoid asking for referrals, etc.",
      btn: {
        text: "Book a FREE Trial ",
        link: "#",
      },
    },
    {
      num: "3",
      title: "Start 1:10 Long Term Mentorship",
      desc: "Bravo! Get started with your personalised mentorship in the right direction with a mentor of your choice.",
      btn: {
        text: "Start Preparing ",
        link: "#",
      },
    },
  ];

  return (
    <section className="w-full bg-white  px-4 pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-[#232323] mb-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Get Started in 3 Easy Steps
        </motion.h2>

        <motion.p
          className="text-center text-gray-500 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Follow these three simple steps to get started with Long Term Mentorship
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col bg-white rounded-xl border border-gray-200/40 px-6 py-9 items-start md:items-start shadow-sm transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: idx * 0.15,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="mb-4 self-start">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[#3686FD] text-white font-bold text-lg">
                  {step.num}
                </span>
              </div>
              <h3 className="font-bold text-md text-[#232323] mb-2 text-left md:text-start">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6 text-left md:text-start">
                {step.desc}
              </p>
              <a
                href={step.btn.link}
                className="flex items-center justify-center gap-1 mt-auto bg-white border border-gray-300 px-5 py-2 rounded-md text-sm font-semibold text-[#232323] hover:bg-gray-50 transition"
              >
                {step.btn.text}
                <Image
                  alt="icon"
                  src="/icons/rightArrowblack.svg"
                  height={6}
                  width={6}
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
