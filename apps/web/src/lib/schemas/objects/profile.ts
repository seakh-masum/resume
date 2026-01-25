import { defineType, defineField } from "sanity";

export const profile = defineType({
  name: "profile",
  title: "Profile",
  type: "object",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "introduction", type: "text", rows: 4 }),
    defineField({ name: "summary", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
  ],
});
