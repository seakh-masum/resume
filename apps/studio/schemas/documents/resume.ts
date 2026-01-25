import { defineType, defineField } from "sanity";

export default defineType({
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    defineField({ name: "profile", type: "profile" }),

    defineField({
      name: "contacts",
      type: "array",
      of: [{ type: "contact" }],
    }),

    defineField({
      name: "skills",
      type: "array",
      of: [{ type: "skill" }],
    }),

    defineField({
      name: "tools",
      type: "array",
      of: [{ type: "tool" }],
    }),

    defineField({
      name: "hobbies",
      type: "array",
      of: [{ type: "hobby" }],
    }),

    defineField({
      name: "experience",
      type: "array",
      of: [{ type: "experience" }],
    }),

    defineField({
      name: "projects",
      type: "array",
      of: [{ type: "project" }],
    }),

    defineField({
      name: "education",
      type: "array",
      of: [{ type: "education" }],
    }),
  ],
});
