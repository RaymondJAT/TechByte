/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair"],
      },
    },
    screens: {
      xs: "480px",
      sm: "620px",
      md: "768px",
      lg: "1060px",
      xl: "1200px",
      "2xl" : "1700px",
    },
  },
  plugins: [],
};
