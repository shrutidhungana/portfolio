import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  image: string;
  github: string;
  website: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  github,
  website,
}) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 text-center">
      <h3 className="text-[#FF8C00] text-xl font-semibold mb-4">{title}</h3>
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
      <div className="flex space-x-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 hover:text-[#7a3bdb] transition"
        >
          <FaGithub />
          <span className="hidden md:block">GitHub</span>
        </a>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 hover:text-[#7a3bdb] transition"
        >
          <FaExternalLinkAlt />
          <span className="hidden md:block">Website</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
