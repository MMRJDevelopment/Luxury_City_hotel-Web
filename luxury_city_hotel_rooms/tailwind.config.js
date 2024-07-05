/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "64px",
    },
    extend: {
      fontFamily: {
        robo: ["Roboto", "sans-serif"],
        ango: ["Anglecia Pro Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
