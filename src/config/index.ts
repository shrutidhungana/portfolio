import { NavLink } from "@/types";
import {  CiFileOn, CiMail } from "react-icons/ci";
import { GoProject } from "react-icons/go";
import { MdCastForEducation, MdLightbulbOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

export const links: NavLink[] = [
  { name: "About", href: "/about", icon: FaRegUser },
  { name: "Education", href: "/education", icon: MdCastForEducation },
  { name: "Experience", href: "/experience", icon: CiFileOn },
  { name: "Skills", href: "/skills", icon: MdLightbulbOutline },
  { name: "Projects", href: "/projects", icon: GoProject },
  { name: "Contact", href: "/contact", icon: CiMail },
];
