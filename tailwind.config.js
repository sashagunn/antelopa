/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FDFBF7', // Very light, warm cream (main background)
          alt: '#F8F5EE', // Slightly off-white for sections
        },
        primary: {
          DEFAULT: '#6B7A6A', // Muted sage/olive green (like original but warmer)
          dark: '#4A4138', // Deep warm charcoal/brown instead of harsh blue
          light: '#EBE9DD', // Very soft sage/greige tint
        },
        accent: {
          terracotta: '#D17C43', // The distinctive burnt orange/ochre from reference
          peach: '#F4D4BA', // Soft peach/tan for subtle badge backgrounds
        },
        text: {
          main: '#3D3D3D', // Soft off-black
          muted: '#73706A', // Warm gray
          terracotta: '#CC7A42', // Same as accent but explicitly for text
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem', // For the extreme pill-shaped top/bottoms seen in reference
        'button': '9999px',
      }
    },
  },
  plugins: [],
}
