/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
    'montserrat': ['montserrat', 'sans-serif'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
  
  listStyleImage: {
    checkmark: 'url("/img/checkmark.png")',
  },
}