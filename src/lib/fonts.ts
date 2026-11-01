import { Inter, Unbounded } from "next/font/google";

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const headingFont = Unbounded({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});
