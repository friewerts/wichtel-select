/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'winter-night': '#0f172a', // Deep slate blue
        'winter-dark': '#020617', // Almost black
        'christmas-red': '#E11D48', // Modern Rose/Red
        'christmas-green': '#10B981', // Emerald
        'christmas-gold': '#F59E0B', // Amber
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        christmas: ['"Mountains of Christmas"', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'shine': 'shine 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'snow': 'snow 10s linear infinite',
      },
      keyframes: {
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        snow: {
          '0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        }
      },
      backgroundImage: {
        'winter-gradient': 'linear-gradient(to bottom right, #0f172a, #1e293b, #020617)',
      }
    },
  },
  plugins: [],
}
