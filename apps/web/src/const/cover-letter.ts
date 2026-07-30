import type {
  CoverLetterParagraphTemplates,
  CoverLetterTemplateDefaults,
} from "@/types/features";

export const COVER_LETTER_DEFAULTS: CoverLetterTemplateDefaults = {
  fullName: "Your Name",
  role: "UI/UX Designer",
  recipientName: "Hiring Manager",
  recipientRole: "Talent Acquisition Team",
  recipientLocation: "State, Country, 12345",
  salutation: "Dear Sir,",
  jobTitle: "Software Engineer",
  recipientCompany: "Company Name",
  primarySkill: "frontend development",
  secondarySkill: "problem-solving",
  latestAccomplishment:
    "delivered measurable improvements across product experiences",
  lastCompany: "your most recent company",
  profileLocation: "City, State, Country, 12345",
};

export const COVER_LETTER_PARAGRAPH_TEMPLATES: CoverLetterParagraphTemplates = {
  one: "I am writing to express my strong interest in the {{jobTitle}} position at {{recipientCompany}}. With a solid background in frontend technology and a proven track record of {{primarySkill}} and {{secondarySkill}}, I am confident in my ability to make an immediate and positive impact on your team.",
  two: "In my most recent role as a {{currentJobTitle}} at {{lastCompany}}, I successfully {{latestAccomplishment}}. My experience has equipped me with a deep understanding of {{relevantTech}}, which aligns perfectly with the requirements of this role.",
  three:
    "I would welcome the opportunity to discuss how my background, skills, and certifications can contribute to the continued success of {{recipientCompany}}. Thank you for considering my application. I have attached my resume for your review and look forward to the possibility of an interview.",
};

export const COVER_LETTER_FORM_PARAM_MAPPING = [
  { param: "to", id: "cl-to" },
  { param: "role", id: "cl-to-role" },
  { param: "company", id: "cl-company" },
  { param: "location", id: "cl-recipient-location-to" },
  { param: "greeting", id: "cl-salutation" },
] as const;

export const COVER_LETTER_AUTO_PRINT_LAST_TOKEN_KEY =
  "cover-letter-last-print-token";
export const COVER_LETTER_AUTO_PRINT_FALLBACK_KEY =
  "cover-letter-autoprint-fallback-consumed";

export const COVER_LETTER_RELEVANT_TECH_FALLBACK = "React, TypeScript";

export const COVER_LETTER_TEMPLATE_META_ID = "cl-template-meta";

export const COVER_LETTER_PARAGRAPH_IDS = {
  one: "cl-paragraph-1",
  two: "cl-paragraph-2",
  three: "cl-paragraph-3",
} as const;

export const COVER_LETTER_COMPANY_TEXT_ID = "cl-company";
export const COVER_LETTER_ROLE_TEXT_ID = "cl-to-role";

export const COVER_LETTER_TEMPLATE_DATASET_KEYS = {
  primarySkill: "primarySkill",
  secondarySkill: "secondarySkill",
  relevantTech: "relevantTech",
  currentJobTitle: "currentJobTitle",
  lastCompany: "lastCompany",
  latestAccomplishment: "latestAccomplishment",
  defaultJobTitle: "defaultJobTitle",
  defaultRecipientCompany: "defaultRecipientCompany",
  defaultPrimarySkill: "defaultPrimarySkill",
  defaultSecondarySkill: "defaultSecondarySkill",
  defaultLatestAccomplishment: "defaultLatestAccomplishment",
  paragraphOneTemplate: "paragraphOneTemplate",
  paragraphTwoTemplate: "paragraphTwoTemplate",
  paragraphThreeTemplate: "paragraphThreeTemplate",
} as const;
