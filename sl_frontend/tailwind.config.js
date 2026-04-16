/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
            primary: "#6af425",
            "background-light": "#f6f8f5",
            "background-dark": "#162210",
      },
      fontFamily: {
        'roboto': ['roboto', 'sans-serif'],
        'poppins': ['poppins', 'sans-serif']
      },
      display: ["Manrope", "sans-serif"],
    },
    screens: {
      'sm': '310px',
      'md': '600px',
      'lg': '900px',
    }
  },
  plugins: [],
  darkMode: 'class',
}
