/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
 
  theme: {
    extend: {
      backgroundImage: {
        'custom-wave': "url('../assets/wave.svg')", 
      },
    },
  },
  plugins: [],

}