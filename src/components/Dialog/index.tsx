import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { ProjectsData } from "@/types";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

type ProjectDetailsDialogProps = {
  project: ProjectsData;
  onClose: () => void;
};

const ProjectDetailsDialog: React.FC<ProjectDetailsDialogProps> = ({
  project,
  onClose,
}) => {
  return (
    <Dialog
      open={Boolean(project)}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background: "linear-gradient(to bottom, #FDEBD0, #F9D7E3)",
          borderRadius: "16px",
        },
      }}
    >
      <DialogTitle>
        <div className="flex justify-between items-center">
          <motion.span
            className="wordArtText font-bold text-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {project?.title}
          </motion.span>
          <IconButton edge="end" onClick={onClose}>
            <IoCloseCircleOutline className="text-3xl text-[#7a3bdb]" />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent className="space-y-6">
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={project?.image}
            alt={project?.title}
            width={300}
            height={300}
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </motion.div>

        {/* Styling for details[0] and details[1] */}
        {project?.details?.slice(0, 2).map((detail, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 mt-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-2xl" style={{ color: "#7a3bdb" }}>
              {detail.icon}
            </span>
            <span
              className="text-lg font-bold px-2 py-1 rounded-md"
              style={{
                background: "transparent", // No background color for details[0] and details[1]
                color: "#333333",
              }}
            >
              {detail.text}
            </span>
          </motion.div>
        ))}

        {/* Styling for Tags (details[2] onward) */}
        <div className="flex flex-wrap gap-3 mt-4">
          {project?.details?.slice(2).map((detail) => (
            <motion.div
              key={detail.text} // Use unique key instead of index
              className="flex items-center space-x-1 p-0.5 text-sm rounded-full shadow-md transition hover:shadow-lg hover:scale-105"
              style={{
                background: "linear-gradient(to right, #fef1e6, #fce4ec)", // New background for tags
                color: "#7a3bdb",
              }}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <span>{detail.icon}</span>
              <span className="font-medium">{detail.text}</span>
            </motion.div>
          ))}
        </div>
      </DialogContent>
      <DialogActions className="space-x-4">
        <div className="flex items-center space-x-4">
          <a
            href={project?.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2"
          >
            <motion.div
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7a3bdb] group-hover:bg-[#333333] transition transform group-hover:scale-110"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub
                size={20}
                className="text-[#FDEBD0] group-hover:text-white"
              />
            </motion.div>
            <span className="text-md font-semibold text-gray-700 group-hover:text-black">
              GitHub
            </span>
          </a>
          <a
            href={project?.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2"
          >
            <motion.div
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7a3bdb] group-hover:bg-[#333333] transition transform group-hover:scale-110"
              whileHover={{ scale: 1.2 }}
            >
              <FaExternalLinkAlt
                size={20}
                className="text-[#FDEBD0] group-hover:text-white"
              />
            </motion.div>
            <span className="text-md font-semibold text-gray-700 group-hover:text-black">
              Website
            </span>
          </a>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectDetailsDialog;
