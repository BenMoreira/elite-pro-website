/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red' : {
          100 : '#DA0106',
          200 : '#B80102',
          300 : '#7B0101',
        },
        'black' : {
          100 : '#000000',
          200 : '#282828',
          300 : '#404040',
        },
        'beige' : {
          100 : '#d9d9d9'
        }
      }
    },
  },
  plugins: [],
}

