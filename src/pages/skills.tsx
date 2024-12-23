import React from "react";
import PortfolioLayout from "@/components/layout";
import { skillsData } from "@/config";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  return (
    <PortfolioLayout>
      <motion.div
        className="min-h-screen bg-gradient-to-r from-[#FDEBD0] to-[#F9D7E3] p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl font-bold text-center text-[#7a3bdb] wordArtText mb-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h1>

        {skillsData?.map((section) => (
          <div key={section.id} className="mb-12">
            <motion.h2
              className="text-2xl font-semibold text-[#FF8C00] mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {section.sectionTitle}
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-4">
              {section.items?.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center bg-gradient-to-r from-[#FFB6C1] to-[#FFD700] p-3 rounded-lg shadow-md text-center text-[#333333] transition-shadow duration-300 hover:shadow-xl w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-24 lg:h-24"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                >
                  <motion.div
                    className="text-2xl mb-2"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1.5,
                      loop: Infinity,
                      repeatDelay: 1,
                      ease: "linear",
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <motion.p
                    className="text-xs font-medium"
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.name}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </PortfolioLayout>
  );
};

export default Skills;
