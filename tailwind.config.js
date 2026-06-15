/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#A25C29',
        secondary: '#A4673B',
        accent: '#AD7C5C',
        light: '#F8FFFE',
        dark: '#1F2937',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}