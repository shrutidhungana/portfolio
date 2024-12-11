import { NavLink } from "@/types";
import { CiHome, CiFileOn, CiMail } from "react-icons/ci";
import { GoProject } from "react-icons/go";
import { MdCastForEducation, MdLightbulbOutline } from "react-icons/md";

export const links: NavLink[] = [
  { name: "About", href: "/about", icon: CiHome },
  { name: "Education", href: "/education", icon: MdCastForEducation },
  { name: "Experience", href: "/experience", icon: CiFileOn },
  { name: "Skills", href: "/skills", icon: MdLightbulbOutline },
  { name: "Projects", href: "/projects", icon: GoProject },
  { name: "Contact", href: "/contact", icon: CiMail },
];
