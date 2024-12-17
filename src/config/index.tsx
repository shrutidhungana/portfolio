import { NavLink, ListItem, SocialMediaLink } from "@/types";
import { CiFileOn, CiMail } from "react-icons/ci";
import { GoProject } from "react-icons/go";
import { MdCastForEducation, MdLightbulbOutline } from "react-icons/md";
import {
  FaRegUser,
  FaCode,
  FaBook,
  FaFilm,
  FaEnvelope,
  FaLightbulb,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export const links: NavLink[] = [
  {
    name: "About",
    href: "/about",
    icon: (
      <FaRegUser className="text-gray-600 group-hover:text-white transition duration-300" />
    ),
  },
  {
    name: "Education",
    href: "/education",
    icon: (
      <MdCastForEducation className="text-gray-600 group-hover:text-white transition duration-300" />
    ),
  },
  {
    name: "Experience",
    href: "/experience",
    icon: (
      <CiFileOn className="text-gray-600 group-hover:text-white transition duration-300" />
    ),
  },
  {
    name: "Skills",
    href: "/skills",
    icon: (
      <MdLightbulbOutline className="text-gray-600 group-hover:text-white transition duration-300" />
    ),
  },
  {
    name: "Projects",
    href: "/projects",
    icon: (
      <GoProject className="text-gray-600 group-hover:text-white transition duration-300" />
    ),
  },
  {
    name: "Contact",
    href: "/contact",
    icon: (
      <CiMail className="text-gray-600 group-hover:text-white transition duration-300" />
    ),
  },
];

export const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/shruti-dhungana-2ab9901b5",
    icon: <FaLinkedin />,
    hoverColor: "hover:text-blue-700",
  },
  {
    name: "GitHub",
    url: "https://github.com/shrutidhungana",
    icon: <FaGithub size={30} />,
    hoverColor: "hover:text-blue-700",
  },
];

export const listItems: ListItem[] = [
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
