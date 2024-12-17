import Link from "next/link";
import { ReactNode, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

type HeaderProps = {
  links: { name: string; href: string; icon: ReactNode }[];
};

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full bg-indigo-800 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-white hover:text-indigo-300 transition"
        >
          My Portfolio
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
            className={`flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 absolute lg:static top-16 left-0 w-full lg:w-auto bg-indigo-800 lg:bg-transparent shadow-lg lg:shadow-none transform ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:transform-none transition-transform duration-300`}
          >
            {links?.map((link) => (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center text-gray-300 transition duration-300"
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                  {/* Icon with Background */}
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full group-hover:bg-indigo-500 transition duration-300">
                    {link.icon}
                  </div>

                  {/* Name (Hidden on large screens, shown on hover) */}
                  <span className="ml-2 text-base text-gray-300 lg:hidden">
                    {link.name}
                  </span>
                  <span className="hidden lg:inline-block lg:ml-2 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transform transition-all duration-300 ease-in-out text-white">
                    {link.name}
                  </span>
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

