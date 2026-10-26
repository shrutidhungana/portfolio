import {
  NavLink,
  ListItem,
  SocialMediaLink,
  EducationItem,
  SkillGroup,
  ContactData,
  ContactFormData,
  ProjectsData,
  ExperienceItem,
} from "@/types";
import { CiFileOn } from "react-icons/ci";
import { GoProject } from "react-icons/go";
import { MdDescription, MdLogin, MdArticle } from "react-icons/md";
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
  FaShoppingCart,
  FaGamepad,
  FaClone,
  FaUtensils,
  FaCalculator,
  FaHome,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiCreatereactapp,
  SiStyledcomponents,
  SiVite,
} from "react-icons/si";
import { FaAffiliatetheme, FaLocationDot } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import CSS from "@/components/svg/skills/css";
import Javascript from "@/components/svg/skills/js";
import Material from "@/components/svg/skills/material-ui";
import MongoDB from "@/components/svg/skills/mongo-db";
import Next from "@/components/svg/skills/next";
import Node from "@/components/svg/skills/node";
import ReactSVG from "@/components/svg/skills/react";
import Tailwind from "@/components/svg/skills/tailwind";
import Typescript from "@/components/svg/skills/ts";
import Express from "@/components/svg/skills/express";
import { FcDecision } from "react-icons/fc";
import { IoShareSocial } from "react-icons/io5";
import { GrCompliance } from "react-icons/gr";

export const links: NavLink[] = [
  {
    name: "Work",
    href: "/projects",
    icon: (
      <GoProject className="icon-color icon-hover-color transition duration-300" />
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
    name: "Writing",
    href: "/writing",
    icon: (
      <MdArticle className="icon-color icon-hover-color transition duration-300" />
    ),
  },
  {
    name: "About",
    href: "/about",
    icon: (
      <FaRegUser className="icon-color icon-hover-color transition duration-300" />
    ),
  },
  {
    name: "Resume",
    href: "/resume",
    icon: (
      <IoMdDownload className="icon-color icon-hover-color transition duration-300" />
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
    text: "Passionate Full Stack Web Developer turning creative ideas into effective solutions.",
  },
  {
    id: 2,
    icon: <FaLightbulb className="lightbulb-color  text-2xl" />,
    text: "I enjoy building awesome software that solves practical problems.",
  },
  {
    id: 3,
    icon: <CiFileOn className="experience-color text-2xl" />,
    text: "I interned at Prixa and Treeleaf Technologies, and worked as a React Developer at Varicon(Digital Anka).",
  },
  {
    id: 4,
    icon: (
      <span>
        <FaBook className="book-color text-2xl" />{" "}
        <FaFilm className="movie-color text-2xl" />
      </span>
    ),
    text: "Avid reader of novels, movie enthusiast, and curious about emerging technologies when I’m not coding.",
  },
  {
    id: 5,
    icon: <FaEnvelope className="envelope-color text-2xl" />,
    text: (
      <>
        To contact me, hit me up at{" "}
        <a
          href="mailto:shrutidhungana123@gmail.com"
          className="text-[#7a3bdb] email hover:text-[#E91E63] transition">
          shrutidhungana123@gmail.com
        </a>
      </>
    ),
  },
];

export const educationData: EducationItem[] = [
  {
    id: 1,
    year: "2017-2022",
    title: "Bachelor's Of Science In Computer Science",
    institution: "Kathmandu University",
    location: "Dhulikhel, Kavre, Nepal",
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
    year: "upto 2015",
    title: "School Level",
    institution: "Daffodil Boarding School",
    location: "Saraswatinagar, Kathmandu, Nepal",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    year: "Nov 2025 - Present",
    title: "Software Engineer",
    institution: "LeftclickTech",
    location: "Maitidevi, Kathmandu, Nepal (Quakers Hills, NSW, Australia)",
    details: [
      {
        icon: <FaLaptopCode />,
        description:
          "Build full-stack web applications end to end with TypeScript, TanStack Query, Hono, Zod, and Drizzle.",
      },
      {
        icon: <FaLaptopCode />,
        description:
          "Own features from API and data model through to the React interface, styled with Tailwind CSS.",
      },
    ],
  },

  {
    id: 2,
    year: "Feb 2023 - Jul 2024",
    title: "Frontend (React) Developer",
    institution: "Digital Anka Pvt Ltd (Varicon)",
    location: "Pulchowk, Lalitpur, Nepal (Australia)",
    details: [
      {
        icon: <FaLaptopCode />,
        description:
          "Designed and built the Subcontract module from scratch, including contract management and claims linkage.",
      },
      {
        icon: <FaLaptopCode />,
        description:
          "Shipped an Archive feature with advanced filtering across the Equipment and Daily Cost Tracking modules.",
      },
      {
        icon: <FaLaptopCode />,
        description:
          "Added status indicators and qualification counts to improve data visibility for equipment tracking.",
      },
      {
        icon: <FaLaptopCode />,
        description:
          "Implemented automatic session logout for security, using React, Hooks, and Material UI throughout.",
      },
    ],
    credentialLink: "/Shruti_Dhungana_experience_letter_Varicon.pdf",
  },
  {
    id: 3,
    year: "Nov 2022 - Feb 2023",
    title: "Frontend Developer Intern",
    institution: "Treeleaf Technologies",
    location: "Sankhamul, Kathmandu, Nepal",
    details: [
      {
        icon: <FaLaptopCode />,
        description:
          "Built UI for splash pages, a to-do app, a task manager, and a quiz application using HTML, CSS, JavaScript, and React.",
      },
      {
        icon: <FaLaptopCode />,
        description:
          "Learned core frontend fundamentals and how component-based UIs are structured in practice.",
      },
    ],
  },

  {
    id: 4,
    year: "Jan 2022 - Mar 2022",
    title: "React Developer Intern",
    institution: "Prixa Technologies",
    location: "Jawalakhel, Lalitpur, Nepal",
    details: [
      {
        icon: <FaLaptopCode />,
        description:
          "Built screens for a banking app prototype, including a splash page, calculator, and custom keyboard.",
      },
      {
        icon: <FaLaptopCode />,
        description:
          "Built a movie browser using the OMDb API and a weather app consuming a real-time weather API.",
      },
    ],
    credentialLink: "/Shruti_Dhungana_experience_letter_prixa.pdf",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 1,
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Remix",
      "TanStack Query",
      "TanStack Start",
      "Tailwind CSS",
      "Material UI",
      "ShadCN",
    ],
  },
  {
    id: 2,
    title: "Backend",
    skills: ["Node.js", "Express", "Hono", "Zod"],
  },
  {
    id: 3,
    title: "Data",
    skills: ["MongoDB", "PostgreSQL", "Drizzle"],
  },
  {
    id: 4,
    title: "Cloud & Tooling",
    skills: ["Git", "GitHub", "AWS Bedrock", "Jira", "Vercel", "Docker"],
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
        className="email  transition">
        shrutidhungana123@gmail.com
      </a>
    ),
    iconColor: "#2980B9",
  },
];

export const contactFormData: ContactFormData[] = [
  {
    id: 1,
    name: "name",
    label: "Name",
    placeholder: "Your Name",
  },
  {
    id: 2,
    name: "email",
    label: "E-mail",
    placeholder: "Your E-mail",
  },
  {
    id: 3,
    name: "message",
    label: "Message",
    placeholder: "Type your Message",
  },
];

export const projectData: ProjectsData[] = [
  {
    id: 1,
    title: "Academia Next",
    status: "Ongoing",
    image: "", // Provide empty strings to avoid runtime errors
    github: "",
    website: "",
    details: [],
  },
  {
    id: 11,
    title: "AI Workforce OS",
    status: "Ongoing",
    image: "",
    github: "",
    website: "",
    details: [
      {
        icon: <FaLaptopCode className="text-2xl" />,
        text: "A multi-tenant workforce management platform bringing authentication and RBAC, employees, projects and Kanban tasks, attendance, leave, a finance mini-workflow, documents, notifications, AI-assisted features, audit logging, reports, and a mobile app into one place.",
      },
      {
        icon: <FaLaptopCode className="text-2xl" />,
        text: "Built incrementally, feature by feature, with each one tracked explicitly as implemented or deferred rather than presented as finished.",
      },
      { icon: null, text: "TypeScript" },
      { icon: null, text: "Hono/tRPC" },
      { icon: null, text: "Drizzle/PostgreSQL" },
      { icon: null, text: "TanStack Query/Table" },
      { icon: null, text: "Better Auth" },
      { icon: null, text: "shadcn/ui + Tailwind" },
      { icon: null, text: "Terraform + GitHub Actions" },
    ],
  },
  {
    id: 2,
    title: "Trend Hive",
    status: "Completed",
    image: "/projects/trendhive.png",
    github: "https://github.com/shrutidhungana/trendhive",
    website: "https://e-commerce-hazel-iota-68.vercel.app/",
    details: [
      {
        icon: <FaShoppingCart className="text-2xl" />,
        text: "E-commerce website that allows users to browse and purchase products online.",
      },
      {
        icon: <MdDescription className="text-2xl" />,
        text: "It has two sections user and admin. Both have their own features. While user can buy, review and add any products, admin can add, edit, delete products and feature image. Also, a particular user can see particular order while admin can see all products. ",
      },
      {
        icon: <FaCode className="text-2xl" />,
        text: "It is built in following tools and languages:",
      },
      {
        icon: <MongoDB className="text-xl" />,
        text: "MongoDB",
      },
      {
        icon: <Express className="text-xl" />,
        text: "Express",
      },
      {
        icon: <Next className="text-xl" />,
        text: "Next.js",
      },
      {
        icon: <Node className="text-xl" />,
        text: "Node.js",
      },
      {
        icon: <Tailwind className="text-xl" />,
        text: "Tailwind CSS",
      },
      {
        icon: <Typescript className="text-xl" />,
        text: "TypeScript",
      },
    ],
  },

  {
    id: 3,
    title: "Tic Tac Toe",
    status: "Completed",
    image: "/projects/tic-tac-toe.png",
    github: "https://github.com/shrutidhungana/tic-tac-toe",
    website: "https://shrutidhungana.github.io/tic-tac-toe",
    details: [
      {
        icon: <FaGamepad className="text-2xl" />,
        text: "A simple Tic Tac Toe app built with React.",
      },
      {
        icon: <MdDescription className="text-2xl" />,
        text: "A game where the one playing noughts ('O') and computer is crosses ('X') where either you or a computer can win.",
      },
      {
        icon: <FaCode className="text-2xl" />,
        text: "It is built in following tools and languages:",
      },
      {
        icon: <ReactSVG className="text-xl" />,
        text: "React",
      },
      {
        icon: <SiVite className="text-xl" />,
        text: "Vite",
      },
      {
        icon: <Typescript className="text-xl" />,
        text: "TypeScript",
      },
      {
        icon: <CSS className="text-xl" />,
        text: "CSS",
      },
    ],
  },

  {
    id: 4,
    title: "Shopping Cart",
    status: "Completed",
    image: "/projects/shopping-cart.png",
    github: "https://github.com/shrutidhungana/shopping-cart",
    website: "https://shrutidhungana.github.io/shopping-cart/",
    details: [
      {
        icon: <FaShoppingCart className="text-2xl" />,
        text: "A shopping cart app built in React using data from Fakestore API to add items to the cart.",
      },
      {
        icon: <MdDescription className="text-2xl" />,
        text: "In this app I have use data from fakeStore API.The homepage shows different categories of items along with it's price and Add To Cart button. After you add to cart: you can increase and decrease the tity and remove it from cart.",
      },
      {
        icon: <FaCode className="text-2xl" />,
        text: "It is built in following tools and languages:",
      },
      {
        icon: <ReactSVG className="text-xl" />,
        text: "React",
      },
      {
        icon: <Javascript className="text-xl" />,
        text: "JavaScript",
      },
      {
        icon: <SiCreatereactapp className="text-xl" />,
        text: "Create React App",
      },
      {
        icon: <CSS className="text-xl" />,
        text: "CSS",
      },
    ],
  },
  {
    id: 5,
    title: "To-do full stack",
    status: "Completed",
    image: "/projects/to-do.png",
    github: "https://github.com/shrutidhungana/to-do-full-stack",
    website: "https://to-do-full-stack-one.vercel.app/todo",
    details: [
      {
        icon: <GrCompliance className="text-2xl" />,
        text: "A simple to-do-app made in MERN stack with tailwind where you can view,add, edit and delete to-dos.",
      },
      {
        icon: <MdDescription className="text-2xl" />,
        text: "This is a app with filtering (All, Done, Upcoming), pagination, and CRUD functionality, featuring a drawer-based form for adding, editing, and deleting tasks with validation and due-date management .",
      },
      {
        icon: <FaCode className="text-2xl" />,
        text: "It is built in following tools and languages:",
      },

      {
        icon: <Javascript className="text-xl" />,
        text: "JavaScript",
      },
      {
        icon: <ReactSVG className="text-xl" />,
        text: "React",
      },

      {
        icon: <SiVite className="text-xl" />,
        text: "Vite",
      },
      {
        icon: <MongoDB className="text-xl" />,
        text: "MongoDB",
      },
      {
        icon: <Express className="text-xl" />,
        text: "Express",
      },
      {
        icon: <Node className="text-xl" />,
        text: "Node.js",
      },
      {
        icon: <Material className="text-xl" />,
        text: "Material UI",
      },
      {
        icon: <Tailwind className="text-2xl" />,
        text: "tailwind CSS",
      },
    ],
  },
  {
    id: 6,
    title: "Movie-App",
    status: "Completed",
    image: "/projects/movie-app.png",
    github: "https://github.com/shrutidhungana/movie-app",
    website: "https://movie-app-theta-lovat.vercel.app/",
    details: [
      {
        icon: <FaFilm className="text-2xl" />,
        text: "A simple movie dashboard app made with full stack Next and typescript with tailwind for styling and react-query and zustand for data fetching and state management respectivelys.",
      },
      {
        icon: <MdDescription className="text-2xl" />,
        text: "This is a intractive movie dashboard app with search, filter, sorting features which also give users chance to view details, review, rate them including adminfunctionalities for adding, editing, deleting, and exporting movie data via a secure login-enabled Admin Panel",
      },
      {
        icon: <FaCode className="text-2xl" />,
        text: "It is built in following tools and languages:",
      },

      {
        icon: <Typescript className="text-xl" />,
        text: "TypeScript",
      },
      {
        icon: <Next className="text-xl" />,
        text: "Next.js",
      },

      {
        icon: <Tailwind className="text-2xl" />,
        text: "tailwind CSS",
      },
    ],
  },
  {
    id: 7,
    title: "Dream Home ",
    status: "Completed",
    image: "/projects/dream-home.png",
    github: "https://github.com/shrutidhungana/dream-home",
    website: "https://dream-home-gamma.vercel.app/",
    details: [
      {
        icon: <FaHome className="text-2xl" />, // A more relevant icon for food/recipe
        text: "An app that helps you book home in different sectors.",
      },
      {
        icon: <MdDescription className="text-2xl" />,
        text: "A full-stack MERN application for booking and exploring properties based on unique categories like Beachfront, Windmills, Iconic Cities, Countryside, and Islands. It has features to become a host, Property list, trip list, wish list etc.",
      },
      {
        icon: <FaCode className="text-2xl" />,
        text: "It is built in following tools and languages:",
      },
      {
        icon: <ReactSVG className="text-xl" />,
        text: "React",
      },
      {
        icon: <Javascript className="text-xl" />,
        text: "JavaScript",
      },
      {
        icon: <SiVite className="text-xl" />,
        text: "Vite",
      },
      {
        icon: <MongoDB className="text-xl" />,
        text: "MongoDB",
      },
      {
        icon: <Express className="text-xl" />,
        text: "Express",
      },
      {
        icon: <Node className="text-xl" />,
        text: "Node.js",
      },
      {
        icon: <Material className="text-xl" />,
        text: "Material UI",
      },
    ],
  },
  {
    id: 8,
    title: "Khana Sansar",
    status: "Completed",
    image: "/projects/khana-sansar.png",
    github: "https://github.com/shrutidhungana/khanasansar",
    website: "https://khanasansar.vercel.app/",
    details: [
      {
        icon: <FaUtensils className="text-2xl" />, // A more relevant icon for food/recipe
        text: "A food recipe app built in React that uses the MealDB API to help users search and find recipes for their preferred dishes.",
      },
      {
        icon: <MdDescription className="text-2xl" />,
        text: "A food recipe app built with the MealDB API, Vite, React, and Bootstrap. It offers a variety of recipes across categories like Chicken, Dessert, Lamb, Miscellaneous, Pasta, and Pork. Users can select dishes from these sections (e.g., Chicken) to view meal options like burgers, Ayem Percik, Nutty Chicken Curry, and Tandoori Chicken. Clicking on a dish shows its recipe, including ingredients, measurements, and instructions.",
      },
      {
        icon: <FaCode className="text-2xl" />,
        text: "It is built in following tools and languages:",
      },
      {
        icon: <ReactSVG className="text-xl" />,
        text: "React",
      },
      {
        icon: <Javascript className="text-xl" />,
        text: "JavaScript",
      },
      {
        icon: <SiVite className="text-xl" />,
        text: "Vite",
      },
    ],
  },
  {
    id: 9,
    title: "Calculator",
    status: "Completed",
    image: "/projects/calculator.png",
    github: "https://github.com/shrutidhungana/calculator",
    website: "https://shrutidhungana.github.io/calculator/",
    details: [
      {
        icon: <FaCalculator className="text-2xl" />, // A more relevant icon for food/recipe
        text: "A simple calculator app to perform arithmetic operations.",
      },
      {
        icon: <MdDescription className="text-2xl" />,
        text: "The calculator has features such as addition, subtraction, multiplication, division, decimal and all.",
      },
      {
        icon: <FaCode className="text-2xl" />,
        text: "It is built in following tools and languages:",
      },
      {
        icon: <ReactSVG className="text-xl" />,
        text: "React",
      },
      {
        icon: <Javascript className="text-xl" />,
        text: "JavaScript",
      },
      {
        icon: <SiVite className="text-xl" />,
        text: "Vite",
      },
    ],
  },
  {
    id: 10,
    title: "Indecision App",
    status: "Completed",
    image: "/projects/indecision-app.png",
    github: "https://github.com/shrutidhungana/indecision-app",
    website: "https://shrutidhungana.github.io/indecision-app/",
    details: [
      {
        icon: <FcDecision className="text-2xl" />,
        text: "An app where computer decides what to do for you.",
      },
      {
        icon: <MdDescription className="text-2xl" />,
        text: "An app made with react.js and scss where you can enter your task and let the computer decide what you should do. There is place for entering your options and when you click the what should I do button the computer decides what you should do from the options. If you don't have any options remaining then the what should I do button is disabled. You can remove the individual task as well by clicking the remove button at the side of the things you want to do.You can also remove all the option by clicking remove all button.The name given for the app is Indecision as it decides what you have to do. ",
      },
      {
        icon: <FaCode className="text-2xl" />,
        text: "It is built in following tools and languages:",
      },
      {
        icon: <ReactSVG className="text-xl" />,
        text: "React",
      },
      {
        icon: <Javascript className="text-xl" />,
        text: "JavaScript",
      },
      {
        icon: <SiCreatereactapp className="text-xl" />,
        text: "Create React App",
      },
      {
        icon: <CSS className="text-xl" />,
        text: "CSS",
      },
    ],
  },
];
