"use client";

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
export default async function MentorProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const mentor = mentors.find((m) => m.id === id);
  if (!mentor) return notFound();

  return (
    <div className="min-h-screen bg-[#f9fafb] flex justify-center px-4 py-10">
      <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden relative">
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
          <div className="absolute -top-16 left-6 md:left-10 w-[110px] h-[110px] rounded-xl border-4 border-white shadow-lg overflow-hidden">
            <Image
              src={mentor.profileImg}
              alt={mentor.name}
              width={110}
              height={110}
              className="object-cover w-40 h-40 "
            />
          </div>

          {/* Right Section (Placement Info) */}
          <div className="absolute right-6 top-[190px] hidden md:flex flex-col text-sm text-gray-600 text-right">
            <span>{mentor.careerInfo.year} Passed Out placed in</span>
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
                  <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
                    <FaStar className="text-yellow-400" /> Star Mentor
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
          <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium text-gray-700">
            <span className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              {mentor.rating}{" "}
              <span className="text-gray-500">
                ({mentor.reviewCount} Reviews)
              </span>
            </span>
            <span className="flex items-center gap-2 text-pink-600">
              <FaClock /> {mentor.mentoringMins}+ Mentoring Mins
            </span>
            <span className="flex items-center gap-2 text-green-600">
              <FaUsers /> {mentor.menteeCount}+ Mentees
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
            <button className="text-blue-600 text-sm font-medium hover:underline">
              View All Reviews ({mentor.reviewCount})
            </button>
          </div>

          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
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
        <div className="border-t border-gray-200 px-6 md:px-10 py-8">
          <h2 className="font-semibold text-gray-900 text-base mb-2">
            What will be covered
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            This is a tentative mentorship curriculum that will change based on
            your needs after the trial session with the mentor.
          </p>

          {/* Duration Tabs */}
          <div className="flex gap-3">
            {["6 Months", "3 Months", "1 Month"].map((duration, index) => (
              <button
                key={duration}
                className={`px-4 py-2 rounded-lg border text-sm font-medium ${
                  index === 1
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                {duration}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
