/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'radial-custom': 'radial-gradient(30.64% 32.66% at 47.77% 66.92%, #FFF280 0%, #FFC700 100%)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        cheeseburger: ['CHEESEBURGA', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

