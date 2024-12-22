import React from "react";
import PortfolioLayout from "@/components/layout";
import Briefcase from "@/components/SVG/briefcase";
import { experienceData } from "@/config";
import { motion } from "framer-motion";
import Image from "next/image";

const Experience: React.FC = () => {
  return (
    <PortfolioLayout>
      {/* Gradient Background */}
      <div className="min-h-screen py-10 bg-gradient-to-r from-[#FDEBD0] to-[#F9D7E3]">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section: Image */}
          <div className="hidden lg:block lg:w-1/3 lg:mr-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image
                src="/experience.png" // Replace with your custom image
                alt="Experience Illustration"
                width={500}
                height={500}
                className="rounded-lg shadow-lg flowerEffect"
              />
            </motion.div>
          </div>

          {/* Right Section: Header and Cards */}
          <div className="w-full">
            {/* Header */}
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl font-bold text-center mt-2 text-[#7a3bdb] wordArtText bg-gradient-to-r from-[#FDEBD0] to-[#F9D7E3]"
            >
              Experience
            </motion.h1>
            <div className="w-full border-t-2 border-white mb-6"></div>

            {/* Cards */}
            <div className="space-y-6">
              {experienceData?.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{
                    x: index % 2 === 0 ? "100%" : "-100%", // Right-to-left and left-to-right alternation
                    opacity: 0,
                  }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * index, duration: 0.8 }}
                  className={`p-6 rounded-lg shadow-md border-l-4 flex items-center ${
                    index % 2 === 0
                      ? "bg-[#CCCCFF] border-blue-400"
                      : "bg-[#F8C8DC] border-yellow-400"
                  }`}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 bg-[#7a3bdb] rounded-full p-3 text-white">
                    <Briefcase />
                  </div>

                  {/* Text Content */}
                  <div className="ml-4">
                    <p className="text-sm text-[#7a3bdb] font-semibold">
                      {exp.year}
                    </p>
                    <h2 className="text-xl font-bold text-gray-800">
                      {exp.title}
                    </h2>
                    <p className="text-gray-600">{exp.institution}</p>
                    <p className="text-gray-500 italic text-sm mt-1">
                      📍 {exp.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default Experience;
