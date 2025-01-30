/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5733",
        primaryHover: "#E64E2E",
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".custom-range": {
          "-webkit-appearance": "none",
          appearance: "none",
          width: "100%",
          height: "4px",
          background: "#ff5733",
          outline: "none",
          "border-radius": "4px",
        },
        ".custom-range-thumb::-webkit-slider-thumb": {
          "-webkit-appearance": "none",
          width: "10px",
          height: "20px",
          "background-color": "#ff5733",
          "border-top-left-radius": "9999px",
          "border-bottom-left-radius": "9999px",
          cursor: "pointer",
        },
        ".custom-range-thumb::-moz-range-thumb": {
          width: "10px",
          height: "20px",
          "background-color": "#ff5733",
          "border-top-left-radius": "9999px",
          "border-bottom-left-radius": "9999px",
          cursor: "pointer",
        },
        ".custom-range-max-thumb::-webkit-slider-thumb": {
          "-webkit-appearance": "none",
          width: "10px",
          height: "20px",
          "background-color": "#ff5733",
          "border-top-right-radius": "9999px",
          "border-bottom-right-radius": "9999px",
          cursor: "pointer",
        },
        ".custom-range-max-thumb::-moz-range-thumb": {
          width: "10px",
          height: "20px",
          "background-color": "#ff5733",
          "border-top-right-radius": "9999px",
          "border-bottom-right-radius": "9999px",
          cursor: "pointer",
        },
      });
    },
  ],
};
