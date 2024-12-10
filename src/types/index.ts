import { ReactNode, ComponentType } from "react";

export type NavLink = {
  name: string;
  href: string;
  icon: ComponentType;
};

export type SocialMediaLink = {
  name: string;
  url: string;
  icon: ReactNode;
  hoverColor: string;
};
