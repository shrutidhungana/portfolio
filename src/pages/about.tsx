import React from "react";
import PortfolioLayout from "@/components/layout";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import { listItems } from "@/config";

const About: React.FC = () => {
  return (
    <PortfolioLayout>
      {/* Container */}
      <div className="flex flex-col h-screen bg-gradient-to-r from-[#FDEBD0] to-[#F9D7E3]">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mt-8 text-[#7a3bdb] wordArtText bg-gradient-to-r from-[#FDEBD0] to-[#F9D7E3]"
        >
          About Me
        </motion.h1>
        <div className="w-full border-t-2 border-white"></div>

        {/* Responsive Content */}
        <div className="flex flex-grow flex-col lg:flex-row">
          {/* Small and Medium Screens: Single-Column Layout */}
          <div className="flex flex-col items-center justify-center lg:hidden px-4 py-8 space-y-4 text-[#333333] rounded-lg">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg"
            >
              <Image
                src="/profile.png"
                alt="Profile"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>

            {/* Name with Typewriter Effect */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-2xl sm:text-3xl font-bold"
            >
              Shruti Dhungana
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-lg sm:text-xl text-center mt-2 text-[#333333]"
            >
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Creative Designer",
                    "Problem Solver",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>

            {/* Short Description */}
            <ul className="text-sm text-[#333333] space-y-2">
              {listItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.3,
                  }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* Button */}
            <Link href="/contact" passHref>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-2 rounded-full bg-[#7a3bdb] text-white hover:bg-[#5a28a5] transition"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>

          {/* Large Screens: Two-Column Layout */}
          <div className="hidden lg:flex w-full">
            {/* Left Section */}
            <div className="lg:w-1/3 h-full flex flex-col justify-center items-center bg-[#FDEBD0]">
              <div className="text-center text-2xl font-semibold text-[#333333]">
                <Typewriter
                  options={{
                    strings: [
                      "Critical Thinker",
                      "Detail-Oriented",
                      "Effective Collaborator",
                      "Adaptable and Quick Learner",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-2/3 h-full flex justify-center items-center flex-col bg-[#F9D7E3] relative">
              {/* Animated Image */}
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-[-10%] w-72 h-72 rounded-full overflow-hidden shadow-lg"
              >
                <Image
                  src="/profile.png"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>

              {/* Animated Heading */}
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold wordArtText mb-6"
              >
                Shruti Dhungana
              </motion.h1>

              {/* Animated List */}
              <ul className="text-lg text-[#333333] space-y-6">
                {listItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.3,
                    }}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Animated Button */}
              <Link href="/contact" passHref>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="mt-4 px-6 py-2 rounded-full bg-[#333333] text-[#FDEBD0] hover:bg-[#7a3bdb] hover:text-white transition"
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default About;
