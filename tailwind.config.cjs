/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "rgba(153, 0, 240, 1)",
        magenta: "#F900BF",
        pink: "#F900BF",
        blue: "#4700D8",
        white: "#FFFFFF",
        royalBlue: "#4169E1",
        grey: "#424242",
        whiteGrey: "#9E9E9E",
      },
      fontFamily: {
        righteous: ["Righteous", "cursive"],
        poppins: ["Poppins"]
      },
      screens: {
        max_sm: { max: "768px" },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};