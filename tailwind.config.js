/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,tsx,ts,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #ffffff 0%, #e4e4e7 40%, #e4e4e7 60%, #ffffff 100%)',
      },
      colors:{
        'black-custom':'#18181B'
      }
    },
  },
  plugins: [require("tailwindcss-font-inter")],
};

