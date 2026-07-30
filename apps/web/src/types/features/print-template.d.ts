import type { ResumeContact, ResumeData, ResumeSectionItem } from "../models";

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

export interface HomePageTemplateData {
  resume: ResumeData;
}

export interface ResumePageTemplateData {
  fullName: string;
  firstName: string;
  lastName: string;
  roleLine: string;
  heroImage: string;
  profileSummary: string;
  totalExperienceYears: number;
  totalExperienceMonths: number;
  headerContacts: HeaderContact[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  tools: NameItem[];
  hobbies: NameItem[];
  skills: SkillItem[];
  certifications: CertificationPrintItem[];
  currentDate: string;
}

export interface CoverLetterPageTemplateData {
  fullName: string;
  role: string;
  initials: string;
  heroImage: string;
  aboutMeText: string;
  phoneValue: string;
  emailValue: string;
  location: string;
  recipientName: string;
  recipientRole: string;
  recipientCompany: string;
  recipientLocation: string;
  salutation: string;
  paragraphOne: string;
  paragraphTwo: string;
  paragraphThree: string;
  currentDate: string;
}

export interface PageTemplateDataMap {
  "/": HomePageTemplateData;
  "/resume": ResumePageTemplateData;
  "/cover-letter": CoverLetterPageTemplateData;
}

export type PageTemplatePath = keyof PageTemplateDataMap;

export type PageTemplateData<P extends PageTemplatePath = PageTemplatePath> =
  PageTemplateDataMap[P];

export type PrintDocumentKind = "resume" | "cover-letter";

export interface RunAutoPrintIfRequestedOptions {
  kind: PrintDocumentKind;
  lastTokenStorageKey: string;
  fallbackStorageKey: string;
  params?: URLSearchParams;
  doc?: Pick<Document, "title">;
}

export interface CoverLetterTemplateDefaults {
  fullName: string;
  role: string;
  recipientName: string;
  recipientRole: string;
  recipientLocation: string;
  salutation: string;
  jobTitle: string;
  recipientCompany: string;
  primarySkill: string;
  secondarySkill: string;
  latestAccomplishment: string;
  lastCompany: string;
  profileLocation: string;
}

export interface CoverLetterParagraphTemplates {
  one: string;
  two: string;
  three: string;
}

export interface CoverLetterTemplateMetaData {
  primarySkill: string;
  secondarySkill: string;
  relevantTech: string;
  currentJobTitle: string;
  lastCompany: string;
  latestAccomplishment: string;
  defaults: Pick<
    CoverLetterTemplateDefaults,
    | "jobTitle"
    | "recipientCompany"
    | "primarySkill"
    | "secondarySkill"
    | "latestAccomplishment"
  >;
  paragraphTemplates: CoverLetterParagraphTemplates;
}

export interface CoverLetterTemplateBuildResult {
  pageData: CoverLetterPageTemplateData;
  meta: CoverLetterTemplateMetaData;
}

export interface CoverLetterClientTemplateDataset {
  primarySkill: string;
  secondarySkill: string;
  relevantTech: string;
  currentJobTitle: string;
  lastCompany: string;
  latestAccomplishment: string;
  defaultJobTitle: string;
  defaultRecipientCompany: string;
  defaultPrimarySkill: string;
  defaultSecondarySkill: string;
  defaultLatestAccomplishment: string;
  paragraphOneTemplate: string;
  paragraphTwoTemplate: string;
  paragraphThreeTemplate: string;
}

export interface CoverLetterClientTemplatePayload {
  dataset: CoverLetterClientTemplateDataset;
  paragraphElements: {
    one: HTMLElement;
    two: HTMLElement;
    three: HTMLElement;
  };
}
