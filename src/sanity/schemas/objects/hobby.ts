import { defineField, defineType } from "sanity";

export const hobby = defineType({
  name: "hobby",
  title: "Hobby",
  type: "object",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({
      name: "icon",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "color", type: "string" }),
  ],
});
