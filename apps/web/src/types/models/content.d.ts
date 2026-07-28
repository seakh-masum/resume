export interface Project {
  _key: string;
  title: string;
  link?: string;
  startDate: string;
  endDate?: string;
  description: string;
  techStacks?: string[];
  sector: string;
  type: string;
  role: string;
  responsibilities?: string[];
  members?: string[];
  github?: string;
  achievements?: string[];
  tools?: string[];
}

export interface Skill {
  _key: string;
  name?: string;
  link?: string;
  description?: string;
  level?: number;
  icon: string;
  experience?: number;
  features?: string[];
  projects?: string[];
  color: string;
}

export interface Hobby {
  name: string;
  icon: string;
  color: string;
}
