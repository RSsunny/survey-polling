/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");
export default module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        cinzel: "'Cinzel', serif",
      },
    },
    colors: {
      primary_Colors: "#DC0909",
      white: "#ffffff",
      black: "#000000",

      transparent: "transparent",
      current: "currentColor",

      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: "#04F000",
    },
  },
  plugins: [require("daisyui")],
});
