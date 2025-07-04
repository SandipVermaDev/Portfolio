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
        glowBar: {
          '0%': { opacity: 0.6 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.6 },
        },
        glow: {
          '0%, 100%': {
            textShadow: '0 0 10px #c800ff, 0 0 20px #c800ff',
          },
          '50%': {
            textShadow: '0 0 20px #c800ff, 0 0 40px #c800ff',
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
        orbitPulse: {
          '0%, 100%': {
            transform: 'rotate(0deg) scale(1)',
            boxShadow: '0 0 15px #00ffe7, 0 0 25px #6f00ff',
          },
          '50%': {
            transform: 'rotate(180deg) scale(1.05)',
            boxShadow: '0 0 25px #6f00ff, 0 0 35px #00ffe7',
          },
        },
      },
      animation: {
        glowBar: 'glowBar 1s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        'text-shimmer': 'shimmer 10s linear infinite',
        'border-glow': 'borderGlow 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 1.5s ease-in-out infinite',
        orbit: 'orbit 6s linear infinite',
        'orbit-glow': 'orbitPulse 6s linear infinite',
        'glow-gradient': 'glowGradient 5s ease-in-out infinite', // ✅ For navbar
      },
      backgroundSize: {
        '200': '200% 200%',
        '300': '300% 300%',
      },
    },
  },
  plugins: [],
}
