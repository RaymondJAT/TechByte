/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "1rem",
          "2xl": "6rem",
        },
      },
    },
    screens: {
      xs: "480px",
      sm: "620px",
      md: "768px",
      lg: "1060px",
      xl: "1200px",
      "2xl": "1700px",
    },
  },
  plugins: [],
};
