/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // ...other colors
      },
      borderRadius: {
        // ...other borderRadius
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "PopOut": { // Changed "fade-in" to "fadeIn"
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
          
        },
        "fadeIn": { // Changed "fade-in" to "fadeIn"
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fadeOut": { // Changed "fade-out" to "fadeOut"
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "marquee": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-50%, 0)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'PopOut-1': 'PopOut 2s ease-in-out 1s  1',
        'PopOut-2': 'PopOut 2s ease-in-out 2s 1',
        'PopOut-3': 'PopOut 2s ease-in-out 3s 1',
        'PopOut-4': 'PopOut 2s ease-in-out 4s  1',
        'PopOut-5': 'PopOut 2s ease-in-out 5s 1',
        'PopOut-6': 'PopOut 2s ease-in-out 6s 1',
        'fadeIn': 'fadeIn 2s ease-in forwards',
        'fadeOut': 'fadeOut 2s ease-in forwards',
        'marquee': 'marquee 10s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}