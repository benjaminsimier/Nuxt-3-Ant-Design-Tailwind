const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    extend: {
      // TODO: import font
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        secondary: '#E6EAF7',
        firefly: '#052862', // Dark blue
        athens: '#7988A2', // Light Grey
        pacific: '#51689B', // Light blue
        primary: '#194096', // Blue
        oxford: '#FBFBFF', // background
        manatee: '#A09FAF',
        // nevada: '#5E6568', // Grey
        // swamp: '#33444E', // Dark Grey
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
