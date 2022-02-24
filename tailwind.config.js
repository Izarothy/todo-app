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
      colors: {
        primary: '#101820FF',
        secondary: '#F2AA4CFF'
      }
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
