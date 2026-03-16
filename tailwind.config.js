/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8b5e3c",
        accent: {
          DEFAULT: "#e27036", // Terracotta
          peach: "#d97706"    // Amber
        },
        background: {
          light: "#ffffff",
          alt: "#fffcf5",     // Cream
          dark: "#1a1614"     // Charcoal
        },
        soft: {
          green: "#e8f5e9",
          cream: "#fff9f2"
        },
        text: {
          main: "#1e293b",    // slate-800
          muted: "#64748b"    // slate-500
        }
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        sans: ["Nunito", "sans-serif"],
        comfortaa: ["Comfortaa", "cursive"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        "4xl": "3rem",
        "full": "9999px"
      },
      boxShadow: {
        "card": "0 10px 25px -5px rgba(139, 94, 60, 0.1)"
      }
    },
  },
  plugins: [],
}
