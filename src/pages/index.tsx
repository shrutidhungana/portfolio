
import PortfolioLayout from "@/components/layout";
import Cone from "@/components/SVG/Homepage/cone";
import Cylinder from "@/components/SVG/Homepage/cylinder";
import Ring from "@/components/SVG/Homepage/ring";
import Icosahedron from "@/components/SVG/Homepage/icosahedron";
import Cuboid from "@/components/SVG/Homepage/cuboid";
import Prism from "@/components/SVG/Homepage/prism";
import Sphere from "@/components/SVG/Homepage/sphere";
import Typewriter from "typewriter-effect";
import Link from "next/link"; 
import { socialMediaLinks } from "@/config";
import { motion } from 'framer-motion';
import Button from "@/components/Button";
import { FaDownload } from "react-icons/fa";

export default function Home() {
   const handleResumeDownload = () => {
     const link = document.createElement("a");
     link.href = "/Shruti_Dhungana_Resume.pdf"; 
     link.target = "_blank"
     link.click();
   };
  return (
    <PortfolioLayout>
      <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-r from-[#FDEBD0] to-[#F9D7E3] pb-20">
        {/* Animated SVGs */}
        <Ring className="absolute top-5 left-5 w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-40 lg:h-40 animate-rotateSlow" />
        <Prism className="absolute bottom-16 left-5 w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-40 lg:h-40 animate-rotateSlow" />
        <Cone className="absolute top-5 right-5 w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-40 lg:h-40 animate-rotateSlow" />
        <Cylinder className="absolute bottom-16 right-5 w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-40 lg:h-40 animate-rotateSlow" />

        {/* These shapes will only appear on large screens (lg) */}
        <Icosahedron className="hidden lg:block absolute top-5 left-1/2 transform -translate-x-1/2 w-40 h-40 animate-rotateSlow" />
        <Cuboid className="hidden lg:block absolute bottom-16 left-1/2 transform -translate-x-1/2 w-40 h-40 animate-rotateSlow" />
        <Sphere className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 animate-rotateSlow" />

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center h-full text-center z-10 relative px-6 text-dark-gray">
          <div className="text-dark-gray">
            {/* "Hello there!" spin animation */}
            <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold mb-4 animate__animated animate__fadeInLeft animate__delay-0.5s">
              Hello there!
            </h1>

            {/* "I’m Shruti Dhungana" broken glass effect */}
            <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold mb-6 brokenGlass">
              I’m Shruti Dhungana.
            </h2>

            {/* WordArt with flower-like animation */}
            <h3 className="text-5xl font-extrabold capitalize wordArtText mb-6 animate__animated animate__fadeIn animate__delay-2s flowerEffect">
              Fullstack Developer
            </h3>

            {/* Typewriter effect for soft skills */}
            <div className="text-2xl mb-6">
              <Typewriter
                options={{
                  strings: [
                    "Passionate Learner",
                    "Problem Solver",
                    "Team Player",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </div>

            {/* Social Media Links animated from right to left */}
            <div className="flex justify-center space-x-8 animate__animated animate__fadeInUp animate__delay-3s">
              {socialMediaLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-2xl text-dark-gray transition-transform duration-300 transform hover:scale-125 animate__fadeInRight"
                >
                  <span className="relative flex items-center space-x-2">
                    {link.icon}
                    <span
                      className={`absolute left-10 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-base font-medium`}
                    >
                      {link.name}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <Link href="/contact" passHref>
              <Button
                text="Contact"
                className="mt-4 px-6 py-2 rounded-full text-[#FDEBD0] hover:bg-[#7a3bdb] hover:text-white transition"
              />
            </Link>
            <Button
              text="Download Resume"
              onClick={handleResumeDownload}
              className="mt-4 px-6 py-2 rounded-full text-[#FDEBD0] hover:bg-[#7a3bdb] hover:text-white transition"
            />
          </div>
        </main>
      </div>
    </PortfolioLayout>
  );
}
