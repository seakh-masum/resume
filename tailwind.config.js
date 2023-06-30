/** @type {import('tailwindcss').Config} */

module.exports = {
  // darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/App.js",
  ],
  theme: {
    extend: {
      width: {
        dialog: '600px'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'dancing_script': ['Dancing Script', 'cursive']
      },
      aspectRatio: {
        'third_one': '3 / 1',
      },
    },
  },
  plugins: [],
}

