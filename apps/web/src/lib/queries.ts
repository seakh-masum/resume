const RESUME_BASE_QUERY = `*[_type == "resume"][0]`;

const SKILL_FIELDS = `{
  _key,
  name,
  description,
  color,
  icon,
  level,
  link,
  features,
  experience,
  projects
}`;

const PROJECT_FIELDS = `{
  _key,
  title,
  description,
  sector,
  techStacks,
  role,
  type,
  responsibilities,
  achievements,
  members
}`;

export const resumeProfileQuery = `${RESUME_BASE_QUERY}.profile`;
export const resumeContactsQuery = `${RESUME_BASE_QUERY}.contacts`;
export const resumeSkillsQuery = `${RESUME_BASE_QUERY}.skills[]${SKILL_FIELDS}`;
export const resumeToolsQuery = `${RESUME_BASE_QUERY}.tools[]${SKILL_FIELDS}`;
export const resumeExperienceQuery = `${RESUME_BASE_QUERY}.experience`;
export const resumeEducationQuery = `${RESUME_BASE_QUERY}.education`;
export const resumeCertificationsQuery = `${RESUME_BASE_QUERY}.certifications`;
export const resumeProjectsQuery = `${RESUME_BASE_QUERY}.projects[]${PROJECT_FIELDS}`;
export const resumeHobbiesQuery = `${RESUME_BASE_QUERY}.hobbies`;

export const resumeQuery = `
  ${RESUME_BASE_QUERY}{
    profile,
    skills[]${SKILL_FIELDS},
    experience,
    projects[]${PROJECT_FIELDS},
    education,
    certifications,
    contacts,
    tools[]${SKILL_FIELDS},
    hobbies
  }
`;

export const skillQuery = `
  *[_type == "resume"][0].skills[_key == $key][0]
`;

export const projectQuery = `
  *[_type == "resume"][0].projects[_key == $key][0]
`;

export const toolQuery = `
  *[_type == "resume"][0].tools[_key == $key][0]
`;
