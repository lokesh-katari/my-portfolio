/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       textprim:'#F4F1DE',
       textsecond:'#E07A5F',
       cardbg:'#4A4A4A',
       cardtextprim:'#F4F1DE',
       cardtextsec:'#E07A5F',
       cardhover:'#585858',
       texthover:'#81B29A'
      },
    },
  },
  plugins: [],
}