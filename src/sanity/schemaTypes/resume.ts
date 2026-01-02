import { defineType, defineField } from "sanity";

export default defineType({
  name: "resume",
  title: "Resume",
  type: "document",

  fields: [
    // -------------------------
    // PROFILE
    // -------------------------
    defineField({
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
        defineField({
          name: "introduction",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "summary",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),

    // -------------------------
    // CONTACTS
    // -------------------------
    defineField({
      name: "contacts",
      title: "Contacts",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "value", type: "string" },
            {
              name: "url",
              type: "string",
              description: "Optional (GitHub, LinkedIn, etc.)",
            },
            {
              name: "image",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),

    // -------------------------
    // SKILLS
    // -------------------------
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string" },
            {
              name: "level",
              type: "number",
              description: "0 - 100",
              validation: (Rule) => Rule.min(0).max(100),
            },
            {
              name: "icon",
              type: "image",
              options: { hotspot: true },
            },
            { name: "color", type: "string" },
            {
              name: "experience",
              type: "number",
              description: "Years of experience",
            },
            { name: "features", type: "array", of: [{ type: "string" }] },
            { name: "link", type: "url", description: "Link to the skill" },
            { name: "projects", type: "array", of: [{ type: "string" }] },
            { name: "description", type: "string" },
          ],
        },
      ],
    }),

    // -------------------------
    // TOOLS
    // -------------------------
    defineField({
      name: "tools",
      title: "Tools",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string" },
            {
              name: "level",
              type: "number",
              description: "0 - 100",
              validation: (Rule) => Rule.min(0).max(100),
            },
            {
              name: "icon",
              type: "image",
              options: { hotspot: true },
            },
            { name: "color", type: "string" },
            {
              name: "experience",
              type: "number",
              description: "Years of experience",
            },
            { name: "features", type: "array", of: [{ type: "string" }] },
            { name: "link", type: "url", description: "Link to the tools" },
            { name: "projects", type: "array", of: [{ type: "string" }] },
            { name: "description", type: "string" },
          ],
        },
      ],
    }),

    // -------------------------
    // Hobbies
    // -------------------------
    defineField({
      name: "hobbies",
      title: "Hobbies",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string" },
            {
              name: "icon",
              type: "image",
              options: { hotspot: true },
            },
            { name: "color", type: "string" },
          ],
        },
      ],
    }),

    // -------------------------
    // EXPERIENCE
    // -------------------------
    defineField({
      name: "experience",
      title: "Experience",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "company", type: "string" },
            { name: "designation", type: "string" },
            {
              name: "joiningDate",
              type: "string",
              description: "YYYY-MM",
            },
            {
              name: "releaseDate",
              type: "string",
              description: "YYYY-MM or Present",
            },
            {
              name: "roles",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),

    // -------------------------
    // PROJECTS
    // -------------------------
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            {
              name: "techStack",
              type: "array",
              of: [{ type: "string" }],
            },
            { name: "description", type: "text", rows: 3 },
            { name: "link", type: "url" },
            {
              name: "startDate",
              type: "string",
              description: "YYYY-MM",
            },
            {
              name: "endDate",
              type: "string",
              description: "YYYY-MM or Present",
            },
            {
              name: "github",
              type: "url",
              description: "GitHub Repository URL",
            },
            {
              name: "members",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "role",
              type: "string",
              description: "Your role in the project",
            },
            {
              name: "responsibilities",
              type: "array",
              of: [{ type: "string" }],
              description: "Responsibilities you had in the project",
            },
            {
              name: "achievements",
              type: "array",
              of: [{ type: "string" }],
              description: "Achievements you made in the project",
            },
            {
              name: "tools",
              type: "array",
              of: [{ type: "string" }],
              description: "Tools used in the project",
            },
            {
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
            },
            {
              name: "type",
              type: "string",
              description: "Type of the project",
              options: {
                list: [
                  { title: "Personal", value: "personal" },
                  { title: "Professional", value: "professional" },
                ],
              },
            },
          ],
        },
      ],
    }),

    // -------------------------
    // EDUCATION
    // -------------------------
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "degree", type: "string" },
            { name: "institute", type: "string" },
            { name: "stream", type: "string" },
            { name: "marks", type: "string" },
            {
              name: "startYear",
              type: "string",
              description: "YYYY",
            },
            {
              name: "endYear",
              type: "string",
              description: "YYYY or Present",
            },
          ],
        },
      ],
    }),
  ],
});
