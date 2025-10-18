// components/StruggleAloneCovered.tsx

export default function StruggleAloneCovered() {
  const features = [
    {
      icon: "/icons/live.svg",
      title: "1:1 Live Session",
      desc: "Never question your progress with frequent One on One session.",
    },
    {
      icon: "/icons/chat.svg",
      title: "Unlimited Chat with Mentor",
      desc: "Doubt? Get the right advice from your mentor via chat.",
    },
    {
      icon: "/icons/task.svg",
      title: "Task & Curated Resources",
      desc: "Yes! You will be certified for this mentorship program.",
    },
    {
      icon: "/icons/time.svg",
      title: "Regular Followups",
      desc: "Stay motivated and consistent with regular follow-ups.",
    },
    {
      icon: "/icons/job.svg",
      title: "Job Referrals",
      desc: "Get referrals from mentor community to top product and service based companies.",
    },
    {
      icon: "/icons/certificate.svg",
      title: "Certified",
      desc: "Yes! You will be certified for this mentorship program.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 px-2">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-[#232323]">
          No need to Struggle Alone Anymore
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Long term mentorship gets fully covered
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px]">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-white border border-gray-200 px-7 py-7 flex flex-col items-start"
            >
              <img
                src={f.icon}
                alt={f.title}
                className="h-7 w-7 mb-5 object-contain"
                draggable={false}
              />
              <h3 className="text-base font-semibold text-[#232323] mb-1">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
