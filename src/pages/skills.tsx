import React from "react";
import PortfolioLayout from "@/components/layout";
import { skillsData } from "@/config";

const Skills: React.FC = () => {
  return (
    <PortfolioLayout>
      <div className="min-h-screen bg-gradient-to-r from-[#FDEBD0] to-[#F9D7E3] p-8">
        <h1 className="text-4xl font-bold text-center text-[#7a3bdb] wordArtText mb-8">
          Skills
        </h1>

        {/* Mapping through the skills data */}
        
          {skillsData?.map((section) => (
            <div key={section.id} className="mb-12">
              <h2 className="text-2xl font-semibold text-[#FF8C00]  mb-6 text-center">
                {section.sectionTitle}
              </h2>
              {/* Card for each section */}
              <div className="flex flex-wrap justify-center gap-4">
                {section.items?.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-gradient-to-r from-[#FFB6C1] to-[#FFD700] p-3 rounded-lg shadow-md text-center text-[#333333] transition-shadow duration-300 hover:shadow-xl w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-24 lg:h-24"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="text-xs font-medium">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        
      </div>
    </PortfolioLayout>
  );
};

export default Skills;
