import { sanity } from "@/lib/sanity";
import {
  resumeCertificationsQuery,
  resumeContactsQuery,
  resumeEducationQuery,
  resumeExperienceQuery,
  resumeHobbiesQuery,
  resumeProfileQuery,
  resumeProjectsQuery,
  resumeQuery,
  resumeSkillsQuery,
  resumeToolsQuery,
} from "@/lib/queries";
import type {
  ResumeCertifications,
  ResumeContacts,
  ResumeData,
  ResumeEducationList,
  ResumeExperienceList,
  ResumeHobbies,
  ResumeProfile,
  ResumeProjects,
  ResumeSkills,
  ResumeTools,
} from "@/types/models";

export const fetchResume = async (): Promise<ResumeData> => {
  return (await sanity.fetch(resumeQuery)) as ResumeData;
};

export const fetchResumeProfile = async (): Promise<ResumeProfile> => {
  return (await sanity.fetch(resumeProfileQuery)) as ResumeProfile;
};

export const fetchResumeContacts = async (): Promise<ResumeContacts> => {
  return (await sanity.fetch(resumeContactsQuery)) as ResumeContacts;
};

export const fetchResumeSkills = async (): Promise<ResumeSkills> => {
  return (await sanity.fetch(resumeSkillsQuery)) as ResumeSkills;
};

export const fetchResumeTools = async (): Promise<ResumeTools> => {
  return (await sanity.fetch(resumeToolsQuery)) as ResumeTools;
};

export const fetchResumeExperience =
  async (): Promise<ResumeExperienceList> => {
    return (await sanity.fetch(resumeExperienceQuery)) as ResumeExperienceList;
  };

export const fetchResumeEducation = async (): Promise<ResumeEducationList> => {
  return (await sanity.fetch(resumeEducationQuery)) as ResumeEducationList;
};

export const fetchResumeCertifications =
  async (): Promise<ResumeCertifications> => {
    return (await sanity.fetch(
      resumeCertificationsQuery,
    )) as ResumeCertifications;
  };

export const fetchResumeProjects = async (): Promise<ResumeProjects> => {
  return (await sanity.fetch(resumeProjectsQuery)) as ResumeProjects;
};

export const fetchResumeHobbies = async (): Promise<ResumeHobbies> => {
  return (await sanity.fetch(resumeHobbiesQuery)) as ResumeHobbies;
};
