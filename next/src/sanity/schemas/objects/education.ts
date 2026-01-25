import { defineField, defineType } from "sanity";

export const education = defineType({
  name: "education",
  title: "Education",
  type: "object",
  fields: [
    defineField({ name: "degree", type: "string" }),
    defineField({ name: "institute", type: "string" }),
    defineField({ name: "stream", type: "string" }),
    defineField({
      name: "startYear",
      type: "string",
      description: "YYYY",
    }),
    defineField({
      name: "endYear",
      type: "string",
      description: "YYYY or Present",
    }),
    defineField({ name: "marks", type: "string" }),
  ],
});
