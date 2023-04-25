/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libreBold: ["var(--font_libre)"],
        libre: ["var(--font_libre_thin)"],
      },
      colors: {
        base: "#3865C7",
        nav: "#16367A",
      },
    },
  },
  plugins: [],
};
