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
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        teaGreen: '#C5EFCB',
        richBlack: '#020402',
        smoke: '#758173',
        laurelGreen: '#A9C5A0',
        pastelGray: '#C6DEC6',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
