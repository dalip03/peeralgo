// components/ProgressStats.tsx
"use client";

export default function ProgressStats() {
  return (
    <section className="w-full bg-[#232B38] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <span className="text-base md:text-lg text-[#6A84A0] mb-2 font-medium">
          
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
        </span>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 md:mb-14">
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
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative bg-[#232B38] rounded-xl border border-[#40485b] px-4 py-7 flex flex-col items-center overflow-hidden min-h-[180px]">
            {/* Number BG Image */}
            <span className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none opacity-85">
              <img
                src="/img/30.svg"
                alt=""
                style={{ width: "200px", maxWidth: "90vw" }} // Set any width you like
                className="object-contain"
                draggable={false}
              />
            </span>
            <span className="relative z-10 text-white text-2xl font-bold mb-1">
              30%
            </span>
            <span className="relative z-10 text-white text-xl font-semibold mb-2 opacity-90">
              Cheaper
            </span>
            <span className="relative z-10 text-[#C4CFDE] text-xs md:text-xs mt-2">
              Compared to any 6 month course
            </span>
          </div>
          {/* Card 2 */}
          <div className="relative bg-[#232B38] rounded-xl border border-[#40485b] px-4 py-7 flex flex-col items-center overflow-hidden min-h-[180px]">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none opacity-85">
              <img
                src="/img/4.svg"
                alt=""
                style={{ width: "140px", maxWidth: "90vw" }} // Set any width you like
                className="object-contain"
                draggable={false}
              />
            </span>
            <span className="relative z-10 text-white text-2xl font-bold mb-1">
              4x
            </span>
            <span className="relative z-10 text-white text-xl font-semibold mb-2 opacity-90">
              Results
            </span>
            <span className="relative z-10 text-[#C4CFDE] text-xs md:text-xs mt-2">
              As compared to any online courses
            </span>
          </div>
          {/* Card 3 */}
          <div className="relative bg-[#232B38] rounded-xl border border-[#40485b] px-4 py-7 flex flex-col items-center overflow-hidden min-h-[180px]">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none opacity-85">
              <img
                src="/img/50.svg"
                alt=""
                style={{ width: "200px", maxWidth: "90vw" }} // Set any width you like
                className="object-contain"
                draggable={false}
              />
            </span>
            <span className="relative z-10 text-white text-2xl font-bold mb-1">
              50%
            </span>
            <span className="relative z-10 text-white text-xl font-semibold mb-2 opacity-90">
              Faster
            </span>
            <span className="relative z-10 text-[#C4CFDE] text-xs md:text-xs mt-2">
              Get results within 6 months instead of years
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
