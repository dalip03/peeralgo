"use client";
import { useState } from "react";
import Image from "next/image";

const days = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
];

export default function LTMScheduleSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-[#fff] border border-[#E9E9E9] rounded-2xl p-4 md:p-8 w-full mx-auto relative shadow-sm">
      {/* Heading + Desc */}
      <h2 className="font-bold text-[20px] md:text-xl text-[#232323] mb-1 mt-1">
        How 1:10 Long Term Mentorship Works
      </h2>
      <div className="text-[14px] text-[#8E98A9] mb-4">
        Every element of this, including the schedule will be personalised for your learning pace, situation &amp; goals.
      </div>

      {/* Days */}
      <div className="flex flex-wrap gap-2 mb-6">
        {days.map((day, i) => (
          <button
            key={day}
            onClick={() => setSelected(i)}
            className={`rounded-lg px-4 py-2 border text-sm transition ${
              selected === i
                ? "bg-[#F4F8FB] border-[#abcffb] text-blue-600 font-semibold"
                : "bg-white border-[#E0E8F0] text-[#232323] hover:bg-blue-50"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Content Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-2">
        {/* Left Column (sample week heading + design) */}
        <div className="bg-[#F7F9FC] min-h-[300px] rounded-xl p-5 flex flex-col">
          <h3 className="text-[#232323] font-bold text-base mb-2">
            A sample week in long-term mentorship with Vikas Bharti
          </h3>
          <div className="flex-1 flex items-center justify-center relative min-h-[220px]">
            <Image
              src="/img/LTMW.svg" 
              alt="Sample mentor card"
              width={320}
              height={180}
              objectFit="contain"
              className="rounded-lg "
            />
          </div>
        </div>
        {/* Right Column (session info, blurred/faded, matches the image) */}
        <div className="bg-[#F7F9FC] rounded-xl p-5 flex flex-col relative justify-center">
          <div className="h-24 md:h-36 flex flex-col items-start justify-center opacity-40 select-none">
            <h4 className="text-base font-semibold text-gray-400 mb-2">
              1:1 Session with
            </h4>
            <p className="text-gray-400 text-sm">
              Let&apos;s use this session to solve Data Structures & find out areas to focus on...
            </p>
          </div>
          <div className="absolute right-3 top-1/2 md:top-[45%] -translate-y-1/2 z-10">
            <button className="w-12 h-12 rounded-full border border-[#e9e9e9] flex items-center justify-center text-2xl text-[#232323] transition hover:bg-[#f5f6fa]">
              <span className="sr-only">Next</span>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
