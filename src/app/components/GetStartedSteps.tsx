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
        text: "Find Your Mentor",
        link: "#",
      },
    },
    {
      num: "2",
      title: "Book a FREE Trial Session",
      desc: "Connect with mentor and see how mentor will help you achieve your goal faster & avoid asking for referrals, etc.",
      btn: {
        text: "Book a FREE Trial",
        link: "#",
      },
    },
    {
      num: "3",
      title: "Start 1:10 Long Term Mentorship",
      desc: "Bravo! Get started with your personalised mentorship in the right direction with a mentor of your choice.",
      btn: {
        text: "Start Preparing",
        link: "#",
      },
    },
  ];

  return (
    <section
      className="w-full px-4 pb-20 transition-colors duration-300"
      style={{
        background: "var(--steps-bg, #ffffff)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-2 pt-10"
          style={{ color: "var(--steps-heading, #232323)" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Get Started in 3 Easy Steps
        </motion.h2>

        <motion.p
          className="text-center mb-10"
          style={{ color: "var(--steps-text, #6b7280)" }}
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
              className="flex flex-col rounded-xl px-6 py-9 items-start md:items-start shadow-sm transition-all"
              style={{
                background: "var(--steps-card-bg, #ffffff)",
                border: "1px solid var(--steps-border, #e5e7eb)",
              }}
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
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-md font-bold text-lg"
                  style={{
                    background: "var(--steps-accent, #3686FD)",
                    color: "var(--steps-num, #ffffff)",
                  }}
                >
                  {step.num}
                </span>
              </div>
              <h3
                className="font-bold text-md mb-2 text-left md:text-start"
                style={{ color: "var(--steps-heading, #232323)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm mb-6 text-left md:text-start"
                style={{ color: "var(--steps-text, #6b7280)" }}
              >
                {step.desc}
              </p>
              <a
                href={step.btn.link}
                className="flex items-center justify-center gap-1 p-2 mt-auto rounded-md text-sm font-semibold transition"
                style={{
                  background: "var(--steps-btn-bg, #ffffff)",
                  border: "1px solid var(--steps-border, #d1d5db)",
                  color: "var(--steps-btn-text, #232323)",
                }}
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
