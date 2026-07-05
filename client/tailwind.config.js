/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: {
          primary: "#16121E",
          secondary: "#251E33",
        },
        plum: {
          muted: "#251E33",
        },
        offwhite: "#EBE7F5",
        girly: {
          pink: "#E295B5",
          lavender: "#B39DDB",
        },
      },
      boxShadow: {
        "pink-glow": "0 0 20px 2px rgba(226, 149, 181, 0.3)",
        "lavender-glow": "0 0 20px 2px rgba(179, 157, 219, 0.3)",
        "premium-card": "0 8px 30px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: 0.2, transform: "scale(1)" },
          "50%": { opacity: 0.4, transform: "scale(1.05)" },
        }
      }
    },
  },
  plugins: [],
}
