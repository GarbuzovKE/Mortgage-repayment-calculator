/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },

    extend: {
      colors: {
        lime: "hsl(61, 70%, 52%)",
        redError: "hsl(4, 69%, 50%)",
        bgBody: "#E3F4FC",
        bgFormDet: "#e3f3fdc6",
      },
    },
  },
  plugins: [],
};
