"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white pt-10 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left column: Heading */}
          <motion.div
            className="flex-1 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="md:inline-block mb-5 text-center md:text-left">
              <span className="text-xs font-semibold border border-gray-300 rounded-full px-4 py-1 bg-white text-gray-700 shadow-sm select-none">
                Our Solutions
              </span>
            </div>
            <motion.h2
              className="text-2xl md:text-3xl font-bold md:text-left text-center mb-2 text-[#232323]"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {" "}
              Why Choose
              <br />
              Us?
            </motion.h2>
          </motion.div>

          {/* Right column: Description */}
          <motion.div
            className="flex-1 flex flex-col justify-start items-end md:pl-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="md:text-right text-[15px] text-gray-600 md:max-w-sm">
              Real Mock Interviews with hiring managers. Real Mock Interviews
              with hiring managers from top Product based companies around the
              globe. 1 on 1 mentorship for every student with our qualified
              Student Assessment Faculties
            </p>
          </motion.div>
        </div>

        {/* Image row */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/img/chooseus.svg"
            alt="Why Choose Us"
            className="w-full max-w-5xl h-auto object-cover rounded-2xl mx-auto"
            style={{ minHeight: 260 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
