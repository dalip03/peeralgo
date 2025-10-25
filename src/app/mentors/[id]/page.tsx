import {
  FaStar,
  FaClock,
  FaUsers,
  FaUserGraduate,
  FaQuestionCircle,
} from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import Image from "next/image";
import { mentors } from "../../data/mentorsData";
import { notFound } from "next/navigation";
import MentorshipCurriculum from "@/app/components/MentorshipCurriculum";
import MentorAbout from "@/app/components/MentorAbout";
import MentorReviewAndTestimonials from "@/app/components/MentorReviewAndTestimonials";
import PeeralgoPromise from "@/app/components/PeeralgoPromise";
import OtherMentorsCarousel from "@/app/components/OtherMentorsCarousel";

export default async function MentorProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ Must await params in Next.js 15+

  const mentor = mentors.find((m) => m.id === id);
  if (!mentor) return notFound();

  return (
    <div className="min-h-screen bg-[#f9fafb] flex justify-center px-4 py-10">
      <div className="w-full bg-white rounded-2xl overflow-hidden relative">
        {/* Banner Section */}
        <div className="relative w-full h-[180px] md:h-[230px]">
          <Image
            src={mentor.headerImg}
            alt="Header"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Profile Section */}
        <div className="relative px-6 md:px-10 pb-10 py-10">
          {/* Profile Avatar */}
          <div className="absolute -top-16 left-6 md:left-10 w-[140px] h-[140px] rounded-xl border-4 border-white shadow-lg overflow-hidden">
            <Image
              src={mentor.profileImg}
              alt={mentor.name}
              width={110}
              height={110}
              className="object-cover w-40 h-40"
            />
          </div>

          {/* Right Section (Placement Info) */}
          <div className="absolute right-6 top-[190px] hidden md:flex flex-col text-sm text-gray-600 text-right">
            <span>{mentor.careerInfo.year} Placed in</span>
            <span className="font-semibold text-gray-900">
              {mentor.careerInfo.companies[0]}
            </span>
            {mentor.careerInfo.companies[1] && (
              <span>{mentor.careerInfo.companies[1]}</span>
            )}
            <div className="flex items-center gap-2 mt-1 justify-end text-gray-600">
              <FaUserGraduate className="text-blue-500" />
              <span>{mentor.careerInfo.college}</span>
            </div>
          </div>

          {/* Main Info */}
          <div className="pt-20 md:pt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-gray-900">
                  {mentor.name}
                </h1>
                {mentor.isStar && (
                  <span className="bg-[#FEDF89]/20 text-orange-300 border border-yellow-400 rounded-md text-xs font-semibold p-2 flex items-center gap-1">
                    <Image
                      alt="icon"
                      src="/mentor_assets/starmentor.svg"
                      height={20}
                      width={20}
                    />
                    Star Mentor
                  </span>
                )}
              </div>
              <p className="text-gray-600 mt-1 font-medium">{mentor.domain}</p>
            </div>

            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white text-sm font-medium shadow-sm hover:bg-gray-50">
                <FaQuestionCircle className="text-blue-500" />
                Ask a Question
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white text-sm font-medium shadow-sm hover:bg-gray-50">
                <HiOutlineHeart className="text-pink-500" />
                View Pricing
              </button>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-4 text-gray-600 text-sm max-w-3xl">
            {mentor.bio.length > 240 ? (
              <>
                {mentor.bio.slice(0, 240)}...
                <span className="text-blue-600 cursor-pointer font-medium">
                  {" "}
                  read more
                </span>
              </>
            ) : (
              mentor.bio
            )}
          </div>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap gap-5 text-lg font-semibold text-black">
            <span className="flex items-center gap-2">
              <Image
                alt="icon"
                src="/mentor_assets/reviewmentor.svg"
                height={28}
                width={28}
              />
              {mentor.rating}{" "}
              <span className="text-black/80 text-[15px] font-normal">
                ({mentor.reviewCount} Reviews)
              </span>
            </span>
            <span className="flex items-center gap-2 text-black">
              <Image
                alt="icon"
                src="/mentor_assets/timementor.svg"
                height={28}
                width={28}
              />{" "}
              {mentor.mentoringMins}+<span className="text-black/80 text-[15px] font-normal "> Mentoring Mins</span>
            </span>
            <span className="flex items-center gap-2 ">
              <Image
                alt="icon"
                src="/mentor_assets/mentees.svg"
                height={28}
                width={28}
              />{" "}
              {mentor.menteeCount}+ <span className="text-black/80 text-[15px] font-normal"> Mentees</span>
            </span>
          </div>

          {/* Mobile Placement Info */}
          <div className="mt-6 text-sm text-gray-600 md:hidden">
            <div className="text-center">
              <div>{mentor.careerInfo.year} Passed Out placed in</div>
              <div className="font-semibold text-gray-900">
                {mentor.careerInfo.companies[0]}
              </div>
              {mentor.careerInfo.companies[1] && (
                <div>{mentor.careerInfo.companies[1]}</div>
              )}
              <div className="flex items-center gap-2 mt-1 justify-center">
                <FaUserGraduate className="text-blue-500" />
                <span>{mentor.careerInfo.college}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Review */}
        <div className="border-t border-gray-200 px-6 md:px-10 py-8 bg-[#fafafa] ">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="font-semibold text-base text-gray-900">
              Recent Review
            </h2>
            <button className="text-blue-600 text-sm font-medium hover:underline ">
              View All Reviews ({mentor.reviewCount})
            </button>
          </div>

          <p className="mt-3 text-gray-700 text-sm leading-relaxed md:mr-40">
            {mentor.recentReview.text}
          </p>

          <div className="mt-5 flex items-center gap-3">
            <Image
              src={mentor.recentReview.reviewerImg}
              alt={mentor.recentReview.reviewer}
              width={38}
              height={38}
              className="rounded-full object-cover border shadow-sm"
            />
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium text-gray-900">
                {mentor.recentReview.reviewer}
              </span>
              <span className="text-gray-400 text-xs">
                {mentor.recentReview.timeAgo}
              </span>
            </div>
          </div>
        </div>

        {/* Curriculum Section */}
        <div className="mt-10">
          <MentorshipCurriculum />
        </div>

        <div>
          <MentorAbout />
        </div>

        <div>
          <MentorReviewAndTestimonials />
        </div>
        <div>
          <PeeralgoPromise/>
        </div>
        <div>
          <OtherMentorsCarousel />
        </div>
      </div>
    </div>
  );
}
