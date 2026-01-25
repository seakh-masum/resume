import { defineField, defineType } from "sanity";

export const contact = defineType({
  name: "contact",
  title: "Contact",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string" }),
    defineField({ name: "value", type: "string" }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "url",
      type: "string",
      description: "Optional (GitHub, LinkedIn, etc.)",
    }),
  ],
});
