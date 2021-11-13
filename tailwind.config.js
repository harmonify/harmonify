const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        3: '3px',
      },
      colors: {
        cyan: colors.cyan,
        orange: colors.orange,
        "warm-gray": colors.warmGray,
      },
      cursor: {
        'grab': 'grab',
      },
      fill: {
        blue: colors.blue,
        red: colors.red,
        white: colors.white,
        orange: colors.orange,
      },
      fontFamily: {
        sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
      },
      height: {
        '124': '31rem',
      },
      minHeight: {
        '80vh': '80vh',
      },
      space: {
        '18': '4.5rem',
      }
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'group-hover', 'focus'],
      rotate: ['group-hover'],
    },
  },
  plugins: [],
}
