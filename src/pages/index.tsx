import Header from "@/components/header";
import Image from "next/image";
import {links} from '@/config'
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { SocialMediaLink } from "@/types";
import PortfolioLayout from "@/components/layout";


const socialMediaLinks: SocialMediaLink[] = [
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
  {
    name: "Facebook",
    url: "https://www.facebook.com/shruti.dhungana.5",
    icon: <FaFacebook size={30} />,
    hoverColor: "hover:text-blue-700",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/shruti.dhungana/",
    icon: <FaInstagram size={30} />,
    hoverColor: "hover:text-blue-700",
  },
];

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/background.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          priority
        />
      </div>
      <PortfolioLayout>
        <main className="flex flex-col items-center justify-center h-screen text-center z-10 relative px-6">
          <div className="mb-8 animate-fadeIn"></div>
        </main>
      </PortfolioLayout>
    </div>
  );
}
