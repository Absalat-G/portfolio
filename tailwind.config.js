/** @type {import('tailwindcss').Config} */
module.exports = {
 
  
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
  
    extend:{
      fontFamily: {
        'cookie': ['Cookie']
      },
      backgroundImage: {
        "nature-light": "url('/public/img/background5.jpg')",
        "nature-color": "linear-gradient(144.11deg, #1DDFDF 13.74%, #46ACB3 90.91%);"
      },
    
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
    
  
  plugins: [],
}
