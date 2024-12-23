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
  iconColor?: string;
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

export type ContactData = {
  id: number;
  icon: ReactNode;
  name: string;
  text: string | string[]| ReactNode;
  iconColor: string;
};

export type ContactFormData = {
  id: number;
  name: string;
  label: string;
  placeholder: string;
}
