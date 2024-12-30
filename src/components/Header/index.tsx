import Link from "next/link";
import { ReactNode, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

type HeaderProps = {
  links: { name: string; href: string; icon: ReactNode }[];
};

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full bg-gradient-to-r from-indigo-800 to-purple-900 backdrop-blur-md shadow-xl z-50">
      <div className="container mx-auto flex justify-between items-center py-5 px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/favicon.png" // Replace with the path to your image
            alt="Logo"
            width={45}
            height={45}
            className="rounded-full"
          />
          <span className="text-3xl font-bold text-white tracking-wide">
            My Portfolio
          </span>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>

        {/* Navigation Links */}
        <nav>
          <ul
            className={`flex flex-col lg:flex-row lg:space-x-8 space-y-6 lg:space-y-0 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gradient-to-r from-indigo-800 to-purple-900 lg:bg-transparent shadow-xl lg:shadow-none transform ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:transform-none transition-transform duration-300`}
          >
            {links?.map((link) => (
              <li key={link.name} className="relative">
                <Link
                  href={link.href}
                  className="flex items-center text-gray-300 transition duration-300"
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                  {/* Icon with Background */}
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full shadow-lg">
                    {link.icon}
                  </div>

                  {/* Name */}
                  <span className="ml-3 text-lg text-white">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
