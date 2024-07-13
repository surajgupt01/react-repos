/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      width: {
        '96': '24rem', // 384px
        '104': '26rem', // Custom size example
        '112': '28rem', // Custom size example
        '120': '30rem', // Custom size example
      },
      height: {
        '96': '24rem', // 384px
        '104': '26rem', // Custom size example
        '112': '28rem', // Custom size example
        '120': '30rem', // Custom size example
      }


    },
  },
  plugins: [],
}

