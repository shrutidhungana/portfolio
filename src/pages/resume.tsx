import React from "react";
import PortfolioLayout from "@/components/layout";
import { motion } from "framer-motion"; // For animations
import { FaDownload } from "react-icons/fa";

type ProjectsProps = {};

const Resume: React.FC<ProjectsProps> = () => {
  return (
    <PortfolioLayout>
      <div className="min-h-screen bg-gradient-to-r from-[#FDEBD0] to-[#F9D7E3] text-[#333333]">
        <div className="flex flex-col items-center justify-center py-16">
          {/* Header Section */}
          <div className="flex items-center justify-between w-full max-w-4xl mb-6">
            <motion.h1
              className="text-4xl font-semibold text-center text-[#7a3bdb] wordArtText"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Resume
            </motion.h1>

            <motion.a
              href="/Shruti_Dhungana_Full_Stack_Developer.pdf"
              download
              className="flex items-center bg-[#7a3bdb] text-[#FDEBD0] hover:bg-[#333333] hover:text-white py-2 px-6 rounded-lg shadow-lg transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <FaDownload className="mr-2" /> Download
            </motion.a>
          </div>

          {/* Full-Page PDF Display */}
          <div className="w-full h-screen mb-8">
            <motion.div
              className="mb-8 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Full-page PDF Display without the viewer */}
              <object
                data="/Shruti_Dhungana_Full_Stack_Developer.pdf"
                type="application/pdf"
                className="w-full h-full"
              >
                <p>
                  Your browser does not support PDFs.{" "}
                  <a href="/Shruti_Dhungana_Full_Stack_Developer.pdf">
                    Download the PDF
                  </a>
                  .
                </p>
              </object>
            </motion.div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default Resume;
