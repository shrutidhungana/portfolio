import { NavLink } from "@/types";
import { CiHome, CiFileOn, CiMail } from "react-icons/ci";
import { GoProject } from "react-icons/go";

export const links: NavLink[] = [
  { name: "About", href: "/about", icon: CiHome },
  { name: "Experience", href: "/experience", icon: CiFileOn },
  { name: "Projects", href: "/projects", icon: GoProject },
  { name: "Contact", href: "/contact", icon: CiMail },
];
