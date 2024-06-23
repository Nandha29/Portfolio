/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "theme-bg-light": "#f9fafb",
        "theme-bg-dark": "#121212",
        "theme-text-light": "#121212",
        "theme-text-dark": "#f9fafb",
        "theme-border-light": "#e4e4e7",
        "theme-border-dark": "#333",
      },
      fontSize: {
        mainHeading: "2.5rem",
        subHeading: "1.5rem",
        para: "1rem",
        small: "0.8rem",
        button: "1rem",
      },
    },
  },
  plugins: [],
};
