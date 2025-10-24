"use client";

import { motion, Variants } from "framer-motion";

export default function WhyEdumentorStandsOut() {
  const edumentor = [
    "Real-time feedback from experienced interviewers",
    "Career guidance, roadmaps, domain advice",
    "Resume Review Included",
    "LinkedIn Profile Optimization",
    "Latest Career Strategy Sessions",
  ];

  const others = [
    "Recorded feedback from experienced interviewers",
    "No Custom Guidance",
    "Pay for Resume Review",
    "Lack of Social Profile Optimization",
    "Outdated Career Strategy Sessions",
  ];

  // Animation variants
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section className="w-full bg-[#e7f2fe] py-16 px-3">
      <motion.div
        className="max-w-4xl mx-auto rounded-2xl py-8 px-2 md:px-8 bg-[#e7f2fe]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {/* Header */}
        <motion.div className="flex flex-col items-center text-center mb-10" variants={item}>
          <span className="inline-block px-5 py-1 mb-3 text-xs font-semibold border border-blue-200 rounded-full text-[#3686FD] bg-white">
            COMPARISON
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#232323] mb-1">
            Why <span className="text-[#3686FD]">Edumentor</span> Stands Out
          </h2>
          <div className="text-gray-500 text-sm">
            See how we compare against others in the market
          </div>
        </motion.div>

        <motion.div className="flex flex-col md:flex-row md:gap-9 justify-center items-center" variants={container}>
          {/* EduMentor */}
          <motion.div className="bg-white rounded-xl p-7 w-full md:w-1/2 mb-5 md:mb-0" variants={item}>
            <h3 className="mb-6 text-xl font-semibold text-[#232323] text-left">EduMentor</h3>
            <motion.ul variants={container}>
              {edumentor.map((text) => (
                <motion.li
                  key={text}
                  className="flex items-start gap-2 text-gray-700 mb-4 text-left"
                  variants={item}
                >
                  <img src="/icons/check.svg" alt="tick" className="h-4 w-4 object-contain" />
                  <span>{text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Others */}
          <motion.div className="bg-white rounded-xl p-7 w-full md:w-1/2" variants={item}>
            <h3 className="mb-6 text-xl font-semibold text-[#232323] text-left flex items-center gap-2">
              <img src="/icons/others.svg" className="w-5 h-5" alt="" />
              Others
            </h3>
            <motion.ul variants={container}>
              {others.map((text) => (
                <motion.li
                  key={text}
                  className="flex items-start gap-2 text-gray-400 mb-4 text-left"
                  variants={item}
                >
                  <img src="/icons/wrong.svg" alt="wrong" className="h-4 w-4 object-contain" />
                  <span>{text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
