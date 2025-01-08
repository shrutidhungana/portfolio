import {
  NavLink,
  ListItem,
  SocialMediaLink,
  EducationItem,
  SkillSection,
  ContactData,
  ContactFormData,
  ProjectsData,
  ExperienceItem
} from "@/types";
import { CiFileOn, CiMail } from "react-icons/ci";
import { GoProject } from "react-icons/go";
import {
  MdCastForEducation,
  MdDescription,
  MdLightbulbOutline,
} from "react-icons/md";
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
  SiShadcnui,
  SiStyledcomponents,
  SiVite,
} from "react-icons/si";
import { FaAffiliatetheme, FaLocationDot } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
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
import { FcDecision } from "react-icons/fc";
import { IoShareSocial } from "react-icons/io5";

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
    year: "Feb 2023-July 2024",
    title: "Frontend (React) Developer",
    institution: "Digital Anka Pvt ltd (Varicon)",
    location: "Pulchowk, Lalitpur, Nepal (Australia)",
    details: [
      {
        icon: <FaLaptopCode />,
        description:
          "As a React developer at Varicon, I enhanced several critical modules, including Equipment, Daily Cost Tracking, and Subcontract. I implemented an Archive feature with advanced filtering, improved data visibility with unqualified equipment counts and status indicators, and streamlined navigation in the Daily Cost Tracking module. I also developed an automatic logout feature for security and designed the entire Subcontract module from scratch, incorporating features like contract management and claims linkage, all while ensuring seamless user experiences using React, Hooks, and Material UI.",
      },
    ],
    credentialLink: "/Shruti_Dhungana_experience_letter_Varicon.pdf"
  },
  {
    id: 2,
    year: "Nov 2022-Feb 2023",
    title: "Frontend Developer Intern",
    institution: "Treeleaf Technologies",
    location: "Sankhamul, Kathmandu,Nepal",
    details: [
      {
        icon: <FaLaptopCode />,
        description:
          "During my frontend internship, I gained hands-on experience with HTML, CSS, JavaScript, and React, working on projects like splash pages, to-do apps, task managers, and quiz applications. This allowed me to learn the fundamentals of web development and understand how these technologies come together to create dynamic, interactive user interfaces.",
      },
    ],
  },

  {
    id: 3,
    year: "Jan 2022-March 2022",
    title: "React Developer Intern",
    institution: "Prixa Technologies",
    location: "Jawalakhel, Lalitpur, Nepal",
    details: [
      {
        icon: <FaLaptopCode />,
        description:
          "During my React developer internship, I worked on the Laxmi Bank App, which featured a splash page, calculator, custom keyboard, and bank statement section, helping me grasp React fundamentals and improve my CSS skills. I also created the Movie-Mania website using the Opendb API and a weather app with real-time data. These projects allowed me to enhance my skills in API integration, state management, and UI development, making the internship a highly valuable learning experience.",
      },
    ],
    credentialLink:"/Shruti_Dhungana_experience_letter_prixa.pdf"
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
    title: "Trend Hive",
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
    id: 2,
    title: "Leet Clone",
    image: "/projects/leetclone.png",
    github: "https://github.com/shrutidhungana/leetclone",
    website: "https://leetcode-clone-ashen.vercel.app/",
    details: [
      {
        icon: <FaClone className="text-2xl" />,
        text: "Clone of Leetcode, a popular platform for practicing coding problems and preparing for interviews.",
      },
      {
        icon: <MdDescription className="text-2xl" />,
        text: "In the homepage it has 10 problems that are in the leetcode. Once you click on any of problems you go inside the solving area where there are two split sections. In the left side there are description,examples, constrains etc. While in the right there is a code editor and test cases. Run, and Submit button constitute the footer. Talking about header there is Problem List in the center and on clicking these button you can go to next or previous problems. ",
      },
      {
        icon: <FaCode className="text-2xl" />,
        text: "It is built in following tools and languages:",
      },
      {
        icon: <Next className="text-xl" />,
        text: "Next.js",
      },
      {
        icon: <Tailwind className="text-xl" />,
        text: "Tailwind CSS",
      },
      {
        icon: <Typescript className="text-xl" />,
        text: "TypeScript",
      },
      {
        icon: <Firebase className="text-xl" />,
        text: "Firebase",
      },
      {
        icon: <SiShadcnui className="text-xl" />,
        text: "ShadCN",
      },
    ],
  },
  {
    id: 3,
    title: "Tic Tac Toe",
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
    title: "Movie Mania",
    image: "/projects/movie-mania.png",
    github: "https://github.com/shrutidhungana/Movie-Mania",
    website: "https://shrutidhungana.github.io/Movie-Mania/",
    details: [
      {
        icon: <FaFilm className="text-2xl" />,
        text: "A movie search app that allows users to search and explore movies.",
      },
      {
        icon: <MdDescription className="text-2xl" />,
        text: "A movie app where you can search for different movies and series in different languages. On clicking each movies, you get IMDB Rating, year the movie released, language, Rated, Release date, run time, Genre, Director, Actors and plot.",
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
        icon: <SiStyledcomponents className="text-xl" />,
        text: "Styled Components",
      },
    ],
  },
  {
    id: 6,
    title: "Dream Home ",
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
    id: 7,
    title: "Khana Sansar",
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
    id: 8,
    title: "Calculator",
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
    id: 9,
    title: "Indecision App",
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
  {
    id: 10,
    title: "Sociopedia",
    image: "/projects/sociopedia.png",
    github: "https://github.com/shrutidhungana/sociopedia",
    website: "https://social-media-gamma-six.vercel.app/",
    details: [
      {
        icon: <IoShareSocial className="text-2xl" />,
        text: "A full-stack social media app to post your thoughts, make friends etc..",
      },
      {
        icon: <MdDescription className="text-2xl" />,
        text: "This is a simple social media app built using the MERN stack (MongoDB, Express, React, Node) with Material UI V5 for styling. The app features a login page where users can register or log in with a username and password. Upon login, users are taken to the home page, which includes a header with a title, a placeholder search bar, and a theme toggle for dark and light modes. The left side displays profile information (profile picture, username, and friends count), and users can visit their profile page to manage friends. The central area allows users to create posts with images, and the right side shows sponsors and a friend list. The app also allows liking posts, with additional features disabled for now.",
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
        icon: <ReactSVG className="text-xl" />,
        text: "React",
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
        icon: <Javascript className="text-xl" />,
        text: "JavaScript",
      },
    ],
  },
  {
    id: 11,
    title: "React Theme",
    image: "/projects/react-theme.png",
    github: "https://github.com/shrutidhungana/react-theme",
    website: "https://shrutidhungana.github.io/react-theme/",
    details: [
      {
        icon: <FaAffiliatetheme className="text-2xl" />,
        text: "An app to toggle between light and dark theme.",
      },
      {
        icon: <MdDescription className="text-2xl" />,
        text: "A simple app build with react.js and simple CSS. Here in the right, we have a sun like icon and if you click on the icon, you can see the theme of the page being changed. For the light theme we have filled icon and white background color with text written in black and for dark theme we have sun icon and black background color with text written in white also the space containing the icon has gray color in the darker theme.",
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
