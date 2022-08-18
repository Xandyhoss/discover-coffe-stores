/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        enter: {
          "0%": { transform: "translateY(-10px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
      },
      animation: {
        enter: "enter 0.5s ease-in-out",
      },
      backgroundImage: {
        coffee: "url(/img/background.png)",
      },
      fontFamily: {
        roboto: "Roboto, serif",
      },
    },
  },
  plugins: [],
};
