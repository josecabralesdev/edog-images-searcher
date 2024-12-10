/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myBlue: '#c3c7f3',
        myViolet: '#c8a8e9',
        myPink: '#e3aadd',
        myOrange: '#f5bcba',
        myYellow: '#f3dcdc',
        myWhite: '#f4e7fb'
      }
    },
  },
  plugins: [],
}