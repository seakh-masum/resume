export const resumeQuery = `
  *[_type == "resume"][0]{
    profile,
    skills,
    experience,
    projects,
    education,
    contacts,
    tools,
    hobbies
  }
`;
