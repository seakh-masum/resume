import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  plugins: [
    plugin(({ addVariant, theme }) => {
      addVariant(
        "mobile-only",
        `@media screen and (max-width: ${theme("screens.sm")})`
      );
    }),
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        modalIn: {
          from: {
            transform: "translateY(100%) scale(0.95)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0) scale(1)",
            opacity: 1,
          },
        },
        modalOut: {
          from: {
            transform: "translateY(0) scale(1)",
            opacity: 1,
          },
          to: {
            transform: "translateY(100%) scale(0.95)",
            opacity: 0,
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.25s ease-out forwards",
        "fade-out": "fadeOut 0.2s ease-in forwards",
        "modal-in": "modalIn 0.35s ease-out forwards",
        "modal-out": "modalOut 0.25s ease-in forwards",
      },
    },
  },
};
