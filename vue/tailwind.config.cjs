/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,css,vue}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
