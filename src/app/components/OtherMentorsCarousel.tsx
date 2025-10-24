"use client";
import Image from 'next/image';

// Custom CSS (put this in your global.css or a CSS module, then apply 'scrollbar-hide' class)
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
  }
];

export default function OtherMentorsCarousel() {
  return (
    <>
      {/* Inline style for scrollbar hide */}
      <style>{globalStyle}</style>
      <section className="w-full md:px-4 py-8">
        <h2 className="text-xl md:text-2xl font-bold mb-5">Other Mentors</h2>
        <div className="overflow-x-auto scrollbar-hide -mx-2 pb-2">
          <div
            className="
              flex gap-6 px-2 py-2 min-w-[800px] md:min-w-0
              "
            style={{ alignItems: "stretch" }}
          >
            {mentors.map((mentor) => (
              <div
                key={mentor.name}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm min-w-[340px] max-w-[360px] flex-shrink-0 px-5 py-5 flex flex-col relative h-full"
                style={{ minHeight: 420, display: "flex" }}
              >
                {/* Star badge */}
                {mentor.isStar && (
                  <span className="absolute top-5 right-5 bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-lg shadow z-10">
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
                    className="rounded-full object-cover bg-gray-100"
                  />
                  <div>
                    <div className="font-semibold">{mentor.name}</div>
                    <div className="text-xs text-gray-700">{mentor.title}</div>
                    <div className="text-xs text-gray-400">{mentor.experience} @ {mentor.company}</div>
                  </div>
                </div>
                {/* Bio */}
                <div className="text-[13px] text-gray-900 mb-2 flex-1">
                  {mentor.bio}
                </div>
                {/* Skills */}
                <div className="flex gap-2 text-xs text-gray-700 font-medium mb-2 flex-wrap">
                  {mentor.tags.map((skill) => (
                    <span key={skill} className="bg-gray-100 px-2 py-1 rounded">{skill}</span>
                  ))}
                  <span className="font-bold text-blue-500 cursor-pointer">more</span>
                </div>
                {/* Price/Stats */}
                <div className="flex items-center justify-between mt-2 mb-2">
                  <div>
                    <span className="text-lg font-bold">{mentor.price}</span>
                    <span className="text-xs text-gray-500 ml-1">/month</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-700">
                    <span className="font-semibold">{mentor.rating}</span>
                    <span className="text-yellow-500">★</span>
                    <span className="ml-2">{mentor.mentees}+ mentees</span>
                  </div>
                </div>
                {/* Actions */}
                <div className="flex gap-2 mb-2">
                  <button className="rounded-lg border text-sm px-4 py-2 font-medium hover:bg-gray-100 transition">
                    View Profile
                  </button>
                  <button className="rounded-lg bg-blue-600 text-white text-sm px-4 py-2 font-semibold hover:bg-blue-700 transition">
                    Book a FREE Trial
                  </button>
                </div>
                {/* Tags/Targeting */}
                <div className="text-xs mb-1 text-gray-500">
                  For: <span className="text-gray-700 font-medium">{mentor.type}</span>
                </div>
                <div className="text-xs text-gray-500">
                  Targeting: <span className="text-gray-800">{mentor.targeting}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
