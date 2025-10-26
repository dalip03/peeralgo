"use client";
import Image from "next/image";

const features = [
  {
    icon: "/img/promise1.svg",
    alt: "Verified Mentors",
    title: "Vetted, verified & exclusive Mentors",
    description:
      "Choose duration after clicking book button. Monthly or longer subscription. Longer plans have discounts, less hassle. Discuss with mentor for optimal duration.",
  },
  {
    icon: "/img/promise2.svg",
    alt: "Money Back",
    title: "100% Money Back Guarantee",
    description:
      "Get full refund in 7 days if mentorship doesn't help. No questions asked. We'll suggest new mentor. Money protected, proceed worry-free.",
  },
  {
    icon: "/img/promise3.svg",
    alt: "Perfect Mentor",
    title: "Always find the perfect mentor",
    description:
      "Confirm mentorship details first. 1st trial or dashboard chat to discuss. Website chatbot messenger for other queries. Stay informed before deciding.",
  },
  {
    icon: "/img/promise4.svg",
    alt: "Mentor Change",
    title: "Mentor change at zero additional cost",
    description:
      "In case you don't gel well with your mentor, you can simply change your mentor. Your money for the remaining days is credited to the new mentor.",
  },
];

export default function PeeralgoPromise() {
  return (
    <section className="py-4 px-2 w-full">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">
        The Peeralgo Promise
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-gray-200 shadow-sm px-6 py-5 flex flex-col items-start min-h-[180px]"
          >
            <Image
              src={feature.icon}
              alt={feature.alt}
              width={28}
              height={28}
              className="mb-2"
              priority
            />
            <div className="font-semibold mb-1 text-base">{feature.title}</div>
            <div className="text-gray-500 text-sm">{feature.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
