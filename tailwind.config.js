module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        back: "url('/images/back.jpg')",
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}
