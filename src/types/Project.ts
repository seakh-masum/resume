import { Timestamp } from "firebase/firestore";

export type Project = {
  name: string;
  link?: string;
  startDate: Timestamp;
  endDate?: Timestamp;
  description: string;
  usedSkills?: string[];
  sector: number;
  type: number;
  role: string;
  tasks?: string[];
  members?: string[];
};
