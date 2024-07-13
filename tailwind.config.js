/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "rgba(8, 47, 73, 1)",
        secondary: "rgba(15, 118, 182, 1)",
        tertiary: "rgba(100, 116, 139, 1)",
        primary_bg: "rgba(17, 24, 39, 1)",
        secondary_bg: "rgb(255 255 255, 1)",
        tertiary_bg: "rgba(240, 249, 255, 1)",
      },
      animation: {
        typing: "typing 3s steps(30, end), blink-caret 0.75s step-end infinite",
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "blink-caret": {
          "0%": { borderColor: "transparent" },
          "100%": { borderColor: "black" },
        },
      },
    },
  },
  plugins: [],
};
