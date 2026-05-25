/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF8C42',
        accent: '#DC143C',
        light: '#FFF8F3',
        dark: '#2C2C2C',
        beige: '#F5EFE7',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  safelist: [
    'font-poppins',
    'font-inter',
    'text-dark',
    'bg-light',
    'bg-primary',
    'text-primary',
    'text-white',
    'bg-white',
  ],
  plugins: [],
}


