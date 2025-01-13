/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5733",
        primaryDim: "#8C301C",
        primary3: "#6B2515",
        primary4: "#B53E24",
        bg: "#1C1B29",
        bg2: "#181724",
        grey: "#979797",
        grey2: "#B9B9B9",
        yellow: "#FFCC00",
        violet: "#452154",
        violetLight: "#7D3C98",
      },
      fontFamily: {
        vazirmatn: ["Vazirmatn"],
      },
    },
    safelist: ["text-primary"],
  },
  plugins: [],
};
