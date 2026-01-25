import resume from "./documents/resume";

import { profile } from "./objects/profile";
import { contact } from "./objects/contact";
import { skill } from "./objects/skill";
import { tool } from "./objects/tool";
import { hobby } from "./objects/hobby";
import { experience } from "./objects/experience";
import { project } from "./objects/project";
import { education } from "./objects/education";

import { type SchemaTypeDefinition } from "sanity";
// import resume from "./resume";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    resume,
    profile,
    contact,
    skill,
    tool,
    hobby,
    experience,
    project,
    education,
  ],
};
