/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        pink: {
          light: "#be7699",
          second: "#d65e98",
          DEFAULT: "#ff49db",
          dark: "#a11056",
        },
      },
      fontFamily: {
        Vazirmatn1: ["Vazirmatn"],
      },

      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "992px",
        xl: "1440px",
      },
      textShadow: {
        stroke: "2px black",
        DEFAULT:
          "3px 3px 5px rgba(0, 4, 4, 0.5), 0px 4px 4px rgba(248, 249, 249, 0.5)",
      },
      translate: {
        "-50%": "-50%",
      },
    },
  },
  plugins: [],
};
