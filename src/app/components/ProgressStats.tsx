"use client";

import { motion } from "framer-motion";

export default function ProgressStats() {
  return (
    <section 
      className="w-full py-16 px-4 transition-colors duration-300"
      style={{
        background: "var(--stats-bg, #232B38)"
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.span
          className="text-base md:text-lg mb-2 font-medium"
          style={{ color: "var(--stats-muted, #6A84A0)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span
            style={{
              background: "linear-gradient(265deg, #FFF 61.15%, #08335E 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              display: "inline-block",
            }}
          >
            Move Over traditional courses
          </span>
        </motion.span>

        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-10 md:mb-14"
          style={{ color: "var(--stats-heading, #ffffff)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Start Making Progress with <br className="hidden md:block" />
          <span
            style={{
              background:
                "linear-gradient(229deg, #FFF 31.25%, rgba(176, 186, 201, 0.95) 78.03%, rgba(128, 142, 164, 0.90) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              display: "inline-block",
            }}
          >
            1:10 Long Term Mentorship
          </span>
        </motion.h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            className="relative rounded-xl px-4 py-7 flex flex-col items-center overflow-hidden min-h-[180px] transition-colors duration-300"
            style={{
              background: "var(--stats-card-bg, #232B38)",
              border: "1px solid var(--stats-border, #40485b)"
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none opacity-85">
              <img
                src="/img/30.svg"
                alt=""
                style={{ width: "200px", maxWidth: "90vw" }}
                className="object-contain"
                draggable={false}
              />
            </span>
            <motion.span
              className="relative z-10 text-2xl font-bold mb-1"
              style={{ color: "var(--stats-heading, #ffffff)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              30%
            </motion.span>
            <span 
              className="relative z-10 text-xl font-semibold mb-2 opacity-90"
              style={{ color: "var(--stats-heading, #ffffff)" }}
            >
              Cheaper
            </span>
            <span 
              className="relative z-10 text-xs md:text-xs mt-2"
              style={{ color: "var(--stats-text, #C4CFDE)" }}
            >
              Compared to any 6 month course
            </span>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative rounded-xl px-4 py-7 flex flex-col items-center overflow-hidden min-h-[180px] transition-colors duration-300"
            style={{
              background: "var(--stats-card-bg, #232B38)",
              border: "1px solid var(--stats-border, #40485b)"
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none opacity-85">
              <img
                src="/img/4.svg"
                alt=""
                style={{ width: "140px", maxWidth: "90vw" }}
                className="object-contain"
                draggable={false}
              />
            </span>
            <motion.span
              className="relative z-10 text-2xl font-bold mb-1"
              style={{ color: "var(--stats-heading, #ffffff)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              4x
            </motion.span>
            <span 
              className="relative z-10 text-xl font-semibold mb-2 opacity-90"
              style={{ color: "var(--stats-heading, #ffffff)" }}
            >
              Results
            </span>
            <span 
              className="relative z-10 text-xs md:text-xs mt-2"
              style={{ color: "var(--stats-text, #C4CFDE)" }}
            >
              As compared to any online courses
            </span>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="relative rounded-xl px-4 py-7 flex flex-col items-center overflow-hidden min-h-[180px] transition-colors duration-300"
            style={{
              background: "var(--stats-card-bg, #232B38)",
              border: "1px solid var(--stats-border, #40485b)"
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none opacity-85">
              <img
                src="/img/50.svg"
                alt=""
                style={{ width: "200px", maxWidth: "90vw" }}
                className="object-contain"
                draggable={false}
              />
            </span>
            <motion.span
              className="relative z-10 text-2xl font-bold mb-1"
              style={{ color: "var(--stats-heading, #ffffff)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              50%
            </motion.span>
            <span 
              className="relative z-10 text-xl font-semibold mb-2 opacity-90"
              style={{ color: "var(--stats-heading, #ffffff)" }}
            >
              Faster
            </span>
            <span 
              className="relative z-10 text-xs md:text-xs mt-2"
              style={{ color: "var(--stats-text, #C4CFDE)" }}
            >
              Get results within 6 months instead of years
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}