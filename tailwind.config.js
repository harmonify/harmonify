const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
      },
      colors: {
        amber: colors.amber,
        "blue-gray": colors.slate,
        cyan: colors.cyan,
        orange: colors.orange,
        "warm-gray": colors.stone,
        "true-gray": colors.neutral,
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
      cursor: {
        grab: "grab",
      },
      fill: {
        black: colors.black,
        blue: colors.blue,
        red: colors.red,
        white: colors.white,
        orange: colors.orange,
      },
      fontFamily: {
        sans: ["'Segoe UI'", ...defaultTheme.fontFamily.sans],
        baloo: ["'Baloo 2'", "cursive", ...defaultTheme.fontFamily.serif],
        comfortaa: ["'Comfortaa'", "cursive", ...defaultTheme.fontFamily.serif],
      },
      fontWeight: {
        550: "550",
      },
      height: {
        124: "31rem",
      },
      minHeight: {
        "80vh": "80vh",
      },
      space: {
        18: "4.5rem",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
      fill: ["hover", "group-hover", "focus", "group-focus"],
      opacity: ["dark", "group-hover", "group-focus"],
      rotate: ["group-hover"],
      textColor: ["dark", "group-hover", "group-focus"],
      visibility: ["group-hover", "group-focus"],
    },
  },
  plugins: [],
};
