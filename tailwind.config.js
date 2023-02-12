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
        "nature-light": "url('/public/img/background5.jpg')"
        
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
