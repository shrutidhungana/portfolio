import React from "react";
import PortfolioLayout from "@/components/layout";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import {
  FaCode,
  FaBook,
  FaFilm,
  FaEnvelope,
  FaLightbulb,
} from "react-icons/fa";

const listItems = [
  {
    id: 1,
    icon: <FaCode className="text-[#7a3bdb] text-2xl" />,
    text: "Passionate Web Developer turning creative ideas into effective solutions.",
  },
  {
    id: 2,
    icon: <FaLightbulb className="text-[#ffcc00] text-2xl" />,
    text: "I enjoy building awesome software that solves practical problems.",
  },
  {
    id: 3,
    icon: (
      <span>
        <FaBook className="text-[#4CAF50] text-2xl" />{" "}
        <FaFilm className="text-[#E91E63] text-2xl" />
      </span>
    ),
    text: "Avid reader of novels, movie enthusiast, and curious about emerging technologies when I’m not coding.",
  },
  {
    id: 4,
    icon: <FaEnvelope className="text-[#FF5733] text-2xl" />,
    text: (
      <>
        To contact me, hit me up at{" "}
        <a
          href="mailto:shrutidhungana123@gmail.com"
          className="text-[#7a3bdb] underline hover:text-[#E91E63] transition"
        >
          shrutidhungana123@gmail.com
        </a>
      </>
    ),
  },
];

const About: React.FC = () => {
  return (
    <PortfolioLayout>
      <div className="flex h-screen">
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
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#333333",
              color: "#FDEBD0",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mt-6 px-6 py-2 rounded-full bg-[#7a3bdb] text-white font-medium hover:bg-[#333333] hover:text-[#FDEBD0] transition"
          >
            Contact Me
          </motion.button>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default About;
