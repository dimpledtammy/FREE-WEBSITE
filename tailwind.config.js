/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
    'nunito': ['nunito', 'sans-serif'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
  
  listStyleImage: {
    checkmark: 'url("/img/checkmark.png")',
  },
}