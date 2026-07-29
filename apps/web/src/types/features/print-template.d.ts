import type { ResumeContact, ResumeSectionItem } from "../models";

export type NameItem = Partial<Pick<ResumeSectionItem<"hobbies">, "name">>;

export type SkillItem = Partial<Pick<ResumeSectionItem<"skills">, "name">>;

export type CertificationPrintItem = Partial<
  Pick<ResumeSectionItem<"certifications">, "name" | "issuer" | "credentialId">
> & {
  dateRange?: string;
};

export type ProjectItem = Partial<
  Pick<ResumeSectionItem<"projects">, "title">
> & {
  shortDescription?: string;
  techText?: string;
};

export type EducationItem = Partial<
  Pick<
    ResumeSectionItem<"education">,
    "startYear" | "endYear" | "degree" | "institute" | "percentage" | "marks"
  >
>;

export type ExperienceItem = Partial<
  Pick<ResumeSectionItem<"experience">, "designation" | "company">
> & {
  dateRange: string;
  shortDesc?: string;
  shortRoles: string[];
};

export type HeaderContact = Pick<ResumeContact, "value"> & {
  type: "phone" | "email";
};
