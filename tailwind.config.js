/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        chocolate: {
          800: '#4B3D3C',
          600: '#7B5B54',
          700: '#4E3B31',
        },
        brown: {
          700: '#4E3B31',
        },
      },
    },
  },
  plugins: [],
}

