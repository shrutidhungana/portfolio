import { NavLink, ListItem, SocialMediaLink, EducationItem } from "@/types";
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
      <FaRegUser className="icon-color icon-hover-color transition duration-300" />
    ),
  },
  {
    name: "Education",
    href: "/education",
    icon: (
      <MdCastForEducation className="icon-color icon-hover-color transition duration-300" />
    ),
  },
  {
    name: "Experience",
    href: "/experience",
    icon: (
      <CiFileOn className="icon-color icon-hover-color transition duration-300" />
    ),
  },
  {
    name: "Skills",
    href: "/skills",
    icon: (
      <MdLightbulbOutline className="icon-color icon-hover-color transition duration-300" />
    ),
  },
  {
    name: "Projects",
    href: "/projects",
    icon: (
      <GoProject className="icon-color icon-hover-color transition duration-300" />
    ),
  },
  {
    name: "Contact",
    href: "/contact",
    icon: (
      <CiMail className="icon-color icon-hover-color transition duration-300" />
    ),
  },
];

export const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/shruti-dhungana-2ab9901b5",
    icon: <FaLinkedin />,
    hoverColor: "social-media-hover-color",
  },
  {
    name: "GitHub",
    url: "https://github.com/shrutidhungana",
    icon: <FaGithub size={30} />,
    hoverColor: "social-media-hover-color",
  },
];

export const listItems: ListItem[] = [
  {
    id: 1,
    icon: <FaCode className="code-color text-2xl" />,
    text: "Passionate Web Developer turning creative ideas into effective solutions.",
  },
  {
    id: 2,
    icon: <FaLightbulb className="lightbulb-color  text-2xl" />,
    text: "I enjoy building awesome software that solves practical problems.",
  },
  {
    id: 3,
    icon: (
      <span>
        <FaBook className="book-color text-2xl" />{" "}
        <FaFilm className="movie-color text-2xl" />
      </span>
    ),
    text: "Avid reader of novels, movie enthusiast, and curious about emerging technologies when I’m not coding.",
  },
  {
    id: 4,
    icon: <FaEnvelope className="envelope-color text-2xl" />,
    text: (
      <>
        To contact me, hit me up at{" "}
        <a
          href="mailto:shrutidhungana123@gmail.com"
          className="text-[#7a3bdb] email hover:text-[#E91E63] transition"
        >
          shrutidhungana123@gmail.com
        </a>
      </>
    ),
  },
];

export const educationData: EducationItem[] = [
  {
    id: 1,
    year: "upto 2015",
    title: "School Level",
    institution: "Daffodil Boarding School",
    location: "Saraswatinagar, Kathmandu, Nepal",
  },
  {
    id: 2,
    year: "2015–2017",
    title: "High School",
    institution: "National School of Sciences",
    location: "Lainchaur, Kathmandu, Nepal",
  },
  {
    id: 3,
    year: "2017-2022",
    title: "Bachelor's Of Science In Computer Science",
    institution: "Kathmandu University",
    location: "Dhulikhel, Kavre, Nepal",
  },
];

export const experienceData: EducationItem[] = [
  {
    id: 1,
    year: "Jan 2022-March 2022",
    title: "React Developer Intern",
    institution: "Prixa Technologies",
    location: "Jawalakhel, Lalitpur, Nepal",
  },
  {
    id: 2,
    year: "Nov 2022-Feb 2023",
    title: "Frontend Developer Intern",
    institution: "Treeleaf Technologies",
    location: "Sankhamul, Kathmandu,Nepal",
  },
  {
    id: 3,
    year: "Feb 2023-July 2024",
    title: "Frontend (React) Developer",
    institution: "Digital Anka Pvt ltd (Varicon)",
    location: "Pulchowk, Lalitpur, Nepal (Australia)",
  },
];
