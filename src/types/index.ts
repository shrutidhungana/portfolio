import { ReactNode } from "react";

export type NavLink = {
  name: string;
  href: string;
  icon: ReactNode;
};

export type SocialMediaLink = {
  name: string;
  url: string;
  icon: ReactNode;
  hoverColor: string;
};

export type ListItem = {
  id: number;
  icon: ReactNode;
  text: ReactNode;
  contact?: string;
};

export type EducationItem = {
  id: number;
  year: string;
  title: string;
  institution: string;
  location: string;
};

export type SkillItem = {
  name: string;
  icon: ReactNode;

};

export type SkillSection = {
  id: number;
  sectionTitle: string;
  items: SkillItem[];
};
