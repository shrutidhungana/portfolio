import Link from "next/link";
import {  ComponentType } from "react";

type HeaderProps = {
  links: { name: string; href: string, icon: ComponentType }[];
};

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link
          href="/"
          className="text-2xl font-extrabold text-gray-900 hover:text-gray-600 transition"
        >
          My Portfolio
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {links?.map((link) => (
              <li key={link.name} className="relative group">
                {/* Link container */}
                <Link
                  href={link.href}
                  className="flex items-center text-gray-600 transition duration-300"
                >
                  {/* Icon */}
                  <link.icon className="w-8 h-8 text-gray-600 group-hover:text-indigo-500 transition duration-300" />

                  {/* Text that expands on hover */}
                  <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-300 ease-in-out group-hover:ml-4 group-hover:text-gray-900">
                    {link.name}
                  </span>
                </Link>

                {/* Background effect on hover */}
                <span className="absolute inset-0 bg-transparent group-hover:bg-indigo-100 opacity-0 group-hover:opacity-40 rounded-lg transition-opacity duration-300"></span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
