"use client";

import { motion, Variants } from "framer-motion";

export default function StruggleAloneCovered() {
  const features = [
    { icon: "/icons/live.svg", title: "1:1 Live Session", desc: "Never question your progress with frequent One on One session." },
    { icon: "/icons/chat.svg", title: "Unlimited Chat with Mentor", desc: "Doubt? Get the right advice from your mentor via chat." },
    { icon: "/icons/task.svg", title: "Task & Curated Resources", desc: "Yes! You will be certified for this mentorship program." },
    { icon: "/icons/time.svg", title: "Regular Followups", desc: "Stay motivated and consistent with regular follow-ups." },
    { icon: "/icons/job.svg", title: "Job Referrals", desc: "Get referrals from mentor community to top product and service based companies." },
    { icon: "/icons/certificate.svg", title: "Certified", desc: "Yes! You will be certified for this mentorship program." },
  ];

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
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
    <section className="w-full bg-white dark:bg-[var(--statss-bg)] py-14 px-2 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-2 text-[#232323] dark:text-[var(--statss-heading)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          No need to Struggle Alone Anymore
        </motion.h2>

        <motion.p
          className="text-center text-gray-500 dark:text-[var(--statss-text)] mb-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Long term mentorship gets fully covered
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              className="bg-white dark:bg-[var(--statss-card-bg)] border border-gray-200 dark:border-[var(--statss-border)] px-7 py-7 flex flex-col items-start rounded-lg transition-all duration-300"
              variants={item}
            >
              <img
                src={f.icon}
                alt={f.title}
                className="h-7 w-7 mb-5 object-contain"
                draggable={false}
              />
              <h3 className="text-base font-semibold text-[#232323] dark:text-[var(--statss-heading)] mb-1">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-[var(--statss-text)]">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
