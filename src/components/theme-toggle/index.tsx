import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/hooks/use-theme";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="flex h-9 w-9 items-center justify-center rounded-theme border border-border bg-surface text-foreground transition-colors duration-fast hover:text-accent"
    >
      {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;
