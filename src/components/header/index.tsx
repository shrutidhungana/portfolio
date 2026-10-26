import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";
import ThemeToggle from "@/components/theme-toggle";

type HeaderProps = {
  links: { name: string; href: string; icon: ReactNode }[];
};

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-theme bg-accent text-sm font-semibold text-background"
          >
            S
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Shruti<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 border-b-2 pb-1 text-sm transition-colors duration-fast ${
                      isActive
                        ? "border-accent text-foreground"
                        : "border-transparent text-muted hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    {link.name === "Resume" && (
                      <IoMdDownload aria-hidden="true" size={12} />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <span aria-hidden="true" className="h-5 w-px bg-border" />
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
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
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
                  className={`block py-2.5 text-sm transition-colors duration-fast ${
                    pathname === link.href
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
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
