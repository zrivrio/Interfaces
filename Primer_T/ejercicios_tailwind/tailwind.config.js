
/** @type {import('tailwindcss').Config} */ 
module.exports = {  
  content: ["./webs/**/*.{html,js}"],  /* webs es una carpeta en el nivel de tailwind.config.js */  
  theme: {    
    extend: {    
      colors:{
      'azul-claro':'#243cff',
      'naranja':'#fdac72'
    },
    spacing:{
      '41':'800px',
    },
    width:{
      '39':'430px',
    },
    height:{
      '39':'333px',
    },
    screens:{
      'tablet':'900px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },  
  },  
  plugins: [], 
}