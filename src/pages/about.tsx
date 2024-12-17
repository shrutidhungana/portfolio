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
          className="text-5xl font-bold text-center mt-8 mb-4 text-[#7a3bdb] wordArtText bg-gradient-to-r from-[#FDEBD0] to-[#F9D7E3]"
        >
          About Me
        </motion.h1>

        {/* Content */}
        <div className="flex flex-grow">
          {/* Left Section */}
          <div className="w-1/3 h-full flex flex-col justify-center items-center bg-[#FDEBD0]">
            <div className="text-center text-2xl font-semibold text-[#333333]">
              <Typewriter
                options={{
                  strings: [
                    "Creative Problem Solver",
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
          <div className="w-2/3 h-full flex justify-center items-center flex-col bg-[#F9D7E3] relative">
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
    </PortfolioLayout>
  );
};

export default About;
