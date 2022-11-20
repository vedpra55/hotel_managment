/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pageComponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainLight: "#64f7e1",
        mainDark: "#23aba7",
      },
      pop: ["Poppins", "sans-serif"],

      backgroundImage: {
        hero: "url('/images/hero.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
