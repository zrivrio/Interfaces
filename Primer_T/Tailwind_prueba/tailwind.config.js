
/** @type {import('tailwindcss').Config} */ 
module.exports = {  
  content: ["./webs/**/*.{html,js}"],  /* webs es una carpeta en el nivel de tailwind.config.js */  
  theme: {    
    extend: {    
      colors:{
        primary:'#1E40AF',
        secundary:'#F59E0B',
        accent:'#F87171',
        light:'#F3F4F6',
      },
      spacing:{
        72:'18rem',
        84:'21rem',
        96:'24rem',
      },
      screens:{
        tablet:'900px',
      },
  },  
  },  
  plugins: [], 
}