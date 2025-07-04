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
          '0%, 100%': {
            textShadow: '0 0 10px #c800ff, 0 0 20px #c800ff',
          },
          '50%': {
            textShadow: '0 0 20px #c800ff, 0 0 40px #c800ff',
          },
        },
        glowGradient: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        borderGlow: {
          '0%, 100%': {
            boxShadow: '0 0 10px #6f00ff, 0 0 20px #00ffe7',
          },
          '50%': {
            boxShadow: '0 0 20px #00ffe7, 0 0 30px #6f00ff',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
        pulseGlow: {
          '0%, 100%': {
            opacity: 0.7,
          },
          '50%': {
            opacity: 1,
          },
        },
        orbit: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite',
        'text-shimmer': 'shimmer 4s linear infinite',
        'border-glow': 'borderGlow 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 1.5s ease-in-out infinite',
        'orbit': 'orbit 6s linear infinite',
      },
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  plugins: [],
}
