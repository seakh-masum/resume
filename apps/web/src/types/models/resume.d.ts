import type { Hobby, Project, Skill } from "./content";

export interface Profile {
  name?: string;
  title?: string;
  image?: any;
  introduction?: string;
  summary?: string[];
  location?: string;
}

export interface Contact {
  url: string;
  image: any;
  value: string;
}

export interface Education {
  startYear?: string;
  endYear?: string;
  degree?: string;
  stream?: string;
  institute?: string;
  marks?: string;
  percentage?: string;
  link?: string;
}

export interface Experience {
  joiningDate?: string;
  releaseDate?: string;
  designation?: string;
  company?: string;
  roles?: string[];
  desc?: string;
}

export type ResumeProfile = Profile;
export type ResumeContact = Contact;
export type ResumeEducation = Education;
export type ResumeExperience = Experience;

export interface ResumeData {
  profile: Profile;
  contacts: Contact[];
  skills: Skill[];
  tools: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  hobbies: Hobby[];
}

export type ResumeSection<K extends keyof ResumeData> = ResumeData[K];

export type ResumeSectionItem<K extends keyof ResumeData> =
  ResumeData[K] extends Array<infer T> ? T : never;

export type ResumeContacts = ResumeData["contacts"];
export type ResumeSkills = ResumeData["skills"];
export type ResumeTools = ResumeData["tools"];
export type ResumeExperienceList = ResumeData["experience"];
export type ResumeEducationList = ResumeData["education"];
export type ResumeProjects = ResumeData["projects"];
export type ResumeHobbies = ResumeData["hobbies"];
