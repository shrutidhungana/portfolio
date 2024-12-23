import {
  NavLink,
  ListItem,
  SocialMediaLink,
  EducationItem,
  SkillSection,
  ContactData,
  ContactFormData,
} from "@/types";
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
  FaPhoneAlt,
} from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import CSS from "@/components/SVG/Skills/css";
import Firebase from "@/components/SVG/Skills/firebase";
import Git from "@/components/SVG/Skills/git";
import GitHub from "@/components/SVG/Skills/gitHub";
import HTML from "@/components/SVG/Skills/html";
import Jira from "@/components/SVG/Skills/jira";
import Javascript from "@/components/SVG/Skills/js";
import Material from "@/components/SVG/Skills/materialUI";
import MongoDB from "@/components/SVG/Skills/mongoDB";
import Next from "@/components/SVG/Skills/next";
import Node from "@/components/SVG/Skills/node";
import ReactSVG from "@/components/SVG/Skills/react";
import Tailwind from "@/components/SVG/Skills/tailwind";
import Typescript from "@/components/SVG/Skills/ts";
import Express from "@/components/SVG/Skills/express";

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
    url: "https://www.linkedin.com/in/shruti-dhungana-2ab9901b5/",
    icon: <FaLinkedin />,
    hoverColor: "social-media-hover-color",
    iconColor: "#0077B5",
  },
  {
    name: "GitHub",
    url: "https://github.com/shrutidhungana",
    icon: <FaGithub size={30} />,
    hoverColor: "social-media-hover-color",
    iconColor: "#B2BEB5",
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

export const skillsData: SkillSection[] = [
  {
    id: 1,
    sectionTitle: "Languages",
    items: [
      {
        name: "HTML",
        icon: <HTML className="text-2xl" />,
      },
      {
        name: "CSS",
        icon: <CSS className="text-2xl mb-2 mt-2" />,
      },
      {
        name: "JavaScript",
        icon: <Javascript className="text-2xl" />,
      },
      {
        name: "TypeScript",
        icon: <Typescript className="text-2xl" />,
      },
    ],
  },
  {
    id: 2,
    sectionTitle: "Libraries and Frameworks",
    items: [
      {
        name: "React",
        icon: <ReactSVG className="text-2xl" />,
      },
      {
        name: "Next",
        icon: <Next className="text-2xl" />,
      },
      {
        name: "Material UI",
        icon: <Material className="text-2xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <Tailwind className="text-2xl" />,
      },
      {
        name: "ShadCN",
        icon: <SiShadcnui className="text-2xl mb-4 mt-2" />,
      },

      {
        name: "Express",
        icon: <Express className="text-2xl" />,
      },
    ],
  },
  {
    id: 3,
    sectionTitle: "Version Controls",
    items: [
      {
        name: "Git",
        icon: <Git className="text-2xl" />,
      },
      {
        name: "GitHub",
        icon: <GitHub className="text-2xl" />,
      },
    ],
  },
  {
    id: 4,
    sectionTitle: "Tools",
    items: [
      {
        name: "Firebase",
        icon: <Firebase className="text-2xl" />,
      },
      {
        name: "Jira",
        icon: <Jira className="text-2xl" />,
      },
      {
        name: "MongoDB",
        icon: <MongoDB className="text-2xl" />,
      },
      {
        name: "Node",
        icon: <Node className="text-2xl" />,
      },
    ],
  },
];

export const contactData: ContactData[] = [
  {
    id: 1,
    icon: <FaLocationDot />,
    name: "Location",
    text: [
      "6, Nagarkot, Changunarayan, Bhaktapur",
      "8, Guheshwori, Kathmandu, Nepal",
    ], // Using an array for multiple locations
    iconColor: "#F39C12",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    name: "Phone",
    text: "+977-9861495261",
    iconColor: "#E74C3C",
  },
  {
    id: 3,
    icon: <FaEnvelope />,
    name: "Email",
    text: (
      <a
        href="mailto:shrutidhungana123@gmail.com"
        className="email  transition"
      >
        shrutidhungana123@gmail.com
      </a>
    ),
    iconColor: "#2980B9",
  },
];

export const contactFormData: ContactFormData[] = [
  {
    id: 1,
    name: "Name",
    label: "Name",
    placeholder: "Your Name",
  },
  {
    id: 2,
    name: "E-mail",
    label: "E-mail",
    placeholder: "Your E-mail",
  },
  {
    id: 3,
    name: "Message",
    label: "Message",
    placeholder: "Type your Message",
  },
];
