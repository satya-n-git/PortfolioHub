/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "rgba(8, 47, 73, 1)", // Use a hex code or other valid color value
      },
      animation: {
        typing: "typing 2s steps(30, end), blink-caret 0.75s step-end infinite",
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
