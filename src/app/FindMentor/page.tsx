'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function MentorFinder() {
  const [userType, setUserType] = useState<'student' | 'fresher'>('fresher');
  const [investment, setInvestment] = useState('');
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();
  const roles = [
    'Frontend Developer',
    'Backend Developer',
    'Fullstack Developer',
    'DevOps / SRE / Cloud Engineer',
    'QA / Automation Testing Engineer',
    'Data Engineer / Big Data',
    'Cybersecurity Engineer',
    'Engineering Manager',
    'Data Scientist / AI/ML',
    'Data Analyst',
    'Sales',
    'Marketing',
    'Business Analyst / Consultant',
    'Finance',
    'Product Manager',
    'Project / Program Manager',
    'VLSI / Embedded Engineer',
    'UI/UX Designer',
    'Java',
    'System Design',
    'Java Spring/boot',
    'Leadership & Communication',
    'Micro Service',
    'Redis',
    'REST'
  ];

  const toggleRole = (role: string) => {
    setSelectedRoles(prev =>
      prev.includes(role)
        ? prev.filter(r => r !== role)
        : [...prev, role]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Find Your Ideal Mentor
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-500">
              From 600+ Top Experienced Mentors
            </h2>
          </motion.div>

          {/* I'm a Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <label className="text-white font-semibold text-lg">I'm a</label>
            <div className="grid grid-cols-2 gap-4">
              {/* Student Card */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setUserType('student')}
                className={`p-6 rounded-2xl transition-all ${
                  userType === 'student'
                    ? 'bg-purple-600/30 border-2 border-purple-500'
                    : 'bg-gray-800/50 border-2 border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex flex-col items-center gap-3">
                  <GraduationCap className="w-12 h-12 text-gray-400" />
                  <span className="text-gray-400 font-medium">Student</span>
                </div>
              </motion.button>

              {/* Fresher Card */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setUserType('fresher')}
                className={`p-6 rounded-2xl transition-all ${
                  userType === 'fresher'
                    ? 'bg-purple-600/30 border-2 border-purple-500'
                    : 'bg-gray-800/50 border-2 border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex flex-col items-center gap-3">
                  <Briefcase className="w-12 h-12 text-gray-400" />
                  <span className="text-gray-400 font-medium">Fresher</span>
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* Investment Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <label className="text-white font-semibold text-lg">
              How much are you willing to invest to get to your dream job?
            </label>
            <div className="relative">
              <select
                value={investment}
                onChange={(e) => setInvestment(e.target.value)}
                className="w-full bg-gray-800/50 border-2 border-gray-700 text-gray-400 px-4 py-4 rounded-xl focus:outline-none focus:border-purple-500 appearance-none cursor-pointer"
              >
                <option value="">Select an option</option>
                <option value="0-5000">₹0 - ₹5,000</option>
                <option value="5000-10000">₹5,000 - ₹10,000</option>
                <option value="10000-20000">₹10,000 - ₹20,000</option>
                <option value="20000+">₹20,000+</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </motion.div>

          {/* Looking for mentorship Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <label className="text-white font-semibold text-lg">
              Looking for mentorship in
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="e.g. frontend, backend, etc..."
                className="w-full bg-gray-800/50 border-2 border-gray-700 text-white placeholder:text-gray-500 px-4 py-4 rounded-xl focus:outline-none focus:border-purple-500"
              />
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Role Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {roles.map((role) => (
                <motion.button
                  key={role}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleRole(role)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedRoles.includes(role)
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800/70 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {role}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Find Matching Mentors Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-xl shadow-lg transition-all"
          >
            Find Matching Mentors →
          </motion.button>

          {/* Choose by myself link */}
          <motion.div variants={itemVariants} className="text-center">
            <button  onClick={() => router.push("/mentors")} className="text-gray-400 hover:text-white cursor-pointer text-sm underline transition-colors">
              Choose by myself from 600+ mentors
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}