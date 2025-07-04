/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Orbitron", "sans-serif"],
      },
      colors: {
        electric: '#6f00ff',
        neon: '#00ffe7',
      },
    },
  },
  plugins: [],
}