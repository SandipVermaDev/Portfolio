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
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 10px #c800ff, 0 0 20px #c800ff' },
          '50%': { textShadow: '0 0 20px #c800ff, 0 0 40px #c800ff' },
        },
        glowGradient: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
        glowGradient: 'glowGradient 3s ease-in-out infinite',
      },
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  plugins: [],
}
