import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        "on-accent": "var(--color-on-accent)",
        chip: "var(--color-chip)",
        "accent-soft": "var(--color-accent-soft)",
      },
      borderRadius: {
        theme: "var(--radius)",
      },
      transitionDuration: {
        fast: "var(--motion-fast)",
        slow: "var(--motion-slow)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "theme-sm": "var(--shadow-sm)",
        "theme-md": "var(--shadow-md)",
      },
    },
  },
  plugins: [],
} satisfies Config;
