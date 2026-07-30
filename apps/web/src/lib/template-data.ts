import type {
  CertificationPrintItem,
  CoverLetterTemplateBuildResult,
  PageTemplateData,
  PageTemplatePath,
  ProjectItem,
  ResumePageTemplateData,
} from "@/types/features";
import type {
  ResumeData,
  ResumeExperience,
  ResumeExperienceList,
} from "@/types/models";
import {
  COVER_LETTER_DEFAULTS,
  COVER_LETTER_PARAGRAPH_TEMPLATES,
} from "@/const";
import { getImage } from "@/utils/feature.util";
import { formatDateRange } from "@/utils/date.util";
import { calculateTotalTenure } from "@/utils";
import {
  getEmailContact,
  getHeaderContacts,
  getPhoneContact,
} from "@/utils/contact.util";
import { normalizeProfileLocation } from "@/utils/profile.util";
import { renderTemplate } from "@/utils/template.util";

export const buildPageTemplateData = <P extends PageTemplatePath>(
  _path: P,
  data: PageTemplateData<P>,
): PageTemplateData<P> => {
  return data;
};

const clipText = (value: string, maxLength: number) => {
  if (!value) return "";
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength).trimEnd()}...`;
};

type ExperienceLike = {
  joiningDate?: string;
  releaseDate?: string;
  designation?: string;
  company?: string;
  roles?: string[];
  desc?: string;
};

export const buildHomePageTemplateData = (resume: ResumeData) => {
  return buildPageTemplateData("/", { resume });
};

export const buildResumePageTemplateData = (
  resume: ResumeData,
  currentDate: string,
): ResumePageTemplateData => {
  const profile = resume?.profile ?? {};
  const contacts = (resume?.contacts ?? []).slice(0, 3);
  const skills = resume?.skills ?? [];
  const experience = (resume?.experience ?? []).slice(0, 3);
  const education = (resume?.education ?? []).slice(0, 3);
  const certifications = resume?.certifications ?? [];
  const projects = resume?.projects ?? [];
  const tools = resume?.tools ?? [];
  const hobbies = resume?.hobbies ?? [];

  const fullName = (profile?.name ?? "Your Name").trim();
  const nameParts = fullName.split(" ").filter(Boolean);
  const firstName = nameParts[0] ?? "Your";
  const lastName = nameParts.slice(1).join(" ") || "Name";

  const heroImage = profile?.image ? getImage(profile.image, 560, 760) : "";
  const profileText =
    profile?.introduction ||
    (Array.isArray(profile?.summary) ? profile.summary.join(" ") : "");
  const profileSummary = clipText(profileText, 300);

  const roleLine = profile?.title || "Software Engineer";
  const { years: totalExperienceYears, months: totalExperienceMonths } =
    calculateTotalTenure(resume?.experience ?? []);

  const experienceItems = experience.map((item: ResumeExperience) => ({
    dateRange: formatDateRange(
      item?.joiningDate || "2020-01",
      item?.releaseDate || "",
    ),
    designation: item?.designation,
    company: item?.company,
    shortDesc: item?.desc ? clipText(item.desc, 230) : "",
    shortRoles: Array.isArray(item?.roles) ? item.roles.slice(0, 2) : [],
    joiningDate: item?.joiningDate,
    releaseDate: item?.releaseDate,
  }));

  const projectItems: ProjectItem[] = projects.slice(0, 6).map((item) => ({
    title: item?.title,
    shortDescription: item?.description ? clipText(item.description, 220) : "",
    techText:
      Array.isArray(item?.techStacks) && item.techStacks.length > 0
        ? item.techStacks.slice(0, 6).join(", ")
        : "",
  }));

  const certificationItems: CertificationPrintItem[] = certifications
    .slice(0, 12)
    .map((item) => ({
      name: item?.name || "Certification",
      issuer: item?.issuer,
      dateRange: [item?.issueDate, item?.expiryDate]
        .filter(Boolean)
        .join(" - "),
      credentialId: item?.credentialId,
    }));

  return buildPageTemplateData("/resume", {
    fullName,
    firstName,
    lastName,
    roleLine,
    heroImage,
    profileSummary,
    totalExperienceYears,
    totalExperienceMonths,
    headerContacts: getHeaderContacts(contacts),
    education,
    experience: experienceItems,
    projects: projectItems,
    tools,
    hobbies,
    skills,
    certifications: certificationItems,
    currentDate,
  });
};

const toSortableTime = (value?: string) => {
  if (!value) return 0;
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? 0 : parsed;
};

const getLatestExperience = (items: ExperienceLike[]) => {
  return items.reduce<ExperienceLike | undefined>((latest, item) => {
    if (!latest) return item;
    const latestTime = toSortableTime(
      latest?.releaseDate || latest?.joiningDate,
    );
    const itemTime = toSortableTime(item?.releaseDate || item?.joiningDate);
    return itemTime > latestTime ? item : latest;
  }, undefined);
};

const getParam = (params: URLSearchParams, key: string, fallback: string) => {
  const value = params.get(key)?.trim();
  return value ? value : fallback;
};

export const buildCoverLetterPageTemplateData = (
  resume: ResumeData,
  params: URLSearchParams,
  currentDate: string,
): CoverLetterTemplateBuildResult => {
  const profile = resume?.profile ?? {};
  const contacts = resume?.contacts ?? [];
  const experiences = (resume?.experience ?? []) as ResumeExperienceList;
  const skills = resume?.skills ?? [];

  const fullName = (profile?.name ?? COVER_LETTER_DEFAULTS.fullName).trim();
  const role = profile?.title ?? COVER_LETTER_DEFAULTS.role;
  const initials =
    fullName
      .split(" ")
      .filter(Boolean)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .slice(0, 2)
      .join("") || "YN";

  const latestExperience = getLatestExperience(experiences);
  const currentJobTitle = latestExperience?.designation || role;
  const lastCompany =
    latestExperience?.company || COVER_LETTER_DEFAULTS.lastCompany;
  const primarySkill = skills[0]?.name || COVER_LETTER_DEFAULTS.primarySkill;
  const secondarySkill =
    skills[1]?.name || COVER_LETTER_DEFAULTS.secondarySkill;
  const latestAccomplishment =
    latestExperience?.roles?.[0] ||
    latestExperience?.desc ||
    COVER_LETTER_DEFAULTS.latestAccomplishment;

  const recipientName = getParam(
    params,
    "to",
    COVER_LETTER_DEFAULTS.recipientName,
  );
  const recipientRole = getParam(
    params,
    "role",
    COVER_LETTER_DEFAULTS.recipientRole,
  );
  const recipientCompany = getParam(
    params,
    "company",
    latestExperience?.company || COVER_LETTER_DEFAULTS.recipientCompany,
  );
  const recipientLocation = getParam(
    params,
    "location",
    COVER_LETTER_DEFAULTS.recipientLocation,
  );
  const salutation = getParam(
    params,
    "greeting",
    COVER_LETTER_DEFAULTS.salutation,
  );
  const jobTitle = getParam(
    params,
    "jobTitle",
    recipientRole || COVER_LETTER_DEFAULTS.jobTitle,
  );
  const relevantTech = getParam(params, "relevantTech", primarySkill);

  const introSummary = profile?.introduction || "";
  const summaryText = Array.isArray(profile?.summary)
    ? profile.summary.join(" ")
    : "";
  const aboutMeText = clipText(`${introSummary} ${summaryText}`.trim(), 340);

  const profileLocation = normalizeProfileLocation(
    profile,
    COVER_LETTER_DEFAULTS.profileLocation,
  );

  const paragraphOne = renderTemplate(COVER_LETTER_PARAGRAPH_TEMPLATES.one, {
    jobTitle,
    recipientCompany,
    primarySkill,
    secondarySkill,
  });
  const paragraphTwo = renderTemplate(COVER_LETTER_PARAGRAPH_TEMPLATES.two, {
    currentJobTitle,
    lastCompany,
    latestAccomplishment,
    relevantTech,
  });
  const paragraphThree = renderTemplate(
    COVER_LETTER_PARAGRAPH_TEMPLATES.three,
    {
      recipientCompany,
    },
  );

  const pageData = buildPageTemplateData("/cover-letter", {
    fullName,
    role,
    initials,
    heroImage: profile?.image ? getImage(profile.image, 560, 560) : "",
    aboutMeText,
    phoneValue: getPhoneContact(contacts)?.value || "+000 0000 0000",
    emailValue: getEmailContact(contacts)?.value || "www.example.com",
    location: profileLocation,
    recipientName,
    recipientRole,
    recipientCompany,
    recipientLocation,
    salutation,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    currentDate,
  });

  return {
    pageData,
    meta: {
      primarySkill,
      secondarySkill,
      relevantTech,
      currentJobTitle,
      lastCompany,
      latestAccomplishment,
      defaults: {
        jobTitle: COVER_LETTER_DEFAULTS.jobTitle,
        recipientCompany: COVER_LETTER_DEFAULTS.recipientCompany,
        primarySkill: COVER_LETTER_DEFAULTS.primarySkill,
        secondarySkill: COVER_LETTER_DEFAULTS.secondarySkill,
        latestAccomplishment: COVER_LETTER_DEFAULTS.latestAccomplishment,
      },
      paragraphTemplates: COVER_LETTER_PARAGRAPH_TEMPLATES,
    },
  };
};
