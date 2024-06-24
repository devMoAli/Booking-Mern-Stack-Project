/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js, ts, jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        indigo: {
          50: "#e0f1ff",
          100: "#b3d9ff",
          200: "#80bfff",
          300: "#4da6ff",
          400: "#1a8cff",
          500: "#0073e6",
          600: "#0057b8",
          700: "#004195",
          800: "#002b73",
          900: "#0057b8",
        },
      },
    },

    container: {
      padding: {
        md: "10rem",
      },
    },
  },
  plugins: [],
};