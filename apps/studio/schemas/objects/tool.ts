import { defineField, defineType } from "sanity";

export const tool = defineType({
  name: "tool",
  title: "Tool",
  type: "object",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({
      name: "level",
      type: "number",
      description: "0 - 100",
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: "icon",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "color", type: "string" }),
    defineField({
      name: "experience",
      type: "number",
      description: "Years of experience",
    }),
    defineField({ name: "features", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "link",
      type: "url",
      description: "Link to the tools",
    }),
    defineField({ name: "projects", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "description", type: "string" }),
  ],
});
