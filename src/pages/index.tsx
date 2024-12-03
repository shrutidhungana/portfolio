import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { SocialMediaLink } from "@/types";


const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: <FaGithub size={30} />,
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: <FaFacebook size={30} />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: <FaInstagram size={30} />,
  },
];

export default function Home() {
  return (
    <main>
      
    </main>
  );
}
