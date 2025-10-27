"use client";
import Image from "next/image";

const globalStyle = `
.scrollbar-hide {
  -ms-overflow-style: none !important; /* IE and Edge */
  scrollbar-width: none !important; /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none !important; /* Chrome, Safari and Opera */
}
`;

const mentors = [
  {
    name: "Manish Pushkar",
    title: "Software Engineer 2",
    company: "Paypal",
    experience: "8 yrs of Exp.",
    isStar: true,
    img: "/img/Piyush.svg",
    mentees: 150,
    rating: 5.0,
    price: "$449",
    bio: "My goal is simple: help you land your dream software engineering job while keeping the process direct, clear and motivating. 🙂 Once you ace your next interview, circle back! read more",
    tags: ["Java Springboot", "DSA"],
    targeting: "Backend Developer Roles",
    type: "Experienced Professional",
  },
  {
    name: "Shishir Chandra",
    title: "Engineering lead",
    company: "Google",
    experience: "16 yrs of Exp.",
    isStar: true,
    img: "/img/Piyush.svg",
    mentees: 230,
    rating: 4.9,
    price: "$949",
    bio: "With over two hours of mentorship experience, I've served as a seasoned technical leader, guiding aspiring professionals. read more",
    tags: ["DSA", "HLD", "LLD"],
    targeting: "Backend Developer",
    type: "Experienced Professional",
  },
  {
    name: "Chetana Bollini",
    title: "Senior Software Engineer",
    company: "Salesforce",
    experience: "7 yrs of Exp.",
    isStar: true,
    img: "/img/Piyush.svg",
    mentees: 200,
    rating: 5.0,
    price: "$549",
    bio: "My objective is clear: to provide a detailed roadmap, teaching interview logics, conduct mock interviews, offer emotional support, engage long-term mentoring as and... read more",
    tags: ["Java", "DSA", "System Design"],
    targeting: "Backend Developer",
    type: "Experienced Professional | Fresher",
  },
  {
    name: "Rahul Sharma",
    title: "Backend Developer",
    company: "Paytm",
    experience: "10 yrs of Exp.",
    isStar: true,
    img: "/img/Piyush.svg",
    mentees: 175,
    rating: 4.8,
    price: "$499",
    bio: "Passionate about helping others crack interviews and build scalable backends. Your mentor in system design and DSA. read more",
    tags: ["System Design", "Node.js", "Java"],
    targeting: "Backend Developer",
    type: "Experienced Professional",
  },
];

export default function OtherMentorsCarousel() {
  return (
    <>
      {/* Inline scrollbar hide styles */}
      <style>{globalStyle}</style>

      <section
        className="w-full md:px-4 py-4 transition-colors duration-300"
        style={{
          background: "var(--mentors-bg, #ffffff)",
          color: "var(--mentors-text, #374151)",
        }}
      >
        <h2
          className="text-xl md:text-2xl font-bold mb-5 transition-colors duration-300"
          style={{ color: "var(--mentors-heading, #232323)" }}
        >
          Other Mentors
        </h2>

        <div className="overflow-x-auto scrollbar-hide -mx-2 pb-2">
          <div
            className="flex gap-6 px-2 py-2 min-w-[800px] md:min-w-0"
            style={{ alignItems: "stretch" }}
          >
            {mentors.map((mentor) => (
              <div
                key={mentor.name}
                className="rounded-2xl border shadow-sm min-w-[340px] max-w-[360px] flex-shrink-0 px-5 py-5 flex flex-col relative h-full transition-colors duration-300"
                style={{
                  background: "var(--mentors-card-bg, #ffffff)",
                  borderColor: "var(--mentors-border, #e5e7eb)",
                  minHeight: 420,
                }}
              >
                {/* Star badge */}
                {mentor.isStar && (
                  <span
                    className="absolute top-5 right-5 text-white text-xs font-semibold px-3 py-1 rounded-lg shadow z-10"
                    style={{
                      background: "var(--mentors-accent, #facc15)",
                      color: "var(--mentors-btn-text, #ffffff)",
                    }}
                  >
                    ★ Star Mentor
                  </span>
                )}

                {/* Profile */}
                <div className="flex items-center gap-3 mb-2">
                  <Image
                    src={mentor.img}
                    alt={mentor.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                    style={{
                      background: "var(--mentors-card-bg, #f3f4f6)",
                    }}
                  />
                  <div>
                    <div
                      className="font-semibold"
                      style={{ color: "var(--mentors-heading, #232323)" }}
                    >
                      {mentor.name}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "var(--mentors-sub, #6b7280)" }}
                    >
                      {mentor.title}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "var(--mentors-text, #9ca3af)" }}
                    >
                      {mentor.experience} @ {mentor.company}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div
                  className="text-[13px] mb-2 flex-1"
                  style={{ color: "var(--mentors-text, #6b7280)" }}
                >
                  {mentor.bio}
                  {/* Skills */}
                  <div className="flex gap-2 text-xs font-medium mb-2 flex-wrap mt-4">
                    {mentor.tags.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded transition-colors duration-300"
                        style={{
                          background: "var(--mentors-tab-bg, #f9fafb)",
                          color: "var(--mentors-tab-text, #000000)",
                          border: "1px solid var(--mentors-border, #e5e7eb)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                    <span
                      className="font-bold cursor-pointer transition-colors duration-300"
                      style={{ color: "var(--mentors-accent, #3b82f6)" }}
                    >
                      more
                    </span>
                  </div>
                </div>

                {/* Price/Stats */}
                <div className="flex items-center justify-between mt-2 mb-2">
                  <div>
                    <span
                      className="text-lg font-bold"
                      style={{ color: "var(--mentors-heading, #232323)" }}
                    >
                      {mentor.price}
                    </span>
                    <span
                      className="text-xs ml-1"
                      style={{ color: "var(--mentors-text, #6b7280)" }}
                    >
                      /month
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1 text-xs"
                    style={{ color: "var(--mentors-text, #6b7280)" }}
                  >
                    <span className="font-semibold">{mentor.rating}</span>
                    <span
                      style={{ color: "var(--mentors-accent, #facc15)" }}
                    >
                      ★
                    </span>
                    <span className="ml-2">{mentor.mentees}+ mentees</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mb-2 items-center justify-center mt-2">
                  <button
                    className="rounded-lg border text-sm px-4 py-2 font-medium transition-colors duration-300"
                    style={{
                      borderColor: "var(--mentors-border, #e5e7eb)",
                      color: "var(--mentors-heading, #232323)",
                      background: "var(--mentors-btn-bg, #ffffff)",
                    }}
                  >
                    View Profile
                  </button>
                  <button
                    className="rounded-lg text-sm px-4 py-2 font-semibold transition-colors duration-300"
                    style={{
                      background: "var(--mentors-accent, #3b82f6)",
                      color: "var(--mentors-btn-text, #ffffff)",
                    }}
                  >
                    Book a FREE Trial
                  </button>
                </div>

                {/* Tags/Targeting */}
                <div
                  className="text-xs mb-1"
                  style={{ color: "var(--mentors-text, #6b7280)" }}
                >
                  For:{" "}
                  <span
                    className="font-medium"
                    style={{ color: "var(--mentors-heading, #232323)" }}
                  >
                    {mentor.type}
                  </span>
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--mentors-text, #6b7280)" }}
                >
                  Targeting:{" "}
                  <span style={{ color: "var(--mentors-heading, #232323)" }}>
                    {mentor.targeting}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
