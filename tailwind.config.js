/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"];
export const theme = {
  extend: {
    colors: {
      green: {
        600: '#21ad52', // default Tailwind green
        700: '#1c9344', // default Tailwind green
      },
      blue: {
        500: '#1076c9', // default Tailwind green
        700: '#0c5b9a', // default Tailwind green
      },

    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'], // This ensures Tailwind’s 'font-sans' uses Poppins
    },  
  },
};
export const plugins = [];
