export interface MentorType {
  id: string;
  name: string;
  profileImg: string;
  headerImg: string;
  isStar?: boolean;
  domain: string;
  bio: string;
  title: string;
  company: string;
  location: string;
  reviews: number;
  reviewCount: number;
  rating: number;
  mentoringMins: number;
  menteeCount: number;
  recentReview: {
    text: string;
    reviewer: string;
    timeAgo: string;
    reviewerImg: string;
  };
  careerInfo: {
    year: string;
    companies: string[];
    college: string;
  };
  languages: string[];
  tags: string[];
  skills: string[];
  tools: string[];
  description: string;
  targeting: string;
  for: string;
  price: number;
  discount: string;
  sessionsPerWeek: number;
  referrals: number;
  curriculum: boolean;
  companies: string[];
}

export const mentors: MentorType[] = [
  {
    id: "mudassar-hakim",
    name: "Mudassar Hakim",
    profileImg: "/img/mentor.svg",
    headerImg: "/img/profileheader.svg",
    isStar: true,
    domain: "Full Stack",
    bio: "I will carve out a plan or roadmap for you and if you are consistent with the plan and work hard along with me. You will be able to achieve your goal and achieve greater success in the career. I instill confidence in my mentees and prepare them for f...",
    title: "Software Development Manager III",
    company: "Amazon",
    location: "Maharashtra, India",
    reviews: 12,
    reviewCount: 134,
    rating: 5.0,
    mentoringMins: 89750,
    menteeCount: 450,
    recentReview: {
      text: "Vikas took the time to calmly and thoughtfully evaluate my current level of technical expertise, and he provided clear, actionable insights on the areas I need to strengthen and how to strategically move forward. His guidance was not only honest but also highly encouraging. I genuinely appreciate the value this session brought to me. I’m truly grateful for his mentorship and excited about the possibility of learning and growing under his continued guidance in the long term.",
      reviewer: "Piyush Talele",
      timeAgo: "1 month ago",
      reviewerImg: "/img/Piyush.svg",
    },
    careerInfo: {
      year: "2024 Passed Out",
      companies: ["Walmart Global Tech India", "Cardinal Health"],
      college: "VIT Vellore",
    },
    languages: ["English", "Hindi"],
    tags: ["Java", "System Design", "NodeJS"],
    skills: ["Leadership & Communication", "System Design", "Java"],
    tools: ["Postman", "VS Code", "Docker", "GitHub"],
    description: "Experienced engineer focused on mentoring and career growth.",
    targeting: "Engineering Manager",
    for: "Working Professional",
    price: 7000,
    discount: "Extra 20% OFF",
    sessionsPerWeek: 1,
    referrals: 12,
    curriculum: true,
    companies: ["Amazon", "Microsoft"],
  },
  {
    id: "chetana-bollini",
    name: "Chetana Bollini",
    profileImg: "/img/mentor.svg",
    headerImg: "/img/profileheader.svg",
    isStar: false,
    domain: "Cloud Engineer",
    bio: "I will carve out a plan or roadmap for you and if you are consistent with the plan and work hard along with me. You will be able to achieve your goal and achieve greater success in the career. I instill confidence in my mentees and prepare them for f...",
    title: "Senior Software Engineer",
    company: "Salesforce",
    location: "Bangalore, India",
    reviews: 18,
    reviewCount: 89,
    rating: 4.8,
    mentoringMins: 60200,
    menteeCount: 300,
    recentReview: {
      text: "Highly knowledgeable and effective mentor in cloud tech.",
      reviewer: "Amit Kumar",
      timeAgo: "2 weeks ago",
      reviewerImg: "/img/Piyush.svg",
    },
    careerInfo: {
      year: "2022 Passed Out",
      companies: ["Salesforce", "Global Tech"],
      college: "IIT Delhi",
    },
    languages: ["English"],
    tags: ["Apex", "Salesforce", "Cloud"],
    skills: ["Salesforce", "APIs", "Cloud"],
    tools: ["VS Code", "Postman"],
    description: "Cloud engineer driving next-gen enterprise apps.",
    targeting: "Cloud Developer",
    for: "Working Professional",
    price: 6500,
    discount: "Extra 10% OFF",
    sessionsPerWeek: 2,
    referrals: 8,
    curriculum: true,
    companies: ["Salesforce", "Amazon"],
  },
  {
    id: "vikas-bharti",
    name: "Vikas Bharti",
    profileImg: "/img/mentor.svg",
    headerImg: "/img/profileheader.svg",
    isStar: true,
    domain: "Backend",
    bio: "I will carve out a plan or roadmap for you and if you are consistent with the plan and work hard along with me. You will be able to achieve your goal and achieve greater success in the career. I instill confidence in my mentees and prepare them for f...",

    title: "Senior Engineering Manager",
    company: "Walmart Global Tech India",
    location: "Delhi, India",
    reviews: 25,
    reviewCount: 110,
    rating: 5.0,
    mentoringMins: 95000,
    menteeCount: 520,
    recentReview: {
      text: "Vikas took the time to calmly and thoughtfully evaluate my current level of technical expertise, and he provided clear, actionable insights on the areas I need to strengthen and how to strategically move forward. His guidance was not only honest but also highly encouraging. I genuinely appreciate the value this session brought to me. I’m truly grateful for his mentorship and excited about the possibility of learning and growing under his continued guidance in the long term.",
      reviewer: "Sneha Patil",
      timeAgo: "1 month ago",
      reviewerImg: "/img/Piyush.svg",
    },
    careerInfo: {
      year: "2021 Passed Out",
      companies: ["Walmart Global Tech India", "Amazon"],
      college: "BITS Pilani",
    },
    languages: ["English", "Hindi"],
    tags: ["Java", "Cloud", "Microservice"],
    skills: ["Java", "Team Management", "Cloud"],
    tools: ["GitHub", "Docker"],
    description: "Seasoned professional guiding engineering teams to success.",
    targeting: "Engineering Leader",
    for: "Working Professional",
    price: 7500,
    discount: "No discount",
    sessionsPerWeek: 1,
    referrals: 10,
    curriculum: false,
    companies: ["Walmart Global Tech India", "Amazon"],
  },
  {
    id: "manish-pushkar",
    name: "Manish Pushkar",
    profileImg: "/img/mentor.svg",
    headerImg: "/img/profileheader.svg",
    isStar: false,
    domain: "Frontend",
    bio: "I will carve out a plan or roadmap for you and if you are consistent with the plan and work hard along with me. You will be able to achieve your goal and achieve greater success in the career. I instill confidence in my mentees and prepare them for f...",

    title: "Senior Frontend Developer",
    company: "Google",
    location: "Pune, India",
    reviews: 15,
    reviewCount: 105,
    rating: 4.9,
    mentoringMins: 85000,
    menteeCount: 400,
    recentReview: {
      text: "Vikas took the time to calmly and thoughtfully evaluate my current level of technical expertise, and he provided clear, actionable insights on the areas I need to strengthen and how to strategically move forward. His guidance was not only honest but also highly encouraging. I genuinely appreciate the value this session brought to me. I’m truly grateful for his mentorship and excited about the possibility of learning and growing under his continued guidance in the long term.",
      reviewer: "Rahul Sharma",
      timeAgo: "2 months ago",
      reviewerImg: "/img/Piyush.svg",
    },
    careerInfo: {
      year: "2023 Passed Out",
      companies: ["Google"],
      college: "IIT Bombay",
    },
    languages: ["English", "Hindi", "Marathi"],
    tags: ["React", "Next.js", "Tailwind CSS"],
    skills: ["React", "UI/UX"],
    tools: ["VS Code", "Figma", "Chrome DevTools"],
    description: "Frontend engineer dedicated to clean and performant apps.",
    targeting: "Frontend Engineer",
    for: "Freshers",
    price: 5500,
    discount: "Extra 15% OFF",
    sessionsPerWeek: 1,
    referrals: 5,
    curriculum: true,
    companies: ["Google"],
  },
  {
    id: "shishir-chandra",
    name: "Shishir Chandra",
    profileImg: "/img/mentor.svg",
    headerImg: "/img/profileheader.svg",
    isStar: true,
    domain: "Backend",
    bio: "I will carve out a plan or roadmap for you and if you are consistent with the plan and work hard along with me. You will be able to achieve your goal and achieve greater success in the career. I instill confidence in my mentees and prepare them for f...",

    title: "Engineering Lead",
    company: "Microsoft",
    location: "Hyderabad, India",
    reviews: 30,
    reviewCount: 150,
    rating: 5.0,
    mentoringMins: 97000,
    menteeCount: 600,
    recentReview: {
      text: "Vikas took the time to calmly and thoughtfully evaluate my current level of technical expertise, and he provided clear, actionable insights on the areas I need to strengthen and how to strategically move forward. His guidance was not only honest but also highly encouraging. I genuinely appreciate the value this session brought to me. I’m truly grateful for his mentorship and excited about the possibility of learning and growing under his continued guidance in the long term.",
      reviewer: "Nisha Patel",
      timeAgo: "3 weeks ago",
      reviewerImg: "/img/Piyush.svg",
    },
    careerInfo: {
      year: "2020 Passed Out",
      companies: ["Microsoft", "Amazon"],
      college: "IIT Madras",
    },
    languages: ["English", "Hindi", "Telugu"],
    tags: ["System Design", "DSA", "Leadership"],
    skills: ["System Design", "Leadership", "DSA"],
    tools: ["VS Code", "GitHub", "Azure"],
    description: "Engineering lead at Microsoft with passion for mentoring.",
    targeting: "System Architect",
    for: "Managers",
    price: 8000,
    discount: "Extra 5% OFF",
    sessionsPerWeek: 2,
    referrals: 15,
    curriculum: true,
    companies: ["Microsoft", "Amazon"],
  },
  {
    id: "sidharth-shukla",
    name: "Sidharth Shukla",
    profileImg: "/img/mentor.svg",
    headerImg: "/img/profileheader.svg",
    isStar: false,
    domain: "QA / Automation Testing",
    bio: "I will carve out a plan or roadmap for you and if you are consistent with the plan and work hard along with me. You will be able to achieve your goal and achieve greater success in the career. I instill confidence in my mentees and prepare them for f...",

    title: "SDET-2",
    company: "Amazon",
    location: "Chennai, India",
    reviews: 10,
    reviewCount: 88,
    rating: 4.7,
    mentoringMins: 60000,
    menteeCount: 320,
    recentReview: {
      text: "Vikas took the time to calmly and thoughtfully evaluate my current level of technical expertise, and he provided clear, actionable insights on the areas I need to strengthen and how to strategically move forward. His guidance was not only honest but also highly encouraging. I genuinely appreciate the value this session brought to me. I’m truly grateful for his mentorship and excited about the possibility of learning and growing under his continued guidance in the long term.",
      reviewer: "Kavita Sharma",
      timeAgo: "1 month ago",
      reviewerImg: "/img/Piyush.svg",
    },
    careerInfo: {
      year: "2023 Passed Out",
      companies: ["Amazon"],
      college: "IIT Hyderabad",
    },
    languages: ["English"],
    tags: ["Automation", "Testing", "DevOps", "Python"],
    skills: ["Automation", "DevOps"],
    tools: ["Postman", "Docker", "GitHub"],
    description: "QA specialist focused on automation and CI/CD pipelines.",
    targeting: "Automation Tester",
    for: "Working Professional",
    price: 5800,
    discount: "No discount",
    sessionsPerWeek: 1,
    referrals: 4,
    curriculum: true,
    companies: ["Amazon"],
  },
];
