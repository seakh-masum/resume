import { defineType, defineField } from "sanity";

export const skill = defineType({
  name: "skill",
  title: "Skill",
  type: "object",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({
      name: "level",
      type: "number",
      description: "0 - 100",
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({ name: "icon", type: "image", options: { hotspot: true } }),
    defineField({ name: "color", type: "string" }),
    defineField({
      name: "experience",
      type: "number",
      description: "Years of experience",
    }),
    defineField({ name: "features", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "link", type: "url" }),
    defineField({ name: "projects", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "description", type: "string" }),
  ],
});
