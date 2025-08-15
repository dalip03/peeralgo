// components/WhyChooseUs.tsx

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white pt-10 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left column: Heading */}
          <div className="flex-1 mb-4 md:mb-0">
            <div className="inline-block mb-5">
              <span className="text-xs font-semibold border border-gray-300 rounded-full px-4 py-1 bg-white text-gray-700 shadow-sm select-none">
                Our Solutions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#191C20] leading-tight mt-2">
              Why Choose<br />Us?
            </h2>
          </div>
          {/* Right column: Description */}
          <div className="flex-1 flex flex-col justify-start items-end md:pl-8">
            <p className="md:text-right text-[15px] text-gray-600 md:max-w-sm">
              Real Mock Interviews with hiring managers. Real Mock Interviews with hiring managers from top Product based companies around the globe. 1 on 1 mentorship for every student with our qualified Student Assessment Faculties
            </p>
          </div>
        </div>
        {/* Image row */}
        <div className="mt-10">
          <img
            src="/img/chooseus.svg" 
            alt="Why Choose Us"
            className="w-full max-w-5xl h-auto object-cover rounded-2xl mx-auto"
            style={{ minHeight: 260 }}
          />
        </div>
      </div>
    </section>
  );
}
