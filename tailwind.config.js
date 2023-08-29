/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mountains': "url('../public/assets/hero-bg.png')",
        'peak': "url('../public/assets/peak-bg.png')",
        'snow-peak': "url('../public/assets/snow-peak.png')",
       
      },
      fontFamily: {
        'Bebas': [ 'Bebas Neue'],
        'Oswald': ['Oswald', 'sans-serif']
      }
    },
  },
  plugins: [],
}