import React from "react";
import PortfolioLayout from "@/components/layout";
import { projectData } from "@/config";
import ProjectCard from "@/components/Card";

const Projects: React.FC = () => {
  return (
    <PortfolioLayout>
      <div className="bg-gradient-to-r from-[#FDEBD0] to-[#F9D7E3] min-h-screen py-12 px-6">
        <h2 className="text-[#7a3bdb] text-3xl font-semibold text-center mb-8">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              github={project.github}
              website={project.website}
            />
          ))}
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default Projects;
