/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Fredoka One", "cursive"],
        paragraph: ["Nunito", "sans-serif"],
        button: ["Montserrat", "sans-serif"],
        display: ['Oswald', 'sans-serif'],
        cursive: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        pink: {
          50: "#ffe5ec",
          100: "#ffcce0",
          500: "#ec4899",
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};