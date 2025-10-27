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
    <section
      className="py-8 px-4 w-full transition-colors duration-300"
      style={{
        background: "var(--promise-bg, #ffffff)",
      }}
    >
      <h2
        className="text-xl md:text-2xl font-bold mb-8 text-center md:text-left"
        style={{ color: "var(--promise-heading, #232323)" }}
      >
        The Peeralgo Promise
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="rounded-xl border shadow-sm px-6 py-5 flex flex-col items-start min-h-[180px] transition-colors duration-300"
            style={{
              background: "var(--promise-card-bg, #ffffff)",
              borderColor: "var(--promise-border, #e5e7eb)",
            }}
          >
            <Image
              src={feature.icon}
              alt={feature.alt}
              width={28}
              height={28}
              className="mb-2"
              priority
            />
            <div
              className="font-semibold mb-1 text-base"
              style={{ color: "var(--promise-title, #232323)" }}
            >
              {feature.title}
            </div>
            <div
              className="text-sm leading-relaxed"
              style={{ color: "var(--promise-text, #6b7280)" }}
            >
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
