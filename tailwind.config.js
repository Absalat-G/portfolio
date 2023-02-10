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
        "nature-light": "url('/public/img/background1.jpg')",
        "nature-dark": "url('/nature-dark.jpg')",
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
