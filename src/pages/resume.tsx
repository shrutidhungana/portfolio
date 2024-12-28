import React, { useEffect, useRef, useState } from "react";
import PortfolioLayout from "@/components/layout";
import { motion } from "framer-motion"; // For animations
import * as pdfjsLib from "pdfjs-dist/webpack";
import { FaDownload } from "react-icons/fa";

type ProjectsProps = {};

const Resume: React.FC<ProjectsProps> = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pages, setPages] = useState<any[]>([]); // Store rendered pages here

  // Load and render PDF on the canvas
  useEffect(() => {
    const loadPDF = async () => {
      const pdf = await pdfjsLib.getDocument("/Shruti_Dhungana_Resume.pdf")
        .promise;
      setNumPages(pdf.numPages);

      // Create an array of promises to render all pages
      const renderPages = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        renderPages.push(renderPage(pdf, i));
      }

      // Wait for all pages to be rendered
      const renderedPages = await Promise.all(renderPages);
      setPages(renderedPages);
    };

    loadPDF();
  }, []);

  // Render each PDF page as a canvas element
  const renderPage = async (pdf: any, pageNum: number) => {
    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.5 }); // Adjust scale as needed

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (context) {
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Render PDF page onto the canvas
      await page.render({
        canvasContext: context,
        viewport: viewport,
      }).promise;
    }

    return canvas;
  };

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
              href="/Shruti_Dhungana_Resume.pdf"
              download
              className="flex items-center bg-[#7a3bdb] text-[#FDEBD0] hover:bg-[#333333] hover:text-white py-2 px-6 rounded-lg shadow-lg transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <FaDownload className="mr-2" /> Download
            </motion.a>
          </div>

          {/* Render all pages dynamically */}
          <div className="w-full max-w-4xl mb-8">
            {pages.map((page, index) => (
              <motion.div
                key={index}
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.3 }} // Delay each page's animation
              >
                <div className="canvas-container">
                  <canvas
                    ref={(el) => {
                      if (el) {
                        el.replaceWith(page); // Replace canvas with the rendered page
                      }
                    }}
                    className="w-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default Resume;
