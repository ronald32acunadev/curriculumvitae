/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Segoe UI"',
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        navy: {
          950: '#070d1e',
          900: '#0b132b',
          800: '#1c2541',
          700: '#3a506b',
        },
        brand: {
          50: '#f0f6ff',
          100: '#e0eeff',
          200: '#b9dcff',
          300: '#7cbdff',
          400: '#3395ff',
          500: '#0078d4',
          600: '#005a9e',
          700: '#004578',
          800: '#00335a',
          900: '#002440',
          950: '#001628',
        },
        accent: {
          300: '#4cc2f1',
          400: '#28a9e0',
          500: '#0082be',
          600: '#006798',
          950: '#002133',
        }
      },
    },
  },
  plugins: [],
}
