import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  image: string;
  github: string;
  website: string;
  onViewDetails: () => void; // Add callback for opening the details dialog
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  github,
  website,
  onViewDetails,
}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-gradient-to-tr from-[#FDEBD0] to-[#F9D7E3] rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition duration-300 relative">
        {/* Image Section */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          {/* Title Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
            <h3 className="text-white text-lg font-bold">{title}</h3>
          </div>
        </div>
        {/* Links Section */}
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center text-gray-700 hover:text-gray-900 space-x-2"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#7a3bdb] group-hover:bg-[#333333] transition">
                <FaGithub
                  size={20}
                  className="text-[#FDEBD0] group-hover:text-white"
                />
              </div>
              <span className="text-sm group-hover:inline hidden">GitHub</span>
            </a>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center text-gray-700 hover:text-gray-900 space-x-2"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#7a3bdb] group-hover:bg-[#333333] transition">
                <FaExternalLinkAlt
                  size={20}
                  className="text-[#FDEBD0] group-hover:text-white"
                />
              </div>
              <span className="text-sm group-hover:inline hidden">Website</span>
            </a>
          </div>
          {/* View Details Button */}
          <div className="ml-4">
            <button
              onClick={onViewDetails}
              className="py-2 px-4 text-white bg-[#7a3bdb] text-[#FDEBD0] hover:bg-[#333333] hover:text-white  rounded-md"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
