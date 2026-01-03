import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "techStack",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "link", type: "url" }),
    defineField({
      name: "startDate",
      type: "string",
      description: "YYYY-MM",
    }),
    defineField({
      name: "endDate",
      type: "string",
      description: "YYYY-MM or Present",
    }),
    defineField({
      name: "github",
      type: "url",
      description: "GitHub Repository URL",
    }),
    defineField({
      name: "members",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "role",
      type: "string",
      description: "Your role in the project",
    }),
    defineField({
      name: "responsibilities",
      type: "array",
      of: [{ type: "string" }],
      description: "Responsibilities you had in the project",
    }),
    defineField({
      name: "achievements",
      type: "array",
      of: [{ type: "string" }],
      description: "Achievements you made in the project",
    }),
    defineField({
      name: "tools",
      type: "array",
      of: [{ type: "string" }],
      description: "Tools used in the project",
    }),
    defineField({
      name: "sector",
      type: "string",
      description: "Sector of the project",
      options: {
        list: [
          { title: "Technology", value: "technology" },
          { title: "Healthcare", value: "healthcare" },
          { title: "Finance", value: "finance" },
          { title: "Education", value: "education" },
          { title: "Retail", value: "retail" },
          { title: "Entertainment", value: "entertainment" },
          { title: "eCommerce", value: "ecommerce" },
          { title: "Other", value: "other" },
        ],
      },
    }),
    defineField({
      name: "type",
      type: "string",
      description: "Type of the project",
      options: {
        list: [
          { title: "Personal", value: "personal" },
          { title: "Professional", value: "professional" },
        ],
      },
    }),
  ],
});
