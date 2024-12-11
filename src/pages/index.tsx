
import Image from "next/image";
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
      
      <PortfolioLayout>
        <main className="flex flex-col items-start justify-center h-screen text-center z-10 relative px-6">
          <div className="mb-8 animate-slideInFromLeft">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 ml-8">
              Hello, I am Shruti Dhungana
            </h1>
          </div>
         
        </main>
      </PortfolioLayout>
    </div>
  );
}
