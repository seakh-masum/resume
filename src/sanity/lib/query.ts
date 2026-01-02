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

export const skillQuery = `
  *[_type == "resume"][0].skills[_key == $key][0]
`;

export const projectQuery = `
  *[_type == "resume"][0].projects[_key == $key][0]
`;

export const toolQuery = `
  *[_type == "resume"][0].tools[_key == $key][0]
`;
