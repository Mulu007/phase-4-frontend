/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '1/4': '25%',
        full: '100%',
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}