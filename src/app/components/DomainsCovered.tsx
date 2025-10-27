"use client";

import { motion, Variants } from "framer-motion";

const domains = [
  { title: 'Frontend Developer', mentors: '27+', icon: '/icons/frontende.svg' },
  { title: 'Backend Developer', mentors: '120+', icon: '/icons/backendd.svg' },
  { title: 'Fullstack Developer', mentors: '86+', icon: '/icons/fullstacke.svg' },
  { title: 'DevOps / SRE', mentors: '22+', icon: '/icons/devops.svg' },
  { title: 'Data Analyst', mentors: '17+', icon: '/icons/dataa.svg' },
  { title: 'Data Scientist', mentors: '48+', icon: '/icons/datas.svg' },
  { title: 'Data Engineer', mentors: '21+', icon: '/icons/datae.svg' },
  { title: 'AI / ML', mentors: '48+', icon: '/icons/aiml.svg' },
  { title: 'Marketing', mentors: '13+', icon: '/icons/marketing.svg' },
  { title: 'Sales', mentors: '10+', icon: '/icons/sales.svg' },
  { title: 'Business Analyst', mentors: '27+', icon: '/icons/ba.svg' },
  { title: 'Finance', mentors: '6+', icon: '/icons/finance.svg' },
  { title: 'Product Manager', mentors: '32+', icon: '/icons/productm.svg' },
  { title: 'UI/UX Designer', mentors: '4+', icon: '/icons/ui.svg' },
  { title: 'Project Manager', mentors: '1+', icon: '/icons/pm.svg' },
  { title: 'Program Manager', mentors: '11+', icon: '/icons/pm.svg' },
];

export default function DomainsCovered() {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } 
    },
  };

  return (
    <section
      className="
        w-full py-14 px-2
        bg-[var(--domains-bg)]
        transition-colors duration-300
      "
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-2 text-[var(--domains-heading)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Every Domain Every Industry Covered
        </motion.h2>

        <motion.p
          className="text-center mb-10 text-sm text-[var(--domains-text)]"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our mentors are equipped to guide you in any field you&apos;re passionate about
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[4px]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {domains.map((domain) => (
            <motion.div
              key={domain.title}
              className="
                flex items-center gap-4 py-7 px-6 shadow-sm rounded-lg
                bg-[var(--domains-card-bg)]
                border border-[var(--domains-border)]
                transition-colors duration-300
              "
              variants={item}
            >
              <img src={domain.icon} alt={domain.title} className="w-5 h-5 object-contain" />
              <div>
                <div className="text-[12px] font-medium text-[var(--domains-heading)]">
                  {domain.title}
                </div>
                <div className="text-[var(--domains-muted)] text-xs">
                  Browse {domain.mentors} Mentors
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
