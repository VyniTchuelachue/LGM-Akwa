/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        red: {
          DEFAULT: "#C8102E",
          dark: "#8F0E22",
          light: "#E23B54",
        },
        cream: {
          DEFAULT: "#FBF7EF",
          dark: "#F0E6D2",
        },
        pink: {
          DEFAULT: "#F9BDCC",
          dark: "#F2A0B5",
        },
        ink: "#201512",
      },
      fontFamily: {
        script: ["'Dancing Script'", "cursive"],
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Poppins'", "sans-serif"],
      },
      backgroundImage: {
        "red-gradient": "linear-gradient(135deg, #8F0E22 0%, #C8102E 55%, #E23B54 100%)",
        "cream-gradient": "linear-gradient(135deg, #FFFFFF 0%, #FBF7EF 50%, #F0E6D2 100%)",
      },
      boxShadow: {
        red: "0 8px 30px -8px rgba(200, 16, 46, 0.45)",
        soft: "0 8px 30px -8px rgba(32, 21, 18, 0.25)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
