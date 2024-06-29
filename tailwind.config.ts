import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode with a class
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f7fafc", // Light mode primary color
          dark: "#1a202c", // Dark mode primary color
        },
        secondary: {
          light: "#edf2f7", // Light mode secondary color
          dark: "#2d3748", // Dark mode secondary color
        },
        accent: {
          light: "#38b2ac", // Light mode accent color
          dark: "#38b2ac", // Dark mode accent color (same for both modes)
        },
        background: {
          light: "#ffffff", // Light mode background
          dark: "#121212", // Dark mode background
        },
        text: {
          light: "#1a202c", // Light mode text color
          dark: "#f7fafc", // Dark mode text color
        },
      },
      spacing: {
        18: "4.5rem", // Example of custom spacing using rem
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [],
};

export default config;
