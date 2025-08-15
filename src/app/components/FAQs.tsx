// components/FAQs.tsx
'use client';
import { useState } from "react";

const FAQS = [
  {
    q: "Does Long-term mentorship really produce outcomes?",
    a: "Yes! Long-term mentorship helps you to receive ongoing feedback and guidance, which results in stronger progress and sustainable career growth."
  },
  {
    q: "What should be the duration of my long-term mentorship?",
    a: "The ideal duration varies per individual, but most successful mentorships last for at least a few months to a year for the best results."
  },
  {
    q: "How many sessions can I have with the mentor?",
    a: "You may schedule regular sessions as per your mentorship plan and mutual availability with your mentor."
  },
  {
    q: "When is the right time to take long-term mentorship?",
    a: "You can start whenever you feel ready for focused, consistent improvement and guidance towards your goals."
  },
  {
    q: "Do you provide any student discount on the long term mentorship plan?",
    a: "Yes, we offer special student discounts. Please reach out to our support team to learn more."
  },
  {
    q: "What are 100% money-back guarantee & mentor-change policies?",
    a: "We ensure a 100% money-back guarantee in case you’re not satisfied, and you may also change your mentor according to our policies."
  }
];

export default function FAQs() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#282828] py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 mb-8 text-center">
          Find answers to commonly asked questions about Long Term Mentorship
        </p>
        <div className="w-full flex flex-col gap-3">
          {FAQS.map((item, idx) => (
            <div
              key={item.q}
              className="bg-[#232323] rounded-lg"
            >
              <button
                className="flex w-full items-center justify-between px-5 py-4 outline-none focus:outline-none text-left"
                onClick={() => setOpenIdx(idx === openIdx ? null : idx)}
              >
                <span className="text-gray-100 text-[15px] font-medium">
                  {item.q}
                </span>
                <img
                  src="/icons/open.svg" 
                  className={`w-5 h-5 ml-2 transition-transform duration-200 ${openIdx === idx ? "rotate-45" : ""}`}
                  alt="+"
                  draggable={false}
                />
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5 text-gray-300 text-sm">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
