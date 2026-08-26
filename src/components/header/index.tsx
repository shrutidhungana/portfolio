import Link from "next/link";
import { ReactNode, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "@/components/theme-toggle";

type HeaderProps = {
  links: { name: string; href: string; icon: ReactNode }[];
};

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-foreground">
          Shruti<span className="text-accent">.</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors duration-fast hover:text-foreground"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="text-foreground focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {menuOpen && (
        <nav className="border-t border-border bg-background lg:hidden">
          <ul className="flex flex-col px-6 py-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block py-2 text-sm text-muted transition-colors duration-fast hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
