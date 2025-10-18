// components/WhyEdumentorStandsOut.tsx

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

  return (
    <section className="w-full bg-[#e7f2fe] py-16 px-3">
      <div className="max-w-4xl mx-auto rounded-2xl py-8 px-2 md:px-8 bg-[#e7f2fe] ">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block px-5 py-1 mb-3 text-xs font-semibold border border-blue-200 rounded-full text-[#3686FD] bg-white">
            COMPARISON
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#232323] mb-1">
            Why <span className="text-[#3686FD]">Edumentor</span> Stands Out
          </h2>
          <div className="text-gray-500 text-sm mb-10">
            See how we compare against others in the market
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-9 justify-center items-center">
          {/* EduMentor */}
          <div className="bg-white rounded-xl p-7 w-full md:w-1/2 mb-5 md:mb-0">
            <h3 className="mb-6 text-xl font-semibold text-[#232323] text-left">
              EduMentor
            </h3>
            <ul>
              {edumentor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-gray-700 mb-4 text-left"
                >
                  <img
                    src="/icons/check.svg"
                    alt="tick"
                    className="h-4 w-4 object-contain"
                  />{" "}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Others */}
          <div className="bg-white rounded-xl p-7 w-full md:w-1/2">
            <h3 className="mb-6 text-xl font-semibold text-[#232323] text-left flex items-center gap-2">
              <img src="/icons/others.svg" className="w-5 h-5" alt="" />
              Others
            </h3>
            <ul>
              {others.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-gray-400 mb-4 text-left"
                >
                  <img
                    src="/icons/wrong.svg"
                    alt="tick"
                    className="h-4 w-4 object-contain"
                  />{" "}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
