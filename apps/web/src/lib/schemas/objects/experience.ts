import { defineField, defineType } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "object",
  fields: [
    defineField({ name: "company", type: "string" }),
    defineField({ name: "designation", type: "string" }),
    defineField({
      name: "joiningDate",
      type: "string",
      description: "YYYY-MM",
    }),
    defineField({
      name: "releaseDate",
      type: "string",
      description: "YYYY-MM or Present",
    }),
    defineField({
      name: "roles",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "link", type: "url" }),
  ],
});
