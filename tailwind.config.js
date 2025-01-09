/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
 
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url('../assets/wave.svg')",
        'custom-image': "url('../assets/caroussel1.png')", 
        'custom-image': "url('../assets/caroussel2.png')", 

      },
    },
  },
  plugins: [],

}