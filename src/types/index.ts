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

export type ExperienceDetails = {
  icon: ReactNode;
  description: string;
};

export type ExperienceItem = {
  id: number;
  year: string;
  title: string;
  institution: string;
  institutionLink?: string;
  location: string;
  details: Array<ExperienceDetails>;
  credentialLink?: string;
};

export type SkillGroup = {
  id: number;
  title: string;
  skills: string[];
};

export type Details = {
  icon: ReactNode;
  text: string;
};

export type ProjectsData = {
  id: number;
  title: string;
  image: string;
  github: string;
  website: string;
  status: string,
  details: Array<Details>
};
