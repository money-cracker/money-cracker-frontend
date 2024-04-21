/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#FFB800',
        secondary: '#6100FF',
      },
    },
  },
  plugins: [],
}
