import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "48px",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          red: "#E1201F",
          crimson: "#C82425",
          dark: "#C41C1B",
          accent: "#F04442",
        },
        surface: {
          black: "#000000",
          dark: "#0A0A0A",
          darkcard: "#141414",
          darkcardalt: "#1F1F1F",
          warm: "#F4F2EE",
          white: "#FFFFFF",
          borderdark: "#262626",
          borderlight: "#E5E5E5",
          borderwarm: "#E6E2DA",
        },
        text: {
          dark: "#0A0A0A",
          muted: "#5C5B57",
          gray: "#9C9C9C",
          lightgray: "#C4C4C4",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["Archivo", "sans-serif"],
        display: ["Archivo", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;

