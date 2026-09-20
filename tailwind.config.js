/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
      primary:"#FFE29CFF",
      secondary:"#55C593FF",
      ColorForText:"#42595FFF"
    },
    },
    
    container: {
      center: true,
      padding:{
        Default:"20px",
        md:"40px",
      },
    },
  }, 
  plugins: [],
};

