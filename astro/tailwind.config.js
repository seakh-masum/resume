/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  // darkMode: "class",
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant(
        "mobile-only",
        "@media screen and (max-width: theme('screens.sm'))"
      ); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
    }),
  ],
};
