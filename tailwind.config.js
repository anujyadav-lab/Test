/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#D8CEBE',
        customColor1:'#B4735B'
      },
    },
  },
  plugins: [],
}