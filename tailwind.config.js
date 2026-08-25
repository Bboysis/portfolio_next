/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#071A33",
          deep: "#050f1f",
          light: "#0b2547",
        },
        slate: {
          panel: "#1E293B",
          line: "#2A3A50",
        },
        accent: {
          DEFAULT: "#3ECFC0",
          bright: "#4FFFE0",
          dim: "#2A9D91",
        },
        paper: "#F8FAFC",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(62,207,192,0.12), transparent 40%), radial-gradient(circle at 80% 60%, rgba(62,207,192,0.08), transparent 45%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
