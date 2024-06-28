/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      lineHeight: {
        base: "1.5",
        tall: "1.8",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      fontSize: {
        "5xl": ["3rem", "3.875rem"],
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
      center: true,
      padding: "2rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".underline-offset-4": {
          "text-underline-offset": "4px",
        },
        ".underline-offset-8": {
          "text-underline-offset": "8px",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
