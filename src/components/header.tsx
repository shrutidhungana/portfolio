import Link from "next/link";

type HeaderProps = {
  links: { name: string; href: string }[];
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
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-gray-800 transition"
                >
                  {link.name}
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
