/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    "./**/*.html",
    "./*.html",
    "./**/*.js",
    "./*.js",
    "./**/*.ts",
    "./*.ts",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
