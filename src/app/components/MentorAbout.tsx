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
    <div
      className="py-4 transition-colors duration-300"
      style={{
        background: "var(--mentorabout-bg, #fafafa)",
        color: "var(--mentorabout-text, #1a1a1a)",
      }}
    >
      {/* ABOUT SECTION */}
      <div
        className="shadow-sm rounded-xl border p-6 mb-4 transition-colors duration-300"
        style={{
          background: "var(--mentorabout-card-bg, #ffffff)",
          borderColor: "var(--mentorabout-border, #e5e7eb)",
        }}
      >
        <h2
          className="text-lg font-semibold mb-4"
          style={{ color: "var(--mentorabout-heading, #1a1a1a)" }}
        >
          About
        </h2>
        <p
          className="text-sm leading-relaxed mb-3"
          style={{ color: "var(--mentorabout-subtext, #4b5563)" }}
        >
          I have around 16 years of experience in full-stack technologies. I am
          currently having around 4 years of experience in an engineering
          manager role. I love distributed architecture and talking about system
          design. I can coach you in transitioning from a technical to a
          management role.
        </p>
        <p
          className="text-sm cursor-pointer"
          style={{ color: "var(--mentorabout-link, #3b82f6)" }}
        >
          ... read more
        </p>

        {/* Location & Languages */}
        <div
          className="grid md:grid-cols-2 gap-4 mt-6 border-t pt-4"
          style={{ borderColor: "var(--mentorabout-border, #e5e7eb)" }}
        >
          <div>
            <p
              className="text-xs uppercase mb-1"
              style={{ color: "var(--mentorabout-muted, #6b7280)" }}
            >
              Find Me Here
            </p>
            <p
              className="inline-flex items-center text-[14px] border rounded-md px-4 py-2"
              style={{
                borderColor: "var(--mentorabout-border, #e5e7eb)",
                color: "var(--mentorabout-subtext, #4b5563)",
              }}
            >
              📍 Karnataka, India
            </p>
          </div>
          <div>
            <p
              className="text-xs uppercase mb-1"
              style={{ color: "var(--mentorabout-muted, #6b7280)" }}
            >
              Languages That I Speak
            </p>
            <div className="flex gap-2">
              {["English", "Hindi"].map((lang, i) => (
                <Badge
                  key={i}
                  className="px-3 py-1 text-[12px] rounded-md"
                  style={{
                    background: "var(--mentorabout-badge-bg, #f9fafb)",
                    color: "var(--mentorabout-badge-text, #4b5563)",
                  }}
                >
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS & TOOLS */}
      <div
        className="shadow-sm rounded-xl border p-8 mb-4 transition-colors duration-300"
        style={{
          background: "var(--mentorabout-card-bg, #ffffff)",
          borderColor: "var(--mentorabout-border, #e5e7eb)",
        }}
      >
        {/* TECHNICAL SKILLS */}
        <div className="pb-6">
          <h2
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--mentorabout-heading, #1a1a1a)" }}
          >
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="border text-[12px] px-3 py-2 rounded-full"
                style={{
                  borderColor: "var(--mentorabout-border, #e5e7eb)",
                  color: "var(--mentorabout-subtext, #1f2937)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* TOOLS SECTION */}
        <div
          className="border-t pt-6"
          style={{ borderColor: "var(--mentorabout-border, #e5e7eb)" }}
        >
          <h2
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--mentorabout-heading, #1a1a1a)" }}
          >
            Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="border text-[12px] px-3 py-2 rounded-full"
                style={{
                  borderColor: "var(--mentorabout-border, #e5e7eb)",
                  color: "var(--mentorabout-subtext, #1f2937)",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* MENTORSHIP SECTION */}
      <div
        className="shadow-sm rounded-xl border p-6 transition-colors duration-300"
        style={{
          background: "var(--mentorabout-card-bg, #ffffff)",
          borderColor: "var(--mentorabout-border, #e5e7eb)",
        }}
      >
        <h2
          className="text-lg font-semibold mb-2"
          style={{ color: "var(--mentorabout-heading, #1a1a1a)" }}
        >
          Who can join my Long Term Mentorship Program?
        </h2>
        <p
          className="text-sm mb-6"
          style={{ color: "var(--mentorabout-subtext, #4b5563)" }}
        >
          You just need to follow what I plan for you and you will reap the
          benefits in a very short time. All I am expecting is being disciplined
          and improvising consistently.
        </p>

        <div
          className="p-4 rounded-md"
          style={{
            border: "1px solid var(--mentorabout-border, #e5e7eb)",
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-2 sm:gap-0">
            <p
              className="text-sm mb-0 sm:mb-2"
              style={{ color: "var(--mentorabout-subtext, #4b5563)" }}
            >
              If you&apos;re targeting:
            </p>
            <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
              {[
                "Backend Developer",
                "Engineering Manager",
                "Fullstack Developer",
              ].map((target, i) => (
                <Badge
                  key={i}
                  className="px-4 py-2 text-[12px] rounded-md"
                  style={{
                    background: "var(--mentorabout-badge-bg, #f9fafb)",
                    color: "var(--mentorabout-badge-text, #4b5563)",
                  }}
                >
                  {target}
                </Badge>
              ))}
            </div>
          </div>

          <div
            className="flex items-center justify-between border-t pt-4"
            style={{ borderColor: "var(--mentorabout-border, #e5e7eb)" }}
          >
            <p
              className="text-sm mb-2"
              style={{ color: "var(--mentorabout-subtext, #4b5563)" }}
            >
              If you’re a:
            </p>
            <div
              className="border rounded-md text-[12px] px-4 py-2"
              style={{
                borderColor: "var(--mentorabout-border, #e5e7eb)",
                color: "var(--mentorabout-subtext, #4b5563)",
              }}
            >
              🧑‍💼 Working Professional
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
