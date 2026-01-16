export const resumeQuery = `
  *[_type == "resume"][0]{
    profile,
    skills[]{
      _key,
      name,
      description,
      color,
      icon,
      level
    },
    experience,
    projects[]{
      _key,
      title,
      description
    },
    education,
    contacts,
    tools[]{
      _key,
      name,
      description,
      icon,
      link,
      color,
      level
    },
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
