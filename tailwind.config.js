/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: " #28B30E", 
          lightprimary:"#D6FFD0",
        },
        fontFamily:{
          dmsans:['"DM Sans"',"sans-serif"]
        }
      },
    },
    plugins: [],
  };