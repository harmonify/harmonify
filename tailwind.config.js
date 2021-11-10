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
        'grabbing': 'grabbing',
      },
      fill: {
        black: colors.black,
        blue: colors.blue,
        red: colors.red,
        white: colors.white,
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
    extend: {},
  },
  plugins: [],
}
