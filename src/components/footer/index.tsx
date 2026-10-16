import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa";
import { socialMediaLinks } from "@/config";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-sm text-muted">
          &copy; {year} Shruti Dhungana
        </p>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href="mailto:shrutidhungana123@gmail.com"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-fast hover:text-accent"
          >
            <FaRegEnvelope aria-hidden="true" />
            Email
          </a>
          {socialMediaLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors duration-fast hover:text-accent"
            >
              {link.name}
            </a>
          ))}
          <Link
            href="/resume"
            className="text-sm text-muted transition-colors duration-fast hover:text-accent"
          >
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
