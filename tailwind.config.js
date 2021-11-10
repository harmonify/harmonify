const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
      cursor: {
        'grab': 'grab',
      },
      fill: {
        black: colors.black,
        blue: colors.blue,
        red: colors.red,
        white: colors.white,
        gray: colors.coolGray,
      },
      fontFamily: {
        sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
      },
      height: {
        '124': '31rem',
      }
    },
  },
  variants: {
    extend: {
      brightness: ['hover', 'focus'],
      filter: ['hover', 'focus'],
    },
  },
  plugins: [],
}
