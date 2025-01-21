
/** @type {import('tailwindcss').Config} */ 
module.exports = {  
  content: ["./webs/**/*.{html,js}"],  /* webs es una carpeta en el nivel de tailwind.config.js */  
  theme: {    
    extend: {    
      colors:{
        azulado:'#1f64e5',
        morado:'#712c76',
      },
      spacing:{
        72:'18rem',
        84:'21rem',
        96:'24rem',
      },
      screens:{
        pm:'500px',
      },
  },  
  },  
  plugins: [], 
}