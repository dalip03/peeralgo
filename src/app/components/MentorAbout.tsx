"use client";
import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const skills = [
  "System Design",
  "DSA",
  "Java",
  "APIs",
  "Java Springboot",
  "Distributed Systems",
  "Leadership & Communication",
  "Micro Service",
  "Frontend Architecture",
  "React",
  "NodeJS",
  "Javascript",
  "AWS",
  "LLD",
  "OOP",
  "Postgres",
  "Kafka",
  "CSS",
  "DynamoDB",
  "RDBMS Data Modelling",
  "Frontend System Design",
  "ReactJS",
  "JavaScript",
  "Elastic Search",
  "Redis",
];

const tools = [
  "JIRA",
  "Slack",
  "Google Docs",
  "Zoom",
  "Visual Studio Code",
  "Postman",
  "Git",
  "Docker",
  "GitHub",
  "Webpack",
  "Kafka",
  "Cassandra",
  "Elasticsearch",
  "Kubernetes",
];

export default function MentorAbout() {
  return (
    <div className="bg-[#fafafa] py-4 text-[#1a1a1a]">
      {/* ABOUT SECTION */}
      <div className="bg-white shadow-sm rounded-xl border border-gray-200 p-6 mb-4">
        <h2 className="text-lg font-semibold mb-4">About</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          I have around 16 years of experience in full-stack technologies. I am
          currently having around 4 years of experience in an engineering
          manager role. I love distributed architecture and talking about system
          design. I can coach you in transitioning from a technical to a
          management role.
        </p>
        <p className="text-sm text-blue-500 cursor-pointer">... read more</p>

        {/* Location & Languages */}
        <div className="grid md:grid-cols-2 gap-4 mt-6 border-t border-gray-200 pt-4">
          <div>
            <p className="text-xs uppercase text-gray-500 mb-1">Find Me Here</p>
            <p className="inline-flex items-center text-[14px] text-gray-600 border border-gray-200 rounded-md px-4 py-2">
              📍 Karnataka, India
            </p>
          </div>
          <div>
            <p className="text-xs uppercase text-gray-500 mb-1">
              Languages That I Speak
            </p>
            <div className="flex gap-2">
              <Badge className="px-3 py-1 text-[12px] rounded-md text-gray-600">English</Badge>
              <Badge className="px-3 py-1 text-[12px] rounded-md text-gray-600">Hindi</Badge>
            </div>
          </div>
        </div>
      </div>
 
      <div className="bg-white shadow-sm rounded-xl border border-gray-200 p-8 mb-4">
        {/* TECHNICAL SKILLS */}
        <div className="pb-6">
          <h2 className="text-lg font-semibold mb-4">Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className=" border border-gray-200 text-[12px] text-gray-800 px-3 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* TOOLS SECTION */}
        <div className=" border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold mb-4">Tools</h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span
                key={index}
                className=" border border-gray-200 text-[12px] text-gray-800 px-3 py-2 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* MENTORSHIP SECTION */}
      <div className="bg-white shadow-sm rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-2">
          Who can join my Long Term Mentorship Program?
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          You just need to follow what I plan for you and you will reap the
          benefits in a very short time. All I am expecting is being disciplined
          and improvising consistently.
        </p>

        <div className=" border border-gray-200/80 p-4 rounded-md">
          <div className="flex  items-center justify-between pb-4">
            <p className="text-sm text-gray-700 mb-2">
              If you&apos;re targeting:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Backend Developer",
                "Engineering Manager",
                "Fullstack Developer",
              ].map((target, i) => (
                <Badge
                  key={i}
                  className="px-4 py-2 text-[12px] text-gray-500 rounded-md"
                >
                  {target}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-700 mb-2">If you’re a:</p>
            <div className="border-gray-200 border text-gray-700 rounded-md text-[12px] px-4 py-2">
              🧑‍💼 Working Professional
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
