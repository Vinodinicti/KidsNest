/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFD23F",
          sun: "#FFA800",
          sky: "#38B6FF",
          blue: "#1E88E5",
          coral: "#FF5E7E",
          mint: "#00E096",
          green: "#4CAF50",
          purple: "#9D4EDD",
          lavender: "#E0AAFF",
          cream: "#FFF9E6",
          dark: "#1E293B",
          card: "#FFFFFF",
        }
      },
      fontFamily: {
        comic: ['"Fredoka"', 'sans-serif', 'system-ui'],
        sans: ['"Quicksand"', '"Outfit"', 'sans-serif', 'system-ui'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-delayed': 'float 5s ease-in-out 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
