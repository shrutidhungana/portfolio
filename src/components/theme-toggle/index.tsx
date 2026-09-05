import { FiMoon, FiSun } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-border bg-surface px-1 transition-colors duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <FiSun
        size={10}
        className={`pointer-events-none absolute left-1.5 transition-colors duration-fast ${
          isDark ? "text-muted" : "text-foreground"
        }`}
      />
      <FiMoon
        size={10}
        className={`pointer-events-none absolute right-1.5 transition-colors duration-fast ${
          isDark ? "text-foreground" : "text-muted"
        }`}
      />
      <motion.span
        layout
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 0.2, ease: "easeOut" }
        }
        className="z-10 h-4 w-4 rounded-full bg-muted"
        style={{ marginLeft: isDark ? "auto" : 0 }}
      />
    </button>
  );
};

export default ThemeToggle;
