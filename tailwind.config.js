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
        // === General Glow Effects ===
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
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        borderGlow: {
          '0%, 100%': {
            boxShadow: '0 0 10px #6f00ff, 0 0 20px #00ffe7',
          },
          '50%': {
            boxShadow: '0 0 20px #00ffe7, 0 0 30px #6f00ff',
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
        pulseGlow: {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 1 },
        },

        // === Orbiting / Rotating ===
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
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

        // === Hologram and Chat ===
        hologramGlow: {
          '0%, 100%': {
            color: '#00ffe7',
            textShadow: '0 0 10px #00ffe7, 0 0 20px #6f00ff',
          },
          '50%': {
            color: '#6f00ff',
            textShadow: '0 0 12px #6f00ff, 0 0 25px #00ffe7',
          },
        },
        holoBg: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blinkCaret: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#00ffe7' },
        },
        sendGlow: {
          '0%, 100%': {
            boxShadow: '0 0 6px #00ffe7, 0 0 12px #00ffe7',
          },
          '50%': {
            boxShadow: '0 0 12px #00ffe7, 0 0 24px #6f00ff',
          },
        },
        robotAura: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        

        // === Chat Message and Typing ===
        messageGlow: {
          '0%, 100%': {
            boxShadow: '0 0 12px #00ffe7, 0 0 24px #00ffe7',
          },
          '50%': {
            boxShadow: '0 0 16px #6f00ff, 0 0 28px #6f00ff',
          },
        },
        messageGlowRight: {
          '0%, 100%': {
            boxShadow: '0 0 12px #6f00ff, 0 0 24px #6f00ff',
          },
          '50%': {
            boxShadow: '0 0 16px #00ffe7, 0 0 28px #00ffe7',
          },
        },
        typingBubble: {
          '0%, 80%, 100%': { transform: 'scale(0.8)', opacity: 0.6 },
          '40%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      animation: {
        // General
        glowBar: 'glowBar 1s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        'text-shimmer': 'shimmer 10s linear infinite',
        'border-glow': 'borderGlow 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 1.5s ease-in-out infinite',
        'glow-gradient': 'glowGradient 5s ease-in-out infinite',

        // Orbit
        orbit: 'orbit 6s linear infinite',
        'orbit-glow': 'orbitPulse 6s linear infinite',

        // Chat & Hologram
        hologram: 'hologramGlow 2.5s ease-in-out infinite',
        'blink-caret': 'blinkCaret 1s step-end infinite',
        'send-glow': 'sendGlow 2s ease-in-out infinite',
        'holo-bg': 'holoBg 12s ease-in-out infinite',
        robotAura: 'robotAura 10s ease-in-out infinite',

        // Chat Messages
        'message-glow': 'messageGlow 3s ease-in-out infinite',
        'message-glow-right': 'messageGlowRight 3s ease-in-out infinite',
        'typing-bubble': 'typingBubble 1.2s infinite ease-in-out',
      },
      backgroundSize: {
        '200': '200% 200%',
        '300': '300% 300%',
      },
    },
  },
  plugins: [],
}
