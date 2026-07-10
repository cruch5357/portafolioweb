/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#08090d",
          2: "#0c0e14",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.03)",
          2: "rgba(255,255,255,0.05)",
        },
        stroke: {
          DEFAULT: "rgba(255,255,255,0.08)",
          2: "rgba(255,255,255,0.14)",
        },
        ink: {
          DEFAULT: "#ECEDEF",
          2: "#9BA1AD",
          3: "#6A7080",
        },
        emerald: {
          brand: "#34D399",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grad-ai": "linear-gradient(120deg,#5B8CFF 0%,#8B5CF6 55%,#C084FC 100%)",
        "grad-data": "linear-gradient(120deg,#10B981 0%,#22D3EE 100%)",
        "grad-btn": "linear-gradient(120deg,#7BA2FF,#A78BFA)",
      },
      keyframes: {
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(52,211,153,0.55)" },
          "70%": { boxShadow: "0 0 0 9px rgba(52,211,153,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(52,211,153,0)" },
        },
      },
      animation: {
        pulseRing: "pulseRing 2s infinite",
      },
      borderRadius: {
        xl2: "18px",
      },
    },
  },
  plugins: [],
};
