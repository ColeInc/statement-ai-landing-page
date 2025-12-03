import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        teal: {
          DEFAULT: "#BFE2E4",
          50: "rgba(191, 226, 228, 0.05)",
          100: "rgba(191, 226, 228, 0.1)",
          150: "rgba(191, 226, 228, 0.15)",
          200: "rgba(191, 226, 228, 0.2)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(191, 226, 228, 0.15)",
        "glow-lg": "0 0 30px rgba(191, 226, 228, 0.2)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "gradient-flow": {
          "0%, 100%": {
            transform: "rotate(0deg) scale(1)",
            opacity: "0.9",
          },
          "33%": {
            transform: "rotate(120deg) scale(1.1)",
            opacity: "1",
          },
          "66%": {
            transform: "rotate(240deg) scale(0.95)",
            opacity: "0.85",
          },
        },
        "gradient-pulse": {
          "0%, 100%": {
            transform: "scale(1) rotate(0deg)",
            opacity: "0.6",
          },
          "50%": {
            transform: "scale(1.15) rotate(180deg)",
            opacity: "0.8",
          },
        },
        blob: {
          "0%, 100%": {
            transform: "translate(0px, 0px) scale(1)",
            opacity: "0.8",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
            opacity: "1",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
            opacity: "0.7",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "gradient-flow": "gradient-flow 8s ease-in-out infinite",
        "gradient-pulse": "gradient-pulse 6s ease-in-out infinite",
        blob: "blob 12s ease-in-out infinite",
      },
      animationDelay: {
        "2000": "2s",
        "4000": "4s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
