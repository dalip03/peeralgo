"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const companies = [
  { name: "Google", icon: "/icons/google.svg" },
  { name: "Amazon", icon: "/icons/amazon.svg" },
  { name: "Meta", icon: "/icons/dot.svg" },
  { name: "Apple", icon: "/icons/dot.svg" },
  { name: "Paypal", icon: "/icons/dot.svg" },
  { name: "Adobe", icon: "/icons/adobe.svg" },
  { name: "Oracle", icon: "/icons/dot.svg" },
];

const skills = [
  { name: "DSA", icon: "/icons/dsa.svg" },
  { name: "Python", icon: "/icons/dot.svg" },
  { name: "Java", icon: "/icons/dot.svg" },
  { name: "Software Testing", icon: "/icons/dot.svg" },
  { name: "System Design", icon: "/icons/system.svg" },
  { name: "Angular", icon: "/icons/dot.svg" },
  { name: "React", icon: "/icons/dot.svg" },
];

const domains = [
  { name: "Frontend Developer", icon: "/icons/fd.svg" },
  { name: "Backend Developer", icon: "/icons/bd.svg" },
  { name: "Data Scientist", icon: "/icons/ds.svg" },
  { name: "Fullstack Developer", icon: "/icons/fullstack.svg" },
  { name: "QA Engineer", icon: "/icons/qa.svg" },
  { name: "Data Engineer", icon: "/icons/de.svg" },
  { name: "UI/UX Designer", icon: "/icons/uiux.svg" },
];

export default function HeroSection() {

  const router = useRouter();
  return (
    <section
      className="relative w-full min-h-[80vh] pt-28 pb-16 px-2 md:px-0 font-poppins"
      style={{
        background: "linear-gradient(180deg, #E7F5FE 0%, #FFF 100%)",
      }}
    >
      {/* Background glowing circle image */}
      <div
        className="pointer-events-none absolute left-1/2 top-2 z-[1] flex w-full justify-center"
        style={{
          transform: "translateX(-50%) translateY(10%)",
          height: 420,
        }}
        aria-hidden="true"
      >
        <img
          src="/img/heroCircle.svg"
          alt=""
          className="mx-auto rotate-140"
          style={{
            width: 780,
            maxWidth: "220vw",
            height: 780,
            objectFit: "contain",
            opacity: 0.95,
            display: "block",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative w-full flex flex-col items-center text-center max-w-3xl mx-auto z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-3 leading-tight text-[#191C20] text-center"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Supercharge your career with <br className="hidden md:block" />
          <span className="block">Long Term Mentorship</span>
        </motion.h2>
        <motion.p
          className="text-gray-500 mb-7 max-w-2xl px-4 mx-auto text-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Land your dream job, role, and company faster than ever with 1:1 long
          term mentorship.
        </motion.p>
        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          <button onClick={()=>router.push("/contact")} className="bg-white border border-gray-200 text-black px-6 py-2.5 rounded-md cursor-pointer shadow-sm hover:border-[var(--primary)] transition text-base">
            Book a Free Trial
          </button>
          <button onClick={()=>router.push("/mentors")} className="bg-[var(--primary)] hover:bg-[var(--hoverprimary)] flex justify-center cursor-pointer items-center text-white px-6 py-2.5 rounded-md shadow-sm transition text-base">
            Find Your Mentor
            <img
              src="/icons/right.svg"
              alt="arrow"
              className="ml-2 h-6 w-6 object-contain"
            />
          </button>
        </motion.div>
        {/* Features */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-gray-500 font-medium mb-10"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.27 }}
        >
          <div className="flex items-center text-black gap-2">
            <img
              src="/icons/tick.svg"
              alt="tick"
              className="h-4 w-4 object-contain"
            />
            No Payment Required
          </div>
          <div className="flex items-center text-black gap-2">
            <img
              src="/icons/tick.svg"
              alt="tick"
              className="h-4 w-4 object-contain"
            />
            Verified Mentors Only
          </div>
          <div className="flex items-center text-black gap-2">
            <img
              src="/icons/tick.svg"
              alt="tick"
              className="h-4 w-4 object-contain"
            />
            Reschedule Anytime
          </div>
        </motion.div>
      </div>

      {/* Cards grid */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 mt-2 z-10 relative">
        {/* Companies */}
        <motion.div
          className="bg-white  shadow-sm  p-5 flex flex-col"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.52, delay: 0.12 }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-base text-gray-800">
              Companies
            </span>
            <span className="text-lg text-gray-400">
              <img
                src="/icons/rightArrow.svg"
                alt="arrow"
                className="h-10 w-10 object-contain"
              />
            </span>
          </div>
          <div className="flex flex-col gap-3 mb-4">
            {companies.map((c) => (
              <div key={c.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={c.icon}
                    alt={c.name}
                    className="h-5 w-5 object-contain"
                  />
                  <span className="text-sm text-gray-700">{c.name}</span>
                </div>
                <img
                  src="/icons/righticon.svg"
                  alt="arrow"
                  className="h-3 w-3 object-contain"
                />
              </div>
            ))}
          </div>
          <button className="mt-auto bg-black text-white py-2 rounded-md text-sm font-semibold hover:bg-black/90 transition">
            Explore All Companies &rarr;
          </button>
        </motion.div>
        {/* Skills */}
        <motion.div
          className="bg-white shadow-sm  p-5 flex flex-col"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.17 }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-base text-gray-800">
              Skills
            </span>
            <span className="text-lg text-gray-400">
              <img
                src="/icons/rightArrow.svg"
                alt="arrow"
                className="h-10 w-10 object-contain"
              />
            </span>
          </div>
          <div className="flex flex-col gap-3 mb-4">
            {skills.map((s) => (
              <div key={s.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={s.icon}
                    alt={s.name}
                    className="h-5 w-5 object-contain"
                  />
                  <span className="text-sm text-gray-700">{s.name}</span>
                </div>
                <img
                  src="/icons/righticon.svg"
                  alt="arrow"
                  className="h-3 w-3 object-contain"
                />
              </div>
            ))}
          </div>
          <button className="mt-auto bg-black text-white py-2 rounded-md text-sm font-semibold hover:bg-black/90 transition">
            Explore All Skills &rarr;
          </button>
        </motion.div>
        {/* Domains */}
        <motion.div
          className="bg-white rounded-sm shadow-sm  p-5 flex flex-col"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.22 }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-base text-gray-800">
              Domains
            </span>
            <span className="text-lg text-gray-400">
              <img
                src="/icons/rightArrow.svg"
                alt="arrow"
                className="h-10 w-10 object-contain"
              />
            </span>
          </div>
          <div className="flex flex-col gap-3 mb-4">
            {domains.map((d) => (
              <div key={d.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={d.icon}
                    alt={d.name}
                    className="h-5 w-5 object-contain"
                  />
                  <span className="text-sm text-gray-700">{d.name}</span>
                </div>
                <img
                  src="/icons/righticon.svg"
                  alt="arrow"
                  className="h-3 w-3 object-contain"
                />
              </div>
            ))}
          </div>
          <button className="mt-auto bg-black text-white py-2 rounded-md text-sm font-semibold hover:bg-black/90 transition">
            Explore All Domains &rarr;
          </button>
        </motion.div>
      </div>
    </section>
  );
}
