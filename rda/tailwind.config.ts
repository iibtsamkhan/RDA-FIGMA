import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        background: "black",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "black",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "black",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "black",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "black",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "black",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "black",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "black",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      marquee: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(calc(-100% - var(--gap)))" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  
} satisfies Config

export default config