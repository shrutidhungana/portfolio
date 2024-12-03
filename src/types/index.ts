import { ReactNode } from "react";

export type NavLink = {
  name: string; 
  href: string; 
};

export type SocialMediaLink = {
  name: string;
  url: string;
  icon: ReactNode;
};
